/**
 * BrowserCraft — main loop: craft, commands, skins, 3D hand, hardcore, day/night
 */
(function () {
  const canvas = document.getElementById('game');
  const menuEl = document.getElementById('menu');
  const howtoEl = document.getElementById('howto');
  const hostEl = document.getElementById('host-info');
  const mpConnectEl = document.getElementById('mp-connect');
  const pauseEl = document.getElementById('pause');
  const deathEl = document.getElementById('death');
  const skinEl = document.getElementById('skin-ui');
  const hudEl = document.getElementById('hud');
  const invEl = document.getElementById('inventory');
  const craftEl = document.getElementById('craft-ui');
  const fpsEl = document.getElementById('fps');
  const posEl = document.getElementById('pos');
  const lookingEl = document.getElementById('looking');
  const modeEl = document.getElementById('mode');
  const diffEl = document.getElementById('diff');
  const dimLabel = document.getElementById('dim-label');
  const modsLabel = document.getElementById('mods-label');
  const netEl = document.getElementById('net');
  const mobsCountEl = document.getElementById('mobs-count');
  const heartsEl = document.getElementById('hearts');
  const hurtOverlay = document.getElementById('hurt-overlay');
  const breakProgress = document.getElementById('break-progress');
  const breakBar = document.getElementById('break-bar');
  const hotbarEl = document.getElementById('hotbar');
  const invGrid = document.getElementById('inv-grid');
  const chatLogEl = document.getElementById('chat-log');
  const chatInput = document.getElementById('chat-input');
  const mpStatus = document.getElementById('mp-status');
  const mpName = document.getElementById('mp-name');
  const mpUrl = document.getElementById('mp-url');
  const volSlider = document.getElementById('vol-slider');
  const chkSound = document.getElementById('chk-sound');
  const musicSlider = document.getElementById('music-slider');
  const chkMusic = document.getElementById('chk-music');
  const musicFile = document.getElementById('music-file');
  const skinFile = document.getElementById('skin-file');
  const diffSelect = document.getElementById('diff-select');
  const craftGridEl = document.getElementById('craft-grid');
  const craftResultEl = document.getElementById('craft-result');
  const craftBagEl = document.getElementById('craft-bag');
  const craftTitle = document.getElementById('craft-title');

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x87ceeb);
  if (renderer.outputEncoding !== undefined) renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.shadowMap.enabled = false;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x87ceeb, 0.012);
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 300);
  scene.add(camera); // needed so first-person hand (child of camera) renders

  const ambient = new THREE.AmbientLight(0x8899aa, 0.55);
  scene.add(ambient);
  const sun = new THREE.DirectionalLight(0xfff5e0, 0.85);
  sun.position.set(80, 120, 40);
  scene.add(sun);
  scene.add(new THREE.HemisphereLight(0x87ceeb, 0x3a5a2a, 0.35));

  const lampLights = [];
  for (let i = 0; i < 12; i++) {
    const l = new THREE.PointLight(0xffcc66, 0, 10, 2);
    l.visible = false;
    scene.add(l);
    lampLights.push(l);
  }

  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false,
    uniforms: {
      topColor: { value: new THREE.Color(0x4a90d9) },
      bottomColor: { value: new THREE.Color(0xb0d8f0) },
      offset: { value: 20 }, exponent: { value: 0.5 },
    },
    vertexShader: `varying vec3 vWorldPos; void main(){ vec4 wp=modelMatrix*vec4(position,1.0); vWorldPos=wp.xyz; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader: `uniform vec3 topColor,bottomColor; uniform float offset,exponent; varying vec3 vWorldPos; void main(){ float h=normalize(vWorldPos+vec3(0.0,offset,0.0)).y; float t=max(pow(max(h,0.0),exponent),0.0); gl_FragColor=vec4(mix(bottomColor,topColor,t),1.0); }`,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(250, 16, 12), skyMat);
  scene.add(sky);

  let atlas = null, world = null, player = null, handView = null;
  let running = false, inventoryOpen = false, craftOpen = false, chatOpen = false;
  let multiMode = false, seed = (Math.random() * 1e9) | 0;
  let difficulty = 'normal';
  let timePhase = 0; // 0 day .. 1 night
  let timeSpeed = 0.008;
  let craftTableMode = false;
  let craftSlots = [];
  let craftCursor = null;
  let pendingUploadSkin = null;
  let particles = null;
  let dims = null;
  let worldSeedBase = seed;

  // stars for night / end
  const stars = new THREE.Points(
    new THREE.BufferGeometry(),
    new THREE.PointsMaterial({ color: 0xffffff, size: 0.35, sizeAttenuation: true, transparent: true, opacity: 0.9 })
  );
  {
    const N = 800;
    const arr = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const r = 180 + Math.random() * 40;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(ph) * Math.cos(th);
      arr[i * 3 + 1] = r * Math.cos(ph);
      arr[i * 3 + 2] = r * Math.sin(ph) * Math.sin(th);
    }
    stars.geometry.setAttribute('position', new THREE.BufferAttribute(arr, 3));
  }
  scene.add(stars);

  const mp = new Multiplayer();
  mp.setScene(scene);
  let mobs = null;

  const highlight = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.BoxGeometry(1.002, 1.002, 1.002)),
    new THREE.LineBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.45 })
  );
  highlight.visible = false;
  scene.add(highlight);

  let frames = 0, fpsTime = 0, lastTime = performance.now();

  try {
    const v = localStorage.getItem('bc_vol');
    if (v != null) { volSlider.value = v; if (window.SFX) SFX.setVolume(+v / 100); }
    const s = localStorage.getItem('bc_sound');
    if (s != null) { chkSound.checked = s !== '0'; if (window.SFX) SFX.enabled = chkSound.checked; }
    const d = localStorage.getItem('bc_diff');
    if (d) { difficulty = d; diffSelect.value = d; }
  } catch {}

  volSlider.addEventListener('input', () => {
    if (window.SFX) SFX.setVolume(+volSlider.value / 100);
    try { localStorage.setItem('bc_vol', volSlider.value); } catch {}
  });
  chkSound.addEventListener('change', () => {
    if (window.SFX) SFX.enabled = chkSound.checked;
    try { localStorage.setItem('bc_sound', chkSound.checked ? '1' : '0'); } catch {}
    if (window.SFX) SFX.ui();
  });
  if (musicSlider) {
    try {
      const mv = localStorage.getItem('bc_music_vol');
      if (mv != null) musicSlider.value = mv;
    } catch {}
    musicSlider.addEventListener('input', () => {
      if (window.Music) Music.setVolume(+musicSlider.value / 100);
      try { localStorage.setItem('bc_music_vol', musicSlider.value); } catch {}
    });
  }
  if (chkMusic) {
    try {
      const m = localStorage.getItem('bc_music');
      if (m != null) chkMusic.checked = m !== '0';
    } catch {}
    chkMusic.addEventListener('change', () => {
      if (window.Music) Music.setEnabled(chkMusic.checked);
      try { localStorage.setItem('bc_music', chkMusic.checked ? '1' : '0'); } catch {}
    });
  }
  if (musicFile) {
    musicFile.addEventListener('change', () => {
      const f = musicFile.files && musicFile.files[0];
      if (f && window.Music) {
        Music.loadFile(f);
        say('Загружен трек: ' + f.name + ' (тише в слайдере музыки)', '#8fd9ff');
      }
    });
  }
  if (skinFile) {
    skinFile.addEventListener('change', async () => {
      const f = skinFile.files && skinFile.files[0];
      if (!f) return;
      try {
        pendingUploadSkin = await skinFromImageFile(f);
        const wrap = document.getElementById('skin-preview-wrap');
        const pv = document.getElementById('skin-preview');
        const nm = document.getElementById('skin-file-name');
        wrap.classList.remove('hidden');
        nm.textContent = pendingUploadSkin.name;
        const ctx2 = pv.getContext('2d');
        ctx2.imageSmoothingEnabled = false;
        const img = new Image();
        img.onload = () => { ctx2.clearRect(0, 0, 128, 128); ctx2.drawImage(img, 0, 0, 128, 128); };
        img.src = pendingUploadSkin.textureData;
        document.getElementById('skin-skin').value = hexToCss(pendingUploadSkin.skin);
        document.getElementById('skin-hair').value = hexToCss(pendingUploadSkin.hair);
        document.getElementById('skin-shirt').value = hexToCss(pendingUploadSkin.shirt);
        document.getElementById('skin-pants').value = hexToCss(pendingUploadSkin.pants);
        say('Скин загружен — нажми «Надеть»', '#8f8');
      } catch (e) {
        say('Ошибка скина: ' + e.message, '#f88');
      }
    });
  }
  diffSelect.addEventListener('change', () => setDifficulty(diffSelect.value));

  function unlockAudio() {
    if (window.SFX) { SFX.resume(); SFX.setVolume(+volSlider.value / 100); SFX.enabled = chkSound.checked; }
    if (window.Music) {
      Music.resume();
      Music.setVolume(+(musicSlider && musicSlider.value || 12) / 100);
      if (chkMusic && chkMusic.checked) Music.start();
    }
  }
  document.addEventListener('click', unlockAudio);

  function say(text, color) {
    const d = document.createElement('div');
    d.className = 'line';
    d.style.color = color || '#fff';
    d.textContent = text;
    chatLogEl.appendChild(d);
    while (chatLogEl.children.length > 16) chatLogEl.removeChild(chatLogEl.firstChild);
  }

  function setDifficulty(d) {
    difficulty = d || 'normal';
    try { localStorage.setItem('bc_diff', difficulty); } catch {}
    if (diffSelect) diffSelect.value = difficulty;
    if (diffEl) diffEl.textContent = 'Сложность: ' + difficulty;
    if (player) {
      player.hardcore = difficulty === 'hardcore';
      if (difficulty === 'creative') player.flying = true;
      if (difficulty === 'hardcore') player.flying = false;
    }
    if (mobs) {
      mobs.enabled = difficulty !== 'peaceful';
      mobs.maxMobs = difficulty === 'hard' || difficulty === 'hardcore' ? 40 : difficulty === 'easy' ? 16 : 28;
    }
  }

  function setTimePhase(t) {
    timePhase = Math.max(0, Math.min(1, t));
    applyTimeVisuals();
  }

  function applyTimeVisuals() {
    // 0 = day, 1 = night
    const night = timePhase;
    const dayCol = new THREE.Color(0x4a90d9);
    const nightCol = new THREE.Color(0x0a1020);
    const dayBot = new THREE.Color(0xb0d8f0);
    const nightBot = new THREE.Color(0x1a2030);
    skyMat.uniforms.topColor.value.copy(dayCol).lerp(nightCol, night);
    skyMat.uniforms.bottomColor.value.copy(dayBot).lerp(nightBot, night);
    const fogCol = new THREE.Color().copy(dayBot).lerp(nightBot, night);
    scene.fog.color.copy(fogCol);
    renderer.setClearColor(fogCol);
    ambient.intensity = 0.55 - night * 0.35;
    sun.intensity = 0.85 - night * 0.7;
    sun.color.set(night > 0.5 ? 0x8899bb : 0xfff5e0);
  }

  function applySkin(skin) {
    saveSkin(skin);
    if (player) player.skin = skin;
    if (handView) handView.setSkin(skin);
    say('Скин применён: ' + (skin.name || skin.id || 'custom') + (skin.uploaded ? ' (загрузка)' : ''), '#8fd9ff');
    if (window.SFX) SFX.pop && SFX.pop();
    if (particles && player) particles.magic(player.pos.x, player.pos.y + 1, player.pos.z);
  }

  function openSkinUI() {
    skinEl.classList.remove('hidden');
    menuEl.classList.add('hidden');
    pauseEl.classList.add('hidden');
    document.exitPointerLock();
    buildSkinPresets();
    const s = loadSkin();
    document.getElementById('skin-skin').value = hexToCss(s.skin);
    document.getElementById('skin-hair').value = hexToCss(s.hair);
    document.getElementById('skin-shirt').value = hexToCss(s.shirt);
    document.getElementById('skin-pants').value = hexToCss(s.pants);
  }

  function buildSkinPresets() {
    const box = document.getElementById('skin-presets');
    box.innerHTML = '';
    for (const p of SKIN_PRESETS) {
      const b = document.createElement('button');
      b.className = 'skin-card';
      b.innerHTML = `<span class="swatch" style="background:${hexToCss(p.shirt)}"></span><span>${p.name}</span>`;
      b.onclick = () => {
        applySkin({ ...p });
        document.getElementById('skin-skin').value = hexToCss(p.skin);
        document.getElementById('skin-hair').value = hexToCss(p.hair);
        document.getElementById('skin-shirt').value = hexToCss(p.shirt);
        document.getElementById('skin-pants').value = hexToCss(p.pants);
      };
      box.appendChild(b);
    }
  }

  function goDim(dimId) {
    if (!dims) return;
    dims.goTo(dimId);
  }
  function makePortal(type) {
    if (!player || !world) return;
    const x = Math.floor(player.pos.x), y = Math.floor(player.pos.y), z = Math.floor(player.pos.z);
    if (type === 'end' && dims) dims.placeEndPortal(x, y, z, world);
    else {
      // build mini nether frame
      for (let dy = 0; dy < 5; dy++) {
        world.setBlock(x, y + dy, z, BLOCKS.obsidian.id);
        world.setBlock(x + 3, y + dy, z, BLOCKS.obsidian.id);
      }
      for (let dx = 0; dx < 4; dx++) {
        world.setBlock(x + dx, y, z, BLOCKS.obsidian.id);
        world.setBlock(x + dx, y + 4, z, BLOCKS.obsidian.id);
      }
      for (let dy = 1; dy <= 3; dy++) for (let dx = 1; dx <= 2; dx++) {
        world.setBlock(x + dx, y + dy, z, BLOCKS.nether_portal.id);
      }
      if (particles) particles.portal(x + 1.5, y + 2, z, 'nether');
      say('Незер-портал создан! Зайди внутрь.', '#f80');
      if (window.SFX) SFX.lever && SFX.lever();
    }
  }

  const cmd = createCommandHandler({
    get player() { return player; },
    get world() { return world; },
    get mobs() { return mobs; },
    get mp() { return mp; },
    get multiMode() { return multiMode; },
    get particles() { return particles; },
    setDifficulty, getDifficulty: () => difficulty,
    applySkin, openSkinUI, say, setTimePhase, goDim, makePortal,
  });

  mp.onStatus = (text, isError) => {
    mpStatus.textContent = text;
    mpStatus.className = 'mp-status' + (isError ? ' err' : text.includes('Онлайн') || text.includes('В игре') ? ' ok' : '');
    if (netEl) netEl.textContent = 'Сеть: ' + text;
  };
  mp.onChat = (log) => {
    chatLogEl.innerHTML = '';
    for (const line of log.slice(-12)) {
      const d = document.createElement('div');
      d.className = 'line';
      d.style.color = line.color || '#fff';
      d.textContent = line.text;
      chatLogEl.appendChild(d);
    }
  };
  mp.onWelcome = (msg) => startGameMulti(msg.seed);

  function wrapWorldSync(w) {
    const orig = w.setBlock.bind(w);
    w.setBlock = function (x, y, z, id) {
      const ok = orig(x, y, z, id);
      if (ok && multiMode && mp.connected) mp.sendBlock(Math.floor(x), Math.floor(y), Math.floor(z), id);
      return ok;
    };
    w.applyNetBlock = (x, y, z, id) => orig(x, y, z, id);
    return w;
  }
  mp.setBlockHandler((x, y, z, id) => { if (world && world.applyNetBlock) world.applyNetBlock(x, y, z, id); });

  function bindPlayerHooks(p) {
    p.onHealthChange = (hp, max) => {
      renderHearts(hp, max);
      if (hp < max) {
        hurtOverlay.classList.add('flash');
        setTimeout(() => hurtOverlay.classList.remove('flash'), 200);
      }
    };
    p.onDeath = (isHardcore) => {
      deathEl.classList.remove('hidden');
      document.exitPointerLock();
      const title = document.getElementById('death-title');
      const msg = document.getElementById('death-msg');
      const resp = document.getElementById('btn-respawn');
      if (isHardcore || p.hardcore || difficulty === 'hardcore') {
        title.textContent = '💀 HARDCORE — мир потерян';
        msg.textContent = 'В хардкоре нет возрождения. Создай новый мир.';
        resp.style.display = 'none';
      } else {
        title.textContent = '💀 Ты погиб';
        msg.textContent = 'Мобы, падение, TNT… Нажми возродиться.';
        resp.style.display = '';
      }
    };
    p.onAttack = (dmg, origin, dir, item, range) => {
      if (mobs) {
        const hitMob = mobs.tryHit(origin, dir, range || 4, dmg, window.SFX);
        if (hitMob) return;
      }
    };
    p.onOpenCraft = (table) => openCraft(!!table);
    p.onOpenFurnace = () => { say('Печь: еда+уголь в крафте (beef+coal → стейк)', '#fa8'); openCraft(true); };
    p.onEat = () => { if (handView) handView.playEat(); if (particles) particles.spawn(p.pos.x, p.pos.y + 1.4, p.pos.z, { count: 6, color: 0xffaaaa, life: 0.4, speed: 1, gravity: 2, size: 0.05 }); };
    p.onPearl = (x, y, z) => { if (particles) particles.magic(x + 0.5, y + 1, z + 0.5); };
    p.onLightPortal = (x, y, z) => {
      if (dims && dims.tryLightPortal(x, y, z, world)) {
        if (particles) particles.portal(x + 0.5, y + 1, z + 0.5, 'nether');
      } else {
        // force small portal next to click
        makePortal('nether');
      }
    };
  }

  function ensureSystems() {
    if (!particles) particles = new ParticleSystem(scene);
    if (!dims) {
      dims = new DimensionManager({
        scene, skyMat, ambient, sun, renderer,
        get player() { return player; },
        getSeed: () => worldSeedBase,
        particles,
        say,
        SFX: window.SFX,
        onDimensionChange: (dimId, newSeed, prev) => {
          if (mobs) mobs.clear();
          if (world) world.dispose();
          seed = newSeed;
          world = wrapWorldSync(new World(scene, atlas, seed, dimId));
          if (player) {
            player.world = world;
            world.updateAround(0, 0);
            // spawn on surface
            player.spawn();
            if (dimId === 'nether') player.pos.y = Math.max(player.pos.y, 16);
          }
          if (mobs) {
            mobs.setWorld(world);
            ensureMobs();
          }
          if (dimLabel) dimLabel.textContent = 'Мир: ' + dimId;
          stars.material.opacity = dimId === 'end' ? 1 : (dimId === 'nether' ? 0.15 : 0.5);
          if (window.ModAPI) ModAPI.emit('dimension', dimId, prev);
        },
      });
    }
    dims.applyAtmosphere();
    if (modsLabel && window.ModAPI) modsLabel.textContent = 'Моды: ' + ModAPI.mods.length;
  }

  function ensureMobs() {
    if (!mobs) mobs = new MobManager(scene, world);
    else mobs.setWorld(world);
    setDifficulty(difficulty);
    // Daytime start: only peaceful animals (hostiles only at night)
    if (player && difficulty !== 'peaceful') {
      for (let i = 0; i < 8; i++) {
        mobs.spawnNear(player, ['cow', 'pig', 'sheep', 'chicken', 'cow', 'pig', 'sheep', 'chicken'][i]);
      }
    }
  }

  function onMobExplode(x, y, z, radius) {
    if (window.SFX) SFX.explode && SFX.explode();
    const rad = radius || 3;
    for (let yy = Math.floor(y) - rad; yy <= Math.floor(y) + rad; yy++)
      for (let xx = Math.floor(x) - rad; xx <= Math.floor(x) + rad; xx++)
        for (let zz = Math.floor(z) - rad; zz <= Math.floor(z) + rad; zz++) {
          const d = Math.sqrt((xx - x) ** 2 + (yy - y) ** 2 + (zz - z) ** 2);
          if (d > rad) continue;
          const id = world.getBlock(xx, yy, zz);
          const k = ID_TO_KEY[id];
          if (!k || k === 'air' || k === 'bedrock') continue;
          if (Math.random() < 1 - d / (rad + 0.5)) world.setBlock(xx, yy, zz, 0);
        }
    if (player && !player.flying) {
      const pd = player.pos.distanceTo(new THREE.Vector3(x, y, z));
      if (pd < rad + 1.5) player.hurt(Math.ceil((rad + 1.5 - pd) * 4), { x: player.pos.x - x, z: player.pos.z - z });
    }
    if (mobs) for (const m of mobs.mobs) {
      if (m.dead) continue;
      const d = m.pos.distanceTo(new THREE.Vector3(x, y, z));
      if (d < rad + 1) m.hurt(Math.ceil((rad + 1 - d) * 5), null, window.SFX);
    }
  }

  function renderHearts(hp, max) {
    const hearts = Math.ceil(max / 2);
    let html = '';
    for (let i = 0; i < hearts; i++) {
      const full = hp >= (i + 1) * 2;
      const half = !full && hp >= i * 2 + 1;
      html += `<span class="heart ${full ? 'full' : half ? 'half' : 'empty'}">♥</span>`;
    }
    heartsEl.innerHTML = html;
    heartsEl.style.opacity = (player && player.flying) ? '0.35' : '1';
  }

  function updateLampLights() {
    if (!player || !world) return;
    const px = Math.floor(player.pos.x), py = Math.floor(player.pos.y), pz = Math.floor(player.pos.z);
    const found = [];
    for (let y = py - 8; y <= py + 8; y++)
      for (let x = px - 10; x <= px + 10; x++)
        for (let z = pz - 10; z <= pz + 10; z++)
          if (world.getBlock(x, y, z) === BLOCKS.lampOn.id) found.push([x + 0.5, y + 0.5, z + 0.5]);
    found.sort((a, b) => {
      const da = (a[0] - player.pos.x) ** 2 + (a[1] - player.pos.y) ** 2 + (a[2] - player.pos.z) ** 2;
      const db = (b[0] - player.pos.x) ** 2 + (b[1] - player.pos.y) ** 2 + (b[2] - player.pos.z) ** 2;
      return da - db;
    });
    for (let i = 0; i < lampLights.length; i++) {
      if (i < found.length) {
        lampLights[i].visible = true;
        lampLights[i].intensity = 1.2;
        lampLights[i].position.set(found[i][0], found[i][1], found[i][2]);
      } else { lampLights[i].visible = false; lampLights[i].intensity = 0; }
    }
  }

  // —— Crafting UI ——
  function openCraft(table) {
    craftTableMode = !!table;
    craftOpen = true;
    inventoryOpen = false;
    invEl.classList.add('hidden');
    craftEl.classList.remove('hidden');
    document.exitPointerLock();
    craftTitle.textContent = table ? '🔨 Верстак 3×3' : '✂ Карманный крафт 2×2';
    const size = table ? 3 : 2;
    craftSlots = Array(size * size).fill(null);
    craftGridEl.className = 'craft-grid size' + size;
    craftGridEl.innerHTML = '';
    for (let i = 0; i < size * size; i++) {
      const cell = document.createElement('div');
      cell.className = 'craft-slot';
      cell.dataset.i = i;
      const c = document.createElement('canvas');
      c.width = 40; c.height = 40;
      cell.appendChild(c);
      cell.onclick = () => {
        if (craftSlots[i]) { craftSlots[i] = null; }
        else if (craftCursor) { craftSlots[i] = craftCursor; }
        refreshCraftUI();
      };
      craftGridEl.appendChild(cell);
    }
    craftResultEl.onclick = () => takeCraftResult();
    refreshCraftUI();
    if (window.SFX) SFX.menuOpen && SFX.menuOpen();
  }

  function closeCraft() {
    craftOpen = false;
    craftEl.classList.add('hidden');
    craftCursor = null;
    if (window.SFX) SFX.menuClose && SFX.menuClose();
    if (running && player && !player.dead) player.lock();
  }

  function refreshCraftUI() {
    const size = craftTableMode ? 3 : 2;
    const cells = craftGridEl.querySelectorAll('.craft-slot');
    cells.forEach((cell, i) => {
      const c = cell.querySelector('canvas');
      atlas.drawIcon(craftSlots[i], c);
      cell.classList.toggle('filled', !!craftSlots[i]);
    });
    const recipe = findRecipe(craftSlots, craftTableMode);
    const rc = craftResultEl.querySelector('canvas');
    const cnt = craftResultEl.querySelector('.count');
    if (recipe) {
      atlas.drawIcon(recipe.out, rc);
      cnt.textContent = recipe.count > 1 ? String(recipe.count) : '';
      craftResultEl.dataset.out = recipe.out;
      craftResultEl.dataset.count = recipe.count;
      craftResultEl.classList.add('ready');
    } else {
      atlas.drawIcon(null, rc);
      cnt.textContent = '';
      delete craftResultEl.dataset.out;
      craftResultEl.classList.remove('ready');
    }
    // bag
    craftBagEl.innerHTML = '';
    if (player && player.bag) {
      for (const { key, count } of player.bag.entries()) {
        const item = document.createElement('div');
        item.className = 'craft-bag-item';
        const c = document.createElement('canvas');
        c.width = 32; c.height = 32;
        atlas.drawIcon(key, c);
        const sp = document.createElement('span');
        sp.textContent = count;
        item.appendChild(c); item.appendChild(sp);
        item.title = (ITEMS[key] || BLOCKS[key] || {}).name || key;
        item.onclick = () => { craftCursor = key; say('Выбрано: ' + key + ' — клик по слоту верстака', '#aaa'); if (window.SFX) SFX.click(); };
        craftBagEl.appendChild(item);
      }
    }
    // also show placeable/items shortcuts
    const quick = ['planks', 'stick', 'cobble', 'iron_ingot', 'gold_ingot', 'diamond_gem', 'coal_item', 'string_item', 'gunpowder', 'sand', 'apple', 'wood'];
    for (const key of quick) {
      if (player && player.bag && player.bag.has(key)) continue;
      const item = document.createElement('div');
      item.className = 'craft-bag-item ghost';
      const c = document.createElement('canvas');
      c.width = 32; c.height = 32;
      atlas.drawIcon(key, c);
      item.appendChild(c);
      item.title = key + ' (креатив-клик)';
      item.onclick = () => { craftCursor = key; if (window.SFX) SFX.click(); };
      craftBagEl.appendChild(item);
    }
  }

  function takeCraftResult() {
    const out = craftResultEl.dataset.out;
    const count = parseInt(craftResultEl.dataset.count || '1', 10);
    if (!out) return;
    const recipe = findRecipe(craftSlots, craftTableMode);
    if (!recipe) return;
    // consume
    if (recipe.shapeless) {
      const need = recipe.shapeless.slice();
      for (let i = 0; i < craftSlots.length; i++) {
        const k = craftSlots[i];
        const idx = need.indexOf(k);
        if (idx >= 0) { need.splice(idx, 1); craftSlots[i] = null; if (player.bag) player.bag.remove(k, 1); }
      }
    } else {
      for (let i = 0; i < craftSlots.length; i++) {
        if (craftSlots[i]) {
          if (player.bag) player.bag.remove(craftSlots[i], 1);
          craftSlots[i] = null;
        }
      }
    }
    if (player.bag) player.bag.add(out, count);
    player.hotbar[player.selectedSlot] = out;
    if (player.counts) player.counts[player.selectedSlot] = (player.counts[player.selectedSlot] || 0) + count;
    if (window.SFX) SFX.pickup && SFX.pickup();
    say('Скрафчено: ' + ((ITEMS[out] || BLOCKS[out] || {}).name || out) + ' x' + count, '#8f8');
    refreshCraftUI();
    updateHotbarUI();
  }

  function initWorld(newSeed, dimension) {
    if (world) world.dispose();
    if (mobs) mobs.clear();
    seed = newSeed != null ? newSeed : (Math.random() * 1e9) | 0;
    if (!dimension || dimension === 'overworld') worldSeedBase = seed;
    const dim = dimension || (dims && dims.current) || 'overworld';
    world = wrapWorldSync(new World(scene, atlas, seed, dim));
    if (player) { player.world = world; world.updateAround(0, 0); player.spawn(); }
    if (mobs) mobs.setWorld(world);
    if (dims) {
      dims.current = dim;
      dims.applyAtmosphere();
    }
    if (dimLabel) dimLabel.textContent = 'Мир: ' + dim;
  }

  function showHud() {
    [menuEl, mpConnectEl, hostEl, howtoEl, pauseEl, deathEl, skinEl].forEach((e) => e.classList.add('hidden'));
    hudEl.classList.remove('hidden');
  }

  function setupPlayer() {
    if (!player) {
      player = new Player(camera, null, canvas);
      bindPlayerHooks(player);
    }
    player.skin = loadSkin();
    if (!handView) handView = new HandView(camera, atlas);
    else handView.atlas = atlas;
    handView.setSkin(player.skin);
    handView.setItem(player.selectedKey);
  }

  function startGameSolo() {
    unlockAudio();
    if (window.SFX) SFX.menuClose && SFX.menuClose();
    multiMode = false;
    mp.disconnect();
    if (!atlas) atlas = new TextureAtlas();
    setupPlayer();
    ensureSystems();
    if (dims) dims.current = 'overworld';
    initWorld(seed, 'overworld');
    player.world = world;
    world.updateAround(player.pos.x, player.pos.z);
    player.spawn();
    ensureMobs();
    showHud();
    running = true;
    setDifficulty(difficulty);
    updateHotbarUI();
    buildInventoryUI();
    renderHearts(player.health, player.maxHealth);
    netEl.textContent = 'Сеть: оффлайн';
    say('Добро пожаловать! /help · /nether · /end · C крафт · загрузи скин PNG', '#8fd9ff');
    if (window.Music && chkMusic && chkMusic.checked) Music.start();
    setTimeout(() => player.lock(), 100);
  }

  function startGameMulti(serverSeed) {
    unlockAudio();
    multiMode = true;
    if (!atlas) atlas = new TextureAtlas();
    setupPlayer();
    ensureSystems();
    if (dims) dims.current = 'overworld';
    initWorld(serverSeed != null ? serverSeed : mp.seed, 'overworld');
    player.world = world;
    world.updateAround(0, 0);
    player.spawn();
    mp.applyPendingBlocks(world);
    ensureMobs();
    showHud();
    running = true;
    setDifficulty(difficulty);
    document.getElementById('btn-regen').style.display = 'none';
    updateHotbarUI();
    buildInventoryUI();
    renderHearts(player.health, player.maxHealth);
    setTimeout(() => player.lock(), 100);
  }

  function resumeGame() {
    if (window.SFX) SFX.menuClose && SFX.menuClose();
    pauseEl.classList.add('hidden');
    if (running && player && !player.dead) player.lock();
  }

  function toMenu() {
    if (window.SFX) SFX.menuOpen && SFX.menuOpen();
    running = false; multiMode = false; inventoryOpen = false; craftOpen = false; chatOpen = false;
    chatInput.classList.add('hidden');
    invEl.classList.add('hidden');
    craftEl.classList.add('hidden');
    pauseEl.classList.add('hidden');
    deathEl.classList.add('hidden');
    hudEl.classList.add('hidden');
    menuEl.classList.remove('hidden');
    document.getElementById('btn-regen').style.display = '';
    if (mobs) mobs.clear();
    mp.disconnect();
    document.exitPointerLock();
  }

  // UI buttons
  document.getElementById('btn-play').onclick = () => { unlockAudio(); SFX.ui(); startGameSolo(); };
  document.getElementById('btn-mp-play').onclick = () => {
    unlockAudio(); SFX.ui();
    menuEl.classList.add('hidden'); mpConnectEl.classList.remove('hidden');
    try {
      const n = localStorage.getItem('bc_name'); if (n) mpName.value = n;
      const u = localStorage.getItem('bc_url'); if (u) mpUrl.value = u;
      else if (window.BROWSERCRAFT_CONFIG && BROWSERCRAFT_CONFIG.defaultWs) {
        mpUrl.value = BROWSERCRAFT_CONFIG.defaultWs;
      }
    } catch {}
    // Vercel has no WS — hint user
    if (/vercel\.app$/i.test(location.hostname) && !(mpUrl.value || '').trim()) {
      if (mpStatus) {
        mpStatus.textContent = 'Vercel = только одиночная. Для MP укажи wss://твой-VPS/ws (см. VERCEL.md)';
        mpStatus.className = 'mp-status err';
      }
    }
  };
  document.getElementById('btn-mp-back').onclick = () => { SFX.ui(); mpConnectEl.classList.add('hidden'); menuEl.classList.remove('hidden'); };
  document.getElementById('btn-mp-join').onclick = () => {
    unlockAudio(); SFX.ui();
    const name = (mpName.value || 'Игрок').trim().slice(0, 16);
    const url = (mpUrl.value || '').trim();
    try { localStorage.setItem('bc_name', name); localStorage.setItem('bc_url', url); } catch {}
    mpStatus.textContent = 'Подключение…';
    multiMode = true;
    if (!atlas) atlas = new TextureAtlas();
    mp.connect(url, name);
  };
  document.getElementById('btn-howto').onclick = () => { SFX.ui(); menuEl.classList.add('hidden'); howtoEl.classList.remove('hidden'); };
  document.getElementById('btn-howto-back').onclick = () => { SFX.ui(); howtoEl.classList.add('hidden'); menuEl.classList.remove('hidden'); };
  document.getElementById('btn-host').onclick = () => { SFX.ui(); menuEl.classList.add('hidden'); hostEl.classList.remove('hidden'); };
  document.getElementById('btn-host-back').onclick = () => { SFX.ui(); hostEl.classList.add('hidden'); menuEl.classList.remove('hidden'); };
  document.getElementById('btn-skin-menu').onclick = () => { SFX.ui(); openSkinUI(); };
  document.getElementById('btn-skin-pause').onclick = () => { SFX.ui(); openSkinUI(); };
  document.getElementById('btn-skin-back').onclick = () => {
    SFX.ui(); skinEl.classList.add('hidden');
    if (running) pauseEl.classList.remove('hidden'); else menuEl.classList.remove('hidden');
  };
  document.getElementById('btn-skin-apply').onclick = () => {
    let skin;
    if (pendingUploadSkin) {
      skin = {
        ...pendingUploadSkin,
        skin: parseHex(document.getElementById('skin-skin').value, pendingUploadSkin.skin),
        hair: parseHex(document.getElementById('skin-hair').value, pendingUploadSkin.hair),
        shirt: parseHex(document.getElementById('skin-shirt').value, pendingUploadSkin.shirt),
        pants: parseHex(document.getElementById('skin-pants').value, pendingUploadSkin.pants),
      };
    } else {
      skin = {
        id: 'custom', name: 'Свой',
        skin: parseHex(document.getElementById('skin-skin').value, 0xc68642),
        hair: parseHex(document.getElementById('skin-hair').value, 0x3a2a1a),
        shirt: parseHex(document.getElementById('skin-shirt').value, 0x3a7ab8),
        pants: parseHex(document.getElementById('skin-pants').value, 0x2c3e50),
        shoes: 0x1a1a1a,
      };
    }
    applySkin(skin);
    skinEl.classList.add('hidden');
    if (running && player && !player.dead) { player.lock(); }
    else if (!running) menuEl.classList.remove('hidden');
  };
  document.getElementById('btn-resume').onclick = resumeGame;
  document.getElementById('btn-regen').onclick = () => {
    if (multiMode) return;
    SFX.ui(); initWorld(); player.spawn(); ensureMobs();
    document.getElementById('btn-respawn').style.display = '';
    resumeGame();
  };
  document.getElementById('btn-menu').onclick = toMenu;
  document.getElementById('btn-respawn').onclick = () => {
    if (difficulty === 'hardcore' || (player && player.hardcore)) return;
    SFX.heal && SFX.heal();
    deathEl.classList.add('hidden');
    player.spawn();
    player.lock();
  };
  document.getElementById('btn-death-menu').onclick = toMenu;
  document.getElementById('btn-craft-close').onclick = closeCraft;

  document.addEventListener('pointerlockchange', () => {
    const locked = document.pointerLockElement === canvas;
    if (player) player.setLocked(locked);
    if (!locked && running && !inventoryOpen && !craftOpen && !chatOpen && !player?.dead &&
        pauseEl.classList.contains('hidden') && deathEl.classList.contains('hidden') && skinEl.classList.contains('hidden')) {
      if (window.SFX) SFX.menuOpen && SFX.menuOpen();
      pauseEl.classList.remove('hidden');
    }
  });

  canvas.addEventListener('click', () => {
    unlockAudio();
    if (running && !inventoryOpen && !craftOpen && !chatOpen && !player?.dead && document.pointerLockElement !== canvas) {
      pauseEl.classList.add('hidden');
      player.lock();
    }
  });

  function openChat(prefill) {
    chatOpen = true;
    chatInput.classList.remove('hidden');
    chatInput.value = prefill || '';
    document.exitPointerLock();
    setTimeout(() => { chatInput.focus(); if (prefill) chatInput.setSelectionRange(prefill.length, prefill.length); }, 30);
  }
  function closeChat(send) {
    const text = chatInput.value.trim();
    chatOpen = false;
    chatInput.classList.add('hidden');
    chatInput.value = '';
    if (send && text) {
      if (text.startsWith('/')) cmd.handle(text);
      else if (multiMode && mp.connected) mp.sendChat(text);
      else say(text, '#fff');
    }
    if (running && !inventoryOpen && !craftOpen && !player.dead) player.lock();
  }

  document.addEventListener('keydown', (e) => {
    if (chatOpen) {
      if (e.code === 'Enter') { closeChat(true); e.preventDefault(); }
      else if (e.code === 'Escape') { closeChat(false); e.preventDefault(); }
      return;
    }
    if (craftOpen) {
      if (e.code === 'Escape' || e.code === 'KeyE' || e.code === 'KeyC') { closeCraft(); e.preventDefault(); }
      return;
    }
    if (e.code === 'Escape') {
      if (inventoryOpen) { closeInventory(); e.preventDefault(); return; }
      if (running && !pauseEl.classList.contains('hidden')) resumeGame();
    }
    if (!running || player?.dead) return;
    if (e.code === 'KeyE') { if (inventoryOpen) closeInventory(); else openInventory(); e.preventDefault(); }
    if (e.code === 'KeyC') { openCraft(false); e.preventDefault(); }
    if (e.code === 'KeyT') { openChat(''); e.preventDefault(); }
    if (e.code === 'Slash') { openChat('/'); e.preventDefault(); }
    if (e.code === 'KeyR' && !inventoryOpen && !multiMode) { initWorld(); player.spawn(); ensureMobs(); }
  });

  function openInventory() {
    inventoryOpen = true;
    invEl.classList.remove('hidden');
    document.exitPointerLock();
    if (window.SFX) SFX.menuOpen && SFX.menuOpen();
    buildInventoryUI();
  }
  function closeInventory() {
    inventoryOpen = false;
    invEl.classList.add('hidden');
    if (window.SFX) SFX.menuClose && SFX.menuClose();
    if (running && !player.dead) player.lock();
  }

  function updateHotbarUI() {
    if (!player || !atlas) return;
    hotbarEl.querySelectorAll('.slot').forEach((slot, i) => {
      slot.classList.toggle('selected', i === player.selectedSlot);
      atlas.drawIcon(player.hotbar[i], slot.querySelector('canvas'));
      const c = player.counts ? player.counts[i] : 0;
      slot.querySelector('.count').textContent = player.hotbar[i] ? (c > 0 ? String(c) : '∞') : '';
    });
    if (handView) handView.setItem(player.selectedKey);
  }

  hotbarEl.addEventListener('click', (e) => {
    const slot = e.target.closest('.slot');
    if (!slot || !player) return;
    player.selectedSlot = parseInt(slot.dataset.slot, 10);
    if (window.SFX) SFX.click();
    updateHotbarUI();
  });

  function buildInventoryUI() {
    if (!atlas) return;
    invGrid.innerHTML = '';
    const list = typeof INVENTORY_ALL !== 'undefined' ? INVENTORY_ALL : PLACEABLE;
    for (const key of list) {
      const item = document.createElement('div');
      item.className = 'inv-item';
      const label = ITEMS[key] ? ITEMS[key].name : (BLOCKS[key] ? BLOCKS[key].name : key);
      item.title = label;
      const c = document.createElement('canvas');
      c.width = 40; c.height = 40;
      atlas.drawIcon(key, c);
      const name = document.createElement('span');
      name.className = 'name';
      name.textContent = label;
      item.appendChild(c); item.appendChild(name);
      item.onclick = () => {
        if (!player) return;
        player.hotbar[player.selectedSlot] = key;
        if (player.counts) player.counts[player.selectedSlot] = 64;
        if (player.bag) player.bag.add(key, 16);
        if (window.SFX) SFX.click();
        updateHotbarUI();
      };
      invGrid.appendChild(item);
    }
  }

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  function loop(now) {
    requestAnimationFrame(loop);
    const dt = Math.min(0.05, (now - lastTime) / 1000);
    lastTime = now;
    frames++; fpsTime += dt;
    if (fpsTime >= 0.5) { fpsEl.textContent = 'FPS: ' + Math.round(frames / fpsTime); frames = 0; fpsTime = 0; }

    if (running && player && world) {
      // day/night cycle
      if (!player.flying) timePhase = (timePhase + timeSpeed * dt * 0.15) % 1;
      // night boost hostiles
      applyTimeVisuals();

      if (player.locked && !inventoryOpen && !craftOpen && !chatOpen && !player.dead) {
        player.update(dt);
        if (multiMode) mp.sendMove(player, dt);
      } else if (!player.dead) {
        camera.position.set(player.pos.x, player.pos.y + player.eyeHeight, player.pos.z);
      }

      if (handView) handView.update(dt, player);

      if (mobs) {
        const dimId = (dims && dims.current) || 'overworld';
        mobs.setTime(timePhase, dimId);
        if (mobs.isNight() && difficulty !== 'peaceful') {
          mobs.spawnTimer = Math.min(mobs.spawnTimer, 1.5);
        }
        mobs.update(dt, player, window.SFX, onMobExplode);
        if (mobsCountEl) {
          const night = mobs.isNight();
          mobsCountEl.textContent = 'Мобы: ' + mobs.count() + (night ? ' · 🌙 ночь' : ' · ☀️ день');
        }
      }
      if (multiMode) mp.update(dt);
      if (dims) dims.update(dt, player, world);
      if (particles) particles.update(dt);
      if (window.ModAPI) ModAPI.emit('tick', dt, player, world);

      world.updateAround(player.pos.x, player.pos.z);
      sky.position.copy(camera.position);
      stars.position.copy(camera.position);
      // stars visibility
      if (dims && dims.current === 'nether') stars.material.opacity = 0.05;
      else if (dims && dims.current === 'end') stars.material.opacity = 1;
      else stars.material.opacity = 0.15 + timePhase * 0.85;

      updateLampLights();
      // also light glowstone / magma
      if (player && world) {
        const px = Math.floor(player.pos.x), py = Math.floor(player.pos.y), pz = Math.floor(player.pos.z);
        let li = 0;
        for (let y = py - 6; y <= py + 6 && li < lampLights.length; y++)
          for (let x = px - 8; x <= px + 8 && li < lampLights.length; x++)
            for (let z = pz - 8; z <= pz + 8 && li < lampLights.length; z++) {
              const k = ID_TO_KEY[world.getBlock(x, y, z)];
              if (k === 'glowstone' || k === 'magma' || k === 'lampOn') {
                lampLights[li].visible = true;
                lampLights[li].intensity = k === 'magma' ? 0.8 : 1.3;
                lampLights[li].color.setHex(k === 'magma' ? 0xff6622 : 0xffcc66);
                lampLights[li].position.set(x + 0.5, y + 0.5, z + 0.5);
                li++;
              }
            }
      }

      posEl.textContent = `XYZ: ${player.pos.x.toFixed(1)} / ${player.pos.y.toFixed(1)} / ${player.pos.z.toFixed(1)}`;
      const modeName = player.hardcore || difficulty === 'hardcore' ? 'ХАРДКОР 💀'
        : player.flying ? 'Креатив ✈️ (F)' : 'Выживание ❤️ (F)';
      modeEl.textContent = 'Режим: ' + modeName;
      let biomeName = '';
      if (world && world.getBiome && (!dims || dims.current === 'overworld')) {
        const b = world.getBiome(Math.floor(player.pos.x), Math.floor(player.pos.z));
        const bn = { plains:'равнины', forest:'лес', desert:'пустыня', snow:'снег', mountains:'горы', ocean:'океан', swamp:'болото', taiga:'тайга' };
        biomeName = ' · ' + (bn[b] || b);
      }
      if (diffEl) diffEl.textContent = 'Сложность: ' + difficulty + (timePhase > 0.55 ? ' · ночь' : ' · день') + biomeName;
      if (dimLabel) dimLabel.textContent = 'Мир: ' + ((dims && dims.current) || 'overworld') + ' · карта ~' + Math.floor((WORLD_RADIUS || 2400) * 2) + '×' + Math.floor((WORLD_RADIUS || 2400) * 2);
      heartsEl.style.opacity = player.flying ? '0.35' : '1';

      // soul sand slow
      const under = ID_TO_KEY[world.getBlock(Math.floor(player.pos.x), Math.floor(player.pos.y - 0.1), Math.floor(player.pos.z))];
      if (under === 'soul_sand' && !player.flying) {
        player.vel.x *= 0.7;
        player.vel.z *= 0.7;
      }
      // magma damage
      if (under === 'magma' && !player.flying && player.hurtCooldown <= 0) {
        player.hurt(1);
      }

      const hit = player.lookHit;
      if (hit) {
        lookingEl.textContent = `Блок: ${BLOCKS[hit.key] ? BLOCKS[hit.key].name : hit.key} (${hit.x}, ${hit.y}, ${hit.z})`;
        highlight.position.set(hit.x + 0.5, hit.y + 0.5, hit.z + 0.5);
        highlight.visible = true;
      } else { lookingEl.textContent = 'Блок: —'; highlight.visible = false; }

      if (player.breakProgress > 0) {
        breakProgress.classList.add('active');
        breakBar.style.width = (player.breakProgress * 100) + '%';
      } else { breakProgress.classList.remove('active'); breakBar.style.width = '0%'; }

      updateHotbarUI();
    }
    renderer.render(scene, camera);
  }
  requestAnimationFrame(loop);

  window.addEventListener('load', () => {
    atlas = new TextureAtlas();
    buildInventoryUI();
    buildSkinPresets();
  });
})();
