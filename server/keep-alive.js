/**
 * BrowserCraft keep-alive: game server + auto-restarting public tunnel.
 * Free Cloudflare quick tunnels are NOT permanent — this restarts them
 * and always writes the current URL to tunnel-url.txt / public endpoint.
 *
 * Usage: node keep-alive.js
 */

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const http = require('http');

const ROOT = path.join(__dirname, '..');
const URL_FILE = path.join(ROOT, 'TUNNEL_URL.txt');
const URL_JSON = path.join(ROOT, 'tunnel.json');
const LOG_DIR = '/tmp';

let serverProc = null;
let tunnelProc = null;
let currentUrl = '';
let restarts = 0;
let starting = false;

function log(...a) {
  const line = `[${new Date().toISOString()}] ${a.join(' ')}`;
  console.log(line);
  try { fs.appendFileSync(path.join(LOG_DIR, 'bc-keepalive.log'), line + '\n'); } catch {}
}

function writeUrl(url) {
  currentUrl = url || '';
  const text = [
    'BrowserCraft LIVE URL',
    '=====================',
    url ? url : '(туннель поднимается…)',
    '',
    'Открой ссылку в браузере.',
    'Адрес в мультиплеере оставь ПУСТЫМ.',
    'Ctrl+F5 если кэш.',
    '',
    'Внимание: бесплатный Cloudflare quick-tunnel',
    'НЕ вечный — keep-alive перезапускает его.',
    'Ссылка может меняться после рестарта.',
    'Обновлено: ' + new Date().toISOString(),
    '',
  ].join('\n');
  try {
    fs.writeFileSync(URL_FILE, text);
    fs.writeFileSync(URL_JSON, JSON.stringify({
      url,
      updatedAt: Date.now(),
      restarts,
      permanent: false,
      note: 'Free quick tunnels change URL on restart. For permanent URL use Cloudflare named tunnel / VPS / ngrok reserved domain.',
    }, null, 2));
  } catch (e) {
    log('writeUrl error', e.message);
  }
  log('PUBLIC URL =>', url || '(none)');
}

function isPortUp(port) {
  return new Promise((resolve) => {
    const req = http.get({ host: '127.0.0.1', port, path: '/', timeout: 1500 }, (res) => {
      res.resume();
      resolve(true);
    });
    req.on('error', () => resolve(false));
    req.on('timeout', () => { req.destroy(); resolve(false); });
  });
}

function startServer() {
  if (serverProc && !serverProc.killed) return;
  log('Starting game server…');
  serverProc = spawn('node', ['server.js'], {
    cwd: __dirname,
    stdio: ['ignore', 'pipe', 'pipe'],
    env: process.env,
  });
  serverProc.stdout.on('data', (d) => process.stdout.write('[server] ' + d));
  serverProc.stderr.on('data', (d) => process.stderr.write('[server] ' + d));
  serverProc.on('exit', (code) => {
    log('Game server exited', code, '— restart in 2s');
    serverProc = null;
    setTimeout(startServer, 2000);
  });
}

function killTunnel() {
  if (!tunnelProc) return;
  try {
    tunnelProc.kill('SIGTERM');
    // also kill child cloudflared if npm wrapper
    spawn('pkill', ['-f', 'cloudflared tunnel --url']);
  } catch {}
  tunnelProc = null;
}

function startTunnel() {
  if (starting) return;
  starting = true;
  killTunnel();
  restarts++;
  writeUrl('');
  log('Starting cloudflared quick tunnel (restart #' + restarts + ')…');

  const args = ['--yes', 'cloudflared', 'tunnel', '--url', 'http://127.0.0.1:8080'];
  tunnelProc = spawn('npx', args, {
    cwd: __dirname,
    stdio: ['ignore', 'pipe', 'pipe'],
    env: process.env,
  });

  let buf = '';
  const onData = (chunk) => {
    const s = chunk.toString();
    buf += s;
    process.stdout.write('[tunnel] ' + s);
    const m = s.match(/https:\/\/[a-zA-Z0-9.-]+\.trycloudflare\.com/);
    if (m) writeUrl(m[0]);
    // also search full buffer
    const m2 = buf.match(/https:\/\/[a-zA-Z0-9.-]+\.trycloudflare\.com/g);
    if (m2 && m2.length) writeUrl(m2[m2.length - 1]);
  };
  tunnelProc.stdout.on('data', onData);
  tunnelProc.stderr.on('data', onData);

  tunnelProc.on('exit', (code) => {
    log('Tunnel process exited', code, '— restart in 3s');
    tunnelProc = null;
    starting = false;
    writeUrl('');
    setTimeout(startTunnel, 3000);
  });

  // give it time to print URL
  setTimeout(() => { starting = false; }, 15000);
}

async function healthLoop() {
  const up = await isPortUp(8080);
  if (!up) {
    log('Port 8080 down — ensuring server');
    startServer();
  }
  // if we have a URL, probe it
  if (currentUrl) {
    try {
      await new Promise((resolve) => {
        const u = new URL(currentUrl);
        const req = require('https').request({
          hostname: u.hostname,
          path: '/',
          method: 'HEAD',
          timeout: 8000,
        }, (res) => {
          if (res.statusCode === 530 || res.statusCode >= 500) {
            log('Tunnel HTTP', res.statusCode, '— forcing restart');
            killTunnel();
            starting = false;
            setTimeout(startTunnel, 1000);
          }
          resolve();
        });
        req.on('error', () => {
          log('Tunnel probe error — restart');
          killTunnel();
          starting = false;
          setTimeout(startTunnel, 1000);
          resolve();
        });
        req.on('timeout', () => {
          req.destroy();
          resolve();
        });
        req.end();
      });
    } catch {}
  } else if (!tunnelProc) {
    startTunnel();
  }
}

// tiny status HTTP on 8081 so user can always ask "what's the link"
const statusServer = http.createServer((req, res) => {
  if (req.url === '/url' || req.url === '/tunnel.json') {
    res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    res.end(JSON.stringify({ url: currentUrl, restarts, updatedAt: Date.now() }));
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`<!doctype html><meta charset=utf-8><title>BrowserCraft Tunnel</title>
  <body style="font-family:system-ui;background:#111;color:#eee;padding:40px">
  <h1>BrowserCraft</h1>
  <p>Текущий публичный URL:</p>
  <p style="font-size:1.4rem">${currentUrl
    ? `<a style="color:#6cf" href="${currentUrl}">${currentUrl}</a>`
    : 'поднимается… обнови через 10 сек'}</p>
  <p>Рестартов туннеля: ${restarts}</p>
  <p style="color:#888">Бесплатный quick-tunnel Cloudflare не вечный. Keep-alive перезапускает его автоматически. Для <b>постоянной</b> ссылки нужен VPS / named Cloudflare tunnel / ngrok paid.</p>
  <script>setTimeout(()=>location.reload(), 8000)</script>
  </body>`);
});
statusServer.listen(8081, '0.0.0.0', () => log('Status page http://127.0.0.1:8081'));

// also expose current url via game server static file (TUNNEL_URL.txt already in ROOT)

async function main() {
  log('=== BrowserCraft keep-alive start ===');
  // kill stray tunnels
  try { spawn('pkill', ['-f', 'cloudflared tunnel --url']); } catch {}

  // if server already running on 8080, don't double-start
  if (!(await isPortUp(8080))) startServer();
  else log('Game server already on :8080');

  await new Promise((r) => setTimeout(r, 1500));
  startTunnel();
  setInterval(healthLoop, 20000);
}

main().catch((e) => {
  log('fatal', e);
  process.exit(1);
});
