/**
 * Mobs: detailed voxel models + AI (zombie, skeleton, creeper, spider, enderman, slime, cow, pig, sheep, chicken)
 */

const MOB_DEFS = {
  zombie: {
    name: 'Зомби', hostile: true, burnsInSun: true, nightOnly: true, hp: 20, speed: 2.2, damage: 3, range: 1.6, height: 1.95,
    sight: 16, attackRange: 1.4, attackCd: 1.0, color: 0x3d7a3d, head: 0x6b9e5a,
    sounds: { idle: 'zombieIdle', hurt: 'zombieHurt', death: 'zombieDeath', step: 'mobStep' },
  },
  skeleton: {
    name: 'Скелет', hostile: true, burnsInSun: true, nightOnly: true, hp: 20, speed: 2.4, damage: 2, range: 1.7, height: 1.95,
    sight: 18, attackRange: 10, attackCd: 1.6, color: 0xd0d0c0, head: 0xe8e8d8, ranged: true,
    sounds: { idle: 'skeletonIdle', hurt: 'skeletonHurt', death: 'skeletonDeath', shoot: 'bow' },
  },
  creeper: {
    name: 'Крипер', hostile: true, burnsInSun: false, nightOnly: true, hp: 20, speed: 2.0, damage: 0, range: 1.5, height: 1.7,
    sight: 12, attackRange: 2.5, attackCd: 1.5, color: 0x3d8c3d, head: 0x3d8c3d, explode: true,
    sounds: { idle: 'creeperIdle', hurt: 'creeperHurt', death: 'creeperDeath', fuse: 'creeperFuse' },
  },
  spider: {
    name: 'Паук', hostile: true, burnsInSun: false, nightOnly: true, hp: 16, speed: 2.8, damage: 2, range: 1.2, height: 0.9,
    sight: 14, attackRange: 1.3, attackCd: 0.8, color: 0x4a1a1a, head: 0x8b0000,
    sounds: { idle: 'spiderIdle', hurt: 'spiderHurt', death: 'spiderDeath' },
  },
  enderman: {
    name: 'Эндермен', hostile: true, burnsInSun: false, nightOnly: true, hp: 40, speed: 3.0, damage: 5, range: 2.0, height: 2.9,
    sight: 20, attackRange: 1.5, attackCd: 0.7, color: 0x1a0a2a, head: 0x0a0a12, eyes: 0xff00ff,
    sounds: { idle: 'endermanIdle', hurt: 'endermanHurt', death: 'endermanDeath', teleport: 'endermanTp' },
  },
  slime: {
    name: 'Слайм', hostile: true, burnsInSun: false, nightOnly: true, hp: 8, speed: 1.4, damage: 2, range: 1.0, height: 1.0,
    sight: 10, attackRange: 1.2, attackCd: 0.9, color: 0x66cc55, head: 0x66cc55, bounce: true,
    sounds: { idle: 'slimeIdle', hurt: 'slimeHurt', death: 'slimeDeath' },
  },
  cow: {
    name: 'Корова', hostile: false, hp: 10, speed: 1.5, damage: 0, range: 1.3, height: 1.4,
    sight: 8, attackRange: 0, attackCd: 1, color: 0x4a3020, head: 0x3a2818, spots: 0xffffff,
    sounds: { idle: 'cowIdle', hurt: 'cowHurt', death: 'cowDeath' },
    drops: ['beef', 'leather'],
  },
  pig: {
    name: 'Свинья', hostile: false, hp: 10, speed: 1.6, damage: 0, range: 1.2, height: 0.9,
    sight: 8, attackRange: 0, attackCd: 1, color: 0xf0a0a8, head: 0xf0a0a8,
    sounds: { idle: 'pigIdle', hurt: 'pigHurt', death: 'pigDeath' },
    drops: ['pork'],
  },
  sheep: {
    name: 'Овца', hostile: false, hp: 8, speed: 1.5, damage: 0, range: 1.2, height: 1.3,
    sight: 8, attackRange: 0, attackCd: 1, color: 0xf5f5f5, head: 0x222222,
    sounds: { idle: 'sheepIdle', hurt: 'sheepHurt', death: 'sheepDeath' },
    drops: ['wool_white', 'mutton'],
  },
  chicken: {
    name: 'Курица', hostile: false, hp: 4, speed: 1.8, damage: 0, range: 0.9, height: 0.7,
    sight: 6, attackRange: 0, attackCd: 1, color: 0xffffff, head: 0xff4444,
    sounds: { idle: 'chickenIdle', hurt: 'chickenHurt', death: 'chickenDeath' },
    drops: ['feather', 'chicken_raw'],
  },
};

