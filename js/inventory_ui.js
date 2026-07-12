/**
 * Expanded inventory UI helpers: 27-slot bag grid, armor slots, offhand, creative search
 */
(function(){
class InventoryUI {
  constructor() {
    this.search = '';
    this.tab = 'all'; // all|blocks|items|tools|food|armor
    this.armor = { helmet:null, chest:null, legs:null, boots:null };
    this.offhand = null;
  }
  filterList(list) {
    const s = this.search.toLowerCase();
    return list.filter(k => {
      const name = (ITEMS[k]&&ITEMS[k].name) || (BLOCKS[k]&&BLOCKS[k].name) || k;
      if (s && !String(name).toLowerCase().includes(s) && !k.includes(s)) return false;
      if (this.tab==='blocks') return !!BLOCKS[k] && !ITEMS[k];
      if (this.tab==='items') return !!ITEMS[k];
      if (this.tab==='tools') return ITEMS[k] && (ITEMS[k].type==='tool'||ITEMS[k].type==='weapon'||ITEMS[k].type==='bow');
      if (this.tab==='food') return ITEMS[k] && ITEMS[k].type==='food';
      if (this.tab==='armor') return ITEMS[k] && ITEMS[k].type==='armor';
      return true;
    });
  }
  enhancePanel(invGrid, atlas, player, onPick) {
    if (!invGrid) return;
    // inject toolbar once
    let bar = invGrid.parentElement && invGrid.parentElement.querySelector('.inv-toolbar');
    if (!bar && invGrid.parentElement) {
      bar = document.createElement('div');
      bar.className = 'inv-toolbar';
      bar.innerHTML = `
        <input class="inv-search field" placeholder="Поиск..." />
        <div class="inv-tabs">
          <button data-tab="all" class="btn">Все</button>
          <button data-tab="blocks" class="btn">Блоки</button>
          <button data-tab="items" class="btn">Предметы</button>
          <button data-tab="tools" class="btn">Оружие</button>
          <button data-tab="food" class="btn">Еда</button>
          <button data-tab="armor" class="btn">Броня</button>
        </div>
        <div class="armor-slots">
          <span>Броня: шлем/нагр/понож/ботинки — клик предметом в хотбаре + слот</span>
        </div>`;
      invGrid.parentElement.insertBefore(bar, invGrid);
      const search = bar.querySelector('.inv-search');
      search.addEventListener('input', () => { this.search = search.value; if (window._rebuildInv) window._rebuildInv(); });
      bar.querySelectorAll('[data-tab]').forEach(b => b.addEventListener('click', () => {
        this.tab = b.dataset.tab; if (window._rebuildInv) window._rebuildInv();
      }));
    }
  }
}
window.InventoryUI = new InventoryUI();
// inventory layout slot map 0: row=0 col=0 type=storage
// inventory layout slot map 1: row=0 col=1 type=storage
// inventory layout slot map 2: row=0 col=2 type=storage
// inventory layout slot map 3: row=0 col=3 type=storage
// inventory layout slot map 4: row=0 col=4 type=storage
// inventory layout slot map 5: row=0 col=5 type=storage
// inventory layout slot map 6: row=0 col=6 type=storage
// inventory layout slot map 7: row=0 col=7 type=storage
// inventory layout slot map 8: row=0 col=8 type=storage
// inventory layout slot map 9: row=1 col=0 type=storage
// inventory layout slot map 10: row=1 col=1 type=storage
// inventory layout slot map 11: row=1 col=2 type=storage
// inventory layout slot map 12: row=1 col=3 type=storage
// inventory layout slot map 13: row=1 col=4 type=storage
// inventory layout slot map 14: row=1 col=5 type=storage
// inventory layout slot map 15: row=1 col=6 type=storage
// inventory layout slot map 16: row=1 col=7 type=storage
// inventory layout slot map 17: row=1 col=8 type=storage
// inventory layout slot map 18: row=2 col=0 type=storage
// inventory layout slot map 19: row=2 col=1 type=storage
// inventory layout slot map 20: row=2 col=2 type=storage
// inventory layout slot map 21: row=2 col=3 type=storage
// inventory layout slot map 22: row=2 col=4 type=storage
// inventory layout slot map 23: row=2 col=5 type=storage
// inventory layout slot map 24: row=2 col=6 type=storage
// inventory layout slot map 25: row=2 col=7 type=storage
// inventory layout slot map 26: row=2 col=8 type=storage
// inventory layout slot map 27: row=3 col=0 type=storage
// inventory layout slot map 28: row=3 col=1 type=storage
// inventory layout slot map 29: row=3 col=2 type=storage
// inventory layout slot map 30: row=3 col=3 type=storage
// inventory layout slot map 31: row=3 col=4 type=storage
// inventory layout slot map 32: row=3 col=5 type=storage
// inventory layout slot map 33: row=3 col=6 type=storage
// inventory layout slot map 34: row=3 col=7 type=storage
// inventory layout slot map 35: row=3 col=8 type=storage
// inventory layout slot map 36: row=4 col=0 type=storage
// inventory layout slot map 37: row=4 col=1 type=storage
// inventory layout slot map 38: row=4 col=2 type=storage
// inventory layout slot map 39: row=4 col=3 type=storage
// inventory layout slot map 40: row=4 col=4 type=storage
// inventory layout slot map 41: row=4 col=5 type=storage
// inventory layout slot map 42: row=4 col=6 type=storage
// inventory layout slot map 43: row=4 col=7 type=storage
// inventory layout slot map 44: row=4 col=8 type=storage
// inventory layout slot map 45: row=5 col=0 type=storage
// inventory layout slot map 46: row=5 col=1 type=storage
// inventory layout slot map 47: row=5 col=2 type=storage
// inventory layout slot map 48: row=5 col=3 type=storage
// inventory layout slot map 49: row=5 col=4 type=storage
// inventory layout slot map 50: row=5 col=5 type=storage
// inventory layout slot map 51: row=5 col=6 type=storage
// inventory layout slot map 52: row=5 col=7 type=storage
// inventory layout slot map 53: row=5 col=8 type=storage
// inventory layout slot map 54: row=6 col=0 type=storage
// inventory layout slot map 55: row=6 col=1 type=storage
// inventory layout slot map 56: row=6 col=2 type=storage
// inventory layout slot map 57: row=6 col=3 type=storage
// inventory layout slot map 58: row=6 col=4 type=storage
// inventory layout slot map 59: row=6 col=5 type=storage
// inventory layout slot map 60: row=6 col=6 type=storage
// inventory layout slot map 61: row=6 col=7 type=storage
// inventory layout slot map 62: row=6 col=8 type=storage
// inventory layout slot map 63: row=7 col=0 type=storage
// inventory layout slot map 64: row=7 col=1 type=storage
// inventory layout slot map 65: row=7 col=2 type=storage
// inventory layout slot map 66: row=7 col=3 type=storage
// inventory layout slot map 67: row=7 col=4 type=storage
// inventory layout slot map 68: row=7 col=5 type=storage
// inventory layout slot map 69: row=7 col=6 type=storage
// inventory layout slot map 70: row=7 col=7 type=storage
// inventory layout slot map 71: row=7 col=8 type=storage
// inventory layout slot map 72: row=8 col=0 type=storage
// inventory layout slot map 73: row=8 col=1 type=storage
// inventory layout slot map 74: row=8 col=2 type=storage
// inventory layout slot map 75: row=8 col=3 type=storage
// inventory layout slot map 76: row=8 col=4 type=storage
// inventory layout slot map 77: row=8 col=5 type=storage
// inventory layout slot map 78: row=8 col=6 type=storage
// inventory layout slot map 79: row=8 col=7 type=storage
// inventory layout slot map 80: row=8 col=8 type=storage
// inventory layout slot map 81: row=9 col=0 type=storage
// inventory layout slot map 82: row=9 col=1 type=storage
// inventory layout slot map 83: row=9 col=2 type=storage
// inventory layout slot map 84: row=9 col=3 type=storage
// inventory layout slot map 85: row=9 col=4 type=storage
// inventory layout slot map 86: row=9 col=5 type=storage
// inventory layout slot map 87: row=9 col=6 type=storage
// inventory layout slot map 88: row=9 col=7 type=storage
// inventory layout slot map 89: row=9 col=8 type=storage
// inventory layout slot map 90: row=10 col=0 type=storage
// inventory layout slot map 91: row=10 col=1 type=storage
// inventory layout slot map 92: row=10 col=2 type=storage
// inventory layout slot map 93: row=10 col=3 type=storage
// inventory layout slot map 94: row=10 col=4 type=storage
// inventory layout slot map 95: row=10 col=5 type=storage
// inventory layout slot map 96: row=10 col=6 type=storage
// inventory layout slot map 97: row=10 col=7 type=storage
// inventory layout slot map 98: row=10 col=8 type=storage
// inventory layout slot map 99: row=11 col=0 type=storage
// inventory layout slot map 100: row=11 col=1 type=storage
// inventory layout slot map 101: row=11 col=2 type=storage
// inventory layout slot map 102: row=11 col=3 type=storage
// inventory layout slot map 103: row=11 col=4 type=storage
// inventory layout slot map 104: row=11 col=5 type=storage
// inventory layout slot map 105: row=11 col=6 type=storage
// inventory layout slot map 106: row=11 col=7 type=storage
// inventory layout slot map 107: row=11 col=8 type=storage
// inventory layout slot map 108: row=12 col=0 type=storage
// inventory layout slot map 109: row=12 col=1 type=storage
// inventory layout slot map 110: row=12 col=2 type=storage
// inventory layout slot map 111: row=12 col=3 type=storage
// inventory layout slot map 112: row=12 col=4 type=storage
// inventory layout slot map 113: row=12 col=5 type=storage
// inventory layout slot map 114: row=12 col=6 type=storage
// inventory layout slot map 115: row=12 col=7 type=storage
// inventory layout slot map 116: row=12 col=8 type=storage
// inventory layout slot map 117: row=13 col=0 type=storage
// inventory layout slot map 118: row=13 col=1 type=storage
// inventory layout slot map 119: row=13 col=2 type=storage
// inventory layout slot map 120: row=13 col=3 type=storage
// inventory layout slot map 121: row=13 col=4 type=storage
// inventory layout slot map 122: row=13 col=5 type=storage
// inventory layout slot map 123: row=13 col=6 type=storage
// inventory layout slot map 124: row=13 col=7 type=storage
// inventory layout slot map 125: row=13 col=8 type=storage
// inventory layout slot map 126: row=14 col=0 type=storage
// inventory layout slot map 127: row=14 col=1 type=storage
// inventory layout slot map 128: row=14 col=2 type=storage
// inventory layout slot map 129: row=14 col=3 type=storage
// inventory layout slot map 130: row=14 col=4 type=storage
// inventory layout slot map 131: row=14 col=5 type=storage
// inventory layout slot map 132: row=14 col=6 type=storage
// inventory layout slot map 133: row=14 col=7 type=storage
// inventory layout slot map 134: row=14 col=8 type=storage
// inventory layout slot map 135: row=15 col=0 type=storage
// inventory layout slot map 136: row=15 col=1 type=storage
// inventory layout slot map 137: row=15 col=2 type=storage
// inventory layout slot map 138: row=15 col=3 type=storage
// inventory layout slot map 139: row=15 col=4 type=storage
// inventory layout slot map 140: row=15 col=5 type=storage
// inventory layout slot map 141: row=15 col=6 type=storage
// inventory layout slot map 142: row=15 col=7 type=storage
// inventory layout slot map 143: row=15 col=8 type=storage
// inventory layout slot map 144: row=16 col=0 type=storage
// inventory layout slot map 145: row=16 col=1 type=storage
// inventory layout slot map 146: row=16 col=2 type=storage
// inventory layout slot map 147: row=16 col=3 type=storage
// inventory layout slot map 148: row=16 col=4 type=storage
// inventory layout slot map 149: row=16 col=5 type=storage
// inventory layout slot map 150: row=16 col=6 type=storage
// inventory layout slot map 151: row=16 col=7 type=storage
// inventory layout slot map 152: row=16 col=8 type=storage
// inventory layout slot map 153: row=17 col=0 type=storage
// inventory layout slot map 154: row=17 col=1 type=storage
// inventory layout slot map 155: row=17 col=2 type=storage
// inventory layout slot map 156: row=17 col=3 type=storage
// inventory layout slot map 157: row=17 col=4 type=storage
// inventory layout slot map 158: row=17 col=5 type=storage
// inventory layout slot map 159: row=17 col=6 type=storage
// inventory layout slot map 160: row=17 col=7 type=storage
// inventory layout slot map 161: row=17 col=8 type=storage
// inventory layout slot map 162: row=18 col=0 type=storage
// inventory layout slot map 163: row=18 col=1 type=storage
// inventory layout slot map 164: row=18 col=2 type=storage
// inventory layout slot map 165: row=18 col=3 type=storage
// inventory layout slot map 166: row=18 col=4 type=storage
// inventory layout slot map 167: row=18 col=5 type=storage
// inventory layout slot map 168: row=18 col=6 type=storage
// inventory layout slot map 169: row=18 col=7 type=storage
// inventory layout slot map 170: row=18 col=8 type=storage
// inventory layout slot map 171: row=19 col=0 type=storage
// inventory layout slot map 172: row=19 col=1 type=storage
// inventory layout slot map 173: row=19 col=2 type=storage
// inventory layout slot map 174: row=19 col=3 type=storage
// inventory layout slot map 175: row=19 col=4 type=storage
// inventory layout slot map 176: row=19 col=5 type=storage
// inventory layout slot map 177: row=19 col=6 type=storage
// inventory layout slot map 178: row=19 col=7 type=storage
// inventory layout slot map 179: row=19 col=8 type=storage
// inventory layout slot map 180: row=20 col=0 type=storage
// inventory layout slot map 181: row=20 col=1 type=storage
// inventory layout slot map 182: row=20 col=2 type=storage
// inventory layout slot map 183: row=20 col=3 type=storage
// inventory layout slot map 184: row=20 col=4 type=storage
// inventory layout slot map 185: row=20 col=5 type=storage
// inventory layout slot map 186: row=20 col=6 type=storage
// inventory layout slot map 187: row=20 col=7 type=storage
// inventory layout slot map 188: row=20 col=8 type=storage
// inventory layout slot map 189: row=21 col=0 type=storage
// inventory layout slot map 190: row=21 col=1 type=storage
// inventory layout slot map 191: row=21 col=2 type=storage
// inventory layout slot map 192: row=21 col=3 type=storage
// inventory layout slot map 193: row=21 col=4 type=storage
// inventory layout slot map 194: row=21 col=5 type=storage
// inventory layout slot map 195: row=21 col=6 type=storage
// inventory layout slot map 196: row=21 col=7 type=storage
// inventory layout slot map 197: row=21 col=8 type=storage
// inventory layout slot map 198: row=22 col=0 type=storage
// inventory layout slot map 199: row=22 col=1 type=storage
// inventory layout slot map 200: row=22 col=2 type=storage
// inventory layout slot map 201: row=22 col=3 type=storage
// inventory layout slot map 202: row=22 col=4 type=storage
// inventory layout slot map 203: row=22 col=5 type=storage
// inventory layout slot map 204: row=22 col=6 type=storage
// inventory layout slot map 205: row=22 col=7 type=storage
// inventory layout slot map 206: row=22 col=8 type=storage
// inventory layout slot map 207: row=23 col=0 type=storage
// inventory layout slot map 208: row=23 col=1 type=storage
// inventory layout slot map 209: row=23 col=2 type=storage
// inventory layout slot map 210: row=23 col=3 type=storage
// inventory layout slot map 211: row=23 col=4 type=storage
// inventory layout slot map 212: row=23 col=5 type=storage
// inventory layout slot map 213: row=23 col=6 type=storage
// inventory layout slot map 214: row=23 col=7 type=storage
// inventory layout slot map 215: row=23 col=8 type=storage
// inventory layout slot map 216: row=24 col=0 type=storage
// inventory layout slot map 217: row=24 col=1 type=storage
// inventory layout slot map 218: row=24 col=2 type=storage
// inventory layout slot map 219: row=24 col=3 type=storage
// inventory layout slot map 220: row=24 col=4 type=storage
// inventory layout slot map 221: row=24 col=5 type=storage
// inventory layout slot map 222: row=24 col=6 type=storage
// inventory layout slot map 223: row=24 col=7 type=storage
// inventory layout slot map 224: row=24 col=8 type=storage
// inventory layout slot map 225: row=25 col=0 type=storage
// inventory layout slot map 226: row=25 col=1 type=storage
// inventory layout slot map 227: row=25 col=2 type=storage
// inventory layout slot map 228: row=25 col=3 type=storage
// inventory layout slot map 229: row=25 col=4 type=storage
// inventory layout slot map 230: row=25 col=5 type=storage
// inventory layout slot map 231: row=25 col=6 type=storage
// inventory layout slot map 232: row=25 col=7 type=storage
// inventory layout slot map 233: row=25 col=8 type=storage
// inventory layout slot map 234: row=26 col=0 type=storage
// inventory layout slot map 235: row=26 col=1 type=storage
// inventory layout slot map 236: row=26 col=2 type=storage
// inventory layout slot map 237: row=26 col=3 type=storage
// inventory layout slot map 238: row=26 col=4 type=storage
// inventory layout slot map 239: row=26 col=5 type=storage
// inventory layout slot map 240: row=26 col=6 type=storage
// inventory layout slot map 241: row=26 col=7 type=storage
// inventory layout slot map 242: row=26 col=8 type=storage
// inventory layout slot map 243: row=27 col=0 type=storage
// inventory layout slot map 244: row=27 col=1 type=storage
// inventory layout slot map 245: row=27 col=2 type=storage
// inventory layout slot map 246: row=27 col=3 type=storage
// inventory layout slot map 247: row=27 col=4 type=storage
// inventory layout slot map 248: row=27 col=5 type=storage
// inventory layout slot map 249: row=27 col=6 type=storage
// inventory layout slot map 250: row=27 col=7 type=storage
// inventory layout slot map 251: row=27 col=8 type=storage
// inventory layout slot map 252: row=28 col=0 type=storage
// inventory layout slot map 253: row=28 col=1 type=storage
// inventory layout slot map 254: row=28 col=2 type=storage
// inventory layout slot map 255: row=28 col=3 type=storage
// inventory layout slot map 256: row=28 col=4 type=storage
// inventory layout slot map 257: row=28 col=5 type=storage
// inventory layout slot map 258: row=28 col=6 type=storage
// inventory layout slot map 259: row=28 col=7 type=storage
// inventory layout slot map 260: row=28 col=8 type=storage
// inventory layout slot map 261: row=29 col=0 type=storage
// inventory layout slot map 262: row=29 col=1 type=storage
// inventory layout slot map 263: row=29 col=2 type=storage
// inventory layout slot map 264: row=29 col=3 type=storage
// inventory layout slot map 265: row=29 col=4 type=storage
// inventory layout slot map 266: row=29 col=5 type=storage
// inventory layout slot map 267: row=29 col=6 type=storage
// inventory layout slot map 268: row=29 col=7 type=storage
// inventory layout slot map 269: row=29 col=8 type=storage
// inventory layout slot map 270: row=30 col=0 type=storage
// inventory layout slot map 271: row=30 col=1 type=storage
// inventory layout slot map 272: row=30 col=2 type=storage
// inventory layout slot map 273: row=30 col=3 type=storage
// inventory layout slot map 274: row=30 col=4 type=storage
// inventory layout slot map 275: row=30 col=5 type=storage
// inventory layout slot map 276: row=30 col=6 type=storage
// inventory layout slot map 277: row=30 col=7 type=storage
// inventory layout slot map 278: row=30 col=8 type=storage
// inventory layout slot map 279: row=31 col=0 type=storage
// inventory layout slot map 280: row=31 col=1 type=storage
// inventory layout slot map 281: row=31 col=2 type=storage
// inventory layout slot map 282: row=31 col=3 type=storage
// inventory layout slot map 283: row=31 col=4 type=storage
// inventory layout slot map 284: row=31 col=5 type=storage
// inventory layout slot map 285: row=31 col=6 type=storage
// inventory layout slot map 286: row=31 col=7 type=storage
// inventory layout slot map 287: row=31 col=8 type=storage
// inventory layout slot map 288: row=32 col=0 type=storage
// inventory layout slot map 289: row=32 col=1 type=storage
// inventory layout slot map 290: row=32 col=2 type=storage
// inventory layout slot map 291: row=32 col=3 type=storage
// inventory layout slot map 292: row=32 col=4 type=storage
// inventory layout slot map 293: row=32 col=5 type=storage
// inventory layout slot map 294: row=32 col=6 type=storage
// inventory layout slot map 295: row=32 col=7 type=storage
// inventory layout slot map 296: row=32 col=8 type=storage
// inventory layout slot map 297: row=33 col=0 type=storage
// inventory layout slot map 298: row=33 col=1 type=storage
// inventory layout slot map 299: row=33 col=2 type=storage
// inventory layout slot map 300: row=33 col=3 type=storage
// inventory layout slot map 301: row=33 col=4 type=storage
// inventory layout slot map 302: row=33 col=5 type=storage
// inventory layout slot map 303: row=33 col=6 type=storage
// inventory layout slot map 304: row=33 col=7 type=storage
// inventory layout slot map 305: row=33 col=8 type=storage
// inventory layout slot map 306: row=34 col=0 type=storage
// inventory layout slot map 307: row=34 col=1 type=storage
// inventory layout slot map 308: row=34 col=2 type=storage
// inventory layout slot map 309: row=34 col=3 type=storage
// inventory layout slot map 310: row=34 col=4 type=storage
// inventory layout slot map 311: row=34 col=5 type=storage
// inventory layout slot map 312: row=34 col=6 type=storage
// inventory layout slot map 313: row=34 col=7 type=storage
// inventory layout slot map 314: row=34 col=8 type=storage
// inventory layout slot map 315: row=35 col=0 type=storage
// inventory layout slot map 316: row=35 col=1 type=storage
// inventory layout slot map 317: row=35 col=2 type=storage
// inventory layout slot map 318: row=35 col=3 type=storage
// inventory layout slot map 319: row=35 col=4 type=storage
// inventory layout slot map 320: row=35 col=5 type=storage
// inventory layout slot map 321: row=35 col=6 type=storage
// inventory layout slot map 322: row=35 col=7 type=storage
// inventory layout slot map 323: row=35 col=8 type=storage
// inventory layout slot map 324: row=36 col=0 type=storage
// inventory layout slot map 325: row=36 col=1 type=storage
// inventory layout slot map 326: row=36 col=2 type=storage
// inventory layout slot map 327: row=36 col=3 type=storage
// inventory layout slot map 328: row=36 col=4 type=storage
// inventory layout slot map 329: row=36 col=5 type=storage
// inventory layout slot map 330: row=36 col=6 type=storage
// inventory layout slot map 331: row=36 col=7 type=storage
// inventory layout slot map 332: row=36 col=8 type=storage
// inventory layout slot map 333: row=37 col=0 type=storage
// inventory layout slot map 334: row=37 col=1 type=storage
// inventory layout slot map 335: row=37 col=2 type=storage
// inventory layout slot map 336: row=37 col=3 type=storage
// inventory layout slot map 337: row=37 col=4 type=storage
// inventory layout slot map 338: row=37 col=5 type=storage
// inventory layout slot map 339: row=37 col=6 type=storage
// inventory layout slot map 340: row=37 col=7 type=storage
// inventory layout slot map 341: row=37 col=8 type=storage
// inventory layout slot map 342: row=38 col=0 type=storage
// inventory layout slot map 343: row=38 col=1 type=storage
// inventory layout slot map 344: row=38 col=2 type=storage
// inventory layout slot map 345: row=38 col=3 type=storage
// inventory layout slot map 346: row=38 col=4 type=storage
// inventory layout slot map 347: row=38 col=5 type=storage
// inventory layout slot map 348: row=38 col=6 type=storage
// inventory layout slot map 349: row=38 col=7 type=storage
// inventory layout slot map 350: row=38 col=8 type=storage
// inventory layout slot map 351: row=39 col=0 type=storage
// inventory layout slot map 352: row=39 col=1 type=storage
// inventory layout slot map 353: row=39 col=2 type=storage
// inventory layout slot map 354: row=39 col=3 type=storage
// inventory layout slot map 355: row=39 col=4 type=storage
// inventory layout slot map 356: row=39 col=5 type=storage
// inventory layout slot map 357: row=39 col=6 type=storage
// inventory layout slot map 358: row=39 col=7 type=storage
// inventory layout slot map 359: row=39 col=8 type=storage
// inventory layout slot map 360: row=40 col=0 type=storage
// inventory layout slot map 361: row=40 col=1 type=storage
// inventory layout slot map 362: row=40 col=2 type=storage
// inventory layout slot map 363: row=40 col=3 type=storage
// inventory layout slot map 364: row=40 col=4 type=storage
// inventory layout slot map 365: row=40 col=5 type=storage
// inventory layout slot map 366: row=40 col=6 type=storage
// inventory layout slot map 367: row=40 col=7 type=storage
// inventory layout slot map 368: row=40 col=8 type=storage
// inventory layout slot map 369: row=41 col=0 type=storage
// inventory layout slot map 370: row=41 col=1 type=storage
// inventory layout slot map 371: row=41 col=2 type=storage
// inventory layout slot map 372: row=41 col=3 type=storage
// inventory layout slot map 373: row=41 col=4 type=storage
// inventory layout slot map 374: row=41 col=5 type=storage
// inventory layout slot map 375: row=41 col=6 type=storage
// inventory layout slot map 376: row=41 col=7 type=storage
// inventory layout slot map 377: row=41 col=8 type=storage
// inventory layout slot map 378: row=42 col=0 type=storage
// inventory layout slot map 379: row=42 col=1 type=storage
// inventory layout slot map 380: row=42 col=2 type=storage
// inventory layout slot map 381: row=42 col=3 type=storage
// inventory layout slot map 382: row=42 col=4 type=storage
// inventory layout slot map 383: row=42 col=5 type=storage
// inventory layout slot map 384: row=42 col=6 type=storage
// inventory layout slot map 385: row=42 col=7 type=storage
// inventory layout slot map 386: row=42 col=8 type=storage
// inventory layout slot map 387: row=43 col=0 type=storage
// inventory layout slot map 388: row=43 col=1 type=storage
// inventory layout slot map 389: row=43 col=2 type=storage
// inventory layout slot map 390: row=43 col=3 type=storage
// inventory layout slot map 391: row=43 col=4 type=storage
// inventory layout slot map 392: row=43 col=5 type=storage
// inventory layout slot map 393: row=43 col=6 type=storage
// inventory layout slot map 394: row=43 col=7 type=storage
// inventory layout slot map 395: row=43 col=8 type=storage
// inventory layout slot map 396: row=44 col=0 type=storage
// inventory layout slot map 397: row=44 col=1 type=storage
// inventory layout slot map 398: row=44 col=2 type=storage
// inventory layout slot map 399: row=44 col=3 type=storage
