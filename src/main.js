import { Game } from './game.js';
import {
  BUILTIN_MAPS, THEMES, CELL, STEP, starterMap, estimatedPar, courseBounds,
} from './maps.js';
import {
  store, setBuiltinProvider, leaderboardFor, rankFor, formatTime, formatShort, formatDelta,
  medalFor, encodeChallenge, decodeChallenge, cleanName, newMapId,
} from './store.js';
import { audio } from './audio.js';

setBuiltinProvider(() => BUILTIN_MAPS);

const $ = (id) => document.getElementById(id);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const coarse = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
document.body.classList.toggle('touch', coarse);

const icons = {
  plat: `<svg viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="11" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M3 11h18" stroke="currentColor" stroke-width="1.5" opacity=".5"/></svg>`,
  ramp: `<svg viewBox="0 0 24 24"><path d="M3 19 21 6v13H3Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="m8 19 8-5" stroke="currentColor" stroke-width="1.5" opacity=".5"/></svg>`,
  beam: `<svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 6v12" stroke="currentColor" stroke-width="1.2" opacity=".4"/></svg>`,
  spinner: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.6" opacity=".55"/><rect x="3" y="10.4" width="18" height="3.2" rx="1.6" fill="currentColor"/><circle cx="12" cy="12" r="2" fill="#16112c"/></svg>`,
  mover: `<svg viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M2 12h3m14 0h3M5 9l-3 3 3 3m14-6 3 3-3 3" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  boost: `<svg viewBox="0 0 24 24"><path d="m4 15 5-5 4 4 7-7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 7h5v5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  bounce: `<svg viewBox="0 0 24 24"><path d="M4 18h16M12 16V4m0 0L8 8m4-4 4 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 20h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  checkpoint: `<svg viewBox="0 0 24 24"><path d="M12 3 18 12l-6 9-6-9 6-9Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>`,
  start: `<svg viewBox="0 0 24 24"><path d="M6 21V4m0 0h11l-2 4 2 4H6" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  finish: `<svg viewBox="0 0 24 24"><path d="M5 21V4m14 0v17M5 6h14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M8 21V11a4 4 0 0 1 8 0v10" fill="none" stroke="currentColor" stroke-width="1.6" opacity=".65"/></svg>`,
  erase: `<svg viewBox="0 0 24 24"><path d="m14 4 6 6-9 9H5l-2-2 11-13Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="m9 9 6 6M12 19h8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`,
  edit: `<svg viewBox="0 0 24 24"><path d="m4 20 4-1 10-10-3-3L5 16l-1 4ZM13 6l3 3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
  share: `<svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="2.5" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="6" cy="12" r="2.5" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="18" cy="19" r="2.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="m8.2 10.7 7.6-4.4m-7.6 7 7.6 4.4" stroke="currentColor" stroke-width="1.7"/></svg>`,
  trash: `<svg viewBox="0 0 24 24"><path d="M4 7h16M9 7V4h6v3m-9 0 1 13h10l1-13M10 11v6m4-6v6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  plus: `<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`,
};

const PIECES = [
  { id: 'plat', label: 'Tile', icon: icons.plat, hint: 'Tap a grid cell to add a platform.' },
  { id: 'ramp', label: 'Ramp', icon: icons.ramp, hint: 'Ramps climb one level toward the arrow. Rotate first.' },
  { id: 'beam', label: 'Beam', icon: icons.beam, hint: 'Narrow beams make brave lines. Rotate to aim.' },
  { id: 'spinner', label: 'Spinner', icon: icons.spinner, hint: 'Spinners knock marbles off course. Place them on tile cells.' },
  { id: 'mover', label: 'Mover', icon: icons.mover, hint: 'Movers glide back and forth. Ride them across gaps.' },
  { id: 'boost', label: 'Boost', icon: icons.boost, hint: 'Boost pads fire the marble in their arrow direction.' },
  { id: 'bounce', label: 'Bounce', icon: icons.bounce, hint: 'Bounce pads launch you skyward. Land them on the route.' },
  { id: 'checkpoint', label: 'Check', icon: icons.checkpoint, hint: 'Checkpoints become your respawn. Place them often.' },
  { id: 'start', label: 'Start', icon: icons.start, hint: 'Every course needs one start pad and one finish gate.' },
  { id: 'finish', label: 'Finish', icon: icons.finish, hint: 'Every course needs one finish gate. Reach it to stop the clock.' },
  { id: 'erase', label: 'Erase', icon: icons.erase, hint: 'Tap a piece to remove it. Undo is up top.' },
];

let game = null;
let currentTab = 'official';
let selectedPreviewId = BUILTIN_MAPS[0].id;
let currentRaceMap = null;
let currentRaceIsTest = false;
let testOrigin = false;
let currentRaceForBuilder = false;
let builderState = null;
let saveTheme = 'sunrise';
let lastResult = null;
let previewTimer = null;
let toastTimer = null;
let hintTimer = null;
let countdownTimer = null;
let joystick = { active: false, id: null, x: 0, y: 0 };
let keys = new Set();
let activePointers = new Map();
let dragState = null;
let pinchState = null;
let confirmResolve = null;
let tiltBase = null;
let tiltSeen = false;

const canvas = $('scene');

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function screenEls() {
  return ['screen-home', 'screen-maps', 'screen-pause', 'screen-result', 'screen-builder'].map($);
}

function hideScreens() {
  for (const el of screenEls()) el.classList.add('is-hidden');
}

function showScreen(id) {
  for (const el of screenEls()) el.classList.toggle('is-hidden', el.id !== id);
}

function setHud(on) {
  $('hud').classList.toggle('is-hidden', !on);
}

function showToast(message, actionLabel = '', action = null, duration = 3400) {
  const el = $('toast');
  $('toast-text').textContent = message;
  const btn = $('toast-action');
  if (actionLabel && action) {
    btn.textContent = actionLabel;
    btn.classList.remove('is-hidden');
    btn.onclick = () => {
      hideToast();
      action();
    };
  } else {
    btn.classList.add('is-hidden');
    btn.onclick = null;
  }
  el.classList.remove('is-hidden');
  el.style.animation = 'none';
  void el.offsetWidth;
  el.style.animation = '';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(hideToast, duration);
}

function hideToast() {
  $('toast').classList.add('is-hidden');
  clearTimeout(toastTimer);
}

function openModal(id) {
  $('modal-layer').classList.remove('is-hidden');
  for (const m of document.querySelectorAll('#modal-layer .modal')) m.classList.add('is-hidden');
  $(id).classList.remove('is-hidden');
}

function closeModals() {
  $('modal-layer').classList.add('is-hidden');
  for (const m of document.querySelectorAll('#modal-layer .modal')) m.classList.add('is-hidden');
  if (confirmResolve) {
    confirmResolve(false);
    confirmResolve = null;
  }
}

function askConfirm(title, copy, yesLabel = 'YES, DO IT') {
  $('confirm-title').textContent = title;
  $('confirm-copy').textContent = copy;
  $('btn-confirm-yes').textContent = yesLabel;
  openModal('modal-confirm');
  return new Promise((resolve) => { confirmResolve = resolve; });
}

function initials(name) {
  const parts = String(name || '?').trim().split(/\s+/);
  return ((parts[0]?.[0] || '?') + (parts[1]?.[0] || '')).toUpperCase();
}

function difficultyLabel(d) {
  return d <= 1 ? 'EASY' : d === 2 ? 'FLOW' : 'EXPERT';
}

function difficultyFor(pieces) {
  const count = (t) => pieces.filter((p) => p.t === t).length;
  const score = count('spinner') * 3 + count('mover') * 2.5 + count('bounce') * 1.5
    + count('beam') * 1.5 + count('ramp') * 1.1 + count('boost') * 1.2 + pieces.length * 0.06;
  if (score > 15) return 3;
  if (score > 7) return 2;
  return 1;
}

function mapHasStartFinish(map) {
  return map?.pieces?.some((p) => p.t === 'start') && map?.pieces?.some((p) => p.t === 'finish');
}

/* ------------------------------------------------------------------ */
/* Map thumbnails                                                      */
/* ------------------------------------------------------------------ */

function drawMapThumb(canvasEl, map) {
  const w = 560;
  const h = 240;
  canvasEl.width = w;
  canvasEl.height = h;
  const ctx = canvasEl.getContext('2d');
  const t = THEMES[map.theme] || THEMES.sunrise;
  const bg = ctx.createLinearGradient(0, 0, w, h);
  bg.addColorStop(0, t.skyTop);
  bg.addColorStop(0.58, t.skyMid);
  bg.addColorStop(1, t.skyBottom);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  ctx.globalAlpha = 0.18;
  ctx.strokeStyle = t.top;
  ctx.lineWidth = 1;
  for (let x = 0; x < w; x += 28) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, x / 2); ctx.lineTo(w, x / 2); ctx.stroke();
  }
  ctx.globalAlpha = 1;

  const b = courseBounds(map.pieces);
  const pad = 26;
  const spanX = Math.max(1, b.maxX - b.minX + 1);
  const spanZ = Math.max(1, b.maxZ - b.minZ + 1);
  const scale = Math.min((w - pad * 2) / spanX, (h - pad * 2) / spanZ);
  const ox = (w - spanX * scale) / 2 - b.minX * scale + scale / 2;
  const oz = (h - spanZ * scale) / 2 - b.minZ * scale + scale / 2;
  const px = (x) => ox + x * scale;
  const pz = (z) => oz + z * scale;
  const size = Math.max(5, scale * 0.86);

  // dashed route
  if (map.pieces.length > 1) {
    ctx.save();
    ctx.setLineDash([4, 8]);
    ctx.strokeStyle = 'rgba(255,255,255,.28)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    map.pieces.forEach((p, i) => {
      const x = px(p.x);
      const y = pz(p.z);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
    ctx.restore();
  }

  const sorted = [...map.pieces].sort((a, b2) => a.l - b2.l);
  for (const p of sorted) {
    const x = px(p.x);
    const y = pz(p.z);
    const s = size;
    const levelLift = p.l * 1.5;
    ctx.fillStyle = 'rgba(0,0,0,.26)';
    ctx.beginPath();
    ctx.roundRect(x - s / 2 + 3, y - s / 2 + 4, s, s, 4);
    ctx.fill();

    if (p.t === 'ramp') {
      ctx.fillStyle = t.bodySide;
      ctx.beginPath();
      ctx.moveTo(x - s / 2, y + s / 2);
      ctx.lineTo(x + s / 2, y + s / 2);
      ctx.lineTo(x + s / 2, y - s / 2);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = t.accent;
      ctx.lineWidth = 2;
      ctx.stroke();
    } else if (p.t === 'beam') {
      ctx.fillStyle = t.top;
      const narrow = s * 0.34;
      const vertical = p.r % 2 === 0;
      ctx.beginPath();
      ctx.roundRect(x - (vertical ? narrow : s) / 2, y - (vertical ? s : narrow) / 2, vertical ? narrow : s, vertical ? s : narrow, 3);
      ctx.fill();
    } else if (p.t === 'spinner') {
      ctx.fillStyle = t.body;
      ctx.beginPath(); ctx.roundRect(x - s / 2, y - s / 2, s, s, 4); ctx.fill();
      ctx.strokeStyle = t.accent2;
      ctx.lineWidth = 3.5;
      ctx.beginPath(); ctx.moveTo(x - s * 0.55, y + s * 0.2); ctx.lineTo(x + s * 0.55, y - s * 0.2); ctx.stroke();
      ctx.fillStyle = t.accent2;
      ctx.beginPath(); ctx.arc(x, y, 2.4, 0, Math.PI * 2); ctx.fill();
    } else if (p.t === 'mover') {
      ctx.fillStyle = t.top;
      ctx.beginPath(); ctx.roundRect(x - s / 2, y - s / 2, s, s, 4); ctx.fill();
      ctx.strokeStyle = t.accent;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([3, 3]);
      const dx = p.r === 1 ? 0 : p.r === 3 ? 0 : 0;
      ctx.beginPath(); ctx.moveTo(x - s * 0.7, y); ctx.lineTo(x + s * 0.7, y); ctx.stroke();
      ctx.setLineDash([]);
    } else if (p.t === 'boost') {
      ctx.fillStyle = t.body;
      ctx.beginPath(); ctx.roundRect(x - s / 2, y - s / 2, s, s, 4); ctx.fill();
      ctx.strokeStyle = t.glow;
      ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.moveTo(x - s * 0.2, y + s * 0.18); ctx.lineTo(x + s * 0.1, y - s * 0.18); ctx.lineTo(x + s * 0.35, y + s * 0.02); ctx.stroke();
    } else if (p.t === 'bounce') {
      ctx.fillStyle = t.body;
      ctx.beginPath(); ctx.roundRect(x - s / 2, y - s / 2, s, s, 4); ctx.fill();
      ctx.fillStyle = t.accent2;
      ctx.beginPath(); ctx.arc(x, y, s * 0.25, 0, Math.PI * 2); ctx.fill();
    } else if (p.t === 'start') {
      ctx.fillStyle = t.body;
      ctx.beginPath(); ctx.roundRect(x - s / 2, y - s / 2, s, s, 4); ctx.fill();
      ctx.fillStyle = '#5ce68d';
      ctx.beginPath(); ctx.arc(x, y - 2, s * 0.34, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#0b2415';
      ctx.beginPath(); ctx.arc(x, y - 2, s * 0.14, 0, Math.PI * 2); ctx.fill();
    } else if (p.t === 'finish') {
      ctx.fillStyle = t.body;
      ctx.beginPath(); ctx.roundRect(x - s / 2, y - s / 2, s, s, 4); ctx.fill();
      ctx.strokeStyle = '#ffcf5a';
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(x, y - 1, s * 0.33, 0, Math.PI * 2); ctx.stroke();
    } else if (p.t === 'checkpoint') {
      ctx.fillStyle = t.body;
      ctx.beginPath(); ctx.roundRect(x - s / 2, y - s / 2, s, s, 4); ctx.fill();
      ctx.fillStyle = t.accent;
      ctx.beginPath();
      ctx.moveTo(x, y - s * 0.34); ctx.lineTo(x + s * 0.22, y); ctx.lineTo(x, y + s * 0.34); ctx.lineTo(x - s * 0.22, y);
      ctx.closePath(); ctx.fill();
    } else {
      ctx.fillStyle = t.top;
      ctx.beginPath(); ctx.roundRect(x - s / 2, y - s / 2, s, s, 4); ctx.fill();
      ctx.fillStyle = `rgba(255,255,255,${0.04 + p.l * 0.03})`;
      ctx.beginPath(); ctx.roundRect(x - s / 2 + 1.5, y - s / 2 + 1.5, s - 3, s * 0.32, 3); ctx.fill();
    }
    if (p.l > 0) {
      ctx.strokeStyle = 'rgba(255,255,255,.24)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(x - s / 2, y - s / 2, s, s, 4);
      ctx.stroke();
    }
    void levelLift;
  }

  // vignette
  const v = ctx.createRadialGradient(w / 2, h / 2, h * 0.1, w / 2, h / 2, w * 0.65);
  v.addColorStop(0, 'rgba(0,0,0,0)');
  v.addColorStop(1, 'rgba(5,3,15,.55)');
  ctx.fillStyle = v;
  ctx.fillRect(0, 0, w, h);
}

/* ------------------------------------------------------------------ */
/* Map cards                                                           */
/* ------------------------------------------------------------------ */

function bestLabel(map) {
  const best = store.bestMs(map.id);
  if (best) return formatShort(best / 1000);
  if (map.creatorBest) return formatShort(map.creatorBest / 1000);
  return '—';
}

function makeMapCard(map, { custom = false } = {}) {
  const card = document.createElement('div');
  card.className = `map-card${custom ? ' has-actions' : ''}`;
  card.dataset.id = map.id;
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  const rank = store.bestMs(map.id) ? rankFor(map) : null;
  const best = store.bestMs(map.id);

  const thumb = document.createElement('div');
  thumb.className = 'map-thumb';
  const cv = document.createElement('canvas');
  thumb.appendChild(cv);
  const diff = document.createElement('div');
  diff.className = 'diff-badge';
  diff.innerHTML = `${difficultyLabel(map.difficulty)} `;
  for (let i = 0; i < 3; i++) {
    const dot = document.createElement('i');
    if (i < map.difficulty) dot.className = 'on';
    diff.appendChild(dot);
  }
  thumb.appendChild(diff);
  const par = document.createElement('div');
  par.className = 'par-badge';
  par.textContent = `PAR ${formatShort(map.par)}`;
  thumb.appendChild(par);

  if (custom) {
    const actions = document.createElement('div');
    actions.className = 'map-actions';
    const mk = (act, icon, label) => {
      const b = document.createElement('button');
      b.className = 'mini-btn';
      b.dataset.act = act;
      b.setAttribute('aria-label', label);
      b.title = label;
      b.innerHTML = icon;
      actions.appendChild(b);
    };
    mk('edit', icons.edit, 'Edit map');
    mk('share', icons.share, 'Share map');
    mk('delete', icons.trash, 'Delete map');
    card.appendChild(actions);
  }

  const info = document.createElement('div');
  info.className = 'map-info';
  const main = document.createElement('div');
  main.className = 'map-info-main';
  const h3 = document.createElement('h3');
  h3.textContent = map.name;
  const p = document.createElement('p');
  p.textContent = map.creatorBest && !best
    ? `Shared by ${map.creatorName || map.author} · target ${formatShort(map.creatorBest / 1000)}`
    : custom ? `By ${map.author || 'You'}${rank ? ` · rank #${rank}` : ''}` : map.tagline;
  main.append(h3, p);
  const bestEl = document.createElement('div');
  bestEl.className = 'map-best';
  bestEl.innerHTML = `<small>${best ? 'YOUR BEST' : map.creatorBest ? 'TARGET' : 'BEST'}</small><b class="${best ? '' : 'muted'}">${bestLabel(map)}</b>`;
  info.append(main, bestEl);

  card.append(thumb, info);
  requestAnimationFrame(() => drawMapThumb(cv, map));

  const start = () => {
    selectedPreviewId = map.id;
    startMap(map);
  };
  card.addEventListener('click', (ev) => {
    const act = ev.target.closest('[data-act]');
    if (act) {
      ev.stopPropagation();
      handleMapAction(act.dataset.act, map);
      return;
    }
    start();
  });
  card.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); start(); }
  });
  if (!coarse) {
    card.addEventListener('pointerenter', () => {
      clearTimeout(previewTimer);
      previewTimer = setTimeout(() => {
        if (game.mode !== 'preview' || currentTab === 'paused') return;
        if (selectedPreviewId !== map.id) {
          selectedPreviewId = map.id;
          game.previewMap(map);
        }
      }, 170);
    });
  }
  return card;
}

function makeCreateCard() {
  const el = document.createElement('button');
  el.className = 'create-card';
  el.innerHTML = `<span class="create-plus">+</span><span><b>Build a course</b><small>Start from a template · share it with a code</small></span>`;
  el.addEventListener('click', () => {
    audio.uiOpen();
    openBuilder(starterMap(), { origin: 'maps' });
  });
  return el;
}

function renderMapCards() {
  const official = $('grid-official');
  const community = $('grid-community');
  official.innerHTML = '';
  community.innerHTML = '';
  for (const map of BUILTIN_MAPS) official.appendChild(makeMapCard(map));
  official.appendChild(makeCreateCard());
  community.appendChild(makeCreateCard());
  const maps = store.customMaps();
  for (const map of maps) community.appendChild(makeMapCard(map, { custom: true }));
  if (!maps.length) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.textContent = 'No courses yet. Build one, or paste a friend’s challenge code with the import button.';
    community.appendChild(empty);
  }
  $('official-count').textContent = BUILTIN_MAPS.length;
  $('community-count').textContent = maps.length;
  $('grid-official').classList.toggle('is-hidden', currentTab !== 'official');
  $('grid-community').classList.toggle('is-hidden', currentTab !== 'community');
  for (const tab of document.querySelectorAll('.tab')) {
    tab.classList.toggle('is-active', tab.dataset.tab === currentTab);
  }
}

function currentOfficialIndex(map) {
  return BUILTIN_MAPS.findIndex((m) => m.id === map.id);
}

/* ------------------------------------------------------------------ */
/* Screens                                                             */
/* ------------------------------------------------------------------ */

function showHome() {
  hideScreens();
  showScreen('screen-home');
  setHud(false);
  document.body.classList.remove('paused', 'result-open');
  game.showShowcase();
  currentRaceMap = null;
  currentRaceIsTest = false;
  testOrigin = false;
  audio.uiBack();
}

function showMaps(tab = currentTab) {
  currentTab = tab;
  hideScreens();
  showScreen('screen-maps');
  setHud(false);
  document.body.classList.remove('paused', 'result-open');
  renderMapCards();
  const list = currentTab === 'official' ? BUILTIN_MAPS : store.customMaps();
  const pick = list.find((m) => m.id === selectedPreviewId) || list[0] || BUILTIN_MAPS[0];
  selectedPreviewId = pick.id;
  game.previewMap(pick);
  audio.uiOpen();
}

function showRaceHud(map) {
  hideScreens();
  setHud(true);
  document.body.classList.remove('paused', 'result-open');
  $('hud-map').textContent = map.name.toUpperCase();
  $('timer-par').textContent = `PAR ${formatTime((map.par || 30) * 1000)}`;
  $('timer').textContent = '00:00.000';
  $('hud-cp').textContent = 'CP 0/0';
  $('hud-cp').classList.remove('active');
  $('ghost-badge').classList.add('is-hidden');
  $('split-toast').classList.remove('show');
}

function showPause() {
  if (game.raceState !== 'paused') return;
  $('pause-time').textContent = formatTime(game.raceTime);
  $('pause-map').textContent = currentRaceMap?.name || 'Time trial';
  syncQuickToggles();
  showScreen('screen-pause');
  document.body.classList.add('paused');
}

function hidePause() {
  $('screen-pause').classList.add('is-hidden');
  document.body.classList.remove('paused');
}

function showResult() {
  hideScreens();
  showScreen('screen-result');
  setHud(true);
  document.body.classList.add('result-open');
}

function showBuilderScreen() {
  hideScreens();
  showScreen('screen-builder');
  setHud(false);
  document.body.classList.remove('paused', 'result-open');
}

/* ------------------------------------------------------------------ */
/* Race flow                                                           */
/* ------------------------------------------------------------------ */

function startMap(map, opts = {}) {
  if (!map) return;
  const test = !!opts.test;
  const fromBuilder = !!opts.fromBuilder;
  currentRaceMap = map;
  currentRaceIsTest = test;
  testOrigin = fromBuilder;
  currentRaceForBuilder = fromBuilder;
  keys.clear();
  resetJoystick();
  hideToast();
  $('split-toast').classList.remove('show');
  $('hint-banner').classList.remove('show');
  showRaceHud(map);
  showCountdownShell();

  const record = test ? null : store.record(map.id);
  const ghostPath = (!test && store.data.settings.ghost && record?.ghost && record.ghost.length > 1)
    ? record.ghost : null;
  const ghostPars = ghostPath ? record.best : null;

  if (ghostPath) {
    $('ghost-badge').textContent = `GHOST ${formatShort(record.best / 1000)}`;
    $('ghost-badge').classList.remove('is-hidden');
  }
  $('hud-cp').textContent = 'CP 0/0';
  audio.unlock();
  audio.uiOpen();
  game.startRace(map, {
    ghostPath,
    bestSplits: record?.splits || null,
    test,
    record: !test,
    ghost: store.data.settings.ghost,
  });
  $('hud-cp').textContent = `CP 0/${game.checkpoints.length}`;
  if (ghostPars) $('ghost-badge').textContent = `GHOST ${formatShort(ghostPars / 1000)}`;

  clearTimeout(hintTimer);
  $('hint-banner').textContent = mapHasStartFinish(map)
    ? 'Follow the course · reach the finish gate'
    : 'Reach the glowing gate';
  $('hint-banner').classList.add('show');
  hintTimer = setTimeout(() => $('hint-banner').classList.remove('show'), 4200);
}

function restartCurrentRace() {
  if (!currentRaceMap) return;
  hidePause();
  startMap(currentRaceMap, { test: currentRaceIsTest, fromBuilder: currentRaceForBuilder });
}

function quitCurrentRace() {
  const fromBuilder = testOrigin;
  game.quitRace();
  hidePause();
  hideCountdown();
  if (fromBuilder) {
    resumeBuilderFromTest();
  } else {
    showMaps(currentTab);
  }
}

function handleFinish(result) {
  const map = currentRaceMap;
  if (!map) return;
  keys.clear();
  resetJoystick();
  const prevBest = store.bestMs(map.id);
  let isBest = false;
  if (!result.test) {
    isBest = store.saveBest(map.id, result.time, result.recording, result.splits);
  }
  lastResult = { map, result, prevBest, isBest };
  hideCountdown();
  $('split-toast').classList.remove('show');
  $('hint-banner').classList.remove('show');
  showResult();
  renderResult();
  const medal = result.test ? 'finisher' : medalFor(result.time, map.par);
  if (!result.test && (isBest || medal === 'gold')) confetti();
}

function nextCourse() {
  if (testOrigin) {
    resumeBuilderFromTest();
    return;
  }
  if (!currentRaceMap) return openMaps();
  if (currentRaceIsTest) return resumeBuilderFromTest();
  const idx = currentOfficialIndex(currentRaceMap);
  if (idx >= 0 && idx < BUILTIN_MAPS.length - 1) {
    selectedPreviewId = BUILTIN_MAPS[idx + 1].id;
    startMap(BUILTIN_MAPS[idx + 1]);
    return;
  }
  const customs = store.customMaps();
  const cidx = customs.findIndex((m) => m.id === currentRaceMap.id);
  if (cidx >= 0 && cidx < customs.length - 1) {
    startMap(customs[cidx + 1]);
    return;
  }
  showMaps(currentTab);
}

function renderResult() {
  if (!lastResult) return;
  const { map, result, prevBest, isBest } = lastResult;
  const test = !!result.test;
  const medal = test ? 'finisher' : medalFor(result.time, map.par);
  const medalEl = $('medal');
  medalEl.className = `medal ${medal}`;
  $('medal-label').textContent = test ? 'STUDIO' : medal === 'finisher' ? 'CLEAR' : medal.toUpperCase();
  $('result-eyebrow').textContent = test ? `STUDIO TEST · ${map.name.toUpperCase()}` : `${map.name.toUpperCase()} · RUN COMPLETE`;

  const rank = test ? null : rankFor(map);
  let title = 'Course cleared.';
  if (test) title = 'Studio test complete.';
  else if (isBest && prevBest) title = 'New personal best.';
  else if (isBest) title = 'First run logged.';
  else if (rank === 1) title = 'Course record.';
  else if (rank && rank <= 3) title = 'Podium finish.';
  else if (medal === 'gold') title = 'Untouchable.';
  $('result-title').textContent = title;
  $('result-time').textContent = formatTime(result.time);

  const deltas = $('result-deltas');
  deltas.innerHTML = '';
  const pill = (text, cls = '') => {
    const span = document.createElement('span');
    span.className = `pill ${cls}`;
    span.textContent = text;
    deltas.appendChild(span);
  };
  if (test) {
    pill('Times are not saved in the studio');
    pill(`PAR ${formatTime(map.par * 1000, false)}`);
  } else {
    if (prevBest && isBest) pill(`NEW BEST ${formatDelta(result.time - prevBest)}`, 'good');
    else if (prevBest) pill(`${formatDelta(result.time - prevBest)} off your best`, 'bad');
    else pill('FIRST TIME LOGGED', 'good');
    pill(medal === 'gold' ? 'GOLD PACE' : medal === 'silver' ? 'SILVER PACE' : 'PAR ' + formatTime(map.par * 1000, false), medal === 'gold' ? 'good' : '');
    if (rank) pill(`RANK #${rank}`, rank <= 3 ? 'good' : '');
  }

  const board = $('result-board');
  board.innerHTML = '';
  if (!test) {
    const rows = leaderboardFor(map);
    const yourIndex = rows.findIndex((r) => r.you);
    const top = rows.slice(0, 5);
    if (yourIndex > 4) top.push(rows[yourIndex]);
    const titleRow = document.createElement('div');
    titleRow.className = 'board-title';
    titleRow.innerHTML = '<span>CLUB RANKING</span><span>LOCAL</span>';
    board.appendChild(titleRow);
    top.forEach((row) => {
      const actualRank = rows.indexOf(row) + 1;
      const el = document.createElement('div');
      el.className = `board-row${row.you ? ' you' : ''}`;
      const rankEl = document.createElement('span');
      rankEl.className = 'rank';
      rankEl.textContent = String(actualRank).padStart(2, '0');
      const nameEl = document.createElement('span');
      nameEl.className = 'name';
      const av = document.createElement('span');
      av.className = 'avatar';
      av.style.background = row.color || '#ffb86b';
      av.textContent = initials(row.name);
      nameEl.append(av, document.createTextNode(row.name));
      const timeEl = document.createElement('span');
      timeEl.className = 'time';
      timeEl.textContent = formatShort(row.time);
      el.append(rankEl, nameEl, timeEl);
      board.appendChild(el);
    });
    if (rows.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'empty-state';
      empty.textContent = 'No times on this board yet.';
      board.appendChild(empty);
    }
  }

  $('btn-result-retry').textContent = test ? 'TEST AGAIN' : 'RACE AGAIN';
  const nextBtn = $('btn-result-next');
  if (test) {
    nextBtn.textContent = 'BACK TO STUDIO';
    nextBtn.classList.remove('is-hidden');
  } else {
    const idx = currentOfficialIndex(map);
    const customs = store.customMaps();
    const cidx = customs.findIndex((m) => m.id === map.id);
    const hasNext = (idx >= 0 && idx < BUILTIN_MAPS.length - 1) || (cidx >= 0 && cidx < customs.length - 1);
    nextBtn.classList.toggle('is-hidden', !hasNext);
    nextBtn.textContent = 'NEXT COURSE';
  }
  $('btn-result-exit').textContent = test ? 'QUIT TO MAPS' : 'BACK TO MAPS';
  const shareWrap = $('result-share');
  shareWrap.classList.toggle('is-hidden', test || !map.id.startsWith('u-'));
}

