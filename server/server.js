/**
 * BrowserCraft multiplayer server
 * Serves static game files + WebSocket sync (players, blocks, chat, seed)
 *
 * Start:  cd server && npm install && npm start
 * Tunnel: npm run tunnel   (share URL with friends)
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { WebSocketServer } = require('ws');

const PORT = Number(process.env.PORT) || 8080;
const ROOT = path.join(__dirname, '..'); // minecraft/
const MAX_PLAYERS = 32;
const MAX_CHAT = 200;
const MOVE_RATE_MS = 40;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.md': 'text/markdown; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.zip': 'application/zip',
  '.txt': 'text/plain; charset=utf-8',
};

// Shared world state
const seed = (Math.random() * 1e9) | 0;
/** @type {Map<string, number>} "x,y,z" -> blockId */
const blocks = new Map();
/** @type {Map<string, object>} */
const players = new Map();

const COLORS = [
  0xe74c3c, 0x3498db, 0x2ecc71, 0xf1c40f, 0x9b59b6,
  0x1abc9c, 0xe67e22, 0xff6b81, 0x00cec9, 0xfdaa5e,
];

function uid() {
  return crypto.randomBytes(4).toString('hex');
}

function safeName(n) {
  return String(n || 'Игрок')
    .replace(/[^\w\u0400-\u04FF\- ]/g, '')
    .trim()
    .slice(0, 16) || 'Игрок';
}

function publicPlayers(exceptId) {
  const out = {};
  for (const [id, p] of players) {
    if (id === exceptId) continue;
    out[id] = {
      id,
      name: p.name,
      color: p.color,
      x: p.x, y: p.y, z: p.z,
      yaw: p.yaw, pitch: p.pitch,
    };
  }
  return out;
}

function blocksObject() {
  const o = {};
  for (const [k, v] of blocks) o[k] = v;
  return o;
}

function broadcast(wss, data, exceptWs) {
  const raw = JSON.stringify(data);
  for (const client of wss.clients) {
    if (client !== exceptWs && client.readyState === 1) client.send(raw);
  }
}

function send(ws, data) {
  if (ws.readyState === 1) ws.send(JSON.stringify(data));
}

// HTTP static server (+ health for Render)
const server = http.createServer((req, res) => {
  try {
    let urlPath = decodeURIComponent((req.url || '/').split('?')[0]);

    // Render / load balancer health check
    if (urlPath === '/health' || urlPath === '/healthz') {
      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      });
      res.end(JSON.stringify({
        ok: true,
        players: players.size,
        blocks: blocks.size,
        seed,
        uptime: process.uptime(),
      }));
      return;
    }

    if (urlPath === '/') urlPath = '/index.html';
    // prevent path escape
    const filePath = path.normalize(path.join(ROOT, urlPath));
    if (!filePath.startsWith(ROOT)) {
      res.writeHead(403); res.end('Forbidden'); return;
    }
    // block serving node_modules
    if (filePath.includes(`${path.sep}node_modules${path.sep}`)) {
      res.writeHead(404); res.end('Not found'); return;
    }
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      res.writeHead(404); res.end('Not found'); return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=3600',
    });
    fs.createReadStream(filePath).pipe(res);
  } catch (e) {
    res.writeHead(500); res.end('Error');
  }
});

const wss = new WebSocketServer({ server, path: '/ws' });

