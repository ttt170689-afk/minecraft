/**
 * Simple mod / plugin system for BrowserCraft
 * Mods can register blocks, items, recipes, commands, and tick hooks.
 */

const ModAPI = {
  mods: [],
  hooks: {
    tick: [],
    playerHurt: [],
    blockPlace: [],
    blockBreak: [],
    dimension: [],
  },

  register(mod) {
    if (!mod || !mod.id) throw new Error('Mod needs id');
    this.mods.push(mod);
    if (mod.onRegister) mod.onRegister(this);
    console.log('[Mod]', mod.id, mod.name || '', 'loaded');
    return mod;
  },

  on(hook, fn) {
    if (!this.hooks[hook]) this.hooks[hook] = [];
    this.hooks[hook].push(fn);
  },

  emit(hook, ...args) {
    const list = this.hooks[hook] || [];
    for (const fn of list) {
      try { fn(...args); } catch (e) { console.warn('mod hook', hook, e); }
    }
  },

  addItem(key, def) {
    if (typeof ITEMS !== 'undefined') ITEMS[key] = def;
    if (typeof INVENTORY_ALL !== 'undefined' && !INVENTORY_ALL.includes(key)) INVENTORY_ALL.push(key);
  },

  addBlock(key, def, drawFn) {
    if (typeof BLOCKS !== 'undefined') {
      BLOCKS[key] = def;
      ID_TO_KEY[def.id] = key;
    }
    // textures need atlas rebuild ideally — store for late
    if (!window._modBlockDraws) window._modBlockDraws = {};
    if (drawFn) window._modBlockDraws[key] = drawFn;
  },

  addRecipe(recipe) {
    if (typeof RECIPES !== 'undefined') RECIPES.push(recipe);
  },

  addCommand(name, def) {
    if (!window._modCommands) window._modCommands = {};
    window._modCommands[name] = def;
  },

  list() {
    return this.mods.map((m) => m.id + (m.name ? ' — ' + m.name : ''));
  },
};

// —— Built-in example mods ——

ModAPI.register({
  id: 'better_ores',
  name: 'Better Ores',
  onRegister(api) {
    api.addItem('ruby', { name: 'Рубин', type: 'misc', icon: 'diamond_gem' });
    api.addItem('sword_ruby', { name: 'Рубиновый меч', type: 'weapon', damage: 11, cooldown: 0.38, icon: 'sword_diamond' });
    api.addRecipe({
      out: 'sword_ruby', count: 1,
      shape: [[null, 'ruby', null], [null, 'ruby', null], [null, 'stick', null]],
      needTable: true,
    });
  },
});

ModAPI.register({
  id: 'utility',
  name: 'Utility+',
  onRegister(api) {
    api.addItem('ender_pearl', ITEMS.ender_pearl || { name: 'Эндер-жемчуг', type: 'misc', icon: 'ender_pearl' });
    api.addCommand('home', {
      usage: '/home',
      desc: 'Домой (спавн)',
      run(ctx) { ctx.player.spawn(); ctx.say('Дом!', '#8f8'); },
    });
    api.addCommand('nether', {
      usage: '/nether',
      desc: 'В Незер',
      run(ctx) { if (ctx.goDim) ctx.goDim('nether'); },
    });
    api.addCommand('end', {
      usage: '/end',
      desc: 'В Энд',
      run(ctx) { if (ctx.goDim) ctx.goDim('end'); },
    });
    api.addCommand('overworld', {
      usage: '/overworld',
      desc: 'В обычный мир',
      run(ctx) { if (ctx.goDim) ctx.goDim('overworld'); },
    });
    api.addCommand('mods', {
      usage: '/mods',
      desc: 'Список модов',
      run(ctx) { ctx.say('Моды: ' + ModAPI.list().join(' | '), '#fda'); },
    });
  },
});

ModAPI.register({
  id: 'particles_fx',
  name: 'Particle FX',
  onRegister(api) {
    api.on('blockBreak', (x, y, z, key, particles) => {
      if (particles) particles.breakBlock(x, y, z, key === 'glass' ? 0xaaddff : 0x888888);
    });
  },
});

ModAPI.register({
  id: 'hardcore_plus',
  name: 'Hardcore+',
  onRegister(api) {
    api.on('playerHurt', (player, amount) => {
      // visual only — actual hardcore in player
    });
  },
});

/**
 * Load a user .js mod file (text). Expected to call ModAPI.register({...})
 * Usage from UI: input type=file accept=.js
 */
ModAPI.loadUserFile = function (file) {
  return new Promise((resolve, reject) => {
    if (!file) return reject(new Error('Нет файла'));
    const reader = new FileReader();
    reader.onload = () => {
      try {
        // sandboxed-ish: run in function with only ModAPI
        const code = String(reader.result);
        // eslint-disable-next-line no-new-func
        const fn = new Function('ModAPI', 'ITEMS', 'BLOCKS', 'RECIPES', code);
        fn(ModAPI, typeof ITEMS !== 'undefined' ? ITEMS : {}, typeof BLOCKS !== 'undefined' ? BLOCKS : {}, typeof RECIPES !== 'undefined' ? RECIPES : []);
        resolve(true);
      } catch (e) {
        reject(e);
      }
    };
    reader.onerror = () => reject(new Error('read error'));
    reader.readAsText(file);
  });
};

window.ModAPI = ModAPI;
