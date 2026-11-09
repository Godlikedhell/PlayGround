/* Course geometry, themes, and the built-in set of timed maps. */

export const CELL = 2.4;
export const STEP = 1.2;
export const GRID_MIN = -18;
export const GRID_MAX = 18;
export const LEVELS = 6;
export const MARBLE_RADIUS = 0.5;

export const PIECE_TYPES = [
  'plat', 'ramp', 'curve', 'wall', 'spinner', 'mover', 'boost', 'bounce', 'beam', 'checkpoint', 'start', 'finish',
];

export const THEMES = {
  sunrise: {
    id: 'sunrise',
    name: 'Sunrise',
    skyTop: '#2f74c2',
    skyMid: '#ffc488',
    skyBottom: '#f6a878',
    sun: '#fff4c9',
    fog: '#f1aa80',
    hemiSky: '#ffeccf',
    hemiGround: '#c27e50',
    light: '#fff0d2',
    body: '#2aa7b8',
    bodySide: '#157f94',
    top: '#6cc9df',
    rock: '#c96b3f',
    accent: '#ff5f3d',
    accent2: '#ffbf2f',
    glow: '#ffd166',
    cloud: '#fff7e9',
    grass: '#6dd867',
  },
  neon: {
    id: 'neon',
    name: 'Neon',
    skyTop: '#070822',
    skyMid: '#29134f',
    skyBottom: '#5d1d69',
    sun: '#ff4fd8',
    fog: '#1a0c34',
    hemiSky: '#7f6bff',
    hemiGround: '#1b0a2b',
    light: '#b7b0ff',
    body: '#23234d',
    bodySide: '#141433',
    top: '#46468a',
    rock: '#140d2b',
    accent: '#2de2e6',
    accent2: '#ff2e88',
    glow: '#67fff6',
    cloud: '#342361',
    grass: '#2de2e6',
  },
  temple: {
    id: 'temple',
    name: 'Temple',
    skyTop: '#0b3f57',
    skyMid: '#46b0a2',
    skyBottom: '#79c7b6',
    sun: '#fff3ba',
    fog: '#7fc3b4',
    hemiSky: '#e6fff7',
    hemiGround: '#1e4a3c',
    light: '#fff4d0',
    body: '#2f8b75',
    bodySide: '#1d6557',
    top: '#dfc878',
    rock: '#335547',
    accent: '#ffb627',
    accent2: '#ff6b6b',
    glow: '#ffe28a',
    cloud: '#e8fff9',
    grass: '#67b86b',
  },
};

function themeOf(map) {
  return THEMES[map.theme] || THEMES.sunrise;
}

function piece(t, x, z, l = 0, r = 0, extra = {}) {
  return { t, x, z, l, r, ...extra };
}

function addRow(list, x, z, dx, dz, n, l = 0, r = 0, type = 'plat') {
  for (let i = 0; i < n; i++) list.push(piece(type, x + dx * i, z + dz * i, l, r));
}

function addLine(list, cells, l, type = 'plat', r = 0) {
  for (const [x, z] of cells) list.push(piece(type, x, z, l, r));
}

/* ------------------------------------------------------------------ */
/* 1 — Sunrise Sprint                                                   */
/* ------------------------------------------------------------------ */
const sunrisePieces = [];
sunrisePieces.push(piece('start', 0, 8, 0, 2));
addRow(sunrisePieces, 0, 7, 0, -1, 3, 0);
addRow(sunrisePieces, 0, 3, 0, -1, 2, 0);
sunrisePieces.push(piece('ramp', 0, 1, 0, 2));
addRow(sunrisePieces, 0, 0, 0, -1, 2, 1);
sunrisePieces.push(piece('checkpoint', 0, -1, 1, 2));
sunrisePieces.push(piece('curve', 0, -2, 1, 0));
addRow(sunrisePieces, 1, -2, 1, 0, 4, 1);
sunrisePieces.push(piece('spinner', 5, -2, 1, 0));
addRow(sunrisePieces, 6, -2, 1, 0, 2, 1);
sunrisePieces.push(piece('curve', 8, -2, 1, 3));
addRow(sunrisePieces, 8, -1, 0, 1, 4, 1);
sunrisePieces.push(piece('boost', 8, 3, 1, 2));
sunrisePieces.push(piece('curve', 8, 4, 1, 2));
sunrisePieces.push(piece('plat', 7, 4, 1, 0));
addRow(sunrisePieces, 6, 4, -1, 0, 3, 1);
sunrisePieces.push(piece('mover', 3, 4, 1, 3));
addRow(sunrisePieces, 2, 4, -1, 0, 2, 1);
sunrisePieces.push(piece('curve', 0, 4, 1, 1));
addRow(sunrisePieces, 0, 3, 0, -1, 2, 1);
sunrisePieces.push(piece('finish', 0, 1, 1, 0));

