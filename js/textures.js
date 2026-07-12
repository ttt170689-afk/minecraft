/**
 * Procedural Minecraft-like block textures (16x16 pixel art)
 * No external images needed — everything is generated on canvas.
 */

const TEXTURE_SIZE = 16;

/** Block type definitions */
const BLOCKS = {
  air:      { id: 0,  name: 'Воздух',        solid: false, transparent: true },
  grass:    { id: 1,  name: 'Дёрн',          solid: true,  transparent: false, hardness: 0.6 },
  dirt:     { id: 2,  name: 'Земля',         solid: true,  transparent: false, hardness: 0.5 },
  stone:    { id: 3,  name: 'Камень',        solid: true,  transparent: false, hardness: 1.5 },
  wood:     { id: 4,  name: 'Дуб',           solid: true,  transparent: false, hardness: 2.0 },
  leaves:   { id: 5,  name: 'Листва',        solid: true,  transparent: true,  hardness: 0.2 },
  sand:     { id: 6,  name: 'Песок',         solid: true,  transparent: false, hardness: 0.5 },
  water:    { id: 7,  name: 'Вода',          solid: false, transparent: true,  hardness: 0 },
  cobble:   { id: 8,  name: 'Булыжник',      solid: true,  transparent: false, hardness: 2.0 },
  planks:   { id: 9,  name: 'Доски',         solid: true,  transparent: false, hardness: 2.0 },
  glass:    { id: 10, name: 'Стекло',        solid: true,  transparent: true,  hardness: 0.3 },
  brick:    { id: 11, name: 'Кирпич',        solid: true,  transparent: false, hardness: 2.0 },
  coal:     { id: 12, name: 'Угольная руда', solid: true,  transparent: false, hardness: 3.0 },
  iron:     { id: 13, name: 'Железная руда', solid: true,  transparent: false, hardness: 3.0 },
  gold:     { id: 14, name: 'Золотая руда',  solid: true,  transparent: false, hardness: 3.0 },
  diamond:  { id: 15, name: 'Алмазная руда', solid: true,  transparent: false, hardness: 3.0 },
  bedrock:  { id: 16, name: 'Бедрок',        solid: true,  transparent: false, hardness: Infinity },
  snow:     { id: 17, name: 'Снег',          solid: true,  transparent: false, hardness: 0.2 },
  gravel:   { id: 18, name: 'Гравий',        solid: true,  transparent: false, hardness: 0.6 },
  clay:     { id: 19, name: 'Глина',         solid: true,  transparent: false, hardness: 0.6 },
  // Doors & redstone
  door:     { id: 20, name: 'Дверь',         solid: true,  transparent: true,  hardness: 3.0, interact: true },
  doorOpen: { id: 21, name: 'Дверь (откр.)', solid: false, transparent: true,  hardness: 3.0, interact: true },
  redstone:{ id: 22, name: 'Редстоун',      solid: false, transparent: true,  hardness: 0,   redstone: true },
  lever:    { id: 23, name: 'Рычаг',         solid: false, transparent: true,  hardness: 0.5, interact: true, redstone: true },
  leverOn:  { id: 24, name: 'Рычаг (вкл)',   solid: false, transparent: true,  hardness: 0.5, interact: true, redstone: true },
  lamp:     { id: 25, name: 'Лампа',         solid: true,  transparent: false, hardness: 0.3 },
  lampOn:   { id: 26, name: 'Лампа (вкл)',   solid: true,  transparent: false, hardness: 0.3, light: true },
  tnt:      { id: 27, name: 'TNT',           solid: true,  transparent: false, hardness: 0 },
  crafting_table: { id: 28, name: 'Верстак', solid: true, transparent: false, hardness: 2.5, interact: true },
  furnace: { id: 29, name: 'Печь', solid: true, transparent: false, hardness: 3.5, interact: true },
  obsidian: { id: 30, name: 'Обсидиан', solid: true, transparent: false, hardness: 50 },
  netherrack: { id: 31, name: 'Незерак', solid: true, transparent: false, hardness: 0.4 },
  soul_sand: { id: 32, name: 'Песок душ', solid: true, transparent: false, hardness: 0.5 },
  glowstone: { id: 33, name: 'Светокамень', solid: true, transparent: false, hardness: 0.3, light: true },
  end_stone: { id: 34, name: 'Эндерняк', solid: true, transparent: false, hardness: 3 },
  nether_portal: { id: 35, name: 'Портал Незера', solid: false, transparent: true, hardness: Infinity },
  end_portal: { id: 36, name: 'Портал Края', solid: false, transparent: true, hardness: Infinity },
  purpur: { id: 37, name: 'Пурпур', solid: true, transparent: false, hardness: 1.5 },
  magma: { id: 38, name: 'Магма', solid: true, transparent: false, hardness: 0.5, light: true },
  // Items as "blocks" for hotbar icons
};

const ID_TO_KEY = {};
for (const [k, v] of Object.entries(BLOCKS)) ID_TO_KEY[v.id] = k;

