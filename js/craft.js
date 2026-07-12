/**
 * Crafting recipes (2x2 pocket + 3x3 table) — Minecraft-inspired
 */

const RECIPES = [
  // planks from wood
  { out: 'planks', count: 4, shape: [['wood']], needTable: false },
  // sticks
  { out: 'stick', count: 4, shape: [['planks'], ['planks']], needTable: false },
  // crafting table
  { out: 'crafting_table', count: 1, shape: [['planks', 'planks'], ['planks', 'planks']], needTable: false },
  // chest-like: stick fence
  { out: 'torch_item', count: 4, shape: [['coal_item'], ['stick']], needTable: false },
  // tools — wood
  { out: 'sword_wood', count: 1, shape: [[null, 'planks', null], [null, 'planks', null], [null, 'stick', null]], needTable: true },
  { out: 'pick_wood', count: 1, shape: [['planks', 'planks', 'planks'], [null, 'stick', null], [null, 'stick', null]], needTable: true },
  { out: 'axe_wood', count: 1, shape: [['planks', 'planks', null], ['planks', 'stick', null], [null, 'stick', null]], needTable: true },
  { out: 'shovel_iron', count: 1, shape: [[null, 'iron_ingot', null], [null, 'stick', null], [null, 'stick', null]], needTable: true },
  // stone tools
  { out: 'sword_stone', count: 1, shape: [[null, 'cobble', null], [null, 'cobble', null], [null, 'stick', null]], needTable: true },
  { out: 'pick_stone', count: 1, shape: [['cobble', 'cobble', 'cobble'], [null, 'stick', null], [null, 'stick', null]], needTable: true },
  // iron
  { out: 'sword_iron', count: 1, shape: [[null, 'iron_ingot', null], [null, 'iron_ingot', null], [null, 'stick', null]], needTable: true },
  { out: 'pick_iron', count: 1, shape: [['iron_ingot', 'iron_ingot', 'iron_ingot'], [null, 'stick', null], [null, 'stick', null]], needTable: true },
  { out: 'axe_iron', count: 1, shape: [['iron_ingot', 'iron_ingot', null], ['iron_ingot', 'stick', null], [null, 'stick', null]], needTable: true },
  // gold / diamond
  { out: 'sword_gold', count: 1, shape: [[null, 'gold_ingot', null], [null, 'gold_ingot', null], [null, 'stick', null]], needTable: true },
  { out: 'pick_gold', count: 1, shape: [['gold_ingot', 'gold_ingot', 'gold_ingot'], [null, 'stick', null], [null, 'stick', null]], needTable: true },
  { out: 'sword_diamond', count: 1, shape: [[null, 'diamond_gem', null], [null, 'diamond_gem', null], [null, 'stick', null]], needTable: true },
  { out: 'pick_diamond', count: 1, shape: [['diamond_gem', 'diamond_gem', 'diamond_gem'], [null, 'stick', null], [null, 'stick', null]], needTable: true },
  { out: 'axe_diamond', count: 1, shape: [['diamond_gem', 'diamond_gem', null], ['diamond_gem', 'stick', null], [null, 'stick', null]], needTable: true },
  // bow
  { out: 'bow', count: 1, shape: [[null, 'stick', 'string_item'], ['stick', null, 'string_item'], [null, 'stick', 'string_item']], needTable: true },
  // furnace
  { out: 'furnace', count: 1, shape: [['cobble', 'cobble', 'cobble'], ['cobble', null, 'cobble'], ['cobble', 'cobble', 'cobble']], needTable: true },
  // door
  { out: 'door', count: 3, shape: [['planks', 'planks'], ['planks', 'planks'], ['planks', 'planks']], needTable: true },
  // bread (wheat substitute: use seeds? skip) — cookie from cocoa no — simple bread from wheat no
  // armor
  { out: 'helmet_iron', count: 1, shape: [['iron_ingot', 'iron_ingot', 'iron_ingot'], ['iron_ingot', null, 'iron_ingot']], needTable: true },
  { out: 'chest_iron', count: 1, shape: [['iron_ingot', null, 'iron_ingot'], ['iron_ingot', 'iron_ingot', 'iron_ingot'], ['iron_ingot', 'iron_ingot', 'iron_ingot']], needTable: true },
  { out: 'legs_iron', count: 1, shape: [['iron_ingot', 'iron_ingot', 'iron_ingot'], ['iron_ingot', null, 'iron_ingot'], ['iron_ingot', null, 'iron_ingot']], needTable: true },
  { out: 'boots_iron', count: 1, shape: [['iron_ingot', null, 'iron_ingot'], ['iron_ingot', null, 'iron_ingot']], needTable: true },
  { out: 'helmet_diamond', count: 1, shape: [['diamond_gem', 'diamond_gem', 'diamond_gem'], ['diamond_gem', null, 'diamond_gem']], needTable: true },
  { out: 'chest_diamond', count: 1, shape: [['diamond_gem', null, 'diamond_gem'], ['diamond_gem', 'diamond_gem', 'diamond_gem'], ['diamond_gem', 'diamond_gem', 'diamond_gem']], needTable: true },
  // blocks
  { out: 'brick', count: 1, shapeless: ['clay', 'clay', 'clay', 'clay'], needTable: true },
  { out: 'glowstone_dust', count: 1, shapeless: ['torch_item', 'torch_item'], needTable: false },
  // bucket
  { out: 'bucket', count: 1, shape: [['iron_ingot', null, 'iron_ingot'], [null, 'iron_ingot', null]], needTable: true },
  // shears
  { out: 'shears', count: 1, shape: [[null, 'iron_ingot'], ['iron_ingot', null]], needTable: false },
  // flint and steel
  { out: 'flint_steel', count: 1, shapeless: ['iron_ingot', 'coal_item'], needTable: false },
  // paper
  { out: 'paper', count: 3, shape: [['sugar_cane', 'sugar_cane', 'sugar_cane']], needTable: false },
  // book
  { out: 'book', count: 1, shapeless: ['paper', 'paper', 'paper', 'leather'], needTable: true },
  // compass / clock
  { out: 'compass', count: 1, shape: [[null, 'iron_ingot', null], ['iron_ingot', 'redstone_dust', 'iron_ingot'], [null, 'iron_ingot', null]], needTable: true },
  { out: 'clock', count: 1, shape: [[null, 'gold_ingot', null], ['gold_ingot', 'redstone_dust', 'gold_ingot'], [null, 'gold_ingot', null]], needTable: true },
  // tnt
  { out: 'tnt', count: 1, shape: [['gunpowder', 'sand', 'gunpowder'], ['sand', 'gunpowder', 'sand'], ['gunpowder', 'sand', 'gunpowder']], needTable: true },
  // stick fence post -> ladder-ish planks
  { out: 'ladder', count: 3, shape: [['stick', null, 'stick'], ['stick', 'stick', 'stick'], ['stick', null, 'stick']], needTable: true },
  // wool from string
  { out: 'wool_white', count: 1, shape: [['string_item', 'string_item'], ['string_item', 'string_item']], needTable: false },
  // golden apple
  { out: 'golden_apple', count: 1, shape: [['gold_ingot', 'gold_ingot', 'gold_ingot'], ['gold_ingot', 'apple', 'gold_ingot'], ['gold_ingot', 'gold_ingot', 'gold_ingot']], needTable: true },
  // bread from wheat substitute: 3 wheat -> use carrot chain no; use potato? skip
  // smelting not here — furnace UI later; shapeless cooked
  { out: 'steak', count: 1, shapeless: ['beef', 'coal_item'], needTable: false },
  { out: 'pork', count: 1, shapeless: ['beef', 'coal_item'], needTable: false }, // fallback
  { out: 'cooked_fish', count: 1, shapeless: ['fish', 'coal_item'], needTable: false },
  { out: 'baked_potato', count: 1, shapeless: ['potato', 'coal_item'], needTable: false },
  // netherite upgrade fake
  { out: 'sword_nether', count: 1, shapeless: ['sword_diamond', 'netherite'], needTable: true },
  { out: 'pick_nether', count: 1, shapeless: ['pick_diamond', 'netherite'], needTable: true },
];

