/**
 * Background music engine
 * - Procedural energetic electronic BGM (original, free to use)
 * - Optional: load YOUR own mp3/ogg (e.g. if you own Step On Up rights / personal use)
 * Copyrighted tracks cannot be bundled in the game.
 */

class MusicEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.musicGain = null;
    this.enabled = true;
    this.volume = 0.12; // quiet background
    this.playing = false;
    this._timer = null;
    this._step = 0;
    this.customAudio = null; // HTMLAudioElement for user file
    this.mode = 'procedural'; // or 'custom'
  }

  ensure() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = 1;
    this.master.connect(this.ctx.destination);
    this.musicGain = this.ctx.createGain();
    this.musicGain.gain.value = this.volume;
    this.musicGain.connect(this.master);
  }

  resume() {
    this.ensure();
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  }

  setVolume(v) {
    this.volume = Math.max(0, Math.min(1, v));
    if (this.musicGain) this.musicGain.gain.value = this.volume;
    if (this.customAudio) this.customAudio.volume = this.volume;
  }

  setEnabled(on) {
    this.enabled = !!on;
    if (!on) this.stop();
    else if (this.mode === 'custom' && this.customAudio) {
      this.customAudio.play().catch(() => {});
      this.playing = true;
    } else this.start();
  }

  /** Load user-selected audio file as BGM */
  loadFile(file) {
    if (!file) return;
    if (this.customAudio) {
      this.customAudio.pause();
      URL.revokeObjectURL(this.customAudio.src);
    }
    this.stopProcedural();
    const url = URL.createObjectURL(file);
    const a = new Audio(url);
    a.loop = true;
    a.volume = this.volume;
    this.customAudio = a;
    this.mode = 'custom';
    if (this.enabled) {
      a.play().catch(() => {});
      this.playing = true;
    }
    try { localStorage.setItem('bc_music_mode', 'custom'); } catch {}
  }

  useProcedural() {
    if (this.customAudio) {
      this.customAudio.pause();
      this.customAudio = null;
    }
    this.mode = 'procedural';
    try { localStorage.setItem('bc_music_mode', 'procedural'); } catch {}
    if (this.enabled) this.start();
  }

  start() {
    if (!this.enabled) return;
    this.resume();
    if (this.mode === 'custom' && this.customAudio) {
      this.customAudio.play().catch(() => {});
      this.playing = true;
      return;
    }
    if (this.playing && this._timer) return;
    this.playing = true;
    this._step = 0;
    this._schedule();
  }

  stop() {
    this.playing = false;
    this.stopProcedural();
    if (this.customAudio) this.customAudio.pause();
  }

  stopProcedural() {
    if (this._timer) {
      clearTimeout(this._timer);
      this._timer = null;
    }
  }

  _tone(freq, dur, type, gain, when, slide) {
    if (!this.ctx || !this.musicGain) return;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = type;
    const t = when;
    o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(40, slide), t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0001, gain), t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(this.musicGain);
    o.start(t); o.stop(t + dur + 0.05);
  }

  _noiseHit(dur, gain, when, freq) {
    if (!this.ctx || !this.musicGain) return;
    const len = Math.max(1, (this.ctx.sampleRate * dur) | 0);
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    const f = this.ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.value = freq || 800;
    const g = this.ctx.createGain();
    const t = when;
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f); f.connect(g); g.connect(this.musicGain);
    src.start(t); src.stop(t + dur + 0.02);
  }

  /**
   * Energetic electronic loop — original composition in a lively electronic style.
   * NOT a copy of any copyrighted song.
   */
  _schedule() {
    if (!this.playing || this.mode !== 'procedural' || !this.enabled) return;
    this.ensure();
    if (!this.ctx) return;
    const bpm = 128;
    const beat = 60 / bpm;
    const t0 = this.ctx.currentTime + 0.05;
    // 8-beat phrase
    const scale = [130.81, 155.56, 174.61, 196.0, 233.08, 261.63, 311.13, 349.23]; // C minor-ish energy
    const bass = [65.41, 73.42, 82.41, 98.0];

    for (let i = 0; i < 8; i++) {
      const t = t0 + i * beat;
      // kick
      this._tone(120, 0.12, 'sine', 0.22, t, 40);
      this._noiseHit(0.08, 0.12, t, 200);
      // snare on 2,4,6,8
      if (i % 2 === 1) this._noiseHit(0.1, 0.1, t, 2500);
      // hats
      this._noiseHit(0.03, 0.04, t + beat * 0.5, 6000);
      // bass
      const b = bass[i % bass.length];
      this._tone(b, beat * 0.9, 'sawtooth', 0.06, t, b * 0.9);
      // lead arpeggio
      const n = scale[(i * 3 + this._step) % scale.length];
      this._tone(n * 2, beat * 0.45, 'square', 0.035, t + beat * 0.25, n * 2.05);
      if (i % 4 === 0) this._tone(n * 3, beat * 1.5, 'triangle', 0.03, t, n * 2.5);
    }

    this._step = (this._step + 1) % 8;
    this._timer = setTimeout(() => this._schedule(), beat * 8 * 1000 - 30);
  }
}

window.Music = new MusicEngine();
