/**
 * Procedural Minecraft-like SFX via Web Audio API (no external files)
 */
class GameAudio {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.enabled = true;
    this.volume = 0.45;
    this._stepTimer = 0;
    this._hurtCooldown = 0;
  }

  ensure() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.volume;
    this.master.connect(this.ctx.destination);
  }

  resume() {
    this.ensure();
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  }

  setVolume(v) {
    this.volume = Math.max(0, Math.min(1, v));
    if (this.master) this.master.gain.value = this.volume;
  }

  _noiseBuffer(duration = 0.15) {
    this.ensure();
    if (!this.ctx) return null;
    const len = Math.max(1, (this.ctx.sampleRate * duration) | 0);
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    return buf;
  }

  _playNoise(opts = {}) {
    if (!this.enabled) return;
    this.ensure();
    if (!this.ctx) return;
    const {
      duration = 0.12,
      gain = 0.3,
      filterFreq = 1200,
      filterType = 'lowpass',
      pitch = 1,
      attack = 0.005,
      decay = 0.1,
    } = opts;
    const src = this.ctx.createBufferSource();
    src.buffer = this._noiseBuffer(duration * 1.2);
    src.playbackRate.value = pitch;
    const filt = this.ctx.createBiquadFilter();
    filt.type = filterType;
    filt.frequency.value = filterFreq;
    const g = this.ctx.createGain();
    const t = this.ctx.currentTime;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0001, gain), t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay);
    src.connect(filt); filt.connect(g); g.connect(this.master);
    src.start(t);
    src.stop(t + duration + 0.05);
  }

  _tone(freq, duration, type = 'square', gain = 0.15, slideTo = null) {
    if (!this.enabled) return;
    this.ensure();
    if (!this.ctx) return;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = type;
    const t = this.ctx.currentTime;
    o.frequency.setValueAtTime(freq, t);
    if (slideTo != null) o.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), t + duration);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0001, gain), t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    o.connect(g); g.connect(this.master);
    o.start(t);
    o.stop(t + duration + 0.02);
  }

  click() { this._tone(880, 0.05, 'square', 0.08); }
  menuOpen() { this._tone(440, 0.08, 'triangle', 0.1); this._tone(660, 0.1, 'triangle', 0.06); }
  menuClose() { this._tone(660, 0.06, 'triangle', 0.08); this._tone(330, 0.1, 'triangle', 0.05); }

  place(blockKey) {
    const soft = blockKey === 'sand' || blockKey === 'snow' || blockKey === 'gravel' || blockKey === 'dirt' || blockKey === 'grass';
    this._playNoise({
      duration: 0.1,
      gain: 0.25,
      filterFreq: soft ? 900 : 1800,
      pitch: soft ? 0.8 : 1.1,
      decay: 0.08,
    });
  }

  break(blockKey) {
    const glass = blockKey === 'glass';
    this._playNoise({
      duration: glass ? 0.18 : 0.14,
      gain: glass ? 0.35 : 0.3,
      filterFreq: glass ? 4000 : 1400,
      filterType: glass ? 'highpass' : 'bandpass',
      pitch: glass ? 1.4 : 0.9,
      decay: glass ? 0.15 : 0.1,
    });
    if (glass) this._tone(1200, 0.08, 'sawtooth', 0.05, 400);
  }

  step(onGround, flying) {
    if (!onGround || flying) return;
    this._stepTimer = 0;
    this._playNoise({
      duration: 0.06,
      gain: 0.12,
      filterFreq: 700,
      pitch: 0.7 + Math.random() * 0.3,
      decay: 0.05,
    });
  }

  jump() {
    this._tone(200, 0.1, 'triangle', 0.1, 120);
    this._playNoise({ duration: 0.08, gain: 0.1, filterFreq: 500, decay: 0.06 });
  }

  door(open) {
    // wooden creak + latch
    this._playNoise({
      duration: 0.2,
      gain: 0.28,
      filterFreq: open ? 900 : 700,
      pitch: open ? 0.85 : 0.7,
      decay: 0.18,
    });
    this._tone(open ? 180 : 140, 0.12, 'triangle', 0.08, open ? 90 : 70);
    setTimeout(() => this._tone(open ? 320 : 250, 0.05, 'square', 0.05), 80);
  }

  lever() {
    this._tone(150, 0.06, 'square', 0.12);
    this._playNoise({ duration: 0.05, gain: 0.15, filterFreq: 2000, decay: 0.04 });
  }

  redstoneClick() {
    this._tone(900, 0.04, 'square', 0.06);
    this._tone(600, 0.05, 'square', 0.04);
  }

  lamp() {
    this._tone(240, 0.08, 'sine', 0.07);
  }

  swing() {
    this._playNoise({
      duration: 0.1,
      gain: 0.2,
      filterFreq: 2500,
      filterType: 'highpass',
      pitch: 1.2,
      decay: 0.07,
    });
  }

  hit() {
    this._playNoise({ duration: 0.1, gain: 0.35, filterFreq: 800, pitch: 0.6, decay: 0.08 });
    this._tone(100, 0.08, 'sawtooth', 0.1, 60);
  }

  hurt() {
    this._tone(180, 0.15, 'sawtooth', 0.12, 80);
    this._playNoise({ duration: 0.12, gain: 0.2, filterFreq: 600, decay: 0.1 });
  }

  heal() {
    this._tone(520, 0.1, 'sine', 0.1);
    this._tone(780, 0.12, 'sine', 0.08);
  }

  death() {
    this._tone(220, 0.4, 'sawtooth', 0.15, 60);
    this._playNoise({ duration: 0.35, gain: 0.25, filterFreq: 400, decay: 0.3 });
  }

  eat() {
    this._playNoise({ duration: 0.08, gain: 0.15, filterFreq: 1500, pitch: 1.3, decay: 0.06 });
    setTimeout(() => this._playNoise({ duration: 0.07, gain: 0.12, filterFreq: 1200, pitch: 1.1, decay: 0.05 }), 70);
  }

  bow() {
    this._tone(300, 0.08, 'triangle', 0.08, 500);
    this._playNoise({ duration: 0.1, gain: 0.15, filterFreq: 3000, filterType: 'highpass', decay: 0.08 });
  }

  pop() {
    this._tone(700, 0.06, 'square', 0.08, 1100);
  }

  levelUp() {
    [523, 659, 784, 1046].forEach((f, i) => {
      setTimeout(() => this._tone(f, 0.12, 'triangle', 0.1), i * 90);
    });
  }

  ui() { this.click(); }

  // —— Mobs ——
  _growl(base, spread = 30) {
    this._tone(base + Math.random() * spread, 0.25, 'sawtooth', 0.08, base * 0.7);
    this._playNoise({ duration: 0.2, gain: 0.12, filterFreq: 400, pitch: 0.5, decay: 0.18 });
  }

  zombieIdle() { this._growl(90, 20); }
  zombieHurt() { this._tone(140, 0.15, 'sawtooth', 0.12, 70); this._playNoise({ duration: 0.12, gain: 0.2, filterFreq: 500, decay: 0.1 }); }
  zombieDeath() { this._tone(100, 0.4, 'sawtooth', 0.15, 40); }

  skeletonIdle() { this._tone(800 + Math.random() * 200, 0.08, 'triangle', 0.05); this._playNoise({ duration: 0.1, gain: 0.08, filterFreq: 3000, filterType: 'highpass', decay: 0.08 }); }
  skeletonHurt() { this._playNoise({ duration: 0.12, gain: 0.2, filterFreq: 2500, filterType: 'bandpass', pitch: 1.3, decay: 0.1 }); }
  skeletonDeath() { this._playNoise({ duration: 0.25, gain: 0.25, filterFreq: 2000, filterType: 'highpass', decay: 0.2 }); }

  creeperIdle() { this._tone(60, 0.3, 'sine', 0.05); }
  creeperHurt() { this._tone(200, 0.1, 'square', 0.1, 100); }
  creeperDeath() { this.explode(); }
  creeperFuse() {
    // hiss rising
    for (let i = 0; i < 6; i++) {
      setTimeout(() => this._playNoise({ duration: 0.08, gain: 0.08 + i * 0.03, filterFreq: 2000 + i * 400, filterType: 'highpass', decay: 0.06 }), i * 120);
    }
  }
  explode() {
    this._playNoise({ duration: 0.5, gain: 0.55, filterFreq: 350, pitch: 0.4, decay: 0.45 });
    this._tone(70, 0.4, 'sawtooth', 0.25, 30);
  }

  spiderIdle() { this._playNoise({ duration: 0.15, gain: 0.1, filterFreq: 4000, filterType: 'highpass', pitch: 1.5, decay: 0.12 }); }
  spiderHurt() { this._tone(400, 0.1, 'sawtooth', 0.1, 200); }
  spiderDeath() { this._playNoise({ duration: 0.2, gain: 0.2, filterFreq: 1500, decay: 0.18 }); }

  endermanIdle() { this._tone(200 + Math.random() * 400, 0.3, 'sine', 0.06, 100); }
  endermanHurt() { this._tone(150, 0.2, 'sawtooth', 0.12, 80); }
  endermanDeath() { this._tone(100, 0.5, 'sawtooth', 0.15, 40); }
  endermanTp() {
    this._playNoise({ duration: 0.15, gain: 0.2, filterFreq: 5000, filterType: 'highpass', decay: 0.12 });
    this._tone(900, 0.1, 'sine', 0.08, 200);
  }

  slimeIdle() { this._playNoise({ duration: 0.1, gain: 0.12, filterFreq: 600, pitch: 0.8, decay: 0.08 }); }
  slimeHurt() { this._playNoise({ duration: 0.12, gain: 0.18, filterFreq: 800, pitch: 1.1, decay: 0.1 }); }
  slimeDeath() { this._playNoise({ duration: 0.2, gain: 0.22, filterFreq: 500, pitch: 0.6, decay: 0.18 }); }

  cowIdle() { this._tone(120, 0.35, 'sawtooth', 0.1, 90); }
  cowHurt() { this._tone(160, 0.15, 'sawtooth', 0.12, 100); }
  cowDeath() { this._tone(90, 0.4, 'sawtooth', 0.12, 50); }

  pigIdle() { this._tone(280, 0.12, 'square', 0.08, 220); this._tone(320, 0.1, 'square', 0.05); }
  pigHurt() { this._tone(350, 0.12, 'square', 0.1, 200); }
  pigDeath() { this._tone(200, 0.3, 'square', 0.1, 80); }

  sheepIdle() { this._tone(300, 0.2, 'triangle', 0.08, 250); }
  sheepHurt() { this._tone(350, 0.12, 'triangle', 0.1, 200); }
  sheepDeath() { this._tone(220, 0.3, 'triangle', 0.1, 100); }

  chickenIdle() { this._tone(600 + Math.random() * 200, 0.08, 'square', 0.06); this._tone(900, 0.05, 'square', 0.04); }
  chickenHurt() { this._tone(700, 0.1, 'square', 0.1, 400); }
  chickenDeath() { this._playNoise({ duration: 0.15, gain: 0.15, filterFreq: 2000, decay: 0.12 }); this._tone(400, 0.15, 'square', 0.08, 100); }

  mobStep() {
    this._playNoise({ duration: 0.05, gain: 0.08, filterFreq: 500, pitch: 0.6, decay: 0.04 });
  }

  pickup() {
    this._tone(880, 0.05, 'sine', 0.08);
    this._tone(1320, 0.08, 'sine', 0.06);
  }
}

window.SFX = new GameAudio();