/** Items (weapons, food, materials) — not solid world cubes */
const ITEMS = {
  // Swords
  sword_wood:    { name: 'Деревянный меч', type: 'weapon', damage: 4, cooldown: 0.55, icon: 'sword_wood' },
  sword_stone:   { name: 'Каменный меч',   type: 'weapon', damage: 5, cooldown: 0.5, icon: 'sword_stone' },
  sword_iron:    { name: 'Железный меч',   type: 'weapon', damage: 7, cooldown: 0.45, icon: 'sword_iron' },
  sword_gold:    { name: 'Золотой меч',   type: 'weapon', damage: 5, cooldown: 0.35, icon: 'sword_gold' },
  sword_diamond: { name: 'Алмазный меч',  type: 'weapon', damage: 10, cooldown: 0.4, icon: 'sword_diamond' },
  sword_nether:  { name: 'Незеритовый меч', type: 'weapon', damage: 12, cooldown: 0.38, icon: 'sword_nether' },
  // Axes
  axe_wood:      { name: 'Деревянный топор', type: 'weapon', damage: 5, cooldown: 0.7, mineBoost: 1.5, icon: 'axe_wood' },
  axe_iron:      { name: 'Железный топор',   type: 'weapon', damage: 8, cooldown: 0.65, mineBoost: 2.2, icon: 'axe_iron' },
  axe_diamond:   { name: 'Алмазный топор',  type: 'weapon', damage: 9, cooldown: 0.6, mineBoost: 3, icon: 'axe_diamond' },
  // Picks / shovel / hoe
  pick_wood:     { name: 'Деревянная кирка', type: 'tool', mineBoost: 1.3, icon: 'pick_wood' },
  pick_stone:    { name: 'Каменная кирка',   type: 'tool', mineBoost: 1.8, icon: 'pick_stone' },
  pick_iron:     { name: 'Железная кирка',   type: 'tool', mineBoost: 2.5, icon: 'pick_iron' },
  pick_gold:     { name: 'Золотая кирка',    type: 'tool', mineBoost: 3.5, icon: 'pick_gold' },
  pick_diamond:  { name: 'Алмазная кирка',  type: 'tool', mineBoost: 4, icon: 'pick_diamond' },
  pick_nether:   { name: 'Незеритовая кирка', type: 'tool', mineBoost: 5, icon: 'pick_nether' },
  shovel_iron:   { name: 'Железная лопата', type: 'tool', mineBoost: 2, icon: 'shovel_iron' },
  hoe_iron:      { name: 'Железная мотыга', type: 'tool', mineBoost: 1.2, icon: 'hoe_iron' },
  // Combat misc
  bow:           { name: 'Лук', type: 'bow', damage: 6, cooldown: 0.7, icon: 'bow' },
  crossbow:      { name: 'Арбалет', type: 'bow', damage: 9, cooldown: 1.0, icon: 'crossbow' },
  arrow:         { name: 'Стрела', type: 'misc', icon: 'arrow' },
  shield:        { name: 'Щит', type: 'misc', icon: 'shield' },
  trident:       { name: 'Трезубец', type: 'weapon', damage: 9, cooldown: 0.5, icon: 'trident' },
  torch_item:    { name: 'Факел', type: 'misc', icon: 'torch_item' },
  sugar_cane:    { name: 'Тростник', type: 'misc', icon: 'stick' },
  ladder:        { name: 'Лестница', type: 'misc', icon: 'ladder' },
  glowstone_dust:{ name: 'Светопыль', type: 'misc', icon: 'glowstone_dust' },
  // Food
  apple:         { name: 'Яблоко', type: 'food', heal: 4, icon: 'apple' },
  golden_apple:  { name: 'Золотое яблоко', type: 'food', heal: 10, icon: 'golden_apple' },
  bread:         { name: 'Хлеб', type: 'food', heal: 5, icon: 'bread' },
  steak:         { name: 'Стейк', type: 'food', heal: 8, icon: 'steak' },
  beef:          { name: 'Сырая говядина', type: 'food', heal: 3, icon: 'beef' },
  pork:          { name: 'Свинина', type: 'food', heal: 8, icon: 'pork' },
  mutton:        { name: 'Баранина', type: 'food', heal: 6, icon: 'mutton' },
  chicken_raw:   { name: 'Курица', type: 'food', heal: 4, icon: 'chicken_raw' },
  carrot:        { name: 'Морковь', type: 'food', heal: 3, icon: 'carrot' },
  potato:        { name: 'Картофель', type: 'food', heal: 2, icon: 'potato' },
  baked_potato:  { name: 'Печёный картофель', type: 'food', heal: 5, icon: 'baked_potato' },
  melon_slice:   { name: 'Ломтик арбуза', type: 'food', heal: 2, icon: 'melon_slice' },
  cookie:        { name: 'Печенье', type: 'food', heal: 2, icon: 'cookie' },
  cake:          { name: 'Торт', type: 'food', heal: 6, icon: 'cake' },
  pumpkin_pie:   { name: 'Тыквенный пирог', type: 'food', heal: 8, icon: 'pumpkin_pie' },
  fish:          { name: 'Сырая рыба', type: 'food', heal: 2, icon: 'fish' },
  cooked_fish:   { name: 'Жареная рыба', type: 'food', heal: 5, icon: 'cooked_fish' },
  rotten_flesh:  { name: 'Гнилая плоть', type: 'food', heal: 2, icon: 'rotten_flesh' },
  spider_eye:    { name: 'Паучий глаз', type: 'food', heal: 2, icon: 'spider_eye' },
  // Materials / drops
  stick:         { name: 'Палка', type: 'misc', icon: 'stick' },
  coal_item:     { name: 'Уголь', type: 'misc', icon: 'coal_item' },
  iron_ingot:    { name: 'Железный слиток', type: 'misc', icon: 'iron_ingot' },
  gold_ingot:    { name: 'Золотой слиток', type: 'misc', icon: 'gold_ingot' },
  diamond_gem:   { name: 'Алмаз', type: 'misc', icon: 'diamond_gem' },
  emerald:       { name: 'Изумруд', type: 'misc', icon: 'emerald' },
  redstone_dust: { name: 'Редстоун (пыль)', type: 'misc', icon: 'redstone_dust' },
  lapis:         { name: 'Лазурит', type: 'misc', icon: 'lapis' },
  quartz:        { name: 'Кварц', type: 'misc', icon: 'quartz' },
  netherite:     { name: 'Незеритовый слиток', type: 'misc', icon: 'netherite' },
  leather:       { name: 'Кожа', type: 'misc', icon: 'leather' },
  feather:       { name: 'Перо', type: 'misc', icon: 'feather' },
  string_item:   { name: 'Нить', type: 'misc', icon: 'string_item' },
  bone:          { name: 'Кость', type: 'misc', icon: 'bone' },
  gunpowder:     { name: 'Порох', type: 'misc', icon: 'gunpowder' },
  ender_pearl:   { name: 'Эндер-жемчуг', type: 'misc', icon: 'ender_pearl' },
  blaze_rod:     { name: 'Стержень ифрита', type: 'misc', icon: 'blaze_rod' },
  slimeball:     { name: 'Сгусток слизи', type: 'misc', icon: 'slimeball' },
  paper:         { name: 'Бумага', type: 'misc', icon: 'paper' },
  book:          { name: 'Книга', type: 'misc', icon: 'book' },
  compass:       { name: 'Компас', type: 'misc', icon: 'compass' },
  clock:         { name: 'Часы', type: 'misc', icon: 'clock' },
  bucket:        { name: 'Ведро', type: 'misc', icon: 'bucket' },
  water_bucket:  { name: 'Ведро воды', type: 'misc', icon: 'water_bucket' },
  lava_bucket:   { name: 'Ведро лавы', type: 'misc', icon: 'lava_bucket' },
  flint_steel:   { name: 'Огниво', type: 'misc', icon: 'flint_steel' },
  shears:        { name: 'Ножницы', type: 'tool', mineBoost: 1.5, icon: 'shears' },
  fishing_rod:   { name: 'Удочка', type: 'misc', icon: 'fishing_rod' },
  name_tag:      { name: 'Бирка', type: 'misc', icon: 'name_tag' },
  saddle:        { name: 'Седло', type: 'misc', icon: 'saddle' },
  // Armor (cosmetic/hotbar for now)
  helmet_iron:   { name: 'Железный шлем', type: 'armor', icon: 'helmet_iron' },
  chest_iron:    { name: 'Железный нагрудник', type: 'armor', icon: 'chest_iron' },
  legs_iron:     { name: 'Железные поножи', type: 'armor', icon: 'legs_iron' },
  boots_iron:    { name: 'Железные ботинки', type: 'armor', icon: 'boots_iron' },
  helmet_diamond:{ name: 'Алмазный шлем', type: 'armor', icon: 'helmet_diamond' },
  chest_diamond: { name: 'Алмазный нагрудник', type: 'armor', icon: 'chest_diamond' },
  // Potions
  potion_heal:   { name: 'Зелье лечения', type: 'food', heal: 12, icon: 'potion_heal' },
  potion_speed:  { name: 'Зелье скорости', type: 'food', heal: 2, icon: 'potion_speed' },
  // Wool colors as items for inventory placement via blocks below
  wool_white:    { name: 'Белая шерсть', type: 'misc', icon: 'wool_white' },
};