// Extra item keys used only in craft
if (typeof ITEMS !== 'undefined') {
  if (!ITEMS.torch_item) ITEMS.torch_item = { name: 'Факел', type: 'misc', icon: 'torch_item' };
  if (!ITEMS.sugar_cane) ITEMS.sugar_cane = { name: 'Тростник', type: 'misc', icon: 'stick' };
  if (!ITEMS.ladder) ITEMS.ladder = { name: 'Лестница', type: 'misc', icon: 'ladder' };
  if (!ITEMS.glowstone_dust) ITEMS.glowstone_dust = { name: 'Светопыль', type: 'misc', icon: 'glowstone_dust' };
}

function normalizeGrid(grid, size) {
  // grid is size*size array of keys or null
  const g = grid.slice();
  while (g.length < size * size) g.push(null);
  return g.map((x) => x || null);
}

function matchShape(grid, shape, size) {
  const sh = shape.length;
  const sw = Math.max(...shape.map((r) => r.length));
  for (let oy = 0; oy <= size - sh; oy++) {
    for (let ox = 0; ox <= size - sw; ox++) {
      let ok = true;
      const used = Array(size * size).fill(false);
      for (let y = 0; y < sh; y++) {
        for (let x = 0; x < (shape[y].length); x++) {
          const want = shape[y][x] || null;
          const idx = (oy + y) * size + (ox + x);
          const got = grid[idx] || null;
          if (want !== got) { ok = false; break; }
          used[idx] = true;
        }
        if (!ok) break;
      }
      if (!ok) continue;
      // rest empty
      for (let i = 0; i < size * size; i++) {
        if (!used[i] && grid[i]) { ok = false; break; }
      }
      if (ok) return true;
    }
  }
  return false;
}

function matchShapeless(grid, list) {
  const have = grid.filter(Boolean).slice().sort();
  const need = list.slice().sort();
  if (have.length !== need.length) return false;
  return have.every((v, i) => v === need[i]);
}

function findRecipe(grid, tableMode) {
  const size = tableMode ? 3 : 2;
  const g = normalizeGrid(grid, size);
  for (const r of RECIPES) {
    if (r.needTable && !tableMode) continue;
    if (r.shapeless) {
      if (matchShapeless(g, r.shapeless)) return r;
    } else if (r.shape) {
      if (matchShape(g, r.shape, size)) return r;
    }
  }
  return null;
}

/** Simple inventory bag: map key -> count */
class Bag {
  constructor() {
    this.map = Object.create(null);
  }
  count(key) { return this.map[key] || 0; }
  add(key, n = 1) {
    if (!key) return;
    this.map[key] = (this.map[key] || 0) + n;
  }
  remove(key, n = 1) {
    if (this.count(key) < n) return false;
    this.map[key] -= n;
    if (this.map[key] <= 0) delete this.map[key];
    return true;
  }
  has(key, n = 1) { return this.count(key) >= n; }
  entries() {
    return Object.keys(this.map).map((k) => ({ key: k, count: this.map[k] }));
  }
  clear() { this.map = Object.create(null); }
}

window.RECIPES = RECIPES;
window.findRecipe = findRecipe;
window.Bag = Bag;