function confetti() {
  const wrap = $('confetti');
  wrap.innerHTML = '';
  const colors = ['#ff6a3d', '#ffc93c', '#4ce6d8', '#8d6bff', '#ff4f9a', '#64e6a4'];
  for (let i = 0; i < 52; i++) {
    const piece = document.createElement('i');
    piece.style.setProperty('--x', `${Math.random() * 100}%`);
    piece.style.setProperty('--w', `${5 + Math.random() * 7}px`);
    piece.style.setProperty('--h', `${8 + Math.random() * 10}px`);
    piece.style.setProperty('--c', colors[i % colors.length]);
    piece.style.setProperty('--drift', `${(Math.random() - 0.5) * 220}px`);
    piece.style.setProperty('--rot', `${Math.random() * 900 - 450}deg`);
    piece.style.setProperty('--dur', `${2.2 + Math.random() * 1.8}s`);
    piece.style.setProperty('--delay', `${Math.random() * 0.5}s`);
    wrap.appendChild(piece);
  }
  setTimeout(() => { wrap.innerHTML = ''; }, 4600);
}

/* ------------------------------------------------------------------ */
/* Builder flow                                                        */
/* ------------------------------------------------------------------ */

function cloneMap(map) {
  return JSON.parse(JSON.stringify(map));
}

