/**
 * Player skins — presets, custom RGB, and UPLOAD image (Minecraft-style 64x64 or any image)
 */

const SKIN_PRESETS = [
  { id: 'steve', name: 'Стив', skin: 0xc68642, hair: 0x3a2a1a, shirt: 0x3a7ab8, pants: 0x2c3e50, shoes: 0x1a1a1a },
  { id: 'alex', name: 'Алекс', skin: 0xe0ac69, hair: 0xc45c26, shirt: 0x3d8b6e, pants: 0x5a3a2a, shoes: 0x3a2a1a },
  { id: 'zombie', name: 'Зомби-скин', skin: 0x6b9e5a, hair: 0x2a4a2a, shirt: 0x3a5a7a, pants: 0x2a3a5a, shoes: 0x1a2a1a },
  { id: 'enderman', name: 'Эндер', skin: 0x1a0a2a, hair: 0x0a0a12, shirt: 0x2a0a3a, pants: 0x100018, shoes: 0x000000 },
  { id: 'creeper', name: 'Крипер', skin: 0x3d8c3d, hair: 0x2a602a, shirt: 0x3d8c3d, pants: 0x2a602a, shoes: 0x1a401a },
  { id: 'nether', name: 'Адский', skin: 0x8b3a2a, hair: 0x1a0a0a, shirt: 0x4a1010, pants: 0x2a0808, shoes: 0x100000 },
  { id: 'diamond', name: 'Алмазный', skin: 0xc68642, hair: 0x3a2a1a, shirt: 0x5ce1e6, pants: 0x2a8a9a, shoes: 0x1a5a6a },
  { id: 'gold', name: 'Золотой', skin: 0xe8c878, hair: 0xf1c40f, shirt: 0xf1c40f, pants: 0xc9a227, shoes: 0x8b6914 },
  { id: 'shadow', name: 'Тень', skin: 0x333333, hair: 0x111111, shirt: 0x222222, pants: 0x111111, shoes: 0x000000 },
  { id: 'rainbow', name: 'Радуга', skin: 0xffb6c1, hair: 0xff69b4, shirt: 0x9b59b6, pants: 0x3498db, shoes: 0x2ecc71 },
];

function loadSkin() {
  try {
    const raw = localStorage.getItem('bc_skin');
    if (raw) return JSON.parse(raw);
  } catch {}
  return { ...SKIN_PRESETS[0] };
}

function saveSkin(skin) {
  try {
    // Don't store huge dataURLs twice — keep texture in separate key if present
    const copy = { ...skin };
    if (copy.textureData && copy.textureData.length > 200000) {
      localStorage.setItem('bc_skin_tex', copy.textureData);
      copy.textureData = '__indexed__';
    }
    localStorage.setItem('bc_skin', JSON.stringify(copy));
  } catch (e) {
    console.warn('skin save', e);
  }
}

function resolveSkinTexture(skin) {
  if (!skin) return null;
  if (skin.textureData && skin.textureData !== '__indexed__') return skin.textureData;
  if (skin.textureData === '__indexed__') {
    try { return localStorage.getItem('bc_skin_tex'); } catch { return null; }
  }
  return null;
}

function hexToCss(h) {
  return '#' + (h >>> 0).toString(16).padStart(6, '0');
}

function parseHex(str, fallback) {
  if (!str) return fallback;
  let s = String(str).replace('#', '');
  if (s.length === 3) s = s.split('').map((c) => c + c).join('');
  const n = parseInt(s, 16);
  return Number.isFinite(n) ? n : fallback;
}

/**
 * Load image file → skin object with textureData (data URL) + sampled colors
 */
function skinFromImageFile(file) {
  return new Promise((resolve, reject) => {
    if (!file || !file.type.startsWith('image/')) {
      reject(new Error('Нужна картинка PNG/JPG'));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const c = document.createElement('canvas');
        // Normalize to 64x64 layout (classic MC skin) or stretch any image
        c.width = 64;
        c.height = 64;
        const ctx = c.getContext('2d');
        ctx.imageSmoothingEnabled = false;
        ctx.clearRect(0, 0, 64, 64);
        // If already 64x32 or 64x64, draw as-is; else stretch
        if (img.width === 64 && (img.height === 32 || img.height === 64)) {
          ctx.drawImage(img, 0, 0);
        } else {
          ctx.drawImage(img, 0, 0, 64, 64);
        }
        const data = ctx.getImageData(0, 0, 64, 64).data;
        const sample = (x, y) => {
          const i = (y * 64 + x) * 4;
          return (data[i] << 16) | (data[i + 1] << 8) | data[i + 2];
        };
        // Classic regions: head 8,8 face; body 20,20; leg 4,20; arm 44,20
        const skin = sample(10, 12);
        const hair = sample(10, 2);
        const shirt = sample(20, 22);
        const pants = sample(4, 22);
        const shoes = sample(4, 28);
        const dataUrl = c.toDataURL('image/png');
        resolve({
          id: 'upload',
          name: (file.name || 'Свой скин').slice(0, 24),
          skin, hair, shirt, pants, shoes,
          textureData: dataUrl,
          uploaded: true,
        });
      };
      img.onerror = () => reject(new Error('Не удалось прочитать изображение'));
      img.src = reader.result;
    };
    reader.onerror = () => reject(new Error('Ошибка чтения файла'));
    reader.readAsDataURL(file);
  });
}

/** Create THREE texture from skin if uploaded */
function skinToTexture(skin) {
  const src = resolveSkinTexture(skin);
  if (!src || typeof THREE === 'undefined') return null;
  const loader = new THREE.TextureLoader();
  // data URL
  const tex = loader.load(src);
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  return tex;
}

/**
 * UV-mapped simple limb from classic skin layout
 * face: 'head'|'body'|'arm'|'leg'
 */
function skinFaceMaterial(skin, face) {
  const src = resolveSkinTexture(skin);
  if (!src) return null;
  const img = new Image();
  // sync path via canvas
  return null; // built async in HandView
}

window.SKIN_PRESETS = SKIN_PRESETS;
window.loadSkin = loadSkin;
window.saveSkin = saveSkin;
window.resolveSkinTexture = resolveSkinTexture;
window.hexToCss = hexToCss;
window.parseHex = parseHex;
window.skinFromImageFile = skinFromImageFile;
window.skinToTexture = skinToTexture;