function mulberry32(a) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function clamp(v, a = 0, b = 255) {
  return Math.max(a, Math.min(b, v | 0));
}

function setPx(data, x, y, r, g, b, a = 255) {
  if (x < 0 || y < 0 || x >= TEXTURE_SIZE || y >= TEXTURE_SIZE) return;
  const i = (y * TEXTURE_SIZE + x) * 4;
  data[i] = r; data[i + 1] = g; data[i + 2] = b; data[i + 3] = a;
}

function fillNoise(data, baseR, baseG, baseB, variance, seed, alpha = 255) {
  const rng = mulberry32(seed);
  for (let y = 0; y < TEXTURE_SIZE; y++) {
    for (let x = 0; x < TEXTURE_SIZE; x++) {
      const n = (rng() - 0.5) * 2 * variance;
      setPx(data, x, y, clamp(baseR + n), clamp(baseG + n), clamp(baseB + n), alpha);
    }
  }
}

function drawGrassTop(data) {
  fillNoise(data, 90, 160, 50, 25, 42);
  const rng = mulberry32(99);
  for (let i = 0; i < 20; i++) {
    const x = (rng() * 16) | 0, y = (rng() * 16) | 0;
    setPx(data, x, y, 70, 130, 40);
  }
}

function drawGrassSide(data) {
  fillNoise(data, 134, 96, 67, 18, 7);
  for (let x = 0; x < TEXTURE_SIZE; x++) {
    const h = 2 + ((x * 3 + 5) % 3);
    for (let y = 0; y < h; y++) {
      const n = ((x + y) % 3) * 8;
      setPx(data, x, y, 80 + n, 150 + n, 45);
    }
  }
}

function drawDirt(data) {
  fillNoise(data, 134, 96, 67, 20, 11);
  const rng = mulberry32(55);
  for (let i = 0; i < 12; i++) setPx(data, (rng()*16)|0, (rng()*16)|0, 100, 70, 45);
}

function drawStone(data) {
  fillNoise(data, 125, 125, 125, 18, 33);
  const rng = mulberry32(77);
  for (let i = 0; i < 8; i++) {
    const x = (rng()*14)|0, y = (rng()*14)|0;
    setPx(data, x, y, 100, 100, 100);
    setPx(data, x+1, y, 140, 140, 140);
  }
}

function drawWoodSide(data) {
  for (let y = 0; y < TEXTURE_SIZE; y++) {
    for (let x = 0; x < TEXTURE_SIZE; x++) {
      const ring = Math.sin(x * 0.9) * 12;
      const n = ((x * 7 + y * 3) % 5) * 4;
      setPx(data, x, y, clamp(100 + ring + n), clamp(75 + ring), clamp(40 + ring * 0.5));
    }
  }
  for (let y = 0; y < TEXTURE_SIZE; y++) {
    setPx(data, 3, y, 70, 50, 25);
    setPx(data, 10, y, 65, 48, 22);
  }
}

function drawWoodTop(data) {
  const cx = 7.5, cy = 7.5;
  for (let y = 0; y < TEXTURE_SIZE; y++) {
    for (let x = 0; x < TEXTURE_SIZE; x++) {
      const d = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
      const ring = Math.sin(d * 1.4) * 20;
      setPx(data, x, y, clamp(160 + ring), clamp(125 + ring), clamp(70 + ring * 0.5));
    }
  }
  for (let i = 0; i < TEXTURE_SIZE; i++) {
    setPx(data, i, 0, 90, 65, 35);
    setPx(data, i, 15, 90, 65, 35);
    setPx(data, 0, i, 90, 65, 35);
    setPx(data, 15, i, 90, 65, 35);
  }
}

function drawLeaves(data) {
  fillNoise(data, 50, 120, 40, 30, 88, 200);
  const rng = mulberry32(120);
  for (let i = 0; i < 40; i++) {
    const x = (rng()*16)|0, y = (rng()*16)|0;
    if (rng() > 0.4) setPx(data, x, y, 40, 100, 30, 180);
    else setPx(data, x, y, 0, 0, 0, 0);
  }
}

function drawSand(data) {
  fillNoise(data, 220, 210, 150, 15, 66);
  const rng = mulberry32(44);
  for (let i = 0; i < 15; i++) setPx(data, (rng()*16)|0, (rng()*16)|0, 200, 190, 130);
}

function drawWater(data) {
  for (let y = 0; y < TEXTURE_SIZE; y++) {
    for (let x = 0; x < TEXTURE_SIZE; x++) {
      const wave = Math.sin(x * 0.8 + y * 0.5) * 15;
      setPx(data, x, y, clamp(40 + wave), clamp(90 + wave), clamp(200 + wave * 0.5), 160);
    }
  }
}