function openBuilder(map, opts = {}) {
  const draft = cloneMap(map);
  const editingId = opts.editingId || (draft.id && draft.id.startsWith('u-') ? draft.id : null);
  builderState = {
    map: draft,
    editingId,
    origin: opts.origin || 'maps',
    dirty: false,
  };
  currentRaceMap = null;
  currentRaceIsTest = false;
  testOrigin = false;
  game.enterBuilder(draft);
  showBuilderScreen();
  syncBuilderUI();
  audio.uiOpen();
}

function syncBuilderUI() {
  if (!builderState) return;
  const map = builderState.map;
  $('builder-name').textContent = map.name || 'Untitled Course';
  $('level-value').textContent = game.builder.level;
  const checkpoints = map.pieces.filter((p) => p.t === 'checkpoint').length;
  const hasStart = map.pieces.some((p) => p.t === 'start');
  const hasFinish = map.pieces.some((p) => p.t === 'finish');
  const meta = $('builder-meta');
  meta.innerHTML = '';
  if (!hasStart || !hasFinish) {
    const warn = document.createElement('span');
    warn.className = 'builder-warn';
    warn.textContent = 'Add a start and finish to test or save  ·  ';
    meta.appendChild(warn);
  }
  meta.append(document.createTextNode(`${map.pieces.length} pieces · ${checkpoints} checkpoint${checkpoints === 1 ? '' : 's'} · PAR ≈ ${formatTime(estimatedPar(map.pieces) * 1000, false)}`));
  for (const btn of document.querySelectorAll('.piece-btn')) {
    btn.classList.toggle('is-active', btn.dataset.piece === game.builder.tool);
  }
  const p = PIECES.find((x) => x.id === game.builder.tool);
  $('builder-hint').textContent = (p?.hint || 'Tap the grid to place.') + ' · drag to orbit';
  $('btn-builder-save').classList.toggle('attention', builderState.dirty);
}

