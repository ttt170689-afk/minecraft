/**
 * Voxel world with chunked mesh generation and simple terrain.
 */

const CHUNK_SIZE = 16;
const WORLD_HEIGHT = 96;
const SEA_LEVEL = 42;
/** Approximate world radius in blocks (soft edge) */
const WORLD_RADIUS = 2400;

// Simple value noise
class Noise {
  constructor(seed = 12345) {
    this.seed = seed;
  }

  hash(x, z) {
    let h = this.seed + x * 374761393 + z * 668265263;
    h = (h ^ (h >> 13)) * 1274126177;
    return ((h ^ (h >> 16)) >>> 0) / 4294967296;
  }

  smooth(x, z) {
    const ix = Math.floor(x), iz = Math.floor(z);
    const fx = x - ix, fz = z - iz;
    const sx = fx * fx * (3 - 2 * fx);
    const sz = fz * fz * (3 - 2 * fz);
    const a = this.hash(ix, iz);
    const b = this.hash(ix + 1, iz);
    const c = this.hash(ix, iz + 1);
    const d = this.hash(ix + 1, iz + 1);
    return a + (b - a) * sx + (c - a) * sz + (a - b - c + d) * sx * sz;
  }

  fbm(x, z, octaves = 4) {
    let v = 0, amp = 1, freq = 1, max = 0;
    for (let i = 0; i < octaves; i++) {
      v += this.smooth(x * freq, z * freq) * amp;
      max += amp;
      amp *= 0.5;
      freq *= 2;
    }
    return v / max;
  }
}

class Chunk {
  constructor(cx, cz) {
    this.cx = cx;
    this.cz = cz;
    // flat array: index = x + z*SIZE + y*SIZE*SIZE
    this.blocks = new Uint8Array(CHUNK_SIZE * CHUNK_SIZE * WORLD_HEIGHT);
    this.mesh = null;
    this.waterMesh = null;
    this.dirty = true;
  }

  idx(x, y, z) {
    return x + z * CHUNK_SIZE + y * CHUNK_SIZE * CHUNK_SIZE;
  }

  get(x, y, z) {
    if (x < 0 || z < 0 || y < 0 || x >= CHUNK_SIZE || z >= CHUNK_SIZE || y >= WORLD_HEIGHT) return 0;
    return this.blocks[this.idx(x, y, z)];
  }

  set(x, y, z, id) {
    if (x < 0 || z < 0 || y < 0 || x >= CHUNK_SIZE || z >= CHUNK_SIZE || y >= WORLD_HEIGHT) return;
    this.blocks[this.idx(x, y, z)] = id;
    this.dirty = true;
  }
}

class World {
  constructor(scene, atlas, seed = (Math.random() * 1e9) | 0, dimension = 'overworld') {
    this.scene = scene;
    this.atlas = atlas;
    this.seed = seed;
    this.dimension = dimension || 'overworld';
    this.noise = new Noise(seed);
    this.chunks = new Map(); // "cx,cz" -> Chunk
    this.renderDistance = 6; // chunks (~192 block diameter view)
    this.worldRadius = WORLD_RADIUS;
  }

  /** Biome at world x,z — plains|forest|desert|snow|mountains|ocean|swamp|taiga */
  getBiome(wx, wz) {
    const n = this.noise;
    const cont = n.fbm(wx * 0.0035, wz * 0.0035, 4); // continent / ocean
    if (cont < 0.38) return 'ocean';
    const temp = n.fbm(wx * 0.004 + 50, wz * 0.004 + 50, 3);
    const hum = n.fbm(wx * 0.0045 + 200, wz * 0.0045 + 200, 3);
    const mount = n.fbm(wx * 0.008 + 9, wz * 0.008 + 9, 3);
    if (mount > 0.72 && cont > 0.5) return 'mountains';
    if (temp < 0.32) return hum > 0.5 ? 'taiga' : 'snow';
    if (temp > 0.68) return 'desert';
    if (hum > 0.62 && cont < 0.55) return 'swamp';
    if (hum > 0.55) return 'forest';
    return 'plains';
  }

  key(cx, cz) {
    return cx + ',' + cz;
  }