function drawCobble(data) {
  fillNoise(data, 110, 110, 110, 10, 200);
  const stones = [[1,1,6,5],[8,1,6,4],[2,7,5,5],[9,6,5,5],[1,12,7,3],[9,12,5,3]];
  const rng = mulberry32(201);
  for (const [sx, sy, sw, sh] of stones) {
    const shade = 90 + (rng() * 40) | 0;
    for (let y = sy; y < sy + sh && y < 16; y++) {
      for (let x = sx; x < sx + sw && x < 16; x++) {
        const edge = x === sx || y === sy || x === sx+sw-1 || y === sy+sh-1;
        setPx(data, x, y, edge ? shade - 25 : shade, edge ? shade - 25 : shade, edge ? shade - 20 : shade);
      }
    }
  }
}

function drawPlanks(data) {
  for (let y = 0; y < TEXTURE_SIZE; y++) {
    for (let x = 0; x < TEXTURE_SIZE; x++) {
      const board = Math.floor(y / 4);
      const n = ((x + board * 3) % 4) * 5;
      const base = board % 2 === 0 ? 180 : 165;
      setPx(data, x, y, clamp(base + n), clamp(base * 0.75 + n), clamp(base * 0.4));
      if (y % 4 === 0) setPx(data, x, y, 100, 70, 35);
      if (x === 7 || x === 8) setPx(data, x, y, 120, 85, 45);
    }
  }
}

function drawGlass(data) {
  for (let y = 0; y < TEXTURE_SIZE; y++) {
    for (let x = 0; x < TEXTURE_SIZE; x++) {
      const border = x === 0 || y === 0 || x === 15 || y === 15;
      if (border) setPx(data, x, y, 200, 220, 230, 200);
      else setPx(data, x, y, 180, 210, 230, 40);
    }
  }
  setPx(data, 3, 3, 255, 255, 255, 180);
  setPx(data, 4, 3, 255, 255, 255, 120);
  setPx(data, 3, 4, 255, 255, 255, 120);
}

function drawBrick(data) {
  fillNoise(data, 150, 80, 60, 8, 300);
  for (let y = 0; y < TEXTURE_SIZE; y++) {
    for (let x = 0; x < TEXTURE_SIZE; x++) {
      const row = Math.floor(y / 4);
      const offset = row % 2 === 0 ? 0 : 4;
      if (y % 4 === 0 || (x + offset) % 8 === 0) setPx(data, x, y, 180, 175, 165);
      else {
        const n = ((x + y) % 3) * 6;
        setPx(data, x, y, clamp(155 + n), clamp(75 + n * 0.5), clamp(55));
      }
    }
  }
}

function drawOre(data, oreR, oreG, oreB, seed) {
  drawStone(data);
  const rng = mulberry32(seed);
  for (let i = 0; i < 18; i++) {
    const x = 1 + (rng() * 14) | 0;
    const y = 1 + (rng() * 14) | 0;
    setPx(data, x, y, oreR, oreG, oreB);
    if (rng() > 0.5) setPx(data, x + 1, y, oreR, oreG, oreB);
    if (rng() > 0.5) setPx(data, x, y + 1, oreR, oreG, oreB);
  }
}

function drawBedrock(data) {
  fillNoise(data, 50, 50, 50, 25, 999);
  const rng = mulberry32(998);
  for (let i = 0; i < 30; i++) setPx(data, (rng()*16)|0, (rng()*16)|0, 20 + (rng()*40)|0, 20, 20);
}

function drawSnow(data) { fillNoise(data, 240, 245, 250, 10, 50); }

function drawGravel(data) {
  fillNoise(data, 130, 125, 120, 20, 150);
  const rng = mulberry32(151);
  for (let i = 0; i < 25; i++) {
    const g = 90 + (rng() * 60) | 0;
    setPx(data, (rng()*16)|0, (rng()*16)|0, g, g - 5, g - 10);
  }
}

function drawClay(data) { fillNoise(data, 158, 164, 176, 12, 180); }

function drawDoor(data, open) {
  // wooden door panel
  fillNoise(data, 120, 85, 45, 10, 501);
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      if (x === 0 || x === 15 || y === 0 || y === 15) setPx(data, x, y, 80, 55, 25);
      if (y === 7 || y === 8) setPx(data, x, y, 90, 60, 30);
    }
  }
  // window
  for (let y = 2; y <= 5; y++) for (let x = 4; x <= 11; x++) setPx(data, x, y, 140, 190, 220, 200);
  // handle
  const hx = open ? 3 : 12;
  setPx(data, hx, 9, 200, 180, 50);
  setPx(data, hx, 10, 200, 180, 50);
  if (open) {
    // dim to show open state
    for (let y = 0; y < 16; y++) for (let x = 8; x < 16; x++) {
      const i = (y * 16 + x) * 4;
      data[i + 3] = Math.min(data[i + 3], 40);
    }
  }
}

function drawRedstone(data) {
  for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) setPx(data, x, y, 0, 0, 0, 0);
  // cross dust
  for (let i = 2; i < 14; i++) {
    setPx(data, i, 7, 180, 20, 20, 230);
    setPx(data, i, 8, 200, 30, 30, 230);
    setPx(data, 7, i, 180, 20, 20, 230);
    setPx(data, 8, i, 200, 30, 30, 230);
  }
  // glow dots
  setPx(data, 7, 7, 255, 80, 80, 255);
  setPx(data, 8, 8, 255, 60, 60, 255);
}

function drawLever(data, on) {
  fillNoise(data, 100, 100, 100, 8, 600);
  // base plate
  for (let y = 10; y < 15; y++) for (let x = 4; x < 12; x++) setPx(data, x, y, 90, 90, 90);
  // stick
  const col = on ? [200, 50, 50] : [140, 100, 60];
  for (let y = on ? 2 : 4; y < 11; y++) {
    setPx(data, on ? 10 : 7, y, col[0], col[1], col[2]);
    setPx(data, on ? 11 : 8, y, col[0] - 20, col[1], col[2]);
  }
}

function drawLamp(data, on) {
  if (on) {
    fillNoise(data, 240, 220, 100, 20, 701);
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      if ((x + y) % 5 === 0) setPx(data, x, y, 255, 255, 180);
    }
  } else {
    fillNoise(data, 90, 80, 60, 10, 700);
  }
  // border
  for (let i = 0; i < 16; i++) {
    setPx(data, i, 0, 50, 50, 50);
    setPx(data, i, 15, 50, 50, 50);
    setPx(data, 0, i, 50, 50, 50);
    setPx(data, 15, i, 50, 50, 50);
  }
}

