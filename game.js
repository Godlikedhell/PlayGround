(() => {
  const canvas = document.getElementById('field');
  const ctx = canvas.getContext('2d');
  const $ = id => document.getElementById(id);
  const ui = { runs:$('runs'), wickets:$('wickets'), overs:$('overs'), target:$('target'), status:$('matchStatus'), track:$('ballTrack'), hint:$('shotHint'), callout:$('deliveryCallout'), calloutText:$('calloutText'), toast:$('resultToast'), power:$('powerMeter'), powerLabel:$('powerLabel'), flash:$('flash'), start:$('startOverlay'), end:$('endOverlay') };
  let W=0,H=0,dpr=1, running=false, over=false, last=0, elapsed=0, phase='idle', phaseTime=0, deliveryNo=0, runs=0,wickets=0,balls=0,target=24;
  let ball=null, swingTime=0, swingSpent=false, hitState=null, toastTime=0, calloutTime=0, aim={x:0,y:0}, pointer={x:0,y:0}, isTouch=false, soundOn=false, audio=null;
  const focal=()=>Math.min(W,H)*1.04;
  const horizon=()=>H*.285;
  const rng=(seed=>()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;})(1907);
  let crowd=[];
  function resize(){
    const r=canvas.getBoundingClientRect(); W=r.width;H=r.height;dpr=Math.min(devicePixelRatio||1,2);
    canvas.width=Math.round(W*dpr);canvas.height=Math.round(H*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);
    crowd=[]; for(let i=0;i<500;i++) crowd.push({x:rng()*W,y:horizon()+(rng()-.12)*H*.26,s:.5+rng()*1.5,c:['#d8c8a0','#d3e2d5','#e7e8d1','#bfc9bf','#ecb999'][Math.floor(rng()*5)],a:.18+rng()*.52});
  }
  window.addEventListener('resize',resize); resize();
  function proj(x,y,z){const f=focal()/(z+2.6);return {x:W*.5+x*f,y:horizon()+(1.62-y)*f,f};}
  function poly(points,fill,stroke=null,width=1){ctx.beginPath();points.forEach((p,i)=>{const q=proj(p[0],p[1],p[2]);i?ctx.lineTo(q.x,q.y):ctx.moveTo(q.x,q.y)});ctx.closePath();ctx.fillStyle=fill;ctx.fill();if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=width;ctx.stroke()}}
  function line(a,b,color,width=1){const p=proj(...a),q=proj(...b);ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle=color;ctx.lineWidth=width;ctx.stroke()}
  function drawBackground(t){
    const sky=ctx.createLinearGradient(0,0,0,H*.57);sky.addColorStop(0,'#274b54');sky.addColorStop(.52,'#82907d');sky.addColorStop(1,'#d7c09a');ctx.fillStyle=sky;ctx.fillRect(0,0,W,H);
    const glow=ctx.createRadialGradient(W*.5,H*.25,1,W*.5,H*.25,H*.35);glow.addColorStop(0,'rgba(250,220,157,.48)');glow.addColorStop(1,'rgba(250,220,157,0)');ctx.fillStyle=glow;ctx.fillRect(0,0,W,H*.62);
    ctx.fillStyle='#182a2c';ctx.beginPath();ctx.moveTo(0,H*.25);ctx.quadraticCurveTo(W*.5,H*.04,W,H*.25);ctx.lineTo(W,H*.55);ctx.quadraticCurveTo(W*.5,H*.36,0,H*.55);ctx.closePath();ctx.fill();
    const tiers=[['#314340',.285,.325],['#394a43',.34,.38],['#263a38',.395,.435],['#405047',.45,.49]];
    for(const [color,y1,y2] of tiers){ctx.fillStyle=color;ctx.beginPath();ctx.moveTo(0,H*y1);ctx.quadraticCurveTo(W*.5,H*(y1-.17),W,H*y1);ctx.lineTo(W,H*y2);ctx.quadraticCurveTo(W*.5,H*(y2-.17),0,H*y2);ctx.closePath();ctx.fill();}
    for(const c of crowd){ctx.globalAlpha=c.a;ctx.fillStyle=c.c;ctx.fillRect(c.x,c.y,1.5,c.s+1)}ctx.globalAlpha=1;
    for(const x of [W*.12,W*.88]){ctx.strokeStyle='#253535';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(x,H*.38);ctx.lineTo(x+(x<W/2?-14:14),H*.09);ctx.stroke();ctx.fillStyle='#f9edc3';for(let i=0;i<5;i++){ctx.shadowColor='#fff1be';ctx.shadowBlur=9;ctx.fillRect(x-8+i*4,H*.085,2,5)}ctx.shadowBlur=0}
    const grass=ctx.createLinearGradient(0,H*.45,0,H);grass.addColorStop(0,'#4e704b');grass.addColorStop(.35,'#477247');grass.addColorStop(1,'#253e31');ctx.fillStyle=grass;ctx.fillRect(0,H*.46,W,H*.54);
    for(let i=0;i<5;i++){ctx.fillStyle=i%2?'rgba(207,220,143,.035)':'rgba(6,23,17,.045)';ctx.beginPath();ctx.ellipse(W*.5,H*.87,W*(.18+i*.105),H*(.13+i*.07),0,Math.PI,Math.PI*2);ctx.fill()}
    ctx.strokeStyle='rgba(226,224,184,.8)';ctx.lineWidth=2;ctx.beginPath();ctx.ellipse(W*.5,H*.59,W*.6,H*.18,0,Math.PI,Math.PI*2);ctx.stroke();
    const sy=H*.49;ctx.fillStyle='#d5dfc2';ctx.fillRect(0,sy,W,2);ctx.fillStyle='#31453d';ctx.fillRect(0,sy+3,W,8);ctx.fillStyle='#d4ec84';ctx.font=`700 ${Math.max(7,W*.009)}px DM Sans`;ctx.textAlign='center';ctx.fillText('BOUNDARY  •  PLAY WITH FREEDOM  •  BOUNDARY',W*.5,sy+11);
  }
  function drawPitch(){
    poly([[-2.25,0,50],[2.25,0,50],[2.15,0,2.4],[-2.15,0,2.4]],'#b7a982');
    poly([[-1.55,0,49],[1.55,0,49],[1.47,0,2.5],[-1.47,0,2.5]],'#bcae8c');
    poly([[-1.05,0,45],[1.05,0,45],[.93,0,5],[-.93,0,5]],'#c5b794');
    for(let z=8;z<44;z+=3.8)line([-1.0,0.008,z],[1.0,0.008,z],'rgba(91,83,60,.11)',1);
    line([-1.3,0.02,4.1],[1.3,0.02,4.1],'rgba(255,249,225,.93)',2);
    line([-1.26,0.02,5.1],[1.26,0.02,5.1],'rgba(255,249,225,.72)',1.5);
    line([-1.3,0.02,41.5],[1.3,0.02,41.5],'rgba(255,249,225,.84)',1.5);
    for(const x of [-.9,-.6,.6,.9])line([x,0.025,4.1],[x,0.025,5.1],'rgba(255,249,225,.9)',1.4);
    drawStumps(0,3.8,.78,false); drawStumps(0,41.2,.72,true);
  }
  function drawStumps(x,z,height,far){
    for(let i=-1;i<=1;i++){line([x+i*.18,0,z],[x+i*.18,height,z],far?'#e1ddc2':'#efe9d4',far?1.2:2.2);const p=proj(x+i*.18,height,z);ctx.fillStyle='#ece6d0';ctx.beginPath();ctx.arc(p.x,p.y,Math.max(1.3,p.f*.012),0,Math.PI*2);ctx.fill()}
    line([x-.25,height,z],[x+.25,height,z],'#e9e2c9',far?1:1.6);
  }
  function drawPerson(x,z,scale=1,kit='#e9e4d4',pose=0){
    const g=proj(x,0,z),s=g.f*scale*.43;
    ctx.fillStyle='rgba(8,19,15,.3)';ctx.beginPath();ctx.ellipse(g.x,g.y,s*.9,s*.21,0,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle='#24342f';ctx.lineWidth=Math.max(1.4,s*.18);ctx.lineCap='round';ctx.beginPath();ctx.moveTo(g.x-s*.12,g.y-s*.1);ctx.lineTo(g.x-s*.23-pose*s*.1,g.y-s*.72);ctx.moveTo(g.x+s*.12,g.y-s*.1);ctx.lineTo(g.x+s*.2+pose*s*.12,g.y-s*.69);ctx.stroke();
    ctx.fillStyle=kit;ctx.beginPath();ctx.ellipse(g.x,g.y-s*.86,s*.34,s*.4,0,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle=kit;ctx.lineWidth=Math.max(1.3,s*.15);ctx.beginPath();ctx.moveTo(g.x-s*.3,g.y-s*.99);ctx.lineTo(g.x-s*.5-pose*s*.25,g.y-s*.52);ctx.moveTo(g.x+s*.3,g.y-s*.99);ctx.lineTo(g.x+s*.5+pose*s*.25,g.y-s*.58);ctx.stroke();
    ctx.fillStyle='#d8a880';ctx.beginPath();ctx.arc(g.x,g.y-s*1.34,s*.18,0,Math.PI*2);ctx.fill();
  }
  function drawFielders(t){
    const people=[[-8,17,.8,'#d4ddd0'],[8,19,.78,'#ded8c4'],[-11,31,.7,'#c6d6c6'],[11,32,.7,'#e1d7bc'],[-5.5,26,.72,'#e0e5d7'],[5.7,27,.73,'#d6dfd3']];
    people.forEach((p,i)=>drawPerson(p[0],p[1],p[2],p[3],Math.sin(t*1.2+i)*.3));drawPerson(.3,40,.75,'#bdc9bc',Math.sin(t*2)*.15);
  }
  function drawBallAt(x,y,z,radius=1){
    const p=proj(x,y,z),r=Math.max(2,p.f*.026*radius);
    if(phase==='delivery'&&ball&&z<26){ctx.strokeStyle=`rgba(255,244,218,${Math.min(.4,(26-z)/35)})`;ctx.lineWidth=r*.45;ctx.beginPath();ctx.moveTo(p.x,p.y-r*2.7);ctx.lineTo(p.x,p.y-r*.5);ctx.stroke()}
    const grad=ctx.createRadialGradient(p.x-r*.3,p.y-r*.35,r*.1,p.x,p.y,r);grad.addColorStop(0,'#fffdf4');grad.addColorStop(.72,'#e9e0ca');grad.addColorStop(1,'#a94b3a');ctx.fillStyle=grad;ctx.beginPath();ctx.arc(p.x,p.y,r,0,Math.PI*2);ctx.fill();
    ctx.save();ctx.translate(p.x,p.y);ctx.rotate(.55);ctx.strokeStyle='#bb5342';ctx.lineWidth=Math.max(.6,r*.12);ctx.beginPath();ctx.arc(0,0,r*.75,-1.2,1.2);ctx.stroke();ctx.restore();
  }
  function drawBat(t){
    const active=swingTime>0, progress=active?1-swingTime/.48:0;
    const angle=active?-.35-Math.sin(Math.min(1,progress)*Math.PI)*1.22:-.2;
    const pivotX=W*.79,pivotY=H*.91;
    // Forearms and gloves, anchored to the bottom of the first-person view.
    ctx.save();ctx.lineCap='round';ctx.lineJoin='round';
    ctx.strokeStyle='#c8916d';ctx.lineWidth=Math.max(15,W*.026);ctx.beginPath();ctx.moveTo(W*.94,H*1.04);ctx.lineTo(W*.78,H*.83);ctx.stroke();
    ctx.strokeStyle='#d5a17b';ctx.lineWidth=Math.max(14,W*.025);ctx.beginPath();ctx.moveTo(W*.57,H*1.05);ctx.lineTo(W*.75,H*.84);ctx.stroke();
    ctx.fillStyle='#eee8db';ctx.beginPath();ctx.ellipse(W*.77,H*.825,Math.max(14,W*.022),Math.max(9,H*.018),-.6,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.ellipse(W*.745,H*.85,Math.max(13,W*.02),Math.max(8,H*.017),-.6,0,Math.PI*2);ctx.fill();
    ctx.translate(pivotX,pivotY);ctx.rotate(angle);
    // willow blade with a dark edge, handle and grip
    ctx.shadowColor='rgba(0,0,0,.4)';ctx.shadowBlur=15;ctx.shadowOffsetX=5;ctx.shadowOffsetY=6;
    ctx.fillStyle='#725537';ctx.beginPath();ctx.moveTo(-14,-7);ctx.lineTo(-8,-27);ctx.lineTo(-14,-180);ctx.quadraticCurveTo(-11,-192,7,-191);ctx.lineTo(27,-187);ctx.lineTo(37,-34);ctx.quadraticCurveTo(36,-17,22,-11);ctx.closePath();ctx.fill();
    const wood=ctx.createLinearGradient(-10,0,34,0);wood.addColorStop(0,'#c49b58');wood.addColorStop(.4,'#e1c27d');wood.addColorStop(.72,'#c99f61');wood.addColorStop(1,'#9b754a');ctx.fillStyle=wood;ctx.beginPath();ctx.moveTo(-10,-8);ctx.lineTo(-5,-28);ctx.lineTo(-9,-176);ctx.quadraticCurveTo(-8,-184,5,-184);ctx.lineTo(23,-181);ctx.lineTo(29,-35);ctx.quadraticCurveTo(30,-18,18,-12);ctx.closePath();ctx.fill();
    ctx.shadowBlur=0;ctx.shadowOffsetX=0;ctx.shadowOffsetY=0;
    ctx.fillStyle='#392d28';ctx.fillRect(-3,-266,24,80);ctx.strokeStyle='#a89a81';ctx.lineWidth=2;for(let i=0;i<6;i++){ctx.beginPath();ctx.moveTo(-2,-258+i*12);ctx.lineTo(20,-250+i*12);ctx.stroke()}
    ctx.fillStyle='rgba(255,255,255,.16)';ctx.beginPath();ctx.moveTo(2,-175);ctx.lineTo(7,-32);ctx.lineTo(10,-32);ctx.lineTo(7,-176);ctx.fill();ctx.restore();
    if(active&&ball&&phase==='delivery'){ctx.globalAlpha=.12+Math.sin(t*35)*.08;ctx.strokeStyle='#f8ffbc';ctx.lineWidth=10;ctx.beginPath();ctx.arc(W*.7,H*.65,75,-.4,1.3);ctx.stroke();ctx.globalAlpha=1}
  }
  function drawAim(){
    if(!running||phase!=='delivery')return;
    const x=W*.5+aim.x*W*.27,y=H*.48+aim.y*H*.19,r=isTouch?12:9;
    ctx.save();ctx.strokeStyle='rgba(226,246,170,.82)';ctx.lineWidth=1;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.moveTo(x-r-5,y);ctx.lineTo(x-r+2,y);ctx.moveTo(x+r-2,y);ctx.lineTo(x+r+5,y);ctx.moveTo(x,y-r-5);ctx.lineTo(x,y-r+2);ctx.moveTo(x,y+r-2);ctx.lineTo(x,y+r+5);ctx.stroke();ctx.fillStyle='#e7f6a0';ctx.beginPath();ctx.arc(x,y,1.5,0,Math.PI*2);ctx.fill();ctx.restore();
  }
  function drawScene(t){
    ctx.clearRect(0,0,W,H);drawBackground(t);drawPitch();drawFielders(t);
    if(ball){
      if(phase==='delivery'){
        const p=ball,z=p.z;const x=p.x+Math.sin(t*2.7+deliveryNo)*.04;
        const shadow=proj(x,0,z);ctx.fillStyle=`rgba(16,19,12,${Math.max(.09,.31-z/180)})`;ctx.beginPath();ctx.ellipse(shadow.x,shadow.y,Math.max(2,shadow.f*.05),Math.max(1,shadow.f*.015),0,0,Math.PI*2);ctx.fill();drawBallAt(x,p.y,z,1);
      }else if(phase==='flight'){
        const sh=proj(ball.x,0,ball.z);ctx.fillStyle='rgba(12,18,12,.18)';ctx.beginPath();ctx.ellipse(sh.x,sh.y,Math.max(3,sh.f*.05),Math.max(2,sh.f*.015),0,0,Math.PI*2);ctx.fill();drawBallAt(ball.x,ball.y,ball.z,1);
      }
    }
    drawAim();drawBat(t);
  }
  function updateScore(){ui.runs.textContent=runs;ui.wickets.textContent=wickets;ui.overs.textContent=`${Math.floor(balls/6)}.${balls%6}`;ui.target.textContent=Math.max(0,target-runs);ui.track.innerHTML='';const inOver=balls%6;for(let i=0;i<6;i++){const dot=document.createElement('span');dot.textContent=i<inOver?(last==='W'&&i===inOver-1?'×':'•'):'';if(i<inOver)dot.className=last==='W'&&i===inOver-1?'wicket':'played';ui.track.appendChild(dot)}
  }
  function showCallout(text,duration=1){ui.calloutText.textContent=text;ui.callout.classList.add('show');calloutTime=duration}
  function toast(text,color='#e5fa8e',duration=1.05){ui.toast.textContent=text;ui.toast.style.color=color;ui.toast.classList.add('show');toastTime=duration}
  function cueSound(type){if(!soundOn)return;try{audio=audio||new(window.AudioContext||window.webkitAudioContext)();if(audio.state==='suspended')audio.resume();const osc=audio.createOscillator(),gain=audio.createGain();osc.connect(gain);gain.connect(audio.destination);osc.type=type==='hit'?'triangle':'sine';osc.frequency.setValueAtTime(type==='hit'?180:560,audio.currentTime);osc.frequency.exponentialRampToValueAtTime(type==='hit'?70:360,audio.currentTime+.12);gain.gain.setValueAtTime(.12,audio.currentTime);gain.gain.exponentialRampToValueAtTime(.001,audio.currentTime+.15);osc.start();osc.stop(audio.currentTime+.16)}catch(e){}}
  function updateSwingUI(){const ready=phase==='delivery'&&ball;const pct=ready?Math.max(0,Math.min(100,(1-Math.abs(ball.z-5.2)/8)*100)):0;ui.power.style.width=pct+'%';ui.powerLabel.textContent=!ready?'READY':pct>75?'IN THE ZONE':pct>25?'WATCH IT':'WAIT';ui.hint.style.opacity=ready?'1':'.2'}
  function beginDelivery(){
    if(!running)return;phase='delivery';phaseTime=0;swingSpent=false;swingTime=0;hitState=null;
    const side=(Math.random()-.5)*1.2;ball={z:43.5,x:side,y:.12,speed:Math.random()*1.5+17.5,seed:Math.random()*8};
    showCallout(['WATCH THE LINE','HERE IT COMES','READ THE BOWLER'][Math.floor(Math.random()*3)],.95);
  }
  function newGame(){runs=0;wickets=0;balls=0;deliveryNo=0;last='';over=false;running=true;phase='ready';phaseTime=0;ball=null;swingSpent=false;swingTime=0;ui.status.textContent='PRACTICE MATCH';ui.end.classList.add('hidden');ui.start.classList.add('hidden');updateScore();showCallout('FIND YOUR RHYTHM',1.25)}
  function finishGame(){running=false;phase='end';over=true;ui.status.textContent=runs>=target?'MATCH WON':'INNINGS OVER';$('endTitle').textContent=runs>=target?'WHAT A KNOCK.':runs>=16?'A SOLID INNINGS.':'BACK FOR MORE?';$('endCopy').textContent=runs>=target?'You chased it down in style. The crowd is on its feet.':`You made ${runs} from ${balls} balls. Every innings starts somewhere.`;$('finalRuns').textContent=runs;ui.end.classList.remove('hidden')}
  function swing(){
    if(!running||phase!=='delivery'||swingTime>0)return;
    swingTime=.48;ui.hint.style.opacity='.18';cueSound('swing');
    // If already in the hitting window, resolve on this swing; otherwise it can connect as it arrives.
    if(ball&&ball.z<=8.4&&ball.z>=2.45&&!swingSpent)connect();
  }
  function connect(){
    if(swingSpent||!ball)return;swingSpent=true;
    const timing=Math.max(0,1-Math.abs(ball.z-5.05)/3.65);
    const lineQuality=Math.max(0,1-Math.abs(ball.x)/1.45);
    const quality=timing*.76+lineQuality*.24;
    const aimX=aim.x, aimY=aim.y;
    let score=0,label='EDGED!',tone='#f0d48b';
    if(quality>.82){score=aimY<-.28?6:6;label=aimY<-.28?'SIX!':'OUT OF THE PARK!';tone='#e8ff8d'}
    else if(quality>.61){score=Math.abs(aimX)>.76?3:4;label=score===4?'FOUR!':'THREE!';tone='#e8ff8d'}
    else if(quality>.39){score=Math.abs(aimX)>.82?2:1;label=score===2?'TWO RUNS':'ONE RUN';tone='#f1e3aa'}
    else {score=0;label='BEATEN!';tone='#f4c18b'}
    // Imperfect contact can be caught; keep the game generous and readable.
    if(score>=4&&quality<.69&&Math.random()<.08){score=0;label='CAUGHT!';tone='#f1a187';wickets++;last='W'}
    else last='R';
    runs+=score;balls++;deliveryNo++;updateScore();toast(label,tone,1.1);cueSound('hit');ui.flash.classList.remove('pop');void ui.flash.offsetWidth;ui.flash.classList.add('pop');
    const travel=score===6?34:score===4?25:score===3?19:score===2?14:score===1?10:7;
    phase='flight';phaseTime=0;ball={x:0,y:.55,z:4.7,vx:(aimX*.7+(Math.random()-.5)*.24)*.72,vy:score>=4?8.2:score>=2?5:3.4,vz:travel*.72,speed:0};
    ui.power.style.width=(quality*100)+'%';ui.powerLabel.textContent=score>=4?'PERFECT':'CONTACT';
    if(runs>=target||balls>=12||wickets>=4)over=true;
  }
  function resolveMiss(){
    if(phase!=='delivery')return;
    const gotWicket=Math.abs(ball.x)<.52&&Math.random()<.72;
    balls++;deliveryNo++;last=gotWicket?'W':'•';if(gotWicket){wickets++;toast('BOWLED!','#f2a08a',1.15);cueSound('wicket')}else{toast('DOT BALL','#e6e4c9',.85)}
    updateScore();phase='flight';phaseTime=0;
    ball={x:ball.x,y:.25,z:2.6,vx:0,vy:0,vz:0};if(runs>=target||balls>=12||wickets>=4)over=true;
  }
  function onPointerMove(e){const r=canvas.getBoundingClientRect();const nx=(e.clientX-r.left)/r.width,ny=(e.clientY-r.top)/r.height;pointer={x:e.clientX,y:e.clientY};aim.x=Math.max(-1,Math.min(1,(nx-.5)*2));aim.y=Math.max(-1,Math.min(1,(ny-.49)*2));if(e.pointerType==='touch')isTouch=true;}
  canvas.addEventListener('pointermove',onPointerMove);
  let touchStart=null;
  canvas.addEventListener('pointerdown',e=>{if(!running)return;if(e.pointerType==='mouse'){swing();return}if(e.pointerType==='touch'){isTouch=true;touchStart={x:e.clientX,y:e.clientY};canvas.setPointerCapture?.(e.pointerId)}});
  canvas.addEventListener('pointerup',e=>{if(e.pointerType==='touch'&&touchStart){const d=Math.hypot(e.clientX-touchStart.x,e.clientY-touchStart.y);if(d<18)swing();touchStart=null}});
  canvas.addEventListener('contextmenu',e=>e.preventDefault());
  $('swingBtn').addEventListener('pointerdown',e=>{e.preventDefault();e.stopPropagation();swing()});
  $('startBtn').addEventListener('click',newGame);$('againBtn').addEventListener('click',newGame);
  $('soundBtn').addEventListener('click',()=>{soundOn=!soundOn;$('soundBtn').textContent=soundOn?'♫':'♪';$('soundBtn').style.color=soundOn?'#d9f36b':'';if(soundOn)cueSound('swing')});
  window.addEventListener('keydown',e=>{if(e.code==='Space'){e.preventDefault();if(!running&&!over)newGame();else swing()}if(e.code==='Enter'&&(!running||over))newGame()});
  function frame(now){
    const dt=Math.min(.04,(now-last)/1000||0);last=now;elapsed+=dt;
    if(running){
      phaseTime+=dt;
      if(swingTime>0)swingTime=Math.max(0,swingTime-dt);
      if(calloutTime>0){calloutTime-=dt;if(calloutTime<=0)ui.callout.classList.remove('show')}
      if(toastTime>0){toastTime-=dt;if(toastTime<=0)ui.toast.classList.remove('show')}
      if(phase==='ready'&&phaseTime>1.45)beginDelivery();
      if(phase==='delivery'&&ball){
        ball.z-=ball.speed*dt;
        const b=ball.z;
        ball.x+=(0-ball.x)*Math.min(1,dt*.72);
        if(b>14)ball.y=.12+Math.sin(elapsed*8+ball.seed)*.025;
        else{const k=Math.max(0,1-Math.abs(b-10.5)/4.2);ball.y=.12+Math.sin(k*Math.PI/2)*1.1}
        if(swingTime>0&&ball.z<=8.4&&ball.z>=2.45&&!swingSpent)connect();
        if(phase==='delivery'&&ball.z<=2.35)resolveMiss();
      }
      if(phase==='flight'&&ball){
        if(ball.vz>0){
          ball.x+=ball.vx*dt;ball.z+=ball.vz*dt;ball.y+=ball.vy*dt;ball.vy-=11.5*dt;
          if(ball.y<.2){ball.y=.2;ball.vy*= -.45;if(Math.abs(ball.vy)<1.2)ball.vy=0}
        }
        if(phaseTime>1.15){
          ball=null;
          if(over)finishGame();
          else{phase='ready';phaseTime=0;showCallout(balls%6===0&&balls>0?'CHANGE OF ENDS':'NEXT BALL',.8)}
        }
      }
      updateSwingUI();
    }else if(calloutTime>0){calloutTime-=dt;if(calloutTime<=0)ui.callout.classList.remove('show')}
    drawScene(elapsed);requestAnimationFrame(frame);
  }
  $('endTitle').textContent='WHAT A KNOCK.';requestAnimationFrame(frame);
})();
