/**
 * Minecraft-like chat commands (/help, /gamemode, /tp, /give, /time, /hardcore, /skin ...)
 */

function createCommandHandler(ctx) {
  /**
   * ctx: {
   *   player, world, mobs, atlas, mp, multiMode,
   *   setDifficulty, getDifficulty,
   *   applySkin, openSkinUI,
   *   say(msg, color),
   *   setTimePhase(t), // 0 day 1 night
   * }
   */
  const cmds = {
    help: {
      usage: '/help',
      desc: 'Список команд',
      run() {
        ctx.say('Команды: /help /gm /tp /give /time /hardcore /dim /nether /end /portal /music /mods /summon /skin /particle /heal /fly /seed', '#8fd9ff');
      },
    },
    gamemode: {
      usage: '/gamemode <survival|creative|hardcore|0|1|2>',
      desc: 'Режим игры',
      run(args) {
        const a = (args[0] || '').toLowerCase();
        if (a === '1' || a === 'creative' || a === 'c') {
          ctx.player.flying = true;
          ctx.player.hardcore = false;
          ctx.setDifficulty('creative');
          ctx.say('Режим: Креатив', '#8f8');
        } else if (a === '2' || a === 'hardcore' || a === 'h') {
          ctx.player.flying = false;
          ctx.player.hardcore = true;
          ctx.setDifficulty('hardcore');
          ctx.say('Режим: ХАРДКОР (одна жизнь!)', '#f44');
        } else {
          ctx.player.flying = false;
          ctx.player.hardcore = false;
          ctx.setDifficulty('survival');
          ctx.say('Режим: Выживание', '#fa8');
        }
        if (window.SFX) SFX.pop();
      },
    },
    gm: { usage: '/gm <0|1|2>', desc: 'Коротко gamemode', run(args) { cmds.gamemode.run(args); } },
    tp: {
      usage: '/tp <x> <y> <z>',
      desc: 'Телепорт',
      run(args) {
        if (args.length < 3) return ctx.say(cmds.tp.usage, '#f88');
        const x = parseFloat(args[0]), y = parseFloat(args[1]), z = parseFloat(args[2]);
        if (![x, y, z].every(Number.isFinite)) return ctx.say('Неверные координаты', '#f88');
        ctx.player.pos.set(x, y, z);
        ctx.player.vel.set(0, 0, 0);
        if (window.SFX) SFX.endermanTp && SFX.endermanTp();
        ctx.say(`ТП → ${x.toFixed(1)} ${y.toFixed(1)} ${z.toFixed(1)}`, '#8f8');
      },
    },
    give: {
      usage: '/give <item> [count]',
      desc: 'Выдать предмет',
      run(args) {
        const key = args[0];
        const n = Math.min(64, Math.max(1, parseInt(args[1] || '1', 10) || 1));
        if (!key) return ctx.say(cmds.give.usage, '#f88');
        if (!ITEMS[key] && !BLOCKS[key]) return ctx.say('Нет такого предмета: ' + key, '#f88');
        if (ctx.player.bag) ctx.player.bag.add(key, n);
        // also put in hotbar empty/selected
        ctx.player.hotbar[ctx.player.selectedSlot] = key;
        if (ctx.player.counts) ctx.player.counts[ctx.player.selectedSlot] = n;
        if (window.SFX) SFX.pickup && SFX.pickup();
        ctx.say(`Выдано ${key} x${n}`, '#8f8');
      },
    },
    clear: {
      usage: '/clear',
      desc: 'Очистить хотбар',
      run() {
        ctx.player.hotbar = Array(9).fill(null);
        if (ctx.player.counts) ctx.player.counts = Array(9).fill(0);
        if (ctx.player.bag) ctx.player.bag.clear();
        ctx.say('Инвентарь очищен', '#fa8');
      },
    },
    time: {
      usage: '/time <day|night|set 0-1>',
      desc: 'Время суток',
      run(args) {
        const a = (args[0] || '').toLowerCase();
        if (a === 'day') ctx.setTimePhase(0);
        else if (a === 'night') ctx.setTimePhase(1);
        else if (a === 'set' && args[1] != null) ctx.setTimePhase(Math.max(0, Math.min(1, parseFloat(args[1]))));
        else return ctx.say(cmds.time.usage, '#f88');
        ctx.say('Время изменено', '#8fd9ff');
      },
    },
    difficulty: {
      usage: '/difficulty <peaceful|easy|normal|hard|hardcore>',
      desc: 'Сложность',
      run(args) {
        const a = (args[0] || 'normal').toLowerCase();
        ctx.setDifficulty(a);
        if (a === 'hardcore') {
          ctx.player.hardcore = true;
          ctx.player.flying = false;
        }
        ctx.say('Сложность: ' + a, '#fa8');
      },
    },
    hardcore: {
      usage: '/hardcore',
      desc: 'Вкл хардкор',
      run() { cmds.gamemode.run(['hardcore']); },
    },
    kill: {
      usage: '/kill',
      desc: 'Убить себя',
      run() {
        ctx.player.flying = false;
        ctx.player.hurt(999);
      },
    },
    heal: {
      usage: '/heal',
      desc: 'Полное лечение',
      run() {
        ctx.player.heal(99);
        ctx.say('HP восстановлено', '#8f8');
      },
    },
    fly: {
      usage: '/fly',
      desc: 'Переключить полёт',
      run() {
        ctx.player.flying = !ctx.player.flying;
        ctx.say(ctx.player.flying ? 'Полёт ВКЛ' : 'Полёт ВЫКЛ', '#8fd9ff');
        if (window.SFX) SFX.pop();
      },
    },
    seed: {
      usage: '/seed',
      desc: 'Сид мира',
      run() {
        ctx.say('Seed: ' + (ctx.world ? ctx.world.seed : '?'), '#ff8');
      },
    },
    summon: {
      usage: '/summon <zombie|skeleton|creeper|spider|cow|...>',
      desc: 'Заспавнить моба',
      run(args) {
        const t = args[0] || 'zombie';
        if (!MOB_DEFS[t]) return ctx.say('Неизвестный моб. Примеры: zombie skeleton creeper cow', '#f88');
        if (!ctx.mobs) return ctx.say('Мобы недоступны', '#f88');
        const p = ctx.player.pos;
        const dir = ctx.player.getLookDirection();
        ctx.mobs.spawn(t, p.x + dir.x * 3, p.y, p.z + dir.z * 3);
        ctx.say('Призван: ' + t, '#8f8');
      },
    },
    skin: {
      usage: '/skin [name|list|ui]',
      desc: 'Скин',
      run(args) {
        const a = (args[0] || 'ui').toLowerCase();
        if (a === 'list') {
          ctx.say(SKIN_PRESETS.map((s) => s.id).join(', '), '#8fd9ff');
          return;
        }
        if (a === 'ui' || !a) {
          if (ctx.openSkinUI) ctx.openSkinUI();
          return;
        }
        const preset = SKIN_PRESETS.find((s) => s.id === a);
        if (!preset) return ctx.say('Нет скина. /skin list', '#f88');
        ctx.applySkin({ ...preset });
        ctx.say('Скин: ' + preset.name, '#8f8');
      },
    },
    say: {
      usage: '/say <text>',
      desc: 'Сообщение',
      run(args) {
        const t = args.join(' ');
        if (!t) return;
        if (ctx.multiMode && ctx.mp) ctx.mp.sendChat(t);
        else ctx.say(t, '#fff');
      },
    },
    list: {
      usage: '/list',
      desc: 'Игроки онлайн',
      run() {
        if (ctx.multiMode && ctx.mp) {
          const n = 1 + ctx.mp.remote.size;
          ctx.say('Игроков: ' + n + ' (ты + ' + ctx.mp.remote.size + ')', '#8fd9ff');
        } else ctx.say('Одиночная игра', '#aaa');
      },
    },
    spawn: {
      usage: '/spawn',
      desc: 'На спавн',
      run() {
        ctx.player.spawn();
        ctx.say('Спавн', '#8f8');
      },
    },
    effect: {
      usage: '/effect <speed|strength|clear>',
      desc: 'Эффекты',
      run(args) {
        const a = (args[0] || '').toLowerCase();
        if (a === 'clear') {
          ctx.player.effects = {};
          ctx.say('Эффекты сняты', '#aaa');
        } else if (a === 'speed') {
          ctx.player.effects = ctx.player.effects || {};
          ctx.player.effects.speed = 30;
          ctx.say('Скорость 30с', '#8f8');
        } else if (a === 'strength') {
          ctx.player.effects = ctx.player.effects || {};
          ctx.player.effects.strength = 30;
          ctx.say('Сила 30с', '#8f8');
        } else ctx.say(cmds.effect.usage, '#f88');
      },
    },
    dim: {
      usage: '/dim <overworld|nether|end>',
      desc: 'Смена измерения',
      run(args) {
        const d = (args[0] || '').toLowerCase();
        if (!['overworld', 'nether', 'end'].includes(d)) return ctx.say(cmds.dim.usage, '#f88');
        if (ctx.goDim) ctx.goDim(d);
        else ctx.say('Измерения недоступны', '#f88');
      },
    },
    nether: { usage: '/nether', desc: 'В Незер', run() { if (ctx.goDim) ctx.goDim('nether'); } },
    end: { usage: '/end', desc: 'В Энд', run() { if (ctx.goDim) ctx.goDim('end'); } },
    overworld: { usage: '/overworld', desc: 'В обычный мир', run() { if (ctx.goDim) ctx.goDim('overworld'); } },
    portal: {
      usage: '/portal [nether|end]',
      desc: 'Создать портал у ног',
      run(args) {
        const t = (args[0] || 'nether').toLowerCase();
        if (ctx.makePortal) ctx.makePortal(t);
        else ctx.say('Нет makePortal', '#f88');
      },
    },
    music: {
      usage: '/music <on|off|proc>',
      desc: 'Музыка',
      run(args) {
        const a = (args[0] || 'on').toLowerCase();
        if (!window.Music) return ctx.say('Нет Music engine', '#f88');
        if (a === 'off') { Music.setEnabled(false); ctx.say('Музыка выкл', '#aaa'); }
        else if (a === 'proc') { Music.useProcedural(); Music.setEnabled(true); ctx.say('Процедурный BGM', '#8fd9ff'); }
        else { Music.setEnabled(true); Music.start(); ctx.say('Музыка вкл', '#8f8'); }
      },
    },
    mods: {
      usage: '/mods',
      desc: 'Список модов',
      run() {
        if (window.ModAPI) ctx.say('Моды: ' + ModAPI.list().join(' | '), '#fda');
        else ctx.say('ModAPI нет', '#f88');
      },
    },
    particle: {
      usage: '/particle',
      desc: 'Эффект частиц',
      run() {
        if (ctx.particles && ctx.player) {
          const p = ctx.player.pos;
          ctx.particles.magic(p.x, p.y + 1, p.z);
          ctx.say('✨', '#8f8');
        }
      },
    },
  };

  // merge mod commands
  if (window._modCommands) {
    for (const [name, def] of Object.entries(window._modCommands)) {
      cmds[name] = {
        usage: def.usage || '/' + name,
        desc: def.desc || '',
        run: (args) => def.run(ctx, args),
      };
    }
  }

  function handle(line) {
    if (!line || line[0] !== '/') return false;
    const parts = line.slice(1).trim().split(/\s+/);
    const name = (parts.shift() || '').toLowerCase();
    const cmd = cmds[name];
    if (!cmd) {
      ctx.say('Неизвестная команда. /help', '#f88');
      return true;
    }
    try { cmd.run(parts); } catch (e) { ctx.say('Ошибка: ' + e.message, '#f88'); }
    return true;
  }

  return { handle, cmds };
}

window.createCommandHandler = createCommandHandler;