function setBuilderTool(tool) {
  game.setBuilderTool(tool);
  syncBuilderUI();
}

function validateBuilder(showMessage = true) {
  if (!builderState) return false;
  const pieces = builderState.map.pieces;
  if (!pieces.some((p) => p.t === 'start') || !pieces.some((p) => p.t === 'finish')) {
    if (showMessage) showToast('Add a start pad and a finish gate first.');
    return false;
  }
  if (pieces.length < 3) {
    if (showMessage) showToast('Add a little more course first.');
    return false;
  }
  return true;
}

function startTestFromBuilder() {
  if (!validateBuilder()) return;
  startMap(builderState.map, { test: true, fromBuilder: true });
}

function resumeBuilderFromTest() {
  if (!builderState) { showMaps('community'); return; }
  hideCountdown();
  hidePause();
  game.enterBuilder(builderState.map);
  showBuilderScreen();
  syncBuilderUI();
  audio.uiBack();
}

function backFromBuilder() {
  const leave = () => {
    if (!builderState) return showHome();
    if (builderState.origin === 'home') showHome();
    else showMaps('community');
  };
  if (builderState?.dirty) {
    askConfirm('Leave the studio?', 'Your unsaved course changes will be lost.', 'LEAVE STUDIO').then((yes) => {
      if (yes) leave();
    });
  } else {
    leave();
  }
}

