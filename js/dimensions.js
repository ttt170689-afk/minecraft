/**
 * Dimensions: Overworld / Nether / The End + portals
 */

const DIMENSIONS = {
  overworld: {
    id: 'overworld',
    name: 'Верхний мир',
    fog: 0x87ceeb,
    fogDensity: 0.012,
    ambient: 0.55,
    sun: 0.85,
    skyTop: 0x4a90d9,
    skyBot: 0xb0d8f0,
    gravity: 28,
  },
  nether: {
    id: 'nether',
    name: 'Незер',
    fog: 0x330800,
    fogDensity: 0.035,
    ambient: 0.4,
    sun: 0.25,
    skyTop: 0x1a0500,
    skyBot: 0x4a1000,
    gravity: 28,
    hostileBoost: 1.5,
  },
  end: {
    id: 'end',
    name: 'Энд',
    fog: 0x1a1028,
    fogDensity: 0.02,
    ambient: 0.35,
    sun: 0.15,
    skyTop: 0x0a0018,
    skyBot: 0x1a1030,
    gravity: 22,
  },
};

class DimensionManager {
  constructor(gameApi) {
    this.api = gameApi; // { scene, skyMat, ambient, sun, renderer, fog, player, world, setWorldSeed, particles, say, SFX }
    this.current = 'overworld';
    this.portals = []; // {x,y,z,dim,type}
    this.cooldown = 0;
  }

  get dim() {
    return DIMENSIONS[this.current] || DIMENSIONS.overworld;
  }

  applyAtmosphere() {
    const d = this.dim;
    const api = this.api;
    if (api.skyMat) {
      api.skyMat.uniforms.topColor.value.setHex(d.skyTop);
      api.skyMat.uniforms.bottomColor.value.setHex(d.skyBot);
    }
    if (api.scene && api.scene.fog) {
      api.scene.fog.color.setHex(d.fog);
      api.scene.fog.density = d.fogDensity;
    }
    if (api.renderer) api.renderer.setClearColor(d.fog);
    if (api.ambient) api.ambient.intensity = d.ambient;
    if (api.sun) {
      api.sun.intensity = d.sun;
      api.sun.color.setHex(this.current === 'nether' ? 0xff6622 : this.current === 'end' ? 0xccbbff : 0xfff5e0);
    }
    if (api.player) api.player.gravity = d.gravity;
  }

  /**
   * Travel to dimension. Regenerates world with related seed.
   */
  goTo(dimId) {
    if (!DIMENSIONS[dimId] || dimId === this.current) return false;
    if (this.cooldown > 0) return false;
    this.cooldown = 3;
    const prev = this.current;
    this.current = dimId;
    const base = this.api.getSeed ? this.api.getSeed() : 12345;
    let seed = base;
    if (dimId === 'nether') seed = (base ^ 0x4e455448) >>> 0;
    if (dimId === 'end') seed = (base ^ 0x454e4458) >>> 0;
    if (dimId === 'overworld') seed = base;

    if (this.api.onDimensionChange) this.api.onDimensionChange(dimId, seed, prev);
    this.applyAtmosphere();
    if (this.api.particles) {
      const p = this.api.player.pos;
      this.api.particles.portal(p.x, p.y + 1, p.z, dimId);
    }
    if (this.api.SFX) {
      if (dimId === 'nether') this.api.SFX._tone && this.api.SFX._tone(80, 0.5, 'sawtooth', 0.15, 40);
      else if (dimId === 'end') this.api.SFX.endermanTp && this.api.SFX.endermanTp();
      else this.api.SFX.levelUp && this.api.SFX.levelUp();
    }
    if (this.api.say) this.api.say('Измерение: ' + DIMENSIONS[dimId].name, dimId === 'nether' ? '#f80' : dimId === 'end' ? '#c6f' : '#8fd9ff');
    return true;
  }