/* ------------------------------------------------------------------ */
/* 2 — Neon Current                                                     */
/* ------------------------------------------------------------------ */
const neonPieces = [];
neonPieces.push(piece('start', 0, 13, 0, 2));
addRow(neonPieces, 0, 12, 0, -1, 2, 0);                // 12,11
neonPieces.push(piece('ramp', 0, 10, 0, 2));
neonPieces.push(piece('checkpoint', 0, 9, 1, 2));
neonPieces.push(piece('spinner', 0, 8, 1, 0));
neonPieces.push(piece('curve', 0, 7, 1, 0));
addRow(neonPieces, 1, 7, 1, 0, 2, 1);                  // 1,2
neonPieces.push(piece('checkpoint', 2, 7, 1, 0));
neonPieces.push(piece('plat', 4, 7, 1, 0));            // gap at 3
neonPieces.push(piece('ramp', 5, 7, 1, 1));            // up toward +x
neonPieces.push(piece('plat', 6, 7, 2, 0));
neonPieces.push(piece('curve', 7, 7, 2, 2));
neonPieces.push(piece('mover', 7, 6, 2, 2));           // rides along z
neonPieces.push(piece('plat', 7, 4, 2, 0));
neonPieces.push(piece('curve', 7, 3, 2, 3));
neonPieces.push(piece('checkpoint', 6, 3, 2, 0));
neonPieces.push(piece('ramp', 6, 2, 1, 0));            // down toward +z
neonPieces.push(piece('plat', 6, 1, 1, 0));
neonPieces.push(piece('boost', 6, 0, 1, 2));
neonPieces.push(piece('plat', 6, -2, 1, 0));           // gap at -1
neonPieces.push(piece('plat', 6, -3, 1, 0));
neonPieces.push(piece('spinner', 6, -4, 1, 0));
addRow(neonPieces, 5, -4, -1, 0, 2, 1);                // 5,4
neonPieces.push(piece('checkpoint', 3, -4, 1, 3));
neonPieces.push(piece('ramp', 2, -4, 1, 3));
neonPieces.push(piece('plat', 1, -4, 2, 0));
neonPieces.push(piece('beam', 0, -5, 2, 3));
neonPieces.push(piece('beam', -1, -5, 2, 3));
neonPieces.push(piece('beam', -2, -5, 2, 3));
neonPieces.push(piece('plat', -3, -5, 1, 0));
neonPieces.push(piece('ramp', -3, -6, 1, 2));
neonPieces.push(piece('plat', -3, -7, 2, 0));
neonPieces.push(piece('finish', -3, -8, 2, 2));

/* ------------------------------------------------------------------ */
/* 3 — Sky Temple                                                       */
/* ------------------------------------------------------------------ */
const templePieces = [];
templePieces.push(piece('start', 0, 15, 2, 2));
templePieces.push(piece('plat', 0, 14, 2, 0));
templePieces.push(piece('plat', 0, 12, 2, 0));         // gap at 13
templePieces.push(piece('spinner', 0, 11, 2, 0));
templePieces.push(piece('checkpoint', 0, 10, 2, 0));
templePieces.push(piece('plat', 1, 10, 2, 0));
templePieces.push(piece('plat', 2, 10, 2, 0));
templePieces.push(piece('bounce', 3, 10, 2, 0));       // launches over the gap
templePieces.push(piece('plat', 3, 8, 2, 0));
templePieces.push(piece('plat', 3, 7, 2, 0));
templePieces.push(piece('ramp', 3, 6, 2, 2));
templePieces.push(piece('plat', 3, 5, 3, 0));
templePieces.push(piece('checkpoint', 3, 4, 3, 0));
templePieces.push(piece('beam', 2, 4, 3, 3));
templePieces.push(piece('beam', 1, 4, 3, 3));
templePieces.push(piece('beam', 0, 4, 3, 3));
templePieces.push(piece('spinner', 0, 3, 3, 0));
templePieces.push(piece('mover', 0, 2, 3, 2));
templePieces.push(piece('plat', 0, 0, 3, 0));
templePieces.push(piece('boost', 0, -1, 3, 2));
templePieces.push(piece('plat', 0, -3, 3, 0));         // boost gap
templePieces.push(piece('finish', 0, -4, 3, 2));