function renderThemePicker() {
  const wrap = $('theme-picker');
  wrap.innerHTML = '';
  for (const theme of Object.values(THEMES)) {
    const b = document.createElement('button');
    b.className = `theme-chip${saveTheme === theme.id ? ' is-active' : ''}`;
    b.dataset.theme = theme.id;
    const swatch = document.createElement('i');
    swatch.style.background = `linear-gradient(135deg, ${theme.skyTop}, ${theme.skyMid} 55%, ${theme.accent})`;
    const label = document.createElement('span');
    label.textContent = theme.name;
    b.append(swatch, label);
    b.addEventListener('click', () => {
      saveTheme = theme.id;
      renderThemePicker();
    });
    wrap.appendChild(b);
  }
}

function openSaveModal() {
  if (!validateBuilder()) return;
  const map = builderState.map;
  saveTheme = map.theme || 'sunrise';
  $('save-name').value = map.name === 'Untitled Course' ? '' : map.name;
  $('save-name').placeholder = 'e.g. Candy Canyon';
  renderThemePicker();
  const checkpoints = map.pieces.filter((p) => p.t === 'checkpoint').length;
  $('save-summary').textContent = `${map.pieces.length} pieces · ${checkpoints} checkpoint${checkpoints === 1 ? '' : 's'} · estimated par ${formatTime(estimatedPar(map.pieces) * 1000, false)}. You can share it with a code after saving.`;
  openModal('modal-save');
}

function confirmSaveMap() {
  if (!builderState) return;
  const map = builderState.map;
  const name = cleanName($('save-name').value, 34) || 'Untitled Course';
  map.name = name;
  map.theme = saveTheme;
  map.par = estimatedPar(map.pieces);
  map.difficulty = difficultyFor(map.pieces);
  map.author = 'You';
  map.tagline = map.tagline && map.tagline !== 'A course made by you.' ? map.tagline : 'A custom course by you.';
  map.createdAt = map.createdAt || Date.now();
  if (!builderState.editingId) {
    map.id = newMapId();
    builderState.editingId = map.id;
  } else {
    map.id = builderState.editingId;
  }
  store.addCustom(map);
  builderState.dirty = false;
  closeModals();
  syncBuilderUI();
  $('builder-name').textContent = map.name;
  showToast('Saved to My Maps.', 'SHARE', () => openShareModal(map));
  audio.uiOpen();
}

function openShareModal(map) {
  const best = store.bestMs(map.id);
  $('share-best').textContent = best
    ? `Your target: ${formatTime(best)}. Can they beat it?`
    : 'No time set yet — race it once to give challengers a target.';
  $('share-code').value = encodeChallenge(map, best);
  openModal('modal-share');
}

async function copyShareCode() {
  const ta = $('share-code');
  try {
    await navigator.clipboard.writeText(ta.value);
    showToast('Challenge code copied.');
  } catch {
    ta.focus();
    ta.select();
    try {
      document.execCommand('copy');
      showToast('Challenge code copied.');
    } catch {
      showToast('Select the code and copy it manually.');
    }
  }
}

function openImportModal() {
  $('import-code').value = '';
  openModal('modal-import');
}

function confirmImport() {
  try {
    const map = decodeChallenge($('import-code').value);
    store.addCustom(map);
    closeModals();
    currentTab = 'community';
    selectedPreviewId = map.id;
    showMaps('community');
    showToast(`Imported “${map.name}”.`);
    audio.uiOpen();
  } catch (err) {
    showToast(err.message || 'Could not read that challenge code.');
  }
}

