/**
 * First-person 3D hand + held item + richer animations
 */

class HandView {
  constructor(camera, atlas) {
    this.camera = camera;
    this.atlas = atlas;
    this.group = new THREE.Group();
    this.camera.add(this.group);
    this.group.position.set(0.35, -0.45, -0.55);
    this.group.rotation.set(0.15, -0.4, 0.1);

    this.arm = null;
    this.itemMesh = null;
    this.skin = loadSkin();
    this.currentKey = null;
    this.swing = 0;
    this.bob = 0;
    this.eat = 0;
    this.equip = 0;
    this.idle = 0;
    this._tex = null;
    this._buildArm();
  }

  _mat(color, map) {
    if (map) return new THREE.MeshLambertMaterial({ map });
    return new THREE.MeshLambertMaterial({ color });
  }

  _buildArm() {
    while (this.group.children.length) {
      const ch = this.group.children[0];
      this.group.remove(ch);
    }
    const s = this.skin || {};
    let armMat = this._mat(s.skin || 0xc68642);
    let sleeveMat = this._mat(s.shirt || 0x3a7ab8);
    let handMat = armMat;

    // If uploaded skin texture — sample arm/sleeve colors already set; optional textured sleeve strip
    const texSrc = typeof resolveSkinTexture === 'function' ? resolveSkinTexture(s) : null;
    if (texSrc) {
      const loader = new THREE.TextureLoader();
      const tex = loader.load(texSrc);
      tex.magFilter = THREE.NearestFilter;
      tex.minFilter = THREE.NearestFilter;
      tex.generateMipmaps = false;
      // Use as tinted look via canvas crop for sleeve
      sleeveMat = new THREE.MeshLambertMaterial({ map: tex, color: 0xffffff });
      armMat = new THREE.MeshLambertMaterial({ color: s.skin || 0xc68642 });
      handMat = armMat;
      this._tex = tex;
    }

    const sleeve = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.45, 0.18), sleeveMat);
    sleeve.position.set(0, -0.05, 0.05);
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.4, 0.16), armMat);
    arm.position.set(0, -0.35, 0.08);
    const hand = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.12, 0.16), handMat);
    hand.position.set(0, -0.58, 0.1);
    // fingers hint
    const finger = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.08, 0.04), handMat);
    finger.position.set(0.04, -0.66, 0.14);
    this.group.add(sleeve, arm, hand, finger);
    this.arm = arm;
    this.handPart = hand;
    this.sleeve = sleeve;
    if (this.currentKey) this.setItem(this.currentKey);
  }

  setSkin(skin) {
    this.skin = skin;
    this._buildArm();
  }

  setItem(key) {
    if (key !== this.currentKey) this.equip = 1;
    this.currentKey = key;
    if (this.itemMesh) {
      this.group.remove(this.itemMesh);
      this.itemMesh.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) {
          if (Array.isArray(o.material)) o.material.forEach((m) => { if (m.map) m.map.dispose(); m.dispose(); });
          else { if (o.material.map) o.material.map.dispose(); o.material.dispose(); }
        }
      });
      this.itemMesh = null;
    }
    if (!key || !this.atlas) return;

    const isBlock = BLOCKS[key] && !ITEMS[key];
    const g = new THREE.Group();
    if (isBlock) {
      const mats = this.atlas.getMaterials(key);
      if (mats) {
        const mesh = new THREE.Mesh(
          new THREE.BoxGeometry(0.28, 0.28, 0.28),
          mats.map((m) => m.clone())
        );
        g.add(mesh);
      }
    } else {
      const c = document.createElement('canvas');
      c.width = 64; c.height = 64;
      this.atlas.drawIcon(key, c);
      const tex = new THREE.CanvasTexture(c);
      tex.magFilter = THREE.NearestFilter;
      tex.minFilter = THREE.NearestFilter;
      const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide });
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(0.35, 0.35), mat);
      const plane2 = plane.clone();
      plane2.position.z = -0.02;
      g.add(plane, plane2);
      if (key && key.includes('sword')) { g.rotation.z = -0.7; g.rotation.y = 0.3; }
      else if (key && (key.includes('pick') || key.includes('axe') || key.includes('shovel'))) g.rotation.z = -0.5;
      else if (key && key.includes('bow')) { g.rotation.z = -0.2; g.scale.set(1.1, 1.1, 1.1); }
    }
    g.position.set(0.08, -0.55, 0.22);
    this.itemMesh = g;
    this.group.add(g);
  }

  playEat() { this.eat = 1; }

  update(dt, player) {
    if (!player) return;
    this.swing = player.swingAnim || 0;
    this.idle += dt;
    if (this.equip > 0) this.equip = Math.max(0, this.equip - dt * 3);
    if (this.eat > 0) this.eat = Math.max(0, this.eat - dt * 2);

    const moving = Math.hypot(player.vel.x, player.vel.z) > 0.5 && player.onGround && !player.flying;
    const sprint = moving && !player.sneaking && Math.hypot(player.vel.x, player.vel.z) > 3.5;
    if (moving) this.bob += dt * (sprint ? 14 : 10);
    const bobY = moving ? Math.sin(this.bob) * (sprint ? 0.035 : 0.02) : Math.sin(this.idle * 1.5) * 0.008;
    const bobX = moving ? Math.cos(this.bob * 0.5) * 0.015 : 0;

    let rx = 0.15, ry = -0.4, rz = 0.1;
    let px = 0.35 + bobX, py = -0.45 + bobY, pz = -0.55;

    // equip animation (item pop in)
    if (this.equip > 0) {
      py -= this.equip * 0.25;
      rx += this.equip * 0.4;
    }

    // swing attack — more dramatic
    if (this.swing > 0) {
      const t = this.swing;
      const ease = Math.sin(t * Math.PI);
      rx += ease * 1.4;
      ry -= ease * 0.7;
      rz += ease * 0.3;
      pz += ease * 0.15;
      py += ease * 0.2;
      px -= ease * 0.08;
      if (this.itemMesh) this.itemMesh.rotation.x = -ease * 0.8;
    }

    // eat animation
    if (this.eat > 0) {
      const t = this.eat;
      px = 0.15 + Math.sin(t * 20) * 0.02;
      py = -0.25;
      pz = -0.4;
      rx = -0.8;
      ry = 0;
    }

    // sneak lower hand
    if (player.sneaking) py -= 0.08;

    // flying float
    if (player.flying) {
      py += Math.sin(this.idle * 2) * 0.02;
      rx = 0.05;
    }

    this.group.position.set(px, py, pz);
    this.group.rotation.set(rx, ry, rz);

    if (player.selectedKey !== this.currentKey) this.setItem(player.selectedKey);
  }
}

window.HandView = HandView;