function mat(color, opts = {}) {
  return new THREE.MeshLambertMaterial({ color, ...opts });
}

function box(w, h, d, color, x, y, z, rx = 0, ry = 0, rz = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(color));
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  return m;
}

/** Build detailed humanoid-like mob mesh */
function buildMobMesh(type) {
  const def = MOB_DEFS[type];
  const g = new THREE.Group();
  g.userData.parts = {};

  if (type === 'spider') {
    // abdomen
    g.add(box(0.9, 0.55, 1.1, def.color, 0, 0.4, -0.15));
    // cephalothorax
    g.add(box(0.7, 0.5, 0.65, 0x3a1515, 0, 0.42, 0.45));
    // head / eyes
    const head = box(0.45, 0.35, 0.4, def.head, 0, 0.5, 0.85);
    g.add(head);
    // 8 red eyes
    for (let i = 0; i < 4; i++) {
      g.add(box(0.08, 0.08, 0.05, 0xff2222, -0.15 + i * 0.1, 0.58, 1.05));
    }
    // legs
    const legs = [];
    for (let s = -1; s <= 1; s += 2) {
      for (let i = 0; i < 4; i++) {
        const leg = new THREE.Group();
        const upper = box(0.12, 0.12, 0.55, def.color, 0, 0, 0.2);
        const lower = box(0.1, 0.1, 0.5, 0x2a1010, 0, -0.05, 0.65);
        leg.add(upper, lower);
        leg.position.set(s * 0.4, 0.35, 0.3 - i * 0.25);
        leg.rotation.z = s * 0.4;
        leg.rotation.y = s * (0.2 + i * 0.08);
        g.add(leg);
        legs.push(leg);
      }
    }
    g.userData.parts.legs = legs;
    g.userData.parts.head = head;
  } else if (type === 'creeper') {
    // feet
    g.add(box(0.35, 0.35, 0.35, def.color, -0.2, 0.18, 0.05));
    g.add(box(0.35, 0.35, 0.35, def.color, 0.2, 0.18, 0.05));
    // body tall
    const body = box(0.7, 0.9, 0.4, def.color, 0, 0.85, 0);
    g.add(body);
    // head cube
    const head = box(0.7, 0.7, 0.7, def.head, 0, 1.55, 0);
    g.add(head);
    // face (dark pixels as boxes)
    g.add(box(0.12, 0.12, 0.05, 0x111111, -0.18, 1.65, 0.36));
    g.add(box(0.12, 0.12, 0.05, 0x111111, 0.18, 1.65, 0.36));
    g.add(box(0.28, 0.18, 0.05, 0x111111, 0, 1.4, 0.36));
    // mottled darker patches
    g.add(box(0.2, 0.25, 0.42, 0x2a602a, -0.15, 0.9, 0));
    g.add(box(0.18, 0.2, 0.42, 0x2a602a, 0.2, 0.7, 0));
    g.userData.parts.head = head;
    g.userData.parts.body = body;
  } else if (type === 'slime') {
    const body = box(0.95, 0.95, 0.95, def.color, 0, 0.5, 0);
    body.material = mat(def.color, { transparent: true, opacity: 0.85 });
    g.add(body);
    // inner core
    g.add(box(0.45, 0.45, 0.45, 0x44aa33, 0, 0.5, 0));
    // eyes
    g.add(box(0.15, 0.2, 0.08, 0x111111, -0.22, 0.65, 0.48));
    g.add(box(0.15, 0.2, 0.08, 0x111111, 0.22, 0.65, 0.48));
    g.add(box(0.35, 0.1, 0.08, 0x111111, 0, 0.4, 0.48));
    g.userData.parts.body = body;
  } else if (type === 'enderman') {
    // long thin legs
    g.add(box(0.22, 1.1, 0.22, def.color, -0.15, 0.55, 0));
    g.add(box(0.22, 1.1, 0.22, def.color, 0.15, 0.55, 0));
    // body
    g.add(box(0.5, 0.85, 0.3, def.color, 0, 1.5, 0));
    // long arms
    const armL = box(0.18, 1.2, 0.18, def.color, -0.4, 1.3, 0);
    const armR = box(0.18, 1.2, 0.18, def.color, 0.4, 1.3, 0);
    g.add(armL, armR);
    // head
    const head = box(0.5, 0.5, 0.5, def.head, 0, 2.2, 0);
    g.add(head);
    // purple eyes
    g.add(box(0.14, 0.08, 0.05, def.eyes, -0.12, 2.25, 0.26));
    g.add(box(0.14, 0.08, 0.05, def.eyes, 0.12, 2.25, 0.26));
    g.userData.parts.head = head;
    g.userData.parts.armL = armL;
    g.userData.parts.armR = armR;
  } else if (type === 'cow' || type === 'pig' || type === 'sheep') {
    const bodyY = type === 'pig' ? 0.55 : 0.75;
    const bodyH = type === 'pig' ? 0.55 : 0.7;
    const bodyL = type === 'cow' ? 1.1 : 0.95;
    g.add(box(0.75, bodyH, bodyL, def.color, 0, bodyY, 0));
    // legs
    const legH = type === 'pig' ? 0.35 : 0.5;
    const ly = legH / 2;
    [[-0.25, 0.3], [0.25, 0.3], [-0.25, -0.3], [0.25, -0.3]].forEach(([lx, lz]) => {
      g.add(box(0.18, legH, 0.18, type === 'sheep' ? 0x333 : def.color, lx, ly, lz));
    });
    // head
    const head = box(0.45, 0.4, 0.45, def.head, 0, bodyY + 0.15, bodyL * 0.55);
    g.add(head);
    if (type === 'cow') {
      g.add(box(0.12, 0.2, 0.12, 0xeeeeee, -0.2, bodyY + 0.4, bodyL * 0.55)); // horns
      g.add(box(0.12, 0.2, 0.12, 0xeeeeee, 0.2, bodyY + 0.4, bodyL * 0.55));
      g.add(box(0.2, 0.15, 0.15, 0xffaaaa, 0, bodyY + 0.05, bodyL * 0.75)); // snout
      // spots
      g.add(box(0.25, 0.2, 0.3, 0xffffff, -0.2, bodyY + 0.15, 0.1));
      g.add(box(0.2, 0.18, 0.25, 0xffffff, 0.22, bodyY - 0.05, -0.2));
    }
    if (type === 'pig') {
      g.add(box(0.22, 0.15, 0.18, 0xffb0b8, 0, bodyY + 0.05, 0.65)); // snout
      g.add(box(0.08, 0.12, 0.05, 0x222, -0.1, bodyY + 0.2, 0.72));
      g.add(box(0.08, 0.12, 0.05, 0x222, 0.1, bodyY + 0.2, 0.72));
    }
    if (type === 'sheep') {
      // fluffy wool body already white; head dark
      g.add(box(0.18, 0.12, 0.15, 0xffaaaa, 0, bodyY + 0.05, bodyL * 0.75));
    }
    g.userData.parts.head = head;
  } else if (type === 'chicken') {
    g.add(box(0.4, 0.4, 0.5, def.color, 0, 0.45, 0));
    // legs
    g.add(box(0.08, 0.3, 0.08, 0xf0c040, -0.1, 0.15, 0));
    g.add(box(0.08, 0.3, 0.08, 0xf0c040, 0.1, 0.15, 0));
    // feet
    g.add(box(0.16, 0.05, 0.2, 0xf0c040, -0.1, 0.02, 0.05));
    g.add(box(0.16, 0.05, 0.2, 0xf0c040, 0.1, 0.02, 0.05));
    // head
    const head = box(0.28, 0.28, 0.28, def.color, 0, 0.75, 0.28);
    g.add(head);
    // comb / beak
    g.add(box(0.1, 0.12, 0.08, def.head, 0, 0.9, 0.28));
    g.add(box(0.12, 0.08, 0.14, 0xffaa00, 0, 0.72, 0.48));
    // wings
    const wingL = box(0.08, 0.25, 0.35, 0xeeeeee, -0.28, 0.5, 0);
    const wingR = box(0.08, 0.25, 0.35, 0xeeeeee, 0.28, 0.5, 0);
    g.add(wingL, wingR);
    g.userData.parts.head = head;
    g.userData.parts.wingL = wingL;
    g.userData.parts.wingR = wingR;
  } else {
    // Humanoid: zombie / skeleton — more detailed layers
    const skin = def.color;
    const headC = def.head;
    // boots
    g.add(box(0.3, 0.18, 0.32, 0x1a1a1a, -0.16, 0.09, 0.02));
    g.add(box(0.3, 0.18, 0.32, 0x1a1a1a, 0.16, 0.09, 0.02));
    // legs
    const legL = box(0.26, 0.62, 0.26, type === 'skeleton' ? 0xd8d8c8 : 0x2a3a5a, -0.16, 0.42, 0);
    const legR = box(0.26, 0.62, 0.26, type === 'skeleton' ? 0xd8d8c8 : 0x2a3a5a, 0.16, 0.42, 0);
    g.add(legL, legR);
    // hips / belt
    g.add(box(0.58, 0.14, 0.32, 0x222, 0, 0.78, 0));
    // body / shirt with outer layer
    const bodyCol = type === 'zombie' ? 0x3a5a7a : skin;
    g.add(box(0.56, 0.72, 0.32, bodyCol, 0, 1.1, 0));
    g.add(box(0.6, 0.2, 0.34, bodyCol, 0, 1.35, 0)); // shoulders
    // arms with sleeves
    const armL = box(0.22, 0.68, 0.22, skin, -0.44, 1.08, 0);
    const armR = box(0.22, 0.68, 0.22, skin, 0.44, 1.08, 0);
    g.add(box(0.26, 0.28, 0.26, bodyCol, -0.44, 1.32, 0));
    g.add(box(0.26, 0.28, 0.26, bodyCol, 0.44, 1.32, 0));
    if (type === 'zombie') {
      armL.rotation.x = -1.15;
      armR.rotation.x = -1.15;
    }
    g.add(armL, armR);
    // head + second layer (hat/hair)
    const head = box(0.52, 0.52, 0.52, headC, 0, 1.68, 0);
    g.add(head);
    g.add(box(0.56, 0.16, 0.56, type === 'zombie' ? 0x2a4a2a : 0xc8c8b8, 0, 1.92, 0));
    // ears / jaw detail
    if (type === 'zombie') {
      g.add(box(0.12, 0.1, 0.06, 0x111, -0.14, 1.74, 0.28));
      g.add(box(0.12, 0.1, 0.06, 0x111, 0.14, 1.74, 0.28));
      g.add(box(0.22, 0.08, 0.06, 0x4a2020, 0, 1.54, 0.28));
      g.add(box(0.08, 0.14, 0.06, 0x3d7a3d, -0.28, 1.68, 0)); // ear
      g.add(box(0.08, 0.14, 0.06, 0x3d7a3d, 0.28, 1.68, 0));
    } else if (type === 'skeleton') {
      g.add(box(0.12, 0.14, 0.06, 0x111, -0.14, 1.74, 0.28));
      g.add(box(0.12, 0.14, 0.06, 0x111, 0.14, 1.74, 0.28));
      g.add(box(0.2, 0.08, 0.06, 0x111, 0, 1.54, 0.28));
      g.add(box(0.1, 0.5, 0.1, 0x8b5a2b, 0.52, 1.15, 0.12)); // bow
      g.add(box(0.06, 0.06, 0.28, 0xddd, 0.52, 1.35, 0.2));
    }
    g.userData.parts = { head, armL, armR, legL, legR };
  }

  // shadow disc
  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.35, 12),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.3, depthWrite: false })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.02;
  g.add(shadow);

  // nameplate later via sprite optional
  g.scale.set(1, 1, 1);
  return g;
}

