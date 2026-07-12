/**
 * BrowserCraft multiplayer client
 * Connects to /ws (or custom URL), syncs players / blocks / chat
 */

class Multiplayer {
  constructor() {
    this.ws = null;
    this.id = null;
    this.connected = false;
    this.seed = null;
    this.remote = new Map(); // id -> { mesh, name, color, x,y,z,yaw,pitch, target... }
    this.pendingBlocks = null;
    this.chatLog = [];
    this.onChat = null;
    this.onStatus = null;
    this.onWelcome = null;
    this.scene = null;
    this._moveAcc = 0;
    this._lastSent = { x: 0, y: 0, z: 0, yaw: 0, pitch: 0 };
    this.serverUrl = '';
    this.playerName = 'Игрок';
    this._blockHandler = null; // set by game: (x,y,z,id, remote)=>void
  }

  setScene(scene) {
    this.scene = scene;
  }

  setBlockHandler(fn) {
    this._blockHandler = fn;
  }

  /** Resolve WebSocket URL from page or custom input */
  static resolveUrl(custom) {
    if (custom && custom.trim()) {
      let u = custom.trim();
      // allow host only
      if (!/^wss?:\/\//i.test(u) && !/^https?:\/\//i.test(u)) {
        // if looks like domain with path
        if (u.includes('localhost') || /^\d+\.\d+\.\d+\.\d+/.test(u) || u.includes('.')) {
          const proto = location.protocol === 'https:' ? 'wss://' : 'ws://';
          if (!u.includes('/')) u = u.replace(/\/$/, '') + '/ws';
          return proto + u.replace(/^\/\//, '');
        }
      }
      if (/^https:\/\//i.test(u)) u = 'wss://' + u.slice(8);
      if (/^http:\/\//i.test(u)) u = 'ws://' + u.slice(7);
      if (/^wss?:\/\//i.test(u) && !u.includes('/ws')) {
        u = u.replace(/\/$/, '') + '/ws';
      }
      return u;
    }
    // same host as page
    const proto = location.protocol === 'https:' ? 'wss://' : 'ws://';
    return proto + location.host + '/ws';
  }

  connect(customUrl, name) {
    this.disconnect();
    this.playerName = (name || 'Игрок').slice(0, 16);
    this.serverUrl = Multiplayer.resolveUrl(customUrl);
    this._setStatus('Подключение к ' + this.serverUrl + '…');

    // localtunnel/cloudflare free often break WebSocket — warn
    if (/loca\.lt|trycloudflare|pinggy|serveo/i.test(this.serverUrl)) {
      this._setStatus('Подключение… (туннель может резать WS; если висит — открой bore.pub)', false);
    }

    let ws;
    try {
      ws = new WebSocket(this.serverUrl);
    } catch (e) {
      this._setStatus('Ошибка URL: ' + e.message, true);
      return;
    }
    this.ws = ws;

    const timeout = setTimeout(() => {
      if (!this.connected) {
        try { ws.close(); } catch {}
        this._setStatus(
          'Таймаут WebSocket. localtunnel часто ломает WS. Открой http://bore.pub:ПОРТ и зайди снова (адрес пустой).',
          true
        );
      }
    }, 8000);

    ws.onopen = () => {
      clearTimeout(timeout);
      this.connected = true;
      this._setStatus('Онлайн ✓ ' + this.serverUrl);
      this.send({ type: 'hello', name: this.playerName });
    };

    ws.onclose = () => {
      clearTimeout(timeout);
      this.connected = false;
      if (!this._lastWelcome) this._setStatus('Отключено / туннель не пустил WebSocket', true);
      else this._setStatus('Отключено', true);
      this._clearRemotes();
    };

    ws.onerror = () => {
      this._setStatus('Ошибка WS (туннель/сервер). Попробуй bore.pub вместо loca.lt', true);
    };

    ws.onmessage = (ev) => {
      let msg;
      try { msg = JSON.parse(ev.data); } catch { return; }
      if (msg.type === 'welcome') this._lastWelcome = true;
      this._handle(msg);
    };
  }

  disconnect() {
    if (this.ws) {
      try { this.ws.close(); } catch {}
      this.ws = null;
    }
    this.connected = false;
    this.id = null;
    this._clearRemotes();
  }

  send(obj) {
    if (this.ws && this.ws.readyState === 1) {
      this.ws.send(JSON.stringify(obj));
    }
  }

  sendMove(player, dt) {
    if (!this.connected) return;
    this._moveAcc += dt;
    if (this._moveAcc < 0.05) return;
    this._moveAcc = 0;
    const x = player.pos.x, y = player.pos.y, z = player.pos.z;
    const yaw = player.yaw, pitch = player.pitch;
    const l = this._lastSent;
    if (
      Math.abs(x - l.x) < 0.02 &&
      Math.abs(y - l.y) < 0.02 &&
      Math.abs(z - l.z) < 0.02 &&
      Math.abs(yaw - l.yaw) < 0.01 &&
      Math.abs(pitch - l.pitch) < 0.01
    ) return;
    this._lastSent = { x, y, z, yaw, pitch };
    this.send({ type: 'move', x, y, z, yaw, pitch });
  }

  sendBlock(x, y, z, id) {
    if (!this.connected) return;
    this.send({ type: 'block', x, y, z, id });
  }

  sendChat(text) {
    if (!this.connected || !text) return;
    this.send({ type: 'chat', text: String(text).slice(0, 200) });
  }

  _handle(msg) {
    switch (msg.type) {
      case 'welcome':
        this.id = msg.id;
        this.seed = msg.seed;
        this.pendingBlocks = msg.blocks || {};
        if (msg.name) this.playerName = msg.name;
        for (const id of Object.keys(msg.players || {})) {
          this._upsertRemote(msg.players[id]);
        }
        if (this.onWelcome) this.onWelcome(msg);
        this._setStatus('В игре как ' + this.playerName + ' · seed ' + msg.seed);
        break;
      case 'join':
        if (msg.player && msg.player.id !== this.id) this._upsertRemote(msg.player);
        this._pushChat('• ' + (msg.player && msg.player.name) + ' зашёл', '#aaa');
        break;
      case 'leave':
        this._removeRemote(msg.id);
        this._pushChat('• игрок вышел', '#888');
        break;
      case 'move':
        if (msg.id === this.id) return;
        this._upsertRemote(msg);
        break;
      case 'name':
        if (this.remote.has(msg.id)) {
          this.remote.get(msg.id).name = msg.name;
          this._updateLabel(msg.id);
        }
        break;
      case 'block':
        if (this._blockHandler) {
          this._blockHandler(msg.x, msg.y, msg.z, msg.id, true);
        }
        break;
      case 'chat':
        this._pushChat(msg.name + ': ' + msg.text, '#' + (msg.color || 0xffffff).toString(16).padStart(6, '0'));
        break;
      case 'error':
        this._setStatus(msg.message || 'Ошибка', true);
        break;
      default:
        break;
    }
  }

  applyPendingBlocks(world) {
    if (!this.pendingBlocks || !world) return;
    for (const key of Object.keys(this.pendingBlocks)) {
      const [x, y, z] = key.split(',').map(Number);
      const id = this.pendingBlocks[key];
      world.setBlock(x, y, z, id);
    }
    this.pendingBlocks = null;
  }

  _upsertRemote(data) {
    if (!data || !data.id || data.id === this.id) return;
    let r = this.remote.get(data.id);
    if (!r) {
      r = this._createRemoteMesh(data);
      this.remote.set(data.id, r);
    }
    if (data.name) r.name = data.name;
    if (data.color != null) r.color = data.color;
    if (data.x != null) {
      r.tx = data.x; r.ty = data.y; r.tz = data.z;
      r.tyaw = data.yaw || 0;
      r.tpitch = data.pitch || 0;
      // first snap
      if (r.x == null) {
        r.x = data.x; r.y = data.y; r.z = data.z;
        r.yaw = data.yaw || 0;
      }
    }
    this._updateLabel(data.id);
  }

  _createRemoteMesh(data) {
    const color = data.color || 0x3498db;
    const group = new THREE.Group();
    const skin = 0xffe0bd;
    const pants = 0x2c3e50;
    const boots = 0x1a1a1a;

    // boots + legs
    group.add(new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.16, 0.32), new THREE.MeshLambertMaterial({ color: boots })).translateX(-0.16).translateY(0.08));
    group.add(new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.16, 0.32), new THREE.MeshLambertMaterial({ color: boots })).translateX(0.16).translateY(0.08));
    const legL = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.62, 0.26), new THREE.MeshLambertMaterial({ color: pants }));
    legL.position.set(-0.16, 0.42, 0);
    const legR = legL.clone();
    legR.position.x = 0.16;
    group.add(legL, legR);
    // belt + body
    group.add(new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.12, 0.32), new THREE.MeshLambertMaterial({ color: 0x222 })).translateY(0.78));
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.72, 0.32), new THREE.MeshLambertMaterial({ color }));
    body.position.y = 1.12;
    group.add(body);
    group.add(new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.18, 0.34), new THREE.MeshLambertMaterial({ color })).translateY(1.4));
    // arms
    const armL = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.68, 0.22), new THREE.MeshLambertMaterial({ color: skin }));
    armL.position.set(-0.44, 1.1, 0);
    const armR = armL.clone();
    armR.position.x = 0.44;
    group.add(armL, armR);
    // head + hair + eyes + nose
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.52, 0.52), new THREE.MeshLambertMaterial({ color: skin }));
    head.position.y = 1.7;
    group.add(head);
    group.add(new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.16, 0.56), new THREE.MeshLambertMaterial({ color: 0x3a2a1a })).translateY(1.94));
    const eyeM = new THREE.MeshLambertMaterial({ color: 0x222222 });
    const e1 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.08, 0.05), eyeM);
    e1.position.set(-0.12, 1.74, 0.28);
    const e2 = e1.clone(); e2.position.x = 0.12;
    group.add(e1, e2);
    group.add(new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.08, 0.08), new THREE.MeshLambertMaterial({ color: 0xe0ac69 })).translateY(1.62).translateZ(0.28));

    const shadow = new THREE.Mesh(
      new THREE.CircleGeometry(0.38, 14),
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.32, depthWrite: false })
    );
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = 0.02;
    group.add(shadow);

    const label = this._makeLabel(data.name || 'Игрок', color);
    label.position.y = 2.2;
    group.add(label);

    if (this.scene) this.scene.add(group);

    return {
      id: data.id,
      name: data.name || 'Игрок',
      color,
      mesh: group,
      label,
      armL, armR, legL, legR,
      x: null, y: null, z: null, yaw: 0,
      tx: 0, ty: 40, tz: 0, tyaw: 0, tpitch: 0,
      anim: 0,
    };
  }

  _makeLabel(text, color) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 256, 64);
    ctx.font = 'bold 28px Segoe UI, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(0,0,0,0.45)';
    ctx.fillRect(20, 12, 216, 40);
    ctx.fillStyle = '#fff';
    ctx.fillText(text.slice(0, 16), 128, 40);
    const tex = new THREE.CanvasTexture(canvas);
    tex.minFilter = THREE.LinearFilter;
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(2.2, 0.55, 1);
    sprite.userData.canvas = canvas;
    sprite.userData.ctx = ctx;
    sprite.userData.tex = tex;
    return sprite;
  }

  _updateLabel(id) {
    const r = this.remote.get(id);
    if (!r || !r.label) return;
    const ctx = r.label.userData.ctx;
    const canvas = r.label.userData.canvas;
    ctx.clearRect(0, 0, 256, 64);
    ctx.font = 'bold 28px Segoe UI, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.fillRect(20, 12, 216, 40);
    ctx.fillStyle = '#ffffff';
    ctx.fillText((r.name || 'Игрок').slice(0, 16), 128, 40);
    r.label.userData.tex.needsUpdate = true;
  }

  _removeRemote(id) {
    const r = this.remote.get(id);
    if (!r) return;
    if (r.mesh && this.scene) {
      this.scene.remove(r.mesh);
      r.mesh.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) {
          if (o.material.map) o.material.map.dispose();
          o.material.dispose();
        }
      });
    }
    this.remote.delete(id);
  }

  _clearRemotes() {
    for (const id of [...this.remote.keys()]) this._removeRemote(id);
  }

  /** Smooth interpolate remotes */
  update(dt) {
    for (const r of this.remote.values()) {
      if (r.x == null) continue;
      const k = 1 - Math.pow(0.001, dt);
      r.x += (r.tx - r.x) * Math.min(1, k * 12);
      r.y += (r.ty - r.y) * Math.min(1, k * 12);
      r.z += (r.tz - r.z) * Math.min(1, k * 12);
      // yaw lerp
      let dy = r.tyaw - r.yaw;
      while (dy > Math.PI) dy -= Math.PI * 2;
      while (dy < -Math.PI) dy += Math.PI * 2;
      r.yaw += dy * Math.min(1, k * 10);
      if (r.mesh) {
        r.mesh.position.set(r.x, r.y, r.z);
        r.mesh.rotation.y = r.yaw;
        // walk anim
        r.anim = (r.anim || 0) + dt;
        const moving = Math.hypot(r.tx - r.x, r.tz - r.z) > 0.02;
        const w = moving ? Math.sin(r.anim * 10) * 0.5 : 0;
        if (r.legL) r.legL.rotation.x = w;
        if (r.legR) r.legR.rotation.x = -w;
        if (r.armL) r.armL.rotation.x = -w * 0.6;
        if (r.armR) r.armR.rotation.x = w * 0.6;
      }
    }
  }

  _setStatus(text, isError) {
    if (this.onStatus) this.onStatus(text, !!isError);
  }

  _pushChat(text, color) {
    this.chatLog.push({ text, color: color || '#fff', t: Date.now() });
    if (this.chatLog.length > 50) this.chatLog.shift();
    if (this.onChat) this.onChat(this.chatLog);
  }
}

window.Multiplayer = Multiplayer;