function drawTnt(data) {
  fillNoise(data, 180, 40, 40, 15, 800);
  for (let y = 5; y < 11; y++) for (let x = 0; x < 16; x++) setPx(data, x, y, 230, 230, 230);
  for (let x = 3; x < 13; x++) {
    setPx(data, x, 6, 20, 20, 20);
    setPx(data, x, 9, 20, 20, 20);
  }
}

function drawCraftingTop(data) {
  drawPlanks(data);
  // grid
  for (let i = 0; i < 16; i++) {
    setPx(data, i, 5, 80, 50, 20);
    setPx(data, i, 10, 80, 50, 20);
    setPx(data, 5, i, 80, 50, 20);
    setPx(data, 10, i, 80, 50, 20);
  }
  // tools hint
  setPx(data, 3, 3, 180, 180, 180);
  setPx(data, 12, 12, 100, 70, 40);
}

function drawCraftingSide(data) {
  drawPlanks(data);
  for (let y = 6; y < 12; y++) for (let x = 4; x < 12; x++) setPx(data, x, y, 90, 60, 30);
}

function drawFurnaceFront(data) {
  fillNoise(data, 100, 100, 100, 12, 901);
  // opening
  for (let y = 4; y < 12; y++) for (let x = 4; x < 12; x++) setPx(data, x, y, 30, 20, 15);
  // fire glow
  for (let y = 8; y < 12; y++) for (let x = 5; x < 11; x++) setPx(data, x, y, 220, 100 + (y % 3) * 20, 20);
  // top rim
  for (let x = 0; x < 16; x++) setPx(data, x, 0, 80, 80, 80);
}

function drawFurnaceSide(data) {
  fillNoise(data, 110, 110, 110, 10, 902);
  for (let y = 0; y < 16; y++) {
    setPx(data, 0, y, 70, 70, 70);
    setPx(data, 15, y, 70, 70, 70);
  }
}

function drawObsidian(data) {
  fillNoise(data, 20, 10, 30, 15, 1200);
  const rng = mulberry32(1201);
  for (let i = 0; i < 25; i++) setPx(data, (rng()*16)|0, (rng()*16)|0, 40, 20, 60);
}

function drawNetherrack(data) {
  fillNoise(data, 120, 50, 50, 25, 1210);
  const rng = mulberry32(1211);
  for (let i = 0; i < 20; i++) setPx(data, (rng()*16)|0, (rng()*16)|0, 80, 30, 30);
}

function drawSoulSand(data) {
  fillNoise(data, 70, 55, 45, 15, 1220);
  for (let y = 4; y < 8; y++) for (let x = 3; x < 7; x++) setPx(data, x, y, 30, 25, 20);
  for (let y = 9; y < 13; y++) for (let x = 9; x < 13; x++) setPx(data, x, y, 30, 25, 20);
}

function drawGlowstone(data) {
  fillNoise(data, 220, 180, 80, 20, 1230);
  for (let i = 0; i < 16; i++) {
    setPx(data, i, i, 255, 240, 150);
    setPx(data, i, 15 - i, 255, 220, 100);
  }
}

function drawEndStone(data) {
  fillNoise(data, 210, 210, 150, 12, 1240);
}

function drawPortal(data, r, g, b) {
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      const w = Math.sin(x * 0.8 + y * 0.5) * 40 + Math.cos(y * 0.9) * 20;
      setPx(data, x, y, clamp(r + w), clamp(g + w * 0.5), clamp(b + w), 160);
    }
  }
}

function drawPurpur(data) {
  fillNoise(data, 160, 100, 160, 12, 1250);
  for (let i = 0; i < 16; i++) {
    if (i % 4 === 0) for (let j = 0; j < 16; j++) setPx(data, i, j, 140, 80, 140);
  }
}

function drawMagma(data) {
  fillNoise(data, 80, 30, 20, 20, 1260);
  const rng = mulberry32(1261);
  for (let i = 0; i < 30; i++) setPx(data, (rng()*16)|0, (rng()*16)|0, 255, 100 + (rng()*80)|0, 20);
}

function makeImageData(drawFn) {
  const canvas = document.createElement('canvas');
  canvas.width = TEXTURE_SIZE;
  canvas.height = TEXTURE_SIZE;
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(TEXTURE_SIZE, TEXTURE_SIZE);
  drawFn(img.data);
  ctx.putImageData(img, 0, 0);
  return { canvas, imageData: img };
}