function handleMapAction(action, map) {
  if (action === 'edit') {
    openBuilder(map, { editingId: map.id, origin: 'maps' });
    return;
  }
  if (action === 'share') {
    openShareModal(map);
    return;
  }
  if (action === 'delete') {
    askConfirm('Delete this course?', `“${map.name}” and its best time will be removed from this device.`, 'DELETE').then((yes) => {
      if (!yes) return;
      store.removeCustom(map.id);
      if (selectedPreviewId === map.id) selectedPreviewId = store.customMaps()[0]?.id || BUILTIN_MAPS[0].id;
      renderMapCards();
      const list = store.customMaps();
      const pick = list.find((m) => m.id === selectedPreviewId) || list[0] || BUILTIN_MAPS[0];
      game.previewMap(pick);
      showToast('Course deleted.');
    });
  }
}

function handleBuilderCanvas(worldX, worldY) {
  const cell = game.updateBuilderHover(worldX, worldY);
  if (!cell) return;
  const res = game.applyBuilderAction(cell);
  if (!res.ok) {
    if (res.error) showToast(res.error);
    return;
  }
  builderState.dirty = true;
  syncBuilderUI();
  audio.click();
}

/* ------------------------------------------------------------------ */
/* Settings, tilt, sound                                               */
/* ------------------------------------------------------------------ */

function resolvedQuality() {
  const q = store.data.settings.quality;
  if (q === 'auto') return coarse ? 'medium' : 'high';
  return q;
}

function syncSoundUI() {
  const on = !!store.data.settings.sound;
  const btn = $('btn-sound');
  btn.classList.toggle('is-off', !on);
  btn.setAttribute('aria-pressed', String(on));
  btn.title = on ? 'Mute sound' : 'Turn sound on';
}

function syncSettingsUI() {
  const s = store.data.settings;
  for (const [id, key] of [['set-sound', 'sound'], ['set-ghost', 'ghost'], ['set-tilt', 'tilt']]) {
    const el = $(id);
    el.classList.toggle('is-on', !!s[key]);
    el.setAttribute('aria-checked', String(!!s[key]));
  }
  for (const b of document.querySelectorAll('#set-quality button')) {
    b.classList.toggle('is-active', b.dataset.q === s.quality);
  }
  syncSoundUI();
  syncQuickToggles();
}

function syncQuickToggles() {
  const s = store.data.settings;
  const map = [['btn-pause-sound', 'sound'], ['btn-pause-tilt', 'tilt'], ['btn-pause-ghost', 'ghost']];
  for (const [id, key] of map) {
    const el = $(id);
    if (!el) continue;
    el.classList.toggle('is-on', !!s[key]);
    el.setAttribute('aria-pressed', String(!!s[key]));
  }
}

function setSound(on, announce = false) {
  store.setSetting('sound', !!on);
  audio.setEnabled(!!on);
  if (on) {
    audio.unlock();
    if (announce) audio.click();
  }
  syncSettingsUI();
}

function setGhost(on) {
  store.setSetting('ghost', !!on);
  game.ghostEnabled = !!on;
  if (!on) game.ghostMesh.group.visible = false;
  syncSettingsUI();
  showToast(on ? 'Ghost replay on.' : 'Ghost replay off.');
}

async function enableTilt(on, silent = false) {
  if (on) {
    if (typeof DeviceOrientationEvent === 'undefined') {
      if (!silent) showToast('This device has no tilt sensor — use the joystick.');
      store.setSetting('tilt', false);
      syncSettingsUI();
      return;
    }
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      try {
        const permission = await DeviceOrientationEvent.requestPermission();
        if (permission !== 'granted') {
          if (!silent) showToast('Motion access was denied — use the joystick.');
          store.setSetting('tilt', false);
          syncSettingsUI();
          return;
        }
      } catch {
        if (!silent) showToast('Motion access is unavailable here.');
        store.setSetting('tilt', false);
        syncSettingsUI();
        return;
      }
    }
    tiltBase = null;
    tiltSeen = false;
    window.addEventListener('deviceorientation', onDeviceOrientation);
    game.input.tiltOn = true;
    store.setSetting('tilt', true);
    if (!silent) showToast('Tilt steering on — hold still to calibrate.');
    setTimeout(() => {
      if (!tiltSeen && game.input.tiltOn) {
        showToast('No motion data yet — the joystick always works too.');
      }
    }, 2200);
  } else {
    window.removeEventListener('deviceorientation', onDeviceOrientation);
    game.input.tiltOn = false;
    game.input.tiltX = 0;
    game.input.tiltY = 0;
    tiltBase = null;
    store.setSetting('tilt', false);
    if (!silent) showToast('Tilt steering off.');
  }
  syncSettingsUI();
}

function onDeviceOrientation(e) {
  if (e.gamma == null && e.beta == null) return;
  tiltSeen = true;
  const gamma = e.gamma || 0;
  const beta = e.beta || 0;
  if (!tiltBase) tiltBase = { gamma, beta };
  let dx = (gamma - tiltBase.gamma) / 21;
  let dy = (beta - tiltBase.beta) / 21;
  const angle = (screen.orientation && screen.orientation.angle) || 0;
  let x = dx;
  let y = -dy;
  if (angle === 90) { x = -dy; y = -dx; }
  else if (angle === 270 || angle === -90) { x = dy; y = dx; }
  else if (Math.abs(angle) === 180) { x = -dx; y = dy; }
  game.input.tiltX = clamp(x, -1, 1);
  game.input.tiltY = clamp(y, -1, 1);
}

function setQuality(q) {
  store.setSetting('quality', q);
  game.setQuality(resolvedQuality());
  syncSettingsUI();
  showToast(`Graphics set to ${q === 'auto' ? 'auto' : q}.`);
}

/* ------------------------------------------------------------------ */
/* Modal wiring                                                        */
/* ------------------------------------------------------------------ */

function openSettings() {
  syncSettingsUI();
  openModal('modal-settings');
  audio.uiOpen();
}

function wireModals() {
  document.querySelector('.modal-backdrop').addEventListener('click', closeModals);
  $('btn-save-cancel').addEventListener('click', closeModals);
  $('btn-share-close').addEventListener('click', closeModals);
  $('btn-import-cancel').addEventListener('click', closeModals);
  $('btn-settings-close').addEventListener('click', closeModals);
  $('btn-confirm-no').addEventListener('click', () => {
    const resolve = confirmResolve;
    confirmResolve = null;
    closeModals();
    resolve?.(false);
  });
  $('btn-confirm-yes').addEventListener('click', () => {
    const resolve = confirmResolve;
    confirmResolve = null;
    closeModals();
    resolve?.(true);
  });
  $('btn-save-confirm').addEventListener('click', confirmSaveMap);
  $('btn-copy-code').addEventListener('click', copyShareCode);
  $('btn-import-confirm').addEventListener('click', confirmImport);
  $('set-sound').addEventListener('click', () => setSound(!store.data.settings.sound, true));
  $('set-ghost').addEventListener('click', () => setGhost(!store.data.settings.ghost));
  $('set-tilt').addEventListener('click', () => enableTilt(!store.data.settings.tilt));
  for (const b of document.querySelectorAll('#set-quality button')) {
    b.addEventListener('click', () => setQuality(b.dataset.q));
  }
  $('btn-reset-data').addEventListener('click', () => {
    askConfirm('Erase everything?', 'All custom courses, best times and ghost replays will be deleted from this browser.', 'ERASE ALL').then((yes) => {
      if (!yes) return;
      try { localStorage.removeItem('marble-rush-v1'); } catch { /* ignore */ }
      location.reload();
    });
  });
}

/* ------------------------------------------------------------------ */
/* Countdown / HUD helpers                                             */
/* ------------------------------------------------------------------ */

function showCountdownShell() {
  const el = $('countdown');
  el.classList.remove('is-hidden');
  el.classList.remove('go');
}

function hideCountdown() {
  clearTimeout(countdownTimer);
  $('countdown').classList.add('is-hidden');
}