class Mob {
  constructor(type, x, y, z, world) {
    this.type = type;
    this.def = MOB_DEFS[type];
    this.world = world;
    this.pos = new THREE.Vector3(x, y, z);
    this.vel = new THREE.Vector3();
    this.yaw = Math.random() * Math.PI * 2;
    this.hp = this.def.hp;
    this.maxHp = this.def.hp;
    this.dead = false;
    this.hurtCd = 0;
    this.attackCd = 0;
    this.idleTimer = 1 + Math.random() * 3;
    this.wanderYaw = this.yaw;
    this.fuse = 0; // creeper
    this.age = 0;
    this.anim = 0;
    this.mesh = buildMobMesh(type);
    this.mesh.position.copy(this.pos);
    this.onGround = false;
  }

  distanceTo(player) {
    return this.pos.distanceTo(player.pos);
  }

  hurt(amount, knock, sfx) {
    if (this.dead || this.hurtCd > 0) return false;
    this.hp -= amount;
    this.hurtCd = 0.35;
    if (knock) {
      this.vel.x += knock.x * 5;
      this.vel.z += knock.z * 5;
      this.vel.y = 3.5;
    }
    // flash red
    this.mesh.traverse((o) => {
      if (o.material && o.material.color && !o.userData._oc) {
        o.userData._oc = o.material.color.getHex();
      }
      if (o.material && o.material.color) o.material.color.setHex(0xff4444);
    });
    setTimeout(() => {
      this.mesh.traverse((o) => {
        if (o.material && o.material.color && o.userData._oc != null) {
          o.material.color.setHex(o.userData._oc);
        }
      });
    }, 120);
    if (sfx && this.def.sounds.hurt) sfx[this.def.sounds.hurt] && sfx[this.def.sounds.hurt]();
    if (this.hp <= 0) this.kill(sfx);
    return true;
  }