/** Item icons (pixel art on 40 canvas) */
function drawItemIcon(key) {
  const c = document.createElement('canvas');
  c.width = 40; c.height = 40;
  const ctx = c.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  const px = (x, y, col) => {
    if (x < 0 || y < 0 || x > 16 || y > 16) return;
    ctx.fillStyle = col;
    ctx.fillRect(x * 2 + 4, y * 2 + 4, 2, 2);
  };
  const matColor = (k) => {
    if (k.includes('nether')) return '#4a2a4a';
    if (k.includes('diamond')) return '#5ce1e6';
    if (k.includes('gold')) return '#f1c40f';
    if (k.includes('iron')) return '#c0c0c0';
    if (k.includes('stone')) return '#888';
    if (k.includes('wood')) return '#c4a35a';
    return '#aaa';
  };

  if (key.startsWith('sword_')) {
    const blade = matColor(key);
    for (let i = 0; i < 10; i++) { px(10, 2 + i, blade); px(11, 3 + i, blade); }
    px(10, 1, '#fff');
    for (let x = 7; x <= 14; x++) px(x, 12, '#5a3a1a');
    for (let i = 0; i < 4; i++) px(10, 13 + i, '#3d2817');
    px(10, 16, '#8b6914');
  } else if (key.startsWith('axe_')) {
    const h = matColor(key);
    for (let i = 0; i < 10; i++) px(9, 5 + i, '#6b4226');
    for (let y = 2; y < 8; y++) for (let x = 8; x < 15; x++) px(x, y, h);
  } else if (key.startsWith('pick_')) {
    const h = matColor(key);
    for (let x = 4; x < 14; x++) px(x, 5, h);
    for (let x = 5; x < 13; x++) px(x, 4, h);
    for (let i = 0; i < 9; i++) px(9, 6 + i, '#6b4226');
  } else if (key.startsWith('shovel_')) {
    for (let i = 0; i < 9; i++) px(9, 6 + i, '#6b4226');
    for (let y = 2; y < 7; y++) for (let x = 7; x < 12; x++) px(x, y, matColor(key));
  } else if (key.startsWith('hoe_')) {
    for (let i = 0; i < 9; i++) px(9, 6 + i, '#6b4226');
    for (let x = 6; x < 14; x++) px(x, 4, matColor(key));
    px(13, 5, matColor(key));
  } else if (key === 'bow' || key === 'crossbow') {
    for (let i = 0; i < 12; i++) {
      px(6 + ((Math.sin(i * 0.4) * 2) | 0), 2 + i, '#8b5a2b');
      px(14 - ((Math.sin(i * 0.4) * 2) | 0), 2 + i, '#8b5a2b');
    }
    for (let i = 0; i < 12; i++) px(10, 2 + i, key === 'crossbow' ? '#aaa' : '#ddd');
  } else if (key === 'arrow') {
    for (let i = 0; i < 12; i++) px(8 + (i > 8 ? 1 : 0), 2 + i, '#ccc');
    px(8, 2, '#888'); px(9, 3, '#888');
    px(7, 13, '#8b5a2b'); px(9, 13, '#8b5a2b');
  } else if (key === 'trident') {
    for (let i = 0; i < 12; i++) px(9, 4 + i, '#5ce1e6');
    px(7, 3, '#5ce1e6'); px(9, 2, '#5ce1e6'); px(11, 3, '#5ce1e6');
  } else if (key === 'shield') {
    for (let y = 3; y < 15; y++) for (let x = 5; x < 13; x++) px(x, y, '#8b5a2b');
    for (let y = 5; y < 13; y++) for (let x = 6; x < 12; x++) px(x, y, '#c0c0c0');
  } else if (key === 'apple' || key === 'golden_apple') {
    const col = key === 'golden_apple' ? '#f1c40f' : '#d22';
    for (let y = 4; y < 14; y++) for (let x = 5; x < 13; x++) {
      const dx = x - 9, dy = y - 9;
      if (dx * dx + dy * dy < 20) px(x, y, col);
    }
    px(9, 3, '#3a5'); px(10, 2, '#3a5');
  } else if (key === 'bread' || key === 'cookie') {
    for (let y = 8; y < 14; y++) for (let x = 3; x < 15; x++) px(x, y, key === 'cookie' ? '#c68642' : '#c4a35a');
  } else if (key === 'steak' || key === 'beef' || key === 'pork' || key === 'mutton' || key === 'chicken_raw') {
    const col = key === 'pork' ? '#f0a0a8' : key === 'chicken_raw' ? '#f5d0c0' : '#8b3a2a';
    for (let y = 6; y < 14; y++) for (let x = 4; x < 14; x++) px(x, y, col);
  } else if (key === 'carrot') {
    for (let i = 0; i < 8; i++) px(9, 6 + i, '#ff8c00');
    px(8, 5, '#3a5'); px(10, 5, '#3a5'); px(9, 4, '#3a5');
  } else if (key === 'potato' || key === 'baked_potato') {
    for (let y = 6; y < 13; y++) for (let x = 6; x < 12; x++) px(x, y, key === 'baked_potato' ? '#c4a35a' : '#d4b896');
  } else if (key === 'melon_slice') {
    for (let y = 5; y < 13; y++) for (let x = 5; x < 13; x++) if ((x - 9) + (y - 9) < 6) px(x, y, '#e74c3c');
    for (let i = 0; i < 6; i++) px(5 + i, 12 - i, '#3a5');
  } else if (key === 'cake' || key === 'pumpkin_pie') {
    for (let y = 8; y < 14; y++) for (let x = 3; x < 15; x++) px(x, y, '#f5d0c0');
    for (let x = 3; x < 15; x++) px(x, 7, key === 'cake' ? '#ff69b4' : '#e67e22');
  } else if (key === 'fish' || key === 'cooked_fish') {
    for (let x = 4; x < 13; x++) px(x, 9, key === 'fish' ? '#6ab' : '#c86');
    px(13, 8, '#6ab'); px(13, 10, '#6ab'); px(3, 9, '#faa');
  } else if (key === 'rotten_flesh') {
    for (let y = 6; y < 14; y++) for (let x = 4; x < 14; x++) px(x, y, '#6a7a3a');
  } else if (key === 'spider_eye') {
    for (let y = 6; y < 12; y++) for (let x = 6; x < 12; x++) px(x, y, '#a00');
    px(9, 9, '#111');
  } else if (key === 'stick' || key === 'blaze_rod' || key === 'bone') {
    const col = key === 'blaze_rod' ? '#f1c40f' : key === 'bone' ? '#f5f5dc' : '#6b4226';
    for (let i = 0; i < 12; i++) px(8 + (i % 2), 2 + i, col);
  } else if (key === 'coal_item') {
    for (let y = 5; y < 13; y++) for (let x = 6; x < 12; x++) px(x, y, '#222');
  } else if (key === 'iron_ingot' || key === 'gold_ingot' || key === 'netherite') {
    const col = key === 'gold_ingot' ? '#f1c40f' : key === 'netherite' ? '#4a2a4a' : '#c0c0c0';
    for (let y = 7; y < 12; y++) for (let x = 4; x < 14; x++) px(x, y, col);
  } else if (key === 'diamond_gem' || key === 'emerald' || key === 'quartz') {
    const col = key === 'emerald' ? '#2ecc71' : key === 'quartz' ? '#f5f5f5' : '#5ce1e6';
    px(9, 4, col); px(8, 5, col); px(9, 5, col); px(10, 5, col);
    for (let y = 6; y < 12; y++) for (let x = 7; x < 12; x++) px(x, y, col);
    px(9, 12, col);
  } else if (key === 'redstone_dust' || key === 'gunpowder' || key === 'lapis') {
    const col = key === 'gunpowder' ? '#555' : key === 'lapis' ? '#1a3a8a' : '#c22';
    for (let i = 0; i < 20; i++) px(5 + (i % 6), 5 + ((i / 6) | 0) * 2, col);
  } else if (key === 'leather') {
    for (let y = 5; y < 13; y++) for (let x = 5; x < 13; x++) px(x, y, '#8b5a2b');
  } else if (key === 'feather') {
    for (let i = 0; i < 10; i++) px(9, 3 + i, '#eee');
    px(10, 5, '#eee'); px(8, 6, '#eee'); px(11, 7, '#eee');
  } else if (key === 'string_item') {
    for (let i = 0; i < 12; i++) px(5 + i, 5 + (i % 3), '#ddd');
  } else if (key === 'ender_pearl' || key === 'slimeball') {
    const col = key === 'slimeball' ? '#6c6' : '#1a4a4a';
    for (let y = 5; y < 13; y++) for (let x = 5; x < 13; x++) {
      const dx = x - 9, dy = y - 9;
      if (dx * dx + dy * dy < 16) px(x, y, col);
    }
  } else if (key === 'paper' || key === 'book') {
    for (let y = 4; y < 14; y++) for (let x = 5; x < 13; x++) px(x, y, '#f5f5dc');
    if (key === 'book') for (let y = 4; y < 14; y++) px(4, y, '#8b0000');
  } else if (key === 'compass' || key === 'clock') {
    for (let y = 4; y < 14; y++) for (let x = 4; x < 14; x++) {
      const dx = x - 9, dy = y - 9;
      if (dx * dx + dy * dy < 20) px(x, y, key === 'clock' ? '#f1c40f' : '#aaa');
    }
    px(9, 6, '#c22'); px(9, 9, '#111');
  } else if (key.includes('bucket')) {
    for (let y = 6; y < 14; y++) for (let x = 5; x < 13; x++) px(x, y, '#888');
    if (key === 'water_bucket') for (let y = 8; y < 13; y++) for (let x = 6; x < 12; x++) px(x, y, '#3498db');
    if (key === 'lava_bucket') for (let y = 8; y < 13; y++) for (let x = 6; x < 12; x++) px(x, y, '#e67e22');
  } else if (key === 'flint_steel') {
    for (let i = 0; i < 8; i++) px(6 + i, 10 - i, '#555');
    px(12, 4, '#f1c40f'); px(13, 3, '#e67e22');
  } else if (key === 'shears') {
    px(6, 4, '#ccc'); px(7, 5, '#ccc'); px(8, 6, '#ccc');
    px(12, 4, '#ccc'); px(11, 5, '#ccc'); px(10, 6, '#ccc');
    for (let i = 0; i < 6; i++) px(9, 8 + i, '#6b4226');
  } else if (key === 'fishing_rod') {
    for (let i = 0; i < 12; i++) px(6 + (i / 4 | 0), 3 + i, '#6b4226');
    for (let i = 0; i < 6; i++) px(10 + i, 4, '#ddd');
  } else if (key === 'saddle' || key === 'name_tag') {
    for (let y = 6; y < 12; y++) for (let x = 4; x < 14; x++) px(x, y, '#8b5a2b');
  } else if (key.startsWith('helmet_') || key.startsWith('chest_') || key.startsWith('legs_') || key.startsWith('boots_')) {
    const col = matColor(key);
    if (key.startsWith('helmet')) {
      for (let y = 4; y < 10; y++) for (let x = 5; x < 13; x++) px(x, y, col);
      for (let x = 6; x < 12; x++) px(x, 10, col);
    } else if (key.startsWith('chest')) {
      for (let y = 4; y < 14; y++) for (let x = 4; x < 14; x++) px(x, y, col);
    } else if (key.startsWith('legs')) {
      for (let y = 6; y < 15; y++) { px(6, y, col); px(7, y, col); px(10, y, col); px(11, y, col); }
    } else {
      for (let y = 10; y < 15; y++) { px(5, y, col); px(6, y, col); px(11, y, col); px(12, y, col); }
    }
  } else if (key.startsWith('potion_')) {
    for (let y = 6; y < 14; y++) for (let x = 6; x < 12; x++) px(x, y, key.includes('heal') ? '#e74c3c' : '#3498db');
    for (let y = 3; y < 6; y++) for (let x = 7; x < 11; x++) px(x, y, '#ccc');
  } else if (key === 'wool_white') {
    for (let y = 4; y < 14; y++) for (let x = 4; x < 14; x++) px(x, y, '#f5f5f5');
  } else if (key === 'torch_item') {
    for (let i = 0; i < 8; i++) px(8, 8 + i, '#6b4226');
    px(8, 5, '#ffaa00'); px(8, 6, '#ff6600'); px(7, 5, '#ffcc00'); px(9, 5, '#ffcc00');
  } else if (key === 'ladder') {
    for (let y = 3; y < 15; y++) { px(5, y, '#8b5a2b'); px(12, y, '#8b5a2b'); }
    for (let x = 5; x < 13; x++) { px(x, 6, '#8b5a2b'); px(x, 10, '#8b5a2b'); px(x, 14, '#8b5a2b'); }
  } else if (key === 'glowstone_dust') {
    for (let i = 0; i < 16; i++) px(4 + (i % 8), 4 + ((i / 4) | 0), '#f1c40f');
  } else {
    // generic gem
    for (let y = 6; y < 12; y++) for (let x = 6; x < 12; x++) px(x, y, '#aaa');
  }
  return c;
}

