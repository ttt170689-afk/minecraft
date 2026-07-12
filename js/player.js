/**
 * First-person player: physics, blocks, doors, redstone, weapons, health
 */

class Player {
  constructor(camera, world, domElement) {
    this.camera = camera;
    this.world = world;
    this.dom = domElement;

    this.pos = new THREE.Vector3(0, 40, 0);
    this.vel = new THREE.Vector3(0, 0, 0);

    this.yaw = 0;
    this.pitch = 0;
    this.sensitivity = 0.002;

    this.width = 0.6;
    this.height = 1.8;
    this.eyeHeight = 1.62;

    this.onGround = false;
    this.flying = true;
    this.sneaking = false;
    this.locked = false;

    this.walkSpeed = 4.3;
    this.flySpeed = 10;
    this.jumpSpeed = 8.2;
    this.gravity = 28;

    this.keys = {};
    this.mouseLeft = false;
    this.mouseRight = false;

    // Hotbar can hold blocks OR items
    this.hotbar = [
      'sword_iron', 'pick_iron', 'apple', 'planks', 'crafting_table',
      'door', 'torch_item', 'furnace', 'tnt'
    ];
    this.counts = Array(9).fill(64); // stack sizes (creative-like start)
    this.selectedSlot = 0;
    this.bag = typeof Bag !== 'undefined' ? new Bag() : null;
    // seed bag with basics
    if (this.bag) {
      ['wood', 'planks', 'cobble', 'stick', 'coal_item', 'iron_ingot', 'gold_ingot', 'diamond_gem',
        'string_item', 'gunpowder', 'sand', 'apple', 'beef', 'crafting_table'].forEach((k) => this.bag.add(k, 32));
    }

    // Health (10 hearts = 20 hp)
    this.maxHealth = 20;
    this.health = 20;
    this.hurtCooldown = 0;
    this.dead = false;
    this.hardcore = false;
    this.fallStartY = null;
    this.effects = {};

    // Combat
    this.attackCooldown = 0;
    this.swingAnim = 0;
    this.skin = typeof loadSkin === 'function' ? loadSkin() : null;

    // Breaking
    this.breakTarget = null;
    this.breakProgress = 0;
    this.placeCooldown = 0;

    // Footsteps
    this._stepDist = 0;
    this._wasOnGround = true;
    this._prevSlot = 0;

    // Callbacks (set by game)
    this.onHealthChange = null;
    this.onDeath = null;
    this.onAttack = null; // (damage, origin, dir) for multiplayer/mobs

    this._bindEvents();
  }

  get selectedKey() {
    return this.hotbar[this.selectedSlot];
  }

  get selectedItem() {
    const k = this.selectedKey;
    return ITEMS[k] || null;
  }

  get selectedBlock() {
    const k = this.selectedKey;
    return (BLOCKS[k] && !ITEMS[k]) ? k : null;
  }