export const BUILTIN_MAPS = [
  {
    id: 'sunrise-sprint',
    name: 'Sunrise Sprint',
    tagline: 'Warm up those bearings.',
    author: 'Marble Club',
    theme: 'sunrise',
    difficulty: 1,
    par: 27,
    rivals: [
      { name: 'Nova', time: 20.4, color: '#ff6b35' },
      { name: 'Pixel', time: 22.6, color: '#2d9cdb' },
      { name: 'Mika', time: 24.9, color: '#9b51e0' },
      { name: 'Rook', time: 28.1, color: '#27ae60' },
      { name: 'Juno', time: 31.8, color: '#eb5757' },
    ],
    pieces: sunrisePieces,
  },
  {
    id: 'neon-current',
    name: 'Neon Current',
    tagline: 'A glowing route through the grid.',
    author: 'Marble Club',
    theme: 'neon',
    difficulty: 2,
    par: 43,
    rivals: [
      { name: 'Vex', time: 33.9, color: '#2de2e6' },
      { name: 'Lumi', time: 37.2, color: '#ff2e88' },
      { name: 'Kodi', time: 40.8, color: '#f2c94c' },
      { name: 'Zephyr', time: 45.1, color: '#b06bff' },
      { name: 'Ash', time: 50.4, color: '#6fcf97' },
    ],
    pieces: neonPieces,
  },
  {
    id: 'sky-temple',
    name: 'Sky Temple',
    tagline: 'Narrow beams. Big air. No fear.',
    author: 'Marble Club',
    theme: 'temple',
    difficulty: 3,
    par: 60,
    rivals: [
      { name: 'Kite', time: 45.7, color: '#ffb627' },
      { name: 'Sable', time: 50.2, color: '#56ccf2' },
      { name: 'Onyx', time: 55.5, color: '#bb6bd9' },
      { name: 'Pip', time: 61.3, color: '#ff6b6b' },
      { name: 'Moss', time: 67.8, color: '#6fcf97' },
    ],
    pieces: templePieces,
  },
];

export function getBuiltin(id) {
  return BUILTIN_MAPS.find((m) => m.id === id) || null;
}

export function starterMap() {
  const pieces = [];
  pieces.push(piece('start', 0, 5, 0, 2));
  pieces.push(piece('plat', 0, 4, 0, 0));
  pieces.push(piece('plat', 0, 3, 0, 0));
  pieces.push(piece('ramp', 0, 2, 0, 2));
  pieces.push(piece('checkpoint', 0, 1, 1, 0));
  pieces.push(piece('plat', 1, 1, 1, 0));
  pieces.push(piece('plat', 2, 1, 1, 0));
  pieces.push(piece('spinner', 3, 1, 1, 0));
  pieces.push(piece('plat', 4, 1, 1, 0));
  pieces.push(piece('plat', 4, 0, 1, 0));
  pieces.push(piece('plat', 4, -1, 1, 0));
  pieces.push(piece('finish', 4, -2, 1, 2));
  return {
    id: 'draft',
    name: 'Untitled Course',
    tagline: 'A course made by you.',
    author: 'You',
    theme: 'sunrise',
    difficulty: 2,
    par: 35,
    rivals: [],
    pieces,
  };
}

export function courseBounds(pieces) {
  let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity, minL = 0, maxL = 0;
  for (const p of pieces) {
    minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x);
    minZ = Math.min(minZ, p.z); maxZ = Math.max(maxZ, p.z);
    minL = Math.min(minL, p.l); maxL = Math.max(maxL, p.l);
  }
  if (!pieces.length) return { minX: -2, maxX: 2, minZ: -2, maxZ: 2, minL: 0, maxL: 0 };
  return { minX, maxX, minZ, maxZ, minL, maxL };
}

export function estimatedPar(pieces) {
  const b = courseBounds(pieces);
  const span = (b.maxX - b.minX + b.maxZ - b.minZ + 2) * 2.3;
  return Math.max(12, Math.round(span + pieces.length * 0.22));
}

export { themeOf };