class TextureAtlas {
  constructor() {
    this.faceCanvases = {};
    this.materials = {};
    this.icons = {};
    this.itemIcons = {};
    this._buildAll();
  }

  _buildAll() {
    const gens = {
      grass:  { top: drawGrassTop, bottom: drawDirt, side: drawGrassSide },
      dirt:   { all: drawDirt },
      stone:  { all: drawStone },
      wood:   { top: drawWoodTop, bottom: drawWoodTop, side: drawWoodSide },
      leaves: { all: drawLeaves },
      sand:   { all: drawSand },
      water:  { all: drawWater },
      cobble: { all: drawCobble },
      planks: { all: drawPlanks },
      glass:  { all: drawGlass },
      brick:  { all: drawBrick },
      coal:   { all: (d) => drawOre(d, 20, 20, 20, 400) },
      iron:   { all: (d) => drawOre(d, 200, 170, 140, 401) },
      gold:   { all: (d) => drawOre(d, 250, 220, 50, 402) },
      diamond:{ all: (d) => drawOre(d, 80, 220, 230, 403) },
      bedrock:{ all: drawBedrock },
      snow:   { all: drawSnow },
      gravel: { all: drawGravel },
      clay:   { all: drawClay },
      door:   { all: (d) => drawDoor(d, false) },
      doorOpen:{ all: (d) => drawDoor(d, true) },
      redstone:{ all: drawRedstone },
      lever:  { all: (d) => drawLever(d, false) },
      leverOn:{ all: (d) => drawLever(d, true) },
      lamp:   { all: (d) => drawLamp(d, false) },
      lampOn: { all: (d) => drawLamp(d, true) },
      tnt:    { all: drawTnt },
      crafting_table: { top: drawCraftingTop, bottom: drawPlanks, side: drawCraftingSide },
      furnace: { top: drawFurnaceSide, bottom: drawFurnaceSide, side: drawFurnaceFront },
      obsidian: { all: drawObsidian },
      netherrack: { all: drawNetherrack },
      soul_sand: { all: drawSoulSand },
      glowstone: { all: drawGlowstone },
      end_stone: { all: drawEndStone },
      nether_portal: { all: (d) => drawPortal(d, 80, 0, 160) },
      end_portal: { all: (d) => drawPortal(d, 20, 0, 40) },
      purpur: { all: drawPurpur },
      magma: { all: drawMagma },
    };

    for (const [key, faces] of Object.entries(gens)) {
      if (faces.all) {
        const { canvas } = makeImageData(faces.all);
        this.faceCanvases[key] = { top: canvas, bottom: canvas, side: canvas };
      } else {
        this.faceCanvases[key] = {
          top: makeImageData(faces.top).canvas,
          bottom: makeImageData(faces.bottom).canvas,
          side: makeImageData(faces.side).canvas,
        };
      }
      this.icons[key] = this._makeIcon(key);
    }

    for (const k of Object.keys(ITEMS)) {
      this.itemIcons[k] = drawItemIcon(ITEMS[k].icon || k);
    }
  }