  kill(sfx) {
    this.dead = true;
    this.hp = 0;
    if (sfx && this.def.sounds.death) sfx[this.def.sounds.death] && sfx[this.def.sounds.death]();
  }

  update(dt, player, sfx, onExplode) {
    if (this.dead) return;
    this.age += dt;
    this.hurtCd = Math.max(0, this.hurtCd - dt);
    this.attackCd = Math.max(0, this.attackCd - dt);
    this.anim += dt;

    const dist = this.distanceTo(player);
    const hostile = this.def.hostile && !player.flying && !player.dead;
    let target = null;

    if (hostile && dist < this.def.sight) {
      // line of sight rough: always for now
      target = player;
    }

    // AI
    if (target) {
      const dx = target.pos.x - this.pos.x;
      const dz = target.pos.z - this.pos.z;
      this.yaw = Math.atan2(-dx, -dz);

      if (this.def.explode) {
        // creeper fuse
        if (dist < this.def.attackRange) {
          if (this.fuse === 0 && sfx) sfx.creeperFuse && sfx.creeperFuse();
          this.fuse += dt;
          // flash
          const flash = Math.sin(this.fuse * 20) > 0;
          this.mesh.traverse((o) => {
            if (o.material && o.material.emissive) {
              o.material.emissive.setHex(flash ? 0x333333 : 0x000000);
            } else if (o.material && o.material.color && flash) {
              // skip
            }
          });
          this.mesh.scale.setScalar(1 + this.fuse * 0.15);
          if (this.fuse >= 1.4) {
            this.dead = true;
            if (onExplode) onExplode(this.pos.x, this.pos.y, this.pos.z, 3);
            if (sfx) sfx.explode && sfx.explode();
            return;
          }
        } else {
          this.fuse = Math.max(0, this.fuse - dt * 2);
          this.mesh.scale.setScalar(1);
        }
      }

      if (dist > (this.def.ranged ? 4 : this.def.attackRange * 0.85)) {
        // chase
        const sp = this.def.speed;
        this.vel.x = -Math.sin(this.yaw) * sp;
        this.vel.z = -Math.cos(this.yaw) * sp;
      } else {
        this.vel.x *= 0.5;
        this.vel.z *= 0.5;
      }

      // attack
      if (this.attackCd <= 0) {
        if (this.def.ranged && dist < this.def.attackRange && dist > 2) {
          this.attackCd = this.def.attackCd;
          if (sfx && this.def.sounds.shoot) sfx[this.def.sounds.shoot] && sfx[this.def.sounds.shoot]();
          // projectile hit chance simplified: instant damage if roughly looking
          if (Math.random() < 0.7) {
            const knock = { x: dx, z: dz };
            const len = Math.hypot(dx, dz) || 1;
            knock.x /= len; knock.z /= len;
            player.hurt(this.def.damage + 2, knock);
          }
        } else if (!this.def.explode && !this.def.ranged && dist < this.def.attackRange) {
          this.attackCd = this.def.attackCd;
          if (sfx) sfx.hit && sfx.hit();
          const knock = { x: dx, z: dz };
          const len = Math.hypot(dx, dz) || 1;
          knock.x /= len; knock.z /= len;
          player.hurt(this.def.damage, knock);
        }
      }

      // enderman teleport if far
      if (this.type === 'enderman' && dist > 12 && Math.random() < dt * 0.3) {
        const a = Math.random() * Math.PI * 2;
        this.pos.x = player.pos.x + Math.cos(a) * 4;
        this.pos.z = player.pos.z + Math.sin(a) * 4;
        this._snapGround();
        if (sfx) sfx.endermanTp && sfx.endermanTp();
      }
    } else {
      // wander / flee if passive hit later
      this.idleTimer -= dt;
      this.fuse = 0;
      this.mesh.scale.setScalar(1);
      if (this.idleTimer <= 0) {
        this.idleTimer = 2 + Math.random() * 4;
        this.wanderYaw = Math.random() * Math.PI * 2;
        if (sfx && this.def.sounds.idle && Math.random() < 0.5) {
          const fn = sfx[this.def.sounds.idle];
          if (fn && dist < 20) fn();
        }
      }
      if (!this.def.bounce) {
        this.vel.x = -Math.sin(this.wanderYaw) * this.def.speed * 0.4;
        this.vel.z = -Math.cos(this.wanderYaw) * this.def.speed * 0.4;
        this.yaw = this.wanderYaw;
      } else {
        // slime hop
        if (this.onGround && Math.random() < dt * 1.5) {
          this.vel.y = 5;
          this.vel.x = -Math.sin(this.wanderYaw) * this.def.speed;
          this.vel.z = -Math.cos(this.wanderYaw) * this.def.speed;
          this.yaw = this.wanderYaw;
        }
      }
    }

    // gravity + collision simple
    this.vel.y -= 22 * dt;
    if (this.vel.y < -30) this.vel.y = -30;

    this.pos.x += this.vel.x * dt;
    this._collide('x');
    this.pos.z += this.vel.z * dt;
    this._collide('z');
    this.pos.y += this.vel.y * dt;
    this._collide('y');

    // animate
    this._animate(dt);

    this.mesh.position.set(this.pos.x, this.pos.y, this.pos.z);
    this.mesh.rotation.y = this.yaw;
  }