function flashCountdown(n) {
  const cd = $('countdown');
  const num = $('countdown-num');
  cd.classList.remove('is-hidden');
  if (n === 0) {
    cd.classList.add('go');
    num.textContent = 'GO!';
  } else {
    cd.classList.remove('go');
    num.textContent = String(n);
  }
  num.style.animation = 'none';
  void num.offsetWidth;
  num.style.animation = '';
  clearTimeout(countdownTimer);
  if (n === 0) countdownTimer = setTimeout(hideCountdown, 720);
}

function flashScreen(kind) {
  const el = $('flash');
  el.className = 'flash';
  void el.offsetWidth;
  el.classList.add(kind);
}

function showSplit(html, good) {
  const el = $('split-toast');
  el.innerHTML = html;
  el.classList.add('show');
  el.style.borderColor = good ? 'rgba(100,230,164,.4)' : 'rgba(255,120,120,.35)';
  clearTimeout(el._timer);
  el._timer = setTimeout(() => el.classList.remove('show'), 2100);
}

function resetJoystick() {
  joystick.active = false;
  joystick.id = null;
  joystick.x = 0;
  joystick.y = 0;
  const knob = $('joy-knob');
  if (knob) knob.style.transform = 'translate(0px, 0px)';
}

function syncHudCheckpoints() {
  const total = game.checkpoints.length;
  const active = game.checkpoints.filter((c) => c.active).length;
  const el = $('hud-cp');
  el.textContent = `CP ${active}/${total}`;
  el.classList.toggle('active', active > 0);
}

function updateTimerHud() {
  if ($('hud').classList.contains('is-hidden')) return;
  const text = formatTime(game.raceTime);
  if (text !== lastTimerText) {
    lastTimerText = text;
    $('timer').textContent = text;
  }
}

let lastTimerText = '';

/* ------------------------------------------------------------------ */
/* Input                                                               */
/* ------------------------------------------------------------------ */

function applyKeyboardToGame() {
  if (!game) return;
  let x = 0;
  let y = 0;
  if (keys.has('KeyA') || keys.has('ArrowLeft')) x -= 1;
  if (keys.has('KeyD') || keys.has('ArrowRight')) x += 1;
  if (keys.has('KeyW') || keys.has('ArrowUp')) y += 1;
  if (keys.has('KeyS') || keys.has('ArrowDown')) y -= 1;
  game.input.x = clamp(x + joystick.x, -1, 1);
  game.input.y = clamp(y + joystick.y, -1, 1);
}

function doJump() {
  if (!game || game.mode !== 'race' || game.raceState !== 'running') return;
  game.ball.jumpBuffer = 0.16;
  audio.unlock();
}

function bindJoystick() {
  const el = $('joystick');
  const knob = $('joy-knob');
  let center = { x: 0, y: 0 };
  const setFrom = (clientX, clientY) => {
    let dx = clientX - center.x;
    let dy = clientY - center.y;
    const dist = Math.hypot(dx, dy);
    const max = 30;
    if (dist > max) {
      dx = (dx / dist) * max;
      dy = (dy / dist) * max;
    }
    knob.style.transform = `translate(${dx}px, ${dy}px)`;
    joystick.x = dx / max;
    joystick.y = -dy / max;
  };
  el.addEventListener('pointerdown', (e) => {
    if (game.mode !== 'race' || game.raceState === 'paused') return;
    e.preventDefault();
    e.stopPropagation();
    audio.unlock();
    const rect = el.getBoundingClientRect();
    center = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    joystick.active = true;
    joystick.id = e.pointerId;
    try { el.setPointerCapture(e.pointerId); } catch { /* ignore */ }
    setFrom(e.clientX, e.clientY);
  });
  el.addEventListener('pointermove', (e) => {
    if (!joystick.active || joystick.id !== e.pointerId) return;
    e.preventDefault();
    setFrom(e.clientX, e.clientY);
  });
  const end = (e) => {
    if (joystick.id !== e.pointerId) return;
    resetJoystick();
  };
  el.addEventListener('pointerup', end);
  el.addEventListener('pointercancel', end);
  el.addEventListener('lostpointercapture', end);
}

function bindCanvas() {
  canvas.addEventListener('pointerdown', (e) => {
    audio.unlock();
    const hasScreens = !$('screen-pause').classList.contains('is-hidden')
      || !$('screen-result').classList.contains('is-hidden')
      || !$('modal-layer').classList.contains('is-hidden');
    if (hasScreens) return;
    activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    try { canvas.setPointerCapture(e.pointerId); } catch { /* ignore */ }
    if (activePointers.size === 2) {
      const pts = [...activePointers.values()];
      pinchState = { dist: Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y) };
      dragState = null;
      return;
    }
    if (activePointers.size > 2) return;
    dragState = {
      id: e.pointerId,
      lastX: e.clientX,
      lastY: e.clientY,
      moved: 0,
      start: performance.now(),
    };
    if (game.mode === 'builder' && e.pointerType === 'mouse') {
      game.updateBuilderHover(e.clientX, e.clientY);
    }
  });

  canvas.addEventListener('pointermove', (e) => {
    if (activePointers.has(e.pointerId)) activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (activePointers.size >= 2 && pinchState) {
      const pts = [...activePointers.values()];
      if (pts.length >= 2) {
        const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
        game.zoom((dist - pinchState.dist) * 0.9);
        pinchState.dist = dist;
      }
      return;
    }
    if (dragState && dragState.id === e.pointerId) {
      const dx = e.clientX - dragState.lastX;
      const dy = e.clientY - dragState.lastY;
      dragState.lastX = e.clientX;
      dragState.lastY = e.clientY;
      dragState.moved += Math.abs(dx) + Math.abs(dy);
      game.orbit(dx, dy);
      if (dragState.moved < 9 && game.mode === 'builder') game.updateBuilderHover(e.clientX, e.clientY);
    } else if (e.pointerType === 'mouse' && game.mode === 'builder' && $('modal-layer').classList.contains('is-hidden')) {
      game.updateBuilderHover(e.clientX, e.clientY);
    }
  });

  const release = (e) => {
    activePointers.delete(e.pointerId);
    if (pinchState && activePointers.size < 2) pinchState = null;
    if (dragState && dragState.id === e.pointerId) {
      const { moved, start } = dragState;
      dragState = null;
      if (game.mode === 'builder' && moved < 10 && performance.now() - start < 700) {
        handleBuilderCanvas(e.clientX, e.clientY);
      }
    }
  };
  canvas.addEventListener('pointerup', release);
  canvas.addEventListener('pointercancel', release);
  canvas.addEventListener('pointerleave', () => {
    if (game.mode === 'builder' && !dragState) {
      if (game.builderCursor) game.builderCursor.visible = false;
      if (game.builderGhost) game.builderGhost.group.visible = false;
    }
  });
  canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    game.zoom(e.deltaY);
  }, { passive: false });
}

function bindKeyboard() {
  window.addEventListener('keydown', (e) => {
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
    if (e.code === 'Escape') {
      handleEscape();
      return;
    }
    if (e.code === 'Space') {
      doJump();
      if (game.mode === 'race') keys.add('Space');
      return;
    }
    if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
      keys.add(e.code);
      if (game.mode === 'race' && e.code === 'KeyR') restartCurrentRace();
      return;
    }
    if (e.code === 'KeyR' && game.mode === 'race') {
      restartCurrentRace();
    }
  });
  window.addEventListener('keyup', (e) => {
    keys.delete(e.code);
  });
  window.addEventListener('blur', () => {
    keys.clear();
    resetJoystick();
  });
}