  _makeIcon(key) {
    const c = document.createElement('canvas');
    c.width = 40; c.height = 40;
    const ctx = c.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    const faces = this.faceCanvases[key];
    if (!faces) return c;
    ctx.drawImage(faces.side, 0, 0, 40, 40);
    ctx.globalAlpha = 0.85;
    ctx.drawImage(faces.top, 4, 2, 32, 14);
    ctx.globalAlpha = 1;
    return c;
  }

  getMaterials(blockKey) {
    if (this.materials[blockKey]) return this.materials[blockKey];
    if (!this.faceCanvases[blockKey]) return null;

    const faces = this.faceCanvases[blockKey];
    const makeTex = (canvas) => {
      const tex = new THREE.CanvasTexture(canvas);
      tex.magFilter = THREE.NearestFilter;
      tex.minFilter = THREE.NearestFilter;
      tex.generateMipmaps = false;
      return tex;
    };

    const def = BLOCKS[blockKey];
    const transparent = def && def.transparent;
    let opacity = 1;
    if (blockKey === 'water') opacity = 0.65;
    else if (blockKey === 'leaves') opacity = 0.9;
    else if (blockKey === 'glass') opacity = 0.35;
    else if (blockKey === 'doorOpen') opacity = 0.5;
    else if (blockKey === 'redstone') opacity = 0.95;
    else if (blockKey === 'nether_portal' || blockKey === 'end_portal') opacity = 0.75;

    let emissive = 0x000000;
    if (blockKey === 'lampOn') emissive = 0x665500;
    else if (blockKey === 'redstone') emissive = 0x330000;
    else if (blockKey === 'glowstone' || blockKey === 'magma') emissive = 0x553300;
    else if (blockKey === 'nether_portal') emissive = 0x440066;
    else if (blockKey === 'end_portal') emissive = 0x220044;

    const mk = (canvas) => new THREE.MeshLambertMaterial({
      map: makeTex(canvas),
      transparent: transparent || opacity < 1,
      opacity,
      alphaTest: (blockKey === 'leaves' || blockKey === 'redstone') ? 0.2 : 0,
      side: transparent ? THREE.DoubleSide : THREE.FrontSide,
      emissive,
    });

    const mats = [
      mk(faces.side), mk(faces.side),
      mk(faces.top), mk(faces.bottom),
      mk(faces.side), mk(faces.side),
    ];
    this.materials[blockKey] = mats;
    return mats;
  }

  drawIcon(key, targetCanvas) {
    const ctx = targetCanvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, targetCanvas.width, targetCanvas.height);
    if (!key || key === 'air') return;
    if (this.itemIcons[key]) {
      ctx.drawImage(this.itemIcons[key], 0, 0, targetCanvas.width, targetCanvas.height);
      return;
    }
    if (this.icons[key]) {
      ctx.drawImage(this.icons[key], 0, 0, targetCanvas.width, targetCanvas.height);
    }
  }
}

const PLACEABLE = [
  'grass', 'dirt', 'stone', 'cobble', 'wood', 'planks', 'leaves',
  'sand', 'gravel', 'clay', 'snow', 'brick', 'glass',
  'coal', 'iron', 'gold', 'diamond', 'water',
  'door', 'redstone', 'lever', 'lamp', 'tnt',
  'crafting_table', 'furnace',
  'obsidian', 'netherrack', 'soul_sand', 'glowstone', 'end_stone',
  'nether_portal', 'end_portal', 'purpur', 'magma',
];

const INVENTORY_ALL = [
  ...PLACEABLE,
  'torch_item', 'ladder', 'stick',
  // weapons & tools
  'sword_wood', 'sword_stone', 'sword_iron', 'sword_gold', 'sword_diamond', 'sword_nether',
  'axe_wood', 'axe_iron', 'axe_diamond',
  'pick_wood', 'pick_stone', 'pick_iron', 'pick_gold', 'pick_diamond', 'pick_nether',
  'shovel_iron', 'hoe_iron', 'shears',
  'bow', 'crossbow', 'arrow', 'trident', 'shield',
  // food
  'apple', 'golden_apple', 'bread', 'steak', 'beef', 'pork', 'mutton', 'chicken_raw',
  'carrot', 'potato', 'baked_potato', 'melon_slice', 'cookie', 'cake', 'pumpkin_pie',
  'fish', 'cooked_fish', 'rotten_flesh', 'spider_eye',
  'potion_heal', 'potion_speed',
  // materials
  'stick', 'coal_item', 'iron_ingot', 'gold_ingot', 'diamond_gem', 'emerald',
  'redstone_dust', 'lapis', 'quartz', 'netherite',
  'leather', 'feather', 'string_item', 'bone', 'gunpowder',
  'ender_pearl', 'blaze_rod', 'slimeball', 'paper', 'book',
  'compass', 'clock', 'bucket', 'water_bucket', 'lava_bucket',
  'flint_steel', 'fishing_rod', 'name_tag', 'saddle', 'wool_white',
  // armor
  'helmet_iron', 'chest_iron', 'legs_iron', 'boots_iron',
  'helmet_diamond', 'chest_diamond',
];