  _bindEvents() {
    document.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;
      if (e.code === 'KeyF' && this.locked) {
        this.flying = !this.flying;
        if (window.SFX) SFX.pop();
      }
      if (e.code.startsWith('Digit')) {
        const n = parseInt(e.code.replace('Digit', ''), 10);
        if (n >= 1 && n <= 9) {
          this.selectedSlot = n - 1;
          if (window.SFX) SFX.click();
        }
      }
    });
    document.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
    });

    document.addEventListener('mousemove', (e) => {
      if (!this.locked) return;
      this.yaw -= e.movementX * this.sensitivity;
      this.pitch -= e.movementY * this.sensitivity;
      this.pitch = Math.max(-Math.PI / 2 + 0.01, Math.min(Math.PI / 2 - 0.01, this.pitch));
    });

    document.addEventListener('mousedown', (e) => {
      if (!this.locked || this.dead) return;
      if (e.button === 0) this.mouseLeft = true;
      if (e.button === 2) this.mouseRight = true;
    });
    document.addEventListener('mouseup', (e) => {
      if (e.button === 0) {
        this.mouseLeft = false;
        this.breakProgress = 0;
        this.breakTarget = null;
      }
      if (e.button === 2) this.mouseRight = false;
    });

    document.addEventListener('wheel', (e) => {
      if (!this.locked) return;
      if (e.deltaY > 0) this.selectedSlot = (this.selectedSlot + 1) % 9;
      else this.selectedSlot = (this.selectedSlot + 8) % 9;
      if (window.SFX) SFX.click();
    }, { passive: true });

    document.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  lock() {
    this.dom.requestPointerLock();
  }

  setLocked(v) {
    this.locked = v;
    if (!v) {
      this.mouseLeft = false;
      this.mouseRight = false;
      this.breakProgress = 0;
    }
  }

  spawn() {
    this.dead = false;
    this.health = this.maxHealth;
    this.vel.set(0, 0, 0);
    this.hurtCooldown = 0;
    if (this.onHealthChange) this.onHealthChange(this.health, this.maxHealth);
    for (let y = WORLD_HEIGHT - 1; y > 0; y--) {
      if (this.world.isSolid(0, y, 0)) {
        this.pos.set(0.5, y + 1.1, 0.5);
        return;
      }
    }
    this.pos.set(0.5, SEA_LEVEL + 5, 0.5);
  }

  heal(amount) {
    if (this.dead) return;
    const prev = this.health;
    this.health = Math.min(this.maxHealth, this.health + amount);
    if (this.health > prev && window.SFX) SFX.heal();
    if (this.onHealthChange) this.onHealthChange(this.health, this.maxHealth);
  }

  hurt(amount, knockDir) {
    if (this.dead || this.flying || this.hurtCooldown > 0) return false;
    this.health = Math.max(0, this.health - amount);
    this.hurtCooldown = 0.6;
    if (window.SFX) SFX.hurt();
    if (knockDir) {
      this.vel.x += knockDir.x * 6;
      this.vel.z += knockDir.z * 6;
      this.vel.y = 4;
    }
    if (this.onHealthChange) this.onHealthChange(this.health, this.maxHealth);
    if (this.health <= 0) this._die();
    return true;
  }

  _die() {
    this.dead = true;
    this.health = 0;
    if (window.SFX) SFX.death();
    if (this.onDeath) this.onDeath(!!this.hardcore);
  }

  getLookDirection() {
    const dir = new THREE.Vector3(
      -Math.sin(this.yaw) * Math.cos(this.pitch),
      Math.sin(this.pitch),
      -Math.cos(this.yaw) * Math.cos(this.pitch)
    );
    return dir.normalize();
  }

  update(dt) {
    if (dt > 0.05) dt = 0.05;
    if (this.dead) {
      this.camera.position.set(this.pos.x, this.pos.y + 0.4, this.pos.z);
      return;
    }

    this.hurtCooldown = Math.max(0, this.hurtCooldown - dt);
    this.attackCooldown = Math.max(0, this.attackCooldown - dt);
    this.swingAnim = Math.max(0, this.swingAnim - dt * 4);
    this.sneaking = !!this.keys['ShiftLeft'] || !!this.keys['ShiftRight'];
    this.placeCooldown = Math.max(0, this.placeCooldown - dt);

    if (this.selectedSlot !== this._prevSlot) {
      this._prevSlot = this.selectedSlot;
    }

    const forward = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
    const wish = new THREE.Vector3(0, 0, 0);

    if (this.keys['KeyW']) wish.add(forward);
    if (this.keys['KeyS']) wish.sub(forward);
    if (this.keys['KeyD']) wish.add(right);
    if (this.keys['KeyA']) wish.sub(right);
    if (wish.lengthSq() > 0) wish.normalize();

    if (this.flying) {
      let speed = this.flySpeed;
      if (this.sneaking) speed *= 0.4;
      if (this.keys['Space']) this.pos.y += speed * dt;
      if (this.sneaking) this.pos.y -= speed * dt;
      this.vel.x = wish.x * speed;
      this.vel.z = wish.z * speed;
      this.vel.y = 0;
      this.pos.x += this.vel.x * dt;
      this.pos.z += this.vel.z * dt;
      this._collide();
      this.fallStartY = null;
    } else {
      // effects tick
      if (this.effects) {
        for (const k of Object.keys(this.effects)) {
          this.effects[k] -= dt;
          if (this.effects[k] <= 0) delete this.effects[k];
        }
      }
      let speed = this.walkSpeed * (this.sneaking ? 0.3 : 1);
      if (this.effects && this.effects.speed) speed *= 1.45;
      // apply horizontal wish, preserve some knockback
      if (Math.abs(this.vel.x) < speed + 0.1) this.vel.x = wish.x * speed;
      else this.vel.x *= 0.9;
      if (Math.abs(this.vel.z) < speed + 0.1) this.vel.z = wish.z * speed;
      else this.vel.z *= 0.9;
      if (wish.lengthSq() > 0 && Math.hypot(this.vel.x, this.vel.z) > speed) {
        this.vel.x = wish.x * speed;
        this.vel.z = wish.z * speed;
      }

      if (this.onGround && this.keys['Space']) {
        this.vel.y = this.jumpSpeed;
        this.onGround = false;
        if (window.SFX) SFX.jump();
      }

      // fall damage tracking
      if (!this.onGround) {
        if (this.fallStartY == null) this.fallStartY = this.pos.y;
      }

      this.vel.y -= this.gravity * dt;
      if (this.vel.y < -40) this.vel.y = -40;

      this.pos.x += this.vel.x * dt;
      this._collideAxis('x');
      this.pos.z += this.vel.z * dt;
      this._collideAxis('z');
      this.pos.y += this.vel.y * dt;
      this._collideAxis('y');

      // land fall damage
      if (this.onGround && this.fallStartY != null) {
        const fall = this.fallStartY - this.pos.y;
        if (fall > 3.5) {
          const dmg = Math.floor(fall - 3);
          if (dmg > 0) this.hurt(dmg);
        }
        this.fallStartY = null;
      }

      // footsteps
      if (this.onGround && wish.lengthSq() > 0) {
        this._stepDist += speed * dt;
        if (this._stepDist > 1.4) {
          this._stepDist = 0;
          if (window.SFX) SFX.step(true, false);
        }
      }
    }

    // Camera + hurt shake
    let shake = 0;
    if (this.hurtCooldown > 0.4) shake = (Math.random() - 0.5) * 0.08;
    this.camera.position.set(this.pos.x + shake, this.pos.y + this.eyeHeight, this.pos.z + shake);
    this.camera.rotation.order = 'YXZ';
    this.camera.rotation.y = this.yaw;
    this.camera.rotation.x = this.pitch;

    this._handleBlocks(dt);
    this._wasOnGround = this.onGround;
  }

  _collide() {
    this._collideAxis('x');
    this._collideAxis('y');
    this._collideAxis('z');
  }

  _collideAxis(axis) {
    const hw = this.width / 2;
    const h = this.height;
    const minX = Math.floor(this.pos.x - hw);
    const maxX = Math.floor(this.pos.x + hw);
    const minY = Math.floor(this.pos.y + 0.001);
    const maxY = Math.floor(this.pos.y + h - 0.001);
    const minZ = Math.floor(this.pos.z - hw);
    const maxZ = Math.floor(this.pos.z + hw);

    if (axis === 'y') this.onGround = false;

    for (let y = minY; y <= maxY; y++) {
      for (let x = minX; x <= maxX; x++) {
        for (let z = minZ; z <= maxZ; z++) {
          if (!this.world.isSolid(x, y, z)) continue;

          if (axis === 'x') {
            if (this.vel.x > 0) this.pos.x = x - hw - 0.001;
            else if (this.vel.x < 0) this.pos.x = x + 1 + hw + 0.001;
            else {
              const cx = x + 0.5;
              if (this.pos.x < cx) this.pos.x = x - hw - 0.001;
              else this.pos.x = x + 1 + hw + 0.001;
            }
            this.vel.x = 0;
          } else if (axis === 'z') {
            if (this.vel.z > 0) this.pos.z = z - hw - 0.001;
            else if (this.vel.z < 0) this.pos.z = z + 1 + hw + 0.001;
            else {
              const cz = z + 0.5;
              if (this.pos.z < cz) this.pos.z = z - hw - 0.001;
              else this.pos.z = z + 1 + hw + 0.001;
            }
            this.vel.z = 0;
          } else if (axis === 'y') {
            if (this.vel.y > 0) {
              this.pos.y = y - h - 0.001;
              this.vel.y = 0;
            } else {
              this.pos.y = y + 1;
              this.vel.y = 0;
              this.onGround = true;
            }
          }
        }
      }
    }

    if (this.pos.y < 1) {
      this.pos.y = 1;
      this.vel.y = 0;
      this.onGround = true;
    }
  }

  _handleBlocks(dt) {
    const origin = this.camera.position.clone();
    const dir = this.getLookDirection();
    const hit = this.world.raycast(origin, dir, 6);
    this.lookHit = hit;

    if (!this.locked || this.dead) return;

    const item = this.selectedItem;

    // Left click: attack / break
    if (this.mouseLeft && this.placeCooldown <= 0) {
      if (item && (item.type === 'weapon' || item.type === 'bow')) {
        if (this.attackCooldown <= 0) {
          this._doAttack(item, origin, dir, hit);
        }
      } else if (hit) {
        this._doBreak(hit, dt, item);
      }
    } else if (!this.mouseLeft) {
      this.breakProgress = 0;
      this.breakTarget = null;
    }

    // Right click: use / place / interact
    if (this.mouseRight && this.placeCooldown <= 0) {
      // Interact with door/lever first
      if (hit && this._tryInteract(hit)) {
        this.placeCooldown = 0.25;
        return;
      }

      // Food
      if (item && item.type === 'food') {
        if (this.health < this.maxHealth || item.heal) {
          this.heal(item.heal || 1);
          if (window.SFX) SFX.eat();
          if (this.onEat) this.onEat();
          this.placeCooldown = 0.4;
        }
        return;
      }

      // Ender pearl throw → short teleport
      if (this.selectedKey === 'ender_pearl' && hit) {
        this.pos.set(hit.x + 0.5, hit.y + 1.1, hit.z + 0.5);
        this.vel.set(0, 0, 0);
        if (window.SFX) SFX.endermanTp && SFX.endermanTp();
        if (this.onPearl) this.onPearl(hit.x, hit.y, hit.z);
        this.placeCooldown = 0.5;
        return;
      }

      // Flint and steel → light nether portal on obsidian
      if (this.selectedKey === 'flint_steel' && hit) {
        if (hit.key === 'obsidian' && this.onLightPortal) {
          this.onLightPortal(hit.x, hit.y, hit.z);
          this.placeCooldown = 0.4;
          return;
        }
        if (window.SFX) SFX.lever && SFX.lever();
        this.placeCooldown = 0.3;
        return;
      }

      // Place block
      const blockKey = this.selectedBlock;
      if (blockKey && BLOCKS[blockKey] && hit) {
        // Don't place on interactables as replace — place adjacent
        let px = hit.px, py = hit.py, pz = hit.pz;
        // If looking at non-solid (redstone/lever), place on face still
        if (!this._blockIntersectsPlayer(px, py, pz)) {
          const cur = this.world.getBlock(px, py, pz);
          const curKey = ID_TO_KEY[cur];
          if (cur === 0 || curKey === 'water' || curKey === 'redstone') {
            // door is 2 blocks tall
            if (blockKey === 'door') {
              if (py + 1 < WORLD_HEIGHT && (this.world.getBlock(px, py + 1, pz) === 0)) {
                this.world.setBlock(px, py, pz, BLOCKS.door.id);
                // store top as door too (simple: same id stacked)
                this.world.setBlock(px, py + 1, pz, BLOCKS.door.id);
                if (window.SFX) SFX.place('planks');
                this.placeCooldown = 0.25;
              }
            } else {
              this.world.setBlock(px, py, pz, BLOCKS[blockKey].id);
              if (window.SFX) SFX.place(blockKey);
              this.placeCooldown = 0.2;
              if (blockKey === 'redstone' || blockKey === 'lever' || blockKey === 'lamp') {
                this._updateRedstoneNear(px, py, pz);
              }
              if (blockKey === 'tnt' && window.SFX) SFX.lever();
            }
          }
        }
      }
    }
  }

  _doAttack(item, origin, dir, hit) {
    this.attackCooldown = item.cooldown || 0.5;
    this.swingAnim = 1;
    if (item.type === 'bow') {
      if (window.SFX) SFX.bow();
    } else {
      if (window.SFX) SFX.swing();
    }
    let dmg = item.damage || 1;
    if (this.effects && this.effects.strength) dmg = Math.ceil(dmg * 1.5);
    const range = item.type === 'bow' ? 14 : 4;
    if (this.onAttack) {
      this.onAttack(dmg, origin, dir, item, range);
    }
    if (hit && BLOCKS[hit.key] && BLOCKS[hit.key].solid && item.type !== 'bow') {
      if (window.SFX) SFX.hit();
    }
  }

  _doBreak(hit, dt, item) {
    const key = hit.x + ',' + hit.y + ',' + hit.z;
    if (this.breakTarget !== key) {
      this.breakTarget = key;
      this.breakProgress = 0;
    }
    const def = BLOCKS[hit.key];
    const hardness = def ? def.hardness : 1;
    if (hardness === Infinity) {
      this.breakProgress = 0;
      return;
    }

    // TNT punch in creative / survival: prime
    if (hit.key === 'tnt' && this.flying) {
      this.world.setBlock(hit.x, hit.y, hit.z, 0);
      if (window.SFX) SFX.break('stone');
      this._explode(hit.x, hit.y, hit.z, 3);
      this.placeCooldown = 0.3;
      return;
    }

    const mineBoost = (item && item.mineBoost) ? item.mineBoost : 1;

    if (hardness === 0 || this.flying) {
      const bk = hit.key;
      // door: break both halves
      if (bk === 'door' || bk === 'doorOpen') {
        this.world.setBlock(hit.x, hit.y, hit.z, 0);
        if (ID_TO_KEY[this.world.getBlock(hit.x, hit.y + 1, hit.z)] === 'door' ||
            ID_TO_KEY[this.world.getBlock(hit.x, hit.y + 1, hit.z)] === 'doorOpen') {
          this.world.setBlock(hit.x, hit.y + 1, hit.z, 0);
        }
        if (ID_TO_KEY[this.world.getBlock(hit.x, hit.y - 1, hit.z)] === 'door' ||
            ID_TO_KEY[this.world.getBlock(hit.x, hit.y - 1, hit.z)] === 'doorOpen') {
          this.world.setBlock(hit.x, hit.y - 1, hit.z, 0);
        }
      } else {
        this.world.setBlock(hit.x, hit.y, hit.z, 0);
      }
      if (window.SFX) SFX.break(bk);
      if (bk === 'redstone' || bk === 'lever' || bk === 'leverOn' || bk === 'lamp' || bk === 'lampOn') {
        this._updateRedstoneNear(hit.x, hit.y, hit.z);
      }
      this.breakProgress = 0;
      this.breakTarget = null;
      this.placeCooldown = 0.1;
    } else {
      this.breakProgress += (dt * mineBoost) / Math.max(hardness * 0.35, 0.15);
      if (this.breakProgress >= 1) {
        const bk = hit.key;
        this.world.setBlock(hit.x, hit.y, hit.z, 0);
        if (window.SFX) SFX.break(bk);
        this.breakProgress = 0;
        this.breakTarget = null;
      }
    }
  }

  _tryInteract(hit) {
    const k = hit.key;
    if (k === 'crafting_table') {
      if (this.onOpenCraft) this.onOpenCraft(true);
      if (window.SFX) SFX.menuOpen && SFX.menuOpen();
      return true;
    }
    if (k === 'furnace') {
      if (this.onOpenFurnace) this.onOpenFurnace();
      else if (this.onOpenCraft) this.onOpenCraft(true);
      if (window.SFX) SFX.lever && SFX.lever();
      return true;
    }
    if (k === 'door' || k === 'doorOpen') {
      const open = k === 'doorOpen';
      const newId = open ? BLOCKS.door.id : BLOCKS.doorOpen.id;
      this.world.setBlock(hit.x, hit.y, hit.z, newId);
      // twin half
      const up = ID_TO_KEY[this.world.getBlock(hit.x, hit.y + 1, hit.z)];
      const dn = ID_TO_KEY[this.world.getBlock(hit.x, hit.y - 1, hit.z)];
      if (up === 'door' || up === 'doorOpen') this.world.setBlock(hit.x, hit.y + 1, hit.z, newId);
      if (dn === 'door' || dn === 'doorOpen') this.world.setBlock(hit.x, hit.y - 1, hit.z, newId);
      if (window.SFX) SFX.door(!open);
      return true;
    }
    if (k === 'lever' || k === 'leverOn') {
      const on = k === 'leverOn';
      this.world.setBlock(hit.x, hit.y, hit.z, on ? BLOCKS.lever.id : BLOCKS.leverOn.id);
      if (window.SFX) SFX.lever();
      this._updateRedstoneNear(hit.x, hit.y, hit.z);
      return true;
    }
    if (k === 'tnt') {
      this.world.setBlock(hit.x, hit.y, hit.z, 0);
      if (window.SFX) SFX.lever();
      this._explode(hit.x, hit.y, hit.z, 3);
      return true;
    }
    return false;
  }

  /** Simple redstone: lever powers adjacent lamps through redstone dust (BFS radius 8) */
  _updateRedstoneNear(ox, oy, oz) {
    // Collect powered levers in neighborhood and propagate
    const powered = new Set();
    const queue = [];
    const R = 10;
    for (let y = oy - R; y <= oy + R; y++) {
      for (let x = ox - R; x <= ox + R; x++) {
        for (let z = oz - R; z <= oz + R; z++) {
          if (this.world.getBlock(x, y, z) === BLOCKS.leverOn.id) {
            const key = x + ',' + y + ',' + z;
            powered.add(key);
            queue.push([x, y, z, 8]);
          }
        }
      }
    }

    const dirs = [[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];
    const signal = new Map();
    while (queue.length) {
      const [x, y, z, power] = queue.shift();
      if (power <= 0) continue;
      for (const [dx, dy, dz] of dirs) {
        const nx = x + dx, ny = y + dy, nz = z + dz;
        const id = this.world.getBlock(nx, ny, nz);
        const key = nx + ',' + ny + ',' + nz;
        const k = ID_TO_KEY[id];
        if (k === 'redstone') {
          const prev = signal.get(key) || 0;
          if (power - 1 > prev) {
            signal.set(key, power - 1);
            queue.push([nx, ny, nz, power - 1]);
          }
        } else if (k === 'lamp' || k === 'lampOn') {
          signal.set(key, power);
        } else if (k === 'leverOn') {
          // already source
        }
      }
      // also power adjacent to lever without dust
      if (this.world.getBlock(x, y, z) === BLOCKS.leverOn.id) {
        for (const [dx, dy, dz] of dirs) {
          const nx = x + dx, ny = y + dy, nz = z + dz;
          const k = ID_TO_KEY[this.world.getBlock(nx, ny, nz)];
          if (k === 'lamp' || k === 'lampOn') signal.set(nx + ',' + ny + ',' + nz, 8);
          if (k === 'redstone') {
            const key = nx + ',' + ny + ',' + nz;
            if ((signal.get(key) || 0) < 7) {
              signal.set(key, 7);
              queue.push([nx, ny, nz, 7]);
            }
          }
        }
      }
    }

    // Apply lamp states in region
    let changed = false;
    for (let y = oy - R; y <= oy + R; y++) {
      for (let x = ox - R; x <= ox + R; x++) {
        for (let z = oz - R; z <= oz + R; z++) {
          const id = this.world.getBlock(x, y, z);
          const k = ID_TO_KEY[id];
          if (k !== 'lamp' && k !== 'lampOn') continue;
          const key = x + ',' + y + ',' + z;
          const on = (signal.get(key) || 0) > 0;
          const want = on ? BLOCKS.lampOn.id : BLOCKS.lamp.id;
          if (id !== want) {
            this.world.setBlock(x, y, z, want);
            changed = true;
          }
        }
      }
    }
    if (changed && window.SFX) SFX.redstoneClick();
  }

  _explode(cx, cy, cz, radius) {
    if (window.SFX) {
      SFX._playNoise({ duration: 0.4, gain: 0.5, filterFreq: 400, pitch: 0.5, decay: 0.35 });
      SFX._tone(80, 0.3, 'sawtooth', 0.2, 40);
    }
    for (let y = cy - radius; y <= cy + radius; y++) {
      for (let x = cx - radius; x <= cx + radius; x++) {
        for (let z = cz - radius; z <= cz + radius; z++) {
          const d = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2 + (z - cz) ** 2);
          if (d > radius) continue;
          const id = this.world.getBlock(x, y, z);
          const k = ID_TO_KEY[id];
          if (!k || k === 'air' || k === 'bedrock') continue;
          if (Math.random() < 1 - d / (radius + 0.5)) {
            this.world.setBlock(x, y, z, 0);
          }
        }
      }
    }
    // damage player if close
    const pdx = this.pos.x - (cx + 0.5);
    const pdy = this.pos.y - cy;
    const pdz = this.pos.z - (cz + 0.5);
    const pd = Math.sqrt(pdx * pdx + pdy * pdy + pdz * pdz);
    if (pd < radius + 1) {
      this.hurt(Math.ceil((radius + 1 - pd) * 3), { x: pdx, z: pdz });
    }
  }

  _blockIntersectsPlayer(bx, by, bz) {
    const hw = this.width / 2;
    const minX = this.pos.x - hw;
    const maxX = this.pos.x + hw;
    const minY = this.pos.y;
    const maxY = this.pos.y + this.height;
    const minZ = this.pos.z - hw;
    const maxZ = this.pos.z + hw;
    return !(maxX <= bx || minX >= bx + 1 || maxY <= by || minY >= by + 1 || maxZ <= bz || minZ >= bz + 1);
  }
}
