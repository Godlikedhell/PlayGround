import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

// Verdant: a quiet, procedural rainforest made for wandering.
const canvas = document.querySelector('#world');
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.7));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.08;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const camera = new THREE.PerspectiveCamera(72, innerWidth / innerHeight, .1, 650);
const player = new THREE.Vector3(0, 0, 14);
let yaw = 0, pitch = -.025, isPlaying = false, pointerLocked = false;
const clock = new THREE.Clock();
const keys = Object.create(null);
const mobileMove = { x: 0, y: 0 };
const pickups = [];
let collected = 0, toastTimer = 0, footPhase = 0;

function terrainHeight(x, z) {
  const broad = Math.sin(x * .018 + 1.2) * 2.4 + Math.cos(z * .021 - .7) * 2.1;
  const ridge = Math.sin((x + z) * .013) * 1.25 + Math.cos((x - z) * .027) * .65;
  const mound = 4.5 * Math.exp(-((x - 76) ** 2 + (z + 70) ** 2) / 2600) + 3.2 * Math.exp(-((x + 98) ** 2 + (z - 74) ** 2) / 3200);
  return broad + ridge + mound - 1.3;
}
const rand = (() => { let s = 198713; return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; })();

// Lighting and atmospheric sky
scene.fog = new THREE.FogExp2(0x9cae8a, .00335);
scene.add(new THREE.HemisphereLight(0xc8e5e3, 0x273b25, 1.75));
const sun = new THREE.DirectionalLight(0xffe6b4, 3.15);
sun.position.set(-72, 112, 55); sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -90; sun.shadow.camera.right = 90; sun.shadow.camera.top = 90; sun.shadow.camera.bottom = -90;
sun.shadow.camera.near = 10; sun.shadow.camera.far = 260; sun.shadow.bias = -.00035;
sun.shadow.normalBias = .035; sun.shadow.radius = 4;
scene.add(sun);
const fill = new THREE.DirectionalLight(0x97c6bc, .75); fill.position.set(65, 36, -80); scene.add(fill);
const sky = new THREE.Mesh(new THREE.SphereGeometry(540, 32, 18), new THREE.ShaderMaterial({
  side: THREE.BackSide, depthWrite: false,
  vertexShader: `varying vec3 vPos; void main(){vPos=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
  fragmentShader: `varying vec3 vPos; void main(){float h=normalize(vPos).y; vec3 low=vec3(.69,.77,.68); vec3 mid=vec3(.42,.64,.59); vec3 high=vec3(.20,.39,.39); vec3 c=mix(low,mid,smoothstep(-.18,.22,h)); c=mix(c,high,smoothstep(.22,.85,h)); float sunGlow=pow(max(dot(normalize(vPos),normalize(vec3(-.6,.65,.45))),0.),14.); c+=vec3(.33,.21,.10)*sunGlow; gl_FragColor=vec4(c,1.);}`
})); scene.add(sky);

// A hand-painted procedural soil texture with fine leaf litter noise.
function makeGroundTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 512;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#514b35'; ctx.fillRect(0, 0, 512, 512);
  for (let i=0;i<14000;i++) {
    const x=rand()*512,y=rand()*512,light=rand();
    const colors = light>.76 ? ['#77704b','#6c7045','#887750'] : ['#454a32','#59603a','#60543a','#3e4935'];
    ctx.globalAlpha=.12+rand()*.21; ctx.fillStyle=colors[Math.floor(rand()*colors.length)];
    ctx.beginPath(); ctx.ellipse(x,y,1+rand()*5,.5+rand()*2,rand()*3,0,Math.PI*2); ctx.fill();
  }
  for(let i=0;i<170;i++){ctx.globalAlpha=.10;ctx.strokeStyle=i%2?'#b0a16c':'#283c2b';ctx.lineWidth=1+rand()*2;ctx.beginPath();let x=rand()*512,y=rand()*512;ctx.moveTo(x,y);ctx.quadraticCurveTo(x+rand()*15,y+rand()*9,x+rand()*30,y+rand()*17);ctx.stroke();}
  ctx.globalAlpha=1;
  const tex=new THREE.CanvasTexture(c); tex.wrapS=tex.wrapT=THREE.RepeatWrapping; tex.repeat.set(28,28); tex.colorSpace=THREE.SRGBColorSpace; tex.anisotropy=8; return tex;
}
const groundGeo = new THREE.PlaneGeometry(480, 480, 190, 190);
groundGeo.rotateX(-Math.PI/2);
const pos=groundGeo.attributes.position, colors=[];
for(let i=0;i<pos.count;i++){
  const x=pos.getX(i), z=pos.getZ(i), h=terrainHeight(x,z); pos.setY(i,h);
  const tint=.87+rand()*.22; colors.push(.83*tint,.82*tint,.68*tint);
}
groundGeo.setAttribute('color',new THREE.Float32BufferAttribute(colors,3)); groundGeo.computeVertexNormals();
const ground = new THREE.Mesh(groundGeo,new THREE.MeshStandardMaterial({map:makeGroundTexture(),vertexColors:true,roughness:1})); ground.receiveShadow=true; scene.add(ground);

// Winding, worn footpath through the basin.
const pathPoints=[new THREE.Vector3(-118,0,-12),new THREE.Vector3(-84,0,-8),new THREE.Vector3(-56,0,1),new THREE.Vector3(-24,0,10),new THREE.Vector3(9,0,18),new THREE.Vector3(38,0,31),new THREE.Vector3(63,0,49),new THREE.Vector3(90,0,57),new THREE.Vector3(128,0,56)];
const pathCurve=new THREE.CatmullRomCurve3(pathPoints);
function ribbonGeometry(curve,width,steps,offset=0){const verts=[],uv=[],idx=[];for(let i=0;i<=steps;i++){const t=i/steps,p=curve.getPoint(t),tan=curve.getTangent(t),side=new THREE.Vector3(-tan.z,0,tan.x).normalize();for(const s of [-1,1]){const x=p.x+side.x*width*s,z=p.z+side.z*width*s;verts.push(x,terrainHeight(x,z)+offset,z);uv.push(s*.5+.5,t*12);}if(i<steps){const a=i*2;idx.push(a,a+1,a+2,a+1,a+3,a+2);}}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();return g;}
const path=new THREE.Mesh(ribbonGeometry(pathCurve,2.4,260,.055),new THREE.MeshStandardMaterial({color:0x9a8d62,roughness:1,transparent:true,opacity:.83}));path.receiveShadow=true;scene.add(path);

// The river curls past a shallow pool. Water is animated with fine traveling ripples.
const riverPoints=[new THREE.Vector3(-82,0,-145),new THREE.Vector3(-61,0,-111),new THREE.Vector3(-47,0,-80),new THREE.Vector3(-31,0,-45),new THREE.Vector3(-36,0,-18),new THREE.Vector3(-49,0,5),new THREE.Vector3(-46,0,32),new THREE.Vector3(-26,0,61),new THREE.Vector3(-8,0,91),new THREE.Vector3(-14,0,132),new THREE.Vector3(4,0,167)];
const riverCurve=new THREE.CatmullRomCurve3(riverPoints);
const waterMat=new THREE.ShaderMaterial({transparent:true,uniforms:{time:{value:0}},vertexShader:`varying vec2 vUv; varying vec3 vPos; void main(){vUv=uv;vPos=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`uniform float time; varying vec2 vUv; varying vec3 vPos; void main(){float a=sin(vUv.y*160.+time*1.6+sin(vUv.x*17.)*2.)*.5+.5;float b=sin(vUv.y*93.-time*1.15+vUv.x*23.)*.5+.5;float f=smoothstep(.58,.98,a*.6+b*.4);vec3 deep=vec3(.12,.33,.32);vec3 shallow=vec3(.31,.53,.47);vec3 c=mix(deep,shallow,.32+f*.23);c+=f*.09;gl_FragColor=vec4(c,.88);}`});
const river=new THREE.Mesh(ribbonGeometry(riverCurve,5.1,300,.18),waterMat);river.renderOrder=2;scene.add(river);
// A widened lagoon at the end of the watercourse.
const pool=new THREE.Mesh(new THREE.CircleGeometry(17,64),new THREE.MeshPhysicalMaterial({color:0x477f73,roughness:.22,metalness:.08,transparent:true,opacity:.87,clearcoat:.8,clearcoatRoughness:.2}));pool.rotation.x=-Math.PI/2;pool.position.set(-14,terrainHeight(-14,132)+.22,132);pool.scale.set(1.45,.78,1);scene.add(pool);

// Layered canopy: instanced meshes keep the dense forest surprisingly light.
const trees=[];
for(let i=0;i<430;i++){
  let x=(rand()-.5)*410,z=(rand()-.5)*410;
  if(Math.hypot(x,z-14)<19) continue;
  const pathP=pathCurve.getPointAt(Math.max(0,Math.min(1,(x+118)/246)));
  if(Math.hypot(x-pathP.x,z-pathP.z)<5.5) continue;
  const rp=riverCurve.getPointAt(Math.max(0,Math.min(1,(z+145)/312)));
  if(Math.hypot(x-rp.x,z-rp.z)<9) continue;
  trees.push({x,z,h:5.8+rand()*5.6,r:2.6+rand()*2.2,rot:rand()*Math.PI*2,t:rand()});
}
const trunkGeo=new THREE.CylinderGeometry(.13,.34,1,8,3);
const trunkMat=new THREE.MeshStandardMaterial({color:0xffffff,roughness:.96});
const trunks=new THREE.InstancedMesh(trunkGeo,trunkMat,trees.length);
trunks.castShadow=true; trunks.receiveShadow=true;
const crownGeo=new THREE.IcosahedronGeometry(1,2);
const crownMats=[new THREE.MeshStandardMaterial({color:0xffffff,roughness:.89}),new THREE.MeshStandardMaterial({color:0xffffff,roughness:.95})];
const crownMeshes=crownMats.map(m=>{const mesh=new THREE.InstancedMesh(crownGeo,m,trees.length*4);mesh.castShadow=true;mesh.receiveShadow=true;scene.add(mesh);return mesh;});
const dummy=new THREE.Object3D();
const crownColors=[0x395b37,0x44653a,0x526d3e,0x334f36,0x5b7144,0x3c603f,0x627747];
for(let i=0;i<trees.length;i++){
  const t=trees[i], base=terrainHeight(t.x,t.z), scale=1+(t.t>.9?.7:0);
  dummy.position.set(t.x,base+t.h*scale/2,t.z);dummy.rotation.set(0,t.rot,0);dummy.scale.set(scale,t.h*scale,scale);dummy.updateMatrix();trunks.setMatrixAt(i,dummy.matrix);trunks.setColorAt(i,new THREE.Color(t.t>.91?0x584532:0x68513a));
  for(let k=0;k<4;k++){
    const angle=t.rot+k*2.15+t.t*4, radius=t.r*(k===0?.12:.29+rand()*.16), y=t.h*scale*(.67+rand()*.28), blob=t.r*(.64+rand()*.42);
    dummy.position.set(t.x+Math.cos(angle)*radius,y+base,t.z+Math.sin(angle)*radius);dummy.rotation.set((rand()-.5)*.24,angle,(rand()-.5)*.18);dummy.scale.set(blob*(.9+rand()*.3),blob*(.72+rand()*.28),blob*(.9+rand()*.3));dummy.updateMatrix();
    const ci=Math.floor(rand()*crownColors.length);crownMeshes[k%2].setMatrixAt(i*2+Math.floor(k/2),dummy.matrix);crownMeshes[k%2].setColorAt(i*2+Math.floor(k/2),new THREE.Color(crownColors[ci]));
  }
}
// Each crown mesh receives two clusters per tree; compact the allocated instances.
for(let j=0;j<crownMeshes.length;j++){const mesh=crownMeshes[j];mesh.count=trees.length*2;mesh.instanceMatrix.needsUpdate=true;if(mesh.instanceColor)mesh.instanceColor.needsUpdate=true;}
trunks.instanceMatrix.needsUpdate=true; if(trunks.instanceColor)trunks.instanceColor.needsUpdate=true; scene.add(trunks);

// Palm crowns punctuate the broadleaf canopy along the water.
const palmCount=28, palmTrunks=new THREE.InstancedMesh(new THREE.CylinderGeometry(.12,.25,1,7),trunkMat,palmCount);
const frondShape=new THREE.BufferGeometry();
frondShape.setAttribute('position',new THREE.Float32BufferAttribute([0,0,0,-.18,.7,.12,0,1.8,.4,0,0,0,0,1.8,.4,.18,.7,.12],3));frondShape.setIndex([0,1,2,3,4,5]);frondShape.computeVertexNormals();
const fronds=new THREE.InstancedMesh(frondShape,new THREE.MeshStandardMaterial({color:0x547846,side:THREE.DoubleSide,roughness:.82}),palmCount*9);fronds.castShadow=true;
for(let i=0;i<palmCount;i++){
  const x=(rand()-.5)*270-20,z=(rand()-.5)*320,h=11+rand()*7,base=terrainHeight(x,z);
  dummy.position.set(x,base+h/2,z);dummy.scale.set(1,h,1);dummy.rotation.set(0,rand()*6.28,0);dummy.updateMatrix();palmTrunks.setMatrixAt(i,dummy.matrix);palmTrunks.setColorAt(i,new THREE.Color(0x756047));
  for(let j=0;j<9;j++){dummy.position.set(x,base+h*.85,z);dummy.rotation.set(.35+rand()*.8,j*Math.PI*2/9+rand()*.2,rand()*.2);dummy.scale.set(.6+rand()*.4,.65+rand()*.4,.65+rand()*.4);dummy.updateMatrix();fronds.setMatrixAt(i*9+j,dummy.matrix);fronds.setColorAt(i*9+j,new THREE.Color(j%3===0?0x6a8248:0x4d7041));}
}
palmTrunks.castShadow=true;palmTrunks.instanceMatrix.needsUpdate=true;fronds.instanceMatrix.needsUpdate=true;scene.add(palmTrunks,fronds);

// Low ferns and stones soften the ground plane without cluttering the trail.
const fernGeo=new THREE.BufferGeometry();fernGeo.setAttribute('position',new THREE.Float32BufferAttribute([0,0,0,-.14,.42,0,0,.68,.08,0,0,0,0,.68,.08,.14,.42,0],3));fernGeo.setIndex([0,1,2,3,4,5]);fernGeo.computeVertexNormals();
const fernMesh=new THREE.InstancedMesh(fernGeo,new THREE.MeshStandardMaterial({color:0x68834c,side:THREE.DoubleSide,roughness:.9}),580);fernMesh.castShadow=true;
for(let i=0;i<580;i++){const x=(rand()-.5)*390,z=(rand()-.5)*390;if(Math.hypot(x,z-14)<12)continue;dummy.position.set(x,terrainHeight(x,z)+.04,z);dummy.rotation.set(0,rand()*6.28,0);dummy.scale.set(.5+rand()*.9,.5+rand()*1.1,.5+rand()*.8);dummy.updateMatrix();fernMesh.setMatrixAt(i,dummy.matrix);fernMesh.setColorAt(i,new THREE.Color([0x45613c,0x607a46,0x3f6842][Math.floor(rand()*3)]));}
fernMesh.instanceMatrix.needsUpdate=true;scene.add(fernMesh);
const rockGeo=new THREE.DodecahedronGeometry(1,0),rockMat=new THREE.MeshStandardMaterial({color:0x696b54,roughness:1});
const rocks=new THREE.InstancedMesh(rockGeo,rockMat,150);
for(let i=0;i<150;i++){const x=(rand()-.5)*390,z=(rand()-.5)*390,s=.2+rand()*.8;dummy.position.set(x,terrainHeight(x,z)+s*.27,z);dummy.rotation.set(rand(),rand()*4,rand());dummy.scale.set(s*1.3,s*.65,s);dummy.updateMatrix();rocks.setMatrixAt(i,dummy.matrix);rocks.setColorAt(i,new THREE.Color(rand()>.5?0x77735e:0x525b4b));}rocks.castShadow=true;rocks.receiveShadow=true;rocks.instanceMatrix.needsUpdate=true;scene.add(rocks);

// Distant wooded ridges lend depth beyond the playable basin.
for(let r=0;r<3;r++){
  const pts=[];for(let i=0;i<=48;i++){const a=i/48*Math.PI*2,rad=222+r*20+Math.sin(a*5+r)*9;pts.push(new THREE.Vector3(Math.cos(a)*rad,0,Math.sin(a)*rad));}
  const ridgeGeo=new THREE.BufferGeometry(),v=[],ind=[];for(let i=0;i<pts.length;i++){const p=pts[i],peak=12+Math.sin(i*.65+r)*7+rand()*5;v.push(p.x,-2,p.z,p.x,peak,p.z);}for(let i=0;i<pts.length-1;i++){let a=i*2;ind.push(a,a+1,a+2,a+1,a+3,a+2);}ridgeGeo.setAttribute('position',new THREE.Float32BufferAttribute(v,3));ridgeGeo.setIndex(ind);ridgeGeo.computeVertexNormals();const ridge=new THREE.Mesh(ridgeGeo,new THREE.MeshStandardMaterial({color:[0x455b43,0x526b4c,0x637953][r],roughness:1,side:THREE.DoubleSide}));scene.add(ridge);
}

// A limestone cleft and luminous falling water mark the hidden waterfall.
const fallsX=77,fallsZ=-83,fallsBase=terrainHeight(fallsX,fallsZ);
const cliffMat=new THREE.MeshStandardMaterial({color:0x706f57,roughness:.98});
for(let i=0;i<17;i++){const rock=new THREE.Mesh(new THREE.DodecahedronGeometry(1.7+rand()*2.2,1),cliffMat);rock.position.set(fallsX+(rand()-.5)*18,fallsBase+3+rand()*12,fallsZ+(rand()-.5)*8);rock.scale.set(1.5+rand(),1.1+rand()*1.4,1+rand());rock.rotation.set(rand(),rand()*4,rand());rock.castShadow=true;scene.add(rock);}
const fallMat=new THREE.ShaderMaterial({transparent:true,side:THREE.DoubleSide,uniforms:{time:{value:0}},vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`uniform float time;varying vec2 vUv;void main(){float streak=sin(vUv.x*74.+sin(vUv.y*16.)*2.)*.5+.5;float flow=sin(vUv.y*42.-time*2.7+vUv.x*8.)*.5+.5;float alpha=.36+streak*.24+flow*.18;vec3 c=mix(vec3(.32,.68,.69),vec3(.75,.9,.82),streak*.45+flow*.28);gl_FragColor=vec4(c,alpha);}`});
const fallSheet=new THREE.Mesh(new THREE.PlaneGeometry(10,18,1,1),fallMat);fallSheet.position.set(fallsX,fallsBase+8,fallsZ+4.8);fallSheet.rotation.y=.14;scene.add(fallSheet);
const plunge=new THREE.Mesh(new THREE.CircleGeometry(10,48),new THREE.MeshPhysicalMaterial({color:0x4f8980,roughness:.2,transparent:true,opacity:.85,clearcoat:1}));plunge.rotation.x=-Math.PI/2;plunge.position.set(fallsX,fallsBase+.25,fallsZ+7);plunge.scale.set(1.2,.75,1);scene.add(plunge);
const sprayLight=new THREE.PointLight(0xb8e6d5,26,32,2);sprayLight.position.set(fallsX,fallsBase+6,fallsZ+7);scene.add(sprayLight);

// Three quiet field-note discoveries, marked by tiny floating pollen lights.
const noteData=[{x:-43,z:36,name:'The old-growth grove',desc:'A giant kapok tree, older than the forest paths.'},{x:fallsX,z:fallsZ-9,name:'Hidden falls',desc:'Water finds its way through the limestone.'},{x:11,z:126,name:'River listening place',desc:'The river slows here beneath the palms.'}];
const pickupGeo=new THREE.IcosahedronGeometry(.22,2),pickupMat=new THREE.MeshStandardMaterial({color:0xc9e68c,emissive:0x63833c,emissiveIntensity:2,roughness:.26});
const pickupRingGeo=new THREE.TorusGeometry(.44,.015,8,36),pickupRingMat=new THREE.MeshBasicMaterial({color:0xd9eea1,transparent:true,opacity:.62});
for(const n of noteData){const group=new THREE.Group();group.position.set(n.x,terrainHeight(n.x,n.z)+1.55,n.z);const orb=new THREE.Mesh(pickupGeo,pickupMat);orb.castShadow=false;group.add(orb);const ring=new THREE.Mesh(pickupRingGeo,pickupRingMat);ring.rotation.x=Math.PI/2;group.add(ring);scene.add(group);pickups.push({group,orb,ring,data:n,found:false,baseY:group.position.y});}

// A drifting layer of fireflies and canopy motes catches the sunlight.
const moteCount=260,motePositions=new Float32Array(moteCount*3),moteSizes=new Float32Array(moteCount);
for(let i=0;i<moteCount;i++){motePositions[i*3]=(rand()-.5)*260;motePositions[i*3+1]=1+rand()*20;motePositions[i*3+2]=(rand()-.5)*260;moteSizes[i]=1+rand()*2.4;}
const moteGeo=new THREE.BufferGeometry();moteGeo.setAttribute('position',new THREE.BufferAttribute(motePositions,3));moteGeo.setAttribute('aSize',new THREE.BufferAttribute(moteSizes,1));
const motes=new THREE.Points(moteGeo,new THREE.PointsMaterial({color:0xd9e9a1,size:.075,transparent:true,opacity:.66,depthWrite:false,sizeAttenuation:true}));scene.add(motes);

camera.position.set(player.x,terrainHeight(player.x,player.z)+1.7,player.z);
const ui={intro:document.querySelector('#intro'),begin:document.querySelector('#begin-button'),coordsX:document.querySelector('#coord-x'),coordsZ:document.querySelector('#coord-z'),heading:document.querySelector('#heading-label'),count:document.querySelector('#discover-count'),progress:document.querySelector('#progress-bar'),toast:document.querySelector('#toast'),toastText:document.querySelector('#toast-text'),map:document.querySelector('#map-panel'),mapPlayer:document.querySelector('#map-player'),pause:document.querySelector('#pause-badge'),mobile:document.querySelector('#mobile-controls'),joystick:document.querySelector('#joystick'),knob:document.querySelector('#joystick-knob')};
const isTouch=('ontouchstart'in window)||navigator.maxTouchPoints>0;
if(isTouch) ui.mobile.classList.add('active');

function beginGame(){isPlaying=true;ui.intro.classList.add('hidden');if(!isTouch&&canvas.requestPointerLock)canvas.requestPointerLock();}
ui.begin.addEventListener('click',beginGame);
document.addEventListener('pointerlockchange',()=>{pointerLocked=document.pointerLockElement===canvas;ui.pause.classList.toggle('show',isPlaying&&!pointerLocked&&!isTouch);});
canvas.addEventListener('click',()=>{if(isPlaying&&!isTouch&&!pointerLocked)canvas.requestPointerLock?.();});
document.addEventListener('mousemove',e=>{if(!pointerLocked||!isPlaying)return;yaw-=e.movementX*.0022;pitch-=e.movementY*.0019;pitch=THREE.MathUtils.clamp(pitch,-1.28,1.22);});
window.addEventListener('keydown',e=>{keys[e.code]=true;if(['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code))e.preventDefault();if(e.code==='KeyM'&&!e.repeat)toggleMap();if(e.code==='Escape'&&isPlaying)ui.pause.classList.add('show');});
window.addEventListener('keyup',e=>{keys[e.code]=false;});
window.addEventListener('blur',()=>{for(const k in keys)keys[k]=false;});

function toggleMap(){ui.map.classList.toggle('open');}
document.querySelector('#map-toggle').addEventListener('click',toggleMap);
document.querySelector('#close-map').addEventListener('click',toggleMap);

// Touch joystick controls and drag-to-look, with the sprint button held by touch.
let joyPointer=null, lookPointer=null, joyOrigin={x:0,y:0}, lastLook={x:0,y:0};
ui.joystick.addEventListener('pointerdown',e=>{e.preventDefault();joyPointer=e.pointerId;ui.joystick.setPointerCapture(e.pointerId);const r=ui.joystick.getBoundingClientRect();joyOrigin={x:r.left+r.width/2,y:r.top+r.height/2};moveJoy(e);});
function moveJoy(e){if(e.pointerId!==joyPointer)return;const dx=e.clientX-joyOrigin.x,dy=e.clientY-joyOrigin.y,dist=Math.hypot(dx,dy),max=33,scale=Math.min(1,max/(dist||1));mobileMove.x=dx*scale/max;mobileMove.y=dy*scale/max;ui.knob.style.left=`calc(50% + ${dx*scale}px)`;ui.knob.style.top=`calc(50% + ${dy*scale}px)`;}
ui.joystick.addEventListener('pointermove',moveJoy);
function releaseJoy(e){if(e.pointerId!==joyPointer)return;joyPointer=null;mobileMove.x=mobileMove.y=0;ui.knob.style.left='50%';ui.knob.style.top='50%';}
ui.joystick.addEventListener('pointerup',releaseJoy);ui.joystick.addEventListener('pointercancel',releaseJoy);
const sprintButton=document.querySelector('#mobile-sprint');sprintButton.addEventListener('pointerdown',e=>{e.preventDefault();keys.ShiftLeft=true;sprintButton.setPointerCapture(e.pointerId);});sprintButton.addEventListener('pointerup',()=>keys.ShiftLeft=false);sprintButton.addEventListener('pointercancel',()=>keys.ShiftLeft=false);
canvas.addEventListener('pointerdown',e=>{if(!isTouch||!isPlaying||e.pointerType==='mouse')return;lookPointer=e.pointerId;lastLook={x:e.clientX,y:e.clientY};canvas.setPointerCapture(e.pointerId);});
canvas.addEventListener('pointermove',e=>{if(e.pointerId!==lookPointer)return;const dx=e.clientX-lastLook.x,dy=e.clientY-lastLook.y;yaw-=dx*.004;pitch=THREE.MathUtils.clamp(pitch-dy*.003,-1.22,1.1);lastLook={x:e.clientX,y:e.clientY};});
canvas.addEventListener('pointerup',e=>{if(e.pointerId===lookPointer)lookPointer=null;});

// Optional synthesized forest ambience; it only starts after a user gesture.
let audio=null,ambientGain=null,birdTimer=null,soundOn=false;
function makeSound(){if(!audio){const AudioCtx=window.AudioContext||window.webkitAudioContext;if(!AudioCtx)return;audio=new AudioCtx();const buffer=audio.createBuffer(1,audio.sampleRate*3,audio.sampleRate),data=buffer.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*.25;const source=audio.createBufferSource();source.buffer=buffer;source.loop=true;const filter=audio.createBiquadFilter();filter.type='lowpass';filter.frequency.value=720;ambientGain=audio.createGain();ambientGain.gain.value=0;source.connect(filter).connect(ambientGain).connect(audio.destination);source.start();birdTimer=setInterval(()=>{if(!soundOn||!audio)return;const o=audio.createOscillator(),g=audio.createGain();o.type='sine';o.frequency.setValueAtTime(1900+Math.random()*900,audio.currentTime);o.frequency.exponentialRampToValueAtTime(1100+Math.random()*400,audio.currentTime+.24);g.gain.setValueAtTime(.0001,audio.currentTime);g.gain.exponentialRampToValueAtTime(.018,audio.currentTime+.04);g.gain.exponentialRampToValueAtTime(.0001,audio.currentTime+.38);o.connect(g).connect(audio.destination);o.start();o.stop(audio.currentTime+.4);},2200);}return audio;}
const soundButton=document.querySelector('#sound-button');
soundButton.addEventListener('click',async()=>{const ctx=makeSound();if(!ctx)return;await ctx.resume();soundOn=!soundOn;ambientGain.gain.setTargetAtTime(soundOn?.12:0,ctx.currentTime,.35);document.querySelector('#sound-icon').textContent=soundOn?'♪':'×';soundButton.style.color=soundOn?'var(--lime)':'';});

function findNotes(){for(const p of pickups){if(p.found)continue;if(player.distanceTo(new THREE.Vector3(p.data.x,player.y,p.data.z))<3.2){p.found=true;scene.remove(p.group);collected++;ui.count.textContent=collected;ui.progress.style.width=`${collected/3*100}%`;ui.toastText.textContent=`${p.data.name} — ${p.data.desc}`;ui.toast.classList.add('show');toastTimer=4.5;}}}
function update(dt,time){if(isPlaying){let forward=(keys.KeyW||keys.ArrowUp?1:0)-(keys.KeyS||keys.ArrowDown?1:0)-mobileMove.y;let side=(keys.KeyD||keys.ArrowRight?1:0)-(keys.KeyA||keys.ArrowLeft?1:0)+mobileMove.x;const len=Math.hypot(forward,side);if(len>1){forward/=len;side/=len;}const sprint=keys.ShiftLeft||keys.ShiftRight;const speed=sprint?10.3:5.7;const fx=-Math.sin(yaw),fz=-Math.cos(yaw),rx=Math.cos(yaw),rz=-Math.sin(yaw);player.x+=(fx*forward+rx*side)*speed*dt;player.z+=(fz*forward+rz*side)*speed*dt;player.x=THREE.MathUtils.clamp(player.x,-224,224);player.z=THREE.MathUtils.clamp(player.z,-224,224);
    const moving=len>.08;footPhase+=dt*(sprint?13:8)*Math.min(1,len);const bob=moving?Math.sin(footPhase)*.035:0;const targetY=terrainHeight(player.x,player.z)+1.7+bob;camera.position.set(player.x,targetY,player.z);camera.rotation.order='YXZ';camera.rotation.set(pitch,yaw,0);
    findNotes();ui.coordsX.textContent=String(Math.round(player.x+240)).padStart(3,'0');ui.coordsZ.textContent=String(Math.round(player.z+240)).padStart(3,'0');const deg=((THREE.MathUtils.radToDeg(yaw)%360)+360)%360;ui.heading.textContent=`${['N','NE','E','SE','S','SW','W','NW'][Math.round(deg/45)%8]} ${String(Math.round(deg)).padStart(3,'0')}°`;
    const mapX=50+player.x/480*90,mapY=50+player.z/480*90;ui.mapPlayer.style.left=`${THREE.MathUtils.clamp(mapX,4,94)}%`;ui.mapPlayer.style.top=`${THREE.MathUtils.clamp(mapY,4,94)}%`;
  }
  if(toastTimer>0){toastTimer-=dt;if(toastTimer<=0)ui.toast.classList.remove('show');}
  waterMat.uniforms.time.value=time;fallMat.uniforms.time.value=time;
  for(const p of pickups)if(!p.found){p.group.position.y=p.baseY+Math.sin(time*1.6+p.data.x)*.14;p.orb.rotation.y=time*.8;p.ring.rotation.z=time*.38;}
  const a=moteGeo.attributes.position;for(let i=0;i<moteCount;i++){let y=a.getY(i)+Math.sin(time*.7+i)*.0015;if(y>22)y=1;a.setY(i,y);}a.needsUpdate=true;
}
function resize(){camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));renderer.setSize(innerWidth,innerHeight);}
window.addEventListener('resize',resize);
function frame(){requestAnimationFrame(frame);const dt=Math.min(clock.getDelta(),.04),t=clock.elapsedTime;update(dt,t);renderer.render(scene,camera);}
frame();