function handleEscape() {
  if (!$('modal-layer').classList.contains('is-hidden')) { closeModals(); return; }
  if (!$('screen-pause').classList.contains('is-hidden')) { resumeRun(); return; }
  if (!$('screen-result').classList.contains('is-hidden')) {
    if (testOrigin) resumeBuilderFromTest();
    else showMaps(currentTab);
    return;
  }
  if (game.mode === 'builder') { backFromBuilder(); return; }
  if (game.mode === 'race' && game.raceState === 'running') { game.pauseRace(); return; }
  if (!$('screen-maps').classList.contains('is-hidden')) { showHome(); return; }
}

function resumeRun() {
  hidePause();
  showRaceHud(currentRaceMap);
  game.resumeRace();
}

/* ------------------------------------------------------------------ */
/* Main wiring                                                         */
/* ------------------------------------------------------------------ */

function buildPalette() {
  const palette = $('palette');
  palette.innerHTML = '';
  for (const piece of PIECES) {
    const btn = document.createElement('button');
    btn.className = `piece-btn${piece.id === 'erase' ? ' erase' : ''}`;
    btn.dataset.piece = piece.id;
    btn.title = piece.hint;
    btn.innerHTML = `${piece.icon}<span>${piece.label}</span>`;
    btn.addEventListener('click', () => {
      if (!builderState) return;
      setBuilderTool(piece.id);
      audio.click();
    });
    palette.appendChild(btn);
  }
}

function openMaps(tab = currentTab) {
  showMaps(tab);
}

function wireGame() {
  game.events.onCountdown = (n) => {
    if (game.mode !== 'race') return;
    flashCountdown(n);
  };
  game.events.onGo = () => {
    flashCountdown(0);
    lastTimerText = '';
    $('timer').textContent = formatTime(game.raceTime);
    lastTimerText = $('timer').textContent;
    countdownTimer = setTimeout(hideCountdown, 720);
  };
  game.events.onCheckpoint = (info) => {
    syncHudCheckpoints();
    flashScreen('good');
    let html = `CHECKPOINT ${info.index + 1}/${info.count}`;
    let good = true;
    if (info.bestSplit != null) {
      const diff = info.split - info.bestSplit;
      html += ` · <span class="${diff <= 0 ? 'good' : 'bad'}">${formatDelta(diff)}</span>`;
      good = diff <= 0;
    }
    showSplit(html, good);
  };
  game.events.onRespawn = (info) => {
    flashScreen('hit');
    showToast(info.checkpoint ? 'Back to the last checkpoint.' : 'Back to the start — keep rolling.', '', null, 1600);
  };
  game.events.onFinish = handleFinish;
  game.events.onPause = () => showPause();
  game.events.onBuilderChange = () => {
    if (builderState) syncBuilderUI();
  };
}

function wireUI() {
  $('btn-play').addEventListener('click', () => {
    audio.unlock(); audio.click();
    showMaps('official');
  });
  $('btn-build').addEventListener('click', () => {
    audio.unlock();
    openBuilder(starterMap(), { origin: 'home' });
  });
  $('btn-sound').addEventListener('click', () => setSound(!store.data.settings.sound, true));
  $('btn-settings').addEventListener('click', openSettings);
  $('btn-open-settings').addEventListener('click', openSettings);
  $('btn-maps-back').addEventListener('click', showHome);
  $('btn-import').addEventListener('click', openImportModal);

  for (const tab of document.querySelectorAll('.tab')) {
    tab.addEventListener('click', () => {
      currentTab = tab.dataset.tab;
      renderMapCards();
      const list = currentTab === 'official' ? BUILTIN_MAPS : store.customMaps();
      const pick = list.find((m) => m.id === selectedPreviewId) || list[0] || BUILTIN_MAPS[0];
      selectedPreviewId = pick.id;
      game.previewMap(pick);
      audio.click();
    });
  }

  $('btn-pause').addEventListener('click', () => {
    if (game.raceState === 'running') game.pauseRace();
  });
  $('btn-resume').addEventListener('click', resumeRun);
  $('btn-restart').addEventListener('click', restartCurrentRace);
  $('btn-quit').addEventListener('click', quitCurrentRace);

  $('btn-pause-sound').addEventListener('click', () => setSound(!store.data.settings.sound, true));
  $('btn-pause-tilt').addEventListener('click', () => enableTilt(!store.data.settings.tilt));
  $('btn-pause-ghost').addEventListener('click', () => setGhost(!store.data.settings.ghost));

  $('btn-result-retry').addEventListener('click', () => {
    if (!currentRaceMap) return;
    startMap(currentRaceMap, { test: currentRaceIsTest, fromBuilder: currentRaceForBuilder });
  });
  $('btn-result-next').addEventListener('click', nextCourse);
  $('btn-result-exit').addEventListener('click', () => {
    if (testOrigin) resumeBuilderFromTest();
    else showMaps(currentTab);
  });
  $('btn-result-share').addEventListener('click', () => {
    if (currentRaceMap?.id?.startsWith('u-')) openShareModal(currentRaceMap);
  });

  $('btn-builder-back').addEventListener('click', backFromBuilder);
  $('btn-builder-save').addEventListener('click', openSaveModal);
  $('btn-builder-rename').addEventListener('click', openSaveModal);
  $('btn-builder-test').addEventListener('click', startTestFromBuilder);
  $('btn-builder-undo').addEventListener('click', () => {
    if (!builderState) return;
    if (game.builderUndo()) {
      builderState.dirty = true;
      syncBuilderUI();
      audio.uiBack();
    }
  });
  $('btn-rotate').addEventListener('click', () => {
    if (!builderState) return;
    game.setBuilderRot(game.builder.rot + 1);
    audio.click();
  });
  $('btn-level-up').addEventListener('click', () => {
    if (!builderState) return;
    game.setBuilderLevel(game.builder.level + 1);
    syncBuilderUI();
    audio.click();
  });
  $('btn-level-down').addEventListener('click', () => {
    if (!builderState) return;
    game.setBuilderLevel(game.builder.level - 1);
    syncBuilderUI();
    audio.click();
  });

  $('btn-jump').addEventListener('pointerdown', (e) => {
    e.preventDefault();
    doJump();
    $('btn-jump').classList.add('pressed');
  });
  const releaseJump = () => $('btn-jump').classList.remove('pressed');
  $('btn-jump').addEventListener('pointerup', releaseJump);
  $('btn-jump').addEventListener('pointercancel', releaseJump);
  $('btn-jump').addEventListener('pointerleave', releaseJump);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden && game.raceState === 'running') game.pauseRace();
  });
  window.addEventListener('orientationchange', () => { tiltBase = null; });
  document.addEventListener('pointerdown', () => audio.unlock(), { once: true });
}

/* ------------------------------------------------------------------ */
/* Boot loop                                                           */
/* ------------------------------------------------------------------ */

let lastFrame = 0;
function frame(now) {
  const dt = lastFrame ? (now - lastFrame) / 1000 : 0.016;
  lastFrame = now;
  applyKeyboardToGame();
  game.update(dt);
  updateTimerHud();
  requestAnimationFrame(frame);
}

async function boot() {
  try { await document.fonts.ready; } catch { /* fonts are optional */ }
  game = new Game(canvas);
  game.ghostEnabled = true;
  window.MarbleRush = { game, store };
  window.__marble = game;
  wireGame();
  wireUI();
  wireModals();
  bindCanvas();
  bindKeyboard();
  bindJoystick();
  buildPalette();
  renderMapCards();

  const s = store.data.settings;
  audio.setEnabled(!!s.sound);
  game.setQuality(resolvedQuality());
  game.ghostEnabled = !!s.ghost;
  syncSettingsUI();
  if (s.tilt && coarse && typeof DeviceOrientationEvent !== 'undefined' && !DeviceOrientationEvent.requestPermission) {
    enableTilt(true, true);
  } else if (s.tilt && !coarse) {
    store.setSetting('tilt', false);
  }

  showHome();
  requestAnimationFrame(frame);
  setTimeout(() => document.body.classList.add('ready'), 500);
}

boot();


