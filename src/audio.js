/* Tiny procedural sound engine — no audio files, works offline. */

export class GameAudio {
  constructor() {
    this.enabled = true;
    this.ctx = null;
    this.master = null;
    this.rollGain = null;
    this.rollFilter = null;
    this.lastCollide = 0;
    this.noiseBuffer = null;
  }

  init() {
    if (this.ctx) return;
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    this.ctx = new Ctx();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.enabled ? 0.55 : 0;
    this.master.connect(this.ctx.destination);

    const length = Math.floor(this.ctx.sampleRate * 2);
    const buffer = this.ctx.createBuffer(1, length, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < length; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;
      data[i] = last * 3.2;
    }
    this.noiseBuffer = buffer;

    const src = this.ctx.createBufferSource();
    src.buffer = buffer;
    src.loop = true;
    this.rollFilter = this.ctx.createBiquadFilter();
    this.rollFilter.type = 'lowpass';
    this.rollFilter.frequency.value = 420;
    this.rollFilter.Q.value = 0.7;
    this.rollGain = this.ctx.createGain();
    this.rollGain.gain.value = 0;
    src.connect(this.rollFilter).connect(this.rollGain).connect(this.master);
    src.start();
  }

  unlock() {
    this.init();
    if (this.ctx?.state === 'suspended') this.ctx.resume();
  }

  setEnabled(on) {
    this.enabled = on;
    if (this.master && this.ctx) {
      this.master.gain.setTargetAtTime(on ? 0.55 : 0, this.ctx.currentTime, 0.04);
    }
  }

  setRolling(speed, grounded) {
    if (!this.ctx || !this.rollGain) return;
    const target = grounded ? Math.min(1, speed / 13) * 0.07 : 0;
    this.rollGain.gain.setTargetAtTime(target, this.ctx.currentTime, 0.06);
    this.rollFilter.frequency.setTargetAtTime(300 + Math.min(1, speed / 13) * 800, this.ctx.currentTime, 0.1);
  }

  tone(freq, duration = 0.12, type = 'sine', gain = 0.12, slideTo = null, delay = 0) {
    if (!this.ctx || !this.enabled) return;
    const t0 = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t0 + duration);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
    osc.connect(g).connect(this.master);
    osc.start(t0);
    osc.stop(t0 + duration + 0.02);
  }

  noise(duration = 0.3, gain = 0.12, type = 'highpass', freq = 700, delay = 0) {
    if (!this.ctx || !this.enabled) return;
    const t0 = this.ctx.currentTime + delay;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = type;
    filter.frequency.value = freq;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(gain, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
    src.connect(filter).connect(g).connect(this.master);
    src.start(t0);
    src.stop(t0 + duration + 0.02);
  }

  click() { this.unlock(); this.tone(520, 0.055, 'triangle', 0.06, 380); }
  jump() { this.tone(260, 0.18, 'sine', 0.1, 520); this.noise(0.08, 0.03, 'highpass', 1800); }
  land(power = 1) { this.tone(110, 0.13, 'sine', 0.07 * power, 65); this.noise(0.08, 0.04 * power, 'lowpass', 500); }
  collide(power = 1) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    if (now - this.lastCollide < 0.09) return;
    this.lastCollide = now;
    this.tone(150, 0.09, 'square', 0.025 * power, 80);
  }
  checkpoint() {
    [659, 880, 1174].forEach((f, i) => this.tone(f, 0.16, 'triangle', 0.09, null, i * 0.08));
  }
  boost() { this.tone(180, 0.3, 'sawtooth', 0.07, 900); this.noise(0.3, 0.06, 'bandpass', 900); }
  bounce() { this.tone(150, 0.42, 'sine', 0.14, 760); }
  countdown(n) { this.tone(n > 0 ? 440 : 880, 0.14, 'square', 0.07, n > 0 ? 420 : 900); }
  finish() {
    [523, 659, 784, 1046].forEach((f, i) => this.tone(f, 0.5, 'triangle', 0.1, null, i * 0.1));
    [523, 784].forEach((f, i) => this.tone(f / 2, 0.65, 'sine', 0.05, null, i * 0.1));
    this.noise(0.5, 0.05, 'highpass', 1200);
  }
  fail() { this.tone(280, 0.35, 'sawtooth', 0.06, 90); }
  uiOpen() { this.tone(392, 0.08, 'triangle', 0.05, 523); }
  uiBack() { this.tone(523, 0.08, 'triangle', 0.05, 392); }
}

export const audio = new GameAudio();
