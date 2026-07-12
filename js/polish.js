/*
 * BrowserCraft Visual Polish Pack
 * Красивые безопасные улучшения поверх игры: HUD, мини-карта, квесты, тосты,
 * скриншоты, подсказки, адаптивные эффекты. Не ломает основную логику.
 */
(function () {
  'use strict';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const now = () => performance.now();

  const state = {
    bootAt: now(),
    reducedMotion: false,
    cinematic: true,
    minimap: true,
    hudCompact: false,
    pos: { x: 0, y: 0, z: 0 },
    lastPos: { x: 0, y: 0, z: 0 },
    travelled: 0,
    trail: [],
    toastId: 0,
    fps: 60,
    started: false,
    quests: new Map(),
  };

  try {
    state.reducedMotion = localStorage.getItem('bc_polish_reduced_motion') === '1';
    state.cinematic = localStorage.getItem('bc_polish_cinematic') !== '0';
    state.minimap = localStorage.getItem('bc_polish_minimap') !== '0';
  } catch {}

  function savePrefs() {
    try {
      localStorage.setItem('bc_polish_reduced_motion', state.reducedMotion ? '1' : '0');
      localStorage.setItem('bc_polish_cinematic', state.cinematic ? '1' : '0');
      localStorage.setItem('bc_polish_minimap', state.minimap ? '1' : '0');
    } catch {}
  }

  function make(tag, cls, text) {
    const el = document.createElement(tag);
    if (cls) el.className = cls;
    if (text != null) el.textContent = text;
    return el;
  }

  function installBootScreen() {
    const boot = make('div', 'bc-boot');
    boot.innerHTML = `
      <div class="bc-boot-card">
        <div class="bc-cube-logo"><i></i><i></i><i></i></div>
        <h2>BrowserCraft</h2>
        <p>Загрузка мира, текстур и красивого HUD…</p>
        <div class="bc-loadbar"><span></span></div>
      </div>`;
    document.body.appendChild(boot);
    setTimeout(() => boot.classList.add('ready'), 900);
    setTimeout(() => boot.remove(), 1600);
  }

  function installMenuVoxels() {
    if (state.reducedMotion) return;
    const menu = $('#menu');
    if (!menu || $('.bc-menu-voxels', menu)) return;
    const layer = make('div', 'bc-menu-voxels');
    const colors = ['#66e28a', '#58a6ff', '#d29b52', '#8ee3ff', '#ffdc73', '#a78bfa'];
    for (let i = 0; i < 34; i++) {
      const b = make('span');
      b.style.left = Math.random() * 100 + '%';
      b.style.top = Math.random() * 100 + '%';
      b.style.animationDelay = (-Math.random() * 18).toFixed(2) + 's';
      b.style.animationDuration = (12 + Math.random() * 16).toFixed(2) + 's';
      b.style.setProperty('--c', colors[i % colors.length]);
      layer.appendChild(b);
    }
    menu.prepend(layer);
  }

  function toast(title, text = '', type = 'info', ttl = 3300) {
    let wrap = $('#bc-toasts');
    if (!wrap) {
      wrap = make('div');
      wrap.id = 'bc-toasts';
      document.body.appendChild(wrap);
    }
    const id = ++state.toastId;
    const el = make('div', 'bc-toast ' + type);
    el.innerHTML = `<b>${escapeHTML(title)}</b>${text ? `<span>${escapeHTML(text)}</span>` : ''}`;
    wrap.appendChild(el);
    requestAnimationFrame(() => el.classList.add('show'));
    setTimeout(() => {
      el.classList.remove('show');
      setTimeout(() => el.remove(), 450);
    }, ttl);
    return id;
  }

  function escapeHTML(s) {
    return String(s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
  }

  function parsePos() {
    const t = ($('#pos')?.textContent || '');
    const m = t.match(/XYZ:\s*(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)/i);
    if (!m) return null;
    return { x: +m[1], y: +m[2], z: +m[3] };
  }

  function installHud() {
    const hud = $('#hud');
    if (!hud || $('#bc-minimap')) return;

    const quest = make('div');
    quest.id = 'bc-quest';
    quest.innerHTML = `
      <div class="bc-panel-title">🏆 Задания</div>
      <ul id="bc-quest-list"></ul>
      <div class="bc-mini-hint">F1 помощь · M карта · P скрин</div>`;
    hud.appendChild(quest);

    const map = make('div');
    map.id = 'bc-minimap';
    map.innerHTML = `
      <canvas width="156" height="156"></canvas>
      <div class="bc-compass"><b>N</b><span>E</span><span>S</span><span>W</span></div>
      <div id="bc-map-coords">0 · 0</div>`;
    hud.appendChild(map);

    const vignette = make('div');
    vignette.id = 'bc-vignette';
    hud.appendChild(vignette);

    const biome = make('div');
    biome.id = 'bc-biome-chip';
    biome.textContent = '🌲 Исследуй мир';
    hud.appendChild(biome);

    map.style.display = state.minimap ? '' : 'none';
    document.body.classList.toggle('bc-cinematic', state.cinematic);
    document.body.classList.toggle('bc-reduced-motion', state.reducedMotion);
  }

  const questDefs = [
    { id: 'spawn', icon: '🌄', text: 'Войти в мир', done: () => !$('#hud')?.classList.contains('hidden') },
    { id: 'walk', icon: '👣', text: 'Пройти 50 блоков', done: () => state.travelled >= 50 },
    { id: 'height', icon: '⛰️', text: 'Подняться выше Y=80', done: () => state.pos.y >= 80 },
    { id: 'deep', icon: '⛏️', text: 'Спуститься ниже Y=25', done: () => state.pos.y <= 25 && state.started },
    { id: 'night', icon: '🌙', text: 'Пережить ночь', done: () => /ночь|night/i.test($('#mobs-count')?.textContent || '') },
    { id: 'nether', icon: '🔥', text: 'Открыть Незер', done: () => /nether/i.test($('#dim-label')?.textContent || '') },
    { id: 'end', icon: '🐉', text: 'Найти Энд', done: () => /end/i.test($('#dim-label')?.textContent || '') },
  ];

  function updateQuests() {
    const list = $('#bc-quest-list');
    if (!list) return;
    if (!list.children.length) {
      for (const q of questDefs) {
        const li = make('li');
        li.dataset.id = q.id;
        li.innerHTML = `<span>${q.icon}</span><em>${escapeHTML(q.text)}</em>`;
        list.appendChild(li);
      }
    }
    for (const q of questDefs) {
      const done = !!q.done();
      const prev = state.quests.get(q.id) || false;
      const li = list.querySelector(`[data-id="${q.id}"]`);
      if (li) li.classList.toggle('done', done);
      if (done && !prev) toast('Достижение', q.text, 'good');
      state.quests.set(q.id, done);
    }
  }

  function updateMinimap() {
    const p = parsePos();
    if (p) {
      state.started = true;
      const dx = p.x - state.lastPos.x, dz = p.z - state.lastPos.z;
      const step = Math.hypot(dx, dz);
      if (step < 15) state.travelled += step;
      state.lastPos = state.pos;
      state.pos = p;
      if (!state.trail.length || Math.hypot(p.x - state.trail[state.trail.length - 1].x, p.z - state.trail[state.trail.length - 1].z) > 1.2) {
        state.trail.push({ x: p.x, z: p.z });
        if (state.trail.length > 180) state.trail.shift();
      }
    }

    const wrap = $('#bc-minimap');
    const c = $('#bc-minimap canvas');
    if (!wrap || !c || wrap.style.display === 'none') return;
    const ctx = c.getContext('2d');
    const w = c.width, h = c.height, cx = w / 2, cy = h / 2;
    ctx.clearRect(0, 0, w, h);

    const dim = ($('#dim-label')?.textContent || '').toLowerCase();
    const grd = ctx.createRadialGradient(cx, cy, 8, cx, cy, cx);
    if (dim.includes('nether')) { grd.addColorStop(0, '#5b1919'); grd.addColorStop(1, '#170606'); }
    else if (dim.includes('end')) { grd.addColorStop(0, '#27223e'); grd.addColorStop(1, '#090812'); }
    else { grd.addColorStop(0, '#21472d'); grd.addColorStop(1, '#0b1720'); }
    ctx.fillStyle = grd;
    ctx.beginPath(); ctx.arc(cx, cy, cx - 3, 0, Math.PI * 2); ctx.fill();

    ctx.strokeStyle = 'rgba(255,255,255,.11)';
    ctx.lineWidth = 1;
    for (let r = 24; r < cx; r += 24) { ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke(); }
    ctx.beginPath(); ctx.moveTo(cx, 6); ctx.lineTo(cx, h - 6); ctx.moveTo(6, cy); ctx.lineTo(w - 6, cy); ctx.stroke();

    const scale = 2.3;
    if (state.trail.length > 1) {
      ctx.strokeStyle = '#80f7ff'; ctx.lineWidth = 2; ctx.beginPath();
      state.trail.forEach((pt, i) => {
        const x = cx + (pt.x - state.pos.x) * scale;
        const y = cy + (pt.z - state.pos.z) * scale;
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      });
      ctx.stroke();
    }
    ctx.fillStyle = '#ffef7a';
    ctx.beginPath();
    ctx.moveTo(cx, cy - 8); ctx.lineTo(cx + 6, cy + 7); ctx.lineTo(cx, cy + 4); ctx.lineTo(cx - 6, cy + 7); ctx.closePath(); ctx.fill();
    const label = $('#bc-map-coords');
    if (label) label.textContent = `${Math.round(state.pos.x)} · ${Math.round(state.pos.z)}`;
  }

  function updateFpsBadge() {
    const text = $('#fps')?.textContent || '';
    const m = text.match(/FPS:\s*(\d+)/i);
    if (!m) return;
    state.fps = +m[1];
    const fps = $('#fps');
    fps.classList.toggle('bc-fps-low', state.fps < 28);
    fps.classList.toggle('bc-fps-mid', state.fps >= 28 && state.fps < 50);
    fps.classList.toggle('bc-fps-high', state.fps >= 50);
  }

  function updateBiomeChip() {
    const chip = $('#bc-biome-chip');
    if (!chip) return;
    const dim = ($('#dim-label')?.textContent || '').toLowerCase();
    const y = state.pos.y;
    if (dim.includes('nether')) chip.textContent = '🔥 Незер · опасная зона';
    else if (dim.includes('end')) chip.textContent = '🐉 Энд · финальный мир';
    else if (y < 30) chip.textContent = '💎 Глубины · ищи руды';
    else if (y > 90) chip.textContent = '⛰️ Высота · отличный обзор';
    else chip.textContent = '🌲 Верхний мир · строй базу';
  }

  function installButtons() {
    const panel = $('#menu .menu-panel');
    if (panel && !$('#btn-polish')) {
      const btn = make('button', 'btn shine');
      btn.id = 'btn-polish';
      btn.textContent = '✨ Красивые настройки';
      const hint = panel.querySelector('.hint');
      panel.insertBefore(btn, hint || null);
      btn.addEventListener('click', openSettings);
    }
  }

  function openSettings() {
    let overlay = $('#bc-polish-settings');
    if (!overlay) {
      overlay = make('div', 'overlay');
      overlay.id = 'bc-polish-settings';
      overlay.innerHTML = `
        <div class="menu-panel wide bc-settings-panel">
          <h2>✨ Красивые настройки</h2>
          <label class="check-row"><input id="bc-set-cinematic" type="checkbox"> Кинематографичный HUD: виньетка, стекло, glow</label>
          <label class="check-row"><input id="bc-set-minimap" type="checkbox"> Мини-карта и след пути</label>
          <label class="check-row"><input id="bc-set-motion" type="checkbox"> Уменьшить анимации для слабого ПК</label>
          <div class="bc-hotkeys">
            <b>Горячие клавиши:</b> <kbd>F1</kbd> помощь, <kbd>M</kbd> карта, <kbd>H</kbd> скрыть HUD, <kbd>P</kbd> скриншот.
          </div>
          <button id="bc-set-back" class="btn primary">Готово</button>
        </div>`;
      document.body.appendChild(overlay);
      $('#bc-set-back', overlay).addEventListener('click', () => overlay.classList.add('hidden'));
      $('#bc-set-cinematic', overlay).addEventListener('change', e => {
        state.cinematic = e.target.checked; document.body.classList.toggle('bc-cinematic', state.cinematic); savePrefs();
      });
      $('#bc-set-minimap', overlay).addEventListener('change', e => {
        state.minimap = e.target.checked; const m = $('#bc-minimap'); if (m) m.style.display = state.minimap ? '' : 'none'; savePrefs();
      });
      $('#bc-set-motion', overlay).addEventListener('change', e => {
        state.reducedMotion = e.target.checked; document.body.classList.toggle('bc-reduced-motion', state.reducedMotion); savePrefs();
      });
    }
    $('#bc-set-cinematic', overlay).checked = state.cinematic;
    $('#bc-set-minimap', overlay).checked = state.minimap;
    $('#bc-set-motion', overlay).checked = state.reducedMotion;
    overlay.classList.remove('hidden');
  }

  function screenshot() {
    const canvas = $('#game');
    if (!canvas) return;
    try {
      const a = document.createElement('a');
      a.download = `browsercraft-${new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-')}.png`;
      a.href = canvas.toDataURL('image/png');
      a.click();
      toast('Скриншот сохранён', a.download, 'good');
    } catch (e) {
      toast('Скриншот не получился', 'Браузер заблокировал чтение canvas.', 'warn');
    }
  }

  function helpToast() {
    toast('Управление', 'WASD · мышь · E инвентарь · C крафт · T чат · M карта · P скрин', 'info', 5200);
  }

  function installKeys() {
    window.addEventListener('keydown', (e) => {
      if (e.target && /input|textarea|select/i.test(e.target.tagName)) return;
      if (e.code === 'F1') { e.preventDefault(); helpToast(); }
      if (e.code === 'KeyM') { state.minimap = !state.minimap; const m = $('#bc-minimap'); if (m) m.style.display = state.minimap ? '' : 'none'; savePrefs(); toast('Мини-карта', state.minimap ? 'включена' : 'выключена'); }
      if (e.code === 'KeyH') { document.body.classList.toggle('bc-hide-hud'); toast('HUD', document.body.classList.contains('bc-hide-hud') ? 'скрыт' : 'показан'); }
      if (e.code === 'KeyP') { screenshot(); }
    }, true);
  }

  function polishHotbar() {
    $$('#hotbar .slot').forEach((slot, i) => {
      if (!slot.dataset.polished) {
        slot.dataset.polished = '1';
        slot.insertAdjacentHTML('beforeend', `<i class="bc-slot-num">${i + 1}</i>`);
      }
    });
  }

  function pulseOnDamage() {
    const hurt = $('#hurt-overlay');
    if (!hurt || hurt.dataset.observed) return;
    hurt.dataset.observed = '1';
    const obs = new MutationObserver(() => {
      const op = parseFloat(getComputedStyle(hurt).opacity || '0');
      if (op > 0.05) document.body.classList.add('bc-damaged');
      setTimeout(() => document.body.classList.remove('bc-damaged'), 220);
    });
    obs.observe(hurt, { attributes: true, attributeFilter: ['style', 'class'] });
  }

  function tick() {
    installHud();
    installButtons();
    installMenuVoxels();
    polishHotbar();
    pulseOnDamage();
    updateMinimap();
    updateQuests();
    updateFpsBadge();
    updateBiomeChip();
    requestAnimationFrame(tick);
  }

  function boot() {
    document.body.classList.toggle('bc-cinematic', state.cinematic);
    document.body.classList.toggle('bc-reduced-motion', state.reducedMotion);
    installBootScreen();
    installKeys();
    tick();
    setTimeout(() => toast('Polish Pack активен', 'M карта · F1 помощь · P скриншот', 'good'), 1800);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
