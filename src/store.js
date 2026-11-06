/* Local persistence, leaderboards, and shareable challenge codes. */

const KEY = 'marble-rush-v1';
const MAX_CUSTOM = 40;

const defaults = () => ({
  v: 1,
  settings: { sound: true, tilt: false, quality: 'auto', ghost: true },
  records: {},
  custom: [],
  draft: null,
});

function safeParse(raw) {
  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return defaults();
    const d = defaults();
    return {
      ...d,
      ...parsed,
      settings: { ...d.settings, ...(parsed.settings || {}) },
      records: parsed.records && typeof parsed.records === 'object' ? parsed.records : {},
      custom: Array.isArray(parsed.custom) ? parsed.custom : [],
    };
  } catch {
    return defaults();
  }
}

export const store = {
  data: safeParse((() => { try { return localStorage.getItem(KEY); } catch { return null; } })()),

  persist() {
    try {
      localStorage.setItem(KEY, JSON.stringify(this.data));
      return true;
    } catch {
      // Storage is full: shed the fattest ghost replays first, then retry.
      for (const id of Object.keys(this.data.records)) {
        if (this.data.records[id]?.ghost) {
          delete this.data.records[id].ghost;
          try { localStorage.setItem(KEY, JSON.stringify(this.data)); return true; } catch { /* keep shedding */ }
        }
      }
      return false;
    }
  },

  record(mapId) {
    return this.data.records[mapId] || null;
  },

  bestMs(mapId) {
    return this.data.records[mapId]?.best ?? null;
  },

  saveBest(mapId, ms, ghost, splits = null) {
    const prev = this.data.records[mapId] || {};
    if (!prev.best || ms < prev.best) {
      this.data.records[mapId] = { ...prev, best: Math.round(ms), ghost: ghost || null, splits, date: Date.now() };
      this.persist();
      return true;
    }
    this.data.records[mapId] = { ...prev, attempts: (prev.attempts || 0) + 1 };
    this.persist();
    return false;
  },

  bumpAttempt(mapId) {
    const prev = this.data.records[mapId] || {};
    this.data.records[mapId] = { ...prev, attempts: (prev.attempts || 0) + 1 };
    this.persist();
  },

  setSetting(key, value) {
    this.data.settings[key] = value;
    this.persist();
  },

  customMaps() {
    return this.data.custom;
  },

  getCustom(id) {
    return this.data.custom.find((m) => m.id === id) || null;
  },

  addCustom(map) {
    const clean = this.data.custom.filter((m) => m.id !== map.id);
    clean.unshift(map);
    this.data.custom = clean.slice(0, MAX_CUSTOM);
    this.persist();
  },

  removeCustom(id) {
    this.data.custom = this.data.custom.filter((m) => m.id !== id);
    delete this.data.records[id];
    this.persist();
  },

  saveDraft(map) {
    this.data.draft = map;
    this.persist();
  },

  clearDraft() {
    this.data.draft = null;
    this.persist();
  },

  allMaps() {
    return [...this.data.custom, ...builtinFallback()];
  },
};

// Filled in by main.js to avoid a circular import with maps.js.
let builtinFallback = () => [];
export function setBuiltinProvider(fn) {
  builtinFallback = fn;
}

export function leaderboardFor(map, includeYou = true) {
  const rows = [];
  for (const r of map.rivals || []) {
    rows.push({ name: r.name, time: r.time, color: r.color || '#ffb86b', you: false });
  }
  if (map.creatorBest) {
    rows.push({ name: map.creatorName || 'Creator', time: map.creatorBest / 1000, color: '#7dd3fc', you: false, creator: true });
  }
  const best = store.bestMs(map.id);
  if (includeYou && best) {
    rows.push({ name: 'You', time: best / 1000, color: '#ff6b35', you: true });
  }
  rows.sort((a, b) => a.time - b.time);
  return rows;
}

export function rankFor(map) {
  const best = store.bestMs(map.id);
  if (!best) return null;
  const rows = leaderboardFor(map, true);
  const index = rows.findIndex((r) => r.you);
  return index >= 0 ? index + 1 : null;
}

export function formatTime(ms, showMs = true) {
  if (ms == null || Number.isNaN(ms)) return '--:--.---';
  const total = Math.max(0, ms);
  const minutes = Math.floor(total / 60000);
  const seconds = Math.floor((total % 60000) / 1000);
  const millis = Math.floor(total % 1000);
  const base = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  return showMs ? `${base}.${String(millis).padStart(3, '0')}` : base;
}