wss.on('connection', (ws, req) => {
  if (players.size >= MAX_PLAYERS) {
    send(ws, { type: 'error', message: 'Сервер полон' });
    ws.close();
    return;
  }

  const id = uid();
  const color = COLORS[players.size % COLORS.length];
  const player = {
    id,
    name: 'Игрок_' + id.slice(0, 4),
    color,
    x: 0.5, y: 40, z: 0.5,
    yaw: 0, pitch: 0,
    lastMove: 0,
    ws,
  };
  players.set(id, player);
  ws._playerId = id;

  console.log(`[+] ${player.name} (${id})  players=${players.size}  ip=${req.socket.remoteAddress}`);

  send(ws, {
    type: 'welcome',
    id,
    seed,
    name: player.name,
    color,
    players: publicPlayers(id),
    blocks: blocksObject(),
  });

  broadcast(wss, {
    type: 'join',
    player: {
      id, name: player.name, color,
      x: player.x, y: player.y, z: player.z,
      yaw: 0, pitch: 0,
    },
  }, ws);

  ws.on('message', (raw) => {
    let msg;
    try {
      msg = JSON.parse(String(raw));
    } catch {
      return;
    }
    const p = players.get(id);
    if (!p) return;

    switch (msg.type) {
      case 'hello': {
        p.name = safeName(msg.name);
        broadcast(wss, { type: 'name', id, name: p.name }, null);
        break;
      }
      case 'move': {
        const now = Date.now();
        if (now - p.lastMove < MOVE_RATE_MS) return;
        p.lastMove = now;
        const x = Number(msg.x), y = Number(msg.y), z = Number(msg.z);
        const yaw = Number(msg.yaw), pitch = Number(msg.pitch);
        if (![x, y, z, yaw, pitch].every(Number.isFinite)) return;
        // soft clamp
        if (Math.abs(x) > 5000 || Math.abs(z) > 5000 || y < -5 || y > 200) return;
        p.x = x; p.y = y; p.z = z; p.yaw = yaw; p.pitch = pitch;
        broadcast(wss, {
          type: 'move',
          id,
          x, y, z, yaw, pitch,
        }, ws);
        break;
      }
      case 'block': {
        const x = Math.floor(Number(msg.x));
        const y = Math.floor(Number(msg.y));
        const z = Math.floor(Number(msg.z));
        const blockId = Math.floor(Number(msg.id));
        if (![x, y, z, blockId].every(Number.isFinite)) return;
        if (y < 0 || y >= 64) return;
        if (blockId < 0 || blockId > 255) return;
        // bedrock protection at y=0
        if (y === 0 && blockId === 0) return;
        const key = `${x},${y},${z}`;
        blocks.set(key, blockId);
        // keep map from exploding: drop air entries
        if (blockId === 0) {
          // still keep so others remove generated terrain blocks
        }
        if (blocks.size > 50000) {
          // prune oldest air? simple: clear nothing, just warn
          console.warn('block map large:', blocks.size);
        }
        broadcast(wss, { type: 'block', x, y, z, id: blockId, by: p.id }, null);
        break;
      }
      case 'chat': {
        const text = String(msg.text || '').trim().slice(0, MAX_CHAT);
        if (!text) return;
        console.log(`[chat] ${p.name}: ${text}`);
        broadcast(wss, {
          type: 'chat',
          id: p.id,
          name: p.name,
          color: p.color,
          text,
          t: Date.now(),
        }, null);
        break;
      }
      case 'ping': {
        send(ws, { type: 'pong', t: msg.t || Date.now() });
        break;
      }
      default:
        break;
    }
  });

  ws.on('close', () => {
    players.delete(id);
    console.log(`[-] ${player.name} (${id})  players=${players.size}`);
    broadcast(wss, { type: 'leave', id }, null);
  });

  ws.on('error', () => {
    try { ws.close(); } catch {}
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('');
  console.log('========================================');
  console.log('  BrowserCraft SERVER online');
  console.log('========================================');
  console.log(`  Port:    ${PORT}`);
  console.log(`  Local:   http://localhost:${PORT}`);
  console.log(`  WS:      ws://localhost:${PORT}/ws`);
  console.log(`  Health:  http://localhost:${PORT}/health`);
  console.log(`  Seed:    ${seed}`);
  console.log(`  Env:     ${process.env.NODE_ENV || 'development'}`);
  console.log('  Deploy:  Render / Railway / VPS / local');
  console.log('========================================');
  console.log('');
});
