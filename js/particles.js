/**
 * Lightweight particle system for portals, breaks, magic
 */
class ParticleSystem {
  constructor(scene) {
    this.scene = scene;
    this.parts = [];
    this.geo = new THREE.BoxGeometry(0.08, 0.08, 0.08);
  }

  spawn(x, y, z, opts = {}) {
    const n = opts.count || 8;
    const color = opts.color || 0xffffff;
    const life = opts.life || 0.8;
    const speed = opts.speed || 2;
    const gravity = opts.gravity != null ? opts.gravity : 6;
    const size = opts.size || 0.08;
    for (let i = 0; i < n; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: opts.opacity != null ? opts.opacity : 0.9,
      });
      const m = new THREE.Mesh(this.geo, mat);
      m.scale.setScalar(size * (0.6 + Math.random() * 0.8));
      m.position.set(x + (Math.random() - 0.5) * 0.4, y + Math.random() * 0.4, z + (Math.random() - 0.5) * 0.4);
      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * speed,
        Math.random() * speed,
        (Math.random() - 0.5) * speed
      );
      if (opts.up) vel.y = Math.abs(vel.y) + 1;
      this.scene.add(m);
      this.parts.push({ mesh: m, vel, life, maxLife: life, gravity });
    }
  }

  portal(x, y, z, dim) {
    const color = dim === 'end' ? 0xcc66ff : (dim === 'nether' ? 0xff4400 : 0x6633ff);
    this.spawn(x, y, z, { count: 20, color, life: 1.2, speed: 1.5, gravity: -1, size: 0.1, opacity: 0.8 });
  }

  breakBlock(x, y, z, color) {
    this.spawn(x + 0.5, y + 0.5, z + 0.5, { count: 12, color: color || 0x888888, life: 0.6, speed: 3, gravity: 12, size: 0.07 });
  }

  magic(x, y, z) {
    this.spawn(x, y, z, { count: 15, color: 0x66ffcc, life: 1, speed: 2, gravity: 2, size: 0.06 });
  }

  update(dt) {
    for (let i = this.parts.length - 1; i >= 0; i--) {
      const p = this.parts[i];
      p.life -= dt;
      p.vel.y -= p.gravity * dt;
      p.mesh.position.x += p.vel.x * dt;
      p.mesh.position.y += p.vel.y * dt;
      p.mesh.position.z += p.vel.z * dt;
      p.mesh.material.opacity = Math.max(0, p.life / p.maxLife);
      p.mesh.rotation.x += dt * 4;
      p.mesh.rotation.y += dt * 3;
      if (p.life <= 0) {
        this.scene.remove(p.mesh);
        p.mesh.material.dispose();
        this.parts.splice(i, 1);
      }
    }
  }

  clear() {
    for (const p of this.parts) {
      this.scene.remove(p.mesh);
      p.mesh.material.dispose();
    }
    this.parts = [];
  }
}

window.ParticleSystem = ParticleSystem;