export function formatShort(seconds) {
  if (seconds == null) return '--';
  return seconds < 60 ? seconds.toFixed(2) : formatTime(seconds * 1000, false);
}

export function formatDelta(ms) {
  if (ms == null || Number.isNaN(ms)) return '';
  const sign = ms <= 0 ? '−' : '+';
  const abs = Math.abs(ms);
  return `${sign}${(abs / 1000).toFixed(2)}s`;
}

export function medalFor(ms, parSeconds) {
  if (!ms || !parSeconds) return 'bronze';
  const seconds = ms / 1000;
  if (seconds <= parSeconds * 0.82) return 'gold';
  if (seconds <= parSeconds) return 'silver';
  if (seconds <= parSeconds * 1.45) return 'bronze';
  return 'finisher';
}

/* ---------------- challenge codes ---------------- */

function bytesToB64(bytes) {
  let out = '';
  for (let i = 0; i < bytes.length; i += 0x8000) {
    out += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
  }
  return btoa(out).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function b64ToBytes(str) {
  const b64 = str.replace(/-/g, '+').replace(/_/g, '/');
  const padded = b64 + '='.repeat((4 - (b64.length % 4)) % 4);
  const raw = atob(padded);
  const bytes = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
  return bytes;
}

export function encodeChallenge(map, bestMs = null) {
  const payload = {
    v: 1,
    n: map.name,
    a: map.author || 'Anon',
    g: map.tagline || '',
    t: map.theme || 'sunrise',
    p: map.par || 30,
    d: map.difficulty || 2,
    b: bestMs || null,
    pieces: map.pieces.map((p) => ({ t: p.t, x: p.x, z: p.z, l: p.l, r: p.r || 0 })),
  };
  const bytes = new TextEncoder().encode(JSON.stringify(payload));
  return `MR1.${bytesToB64(bytes)}`;
}

const VALID = new Set(['plat', 'ramp', 'wall', 'spinner', 'mover', 'boost', 'bounce', 'beam', 'checkpoint', 'start', 'finish']);

export function decodeChallenge(code) {
  const text = String(code || '').trim();
  const body = text.startsWith('MR1.') ? text.slice(4) : text;
  if (!body || body.length > 200000) throw new Error('That code looks incomplete.');
  let payload;
  try {
    payload = JSON.parse(new TextDecoder().decode(b64ToBytes(body)));
  } catch {
    throw new Error('That challenge code is not valid.');
  }
  if (!payload || payload.v !== 1 || !Array.isArray(payload.pieces)) throw new Error('Unrecognized challenge code.');
  if (payload.pieces.length < 2 || payload.pieces.length > 1200) throw new Error('That course has an unusual size.');
  const pieces = [];
  for (const p of payload.pieces) {
    if (!p || !VALID.has(p.t)) continue;
    const x = Math.round(Number(p.x));
    const z = Math.round(Number(p.z));
    const l = Math.max(0, Math.min(5, Math.round(Number(p.l) || 0)));
    if (!Number.isFinite(x) || !Number.isFinite(z) || Math.abs(x) > 40 || Math.abs(z) > 40) continue;
    pieces.push({ t: p.t, x, z, l, r: Math.abs(Math.round(Number(p.r) || 0)) % 4 });
  }
  if (!pieces.some((p) => p.t === 'start') || !pieces.some((p) => p.t === 'finish')) {
    throw new Error('That course is missing a start or finish.');
  }
  return {
    id: `u-${Date.now().toString(36)}-${Math.floor(Math.random() * 999)}`,
    name: cleanName(payload.n || 'Shared Course', 34),
    author: cleanName(payload.a || 'Anon', 22),
    tagline: cleanName(payload.g || 'A shared marble course.', 80),
    theme: ['sunrise', 'neon', 'temple'].includes(payload.t) ? payload.t : 'sunrise',
    par: Math.max(8, Math.min(300, Number(payload.p) || 30)),
    difficulty: Math.max(1, Math.min(3, Number(payload.d) || 2)),
    pieces,
    creatorBest: Number.isFinite(payload.b) && payload.b > 2000 && payload.b < 3600000 ? Number(payload.b) : null,
    creatorName: cleanName(payload.a || 'Creator', 22),
    createdAt: Date.now(),
    shared: true,
  };
}

export function cleanName(value, max = 30) {
  return String(value || '')
    .replace(/[<>&"]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
}

export function newMapId() {
  return `u-${Date.now().toString(36)}-${Math.floor(Math.random() * 9999)}`;
}
