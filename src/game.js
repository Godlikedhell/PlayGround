import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import {
  CELL, STEP, GRID_MIN, GRID_MAX, LEVELS, MARBLE_RADIUS, THEMES, themeOf,
  courseBounds,
} from './maps.js';
import { audio } from './audio.js';

const UP = new THREE.Vector3(0, 1, 0);
const MAX_SPEED = 10.8;
const ACCEL = 31;
const AIR_ACCEL = 11;
const GRAVITY = 26;
const JUMP_VELOCITY = 8.1;
const START_SPAWN_HEIGHT = 1.35;

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const damp = (current, target, lambda, dt) => current + (target - current) * (1 - Math.exp(-lambda * dt));
const yawFor = (r) => (r % 4) * (Math.PI / 2);
const dirFor = (r) => {
  const a = yawFor(r);
  return new THREE.Vector3(Math.sin(a), 0, Math.cos(a));
};

function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a += 0x6d2b79f5;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashCode(str) {
  let h = 2166136261;
  for (let i = 0; i < String(str).length; i++) {
    h ^= String(str).charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function makeCloudTexture() {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 128;
  const ctx = c.getContext('2d');
  const puffs = [
    [70, 72, 46], [110, 55, 56], [155, 65, 52], [195, 78, 38], [50, 86, 32], [130, 86, 48],
  ];
  for (const [x, y, r] of puffs) {
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, 'rgba(255,255,255,0.95)');
    g.addColorStop(0.55, 'rgba(255,255,255,0.55)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makeParticleTexture() {
  const c = document.createElement('canvas');
  c.width = 64; c.height = 64;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.35, 'rgba(255,255,255,0.75)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makeMarbleTexture() {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 512;
  const ctx = c.getContext('2d');
  const bg = ctx.createLinearGradient(0, 0, 512, 512);
  bg.addColorStop(0, '#fffdf6');
  bg.addColorStop(0.45, '#ffe6bd');
  bg.addColorStop(1, '#fff4dc');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 512, 512);
  const swirls = [
    ['#ff5a2a', 0.52, 0.17, 168, 0.95],
    ['#0f9fa8', 0.38, 0.15, 126, 0.9],
    ['#ffb200', 0.2, 0.13, 98, 0.92],
    ['#e52e6f', 0.3, 0.12, 76, 0.8],
    ['#7b45e8', 0.24, 0.09, 62, 0.7],
  ];
  for (let i = 0; i < 30; i++) {
    const [color, a, w, len, alpha] = swirls[i % swirls.length];
    ctx.save();
    ctx.translate(256 + Math.cos(i * 2.4) * (30 + i * 5.2), 256 + Math.sin(i * 1.7) * (30 + i * 4.2));
    ctx.rotate(i * 0.8);
    ctx.strokeStyle = color;
    ctx.globalAlpha = alpha;
    ctx.lineWidth = w * 34 + 5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.ellipse(0, 0, len * (0.7 + a * 0.5), len * (0.22 + a * 0.15), 0, 0, Math.PI * 1.6);
    ctx.stroke();
    ctx.restore();
  }
  ctx.globalAlpha = 0.85;
  for (let i = 0; i < 18; i++) {
    ctx.fillStyle = swirls[i % swirls.length][0];
    ctx.beginPath();
    ctx.arc(40 + (i * 83) % 440, 35 + (i * 127) % 450, 4 + (i % 4) * 2.4, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 0.5;
  for (let i = 0; i < 110; i++) {
    ctx.fillStyle = i % 2 ? '#ffffff' : '#ffcf9b';
    ctx.beginPath();
    ctx.arc(Math.random() * 512, Math.random() * 512, Math.random() * 2.2 + 0.4, 0, Math.PI * 2);
    ctx.fill();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

function makeTextTexture(text, color = '#ffffff', glow = '#ffb703') {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 160;
  const ctx = c.getContext('2d');
  ctx.font = '900 84px "Baloo 2", Arial Black, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.lineWidth = 18;
  ctx.strokeStyle = 'rgba(20,16,40,0.35)';
  ctx.lineJoin = 'round';
  ctx.strokeText(text, 256, 82);
  ctx.shadowColor = glow;
  ctx.shadowBlur = 26;
  ctx.fillStyle = color;
  ctx.fillText(text, 256, 82);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance', alpha: false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 0.92;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(58, 1, 0.08, 500);
    this.camera.position.set(0, 7, 16);

    this.events = {};
    this.mode = 'showcase';
    this.totalTime = 0;
    this.raceState = 'idle';
    this.raceTime = 0;
    this.currentMap = null;
    this.paused = false;
    this.quality = 'high';

    this.colliders = [];
    this.checkpoints = [];
    this.boosts = [];
    this.bounces = [];
    this.startPiece = null;
    this.finishPiece = null;
    this.finishInfo = null;
    this.spawn = null;
    this.lastCheckpoint = null;
    this.respawnCooldown = 0;
    this.courseGroup = null;
    this.showcaseGroup = null;
    this.groups = [];
    this.fxGroup = null;

    this.camYaw = 0;
    this.camPitch = 0.36;
    this.camDist = 7.4;
    this.camTarget = new THREE.Vector3();
    this.camLook = new THREE.Vector3();
    this.camPos = new THREE.Vector3(0, 8, 16);
    this.camShake = 0;
    this.fovKick = 0;
    this.autoOrbit = 0.05;
    this.cameraMode = 'showcase';

    this.input = { x: 0, y: 0, tiltX: 0, tiltY: 0, tiltOn: false };
    this.ball = this.createBall();
    this.ghostMesh = this.createGhost();
    this.recording = [];
    this.recordAcc = 0;
    this.recordingEnabled = true;
    this.ghost = null;
    this.countdownT = 0;
    this.lastCount = 0;
    this.resuming = false;
    this.bestSplits = null;
    this.splits = [];

    this.builder = {
      active: false,
      map: null,
      level: 0,
      tool: 'plat',
      rot: 0,
      hover: null,
      history: [],
    };

    this.materials = new Map();
    this.geometries = new Map();
    this.lineMaterials = new Map();
    this.particleTexture = makeParticleTexture();
    this.cloudTexture = makeCloudTexture();

    this.setupScene();
    this.setupLights();
    this.setupSky();
    this.setupClouds();
    this.setupStars();
    this.setupFX();
    this.showShowcase();

    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(canvas);
    this.resize();
  }

  /* ------------------------------------------------------------------ */
  /* Scene plumbing                                                      */
  /* ------------------------------------------------------------------ */

  setupScene() {
    this.scene.fog = new THREE.Fog(0xf7c99b, 42, 190);
    // A bright room environment washes out the stylised palette, so the
    // course relies on the sun/hemisphere lights and a clearcoat highlight.
    this.envMap = null;
    this.scene.environment = null;
  }

  setupLights() {
    this.hemi = new THREE.HemisphereLight(0xcfe7ff, 0xc27e50, 0.42);
    this.scene.add(this.hemi);
    this.dir = new THREE.DirectionalLight(0xfff0d2, 1.28);
    this.dir.position.set(22, 36, 18);
    this.dir.castShadow = true;
    this.dir.shadow.mapSize.set(2048, 2048);
    this.dir.shadow.camera.near = 1;
    this.dir.shadow.camera.far = 160;
    this.dir.shadow.camera.left = -42;
    this.dir.shadow.camera.right = 42;
    this.dir.shadow.camera.top = 42;
    this.dir.shadow.camera.bottom = -42;
    this.dir.shadow.bias = -0.0006;
    this.dir.shadow.normalBias = 0.035;
    this.scene.add(this.dir);
    this.scene.add(this.dir.target);
    this.rim = new THREE.DirectionalLight(0xff8a5c, 0.3);
    this.rim.position.set(-25, 14, -18);
    this.scene.add(this.rim);
  }

  setupSky() {
    this.skyUniforms = {
      top: { value: new THREE.Color(0x4f8fd8) },
      mid: { value: new THREE.Color(0xffd3a3) },
      bottom: { value: new THREE.Color(0xffe9c7) },
      sunColor: { value: new THREE.Color(0xfff4c9) },
      sunDir: { value: new THREE.Vector3(0.4, 0.45, 0.3).normalize() },
    };
    const geo = new THREE.SphereGeometry(320, 32, 20);
    const mat = new THREE.ShaderMaterial({
      uniforms: this.skyUniforms,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      vertexShader: `
        varying vec3 vWorld;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorld = wp.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 top; uniform vec3 mid; uniform vec3 bottom;
        uniform vec3 sunColor; uniform vec3 sunDir;
        varying vec3 vWorld;
        void main() {
          vec3 d = normalize(vWorld);
          float h = d.y;
          vec3 col = mix(bottom, mid, smoothstep(-0.08, 0.22, h));
          col = mix(col, top, smoothstep(0.16, 0.78, h));
          float sd = max(dot(d, normalize(sunDir)), 0.0);
          col += sunColor * pow(sd, 220.0) * 2.2;
          col += sunColor * pow(sd, 9.0) * 0.24;
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
    this.sky = new THREE.Mesh(geo, mat);
    this.sky.frustumCulled = false;
    this.scene.add(this.sky);
  }

  setupClouds() {
    this.cloudGroup = new THREE.Group();
    this.scene.add(this.cloudGroup);
    for (let i = 0; i < 14; i++) {
      const mat = new THREE.SpriteMaterial({
        map: this.cloudTexture, color: 0xffffff, transparent: true,
        opacity: 0.55, depthWrite: false, fog: true,
      });
      const sprite = new THREE.Sprite(mat);
      const angle = (i / 14) * Math.PI * 2 + Math.random() * 0.4;
      const radius = 45 + Math.random() * 90;
      sprite.position.set(Math.cos(angle) * radius, 8 + Math.random() * 26, Math.sin(angle) * radius);
      const s = 18 + Math.random() * 26;
      sprite.scale.set(s, s * 0.5, 1);
      this.cloudGroup.add(sprite);
    }
  }

  setupStars() {
    const count = 420;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const y = 0.12 + Math.random() * 0.88;
      const r = Math.sqrt(1 - y * y);
      pos[i * 3] = Math.cos(a) * r * 280;
      pos[i * 3 + 1] = y * 280;
      pos[i * 3 + 2] = Math.sin(a) * r * 280;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 1.6, transparent: true, opacity: 0, depthWrite: false, fog: false });
    this.stars = new THREE.Points(geo, this.starMat);
    this.scene.add(this.stars);
  }

  setupFX() {
    this.fxGroup = new THREE.Group();
    this.scene.add(this.fxGroup);
    this.fx = [];
    for (let i = 0; i < 110; i++) {
      const mat = new THREE.SpriteMaterial({
        map: this.particleTexture, color: 0xffffff, transparent: true,
        opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending,
      });
      const sprite = new THREE.Sprite(mat);
      sprite.visible = false;
      this.fxGroup.add(sprite);
      this.fx.push({
        sprite, life: 0, maxLife: 1, vel: new THREE.Vector3(), gravity: 0, size: 1, drag: 0,
      });
    }
    this.fxIndex = 0;
  }

  makeMat(color, opts = {}) {
    const key = `${color}|${opts.emissive || 0}|${opts.roughness ?? 0.55}|${opts.metalness ?? 0.02}|${opts.opacity ?? 1}|${opts.side || 0}|${opts.flat ? 1 : 0}`;
    if (this.materials.has(key)) return this.materials.get(key);
    const mat = new THREE.MeshStandardMaterial({
      color,
      roughness: opts.roughness ?? 0.55,
      metalness: opts.metalness ?? 0.02,
      emissive: opts.emissive || 0x000000,
      emissiveIntensity: opts.emissiveIntensity ?? 1,
      transparent: (opts.opacity ?? 1) < 1,
      opacity: opts.opacity ?? 1,
      side: opts.side || THREE.FrontSide,
      flatShading: !!opts.flat,
      envMapIntensity: opts.envMapIntensity ?? 0.18,
    });
    this.materials.set(key, mat);
    return mat;
  }

  lineMat(color, opacity = 0.8) {
    const key = `${color}|${opacity}`;
    if (this.lineMaterials.has(key)) return this.lineMaterials.get(key);
    const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity, depthWrite: false });
    this.lineMaterials.set(key, mat);
    return mat;
  }

  boxGeo(w, h, d, r = 0.09, seg = 2) {
    const key = `${w.toFixed(2)}|${h.toFixed(2)}|${d.toFixed(2)}|${r}|${seg}`;
    if (this.geometries.has(key)) return this.geometries.get(key);
    const safeR = Math.max(0.001, Math.min(r, Math.min(w, h, d) * 0.45));
    const geo = new RoundedBoxGeometry(w, h, d, seg, safeR);
    this.geometries.set(key, geo);
    return geo;
  }

  cylGeo(rTop, rBottom, h, seg = 8) {
    const key = `cyl|${rTop}|${rBottom}|${h}|${seg}`;
    if (this.geometries.has(key)) return this.geometries.get(key);
    const geo = new THREE.CylinderGeometry(rTop, rBottom, h, seg);
    this.geometries.set(key, geo);
    return geo;
  }

  /* ------------------------------------------------------------------ */
  /* Theme                                                               */
  /* ------------------------------------------------------------------ */

  applyTheme(key) {
    const t = THEMES[key] || THEMES.sunrise;
    this.theme = t;
    this.themeKey = key;
    this.skyUniforms.top.value.set(t.skyTop);
    this.skyUniforms.mid.value.set(t.skyMid);
    this.skyUniforms.bottom.value.set(t.skyBottom);
    this.skyUniforms.sunColor.value.set(t.sun);
    this.scene.fog.color.set(t.fog);
    this.scene.fog.near = key === 'neon' ? 45 : 62;
    this.scene.fog.far = key === 'neon' ? 190 : 260;
    this.hemi.color.set(t.hemiSky);
    this.hemi.groundColor.set(t.hemiGround);
    this.hemi.intensity = key === 'neon' ? 0.62 : key === 'temple' ? 0.46 : 0.44;
    this.dir.color.set(t.light);
    this.dir.intensity = key === 'neon' ? 1.3 : 1.32;
    this.rim.color.set(t.accent);
    this.rim.intensity = key === 'neon' ? 0.8 : 0.32;
    for (const child of this.cloudGroup.children) child.material.color.set(t.cloud);
    this.starMat.opacity = key === 'neon' ? 0.9 : 0.12;
    this.renderer.toneMappingExposure = key === 'neon' ? 1.0 : 0.98;
  }

  setLightingBounds(bounds, padding = 13) {
    const t = this.theme;
    if (!t) return;
    const cx = ((bounds.minX + bounds.maxX) / 2) * CELL;
    const cz = ((bounds.minZ + bounds.maxZ) / 2) * CELL;
    const cy = ((bounds.minL + bounds.maxL) / 2) * STEP;
    const sx = (bounds.maxX - bounds.minX + 1) * CELL;
    const sz = (bounds.maxZ - bounds.minZ + 1) * CELL;
    const size = clamp(Math.max(sx, sz) * 0.72 + padding, 22, 74);
    const cam = this.dir.shadow.camera;
    cam.left = -size; cam.right = size; cam.top = size; cam.bottom = -size;
    cam.updateProjectionMatrix();
    this.dir.target.position.set(cx, cy, cz);
    this.dir.position.set(cx + 26, cy + 40, cz + 22);
    this.rim.position.set(cx - 25, cy + 14, cz - 22);
    this.skyUniforms.sunDir.value.set(0.45, 0.5, 0.36).normalize();
  }

  /* ------------------------------------------------------------------ */
  /* Ball + ghost                                                        */
  /* ------------------------------------------------------------------ */

  createBall() {
    const group = new THREE.Group();
    const geo = new THREE.SphereGeometry(MARBLE_RADIUS, 40, 28);
    const mat = new THREE.MeshPhysicalMaterial({
      map: makeMarbleTexture(),
      roughness: 0.24,
      metalness: 0.06,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1,
      envMapIntensity: 0.55,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    const halo = new THREE.Mesh(
      new THREE.SphereGeometry(MARBLE_RADIUS * 1.045, 24, 18),
      new THREE.MeshBasicMaterial({ color: 0xffc070, transparent: true, opacity: 0.09, blending: THREE.AdditiveBlending, side: THREE.BackSide }),
    );
    group.add(halo);
    this.scene.add(group);
    return {
      group, mesh,
      pos: new THREE.Vector3(0, 2, 0),
      vel: new THREE.Vector3(),
      quat: new THREE.Quaternion(),
      grounded: false,
      groundCollider: null,
      coyote: 0,
      jumpBuffer: 0,
      jumpCooldown: 0,
      spin: 0,
      speed: 0,
      active: false,
    };
  }

  createGhost() {
    const group = new THREE.Group();
    const mat = new THREE.MeshBasicMaterial({
      color: 0x6ff6ff, transparent: true, opacity: 0.28,
      blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(MARBLE_RADIUS * 1.01, 24, 16), mat);
    group.add(mesh);
    const wire = new THREE.Mesh(
      new THREE.SphereGeometry(MARBLE_RADIUS * 1.03, 14, 10),
      new THREE.MeshBasicMaterial({ color: 0xaaffff, wireframe: true, transparent: true, opacity: 0.28, depthWrite: false }),
    );
    group.add(wire);
    group.visible = false;
    this.scene.add(group);
    return { group, mesh, wire, path: null, cursor: 0, visibleUntil: 0 };
  }

  resetBallPosition() {
    const spawn = this.spawn || { x: 0, y: 4, z: 0, yaw: 0 };
    this.ball.pos.set(spawn.x, spawn.y + START_SPAWN_HEIGHT, spawn.z);
    this.ball.vel.set(0, 0, 0);
    this.ball.quat.identity();
    this.ball.grounded = false;
    this.ball.groundCollider = null;
    this.ball.coyote = 0;
    this.ball.jumpBuffer = 0;
    this.ball.jumpCooldown = 0;
    this.ball.group.position.copy(this.ball.pos);
    this.ball.group.quaternion.copy(this.ball.quat);
    this.camYaw = spawn.yaw ?? 0;
    this.camPitch = 0.52;
    this.camDist = window.innerWidth / window.innerHeight < 0.8 ? 9.8 : 8.2;
    this.camTarget.set(spawn.x, spawn.y + 1, spawn.z);
    this.camLook.copy(this.camTarget);
    const offset = new THREE.Vector3(
      Math.sin(this.camYaw) * Math.cos(this.camPitch),
      Math.sin(this.camPitch),
      Math.cos(this.camYaw) * Math.cos(this.camPitch),
    ).multiplyScalar(this.camDist);
    this.camPos.copy(this.camTarget).add(offset);
    this.ghostMesh.group.visible = false;
  }

  /* ------------------------------------------------------------------ */
  /* Showcase scene                                                      */
  /* ------------------------------------------------------------------ */

  clearShowcase() {
    if (this.showcaseGroup) {
      this.scene.remove(this.showcaseGroup);
      this.showcaseGroup = null;
    }
  }

  showShowcase() {
    this.mode = 'showcase';
    this.cameraMode = 'showcase';
    this.clearWorld();
    this.clearShowcase();
    this.applyTheme('sunrise');
    this.ball.active = false;
    this.ball.group.visible = false;
    this.ghostMesh.group.visible = false;
    this.showcaseMarble = null;
    this.showcaseRing1 = null;
    this.showcaseRing2 = null;
    this.showcaseSparks = [];
    const t = this.theme;
    const g = new THREE.Group();
    this.showcaseGroup = g;
    this.scene.add(g);
    const wide = window.innerWidth / Math.max(1, window.innerHeight) > 1.05;
    g.position.x = wide ? 5.2 : 0;

    const island = new THREE.Mesh(this.cylGeo(5.85, 4.2, 1.3, 12), this.makeMat(t.grass, { roughness: 0.85 }));
    island.position.y = -0.6;
    island.receiveShadow = true; island.castShadow = true;
    g.add(island);
    const lip = new THREE.Mesh(
      new THREE.TorusGeometry(5.55, 0.2, 8, 48),
      this.makeMat(t.top, { roughness: 0.65 }),
    );
    lip.rotation.x = Math.PI / 2;
    lip.position.y = 0.08;
    lip.receiveShadow = true;
    g.add(lip);
    const rock = new THREE.Mesh(this.cylGeo(4.2, 0.35, 6.5, 9), this.makeMat(t.rock, { roughness: 0.95, flat: true }));
    rock.position.y = -4.5;
    rock.rotation.y = 0.4;
    rock.castShadow = true;
    g.add(rock);
    for (let i = 0; i < 14; i++) {
      const a = (i / 14) * Math.PI * 2;
      const rocklet = new THREE.Mesh(
        new THREE.DodecahedronGeometry(0.45 + Math.random() * 0.7, 0),
        this.makeMat(t.rock, { roughness: 1, flat: true }),
      );
      rocklet.position.set(Math.cos(a) * (4.2 + Math.random()), -5 - Math.random() * 2.5, Math.sin(a) * (4.2 + Math.random()));
      rocklet.rotation.set(Math.random(), Math.random(), Math.random());
      g.add(rocklet);
    }

    const pedestal = new THREE.Mesh(this.cylGeo(1.7, 2.1, 0.8, 16), this.makeMat(t.body, { roughness: 0.5 }));
    pedestal.position.y = 0.7; pedestal.castShadow = true; pedestal.receiveShadow = true;
    g.add(pedestal);
    const glowRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.55, 0.06, 8, 48),
      new THREE.MeshStandardMaterial({ color: t.accent, emissive: t.accent, emissiveIntensity: 2.4, roughness: 0.3 }),
    );
    glowRing.rotation.x = Math.PI / 2;
    glowRing.position.y = 1.12;
    g.add(glowRing);

    const bigMarble = new THREE.Group();
    const marbleMesh = new THREE.Mesh(
      new THREE.SphereGeometry(1.8, 48, 32),
      new THREE.MeshPhysicalMaterial({
        map: makeMarbleTexture(), roughness: 0.22, metalness: 0.06, clearcoat: 0.9, clearcoatRoughness: 0.1, envMapIntensity: 0.6,
      }),
    );
    marbleMesh.castShadow = true;
    bigMarble.add(marbleMesh);
    bigMarble.position.set(0, 4.1, 0);
    g.add(bigMarble);
    this.showcaseMarble = bigMarble;

    const ring1 = new THREE.Mesh(
      new THREE.TorusGeometry(2.75, 0.075, 10, 72),
      new THREE.MeshStandardMaterial({ color: t.accent2, emissive: t.accent2, emissiveIntensity: 2.2, roughness: 0.35 }),
    );
    ring1.position.copy(bigMarble.position);
    ring1.rotation.set(1.1, 0.2, 0.4);
    g.add(ring1);
    this.showcaseRing1 = ring1;
    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(3.25, 0.04, 8, 64),
      new THREE.MeshStandardMaterial({ color: t.accent, emissive: t.accent, emissiveIntensity: 1.8, roughness: 0.35, transparent: true, opacity: 0.8 }),
    );
    ring2.position.copy(bigMarble.position);
    ring2.rotation.set(1.55, 0.2, -0.5);
    g.add(ring2);
    this.showcaseRing2 = ring2;

    const random = mulberry32(1337);
    for (let i = 0; i < 9; i++) {
      const a = random() * Math.PI * 2;
      const radius = 9 + random() * 12;
      const x = Math.cos(a) * radius;
      const z = Math.sin(a) * radius;
      const y = -3 - random() * 7;
      const scale = 0.8 + random() * 1.6;
      const isle = new THREE.Group();
      const top = new THREE.Mesh(this.cylGeo(1.5 * scale, 1.15 * scale, 0.4, 8), this.makeMat(t.grass, { roughness: 0.9 }));
      const bottom = new THREE.Mesh(this.cylGeo(1.1 * scale, 0.1, 3.2 * scale, 7), this.makeMat(t.rock, { roughness: 1, flat: true }));
      bottom.position.y = -1.7 * scale;
      top.castShadow = true; bottom.castShadow = true;
      isle.add(top, bottom);
      isle.position.set(x, y, z);
      g.add(isle);
      if (random() > 0.35) {
        const crystal = new THREE.Mesh(
          new THREE.OctahedronGeometry(0.35 * scale, 0),
          new THREE.MeshStandardMaterial({ color: t.accent, emissive: t.accent, emissiveIntensity: 1.7, roughness: 0.25 }),
        );
        crystal.position.set(x + (random() - 0.5) * 1.2, y + 1.2 + random(), z + (random() - 0.5) * 1.2);
        crystal.rotation.set(random(), random(), random());
        crystal.scale.y = 1.8;
        g.add(crystal);
      }
    }

    for (let i = 0; i < 16; i++) {
      const a = random() * Math.PI * 2;
      const r = 7 + random() * 6;
      const h = 1.5 + random() * 7;
      const spark = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.12 + random() * 0.1, 0),
        new THREE.MeshBasicMaterial({ color: i % 3 ? t.glow : t.accent2 }),
      );
      spark.position.set(Math.cos(a) * r, h, Math.sin(a) * r);
      g.add(spark);
      if (!this.showcaseSparks) this.showcaseSparks = [];
      this.showcaseSparks.push(spark);
    }

    this.addCloudSea(0, 0, 42, -18, g);
    this.setLightingBounds({ minX: -6, maxX: 6, minZ: -6, maxZ: 6, minL: 0, maxL: 1 }, 8);
    this.autoOrbit = 0.055;
    this.cameraMode = 'showcase';
    this.camPitch = 0.25;
    this.camTarget.set(0, wide ? 4.0 : 1.2, 0);
    this.camDist = wide ? 15.5 : 14.2;
    this.fovKick = 0;
    this.camera.fov = 48;
    this.camera.updateProjectionMatrix();
    this.dir.intensity = 2.0;
  }

  /* ------------------------------------------------------------------ */
  /* World building                                                      */
  /* ------------------------------------------------------------------ */

  clearWorld() {
    this.clearShowcase();
    if (this.courseGroup) {
      this.scene.remove(this.courseGroup);
      this.courseGroup = null;
    }
    if (this.builderGroup) {
      this.scene.remove(this.builderGroup);
      this.builderGroup = null;
    }
    this.colliders = [];
    this.dynamics = [];
    this.checkpoints = [];
    this.boosts = [];
    this.bounces = [];
    this.startPiece = null;
    this.finishPiece = null;
    this.finishInfo = null;
    this.spawn = null;
    this.lastCheckpoint = null;
    this.currentMap = null;
    this.builder.hover = null;
    this.ball.active = false;
    this.ball.group.visible = false;
    this.ghostMesh.group.visible = false;
  }

  topOf(p) {
    return p.l * STEP;
  }

  addColliderBox(center, half, quat, piece, kind, extra = {}) {
    const col = {
      center, half, quat, piece, kind,
      radius: half.length(),
      velocity: new THREE.Vector3(),
      ...extra,
    };
    this.colliders.push(col);
    return col;
  }

  addEdgeOutlines(group, w, h, d, y, opacity = 0.45, color = null) {
    if (!this.unitEdges) {
      this.unitEdges = new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1));
    }
    const lines = new THREE.LineSegments(this.unitEdges, this.lineMat(color || this.theme.accent, opacity));
    lines.scale.set(w, h, d);
    lines.position.y = y;
    group.add(lines);
  }

  addSlab(x, z, topY, opts = {}) {
    const w = opts.w ?? CELL * 0.96;
    const d = opts.d ?? CELL * 0.96;
    const thick = opts.thick ?? 0.46;
    const rot = opts.rot || 0;
    const t = this.theme;
    const bodyMat = this.makeMat(opts.colorBody || t.body, { roughness: 0.55, metalness: 0.06 });
    const topMat = this.makeMat(opts.colorTop || t.top, { roughness: 0.66, metalness: 0.02 });
    const body = new THREE.Mesh(this.boxGeo(w, thick, d, 0.13, 2), bodyMat);
    body.position.set(x, topY - thick / 2, z);
    body.rotation.y = rot;
    body.castShadow = true;
    body.receiveShadow = true;
    this.courseGroup.add(body);

    const panel = new THREE.Mesh(this.boxGeo(w * 0.9, 0.09, d * 0.9, 0.06, 2), topMat);
    panel.position.set(x, topY - 0.045, z);
    panel.rotation.y = rot;
    panel.receiveShadow = true;
    this.courseGroup.add(panel);

    if (opts.outline !== false) {
      const group = new THREE.Group();
      group.position.set(x, 0, z);
      group.rotation.y = rot;
      this.courseGroup.add(group);
      this.addEdgeOutlines(group, w * 0.98, 0.13, d * 0.98, topY - 0.06, opts.outlineOpacity ?? 0.65, opts.outlineColor || null);
    }

    if (opts.collider !== false) {
      const quat = new THREE.Quaternion().setFromAxisAngle(UP, rot);
      const col = this.addColliderBox(
        new THREE.Vector3(x, topY - thick / 2, z),
        new THREE.Vector3(w / 2, thick / 2, d / 2),
        quat,
        opts.piece || null,
        opts.kind || 'platform',
      );
      col.topY = topY;
      return col;
    }
    return null;
  }

  createRamp(p) {
    const t = this.theme;
    const topY = this.topOf(p);
    const angle = Math.atan2(STEP, CELL);
    const len = Math.sqrt(CELL * CELL + STEP * STEP);
    const thick = 0.38;
    const qYaw = new THREE.Quaternion().setFromAxisAngle(UP, yawFor(p.r));
    const qTilt = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -angle);
    const quat = qYaw.clone().multiply(qTilt);
    const center = new THREE.Vector3(
      p.x * CELL,
      topY + STEP / 2 - (thick / 2) * Math.cos(angle),
      p.z * CELL,
    );
    const body = new THREE.Mesh(this.boxGeo(CELL * 0.94, thick, len, 0.08, 2), this.makeMat(t.bodySide, { roughness: 0.58 }));
    body.quaternion.copy(quat);
    body.position.copy(center);
    body.castShadow = true;
    body.receiveShadow = true;
    this.courseGroup.add(body);
    const normal = new THREE.Vector3(0, 1, 0).applyQuaternion(quat);
    const panel = new THREE.Mesh(this.boxGeo(CELL * 0.88, 0.07, len * 0.98, 0.05, 2), this.makeMat(t.top, { roughness: 0.62 }));
    panel.quaternion.copy(quat);
    panel.position.copy(center).addScaledVector(normal, thick / 2 - 0.02);
    panel.receiveShadow = true;
    this.courseGroup.add(panel);
    this.addColliderBox(center.clone(), new THREE.Vector3(CELL * 0.47, thick / 2, len / 2), quat, p, 'ramp').topY = topY;
  }

  createWall(p) {
    const t = this.theme;
    const topY = this.topOf(p);
    this.addSlab(p.x * CELL, p.z * CELL, topY, { piece: p, kind: 'platform' });
    const dir = dirFor(p.r);
    const x = p.x * CELL;
    const z = p.z * CELL;
    const wall = new THREE.Mesh(this.boxGeo(CELL * 0.9, 1.5, 0.34, 0.1), this.makeMat(t.bodySide, { roughness: 0.5, emissive: t.accent, emissiveIntensity: 0.08 }));
    wall.position.set(x, topY + 0.75, z);
    wall.rotation.y = yawFor(p.r);
    wall.castShadow = true;
    wall.receiveShadow = true;
    this.courseGroup.add(wall);
    const trim = new THREE.Mesh(this.boxGeo(CELL * 0.86, 0.09, 0.4, 0.04), this.makeMat(t.accent, { emissive: t.accent, emissiveIntensity: 0.7, roughness: 0.4 }));
    trim.position.set(x, topY + 1.5, z);
    trim.rotation.y = yawFor(p.r);
    this.courseGroup.add(trim);
    const q = new THREE.Quaternion().setFromAxisAngle(UP, yawFor(p.r));
    this.addColliderBox(new THREE.Vector3(x + dir.x * 0.55, topY + 0.75, z + dir.z * 0.55), new THREE.Vector3(CELL * 0.45, 0.75, 0.17), q, p, 'platform');
  }

  createSpinner(p) {
    const t = this.theme;
    const topY = this.topOf(p);
    this.addSlab(p.x * CELL, p.z * CELL, topY, { piece: p, kind: 'platform' });
    const x = p.x * CELL;
    const z = p.z * CELL;
    const post = new THREE.Mesh(
      this.cylGeo(0.13, 0.18, 1.15, 10),
      this.makeMat(t.accent2, { emissive: t.accent2, emissiveIntensity: 0.6, roughness: 0.3, metalness: 0.3 }),
    );
    post.position.set(x, topY + 0.5, z);
    post.castShadow = true;
    this.courseGroup.add(post);
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.95, 0.045, 6, 40),
      new THREE.MeshBasicMaterial({ color: t.accent2, transparent: true, opacity: 0.7 }),
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.set(x, topY + 0.025, z);
    this.courseGroup.add(ring);

    const barGroup = new THREE.Group();
    barGroup.position.set(x, topY + 0.62, z);
    const barLen = CELL * 1.52;
    const bar = new THREE.Mesh(
      this.boxGeo(barLen, 0.23, 0.3, 0.1),
      this.makeMat(t.accent2, { emissive: t.accent2, emissiveIntensity: 0.5, roughness: 0.35, metalness: 0.25 }),
    );
    bar.castShadow = true;
    barGroup.add(bar);
    for (const s of [-1, 1]) {
      const cap = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 14, 10),
        new THREE.MeshBasicMaterial({ color: t.glow }),
      );
      cap.position.x = (barLen / 2) * s;
      barGroup.add(cap);
    }
    this.courseGroup.add(barGroup);
    const quat = new THREE.Quaternion();
    const col = this.addColliderBox(
      new THREE.Vector3(x, topY + 0.62, z),
      new THREE.Vector3(barLen / 2, 0.16, 0.18),
      quat,
      p,
      'hazard',
    );
    col.topY = topY;
    const speed = (p.x + p.z) % 2 === 0 ? 1.72 : -1.72;
    this.dynamics.push({ type: 'spinner', mesh: barGroup, collider: col, speed, phase: ((p.x * 7 + p.z * 3) % 9) * 0.4 });
  }

  createMover(p) {
    const t = this.theme;
    const topY = this.topOf(p);
    const x = p.x * CELL;
    const z = p.z * CELL;
    const dir = dirFor(p.r);
    const amp = CELL * 0.66;
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    const thick = 0.42;
    const body = new THREE.Mesh(this.boxGeo(CELL * 0.92, thick, CELL * 0.92, 0.12), this.makeMat(t.bodySide, { roughness: 0.45, metalness: 0.15 }));
    body.position.y = topY - thick / 2;
    body.castShadow = true; body.receiveShadow = true;
    group.add(body);
    const panel = new THREE.Mesh(this.boxGeo(CELL * 0.86, 0.09, CELL * 0.86, 0.06), this.makeMat(t.top, { roughness: 0.55 }));
    panel.position.y = topY - 0.045;
    panel.receiveShadow = true;
    group.add(panel);
    const glow = new THREE.Mesh(
      new THREE.BoxGeometry(CELL * 0.9, 0.045, CELL * 0.9),
      new THREE.MeshBasicMaterial({ color: t.accent, transparent: true, opacity: 0.5 }),
    );
    glow.position.y = topY - 0.44;
    group.add(glow);
    this.courseGroup.add(group);

    const rail = new THREE.Mesh(
      this.boxGeo(0.06, 0.04, amp * 2 + CELL * 0.7, 0.02),
      new THREE.MeshBasicMaterial({ color: t.accent, transparent: true, opacity: 0.28 }),
    );
    rail.position.set(x, topY - 0.5, z);
    rail.rotation.y = yawFor(p.r);
    this.courseGroup.add(rail);

    const col = this.addColliderBox(
      new THREE.Vector3(x, topY - thick / 2, z),
      new THREE.Vector3(CELL * 0.46, thick / 2, CELL * 0.46),
      new THREE.Quaternion(),
      p,
      'platform',
      { prev: new THREE.Vector3(x, topY - thick / 2, z) },
    );
    col.topY = topY;
    this.dynamics.push({
      type: 'mover', group, collider: col, baseX: x, baseZ: z,
      dir, amp, speed: 1.15, phase: ((p.x * 5 + p.z * 7) % 11) * 0.37,
    });
  }

  getBoostTexture() {
    if (this.boostTexture) return this.boostTexture;
    const c = document.createElement('canvas');
    c.width = 256; c.height = 256;
    const ctx = c.getContext('2d');
    ctx.clearRect(0, 0, 256, 256);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 26;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    for (let i = 0; i < 3; i++) {
      const y = 76 + i * 52;
      ctx.beginPath();
      ctx.moveTo(70, y);
      ctx.lineTo(128, y - 34);
      ctx.lineTo(186, y);
      ctx.stroke();
    }
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    this.boostTexture = tex;
    return tex;
  }

  createBoost(p) {
    const t = this.theme;
    const topY = this.topOf(p);
    const x = p.x * CELL;
    const z = p.z * CELL;
    this.addSlab(x, z, topY, { piece: p, kind: 'platform' });
    const pad = new THREE.Mesh(
      new THREE.PlaneGeometry(CELL * 0.82, CELL * 0.82),
      new THREE.MeshBasicMaterial({
        map: this.getBoostTexture(), color: t.glow, transparent: true,
        opacity: 0.9, depthWrite: false, blending: THREE.AdditiveBlending,
      }),
    );
    pad.rotation.x = -Math.PI / 2;
    pad.rotation.z = -yawFor(p.r);
    pad.position.set(x, topY + 0.015, z);
    this.courseGroup.add(pad);
    const dir = dirFor(p.r);
    this.boosts.push({ x, z, topY, dir, pad, readyAt: 0, piece: p });
  }

  createBounce(p) {
    const t = this.theme;
    const topY = this.topOf(p);
    const x = p.x * CELL;
    const z = p.z * CELL;
    this.addSlab(x, z, topY, { piece: p, kind: 'platform' });
    const pad = new THREE.Group();
    pad.position.set(x, topY + 0.06, z);
    const disc = new THREE.Mesh(
      this.cylGeo(0.7, 0.75, 0.13, 18),
      this.makeMat(t.accent2, { emissive: t.accent2, emissiveIntensity: 0.6, roughness: 0.35 }),
    );
    pad.add(disc);
    const rings = [];
    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.5 - i * 0.04, 0.035, 6, 32),
        new THREE.MeshBasicMaterial({ color: t.glow }),
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.12 + i * 0.18;
      pad.add(ring);
      rings.push(ring);
    }
    this.courseGroup.add(pad);
    this.bounces.push({ x, z, topY, pad, rings, readyAt: 0, piece: p });
  }

  createCheckpoint(p) {
    const t = this.theme;
    const topY = this.topOf(p);
    const x = p.x * CELL;
    const z = p.z * CELL;
    this.addSlab(x, z, topY, { piece: p, kind: 'platform' });
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x9aa4b2, transparent: true, opacity: 0.7 });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.055, 8, 32), ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.set(x, topY + 0.03, z);
    this.courseGroup.add(ring);
    const diamondMat = new THREE.MeshStandardMaterial({ color: 0x9aa4b2, emissive: 0x334455, emissiveIntensity: 0.5, roughness: 0.25, metalness: 0.2 });
    const diamond = new THREE.Mesh(new THREE.OctahedronGeometry(0.34, 0), diamondMat);
    diamond.position.set(x, topY + 1.65, z);
    diamond.scale.y = 1.5;
    this.courseGroup.add(diamond);
    const idx = this.checkpoints.length;
    const cp = {
      index: idx, x, z, topY, piece: p, active: false, mesh: diamond, ring, ringMat, diamondMat,
      spawnYaw: yawFor(p.r) + Math.PI,
    };
    this.checkpoints.push(cp);
    p._checkpoint = cp;
  }

  createStart(p) {
    const t = this.theme;
    const topY = this.topOf(p);
    const x = p.x * CELL;
    const z = p.z * CELL;
    this.addSlab(x, z, topY, { piece: p, kind: 'platform', outlineOpacity: 0.85 });
    const pad = new THREE.Mesh(
      new THREE.CylinderGeometry(0.98, 1.02, 0.06, 32),
      new THREE.MeshStandardMaterial({ color: t.accent, emissive: t.accent, emissiveIntensity: 0.7, roughness: 0.4 }),
    );
    pad.position.set(x, topY + 0.03, z);
    this.courseGroup.add(pad);
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.02, 0.055, 8, 40),
      new THREE.MeshBasicMaterial({ color: t.glow }),
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.set(x, topY + 0.09, z);
    this.courseGroup.add(ring);
    const sign = new THREE.Sprite(new THREE.SpriteMaterial({
      map: makeTextTexture('START', '#fffdf5', t.glow), transparent: true, depthWrite: false,
    }));
    sign.scale.set(2.6, 0.82, 1);
    sign.position.set(x, topY + 2.55, z);
    this.courseGroup.add(sign);
    this.startPiece = p;
    this.spawn = { x, y: topY, z, yaw: yawFor(p.r) + Math.PI };
    this.camYaw = this.spawn.yaw;
  }

  createFinish(p) {
    const t = this.theme;
    const topY = this.topOf(p);
    const x = p.x * CELL;
    const z = p.z * CELL;
    this.addSlab(x, z, topY, { piece: p, kind: 'platform', outlineOpacity: 0.9 });
    const group = new THREE.Group();
    group.position.set(x, topY, z);
    group.rotation.y = yawFor(p.r);
    const pillarMat = this.makeMat(t.bodySide, { roughness: 0.45, metalness: 0.2 });
    for (const s of [-1, 1]) {
      const pillar = new THREE.Mesh(this.boxGeo(0.24, 2.65, 0.3, 0.07), pillarMat);
      pillar.position.set(s * 1.24, 1.3, 0);
      pillar.castShadow = true;
      group.add(pillar);
      const cap = new THREE.Mesh(
        this.boxGeo(0.34, 0.15, 0.4, 0.04),
        this.makeMat(t.accent, { emissive: t.accent, emissiveIntensity: 0.7, roughness: 0.35 }),
      );
      cap.position.set(s * 1.24, 2.7, 0);
      group.add(cap);
    }
    const topBeam = new THREE.Mesh(
      this.boxGeo(2.7, 0.14, 0.3, 0.05),
      this.makeMat(t.accent, { emissive: t.accent, emissiveIntensity: 0.45, roughness: 0.35 }),
    );
    topBeam.position.set(0, 2.78, 0);
    group.add(topBeam);
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.98, 0.075, 10, 56),
      new THREE.MeshStandardMaterial({ color: t.accent, emissive: t.accent, emissiveIntensity: 1.8, roughness: 0.25 }),
    );
    ring.position.set(0, 1.55, 0);
    group.add(ring);
    const disc = new THREE.Mesh(
      new THREE.CircleGeometry(0.98, 40),
      new THREE.MeshBasicMaterial({ color: t.glow, transparent: true, opacity: 0.1, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false }),
    );
    disc.position.set(0, 1.55, 0);
    group.add(disc);
    const sign = new THREE.Sprite(new THREE.SpriteMaterial({
      map: makeTextTexture('FINISH', '#fffdf5', t.glow), transparent: true, depthWrite: false,
    }));
    sign.scale.set(2.9, 0.9, 1);
    sign.position.set(0, 3.55, 0);
    group.add(sign);
    this.courseGroup.add(group);
    const dir = dirFor(p.r);
    this.finishPiece = p;
    this.finishInfo = {
      x, z, topY, ring, disc, group, piece: p,
      n: new THREE.Vector3(dir.x, 0, dir.z),
      time: 0,
    };
  }

  buildPiece(p) {
    switch (p.t) {
      case 'ramp': this.createRamp(p); break;
      case 'wall': this.createWall(p); break;
      case 'spinner': this.createSpinner(p); break;
      case 'mover': this.createMover(p); break;
      case 'boost': this.createBoost(p); break;
      case 'bounce': this.createBounce(p); break;
      case 'checkpoint': this.createCheckpoint(p); break;
      case 'start': this.createStart(p); break;
      case 'finish': this.createFinish(p); break;
      case 'beam':
        this.addSlab(p.x * CELL, p.z * CELL, this.topOf(p), {
          w: 1.42, d: CELL * 0.98, thick: 0.4, rot: yawFor(p.r), piece: p,
          colorBody: this.theme.bodySide, outlineOpacity: 0.7,
        });
        break;
      default:
        this.addSlab(p.x * CELL, p.z * CELL, this.topOf(p), { piece: p, kind: 'platform' });
    }
  }

  addCloudSea(cx, cz, span, y, group = this.courseGroup) {
    if (!group) return;
    const random = mulberry32(Math.floor(cx * 13 + cz * 7 + span * 3) | 0);
    const tex = this.cloudTexture.clone();
    tex.needsUpdate = true;
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(4, 4);
    const mat = new THREE.MeshBasicMaterial({
      map: tex, color: this.theme.cloud, transparent: true, opacity: 0.26,
      depthWrite: false, side: THREE.DoubleSide, fog: true,
    });
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(span * 5.4, span * 5.4), mat);
    plane.rotation.x = -Math.PI / 2;
    plane.position.set(cx, y, cz);
    plane.renderOrder = -2;
    group.add(plane);

    const count = clamp(Math.round(span / 5), 10, 22);
    for (let i = 0; i < count; i++) {
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.cloudTexture, color: this.theme.cloud, transparent: true,
        opacity: 0.28 + random() * 0.18, depthWrite: false, fog: true,
      }));
      const a = random() * Math.PI * 2;
      const r = span * 0.55 + random() * span * 0.95;
      const s = 16 + random() * 26;
      sprite.position.set(cx + Math.cos(a) * r, y + (random() - 0.25) * 7, cz + Math.sin(a) * r);
      sprite.scale.set(s, s * 0.42, 1);
      group.add(sprite);
    }
  }

  decorateCourse(map, bounds) {
    const t = this.theme;
    const random = mulberry32(hashCode(map.id || map.name || 'course'));
    const cx = ((bounds.minX + bounds.maxX) / 2) * CELL;
    const cz = ((bounds.minZ + bounds.maxZ) / 2) * CELL;
    const span = Math.max((bounds.maxX - bounds.minX + 1), (bounds.maxZ - bounds.minZ + 1)) * CELL;
    this.addCloudSea(cx, cz, Math.max(span, 28), bounds.minL * STEP - 24);
    const count = clamp(Math.round(span / 11), 5, 14);
    for (let i = 0; i < count; i++) {
      const a = random() * Math.PI * 2;
      const radius = span * 0.65 + 10 + random() * 22;
      const x = cx + Math.cos(a) * radius;
      const z = cz + Math.sin(a) * radius;
      const y = -7 - random() * 10 + (random() > 0.55 ? 10 + random() * 12 : 0);
      const scale = 0.7 + random() * 1.8;
      const isle = new THREE.Group();
      const top = new THREE.Mesh(this.cylGeo(1.7 * scale, 1.45 * scale, 0.38, 8), this.makeMat(t.grass, { roughness: 0.9 }));
      const bottom = new THREE.Mesh(this.cylGeo(1.4 * scale, 0.08, 2.8 * scale, 7), this.makeMat(t.rock, { roughness: 1, flat: true }));
      bottom.position.y = -1.5 * scale;
      top.castShadow = true; top.receiveShadow = true;
      isle.add(top, bottom);
      isle.position.set(x, y, z);
      this.courseGroup.add(isle);
      if (random() > 0.45) {
        const crystal = new THREE.Mesh(
          new THREE.OctahedronGeometry(0.3 * scale, 0),
          new THREE.MeshStandardMaterial({
            color: random() > 0.5 ? t.accent : t.accent2,
            emissive: random() > 0.5 ? t.accent : t.accent2,
            emissiveIntensity: 1.2 + random(),
            roughness: 0.25,
          }),
        );
        crystal.position.set(x + (random() - 0.5) * 1.4, y + 0.9 + random(), z + (random() - 0.5) * 1.4);
        crystal.scale.y = 1.7 + random();
        crystal.rotation.y = random() * 3;
        this.courseGroup.add(crystal);
      }
      if (random() > 0.5) {
        for (let k = 0; k < 3; k++) {
          const shrub = new THREE.Mesh(
            new THREE.DodecahedronGeometry(0.25 + random() * 0.3, 0),
            this.makeMat(t.grass, { roughness: 1, flat: true }),
          );
          shrub.position.set(x + (random() - 0.5) * 2.2, y + 0.6, z + (random() - 0.5) * 2.2);
          isle.add(shrub);
          shrub.position.set((random() - 0.5) * 2.2, 0.6, (random() - 0.5) * 2.2);
        }
      }
    }

    for (let i = 0; i < 26; i++) {
      const a = random() * Math.PI * 2;
      const radius = span * 0.3 + random() * span * 0.9;
      const spark = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.09 + random() * 0.08, 0),
        new THREE.MeshBasicMaterial({ color: random() > 0.5 ? t.glow : t.accent2 }),
      );
      spark.position.set(cx + Math.cos(a) * radius, 1 + random() * 10, cz + Math.sin(a) * radius);
      this.courseGroup.add(spark);
    }
  }

  buildCourse(map, { editor = false } = {}) {
    this.clearWorld();
    this.currentMap = map;
    this.applyTheme(map.theme);
    this.courseGroup = new THREE.Group();
    this.scene.add(this.courseGroup);
    this.ball.group.visible = false;
    this.ball.active = false;
    this.startPiece = null;
    this.finishPiece = null;
    this.finishInfo = null;
    this.spawn = null;
    this.checkpoints = [];
    for (const p of map.pieces) {
      p._checkpoint = null;
      this.buildPiece(p);
    }
    const bounds = courseBounds(map.pieces);
    if (editor) {
      this.decorateCourse(map, bounds);
    } else {
      this.decorateCourse(map, bounds);
      if (this.startPiece) {
        this.ball.group.visible = false;
        this.camYaw = this.spawn.yaw;
      }
    }
    this.setLightingBounds(bounds, 12);
    this.builder.active = editor;
    this.cloudGroup.position.set(((bounds.minX + bounds.maxX) / 2) * CELL, 0, ((bounds.minZ + bounds.maxZ) / 2) * CELL);
    if (editor) {
      this.setupBuilderGrid();
      this.focusBuilderCamera();
    }
    return bounds;
  }

  /* ------------------------------------------------------------------ */
  /* Builder helpers                                                     */
  /* ------------------------------------------------------------------ */

  setupBuilderGrid() {
    if (this.builderGroup) {
      this.scene.remove(this.builderGroup);
      this.builderGroup = null;
    }
    const g = new THREE.Group();
    this.builderGroup = g;
    this.scene.add(g);
    const size = CELL * (GRID_MAX - GRID_MIN + 1);
    const divisions = GRID_MAX - GRID_MIN + 1;
    const grid = new THREE.GridHelper(size, divisions, 0xffffff, 0xffffff);
    grid.material.transparent = true;
    grid.material.opacity = 0.24;
    grid.material.depthWrite = false;
    grid.position.set(((GRID_MIN + GRID_MAX) / 2) * CELL, this.builder.level * STEP + 0.03, ((GRID_MIN + GRID_MAX) / 2) * CELL);
    g.add(grid);
    this.builderGrid = grid;

    const borderGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(GRID_MIN * CELL - CELL / 2, 0, GRID_MIN * CELL - CELL / 2),
      new THREE.Vector3(GRID_MAX * CELL + CELL / 2, 0, GRID_MIN * CELL - CELL / 2),
      new THREE.Vector3(GRID_MAX * CELL + CELL / 2, 0, GRID_MAX * CELL + CELL / 2),
      new THREE.Vector3(GRID_MIN * CELL - CELL / 2, 0, GRID_MAX * CELL + CELL / 2),
      new THREE.Vector3(GRID_MIN * CELL - CELL / 2, 0, GRID_MIN * CELL - CELL / 2),
    ]);
    const border = new THREE.Line(borderGeo, this.lineMat(this.theme.accent, 0.8));
    border.position.y = grid.position.y;
    g.add(border);
    this.builderBorder = border;

    const cursorGeo = new THREE.PlaneGeometry(CELL * 0.96, CELL * 0.96);
    const cursor = new THREE.Mesh(cursorGeo, new THREE.MeshBasicMaterial({
      color: this.theme.accent, transparent: true, opacity: 0.35, side: THREE.DoubleSide, depthWrite: false,
    }));
    cursor.rotation.x = -Math.PI / 2;
    cursor.position.y = grid.position.y + 0.01;
    cursor.visible = false;
    g.add(cursor);
    this.builderCursor = cursor;

    const ghost = new THREE.Group();
    const ghostMat = new THREE.MeshBasicMaterial({ color: this.theme.accent, transparent: true, opacity: 0.38, depthWrite: false });
    const ghostMesh = new THREE.Mesh(this.boxGeo(CELL * 0.96, 0.4, CELL * 0.96, 0.12), ghostMat);
    ghost.add(ghostMesh);
    const arrow = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.52, 4), new THREE.MeshBasicMaterial({ color: this.theme.accent2, transparent: true, opacity: 0.85, depthWrite: false }));
    arrow.rotation.x = Math.PI / 2;
    arrow.position.set(0, 0.3, 0.85);
    ghost.add(arrow);
    ghost.visible = false;
    g.add(ghost);
    this.builderGhost = { group: ghost, mesh: ghostMesh, arrow };
  }

  focusBuilderCamera() {
    if (!this.builder.map) return;
    const b = courseBounds(this.builder.map.pieces);
    const cx = ((b.minX + b.maxX) / 2) * CELL;
    const cz = ((b.minZ + b.maxZ) / 2) * CELL;
    const cy = ((b.minL + b.maxL) / 2) * STEP;
    const span = Math.max((b.maxX - b.minX + 3), (b.maxZ - b.minZ + 3)) * CELL;
    this.cameraMode = 'builder';
    this.camTarget.set(cx, cy + 0.8, cz);
    this.camLook.copy(this.camTarget);
    this.camPitch = 0.78;
    this.camYaw = Math.PI * 0.25;
    this.camDist = clamp(span * 0.72 + 8, 14, 38);
    this.camPos.copy(this.camTarget).add(this.cameraOffset(this.camYaw, this.camPitch, this.camDist));
  }

  cameraOffset(yaw, pitch, dist) {
    return new THREE.Vector3(
      Math.sin(yaw) * Math.cos(pitch) * dist,
      Math.sin(pitch) * dist,
      Math.cos(yaw) * Math.cos(pitch) * dist,
    );
  }

  builderSnapshot() {
    this.builder.history.push(this.builder.map.pieces.map((p) => ({ ...p, _checkpoint: undefined })));
    if (this.builder.history.length > 40) this.builder.history.shift();
  }

  builderUndo() {
    const prev = this.builder.history.pop();
    if (!prev) return false;
    this.builder.map.pieces = prev;
    this.rebuildBuilder();
    return true;
  }

  rebuildBuilder() {
    if (!this.builder.map) return;
    const map = this.builder.map;
    const cam = { yaw: this.camYaw, pitch: this.camPitch, dist: this.camDist, target: this.camTarget.clone() };
    this.buildCourse(map, { editor: true });
    this.builder.map = map;
    this.camYaw = cam.yaw;
    this.camPitch = cam.pitch;
    this.camDist = cam.dist;
    this.camTarget.copy(cam.target);
    this.applyBuilderCursor();
    if (this.events.onBuilderChange) this.events.onBuilderChange(map);
  }

  setBuilderTool(tool) {
    this.builder.tool = tool;
    this.applyBuilderCursor();
  }

  setBuilderLevel(level) {
    this.builder.level = clamp(level, 0, LEVELS - 1);
    if (this.builderGrid) {
      const y = this.builder.level * STEP + 0.03;
      this.builderGrid.position.y = y;
      this.builderBorder.position.y = y;
      this.builderCursor.position.y = y + 0.01;
    }
    if (this.builderGhost) this.builderGhost.group.visible = false;
  }

  setBuilderRot(rot) {
    this.builder.rot = ((rot % 4) + 4) % 4;
    this.applyBuilderCursor();
  }

  applyBuilderCursor() {
    if (!this.builderGhost) return;
    const tool = this.builder.tool;
    const ghost = this.builderGhost;
    const ramp = tool === 'ramp';
    const beam = tool === 'beam';
    if (ramp) {
      ghost.mesh.scale.set(1, 0.4, 1.32);
      ghost.mesh.rotation.x = -Math.atan2(STEP, CELL);
    } else if (beam) {
      ghost.mesh.scale.set(0.58, 0.5, 1);
      ghost.mesh.rotation.x = 0;
    } else {
      ghost.mesh.scale.set(1, 0.55, 1);
      ghost.mesh.rotation.x = 0;
    }
    ghost.mesh.rotation.y = 0;
    ghost.arrow.rotation.y = 0;
    ghost.arrow.visible = !['plat', 'beam', 'checkpoint', 'start', 'finish', 'erase', 'bounce'].includes(tool);
    ghost.group.rotation.y = yawFor(this.builder.rot);
    ghost.mesh.material.color.set(tool === 'erase' ? '#ff4d5e' : this.theme.accent);
    ghost.arrow.material.color.set(tool === 'erase' ? '#ff4d5e' : this.theme.accent2);
  }

  clientToCell(clientX, clientY) {
    const rect = this.canvas.getBoundingClientRect();
    const ndc = new THREE.Vector2(
      ((clientX - rect.left) / rect.width) * 2 - 1,
      -((clientY - rect.top) / rect.height) * 2 + 1,
    );
    const ray = new THREE.Raycaster();
    ray.setFromCamera(ndc, this.camera);
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -(this.builder.level * STEP + 0.03));
    const hit = new THREE.Vector3();
    if (!ray.ray.intersectPlane(plane, hit)) return null;
    const x = Math.round(hit.x / CELL);
    const z = Math.round(hit.z / CELL);
    if (x < GRID_MIN || x > GRID_MAX || z < GRID_MIN || z > GRID_MAX) return null;
    return { x, z, point: hit };
  }

  updateBuilderHover(clientX, clientY) {
    if (this.mode !== 'builder') return null;
    const cell = this.clientToCell(clientX, clientY);
    if (!cell) {
      if (this.builderCursor) this.builderCursor.visible = false;
      if (this.builderGhost) this.builderGhost.group.visible = false;
      this.builder.hover = null;
      return null;
    }
    const x = cell.x * CELL;
    const z = cell.z * CELL;
    const topY = this.builder.level * STEP;
    this.builder.hover = cell;
    if (this.builderCursor) {
      this.builderCursor.visible = true;
      this.builderCursor.position.set(x, topY + 0.04, z);
    }
    if (this.builderGhost) {
      const g = this.builderGhost.group;
      g.visible = true;
      g.position.set(x, topY + 0.2, z);
      const occupied = this.builder.map?.pieces.some((p) => p.x === cell.x && p.z === cell.z && p.l === this.builder.level);
      g.children.forEach((c) => { c.material.opacity = this.builder.tool === 'erase' ? 0.55 : occupied ? 0.3 : 0.42; });
    }
    return cell;
  }

  applyBuilderAction(cell) {
    if (!this.builder.map || !cell) return { ok: false };
    const pieces = this.builder.map.pieces;
    const idx = pieces.findIndex((p) => p.x === cell.x && p.z === cell.z && p.l === this.builder.level);
    const tool = this.builder.tool;
    this.builderSnapshot();
    if (tool === 'erase' || (idx >= 0 && tool === 'erase')) {
      if (idx >= 0) pieces.splice(idx, 1);
      this.builder.map.pieces = pieces;
      this.rebuildBuilder();
      return { ok: true, action: 'erase' };
    }
    if (pieces.length >= 360 && idx < 0) {
      this.builder.history.pop();
      return { ok: false, error: 'Course is full — erase a few tiles first.' };
    }
    if (tool === 'start' || tool === 'finish') {
      for (let i = pieces.length - 1; i >= 0; i--) {
        if (pieces[i].t === tool) pieces.splice(i, 1);
      }
    }
    let finalIdx = pieces.findIndex((p) => p.x === cell.x && p.z === cell.z && p.l === this.builder.level);
    const next = { t: tool, x: cell.x, z: cell.z, l: this.builder.level, r: this.builder.rot };
    if (finalIdx >= 0) pieces[finalIdx] = next;
    else pieces.push(next);
    this.builder.map.pieces = pieces;
    this.rebuildBuilder();
    return { ok: true, action: finalIdx >= 0 ? 'replace' : 'add' };
  }

  /* ------------------------------------------------------------------ */
  /* Dynamic obstacles                                                   */
  /* ------------------------------------------------------------------ */

  updateDynamics(time, dt = 1 / 60) {
    const safeDt = Math.max(dt, 1 / 240);
    for (const dyn of this.dynamics) {
      if (dyn.type === 'spinner') {
        const angle = time * dyn.speed + dyn.phase;
        dyn.mesh.rotation.y = angle;
        dyn.collider.quat.setFromAxisAngle(UP, angle);
        dyn.collider.angularVelocity = dyn.speed;
      } else if (dyn.type === 'mover') {
        const offset = Math.sin(time * dyn.speed + dyn.phase) * dyn.amp;
        const nx = dyn.baseX + dyn.dir.x * offset;
        const nz = dyn.baseZ + dyn.dir.z * offset;
        dyn.group.position.x = nx;
        dyn.group.position.z = nz;
        const target = dyn.collider.center;
        const prevX = target.x;
        const prevZ = target.z;
        target.x = nx;
        target.z = nz;
        dyn.collider.prev.set(prevX, target.y, prevZ);
        dyn.collider.velocity.set((nx - prevX) / safeDt, 0, (nz - prevZ) / safeDt);
      }
    }
  }

  tickBoosts() {
    if (this.raceState !== 'running') return;
    const t = this.animTime;
    for (const b of this.boosts) {
      const dx = this.ball.pos.x - b.x;
      const dz = this.ball.pos.z - b.z;
      if (dx * dx + dz * dz < 1.25 * 1.25 && this.ball.pos.y > b.topY - 0.1 && this.ball.pos.y < b.topY + 1.5 && t > b.readyAt) {
        b.readyAt = t + 0.8;
        this.ball.vel.addScaledVector(b.dir, 6.6);
        const speed = Math.hypot(this.ball.vel.x, this.ball.vel.z);
        if (speed > 14) {
          this.ball.vel.x *= 14 / speed;
          this.ball.vel.z *= 14 / speed;
        }
        this.fovKick = Math.max(this.fovKick, 7);
        this.camShake = Math.max(this.camShake, 0.09);
        this.emit(this.ball.pos, this.theme.glow, 8, { speed: 4, life: 0.5, size: 0.5, gravity: -1 });
        audio.boost();
      }
    }
  }

  tickCheckpoints() {
    if (this.raceState !== 'running') return;
    for (const cp of this.checkpoints) {
      if (cp.active) continue;
      const dx = this.ball.pos.x - cp.x;
      const dz = this.ball.pos.z - cp.z;
      if (dx * dx + dz * dz < 1.3 * 1.3 && this.ball.pos.y > cp.topY - 0.2 && this.ball.pos.y < cp.topY + 2.2) {
        this.activateCheckpoint(cp);
      }
    }
  }

  activateCheckpoint(cp) {
    cp.active = true;
    cp.ringMat.color.set(this.theme.glow);
    cp.ringMat.opacity = 1;
    cp.diamondMat.color.set(this.theme.accent);
    cp.diamondMat.emissive.set(this.theme.accent);
    cp.diamondMat.emissiveIntensity = 2.2;
    this.lastCheckpoint = cp;
    this.splits.push(Math.round(this.raceTime));
    this.emit(new THREE.Vector3(cp.x, cp.topY + 1.2, cp.z), this.theme.glow, 18, { speed: 4.5, life: 0.8, size: 0.55, gravity: 1 });
    this.camShake = Math.max(this.camShake, 0.05);
    audio.checkpoint();
    const bestSplit = this.bestSplits?.[this.splits.length - 1] ?? null;
    if (this.events.onCheckpoint) {
      this.events.onCheckpoint({
        index: cp.index,
        count: this.checkpoints.length,
        split: Math.round(this.raceTime),
        bestSplit,
      });
    }
  }

  checkFinish() {
    if (this.raceState !== 'running' || !this.finishInfo) return;
    const f = this.finishInfo;
    const dx = this.ball.pos.x - f.x;
    const dz = this.ball.pos.z - f.z;
    if (dx * dx + dz * dz < 1.45 * 1.45 && this.ball.pos.y > f.topY - 0.2 && this.ball.pos.y < f.topY + 3.0) {
      this.finishRace();
    }
  }

  respawn(force = false) {
    if (this.raceState !== 'running' && !force) return;
    if (this.respawnCooldown > 0) return;
    this.respawnCooldown = 0.8;
    const cp = this.lastCheckpoint;
    const source = cp ? { x: cp.x, z: cp.z, y: cp.topY, yaw: cp.spawnYaw } : this.spawn;
    if (!source) return;
    this.ball.pos.set(source.x, source.y + 1.1, source.z);
    this.ball.vel.set(0, 0, 0);
    this.ball.grounded = false;
    this.ball.groundCollider = null;
    this.ball.coyote = 0;
    this.camYaw = source.yaw ?? this.camYaw;
    this.camTarget.set(source.x, source.y + 0.9, source.z);
    this.camLook.copy(this.camTarget);
    this.camShake = Math.max(this.camShake, 0.14);
    this.emit(new THREE.Vector3(source.x, source.y + 0.7, source.z), this.theme.accent2, 16, { speed: 3.5, life: 0.6, size: 0.45, gravity: 0 });
    audio.fail();
    if (this.events.onRespawn) this.events.onRespawn({ checkpoint: !!cp });
  }

  emit(position, color, count = 8, opts = {}) {
    const speed = opts.speed ?? 3;
    const life = opts.life ?? 0.6;
    const size = opts.size ?? 0.4;
    const gravity = opts.gravity ?? 0;
    for (let i = 0; i < count; i++) {
      const fx = this.fx[this.fxIndex];
      this.fxIndex = (this.fxIndex + 1) % this.fx.length;
      const dir = new THREE.Vector3(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
      if (dir.lengthSq() < 0.0001) dir.set(0, 1, 0);
      dir.normalize();
      fx.sprite.position.copy(position);
      fx.sprite.position.x += (Math.random() - 0.5) * 0.25;
      fx.sprite.position.y += (Math.random() - 0.5) * 0.2;
      fx.sprite.position.z += (Math.random() - 0.5) * 0.25;
      fx.vel.copy(dir).multiplyScalar(speed * (0.35 + Math.random() * 0.9));
      fx.gravity = gravity;
      fx.life = life * (0.7 + Math.random() * 0.6);
      fx.maxLife = fx.life;
      fx.size = size * (0.6 + Math.random() * 0.8);
      fx.sprite.material.color.set(color);
      fx.sprite.material.opacity = 0.9;
      fx.sprite.scale.setScalar(fx.size);
      fx.sprite.visible = true;
    }
  }

  updateFX(dt) {
    for (const fx of this.fx) {
      if (fx.life <= 0) continue;
      fx.life -= dt;
      if (fx.life <= 0) {
        fx.sprite.visible = false;
        continue;
      }
      fx.vel.y += fx.gravity * dt;
      fx.sprite.position.addScaledVector(fx.vel, dt);
      const p = fx.life / fx.maxLife;
      fx.sprite.material.opacity = p * 0.85;
      fx.sprite.scale.setScalar(fx.size * (0.5 + p * 0.8));
    }
  }

  updateTrail(dt) {
    if (this.raceState !== 'running' || !this.ball.grounded) return;
    const speed = this.ball.vel.length();
    if (speed < 2.4) return;
    this.trailAcc = (this.trailAcc || 0) + dt;
    if (this.trailAcc > 0.035) {
      this.trailAcc = 0;
      this.emit(
        new THREE.Vector3(this.ball.pos.x, this.ball.pos.y - 0.33, this.ball.pos.z),
        this.theme.glow, 1, { speed: 0.25, life: 0.38, size: 0.34, gravity: 0.3 },
      );
    }
  }

  /* ------------------------------------------------------------------ */
  /* Race lifecycle                                                      */
  /* ------------------------------------------------------------------ */

  previewMap(map) {
    this.mode = 'preview';
    this.raceState = 'idle';
    this.paused = false;
    this.builder.active = false;
    this.buildCourse(map, { editor: false });
    this.ball.group.visible = false;
    const b = courseBounds(map.pieces);
    const cx = ((b.minX + b.maxX) / 2) * CELL;
    const cz = ((b.minZ + b.maxZ) / 2) * CELL;
    const cy = ((b.minL + b.maxL) / 2) * STEP;
    const span = Math.max((b.maxX - b.minX + 1), (b.maxZ - b.minZ + 1)) * CELL;
    this.cameraMode = 'preview';
    this.camTarget.set(cx, cy + 1.2, cz);
    this.camLook.copy(this.camTarget);
    this.camYaw = Math.PI * 0.22;
    this.camPitch = 0.3;
    this.camDist = clamp(span * 0.9 + 12, 18, 46);
    this.autoOrbit = 0.085;
    this.camera.fov = 50;
    this.camera.updateProjectionMatrix();
  }

  startRace(map, opts = {}) {
    this.mode = 'race';
    this.raceState = 'countdown';
    this.paused = false;
    this.builder.active = false;
    this.testMode = !!opts.test;
    this.lastRaceOpts = { map, opts };
    this.raceTime = 0;
    this.animTime = 0;
    this.totalTime = 0;
    this.countdownT = 3.2;
    this.countdownEnd = performance.now() + 3200;
    this.lastCount = 3;
    this.resuming = false;
    this.recording = [];
    this.recordAcc = 0;
    this.recordingEnabled = opts.record !== false;
    this.splits = [];
    this.bestSplits = opts.bestSplits || null;
    this.lastCheckpoint = null;
    this.respawnCooldown = 0;
    this.fovKick = 0;
    this.camShake = 0;
    this.finishStepped = false;
    this.activeRaceMap = map;
    this.activeRaceOpts = opts;
    this.buildCourse(map, { editor: false });
    this.ball.active = true;
    this.ball.group.visible = true;
    this.resetBallPosition();
    this.camYaw = this.spawn?.yaw ?? 0;
    this.cameraMode = 'race';
    this.camera.fov = 58;
    this.camera.updateProjectionMatrix();

    this.ghostMesh.path = opts.ghostPath && opts.ghostPath.length > 1 && opts.ghost !== false ? opts.ghostPath : null;
    this.ghostMesh.cursor = 0;
    this.ghostMesh.group.visible = false;
    this.ghostMesh.group.position.set(this.spawn?.x || 0, (this.spawn?.y || 0) + 0.5, this.spawn?.z || 0);

    for (const cp of this.checkpoints) {
      cp.active = false;
      cp.ringMat.color.set(0x9aa4b2);
      cp.ringMat.opacity = 0.7;
      cp.diamondMat.color.set(0x9aa4b2);
      cp.diamondMat.emissive.set(0x334455);
      cp.diamondMat.emissiveIntensity = 0.5;
    }
    for (const b of this.boosts) b.readyAt = 0;
    for (const b of this.bounces) b.readyAt = 0;

    if (this.events.onCountdown) this.events.onCountdown(3);
    if (this.events.onRaceStart) this.events.onRaceStart(map);
  }

  restartRace() {
    if (!this.activeRaceMap) return;
    this.startRace(this.activeRaceMap, this.activeRaceOpts || {});
  }

  pauseRace() {
    if (this.raceState === 'running') {
      this.raceState = 'paused';
      if (this.events.onPause) this.events.onPause();
    }
  }

  resumeRace() {
    if (this.raceState !== 'paused') return;
    this.raceState = 'countdown';
    this.resuming = true;
    this.countdownT = 2.2;
    this.countdownEnd = performance.now() + 2200;
    this.lastCount = 2;
    if (this.events.onCountdown) this.events.onCountdown(2);
    if (this.events.onResume) this.events.onResume();
  }

  quitRace() {
    this.raceState = 'idle';
    this.mode = 'preview';
    this.ball.group.visible = false;
    this.ghostMesh.group.visible = false;
    if (this.events.onQuit) this.events.onQuit();
  }

  finishRace() {
    if (this.raceState !== 'running') return;
    this.raceState = 'finished';
    this.raceTime = this.raceTime;
    this.recordSample(0, true);
    this.ball.vel.set(0, 0, 0);
    const f = this.finishInfo;
    if (f) {
      this.emit(new THREE.Vector3(f.x, f.topY + 1.4, f.z), this.theme.accent, 36, { speed: 7, life: 1.2, size: 0.7, gravity: 2.5 });
      this.emit(new THREE.Vector3(f.x, f.topY + 1.0, f.z), '#ffffff', 22, { speed: 5, life: 0.9, size: 0.5, gravity: 1 });
      this.camShake = 0.16;
    }
    audio.finish();
    this.cameraMode = 'result';
    this.resultYaw = this.camYaw;
    this.camera.fov = 52;
    this.camera.updateProjectionMatrix();
    const result = {
      time: Math.round(this.raceTime),
      mapId: this.activeRaceMap?.id,
      mapName: this.activeRaceMap?.name,
      test: this.testMode,
      recording: this.recording.slice(),
      splits: this.splits.slice(),
      par: this.activeRaceMap?.par || 30,
    };
    if (this.events.onFinish) this.events.onFinish(result);
  }

  recordSample(dt = 0.016, force = false) {
    if (!this.recordingEnabled) return;
    this.recordAcc += dt;
    if (!force && this.recordAcc < 0.08) return;
    this.recordAcc = 0;
    if (this.recording.length > 6000) return;
    const t = Math.round(this.raceTime / 10) / 100;
    this.recording.push([
      t,
      Math.round(this.ball.pos.x * 100) / 100,
      Math.round(this.ball.pos.y * 100) / 100,
      Math.round(this.ball.pos.z * 100) / 100,
    ]);
  }

  updateGhost() {
    const path = this.ghostMesh.path;
    if (!path || !path.length) {
      this.ghostMesh.group.visible = false;
      return;
    }
    const t = this.raceTime / 1000;
    if (t > path[path.length - 1][0] + 0.6) {
      this.ghostMesh.group.visible = false;
      return;
    }
    let i = this.ghostMesh.cursor;
    while (i < path.length - 2 && path[i + 1][0] < t) i++;
    this.ghostMesh.cursor = i;
    const a = path[Math.max(0, Math.min(i, path.length - 1))];
    const b = path[Math.min(i + 1, path.length - 1)];
    const span = Math.max(0.0001, b[0] - a[0]);
    const f = clamp((t - a[0]) / span, 0, 1);
    const x = a[1] + (b[1] - a[1]) * f;
    const y = a[2] + (b[2] - a[2]) * f;
    const z = a[3] + (b[3] - a[3]) * f;
    this.ghostMesh.group.visible = true;
    this.ghostMesh.group.position.set(x, y, z);
    this.ghostMesh.wire.rotation.y += 0.02;
  }

  updateRace(dt) {
    if (this.raceState === 'countdown') {
      // Wall-clock countdown so slow devices still launch on time.
      this.countdownT = Math.max(0, (this.countdownEnd - performance.now()) / 1000);
      const n = clamp(Math.ceil(this.countdownT), 0, 3);
      if (n !== this.lastCount && n > 0) {
        this.lastCount = n;
        audio.countdown(n);
        if (this.events.onCountdown) this.events.onCountdown(n);
      }
      this.updateIdleBall(dt);
      if (this.countdownT <= 0) {
        this.raceState = 'running';
        if (!this.resuming) {
          this.raceTime = 0;
          this.recording = [];
          this.recordAcc = 0;
          this.splits = [];
        }
        this.resuming = false;
        this.ball.jumpBuffer = 0;
        audio.countdown(0);
        if (this.events.onGo) this.events.onGo();
      }
      return;
    }
    if (this.raceState === 'finished') {
      this.updateIdleBall(dt);
      return;
    }
    if (this.raceState !== 'running') return;

    this.raceTime += dt * 1000;
    this.stepBall(dt);
    this.ball.group.position.copy(this.ball.pos);
    this.ball.group.quaternion.copy(this.ball.quat);
    this.ball.speed = this.ball.vel.length();

    this.tickCheckpoints();
    this.tickBoosts();
    this.tickBounces();
    this.checkFinish();
    if (this.ball.pos.y < -15) this.respawn();
    this.recordSample(dt);
    this.updateGhost();
    this.updateTrail(dt);
    audio.setRolling(this.ball.speed, this.ball.grounded);
  }

  updateIdleBall(dt) {
    this.ball.group.position.copy(this.ball.pos);
    this.ball.group.quaternion.copy(this.ball.quat);
    this.ball.speed = this.ball.vel.length();
    this.updateGhost();
  }

  tickBounces() {
    if (this.raceState !== 'running') return;
    const b = this.ball;
    if (!b.grounded || !b.groundCollider) return;
    const col = b.groundCollider;
    if (col.piece?.t !== 'bounce') return;
    const pad = this.bounces.find((x) => x.piece === col.piece);
    if (!pad || this.animTime < pad.readyAt) return;
    pad.readyAt = this.animTime + 0.55;
    b.vel.y = 12.8;
    b.vel.x *= 0.92;
    b.vel.z *= 0.92;
    b.grounded = false;
    b.groundCollider = null;
    b.coyote = 0;
    this.emit(new THREE.Vector3(pad.x, pad.topY + 0.6, pad.z), this.theme.accent2, 16, { speed: 5, life: 0.7, size: 0.5, gravity: 0 });
    this.camShake = Math.max(this.camShake, 0.1);
    this.fovKick = Math.max(this.fovKick, 4);
    audio.bounce();
  }

  getSteerVector() {
    let ix = this.input.x;
    let iy = this.input.y;
    if (this.input.tiltOn) {
      const tx = this.input.tiltX;
      const ty = this.input.tiltY;
      if (Math.hypot(tx, ty) > 0.16) {
        ix = tx;
        iy = ty;
      }
    }
    const mag = Math.hypot(ix, iy);
    if (mag < 0.08) return { x: 0, z: 0, mag: 0 };
    const nx = ix / Math.max(1, mag);
    const ny = iy / Math.max(1, mag);
    const forward = new THREE.Vector3(-Math.sin(this.camYaw), 0, -Math.cos(this.camYaw));
    const right = new THREE.Vector3(Math.cos(this.camYaw), 0, -Math.sin(this.camYaw));
    const out = new THREE.Vector3()
      .addScaledVector(right, nx)
      .addScaledVector(forward, ny);
    return { x: out.x, z: out.z, mag: Math.min(1, mag) };
  }

  stepBall(dt) {
    const b = this.ball;
    if (this.respawnCooldown > 0) this.respawnCooldown -= dt;

    // Ride moving platforms.
    for (const dyn of this.dynamics) {
      if (dyn.type === 'mover' && b.grounded && b.groundCollider === dyn.collider) {
        b.pos.x += dyn.collider.velocity.x * dt;
        b.pos.z += dyn.collider.velocity.z * dt;
      }
    }

    const steps = clamp(Math.ceil(dt / (1 / 120)), 1, 7);
    const h = dt / steps;
    for (let i = 0; i < steps; i++) this.physicsStep(h);

    const hs = Math.hypot(b.vel.x, b.vel.z);
    if (hs > 0.05) {
      const axis = new THREE.Vector3(b.vel.z, 0, -b.vel.x).normalize();
      const angle = (hs * h * steps) / MARBLE_RADIUS;
      const q = new THREE.Quaternion().setFromAxisAngle(axis, angle);
      b.quat.premultiply(q);
    }
    b.speed = b.vel.length();
  }

  physicsStep(h) {
    const b = this.ball;
    const steer = this.getSteerVector();
    const accel = b.grounded ? ACCEL : AIR_ACCEL;
    if (steer.mag > 0.02) {
      b.vel.x += steer.x * accel * steer.mag * h;
      b.vel.z += steer.z * accel * steer.mag * h;
    }

    const drag = b.grounded ? (steer.mag > 0.05 ? 0.25 : 2.6) : 0.12;
    b.vel.x *= Math.exp(-drag * h);
    b.vel.z *= Math.exp(-drag * h);

    const hs = Math.hypot(b.vel.x, b.vel.z);
    if (hs > 13.8) {
      b.vel.x *= 13.8 / hs;
      b.vel.z *= 13.8 / hs;
    }

    // Jump buffering + coyote time.
    b.jumpBuffer = Math.max(0, b.jumpBuffer - h);
    b.jumpCooldown = Math.max(0, b.jumpCooldown - h);
    if (b.jumpBuffer > 0 && (b.grounded || b.coyote > 0) && b.jumpCooldown <= 0) {
      b.vel.y = JUMP_VELOCITY;
      b.grounded = false;
      b.groundCollider = null;
      b.coyote = 0;
      b.jumpBuffer = 0;
      b.jumpCooldown = 0.18;
      this.emit(new THREE.Vector3(b.pos.x, b.pos.y - 0.4, b.pos.z), this.theme.glow, 10, { speed: 2.5, life: 0.45, size: 0.38, gravity: 0 });
      audio.jump();
    }

    b.vel.y -= GRAVITY * h;
    b.pos.addScaledVector(b.vel, h);

    const wasGrounded = b.grounded;
    let grounded = false;
    let groundCollider = null;
    let bestNormalY = -1;

    for (let pass = 0; pass < 2; pass++) {
      for (const col of this.colliders) {
        const nx = b.pos.x - col.center.x;
        const ny = b.pos.y - col.center.y;
        const nz = b.pos.z - col.center.z;
        const reach = MARBLE_RADIUS + col.radius;
        if (nx * nx + ny * ny + nz * nz > reach * reach) continue;
        const res = this.resolveSphereBox(b, col, h);
        if (res && res.normalY > bestNormalY) {
          bestNormalY = res.normalY;
          if (res.normalY > 0.5) {
            grounded = true;
            groundCollider = col;
          }
        }
      }
    }

    b.grounded = grounded;
    b.groundCollider = groundCollider;
    if (grounded) {
      b.coyote = 0.12;
      if (!wasGrounded && b.vel.y < -4) {
        const power = clamp(Math.abs(b.vel.y) / 12, 0.3, 1);
        this.camShake = Math.max(this.camShake, power * 0.05);
        this.emit(new THREE.Vector3(b.pos.x, b.pos.y - 0.45, b.pos.z), this.theme.top, 5, { speed: 1.8, life: 0.4, size: 0.3, gravity: 1 });
        audio.land(power);
      }
    } else {
      b.coyote = Math.max(0, b.coyote - h);
    }
  }

  resolveSphereBox(ball, col, h) {
    const invQ = this._invQ || (this._invQ = new THREE.Quaternion());
    invQ.copy(col.quat).invert();
    const local = this._local || (this._local = new THREE.Vector3());
    local.copy(ball.pos).sub(col.center).applyQuaternion(invQ);
    const hx = col.half.x;
    const hy = col.half.y;
    const hz = col.half.z;
    if (Math.abs(local.x) > hx + MARBLE_RADIUS || Math.abs(local.y) > hy + MARBLE_RADIUS || Math.abs(local.z) > hz + MARBLE_RADIUS) return null;

    const closest = this._closest || (this._closest = new THREE.Vector3());
    closest.set(clamp(local.x, -hx, hx), clamp(local.y, -hy, hy), clamp(local.z, -hz, hz));
    const diff = this._diff || (this._diff = new THREE.Vector3());
    diff.copy(local).sub(closest);
    let dist2 = diff.lengthSq();
    let normalLocal;
    let penetration;
    if (dist2 < 1e-8) {
      // Center is inside the box: exit through the nearest face.
      const px = hx - Math.abs(local.x);
      const py = hy - Math.abs(local.y);
      const pz = hz - Math.abs(local.z);
      normalLocal = new THREE.Vector3();
      if (px <= py && px <= pz) {
        normalLocal.set(Math.sign(local.x) || 1, 0, 0);
        penetration = px + MARBLE_RADIUS;
      } else if (py <= pz) {
        normalLocal.set(0, Math.sign(local.y) || 1, 0);
        penetration = py + MARBLE_RADIUS;
      } else {
        normalLocal.set(0, 0, Math.sign(local.z) || 1);
        penetration = pz + MARBLE_RADIUS;
      }
      dist2 = 0;
    } else {
      const dist = Math.sqrt(dist2);
      normalLocal = diff.clone().multiplyScalar(1 / dist);
      penetration = MARBLE_RADIUS - dist;
    }
    if (penetration < -0.001) return null;

    const normal = normalLocal.clone().applyQuaternion(col.quat).normalize();
    ball.pos.addScaledVector(normal, penetration + 0.0005);

    // Velocity of the surface at the contact point.
    const surface = this._surface || (this._surface = new THREE.Vector3());
    surface.set(0, 0, 0);
    if (col.kind === 'hazard' && col.angularVelocity) {
      const rx = ball.pos.x - col.center.x;
      const rz = ball.pos.z - col.center.z;
      surface.set(col.angularVelocity * rz, 0, -col.angularVelocity * rx);
    } else if (col.velocity) {
      surface.copy(col.velocity);
    }

    const rel = this._rel || (this._rel = new THREE.Vector3());
    rel.copy(ball.vel).sub(surface);
    const vn = rel.dot(normal);
    if (vn < 0) {
      const restitution = col.kind === 'hazard' ? 0.28 : 0.08;
      ball.vel.addScaledVector(normal, -vn * (1 + restitution));
      if (col.kind === 'hazard') {
        ball.vel.addScaledVector(surface, 0.62);
        this.camShake = Math.max(this.camShake, 0.07);
        this.emit(new THREE.Vector3(ball.pos.x, ball.pos.y, ball.pos.z), this.theme.accent2, 6, { speed: 3, life: 0.4, size: 0.4, gravity: 0 });
        audio.collide(1);
      } else if (Math.abs(vn) > 3) {
        audio.collide(Math.min(1, Math.abs(vn) / 10));
      }
    }

    // A touch of tangential friction keeps landings from skating.
    if (normal.y > 0.55) {
      const f = Math.exp(-1.8 * h);
      ball.vel.x *= f;
      ball.vel.z *= f;
    }
    return { normalY: normal.y };
  }

  /* ------------------------------------------------------------------ */
  /* Builder entry                                                       */
  /* ------------------------------------------------------------------ */

  enterBuilder(map) {
    this.mode = 'builder';
    this.raceState = 'idle';
    this.paused = false;
    this.builder.map = map;
    this.builder.level = 0;
    this.builder.tool = 'plat';
    this.builder.rot = 0;
    this.builder.history = [];
    this.ball.group.visible = false;
    this.ghostMesh.group.visible = false;
    this.buildCourse(map, { editor: true });
    this.builder.map = map;
    this.cameraMode = 'builder';
    this.camera.fov = 50;
    this.camera.updateProjectionMatrix();
    this.applyBuilderCursor();
  }

  /* ------------------------------------------------------------------ */
  /* Camera + frame loop                                                 */
  /* ------------------------------------------------------------------ */

  orbit(dx, dy) {
    if (this.mode === 'builder') {
      this.camYaw -= dx * 0.006;
      this.camPitch = clamp(this.camPitch + dy * 0.004, 0.18, 1.35);
    } else {
      this.camYaw -= dx * 0.0052;
      this.camPitch = clamp(this.camPitch + dy * 0.0038, 0.1, 1.18);
    }
    this.userOrbitHold = 2.4;
  }

  zoom(delta) {
    const min = this.mode === 'builder' ? 9 : this.mode === 'race' ? 4.2 : 10;
    const max = this.mode === 'builder' ? 48 : this.mode === 'race' ? 12 : 55;
    this.camDist = clamp(this.camDist * Math.exp(delta * 0.0012), min, max);
  }

  followCourse(dt) {
    if (this.mode !== 'race' || this.raceState !== 'running' || this.userOrbitHold > 0) return;
    if (this.ball.speed < 1.6 && this.raceTime < 400) return;
    let target = this.checkpoints.find((cp) => !cp.active);
    if (!target && this.finishInfo) target = this.finishInfo;
    if (!target) return;
    const dx = target.x - this.ball.pos.x;
    const dz = target.z - this.ball.pos.z;
    const d2 = dx * dx + dz * dz;
    if (d2 < 9) return;
    const desired = Math.atan2(-dx, -dz);
    let diff = desired - this.camYaw;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    this.camYaw += diff * (1 - Math.exp(-1.15 * dt));
  }

  updateCamera(dt) {
    const portrait = window.innerWidth / window.innerHeight < 0.82;
    if (this.mode === 'race') this.followCourse(dt);
    const shake = this.camShake;
    this.camShake = Math.max(0, this.camShake - dt * 0.9);
    this.userOrbitHold = Math.max(0, (this.userOrbitHold || 0) - dt);
    this.fovKick = Math.max(0, this.fovKick - dt * 28);

    const shakeVec = this._shakeVec || (this._shakeVec = new THREE.Vector3());
    shakeVec.set((Math.random() - 0.5) * shake, (Math.random() - 0.5) * shake, (Math.random() - 0.5) * shake);

    let baseFov = 58;
    if (this.mode === 'showcase') baseFov = 48;
    else if (this.mode === 'builder' || this.mode === 'preview') baseFov = 50;
    else if (this.raceState === 'finished') baseFov = 52;

    if (this.cameraMode === 'race' && this.mode === 'race' && this.raceState !== 'finished') {
      const lookAhead = this._lookAhead || (this._lookAhead = new THREE.Vector3());
      lookAhead.copy(this.ball.pos);
      lookAhead.x += this.ball.vel.x * 0.055;
      lookAhead.z += this.ball.vel.z * 0.055;
      lookAhead.y += 0.72;
      const lambda = 1 - Math.exp(-12 * dt);
      this.camLook.lerp(lookAhead, lambda);
      this.camTarget.lerp(lookAhead, 1 - Math.exp(-16 * dt));
      const dist = this.camDist * (portrait ? 1.12 : 1);
      const desired = this.camTarget.clone().add(this.cameraOffset(this.camYaw, this.camPitch, dist));
      if (desired.y < this.camTarget.y - 1.6) desired.y = this.camTarget.y - 1.6;
      this.camPos.lerp(desired, 1 - Math.exp(-9 * dt));
      this.camera.position.copy(this.camPos).add(shakeVec);
      this.camera.lookAt(this.camLook.x, this.camLook.y + 0.42, this.camLook.z);
      baseFov += clamp(this.ball.speed / 13, 0, 1) * 2.6;
    } else if (this.cameraMode === 'result' || (this.mode === 'race' && this.raceState === 'finished')) {
      const f = this.finishInfo;
      const target = this._resultTarget || (this._resultTarget = new THREE.Vector3());
      if (f) target.set(f.x, f.topY + 1.35, f.z);
      else target.copy(this.ball.pos).add(new THREE.Vector3(0, 1, 0));
      this.camTarget.lerp(target, 1 - Math.exp(-5 * dt));
      if (this.userOrbitHold <= 0) this.camYaw += dt * 0.22;
      const desired = this.camTarget.clone().add(this.cameraOffset(this.camYaw, this.camPitch, Math.max(this.camDist, 8)));
      this.camPos.lerp(desired, 1 - Math.exp(-4.5 * dt));
      this.camera.position.copy(this.camPos).add(shakeVec);
      this.camera.lookAt(this.camTarget.x, this.camTarget.y + 0.2, this.camTarget.z);
    } else if (this.cameraMode === 'builder') {
      if (this.userOrbitHold <= 0) this.camYaw += dt * 0.015;
      const desired = this.camTarget.clone().add(this.cameraOffset(this.camYaw, this.camPitch, this.camDist));
      this.camPos.lerp(desired, 1 - Math.exp(-12 * dt));
      this.camera.position.copy(this.camPos);
      this.camera.lookAt(this.camTarget.x, this.camTarget.y + 0.5, this.camTarget.z);
    } else if (this.cameraMode === 'preview' || this.cameraMode === 'showcase') {
      if (this.userOrbitHold <= 0) this.camYaw += dt * (this.autoOrbit || 0.06);
      const desired = this.camTarget.clone().add(this.cameraOffset(this.camYaw, this.camPitch, this.camDist));
      this.camPos.lerp(desired, 1 - Math.exp(-4 * dt));
      this.camera.position.copy(this.camPos).add(shakeVec);
      this.camera.lookAt(this.camTarget.x, this.camTarget.y + 0.35, this.camTarget.z);
    }

    const targetFov = baseFov + this.fovKick;
    const nextFov = damp(this.camera.fov, targetFov, 6, dt);
    if (Math.abs(nextFov - this.camera.fov) > 0.001) {
      this.camera.fov = nextFov;
      this.camera.updateProjectionMatrix();
    }
  }

  updateWorldAnimations(dt) {
    const time = this.totalTime;
    const anim = this.animTime;
    for (const cp of this.checkpoints) {
      cp.mesh.rotation.y = time * 1.4 + cp.index;
      cp.mesh.position.y = cp.topY + 1.65 + Math.sin(time * 2 + cp.index * 1.4) * 0.09;
      if (!cp.active) cp.ring.rotation.z = time * 0.35;
    }
    for (const b of this.bounces) {
      b.rings.forEach((ring, i) => {
        ring.position.y = 0.12 + i * 0.18 + Math.sin(time * 3.2 + i) * 0.045;
        ring.rotation.z = time * (i % 2 ? 0.5 : -0.5);
      });
    }
    for (const b of this.boosts) {
      b.pad.material.opacity = 0.65 + Math.sin(time * 4) * 0.2;
    }
    if (this.finishInfo) {
      this.finishInfo.ring.rotation.z = time * 0.75;
      this.finishInfo.disc.material.opacity = 0.08 + Math.sin(time * 2.2) * 0.035;
      this.finishInfo.group.position.y = this.finishInfo.topY + Math.sin(time * 1.4) * 0.02;
    }
    if (this.showcaseMarble) {
      this.showcaseMarble.rotation.y = time * 0.28;
      this.showcaseMarble.rotation.x = Math.sin(time * 0.4) * 0.09;
      this.showcaseMarble.position.y = 4.1 + Math.sin(time * 0.9) * 0.22;
      this.showcaseRing1.rotation.z = time * 0.22;
      this.showcaseRing1.rotation.x = 1.1 + Math.sin(time * 0.3) * 0.12;
      this.showcaseRing2.rotation.y = time * -0.18;
      this.showcaseRing2.rotation.z = -0.5 + Math.sin(time * 0.4) * 0.1;
      if (this.showcaseSparks) {
        for (let i = 0; i < this.showcaseSparks.length; i++) {
          const s = this.showcaseSparks[i];
          s.rotation.y = time * (0.4 + i * 0.03);
          s.position.y += Math.sin(time * 0.8 + i) * 0.0008;
        }
      }
    }
    if (this.builderCursor) {
      this.builderCursor.material.opacity = 0.24 + Math.sin(time * 5) * 0.09;
    }
    this.cloudGroup.rotation.y = time * 0.0015;
  }

  update(dtRaw) {
    const dt = clamp(dtRaw, 0, 0.05);
    const frozen = this.raceState === 'paused';
    this.totalTime += dt;
    if (!frozen) this.animTime += dt;
    if (!frozen) this.updateDynamics(this.animTime, dt);
    if (this.mode === 'race') this.updateRace(dt);
    this.updateWorldAnimations(dt);
    this.updateFX(dt);
    this.updateCamera(dt);
    this.sky.position.copy(this.camera.position);
    this.stars.position.copy(this.camera.position);
    this.renderer.render(this.scene, this.camera);
  }

  setQuality(quality) {
    this.quality = quality;
    const ratio = quality === 'low' ? 1 : quality === 'medium' ? 1.35 : Math.min(window.devicePixelRatio || 1, 1.75);
    this.renderer.setPixelRatio(ratio);
    if (this.dir.shadow.map) {
      this.dir.shadow.map.dispose();
      this.dir.shadow.map = null;
    }
    const size = quality === 'low' ? 1024 : 2048;
    this.dir.shadow.mapSize.set(size, size);
    this.resize();
  }

  resize() {
    const w = this.canvas.clientWidth || window.innerWidth;
    const h = this.canvas.clientHeight || window.innerHeight;
    if (!w || !h) return;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  debugGo() {
    if (this.raceState === 'countdown') {
      this.countdownT = 0;
      this.raceState = 'running';
      this.raceTime = 0;
      this.recording = [];
      this.splits = [];
      if (this.events.onGo) this.events.onGo();
    }
  }

  debugTeleport(x, y, z) {
    this.ball.pos.set(x, y, z);
    this.ball.vel.set(0, 0, 0);
    this.ball.group.position.copy(this.ball.pos);
    this.camTarget.set(x, y, z);
    this.camLook.copy(this.camTarget);
  }

  debugFinish() {
    if (this.raceState === 'running') this.finishRace();
  }

  debugState() {
    return {
      mode: this.mode,
      raceState: this.raceState,
      raceTime: this.raceTime,
      pos: this.ball.pos.toArray().map((v) => Math.round(v * 100) / 100),
      vel: this.ball.vel.toArray().map((v) => Math.round(v * 100) / 100),
      grounded: this.ball.grounded,
      checkpoints: this.checkpoints.length,
      map: this.activeRaceMap?.id || this.currentMap?.id,
      builderPieces: this.builder.map?.pieces.length,
      camera: this.camera.position.toArray().map((v) => Math.round(v * 100) / 100),
    };
  }
}