  _animate(dt) {
    const p = this.mesh.userData.parts || {};
    const walk = Math.sin(this.anim * 8) * 0.5;
    if (p.legL) p.legL.rotation.x = walk;
    if (p.legR) p.legR.rotation.x = -walk;
    if (p.armL && this.type !== 'zombie') p.armL.rotation.x = -walk * 0.6;
    if (p.armR && this.type !== 'zombie') p.armR.rotation.x = walk * 0.6;
    if (p.wingL) p.wingL.rotation.z = Math.sin(this.anim * 12) * 0.5;
    if (p.wingR) p.wingR.rotation.z = -Math.sin(this.anim * 12) * 0.5;
    if (this.type === 'slime' && p.body) {
      const s = 1 + Math.sin(this.anim * 6) * 0.08;
      p.body.scale.set(s, 1 / s, s);
    }
    if (p.legs) {
      p.legs.forEach((leg, i) => {
        leg.rotation.x = Math.sin(this.anim * 10 + i) * 0.3;
      });
    }
  }

  _snapGround() {
    for (let y = Math.floor(this.pos.y + 5); y > 0; y--) {
      if (this.world.isSolid(Math.floor(this.pos.x), y, Math.floor(this.pos.z))) {
        this.pos.y = y + 1;
        return;
      }
    }
  }