  getChunk(cx, cz) {
    return this.chunks.get(this.key(cx, cz));
  }

  ensureChunk(cx, cz) {
    const k = this.key(cx, cz);
    let ch = this.chunks.get(k);
    if (!ch) {
      ch = new Chunk(cx, cz);
      this.generateTerrain(ch);
      this.chunks.set(k, ch);
      // пересобрать соседей — иначе дыры на границах чанков
      this.markDirty(cx - 1, cz);
      this.markDirty(cx + 1, cz);
      this.markDirty(cx, cz - 1);
      this.markDirty(cx, cz + 1);
    }
    return ch;
  }

  worldToChunk(wx, wz) {
    const cx = Math.floor(wx / CHUNK_SIZE);
    const cz = Math.floor(wz / CHUNK_SIZE);
    const lx = ((wx % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
    const lz = ((wz % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
    return { cx, cz, lx, lz };
  }

  getBlock(wx, wy, wz) {
    wy = Math.floor(wy);
    if (wy < 0 || wy >= WORLD_HEIGHT) return 0;
    const { cx, cz, lx, lz } = this.worldToChunk(Math.floor(wx), Math.floor(wz));
    const ch = this.getChunk(cx, cz);
    if (!ch) return 0;
    return ch.get(lx, wy, lz);
  }

  setBlock(wx, wy, wz, id) {
    wy = Math.floor(wy);
    if (wy < 0 || wy >= WORLD_HEIGHT) return false;
    const { cx, cz, lx, lz } = this.worldToChunk(Math.floor(wx), Math.floor(wz));
    const ch = this.ensureChunk(cx, cz);
    const def = BLOCKS[ID_TO_KEY[ch.get(lx, wy, lz)]];
    if (def && def.hardness === Infinity && id === 0) return false; // can't break bedrock
    ch.set(lx, wy, lz, id);
    // mark neighbors dirty if on edge
    if (lx === 0) this.markDirty(cx - 1, cz);
    if (lx === CHUNK_SIZE - 1) this.markDirty(cx + 1, cz);
    if (lz === 0) this.markDirty(cx, cz - 1);
    if (lz === CHUNK_SIZE - 1) this.markDirty(cx, cz + 1);
    return true;
  }

  markDirty(cx, cz) {
    const ch = this.getChunk(cx, cz);
    if (ch) ch.dirty = true;
  }

  isSolid(wx, wy, wz) {
    const id = this.getBlock(wx, wy, wz);
    if (id === 0) return false;
    const key = ID_TO_KEY[id];
    return key && BLOCKS[key] && BLOCKS[key].solid;
  }

  generateTerrain(chunk) {
    const dim = this.dimension || 'overworld';
    if (dim === 'nether') return this._genNether(chunk);
    if (dim === 'end') return this._genEnd(chunk);
    this._genOverworld(chunk);
  }

  _genOverworld(chunk) {
    const { cx, cz } = chunk;
    const n = this.noise;

    for (let lz = 0; lz < CHUNK_SIZE; lz++) {
      for (let lx = 0; lx < CHUNK_SIZE; lx++) {
        const wx = cx * CHUNK_SIZE + lx;
        const wz = cz * CHUNK_SIZE + lz;

        // Large-scale continents + hills + mountains
        const cont = n.fbm(wx * 0.0035, wz * 0.0035, 5);
        const hills = n.fbm(wx * 0.018, wz * 0.018, 4);
        const detail = n.fbm(wx * 0.07, wz * 0.07, 3);
        const ridge = n.fbm(wx * 0.01 + 3, wz * 0.01 + 3, 3);

        let height = Math.floor(
          28 +
          cont * 22 +
          hills * 14 +
          detail * 5 +
          Math.pow(Math.max(0, ridge - 0.55), 2) * 40
        );

        const biome = this.getBiome(wx, wz);
        if (biome === 'ocean') height = Math.min(height, SEA_LEVEL - 4 - ((hills * 6) | 0));
        if (biome === 'mountains') height = Math.min(WORLD_HEIGHT - 8, height + 12 + ((ridge * 10) | 0));
        if (biome === 'swamp') height = Math.min(height, SEA_LEVEL + 2);

        // Soft world border
        const dist = Math.sqrt(wx * wx + wz * wz);
        if (dist > this.worldRadius) {
          chunk.set(lx, 0, lz, BLOCKS.bedrock.id);
          continue;
        }

        chunk.set(lx, 0, lz, BLOCKS.bedrock.id);

        for (let y = 1; y < WORLD_HEIGHT; y++) {
          if (y > height) {
            if (y <= SEA_LEVEL) chunk.set(lx, y, lz, BLOCKS.water.id);
            continue;
          }

          // caves
          const cave = n.fbm(wx * 0.055, y * 0.07 + wz * 0.055, 3);
          if (y < height - 3 && y > 4 && cave > 0.64) {
            chunk.set(lx, y, lz, 0);
            continue;
          }

          if (y === height) {
            if (height < SEA_LEVEL - 1) chunk.set(lx, y, lz, BLOCKS.sand.id);
            else if (biome === 'desert') chunk.set(lx, y, lz, BLOCKS.sand.id);
            else if (biome === 'snow' || biome === 'taiga') chunk.set(lx, y, lz, BLOCKS.snow.id);
            else if (biome === 'mountains' && height > SEA_LEVEL + 28) chunk.set(lx, y, lz, BLOCKS.stone.id);
            else if (biome === 'swamp') chunk.set(lx, y, lz, BLOCKS.grass.id);
            else chunk.set(lx, y, lz, BLOCKS.grass.id);
          } else if (y > height - 4) {
            if (biome === 'desert' || height < SEA_LEVEL) chunk.set(lx, y, lz, BLOCKS.sand.id);
            else if (biome === 'mountains' && height > SEA_LEVEL + 24) chunk.set(lx, y, lz, BLOCKS.stone.id);
            else chunk.set(lx, y, lz, BLOCKS.dirt.id);
          } else {
            let id = BLOCKS.stone.id;
            const oreN = n.hash(wx * 3 + y * 7, wz * 5 + y);
            if (y < 18 && oreN > 0.986) id = BLOCKS.diamond.id;
            else if (y < 32 && oreN > 0.972) id = BLOCKS.gold.id;
            else if (y < 48 && oreN > 0.955) id = BLOCKS.iron.id;
            else if (oreN > 0.93) id = BLOCKS.coal.id;
            else if (oreN < 0.035 && y < height - 6) id = BLOCKS.gravel.id;
            else if (y < 14 && oreN > 0.918 && oreN < 0.93) id = BLOCKS.obsidian.id;
            chunk.set(lx, y, lz, id);
          }
        }

        // Trees by biome
        if (height >= SEA_LEVEL && height < WORLD_HEIGHT - 10) {
          const top = chunk.get(lx, height, lz);
          const treeRoll = n.hash(wx + 50, wz + 50);
          const canTree =
            (biome === 'forest' && treeRoll > 0.96 && top === BLOCKS.grass.id) ||
            (biome === 'plains' && treeRoll > 0.992 && top === BLOCKS.grass.id) ||
            (biome === 'taiga' && treeRoll > 0.97 && (top === BLOCKS.snow.id || top === BLOCKS.grass.id)) ||
            (biome === 'swamp' && treeRoll > 0.98 && top === BLOCKS.grass.id);
          if (canTree) this._placeTree(chunk, lx, height + 1, lz, wx, wz, biome);
        }

        // Desert cactus-like pillars (wood stack)
        if (biome === 'desert' && height >= SEA_LEVEL && n.hash(wx + 7, wz + 3) > 0.994) {
          const h = 2 + (n.hash(wx, wz) * 2) | 0;
          for (let i = 1; i <= h; i++) {
            if (height + i < WORLD_HEIGHT) chunk.set(lx, height + i, lz, BLOCKS.wood.id);
          }
        }
      }
    }
  }

  _genNether(chunk) {
    const { cx, cz } = chunk;
    const n = this.noise;
    for (let lz = 0; lz < CHUNK_SIZE; lz++) {
      for (let lx = 0; lx < CHUNK_SIZE; lx++) {
        const wx = cx * CHUNK_SIZE + lx;
        const wz = cz * CHUNK_SIZE + lz;
        const floor = 4 + (n.fbm(wx * 0.03, wz * 0.03, 3) * 10) | 0;
        const ceil = WORLD_HEIGHT - 4 - (n.fbm(wx * 0.04 + 9, wz * 0.04, 3) * 8) | 0;
        chunk.set(lx, 0, lz, BLOCKS.bedrock.id);
        chunk.set(lx, WORLD_HEIGHT - 1, lz, BLOCKS.bedrock.id);
        for (let y = 1; y < WORLD_HEIGHT - 1; y++) {
          if (y <= floor) {
            let id = BLOCKS.netherrack.id;
            if (y === floor && n.hash(wx, wz) > 0.85) id = BLOCKS.soul_sand.id;
            if (y === floor && n.hash(wx + 3, wz) > 0.92) id = BLOCKS.magma.id;
            if (n.hash(wx * 2, y + wz) > 0.97) id = BLOCKS.glowstone.id;
            chunk.set(lx, y, lz, id);
          } else if (y >= ceil) {
            chunk.set(lx, y, lz, BLOCKS.netherrack.id);
            if (y === ceil && n.hash(wx + y, wz) > 0.9) chunk.set(lx, y - 1, lz, BLOCKS.glowstone.id);
          } else {
            // open lava seas low
            if (y < 12 && n.fbm(wx * 0.05, wz * 0.05, 2) > 0.55) {
              chunk.set(lx, y, lz, BLOCKS.magma.id);
            }
          }
        }
      }
    }
  }

  _genEnd(chunk) {
    const { cx, cz } = chunk;
    const n = this.noise;
    for (let lz = 0; lz < CHUNK_SIZE; lz++) {
      for (let lx = 0; lx < CHUNK_SIZE; lx++) {
        const wx = cx * CHUNK_SIZE + lx;
        const wz = cz * CHUNK_SIZE + lz;
        const dist = Math.sqrt(wx * wx + wz * wz);
        // main island + outer islands
        const island = dist < 40
          ? n.fbm(wx * 0.04, wz * 0.04, 3)
          : (n.fbm(wx * 0.02, wz * 0.02, 2) > 0.62 ? n.fbm(wx * 0.05, wz * 0.05, 3) : 0);
        if (island < 0.35 && dist > 8) continue;
        const h = Math.floor(20 + island * 12);
        for (let y = Math.max(1, h - 6); y <= h; y++) {
          let id = BLOCKS.end_stone.id;
          if (y === h && n.hash(wx, wz) > 0.97) id = BLOCKS.purpur.id;
          chunk.set(lx, y, lz, id);
        }
        if (dist < 5 && lx === 8 && lz === 8) {
          // end portal platform center-ish when near 0
          for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++) {
            const tx = lx + dx, tz = lz + dz;
            if (tx >= 0 && tz >= 0 && tx < CHUNK_SIZE && tz < CHUNK_SIZE)
              chunk.set(tx, h + 1, tz, dx === 0 && dz === 0 ? BLOCKS.end_portal.id : BLOCKS.obsidian.id);
          }
        }
      }
    }
  }

  _placeTree(chunk, lx, baseY, lz, wx, wz, biome) {
    const tall = biome === 'forest' || biome === 'taiga';
    const trunkH = (tall ? 5 : 4) + (this.noise.hash(wx, wz) * (tall ? 4 : 3)) | 0;
    for (let i = 0; i < trunkH; i++) {
      if (baseY + i < WORLD_HEIGHT) chunk.set(lx, baseY + i, lz, BLOCKS.wood.id);
    }
    const top = baseY + trunkH - 1;
    const r = biome === 'swamp' ? 3 : 2;
    for (let dy = -2; dy <= 2; dy++) {
      for (let dx = -r; dx <= r; dx++) {
        for (let dz = -r; dz <= r; dz++) {
          if (dy === 2 && (Math.abs(dx) + Math.abs(dz) > 1)) continue;
          if (Math.abs(dx) === r && Math.abs(dz) === r && dy < 1) continue;
          const tx = lx + dx, ty = top + dy, tz = lz + dz;
          if (tx < 0 || tz < 0 || tx >= CHUNK_SIZE || tz >= CHUNK_SIZE || ty >= WORLD_HEIGHT || ty < 0) continue;
          if (chunk.get(tx, ty, tz) === 0) chunk.set(tx, ty, tz, BLOCKS.leaves.id);
        }
      }
    }
  }

  /** Update chunks around player */
  updateAround(px, pz) {
    const pcx = Math.floor(px / CHUNK_SIZE);
    const pcz = Math.floor(pz / CHUNK_SIZE);
    const r = this.renderDistance;

    // generate / rebuild
    for (let dz = -r; dz <= r; dz++) {
      for (let dx = -r; dx <= r; dx++) {
        if (dx * dx + dz * dz > r * r + 1) continue;
        const ch = this.ensureChunk(pcx + dx, pcz + dz);
        if (ch.dirty) this.buildMesh(ch);
      }
    }

    // unload far chunks
    for (const [k, ch] of this.chunks) {
      const dist = Math.max(Math.abs(ch.cx - pcx), Math.abs(ch.cz - pcz));
      if (dist > r + 2) {
        this._disposeChunk(ch);
        this.chunks.delete(k);
      }
    }
  }

  _disposeChunk(ch) {
    if (ch.mesh) {
      this.scene.remove(ch.mesh);
      ch.mesh.geometry.dispose();
      ch.mesh = null;
    }
    if (ch.waterMesh) {
      this.scene.remove(ch.waterMesh);
      ch.waterMesh.geometry.dispose();
      ch.waterMesh = null;
    }
  }

  /**
   * Greedy-ish face meshing: one quad per exposed face, batched by block type.
   * Uses BufferGeometry with groups for multi-material.
   */
  buildMesh(chunk) {
    this._disposeChunk(chunk);

    // Collect faces per material key (blockKey + faceType)
    // We'll use one multi-material mesh for solid, one for water
    const solidPositions = [];
    const solidNormals = [];
    const solidUvs = [];
    const solidColors = []; // not used, but keep structure
    // material groups: { start, count, materialIndex }
    // We map each unique material set

    // Simpler approach: group by block type, 6 materials each
    // Use geometry groups

    const blockFaceData = {}; // blockKey -> { pos, norm, uv }

    const dirs = [
      { d: [1, 0, 0], n: [1, 0, 0], corners: [[1,0,0],[1,1,0],[1,1,1],[1,0,1]], u: 'side' }, // +x
      { d: [-1, 0, 0], n: [-1, 0, 0], corners: [[0,0,1],[0,1,1],[0,1,0],[0,0,0]], u: 'side' }, // -x
      { d: [0, 1, 0], n: [0, 1, 0], corners: [[0,1,1],[1,1,1],[1,1,0],[0,1,0]], u: 'top' }, // +y
      { d: [0, -1, 0], n: [0, -1, 0], corners: [[0,0,0],[1,0,0],[1,0,1],[0,0,1]], u: 'bottom' }, // -y
      { d: [0, 0, 1], n: [0, 0, 1], corners: [[0,0,1],[1,0,1],[1,1,1],[0,1,1]], u: 'side' }, // +z
      { d: [0, 0, -1], n: [0, 0, -1], corners: [[1,0,0],[0,0,0],[0,1,0],[1,1,0]], u: 'side' }, // -z
    ];

    const faceUV = [[0, 0], [1, 0], [1, 1], [0, 1]];

    const getBlockWorld = (lx, y, lz) => {
      if (y < 0 || y >= WORLD_HEIGHT) return 0;
      if (lx >= 0 && lz >= 0 && lx < CHUNK_SIZE && lz < CHUNK_SIZE) {
        return chunk.get(lx, y, lz);
      }
      // neighbor chunk
      const wx = chunk.cx * CHUNK_SIZE + lx;
      const wz = chunk.cz * CHUNK_SIZE + lz;
      return this.getBlock(wx, y, wz);
    };

    const isTransparent = (id) => {
      if (id === 0) return true;
      const key = ID_TO_KEY[id];
      return key && BLOCKS[key] && BLOCKS[key].transparent;
    };

    for (let y = 0; y < WORLD_HEIGHT; y++) {
      for (let lz = 0; lz < CHUNK_SIZE; lz++) {
        for (let lx = 0; lx < CHUNK_SIZE; lx++) {
          const id = chunk.get(lx, y, lz);
          if (id === 0) continue;
          const key = ID_TO_KEY[id];
          if (!key) continue;

          for (let fi = 0; fi < 6; fi++) {
            const dir = dirs[fi];
            const nx = lx + dir.d[0];
            const ny = y + dir.d[1];
            const nz = lz + dir.d[2];
            const nid = getBlockWorld(nx, ny, nz);

            // show face if neighbor is air or transparent (and different for water)
            let show = false;
            if (nid === 0) show = true;
            else if (isTransparent(nid) && nid !== id) show = true;
            else if (isTransparent(id) && !isTransparent(nid)) show = false;
            else if (isTransparent(id) && isTransparent(nid) && nid !== id) show = true;

            // don't render solid face against solid
            if (!isTransparent(id) && !isTransparent(nid) && nid !== 0) show = false;
            // water against water - hide
            if (id === BLOCKS.water.id && nid === BLOCKS.water.id) show = false;

            if (!show) continue;

            if (!blockFaceData[key]) {
              blockFaceData[key] = { pos: [], norm: [], uv: [], faceIndex: [] };
            }
            const fd = blockFaceData[key];
            const base = fd.pos.length / 3;
            const ao = this._vertexAO.bind(this);

            for (let c = 0; c < 4; c++) {
              const cr = dir.corners[c];
              fd.pos.push(lx + cr[0], y + cr[1], lz + cr[2]);
              fd.norm.push(dir.n[0], dir.n[1], dir.n[2]);
              fd.uv.push(faceUV[c][0], faceUV[c][1]);
            }
            // two triangles
            fd.faceIndex.push(base, base + 1, base + 2, base, base + 2, base + 3);
            // store which face for material (0-5)
            // we'll handle with separate geometries per face type if needed
            // For multi-face textures (grass), need face materials
            fd._faces = fd._faces || [];
            fd._faces.push(fi, fi); // two tris same face
          }
        }
      }
    }

    // Build solid mesh (non-water) and water mesh separately
    this._buildTypedMesh(chunk, blockFaceData, false);
    this._buildTypedMesh(chunk, blockFaceData, true);
    chunk.dirty = false;
  }

  _vertexAO() { return 1; }

  _buildTypedMesh(chunk, blockFaceData, waterOnly) {
    const materials = [];
    const positions = [];
    const normals = [];
    const uvs = [];
    const indices = [];
    const groups = [];

    for (const [key, fd] of Object.entries(blockFaceData)) {
      if (waterOnly && key !== 'water') continue;
      if (!waterOnly && key === 'water') continue;
      if (fd.pos.length === 0) continue;

      // For blocks with different top/side, we need per-face materials.
      // Split geometry by face direction stored in _faces
      // Rebuild with face grouping

      // Simpler: use 6 materials always, split verts by face
      const byFace = [[], [], [], [], [], []]; // each: list of tri pairs from original

      // Re-extract: we stored faceIndex as flat indices and _faces as face id per triangle
      // Let's rebuild properly from scratch for this key only — actually fd has interleaved faces.
      // Parse faceIndex in groups of 6 (two tris = one quad) with matching _faces

      const quads = fd.faceIndex.length / 6;
      for (let q = 0; q < quads; q++) {
        const faceDir = fd._faces[q * 2];
        byFace[faceDir].push(q);
      }

      const mats = this.atlas.getMaterials(key);
      if (!mats) continue;

      for (let fi = 0; fi < 6; fi++) {
        const quadsOnFace = byFace[fi];
        if (quadsOnFace.length === 0) continue;

        const start = indices.length;
        const matIndex = materials.length;
        materials.push(mats[fi]);

        for (const q of quadsOnFace) {
          const baseVert = positions.length / 3;
          // 4 verts of this quad
          for (let v = 0; v < 4; v++) {
            const src = (q * 4 + v) * 3;
            // positions are local to chunk; offset later via mesh.position
            positions.push(fd.pos[src], fd.pos[src + 1], fd.pos[src + 2]);
            normals.push(fd.norm[src], fd.norm[src + 1], fd.norm[src + 2]);
            const uvi = (q * 4 + v) * 2;
            uvs.push(fd.uv[uvi], fd.uv[uvi + 1]);
          }
          indices.push(baseVert, baseVert + 1, baseVert + 2, baseVert, baseVert + 2, baseVert + 3);
        }

        const count = indices.length - start;
        groups.push({ start, count, materialIndex: matIndex });
      }
    }

    if (positions.length === 0) return;

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geo.setIndex(indices);
    for (const g of groups) {
      geo.addGroup(g.start, g.count, g.materialIndex);
    }

    const mesh = new THREE.Mesh(geo, materials);
    mesh.position.set(chunk.cx * CHUNK_SIZE, 0, chunk.cz * CHUNK_SIZE);
    mesh.matrixAutoUpdate = true;

    this.scene.add(mesh);
    if (waterOnly) chunk.waterMesh = mesh;
    else chunk.mesh = mesh;
  }

  /** Raycast from origin along direction, max distance */
  raycast(origin, direction, maxDist = 8) {
    // 3D DDA / Amanatides & Woo
    let x = Math.floor(origin.x);
    let y = Math.floor(origin.y);
    let z = Math.floor(origin.z);

    const dx = direction.x, dy = direction.y, dz = direction.z;
    const stepX = dx > 0 ? 1 : dx < 0 ? -1 : 0;
    const stepY = dy > 0 ? 1 : dy < 0 ? -1 : 0;
    const stepZ = dz > 0 ? 1 : dz < 0 ? -1 : 0;

    const tDeltaX = stepX !== 0 ? Math.abs(1 / dx) : Infinity;
    const tDeltaY = stepY !== 0 ? Math.abs(1 / dy) : Infinity;
    const tDeltaZ = stepZ !== 0 ? Math.abs(1 / dz) : Infinity;

    let tMaxX = stepX > 0 ? (x + 1 - origin.x) * tDeltaX : stepX < 0 ? (origin.x - x) * tDeltaX : Infinity;
    let tMaxY = stepY > 0 ? (y + 1 - origin.y) * tDeltaY : stepY < 0 ? (origin.y - y) * tDeltaY : Infinity;
    let tMaxZ = stepZ > 0 ? (z + 1 - origin.z) * tDeltaZ : stepZ < 0 ? (origin.z - z) * tDeltaZ : Infinity;

    let face = null;
    let dist = 0;

    for (let i = 0; i < maxDist * 3; i++) {
      const id = this.getBlock(x, y, z);
      if (id !== 0) {
        const key = ID_TO_KEY[id];
        // hit solid, water, interactables, redstone dust, open doors
        if (key && (
          BLOCKS[key].solid ||
          BLOCKS[key].interact ||
          BLOCKS[key].redstone ||
          key === 'water' ||
          key === 'doorOpen' ||
          key === 'nether_portal' ||
          key === 'end_portal'
        )) {
          return {
            x, y, z, id, key,
            face,
            dist,
            px: face === 'right' ? x + 1 : face === 'left' ? x - 1 : x,
            py: face === 'top' ? y + 1 : face === 'bottom' ? y - 1 : y,
            pz: face === 'front' ? z + 1 : face === 'back' ? z - 1 : z,
          };
        }
      }

      if (tMaxX < tMaxY) {
        if (tMaxX < tMaxZ) {
          dist = tMaxX;
          if (dist > maxDist) break;
          x += stepX;
          tMaxX += tDeltaX;
          face = stepX > 0 ? 'left' : 'right';
        } else {
          dist = tMaxZ;
          if (dist > maxDist) break;
          z += stepZ;
          tMaxZ += tDeltaZ;
          face = stepZ > 0 ? 'back' : 'front';
        }
      } else {
        if (tMaxY < tMaxZ) {
          dist = tMaxY;
          if (dist > maxDist) break;
          y += stepY;
          tMaxY += tDeltaY;
          face = stepY > 0 ? 'bottom' : 'top';
        } else {
          dist = tMaxZ;
          if (dist > maxDist) break;
          z += stepZ;
          tMaxZ += tDeltaZ;
          face = stepZ > 0 ? 'back' : 'front';
        }
      }
    }
    return null;
  }

  dispose() {
    for (const ch of this.chunks.values()) this._disposeChunk(ch);
    this.chunks.clear();
  }
}
