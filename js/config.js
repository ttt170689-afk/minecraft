/**
 * BrowserCraft deploy config
 * On Vercel: set multiplayer backend URL (if you have one).
 * Leave empty for singleplayer-only or when using same-origin Node server.
 *
 * Example for production multiplayer:
 *   window.BROWSERCRAFT_WS = 'wss://your-vps.example.com/ws';
 */
window.BROWSERCRAFT_CONFIG = {
  // Default WebSocket multiplayer server (empty = same host /ws or user types it)
  defaultWs: '',
  // Show build stamp in console
  build: 'vercel-ready-1',
};

// Optional override via query: ?ws=wss://host/ws
(function () {
  try {
    const q = new URLSearchParams(location.search).get('ws');
    if (q) window.BROWSERCRAFT_CONFIG.defaultWs = q;
  } catch {}
})();