  _collide(axis) {
    const w = 0.35, h = this.def.height;
    const minX = Math.floor(this.pos.x - w);
    const maxX = Math.floor(this.pos.x + w);
    const minY = Math.floor(this.pos.y + 0.01);
    const maxY = Math.floor(this.pos.y + h - 0.01);
    const minZ = Math.floor(this.pos.z - w);
    const maxZ = Math.floor(this.pos.z + w);
    if (axis === 'y') this.onGround = false;

    for (let y = minY; y <= maxY; y++) {
      for (let x = minX; x <= maxX; x++) {
        for (let z = minZ; z <= maxZ; z++) {
          if (!this.world.isSolid(x, y, z)) continue;
          if (axis === 'x') {
            if (this.vel.x > 0) this.pos.x = x - w - 0.001;
            else this.pos.x = x + 1 + w + 0.001;
            this.vel.x = 0;
            // jump over small blocks
            if (this.onGround) this.vel.y = 6;
          } else if (axis === 'z') {
            if (this.vel.z > 0) this.pos.z = z - w - 0.001;
            else this.pos.z = z + 1 + w + 0.001;
            this.vel.z = 0;
            if (this.onGround) this.vel.y = 6;
          } else {
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
    if (this.pos.y < 1) { this.pos.y = 1; this.vel.y = 0; this.onGround = true; }
  }

  dispose(scene) {
    scene.remove(this.mesh);
    this.mesh.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) o.material.dispose();
    });
  }
}

// fix enderman check - use this.type
// (patched in update via string - I'll fix when writing)

class MobManager {
  constructor(scene, world) {
    this.scene = scene;
    this.world = world;
    this.mobs = [];
    this.spawnTimer = 2;
    this.maxMobs = 36;
    this.maxHostile = 22;
    this.enabled = true;
    /** 0 day .. 1 night — set from game loop */
    this.timePhase = 0;
    this.dimension = 'overworld';
  }

