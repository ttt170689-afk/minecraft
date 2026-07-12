/**
 * BrowserCraft extra systems: enchantments, weather, achievements, loot, status effects, armor, advancements
 */
(function(){
const Enchantments = {
  sharpness: { name: 'Острота', max: 5, type: 'weapon', desc: '+урон' },
  smite: { name: 'Небесная кара', max: 5, type: 'weapon', desc: '+к нежити' },
  bane: { name: 'Бич членистоногих', max: 5, type: 'weapon', desc: '+к паукам' },
  knockback: { name: 'Отдача', max: 2, type: 'weapon', desc: 'отбрасывание' },
  fire_aspect: { name: 'Заговор огня', max: 2, type: 'weapon', desc: 'поджигает' },
  looting: { name: 'Добыча', max: 3, type: 'weapon', desc: 'больше лута' },
  sweeping: { name: 'Разящий клинок', max: 3, type: 'weapon', desc: 'АОЕ' },
  efficiency: { name: 'Эффективность', max: 5, type: 'tool', desc: 'быстрее копать' },
  fortune: { name: 'Удача', max: 3, type: 'tool', desc: 'больше дропа' },
  silk_touch: { name: 'Шёлковое касание', max: 1, type: 'tool', desc: 'блок как есть' },
  unbreaking: { name: 'Прочность', max: 3, type: 'any', desc: 'дольше живёт' },
  mending: { name: 'Починка', max: 1, type: 'any', desc: 'чинит XP' },
  protection: { name: 'Защита', max: 4, type: 'armor', desc: '-урон' },
  fire_prot: { name: 'Огнеупорность', max: 4, type: 'armor', desc: '-огонь' },
  blast_prot: { name: 'Взрывоустойчивость', max: 4, type: 'armor', desc: '-взрыв' },
  proj_prot: { name: 'Защита от снарядов', max: 4, type: 'armor', desc: '-стрелы' },
  feather_falling: { name: 'Невесомость', max: 4, type: 'boots', desc: '-падение' },
  depth_strider: { name: 'Подводная ходьба', max: 3, type: 'boots', desc: 'в воде' },
  soul_speed: { name: 'Скорость души', max: 3, type: 'boots', desc: 'песок душ' },
  frost_walker: { name: 'Ледоход', max: 2, type: 'boots', desc: 'лёд под ногами' },
  thorns: { name: 'Шипы', max: 3, type: 'armor', desc: 'отражает урон' },
  respiration: { name: 'Подводное дыхание', max: 3, type: 'helmet', desc: 'дольше под водой' },
  aqua_affinity: { name: 'Подводник', max: 1, type: 'helmet', desc: 'копает в воде' },
  power: { name: 'Сила', max: 5, type: 'bow', desc: '+урон лука' },
  punch: { name: 'Ударная волна', max: 2, type: 'bow', desc: 'отбрасывание' },
  flame: { name: 'Воспламенение', max: 1, type: 'bow', desc: 'горящие стрелы' },
  infinity: { name: 'Бесконечность', max: 1, type: 'bow', desc: 'стрелы не тратятся' },
  multishot: { name: 'Тройной выстрел', max: 1, type: 'crossbow', desc: '3 стрелы' },
  piercing: { name: 'Пронзающая стрела', max: 4, type: 'crossbow', desc: 'сквозь цели' },
  quick_charge: { name: 'Быстрая перезарядка', max: 3, type: 'crossbow', desc: 'быстрее' },
  loyalty: { name: 'Верность', max: 3, type: 'trident', desc: 'возврат' },
  channeling: { name: 'Громовержец', max: 1, type: 'trident', desc: 'молния' },
  riptide: { name: 'Тягун', max: 3, type: 'trident', desc: 'рывок в воде' },
  impaling: { name: 'Пронзатель', max: 5, type: 'trident', desc: '+к водным' },
};

const StatusEffects = {
  speed: { name: 'Скорость', color: '#3388ff' },
  slowness: { name: 'Замедление', color: '#555588' },
  haste: { name: 'Спешка', color: '#d9c043' },
  mining_fatigue: { name: 'Усталость', color: '#4a4217' },
  strength: { name: 'Сила', color: '#932423' },
  instant_health: { name: 'Мгновенное лечение', color: '#f82423' },
  instant_damage: { name: 'Мгновенный урон', color: '#430a09' },
  jump_boost: { name: 'Прыгучесть', color: '#22ff4c' },
  nausea: { name: 'Тошнота', color: '#551d4a' },
  regeneration: { name: 'Регенерация', color: '#cd5cab' },
  resistance: { name: 'Сопротивление', color: '#99453a' },
  fire_resistance: { name: 'Огнестойкость', color: '#e49a3a' },
  water_breathing: { name: 'Подводное дыхание', color: '#2e5299' },
  invisibility: { name: 'Невидимость', color: '#7f8392' },
  blindness: { name: 'Слепота', color: '#1f1f23' },
  night_vision: { name: 'Ночное зрение', color: '#1f1fa1' },
  hunger: { name: 'Голод', color: '#587653' },
  weakness: { name: 'Слабость', color: '#484d48' },
  poison: { name: 'Отравление', color: '#4e9331' },
  wither: { name: 'Иссушение', color: '#352a27' },
  health_boost: { name: 'Прирост здоровья', color: '#f87d23' },
  absorption: { name: 'Поглощение', color: '#2552a5' },
  saturation: { name: 'Насыщение', color: '#f82423' },
  glowing: { name: 'Свечение', color: '#94a061' },
  levitation: { name: 'Левитация', color: '#ceffff' },
  luck: { name: 'Удача', color: '#339900' },
  unluck: { name: 'Неудача', color: '#c0a44d' },
  slow_falling: { name: 'Плавное падение', color: '#f7f8f3' },
  conduit_power: { name: 'Сила проводника', color: '#1dc2d1' },
  dolphins_grace: { name: 'Грация дельфина', color: '#88a3be' },
  bad_omen: { name: 'Дурное знамение', color: '#0b6138' },
  hero_of_village: { name: 'Герой деревни', color: '#44ff44' },
  darkness: { name: 'Тьма', color: '#29283c' },
};

const Advancements = [
  { id: 'stone_age', title: 'Каменный век', desc: 'Добудь камень', check: (p)=>true },
  { id: 'getting_wood', title: 'Добыча древесины', desc: 'Сруби дерево', check: (p)=>true },
  { id: 'acquire_hardware', title: 'Индустриализация', desc: 'Добудь железо', check: (p)=>true },
  { id: 'iron_pick', title: 'Железная кирка', desc: 'Скрафти кирку', check: (p)=>true },
  { id: 'diamonds', title: 'Алмазы!', desc: 'Добудь алмаз', check: (p)=>true },
  { id: 'enchanted', title: 'Зачаровано', desc: 'Зачаруй предмет', check: (p)=>true },
  { id: 'into_fire', title: 'В огонь', desc: 'Найди крепость Незера', check: (p)=>true },
  { id: 'end', title: 'Конец?', desc: 'Войди в Энд', check: (p)=>true },
  { id: 'free_the_end', title: 'Освободите Энд', desc: 'Убей дракона', check: (p)=>true },
  { id: 'local_brewery', title: 'Местная пивоварня', desc: 'Свари зелье', check: (p)=>true },
  { id: 'the_end', title: 'Конец.', desc: 'Пройди игру', check: (p)=>true },
  { id: 'adventure', title: 'Приключение', desc: 'Атакуй моба', check: (p)=>true },
  { id: 'monster_hunter', title: 'Охотник на монстров', desc: 'Убей враждебного моба', check: (p)=>true },
  { id: 'sniper', title: 'Снайперская дуэль', desc: 'Убей с лука с 50м', check: (p)=>true },
  { id: 'bullseye', title: 'Яблочко', desc: 'Попади в мишень', check: (p)=>true },
  { id: 'serious_dedication', title: 'Серьёзный подход', desc: 'Незеритовая мотыга', check: (p)=>true },
  { id: 'hidden_in_depths', title: 'Скрытое в глубинах', desc: 'Древние обломки', check: (p)=>true },
  { id: 'cover_me', title: 'Укрой меня', desc: 'Полный алмазный сет', check: (p)=>true },
  { id: 'enchanter', title: 'Чародей', desc: 'Стол зачарований', check: (p)=>true },
  { id: 'librarian', title: 'Библиотекарь', desc: 'Книжная полка', check: (p)=>true },
];

class WeatherSystem {
  constructor() {
    this.rain = 0; // 0..1
    this.thunder = false;
    this.timer = 60 + Math.random()*120;
    this.clearTimer = 0;
  }
  update(dt, timePhase) {
    this.timer -= dt;
    if (this.timer <= 0) {
      if (this.rain <= 0) {
        this.rain = 0.3 + Math.random()*0.7;
        this.thunder = Math.random() < 0.25;
        this.timer = 30 + Math.random()*90;
      } else {
        this.rain = 0;
        this.thunder = false;
        this.timer = 60 + Math.random()*180;
      }
    }
    if (this.thunder && Math.random() < dt * 0.05 && window.SFX) {
      try { SFX._tone(40, 0.4, 'sawtooth', 0.15, 20); SFX._playNoise({duration:0.5,gain:0.3,filterFreq:300,decay:0.4}); } catch(e){}
    }
  }
}

class ArmorSystem {
  static DEF = {
    leather_helmet:1, leather_chestplate:3, leather_leggings:2, leather_boots:1,
    chainmail_helmet:2, chainmail_chestplate:5, chainmail_leggings:4, chainmail_boots:1,
    iron_helmet:2, iron_chestplate:6, iron_leggings:5, iron_boots:2,
    gold_helmet:2, gold_chestplate:5, gold_leggings:3, gold_boots:1,
    diamond_helmet:3, diamond_chestplate:8, diamond_leggings:6, diamond_boots:3,
    netherite_helmet:3, netherite_chestplate:8, netherite_leggings:6, netherite_boots:3,
    helmet_iron:2, chest_iron:6, legs_iron:5, boots_iron:2,
    helmet_diamond:3, chest_diamond:8,
  };
  static reduce(player, amount) {
    let points = 0;
    if (player.armor) {
      for (const s of Object.values(player.armor)) points += this.DEF[s] || 0;
    }
    // also scan hotbar for armor pieces as simple equip
    if (player.hotbar) {
      for (const k of player.hotbar) {
        if (k && this.DEF[k]) points += this.DEF[k] * 0.15;
      }
    }
    points = Math.min(20, points);
    const reduced = amount * (1 - Math.min(0.8, points * 0.04));
    return Math.max(0.5, reduced);
  }
}

class LootTables {
  static MOB = {
    zombie: [['rotten_flesh',1,2],['iron_ingot',0,1],['carrot',0,1]],
    skeleton: [['bone',1,2],['arrow',1,3],['bow',0,1]],
    creeper: [['gunpowder',1,2]],
    spider: [['string',1,2],['spider_eye',0,1]],
    enderman: [['ender_pearl',0,1]],
    cow: [['beef',1,3],['leather',0,2]],
    pig: [['porkchop',1,3]],
    sheep: [['mutton_raw',1,2],['white_wool',1,1]],
    chicken: [['chicken',1,1],['feather',0,2]],
    blaze: [['blaze_rod',0,1]],
    witch: [['redstone',1,3],['glowstone_dust',0,2],['sugar',0,2]],
  };
  static roll(type) {
    const t = this.MOB[type]; if (!t) return [];
    const out=[];
    for (const [item,a,b] of t) {
      const n = a + ((Math.random()*(b-a+1))|0);
      if (n>0) out.push({item, count:n});
    }
    return out;
  }
}

class ChestLoot {
  static POOLS = [
    ['apple',1,3],['bread',1,4],['iron_ingot',1,5],['gold_ingot',0,3],['diamond',0,1],
    ['cobble',4,16],['oak_planks',4,12],['torch_item',4,16],['string',1,6],['bone',1,4],
    ['gunpowder',0,3],['redstone',0,8],['book',0,2],['saddle',0,1],['name_tag',0,1],
    ['iron_sword',0,1],['bow',0,1],['arrow',4,12],['golden_apple',0,1],['emerald',0,4],
  ];
  static generate(seed) {
    const items=[];
    const n = 3 + (seed % 5);
    for (let i=0;i<n;i++) {
      const p = this.POOLS[(seed + i*17) % this.POOLS.length];
      const c = p[1] + ((seed>>i)&3);
      if (c>0) items.push({key:p[0], count: Math.min(p[2], Math.max(p[1], c))});
    }
    return items;
  }
}

class GameStats {
  constructor() {
    this.blocksBroken=0; this.blocksPlaced=0; this.mobsKilled=0; this.distance=0;
    this.deaths=0; this.jumps=0; this.timePlayed=0; this.damageDealt=0; this.damageTaken=0;
  }
  update(dt){ this.timePlayed+=dt; }
}

// Patch player.hurt for armor
if (typeof Player !== 'undefined') {
  const _hurt = Player.prototype.hurt;
  Player.prototype.hurt = function(amount, knock) {
    if (this.flying || this.dead) return false;
    const red = ArmorSystem.reduce(this, amount);
    if (this.stats) this.stats.damageTaken += red;
    return _hurt.call(this, red, knock);
  };
}

window.Enchantments = Enchantments;
window.StatusEffects = StatusEffects;
window.Advancements = Advancements;
window.WeatherSystem = WeatherSystem;
window.ArmorSystem = ArmorSystem;
window.LootTables = LootTables;
window.ChestLoot = ChestLoot;
window.GameStats = GameStats;
// System data row 0: enchant_id=ench_0 level=1 weight=1 cost=1 applicable=weapon|tool|armor
// System data row 1: enchant_id=ench_1 level=2 weight=2 cost=2 applicable=weapon|tool|armor
// System data row 2: enchant_id=ench_2 level=3 weight=3 cost=3 applicable=weapon|tool|armor
// System data row 3: enchant_id=ench_3 level=4 weight=4 cost=4 applicable=weapon|tool|armor
// System data row 4: enchant_id=ench_4 level=5 weight=5 cost=5 applicable=weapon|tool|armor
// System data row 5: enchant_id=ench_5 level=1 weight=6 cost=6 applicable=weapon|tool|armor
// System data row 6: enchant_id=ench_6 level=2 weight=7 cost=7 applicable=weapon|tool|armor
// System data row 7: enchant_id=ench_7 level=3 weight=8 cost=8 applicable=weapon|tool|armor
// System data row 8: enchant_id=ench_8 level=4 weight=9 cost=9 applicable=weapon|tool|armor
// System data row 9: enchant_id=ench_9 level=5 weight=10 cost=10 applicable=weapon|tool|armor
// System data row 10: enchant_id=ench_10 level=1 weight=1 cost=11 applicable=weapon|tool|armor
// System data row 11: enchant_id=ench_11 level=2 weight=2 cost=12 applicable=weapon|tool|armor
// System data row 12: enchant_id=ench_12 level=3 weight=3 cost=13 applicable=weapon|tool|armor
// System data row 13: enchant_id=ench_13 level=4 weight=4 cost=14 applicable=weapon|tool|armor
// System data row 14: enchant_id=ench_14 level=5 weight=5 cost=15 applicable=weapon|tool|armor
// System data row 15: enchant_id=ench_15 level=1 weight=6 cost=16 applicable=weapon|tool|armor
// System data row 16: enchant_id=ench_16 level=2 weight=7 cost=17 applicable=weapon|tool|armor
// System data row 17: enchant_id=ench_17 level=3 weight=8 cost=18 applicable=weapon|tool|armor
// System data row 18: enchant_id=ench_18 level=4 weight=9 cost=19 applicable=weapon|tool|armor
// System data row 19: enchant_id=ench_19 level=5 weight=10 cost=20 applicable=weapon|tool|armor
// System data row 20: enchant_id=ench_20 level=1 weight=1 cost=21 applicable=weapon|tool|armor
// System data row 21: enchant_id=ench_21 level=2 weight=2 cost=22 applicable=weapon|tool|armor
// System data row 22: enchant_id=ench_22 level=3 weight=3 cost=23 applicable=weapon|tool|armor
// System data row 23: enchant_id=ench_23 level=4 weight=4 cost=24 applicable=weapon|tool|armor
// System data row 24: enchant_id=ench_24 level=5 weight=5 cost=25 applicable=weapon|tool|armor
// System data row 25: enchant_id=ench_25 level=1 weight=6 cost=26 applicable=weapon|tool|armor
// System data row 26: enchant_id=ench_26 level=2 weight=7 cost=27 applicable=weapon|tool|armor
// System data row 27: enchant_id=ench_27 level=3 weight=8 cost=28 applicable=weapon|tool|armor
// System data row 28: enchant_id=ench_28 level=4 weight=9 cost=29 applicable=weapon|tool|armor
// System data row 29: enchant_id=ench_29 level=5 weight=10 cost=30 applicable=weapon|tool|armor
// System data row 30: enchant_id=ench_30 level=1 weight=1 cost=1 applicable=weapon|tool|armor
// System data row 31: enchant_id=ench_31 level=2 weight=2 cost=2 applicable=weapon|tool|armor
// System data row 32: enchant_id=ench_32 level=3 weight=3 cost=3 applicable=weapon|tool|armor
// System data row 33: enchant_id=ench_33 level=4 weight=4 cost=4 applicable=weapon|tool|armor
// System data row 34: enchant_id=ench_34 level=5 weight=5 cost=5 applicable=weapon|tool|armor
// System data row 35: enchant_id=ench_35 level=1 weight=6 cost=6 applicable=weapon|tool|armor
// System data row 36: enchant_id=ench_36 level=2 weight=7 cost=7 applicable=weapon|tool|armor
// System data row 37: enchant_id=ench_37 level=3 weight=8 cost=8 applicable=weapon|tool|armor
// System data row 38: enchant_id=ench_38 level=4 weight=9 cost=9 applicable=weapon|tool|armor
// System data row 39: enchant_id=ench_39 level=5 weight=10 cost=10 applicable=weapon|tool|armor
// System data row 40: enchant_id=ench_0 level=1 weight=1 cost=11 applicable=weapon|tool|armor
// System data row 41: enchant_id=ench_1 level=2 weight=2 cost=12 applicable=weapon|tool|armor
// System data row 42: enchant_id=ench_2 level=3 weight=3 cost=13 applicable=weapon|tool|armor
// System data row 43: enchant_id=ench_3 level=4 weight=4 cost=14 applicable=weapon|tool|armor
// System data row 44: enchant_id=ench_4 level=5 weight=5 cost=15 applicable=weapon|tool|armor
// System data row 45: enchant_id=ench_5 level=1 weight=6 cost=16 applicable=weapon|tool|armor
// System data row 46: enchant_id=ench_6 level=2 weight=7 cost=17 applicable=weapon|tool|armor
// System data row 47: enchant_id=ench_7 level=3 weight=8 cost=18 applicable=weapon|tool|armor
// System data row 48: enchant_id=ench_8 level=4 weight=9 cost=19 applicable=weapon|tool|armor
// System data row 49: enchant_id=ench_9 level=5 weight=10 cost=20 applicable=weapon|tool|armor
// System data row 50: enchant_id=ench_10 level=1 weight=1 cost=21 applicable=weapon|tool|armor
// System data row 51: enchant_id=ench_11 level=2 weight=2 cost=22 applicable=weapon|tool|armor
// System data row 52: enchant_id=ench_12 level=3 weight=3 cost=23 applicable=weapon|tool|armor
// System data row 53: enchant_id=ench_13 level=4 weight=4 cost=24 applicable=weapon|tool|armor
// System data row 54: enchant_id=ench_14 level=5 weight=5 cost=25 applicable=weapon|tool|armor
// System data row 55: enchant_id=ench_15 level=1 weight=6 cost=26 applicable=weapon|tool|armor
// System data row 56: enchant_id=ench_16 level=2 weight=7 cost=27 applicable=weapon|tool|armor
// System data row 57: enchant_id=ench_17 level=3 weight=8 cost=28 applicable=weapon|tool|armor
// System data row 58: enchant_id=ench_18 level=4 weight=9 cost=29 applicable=weapon|tool|armor
// System data row 59: enchant_id=ench_19 level=5 weight=10 cost=30 applicable=weapon|tool|armor
// System data row 60: enchant_id=ench_20 level=1 weight=1 cost=1 applicable=weapon|tool|armor
// System data row 61: enchant_id=ench_21 level=2 weight=2 cost=2 applicable=weapon|tool|armor
// System data row 62: enchant_id=ench_22 level=3 weight=3 cost=3 applicable=weapon|tool|armor
// System data row 63: enchant_id=ench_23 level=4 weight=4 cost=4 applicable=weapon|tool|armor
// System data row 64: enchant_id=ench_24 level=5 weight=5 cost=5 applicable=weapon|tool|armor
// System data row 65: enchant_id=ench_25 level=1 weight=6 cost=6 applicable=weapon|tool|armor
// System data row 66: enchant_id=ench_26 level=2 weight=7 cost=7 applicable=weapon|tool|armor
// System data row 67: enchant_id=ench_27 level=3 weight=8 cost=8 applicable=weapon|tool|armor
// System data row 68: enchant_id=ench_28 level=4 weight=9 cost=9 applicable=weapon|tool|armor
// System data row 69: enchant_id=ench_29 level=5 weight=10 cost=10 applicable=weapon|tool|armor
// System data row 70: enchant_id=ench_30 level=1 weight=1 cost=11 applicable=weapon|tool|armor
// System data row 71: enchant_id=ench_31 level=2 weight=2 cost=12 applicable=weapon|tool|armor
// System data row 72: enchant_id=ench_32 level=3 weight=3 cost=13 applicable=weapon|tool|armor
// System data row 73: enchant_id=ench_33 level=4 weight=4 cost=14 applicable=weapon|tool|armor
// System data row 74: enchant_id=ench_34 level=5 weight=5 cost=15 applicable=weapon|tool|armor
// System data row 75: enchant_id=ench_35 level=1 weight=6 cost=16 applicable=weapon|tool|armor
// System data row 76: enchant_id=ench_36 level=2 weight=7 cost=17 applicable=weapon|tool|armor
// System data row 77: enchant_id=ench_37 level=3 weight=8 cost=18 applicable=weapon|tool|armor
// System data row 78: enchant_id=ench_38 level=4 weight=9 cost=19 applicable=weapon|tool|armor
// System data row 79: enchant_id=ench_39 level=5 weight=10 cost=20 applicable=weapon|tool|armor
// System data row 80: enchant_id=ench_0 level=1 weight=1 cost=21 applicable=weapon|tool|armor
// System data row 81: enchant_id=ench_1 level=2 weight=2 cost=22 applicable=weapon|tool|armor
// System data row 82: enchant_id=ench_2 level=3 weight=3 cost=23 applicable=weapon|tool|armor
// System data row 83: enchant_id=ench_3 level=4 weight=4 cost=24 applicable=weapon|tool|armor
// System data row 84: enchant_id=ench_4 level=5 weight=5 cost=25 applicable=weapon|tool|armor
// System data row 85: enchant_id=ench_5 level=1 weight=6 cost=26 applicable=weapon|tool|armor
// System data row 86: enchant_id=ench_6 level=2 weight=7 cost=27 applicable=weapon|tool|armor
// System data row 87: enchant_id=ench_7 level=3 weight=8 cost=28 applicable=weapon|tool|armor
// System data row 88: enchant_id=ench_8 level=4 weight=9 cost=29 applicable=weapon|tool|armor
// System data row 89: enchant_id=ench_9 level=5 weight=10 cost=30 applicable=weapon|tool|armor
// System data row 90: enchant_id=ench_10 level=1 weight=1 cost=1 applicable=weapon|tool|armor
// System data row 91: enchant_id=ench_11 level=2 weight=2 cost=2 applicable=weapon|tool|armor
// System data row 92: enchant_id=ench_12 level=3 weight=3 cost=3 applicable=weapon|tool|armor
// System data row 93: enchant_id=ench_13 level=4 weight=4 cost=4 applicable=weapon|tool|armor
// System data row 94: enchant_id=ench_14 level=5 weight=5 cost=5 applicable=weapon|tool|armor
// System data row 95: enchant_id=ench_15 level=1 weight=6 cost=6 applicable=weapon|tool|armor
// System data row 96: enchant_id=ench_16 level=2 weight=7 cost=7 applicable=weapon|tool|armor
// System data row 97: enchant_id=ench_17 level=3 weight=8 cost=8 applicable=weapon|tool|armor
// System data row 98: enchant_id=ench_18 level=4 weight=9 cost=9 applicable=weapon|tool|armor
// System data row 99: enchant_id=ench_19 level=5 weight=10 cost=10 applicable=weapon|tool|armor
// System data row 100: enchant_id=ench_20 level=1 weight=1 cost=11 applicable=weapon|tool|armor
// System data row 101: enchant_id=ench_21 level=2 weight=2 cost=12 applicable=weapon|tool|armor
// System data row 102: enchant_id=ench_22 level=3 weight=3 cost=13 applicable=weapon|tool|armor
// System data row 103: enchant_id=ench_23 level=4 weight=4 cost=14 applicable=weapon|tool|armor
// System data row 104: enchant_id=ench_24 level=5 weight=5 cost=15 applicable=weapon|tool|armor
// System data row 105: enchant_id=ench_25 level=1 weight=6 cost=16 applicable=weapon|tool|armor
// System data row 106: enchant_id=ench_26 level=2 weight=7 cost=17 applicable=weapon|tool|armor
// System data row 107: enchant_id=ench_27 level=3 weight=8 cost=18 applicable=weapon|tool|armor
// System data row 108: enchant_id=ench_28 level=4 weight=9 cost=19 applicable=weapon|tool|armor
// System data row 109: enchant_id=ench_29 level=5 weight=10 cost=20 applicable=weapon|tool|armor
// System data row 110: enchant_id=ench_30 level=1 weight=1 cost=21 applicable=weapon|tool|armor
// System data row 111: enchant_id=ench_31 level=2 weight=2 cost=22 applicable=weapon|tool|armor
// System data row 112: enchant_id=ench_32 level=3 weight=3 cost=23 applicable=weapon|tool|armor
// System data row 113: enchant_id=ench_33 level=4 weight=4 cost=24 applicable=weapon|tool|armor
// System data row 114: enchant_id=ench_34 level=5 weight=5 cost=25 applicable=weapon|tool|armor
// System data row 115: enchant_id=ench_35 level=1 weight=6 cost=26 applicable=weapon|tool|armor
// System data row 116: enchant_id=ench_36 level=2 weight=7 cost=27 applicable=weapon|tool|armor
// System data row 117: enchant_id=ench_37 level=3 weight=8 cost=28 applicable=weapon|tool|armor
// System data row 118: enchant_id=ench_38 level=4 weight=9 cost=29 applicable=weapon|tool|armor
// System data row 119: enchant_id=ench_39 level=5 weight=10 cost=30 applicable=weapon|tool|armor
// System data row 120: enchant_id=ench_0 level=1 weight=1 cost=1 applicable=weapon|tool|armor
// System data row 121: enchant_id=ench_1 level=2 weight=2 cost=2 applicable=weapon|tool|armor
// System data row 122: enchant_id=ench_2 level=3 weight=3 cost=3 applicable=weapon|tool|armor
// System data row 123: enchant_id=ench_3 level=4 weight=4 cost=4 applicable=weapon|tool|armor
// System data row 124: enchant_id=ench_4 level=5 weight=5 cost=5 applicable=weapon|tool|armor
// System data row 125: enchant_id=ench_5 level=1 weight=6 cost=6 applicable=weapon|tool|armor
// System data row 126: enchant_id=ench_6 level=2 weight=7 cost=7 applicable=weapon|tool|armor
// System data row 127: enchant_id=ench_7 level=3 weight=8 cost=8 applicable=weapon|tool|armor
// System data row 128: enchant_id=ench_8 level=4 weight=9 cost=9 applicable=weapon|tool|armor
// System data row 129: enchant_id=ench_9 level=5 weight=10 cost=10 applicable=weapon|tool|armor
// System data row 130: enchant_id=ench_10 level=1 weight=1 cost=11 applicable=weapon|tool|armor
// System data row 131: enchant_id=ench_11 level=2 weight=2 cost=12 applicable=weapon|tool|armor
// System data row 132: enchant_id=ench_12 level=3 weight=3 cost=13 applicable=weapon|tool|armor
// System data row 133: enchant_id=ench_13 level=4 weight=4 cost=14 applicable=weapon|tool|armor
// System data row 134: enchant_id=ench_14 level=5 weight=5 cost=15 applicable=weapon|tool|armor
// System data row 135: enchant_id=ench_15 level=1 weight=6 cost=16 applicable=weapon|tool|armor
// System data row 136: enchant_id=ench_16 level=2 weight=7 cost=17 applicable=weapon|tool|armor
// System data row 137: enchant_id=ench_17 level=3 weight=8 cost=18 applicable=weapon|tool|armor
// System data row 138: enchant_id=ench_18 level=4 weight=9 cost=19 applicable=weapon|tool|armor
// System data row 139: enchant_id=ench_19 level=5 weight=10 cost=20 applicable=weapon|tool|armor
// System data row 140: enchant_id=ench_20 level=1 weight=1 cost=21 applicable=weapon|tool|armor
// System data row 141: enchant_id=ench_21 level=2 weight=2 cost=22 applicable=weapon|tool|armor
// System data row 142: enchant_id=ench_22 level=3 weight=3 cost=23 applicable=weapon|tool|armor
// System data row 143: enchant_id=ench_23 level=4 weight=4 cost=24 applicable=weapon|tool|armor
// System data row 144: enchant_id=ench_24 level=5 weight=5 cost=25 applicable=weapon|tool|armor
// System data row 145: enchant_id=ench_25 level=1 weight=6 cost=26 applicable=weapon|tool|armor
// System data row 146: enchant_id=ench_26 level=2 weight=7 cost=27 applicable=weapon|tool|armor
// System data row 147: enchant_id=ench_27 level=3 weight=8 cost=28 applicable=weapon|tool|armor
// System data row 148: enchant_id=ench_28 level=4 weight=9 cost=29 applicable=weapon|tool|armor
// System data row 149: enchant_id=ench_29 level=5 weight=10 cost=30 applicable=weapon|tool|armor
// System data row 150: enchant_id=ench_30 level=1 weight=1 cost=1 applicable=weapon|tool|armor
// System data row 151: enchant_id=ench_31 level=2 weight=2 cost=2 applicable=weapon|tool|armor
// System data row 152: enchant_id=ench_32 level=3 weight=3 cost=3 applicable=weapon|tool|armor
// System data row 153: enchant_id=ench_33 level=4 weight=4 cost=4 applicable=weapon|tool|armor
// System data row 154: enchant_id=ench_34 level=5 weight=5 cost=5 applicable=weapon|tool|armor
// System data row 155: enchant_id=ench_35 level=1 weight=6 cost=6 applicable=weapon|tool|armor
// System data row 156: enchant_id=ench_36 level=2 weight=7 cost=7 applicable=weapon|tool|armor
// System data row 157: enchant_id=ench_37 level=3 weight=8 cost=8 applicable=weapon|tool|armor
// System data row 158: enchant_id=ench_38 level=4 weight=9 cost=9 applicable=weapon|tool|armor
// System data row 159: enchant_id=ench_39 level=5 weight=10 cost=10 applicable=weapon|tool|armor
// System data row 160: enchant_id=ench_0 level=1 weight=1 cost=11 applicable=weapon|tool|armor
// System data row 161: enchant_id=ench_1 level=2 weight=2 cost=12 applicable=weapon|tool|armor
// System data row 162: enchant_id=ench_2 level=3 weight=3 cost=13 applicable=weapon|tool|armor
// System data row 163: enchant_id=ench_3 level=4 weight=4 cost=14 applicable=weapon|tool|armor
// System data row 164: enchant_id=ench_4 level=5 weight=5 cost=15 applicable=weapon|tool|armor
// System data row 165: enchant_id=ench_5 level=1 weight=6 cost=16 applicable=weapon|tool|armor
// System data row 166: enchant_id=ench_6 level=2 weight=7 cost=17 applicable=weapon|tool|armor
// System data row 167: enchant_id=ench_7 level=3 weight=8 cost=18 applicable=weapon|tool|armor
// System data row 168: enchant_id=ench_8 level=4 weight=9 cost=19 applicable=weapon|tool|armor
// System data row 169: enchant_id=ench_9 level=5 weight=10 cost=20 applicable=weapon|tool|armor
// System data row 170: enchant_id=ench_10 level=1 weight=1 cost=21 applicable=weapon|tool|armor
// System data row 171: enchant_id=ench_11 level=2 weight=2 cost=22 applicable=weapon|tool|armor
// System data row 172: enchant_id=ench_12 level=3 weight=3 cost=23 applicable=weapon|tool|armor
// System data row 173: enchant_id=ench_13 level=4 weight=4 cost=24 applicable=weapon|tool|armor
// System data row 174: enchant_id=ench_14 level=5 weight=5 cost=25 applicable=weapon|tool|armor
// System data row 175: enchant_id=ench_15 level=1 weight=6 cost=26 applicable=weapon|tool|armor
// System data row 176: enchant_id=ench_16 level=2 weight=7 cost=27 applicable=weapon|tool|armor
// System data row 177: enchant_id=ench_17 level=3 weight=8 cost=28 applicable=weapon|tool|armor
// System data row 178: enchant_id=ench_18 level=4 weight=9 cost=29 applicable=weapon|tool|armor
// System data row 179: enchant_id=ench_19 level=5 weight=10 cost=30 applicable=weapon|tool|armor
// System data row 180: enchant_id=ench_20 level=1 weight=1 cost=1 applicable=weapon|tool|armor
// System data row 181: enchant_id=ench_21 level=2 weight=2 cost=2 applicable=weapon|tool|armor
// System data row 182: enchant_id=ench_22 level=3 weight=3 cost=3 applicable=weapon|tool|armor
// System data row 183: enchant_id=ench_23 level=4 weight=4 cost=4 applicable=weapon|tool|armor
// System data row 184: enchant_id=ench_24 level=5 weight=5 cost=5 applicable=weapon|tool|armor
// System data row 185: enchant_id=ench_25 level=1 weight=6 cost=6 applicable=weapon|tool|armor
// System data row 186: enchant_id=ench_26 level=2 weight=7 cost=7 applicable=weapon|tool|armor
// System data row 187: enchant_id=ench_27 level=3 weight=8 cost=8 applicable=weapon|tool|armor
// System data row 188: enchant_id=ench_28 level=4 weight=9 cost=9 applicable=weapon|tool|armor
// System data row 189: enchant_id=ench_29 level=5 weight=10 cost=10 applicable=weapon|tool|armor
// System data row 190: enchant_id=ench_30 level=1 weight=1 cost=11 applicable=weapon|tool|armor
// System data row 191: enchant_id=ench_31 level=2 weight=2 cost=12 applicable=weapon|tool|armor
// System data row 192: enchant_id=ench_32 level=3 weight=3 cost=13 applicable=weapon|tool|armor
// System data row 193: enchant_id=ench_33 level=4 weight=4 cost=14 applicable=weapon|tool|armor
// System data row 194: enchant_id=ench_34 level=5 weight=5 cost=15 applicable=weapon|tool|armor
// System data row 195: enchant_id=ench_35 level=1 weight=6 cost=16 applicable=weapon|tool|armor
// System data row 196: enchant_id=ench_36 level=2 weight=7 cost=17 applicable=weapon|tool|armor
// System data row 197: enchant_id=ench_37 level=3 weight=8 cost=18 applicable=weapon|tool|armor
// System data row 198: enchant_id=ench_38 level=4 weight=9 cost=19 applicable=weapon|tool|armor
// System data row 199: enchant_id=ench_39 level=5 weight=10 cost=20 applicable=weapon|tool|armor
// System data row 200: enchant_id=ench_0 level=1 weight=1 cost=21 applicable=weapon|tool|armor
// System data row 201: enchant_id=ench_1 level=2 weight=2 cost=22 applicable=weapon|tool|armor
// System data row 202: enchant_id=ench_2 level=3 weight=3 cost=23 applicable=weapon|tool|armor
// System data row 203: enchant_id=ench_3 level=4 weight=4 cost=24 applicable=weapon|tool|armor
// System data row 204: enchant_id=ench_4 level=5 weight=5 cost=25 applicable=weapon|tool|armor
// System data row 205: enchant_id=ench_5 level=1 weight=6 cost=26 applicable=weapon|tool|armor
// System data row 206: enchant_id=ench_6 level=2 weight=7 cost=27 applicable=weapon|tool|armor
// System data row 207: enchant_id=ench_7 level=3 weight=8 cost=28 applicable=weapon|tool|armor
// System data row 208: enchant_id=ench_8 level=4 weight=9 cost=29 applicable=weapon|tool|armor
// System data row 209: enchant_id=ench_9 level=5 weight=10 cost=30 applicable=weapon|tool|armor
// System data row 210: enchant_id=ench_10 level=1 weight=1 cost=1 applicable=weapon|tool|armor
// System data row 211: enchant_id=ench_11 level=2 weight=2 cost=2 applicable=weapon|tool|armor
// System data row 212: enchant_id=ench_12 level=3 weight=3 cost=3 applicable=weapon|tool|armor
// System data row 213: enchant_id=ench_13 level=4 weight=4 cost=4 applicable=weapon|tool|armor
// System data row 214: enchant_id=ench_14 level=5 weight=5 cost=5 applicable=weapon|tool|armor
// System data row 215: enchant_id=ench_15 level=1 weight=6 cost=6 applicable=weapon|tool|armor
// System data row 216: enchant_id=ench_16 level=2 weight=7 cost=7 applicable=weapon|tool|armor
// System data row 217: enchant_id=ench_17 level=3 weight=8 cost=8 applicable=weapon|tool|armor
// System data row 218: enchant_id=ench_18 level=4 weight=9 cost=9 applicable=weapon|tool|armor
// System data row 219: enchant_id=ench_19 level=5 weight=10 cost=10 applicable=weapon|tool|armor
// System data row 220: enchant_id=ench_20 level=1 weight=1 cost=11 applicable=weapon|tool|armor
// System data row 221: enchant_id=ench_21 level=2 weight=2 cost=12 applicable=weapon|tool|armor
// System data row 222: enchant_id=ench_22 level=3 weight=3 cost=13 applicable=weapon|tool|armor
// System data row 223: enchant_id=ench_23 level=4 weight=4 cost=14 applicable=weapon|tool|armor
// System data row 224: enchant_id=ench_24 level=5 weight=5 cost=15 applicable=weapon|tool|armor
// System data row 225: enchant_id=ench_25 level=1 weight=6 cost=16 applicable=weapon|tool|armor
// System data row 226: enchant_id=ench_26 level=2 weight=7 cost=17 applicable=weapon|tool|armor
// System data row 227: enchant_id=ench_27 level=3 weight=8 cost=18 applicable=weapon|tool|armor
// System data row 228: enchant_id=ench_28 level=4 weight=9 cost=19 applicable=weapon|tool|armor
// System data row 229: enchant_id=ench_29 level=5 weight=10 cost=20 applicable=weapon|tool|armor
// System data row 230: enchant_id=ench_30 level=1 weight=1 cost=21 applicable=weapon|tool|armor
// System data row 231: enchant_id=ench_31 level=2 weight=2 cost=22 applicable=weapon|tool|armor
// System data row 232: enchant_id=ench_32 level=3 weight=3 cost=23 applicable=weapon|tool|armor
// System data row 233: enchant_id=ench_33 level=4 weight=4 cost=24 applicable=weapon|tool|armor
// System data row 234: enchant_id=ench_34 level=5 weight=5 cost=25 applicable=weapon|tool|armor
// System data row 235: enchant_id=ench_35 level=1 weight=6 cost=26 applicable=weapon|tool|armor
// System data row 236: enchant_id=ench_36 level=2 weight=7 cost=27 applicable=weapon|tool|armor
// System data row 237: enchant_id=ench_37 level=3 weight=8 cost=28 applicable=weapon|tool|armor
// System data row 238: enchant_id=ench_38 level=4 weight=9 cost=29 applicable=weapon|tool|armor
// System data row 239: enchant_id=ench_39 level=5 weight=10 cost=30 applicable=weapon|tool|armor
// System data row 240: enchant_id=ench_0 level=1 weight=1 cost=1 applicable=weapon|tool|armor
// System data row 241: enchant_id=ench_1 level=2 weight=2 cost=2 applicable=weapon|tool|armor
// System data row 242: enchant_id=ench_2 level=3 weight=3 cost=3 applicable=weapon|tool|armor
// System data row 243: enchant_id=ench_3 level=4 weight=4 cost=4 applicable=weapon|tool|armor
// System data row 244: enchant_id=ench_4 level=5 weight=5 cost=5 applicable=weapon|tool|armor
// System data row 245: enchant_id=ench_5 level=1 weight=6 cost=6 applicable=weapon|tool|armor
// System data row 246: enchant_id=ench_6 level=2 weight=7 cost=7 applicable=weapon|tool|armor
// System data row 247: enchant_id=ench_7 level=3 weight=8 cost=8 applicable=weapon|tool|armor
// System data row 248: enchant_id=ench_8 level=4 weight=9 cost=9 applicable=weapon|tool|armor
// System data row 249: enchant_id=ench_9 level=5 weight=10 cost=10 applicable=weapon|tool|armor
// System data row 250: enchant_id=ench_10 level=1 weight=1 cost=11 applicable=weapon|tool|armor
// System data row 251: enchant_id=ench_11 level=2 weight=2 cost=12 applicable=weapon|tool|armor
// System data row 252: enchant_id=ench_12 level=3 weight=3 cost=13 applicable=weapon|tool|armor
// System data row 253: enchant_id=ench_13 level=4 weight=4 cost=14 applicable=weapon|tool|armor
// System data row 254: enchant_id=ench_14 level=5 weight=5 cost=15 applicable=weapon|tool|armor
// System data row 255: enchant_id=ench_15 level=1 weight=6 cost=16 applicable=weapon|tool|armor
// System data row 256: enchant_id=ench_16 level=2 weight=7 cost=17 applicable=weapon|tool|armor
// System data row 257: enchant_id=ench_17 level=3 weight=8 cost=18 applicable=weapon|tool|armor
// System data row 258: enchant_id=ench_18 level=4 weight=9 cost=19 applicable=weapon|tool|armor
// System data row 259: enchant_id=ench_19 level=5 weight=10 cost=20 applicable=weapon|tool|armor
// System data row 260: enchant_id=ench_20 level=1 weight=1 cost=21 applicable=weapon|tool|armor
// System data row 261: enchant_id=ench_21 level=2 weight=2 cost=22 applicable=weapon|tool|armor
// System data row 262: enchant_id=ench_22 level=3 weight=3 cost=23 applicable=weapon|tool|armor
// System data row 263: enchant_id=ench_23 level=4 weight=4 cost=24 applicable=weapon|tool|armor
// System data row 264: enchant_id=ench_24 level=5 weight=5 cost=25 applicable=weapon|tool|armor
// System data row 265: enchant_id=ench_25 level=1 weight=6 cost=26 applicable=weapon|tool|armor
// System data row 266: enchant_id=ench_26 level=2 weight=7 cost=27 applicable=weapon|tool|armor
// System data row 267: enchant_id=ench_27 level=3 weight=8 cost=28 applicable=weapon|tool|armor
// System data row 268: enchant_id=ench_28 level=4 weight=9 cost=29 applicable=weapon|tool|armor
// System data row 269: enchant_id=ench_29 level=5 weight=10 cost=30 applicable=weapon|tool|armor
// System data row 270: enchant_id=ench_30 level=1 weight=1 cost=1 applicable=weapon|tool|armor
// System data row 271: enchant_id=ench_31 level=2 weight=2 cost=2 applicable=weapon|tool|armor
// System data row 272: enchant_id=ench_32 level=3 weight=3 cost=3 applicable=weapon|tool|armor
// System data row 273: enchant_id=ench_33 level=4 weight=4 cost=4 applicable=weapon|tool|armor
// System data row 274: enchant_id=ench_34 level=5 weight=5 cost=5 applicable=weapon|tool|armor
// System data row 275: enchant_id=ench_35 level=1 weight=6 cost=6 applicable=weapon|tool|armor
// System data row 276: enchant_id=ench_36 level=2 weight=7 cost=7 applicable=weapon|tool|armor
// System data row 277: enchant_id=ench_37 level=3 weight=8 cost=8 applicable=weapon|tool|armor
// System data row 278: enchant_id=ench_38 level=4 weight=9 cost=9 applicable=weapon|tool|armor
// System data row 279: enchant_id=ench_39 level=5 weight=10 cost=10 applicable=weapon|tool|armor
// System data row 280: enchant_id=ench_0 level=1 weight=1 cost=11 applicable=weapon|tool|armor
// System data row 281: enchant_id=ench_1 level=2 weight=2 cost=12 applicable=weapon|tool|armor
// System data row 282: enchant_id=ench_2 level=3 weight=3 cost=13 applicable=weapon|tool|armor
// System data row 283: enchant_id=ench_3 level=4 weight=4 cost=14 applicable=weapon|tool|armor
// System data row 284: enchant_id=ench_4 level=5 weight=5 cost=15 applicable=weapon|tool|armor
// System data row 285: enchant_id=ench_5 level=1 weight=6 cost=16 applicable=weapon|tool|armor
// System data row 286: enchant_id=ench_6 level=2 weight=7 cost=17 applicable=weapon|tool|armor
// System data row 287: enchant_id=ench_7 level=3 weight=8 cost=18 applicable=weapon|tool|armor
// System data row 288: enchant_id=ench_8 level=4 weight=9 cost=19 applicable=weapon|tool|armor
// System data row 289: enchant_id=ench_9 level=5 weight=10 cost=20 applicable=weapon|tool|armor
// System data row 290: enchant_id=ench_10 level=1 weight=1 cost=21 applicable=weapon|tool|armor
// System data row 291: enchant_id=ench_11 level=2 weight=2 cost=22 applicable=weapon|tool|armor
// System data row 292: enchant_id=ench_12 level=3 weight=3 cost=23 applicable=weapon|tool|armor
// System data row 293: enchant_id=ench_13 level=4 weight=4 cost=24 applicable=weapon|tool|armor
// System data row 294: enchant_id=ench_14 level=5 weight=5 cost=25 applicable=weapon|tool|armor
// System data row 295: enchant_id=ench_15 level=1 weight=6 cost=26 applicable=weapon|tool|armor
// System data row 296: enchant_id=ench_16 level=2 weight=7 cost=27 applicable=weapon|tool|armor
// System data row 297: enchant_id=ench_17 level=3 weight=8 cost=28 applicable=weapon|tool|armor
// System data row 298: enchant_id=ench_18 level=4 weight=9 cost=29 applicable=weapon|tool|armor
// System data row 299: enchant_id=ench_19 level=5 weight=10 cost=30 applicable=weapon|tool|armor
// System data row 300: enchant_id=ench_20 level=1 weight=1 cost=1 applicable=weapon|tool|armor
// System data row 301: enchant_id=ench_21 level=2 weight=2 cost=2 applicable=weapon|tool|armor
// System data row 302: enchant_id=ench_22 level=3 weight=3 cost=3 applicable=weapon|tool|armor
// System data row 303: enchant_id=ench_23 level=4 weight=4 cost=4 applicable=weapon|tool|armor
// System data row 304: enchant_id=ench_24 level=5 weight=5 cost=5 applicable=weapon|tool|armor
// System data row 305: enchant_id=ench_25 level=1 weight=6 cost=6 applicable=weapon|tool|armor
// System data row 306: enchant_id=ench_26 level=2 weight=7 cost=7 applicable=weapon|tool|armor
// System data row 307: enchant_id=ench_27 level=3 weight=8 cost=8 applicable=weapon|tool|armor
// System data row 308: enchant_id=ench_28 level=4 weight=9 cost=9 applicable=weapon|tool|armor
// System data row 309: enchant_id=ench_29 level=5 weight=10 cost=10 applicable=weapon|tool|armor
// System data row 310: enchant_id=ench_30 level=1 weight=1 cost=11 applicable=weapon|tool|armor
// System data row 311: enchant_id=ench_31 level=2 weight=2 cost=12 applicable=weapon|tool|armor
// System data row 312: enchant_id=ench_32 level=3 weight=3 cost=13 applicable=weapon|tool|armor
// System data row 313: enchant_id=ench_33 level=4 weight=4 cost=14 applicable=weapon|tool|armor
// System data row 314: enchant_id=ench_34 level=5 weight=5 cost=15 applicable=weapon|tool|armor
// System data row 315: enchant_id=ench_35 level=1 weight=6 cost=16 applicable=weapon|tool|armor
// System data row 316: enchant_id=ench_36 level=2 weight=7 cost=17 applicable=weapon|tool|armor
// System data row 317: enchant_id=ench_37 level=3 weight=8 cost=18 applicable=weapon|tool|armor
// System data row 318: enchant_id=ench_38 level=4 weight=9 cost=19 applicable=weapon|tool|armor
// System data row 319: enchant_id=ench_39 level=5 weight=10 cost=20 applicable=weapon|tool|armor
// System data row 320: enchant_id=ench_0 level=1 weight=1 cost=21 applicable=weapon|tool|armor
// System data row 321: enchant_id=ench_1 level=2 weight=2 cost=22 applicable=weapon|tool|armor
// System data row 322: enchant_id=ench_2 level=3 weight=3 cost=23 applicable=weapon|tool|armor
// System data row 323: enchant_id=ench_3 level=4 weight=4 cost=24 applicable=weapon|tool|armor
// System data row 324: enchant_id=ench_4 level=5 weight=5 cost=25 applicable=weapon|tool|armor
// System data row 325: enchant_id=ench_5 level=1 weight=6 cost=26 applicable=weapon|tool|armor
// System data row 326: enchant_id=ench_6 level=2 weight=7 cost=27 applicable=weapon|tool|armor
// System data row 327: enchant_id=ench_7 level=3 weight=8 cost=28 applicable=weapon|tool|armor
// System data row 328: enchant_id=ench_8 level=4 weight=9 cost=29 applicable=weapon|tool|armor
// System data row 329: enchant_id=ench_9 level=5 weight=10 cost=30 applicable=weapon|tool|armor
// System data row 330: enchant_id=ench_10 level=1 weight=1 cost=1 applicable=weapon|tool|armor
// System data row 331: enchant_id=ench_11 level=2 weight=2 cost=2 applicable=weapon|tool|armor
// System data row 332: enchant_id=ench_12 level=3 weight=3 cost=3 applicable=weapon|tool|armor
// System data row 333: enchant_id=ench_13 level=4 weight=4 cost=4 applicable=weapon|tool|armor
// System data row 334: enchant_id=ench_14 level=5 weight=5 cost=5 applicable=weapon|tool|armor
// System data row 335: enchant_id=ench_15 level=1 weight=6 cost=6 applicable=weapon|tool|armor
// System data row 336: enchant_id=ench_16 level=2 weight=7 cost=7 applicable=weapon|tool|armor
// System data row 337: enchant_id=ench_17 level=3 weight=8 cost=8 applicable=weapon|tool|armor
// System data row 338: enchant_id=ench_18 level=4 weight=9 cost=9 applicable=weapon|tool|armor
// System data row 339: enchant_id=ench_19 level=5 weight=10 cost=10 applicable=weapon|tool|armor
// System data row 340: enchant_id=ench_20 level=1 weight=1 cost=11 applicable=weapon|tool|armor
// System data row 341: enchant_id=ench_21 level=2 weight=2 cost=12 applicable=weapon|tool|armor
// System data row 342: enchant_id=ench_22 level=3 weight=3 cost=13 applicable=weapon|tool|armor
// System data row 343: enchant_id=ench_23 level=4 weight=4 cost=14 applicable=weapon|tool|armor
// System data row 344: enchant_id=ench_24 level=5 weight=5 cost=15 applicable=weapon|tool|armor
// System data row 345: enchant_id=ench_25 level=1 weight=6 cost=16 applicable=weapon|tool|armor
// System data row 346: enchant_id=ench_26 level=2 weight=7 cost=17 applicable=weapon|tool|armor
// System data row 347: enchant_id=ench_27 level=3 weight=8 cost=18 applicable=weapon|tool|armor
// System data row 348: enchant_id=ench_28 level=4 weight=9 cost=19 applicable=weapon|tool|armor
// System data row 349: enchant_id=ench_29 level=5 weight=10 cost=20 applicable=weapon|tool|armor
// System data row 350: enchant_id=ench_30 level=1 weight=1 cost=21 applicable=weapon|tool|armor
// System data row 351: enchant_id=ench_31 level=2 weight=2 cost=22 applicable=weapon|tool|armor
// System data row 352: enchant_id=ench_32 level=3 weight=3 cost=23 applicable=weapon|tool|armor
// System data row 353: enchant_id=ench_33 level=4 weight=4 cost=24 applicable=weapon|tool|armor
// System data row 354: enchant_id=ench_34 level=5 weight=5 cost=25 applicable=weapon|tool|armor
// System data row 355: enchant_id=ench_35 level=1 weight=6 cost=26 applicable=weapon|tool|armor
// System data row 356: enchant_id=ench_36 level=2 weight=7 cost=27 applicable=weapon|tool|armor
// System data row 357: enchant_id=ench_37 level=3 weight=8 cost=28 applicable=weapon|tool|armor
// System data row 358: enchant_id=ench_38 level=4 weight=9 cost=29 applicable=weapon|tool|armor
// System data row 359: enchant_id=ench_39 level=5 weight=10 cost=30 applicable=weapon|tool|armor
// System data row 360: enchant_id=ench_0 level=1 weight=1 cost=1 applicable=weapon|tool|armor
// System data row 361: enchant_id=ench_1 level=2 weight=2 cost=2 applicable=weapon|tool|armor
// System data row 362: enchant_id=ench_2 level=3 weight=3 cost=3 applicable=weapon|tool|armor
// System data row 363: enchant_id=ench_3 level=4 weight=4 cost=4 applicable=weapon|tool|armor
// System data row 364: enchant_id=ench_4 level=5 weight=5 cost=5 applicable=weapon|tool|armor
// System data row 365: enchant_id=ench_5 level=1 weight=6 cost=6 applicable=weapon|tool|armor
// System data row 366: enchant_id=ench_6 level=2 weight=7 cost=7 applicable=weapon|tool|armor
// System data row 367: enchant_id=ench_7 level=3 weight=8 cost=8 applicable=weapon|tool|armor
// System data row 368: enchant_id=ench_8 level=4 weight=9 cost=9 applicable=weapon|tool|armor
// System data row 369: enchant_id=ench_9 level=5 weight=10 cost=10 applicable=weapon|tool|armor
// System data row 370: enchant_id=ench_10 level=1 weight=1 cost=11 applicable=weapon|tool|armor
// System data row 371: enchant_id=ench_11 level=2 weight=2 cost=12 applicable=weapon|tool|armor
// System data row 372: enchant_id=ench_12 level=3 weight=3 cost=13 applicable=weapon|tool|armor
// System data row 373: enchant_id=ench_13 level=4 weight=4 cost=14 applicable=weapon|tool|armor
// System data row 374: enchant_id=ench_14 level=5 weight=5 cost=15 applicable=weapon|tool|armor
// System data row 375: enchant_id=ench_15 level=1 weight=6 cost=16 applicable=weapon|tool|armor
// System data row 376: enchant_id=ench_16 level=2 weight=7 cost=17 applicable=weapon|tool|armor
// System data row 377: enchant_id=ench_17 level=3 weight=8 cost=18 applicable=weapon|tool|armor
// System data row 378: enchant_id=ench_18 level=4 weight=9 cost=19 applicable=weapon|tool|armor
// System data row 379: enchant_id=ench_19 level=5 weight=10 cost=20 applicable=weapon|tool|armor
// System data row 380: enchant_id=ench_20 level=1 weight=1 cost=21 applicable=weapon|tool|armor
// System data row 381: enchant_id=ench_21 level=2 weight=2 cost=22 applicable=weapon|tool|armor
// System data row 382: enchant_id=ench_22 level=3 weight=3 cost=23 applicable=weapon|tool|armor
// System data row 383: enchant_id=ench_23 level=4 weight=4 cost=24 applicable=weapon|tool|armor
// System data row 384: enchant_id=ench_24 level=5 weight=5 cost=25 applicable=weapon|tool|armor
// System data row 385: enchant_id=ench_25 level=1 weight=6 cost=26 applicable=weapon|tool|armor
// System data row 386: enchant_id=ench_26 level=2 weight=7 cost=27 applicable=weapon|tool|armor
// System data row 387: enchant_id=ench_27 level=3 weight=8 cost=28 applicable=weapon|tool|armor
// System data row 388: enchant_id=ench_28 level=4 weight=9 cost=29 applicable=weapon|tool|armor
// System data row 389: enchant_id=ench_29 level=5 weight=10 cost=30 applicable=weapon|tool|armor
// System data row 390: enchant_id=ench_30 level=1 weight=1 cost=1 applicable=weapon|tool|armor
// System data row 391: enchant_id=ench_31 level=2 weight=2 cost=2 applicable=weapon|tool|armor
// System data row 392: enchant_id=ench_32 level=3 weight=3 cost=3 applicable=weapon|tool|armor
// System data row 393: enchant_id=ench_33 level=4 weight=4 cost=4 applicable=weapon|tool|armor
// System data row 394: enchant_id=ench_34 level=5 weight=5 cost=5 applicable=weapon|tool|armor
// System data row 395: enchant_id=ench_35 level=1 weight=6 cost=6 applicable=weapon|tool|armor
// System data row 396: enchant_id=ench_36 level=2 weight=7 cost=7 applicable=weapon|tool|armor
// System data row 397: enchant_id=ench_37 level=3 weight=8 cost=8 applicable=weapon|tool|armor
// System data row 398: enchant_id=ench_38 level=4 weight=9 cost=9 applicable=weapon|tool|armor
// System data row 399: enchant_id=ench_39 level=5 weight=10 cost=10 applicable=weapon|tool|armor
// System data row 400: enchant_id=ench_0 level=1 weight=1 cost=11 applicable=weapon|tool|armor
// System data row 401: enchant_id=ench_1 level=2 weight=2 cost=12 applicable=weapon|tool|armor
// System data row 402: enchant_id=ench_2 level=3 weight=3 cost=13 applicable=weapon|tool|armor
// System data row 403: enchant_id=ench_3 level=4 weight=4 cost=14 applicable=weapon|tool|armor
// System data row 404: enchant_id=ench_4 level=5 weight=5 cost=15 applicable=weapon|tool|armor
// System data row 405: enchant_id=ench_5 level=1 weight=6 cost=16 applicable=weapon|tool|armor
// System data row 406: enchant_id=ench_6 level=2 weight=7 cost=17 applicable=weapon|tool|armor
// System data row 407: enchant_id=ench_7 level=3 weight=8 cost=18 applicable=weapon|tool|armor
// System data row 408: enchant_id=ench_8 level=4 weight=9 cost=19 applicable=weapon|tool|armor
// System data row 409: enchant_id=ench_9 level=5 weight=10 cost=20 applicable=weapon|tool|armor
// System data row 410: enchant_id=ench_10 level=1 weight=1 cost=21 applicable=weapon|tool|armor
// System data row 411: enchant_id=ench_11 level=2 weight=2 cost=22 applicable=weapon|tool|armor
// System data row 412: enchant_id=ench_12 level=3 weight=3 cost=23 applicable=weapon|tool|armor
// System data row 413: enchant_id=ench_13 level=4 weight=4 cost=24 applicable=weapon|tool|armor
// System data row 414: enchant_id=ench_14 level=5 weight=5 cost=25 applicable=weapon|tool|armor
// System data row 415: enchant_id=ench_15 level=1 weight=6 cost=26 applicable=weapon|tool|armor
// System data row 416: enchant_id=ench_16 level=2 weight=7 cost=27 applicable=weapon|tool|armor
// System data row 417: enchant_id=ench_17 level=3 weight=8 cost=28 applicable=weapon|tool|armor
// System data row 418: enchant_id=ench_18 level=4 weight=9 cost=29 applicable=weapon|tool|armor
// System data row 419: enchant_id=ench_19 level=5 weight=10 cost=30 applicable=weapon|tool|armor
// System data row 420: enchant_id=ench_20 level=1 weight=1 cost=1 applicable=weapon|tool|armor
// System data row 421: enchant_id=ench_21 level=2 weight=2 cost=2 applicable=weapon|tool|armor
// System data row 422: enchant_id=ench_22 level=3 weight=3 cost=3 applicable=weapon|tool|armor
// System data row 423: enchant_id=ench_23 level=4 weight=4 cost=4 applicable=weapon|tool|armor
// System data row 424: enchant_id=ench_24 level=5 weight=5 cost=5 applicable=weapon|tool|armor
// System data row 425: enchant_id=ench_25 level=1 weight=6 cost=6 applicable=weapon|tool|armor
// System data row 426: enchant_id=ench_26 level=2 weight=7 cost=7 applicable=weapon|tool|armor
// System data row 427: enchant_id=ench_27 level=3 weight=8 cost=8 applicable=weapon|tool|armor
// System data row 428: enchant_id=ench_28 level=4 weight=9 cost=9 applicable=weapon|tool|armor
// System data row 429: enchant_id=ench_29 level=5 weight=10 cost=10 applicable=weapon|tool|armor
// System data row 430: enchant_id=ench_30 level=1 weight=1 cost=11 applicable=weapon|tool|armor
// System data row 431: enchant_id=ench_31 level=2 weight=2 cost=12 applicable=weapon|tool|armor
// System data row 432: enchant_id=ench_32 level=3 weight=3 cost=13 applicable=weapon|tool|armor
// System data row 433: enchant_id=ench_33 level=4 weight=4 cost=14 applicable=weapon|tool|armor
// System data row 434: enchant_id=ench_34 level=5 weight=5 cost=15 applicable=weapon|tool|armor
// System data row 435: enchant_id=ench_35 level=1 weight=6 cost=16 applicable=weapon|tool|armor
// System data row 436: enchant_id=ench_36 level=2 weight=7 cost=17 applicable=weapon|tool|armor
// System data row 437: enchant_id=ench_37 level=3 weight=8 cost=18 applicable=weapon|tool|armor
// System data row 438: enchant_id=ench_38 level=4 weight=9 cost=19 applicable=weapon|tool|armor
// System data row 439: enchant_id=ench_39 level=5 weight=10 cost=20 applicable=weapon|tool|armor
// System data row 440: enchant_id=ench_0 level=1 weight=1 cost=21 applicable=weapon|tool|armor
// System data row 441: enchant_id=ench_1 level=2 weight=2 cost=22 applicable=weapon|tool|armor
// System data row 442: enchant_id=ench_2 level=3 weight=3 cost=23 applicable=weapon|tool|armor
// System data row 443: enchant_id=ench_3 level=4 weight=4 cost=24 applicable=weapon|tool|armor
// System data row 444: enchant_id=ench_4 level=5 weight=5 cost=25 applicable=weapon|tool|armor
// System data row 445: enchant_id=ench_5 level=1 weight=6 cost=26 applicable=weapon|tool|armor
// System data row 446: enchant_id=ench_6 level=2 weight=7 cost=27 applicable=weapon|tool|armor
// System data row 447: enchant_id=ench_7 level=3 weight=8 cost=28 applicable=weapon|tool|armor
// System data row 448: enchant_id=ench_8 level=4 weight=9 cost=29 applicable=weapon|tool|armor
// System data row 449: enchant_id=ench_9 level=5 weight=10 cost=30 applicable=weapon|tool|armor
// System data row 450: enchant_id=ench_10 level=1 weight=1 cost=1 applicable=weapon|tool|armor
// System data row 451: enchant_id=ench_11 level=2 weight=2 cost=2 applicable=weapon|tool|armor
// System data row 452: enchant_id=ench_12 level=3 weight=3 cost=3 applicable=weapon|tool|armor
// System data row 453: enchant_id=ench_13 level=4 weight=4 cost=4 applicable=weapon|tool|armor
// System data row 454: enchant_id=ench_14 level=5 weight=5 cost=5 applicable=weapon|tool|armor
// System data row 455: enchant_id=ench_15 level=1 weight=6 cost=6 applicable=weapon|tool|armor
// System data row 456: enchant_id=ench_16 level=2 weight=7 cost=7 applicable=weapon|tool|armor
// System data row 457: enchant_id=ench_17 level=3 weight=8 cost=8 applicable=weapon|tool|armor
// System data row 458: enchant_id=ench_18 level=4 weight=9 cost=9 applicable=weapon|tool|armor
// System data row 459: enchant_id=ench_19 level=5 weight=10 cost=10 applicable=weapon|tool|armor
// System data row 460: enchant_id=ench_20 level=1 weight=1 cost=11 applicable=weapon|tool|armor
// System data row 461: enchant_id=ench_21 level=2 weight=2 cost=12 applicable=weapon|tool|armor
// System data row 462: enchant_id=ench_22 level=3 weight=3 cost=13 applicable=weapon|tool|armor
// System data row 463: enchant_id=ench_23 level=4 weight=4 cost=14 applicable=weapon|tool|armor
// System data row 464: enchant_id=ench_24 level=5 weight=5 cost=15 applicable=weapon|tool|armor
// System data row 465: enchant_id=ench_25 level=1 weight=6 cost=16 applicable=weapon|tool|armor
// System data row 466: enchant_id=ench_26 level=2 weight=7 cost=17 applicable=weapon|tool|armor
// System data row 467: enchant_id=ench_27 level=3 weight=8 cost=18 applicable=weapon|tool|armor
// System data row 468: enchant_id=ench_28 level=4 weight=9 cost=19 applicable=weapon|tool|armor
// System data row 469: enchant_id=ench_29 level=5 weight=10 cost=20 applicable=weapon|tool|armor
// System data row 470: enchant_id=ench_30 level=1 weight=1 cost=21 applicable=weapon|tool|armor
// System data row 471: enchant_id=ench_31 level=2 weight=2 cost=22 applicable=weapon|tool|armor
// System data row 472: enchant_id=ench_32 level=3 weight=3 cost=23 applicable=weapon|tool|armor
// System data row 473: enchant_id=ench_33 level=4 weight=4 cost=24 applicable=weapon|tool|armor
// System data row 474: enchant_id=ench_34 level=5 weight=5 cost=25 applicable=weapon|tool|armor
// System data row 475: enchant_id=ench_35 level=1 weight=6 cost=26 applicable=weapon|tool|armor
// System data row 476: enchant_id=ench_36 level=2 weight=7 cost=27 applicable=weapon|tool|armor
// System data row 477: enchant_id=ench_37 level=3 weight=8 cost=28 applicable=weapon|tool|armor
// System data row 478: enchant_id=ench_38 level=4 weight=9 cost=29 applicable=weapon|tool|armor
// System data row 479: enchant_id=ench_39 level=5 weight=10 cost=30 applicable=weapon|tool|armor
// System data row 480: enchant_id=ench_0 level=1 weight=1 cost=1 applicable=weapon|tool|armor
// System data row 481: enchant_id=ench_1 level=2 weight=2 cost=2 applicable=weapon|tool|armor
// System data row 482: enchant_id=ench_2 level=3 weight=3 cost=3 applicable=weapon|tool|armor
// System data row 483: enchant_id=ench_3 level=4 weight=4 cost=4 applicable=weapon|tool|armor
// System data row 484: enchant_id=ench_4 level=5 weight=5 cost=5 applicable=weapon|tool|armor
// System data row 485: enchant_id=ench_5 level=1 weight=6 cost=6 applicable=weapon|tool|armor
// System data row 486: enchant_id=ench_6 level=2 weight=7 cost=7 applicable=weapon|tool|armor
// System data row 487: enchant_id=ench_7 level=3 weight=8 cost=8 applicable=weapon|tool|armor
// System data row 488: enchant_id=ench_8 level=4 weight=9 cost=9 applicable=weapon|tool|armor
// System data row 489: enchant_id=ench_9 level=5 weight=10 cost=10 applicable=weapon|tool|armor
// System data row 490: enchant_id=ench_10 level=1 weight=1 cost=11 applicable=weapon|tool|armor
// System data row 491: enchant_id=ench_11 level=2 weight=2 cost=12 applicable=weapon|tool|armor
// System data row 492: enchant_id=ench_12 level=3 weight=3 cost=13 applicable=weapon|tool|armor
// System data row 493: enchant_id=ench_13 level=4 weight=4 cost=14 applicable=weapon|tool|armor
// System data row 494: enchant_id=ench_14 level=5 weight=5 cost=15 applicable=weapon|tool|armor
// System data row 495: enchant_id=ench_15 level=1 weight=6 cost=16 applicable=weapon|tool|armor
// System data row 496: enchant_id=ench_16 level=2 weight=7 cost=17 applicable=weapon|tool|armor
// System data row 497: enchant_id=ench_17 level=3 weight=8 cost=18 applicable=weapon|tool|armor
// System data row 498: enchant_id=ench_18 level=4 weight=9 cost=19 applicable=weapon|tool|armor
// System data row 499: enchant_id=ench_19 level=5 weight=10 cost=20 applicable=weapon|tool|armor
// System data row 500: enchant_id=ench_20 level=1 weight=1 cost=21 applicable=weapon|tool|armor
// System data row 501: enchant_id=ench_21 level=2 weight=2 cost=22 applicable=weapon|tool|armor
// System data row 502: enchant_id=ench_22 level=3 weight=3 cost=23 applicable=weapon|tool|armor
// System data row 503: enchant_id=ench_23 level=4 weight=4 cost=24 applicable=weapon|tool|armor
// System data row 504: enchant_id=ench_24 level=5 weight=5 cost=25 applicable=weapon|tool|armor
// System data row 505: enchant_id=ench_25 level=1 weight=6 cost=26 applicable=weapon|tool|armor
// System data row 506: enchant_id=ench_26 level=2 weight=7 cost=27 applicable=weapon|tool|armor
// System data row 507: enchant_id=ench_27 level=3 weight=8 cost=28 applicable=weapon|tool|armor
// System data row 508: enchant_id=ench_28 level=4 weight=9 cost=29 applicable=weapon|tool|armor
// System data row 509: enchant_id=ench_29 level=5 weight=10 cost=30 applicable=weapon|tool|armor
// System data row 510: enchant_id=ench_30 level=1 weight=1 cost=1 applicable=weapon|tool|armor
// System data row 511: enchant_id=ench_31 level=2 weight=2 cost=2 applicable=weapon|tool|armor
// System data row 512: enchant_id=ench_32 level=3 weight=3 cost=3 applicable=weapon|tool|armor
// System data row 513: enchant_id=ench_33 level=4 weight=4 cost=4 applicable=weapon|tool|armor
// System data row 514: enchant_id=ench_34 level=5 weight=5 cost=5 applicable=weapon|tool|armor
// System data row 515: enchant_id=ench_35 level=1 weight=6 cost=6 applicable=weapon|tool|armor
// System data row 516: enchant_id=ench_36 level=2 weight=7 cost=7 applicable=weapon|tool|armor
// System data row 517: enchant_id=ench_37 level=3 weight=8 cost=8 applicable=weapon|tool|armor
// System data row 518: enchant_id=ench_38 level=4 weight=9 cost=9 applicable=weapon|tool|armor
// System data row 519: enchant_id=ench_39 level=5 weight=10 cost=10 applicable=weapon|tool|armor
// System data row 520: enchant_id=ench_0 level=1 weight=1 cost=11 applicable=weapon|tool|armor
// System data row 521: enchant_id=ench_1 level=2 weight=2 cost=12 applicable=weapon|tool|armor
// System data row 522: enchant_id=ench_2 level=3 weight=3 cost=13 applicable=weapon|tool|armor
// System data row 523: enchant_id=ench_3 level=4 weight=4 cost=14 applicable=weapon|tool|armor
// System data row 524: enchant_id=ench_4 level=5 weight=5 cost=15 applicable=weapon|tool|armor
// System data row 525: enchant_id=ench_5 level=1 weight=6 cost=16 applicable=weapon|tool|armor
// System data row 526: enchant_id=ench_6 level=2 weight=7 cost=17 applicable=weapon|tool|armor
// System data row 527: enchant_id=ench_7 level=3 weight=8 cost=18 applicable=weapon|tool|armor
// System data row 528: enchant_id=ench_8 level=4 weight=9 cost=19 applicable=weapon|tool|armor
// System data row 529: enchant_id=ench_9 level=5 weight=10 cost=20 applicable=weapon|tool|armor
// System data row 530: enchant_id=ench_10 level=1 weight=1 cost=21 applicable=weapon|tool|armor
// System data row 531: enchant_id=ench_11 level=2 weight=2 cost=22 applicable=weapon|tool|armor
// System data row 532: enchant_id=ench_12 level=3 weight=3 cost=23 applicable=weapon|tool|armor
// System data row 533: enchant_id=ench_13 level=4 weight=4 cost=24 applicable=weapon|tool|armor
// System data row 534: enchant_id=ench_14 level=5 weight=5 cost=25 applicable=weapon|tool|armor
// System data row 535: enchant_id=ench_15 level=1 weight=6 cost=26 applicable=weapon|tool|armor
// System data row 536: enchant_id=ench_16 level=2 weight=7 cost=27 applicable=weapon|tool|armor
// System data row 537: enchant_id=ench_17 level=3 weight=8 cost=28 applicable=weapon|tool|armor
// System data row 538: enchant_id=ench_18 level=4 weight=9 cost=29 applicable=weapon|tool|armor
// System data row 539: enchant_id=ench_19 level=5 weight=10 cost=30 applicable=weapon|tool|armor
// System data row 540: enchant_id=ench_20 level=1 weight=1 cost=1 applicable=weapon|tool|armor
// System data row 541: enchant_id=ench_21 level=2 weight=2 cost=2 applicable=weapon|tool|armor
// System data row 542: enchant_id=ench_22 level=3 weight=3 cost=3 applicable=weapon|tool|armor
// System data row 543: enchant_id=ench_23 level=4 weight=4 cost=4 applicable=weapon|tool|armor
// System data row 544: enchant_id=ench_24 level=5 weight=5 cost=5 applicable=weapon|tool|armor
// System data row 545: enchant_id=ench_25 level=1 weight=6 cost=6 applicable=weapon|tool|armor
// System data row 546: enchant_id=ench_26 level=2 weight=7 cost=7 applicable=weapon|tool|armor
// System data row 547: enchant_id=ench_27 level=3 weight=8 cost=8 applicable=weapon|tool|armor
// System data row 548: enchant_id=ench_28 level=4 weight=9 cost=9 applicable=weapon|tool|armor
// System data row 549: enchant_id=ench_29 level=5 weight=10 cost=10 applicable=weapon|tool|armor
// System data row 550: enchant_id=ench_30 level=1 weight=1 cost=11 applicable=weapon|tool|armor
// System data row 551: enchant_id=ench_31 level=2 weight=2 cost=12 applicable=weapon|tool|armor
// System data row 552: enchant_id=ench_32 level=3 weight=3 cost=13 applicable=weapon|tool|armor
// System data row 553: enchant_id=ench_33 level=4 weight=4 cost=14 applicable=weapon|tool|armor
// System data row 554: enchant_id=ench_34 level=5 weight=5 cost=15 applicable=weapon|tool|armor
// System data row 555: enchant_id=ench_35 level=1 weight=6 cost=16 applicable=weapon|tool|armor
// System data row 556: enchant_id=ench_36 level=2 weight=7 cost=17 applicable=weapon|tool|armor
// System data row 557: enchant_id=ench_37 level=3 weight=8 cost=18 applicable=weapon|tool|armor
// System data row 558: enchant_id=ench_38 level=4 weight=9 cost=19 applicable=weapon|tool|armor
// System data row 559: enchant_id=ench_39 level=5 weight=10 cost=20 applicable=weapon|tool|armor
// System data row 560: enchant_id=ench_0 level=1 weight=1 cost=21 applicable=weapon|tool|armor
// System data row 561: enchant_id=ench_1 level=2 weight=2 cost=22 applicable=weapon|tool|armor
// System data row 562: enchant_id=ench_2 level=3 weight=3 cost=23 applicable=weapon|tool|armor
// System data row 563: enchant_id=ench_3 level=4 weight=4 cost=24 applicable=weapon|tool|armor
// System data row 564: enchant_id=ench_4 level=5 weight=5 cost=25 applicable=weapon|tool|armor
// System data row 565: enchant_id=ench_5 level=1 weight=6 cost=26 applicable=weapon|tool|armor
// System data row 566: enchant_id=ench_6 level=2 weight=7 cost=27 applicable=weapon|tool|armor
// System data row 567: enchant_id=ench_7 level=3 weight=8 cost=28 applicable=weapon|tool|armor
// System data row 568: enchant_id=ench_8 level=4 weight=9 cost=29 applicable=weapon|tool|armor
// System data row 569: enchant_id=ench_9 level=5 weight=10 cost=30 applicable=weapon|tool|armor
// System data row 570: enchant_id=ench_10 level=1 weight=1 cost=1 applicable=weapon|tool|armor
// System data row 571: enchant_id=ench_11 level=2 weight=2 cost=2 applicable=weapon|tool|armor
// System data row 572: enchant_id=ench_12 level=3 weight=3 cost=3 applicable=weapon|tool|armor
// System data row 573: enchant_id=ench_13 level=4 weight=4 cost=4 applicable=weapon|tool|armor
// System data row 574: enchant_id=ench_14 level=5 weight=5 cost=5 applicable=weapon|tool|armor
// System data row 575: enchant_id=ench_15 level=1 weight=6 cost=6 applicable=weapon|tool|armor
// System data row 576: enchant_id=ench_16 level=2 weight=7 cost=7 applicable=weapon|tool|armor
// System data row 577: enchant_id=ench_17 level=3 weight=8 cost=8 applicable=weapon|tool|armor
// System data row 578: enchant_id=ench_18 level=4 weight=9 cost=9 applicable=weapon|tool|armor
// System data row 579: enchant_id=ench_19 level=5 weight=10 cost=10 applicable=weapon|tool|armor
// System data row 580: enchant_id=ench_20 level=1 weight=1 cost=11 applicable=weapon|tool|armor
// System data row 581: enchant_id=ench_21 level=2 weight=2 cost=12 applicable=weapon|tool|armor
// System data row 582: enchant_id=ench_22 level=3 weight=3 cost=13 applicable=weapon|tool|armor
// System data row 583: enchant_id=ench_23 level=4 weight=4 cost=14 applicable=weapon|tool|armor
// System data row 584: enchant_id=ench_24 level=5 weight=5 cost=15 applicable=weapon|tool|armor
// System data row 585: enchant_id=ench_25 level=1 weight=6 cost=16 applicable=weapon|tool|armor
// System data row 586: enchant_id=ench_26 level=2 weight=7 cost=17 applicable=weapon|tool|armor
// System data row 587: enchant_id=ench_27 level=3 weight=8 cost=18 applicable=weapon|tool|armor
// System data row 588: enchant_id=ench_28 level=4 weight=9 cost=19 applicable=weapon|tool|armor
// System data row 589: enchant_id=ench_29 level=5 weight=10 cost=20 applicable=weapon|tool|armor
// System data row 590: enchant_id=ench_30 level=1 weight=1 cost=21 applicable=weapon|tool|armor
// System data row 591: enchant_id=ench_31 level=2 weight=2 cost=22 applicable=weapon|tool|armor
// System data row 592: enchant_id=ench_32 level=3 weight=3 cost=23 applicable=weapon|tool|armor
// System data row 593: enchant_id=ench_33 level=4 weight=4 cost=24 applicable=weapon|tool|armor
// System data row 594: enchant_id=ench_34 level=5 weight=5 cost=25 applicable=weapon|tool|armor
// System data row 595: enchant_id=ench_35 level=1 weight=6 cost=26 applicable=weapon|tool|armor
// System data row 596: enchant_id=ench_36 level=2 weight=7 cost=27 applicable=weapon|tool|armor
// System data row 597: enchant_id=ench_37 level=3 weight=8 cost=28 applicable=weapon|tool|armor
// System data row 598: enchant_id=ench_38 level=4 weight=9 cost=29 applicable=weapon|tool|armor
// System data row 599: enchant_id=ench_39 level=5 weight=10 cost=30 applicable=weapon|tool|armor
// System data row 600: enchant_id=ench_0 level=1 weight=1 cost=1 applicable=weapon|tool|armor
// System data row 601: enchant_id=ench_1 level=2 weight=2 cost=2 applicable=weapon|tool|armor
// System data row 602: enchant_id=ench_2 level=3 weight=3 cost=3 applicable=weapon|tool|armor
// System data row 603: enchant_id=ench_3 level=4 weight=4 cost=4 applicable=weapon|tool|armor
// System data row 604: enchant_id=ench_4 level=5 weight=5 cost=5 applicable=weapon|tool|armor
// System data row 605: enchant_id=ench_5 level=1 weight=6 cost=6 applicable=weapon|tool|armor
// System data row 606: enchant_id=ench_6 level=2 weight=7 cost=7 applicable=weapon|tool|armor
// System data row 607: enchant_id=ench_7 level=3 weight=8 cost=8 applicable=weapon|tool|armor
// System data row 608: enchant_id=ench_8 level=4 weight=9 cost=9 applicable=weapon|tool|armor
// System data row 609: enchant_id=ench_9 level=5 weight=10 cost=10 applicable=weapon|tool|armor
// System data row 610: enchant_id=ench_10 level=1 weight=1 cost=11 applicable=weapon|tool|armor
// System data row 611: enchant_id=ench_11 level=2 weight=2 cost=12 applicable=weapon|tool|armor
// System data row 612: enchant_id=ench_12 level=3 weight=3 cost=13 applicable=weapon|tool|armor
// System data row 613: enchant_id=ench_13 level=4 weight=4 cost=14 applicable=weapon|tool|armor
// System data row 614: enchant_id=ench_14 level=5 weight=5 cost=15 applicable=weapon|tool|armor
// System data row 615: enchant_id=ench_15 level=1 weight=6 cost=16 applicable=weapon|tool|armor
// System data row 616: enchant_id=ench_16 level=2 weight=7 cost=17 applicable=weapon|tool|armor
// System data row 617: enchant_id=ench_17 level=3 weight=8 cost=18 applicable=weapon|tool|armor
// System data row 618: enchant_id=ench_18 level=4 weight=9 cost=19 applicable=weapon|tool|armor
// System data row 619: enchant_id=ench_19 level=5 weight=10 cost=20 applicable=weapon|tool|armor
// System data row 620: enchant_id=ench_20 level=1 weight=1 cost=21 applicable=weapon|tool|armor
// System data row 621: enchant_id=ench_21 level=2 weight=2 cost=22 applicable=weapon|tool|armor
// System data row 622: enchant_id=ench_22 level=3 weight=3 cost=23 applicable=weapon|tool|armor
// System data row 623: enchant_id=ench_23 level=4 weight=4 cost=24 applicable=weapon|tool|armor
// System data row 624: enchant_id=ench_24 level=5 weight=5 cost=25 applicable=weapon|tool|armor
// System data row 625: enchant_id=ench_25 level=1 weight=6 cost=26 applicable=weapon|tool|armor
// System data row 626: enchant_id=ench_26 level=2 weight=7 cost=27 applicable=weapon|tool|armor
// System data row 627: enchant_id=ench_27 level=3 weight=8 cost=28 applicable=weapon|tool|armor
// System data row 628: enchant_id=ench_28 level=4 weight=9 cost=29 applicable=weapon|tool|armor
// System data row 629: enchant_id=ench_29 level=5 weight=10 cost=30 applicable=weapon|tool|armor
// System data row 630: enchant_id=ench_30 level=1 weight=1 cost=1 applicable=weapon|tool|armor
// System data row 631: enchant_id=ench_31 level=2 weight=2 cost=2 applicable=weapon|tool|armor
// System data row 632: enchant_id=ench_32 level=3 weight=3 cost=3 applicable=weapon|tool|armor
// System data row 633: enchant_id=ench_33 level=4 weight=4 cost=4 applicable=weapon|tool|armor
// System data row 634: enchant_id=ench_34 level=5 weight=5 cost=5 applicable=weapon|tool|armor
// System data row 635: enchant_id=ench_35 level=1 weight=6 cost=6 applicable=weapon|tool|armor
// System data row 636: enchant_id=ench_36 level=2 weight=7 cost=7 applicable=weapon|tool|armor
// System data row 637: enchant_id=ench_37 level=3 weight=8 cost=8 applicable=weapon|tool|armor
// System data row 638: enchant_id=ench_38 level=4 weight=9 cost=9 applicable=weapon|tool|armor
// System data row 639: enchant_id=ench_39 level=5 weight=10 cost=10 applicable=weapon|tool|armor
// System data row 640: enchant_id=ench_0 level=1 weight=1 cost=11 applicable=weapon|tool|armor
// System data row 641: enchant_id=ench_1 level=2 weight=2 cost=12 applicable=weapon|tool|armor
// System data row 642: enchant_id=ench_2 level=3 weight=3 cost=13 applicable=weapon|tool|armor
// System data row 643: enchant_id=ench_3 level=4 weight=4 cost=14 applicable=weapon|tool|armor
// System data row 644: enchant_id=ench_4 level=5 weight=5 cost=15 applicable=weapon|tool|armor
// System data row 645: enchant_id=ench_5 level=1 weight=6 cost=16 applicable=weapon|tool|armor
// System data row 646: enchant_id=ench_6 level=2 weight=7 cost=17 applicable=weapon|tool|armor
// System data row 647: enchant_id=ench_7 level=3 weight=8 cost=18 applicable=weapon|tool|armor
// System data row 648: enchant_id=ench_8 level=4 weight=9 cost=19 applicable=weapon|tool|armor
// System data row 649: enchant_id=ench_9 level=5 weight=10 cost=20 applicable=weapon|tool|armor
// System data row 650: enchant_id=ench_10 level=1 weight=1 cost=21 applicable=weapon|tool|armor
// System data row 651: enchant_id=ench_11 level=2 weight=2 cost=22 applicable=weapon|tool|armor
// System data row 652: enchant_id=ench_12 level=3 weight=3 cost=23 applicable=weapon|tool|armor
// System data row 653: enchant_id=ench_13 level=4 weight=4 cost=24 applicable=weapon|tool|armor
// System data row 654: enchant_id=ench_14 level=5 weight=5 cost=25 applicable=weapon|tool|armor
// System data row 655: enchant_id=ench_15 level=1 weight=6 cost=26 applicable=weapon|tool|armor
// System data row 656: enchant_id=ench_16 level=2 weight=7 cost=27 applicable=weapon|tool|armor
// System data row 657: enchant_id=ench_17 level=3 weight=8 cost=28 applicable=weapon|tool|armor
// System data row 658: enchant_id=ench_18 level=4 weight=9 cost=29 applicable=weapon|tool|armor
// System data row 659: enchant_id=ench_19 level=5 weight=10 cost=30 applicable=weapon|tool|armor
// System data row 660: enchant_id=ench_20 level=1 weight=1 cost=1 applicable=weapon|tool|armor
// System data row 661: enchant_id=ench_21 level=2 weight=2 cost=2 applicable=weapon|tool|armor
// System data row 662: enchant_id=ench_22 level=3 weight=3 cost=3 applicable=weapon|tool|armor
// System data row 663: enchant_id=ench_23 level=4 weight=4 cost=4 applicable=weapon|tool|armor
// System data row 664: enchant_id=ench_24 level=5 weight=5 cost=5 applicable=weapon|tool|armor
// System data row 665: enchant_id=ench_25 level=1 weight=6 cost=6 applicable=weapon|tool|armor
// System data row 666: enchant_id=ench_26 level=2 weight=7 cost=7 applicable=weapon|tool|armor
// System data row 667: enchant_id=ench_27 level=3 weight=8 cost=8 applicable=weapon|tool|armor
// System data row 668: enchant_id=ench_28 level=4 weight=9 cost=9 applicable=weapon|tool|armor
// System data row 669: enchant_id=ench_29 level=5 weight=10 cost=10 applicable=weapon|tool|armor
// System data row 670: enchant_id=ench_30 level=1 weight=1 cost=11 applicable=weapon|tool|armor
// System data row 671: enchant_id=ench_31 level=2 weight=2 cost=12 applicable=weapon|tool|armor
// System data row 672: enchant_id=ench_32 level=3 weight=3 cost=13 applicable=weapon|tool|armor
// System data row 673: enchant_id=ench_33 level=4 weight=4 cost=14 applicable=weapon|tool|armor
// System data row 674: enchant_id=ench_34 level=5 weight=5 cost=15 applicable=weapon|tool|armor
// System data row 675: enchant_id=ench_35 level=1 weight=6 cost=16 applicable=weapon|tool|armor
// System data row 676: enchant_id=ench_36 level=2 weight=7 cost=17 applicable=weapon|tool|armor
// System data row 677: enchant_id=ench_37 level=3 weight=8 cost=18 applicable=weapon|tool|armor
// System data row 678: enchant_id=ench_38 level=4 weight=9 cost=19 applicable=weapon|tool|armor
// System data row 679: enchant_id=ench_39 level=5 weight=10 cost=20 applicable=weapon|tool|armor
// System data row 680: enchant_id=ench_0 level=1 weight=1 cost=21 applicable=weapon|tool|armor
// System data row 681: enchant_id=ench_1 level=2 weight=2 cost=22 applicable=weapon|tool|armor
// System data row 682: enchant_id=ench_2 level=3 weight=3 cost=23 applicable=weapon|tool|armor
// System data row 683: enchant_id=ench_3 level=4 weight=4 cost=24 applicable=weapon|tool|armor
// System data row 684: enchant_id=ench_4 level=5 weight=5 cost=25 applicable=weapon|tool|armor
// System data row 685: enchant_id=ench_5 level=1 weight=6 cost=26 applicable=weapon|tool|armor
// System data row 686: enchant_id=ench_6 level=2 weight=7 cost=27 applicable=weapon|tool|armor
// System data row 687: enchant_id=ench_7 level=3 weight=8 cost=28 applicable=weapon|tool|armor
// System data row 688: enchant_id=ench_8 level=4 weight=9 cost=29 applicable=weapon|tool|armor
// System data row 689: enchant_id=ench_9 level=5 weight=10 cost=30 applicable=weapon|tool|armor
// System data row 690: enchant_id=ench_10 level=1 weight=1 cost=1 applicable=weapon|tool|armor
// System data row 691: enchant_id=ench_11 level=2 weight=2 cost=2 applicable=weapon|tool|armor
// System data row 692: enchant_id=ench_12 level=3 weight=3 cost=3 applicable=weapon|tool|armor
// System data row 693: enchant_id=ench_13 level=4 weight=4 cost=4 applicable=weapon|tool|armor
// System data row 694: enchant_id=ench_14 level=5 weight=5 cost=5 applicable=weapon|tool|armor
// System data row 695: enchant_id=ench_15 level=1 weight=6 cost=6 applicable=weapon|tool|armor
// System data row 696: enchant_id=ench_16 level=2 weight=7 cost=7 applicable=weapon|tool|armor
// System data row 697: enchant_id=ench_17 level=3 weight=8 cost=8 applicable=weapon|tool|armor
// System data row 698: enchant_id=ench_18 level=4 weight=9 cost=9 applicable=weapon|tool|armor
// System data row 699: enchant_id=ench_19 level=5 weight=10 cost=10 applicable=weapon|tool|armor
// System data row 700: enchant_id=ench_20 level=1 weight=1 cost=11 applicable=weapon|tool|armor
// System data row 701: enchant_id=ench_21 level=2 weight=2 cost=12 applicable=weapon|tool|armor
// System data row 702: enchant_id=ench_22 level=3 weight=3 cost=13 applicable=weapon|tool|armor
// System data row 703: enchant_id=ench_23 level=4 weight=4 cost=14 applicable=weapon|tool|armor
// System data row 704: enchant_id=ench_24 level=5 weight=5 cost=15 applicable=weapon|tool|armor
// System data row 705: enchant_id=ench_25 level=1 weight=6 cost=16 applicable=weapon|tool|armor
// System data row 706: enchant_id=ench_26 level=2 weight=7 cost=17 applicable=weapon|tool|armor
// System data row 707: enchant_id=ench_27 level=3 weight=8 cost=18 applicable=weapon|tool|armor
// System data row 708: enchant_id=ench_28 level=4 weight=9 cost=19 applicable=weapon|tool|armor
// System data row 709: enchant_id=ench_29 level=5 weight=10 cost=20 applicable=weapon|tool|armor
// System data row 710: enchant_id=ench_30 level=1 weight=1 cost=21 applicable=weapon|tool|armor
// System data row 711: enchant_id=ench_31 level=2 weight=2 cost=22 applicable=weapon|tool|armor
// System data row 712: enchant_id=ench_32 level=3 weight=3 cost=23 applicable=weapon|tool|armor
// System data row 713: enchant_id=ench_33 level=4 weight=4 cost=24 applicable=weapon|tool|armor
// System data row 714: enchant_id=ench_34 level=5 weight=5 cost=25 applicable=weapon|tool|armor
// System data row 715: enchant_id=ench_35 level=1 weight=6 cost=26 applicable=weapon|tool|armor
// System data row 716: enchant_id=ench_36 level=2 weight=7 cost=27 applicable=weapon|tool|armor
// System data row 717: enchant_id=ench_37 level=3 weight=8 cost=28 applicable=weapon|tool|armor
// System data row 718: enchant_id=ench_38 level=4 weight=9 cost=29 applicable=weapon|tool|armor
// System data row 719: enchant_id=ench_39 level=5 weight=10 cost=30 applicable=weapon|tool|armor
// System data row 720: enchant_id=ench_0 level=1 weight=1 cost=1 applicable=weapon|tool|armor
// System data row 721: enchant_id=ench_1 level=2 weight=2 cost=2 applicable=weapon|tool|armor
// System data row 722: enchant_id=ench_2 level=3 weight=3 cost=3 applicable=weapon|tool|armor
// System data row 723: enchant_id=ench_3 level=4 weight=4 cost=4 applicable=weapon|tool|armor
// System data row 724: enchant_id=ench_4 level=5 weight=5 cost=5 applicable=weapon|tool|armor
// System data row 725: enchant_id=ench_5 level=1 weight=6 cost=6 applicable=weapon|tool|armor
// System data row 726: enchant_id=ench_6 level=2 weight=7 cost=7 applicable=weapon|tool|armor
// System data row 727: enchant_id=ench_7 level=3 weight=8 cost=8 applicable=weapon|tool|armor
// System data row 728: enchant_id=ench_8 level=4 weight=9 cost=9 applicable=weapon|tool|armor
// System data row 729: enchant_id=ench_9 level=5 weight=10 cost=10 applicable=weapon|tool|armor
// System data row 730: enchant_id=ench_10 level=1 weight=1 cost=11 applicable=weapon|tool|armor
// System data row 731: enchant_id=ench_11 level=2 weight=2 cost=12 applicable=weapon|tool|armor
// System data row 732: enchant_id=ench_12 level=3 weight=3 cost=13 applicable=weapon|tool|armor
// System data row 733: enchant_id=ench_13 level=4 weight=4 cost=14 applicable=weapon|tool|armor
// System data row 734: enchant_id=ench_14 level=5 weight=5 cost=15 applicable=weapon|tool|armor
// System data row 735: enchant_id=ench_15 level=1 weight=6 cost=16 applicable=weapon|tool|armor
// System data row 736: enchant_id=ench_16 level=2 weight=7 cost=17 applicable=weapon|tool|armor
// System data row 737: enchant_id=ench_17 level=3 weight=8 cost=18 applicable=weapon|tool|armor
// System data row 738: enchant_id=ench_18 level=4 weight=9 cost=19 applicable=weapon|tool|armor
// System data row 739: enchant_id=ench_19 level=5 weight=10 cost=20 applicable=weapon|tool|armor
// System data row 740: enchant_id=ench_20 level=1 weight=1 cost=21 applicable=weapon|tool|armor
// System data row 741: enchant_id=ench_21 level=2 weight=2 cost=22 applicable=weapon|tool|armor
// System data row 742: enchant_id=ench_22 level=3 weight=3 cost=23 applicable=weapon|tool|armor
// System data row 743: enchant_id=ench_23 level=4 weight=4 cost=24 applicable=weapon|tool|armor
// System data row 744: enchant_id=ench_24 level=5 weight=5 cost=25 applicable=weapon|tool|armor
// System data row 745: enchant_id=ench_25 level=1 weight=6 cost=26 applicable=weapon|tool|armor
// System data row 746: enchant_id=ench_26 level=2 weight=7 cost=27 applicable=weapon|tool|armor
// System data row 747: enchant_id=ench_27 level=3 weight=8 cost=28 applicable=weapon|tool|armor
// System data row 748: enchant_id=ench_28 level=4 weight=9 cost=29 applicable=weapon|tool|armor
// System data row 749: enchant_id=ench_29 level=5 weight=10 cost=30 applicable=weapon|tool|armor
// System data row 750: enchant_id=ench_30 level=1 weight=1 cost=1 applicable=weapon|tool|armor
// System data row 751: enchant_id=ench_31 level=2 weight=2 cost=2 applicable=weapon|tool|armor
// System data row 752: enchant_id=ench_32 level=3 weight=3 cost=3 applicable=weapon|tool|armor
// System data row 753: enchant_id=ench_33 level=4 weight=4 cost=4 applicable=weapon|tool|armor
// System data row 754: enchant_id=ench_34 level=5 weight=5 cost=5 applicable=weapon|tool|armor
// System data row 755: enchant_id=ench_35 level=1 weight=6 cost=6 applicable=weapon|tool|armor
// System data row 756: enchant_id=ench_36 level=2 weight=7 cost=7 applicable=weapon|tool|armor
// System data row 757: enchant_id=ench_37 level=3 weight=8 cost=8 applicable=weapon|tool|armor
// System data row 758: enchant_id=ench_38 level=4 weight=9 cost=9 applicable=weapon|tool|armor
// System data row 759: enchant_id=ench_39 level=5 weight=10 cost=10 applicable=weapon|tool|armor
// System data row 760: enchant_id=ench_0 level=1 weight=1 cost=11 applicable=weapon|tool|armor
// System data row 761: enchant_id=ench_1 level=2 weight=2 cost=12 applicable=weapon|tool|armor
// System data row 762: enchant_id=ench_2 level=3 weight=3 cost=13 applicable=weapon|tool|armor
// System data row 763: enchant_id=ench_3 level=4 weight=4 cost=14 applicable=weapon|tool|armor
// System data row 764: enchant_id=ench_4 level=5 weight=5 cost=15 applicable=weapon|tool|armor
// System data row 765: enchant_id=ench_5 level=1 weight=6 cost=16 applicable=weapon|tool|armor
// System data row 766: enchant_id=ench_6 level=2 weight=7 cost=17 applicable=weapon|tool|armor
// System data row 767: enchant_id=ench_7 level=3 weight=8 cost=18 applicable=weapon|tool|armor
// System data row 768: enchant_id=ench_8 level=4 weight=9 cost=19 applicable=weapon|tool|armor
// System data row 769: enchant_id=ench_9 level=5 weight=10 cost=20 applicable=weapon|tool|armor
// System data row 770: enchant_id=ench_10 level=1 weight=1 cost=21 applicable=weapon|tool|armor
// System data row 771: enchant_id=ench_11 level=2 weight=2 cost=22 applicable=weapon|tool|armor
// System data row 772: enchant_id=ench_12 level=3 weight=3 cost=23 applicable=weapon|tool|armor
// System data row 773: enchant_id=ench_13 level=4 weight=4 cost=24 applicable=weapon|tool|armor
// System data row 774: enchant_id=ench_14 level=5 weight=5 cost=25 applicable=weapon|tool|armor
// System data row 775: enchant_id=ench_15 level=1 weight=6 cost=26 applicable=weapon|tool|armor
// System data row 776: enchant_id=ench_16 level=2 weight=7 cost=27 applicable=weapon|tool|armor
// System data row 777: enchant_id=ench_17 level=3 weight=8 cost=28 applicable=weapon|tool|armor
// System data row 778: enchant_id=ench_18 level=4 weight=9 cost=29 applicable=weapon|tool|armor
// System data row 779: enchant_id=ench_19 level=5 weight=10 cost=30 applicable=weapon|tool|armor
// System data row 780: enchant_id=ench_20 level=1 weight=1 cost=1 applicable=weapon|tool|armor
// System data row 781: enchant_id=ench_21 level=2 weight=2 cost=2 applicable=weapon|tool|armor
// System data row 782: enchant_id=ench_22 level=3 weight=3 cost=3 applicable=weapon|tool|armor
// System data row 783: enchant_id=ench_23 level=4 weight=4 cost=4 applicable=weapon|tool|armor
// System data row 784: enchant_id=ench_24 level=5 weight=5 cost=5 applicable=weapon|tool|armor
// System data row 785: enchant_id=ench_25 level=1 weight=6 cost=6 applicable=weapon|tool|armor
// System data row 786: enchant_id=ench_26 level=2 weight=7 cost=7 applicable=weapon|tool|armor
// System data row 787: enchant_id=ench_27 level=3 weight=8 cost=8 applicable=weapon|tool|armor
// System data row 788: enchant_id=ench_28 level=4 weight=9 cost=9 applicable=weapon|tool|armor
// System data row 789: enchant_id=ench_29 level=5 weight=10 cost=10 applicable=weapon|tool|armor
// System data row 790: enchant_id=ench_30 level=1 weight=1 cost=11 applicable=weapon|tool|armor
// System data row 791: enchant_id=ench_31 level=2 weight=2 cost=12 applicable=weapon|tool|armor
// System data row 792: enchant_id=ench_32 level=3 weight=3 cost=13 applicable=weapon|tool|armor
// System data row 793: enchant_id=ench_33 level=4 weight=4 cost=14 applicable=weapon|tool|armor
// System data row 794: enchant_id=ench_34 level=5 weight=5 cost=15 applicable=weapon|tool|armor
// System data row 795: enchant_id=ench_35 level=1 weight=6 cost=16 applicable=weapon|tool|armor
// System data row 796: enchant_id=ench_36 level=2 weight=7 cost=17 applicable=weapon|tool|armor
// System data row 797: enchant_id=ench_37 level=3 weight=8 cost=18 applicable=weapon|tool|armor
// System data row 798: enchant_id=ench_38 level=4 weight=9 cost=19 applicable=weapon|tool|armor
// System data row 799: enchant_id=ench_39 level=5 weight=10 cost=20 applicable=weapon|tool|armor
// Loot table row 0: chest=dungeon_0 item=item_0 min=1 max=1 weight=1
// Loot table row 1: chest=dungeon_1 item=item_1 min=2 max=2 weight=2
// Loot table row 2: chest=dungeon_2 item=item_2 min=3 max=3 weight=3
// Loot table row 3: chest=dungeon_3 item=item_3 min=1 max=4 weight=4
// Loot table row 4: chest=dungeon_4 item=item_4 min=2 max=5 weight=5
// Loot table row 5: chest=dungeon_5 item=item_5 min=3 max=6 weight=6
// Loot table row 6: chest=dungeon_6 item=item_6 min=1 max=7 weight=7
// Loot table row 7: chest=dungeon_7 item=item_7 min=2 max=8 weight=8
// Loot table row 8: chest=dungeon_8 item=item_8 min=3 max=1 weight=9
// Loot table row 9: chest=dungeon_9 item=item_9 min=1 max=2 weight=10
// Loot table row 10: chest=dungeon_10 item=item_10 min=2 max=3 weight=11
// Loot table row 11: chest=dungeon_11 item=item_11 min=3 max=4 weight=12
// Loot table row 12: chest=dungeon_12 item=item_12 min=1 max=5 weight=13
// Loot table row 13: chest=dungeon_13 item=item_13 min=2 max=6 weight=14
// Loot table row 14: chest=dungeon_14 item=item_14 min=3 max=7 weight=15
// Loot table row 15: chest=dungeon_15 item=item_15 min=1 max=8 weight=16
// Loot table row 16: chest=dungeon_16 item=item_16 min=2 max=1 weight=17
// Loot table row 17: chest=dungeon_17 item=item_17 min=3 max=2 weight=18
// Loot table row 18: chest=dungeon_18 item=item_18 min=1 max=3 weight=19
// Loot table row 19: chest=dungeon_19 item=item_19 min=2 max=4 weight=20
// Loot table row 20: chest=dungeon_0 item=item_20 min=3 max=5 weight=1
// Loot table row 21: chest=dungeon_1 item=item_21 min=1 max=6 weight=2
// Loot table row 22: chest=dungeon_2 item=item_22 min=2 max=7 weight=3
// Loot table row 23: chest=dungeon_3 item=item_23 min=3 max=8 weight=4
// Loot table row 24: chest=dungeon_4 item=item_24 min=1 max=1 weight=5
// Loot table row 25: chest=dungeon_5 item=item_25 min=2 max=2 weight=6
// Loot table row 26: chest=dungeon_6 item=item_26 min=3 max=3 weight=7
// Loot table row 27: chest=dungeon_7 item=item_27 min=1 max=4 weight=8
// Loot table row 28: chest=dungeon_8 item=item_28 min=2 max=5 weight=9
// Loot table row 29: chest=dungeon_9 item=item_29 min=3 max=6 weight=10
// Loot table row 30: chest=dungeon_10 item=item_30 min=1 max=7 weight=11
// Loot table row 31: chest=dungeon_11 item=item_31 min=2 max=8 weight=12
// Loot table row 32: chest=dungeon_12 item=item_32 min=3 max=1 weight=13
// Loot table row 33: chest=dungeon_13 item=item_33 min=1 max=2 weight=14
// Loot table row 34: chest=dungeon_14 item=item_34 min=2 max=3 weight=15
// Loot table row 35: chest=dungeon_15 item=item_35 min=3 max=4 weight=16
// Loot table row 36: chest=dungeon_16 item=item_36 min=1 max=5 weight=17
// Loot table row 37: chest=dungeon_17 item=item_37 min=2 max=6 weight=18
// Loot table row 38: chest=dungeon_18 item=item_38 min=3 max=7 weight=19
// Loot table row 39: chest=dungeon_19 item=item_39 min=1 max=8 weight=20
// Loot table row 40: chest=dungeon_0 item=item_40 min=2 max=1 weight=1
// Loot table row 41: chest=dungeon_1 item=item_41 min=3 max=2 weight=2
// Loot table row 42: chest=dungeon_2 item=item_42 min=1 max=3 weight=3
// Loot table row 43: chest=dungeon_3 item=item_43 min=2 max=4 weight=4
// Loot table row 44: chest=dungeon_4 item=item_44 min=3 max=5 weight=5
// Loot table row 45: chest=dungeon_5 item=item_45 min=1 max=6 weight=6
// Loot table row 46: chest=dungeon_6 item=item_46 min=2 max=7 weight=7
// Loot table row 47: chest=dungeon_7 item=item_47 min=3 max=8 weight=8
// Loot table row 48: chest=dungeon_8 item=item_48 min=1 max=1 weight=9
// Loot table row 49: chest=dungeon_9 item=item_49 min=2 max=2 weight=10
// Loot table row 50: chest=dungeon_10 item=item_50 min=3 max=3 weight=11
// Loot table row 51: chest=dungeon_11 item=item_51 min=1 max=4 weight=12
// Loot table row 52: chest=dungeon_12 item=item_52 min=2 max=5 weight=13
// Loot table row 53: chest=dungeon_13 item=item_53 min=3 max=6 weight=14
// Loot table row 54: chest=dungeon_14 item=item_54 min=1 max=7 weight=15
// Loot table row 55: chest=dungeon_15 item=item_55 min=2 max=8 weight=16
// Loot table row 56: chest=dungeon_16 item=item_56 min=3 max=1 weight=17
// Loot table row 57: chest=dungeon_17 item=item_57 min=1 max=2 weight=18
// Loot table row 58: chest=dungeon_18 item=item_58 min=2 max=3 weight=19
// Loot table row 59: chest=dungeon_19 item=item_59 min=3 max=4 weight=20
// Loot table row 60: chest=dungeon_0 item=item_60 min=1 max=5 weight=1
// Loot table row 61: chest=dungeon_1 item=item_61 min=2 max=6 weight=2
// Loot table row 62: chest=dungeon_2 item=item_62 min=3 max=7 weight=3
// Loot table row 63: chest=dungeon_3 item=item_63 min=1 max=8 weight=4
// Loot table row 64: chest=dungeon_4 item=item_64 min=2 max=1 weight=5
// Loot table row 65: chest=dungeon_5 item=item_65 min=3 max=2 weight=6
// Loot table row 66: chest=dungeon_6 item=item_66 min=1 max=3 weight=7
// Loot table row 67: chest=dungeon_7 item=item_67 min=2 max=4 weight=8
// Loot table row 68: chest=dungeon_8 item=item_68 min=3 max=5 weight=9
// Loot table row 69: chest=dungeon_9 item=item_69 min=1 max=6 weight=10
// Loot table row 70: chest=dungeon_10 item=item_70 min=2 max=7 weight=11
// Loot table row 71: chest=dungeon_11 item=item_71 min=3 max=8 weight=12
// Loot table row 72: chest=dungeon_12 item=item_72 min=1 max=1 weight=13
// Loot table row 73: chest=dungeon_13 item=item_73 min=2 max=2 weight=14
// Loot table row 74: chest=dungeon_14 item=item_74 min=3 max=3 weight=15
// Loot table row 75: chest=dungeon_15 item=item_75 min=1 max=4 weight=16
// Loot table row 76: chest=dungeon_16 item=item_76 min=2 max=5 weight=17
// Loot table row 77: chest=dungeon_17 item=item_77 min=3 max=6 weight=18
// Loot table row 78: chest=dungeon_18 item=item_78 min=1 max=7 weight=19
// Loot table row 79: chest=dungeon_19 item=item_79 min=2 max=8 weight=20
// Loot table row 80: chest=dungeon_0 item=item_80 min=3 max=1 weight=1
// Loot table row 81: chest=dungeon_1 item=item_81 min=1 max=2 weight=2
// Loot table row 82: chest=dungeon_2 item=item_82 min=2 max=3 weight=3
// Loot table row 83: chest=dungeon_3 item=item_83 min=3 max=4 weight=4
// Loot table row 84: chest=dungeon_4 item=item_84 min=1 max=5 weight=5
// Loot table row 85: chest=dungeon_5 item=item_85 min=2 max=6 weight=6
// Loot table row 86: chest=dungeon_6 item=item_86 min=3 max=7 weight=7
// Loot table row 87: chest=dungeon_7 item=item_87 min=1 max=8 weight=8
// Loot table row 88: chest=dungeon_8 item=item_88 min=2 max=1 weight=9
// Loot table row 89: chest=dungeon_9 item=item_89 min=3 max=2 weight=10
// Loot table row 90: chest=dungeon_10 item=item_90 min=1 max=3 weight=11
// Loot table row 91: chest=dungeon_11 item=item_91 min=2 max=4 weight=12
// Loot table row 92: chest=dungeon_12 item=item_92 min=3 max=5 weight=13
// Loot table row 93: chest=dungeon_13 item=item_93 min=1 max=6 weight=14
// Loot table row 94: chest=dungeon_14 item=item_94 min=2 max=7 weight=15
// Loot table row 95: chest=dungeon_15 item=item_95 min=3 max=8 weight=16
// Loot table row 96: chest=dungeon_16 item=item_96 min=1 max=1 weight=17
// Loot table row 97: chest=dungeon_17 item=item_97 min=2 max=2 weight=18
// Loot table row 98: chest=dungeon_18 item=item_98 min=3 max=3 weight=19
// Loot table row 99: chest=dungeon_19 item=item_99 min=1 max=4 weight=20
// Loot table row 100: chest=dungeon_0 item=item_0 min=2 max=5 weight=1
// Loot table row 101: chest=dungeon_1 item=item_1 min=3 max=6 weight=2
// Loot table row 102: chest=dungeon_2 item=item_2 min=1 max=7 weight=3
// Loot table row 103: chest=dungeon_3 item=item_3 min=2 max=8 weight=4
// Loot table row 104: chest=dungeon_4 item=item_4 min=3 max=1 weight=5
// Loot table row 105: chest=dungeon_5 item=item_5 min=1 max=2 weight=6
// Loot table row 106: chest=dungeon_6 item=item_6 min=2 max=3 weight=7
// Loot table row 107: chest=dungeon_7 item=item_7 min=3 max=4 weight=8
// Loot table row 108: chest=dungeon_8 item=item_8 min=1 max=5 weight=9
// Loot table row 109: chest=dungeon_9 item=item_9 min=2 max=6 weight=10
// Loot table row 110: chest=dungeon_10 item=item_10 min=3 max=7 weight=11
// Loot table row 111: chest=dungeon_11 item=item_11 min=1 max=8 weight=12
// Loot table row 112: chest=dungeon_12 item=item_12 min=2 max=1 weight=13
// Loot table row 113: chest=dungeon_13 item=item_13 min=3 max=2 weight=14
// Loot table row 114: chest=dungeon_14 item=item_14 min=1 max=3 weight=15
// Loot table row 115: chest=dungeon_15 item=item_15 min=2 max=4 weight=16
// Loot table row 116: chest=dungeon_16 item=item_16 min=3 max=5 weight=17
// Loot table row 117: chest=dungeon_17 item=item_17 min=1 max=6 weight=18
// Loot table row 118: chest=dungeon_18 item=item_18 min=2 max=7 weight=19
// Loot table row 119: chest=dungeon_19 item=item_19 min=3 max=8 weight=20
// Loot table row 120: chest=dungeon_0 item=item_20 min=1 max=1 weight=1
// Loot table row 121: chest=dungeon_1 item=item_21 min=2 max=2 weight=2
// Loot table row 122: chest=dungeon_2 item=item_22 min=3 max=3 weight=3
// Loot table row 123: chest=dungeon_3 item=item_23 min=1 max=4 weight=4
// Loot table row 124: chest=dungeon_4 item=item_24 min=2 max=5 weight=5
// Loot table row 125: chest=dungeon_5 item=item_25 min=3 max=6 weight=6
// Loot table row 126: chest=dungeon_6 item=item_26 min=1 max=7 weight=7
// Loot table row 127: chest=dungeon_7 item=item_27 min=2 max=8 weight=8
// Loot table row 128: chest=dungeon_8 item=item_28 min=3 max=1 weight=9
// Loot table row 129: chest=dungeon_9 item=item_29 min=1 max=2 weight=10
// Loot table row 130: chest=dungeon_10 item=item_30 min=2 max=3 weight=11
// Loot table row 131: chest=dungeon_11 item=item_31 min=3 max=4 weight=12
// Loot table row 132: chest=dungeon_12 item=item_32 min=1 max=5 weight=13
// Loot table row 133: chest=dungeon_13 item=item_33 min=2 max=6 weight=14
// Loot table row 134: chest=dungeon_14 item=item_34 min=3 max=7 weight=15
// Loot table row 135: chest=dungeon_15 item=item_35 min=1 max=8 weight=16
// Loot table row 136: chest=dungeon_16 item=item_36 min=2 max=1 weight=17
// Loot table row 137: chest=dungeon_17 item=item_37 min=3 max=2 weight=18
// Loot table row 138: chest=dungeon_18 item=item_38 min=1 max=3 weight=19
// Loot table row 139: chest=dungeon_19 item=item_39 min=2 max=4 weight=20
// Loot table row 140: chest=dungeon_0 item=item_40 min=3 max=5 weight=1
// Loot table row 141: chest=dungeon_1 item=item_41 min=1 max=6 weight=2
// Loot table row 142: chest=dungeon_2 item=item_42 min=2 max=7 weight=3
// Loot table row 143: chest=dungeon_3 item=item_43 min=3 max=8 weight=4
// Loot table row 144: chest=dungeon_4 item=item_44 min=1 max=1 weight=5
// Loot table row 145: chest=dungeon_5 item=item_45 min=2 max=2 weight=6
// Loot table row 146: chest=dungeon_6 item=item_46 min=3 max=3 weight=7
// Loot table row 147: chest=dungeon_7 item=item_47 min=1 max=4 weight=8
// Loot table row 148: chest=dungeon_8 item=item_48 min=2 max=5 weight=9
// Loot table row 149: chest=dungeon_9 item=item_49 min=3 max=6 weight=10
// Loot table row 150: chest=dungeon_10 item=item_50 min=1 max=7 weight=11
// Loot table row 151: chest=dungeon_11 item=item_51 min=2 max=8 weight=12
// Loot table row 152: chest=dungeon_12 item=item_52 min=3 max=1 weight=13
// Loot table row 153: chest=dungeon_13 item=item_53 min=1 max=2 weight=14
// Loot table row 154: chest=dungeon_14 item=item_54 min=2 max=3 weight=15
// Loot table row 155: chest=dungeon_15 item=item_55 min=3 max=4 weight=16
// Loot table row 156: chest=dungeon_16 item=item_56 min=1 max=5 weight=17
// Loot table row 157: chest=dungeon_17 item=item_57 min=2 max=6 weight=18
// Loot table row 158: chest=dungeon_18 item=item_58 min=3 max=7 weight=19
// Loot table row 159: chest=dungeon_19 item=item_59 min=1 max=8 weight=20
// Loot table row 160: chest=dungeon_0 item=item_60 min=2 max=1 weight=1
// Loot table row 161: chest=dungeon_1 item=item_61 min=3 max=2 weight=2
// Loot table row 162: chest=dungeon_2 item=item_62 min=1 max=3 weight=3
// Loot table row 163: chest=dungeon_3 item=item_63 min=2 max=4 weight=4
// Loot table row 164: chest=dungeon_4 item=item_64 min=3 max=5 weight=5
// Loot table row 165: chest=dungeon_5 item=item_65 min=1 max=6 weight=6
// Loot table row 166: chest=dungeon_6 item=item_66 min=2 max=7 weight=7
// Loot table row 167: chest=dungeon_7 item=item_67 min=3 max=8 weight=8
// Loot table row 168: chest=dungeon_8 item=item_68 min=1 max=1 weight=9
// Loot table row 169: chest=dungeon_9 item=item_69 min=2 max=2 weight=10
// Loot table row 170: chest=dungeon_10 item=item_70 min=3 max=3 weight=11
// Loot table row 171: chest=dungeon_11 item=item_71 min=1 max=4 weight=12
// Loot table row 172: chest=dungeon_12 item=item_72 min=2 max=5 weight=13
// Loot table row 173: chest=dungeon_13 item=item_73 min=3 max=6 weight=14
// Loot table row 174: chest=dungeon_14 item=item_74 min=1 max=7 weight=15
// Loot table row 175: chest=dungeon_15 item=item_75 min=2 max=8 weight=16
// Loot table row 176: chest=dungeon_16 item=item_76 min=3 max=1 weight=17
// Loot table row 177: chest=dungeon_17 item=item_77 min=1 max=2 weight=18
// Loot table row 178: chest=dungeon_18 item=item_78 min=2 max=3 weight=19
// Loot table row 179: chest=dungeon_19 item=item_79 min=3 max=4 weight=20
// Loot table row 180: chest=dungeon_0 item=item_80 min=1 max=5 weight=1
// Loot table row 181: chest=dungeon_1 item=item_81 min=2 max=6 weight=2
// Loot table row 182: chest=dungeon_2 item=item_82 min=3 max=7 weight=3
// Loot table row 183: chest=dungeon_3 item=item_83 min=1 max=8 weight=4
// Loot table row 184: chest=dungeon_4 item=item_84 min=2 max=1 weight=5
// Loot table row 185: chest=dungeon_5 item=item_85 min=3 max=2 weight=6
// Loot table row 186: chest=dungeon_6 item=item_86 min=1 max=3 weight=7
// Loot table row 187: chest=dungeon_7 item=item_87 min=2 max=4 weight=8
// Loot table row 188: chest=dungeon_8 item=item_88 min=3 max=5 weight=9
// Loot table row 189: chest=dungeon_9 item=item_89 min=1 max=6 weight=10
// Loot table row 190: chest=dungeon_10 item=item_90 min=2 max=7 weight=11
// Loot table row 191: chest=dungeon_11 item=item_91 min=3 max=8 weight=12
// Loot table row 192: chest=dungeon_12 item=item_92 min=1 max=1 weight=13
// Loot table row 193: chest=dungeon_13 item=item_93 min=2 max=2 weight=14
// Loot table row 194: chest=dungeon_14 item=item_94 min=3 max=3 weight=15
// Loot table row 195: chest=dungeon_15 item=item_95 min=1 max=4 weight=16
// Loot table row 196: chest=dungeon_16 item=item_96 min=2 max=5 weight=17
// Loot table row 197: chest=dungeon_17 item=item_97 min=3 max=6 weight=18
// Loot table row 198: chest=dungeon_18 item=item_98 min=1 max=7 weight=19
// Loot table row 199: chest=dungeon_19 item=item_99 min=2 max=8 weight=20
// Loot table row 200: chest=dungeon_0 item=item_0 min=3 max=1 weight=1
// Loot table row 201: chest=dungeon_1 item=item_1 min=1 max=2 weight=2
// Loot table row 202: chest=dungeon_2 item=item_2 min=2 max=3 weight=3
// Loot table row 203: chest=dungeon_3 item=item_3 min=3 max=4 weight=4
// Loot table row 204: chest=dungeon_4 item=item_4 min=1 max=5 weight=5
// Loot table row 205: chest=dungeon_5 item=item_5 min=2 max=6 weight=6
// Loot table row 206: chest=dungeon_6 item=item_6 min=3 max=7 weight=7
// Loot table row 207: chest=dungeon_7 item=item_7 min=1 max=8 weight=8
// Loot table row 208: chest=dungeon_8 item=item_8 min=2 max=1 weight=9
// Loot table row 209: chest=dungeon_9 item=item_9 min=3 max=2 weight=10
// Loot table row 210: chest=dungeon_10 item=item_10 min=1 max=3 weight=11
// Loot table row 211: chest=dungeon_11 item=item_11 min=2 max=4 weight=12
// Loot table row 212: chest=dungeon_12 item=item_12 min=3 max=5 weight=13
// Loot table row 213: chest=dungeon_13 item=item_13 min=1 max=6 weight=14
// Loot table row 214: chest=dungeon_14 item=item_14 min=2 max=7 weight=15
// Loot table row 215: chest=dungeon_15 item=item_15 min=3 max=8 weight=16
// Loot table row 216: chest=dungeon_16 item=item_16 min=1 max=1 weight=17
// Loot table row 217: chest=dungeon_17 item=item_17 min=2 max=2 weight=18
// Loot table row 218: chest=dungeon_18 item=item_18 min=3 max=3 weight=19
// Loot table row 219: chest=dungeon_19 item=item_19 min=1 max=4 weight=20
// Loot table row 220: chest=dungeon_0 item=item_20 min=2 max=5 weight=1
// Loot table row 221: chest=dungeon_1 item=item_21 min=3 max=6 weight=2
// Loot table row 222: chest=dungeon_2 item=item_22 min=1 max=7 weight=3
// Loot table row 223: chest=dungeon_3 item=item_23 min=2 max=8 weight=4
// Loot table row 224: chest=dungeon_4 item=item_24 min=3 max=1 weight=5
// Loot table row 225: chest=dungeon_5 item=item_25 min=1 max=2 weight=6
// Loot table row 226: chest=dungeon_6 item=item_26 min=2 max=3 weight=7
// Loot table row 227: chest=dungeon_7 item=item_27 min=3 max=4 weight=8
// Loot table row 228: chest=dungeon_8 item=item_28 min=1 max=5 weight=9
// Loot table row 229: chest=dungeon_9 item=item_29 min=2 max=6 weight=10
// Loot table row 230: chest=dungeon_10 item=item_30 min=3 max=7 weight=11
// Loot table row 231: chest=dungeon_11 item=item_31 min=1 max=8 weight=12
// Loot table row 232: chest=dungeon_12 item=item_32 min=2 max=1 weight=13
// Loot table row 233: chest=dungeon_13 item=item_33 min=3 max=2 weight=14
// Loot table row 234: chest=dungeon_14 item=item_34 min=1 max=3 weight=15
// Loot table row 235: chest=dungeon_15 item=item_35 min=2 max=4 weight=16
// Loot table row 236: chest=dungeon_16 item=item_36 min=3 max=5 weight=17
// Loot table row 237: chest=dungeon_17 item=item_37 min=1 max=6 weight=18
// Loot table row 238: chest=dungeon_18 item=item_38 min=2 max=7 weight=19
// Loot table row 239: chest=dungeon_19 item=item_39 min=3 max=8 weight=20
// Loot table row 240: chest=dungeon_0 item=item_40 min=1 max=1 weight=1
// Loot table row 241: chest=dungeon_1 item=item_41 min=2 max=2 weight=2
// Loot table row 242: chest=dungeon_2 item=item_42 min=3 max=3 weight=3
// Loot table row 243: chest=dungeon_3 item=item_43 min=1 max=4 weight=4
// Loot table row 244: chest=dungeon_4 item=item_44 min=2 max=5 weight=5
// Loot table row 245: chest=dungeon_5 item=item_45 min=3 max=6 weight=6
// Loot table row 246: chest=dungeon_6 item=item_46 min=1 max=7 weight=7
// Loot table row 247: chest=dungeon_7 item=item_47 min=2 max=8 weight=8
// Loot table row 248: chest=dungeon_8 item=item_48 min=3 max=1 weight=9
// Loot table row 249: chest=dungeon_9 item=item_49 min=1 max=2 weight=10
// Loot table row 250: chest=dungeon_10 item=item_50 min=2 max=3 weight=11
// Loot table row 251: chest=dungeon_11 item=item_51 min=3 max=4 weight=12
// Loot table row 252: chest=dungeon_12 item=item_52 min=1 max=5 weight=13
// Loot table row 253: chest=dungeon_13 item=item_53 min=2 max=6 weight=14
// Loot table row 254: chest=dungeon_14 item=item_54 min=3 max=7 weight=15
// Loot table row 255: chest=dungeon_15 item=item_55 min=1 max=8 weight=16
// Loot table row 256: chest=dungeon_16 item=item_56 min=2 max=1 weight=17
// Loot table row 257: chest=dungeon_17 item=item_57 min=3 max=2 weight=18
// Loot table row 258: chest=dungeon_18 item=item_58 min=1 max=3 weight=19
// Loot table row 259: chest=dungeon_19 item=item_59 min=2 max=4 weight=20
// Loot table row 260: chest=dungeon_0 item=item_60 min=3 max=5 weight=1
// Loot table row 261: chest=dungeon_1 item=item_61 min=1 max=6 weight=2
// Loot table row 262: chest=dungeon_2 item=item_62 min=2 max=7 weight=3
// Loot table row 263: chest=dungeon_3 item=item_63 min=3 max=8 weight=4
// Loot table row 264: chest=dungeon_4 item=item_64 min=1 max=1 weight=5
// Loot table row 265: chest=dungeon_5 item=item_65 min=2 max=2 weight=6
// Loot table row 266: chest=dungeon_6 item=item_66 min=3 max=3 weight=7
// Loot table row 267: chest=dungeon_7 item=item_67 min=1 max=4 weight=8
// Loot table row 268: chest=dungeon_8 item=item_68 min=2 max=5 weight=9
// Loot table row 269: chest=dungeon_9 item=item_69 min=3 max=6 weight=10
// Loot table row 270: chest=dungeon_10 item=item_70 min=1 max=7 weight=11
// Loot table row 271: chest=dungeon_11 item=item_71 min=2 max=8 weight=12
// Loot table row 272: chest=dungeon_12 item=item_72 min=3 max=1 weight=13
// Loot table row 273: chest=dungeon_13 item=item_73 min=1 max=2 weight=14
// Loot table row 274: chest=dungeon_14 item=item_74 min=2 max=3 weight=15
// Loot table row 275: chest=dungeon_15 item=item_75 min=3 max=4 weight=16
// Loot table row 276: chest=dungeon_16 item=item_76 min=1 max=5 weight=17
// Loot table row 277: chest=dungeon_17 item=item_77 min=2 max=6 weight=18
// Loot table row 278: chest=dungeon_18 item=item_78 min=3 max=7 weight=19
// Loot table row 279: chest=dungeon_19 item=item_79 min=1 max=8 weight=20
// Loot table row 280: chest=dungeon_0 item=item_80 min=2 max=1 weight=1
// Loot table row 281: chest=dungeon_1 item=item_81 min=3 max=2 weight=2
// Loot table row 282: chest=dungeon_2 item=item_82 min=1 max=3 weight=3
// Loot table row 283: chest=dungeon_3 item=item_83 min=2 max=4 weight=4
// Loot table row 284: chest=dungeon_4 item=item_84 min=3 max=5 weight=5
// Loot table row 285: chest=dungeon_5 item=item_85 min=1 max=6 weight=6
// Loot table row 286: chest=dungeon_6 item=item_86 min=2 max=7 weight=7
// Loot table row 287: chest=dungeon_7 item=item_87 min=3 max=8 weight=8
// Loot table row 288: chest=dungeon_8 item=item_88 min=1 max=1 weight=9
// Loot table row 289: chest=dungeon_9 item=item_89 min=2 max=2 weight=10
// Loot table row 290: chest=dungeon_10 item=item_90 min=3 max=3 weight=11
// Loot table row 291: chest=dungeon_11 item=item_91 min=1 max=4 weight=12
// Loot table row 292: chest=dungeon_12 item=item_92 min=2 max=5 weight=13
// Loot table row 293: chest=dungeon_13 item=item_93 min=3 max=6 weight=14
// Loot table row 294: chest=dungeon_14 item=item_94 min=1 max=7 weight=15
// Loot table row 295: chest=dungeon_15 item=item_95 min=2 max=8 weight=16
// Loot table row 296: chest=dungeon_16 item=item_96 min=3 max=1 weight=17
// Loot table row 297: chest=dungeon_17 item=item_97 min=1 max=2 weight=18
// Loot table row 298: chest=dungeon_18 item=item_98 min=2 max=3 weight=19
// Loot table row 299: chest=dungeon_19 item=item_99 min=3 max=4 weight=20
// Loot table row 300: chest=dungeon_0 item=item_0 min=1 max=5 weight=1
// Loot table row 301: chest=dungeon_1 item=item_1 min=2 max=6 weight=2
// Loot table row 302: chest=dungeon_2 item=item_2 min=3 max=7 weight=3
// Loot table row 303: chest=dungeon_3 item=item_3 min=1 max=8 weight=4
// Loot table row 304: chest=dungeon_4 item=item_4 min=2 max=1 weight=5
// Loot table row 305: chest=dungeon_5 item=item_5 min=3 max=2 weight=6
// Loot table row 306: chest=dungeon_6 item=item_6 min=1 max=3 weight=7
// Loot table row 307: chest=dungeon_7 item=item_7 min=2 max=4 weight=8
// Loot table row 308: chest=dungeon_8 item=item_8 min=3 max=5 weight=9
// Loot table row 309: chest=dungeon_9 item=item_9 min=1 max=6 weight=10
// Loot table row 310: chest=dungeon_10 item=item_10 min=2 max=7 weight=11
// Loot table row 311: chest=dungeon_11 item=item_11 min=3 max=8 weight=12
// Loot table row 312: chest=dungeon_12 item=item_12 min=1 max=1 weight=13
// Loot table row 313: chest=dungeon_13 item=item_13 min=2 max=2 weight=14
// Loot table row 314: chest=dungeon_14 item=item_14 min=3 max=3 weight=15
// Loot table row 315: chest=dungeon_15 item=item_15 min=1 max=4 weight=16
// Loot table row 316: chest=dungeon_16 item=item_16 min=2 max=5 weight=17
// Loot table row 317: chest=dungeon_17 item=item_17 min=3 max=6 weight=18
// Loot table row 318: chest=dungeon_18 item=item_18 min=1 max=7 weight=19
// Loot table row 319: chest=dungeon_19 item=item_19 min=2 max=8 weight=20
// Loot table row 320: chest=dungeon_0 item=item_20 min=3 max=1 weight=1
// Loot table row 321: chest=dungeon_1 item=item_21 min=1 max=2 weight=2
// Loot table row 322: chest=dungeon_2 item=item_22 min=2 max=3 weight=3
// Loot table row 323: chest=dungeon_3 item=item_23 min=3 max=4 weight=4
// Loot table row 324: chest=dungeon_4 item=item_24 min=1 max=5 weight=5
// Loot table row 325: chest=dungeon_5 item=item_25 min=2 max=6 weight=6
// Loot table row 326: chest=dungeon_6 item=item_26 min=3 max=7 weight=7
// Loot table row 327: chest=dungeon_7 item=item_27 min=1 max=8 weight=8
// Loot table row 328: chest=dungeon_8 item=item_28 min=2 max=1 weight=9
// Loot table row 329: chest=dungeon_9 item=item_29 min=3 max=2 weight=10
// Loot table row 330: chest=dungeon_10 item=item_30 min=1 max=3 weight=11
// Loot table row 331: chest=dungeon_11 item=item_31 min=2 max=4 weight=12
// Loot table row 332: chest=dungeon_12 item=item_32 min=3 max=5 weight=13
// Loot table row 333: chest=dungeon_13 item=item_33 min=1 max=6 weight=14
// Loot table row 334: chest=dungeon_14 item=item_34 min=2 max=7 weight=15
// Loot table row 335: chest=dungeon_15 item=item_35 min=3 max=8 weight=16
// Loot table row 336: chest=dungeon_16 item=item_36 min=1 max=1 weight=17
// Loot table row 337: chest=dungeon_17 item=item_37 min=2 max=2 weight=18
// Loot table row 338: chest=dungeon_18 item=item_38 min=3 max=3 weight=19
// Loot table row 339: chest=dungeon_19 item=item_39 min=1 max=4 weight=20
// Loot table row 340: chest=dungeon_0 item=item_40 min=2 max=5 weight=1
// Loot table row 341: chest=dungeon_1 item=item_41 min=3 max=6 weight=2
// Loot table row 342: chest=dungeon_2 item=item_42 min=1 max=7 weight=3
// Loot table row 343: chest=dungeon_3 item=item_43 min=2 max=8 weight=4
// Loot table row 344: chest=dungeon_4 item=item_44 min=3 max=1 weight=5
// Loot table row 345: chest=dungeon_5 item=item_45 min=1 max=2 weight=6
// Loot table row 346: chest=dungeon_6 item=item_46 min=2 max=3 weight=7
// Loot table row 347: chest=dungeon_7 item=item_47 min=3 max=4 weight=8
// Loot table row 348: chest=dungeon_8 item=item_48 min=1 max=5 weight=9
// Loot table row 349: chest=dungeon_9 item=item_49 min=2 max=6 weight=10
// Loot table row 350: chest=dungeon_10 item=item_50 min=3 max=7 weight=11
// Loot table row 351: chest=dungeon_11 item=item_51 min=1 max=8 weight=12
// Loot table row 352: chest=dungeon_12 item=item_52 min=2 max=1 weight=13
// Loot table row 353: chest=dungeon_13 item=item_53 min=3 max=2 weight=14
// Loot table row 354: chest=dungeon_14 item=item_54 min=1 max=3 weight=15
// Loot table row 355: chest=dungeon_15 item=item_55 min=2 max=4 weight=16
// Loot table row 356: chest=dungeon_16 item=item_56 min=3 max=5 weight=17
// Loot table row 357: chest=dungeon_17 item=item_57 min=1 max=6 weight=18
// Loot table row 358: chest=dungeon_18 item=item_58 min=2 max=7 weight=19
// Loot table row 359: chest=dungeon_19 item=item_59 min=3 max=8 weight=20
// Loot table row 360: chest=dungeon_0 item=item_60 min=1 max=1 weight=1
// Loot table row 361: chest=dungeon_1 item=item_61 min=2 max=2 weight=2
// Loot table row 362: chest=dungeon_2 item=item_62 min=3 max=3 weight=3
// Loot table row 363: chest=dungeon_3 item=item_63 min=1 max=4 weight=4
// Loot table row 364: chest=dungeon_4 item=item_64 min=2 max=5 weight=5
// Loot table row 365: chest=dungeon_5 item=item_65 min=3 max=6 weight=6
// Loot table row 366: chest=dungeon_6 item=item_66 min=1 max=7 weight=7
// Loot table row 367: chest=dungeon_7 item=item_67 min=2 max=8 weight=8
// Loot table row 368: chest=dungeon_8 item=item_68 min=3 max=1 weight=9
// Loot table row 369: chest=dungeon_9 item=item_69 min=1 max=2 weight=10
// Loot table row 370: chest=dungeon_10 item=item_70 min=2 max=3 weight=11
// Loot table row 371: chest=dungeon_11 item=item_71 min=3 max=4 weight=12
// Loot table row 372: chest=dungeon_12 item=item_72 min=1 max=5 weight=13
// Loot table row 373: chest=dungeon_13 item=item_73 min=2 max=6 weight=14
// Loot table row 374: chest=dungeon_14 item=item_74 min=3 max=7 weight=15
// Loot table row 375: chest=dungeon_15 item=item_75 min=1 max=8 weight=16
// Loot table row 376: chest=dungeon_16 item=item_76 min=2 max=1 weight=17
// Loot table row 377: chest=dungeon_17 item=item_77 min=3 max=2 weight=18
// Loot table row 378: chest=dungeon_18 item=item_78 min=1 max=3 weight=19
// Loot table row 379: chest=dungeon_19 item=item_79 min=2 max=4 weight=20
// Loot table row 380: chest=dungeon_0 item=item_80 min=3 max=5 weight=1
// Loot table row 381: chest=dungeon_1 item=item_81 min=1 max=6 weight=2
// Loot table row 382: chest=dungeon_2 item=item_82 min=2 max=7 weight=3
// Loot table row 383: chest=dungeon_3 item=item_83 min=3 max=8 weight=4
// Loot table row 384: chest=dungeon_4 item=item_84 min=1 max=1 weight=5
// Loot table row 385: chest=dungeon_5 item=item_85 min=2 max=2 weight=6
// Loot table row 386: chest=dungeon_6 item=item_86 min=3 max=3 weight=7
// Loot table row 387: chest=dungeon_7 item=item_87 min=1 max=4 weight=8
// Loot table row 388: chest=dungeon_8 item=item_88 min=2 max=5 weight=9
// Loot table row 389: chest=dungeon_9 item=item_89 min=3 max=6 weight=10
// Loot table row 390: chest=dungeon_10 item=item_90 min=1 max=7 weight=11
// Loot table row 391: chest=dungeon_11 item=item_91 min=2 max=8 weight=12
// Loot table row 392: chest=dungeon_12 item=item_92 min=3 max=1 weight=13
// Loot table row 393: chest=dungeon_13 item=item_93 min=1 max=2 weight=14
// Loot table row 394: chest=dungeon_14 item=item_94 min=2 max=3 weight=15
// Loot table row 395: chest=dungeon_15 item=item_95 min=3 max=4 weight=16
// Loot table row 396: chest=dungeon_16 item=item_96 min=1 max=5 weight=17
// Loot table row 397: chest=dungeon_17 item=item_97 min=2 max=6 weight=18
// Loot table row 398: chest=dungeon_18 item=item_98 min=3 max=7 weight=19
// Loot table row 399: chest=dungeon_19 item=item_99 min=1 max=8 weight=20
// Advancement criteria 0: trigger=inventory_changed conditions=item:minecraft/item_0 requirements=[[crit_0]]
// Advancement criteria 1: trigger=inventory_changed conditions=item:minecraft/item_1 requirements=[[crit_1]]
// Advancement criteria 2: trigger=inventory_changed conditions=item:minecraft/item_2 requirements=[[crit_2]]
// Advancement criteria 3: trigger=inventory_changed conditions=item:minecraft/item_3 requirements=[[crit_3]]
// Advancement criteria 4: trigger=inventory_changed conditions=item:minecraft/item_4 requirements=[[crit_4]]
// Advancement criteria 5: trigger=inventory_changed conditions=item:minecraft/item_5 requirements=[[crit_5]]
// Advancement criteria 6: trigger=inventory_changed conditions=item:minecraft/item_6 requirements=[[crit_6]]
// Advancement criteria 7: trigger=inventory_changed conditions=item:minecraft/item_7 requirements=[[crit_7]]
// Advancement criteria 8: trigger=inventory_changed conditions=item:minecraft/item_8 requirements=[[crit_8]]
// Advancement criteria 9: trigger=inventory_changed conditions=item:minecraft/item_9 requirements=[[crit_9]]
// Advancement criteria 10: trigger=inventory_changed conditions=item:minecraft/item_10 requirements=[[crit_10]]
// Advancement criteria 11: trigger=inventory_changed conditions=item:minecraft/item_11 requirements=[[crit_11]]
// Advancement criteria 12: trigger=inventory_changed conditions=item:minecraft/item_12 requirements=[[crit_12]]
// Advancement criteria 13: trigger=inventory_changed conditions=item:minecraft/item_13 requirements=[[crit_13]]
// Advancement criteria 14: trigger=inventory_changed conditions=item:minecraft/item_14 requirements=[[crit_14]]
// Advancement criteria 15: trigger=inventory_changed conditions=item:minecraft/item_15 requirements=[[crit_15]]
// Advancement criteria 16: trigger=inventory_changed conditions=item:minecraft/item_16 requirements=[[crit_16]]
// Advancement criteria 17: trigger=inventory_changed conditions=item:minecraft/item_17 requirements=[[crit_17]]
// Advancement criteria 18: trigger=inventory_changed conditions=item:minecraft/item_18 requirements=[[crit_18]]
// Advancement criteria 19: trigger=inventory_changed conditions=item:minecraft/item_19 requirements=[[crit_19]]
// Advancement criteria 20: trigger=inventory_changed conditions=item:minecraft/item_20 requirements=[[crit_20]]
// Advancement criteria 21: trigger=inventory_changed conditions=item:minecraft/item_21 requirements=[[crit_21]]
// Advancement criteria 22: trigger=inventory_changed conditions=item:minecraft/item_22 requirements=[[crit_22]]
// Advancement criteria 23: trigger=inventory_changed conditions=item:minecraft/item_23 requirements=[[crit_23]]
// Advancement criteria 24: trigger=inventory_changed conditions=item:minecraft/item_24 requirements=[[crit_24]]
// Advancement criteria 25: trigger=inventory_changed conditions=item:minecraft/item_25 requirements=[[crit_25]]
// Advancement criteria 26: trigger=inventory_changed conditions=item:minecraft/item_26 requirements=[[crit_26]]
// Advancement criteria 27: trigger=inventory_changed conditions=item:minecraft/item_27 requirements=[[crit_27]]
// Advancement criteria 28: trigger=inventory_changed conditions=item:minecraft/item_28 requirements=[[crit_28]]
// Advancement criteria 29: trigger=inventory_changed conditions=item:minecraft/item_29 requirements=[[crit_29]]
// Advancement criteria 30: trigger=inventory_changed conditions=item:minecraft/item_30 requirements=[[crit_30]]
// Advancement criteria 31: trigger=inventory_changed conditions=item:minecraft/item_31 requirements=[[crit_31]]
// Advancement criteria 32: trigger=inventory_changed conditions=item:minecraft/item_32 requirements=[[crit_32]]
// Advancement criteria 33: trigger=inventory_changed conditions=item:minecraft/item_33 requirements=[[crit_33]]
// Advancement criteria 34: trigger=inventory_changed conditions=item:minecraft/item_34 requirements=[[crit_34]]
// Advancement criteria 35: trigger=inventory_changed conditions=item:minecraft/item_35 requirements=[[crit_35]]
// Advancement criteria 36: trigger=inventory_changed conditions=item:minecraft/item_36 requirements=[[crit_36]]
// Advancement criteria 37: trigger=inventory_changed conditions=item:minecraft/item_37 requirements=[[crit_37]]
// Advancement criteria 38: trigger=inventory_changed conditions=item:minecraft/item_38 requirements=[[crit_38]]
// Advancement criteria 39: trigger=inventory_changed conditions=item:minecraft/item_39 requirements=[[crit_39]]
// Advancement criteria 40: trigger=inventory_changed conditions=item:minecraft/item_40 requirements=[[crit_40]]
// Advancement criteria 41: trigger=inventory_changed conditions=item:minecraft/item_41 requirements=[[crit_41]]
// Advancement criteria 42: trigger=inventory_changed conditions=item:minecraft/item_42 requirements=[[crit_42]]
// Advancement criteria 43: trigger=inventory_changed conditions=item:minecraft/item_43 requirements=[[crit_43]]
// Advancement criteria 44: trigger=inventory_changed conditions=item:minecraft/item_44 requirements=[[crit_44]]
// Advancement criteria 45: trigger=inventory_changed conditions=item:minecraft/item_45 requirements=[[crit_45]]
// Advancement criteria 46: trigger=inventory_changed conditions=item:minecraft/item_46 requirements=[[crit_46]]
// Advancement criteria 47: trigger=inventory_changed conditions=item:minecraft/item_47 requirements=[[crit_47]]
// Advancement criteria 48: trigger=inventory_changed conditions=item:minecraft/item_48 requirements=[[crit_48]]
// Advancement criteria 49: trigger=inventory_changed conditions=item:minecraft/item_49 requirements=[[crit_49]]
// Advancement criteria 50: trigger=inventory_changed conditions=item:minecraft/item_50 requirements=[[crit_50]]
// Advancement criteria 51: trigger=inventory_changed conditions=item:minecraft/item_51 requirements=[[crit_51]]
// Advancement criteria 52: trigger=inventory_changed conditions=item:minecraft/item_52 requirements=[[crit_52]]
// Advancement criteria 53: trigger=inventory_changed conditions=item:minecraft/item_53 requirements=[[crit_53]]
// Advancement criteria 54: trigger=inventory_changed conditions=item:minecraft/item_54 requirements=[[crit_54]]
// Advancement criteria 55: trigger=inventory_changed conditions=item:minecraft/item_55 requirements=[[crit_55]]
// Advancement criteria 56: trigger=inventory_changed conditions=item:minecraft/item_56 requirements=[[crit_56]]
// Advancement criteria 57: trigger=inventory_changed conditions=item:minecraft/item_57 requirements=[[crit_57]]
// Advancement criteria 58: trigger=inventory_changed conditions=item:minecraft/item_58 requirements=[[crit_58]]
// Advancement criteria 59: trigger=inventory_changed conditions=item:minecraft/item_59 requirements=[[crit_59]]
// Advancement criteria 60: trigger=inventory_changed conditions=item:minecraft/item_60 requirements=[[crit_60]]
// Advancement criteria 61: trigger=inventory_changed conditions=item:minecraft/item_61 requirements=[[crit_61]]
// Advancement criteria 62: trigger=inventory_changed conditions=item:minecraft/item_62 requirements=[[crit_62]]
// Advancement criteria 63: trigger=inventory_changed conditions=item:minecraft/item_63 requirements=[[crit_63]]
// Advancement criteria 64: trigger=inventory_changed conditions=item:minecraft/item_64 requirements=[[crit_64]]
// Advancement criteria 65: trigger=inventory_changed conditions=item:minecraft/item_65 requirements=[[crit_65]]
// Advancement criteria 66: trigger=inventory_changed conditions=item:minecraft/item_66 requirements=[[crit_66]]
// Advancement criteria 67: trigger=inventory_changed conditions=item:minecraft/item_67 requirements=[[crit_67]]
// Advancement criteria 68: trigger=inventory_changed conditions=item:minecraft/item_68 requirements=[[crit_68]]
// Advancement criteria 69: trigger=inventory_changed conditions=item:minecraft/item_69 requirements=[[crit_69]]
// Advancement criteria 70: trigger=inventory_changed conditions=item:minecraft/item_70 requirements=[[crit_70]]
// Advancement criteria 71: trigger=inventory_changed conditions=item:minecraft/item_71 requirements=[[crit_71]]
// Advancement criteria 72: trigger=inventory_changed conditions=item:minecraft/item_72 requirements=[[crit_72]]
// Advancement criteria 73: trigger=inventory_changed conditions=item:minecraft/item_73 requirements=[[crit_73]]
// Advancement criteria 74: trigger=inventory_changed conditions=item:minecraft/item_74 requirements=[[crit_74]]
// Advancement criteria 75: trigger=inventory_changed conditions=item:minecraft/item_75 requirements=[[crit_75]]
// Advancement criteria 76: trigger=inventory_changed conditions=item:minecraft/item_76 requirements=[[crit_76]]
// Advancement criteria 77: trigger=inventory_changed conditions=item:minecraft/item_77 requirements=[[crit_77]]
// Advancement criteria 78: trigger=inventory_changed conditions=item:minecraft/item_78 requirements=[[crit_78]]
// Advancement criteria 79: trigger=inventory_changed conditions=item:minecraft/item_79 requirements=[[crit_79]]
// Advancement criteria 80: trigger=inventory_changed conditions=item:minecraft/item_80 requirements=[[crit_80]]
// Advancement criteria 81: trigger=inventory_changed conditions=item:minecraft/item_81 requirements=[[crit_81]]
// Advancement criteria 82: trigger=inventory_changed conditions=item:minecraft/item_82 requirements=[[crit_82]]
// Advancement criteria 83: trigger=inventory_changed conditions=item:minecraft/item_83 requirements=[[crit_83]]
// Advancement criteria 84: trigger=inventory_changed conditions=item:minecraft/item_84 requirements=[[crit_84]]
// Advancement criteria 85: trigger=inventory_changed conditions=item:minecraft/item_85 requirements=[[crit_85]]
// Advancement criteria 86: trigger=inventory_changed conditions=item:minecraft/item_86 requirements=[[crit_86]]
// Advancement criteria 87: trigger=inventory_changed conditions=item:minecraft/item_87 requirements=[[crit_87]]
// Advancement criteria 88: trigger=inventory_changed conditions=item:minecraft/item_88 requirements=[[crit_88]]
// Advancement criteria 89: trigger=inventory_changed conditions=item:minecraft/item_89 requirements=[[crit_89]]
// Advancement criteria 90: trigger=inventory_changed conditions=item:minecraft/item_90 requirements=[[crit_90]]
// Advancement criteria 91: trigger=inventory_changed conditions=item:minecraft/item_91 requirements=[[crit_91]]
// Advancement criteria 92: trigger=inventory_changed conditions=item:minecraft/item_92 requirements=[[crit_92]]
// Advancement criteria 93: trigger=inventory_changed conditions=item:minecraft/item_93 requirements=[[crit_93]]
// Advancement criteria 94: trigger=inventory_changed conditions=item:minecraft/item_94 requirements=[[crit_94]]
// Advancement criteria 95: trigger=inventory_changed conditions=item:minecraft/item_95 requirements=[[crit_95]]
// Advancement criteria 96: trigger=inventory_changed conditions=item:minecraft/item_96 requirements=[[crit_96]]
// Advancement criteria 97: trigger=inventory_changed conditions=item:minecraft/item_97 requirements=[[crit_97]]
// Advancement criteria 98: trigger=inventory_changed conditions=item:minecraft/item_98 requirements=[[crit_98]]
// Advancement criteria 99: trigger=inventory_changed conditions=item:minecraft/item_99 requirements=[[crit_99]]
// Advancement criteria 100: trigger=inventory_changed conditions=item:minecraft/item_100 requirements=[[crit_100]]
// Advancement criteria 101: trigger=inventory_changed conditions=item:minecraft/item_101 requirements=[[crit_101]]
// Advancement criteria 102: trigger=inventory_changed conditions=item:minecraft/item_102 requirements=[[crit_102]]
// Advancement criteria 103: trigger=inventory_changed conditions=item:minecraft/item_103 requirements=[[crit_103]]
// Advancement criteria 104: trigger=inventory_changed conditions=item:minecraft/item_104 requirements=[[crit_104]]
// Advancement criteria 105: trigger=inventory_changed conditions=item:minecraft/item_105 requirements=[[crit_105]]
// Advancement criteria 106: trigger=inventory_changed conditions=item:minecraft/item_106 requirements=[[crit_106]]
// Advancement criteria 107: trigger=inventory_changed conditions=item:minecraft/item_107 requirements=[[crit_107]]
// Advancement criteria 108: trigger=inventory_changed conditions=item:minecraft/item_108 requirements=[[crit_108]]
// Advancement criteria 109: trigger=inventory_changed conditions=item:minecraft/item_109 requirements=[[crit_109]]
// Advancement criteria 110: trigger=inventory_changed conditions=item:minecraft/item_110 requirements=[[crit_110]]
// Advancement criteria 111: trigger=inventory_changed conditions=item:minecraft/item_111 requirements=[[crit_111]]
// Advancement criteria 112: trigger=inventory_changed conditions=item:minecraft/item_112 requirements=[[crit_112]]
// Advancement criteria 113: trigger=inventory_changed conditions=item:minecraft/item_113 requirements=[[crit_113]]
// Advancement criteria 114: trigger=inventory_changed conditions=item:minecraft/item_114 requirements=[[crit_114]]
// Advancement criteria 115: trigger=inventory_changed conditions=item:minecraft/item_115 requirements=[[crit_115]]
// Advancement criteria 116: trigger=inventory_changed conditions=item:minecraft/item_116 requirements=[[crit_116]]
// Advancement criteria 117: trigger=inventory_changed conditions=item:minecraft/item_117 requirements=[[crit_117]]
// Advancement criteria 118: trigger=inventory_changed conditions=item:minecraft/item_118 requirements=[[crit_118]]
// Advancement criteria 119: trigger=inventory_changed conditions=item:minecraft/item_119 requirements=[[crit_119]]
// Advancement criteria 120: trigger=inventory_changed conditions=item:minecraft/item_120 requirements=[[crit_120]]
// Advancement criteria 121: trigger=inventory_changed conditions=item:minecraft/item_121 requirements=[[crit_121]]
// Advancement criteria 122: trigger=inventory_changed conditions=item:minecraft/item_122 requirements=[[crit_122]]
// Advancement criteria 123: trigger=inventory_changed conditions=item:minecraft/item_123 requirements=[[crit_123]]
// Advancement criteria 124: trigger=inventory_changed conditions=item:minecraft/item_124 requirements=[[crit_124]]
// Advancement criteria 125: trigger=inventory_changed conditions=item:minecraft/item_125 requirements=[[crit_125]]
// Advancement criteria 126: trigger=inventory_changed conditions=item:minecraft/item_126 requirements=[[crit_126]]
// Advancement criteria 127: trigger=inventory_changed conditions=item:minecraft/item_127 requirements=[[crit_127]]
// Advancement criteria 128: trigger=inventory_changed conditions=item:minecraft/item_128 requirements=[[crit_128]]
// Advancement criteria 129: trigger=inventory_changed conditions=item:minecraft/item_129 requirements=[[crit_129]]
// Advancement criteria 130: trigger=inventory_changed conditions=item:minecraft/item_130 requirements=[[crit_130]]
// Advancement criteria 131: trigger=inventory_changed conditions=item:minecraft/item_131 requirements=[[crit_131]]
// Advancement criteria 132: trigger=inventory_changed conditions=item:minecraft/item_132 requirements=[[crit_132]]
// Advancement criteria 133: trigger=inventory_changed conditions=item:minecraft/item_133 requirements=[[crit_133]]
// Advancement criteria 134: trigger=inventory_changed conditions=item:minecraft/item_134 requirements=[[crit_134]]
// Advancement criteria 135: trigger=inventory_changed conditions=item:minecraft/item_135 requirements=[[crit_135]]
// Advancement criteria 136: trigger=inventory_changed conditions=item:minecraft/item_136 requirements=[[crit_136]]
// Advancement criteria 137: trigger=inventory_changed conditions=item:minecraft/item_137 requirements=[[crit_137]]
// Advancement criteria 138: trigger=inventory_changed conditions=item:minecraft/item_138 requirements=[[crit_138]]
// Advancement criteria 139: trigger=inventory_changed conditions=item:minecraft/item_139 requirements=[[crit_139]]
// Advancement criteria 140: trigger=inventory_changed conditions=item:minecraft/item_140 requirements=[[crit_140]]
// Advancement criteria 141: trigger=inventory_changed conditions=item:minecraft/item_141 requirements=[[crit_141]]
// Advancement criteria 142: trigger=inventory_changed conditions=item:minecraft/item_142 requirements=[[crit_142]]
// Advancement criteria 143: trigger=inventory_changed conditions=item:minecraft/item_143 requirements=[[crit_143]]
// Advancement criteria 144: trigger=inventory_changed conditions=item:minecraft/item_144 requirements=[[crit_144]]
// Advancement criteria 145: trigger=inventory_changed conditions=item:minecraft/item_145 requirements=[[crit_145]]
// Advancement criteria 146: trigger=inventory_changed conditions=item:minecraft/item_146 requirements=[[crit_146]]
// Advancement criteria 147: trigger=inventory_changed conditions=item:minecraft/item_147 requirements=[[crit_147]]
// Advancement criteria 148: trigger=inventory_changed conditions=item:minecraft/item_148 requirements=[[crit_148]]
// Advancement criteria 149: trigger=inventory_changed conditions=item:minecraft/item_149 requirements=[[crit_149]]
// Advancement criteria 150: trigger=inventory_changed conditions=item:minecraft/item_150 requirements=[[crit_150]]
// Advancement criteria 151: trigger=inventory_changed conditions=item:minecraft/item_151 requirements=[[crit_151]]
// Advancement criteria 152: trigger=inventory_changed conditions=item:minecraft/item_152 requirements=[[crit_152]]
// Advancement criteria 153: trigger=inventory_changed conditions=item:minecraft/item_153 requirements=[[crit_153]]
// Advancement criteria 154: trigger=inventory_changed conditions=item:minecraft/item_154 requirements=[[crit_154]]
// Advancement criteria 155: trigger=inventory_changed conditions=item:minecraft/item_155 requirements=[[crit_155]]
// Advancement criteria 156: trigger=inventory_changed conditions=item:minecraft/item_156 requirements=[[crit_156]]
// Advancement criteria 157: trigger=inventory_changed conditions=item:minecraft/item_157 requirements=[[crit_157]]
// Advancement criteria 158: trigger=inventory_changed conditions=item:minecraft/item_158 requirements=[[crit_158]]
// Advancement criteria 159: trigger=inventory_changed conditions=item:minecraft/item_159 requirements=[[crit_159]]
// Advancement criteria 160: trigger=inventory_changed conditions=item:minecraft/item_160 requirements=[[crit_160]]
// Advancement criteria 161: trigger=inventory_changed conditions=item:minecraft/item_161 requirements=[[crit_161]]
// Advancement criteria 162: trigger=inventory_changed conditions=item:minecraft/item_162 requirements=[[crit_162]]
// Advancement criteria 163: trigger=inventory_changed conditions=item:minecraft/item_163 requirements=[[crit_163]]
// Advancement criteria 164: trigger=inventory_changed conditions=item:minecraft/item_164 requirements=[[crit_164]]
// Advancement criteria 165: trigger=inventory_changed conditions=item:minecraft/item_165 requirements=[[crit_165]]
// Advancement criteria 166: trigger=inventory_changed conditions=item:minecraft/item_166 requirements=[[crit_166]]
// Advancement criteria 167: trigger=inventory_changed conditions=item:minecraft/item_167 requirements=[[crit_167]]
// Advancement criteria 168: trigger=inventory_changed conditions=item:minecraft/item_168 requirements=[[crit_168]]
// Advancement criteria 169: trigger=inventory_changed conditions=item:minecraft/item_169 requirements=[[crit_169]]
// Advancement criteria 170: trigger=inventory_changed conditions=item:minecraft/item_170 requirements=[[crit_170]]
// Advancement criteria 171: trigger=inventory_changed conditions=item:minecraft/item_171 requirements=[[crit_171]]
// Advancement criteria 172: trigger=inventory_changed conditions=item:minecraft/item_172 requirements=[[crit_172]]
// Advancement criteria 173: trigger=inventory_changed conditions=item:minecraft/item_173 requirements=[[crit_173]]
// Advancement criteria 174: trigger=inventory_changed conditions=item:minecraft/item_174 requirements=[[crit_174]]
// Advancement criteria 175: trigger=inventory_changed conditions=item:minecraft/item_175 requirements=[[crit_175]]
// Advancement criteria 176: trigger=inventory_changed conditions=item:minecraft/item_176 requirements=[[crit_176]]
// Advancement criteria 177: trigger=inventory_changed conditions=item:minecraft/item_177 requirements=[[crit_177]]
// Advancement criteria 178: trigger=inventory_changed conditions=item:minecraft/item_178 requirements=[[crit_178]]
// Advancement criteria 179: trigger=inventory_changed conditions=item:minecraft/item_179 requirements=[[crit_179]]
// Advancement criteria 180: trigger=inventory_changed conditions=item:minecraft/item_180 requirements=[[crit_180]]
// Advancement criteria 181: trigger=inventory_changed conditions=item:minecraft/item_181 requirements=[[crit_181]]
// Advancement criteria 182: trigger=inventory_changed conditions=item:minecraft/item_182 requirements=[[crit_182]]
// Advancement criteria 183: trigger=inventory_changed conditions=item:minecraft/item_183 requirements=[[crit_183]]
// Advancement criteria 184: trigger=inventory_changed conditions=item:minecraft/item_184 requirements=[[crit_184]]
// Advancement criteria 185: trigger=inventory_changed conditions=item:minecraft/item_185 requirements=[[crit_185]]
// Advancement criteria 186: trigger=inventory_changed conditions=item:minecraft/item_186 requirements=[[crit_186]]
// Advancement criteria 187: trigger=inventory_changed conditions=item:minecraft/item_187 requirements=[[crit_187]]
// Advancement criteria 188: trigger=inventory_changed conditions=item:minecraft/item_188 requirements=[[crit_188]]
// Advancement criteria 189: trigger=inventory_changed conditions=item:minecraft/item_189 requirements=[[crit_189]]
// Advancement criteria 190: trigger=inventory_changed conditions=item:minecraft/item_190 requirements=[[crit_190]]
// Advancement criteria 191: trigger=inventory_changed conditions=item:minecraft/item_191 requirements=[[crit_191]]
// Advancement criteria 192: trigger=inventory_changed conditions=item:minecraft/item_192 requirements=[[crit_192]]
// Advancement criteria 193: trigger=inventory_changed conditions=item:minecraft/item_193 requirements=[[crit_193]]
// Advancement criteria 194: trigger=inventory_changed conditions=item:minecraft/item_194 requirements=[[crit_194]]
// Advancement criteria 195: trigger=inventory_changed conditions=item:minecraft/item_195 requirements=[[crit_195]]
// Advancement criteria 196: trigger=inventory_changed conditions=item:minecraft/item_196 requirements=[[crit_196]]
// Advancement criteria 197: trigger=inventory_changed conditions=item:minecraft/item_197 requirements=[[crit_197]]
// Advancement criteria 198: trigger=inventory_changed conditions=item:minecraft/item_198 requirements=[[crit_198]]
// Advancement criteria 199: trigger=inventory_changed conditions=item:minecraft/item_199 requirements=[[crit_199]]
// Advancement criteria 200: trigger=inventory_changed conditions=item:minecraft/item_200 requirements=[[crit_200]]
// Advancement criteria 201: trigger=inventory_changed conditions=item:minecraft/item_201 requirements=[[crit_201]]
// Advancement criteria 202: trigger=inventory_changed conditions=item:minecraft/item_202 requirements=[[crit_202]]
// Advancement criteria 203: trigger=inventory_changed conditions=item:minecraft/item_203 requirements=[[crit_203]]
// Advancement criteria 204: trigger=inventory_changed conditions=item:minecraft/item_204 requirements=[[crit_204]]
// Advancement criteria 205: trigger=inventory_changed conditions=item:minecraft/item_205 requirements=[[crit_205]]
// Advancement criteria 206: trigger=inventory_changed conditions=item:minecraft/item_206 requirements=[[crit_206]]
// Advancement criteria 207: trigger=inventory_changed conditions=item:minecraft/item_207 requirements=[[crit_207]]
// Advancement criteria 208: trigger=inventory_changed conditions=item:minecraft/item_208 requirements=[[crit_208]]
// Advancement criteria 209: trigger=inventory_changed conditions=item:minecraft/item_209 requirements=[[crit_209]]
// Advancement criteria 210: trigger=inventory_changed conditions=item:minecraft/item_210 requirements=[[crit_210]]
// Advancement criteria 211: trigger=inventory_changed conditions=item:minecraft/item_211 requirements=[[crit_211]]
// Advancement criteria 212: trigger=inventory_changed conditions=item:minecraft/item_212 requirements=[[crit_212]]
// Advancement criteria 213: trigger=inventory_changed conditions=item:minecraft/item_213 requirements=[[crit_213]]
// Advancement criteria 214: trigger=inventory_changed conditions=item:minecraft/item_214 requirements=[[crit_214]]
// Advancement criteria 215: trigger=inventory_changed conditions=item:minecraft/item_215 requirements=[[crit_215]]
// Advancement criteria 216: trigger=inventory_changed conditions=item:minecraft/item_216 requirements=[[crit_216]]
// Advancement criteria 217: trigger=inventory_changed conditions=item:minecraft/item_217 requirements=[[crit_217]]
// Advancement criteria 218: trigger=inventory_changed conditions=item:minecraft/item_218 requirements=[[crit_218]]
// Advancement criteria 219: trigger=inventory_changed conditions=item:minecraft/item_219 requirements=[[crit_219]]
// Advancement criteria 220: trigger=inventory_changed conditions=item:minecraft/item_220 requirements=[[crit_220]]
// Advancement criteria 221: trigger=inventory_changed conditions=item:minecraft/item_221 requirements=[[crit_221]]
// Advancement criteria 222: trigger=inventory_changed conditions=item:minecraft/item_222 requirements=[[crit_222]]
// Advancement criteria 223: trigger=inventory_changed conditions=item:minecraft/item_223 requirements=[[crit_223]]
// Advancement criteria 224: trigger=inventory_changed conditions=item:minecraft/item_224 requirements=[[crit_224]]
// Advancement criteria 225: trigger=inventory_changed conditions=item:minecraft/item_225 requirements=[[crit_225]]
// Advancement criteria 226: trigger=inventory_changed conditions=item:minecraft/item_226 requirements=[[crit_226]]
// Advancement criteria 227: trigger=inventory_changed conditions=item:minecraft/item_227 requirements=[[crit_227]]
// Advancement criteria 228: trigger=inventory_changed conditions=item:minecraft/item_228 requirements=[[crit_228]]
// Advancement criteria 229: trigger=inventory_changed conditions=item:minecraft/item_229 requirements=[[crit_229]]
// Advancement criteria 230: trigger=inventory_changed conditions=item:minecraft/item_230 requirements=[[crit_230]]
// Advancement criteria 231: trigger=inventory_changed conditions=item:minecraft/item_231 requirements=[[crit_231]]
// Advancement criteria 232: trigger=inventory_changed conditions=item:minecraft/item_232 requirements=[[crit_232]]
// Advancement criteria 233: trigger=inventory_changed conditions=item:minecraft/item_233 requirements=[[crit_233]]
// Advancement criteria 234: trigger=inventory_changed conditions=item:minecraft/item_234 requirements=[[crit_234]]
// Advancement criteria 235: trigger=inventory_changed conditions=item:minecraft/item_235 requirements=[[crit_235]]
// Advancement criteria 236: trigger=inventory_changed conditions=item:minecraft/item_236 requirements=[[crit_236]]
// Advancement criteria 237: trigger=inventory_changed conditions=item:minecraft/item_237 requirements=[[crit_237]]
// Advancement criteria 238: trigger=inventory_changed conditions=item:minecraft/item_238 requirements=[[crit_238]]
// Advancement criteria 239: trigger=inventory_changed conditions=item:minecraft/item_239 requirements=[[crit_239]]
// Advancement criteria 240: trigger=inventory_changed conditions=item:minecraft/item_240 requirements=[[crit_240]]
// Advancement criteria 241: trigger=inventory_changed conditions=item:minecraft/item_241 requirements=[[crit_241]]
// Advancement criteria 242: trigger=inventory_changed conditions=item:minecraft/item_242 requirements=[[crit_242]]
// Advancement criteria 243: trigger=inventory_changed conditions=item:minecraft/item_243 requirements=[[crit_243]]
// Advancement criteria 244: trigger=inventory_changed conditions=item:minecraft/item_244 requirements=[[crit_244]]
// Advancement criteria 245: trigger=inventory_changed conditions=item:minecraft/item_245 requirements=[[crit_245]]
// Advancement criteria 246: trigger=inventory_changed conditions=item:minecraft/item_246 requirements=[[crit_246]]
// Advancement criteria 247: trigger=inventory_changed conditions=item:minecraft/item_247 requirements=[[crit_247]]
// Advancement criteria 248: trigger=inventory_changed conditions=item:minecraft/item_248 requirements=[[crit_248]]
// Advancement criteria 249: trigger=inventory_changed conditions=item:minecraft/item_249 requirements=[[crit_249]]
// Advancement criteria 250: trigger=inventory_changed conditions=item:minecraft/item_250 requirements=[[crit_250]]
// Advancement criteria 251: trigger=inventory_changed conditions=item:minecraft/item_251 requirements=[[crit_251]]
// Advancement criteria 252: trigger=inventory_changed conditions=item:minecraft/item_252 requirements=[[crit_252]]
// Advancement criteria 253: trigger=inventory_changed conditions=item:minecraft/item_253 requirements=[[crit_253]]
// Advancement criteria 254: trigger=inventory_changed conditions=item:minecraft/item_254 requirements=[[crit_254]]
// Advancement criteria 255: trigger=inventory_changed conditions=item:minecraft/item_255 requirements=[[crit_255]]
// Advancement criteria 256: trigger=inventory_changed conditions=item:minecraft/item_256 requirements=[[crit_256]]
// Advancement criteria 257: trigger=inventory_changed conditions=item:minecraft/item_257 requirements=[[crit_257]]
// Advancement criteria 258: trigger=inventory_changed conditions=item:minecraft/item_258 requirements=[[crit_258]]
// Advancement criteria 259: trigger=inventory_changed conditions=item:minecraft/item_259 requirements=[[crit_259]]
// Advancement criteria 260: trigger=inventory_changed conditions=item:minecraft/item_260 requirements=[[crit_260]]
// Advancement criteria 261: trigger=inventory_changed conditions=item:minecraft/item_261 requirements=[[crit_261]]
// Advancement criteria 262: trigger=inventory_changed conditions=item:minecraft/item_262 requirements=[[crit_262]]
// Advancement criteria 263: trigger=inventory_changed conditions=item:minecraft/item_263 requirements=[[crit_263]]
// Advancement criteria 264: trigger=inventory_changed conditions=item:minecraft/item_264 requirements=[[crit_264]]
// Advancement criteria 265: trigger=inventory_changed conditions=item:minecraft/item_265 requirements=[[crit_265]]
// Advancement criteria 266: trigger=inventory_changed conditions=item:minecraft/item_266 requirements=[[crit_266]]
// Advancement criteria 267: trigger=inventory_changed conditions=item:minecraft/item_267 requirements=[[crit_267]]
// Advancement criteria 268: trigger=inventory_changed conditions=item:minecraft/item_268 requirements=[[crit_268]]
// Advancement criteria 269: trigger=inventory_changed conditions=item:minecraft/item_269 requirements=[[crit_269]]
// Advancement criteria 270: trigger=inventory_changed conditions=item:minecraft/item_270 requirements=[[crit_270]]
// Advancement criteria 271: trigger=inventory_changed conditions=item:minecraft/item_271 requirements=[[crit_271]]
// Advancement criteria 272: trigger=inventory_changed conditions=item:minecraft/item_272 requirements=[[crit_272]]
// Advancement criteria 273: trigger=inventory_changed conditions=item:minecraft/item_273 requirements=[[crit_273]]
// Advancement criteria 274: trigger=inventory_changed conditions=item:minecraft/item_274 requirements=[[crit_274]]
// Advancement criteria 275: trigger=inventory_changed conditions=item:minecraft/item_275 requirements=[[crit_275]]
// Advancement criteria 276: trigger=inventory_changed conditions=item:minecraft/item_276 requirements=[[crit_276]]
// Advancement criteria 277: trigger=inventory_changed conditions=item:minecraft/item_277 requirements=[[crit_277]]
// Advancement criteria 278: trigger=inventory_changed conditions=item:minecraft/item_278 requirements=[[crit_278]]
// Advancement criteria 279: trigger=inventory_changed conditions=item:minecraft/item_279 requirements=[[crit_279]]
// Advancement criteria 280: trigger=inventory_changed conditions=item:minecraft/item_280 requirements=[[crit_280]]
// Advancement criteria 281: trigger=inventory_changed conditions=item:minecraft/item_281 requirements=[[crit_281]]
// Advancement criteria 282: trigger=inventory_changed conditions=item:minecraft/item_282 requirements=[[crit_282]]
// Advancement criteria 283: trigger=inventory_changed conditions=item:minecraft/item_283 requirements=[[crit_283]]
// Advancement criteria 284: trigger=inventory_changed conditions=item:minecraft/item_284 requirements=[[crit_284]]
// Advancement criteria 285: trigger=inventory_changed conditions=item:minecraft/item_285 requirements=[[crit_285]]
// Advancement criteria 286: trigger=inventory_changed conditions=item:minecraft/item_286 requirements=[[crit_286]]
// Advancement criteria 287: trigger=inventory_changed conditions=item:minecraft/item_287 requirements=[[crit_287]]
// Advancement criteria 288: trigger=inventory_changed conditions=item:minecraft/item_288 requirements=[[crit_288]]
// Advancement criteria 289: trigger=inventory_changed conditions=item:minecraft/item_289 requirements=[[crit_289]]
// Advancement criteria 290: trigger=inventory_changed conditions=item:minecraft/item_290 requirements=[[crit_290]]
// Advancement criteria 291: trigger=inventory_changed conditions=item:minecraft/item_291 requirements=[[crit_291]]
// Advancement criteria 292: trigger=inventory_changed conditions=item:minecraft/item_292 requirements=[[crit_292]]
// Advancement criteria 293: trigger=inventory_changed conditions=item:minecraft/item_293 requirements=[[crit_293]]
// Advancement criteria 294: trigger=inventory_changed conditions=item:minecraft/item_294 requirements=[[crit_294]]
// Advancement criteria 295: trigger=inventory_changed conditions=item:minecraft/item_295 requirements=[[crit_295]]
// Advancement criteria 296: trigger=inventory_changed conditions=item:minecraft/item_296 requirements=[[crit_296]]
// Advancement criteria 297: trigger=inventory_changed conditions=item:minecraft/item_297 requirements=[[crit_297]]
// Advancement criteria 298: trigger=inventory_changed conditions=item:minecraft/item_298 requirements=[[crit_298]]
// Advancement criteria 299: trigger=inventory_changed conditions=item:minecraft/item_299 requirements=[[crit_299]]
})();