  update(dt, player, world) {
    this.cooldown = Math.max(0, this.cooldown - dt);
    if (!player || !world || this.cooldown > 0) return;

    // Standing in portal blocks
    const x = Math.floor(player.pos.x);
    const y = Math.floor(player.pos.y + 0.5);
    const z = Math.floor(player.pos.z);
    const id = world.getBlock(x, y, z);
    const id2 = world.getBlock(x, y + 1, z);
    const key = ID_TO_KEY[id] || ID_TO_KEY[id2];

    if (key === 'nether_portal') {
      if (this.current === 'nether') this.goTo('overworld');
      else this.goTo('nether');
    } else if (key === 'end_portal') {
      if (this.current === 'end') this.goTo('overworld');
      else this.goTo('end');
    }

    // Portal particles near portal blocks
    if (this.api.particles && Math.random() < dt * 8) {
      for (let dy = -1; dy <= 2; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          for (let dz = -1; dz <= 1; dz++) {
            const k = ID_TO_KEY[world.getBlock(x + dx, y + dy, z + dz)];
            if (k === 'nether_portal' || k === 'end_portal') {
              this.api.particles.spawn(x + dx + 0.5, y + dy + 0.5, z + dz + 0.5, {
                count: 2,
                color: k === 'end_portal' ? 0xaa44ff : 0xff2200,
                life: 0.8,
                speed: 0.8,
                gravity: -0.5,
                size: 0.06,
              });
            }
          }
        }
      }
    }
  }

  /** Try light nether portal: look for 4x5 obsidian frame and fill with portal */
  tryLightPortal(wx, wy, wz, world) {
    // simple: if flint used on obsidian, create portal blocks in a small frame nearby
    // Check vertical frame in X or Z
    return this._fillFrame(wx, wy, wz, world, 'x') || this._fillFrame(wx, wy, wz, world, 'z');
  }

  _fillFrame(ox, oy, oz, world, axis) {
    // Search for hollow 2x3 inside (obsidian border)
    // Simplified: place 2x3 portal if surrounded roughly by obsidian
    let obs = 0;
    for (let y = 0; y < 5; y++) {
      for (let i = 0; i < 4; i++) {
        const x = axis === 'x' ? ox + i : ox;
        const z = axis === 'z' ? oz + i : oz;
        const k = ID_TO_KEY[world.getBlock(x, oy + y, z)];
        if (k === 'obsidian') obs++;
      }
    }
    if (obs < 6) return false;
    // fill interior 2 wide x 3 high
    for (let y = 1; y <= 3; y++) {
      for (let i = 1; i <= 2; i++) {
        const x = axis === 'x' ? ox + i : ox;
        const z = axis === 'z' ? oz + i : oz;
        if (world.getBlock(x, oy + y, z) === 0 || ID_TO_KEY[world.getBlock(x, oy + y, z)] === 'air') {
          world.setBlock(x, oy + y, z, BLOCKS.nether_portal.id);
        }
      }
    }
    if (this.api.say) this.api.say('Незер-портал зажжён! Зайди внутрь.', '#f80');
    if (this.api.SFX) this.api.SFX.lever && this.api.SFX.lever();
    return true;
  }

  placeEndPortal(wx, wy, wz, world) {
    // 3x3 ring of end portal frame + center portal — simplified 3x3 portal plane
    for (let dx = -1; dx <= 1; dx++) {
      for (let dz = -1; dz <= 1; dz++) {
        if (dx === 0 && dz === 0) world.setBlock(wx, wy, wz, BLOCKS.end_portal.id);
        else world.setBlock(wx + dx, wy, wz + dz, BLOCKS.obsidian.id);
      }
    }
    world.setBlock(wx, wy, wz, BLOCKS.end_portal.id);
    if (this.api.say) this.api.say('Портал Края создан!', '#c6f');
  }
}

window.DIMENSIONS = DIMENSIONS;
window.DimensionManager = DimensionManager;