  setWorld(world) {
    this.clear();
    this.world = world;
  }

  setTime(timePhase, dimension) {
    this.timePhase = timePhase != null ? timePhase : 0;
    if (dimension) this.dimension = dimension;
  }

  isNight() {
    // night when sky is dark; nether always "dark"
    if (this.dimension === 'nether') return true;
    if (this.dimension === 'end') return true;
    return this.timePhase > 0.55 && this.timePhase < 0.95;
  }

  isDaySun() {
    if (this.dimension === 'nether' || this.dimension === 'end') return false;
    return this.timePhase < 0.48 || this.timePhase > 0.98;
  }

  clear() {
    for (const m of this.mobs) m.dispose(this.scene);
    this.mobs = [];
  }

  spawn(type, x, y, z) {
    if (!MOB_DEFS[type] || !this.world) return null;
    const m = new Mob(type, x, y, z, this.world);
    this.scene.add(m.mesh);
    this.mobs.push(m);
    return m;
  }

  spawnNear(player, type) {
    const a = Math.random() * Math.PI * 2;
    const r = 14 + Math.random() * 28;
    const x = player.pos.x + Math.cos(a) * r;
    const z = player.pos.z + Math.sin(a) * r;
    let y = Math.floor(player.pos.y + 12);
    for (; y > 1; y--) {
      if (this.world.isSolid(Math.floor(x), y, Math.floor(z))) {
        y = y + 1;
        break;
      }
    }
    if (Math.hypot(x - player.pos.x, z - player.pos.z) < 10) return null;
    // no spawn in water column top
    const below = this.world.getBlock(Math.floor(x), y - 1, Math.floor(z));
    if (ID_TO_KEY[below] === 'water') return null;
    return this.spawn(type, x, y, z);
  }

  _countHostile() {
    let n = 0;
    for (const m of this.mobs) if (m.def && m.def.hostile) n++;
    return n;
  }

  update(dt, player, sfx, onExplode) {
    if (!this.enabled || !player || !this.world) return;

    const night = this.isNight();
    const daySun = this.isDaySun();

    // spawn logic
    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0 && this.mobs.length < this.maxMobs) {
      this.spawnTimer = night ? (1.8 + Math.random() * 2.2) : (4 + Math.random() * 5);
      const roll = Math.random();
      let type;

      if (night && this._countHostile() < this.maxHostile) {
        // hostiles ONLY at night
        if (roll < 0.28) type = 'zombie';
        else if (roll < 0.48) type = 'skeleton';
        else if (roll < 0.62) type = 'creeper';
        else if (roll < 0.74) type = 'spider';
        else if (roll < 0.82) type = 'slime';
        else if (roll < 0.88) type = 'enderman';
        else if (roll < 0.93) type = 'cow';
        else if (roll < 0.96) type = 'pig';
        else if (roll < 0.98) type = 'sheep';
        else type = 'chicken';
      } else {
        // day: only peaceful animals
        if (roll < 0.28) type = 'cow';
        else if (roll < 0.52) type = 'pig';
        else if (roll < 0.76) type = 'sheep';
        else type = 'chicken';
      }

      // never spawn nightOnly hostiles during day
      if (MOB_DEFS[type].hostile && MOB_DEFS[type].nightOnly && !night) {
        type = 'cow';
      }
      this.spawnNear(player, type);
    }

    // update mobs
    for (let i = this.mobs.length - 1; i >= 0; i--) {
      const m = this.mobs[i];
      if (m.distanceTo(player) > 80) {
        m.dispose(this.scene);
        this.mobs.splice(i, 1);
        continue;
      }
      if (m.dead) {
        m.dispose(this.scene);
        this.mobs.splice(i, 1);
        continue;
      }

      // Daylight burning for undead (zombie/skeleton)
      if (daySun && m.def.burnsInSun) {
        const bx = Math.floor(m.pos.x);
        const by = Math.floor(m.pos.y + m.def.height * 0.9);
        const bz = Math.floor(m.pos.z);
        // simple sky exposure: no solid 8 blocks above head
        let covered = false;
        for (let yy = by; yy < by + 10 && yy < WORLD_HEIGHT; yy++) {
          if (this.world.isSolid(bx, yy, bz)) { covered = true; break; }
        }
        if (!covered) {
          m.hurt(2.5 * dt * 4, null, null); // ~10 dmg/sec burn
          // fire visual: orange flash
          if (Math.random() < dt * 8) {
            m.mesh.traverse((o) => {
              if (o.material && o.material.emissive) o.material.emissive.setHex(0xff4400);
            });
            setTimeout(() => {
              if (!m.mesh) return;
              m.mesh.traverse((o) => {
                if (o.material && o.material.emissive) o.material.emissive.setHex(0x000000);
              });
            }, 80);
          }
          if (sfx && Math.random() < dt * 2) sfx.hurt && sfx.hurt();
        }
      }

      // At dawn, non-burning hostiles slowly despawn (creeper/spider leave)
      if (daySun && m.def.hostile && !m.def.burnsInSun && Math.random() < dt * 0.15) {
        m.kill(sfx);
      }

      m.update(dt, player, sfx, onExplode);
    }
  }

  /** Raycast attack against mobs */
  tryHit(origin, dir, range, damage, sfx) {
    let best = null, bestT = range;
    for (const m of this.mobs) {
      if (m.dead) continue;
      // AABB ray approx: closest point
      const center = m.pos.clone();
      center.y += m.def.height * 0.5;
      const to = center.clone().sub(origin);
      const t = to.dot(dir);
      if (t < 0 || t > bestT) continue;
      const closest = origin.clone().addScaledVector(dir, t);
      const rad = 0.55;
      if (closest.distanceTo(center) < rad + 0.4) {
        bestT = t;
        best = m;
      }
    }
    if (best) {
      const knock = dir.clone();
      best.hurt(damage, { x: knock.x, z: knock.z }, sfx);
      if (sfx) sfx.hit && sfx.hit();
      return best;
    }
    return null;
  }

  count() {
    return this.mobs.length;
  }
}

window.MobManager = MobManager;
window.MOB_DEFS = MOB_DEFS;
