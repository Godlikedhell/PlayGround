(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const fl="187",Ju=0,jl=1,Qu=2,Ns=1,ju=2,Ps=3,vi=0,Ke=1,hn=2,os=0,Us=1,Ii=2,tc=3,ec=4,td=5,rs=100,ed=101,nd=102,id=103,sd=104,rd=200,ad=201,od=202,ld=203,Eh=204,wh=205,cd=206,hd=207,ud=208,dd=209,fd=210,pd=211,md=212,gd=213,_d=214,uo=0,fo=1,po=2,zs=3,mo=4,go=5,_o=6,vo=7,Th=0,vd=1,xd=2,ni=0,Ah=1,Rh=2,Ch=3,pl=4,Ph=5,Lh=6,Ih=7,Dh=300,hs=301,ks=302,Ta=303,Aa=304,Gs=1e3,jn=1001,xo=1002,We=1003,Md=1004,hr=1005,un=1006,Ra=1007,mi=1008,gn=1009,Nh=1010,Uh=1011,Hs=1012,ml=1013,Gn=1014,Bn=1015,Hn=1016,gl=1017,_l=1018,us=1020,Fh=35902,Oh=35899,Bh=1021,zh=1022,zn=1023,xi=1026,gi=1027,kh=1028,vl=1029,Fi=1030,xl=1031,Ml=1033,Xr=33776,qr=33777,Yr=33778,$r=33779,Mo=35840,So=35841,yo=35842,bo=35843,Eo=36196,wo=37492,To=37496,Ao=37488,Ro=37489,Jr=37490,Co=37491,Po=37808,Lo=37809,Io=37810,Do=37811,No=37812,Uo=37813,Fo=37814,Oo=37815,Bo=37816,zo=37817,ko=37818,Go=37819,Ho=37820,Vo=37821,Wo=36492,Xo=36494,qo=36495,Yo=36283,$o=36284,Qr=36285,Zo=36286,Sd=3200,Ko=0,yd=1,pi="",He="srgb",jr="srgb-linear",ta="linear",me="srgb",Ca=7680,bd=519,Ed=512,wd=513,Td=514,Gh=515,Ad=516,Rd=517,Hh=518,Vh=519,Wh=35044,nc="300 es",Cn=2e3,Vs=2001;function Cd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ea(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pd(){const i=ea("canvas");return i.style.display="block",i}const ic={};function na(...i){const t="THREE."+i.shift();console.log(t,...i)}function Xh(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ht(...i){i=Xh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function le(...i){i=Xh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ls(...i){const t=i.join(" ");t in ic||(ic[t]=!0,Ht(...i))}function Ld(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Id={[uo]:uo,[po]:_o,[mo]:mo,[zs]:go,[fo]:fo,[_o]:po,[vo]:vo,[go]:zs};class zi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zr=Math.PI/180,Jo=180/Math.PI;function bi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function ee(i,t,e){return Math.max(t,Math.min(e,i))}function Dd(i,t){return(i%t+t)%t}function Pa(i,t,e){return(1-e)*i+e*t}function Nd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ga(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function qh(i,t){if(t.constructor===Float32Array)return i;const e=ga(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Yh(i,t){if(t.constructor===Float32Array)return i;const e=ga(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const Bl=class Bl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Bl.prototype.isVector2=!0;let at=Bl;class Ze{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],u=r[a+1],g=r[a+2],v=r[a+3];if(f!==v||c!==d||l!==u||h!==g){let p=c*d+l*u+h*g+f*v;p<0&&(d=-d,u=-u,g=-g,v=-v,p=-p);let m=1-o;if(p<.9995){const x=Math.acos(p),b=Math.sin(x);m=Math.sin(m*x)/b,o=Math.sin(o*x)/b,c=c*m+d*o,l=l*m+u*o,h=h*m+g*o,f=f*m+v*o}else{c=c*m+d*o,l=l*m+u*o,h=h*m+g*o,f=f*m+v*o;const x=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=x,l*=x,h*=x,f*=x}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[a],d=r[a+1],u=r[a+2],g=r[a+3];return t[e]=o*g+h*f+c*u-l*d,t[e+1]=c*g+h*d+l*f-o*u,t[e+2]=l*g+h*u+o*d-c*f,t[e+3]=h*g-o*f-c*d-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),f=o(r/2),d=c(n/2),u=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*f+l*u*g,this._y=l*u*f-d*h*g,this._z=l*h*g+d*u*f,this._w=l*h*f-d*u*g;break;case"YXZ":this._x=d*h*f+l*u*g,this._y=l*u*f-d*h*g,this._z=l*h*g-d*u*f,this._w=l*h*f+d*u*g;break;case"ZXY":this._x=d*h*f-l*u*g,this._y=l*u*f+d*h*g,this._z=l*h*g+d*u*f,this._w=l*h*f-d*u*g;break;case"ZYX":this._x=d*h*f-l*u*g,this._y=l*u*f+d*h*g,this._z=l*h*g-d*u*f,this._w=l*h*f+d*u*g;break;case"YZX":this._x=d*h*f+l*u*g,this._y=l*u*f+d*h*g,this._z=l*h*g-d*u*f,this._w=l*h*f-d*u*g;break;case"XZY":this._x=d*h*f-l*u*g,this._y=l*u*f-d*h*g,this._z=l*h*g+d*u*f,this._w=l*h*f+d*u*g;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],d=n+o+f;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-s)*u}else if(n>o&&n>f){const u=2*Math.sqrt(1+n-o-f);this._w=(h-c)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+l)/u}else if(o>f){const u=2*Math.sqrt(1+o-n-f);this._w=(r-l)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(c+h)/u}else{const u=2*Math.sqrt(1+f-n-o);this._w=(a-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const zl=class zl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return La.copy(this).projectOnVector(t),this.sub(La)}reflect(t){return this.sub(La.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zl.prototype.isVector3=!0;let R=zl;const La=new R,sc=new Ze,kl=class kl{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],u=n[5],g=n[8],v=s[0],p=s[3],m=s[6],x=s[1],b=s[4],M=s[7],T=s[2],E=s[5],_=s[8];return r[0]=a*v+o*x+c*T,r[3]=a*p+o*b+c*E,r[6]=a*m+o*M+c*_,r[1]=l*v+h*x+f*T,r[4]=l*p+h*b+f*E,r[7]=l*m+h*M+f*_,r[2]=d*v+u*x+g*T,r[5]=d*p+u*b+g*E,r[8]=d*m+u*M+g*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,d=o*c-h*r,u=l*r-a*c,g=e*f+n*d+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=f*v,t[1]=(s*l-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=u*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ia.makeScale(t,e)),this}rotate(t){return ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ia.makeRotation(-t)),this}translate(t,e){return ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ia.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};kl.prototype.isMatrix3=!0;let Xt=kl;const Ia=new Xt,rc=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ac=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ud(){const i={enabled:!0,workingColorSpace:jr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===me&&(s.r=ii(s.r),s.g=ii(s.g),s.b=ii(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===me&&(s.r=cs(s.r),s.g=cs(s.g),s.b=cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pi?ta:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[jr]:{primaries:t,whitePoint:n,transfer:ta,toXYZ:rc,fromXYZ:ac,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:n,transfer:me,toXYZ:rc,fromXYZ:ac,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),i}const oe=Ud();function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Gi;class Fd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Gi===void 0&&(Gi=ea("canvas")),Gi.width=t.width,Gi.height=t.height;const s=Gi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Gi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ea("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ii(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ii(e[n]/255)*255):e[n]=ii(e[n]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Od=0;class Sl{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=bi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Da(s[a].image)):r.push(Da(s[a]))}else r=Da(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}let Bd=0;const Na=new R;class Je extends zi{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,n=jn,s=jn,r=un,a=mi,o=zn,c=gn,l=Je.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=bi(),this.name="",this.source=new Sl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Na).x}get height(){return this.source.getSize(Na).y}get depth(){return this.source.getSize(Na).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gs:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case xo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gs:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case xo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=Dh;Je.DEFAULT_ANISOTROPY=1;const Gl=class Gl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],f=c[8],d=c[1],u=c[5],g=c[9],v=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+u+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,M=(u+1)/2,T=(m+1)/2,E=(h+d)/4,_=(f+v)/4,w=(g+p)/4;return b>M&&b>T?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=E/n,r=_/n):M>T?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=w/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=_/r,s=w/r),this.set(n,s,r,e),this}let x=Math.sqrt((p-g)*(p-g)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(f-v)/x,this.z=(d-h)/x,this.w=Math.acos((l+u+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gl.prototype.isVector4=!0;let be=Gl;class zd extends zi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Je({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Sl(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends zd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class $h extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class kd extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const ma=class ma{constructor(t,e,n,s,r,a,o,c,l,h,f,d,u,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,f,d,u,g,v,p)}set(t,e,n,s,r,a,o,c,l,h,f,d,u,g,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=f,m[14]=d,m[3]=u,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ma().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Hi.setFromMatrixColumn(t,0).length(),r=1/Hi.setFromMatrixColumn(t,1).length(),a=1/Hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=a*h,u=a*f,g=o*h,v=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=u+g*l,e[5]=d-v*l,e[9]=-o*c,e[2]=v-d*l,e[6]=g+u*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,u=c*f,g=l*h,v=l*f;e[0]=d+v*o,e[4]=g*o-u,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=u*o-g,e[6]=v+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,u=c*f,g=l*h,v=l*f;e[0]=d-v*o,e[4]=-a*f,e[8]=g+u*o,e[1]=u+g*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,u=a*f,g=o*h,v=o*f;e[0]=c*h,e[4]=g*l-u,e[8]=d*l+v,e[1]=c*f,e[5]=v*l+d,e[9]=u*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,u=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-d*f,e[8]=g*f+u,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=u*f+g,e[10]=d-v*f}else if(t.order==="XZY"){const d=a*c,u=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=d*f+v,e[5]=a*h,e[9]=u*f-g,e[2]=g*f-u,e[6]=o*h,e[10]=v*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gd,t,Hd)}lookAt(t,e,n){const s=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),ci.crossVectors(n,dn),ci.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),ci.crossVectors(n,dn)),ci.normalize(),ur.crossVectors(dn,ci),s[0]=ci.x,s[4]=ur.x,s[8]=dn.x,s[1]=ci.y,s[5]=ur.y,s[9]=dn.y,s[2]=ci.z,s[6]=ur.z,s[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],u=n[13],g=n[2],v=n[6],p=n[10],m=n[14],x=n[3],b=n[7],M=n[11],T=n[15],E=s[0],_=s[4],w=s[8],U=s[12],C=s[1],D=s[5],F=s[9],W=s[13],I=s[2],G=s[6],Y=s[10],B=s[14],it=s[3],X=s[7],j=s[11],nt=s[15];return r[0]=a*E+o*C+c*I+l*it,r[4]=a*_+o*D+c*G+l*X,r[8]=a*w+o*F+c*Y+l*j,r[12]=a*U+o*W+c*B+l*nt,r[1]=h*E+f*C+d*I+u*it,r[5]=h*_+f*D+d*G+u*X,r[9]=h*w+f*F+d*Y+u*j,r[13]=h*U+f*W+d*B+u*nt,r[2]=g*E+v*C+p*I+m*it,r[6]=g*_+v*D+p*G+m*X,r[10]=g*w+v*F+p*Y+m*j,r[14]=g*U+v*W+p*B+m*nt,r[3]=x*E+b*C+M*I+T*it,r[7]=x*_+b*D+M*G+T*X,r[11]=x*w+b*F+M*Y+T*j,r[15]=x*U+b*W+M*B+T*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],d=t[10],u=t[14],g=t[3],v=t[7],p=t[11],m=t[15],x=c*u-l*d,b=o*u-l*f,M=o*d-c*f,T=a*u-l*h,E=a*d-c*h,_=a*f-o*h;return e*(v*x-p*b+m*M)-n*(g*x-p*T+m*E)+s*(g*b-v*T+m*_)-r*(g*M-v*E+p*_)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],d=t[10],u=t[11],g=t[12],v=t[13],p=t[14],m=t[15],x=e*o-n*a,b=e*c-s*a,M=e*l-r*a,T=n*c-s*o,E=n*l-r*o,_=s*l-r*c,w=h*v-f*g,U=h*p-d*g,C=h*m-u*g,D=f*p-d*v,F=f*m-u*v,W=d*m-u*p,I=x*W-b*F+M*D+T*C-E*U+_*w;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/I;return t[0]=(o*W-c*F+l*D)*G,t[1]=(s*F-n*W-r*D)*G,t[2]=(v*_-p*E+m*T)*G,t[3]=(d*E-f*_-u*T)*G,t[4]=(c*C-a*W-l*U)*G,t[5]=(e*W-s*C+r*U)*G,t[6]=(p*M-g*_-m*b)*G,t[7]=(h*_-d*M+u*b)*G,t[8]=(a*F-o*C+l*w)*G,t[9]=(n*C-e*F-r*w)*G,t[10]=(g*E-v*M+m*x)*G,t[11]=(f*M-h*E-u*x)*G,t[12]=(o*U-a*D-c*w)*G,t[13]=(e*D-n*U+s*w)*G,t[14]=(v*b-g*T-p*x)*G,t[15]=(h*T-f*b+d*x)*G,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,f=o+o,d=r*l,u=r*h,g=r*f,v=a*h,p=a*f,m=o*f,x=c*l,b=c*h,M=c*f,T=n.x,E=n.y,_=n.z;return s[0]=(1-(v+m))*T,s[1]=(u+M)*T,s[2]=(g-b)*T,s[3]=0,s[4]=(u-M)*E,s[5]=(1-(d+m))*E,s[6]=(p+x)*E,s[7]=0,s[8]=(g+b)*_,s[9]=(p-x)*_,s[10]=(1-(d+v))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Hi.set(s[0],s[1],s[2]).length();const o=Hi.set(s[4],s[5],s[6]).length(),c=Hi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),En.copy(this);const l=1/a,h=1/o,f=1/c;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=f,En.elements[9]*=f,En.elements[10]*=f,e.setFromRotationMatrix(En),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=Cn,c=!1){const l=this.elements,h=2*r/(e-t),f=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s);let g,v;if(c)g=r/(a-r),v=a*r/(a-r);else if(o===Cn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Vs)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Cn,c=!1){const l=this.elements,h=2/(e-t),f=2/(n-s),d=-(e+t)/(e-t),u=-(n+s)/(n-s);let g,v;if(c)g=1/(a-r),v=a/(a-r);else if(o===Cn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Vs)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ma.prototype.isMatrix4=!0;let ge=ma;const Hi=new R,En=new ge,Gd=new R(0,0,0),Hd=new R(1,1,1),ci=new R,ur=new R,dn=new R,oc=new ge,lc=new Ze;class Mi{constructor(t=0,e=0,n=0,s=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ee(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ee(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ee(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return oc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(oc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lc.setFromEuler(this),this.setFromQuaternion(lc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class yl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vd=0;const cc=new R,Vi=new Ze,Xn=new ge,dr=new R,xs=new R,Wd=new R,Xd=new Ze,hc=new R(1,0,0),uc=new R(0,1,0),dc=new R(0,0,1),fc={type:"added"},qd={type:"removed"},Wi={type:"childadded",child:null},Ua={type:"childremoved",child:null};class De extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new R,e=new Mi,n=new Ze,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new Xt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(hc,t)}rotateY(t){return this.rotateOnAxis(uc,t)}rotateZ(t){return this.rotateOnAxis(dc,t)}translateOnAxis(t,e){return cc.copy(t).applyQuaternion(this.quaternion),this.position.add(cc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hc,t)}translateY(t){return this.translateOnAxis(uc,t)}translateZ(t){return this.translateOnAxis(dc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?dr.copy(t):dr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(xs,dr,this.up):Xn.lookAt(dr,xs,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(Xn),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fc),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null):le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qd),Ua.child=t,this.dispatchEvent(Ua),Ua.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fc),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,Wd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,Xd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),u=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}De.DEFAULT_UP=new R(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ie extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yd={type:"move"};class Fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),m=this._getHandJoint(l,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,g=.005;l.inputState.pinching&&d>u+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=u-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},fr={h:0,s:0,l:0};function Oa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=Dd(t,1),e=ee(e,0,1),n=ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Oa(a,r,t+1/3),this.g=Oa(a,r,t),this.b=Oa(a,r,t-1/3)}return oe.colorSpaceToWorking(this,s),this}setStyle(t,e=He){function n(r){r!==void 0&&parseFloat(r)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){const n=Zh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return oe.workingToColorSpace($e.copy(this),t),Math.round(ee($e.r*255,0,255))*65536+Math.round(ee($e.g*255,0,255))*256+Math.round(ee($e.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace($e.copy(this),e);const n=$e.r,s=$e.g,r=$e.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=He){oe.workingToColorSpace($e.copy(this),t);const e=$e.r,n=$e.g,s=$e.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(fr);const n=Pa(hi.h,fr.h,e),s=Pa(hi.s,fr.s,e),r=Pa(hi.l,fr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $e=new Wt;Wt.NAMES=Zh;class bl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Wt(t),this.near=e,this.far=n}clone(){return new bl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $d extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const wn=new R,qn=new R,Ba=new R,Yn=new R,Xi=new R,qi=new R,pc=new R,za=new R,ka=new R,Ga=new R,Ha=new be,Va=new be,Wa=new be;class _n{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),wn.subVectors(t,e),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){wn.subVectors(s,e),qn.subVectors(n,e),Ba.subVectors(t,e);const a=wn.dot(wn),o=wn.dot(qn),c=wn.dot(Ba),l=qn.dot(qn),h=qn.dot(Ba),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,u=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Yn.x),c.addScaledVector(a,Yn.y),c.addScaledVector(o,Yn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ha.setScalar(0),Va.setScalar(0),Wa.setScalar(0),Ha.fromBufferAttribute(t,e),Va.fromBufferAttribute(t,n),Wa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ha,r.x),a.addScaledVector(Va,r.y),a.addScaledVector(Wa,r.z),a}static isFrontFacing(t,e,n,s){return wn.subVectors(n,e),qn.subVectors(t,e),wn.cross(qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),wn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return _n.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return _n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Xi.subVectors(s,n),qi.subVectors(r,n),za.subVectors(t,n);const c=Xi.dot(za),l=qi.dot(za);if(c<=0&&l<=0)return e.copy(n);ka.subVectors(t,s);const h=Xi.dot(ka),f=qi.dot(ka);if(h>=0&&f<=h)return e.copy(s);const d=c*f-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),e.copy(n).addScaledVector(Xi,a);Ga.subVectors(t,r);const u=Xi.dot(Ga),g=qi.dot(Ga);if(g>=0&&u<=g)return e.copy(r);const v=u*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(qi,o);const p=h*g-u*f;if(p<=0&&f-h>=0&&u-g>=0)return pc.subVectors(r,s),o=(f-h)/(f-h+(u-g)),e.copy(s).addScaledVector(pc,o);const m=1/(p+v+d);return a=v*m,o=d*m,e.copy(n).addScaledVector(Xi,a).addScaledVector(qi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class js{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pr.copy(n.boundingBox)),pr.applyMatrix4(t.matrixWorld),this.union(pr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ms),mr.subVectors(this.max,Ms),Yi.subVectors(t.a,Ms),$i.subVectors(t.b,Ms),Zi.subVectors(t.c,Ms),ui.subVectors($i,Yi),di.subVectors(Zi,$i),Ri.subVectors(Yi,Zi);let e=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ri.z,Ri.y,ui.z,0,-ui.x,di.z,0,-di.x,Ri.z,0,-Ri.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ri.y,Ri.x,0];return!Xa(e,Yi,$i,Zi,mr)||(e=[1,0,0,0,1,0,0,0,1],!Xa(e,Yi,$i,Zi,mr))?!1:(gr.crossVectors(ui,di),e=[gr.x,gr.y,gr.z],Xa(e,Yi,$i,Zi,mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $n=[new R,new R,new R,new R,new R,new R,new R,new R],Tn=new R,pr=new js,Yi=new R,$i=new R,Zi=new R,ui=new R,di=new R,Ri=new R,Ms=new R,mr=new R,gr=new R,Ci=new R;function Xa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ci.fromArray(i,r);const o=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),c=t.dot(Ci),l=e.dot(Ci),h=n.dot(Ci);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Le=new R,_r=new at;let Zd=0;class si extends zi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wh,this.updateRanges=[],this.gpuType=Bn,this.version=0,this._normalizationScale=t!==void 0?ga(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_r.fromBufferAttribute(this,e),_r.applyMatrix3(t),this.setXY(e,_r.x,_r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):qh(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Yh(t,this.array)}}class Kh extends si{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Jh extends si{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ce extends si{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Kd=new js,Ss=new R,qa=new R;class tr{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Kd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ss.subVectors(t,this.center);const e=Ss.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ss,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ss.copy(t.center).add(qa)),this.expandByPoint(Ss.copy(t.center).sub(qa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Jd=0;const vn=new ge,Ya=new De,Ki=new R,fn=new js,ys=new js,ke=new R;class Re extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cd(t)?Jh:Kh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return Ya.lookAt(t),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ce(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new js);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ys.setFromBufferAttribute(o),this.morphTargetsRelative?(ke.addVectors(fn.min,ys.min),fn.expandByPoint(ke),ke.addVectors(fn.max,ys.max),fn.expandByPoint(ke)):(fn.expandByPoint(ys.min),fn.expandByPoint(ys.max))}fn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ke.fromBufferAttribute(o,l),c&&(Ki.fromBufferAttribute(t,l),ke.add(Ki)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new si(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(n.count);for(let U=0;U<n.count;U++)o[U]=new R,c[U]=new R;const h=new R,f=new R,d=new R,u=new at,g=new at,v=new at,p=new R,m=new R;function x(U,C,D){l[U]=l[C]=l[D]=1,h.fromBufferAttribute(n,U),f.fromBufferAttribute(n,C),d.fromBufferAttribute(n,D),u.fromBufferAttribute(r,U),g.fromBufferAttribute(r,C),v.fromBufferAttribute(r,D),f.sub(h),d.sub(h),g.sub(u),v.sub(u);const F=1/(g.x*v.y-v.x*g.y);isFinite(F)&&(p.copy(f).multiplyScalar(v.y).addScaledVector(d,-g.y).multiplyScalar(F),m.copy(d).multiplyScalar(g.x).addScaledVector(f,-v.x).multiplyScalar(F),o[U].add(p),o[C].add(p),o[D].add(p),c[U].add(m),c[C].add(m),c[D].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let U=0,C=b.length;U<C;++U){const D=b[U],F=D.start,W=D.count;for(let I=F,G=F+W;I<G;I+=3)x(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const M=new R,T=new R,E=new R,_=new R;function w(U){E.fromBufferAttribute(s,U),_.copy(E);const C=o[U];M.copy(C),M.sub(E.multiplyScalar(E.dot(C))).normalize(),T.crossVectors(_,C);const F=T.dot(c[U])<0?-1:1;a.setXYZW(U,M.x,M.y,M.z,F)}for(let U=0,C=n.count;U<C;++U)l[U]&&w(U);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new si(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);const s=new R,r=new R,a=new R,o=new R,c=new R,l=new R,h=new R,f=new R;if(t)for(let d=0,u=t.count;d<u;d+=3){const g=t.getX(d+0),v=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,u=e.count;d<u;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,f=o.normalized,d=new l.constructor(c.length*h);let u=0,g=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?u=c[v]*o.data.stride+o.offset:u=c[v]*h;for(let m=0;m<h;m++)d[g++]=l[u++]}return new si(d,h,f)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){const d=l[h],u=t(d,n);c.push(u)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){const u=l[f];h.push(u.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],f=r[l];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wh,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=mc(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=mc(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function mc(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=bi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}const je=new R;class ia{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?ga(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){na("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new si(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ia(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){na("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):qh(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Yh(t,this.data.array)}}const $a=new R,jd=new R,tf=new Xt;class Qn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=$a.subVectors(n,e).cross(jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta($a),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||tf.getNormalMatrix(t),s=this.coplanarPoint($a).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let ef=0;class Ei extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=Us,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eh,this.blendDst=wh,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ca,this.stencilZFail=Ca,this.stencilZPass=Ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Wt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Qn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new at().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class as extends Ei{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ji;const bs=new R,Qi=new R,ji=new R,ts=new at,Es=new at,Qh=new ge,vr=new R,ws=new R,xr=new R,gc=new at,Za=new at,_c=new at;class Ts extends De{constructor(t=new as){if(super(),this.isSprite=!0,this.type="Sprite",Ji===void 0){Ji=new Re;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Qd(e,5);Ji.setIndex([0,1,2,0,2,3]),Ji.setAttribute("position",new ia(n,3,0,!1)),Ji.setAttribute("uv",new ia(n,2,3,!1))}this.geometry=Ji,this.material=t,this.center=new at(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&le('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qi.setFromMatrixScale(this.matrixWorld),Qh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ji.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qi.multiplyScalar(-ji.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Mr(vr.set(-.5,-.5,0),ji,a,Qi,s,r),Mr(ws.set(.5,-.5,0),ji,a,Qi,s,r),Mr(xr.set(.5,.5,0),ji,a,Qi,s,r),gc.set(0,0),Za.set(1,0),_c.set(1,1);let o=t.ray.intersectTriangle(vr,ws,xr,!1,bs);if(o===null&&(Mr(ws.set(-.5,.5,0),ji,a,Qi,s,r),Za.set(0,1),o=t.ray.intersectTriangle(vr,xr,ws,!1,bs),o===null))return;const c=t.ray.origin.distanceTo(bs);c<t.near||c>t.far||e.push({distance:c,point:bs.clone(),uv:_n.getInterpolation(bs,vr,ws,xr,gc,Za,_c,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function Mr(i,t,e,n,s,r){ts.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Es.x=r*ts.x-s*ts.y,Es.y=s*ts.x+r*ts.y):Es.copy(ts),i.copy(t),i.x+=Es.x,i.y+=Es.y,i.applyMatrix4(Qh)}const Zn=new R,Ka=new R,Sr=new R,yr=new R;class _a{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ka.copy(t).add(e).multiplyScalar(.5),Sr.copy(e).sub(t).normalize(),yr.copy(this.origin).sub(Ka);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Sr),o=yr.dot(this.direction),c=-yr.dot(Sr),l=yr.lengthSq(),h=Math.abs(1-a*a);let f,d,u,g;if(h>0)if(f=a*c-o,d=a*o-c,g=r*h,f>=0)if(d>=-g)if(d<=g){const v=1/h;f*=v,d*=v,u=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-r,-c),r),u=d*(d+2*c)+l):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ka).addScaledVector(Sr,d),u}intersectSphere(t,e){if(t.radius<0)return null;Zn.subVectors(t.center,this.origin);const n=Zn.dot(this.direction),s=Zn.dot(Zn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=t.x-a.x,d=t.y-a.y,u=t.z-a.z,g=e.x-a.x,v=e.y-a.y,p=e.z-a.z,m=n.x-a.x,x=n.y-a.y,b=n.z-a.z,M=Math.abs(c),T=Math.abs(l),E=Math.abs(h);let _,w,U,C,D,F,W,I,G,Y,B,it;if(M>=T&&M>=E?(U=c,F=f,G=g,it=m,c>=0?(_=l,w=h,C=d,D=u,W=v,I=p,Y=x,B=b):(_=h,w=l,C=u,D=d,W=p,I=v,Y=b,B=x)):T>=E?(U=l,F=d,G=v,it=x,l>=0?(_=h,w=c,C=u,D=f,W=p,I=g,Y=b,B=m):(_=c,w=h,C=f,D=u,W=g,I=p,Y=m,B=b)):(U=h,F=u,G=p,it=b,h>=0?(_=c,w=l,C=f,D=d,W=g,I=v,Y=m,B=x):(_=l,w=c,C=d,D=f,W=v,I=g,Y=x,B=m)),U===0)return null;const X=_/U,j=w/U,nt=1/U,At=C-X*F,kt=D-j*F,$=W-X*G,Mt=I-j*G,Rt=Y-X*it,Ot=B-j*it,yt=Rt*Mt-Ot*$,Bt=At*Ot-kt*Rt,Se=$*kt-Mt*At;if(s){if(yt<0||Bt<0||Se<0)return null}else if((yt<0||Bt<0||Se<0)&&(yt>0||Bt>0||Se>0))return null;const Gt=yt+Bt+Se;if(Gt===0)return null;const jt=nt*(yt*F+Bt*G+Se*it);return(Gt>0?jt<0:jt>0)?null:this.at(jt/Gt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne extends Ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const vc=new ge,Pi=new _a,br=new tr,xc=new R,Er=new R,wr=new R,Tr=new R,Ja=new R,Ar=new R,Mc=new R,Rr=new R;class It extends De{constructor(t=new Re,e=new Ne){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ar.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],f=r[c];h!==0&&(Ja.fromBufferAttribute(f,t),a?Ar.addScaledVector(Ja,h):Ar.addScaledVector(Ja.sub(e),h))}e.add(Ar)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(r),Pi.copy(t.ray).recast(t.near),!(br.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(br,xc)===null||Pi.origin.distanceToSquared(xc)>(t.far-t.near)**2))&&(vc.copy(r).invert(),Pi.copy(t.ray).applyMatrix4(vc),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=a[p.materialIndex],x=Math.max(p.start,u.start),b=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let M=x,T=b;M<T;M+=3){const E=o.getX(M),_=o.getX(M+1),w=o.getX(M+2);s=Cr(this,m,t,n,l,h,f,E,_,w),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let p=g,m=v;p<m;p+=3){const x=o.getX(p),b=o.getX(p+1),M=o.getX(p+2);s=Cr(this,a,t,n,l,h,f,x,b,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=a[p.materialIndex],x=Math.max(p.start,u.start),b=Math.min(c.count,Math.min(p.start+p.count,u.start+u.count));for(let M=x,T=b;M<T;M+=3){const E=M,_=M+1,w=M+2;s=Cr(this,m,t,n,l,h,f,E,_,w),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,u.start),v=Math.min(c.count,u.start+u.count);for(let p=g,m=v;p<m;p+=3){const x=p,b=p+1,M=p+2;s=Cr(this,a,t,n,l,h,f,x,b,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function nf(i,t,e,n,s,r,a,o){let c;if(t.side===Ke?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===vi,o),c===null)return null;Rr.copy(o),Rr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Rr);return l<e.near||l>e.far?null:{distance:l,point:Rr.clone(),object:i}}function Cr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Er),i.getVertexPosition(c,wr),i.getVertexPosition(l,Tr);const h=nf(i,t,e,n,Er,wr,Tr,Mc);if(h){const f=new R;_n.getBarycoord(Mc,Er,wr,Tr,f),s&&(h.uv=_n.getInterpolatedAttribute(s,o,c,l,f,new at)),r&&(h.uv1=_n.getInterpolatedAttribute(r,o,c,l,f,new at)),a&&(h.normal=_n.getInterpolatedAttribute(a,o,c,l,f,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new R,materialIndex:0};_n.getNormal(Er,wr,Tr,d.normal),h.face=d,h.barycoord=f}return h}class sf extends Je{constructor(t=null,e=1,n=1,s,r,a,o,c,l=We,h=We,f,d){super(null,a,o,c,l,h,s,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Li=new tr,rf=new at(.5,.5),Pr=new R;class Ws{constructor(t=new Qn,e=new Qn,n=new Qn,s=new Qn,r=new Qn,a=new Qn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Cn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],d=r[6],u=r[7],g=r[8],v=r[9],p=r[10],m=r[11],x=r[12],b=r[13],M=r[14],T=r[15];if(s[0].setComponents(l-a,u-h,m-g,T-x).normalize(),s[1].setComponents(l+a,u+h,m+g,T+x).normalize(),s[2].setComponents(l+o,u+f,m+v,T+b).normalize(),s[3].setComponents(l-o,u-f,m-v,T-b).normalize(),n)s[4].setComponents(c,d,p,M).normalize(),s[5].setComponents(l-c,u-d,m-p,T-M).normalize();else if(s[4].setComponents(l-c,u-d,m-p,T-M).normalize(),e===Cn)s[5].setComponents(l+c,u+d,m+p,T+M).normalize();else if(e===Vs)s[5].setComponents(c,d,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){Li.center.set(0,0,0);const e=rf.distanceTo(t.center);return Li.radius=.7071067811865476+e,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Pr.x=s.normal.x>0?t.max.x:t.min.x,Pr.y=s.normal.y>0?t.max.y:t.min.y,Pr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Sc=new ge;class El{constructor(){this.coordinateSystem=Cn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];Sc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ws),n[s].setFromProjectionMatrix(Sc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ws),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new El().copy(this)}}class sa extends Ei{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ra=new R,aa=new R,yc=new ge,As=new _a,Lr=new tr,Qa=new R,bc=new R;class jh extends De{constructor(t=new Re,e=new sa){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ra.fromBufferAttribute(e,s-1),aa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ra.distanceTo(aa);t.setAttribute("lineDistance",new ce(n,1))}else Ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(s),Lr.radius+=r,t.ray.intersectsSphere(Lr)===!1)return;yc.copy(s).invert(),As.copy(t.ray).applyMatrix4(yc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const u=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=u,p=g-1;v<p;v+=l){const m=h.getX(v),x=h.getX(v+1),b=Ir(this,t,As,c,m,x,v);b&&e.push(b)}if(this.isLineLoop){const v=h.getX(g-1),p=h.getX(u),m=Ir(this,t,As,c,v,p,g-1);m&&e.push(m)}}else{const u=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=u,p=g-1;v<p;v+=l){const m=Ir(this,t,As,c,v,v+1,v);m&&e.push(m)}if(this.isLineLoop){const v=Ir(this,t,As,c,g-1,u,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ir(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(ra.fromBufferAttribute(o,s),aa.fromBufferAttribute(o,r),e.distanceSqToSegment(ra,aa,Qa,bc)>n)return;Qa.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Qa);if(!(l<t.near||l>t.far))return{distance:l,point:bc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Ec=new R,wc=new R;class Qo extends jh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Ec.fromBufferAttribute(e,s),wc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ec.distanceTo(wc);t.setAttribute("lineDistance",new ce(n,1))}else Ht("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tu extends Ei{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Tc=new ge,jo=new _a,Dr=new tr,Nr=new R;class af extends De{constructor(t=new Re,e=new tu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(s),Dr.radius+=r,t.ray.intersectsSphere(Dr)===!1)return;Tc.copy(s).invert(),jo.copy(t.ray).applyMatrix4(Tc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);for(let g=d,v=u;g<v;g++){const p=l.getX(g);Nr.fromBufferAttribute(f,p),Ac(Nr,p,c,s,t,e,this)}}else{const d=Math.max(0,a.start),u=Math.min(f.count,a.start+a.count);for(let g=d,v=u;g<v;g++)Nr.fromBufferAttribute(f,g),Ac(Nr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ac(i,t,e,n,s,r,a){const o=jo.distanceSqToPoint(i);if(o<e){const c=new R;jo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class eu extends Je{constructor(t=[],e=hs,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class er extends Je{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ds extends Je{constructor(t,e,n=Gn,s,r,a,o=We,c=We,l,h=xi,f=1){if(h!==xi&&h!==gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:f};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Sl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class nu extends ds{constructor(t,e=Gn,n=hs,s,r,a=We,o=We,c,l=xi){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class iu extends Je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Si extends Re{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],f=[];let d=0,u=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(f,2));function g(v,p,m,x,b,M,T,E,_,w,U){const C=M/_,D=T/w,F=M/2,W=T/2,I=E/2,G=_+1,Y=w+1;let B=0,it=0;const X=new R;for(let j=0;j<Y;j++){const nt=j*D-W;for(let At=0;At<G;At++){const kt=At*C-F;X[v]=kt*x,X[p]=nt*b,X[m]=I,l.push(X.x,X.y,X.z),X[v]=0,X[p]=0,X[m]=E>0?1:-1,h.push(X.x,X.y,X.z),f.push(At/_),f.push(1-j/w),B+=1}}for(let j=0;j<w;j++)for(let nt=0;nt<_;nt++){const At=d+nt+G*j,kt=d+nt+G*(j+1),$=d+(nt+1)+G*(j+1),Mt=d+(nt+1)+G*j;c.push(At,kt,Mt),c.push(kt,$,Mt),it+=6}o.addGroup(u,it,U),u+=it,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Si(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class wl extends Re{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new R,h=new at;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){const u=n+f/e*s;l.x=t*Math.cos(u),l.y=t*Math.sin(u),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(o,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Xs extends Re{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],d=[],u=[];let g=0;const v=[],p=n/2;let m=0;x(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ce(f,3)),this.setAttribute("normal",new ce(d,3)),this.setAttribute("uv",new ce(u,2));function x(){const M=new R,T=new R;let E=0;const _=(e-t)/n;for(let w=0;w<=r;w++){const U=[],C=w/r,D=C*(e-t)+t;for(let F=0;F<=s;F++){const W=F/s,I=W*c+o,G=Math.sin(I),Y=Math.cos(I);T.x=D*G,T.y=-C*n+p,T.z=D*Y,f.push(T.x,T.y,T.z),M.set(G,_,Y).normalize(),d.push(M.x,M.y,M.z),u.push(W,1-C),U.push(g++)}v.push(U)}for(let w=0;w<s;w++)for(let U=0;U<r;U++){const C=v[U][w],D=v[U+1][w],F=v[U+1][w+1],W=v[U][w+1];(t>0||U!==0)&&(h.push(C,D,W),E+=3),(e>0||U!==r-1)&&(h.push(D,F,W),E+=3)}l.addGroup(m,E,0),m+=E}function b(M){const T=g,E=new at,_=new R;let w=0;const U=M===!0?t:e,C=M===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,p*C,0),d.push(0,C,0),u.push(.5,.5),g++;const D=g;for(let F=0;F<=s;F++){const I=F/s*c+o,G=Math.cos(I),Y=Math.sin(I);_.x=U*Y,_.y=p*C,_.z=U*G,f.push(_.x,_.y,_.z),d.push(0,C,0),E.x=G*.5+.5,E.y=Y*.5*C+.5,u.push(E.x,E.y),g++}for(let F=0;F<s;F++){const W=T+F,I=D+F;M===!0?h.push(I,I+1,W):h.push(I+1,I,W),w+=3}l.addGroup(m,w,M===!0?1:2),m+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Tl extends Xs{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Tl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class va extends Re{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(r.slice(),3)),this.setAttribute("uv",new ce(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const b=new R,M=new R,T=new R;for(let E=0;E<e.length;E+=3)u(e[E+0],b),u(e[E+1],M),u(e[E+2],T),c(b,M,T,x)}function c(x,b,M,T){const E=T+1,_=[];for(let w=0;w<=E;w++){_[w]=[];const U=x.clone().lerp(M,w/E),C=b.clone().lerp(M,w/E),D=E-w;for(let F=0;F<=D;F++)F===0&&w===E?_[w][F]=U:_[w][F]=U.clone().lerp(C,F/D)}for(let w=0;w<E;w++)for(let U=0;U<2*(E-w)-1;U++){const C=Math.floor(U/2);U%2===0?(d(_[w][C+1]),d(_[w+1][C]),d(_[w][C])):(d(_[w][C+1]),d(_[w+1][C+1]),d(_[w+1][C]))}}function l(x){const b=new R;for(let M=0;M<r.length;M+=3)b.x=r[M+0],b.y=r[M+1],b.z=r[M+2],b.normalize().multiplyScalar(x),r[M+0]=b.x,r[M+1]=b.y,r[M+2]=b.z}function h(){const x=new R;for(let b=0;b<r.length;b+=3){x.x=r[b+0],x.y=r[b+1],x.z=r[b+2];const M=p(x)/2/Math.PI+.5,T=m(x)/Math.PI+.5;a.push(M,1-T)}g(),f()}function f(){for(let x=0;x<a.length;x+=6){const b=a[x+0],M=a[x+2],T=a[x+4],E=Math.max(b,M,T),_=Math.min(b,M,T);E>.9&&_<.1&&(b<.2&&(a[x+0]+=1),M<.2&&(a[x+2]+=1),T<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function u(x,b){const M=x*3;b.x=t[M+0],b.y=t[M+1],b.z=t[M+2]}function g(){const x=new R,b=new R,M=new R,T=new R,E=new at,_=new at,w=new at;for(let U=0,C=0;U<r.length;U+=9,C+=6){x.set(r[U+0],r[U+1],r[U+2]),b.set(r[U+3],r[U+4],r[U+5]),M.set(r[U+6],r[U+7],r[U+8]),E.set(a[C+0],a[C+1]),_.set(a[C+2],a[C+3]),w.set(a[C+4],a[C+5]),T.copy(x).add(b).add(M).divideScalar(3);const D=p(T);v(E,C+0,x,D),v(_,C+2,b,D),v(w,C+4,M,D)}}function v(x,b,M,T){T<0&&x.x===1&&(a[b]=x.x-1),M.x===0&&M.z===0&&(a[b]=T/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new va(t.vertices,t.indices,t.radius,t.detail)}}class oa extends va{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new oa(t.radius,t.detail)}}const Ur=new R,Fr=new R,ja=new R,Or=new _n;class Rc extends Re{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Zr*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],f=new Array(3),d=new Map,u=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:v,b:p,c:m}=Or;if(v.fromBufferAttribute(o,l[0]),p.fromBufferAttribute(o,l[1]),m.fromBufferAttribute(o,l[2]),Or.getNormal(ja),f[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,f[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,f[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let x=0;x<3;x++){const b=(x+1)%3,M=f[x],T=f[b],E=Or[h[x]],_=Or[h[b]],w=`${M}_${T}`,U=`${T}_${M}`,C=d.get(U);C?(ja.dot(C.normal)<=r&&(u.push(E.x,E.y,E.z),u.push(_.x,_.y,_.z)),d.set(U,null)):d.has(w)||d.set(w,{index0:l[x],index1:l[b],normal:ja.clone()})}}for(const g of d.values())if(g){const{index0:v,index1:p}=g;Ur.fromBufferAttribute(o,v),Fr.fromBufferAttribute(o,p),u.push(Ur.x,Ur.y,Ur.z),u.push(Fr.x,Fr.y,Fr.z)}this.setAttribute("position",new ce(u,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Vn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ht("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,u=(a-h)/d;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new at:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new R,s=[],r=[],a=[],o=new R,c=new ge;for(let u=0;u<=t;u++){const g=u/t;s[u]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ee(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(o,g))}a[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(ee(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],u*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class Al extends Vn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new at){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,u=l-this.aY;c=d*h-u*f+this.aX,l=d*f+u*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class of extends Al{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Rl(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,f){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,u=(o-a)/h-(c-a)/(h+f)+(c-o)/f;d*=h,u*=h,s(a,o,d,u)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Cc=new R,Pc=new R,to=new Rl,eo=new Rl,no=new Rl;class lf extends Vn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Pc.subVectors(s[0],s[1]).add(s[0]),l=Pc);const f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Cc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Cc),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),u),v=Math.pow(f.distanceToSquared(d),u),p=Math.pow(d.distanceToSquared(h),u);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),to.initNonuniformCatmullRom(l.x,f.x,d.x,h.x,g,v,p),eo.initNonuniformCatmullRom(l.y,f.y,d.y,h.y,g,v,p),no.initNonuniformCatmullRom(l.z,f.z,d.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(to.initCatmullRom(l.x,f.x,d.x,h.x,this.tension),eo.initCatmullRom(l.y,f.y,d.y,h.y,this.tension),no.initCatmullRom(l.z,f.z,d.z,h.z,this.tension));return n.set(to.calc(c),eo.calc(c),no.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Lc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function cf(i,t){const e=1-i;return e*e*t}function hf(i,t){return 2*(1-i)*i*t}function uf(i,t){return i*i*t}function Fs(i,t,e,n){return cf(i,t)+hf(i,e)+uf(i,n)}function df(i,t){const e=1-i;return e*e*e*t}function ff(i,t){const e=1-i;return 3*e*e*i*t}function pf(i,t){return 3*(1-i)*i*i*t}function mf(i,t){return i*i*i*t}function Os(i,t,e,n,s){return df(i,t)+ff(i,e)+pf(i,n)+mf(i,s)}class su extends Vn{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Os(t,s.x,r.x,a.x,o.x),Os(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gf extends Vn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Os(t,s.x,r.x,a.x,o.x),Os(t,s.y,r.y,a.y,o.y),Os(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ru extends Vn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _f extends Vn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class au extends Vn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Fs(t,s.x,r.x,a.x),Fs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vf extends Vn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Fs(t,s.x,r.x,a.x),Fs(t,s.y,r.y,a.y),Fs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ou extends Vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Lc(o,c.x,l.x,h.x,f.x),Lc(o,c.y,l.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new at().fromArray(s))}return this}}var tl=Object.freeze({__proto__:null,ArcCurve:of,CatmullRomCurve3:lf,CubicBezierCurve:su,CubicBezierCurve3:gf,EllipseCurve:Al,LineCurve:ru,LineCurve3:_f,QuadraticBezierCurve:au,QuadraticBezierCurve3:vf,SplineCurve:ou});class xf extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new tl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}}class Ic extends xf{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ru(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new au(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new su(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ou(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const l=new Al(t,e,n,s,r,a,o,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Cl extends Ic{constructor(t){super(t),this.uuid=bi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Ic().fromJSON(s))}return this}}function Mf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=lu(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=wf(i,t,r,e)),i.length>80*e){o=i[0],c=i[1];let h=o,f=c;for(let d=e;d<s;d+=e){const u=i[d],g=i[d+1];u<o&&(o=u),g<c&&(c=g),u>h&&(h=u),g>f&&(f=g)}l=Math.max(h-o,f-c),l=l!==0?32767/l:0}return qs(r,a,e,o,c,l,0),a}function lu(i,t,e,n,s){let r;if(s===Ff(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Dc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Dc(a/n|0,i[a],i[a+1],r);return r&&fs(r,r.next)&&($s(r),r=r.next),r}function Oi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(fs(e,e.next)||Ee(e.prev,e,e.next)===0)){if($s(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function qs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Pf(i,n,s,r);let o=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?yf(i,n,s,r):Sf(i)){t.push(c.i,i.i,l.i),$s(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=bf(Oi(i),t),qs(i,t,e,n,s,r,2)):a===2&&Ef(i,t,e,n,s,r):qs(Oi(i),t,e,n,s,r,1);break}}}function Sf(i){const t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=Math.min(s,r,a),f=Math.min(o,c,l),d=Math.max(s,r,a),u=Math.max(o,c,l);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=f&&g.y<=u&&Ls(s,o,r,c,a,l,g.x,g.y)&&Ee(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function yf(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Ee(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,h=s.y,f=r.y,d=a.y,u=Math.min(o,c,l),g=Math.min(h,f,d),v=Math.max(o,c,l),p=Math.max(h,f,d),m=el(u,g,t,e,n),x=el(v,p,t,e,n);let b=i.prevZ,M=i.nextZ;for(;b&&b.z>=m&&M&&M.z<=x;){if(b.x>=u&&b.x<=v&&b.y>=g&&b.y<=p&&b!==s&&b!==a&&Ls(o,h,c,f,l,d,b.x,b.y)&&Ee(b.prev,b,b.next)>=0||(b=b.prevZ,M.x>=u&&M.x<=v&&M.y>=g&&M.y<=p&&M!==s&&M!==a&&Ls(o,h,c,f,l,d,M.x,M.y)&&Ee(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;b&&b.z>=m;){if(b.x>=u&&b.x<=v&&b.y>=g&&b.y<=p&&b!==s&&b!==a&&Ls(o,h,c,f,l,d,b.x,b.y)&&Ee(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;M&&M.z<=x;){if(M.x>=u&&M.x<=v&&M.y>=g&&M.y<=p&&M!==s&&M!==a&&Ls(o,h,c,f,l,d,M.x,M.y)&&Ee(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function bf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!fs(n,s)&&hu(n,e,e.next,s)&&Ys(n,s)&&Ys(s,n)&&(t.push(n.i,e.i,s.i),$s(e),$s(e.next),e=i=s),e=e.next}while(e!==i);return Oi(e)}function Ef(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Df(a,o)){let c=uu(a,o);a=Oi(a,a.next),c=Oi(c,c.next),qs(a,t,e,n,s,r,0),qs(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function wf(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=lu(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(If(l))}s.sort(Tf);for(let r=0;r<s.length;r++)e=Af(s[r],e);return e}function Tf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Af(i,t){const e=Rf(i,t);if(!e)return t;const n=uu(e,i);return Oi(n,n.next),Oi(e,e.next)}function Rf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(fs(i,e))return e;do{if(fs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,c=a.x,l=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&cu(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);Ys(e,i)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&Cf(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function Cf(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function Pf(i,t,e,n){let s=i;do s.z===0&&(s.z=el(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Lf(s)}function Lf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function el(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function If(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function cu(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Ls(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&cu(i,t,e,n,s,r,a,o)}function Df(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Nf(i,t)&&(Ys(i,t)&&Ys(t,i)&&Uf(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||fs(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function fs(i,t){return i.x===t.x&&i.y===t.y}function hu(i,t,e,n){const s=zr(Ee(i,t,e)),r=zr(Ee(i,t,n)),a=zr(Ee(e,n,i)),o=zr(Ee(e,n,t));return!!(s!==r&&a!==o||s===0&&Br(i,e,t)||r===0&&Br(i,n,t)||a===0&&Br(e,i,n)||o===0&&Br(e,t,n))}function Br(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function zr(i){return i>0?1:i<0?-1:0}function Nf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&hu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ys(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function Uf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function uu(i,t){const e=nl(i.i,i.x,i.y),n=nl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Dc(i,t,e,n){const s=nl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function $s(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function nl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ff(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Of{static triangulate(t,e,n=2){return Mf(t,e,n)}}class ti{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ti.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Nc(t),Uc(n,t);let a=t.length;e.forEach(Nc);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Uc(n,e[c]);const o=Of.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Nc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Uc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class la extends Re{constructor(t=new Cl([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new ce(s,3)),this.setAttribute("uv",new ce(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:u-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:Bf;let b,M=!1,T,E,_,w;if(m){b=m.getSpacedPoints(h),M=!0,d=!1;const tt=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(h,tt),E=new R,_=new R,w=new R}d||(p=0,u=0,g=0,v=0);const U=o.extractPoints(l);let C=U.shape;const D=U.holes;if(!ti.isClockWise(C)){C=C.reverse();for(let tt=0,dt=D.length;tt<dt;tt++){const ct=D[tt];ti.isClockWise(ct)&&(D[tt]=ct.reverse())}}function W(tt){const ct=10000000000000001e-36;let Tt=tt[0];for(let xt=1;xt<=tt.length;xt++){const Yt=xt%tt.length,Nt=tt[Yt],ie=Nt.x-Tt.x,se=Nt.y-Tt.y,de=ie*ie+se*se,N=Math.max(Math.abs(Nt.x),Math.abs(Nt.y),Math.abs(Tt.x),Math.abs(Tt.y)),Ce=ct*N*N;if(de<=Ce){tt.splice(Yt,1),xt--;continue}Tt=Nt}}W(C),D.forEach(W);const I=D.length,G=C;for(let tt=0;tt<I;tt++){const dt=D[tt];C=C.concat(dt)}function Y(tt,dt,ct){return dt||le("ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(dt,ct)}const B=C.length;function it(tt,dt,ct){let Tt,xt,Yt;const Nt=tt.x-dt.x,ie=tt.y-dt.y,se=ct.x-tt.x,de=ct.y-tt.y,N=Nt*Nt+ie*ie,Ce=Nt*de-ie*se;if(Math.abs(Ce)>Number.EPSILON){const te=Math.sqrt(N),_e=Math.sqrt(se*se+de*de),gt=dt.x-ie/te,Te=dt.y+Nt/te,zt=ct.x-de/_e,Vt=ct.y+se/_e,A=((zt-gt)*de-(Vt-Te)*se)/(Nt*de-ie*se);Tt=gt+Nt*A-tt.x,xt=Te+ie*A-tt.y;const S=Tt*Tt+xt*xt;if(S<=2)return new at(Tt,xt);Yt=Math.sqrt(S/2)}else{let te=!1;Nt>Number.EPSILON?se>Number.EPSILON&&(te=!0):Nt<-Number.EPSILON?se<-Number.EPSILON&&(te=!0):Math.sign(ie)===Math.sign(de)&&(te=!0),te?(Tt=-ie,xt=Nt,Yt=Math.sqrt(N)):(Tt=Nt,xt=ie,Yt=Math.sqrt(N/2))}return new at(Tt/Yt,xt/Yt)}const X=[];for(let tt=0,dt=G.length,ct=dt-1,Tt=tt+1;tt<dt;tt++,ct++,Tt++)ct===dt&&(ct=0),Tt===dt&&(Tt=0),X[tt]=it(G[tt],G[ct],G[Tt]);const j=[];let nt,At=X.concat();for(let tt=0,dt=I;tt<dt;tt++){const ct=D[tt];nt=[];for(let Tt=0,xt=ct.length,Yt=xt-1,Nt=Tt+1;Tt<xt;Tt++,Yt++,Nt++)Yt===xt&&(Yt=0),Nt===xt&&(Nt=0),nt[Tt]=it(ct[Tt],ct[Yt],ct[Nt]);j.push(nt),At=At.concat(nt)}let kt;if(p===0)kt=ti.triangulateShape(G,D);else{const tt=[],dt=[];for(let ct=0;ct<p;ct++){const Tt=ct/p,xt=u*Math.cos(Tt*Math.PI/2),Yt=g*Math.sin(Tt*Math.PI/2)+v;for(let Nt=0,ie=G.length;Nt<ie;Nt++){const se=Y(G[Nt],X[Nt],Yt);Bt(se.x,se.y,-xt),Tt===0&&tt.push(se)}for(let Nt=0,ie=I;Nt<ie;Nt++){const se=D[Nt];nt=j[Nt];const de=[];for(let N=0,Ce=se.length;N<Ce;N++){const te=Y(se[N],nt[N],Yt);Bt(te.x,te.y,-xt),Tt===0&&de.push(te)}Tt===0&&dt.push(de)}}kt=ti.triangulateShape(tt,dt)}const $=kt.length,Mt=g+v;for(let tt=0;tt<B;tt++){const dt=d?Y(C[tt],At[tt],Mt):C[tt];M?(_.copy(T.normals[0]).multiplyScalar(dt.x),E.copy(T.binormals[0]).multiplyScalar(dt.y),w.copy(b[0]).add(_).add(E),Bt(w.x,w.y,w.z)):Bt(dt.x,dt.y,0)}for(let tt=1;tt<=h;tt++)for(let dt=0;dt<B;dt++){const ct=d?Y(C[dt],At[dt],Mt):C[dt];M?(_.copy(T.normals[tt]).multiplyScalar(ct.x),E.copy(T.binormals[tt]).multiplyScalar(ct.y),w.copy(b[tt]).add(_).add(E),Bt(w.x,w.y,w.z)):Bt(ct.x,ct.y,f/h*tt)}for(let tt=p-1;tt>=0;tt--){const dt=tt/p,ct=u*Math.cos(dt*Math.PI/2),Tt=g*Math.sin(dt*Math.PI/2)+v;for(let xt=0,Yt=G.length;xt<Yt;xt++){const Nt=Y(G[xt],X[xt],Tt);Bt(Nt.x,Nt.y,f+ct)}for(let xt=0,Yt=D.length;xt<Yt;xt++){const Nt=D[xt];nt=j[xt];for(let ie=0,se=Nt.length;ie<se;ie++){const de=Y(Nt[ie],nt[ie],Tt);M?Bt(de.x,de.y+b[h-1].y,b[h-1].x+ct):Bt(de.x,de.y,f+ct)}}}Rt(),Ot();function Rt(){const tt=s.length/3;if(d){let dt=0,ct=B*dt;for(let Tt=0;Tt<$;Tt++){const xt=kt[Tt];Se(xt[2]+ct,xt[1]+ct,xt[0]+ct)}dt=h+p*2,ct=B*dt;for(let Tt=0;Tt<$;Tt++){const xt=kt[Tt];Se(xt[0]+ct,xt[1]+ct,xt[2]+ct)}}else{for(let dt=0;dt<$;dt++){const ct=kt[dt];Se(ct[2],ct[1],ct[0])}for(let dt=0;dt<$;dt++){const ct=kt[dt];Se(ct[0]+B*h,ct[1]+B*h,ct[2]+B*h)}}n.addGroup(tt,s.length/3-tt,0)}function Ot(){const tt=s.length/3;let dt=0;yt(G,dt),dt+=G.length;for(let ct=0,Tt=D.length;ct<Tt;ct++){const xt=D[ct];yt(xt,dt),dt+=xt.length}n.addGroup(tt,s.length/3-tt,1)}function yt(tt,dt){let ct=tt.length;for(;--ct>=0;){const Tt=ct;let xt=ct-1;xt<0&&(xt=tt.length-1);for(let Yt=0,Nt=h+p*2;Yt<Nt;Yt++){const ie=B*Yt,se=B*(Yt+1),de=dt+Tt+ie,N=dt+xt+ie,Ce=dt+xt+se,te=dt+Tt+se;Gt(de,N,Ce,te)}}}function Bt(tt,dt,ct){c.push(tt),c.push(dt),c.push(ct)}function Se(tt,dt,ct){jt(tt),jt(dt),jt(ct);const Tt=s.length/3,xt=x.generateTopUV(n,s,Tt-3,Tt-2,Tt-1);ne(xt[0]),ne(xt[1]),ne(xt[2])}function Gt(tt,dt,ct,Tt){jt(tt),jt(dt),jt(Tt),jt(dt),jt(ct),jt(Tt);const xt=s.length/3,Yt=x.generateSideWallUV(n,s,xt-6,xt-3,xt-2,xt-1);ne(Yt[0]),ne(Yt[1]),ne(Yt[3]),ne(Yt[1]),ne(Yt[2]),ne(Yt[3])}function jt(tt){s.push(c[tt*3+0]),s.push(c[tt*3+1]),s.push(c[tt*3+2])}function ne(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return zf(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new tl[s.type]().fromJSON(s)),new la(n,t.options)}}const Bf={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new at(r,a),new at(o,c),new at(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],f=t[n*3+2],d=t[s*3],u=t[s*3+1],g=t[s*3+2],v=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new at(a,1-c),new at(l,1-f),new at(d,1-g),new at(v,1-m)]:[new at(o,1-c),new at(h,1-f),new at(u,1-g),new at(p,1-m)]}};function zf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Di extends va{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Di(t.radius,t.detail)}}class Ui extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,f=t/o,d=e/c,u=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const x=m*d-a;for(let b=0;b<l;b++){const M=b*f-r;g.push(M,-x,0),v.push(0,0,1),p.push(b/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<o;x++){const b=x+l*m,M=x+l*(m+1),T=x+1+l*(m+1),E=x+1+l*m;u.push(b,M,E),u.push(M,T,E)}this.setIndex(u),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(v,3)),this.setAttribute("uv",new ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.width,t.height,t.widthSegments,t.heightSegments)}}class ca extends Re{constructor(t=new Cl([new at(0,.5),new at(-.5,-.5),new at(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new ce(s,3)),this.setAttribute("normal",new ce(r,3)),this.setAttribute("uv",new ce(a,2));function l(h){const f=s.length/3,d=h.extractPoints(e);let u=d.shape;const g=d.holes;ti.isClockWise(u)===!1&&(u=u.reverse());for(let p=0,m=g.length;p<m;p++){const x=g[p];ti.isClockWise(x)===!0&&(g[p]=x.reverse())}const v=ti.triangulateShape(u,g);for(let p=0,m=g.length;p<m;p++){const x=g[p];u=u.concat(x)}for(let p=0,m=u.length;p<m;p++){const x=u[p];s.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let p=0,m=v.length;p<m;p++){const x=v[p],b=x[0]+f,M=x[1]+f,T=x[2]+f;n.push(b,M,T),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return kf(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new ca(n,t.curveSegments)}}function kf(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Jn extends Re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],f=new R,d=new R,u=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){const x=[],b=m/n,M=a+b*o,T=t*Math.cos(M),E=Math.sqrt(t*t-T*T);let _=0;m===0&&a===0?_=.5/e:m===n&&c===Math.PI&&(_=-.5/e);for(let w=0;w<=e;w++){const U=w/e,C=s+U*r;f.x=-E*Math.cos(C),f.y=T,f.z=E*Math.sin(C),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),p.push(U+_,1-b),x.push(l++)}h.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){const b=h[m][x+1],M=h[m][x],T=h[m+1][x],E=h[m+1][x+1];(m!==0||a>0)&&u.push(b,M,E),(m!==n-1||c<Math.PI)&&u.push(M,T,E)}this.setIndex(u),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(v,3)),this.setAttribute("uv",new ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class An extends Re{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const c=[],l=[],h=[],f=[],d=new R,u=new R,g=new R;for(let v=0;v<=n;v++){const p=a+v/n*o;for(let m=0;m<=s;m++){const x=m/s*r;u.x=(t+e*Math.cos(p))*Math.cos(x),u.y=(t+e*Math.cos(p))*Math.sin(x),u.z=e*Math.sin(p),l.push(u.x,u.y,u.z),d.x=t*Math.cos(x),d.y=t*Math.sin(x),g.subVectors(u,d).normalize(),h.push(g.x,g.y,g.z),f.push(m/s),f.push(v/n)}}for(let v=1;v<=n;v++)for(let p=1;p<=s;p++){const m=(s+1)*v+p-1,x=(s+1)*(v-1)+p-1,b=(s+1)*(v-1)+p,M=(s+1)*v+p;c.push(m,x,M),c.push(x,b,M)}this.setIndex(c),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new An(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function ps(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Fc(s))s.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Fc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function en(i){const t={};for(let e=0;e<i.length;e++){const n=ps(i[e]);for(const s in n)t[s]=n[s]}return t}function Fc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Gf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function du(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const Hf={clone:ps,merge:en};var Vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends Ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vf,this.fragmentShader=Wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=Gf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Wt().setHex(s.value);break;case"v2":this.uniforms[n].value=new at().fromArray(s.value);break;case"v3":this.uniforms[n].value=new R().fromArray(s.value);break;case"v4":this.uniforms[n].value=new be().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Xt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ge().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Xf extends yi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Un extends Ei{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ko,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Oc extends Un{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ee(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Wt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Wt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Wt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return ls('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){ls('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class qf extends Ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Yf extends Ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class fu extends De{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class $f extends fu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const io=new ge,Bc=new R,zc=new R;class Zf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ws,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Bc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bc),zc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){io.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(io,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Vs||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(io)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const kr=new R,Gr=new Ze,Ln=new R;class pu extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(kr,Gr,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kr,Gr,Ln.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(kr,Gr,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kr,Gr,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fi=new R,kc=new at,Gc=new at;class Rn extends pu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Jo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fi.x,fi.y).multiplyScalar(-t/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-t/fi.z)}getViewSize(t,e){return this.getViewBounds(t,kc,Gc),e.subVectors(Gc,kc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class mu extends pu{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Kf extends Zf{constructor(){super(new mu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hc extends fu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Kf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const es=-90,ns=1;class il extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Rn(es,ns,t,e);s.layers=this.layers,this.add(s);const r=new Rn(es,ns,t,e);r.layers=this.layers,this.add(r);const a=new Rn(es,ns,t,e);a.layers=this.layers,this.add(a);const o=new Rn(es,ns,t,e);o.layers=this.layers,this.add(o);const c=new Rn(es,ns,t,e);c.layers=this.layers,this.add(c);const l=new Rn(es,ns,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,d,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Jf extends Rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const Vc=new ge;class Qf{constructor(t,e,n=0,s=1/0){this.ray=new _a(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new yl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):le("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Vc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vc),this}intersectObject(t,e=!0,n=[]){return sl(t,this,n,e),n.sort(Wc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)sl(t[s],this,n,e);return n.sort(Wc),n}}function Wc(i,t){return i.distance-t.distance}function sl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)sl(r[a],t,e,!0)}}class jf extends Qo{constructor(t=10,e=10,n=4473924,s=8947848){n=new Wt(n),s=new Wt(s);const r=e/2,a=t/e,o=t/2,c=[],l=[];for(let d=0,u=0,g=-o;d<=e;d++,g+=a){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);const v=d===r?n:s;v.toArray(l,u),u+=3,v.toArray(l,u),u+=3,v.toArray(l,u),u+=3,v.toArray(l,u),u+=3}const h=new Re;h.setAttribute("position",new ce(c,3)),h.setAttribute("color",new ce(l,3));const f=new sa({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function Xc(i,t,e,n){const s=tp(n);switch(e){case Bh:return i*t;case kh:return i*t/s.components*s.byteLength;case vl:return i*t/s.components*s.byteLength;case Fi:return i*t*2/s.components*s.byteLength;case xl:return i*t*2/s.components*s.byteLength;case zh:return i*t*3/s.components*s.byteLength;case zn:return i*t*4/s.components*s.byteLength;case Ml:return i*t*4/s.components*s.byteLength;case Xr:case qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Yr:case $r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case So:case bo:return Math.max(i,16)*Math.max(t,8)/4;case Mo:case yo:return Math.max(i,8)*Math.max(t,8)/2;case Eo:case wo:case Ao:case Ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case To:case Jr:case Co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Io:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Do:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case No:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Oo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ko:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Go:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ho:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Vo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Wo:case Xo:case qo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Yo:case $o:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Qr:case Zo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function tp(i){switch(i){case gn:case Nh:return{byteLength:1,components:1};case Hs:case Uh:case Hn:return{byteLength:2,components:1};case gl:case _l:return{byteLength:2,components:4};case Gn:case ml:case Bn:return{byteLength:4,components:1};case Fh:case Oh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fl}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fl);function gu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ep(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<f.length;u++){const g=f[d],v=f[u];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let u=0,g=f.length;u<g;u++){const v=f[u];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var np=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ip=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ap=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ep=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,wp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ip=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Np=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Yp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,$p=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,em=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,im=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,um=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mm=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_m=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Em=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Am=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Im=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,km=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$m=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Km=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,t0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const e0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,l0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,c0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,h0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,p0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,g0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,M0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,y0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,b0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,T0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,P0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,N0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:np,alphahash_pars_fragment:ip,alphamap_fragment:sp,alphamap_pars_fragment:rp,alphatest_fragment:ap,alphatest_pars_fragment:op,aomap_fragment:lp,aomap_pars_fragment:cp,batching_pars_vertex:hp,batching_vertex:up,begin_vertex:dp,beginnormal_vertex:fp,bsdfs:pp,iridescence_fragment:mp,bumpmap_pars_fragment:gp,clipping_planes_fragment:_p,clipping_planes_pars_fragment:vp,clipping_planes_pars_vertex:xp,clipping_planes_vertex:Mp,color_fragment:Sp,color_pars_fragment:yp,color_pars_vertex:bp,color_vertex:Ep,common:wp,defaultnormal_vertex:Tp,displacementmap_pars_vertex:Ap,displacementmap_vertex:Rp,emissivemap_fragment:Cp,emissivemap_pars_fragment:Pp,colorspace_fragment:Lp,colorspace_pars_fragment:Ip,envmap_fragment:Dp,envmap_common_pars_fragment:Np,envmap_pars_fragment:Up,envmap_pars_vertex:Fp,envmap_physical_pars_fragment:Yp,envmap_vertex:Op,fog_vertex:Bp,fog_pars_vertex:zp,fog_fragment:kp,fog_pars_fragment:Gp,gradientmap_pars_fragment:Hp,lightmap_pars_fragment:Vp,lights_lambert_fragment:Wp,lights_lambert_pars_fragment:Xp,lights_pars_begin:qp,lights_toon_fragment:$p,lights_toon_pars_fragment:Zp,lights_phong_fragment:Kp,lights_phong_pars_fragment:Jp,lights_physical_fragment:Qp,lights_physical_pars_fragment:jp,lights_fragment_begin:tm,lights_fragment_maps:em,lights_fragment_end:nm,lightprobes_pars_fragment:im,logdepthbuf_fragment:sm,logdepthbuf_pars_fragment:rm,logdepthbuf_pars_vertex:am,logdepthbuf_vertex:om,map_fragment:lm,map_pars_fragment:cm,map_particle_fragment:hm,map_particle_pars_fragment:um,metalnessmap_fragment:dm,metalnessmap_pars_fragment:fm,morphinstance_vertex:pm,morphcolor_vertex:mm,morphnormal_vertex:gm,morphtarget_pars_vertex:_m,morphtarget_vertex:vm,normal_fragment_begin:xm,normal_fragment_maps:Mm,normal_pars_fragment:Sm,normal_pars_vertex:ym,normal_vertex:bm,normalmap_pars_fragment:Em,clearcoat_normal_fragment_begin:wm,clearcoat_normal_fragment_maps:Tm,clearcoat_pars_fragment:Am,iridescence_pars_fragment:Rm,opaque_fragment:Cm,packing:Pm,premultiplied_alpha_fragment:Lm,project_vertex:Im,dithering_fragment:Dm,dithering_pars_fragment:Nm,roughnessmap_fragment:Um,roughnessmap_pars_fragment:Fm,shadowmap_pars_fragment:Om,shadowmap_pars_vertex:Bm,shadowmap_vertex:zm,shadowmask_pars_fragment:km,skinbase_vertex:Gm,skinning_pars_vertex:Hm,skinning_vertex:Vm,skinnormal_vertex:Wm,specularmap_fragment:Xm,specularmap_pars_fragment:qm,tonemapping_fragment:Ym,tonemapping_pars_fragment:$m,transmission_fragment:Zm,transmission_pars_fragment:Km,uv_pars_fragment:Jm,uv_pars_vertex:Qm,uv_vertex:jm,worldpos_vertex:t0,background_vert:e0,background_frag:n0,backgroundCube_vert:i0,backgroundCube_frag:s0,cube_vert:r0,cube_frag:a0,depth_vert:o0,depth_frag:l0,distance_vert:c0,distance_frag:h0,equirect_vert:u0,equirect_frag:d0,linedashed_vert:f0,linedashed_frag:p0,meshbasic_vert:m0,meshbasic_frag:g0,meshlambert_vert:_0,meshlambert_frag:v0,meshmatcap_vert:x0,meshmatcap_frag:M0,meshnormal_vert:S0,meshnormal_frag:y0,meshphong_vert:b0,meshphong_frag:E0,meshphysical_vert:w0,meshphysical_frag:T0,meshtoon_vert:A0,meshtoon_frag:R0,points_vert:C0,points_frag:P0,shadow_vert:L0,shadow_frag:I0,sprite_vert:D0,sprite_frag:N0},Et={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},On={basic:{uniforms:en([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:en([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Wt(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:en([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:en([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:en([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:en([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:en([Et.points,Et.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:en([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:en([Et.common,Et.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:en([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:en([Et.sprite,Et.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:en([Et.common,Et.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:en([Et.lights,Et.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};On.physical={uniforms:en([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const Hr={r:0,b:0,g:0},U0=new ge,_u=new Xt;_u.set(-1,0,0,0,1,0,0,0,1);function F0(i,t,e,n,s,r){const a=new Wt(0);let o=s===!0?0:1,c,l,h=null,f=0,d=null;function u(x){let b=x.isScene===!0?x.background:null;if(b&&b.isTexture){const M=x.backgroundBlurriness>0;b=t.get(b,M)}return b}function g(x){let b=!1;const M=u(x);M===null?p(a,o):M&&M.isColor&&(p(M,1),b=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(x,b){const M=u(b);M&&M.isCubeTexture?(l===void 0&&(l=new It(new Si(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:ps(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(U0.makeRotationFromEuler(b.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(_u),l.material.toneMapped=oe.getTransfer(M.colorSpace)!==me,(h!==M||f!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new It(new Ui(2,2),new yi({name:"BackgroundMaterial",uniforms:ps(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=oe.getTransfer(M.colorSpace)!==me,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,b){x.getRGB(Hr,du(i)),e.buffers.color.setClear(Hr.r,Hr.g,Hr.b,b,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,b=1){a.set(x),o=b,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,p(a,o)},render:g,addToRenderList:v,dispose:m}}function O0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(D,F,W,I,G){let Y=!1;const B=f(D,I,W,F);r!==B&&(r=B,l(r.object)),Y=u(D,I,W,G),Y&&g(D,I,W,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,M(D,F,W,I),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function f(D,F,W,I){const G=I.wireframe===!0;let Y=n[F.id];Y===void 0&&(Y={},n[F.id]=Y);const B=D.isInstancedMesh===!0?D.id:0;let it=Y[B];it===void 0&&(it={},Y[B]=it);let X=it[W.id];X===void 0&&(X={},it[W.id]=X);let j=X[G];return j===void 0&&(j=d(c()),X[G]=j),j}function d(D){const F=[],W=[],I=[];for(let G=0;G<e;G++)F[G]=0,W[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:I,object:D,attributes:{},index:null}}function u(D,F,W,I){const G=r.attributes,Y=F.attributes;let B=0;const it=W.getAttributes();for(const X in it)if(it[X].location>=0){const nt=G[X];let At=Y[X];if(At===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(At=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(At=D.instanceColor)),nt===void 0||nt.attribute!==At||At&&nt.data!==At.data)return!0;B++}return r.attributesNum!==B||r.index!==I}function g(D,F,W,I){const G={},Y=F.attributes;let B=0;const it=W.getAttributes();for(const X in it)if(it[X].location>=0){let nt=Y[X];nt===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(nt=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(nt=D.instanceColor));const At={};At.attribute=nt,nt&&nt.data&&(At.data=nt.data),G[X]=At,B++}r.attributes=G,r.attributesNum=B,r.index=I}function v(){const D=r.newAttributes;for(let F=0,W=D.length;F<W;F++)D[F]=0}function p(D){m(D,0)}function m(D,F){const W=r.newAttributes,I=r.enabledAttributes,G=r.attributeDivisors;W[D]=1,I[D]===0&&(i.enableVertexAttribArray(D),I[D]=1),G[D]!==F&&(i.vertexAttribDivisor(D,F),G[D]=F)}function x(){const D=r.newAttributes,F=r.enabledAttributes;for(let W=0,I=F.length;W<I;W++)F[W]!==D[W]&&(i.disableVertexAttribArray(W),F[W]=0)}function b(D,F,W,I,G,Y,B){B===!0?i.vertexAttribIPointer(D,F,W,G,Y):i.vertexAttribPointer(D,F,W,I,G,Y)}function M(D,F,W,I){v();const G=I.attributes,Y=W.getAttributes(),B=F.defaultAttributeValues;for(const it in Y){const X=Y[it];if(X.location>=0){let j=G[it];if(j===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){const nt=j.normalized,At=j.itemSize,kt=t.get(j);if(kt===void 0)continue;const $=kt.buffer,Mt=kt.type,Rt=kt.bytesPerElement,Ot=Mt===i.INT||Mt===i.UNSIGNED_INT||j.gpuType===ml;if(j.isInterleavedBufferAttribute){const yt=j.data,Bt=yt.isInterleavedBuffer===!0?yt.stride:yt.itemSize,Se=j.offset;if(yt.isInstancedInterleavedBuffer||yt.isInstancedBufferAttribute){for(let Gt=0;Gt<X.locationSize;Gt++)m(X.location+Gt,yt.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Gt=0;Gt<X.locationSize;Gt++)p(X.location+Gt);i.bindBuffer(i.ARRAY_BUFFER,$);for(let Gt=0;Gt<X.locationSize;Gt++)b(X.location+Gt,At/X.locationSize,Mt,nt,Bt*Rt,(Se+At/X.locationSize*Gt)*Rt,Ot)}else{if(j.isInstancedBufferAttribute){for(let yt=0;yt<X.locationSize;yt++)m(X.location+yt,j.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let yt=0;yt<X.locationSize;yt++)p(X.location+yt);i.bindBuffer(i.ARRAY_BUFFER,$);for(let yt=0;yt<X.locationSize;yt++)b(X.location+yt,At/X.locationSize,Mt,nt,At*Rt,At/X.locationSize*yt*Rt,Ot)}}else if(B!==void 0){const nt=B[it];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(X.location,nt);break;case 3:i.vertexAttrib3fv(X.location,nt);break;case 4:i.vertexAttrib4fv(X.location,nt);break;default:i.vertexAttrib1fv(X.location,nt)}}}}x()}function T(){U();for(const D in n){const F=n[D];for(const W in F){const I=F[W];for(const G in I){const Y=I[G];for(const B in Y)h(Y[B].object),delete Y[B];delete I[G]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;const F=n[D.id];for(const W in F){const I=F[W];for(const G in I){const Y=I[G];for(const B in Y)h(Y[B].object),delete Y[B];delete I[G]}}delete n[D.id]}function _(D){for(const F in n){const W=n[F];for(const I in W){const G=W[I];if(G[D.id]===void 0)continue;const Y=G[D.id];for(const B in Y)h(Y[B].object),delete Y[B];delete G[D.id]}}}function w(D){for(const F in n){const W=n[F],I=D.isInstancedMesh===!0?D.id:0,G=W[I];if(G!==void 0){for(const Y in G){const B=G[Y];for(const it in B)h(B[it].object),delete B[it];delete G[Y]}delete W[I],Object.keys(W).length===0&&delete n[F]}}}function U(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:w,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:p,disableUnusedAttributes:x}}function B0(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let u=0;u<h;u++)d+=l[u];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function z0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==zn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const w=_===Hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==gn&&_!==Bn&&!w&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(Ht("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Ht("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:M,maxSamples:T,samples:E}}function k0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Qn,o=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const u=f.length!==0||d||n!==0||s;return s=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,u){const g=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{const x=r?0:n,b=x*4;let M=m.clippingState||null;c.value=M,M=h(g,d,b,u);for(let T=0;T!==b;++T)M[T]=e[T];m.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,u,g){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=c.value,g!==!0||p===null){const m=u+v*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let b=0,M=u;b!==v;++b,M+=4)a.copy(f[b]).applyMatrix4(x,o),a.normal.toArray(p,M),p[M+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}class Pl extends kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new eu(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Si(5,5,5),r=new yi({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:os});r.uniforms.tEquirect.value=e;const a=new It(s,r),o=e.minFilter;return e.minFilter===mi&&(e.minFilter=un),new il(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const qc=256,G0=3,H0=20,vu=256,xu=16,V0=3,W0=new R,X0=new Wt;class ha{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new il(1,10,null),this._boxMesh=new It(new Si(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=W0}=r,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const f=c.autoClear,d=c.autoClearColor,u=c.autoClearDepth,g=c.autoClearStencil,v=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(t.background=c.getClearColor(X0));const p=new il(n,s,h);return p.position.copy(o),p.update(c,t),c.autoClear=f,c.autoClearColor=d,c.autoClearDepth=u,c.autoClearStencil=g,t.background=v,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(qc,Nd(t))}_fromTexture(t,e){t.mapping===hs||t.mapping===ks?this._setSize(t.image.length===0?qc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=Yc(t,!1,!1),n=Math.log2(t)-G0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Yc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===hs||t.mapping===ks?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=$c()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=q0(),this._integrationMaterial=Y0());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/xu);for(let a=0;a<=n;a++){const o=ha.lodToRoughness(a,n);if(a>n-V0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const c=o>0?Math.log2(e)+.5*Math.log2(6/(vu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=$0());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function Yc(i,t,e){return new Pl(i,{minFilter:mi,generateMipmaps:t,type:Hn,colorSpace:jr,depthBuffer:e})}function nr(i,t,e){return new yi({name:i,uniforms:t,vertexShader:Jt.cube_vert,fragmentShader:e,side:Ke,blending:os,depthTest:!1,depthWrite:!1})}function q0(){return nr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${vu}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Y0(){return nr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:xu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function $0(){return nr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${H0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function $c(){return nr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Zc(){return nr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Z0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,u=!1){return d==null?null:u?a(d):r(d)}function r(d){if(d&&d.isTexture){const u=d.mapping;if(u===Ta||u===Aa)if(t.has(d)){const g=t.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const v=new Pl(g.height);return v.fromEquirectangularTexture(i,d),t.set(d,v),d.addEventListener("dispose",l),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const u=d.mapping,g=u===Ta||u===Aa,v=u===hs||u===ks;if(g||v){let p=e.get(d);const m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new ha(i)),p=g?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{const x=d.image;return g&&x&&x.height>0||v&&x&&c(x)?(n===null&&(n=new ha(i)),p=g?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,u){return u===Ta?d.mapping=hs:u===Aa&&(d.mapping=ks),d}function c(d){let u=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&u++;return u===g}function l(d){const u=d.target;u.removeEventListener("dispose",l);const g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function h(d){const u=d.target;u.removeEventListener("dispose",h);const g=e.get(u);g!==void 0&&(e.delete(u),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function K0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ls("WebGLRenderer: "+n+" extension not supported."),s}}}function J0(i,t,e,n){const s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){c(g.target)}function c(g){g.index!==null&&t.remove(g.index);for(const p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);const v=r.get(g);v&&(t.remove(v),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function l(g,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),e.memory.geometries++),v}function h(g){const v=g.attributes;for(const p in v)t.update(v[p],i.ARRAY_BUFFER)}function f(g){const v=g.index,p=g.attributes.position;let m=0;if(p===void 0)return;const x=v!==null?v.array.length:p.array.length/3-1,b=p.count>=65535?Jh:Kh,M=new b(Math.ceil(x/3)*6,1),T=M.array;if(v!==null){const _=v.array;m=v.version;for(let w=0,U=0;w<x;w+=3){const C=_[w+0],D=_[w+1],F=_[w+2];T[U++]=C,T[U++]=D,T[U++]=D,T[U++]=F,T[U++]=F,T[U++]=C}}else{m=p.version;for(let _=0,w=0;_<x;_+=3){const U=_+0,C=_+1,D=_+2;T[w++]=U,T[w++]=C,T[w++]=C,T[w++]=D,T[w++]=D,T[w++]=U}}M.version=m;const E=r.get(g);E&&t.remove(E),r.set(g,M)}function d(g){const v=r.get(g);if(v){const p=g.index;p!==null&&v.version<p.version&&f(g)}else f(g);return r.get(g)}function u(){for(const g in s){const v=s[g].deref();v!==void 0&&c(v)}}return{get:l,update:h,getWireframeAttribute:d,dispose:u}}function Q0(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function l(f,d,u){u!==0&&(i.drawElementsInstanced(n,d,r,f*a,u),e.update(d,n,u))}function h(f,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,u);let v=0;for(let p=0;p<u;p++)v+=d[p];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function j0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:le("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function tg(i,t,e){const n=new WeakMap,s=new be;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let C=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",C)};var u=C;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),p===!0&&(M=3);let T=o.attributes.position.count*M,E=1;T>t.maxTextureSize&&(E=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const _=new Float32Array(T*E*4*f),w=new $h(_,T,E,f);w.type=Bn,w.needsUpdate=!0;const U=M*4;for(let D=0;D<f;D++){const F=m[D],W=x[D],I=b[D],G=T*E*4*D;for(let Y=0;Y<F.count;Y++){const B=Y*U;g===!0&&(s.fromBufferAttribute(F,Y),_[G+B+0]=s.x,_[G+B+1]=s.y,_[G+B+2]=s.z,_[G+B+3]=0),v===!0&&(s.fromBufferAttribute(W,Y),_[G+B+4]=s.x,_[G+B+5]=s.y,_[G+B+6]=s.z,_[G+B+7]=0),p===!0&&(s.fromBufferAttribute(I,Y),_[G+B+8]=s.x,_[G+B+9]=s.y,_[G+B+10]=s.z,_[G+B+11]=I.itemSize===4?s.w:1)}}d={count:f,texture:w,size:new at(T,E)},n.set(o,d),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function eg(i,t,e,n,s){let r=new WeakMap;function a(l){const h=s.render.frame,f=l.geometry,d=t.get(l,f);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function o(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const ng={[Ah]:"LINEAR_TONE_MAPPING",[Rh]:"REINHARD_TONE_MAPPING",[Ch]:"CINEON_TONE_MAPPING",[pl]:"ACES_FILMIC_TONE_MAPPING",[Lh]:"AGX_TONE_MAPPING",[Ih]:"NEUTRAL_TONE_MAPPING",[Ph]:"CUSTOM_TONE_MAPPING"};function ig(i,t,e,n,s,r){const a=new kn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const h=new Re;h.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ce([0,2,0,0,2,0],2));const f=new Xf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new It(h,f),u=new mu(-1,1,1,-1,0,1);let g=null,v=null,p=!1,m,x=null,b=[],M=!1;this.setSize=function(T,E){a.setSize(T,E),o!==null&&o.setSize(T,E),c!==null&&c.setSize(T,E);for(let _=0;_<b.length;_++){const w=b[_];w.setSize&&w.setSize(T,E)}},this.setEffects=function(T){b=T,M=b.length>0&&b[0].isRenderPass===!0;const E=a.width,_=a.height;b.length>0&&o===null&&(o=new kn(E,_,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),c=new kn(E,_,{type:Hn,depthBuffer:!1,stencilBuffer:!1}));const w=s===!0&&b.some(U=>U.needsDepthTexture===!0);w!==(a.depthTexture!==null)&&(w===!0&&l===null&&(l=new ds(E,_),r===!0&&(l.format=gi,l.type=us)),a.dispose(),a.depthTexture=w?l:null,a.resolveDepthBuffer=w,a.storeMultisampledDepthBuffer=w);for(let U=0;U<b.length;U++){const C=b[U];C.setSize&&C.setSize(E,_),w&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(T,E){if(p||T.toneMapping===ni&&b.length===0)return!1;if(x=E,E!==null){const _=E.width,w=E.height;(a.width!==_||a.height!==w)&&this.setSize(_,w)}return M===!1&&T.setRenderTarget(a),m=T.toneMapping,T.toneMapping=ni,!0},this.hasRenderPass=function(){return M},this.end=function(T,E){T.toneMapping=m,p=!0;let _=a,w=o;for(let U=0;U<b.length;U++){const C=b[U];C.enabled!==!1&&(C.render(T,w,_,E),C.needsSwap!==!1&&(_=w,w=w===o?c:o))}if(g!==T.outputColorSpace||v!==T.toneMapping){g=T.outputColorSpace,v=T.toneMapping,f.defines={},oe.getTransfer(g)===me&&(f.defines.SRGB_TRANSFER="");const U=ng[v];U&&(f.defines[U]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(x),T.render(d,u),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}const Mu=new Je,Su=new ds(1,1),yu=new nu(1),bu=new $h,Eu=new kd,wu=new eu,Kc=[],Jc=[],Qc=new Float32Array(16),jc=new Float32Array(9),th=new Float32Array(4);function gs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Kc[s];if(r===void 0&&(r=new Float32Array(s),Kc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function xa(i,t){let e=Jc[t];e===void 0&&(e=new Int32Array(t),Jc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function sg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function lg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;th.set(n),i.uniformMatrix2fv(this.addr,!1,th),Oe(e,n)}}function cg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;jc.set(n),i.uniformMatrix3fv(this.addr,!1,jc),Oe(e,n)}}function hg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Qc.set(n),i.uniformMatrix4fv(this.addr,!1,Qc),Oe(e,n)}}function ug(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function mg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function _g(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function Ma(i){return i.version===0&&(i.compareFunction=Vh,i.needsUpdate=!0),i}function xg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ma(Su):r=Mu,e.setTexture2D(t||r,s)}function Mg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Eu,s)}function Sg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ma(yu):r=wu,e.setTextureCube(t||r,s)}function yg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||bu,s)}function bg(i){switch(i){case 5126:return sg;case 35664:return rg;case 35665:return ag;case 35666:return og;case 35674:return lg;case 35675:return cg;case 35676:return hg;case 5124:case 35670:return ug;case 35667:case 35671:return dg;case 35668:case 35672:return fg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return _g;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return yg}}function Eg(i,t){i.uniform1fv(this.addr,t)}function wg(i,t){const e=gs(t,this.size,2);i.uniform2fv(this.addr,e)}function Tg(i,t){const e=gs(t,this.size,3);i.uniform3fv(this.addr,e)}function Ag(i,t){const e=gs(t,this.size,4);i.uniform4fv(this.addr,e)}function Rg(i,t){const e=gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Cg(i,t){const e=gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Pg(i,t){const e=gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Lg(i,t){i.uniform1iv(this.addr,t)}function Ig(i,t){i.uniform2iv(this.addr,t)}function Dg(i,t){i.uniform3iv(this.addr,t)}function Ng(i,t){i.uniform4iv(this.addr,t)}function Ug(i,t){i.uniform1uiv(this.addr,t)}function Fg(i,t){i.uniform2uiv(this.addr,t)}function Og(i,t){i.uniform3uiv(this.addr,t)}function Bg(i,t){i.uniform4uiv(this.addr,t)}function zg(i,t,e){const n=this.cache,s=t.length,r=xa(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ma(Su):a=Mu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function kg(i,t,e){const n=this.cache,s=t.length,r=xa(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Eu,r[a])}function Gg(i,t,e){const n=this.cache,s=t.length,r=xa(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Ma(yu):a=wu;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Hg(i,t,e){const n=this.cache,s=t.length,r=xa(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||bu,r[a])}function Vg(i){switch(i){case 5126:return Eg;case 35664:return wg;case 35665:return Tg;case 35666:return Ag;case 35674:return Rg;case 35675:return Cg;case 35676:return Pg;case 5124:case 35670:return Lg;case 35667:case 35671:return Ig;case 35668:case 35672:return Dg;case 35669:case 35673:return Ng;case 5125:return Ug;case 36294:return Fg;case 36295:return Og;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return Hg}}class Wg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=bg(e.type)}}class Xg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vg(e.type)}}class qg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const so=/(\w+)(\])?(\[|\.)?/g;function eh(i,t){i.seq.push(t),i.map[t.id]=t}function Yg(i,t,e){const n=i.name,s=n.length;for(so.lastIndex=0;;){const r=so.exec(n),a=so.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){eh(e,l===void 0?new Wg(o,i,t):new Xg(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new qg(o),eh(e,f)),e=f}}}class Kr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Yg(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function nh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const $g=37297;let Zg=0;function Kg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const ih=new Xt;function Jg(i){oe._getMatrix(ih,oe.workingColorSpace,i);const t=`mat3( ${ih.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case ta:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function sh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Kg(i.getShaderSource(t),o)}else return r}function Qg(i,t){const e=Jg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const jg={[Ah]:"Linear",[Rh]:"Reinhard",[Ch]:"Cineon",[pl]:"ACESFilmic",[Lh]:"AgX",[Ih]:"Neutral",[Ph]:"Custom"};function t_(i,t){const e=jg[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Vr=new R;function e_(){oe.getLuminanceCoefficients(Vr);const i=Vr.x.toFixed(4),t=Vr.y.toFixed(4),e=Vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function i_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function s_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Is(i){return i!==""}function rh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function ah(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const r_=/^[ \t]*#include +<([\w\d./]+)>/gm;function rl(i){return i.replace(r_,a_)}function a_(i,t){const e=Jt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return rl(e)}const o_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oh(i){return i.replace(o_,l_)}function l_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const c_={[Ns]:"SHADOWMAP_TYPE_PCF",[Ps]:"SHADOWMAP_TYPE_VSM"};function h_(i){return c_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const u_={[ks]:"ENVMAP_MODE_REFRACTION"};function d_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":u_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const f_={[Th]:"ENVMAP_BLENDING_MULTIPLY",[vd]:"ENVMAP_BLENDING_MIX",[xd]:"ENVMAP_BLENDING_ADD"};function p_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":f_[i.combine]||"ENVMAP_BLENDING_NONE"}function m_(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=h_(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=d_(e),f=p_(e),d=n_(e),u=i_(r),g=s.createProgram();let v,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Is).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Is).join(`
`),p.length>0&&(p+=`
`)):(v=[lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),p=[lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?Jt.tonemapping_pars_fragment:"",e.toneMapping!==ni?t_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Qg("linearToOutputTexel",e.outputColorSpace),e_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Is).join(`
`)),a=rl(a),a=rh(a,e),a=ah(a,e),o=rl(o),o=rh(o,e),o=ah(o,e),a=oh(a),o=oh(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",e.glslVersion===nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=m+v+a,b=m+p+o,M=nh(s,s.VERTEX_SHADER,x),T=nh(s,s.FRAGMENT_SHADER,b);s.attachShader(g,M),s.attachShader(g,T),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(C){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(g)||"",F=s.getShaderInfoLog(M)||"",W=s.getShaderInfoLog(T)||"",I=D.trim(),G=F.trim(),Y=W.trim();let B=!0,it=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,M,T);else{const X=sh(s,M,"vertex"),j=sh(s,T,"fragment");le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+X+`
`+j)}else I!==""?Ht("WebGLProgram: Program Info Log:",I):(G===""||Y==="")&&(it=!1);it&&(C.diagnostics={runnable:B,programLog:I,vertexShader:{log:G,prefix:v},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(M),s.deleteShader(T),_=new Kr(s,g),w=s_(s,g)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(g,$g)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=T,this}let g_=0;class __{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new v_(t),e.set(t,n)),n}}class v_{constructor(t){this.id=g_++,this.code=t,this.usedTimes=0}}function x_(i){return i===Fi||i===Jr||i===Qr}function M_(i,t,e,n,s,r){const a=new yl,o=new __,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,w,U,C,D,F){const W=C.fog,I=D.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,B=t.get(_.envMap||G,Y),it=d[_.type];let X=n.precision;_.precision!==null&&(X=n.getMaxPrecision(_.precision),X!==_.precision&&Ht("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));const j=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,nt=j!==void 0?j.length:0;let At=0;I.morphAttributes.position!==void 0&&(At=1),I.morphAttributes.normal!==void 0&&(At=2),I.morphAttributes.color!==void 0&&(At=3);let kt,$,Mt,Rt;if(it){const bt=On[it];kt=bt.vertexShader,$=bt.fragmentShader}else{kt=_.vertexShader,$=_.fragmentShader;const bt=o.getVertexShaderStage(_),pe=o.getFragmentShaderStage(_);o.update(_,bt,pe),Mt=bt.id,Rt=pe.id}const Ot=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),Bt=D.isInstancedMesh===!0,Se=D.isBatchedMesh===!0,Gt=!!_.map,jt=!!_.matcap,ne=!!B,tt=ne&&B.isPMREMTexture===!0,dt=!!_.aoMap,ct=!!_.lightMap,Tt=!!_.bumpMap&&_.wireframe===!1,xt=!!_.normalMap,Yt=!!_.displacementMap,Nt=!!_.emissiveMap,ie=!!_.metalnessMap,se=!!_.roughnessMap,de=_.anisotropy>0,N=_.clearcoat>0,Ce=_.diffuseRoughness>0,te=_.dispersion>0,_e=_.retroreflectivity>0,gt=_.iridescence>0,Te=_.sheen>0,zt=_.transmission>0,Vt=de&&!!_.anisotropyMap,A=N&&!!_.clearcoatMap,S=N&&!!_.clearcoatNormalMap,z=N&&!!_.clearcoatRoughnessMap,st=Ce&&!!_.diffuseRoughnessMap,Q=gt&&!!_.iridescenceMap,ht=gt&&!!_.iridescenceThicknessMap,_t=Te&&!!_.sheenColorMap,Z=Te&&!!_.sheenRoughnessMap,K=!!_.specularMap,ft=!!_.specularColorMap,P=!!_.specularIntensityMap,J=zt&&!!_.transmissionMap,q=zt&&!!_.thicknessMap,pt=!!_.gradientMap,lt=!!_.alphaMap,ut=_.alphaTest>0,Ut=!!_.alphaHash,Kt=!!_.extensions;let rt=ni;_.toneMapped&&(Ot===null||Ot.isXRRenderTarget===!0)&&(rt=i.toneMapping);const Ft=tt?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,Zt={shaderID:it,shaderType:_.type,shaderName:_.name,vertexShader:kt,fragmentShader:$,defines:_.defines,customVertexShaderID:Mt,customFragmentShaderID:Rt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:Se,batchingColor:Se&&D._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&D.instanceColor!==null,instancingMorph:Bt&&D.morphTexture!==null,outputColorSpace:Ot===null?i.outputColorSpace:Ot.isXRRenderTarget===!0?Ot.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Gt,matcap:jt,envMap:ne,envMapMode:ne&&B.mapping,envMapPMREM:tt,envMapMaxLod:tt?Ft.length-1:null,envMapSize:tt?Ft[0].width:null,aoMap:dt,lightMap:ct,bumpMap:Tt,normalMap:xt,displacementMap:Yt,emissiveMap:Nt,normalMapObjectSpace:xt&&_.normalMapType===yd,normalMapTangentSpace:xt&&_.normalMapType===Ko,packedNormalMap:xt&&_.normalMapType===Ko&&x_(_.normalMap.format),metalnessMap:ie,roughnessMap:se,anisotropy:de,anisotropyMap:Vt,clearcoat:N,clearcoatMap:A,clearcoatNormalMap:S,clearcoatRoughnessMap:z,diffuseRoughness:Ce,diffuseRoughnessMap:st,dispersion:te,retroreflection:_e,iridescence:gt,iridescenceMap:Q,iridescenceThicknessMap:ht,sheen:Te,sheenColorMap:_t,sheenRoughnessMap:Z,specularMap:K,specularColorMap:ft,specularIntensityMap:P,transmission:zt,transmissionMap:J,thicknessMap:q,gradientMap:pt,opaque:_.transparent===!1&&_.blending===Us&&_.alphaToCoverage===!1,alphaMap:lt,alphaTest:ut,alphaHash:Ut,combine:_.combine,mapUv:Gt&&u(_.map.channel),aoMapUv:dt&&u(_.aoMap.channel),lightMapUv:ct&&u(_.lightMap.channel),bumpMapUv:Tt&&u(_.bumpMap.channel),normalMapUv:xt&&u(_.normalMap.channel),displacementMapUv:Yt&&u(_.displacementMap.channel),emissiveMapUv:Nt&&u(_.emissiveMap.channel),metalnessMapUv:ie&&u(_.metalnessMap.channel),roughnessMapUv:se&&u(_.roughnessMap.channel),anisotropyMapUv:Vt&&u(_.anisotropyMap.channel),clearcoatMapUv:A&&u(_.clearcoatMap.channel),clearcoatNormalMapUv:S&&u(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&u(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:st&&u(_.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&u(_.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&u(_.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&u(_.sheenColorMap.channel),sheenRoughnessMapUv:Z&&u(_.sheenRoughnessMap.channel),specularMapUv:K&&u(_.specularMap.channel),specularColorMapUv:ft&&u(_.specularColorMap.channel),specularIntensityMapUv:P&&u(_.specularIntensityMap.channel),transmissionMapUv:J&&u(_.transmissionMap.channel),thicknessMapUv:q&&u(_.thicknessMap.channel),alphaMapUv:lt&&u(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(xt||de),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(Gt||lt),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&xt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:yt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:At,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:F.filter(bt=>bt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:rt,decodeVideoTexture:Gt&&_.map.isVideoTexture===!0&&oe.getTransfer(_.map.colorSpace)===me,decodeVideoTextureEmissive:Nt&&_.emissiveMap.isVideoTexture===!0&&oe.getTransfer(_.emissiveMap.colorSpace)===me,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===hn,flipSided:_.side===Ke,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Kt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&_.extensions.multiDraw===!0||Se)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Zt.vertexUv1s=c.has(1),Zt.vertexUv2s=c.has(2),Zt.vertexUv3s=c.has(3),c.clear(),Zt}function v(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const U in _.defines)w.push(U),w.push(_.defines[U]);return _.isRawShaderMaterial===!1&&(p(w,_),m(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function p(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapPMREM),_.push(w.envMapMaxLod),_.push(w.envMapSize),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.diffuseRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.numLightProbeGrids),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function m(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.diffuseRoughness&&a.enable(25),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function x(_){const w=d[_.type];let U;if(w){const C=On[w];U=Hf.clone(C.uniforms)}else U=_.uniforms;return U}function b(_,w){let U=h.get(w);return U!==void 0?++U.usedTimes:(U=new m_(i,w,_,s),l.push(U),h.set(w,U)),U}function M(_){if(--_.usedTimes===0){const w=l.indexOf(_);l[w]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function E(){o.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:x,acquireProgram:b,releaseProgram:M,releaseShaderCache:T,programs:l,dispose:E}}function S_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function y_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ch(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function o(d,u,g,v,p,m){let x=i[t];return x===void 0?(x={id:d.id,object:d,geometry:u,material:g,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:p,group:m},i[t]=x):(x.id=d.id,x.object=d,x.geometry=u,x.material=g,x.materialVariant=a(d),x.groupOrder=v,x.renderOrder=d.renderOrder,x.z=p,x.group=m),t++,x}function c(d,u,g,v,p,m,x){x.reversedDepth===!0&&(p=-p);const b=o(d,u,g,v,p,m);g.transmission>0?n.push(b):g.transparent===!0?s.push(b):e.push(b)}function l(d,u,g,v,p,m){const x=o(d,u,g,v,p,m);g.transmission>0?n.unshift(x):g.transparent===!0?s.unshift(x):e.unshift(x)}function h(d,u){e.length>1&&e.sort(d||y_),n.length>1&&n.sort(u||ch),s.length>1&&s.sort(u||ch)}function f(){for(let d=t,u=i.length;d<u;d++){const g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function b_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new hh,i.set(n,[a])):s>=r.length?(a=new hh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function E_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new R,color:new Wt};break;case"SpotLight":e={position:new R,direction:new R,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function w_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let T_=0;function A_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function R_(i){const t=new E_,e=w_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const s=new R,r=new ge,a=new ge;function o(l){let h=0,f=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let u=0,g=0,v=0,p=0,m=0,x=0,b=0,M=0,T=0,E=0,_=0,w=0,U=0,C=0;l.sort(A_);for(let F=0,W=l.length;F<W;F++){const I=l[F],G=I.color,Y=I.intensity,B=I.distance;let it=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Fi?it=I.shadow.map.texture:it=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=G.r*Y,f+=G.g*Y,d+=G.b*Y;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],Y);C++}else if(I.isSunLight){const X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const j=I.shadow,nt=e.get(I);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=nt,n.sunShadowMap[g]=it;const At=j.getViewportCount();for(let kt=0;kt<At;kt++)n.sunShadowMatrix[v+kt]=j.getMatrix(kt),n.sunShadowCascade[v+kt]=j._cascadeData[kt];v+=At,g++}n.sun[u]=X,u++}else if(I.isDirectionalLight){const X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const j=I.shadow,nt=e.get(I);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,n.directionalShadow[p]=nt,n.directionalShadowMap[p]=it,n.directionalShadowMatrix[p]=I.shadow.matrix,T++}n.directional[p]=X,p++}else if(I.isSpotLight){const X=t.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(G).multiplyScalar(Y),X.distance=B,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[x]=X;const j=I.shadow;if(I.map&&(n.spotLightMap[w]=I.map,w++,j.updateMatrices(I),I.castShadow&&U++),n.spotLightMatrix[x]=j.matrix,I.castShadow){const nt=e.get(I);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,n.spotShadow[x]=nt,n.spotShadowMap[x]=it,_++}x++}else if(I.isRectAreaLight){const X=t.get(I);X.color.copy(G).multiplyScalar(Y),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[b]=X,b++}else if(I.isPointLight){const X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){const j=I.shadow,nt=e.get(I);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,nt.shadowCameraNear=j.camera.near,nt.shadowCameraFar=j.camera.far,n.pointShadow[m]=nt,n.pointShadowMap[m]=it,n.pointShadowMatrix[m]=I.shadow.matrix,E++}n.point[m]=X,m++}else if(I.isHemisphereLight){const X=t.get(I);X.skyColor.copy(I.color).multiplyScalar(Y),X.groundColor.copy(I.groundColor).multiplyScalar(Y),n.hemi[M]=X,M++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const D=n.hash;(D.sunLength!==u||D.directionalLength!==p||D.pointLength!==m||D.spotLength!==x||D.rectAreaLength!==b||D.hemiLength!==M||D.numSunShadows!==g||D.numDirectionalShadows!==T||D.numPointShadows!==E||D.numSpotShadows!==_||D.numSpotMaps!==w||D.numLightProbes!==C)&&(n.sun.length=u,n.directional.length=p,n.spot.length=x,n.rectArea.length=b,n.point.length=m,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+w-U,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=C,D.sunLength=u,D.directionalLength=p,D.pointLength=m,D.spotLength=x,D.rectAreaLength=b,D.hemiLength=M,D.numSunShadows=g,D.numDirectionalShadows=T,D.numPointShadows=E,D.numSpotShadows=_,D.numSpotMaps=w,D.numLightProbes=C,n.version=T_++)}function c(l,h){let f=0,d=0,u=0,g=0,v=0,p=0;const m=h.matrixWorldInverse;for(let x=0,b=l.length;x<b;x++){const M=l[x];if(M.isSunLight){const T=n.sun[f];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(m),f++}else if(M.isDirectionalLight){const T=n.directional[d];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),d++}else if(M.isSpotLight){const T=n.spot[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),g++}else if(M.isRectAreaLight){const T=n.rectArea[v];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const T=n.point[u];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){const T=n.hemi[p];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:o,setupView:c,state:n}}function uh(i){const t=new R_(i),e=[],n=[],s=[];function r(f){h.camera=f,e.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){n.push(f)}function c(){t.setup(e),s.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function l(f){t.setupView(e,f)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function C_(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new uh(i),t.set(s,[o])):r>=a.length?(o=new uh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const P_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,I_=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],D_=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],dh=new ge,Rs=new R,ro=new R;function N_(i,t,e){let n=new Ws;const s=new at,r=new at,a=new be,o=new qf,c=new Yf,l={},h=e.maxTextureSize,f={[vi]:Ke,[Ke]:vi,[hn]:hn},d=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:P_,fragmentShader:L_}),u=d.clone();u.defines.HORIZONTAL_PASS=1;const g=new Re;g.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new It(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ns;let m=this.type;this.render=function(E,_,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===ju&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ns);const U=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(os),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const W=m!==this.type;W&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(G=>G.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,G=E.length;I<G;I++){const Y=E[I],B=Y.shadow;if(B===void 0){Ht("WebGLShadowMap:",Y,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const it=B.getFrameExtents();s.multiply(it),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,B.mapSize.y=r.y));const X=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=X,B.map===null||W===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Ps){if(Y.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new kn(s.x,s.y,{format:Fi,type:Hn,minFilter:un,magFilter:un,generateMipmaps:!1}),B.map.texture.name=Y.name+".shadowMap",B.map.depthTexture=new ds(s.x,s.y,Bn),B.map.depthTexture.name=Y.name+".shadowMapDepth",B.map.depthTexture.format=xi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=We,B.map.depthTexture.magFilter=We}else Y.isPointLight?(B.map=new Pl(s.x),B.map.depthTexture=new nu(s.x,Gn)):(B.map=new kn(s.x,s.y),B.map.depthTexture=new ds(s.x,s.y,Gn)),B.map.depthTexture.name=Y.name+".shadowMap",B.map.depthTexture.format=xi,this.type===Ns?(B.map.depthTexture.compareFunction=X?Hh:Gh,B.map.depthTexture.minFilter=un,B.map.depthTexture.magFilter=un):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=We,B.map.depthTexture.magFilter=We);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);const j=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();Y.isPointLight!==!0&&B.updateMatrices(Y,w);const nt=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:w.layers;for(let At=0;At<j;At++){const kt=B.getCamera(At);if(Y.isPointLight){const $=B.camera,Mt=B.matrix,Rt=Y.distance||$.far;Rt!==$.far&&($.far=Rt,$.updateProjectionMatrix()),Rs.setFromMatrixPosition(Y.matrixWorld),$.position.copy(Rs),ro.copy($.position),ro.add(I_[At]),$.up.copy(D_[At]),$.lookAt(ro),$.updateMatrixWorld(),Mt.makeTranslation(-Rs.x,-Rs.y,-Rs.z),dh.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),B._frustum.setFromProjectionMatrix(dh,$.coordinateSystem,$.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,At),i.clear();else{At===0&&(i.setRenderTarget(B.map),i.clear());const $=B.getViewport(At);a.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),F.viewport(a)}n=B.getFrustum(At),M(_,w,kt,Y,nt,this.type)}B.isPointLightShadow!==!0&&this.type===Ps&&x(B,w),B.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(U,C,D)};function x(E,_){const w=t.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new kn(s.x,s.y,{format:Fi,type:Hn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(_,null,w,d,v,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(_,null,w,u,v,null)}function b(E,_,w,U){let C=null;const D=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)C=D;else if(C=w.isPointLight===!0?c:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const F=C.uuid,W=_.uuid;let I=l[F];I===void 0&&(I={},l[F]=I);let G=I[W];G===void 0&&(G=C.clone(),I[W]=G,_.addEventListener("dispose",T)),C=G}if(C.visible=_.visible,C.wireframe=_.wireframe,U===Ps?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:f[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,w.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const F=i.properties.get(C);F.light=w}return C}function M(E,_,w,U,C,D){if(E.visible===!1)return;if(E.layers.test(C)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===Ps)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);const I=t.update(E),G=E.material;if(Array.isArray(G)){const Y=I.groups;for(let B=0,it=Y.length;B<it;B++){const X=Y[B],j=G[X.materialIndex];if(j&&j.visible){const nt=b(E,j,U,D);E.onBeforeShadow(i,E,_,w,I,nt,X),i.renderBufferDirect(w,null,I,nt,E,X),E.onAfterShadow(i,E,_,w,I,nt,X)}}}else if(G.visible){const Y=b(E,G,U,D);E.onBeforeShadow(i,E,_,w,I,Y,null),i.renderBufferDirect(w,null,I,Y,E,null),E.onAfterShadow(i,E,_,w,I,Y,null)}}const W=E.children;for(let I=0,G=W.length;I<G;I++)M(W[I],_,w,U,C,D)}function T(E){E.target.removeEventListener("dispose",T);for(const w in l){const U=l[w],C=E.target.uuid;C in U&&(U[C].dispose(),delete U[C])}}}function U_(i,t){function e(){let P=!1;const J=new be;let q=null;const pt=new be(0,0,0,0);return{setMask:function(lt){q!==lt&&!P&&(i.colorMask(lt,lt,lt,lt),q=lt)},setLocked:function(lt){P=lt},setClear:function(lt,ut,Ut,Kt,rt){rt===!0&&(lt*=Kt,ut*=Kt,Ut*=Kt),J.set(lt,ut,Ut,Kt),pt.equals(J)===!1&&(i.clearColor(lt,ut,Ut,Kt),pt.copy(J))},reset:function(){P=!1,q=null,pt.set(-1,0,0,0)}}}function n(){let P=!1,J=!1,q=null,pt=null,lt=null;return{setReversed:function(ut){if(J!==ut){const Ut=t.get("EXT_clip_control");ut?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),J=ut;const Kt=lt;lt=null,this.setClear(Kt)}},getReversed:function(){return J},setTest:function(ut){ut?yt(i.DEPTH_TEST):Bt(i.DEPTH_TEST)},setMask:function(ut){q!==ut&&!P&&(i.depthMask(ut),q=ut)},setFunc:function(ut){if(J&&(ut=Id[ut]),pt!==ut){switch(ut){case uo:i.depthFunc(i.NEVER);break;case fo:i.depthFunc(i.ALWAYS);break;case po:i.depthFunc(i.LESS);break;case zs:i.depthFunc(i.LEQUAL);break;case mo:i.depthFunc(i.EQUAL);break;case go:i.depthFunc(i.GEQUAL);break;case _o:i.depthFunc(i.GREATER);break;case vo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=ut}},setLocked:function(ut){P=ut},setClear:function(ut){lt!==ut&&(lt=ut,J&&(ut=1-ut),i.clearDepth(ut))},reset:function(){P=!1,q=null,pt=null,lt=null,J=!1}}}function s(){let P=!1,J=null,q=null,pt=null,lt=null,ut=null,Ut=null,Kt=null,rt=null;return{setTest:function(Ft){P||(Ft?yt(i.STENCIL_TEST):Bt(i.STENCIL_TEST))},setMask:function(Ft){J!==Ft&&!P&&(i.stencilMask(Ft),J=Ft)},setFunc:function(Ft,Zt,bt){(q!==Ft||pt!==Zt||lt!==bt)&&(i.stencilFunc(Ft,Zt,bt),q=Ft,pt=Zt,lt=bt)},setOp:function(Ft,Zt,bt){(ut!==Ft||Ut!==Zt||Kt!==bt)&&(i.stencilOp(Ft,Zt,bt),ut=Ft,Ut=Zt,Kt=bt)},setLocked:function(Ft){P=Ft},setClear:function(Ft){rt!==Ft&&(i.clearStencil(Ft),rt=Ft)},reset:function(){P=!1,J=null,q=null,pt=null,lt=null,ut=null,Ut=null,Kt=null,rt=null}}}const r=new e,a=new n,o=new s;let c={};const l=new WeakMap;let h={},f={},d={},u=new WeakMap,g=[],v=null,p=!1,m=null,x=null,b=null,M=null,T=null,E=null,_=null,w=new Wt(0,0,0),U=0,C=!1,D=null,F=null,W=null,I=null,G=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,it=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=it>=1):X.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=it>=2);let j=null,nt={};const At=i.getParameter(i.SCISSOR_BOX),kt=i.getParameter(i.VIEWPORT),$=new be().fromArray(At),Mt=new be().fromArray(kt);function Rt(P,J,q,pt){const lt=new Uint8Array(4),ut=i.createTexture();i.bindTexture(P,ut),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<q;Ut++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(J+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return ut}const Ot={};Ot[i.TEXTURE_2D]=Rt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ot[i.TEXTURE_CUBE_MAP]=Rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ot[i.TEXTURE_2D_ARRAY]=Rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ot[i.TEXTURE_3D]=Rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),yt(i.DEPTH_TEST),a.setFunc(zs),Tt(!1),xt(jl),yt(i.CULL_FACE),dt(os);function yt(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function Bt(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Se(P,J){return d[P]!==J?(i.bindFramebuffer(P,J),d[P]=J,P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=J),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=J),!0):!1}function Gt(P,J){let q=g,pt=!1;if(P){q=u.get(J),q===void 0&&(q=[],u.set(J,q));const lt=P.textures;if(q.length!==lt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Ut=lt.length;ut<Ut;ut++)q[ut]=i.COLOR_ATTACHMENT0+ut;q.length=lt.length,pt=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,pt=!0);pt&&i.drawBuffers(q)}function jt(P){return v!==P?(i.useProgram(P),v=P,!0):!1}const ne={[rs]:i.FUNC_ADD,[ed]:i.FUNC_SUBTRACT,[nd]:i.FUNC_REVERSE_SUBTRACT};ne[id]=i.MIN,ne[sd]=i.MAX;const tt={[rd]:i.ZERO,[ad]:i.ONE,[od]:i.SRC_COLOR,[Eh]:i.SRC_ALPHA,[fd]:i.SRC_ALPHA_SATURATE,[ud]:i.DST_COLOR,[cd]:i.DST_ALPHA,[ld]:i.ONE_MINUS_SRC_COLOR,[wh]:i.ONE_MINUS_SRC_ALPHA,[dd]:i.ONE_MINUS_DST_COLOR,[hd]:i.ONE_MINUS_DST_ALPHA,[pd]:i.CONSTANT_COLOR,[md]:i.ONE_MINUS_CONSTANT_COLOR,[gd]:i.CONSTANT_ALPHA,[_d]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(P,J,q,pt,lt,ut,Ut,Kt,rt,Ft){if(P===os){p===!0&&(Bt(i.BLEND),p=!1);return}if(p===!1&&(yt(i.BLEND),p=!0),P!==td){if(P!==m||Ft!==C){if((x!==rs||T!==rs)&&(i.blendEquation(i.FUNC_ADD),x=rs,T=rs),Ft)switch(P){case Us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ii:i.blendFunc(i.ONE,i.ONE);break;case tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ec:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:le("WebGLState: Invalid blending: ",P);break}else switch(P){case Us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case tc:le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ec:le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:le("WebGLState: Invalid blending: ",P);break}b=null,M=null,E=null,_=null,w.set(0,0,0),U=0,m=P,C=Ft}return}lt=lt||J,ut=ut||q,Ut=Ut||pt,(J!==x||lt!==T)&&(i.blendEquationSeparate(ne[J],ne[lt]),x=J,T=lt),(q!==b||pt!==M||ut!==E||Ut!==_)&&(i.blendFuncSeparate(tt[q],tt[pt],tt[ut],tt[Ut]),b=q,M=pt,E=ut,_=Ut),(Kt.equals(w)===!1||rt!==U)&&(i.blendColor(Kt.r,Kt.g,Kt.b,rt),w.copy(Kt),U=rt),m=P,C=!1}function ct(P,J){P.side===hn?Bt(i.CULL_FACE):yt(i.CULL_FACE);let q=P.side===Ke;J&&(q=!q),Tt(q),P.blending===Us&&P.transparent===!1?dt(os):dt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const pt=P.stencilWrite;o.setTest(pt),pt&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Nt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?yt(i.SAMPLE_ALPHA_TO_COVERAGE):Bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(P){D!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),D=P)}function xt(P){P!==Ju?(yt(i.CULL_FACE),P!==F&&(P===jl?i.cullFace(i.BACK):P===Qu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Bt(i.CULL_FACE),F=P}function Yt(P){P!==W&&(B&&i.lineWidth(P),W=P)}function Nt(P,J,q){P?(yt(i.POLYGON_OFFSET_FILL),(I!==J||G!==q)&&(I=J,G=q,a.getReversed()&&(J=-J,q=-q),i.polygonOffset(J,q))):Bt(i.POLYGON_OFFSET_FILL)}function ie(P){P?yt(i.SCISSOR_TEST):Bt(i.SCISSOR_TEST)}function se(P){P===void 0&&(P=i.TEXTURE0+Y-1),j!==P&&(i.activeTexture(P),j=P)}function de(P,J,q){q===void 0&&(j===null?q=i.TEXTURE0+Y-1:q=j);let pt=nt[q];pt===void 0&&(pt={type:void 0,texture:void 0},nt[q]=pt),(pt.type!==P||pt.texture!==J)&&(j!==q&&(i.activeTexture(q),j=q),i.bindTexture(P,J||Ot[P]),pt.type=P,pt.texture=J)}function N(){const P=nt[j];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Ce(){try{i.compressedTexImage2D(...arguments)}catch(P){le("WebGLState:",P)}}function te(){try{i.compressedTexImage3D(...arguments)}catch(P){le("WebGLState:",P)}}function _e(){try{i.texSubImage2D(...arguments)}catch(P){le("WebGLState:",P)}}function gt(){try{i.texSubImage3D(...arguments)}catch(P){le("WebGLState:",P)}}function Te(){try{i.compressedTexSubImage2D(...arguments)}catch(P){le("WebGLState:",P)}}function zt(){try{i.compressedTexSubImage3D(...arguments)}catch(P){le("WebGLState:",P)}}function Vt(){try{i.texStorage2D(...arguments)}catch(P){le("WebGLState:",P)}}function A(){try{i.texStorage3D(...arguments)}catch(P){le("WebGLState:",P)}}function S(){try{i.texImage2D(...arguments)}catch(P){le("WebGLState:",P)}}function z(){try{i.texImage3D(...arguments)}catch(P){le("WebGLState:",P)}}function st(P){return f[P]!==void 0?f[P]:i.getParameter(P)}function Q(P,J){f[P]!==J&&(i.pixelStorei(P,J),f[P]=J)}function ht(P){$.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),$.copy(P))}function _t(P){Mt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Mt.copy(P))}function Z(P,J){let q=l.get(J);q===void 0&&(q=new WeakMap,l.set(J,q));let pt=q.get(P);pt===void 0&&(pt=i.getUniformBlockIndex(J,P.name),i.uniformBlockBinding(J,pt,pt),q.set(P,pt))}function K(P,J,q){const lt=l.get(J).get(P);c[lt]!==q&&(i.bindBufferBase(i.UNIFORM_BUFFER,lt,q),c[lt]=q)}function ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},j=null,nt={},d={},c={},u=new WeakMap,g=[],v=null,p=!1,m=null,x=null,b=null,M=null,T=null,E=null,_=null,w=new Wt(0,0,0),U=0,C=!1,D=null,F=null,W=null,I=null,G=null,$.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:yt,disable:Bt,bindFramebuffer:Se,drawBuffers:Gt,useProgram:jt,setBlending:dt,setMaterial:ct,setFlipSided:Tt,setCullFace:xt,setLineWidth:Yt,setPolygonOffset:Nt,setScissorTest:ie,activeTexture:se,bindTexture:de,unbindTexture:N,compressedTexImage2D:Ce,compressedTexImage3D:te,texImage2D:S,texImage3D:z,pixelStorei:Q,getParameter:st,updateUBOMapping:Z,uniformBlockBinding:K,texStorage2D:Vt,texStorage3D:A,texSubImage2D:_e,texSubImage3D:gt,compressedTexSubImage2D:Te,compressedTexSubImage3D:zt,scissor:ht,viewport:_t,reset:ft}}function F_(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new at,h=new WeakMap,f=new Set;let d;const u=new WeakMap,g=new Set,v=new FinalizationRegistry(A=>g.delete(A));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,S){return p?new OffscreenCanvas(A,S):ea("canvas")}function x(A,S,z){let st=1;const Q=Vt(A);if((Q.width>z||Q.height>z)&&(st=z/Math.max(Q.width,Q.height)),st<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ht=Math.floor(st*Q.width),_t=Math.floor(st*Q.height);d===void 0&&(d=m(ht,_t));const Z=S?m(ht,_t):d;return Z.width=ht,Z.height=_t,Z.getContext("2d").drawImage(A,0,0,ht,_t),Ht("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ht+"x"+_t+")."),Z}else return"data"in A&&Ht("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function b(A){return A.generateMipmaps}function M(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(A,S,z,st,Q,ht=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let _t;st&&(_t=t.get("EXT_texture_norm16"),_t||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=S;if(S===i.RED&&(z===i.FLOAT&&(Z=i.R32F),z===i.HALF_FLOAT&&(Z=i.R16F),z===i.UNSIGNED_BYTE&&(Z=i.R8),z===i.UNSIGNED_SHORT&&_t&&(Z=_t.R16_EXT),z===i.SHORT&&_t&&(Z=_t.R16_SNORM_EXT)),S===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.R8UI),z===i.UNSIGNED_SHORT&&(Z=i.R16UI),z===i.UNSIGNED_INT&&(Z=i.R32UI),z===i.BYTE&&(Z=i.R8I),z===i.SHORT&&(Z=i.R16I),z===i.INT&&(Z=i.R32I)),S===i.RG&&(z===i.FLOAT&&(Z=i.RG32F),z===i.HALF_FLOAT&&(Z=i.RG16F),z===i.UNSIGNED_BYTE&&(Z=i.RG8),z===i.UNSIGNED_SHORT&&_t&&(Z=_t.RG16_EXT),z===i.SHORT&&_t&&(Z=_t.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RG8UI),z===i.UNSIGNED_SHORT&&(Z=i.RG16UI),z===i.UNSIGNED_INT&&(Z=i.RG32UI),z===i.BYTE&&(Z=i.RG8I),z===i.SHORT&&(Z=i.RG16I),z===i.INT&&(Z=i.RG32I)),S===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),z===i.UNSIGNED_INT&&(Z=i.RGB32UI),z===i.BYTE&&(Z=i.RGB8I),z===i.SHORT&&(Z=i.RGB16I),z===i.INT&&(Z=i.RGB32I)),S===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),z===i.UNSIGNED_INT&&(Z=i.RGBA32UI),z===i.BYTE&&(Z=i.RGBA8I),z===i.SHORT&&(Z=i.RGBA16I),z===i.INT&&(Z=i.RGBA32I)),S===i.RGB&&(z===i.UNSIGNED_SHORT&&_t&&(Z=_t.RGB16_EXT),z===i.SHORT&&_t&&(Z=_t.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),S===i.RGBA){const K=ht?ta:oe.getTransfer(Q);z===i.FLOAT&&(Z=i.RGBA32F),z===i.HALF_FLOAT&&(Z=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Z=K===me?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&_t&&(Z=_t.RGBA16_EXT),z===i.SHORT&&_t&&(Z=_t.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(A,S){let z;return A?S===null||S===Gn||S===us?z=i.DEPTH24_STENCIL8:S===Bn?z=i.DEPTH32F_STENCIL8:S===Hs&&(z=i.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Gn||S===us?z=i.DEPTH_COMPONENT24:S===Bn?z=i.DEPTH_COMPONENT32F:S===Hs&&(z=i.DEPTH_COMPONENT16),z}function w(A,S){return b(A)===!0||A.isFramebufferTexture&&A.minFilter!==We&&A.minFilter!==un?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function U(A){const S=new WeakRef(A);n.get(A).__ref=S,g.add(S),v.register(A,S,S)}function C(A){const S=n.get(A).__ref;S!==void 0&&(g.delete(S),v.unregister(S))}function D(A){W(A.target)}function F(A){I(A.target)}function W(A){A.removeEventListener("dispose",D),C(A),Y(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&f.delete(A)}function I(A){A.removeEventListener("dispose",F),C(A),it(A)}function G(){for(const A of g){const S=A.deref();S!==void 0&&(S.isRenderTarget===!0?I(S):W(S))}g.clear(),f.clear()}function Y(A){const S=n.get(A);if(S.__webglInit===void 0)return;const z=A.source,st=u.get(z);if(st){const Q=st[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&B(A),Object.keys(st).length===0&&u.delete(z)}n.remove(A)}function B(A){const S=n.get(A);i.deleteTexture(S.__webglTexture);const z=A.source,st=u.get(z);delete st[S.__cacheKey],a.memory.textures--}function it(A){const S=n.get(A);S.__depthDisposeCallback&&S.__depthDisposeCallback();const z=A.depthTexture;if(z&&z.renderTarget===A&&W(z),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let ht=0;ht<S.__webglFramebuffer[Q].length;ht++)i.deleteFramebuffer(S.__webglFramebuffer[Q][ht]);else i.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)i.deleteFramebuffer(S.__webglFramebuffer[Q]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const st=A.textures;for(let Q=0,ht=st.length;Q<ht;Q++){const _t=n.get(st[Q]);_t.__webglTexture&&(i.deleteTexture(_t.__webglTexture),a.memory.textures--),n.remove(st[Q])}n.remove(A)}let X=0;function j(){X=0}function nt(){return X}function At(A){X=A}function kt(){const A=X;return A>=s.maxTextures&&Ht("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,A}function $(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.mipmapsAutoUpdate),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function Mt(A,S){const z=n.get(A);if(A.isVideoTexture&&Te(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){const st=A.image;if(st===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{ct(z,A,S);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+S)}function Rt(A,S){const z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){ct(z,A,S);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+S)}function Ot(A,S){const z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){ct(z,A,S);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+S)}function yt(A,S){const z=n.get(A);if(A.version>0&&z.__version!==A.version){Tt(z,A,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+S)}const Bt={[Gs]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[xo]:i.MIRRORED_REPEAT},Se={[We]:i.NEAREST,[Md]:i.NEAREST_MIPMAP_NEAREST,[hr]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[Ra]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},Gt={[Ed]:i.NEVER,[Vh]:i.ALWAYS,[wd]:i.LESS,[Gh]:i.LEQUAL,[Td]:i.EQUAL,[Hh]:i.GEQUAL,[Ad]:i.GREATER,[Rd]:i.NOTEQUAL};function jt(A,S){if(S.type===Bn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===un||S.magFilter===Ra||S.magFilter===hr||S.magFilter===mi||S.minFilter===un||S.minFilter===Ra||S.minFilter===hr||S.minFilter===mi)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Bt[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Bt[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Bt[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Se[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Se[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Gt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===We||S.minFilter!==hr&&S.minFilter!==mi||S.type===Bn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ne(A,S){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",D),U(S));const st=S.source;let Q=u.get(st);Q===void 0&&(Q={},u.set(st,Q));const ht=$(S);if(ht!==A.__cacheKey){Q[ht]===void 0&&(Q[ht]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Q[ht].usedTimes++;const _t=Q[A.__cacheKey];_t!==void 0&&(Q[A.__cacheKey].usedTimes--,_t.usedTimes===0&&B(S)),A.__cacheKey=ht,A.__webglTexture=Q[ht].texture}return z}function tt(A,S,z){return Math.floor(Math.floor(A/z)/S)}function dt(A,S,z,st){const ht=A.updateRanges;if(ht.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,z,st,S.data);else{ht.sort((P,J)=>P.start-J.start);let _t=0;for(let P=1;P<ht.length;P++){const J=ht[_t],q=ht[P],pt=J.start+J.count,lt=tt(q.start,S.width,4),ut=tt(J.start,S.width,4);q.start<=pt+1&&lt===ut&&tt(q.start+q.count-1,S.width,4)===lt?J.count=Math.max(J.count,q.start+q.count-J.start):(++_t,ht[_t]=q)}ht.length=_t+1;const Z=e.getParameter(i.UNPACK_ROW_LENGTH),K=e.getParameter(i.UNPACK_SKIP_PIXELS),ft=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let P=0,J=ht.length;P<J;P++){const q=ht[P],pt=Math.floor(q.start/4),lt=Math.ceil(q.count/4),ut=pt%S.width,Ut=Math.floor(pt/S.width),Kt=lt,rt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ut),e.texSubImage2D(i.TEXTURE_2D,0,ut,Ut,Kt,rt,z,st,S.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,K),e.pixelStorei(i.UNPACK_SKIP_ROWS,ft)}}function ct(A,S,z){let st=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(st=i.TEXTURE_3D);const Q=ne(A,S),ht=S.source;e.bindTexture(st,A.__webglTexture,i.TEXTURE0+z);const _t=n.get(ht);if(ht.version!==_t.__version||Q===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const rt=oe.getPrimaries(oe.workingColorSpace),Ft=S.colorSpace===pi?null:oe.getPrimaries(S.colorSpace),Zt=S.colorSpace===pi||rt===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt)}e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let K=x(S.image,!1,s.maxTextureSize);K=zt(S,K);const ft=r.convert(S.format,S.colorSpace),P=r.convert(S.type);let J=E(S.internalFormat,ft,P,S.normalized,S.colorSpace,S.isVideoTexture);jt(st,S);let q;const pt=S.mipmaps,lt=S.isVideoTexture!==!0,ut=_t.__version===void 0||Q===!0,Ut=ht.dataReady,Kt=w(S,K);if(S.isDepthTexture)J=_(S.format===gi,S.type),ut&&(lt?e.texStorage2D(i.TEXTURE_2D,1,J,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,J,K.width,K.height,0,ft,P,null));else if(S.isDataTexture)if(pt.length>0){lt&&ut&&e.texStorage2D(i.TEXTURE_2D,Kt,J,pt[0].width,pt[0].height);for(let rt=0,Ft=pt.length;rt<Ft;rt++)q=pt[rt],lt?Ut&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,q.width,q.height,ft,P,q.data):e.texImage2D(i.TEXTURE_2D,rt,J,q.width,q.height,0,ft,P,q.data);S.generateMipmaps=!1}else lt?(ut&&e.texStorage2D(i.TEXTURE_2D,Kt,J,K.width,K.height),Ut&&dt(S,K,ft,P)):e.texImage2D(i.TEXTURE_2D,0,J,K.width,K.height,0,ft,P,K.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){lt&&ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Kt,J,pt[0].width,pt[0].height,K.depth);for(let rt=0,Ft=pt.length;rt<Ft;rt++)if(q=pt[rt],S.format!==zn)if(ft!==null)if(lt){if(Ut)if(S.layerUpdates.size>0){const Zt=Xc(q.width,q.height,S.format,S.type);for(const bt of S.layerUpdates){const pe=q.data.subarray(bt*Zt/q.data.BYTES_PER_ELEMENT,(bt+1)*Zt/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,bt,q.width,q.height,1,ft,pe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,q.width,q.height,K.depth,ft,q.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,J,q.width,q.height,K.depth,0,q.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?Ut&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,q.width,q.height,K.depth,ft,P,q.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,J,q.width,q.height,K.depth,0,ft,P,q.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{lt&&ut&&e.texStorage2D(i.TEXTURE_2D,Kt,J,pt[0].width,pt[0].height);for(let rt=0,Ft=pt.length;rt<Ft;rt++)q=pt[rt],S.format!==zn?ft!==null?lt?Ut&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,q.width,q.height,ft,q.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,J,q.width,q.height,0,q.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?Ut&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,q.width,q.height,ft,P,q.data):e.texImage2D(i.TEXTURE_2D,rt,J,q.width,q.height,0,ft,P,q.data)}else if(S.isDataArrayTexture)if(lt){if(ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Kt,J,K.width,K.height,K.depth),Ut)if(S.layerUpdates.size>0){const rt=Xc(K.width,K.height,S.format,S.type);for(const Ft of S.layerUpdates){const Zt=K.data.subarray(Ft*rt/K.data.BYTES_PER_ELEMENT,(Ft+1)*rt/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ft,K.width,K.height,1,ft,P,Zt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ft,P,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,J,K.width,K.height,K.depth,0,ft,P,K.data);else if(S.isData3DTexture)lt?(ut&&e.texStorage3D(i.TEXTURE_3D,Kt,J,K.width,K.height,K.depth),Ut&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ft,P,K.data)):e.texImage3D(i.TEXTURE_3D,0,J,K.width,K.height,K.depth,0,ft,P,K.data);else if(S.isFramebufferTexture){if(ut)if(lt)e.texStorage2D(i.TEXTURE_2D,Kt,J,K.width,K.height);else{let rt=K.width,Ft=K.height;for(let Zt=0;Zt<Kt;Zt++)e.texImage2D(i.TEXTURE_2D,Zt,J,rt,Ft,0,ft,P,null),rt>>=1,Ft>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){const rt=i.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),K.parentNode!==rt){rt.appendChild(K),f.add(S),rt.onpaint=Ft=>{const Zt=Ft.changedElements;for(const bt of f)Zt.includes(bt.image)&&(bt.needsUpdate=!0)},rt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{const Zt=i.RGBA,bt=i.RGBA,pe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Zt,bt,pe,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(pt.length>0){if(lt&&ut){const rt=Vt(pt[0]);e.texStorage2D(i.TEXTURE_2D,Kt,J,rt.width,rt.height)}for(let rt=0,Ft=pt.length;rt<Ft;rt++)q=pt[rt],lt?Ut&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,ft,P,q):e.texImage2D(i.TEXTURE_2D,rt,J,ft,P,q);S.generateMipmaps=!1}else if(lt){if(ut){const rt=Vt(K);e.texStorage2D(i.TEXTURE_2D,Kt,J,rt.width,rt.height)}Ut&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,P,K)}else e.texImage2D(i.TEXTURE_2D,0,J,ft,P,K);b(S)&&S.mipmapsAutoUpdate===!0&&M(st),_t.__version=ht.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Tt(A,S,z){if(S.image.length!==6)return;const st=ne(A,S),Q=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);const ht=n.get(Q);if(Q.version!==ht.__version||st===!0){e.activeTexture(i.TEXTURE0+z);const _t=oe.getPrimaries(oe.workingColorSpace),Z=S.colorSpace===pi?null:oe.getPrimaries(S.colorSpace),K=S.colorSpace===pi||_t===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const ft=S.isCompressedTexture||S.image[0].isCompressedTexture,P=S.image[0]&&S.image[0].isDataTexture,J=[];for(let bt=0;bt<6;bt++)!ft&&!P?J[bt]=x(S.image[bt],!0,s.maxCubemapSize):J[bt]=P?S.image[bt].image:S.image[bt],J[bt]=zt(S,J[bt]);const q=J[0],pt=r.convert(S.format,S.colorSpace),lt=r.convert(S.type);let ut=E(S.internalFormat,pt,lt,S.normalized,S.colorSpace);const Ut=S.isVideoTexture!==!0,Kt=ht.__version===void 0||st===!0,rt=Q.dataReady;let Ft=w(S,q);jt(i.TEXTURE_CUBE_MAP,S);let Zt;if(S.isDepthTexture){if(ut=_(S.format===gi,S.type),Kt)if(Ut)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ut,q.width,q.height);else for(let bt=0;bt<6;bt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ut,q.width,q.height,0,pt,lt,null)}else if(ft){Ut&&Kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,ut,q.width,q.height);for(let bt=0;bt<6;bt++){Zt=J[bt].mipmaps;for(let pe=0;pe<Zt.length;pe++){const Be=Zt[pe];S.format!==zn?pt!==null?Ut?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,pe,0,0,Be.width,Be.height,pt,Be.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,pe,ut,Be.width,Be.height,0,Be.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,pe,0,0,Be.width,Be.height,pt,lt,Be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,pe,ut,Be.width,Be.height,0,pt,lt,Be.data)}}}else{if(Zt=S.mipmaps,Ut&&Kt){Zt.length>0&&Ft++;const bt=Vt(J[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,ut,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(P){Ut?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,J[bt].width,J[bt].height,pt,lt,J[bt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ut,J[bt].width,J[bt].height,0,pt,lt,J[bt].data);for(let pe=0;pe<Zt.length;pe++){const oi=Zt[pe].image[bt].image;Ut?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,pe+1,0,0,oi.width,oi.height,pt,lt,oi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,pe+1,ut,oi.width,oi.height,0,pt,lt,oi.data)}}else{Ut?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,pt,lt,J[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ut,pt,lt,J[bt]);for(let pe=0;pe<Zt.length;pe++){const Be=Zt[pe];Ut?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,pe+1,0,0,pt,lt,Be.image[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,pe+1,ut,pt,lt,Be.image[bt])}}}b(S)&&S.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),ht.__version=Q.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function xt(A,S,z,st,Q,ht){const _t=r.convert(z.format,z.colorSpace),Z=r.convert(z.type),K=E(z.internalFormat,_t,Z,z.normalized,z.colorSpace),ft=n.get(S),P=n.get(z);if(P.__renderTarget=S,!ft.__hasExternalTextures){const J=Math.max(1,S.width>>ht),q=Math.max(1,S.height>>ht);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,ht,K,J,q,S.depth,0,_t,Z,null):e.texImage2D(Q,ht,K,J,q,0,_t,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),gt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,Q,P.__webglTexture,0,_e(S)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,Q,P.__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(A,S,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){const st=S.depthTexture,Q=st&&st.isDepthTexture?st.type:null,ht=_(S.stencilBuffer,Q),_t=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;gt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e(S),ht,S.width,S.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e(S),ht,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ht,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,A)}else{const st=S.textures;for(let Q=0;Q<st.length;Q++){const ht=st[Q],_t=r.convert(ht.format,ht.colorSpace),Z=r.convert(ht.type),K=E(ht.internalFormat,_t,Z,ht.normalized,ht.colorSpace);gt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e(S),K,S.width,S.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e(S),K,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,K,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(A,S,z){const st=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=n.get(S.depthTexture);Q.__renderTarget=S;const ht=st?S.depthTexture.image[0]:S.depthTexture.image;(!Q.__webglTexture||ht.width!==S.width||ht.height!==S.height)&&(ht.width=S.width,ht.height=S.height,S.depthTexture.needsUpdate=!0),st?yt(S.depthTexture,0):Mt(S.depthTexture,0);const _t=Q.__webglTexture,Z=_e(S),K=st?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,ft=S.depthTexture.format===gi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===xi)gt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,K,_t,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,ft,K,_t,0);else if(S.depthTexture.format===gi)gt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,K,_t,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,ft,K,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ie(A){const S=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const st=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),st){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,st.removeEventListener("dispose",Q)};st.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=st}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(z)for(let st=0;st<6;st++)Nt(S.__webglFramebuffer[st],A,st);else A.texture.mipmaps.length>0?Nt(S.__webglFramebuffer[0],A,0):Nt(S.__webglFramebuffer,A,0);else if(z){S.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[st]),S.__webglDepthbuffer[st]===void 0)S.__webglDepthbuffer[st]=i.createRenderbuffer(),Yt(S.__webglDepthbuffer[st],A,!1);else{const Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=S.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ht)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Yt(S.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ht)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function se(A,S,z){const st=n.get(A);S!==void 0&&xt(st.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&ie(A)}function de(A){const S=A.texture,z=n.get(A),st=n.get(S);A.addEventListener("dispose",F),U(A);const Q=A.textures,ht=A.isWebGLCubeRenderTarget===!0,_t=Q.length>1;if(_t||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=S.version,a.memory.textures++),ht){z.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(S.mipmaps.length>0){z.__webglFramebuffer[Z]=[];for(let K=0;K<S.mipmaps.length;K++)z.__webglFramebuffer[Z][K]=i.createFramebuffer()}else z.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(S.mipmaps.length>0){z.__webglFramebuffer=[];for(let Z=0;Z<S.mipmaps.length;Z++)z.__webglFramebuffer[Z]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(_t)for(let Z=0,K=Q.length;Z<K;Z++){const ft=n.get(Q[Z]);ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&gt(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Z=0;Z<Q.length;Z++){const K=Q[Z];z.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[Z]);const ft=r.convert(K.format,K.colorSpace),P=r.convert(K.type),J=E(K.internalFormat,ft,P,K.normalized,K.colorSpace,A.isXRRenderTarget===!0),q=_e(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,q,J,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,z.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Yt(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),jt(i.TEXTURE_CUBE_MAP,S);for(let Z=0;Z<6;Z++)if(S.mipmaps.length>0)for(let K=0;K<S.mipmaps.length;K++)xt(z.__webglFramebuffer[Z][K],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,K);else xt(z.__webglFramebuffer[Z],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);b(S)?M(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(_t){for(let Z=0,K=Q.length;Z<K;Z++){const ft=Q[Z],P=n.get(ft);let J=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,P.__webglTexture),jt(J,ft),xt(z.__webglFramebuffer,A,ft,i.COLOR_ATTACHMENT0+Z,J,0),b(ft)&&M(J)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,st.__webglTexture),jt(Z,S),S.mipmaps.length>0)for(let K=0;K<S.mipmaps.length;K++)xt(z.__webglFramebuffer[K],A,S,i.COLOR_ATTACHMENT0,Z,K);else xt(z.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,Z,0);b(S)?M(Z):S.mipmaps.length>0&&i.texParameteri(Z,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&ie(A)}function N(A){const S=A.textures;for(let z=0,st=S.length;z<st;z++){const Q=S[z];if(b(Q)&&Q.mipmapsAutoUpdate===!0){const ht=T(A),_t=n.get(Q).__webglTexture;e.bindTexture(ht,_t),M(ht),e.unbindTexture()}}}const Ce=[];function te(A){if(A.samples>0){if(gt(A)===!1){const S=A.textures,z=A.width,st=A.height;let Q=i.COLOR_BUFFER_BIT;const ht=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(A),Z=S.length>1;if(Z)for(let ft=0;ft<S.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let ft=0;ft<S.length;ft++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[ft]);const P=n.get(S[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,P,0)}i.blitFramebuffer(0,0,z,st,0,0,z,st,Q,i.NEAREST),c===!0&&(Ce.length=0,Ce.push(i.COLOR_ATTACHMENT0+ft),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Ce.push(ht),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ce))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let ft=0;ft<S.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,_t.__webglColorRenderbuffer[ft]);const P=n.get(S[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,P,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){const S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function _e(A){return Math.min(s.maxSamples,A.samples)}function gt(A){const S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Te(A){const S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function zt(A,S){const z=A.colorSpace,st=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==jr&&z!==pi&&(oe.getTransfer(z)===me?(st!==zn||Q!==gn)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):le("WebGLTextures: Unsupported texture color space:",z)),S}function Vt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=kt,this.resetTextureUnits=j,this.getTextureUnits=nt,this.setTextureUnits=At,this.setTexture2D=Mt,this.setTexture2DArray=Rt,this.setTexture3D=Ot,this.setTextureCube=yt,this.rebindTextures=se,this.setupRenderTarget=de,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=gt,this.dispose=G}function O_(i,t){function e(n,s=pi){let r;const a=oe.getTransfer(s);if(n===gn)return i.UNSIGNED_BYTE;if(n===gl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Oh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nh)return i.BYTE;if(n===Uh)return i.SHORT;if(n===Hs)return i.UNSIGNED_SHORT;if(n===ml)return i.INT;if(n===Gn)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===Hn)return i.HALF_FLOAT;if(n===Bh)return i.ALPHA;if(n===zh)return i.RGB;if(n===zn)return i.RGBA;if(n===xi)return i.DEPTH_COMPONENT;if(n===gi)return i.DEPTH_STENCIL;if(n===kh)return i.RED;if(n===vl)return i.RED_INTEGER;if(n===Fi)return i.RG;if(n===xl)return i.RG_INTEGER;if(n===Ml)return i.RGBA_INTEGER;if(n===Xr||n===qr||n===Yr||n===$r)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mo||n===So||n===yo||n===bo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Mo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eo||n===wo||n===To||n===Ao||n===Ro||n===Jr||n===Co)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Eo||n===wo)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===To)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ao)return r.COMPRESSED_R11_EAC;if(n===Ro)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Jr)return r.COMPRESSED_RG11_EAC;if(n===Co)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Po||n===Lo||n===Io||n===Do||n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Go||n===Ho||n===Vo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Po)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Io)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Do)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===No)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ko)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Go)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ho)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wo||n===Xo||n===qo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Wo)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yo||n===$o||n===Qr||n===Zo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$o)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const B_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class k_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new iu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new yi({vertexShader:B_,fragmentShader:z_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new It(new Ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G_ extends zi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,d=null,u=null,g=null;const v=typeof XRWebGLBinding<"u",p=new k_,m={},x=e.getContextAttributes();let b=null,M=null;const T=[],E=[],_=new at;let w=null,U=null;const C=new Rn;C.viewport=new be;const D=new Rn;D.viewport=new be;const F=[C,D],W=new Jf;let I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Mt=T[$];return Mt===void 0&&(Mt=new Fa,T[$]=Mt),Mt.getTargetRaySpace()},this.getControllerGrip=function($){let Mt=T[$];return Mt===void 0&&(Mt=new Fa,T[$]=Mt),Mt.getGripSpace()},this.getHand=function($){let Mt=T[$];return Mt===void 0&&(Mt=new Fa,T[$]=Mt),Mt.getHandSpace()};function Y($){const Mt=E.indexOf($.inputSource);if(Mt===-1)return;const Rt=T[Mt];Rt!==void 0&&(Rt.update($.inputSource,$.frame,l||a),Rt.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",it);for(let $=0;$<T.length;$++){const Mt=E[$];Mt!==null&&(E[$]=null,T[$].disconnect(Mt))}I=null,G=null,p.reset();for(const $ in m)delete m[$];if(t.setRenderTarget(b),u=null,d=null,f=null,s=null,M=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(_.width,_.height,!1),U!==null){const $=U.camera;$.fov=U.fov,$.zoom=U.zoom,$.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",B),s.addEventListener("inputsourceschange",it),x.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,Ot=null,yt=null;x.depth&&(yt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=x.stencil?gi:xi,Ot=x.stencil?us:Gn);const Bt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Bt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new kn(d.textureWidth,d.textureHeight,{format:zn,type:gn,depthTexture:new ds(d.textureWidth,d.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Rt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,Rt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new kn(u.framebufferWidth,u.framebufferHeight,{format:zn,type:gn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),kt.setContext(s),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function it($){for(let Mt=0;Mt<$.removed.length;Mt++){const Rt=$.removed[Mt],Ot=E.indexOf(Rt);Ot>=0&&(E[Ot]=null,T[Ot].disconnect(Rt))}for(let Mt=0;Mt<$.added.length;Mt++){const Rt=$.added[Mt];let Ot=E.indexOf(Rt);if(Ot===-1){for(let Bt=0;Bt<T.length;Bt++)if(Bt>=E.length){E.push(Rt),Ot=Bt;break}else if(E[Bt]===null){E[Bt]=Rt,Ot=Bt;break}if(Ot===-1)break}const yt=T[Ot];yt&&yt.connect(Rt)}}function X($,Mt){Mt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Mt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let Mt=$.near,Rt=$.far;p.texture!==null&&(p.depthNear>0&&(Mt=p.depthNear),p.depthFar>0&&(Rt=p.depthFar)),W.near=D.near=C.near=Mt,W.far=D.far=C.far=Rt,(I!==W.near||G!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),I=W.near,G=W.far),W.layers.mask=$.layers.mask|6,C.layers.mask=W.layers.mask&-5,D.layers.mask=W.layers.mask&-3;const Ot=$.parent,yt=W.cameras;X(W,Ot);for(let Bt=0;Bt<yt.length;Bt++)X(yt[Bt],Ot);W.projectionMatrix.copy(C.projectionMatrix),W.projectionMatrixInverse.copy(C.projectionMatrixInverse),U===null&&$.isPerspectiveCamera&&(U={camera:$,fov:$.fov,zoom:$.zoom}),j($,W,Ot)};function j($,Mt,Rt){Rt===null?$.matrix.copy(Mt.matrixWorld):($.matrix.copy(Rt.matrixWorld),$.matrix.invert(),$.matrix.multiply(Mt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Mt.projectionMatrix),$.projectionMatrixInverse.copy(Mt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Jo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(W)},this.getCameraTexture=function($){return m[$]};let nt=null;function At($,Mt){if(h=Mt.getViewerPose(l||a),g=Mt,h!==null){const Rt=h.views;u!==null&&(t.setRenderTargetFramebuffer(M,u.framebuffer),t.setRenderTarget(M));let Ot=!1;Rt.length!==W.cameras.length&&(W.cameras.length=0,Ot=!0);for(let Gt=0;Gt<Rt.length;Gt++){const jt=Rt[Gt];let ne=null;if(u!==null)ne=u.getViewport(jt);else{const dt=f.getViewSubImage(d,jt);ne=dt.viewport,Gt===0&&(t.setRenderTargetTextures(M,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(M))}let tt=F[Gt];tt===void 0&&(tt=new Rn,tt.layers.enable(Gt),tt.viewport=new be,F[Gt]=tt),tt.matrix.fromArray(jt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(jt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(ne.x,ne.y,ne.width,ne.height),Gt===0&&(W.matrix.copy(tt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Ot===!0&&W.cameras.push(tt)}const yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();const Gt=f.getDepthInformation(Rt[0]);Gt&&Gt.isValid&&Gt.texture&&p.init(Gt,s.renderState)}if(yt&&yt.includes("camera-access")&&v){t.state.unbindTexture(),f=n.getBinding();for(let Gt=0;Gt<Rt.length;Gt++){const jt=Rt[Gt].camera;if(jt){let ne=m[jt];ne||(ne=new iu,m[jt]=ne);const tt=f.getCameraImage(jt);ne.sourceTexture=tt}}}}for(let Rt=0;Rt<T.length;Rt++){const Ot=E[Rt],yt=T[Rt];Ot!==null&&yt!==void 0&&yt.update(Ot,Mt,l||a)}nt&&nt($,Mt),Mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Mt}),g=null}const kt=new gu;kt.setAnimationLoop(At),this.setAnimationLoop=function($){nt=$},this.dispose=function(){}}}const H_=new ge,Tu=new Xt;Tu.set(-1,0,0,0,1,0,0,0,1);function V_(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,du(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,x,b,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&u(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,x,b):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ke&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ke&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=t.get(m),b=x.envMap,M=x.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(H_.makeRotationFromEuler(M)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Tu),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,x,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=b*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,x){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ke&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const x=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function W_(i,t,e,n){let s={},r={};function a(x,b){const M=b.program;n.uniformBlockBinding(x,M,s[x.id])}function o(x,b){let M=s[x.id];M===void 0&&(g(x),M=c(x),s[x.id]=M,x.addEventListener("dispose",p));const T=b.program;n.updateUBOMapping(x,T);const E=t.render.frame;r[x.id]!==E&&(l(x),r[x.id]=E)}function c(x){const b=i.createBuffer(),M=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,M,T),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function l(x){const b=s[x.id],M=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let E=0,_=M.length;E<_;E++){const w=M[E];if(Array.isArray(w))for(let U=0,C=w.length;U<C;U++)h(w[U],E,U,T);else h(w,E,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(x,b,M,T){if(d(x,b,M,T)===!0){const E=x.__offset,_=x.value;if(Array.isArray(_)){let w=0;for(let U=0;U<_.length;U++){const C=_[U],D=v(C,!0);f(C,x.__data,w),w+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,x.__data)}}function f(x,b,M){typeof x=="number"||typeof x=="boolean"?b[M]=x:x.isMatrix3?(b[M]=x.elements[0],b[M+1]=x.elements[1],b[M+2]=x.elements[2],b[M+3]=0,b[M+4]=x.elements[3],b[M+5]=x.elements[4],b[M+6]=x.elements[5],b[M+7]=0,b[M+8]=x.elements[6],b[M+9]=x.elements[7],b[M+10]=x.elements[8],b[M+11]=0):ArrayBuffer.isView(x)?b.set(x.subarray(0,b.length-M),M):x.toArray(b,M)}function d(x,b,M,T){const E=x.value,_=b+"_"+M;if(Array.isArray(E)){T[_]===void 0&&(T[_]=[]);const w=T[_];let U=!1;for(let C=0;C<E.length;C++)u(E[C],w,C)===!0&&(U=!0);return U}return u(E,T,_)}function u(x,b,M){if(b[M]===void 0)return typeof x=="number"||typeof x=="boolean"?b[M]=x:ArrayBuffer.isView(x)?b[M]=x.slice():b[M]=x.clone(),!0;{const T=b[M];if(typeof x=="number"||typeof x=="boolean"){if(T!==x)return b[M]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(T.equals(x)===!1)return T.copy(x),!0}}return!1}function g(x){const b=x.uniforms;let M=0;const T=16;for(let _=0,w=b.length;_<w;_++){const U=Array.isArray(b[_])?b[_]:[b[_]];for(let C=0,D=U.length;C<D;C++){const F=U[C],W=Array.isArray(F.value)?F.value:[F.value],I=Array.isArray(b[_])||Array.isArray(F.value);let G=M;for(let B=0,it=W.length;B<it;B++){const X=W[B],j=v(X,I),nt=M%T,At=nt%j.boundary,kt=nt+At;M+=At,kt!==0&&T-kt<j.storage&&(M+=T-kt),B===0&&(G=M),M+=j.storage}const Y=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new Y((M-G)/Float32Array.BYTES_PER_ELEMENT),F.__offset=G}}const E=M%T;return E>0&&(M+=T-E),x.__size=M,x.__cache={},this}function v(x,b){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=16,M.storage=48):x.isMatrix4?(M.boundary=16,M.storage=64):x.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",x),b===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function p(x){const b=x.target;b.removeEventListener("dispose",p),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(const x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:o,dispose:m}}const X_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let In=null;function q_(){return In===null&&(In=new sf(X_,16,16,Fi,Hn),In.name="DFG_LUT",In.minFilter=un,In.magFilter=un,In.wrapS=jn,In.wrapT=jn,In.generateMipmaps=!1,In.needsUpdate=!0),In}class Y_{constructor(t={}){const{canvas:e=Pd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=gn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const v=u,p=new Set([Ml,xl,vl]),m=new Set([gn,Gn,Hs,us,gl,_l]),x=new Uint32Array(4),b=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let T=null,E=null;const _=[],w=[];let U=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1,F=null,W=null,I=null,G=null;this._outputColorSpace=He;let Y=0,B=0,it=null,X=-1,j=null;const nt=new be,At=new be;let kt=null;const $=new Wt(0);let Mt=0,Rt=e.width,Ot=e.height,yt=1,Bt=null,Se=null;const Gt=new be(0,0,Rt,Ot),jt=new be(0,0,Rt,Ot);let ne=!1;const tt=new Ws,dt=new El;let ct=!1,Tt=!1;const xt=new ge,Yt=new R,Nt=new be,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function de(){return it===null?yt:1}let N=n;function Ce(y,L){return e.getContext(y,L)}let te,_e,gt,Te,zt,Vt,A,S,z,st,Q,ht,_t,Z,K,ft,P,J,q,pt,lt,ut,Ut;try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fl}`),e.addEventListener("webglcontextlost",Ft,!1),e.addEventListener("webglcontextrestored",Zt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),N===null){const L="webgl2";if(N=Ce(L,y),N===null)throw Ce(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Kt()}catch(y){throw e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),le("WebGLRenderer: "+y.message),y}function Kt(){te=new K0(N),te.init(),lt=new O_(N,te),_e=new z0(N,te,t,lt),gt=new U_(N,te),_e.reversedDepthBuffer&&d&&gt.buffers.depth.setReversed(!0),W=N.createFramebuffer(),I=N.createFramebuffer(),G=N.createFramebuffer(),Te=new j0(N),zt=new S_,Vt=new F_(N,te,gt,zt,_e,lt,Te),A=new Z0(C),S=new ep(N),ut=new O0(N,S),z=new J0(N,S,Te,ut),st=new eg(N,z,S,ut,Te),J=new tg(N,_e,Vt),K=new k0(zt),Q=new M_(C,A,te,_e,ut,K),ht=new V_(C,zt),_t=new b_,Z=new C_(te),P=new F0(C,A,gt,st,g,c),ft=new N_(C,st,_e),Ut=new W_(N,Te,_e,gt),q=new B0(N,te,Te),pt=new Q0(N,te,Te),Te.programs=Q.programs,C.capabilities=_e,C.extensions=te,C.properties=zt,C.renderLists=_t,C.shadowMap=ft,C.state=gt,C.info=Te}v!==gn&&(U=new ig(v,e.width,e.height,o,s,r));const rt=new G_(C,N);this.xr=rt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=te.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=te.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(y){y!==void 0&&(yt=y,this.setSize(Rt,Ot,!1))},this.getSize=function(y){return y.set(Rt,Ot)},this.setSize=function(y,L,H=!0){if(rt.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}Rt=y,Ot=L,e.width=Math.floor(y*yt),e.height=Math.floor(L*yt),H===!0&&(e.style.width=y+"px",e.style.height=L+"px"),U!==null&&U.setSize(e.width,e.height),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(Rt*yt,Ot*yt).floor()},this.setDrawingBufferSize=function(y,L,H){Rt=y,Ot=L,yt=H,e.width=Math.floor(y*H),e.height=Math.floor(L*H),this.setViewport(0,0,y,L)},this.setEffects=function(y){if(v===gn){le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let L=0;L<y.length;L++)if(y[L].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(nt)},this.getViewport=function(y){return y.copy(Gt)},this.setViewport=function(y,L,H,O){y.isVector4?Gt.set(y.x,y.y,y.z,y.w):Gt.set(y,L,H,O),gt.viewport(nt.copy(Gt).multiplyScalar(de()).round())},this.getScissor=function(y){return y.copy(jt)},this.setScissor=function(y,L,H,O){y.isVector4?jt.set(y.x,y.y,y.z,y.w):jt.set(y,L,H,O),gt.scissor(At.copy(jt).multiplyScalar(de()).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(y){gt.setScissorTest(ne=y)},this.setOpaqueSort=function(y){Bt=y},this.setTransparentSort=function(y){Se=y},this.getClearColor=function(y){return y.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(y=!0,L=!0,H=!0){let O=0;if(y){let k=!1;if(it!==null){const vt=it.texture.format;k=p.has(vt)}if(k){const vt=it.texture.type,Ct=m.has(vt),mt=P.getClearColor(),wt=P.getClearAlpha(),Dt=mt.r,qt=mt.g,re=mt.b;Ct?(x[0]=Dt,x[1]=qt,x[2]=re,x[3]=wt,N.clearBufferuiv(N.COLOR,0,x)):(b[0]=Dt,b[1]=qt,b[2]=re,b[3]=wt,N.clearBufferiv(N.COLOR,0,b))}else O|=N.COLOR_BUFFER_BIT}L&&(O|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(O|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&N.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),F=y},this.dispose=function(){e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),P.dispose(),_t.dispose(),Z.dispose(),Vt.dispose(),zt.dispose(),A.dispose(),st.dispose(),z.dispose(),ut.dispose(),Ut.dispose(),Q.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Vl),rt.removeEventListener("sessionend",Wl),wi.stop()};function Ft(y){y.preventDefault(),na("WebGLRenderer: Context Lost."),D=!0}function Zt(){na("WebGLRenderer: Context Restored."),D=!1;const y=Te.autoReset,L=ft.enabled,H=ft.autoUpdate,O=ft.needsUpdate,k=ft.type;Kt(),Te.autoReset=y,ft.enabled=L,ft.autoUpdate=H,ft.needsUpdate=O,ft.type=k}function bt(y){le("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function pe(y){const L=y.target;L.removeEventListener("dispose",pe),Be(L)}function Be(y){oi(y),zt.remove(y)}function oi(y){const L=zt.get(y).programs;L!==void 0&&(L.forEach(function(H){Q.releaseProgram(H)}),y.isShaderMaterial&&Q.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,H,O,k,vt){L===null&&(L=ie);const Ct=k.isMesh&&k.matrixWorld.determinantAffine()<0,mt=$u(y,L,H,O,k);gt.setMaterial(O,Ct);let wt=H.index,Dt=1;if(O.wireframe===!0){if(wt=z.getWireframeAttribute(H),wt===void 0)return;Dt=2}const qt=H.drawRange,re=H.attributes.position;let Pt=qt.start*Dt,ae=(qt.start+qt.count)*Dt;vt!==null&&(Pt=Math.max(Pt,vt.start*Dt),ae=Math.min(ae,(vt.start+vt.count)*Dt)),wt!==null?(Pt=Math.max(Pt,0),ae=Math.min(ae,wt.count)):re!=null&&(Pt=Math.max(Pt,0),ae=Math.min(ae,re.count));const Pe=ae-Pt;if(Pe<0||Pe===1/0)return;ut.setup(k,O,mt,H,wt);let Me,ve=q;if(wt!==null&&(Me=S.get(wt),ve=pt,ve.setIndex(Me)),k.isMesh)O.wireframe===!0?(gt.setLineWidth(O.wireframeLinewidth*de()),ve.setMode(N.LINES)):ve.setMode(N.TRIANGLES);else if(k.isLine){let Xe=O.linewidth;Xe===void 0&&(Xe=1),gt.setLineWidth(Xe*de()),k.isLineSegments?ve.setMode(N.LINES):k.isLineLoop?ve.setMode(N.LINE_LOOP):ve.setMode(N.LINE_STRIP)}else k.isPoints?ve.setMode(N.POINTS):k.isSprite&&ve.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(te.get("WEBGL_multi_draw"))ve.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Xe=k._multiDrawStarts,Lt=k._multiDrawCounts,Qe=k._multiDrawCount,fe=wt?S.get(wt).bytesPerElement:1,Ti=zt.get(O).currentProgram.getUniforms();for(let qe=0;qe<Qe;qe++)Ti.setValue(N,"_gl_DrawID",qe),ve.render(Xe[qe]/fe,Lt[qe])}else if(k.isInstancedMesh)ve.renderInstances(Pt,Pe,k.count);else if(H.isInstancedBufferGeometry){const Xe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Lt=Math.min(H.instanceCount,Xe);ve.renderInstances(Pt,Pe,Lt)}else ve.render(Pt,Pe)};function Hl(y,L,H,O){F!==null&&y.isNodeMaterial&&F.setObject(O,y),ct===!0&&K.setState(y,H,!1),y.transparent===!0&&y.side===hn&&y.forceSinglePass===!1?(y.side=Ke,y.needsUpdate=!0,vs(y,L,O),y.side=vi,y.needsUpdate=!0,vs(y,L,O),y.side=hn):vs(y,L,O)}this.compile=function(y,L,H=null){H===null&&(H=y),F!==null&&F.renderStart(y,L,H),E=Z.get(H),E.init(L),w.push(E),H.traverseVisible(function(k){k.isLight&&k.layers.test(L.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),y!==H&&y.traverseVisible(function(k){k.isLight&&k.layers.test(L.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),Tt=this.localClippingEnabled,ct=K.init(this.clippingPlanes,Tt),ct===!0&&K.setGlobalState(this.clippingPlanes,L),F!==null&&ft.render(E.state.shadowsArray,H,L);const O=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const vt=k.material;if(vt)if(Array.isArray(vt))for(let Ct=0;Ct<vt.length;Ct++){const mt=vt[Ct];Hl(mt,H,L,k),O.add(mt)}else Hl(vt,H,L,k),O.add(vt)}),E=w.pop(),F!==null&&F.renderEnd(),O},this.compileAsync=function(y,L,H=null){const O=this.compile(y,L,H);return new Promise(k=>{function vt(){if(O.forEach(function(Ct){const wt=zt.get(Ct).currentProgram;(wt===void 0||wt.isReady())&&O.delete(Ct)}),O.size===0){k(y);return}setTimeout(vt,10)}te.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Ea=null;function qu(y){Ea&&Ea(y)}function Vl(){wi.stop()}function Wl(){wi.start()}const wi=new gu;wi.setAnimationLoop(qu),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(y){Ea=y,rt.setAnimationLoop(y),y===null?wi.stop():wi.start()},rt.addEventListener("sessionstart",Vl),rt.addEventListener("sessionend",Wl),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(y,L);const H=rt.enabled===!0&&rt.isPresenting===!0,O=U!==null&&(it===null||H)&&U.begin(C,it);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(L),L=rt.getCamera()),y.isScene===!0&&y.onBeforeRender(C,y,L,it),E=Z.get(y,w.length),E.init(L),E.state.textureUnits=Vt.getTextureUnits(),w.push(E),xt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?dt.setFromArrayCamera(L):tt.setFromProjectionMatrix(xt,Cn,L.reversedDepth),Tt=this.localClippingEnabled,ct=K.init(this.clippingPlanes,Tt),T=_t.get(y,_.length),T.init(),_.push(T),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){const Ct=C.xr.getDepthSensingMesh();Ct!==null&&wa(Ct,L,-1/0,C.sortObjects)}wa(y,L,0,C.sortObjects),T.finish(),F!==null&&F.updateLights(E.state.lightsArray),C.sortObjects===!0&&T.sort(Bt,Se),se=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,se&&P.addToRenderList(T,y),this.info.autoReset===!0&&this.info.reset(),ct===!0&&K.beginShadows();const k=E.state.shadowsArray;if(ft.render(k,y,L),ct===!0&&K.endShadows(),(O&&U.hasRenderPass())===!1){const Ct=T.opaque,mt=T.transmissive;if(E.setupLights(),L.isArrayCamera){const wt=L.cameras;if(mt.length>0)for(let Dt=0,qt=wt.length;Dt<qt;Dt++){const re=wt[Dt];ql(Ct,mt,y,re)}se&&P.render(y);for(let Dt=0,qt=wt.length;Dt<qt;Dt++){const re=wt[Dt];Xl(T,y,re,re.viewport)}}else mt.length>0&&ql(Ct,mt,y,L),se&&P.render(y),Xl(T,y,L)}it!==null&&B===0&&(Vt.updateMultisampleRenderTarget(it),Vt.updateRenderTargetMipmap(it)),O&&U.end(C),y.isScene===!0&&y.onAfterRender(C,y,L),ut.resetDefaultState(),X=-1,j=null,w.pop(),w.length>0?(E=w[w.length-1],Vt.setTextureUnits(E.state.textureUnits),ct===!0&&K.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,F!==null&&F.renderEnd()};function wa(y,L,H,O){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)H=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){const Ct=L.isArrayCamera?dt:tt;if(!y.frustumCulled||y.intersectsFrustum(Ct)){O&&Nt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(xt);const mt=st.update(y),wt=y.material;wt.visible&&T.push(y,mt,wt,H,Nt.z,null,L)}}else if(y.isMesh||y.isLine||y.isPoints){const Ct=L.isArrayCamera?dt:tt;if(!y.frustumCulled||y.intersectsFrustum(Ct)){const mt=st.update(y),wt=y.material;if(O&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Nt.copy(y.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Nt.copy(mt.boundingSphere.center)),Nt.applyMatrix4(y.matrixWorld).applyMatrix4(xt)),Array.isArray(wt)){const Dt=mt.groups;for(let qt=0,re=Dt.length;qt<re;qt++){const Pt=Dt[qt],ae=wt[Pt.materialIndex];ae&&ae.visible&&T.push(y,mt,ae,H,Nt.z,Pt,L)}}else wt.visible&&T.push(y,mt,wt,H,Nt.z,null,L)}}}const vt=y.children;for(let Ct=0,mt=vt.length;Ct<mt;Ct++)wa(vt[Ct],L,H,O)}function Xl(y,L,H,O){const{opaque:k,transmissive:vt,transparent:Ct}=y;E.setupLightsView(H),ct===!0&&K.setGlobalState(C.clippingPlanes,H),O&&gt.viewport(nt.copy(O)),k.length>0&&lr(k,L,H),vt.length>0&&lr(vt,L,H),Ct.length>0&&lr(Ct,L,H),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function ql(y,L,H,O){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[O.id]===void 0){const Pt=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[O.id]=new kn(1,1,{generateMipmaps:!0,type:Pt?Hn:gn,minFilter:mi,samples:Math.max(4,_e.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}const vt=E.state.transmissionRenderTarget[O.id],Ct=O.viewport||nt;vt.setSize(Ct.z*C.transmissionResolutionScale,Ct.w*C.transmissionResolutionScale);const mt=C.getRenderTarget(),wt=C.getActiveCubeFace(),Dt=C.getActiveMipmapLevel();C.setRenderTarget(vt),C.getClearColor($),Mt=C.getClearAlpha(),Mt<1&&C.setClearColor(16777215,.5),C.clear(),se&&P.render(H);const qt=C.toneMapping;C.toneMapping=ni;const re=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),E.setupLightsView(O),ct===!0&&K.setGlobalState(C.clippingPlanes,O),lr(y,H,O),Vt.updateMultisampleRenderTarget(vt),Vt.updateRenderTargetMipmap(vt),te.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let ae=0,Pe=L.length;ae<Pe;ae++){const Me=L[ae],{object:ve,geometry:Xe,material:Lt,group:Qe}=Me;if(Lt.side===hn&&ve.layers.test(O.layers)){const fe=Lt.side;Lt.side=Ke,Lt.needsUpdate=!0,Yl(ve,H,O,Xe,Lt,Qe),Lt.side=fe,Lt.needsUpdate=!0,Pt=!0}}Pt===!0&&(Vt.updateMultisampleRenderTarget(vt),Vt.updateRenderTargetMipmap(vt))}C.setRenderTarget(mt,wt,Dt),C.setClearColor($,Mt),re!==void 0&&(O.viewport=re),C.toneMapping=qt}function lr(y,L,H){const O=L.isScene===!0?L.overrideMaterial:null;for(let k=0,vt=y.length;k<vt;k++){const Ct=y[k],{object:mt,geometry:wt,group:Dt}=Ct;let qt=Ct.material;qt.allowOverride===!0&&O!==null&&(qt=O),mt.layers.test(H.layers)&&Yl(mt,L,H,wt,qt,Dt)}}function Yl(y,L,H,O,k,vt){F!==null&&k.isNodeMaterial&&F.setObject(y,k),y.onBeforeRender(C,L,H,O,k,vt),y.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(C,L,H,O,y,vt),k.transparent===!0&&k.side===hn&&k.forceSinglePass===!1?(k.side=Ke,k.needsUpdate=!0,C.renderBufferDirect(H,L,O,k,y,vt),k.side=vi,k.needsUpdate=!0,C.renderBufferDirect(H,L,O,k,y,vt),k.side=hn):C.renderBufferDirect(H,L,O,k,y,vt),y.onAfterRender(C,L,H,O,k,vt)}function $l(y){let L=0;for(const H of y)H.texture!==null&&L++;return L}function vs(y,L,H){L.isScene!==!0&&(L=ie);const O=zt.get(y),k=E.state.lights,vt=E.state.shadowsArray,Ct=k.state.version,mt=Q.getParameters(y,k.state,vt,L,H,E.state.lightProbeGridArray),wt=Q.getProgramCacheKey(mt);let Dt=O.programs;O.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,O.fog=L.fog;const qt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;O.envMap=A.get(y.envMap||O.environment,qt),O.envMapRotation=O.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,Dt===void 0&&(y.addEventListener("dispose",pe),Dt=new Map,O.programs=Dt,O.programVariants=new Map);let re=Dt.get(wt);if(re!==void 0){if(O.currentProgram===re&&O.lightsStateVersion===Ct)return Kl(y,mt),re}else mt.uniforms=Q.getUniforms(y),F!==null&&y.isNodeMaterial&&F.build(y,H,mt),y.onBeforeCompile(mt,C),re=Q.acquireProgram(mt,wt),Dt.set(wt,re),O.uniforms=mt.uniforms;const Pt=O.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Pt.clippingPlanes=K.uniform),Kl(y,mt),O.needsLights=Ku(y),O.lightsStateVersion=Ct,O.needsLights&&(Pt.ambientLightColor.value=k.state.ambient,Pt.lightProbe.value=k.state.probe,Pt.sunLights.value=k.state.sun,Pt.sunLightShadows.value=k.state.sunShadow,Pt.directionalLights.value=k.state.directional,Pt.directionalLightShadows.value=k.state.directionalShadow,Pt.spotLights.value=k.state.spot,Pt.spotLightShadows.value=k.state.spotShadow,Pt.rectAreaLights.value=k.state.rectArea,Pt.ltc_1.value=k.state.rectAreaLTC1,Pt.ltc_2.value=k.state.rectAreaLTC2,Pt.pointLights.value=k.state.point,Pt.pointLightShadows.value=k.state.pointShadow,Pt.hemisphereLights.value=k.state.hemi,Pt.sunShadowMatrix.value=k.state.sunShadowMatrix,Pt.sunShadowCascade.value=k.state.sunShadowCascade,Pt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Pt.spotLightMatrix.value=k.state.spotLightMatrix,Pt.spotLightMap.value=k.state.spotLightMap,Pt.pointShadowMatrix.value=k.state.pointShadowMatrix),O.numLightProbeGrids=$l(E.state.lightProbeGridArray),O.currentProgram=re,O.uniformsList=null,re}function Yu(y,L,H,O,k){const vt=zt.get(y),Ct=vt.currentProgram.id+","+O+","+k;let mt=vt.programVariants.get(Ct);return mt===void 0?(mt=vs(y,L,H),vt.programVariants.set(Ct,mt)):(vt.currentProgram=mt,vt.uniformsList=null,vt.outputColorSpace=O,vt.toneMapping=k),mt}function Zl(y){if(y.uniformsList===null){const L=y.currentProgram.getUniforms();y.uniformsList=Kr.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function Kl(y,L){const H=zt.get(y);H.outputColorSpace=L.outputColorSpace,H.batching=L.batching,H.batchingColor=L.batchingColor,H.instancing=L.instancing,H.instancingColor=L.instancingColor,H.instancingMorph=L.instancingMorph,H.skinning=L.skinning,H.morphTargets=L.morphTargets,H.morphNormals=L.morphNormals,H.morphColors=L.morphColors,H.morphTargetsCount=L.morphTargetsCount,H.numClippingPlanes=L.numClippingPlanes,H.numIntersection=L.numClipIntersection,H.vertexAlphas=L.vertexAlphas,H.vertexTangents=L.vertexTangents,H.toneMapping=L.toneMapping}function $u(y,L,H,O,k){L.isScene!==!0&&(L=ie),Vt.resetTextureUnits();const vt=L.fog,Ct=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?L.environment:null,mt=it===null?C.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:oe.workingColorSpace,wt=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Dt=A.get(O.envMap||Ct,wt),qt=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,re=!!H.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Pt=!!H.morphAttributes.position,ae=!!H.morphAttributes.normal,Pe=!!H.morphAttributes.color;let Me=ni;O.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Me=C.toneMapping);const ve=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Xe=ve!==void 0?ve.length:0,Lt=zt.get(O),Qe=E.state.lights;if(ct===!0&&(Tt===!0||y!==j)){const ye=y===j&&O.id===X;K.setState(O,y,ye)}let fe=!1,Ti=!1;O.version===Lt.__version?Lt.needsLights&&Lt.lightsStateVersion!==Qe.state.version||k.isBatchedMesh&&Lt.batching===!1||!k.isBatchedMesh&&Lt.batching===!0||k.isBatchedMesh&&Lt.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Lt.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Lt.instancing===!1||!k.isInstancedMesh&&Lt.instancing===!0||k.isSkinnedMesh&&Lt.skinning===!1||!k.isSkinnedMesh&&Lt.skinning===!0||k.isInstancedMesh&&Lt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Lt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Lt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Lt.instancingMorph===!1&&k.morphTexture!==null||Lt.envMap!==Dt||O.fog===!0&&Lt.fog!==vt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==K.numPlanes||Lt.numIntersection!==K.numIntersection)||Lt.vertexAlphas!==qt||Lt.vertexTangents!==re||Lt.morphTargets!==Pt||Lt.morphNormals!==ae||Lt.morphColors!==Pe||Lt.morphTargetsCount!==Xe||Lt.numLightProbeGrids!==$l(E.state.lightProbeGridArray)?fe=!0:(Lt.outputColorSpace!==mt||Lt.toneMapping!==Me)&&(Ti=!0):(fe=!0,Lt.__version=O.version);let qe=Lt.currentProgram;(fe===!0||Ti===!0)&&(qe=Ti===!0?Yu(O,L,k,mt,Me):vs(O,L,k),F&&O.isNodeMaterial&&F.onUpdateProgram(O,qe,Lt));let cr=!1,li=!1,Ai=!1;const ue=qe.getUniforms(),Ve=Lt.uniforms;if(gt.useProgram(qe.program)&&(cr=!0,li=!0,Ai=!0),O.id!==X&&(X=O.id,li=!0),cr||j!==y){gt.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ue.setValue(N,"projectionMatrix",y.projectionMatrix),ue.setValue(N,"viewMatrix",y.matrixWorldInverse);const ze=ue.map.cameraPosition;ze!==void 0&&ze.setValue(N,Yt.setFromMatrixPosition(y.matrixWorld)),_e.logarithmicDepthBuffer&&ue.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ue.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),j!==y&&(j=y,li=!0,Ai=!0)}if(Lt.needsLights&&(Qe.state.sunShadowMap.length>0&&ue.setValue(N,"sunShadowMap",Qe.state.sunShadowMap,Vt),Qe.state.directionalShadowMap.length>0&&ue.setValue(N,"directionalShadowMap",Qe.state.directionalShadowMap,Vt),Qe.state.spotShadowMap.length>0&&ue.setValue(N,"spotShadowMap",Qe.state.spotShadowMap,Vt),Qe.state.pointShadowMap.length>0&&ue.setValue(N,"pointShadowMap",Qe.state.pointShadowMap,Vt)),k.isSkinnedMesh){ue.setOptional(N,k,"bindMatrix"),ue.setOptional(N,k,"bindMatrixInverse");const ye=k.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),ue.setValue(N,"boneTexture",ye.boneTexture,Vt))}k.isBatchedMesh&&(ue.setOptional(N,k,"batchingTexture"),ue.setValue(N,"batchingTexture",k._matricesTexture,Vt),ue.setOptional(N,k,"batchingIdTexture"),ue.setValue(N,"batchingIdTexture",k._indirectTexture,Vt),ue.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&ue.setValue(N,"batchingColorTexture",k._colorsTexture,Vt));const bn=H.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&J.update(k,H,qe),(li||Lt.receiveShadow!==k.receiveShadow)&&(Lt.receiveShadow=k.receiveShadow,ue.setValue(N,"receiveShadow",k.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&L.environment!==null&&(Ve.envMapIntensity.value=L.environmentIntensity),Ve.dfgLUT!==void 0&&(Ve.dfgLUT.value=q_()),li){if(ue.setValue(N,"toneMappingExposure",C.toneMappingExposure),Lt.needsLights&&Zu(Ve,Ai),vt&&O.fog===!0&&ht.refreshFogUniforms(Ve,vt),ht.refreshMaterialUniforms(Ve,O,yt,Ot,E.state.transmissionRenderTarget[y.id]),Lt.needsLights&&Lt.numLightProbeGrids>0){const ye=M;let ze=0;for(const Wn of E.state.lightProbeGridArray)Wn.texture!==null&&(ye.textures[ze]=Wn.texture,ye.min[ze]=Wn.boundingBox.min,ye.max[ze]=Wn.boundingBox.max,ye.resolution[ze]=Wn.resolution,ze++);for(const Wn in ye)ye[Wn].length=ze;Ve.probesSH.value=ye.textures,Ve.probesMin.value=ye.min,Ve.probesMax.value=ye.max,Ve.probesResolution.value=ye.resolution}Kr.upload(N,Zl(Lt),Ve,Vt)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Kr.upload(N,Zl(Lt),Ve,Vt),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ue.setValue(N,"center",k.center),ue.setValue(N,"modelViewMatrix",k.modelViewMatrix),ue.setValue(N,"normalMatrix",k.normalMatrix),ue.setValue(N,"modelMatrix",k.matrixWorld),O.uniformsGroups!==void 0){const ye=O.uniformsGroups;for(let ze=0,Wn=ye.length;ze<Wn;ze++){const Ql=ye[ze];Ut.update(Ql,qe),Ut.bind(Ql,qe)}}return qe}function Zu(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.sunLights.needsUpdate=L,y.sunLightShadows.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function Ku(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(y,L,H){const O=zt.get(y);O.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),zt.get(y.texture).__webglTexture=L,zt.get(y.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:H,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,L){const H=zt.get(y);H.__webglFramebuffer=L,H.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,H=0){it=y,Y=L,B=H;let O=null,k=!1,vt=!1;if(y){const mt=zt.get(y);if(mt.__useDefaultFramebuffer!==void 0){gt.bindFramebuffer(N.FRAMEBUFFER,mt.__webglFramebuffer),nt.copy(y.viewport),At.copy(y.scissor),kt=y.scissorTest,gt.viewport(nt),gt.scissor(At),gt.setScissorTest(kt),X=-1;return}else if(mt.__webglFramebuffer===void 0)Vt.setupRenderTarget(y);else if(mt.__hasExternalTextures)Vt.rebindTextures(y,zt.get(y.texture).__webglTexture,zt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const qt=y.depthTexture;if(mt.__boundDepthTexture!==qt){if(qt!==null&&zt.has(qt)&&(y.width!==qt.image.width||y.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(y)}}const wt=y.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(vt=!0);const Dt=zt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Dt[L])?O=Dt[L][H]:O=Dt[L],k=!0):y.samples>0&&Vt.useMultisampledRTT(y)===!1?O=zt.get(y).__webglMultisampledFramebuffer:Array.isArray(Dt)?O=Dt[H]:O=Dt,nt.copy(y.viewport),At.copy(y.scissor),kt=y.scissorTest}else nt.copy(Gt).multiplyScalar(yt).floor(),At.copy(jt).multiplyScalar(yt).floor(),kt=ne;if(H!==0&&(O=W),gt.bindFramebuffer(N.FRAMEBUFFER,O)&&gt.drawBuffers(y,O),gt.viewport(nt),gt.scissor(At),gt.setScissorTest(kt),k){const mt=zt.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,mt.__webglTexture,H)}else if(vt){const mt=L;for(let wt=0;wt<y.textures.length;wt++){const Dt=zt.get(y.textures[wt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+wt,Dt.__webglTexture,H,mt)}}else if(y!==null&&H!==0){const mt=zt.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,mt.__webglTexture,H)}X=-1};function Jl(y){const L=zt.get(y);return(L.__readFormat!==y.format||L.__readType!==y.type)&&(L.__readFormat=y.format,L.__readType=y.type,L.__formatReadable=_e.textureFormatReadable(y.format),L.__typeReadable=_e.textureTypeReadable(y.type)),L}this.readRenderTargetPixels=function(y,L,H,O,k,vt,Ct,mt=0){if(!(y&&y.isWebGLRenderTarget)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=zt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct],Array.isArray(wt)&&(wt=wt[0])),wt){gt.bindFramebuffer(N.FRAMEBUFFER,wt);try{const Dt=y.textures[mt],qt=Dt.format,re=Dt.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+mt);const Pt=Jl(Dt);if(Pt.__formatReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-O&&H>=0&&H<=y.height-k&&N.readPixels(L,H,O,k,lt.convert(qt),lt.convert(re),vt)}finally{const Dt=it!==null?zt.get(it).__webglFramebuffer:null;gt.bindFramebuffer(N.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(y,L,H,O,k,vt,Ct,mt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=zt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct],Array.isArray(wt)&&(wt=wt[0])),wt)if(L>=0&&L<=y.width-O&&H>=0&&H<=y.height-k){gt.bindFramebuffer(N.FRAMEBUFFER,wt);const Dt=y.textures[mt],qt=Dt.format,re=Dt.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+mt);const Pt=Jl(Dt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ae=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ae),N.bufferData(N.PIXEL_PACK_BUFFER,vt.byteLength,N.STREAM_READ),N.readPixels(L,H,O,k,lt.convert(qt),lt.convert(re),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const Pe=it!==null?zt.get(it).__webglFramebuffer:null;gt.bindFramebuffer(N.FRAMEBUFFER,Pe);const Me=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Ld(N,Me,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ae),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,vt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(ae),N.deleteSync(Me),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,L=null,H=0){const O=Math.pow(2,-H),k=Math.floor(y.image.width*O),vt=Math.floor(y.image.height*O),Ct=L!==null?L.x:0,mt=L!==null?L.y:0;Vt.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,Ct,mt,k,vt),gt.unbindTexture()},this.copyTextureToTexture=function(y,L,H=null,O=null,k=0,vt=0){let Ct,mt,wt,Dt,qt,re,Pt,ae,Pe;const Me=y.isCompressedTexture?y.mipmaps[vt]:y.image;if(H!==null)Ct=H.max.x-H.min.x,mt=H.max.y-H.min.y,wt=H.isBox3?H.max.z-H.min.z:1,Dt=H.min.x,qt=H.min.y,re=H.isBox3?H.min.z:0;else{const ue=Math.pow(2,-k);Ct=Math.floor(Me.width*ue),mt=Math.floor(Me.height*ue),y.isDataArrayTexture?wt=Me.depth:y.isData3DTexture?wt=Math.floor(Me.depth*ue):wt=1,Dt=0,qt=0,re=0}O!==null?(Pt=O.x,ae=O.y,Pe=O.z):(Pt=0,ae=0,Pe=0);const ve=lt.convert(L.format),Xe=lt.convert(L.type);let Lt;L.isData3DTexture?(Vt.setTexture3D(L,0),Lt=N.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Vt.setTexture2DArray(L,0),Lt=N.TEXTURE_2D_ARRAY):(Vt.setTexture2D(L,0),Lt=N.TEXTURE_2D),gt.activeTexture(N.TEXTURE0),gt.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,L.flipY),gt.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),gt.pixelStorei(N.UNPACK_ALIGNMENT,L.unpackAlignment);const Qe=gt.getParameter(N.UNPACK_ROW_LENGTH),fe=gt.getParameter(N.UNPACK_IMAGE_HEIGHT),Ti=gt.getParameter(N.UNPACK_SKIP_PIXELS),qe=gt.getParameter(N.UNPACK_SKIP_ROWS),cr=gt.getParameter(N.UNPACK_SKIP_IMAGES);gt.pixelStorei(N.UNPACK_ROW_LENGTH,Me.width),gt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Me.height),gt.pixelStorei(N.UNPACK_SKIP_PIXELS,Dt),gt.pixelStorei(N.UNPACK_SKIP_ROWS,qt),gt.pixelStorei(N.UNPACK_SKIP_IMAGES,re);const li=y.isDataArrayTexture||y.isData3DTexture,Ai=L.isDataArrayTexture||L.isData3DTexture;if(y.isDepthTexture){const ue=zt.get(y),Ve=zt.get(L),bn=zt.get(ue.__renderTarget),ye=zt.get(Ve.__renderTarget);gt.bindFramebuffer(N.READ_FRAMEBUFFER,bn.__webglFramebuffer),gt.bindFramebuffer(N.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ze=0;ze<wt;ze++)li&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,zt.get(y).__webglTexture,k,re+ze),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,zt.get(L).__webglTexture,vt,Pe+ze)),N.blitFramebuffer(Dt,qt,Dt+Ct,qt+mt,Pt,ae,Pt+Ct,ae+mt,N.DEPTH_BUFFER_BIT,N.NEAREST);gt.bindFramebuffer(N.READ_FRAMEBUFFER,null),gt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||zt.has(y)){const ue=zt.get(y),Ve=zt.get(L);gt.bindFramebuffer(N.READ_FRAMEBUFFER,I),gt.bindFramebuffer(N.DRAW_FRAMEBUFFER,G);for(let bn=0;bn<wt;bn++)li?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ue.__webglTexture,k,re+bn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ue.__webglTexture,k),Ai?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ve.__webglTexture,vt,Pe+bn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ve.__webglTexture,vt),k!==0?N.blitFramebuffer(Dt,qt,Dt+Ct,qt+mt,Pt,ae,Pt+Ct,ae+mt,N.COLOR_BUFFER_BIT,N.NEAREST):Ai?N.copyTexSubImage3D(Lt,vt,Pt,ae,Pe+bn,Dt,qt,Ct,mt):N.copyTexSubImage2D(Lt,vt,Pt,ae,Dt,qt,Ct,mt);gt.bindFramebuffer(N.READ_FRAMEBUFFER,null),gt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ai?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(Lt,vt,Pt,ae,Pe,Ct,mt,wt,ve,Xe,Me.data):L.isCompressedArrayTexture?N.compressedTexSubImage3D(Lt,vt,Pt,ae,Pe,Ct,mt,wt,ve,Me.data):N.texSubImage3D(Lt,vt,Pt,ae,Pe,Ct,mt,wt,ve,Xe,Me):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,vt,Pt,ae,Ct,mt,ve,Xe,Me.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,vt,Pt,ae,Me.width,Me.height,ve,Me.data):N.texSubImage2D(N.TEXTURE_2D,vt,Pt,ae,Ct,mt,ve,Xe,Me);gt.pixelStorei(N.UNPACK_ROW_LENGTH,Qe),gt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,fe),gt.pixelStorei(N.UNPACK_SKIP_PIXELS,Ti),gt.pixelStorei(N.UNPACK_SKIP_ROWS,qe),gt.pixelStorei(N.UNPACK_SKIP_IMAGES,cr),vt===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&N.generateMipmap(Lt),gt.unbindTexture()},this.initRenderTarget=function(y){zt.get(y).__webglFramebuffer===void 0&&Vt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Vt.setTextureCube(y,0):y.isData3DTexture?Vt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Vt.setTexture2DArray(y,0):Vt.setTexture2D(y,0),gt.unbindTexture()},this.resetState=function(){Y=0,B=0,it=null,gt.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}const Cs=new R;function xn(i,t,e,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Cs.copy(t),Cs[n]=0,Cs.normalize();const l=.5*a/(a+o),h=1-Cs.angleTo(i)/c;return Math.sign(Cs[e])===1?h*l:o/(a+o)+l+l*(1-h)}class Ll extends Si{constructor(t=1,e=1,n=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new R,l=new R,h=new R(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,g=f.length/6,v=new R,p=.5/a;for(let m=0,x=0;m<f.length;m+=3,x+=2)switch(c.fromArray(f,m),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),f[m+0]=h.x*Math.sign(c.x)+l.x*r,f[m+1]=h.y*Math.sign(c.y)+l.y*r,f[m+2]=h.z*Math.sign(c.z)+l.z*r,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/g)){case 0:v.set(1,0,0),u[x+0]=xn(v,l,"z","y",r,n),u[x+1]=1-xn(v,l,"y","z",r,e);break;case 1:v.set(-1,0,0),u[x+0]=1-xn(v,l,"z","y",r,n),u[x+1]=1-xn(v,l,"y","z",r,e);break;case 2:v.set(0,1,0),u[x+0]=1-xn(v,l,"x","z",r,t),u[x+1]=xn(v,l,"z","x",r,n);break;case 3:v.set(0,-1,0),u[x+0]=1-xn(v,l,"x","z",r,t),u[x+1]=1-xn(v,l,"z","x",r,n);break;case 4:v.set(0,0,1),u[x+0]=1-xn(v,l,"x","y",r,t),u[x+1]=1-xn(v,l,"y","x",r,e);break;case 5:v.set(0,0,-1),u[x+0]=xn(v,l,"x","y",r,t),u[x+1]=1-xn(v,l,"y","x",r,e);break}}static fromJSON(t){return new Ll(t.width,t.height,t.depth,t.segments,t.radius)}}const et=2.4,on=1.2,Mn=-18,Dn=18,$_=6,pn=.5,Zs={sunrise:{id:"sunrise",name:"Sunrise",skyTop:"#2f74c2",skyMid:"#ffc488",skyBottom:"#f6a878",sun:"#fff4c9",fog:"#f1aa80",hemiSky:"#ffeccf",hemiGround:"#c27e50",light:"#fff0d2",body:"#2aa7b8",bodySide:"#157f94",top:"#6cc9df",rock:"#c96b3f",accent:"#ff5f3d",accent2:"#ffbf2f",glow:"#ffd166",cloud:"#fff7e9",grass:"#6dd867"},neon:{id:"neon",name:"Neon",skyTop:"#070822",skyMid:"#29134f",skyBottom:"#5d1d69",sun:"#ff4fd8",fog:"#1a0c34",hemiSky:"#7f6bff",hemiGround:"#1b0a2b",light:"#b7b0ff",body:"#23234d",bodySide:"#141433",top:"#46468a",rock:"#140d2b",accent:"#2de2e6",accent2:"#ff2e88",glow:"#67fff6",cloud:"#342361",grass:"#2de2e6"},temple:{id:"temple",name:"Temple",skyTop:"#0b3f57",skyMid:"#46b0a2",skyBottom:"#79c7b6",sun:"#fff3ba",fog:"#7fc3b4",hemiSky:"#e6fff7",hemiGround:"#1e4a3c",light:"#fff4d0",body:"#2f8b75",bodySide:"#1d6557",top:"#dfc878",rock:"#335547",accent:"#ffb627",accent2:"#ff6b6b",glow:"#ffe28a",cloud:"#e8fff9",grass:"#67b86b"}};function St(i,t,e,n=0,s=0,r={}){return{t:i,x:t,z:e,l:n,r:s,...r}}function yn(i,t,e,n,s,r,a=0,o=0,c="plat"){for(let l=0;l<r;l++)i.push(St(c,t+n*l,e+s*l,a,o))}const Ae=[];Ae.push(St("start",0,8,0,2));yn(Ae,0,7,0,-1,3,0);yn(Ae,0,3,0,-1,2,0);Ae.push(St("ramp",0,1,0,2));yn(Ae,0,0,0,-1,2,1);Ae.push(St("checkpoint",0,-1,1,2));Ae.push(St("curve",0,-2,1,0));yn(Ae,1,-2,1,0,4,1);Ae.push(St("spinner",5,-2,1,0));yn(Ae,6,-2,1,0,2,1);Ae.push(St("curve",8,-2,1,3));yn(Ae,8,-1,0,1,4,1);Ae.push(St("boost",8,3,1,2));Ae.push(St("curve",8,4,1,2));Ae.push(St("plat",7,4,1,0));yn(Ae,6,4,-1,0,3,1);Ae.push(St("mover",3,4,1,3));yn(Ae,2,4,-1,0,2,1);Ae.push(St("curve",0,4,1,1));yn(Ae,0,3,0,-1,2,1);Ae.push(St("finish",0,1,1,0));const he=[];he.push(St("start",0,13,0,2));yn(he,0,12,0,-1,2,0);he.push(St("ramp",0,10,0,2));he.push(St("checkpoint",0,9,1,2));he.push(St("spinner",0,8,1,0));he.push(St("curve",0,7,1,0));yn(he,1,7,1,0,2,1);he.push(St("checkpoint",2,7,1,0));he.push(St("plat",4,7,1,0));he.push(St("ramp",5,7,1,1));he.push(St("plat",6,7,2,0));he.push(St("curve",7,7,2,2));he.push(St("mover",7,6,2,2));he.push(St("plat",7,4,2,0));he.push(St("curve",7,3,2,3));he.push(St("checkpoint",6,3,2,0));he.push(St("ramp",6,2,1,0));he.push(St("plat",6,1,1,0));he.push(St("boost",6,0,1,2));he.push(St("plat",6,-2,1,0));he.push(St("plat",6,-3,1,0));he.push(St("spinner",6,-4,1,0));yn(he,5,-4,-1,0,2,1);he.push(St("checkpoint",3,-4,1,3));he.push(St("ramp",2,-4,1,3));he.push(St("plat",1,-4,2,0));he.push(St("beam",0,-5,2,3));he.push(St("beam",-1,-5,2,3));he.push(St("beam",-2,-5,2,3));he.push(St("plat",-3,-5,1,0));he.push(St("ramp",-3,-6,1,2));he.push(St("plat",-3,-7,2,0));he.push(St("finish",-3,-8,2,2));const we=[];we.push(St("start",0,15,2,2));we.push(St("plat",0,14,2,0));we.push(St("plat",0,12,2,0));we.push(St("spinner",0,11,2,0));we.push(St("checkpoint",0,10,2,0));we.push(St("plat",1,10,2,0));we.push(St("plat",2,10,2,0));we.push(St("bounce",3,10,2,0));we.push(St("plat",3,8,2,0));we.push(St("plat",3,7,2,0));we.push(St("ramp",3,6,2,2));we.push(St("plat",3,5,3,0));we.push(St("checkpoint",3,4,3,0));we.push(St("beam",2,4,3,3));we.push(St("beam",1,4,3,3));we.push(St("beam",0,4,3,3));we.push(St("spinner",0,3,3,0));we.push(St("mover",0,2,3,2));we.push(St("plat",0,0,3,0));we.push(St("boost",0,-1,3,2));we.push(St("plat",0,-3,3,0));we.push(St("finish",0,-4,3,2));const rn=[{id:"sunrise-sprint",name:"Sunrise Sprint",tagline:"Warm up those bearings.",author:"Marble Club",theme:"sunrise",difficulty:1,par:27,rivals:[{name:"Nova",time:20.4,color:"#ff6b35"},{name:"Pixel",time:22.6,color:"#2d9cdb"},{name:"Mika",time:24.9,color:"#9b51e0"},{name:"Rook",time:28.1,color:"#27ae60"},{name:"Juno",time:31.8,color:"#eb5757"}],pieces:Ae},{id:"neon-current",name:"Neon Current",tagline:"A glowing route through the grid.",author:"Marble Club",theme:"neon",difficulty:2,par:43,rivals:[{name:"Vex",time:33.9,color:"#2de2e6"},{name:"Lumi",time:37.2,color:"#ff2e88"},{name:"Kodi",time:40.8,color:"#f2c94c"},{name:"Zephyr",time:45.1,color:"#b06bff"},{name:"Ash",time:50.4,color:"#6fcf97"}],pieces:he},{id:"sky-temple",name:"Sky Temple",tagline:"Narrow beams. Big air. No fear.",author:"Marble Club",theme:"temple",difficulty:3,par:60,rivals:[{name:"Kite",time:45.7,color:"#ffb627"},{name:"Sable",time:50.2,color:"#56ccf2"},{name:"Onyx",time:55.5,color:"#bb6bd9"},{name:"Pip",time:61.3,color:"#ff6b6b"},{name:"Moss",time:67.8,color:"#6fcf97"}],pieces:we}];function Au(){const i=[];return i.push(St("start",0,5,0,2)),i.push(St("plat",0,4,0,0)),i.push(St("plat",0,3,0,0)),i.push(St("ramp",0,2,0,2)),i.push(St("checkpoint",0,1,1,0)),i.push(St("plat",1,1,1,0)),i.push(St("plat",2,1,1,0)),i.push(St("spinner",3,1,1,0)),i.push(St("plat",4,1,1,0)),i.push(St("plat",4,0,1,0)),i.push(St("plat",4,-1,1,0)),i.push(St("finish",4,-2,1,2)),{id:"draft",name:"Untitled Course",tagline:"A course made by you.",author:"You",theme:"sunrise",difficulty:2,par:35,rivals:[],pieces:i}}function Bs(i){let t=1/0,e=-1/0,n=1/0,s=-1/0,r=0,a=0;for(const o of i)t=Math.min(t,o.x),e=Math.max(e,o.x),n=Math.min(n,o.z),s=Math.max(s,o.z),r=Math.min(r,o.l),a=Math.max(a,o.l);return i.length?{minX:t,maxX:e,minZ:n,maxZ:s,minL:r,maxL:a}:{minX:-2,maxX:2,minZ:-2,maxZ:2,minL:0,maxL:0}}function Il(i){const t=Bs(i),e=(t.maxX-t.minX+t.maxZ-t.minZ+2)*2.3;return Math.max(12,Math.round(e+i.length*.22))}class Z_{constructor(){this.enabled=!0,this.ctx=null,this.master=null,this.rollGain=null,this.rollFilter=null,this.lastCollide=0,this.noiseBuffer=null}init(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.enabled?.55:0,this.master.connect(this.ctx.destination);const e=Math.floor(this.ctx.sampleRate*2),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=n.getChannelData(0);let r=0;for(let o=0;o<e;o++){const c=Math.random()*2-1;r=(r+.02*c)/1.02,s[o]=r*3.2}this.noiseBuffer=n;const a=this.ctx.createBufferSource();a.buffer=n,a.loop=!0,this.rollFilter=this.ctx.createBiquadFilter(),this.rollFilter.type="lowpass",this.rollFilter.frequency.value=420,this.rollFilter.Q.value=.7,this.rollGain=this.ctx.createGain(),this.rollGain.gain.value=0,a.connect(this.rollFilter).connect(this.rollGain).connect(this.master),a.start()}unlock(){this.init(),this.ctx?.state==="suspended"&&this.ctx.resume()}setEnabled(t){this.enabled=t,this.master&&this.ctx&&this.master.gain.setTargetAtTime(t?.55:0,this.ctx.currentTime,.04)}setRolling(t,e){if(!this.ctx||!this.rollGain)return;const n=e?Math.min(1,t/13)*.07:0;this.rollGain.gain.setTargetAtTime(n,this.ctx.currentTime,.06),this.rollFilter.frequency.setTargetAtTime(300+Math.min(1,t/13)*800,this.ctx.currentTime,.1)}tone(t,e=.12,n="sine",s=.12,r=null,a=0){if(!this.ctx||!this.enabled)return;const o=this.ctx.currentTime+a,c=this.ctx.createOscillator(),l=this.ctx.createGain();c.type=n,c.frequency.setValueAtTime(t,o),r&&c.frequency.exponentialRampToValueAtTime(r,o+e),l.gain.setValueAtTime(1e-4,o),l.gain.exponentialRampToValueAtTime(s,o+.012),l.gain.exponentialRampToValueAtTime(1e-4,o+e),c.connect(l).connect(this.master),c.start(o),c.stop(o+e+.02)}noise(t=.3,e=.12,n="highpass",s=700,r=0){if(!this.ctx||!this.enabled)return;const a=this.ctx.currentTime+r,o=this.ctx.createBufferSource();o.buffer=this.noiseBuffer;const c=this.ctx.createBiquadFilter();c.type=n,c.frequency.value=s;const l=this.ctx.createGain();l.gain.setValueAtTime(e,a),l.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(c).connect(l).connect(this.master),o.start(a),o.stop(a+t+.02)}click(){this.unlock(),this.tone(520,.055,"triangle",.06,380)}jump(){this.tone(260,.18,"sine",.1,520),this.noise(.08,.03,"highpass",1800)}land(t=1){this.tone(110,.13,"sine",.07*t,65),this.noise(.08,.04*t,"lowpass",500)}collide(t=1){if(!this.ctx)return;const e=this.ctx.currentTime;e-this.lastCollide<.09||(this.lastCollide=e,this.tone(150,.09,"square",.025*t,80))}checkpoint(){[659,880,1174].forEach((t,e)=>this.tone(t,.16,"triangle",.09,null,e*.08))}boost(){this.tone(180,.3,"sawtooth",.07,900),this.noise(.3,.06,"bandpass",900)}bounce(){this.tone(150,.42,"sine",.14,760)}countdown(t){this.tone(t>0?440:880,.14,"square",.07,t>0?420:900)}finish(){[523,659,784,1046].forEach((t,e)=>this.tone(t,.5,"triangle",.1,null,e*.1)),[523,784].forEach((t,e)=>this.tone(t/2,.65,"sine",.05,null,e*.1)),this.noise(.5,.05,"highpass",1200)}fail(){this.tone(280,.35,"sawtooth",.06,90)}uiOpen(){this.tone(392,.08,"triangle",.05,523)}uiBack(){this.tone(523,.08,"triangle",.05,392)}}const Qt=new Z_,is=new R(0,1,0),K_=31,J_=11,Q_=26,j_=8.1,tv=1.35,Ge=(i,t,e)=>Math.max(t,Math.min(e,i)),ev=(i,t,e,n)=>i+(t-i)*(1-Math.exp(-6*n)),ln=i=>i%4*(Math.PI/2),Wr=i=>{const t=ln(i);return new R(Math.sin(t),0,Math.cos(t))};function ao(){const i=et/2,t=-et/2,e=et/2,n=et*.17,s=new Cl;return s.absarc(i,t,e,Math.PI,Math.PI/2,!0),s.lineTo(i,t+n),s.absarc(i,t,n,Math.PI/2,Math.PI,!1),s.closePath(),s}function oo(i){let t=i>>>0;return()=>{t+=1831565813;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function nv(i){let t=2166136261;for(let e=0;e<String(i).length;e++)t^=String(i).charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function iv(){const i=document.createElement("canvas");i.width=256,i.height=128;const t=i.getContext("2d"),e=[[70,72,46],[110,55,56],[155,65,52],[195,78,38],[50,86,32],[130,86,48]];for(const[s,r,a]of e){const o=t.createRadialGradient(s,r,0,s,r,a);o.addColorStop(0,"rgba(255,255,255,0.95)"),o.addColorStop(.55,"rgba(255,255,255,0.55)"),o.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=o,t.fillRect(s-a,r-a,a*2,a*2)}const n=new er(i);return n.colorSpace=He,n}function sv(){const i=document.createElement("canvas");i.width=64,i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,30);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.75)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new er(i);return n.colorSpace=He,n}function fh(){const i=document.createElement("canvas");i.width=512,i.height=512;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,512,512);e.addColorStop(0,"#fffdf6"),e.addColorStop(.45,"#ffe6bd"),e.addColorStop(1,"#fff4dc"),t.fillStyle=e,t.fillRect(0,0,512,512);const n=[["#ff5a2a",.52,.17,168,.95],["#0f9fa8",.38,.15,126,.9],["#ffb200",.2,.13,98,.92],["#e52e6f",.3,.12,76,.8],["#7b45e8",.24,.09,62,.7]];for(let r=0;r<30;r++){const[a,o,c,l,h]=n[r%n.length];t.save(),t.translate(256+Math.cos(r*2.4)*(30+r*5.2),256+Math.sin(r*1.7)*(30+r*4.2)),t.rotate(r*.8),t.strokeStyle=a,t.globalAlpha=h,t.lineWidth=c*34+5,t.lineCap="round",t.beginPath(),t.ellipse(0,0,l*(.7+o*.5),l*(.22+o*.15),0,0,Math.PI*1.6),t.stroke(),t.restore()}t.globalAlpha=.85;for(let r=0;r<18;r++)t.fillStyle=n[r%n.length][0],t.beginPath(),t.arc(40+r*83%440,35+r*127%450,4+r%4*2.4,0,Math.PI*2),t.fill();t.globalAlpha=.5;for(let r=0;r<110;r++)t.fillStyle=r%2?"#ffffff":"#ffcf9b",t.beginPath(),t.arc(Math.random()*512,Math.random()*512,Math.random()*2.2+.4,0,Math.PI*2),t.fill();const s=new er(i);return s.colorSpace=He,s.wrapS=s.wrapT=Gs,s}function ph(i,t="#ffffff",e="#ffb703"){const n=document.createElement("canvas");n.width=512,n.height=160;const s=n.getContext("2d");s.font='900 84px "Baloo 2", Arial Black, sans-serif',s.textAlign="center",s.textBaseline="middle",s.lineWidth=18,s.strokeStyle="rgba(20,16,40,0.35)",s.lineJoin="round",s.strokeText(i,256,82),s.shadowColor=e,s.shadowBlur=26,s.fillStyle=t,s.fillText(i,256,82);const r=new er(n);return r.colorSpace=He,r}class rv{constructor(t){this.canvas=t,this.renderer=new Y_({canvas:t,antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),this.renderer.outputColorSpace=He,this.renderer.toneMapping=pl,this.renderer.toneMappingExposure=.92,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ns,this.scene=new $d,this.camera=new Rn(58,1,.08,500),this.camera.position.set(0,7,16),this.events={},this.mode="showcase",this.totalTime=0,this.raceState="idle",this.raceTime=0,this.currentMap=null,this.paused=!1,this.quality="high",this.colliders=[],this.checkpoints=[],this.boosts=[],this.bounces=[],this.startPiece=null,this.finishPiece=null,this.finishInfo=null,this.spawn=null,this.lastCheckpoint=null,this.respawnCooldown=0,this.courseGroup=null,this.showcaseGroup=null,this.groups=[],this.fxGroup=null,this.camYaw=0,this.camPitch=.36,this.camDist=7.4,this.camTarget=new R,this.camLook=new R,this.camPos=new R(0,8,16),this.camShake=0,this.fovKick=0,this.autoOrbit=.05,this.cameraMode="showcase",this.input={x:0,y:0,tiltX:0,tiltY:0,tiltOn:!1},this.ball=this.createBall(),this.ghostMesh=this.createGhost(),this.recording=[],this.recordAcc=0,this.recordingEnabled=!0,this.ghost=null,this.countdownT=0,this.lastCount=0,this.resuming=!1,this.bestSplits=null,this.splits=[],this.builder={active:!1,map:null,level:0,tool:"plat",rot:0,hover:null,history:[]},this.materials=new Map,this.geometries=new Map,this.lineMaterials=new Map,this.particleTexture=sv(),this.cloudTexture=iv(),this.setupScene(),this.setupLights(),this.setupSky(),this.setupClouds(),this.setupStars(),this.setupFX(),this.showShowcase(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.resize()}setupScene(){this.scene.fog=new bl(16239003,42,190),this.envMap=null,this.scene.environment=null}setupLights(){this.hemi=new $f(13625343,12746320,.42),this.scene.add(this.hemi),this.dir=new Hc(16773330,1.28),this.dir.position.set(22,36,18),this.dir.castShadow=!0,this.dir.shadow.mapSize.set(2048,2048),this.dir.shadow.camera.near=1,this.dir.shadow.camera.far=160,this.dir.shadow.camera.left=-42,this.dir.shadow.camera.right=42,this.dir.shadow.camera.top=42,this.dir.shadow.camera.bottom=-42,this.dir.shadow.bias=-6e-4,this.dir.shadow.normalBias=.035,this.scene.add(this.dir),this.scene.add(this.dir.target),this.rim=new Hc(16747100,.3),this.rim.position.set(-25,14,-18),this.scene.add(this.rim)}setupSky(){this.skyUniforms={top:{value:new Wt(5214168)},mid:{value:new Wt(16765859)},bottom:{value:new Wt(16771527)},sunColor:{value:new Wt(16774345)},sunDir:{value:new R(.4,.45,.3).normalize()}};const t=new Jn(320,32,20),e=new yi({uniforms:this.skyUniforms,side:Ke,depthWrite:!1,fog:!1,vertexShader:`
        varying vec3 vWorld;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorld = wp.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
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
      `});this.sky=new It(t,e),this.sky.frustumCulled=!1,this.scene.add(this.sky)}setupClouds(){this.cloudGroup=new Ie,this.scene.add(this.cloudGroup);for(let t=0;t<14;t++){const e=new as({map:this.cloudTexture,color:16777215,transparent:!0,opacity:.55,depthWrite:!1,fog:!0}),n=new Ts(e),s=t/14*Math.PI*2+Math.random()*.4,r=45+Math.random()*90;n.position.set(Math.cos(s)*r,8+Math.random()*26,Math.sin(s)*r);const a=18+Math.random()*26;n.scale.set(a,a*.5,1),this.cloudGroup.add(n)}}setupStars(){const e=new Float32Array(1260);for(let s=0;s<420;s++){const r=Math.random()*Math.PI*2,a=.12+Math.random()*.88,o=Math.sqrt(1-a*a);e[s*3]=Math.cos(r)*o*280,e[s*3+1]=a*280,e[s*3+2]=Math.sin(r)*o*280}const n=new Re;n.setAttribute("position",new si(e,3)),this.starMat=new tu({color:16777215,size:1.6,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),this.stars=new af(n,this.starMat),this.scene.add(this.stars)}setupFX(){this.fxGroup=new Ie,this.scene.add(this.fxGroup),this.fx=[];for(let t=0;t<110;t++){const e=new as({map:this.particleTexture,color:16777215,transparent:!0,opacity:0,depthWrite:!1,blending:Ii}),n=new Ts(e);n.visible=!1,this.fxGroup.add(n),this.fx.push({sprite:n,life:0,maxLife:1,vel:new R,gravity:0,size:1,drag:0})}this.fxIndex=0}makeMat(t,e={}){const n=`${t}|${e.emissive||0}|${e.roughness??.55}|${e.metalness??.02}|${e.opacity??1}|${e.side||0}|${e.flat?1:0}`;if(this.materials.has(n))return this.materials.get(n);const s=new Un({color:t,roughness:e.roughness??.55,metalness:e.metalness??.02,emissive:e.emissive||0,emissiveIntensity:e.emissiveIntensity??1,transparent:(e.opacity??1)<1,opacity:e.opacity??1,side:e.side||vi,flatShading:!!e.flat,envMapIntensity:e.envMapIntensity??.18});return this.materials.set(n,s),s}lineMat(t,e=.8){const n=`${t}|${e}`;if(this.lineMaterials.has(n))return this.lineMaterials.get(n);const s=new sa({color:t,transparent:!0,opacity:e,depthWrite:!1});return this.lineMaterials.set(n,s),s}boxGeo(t,e,n,s=.09,r=2){const a=`${t.toFixed(2)}|${e.toFixed(2)}|${n.toFixed(2)}|${s}|${r}`;if(this.geometries.has(a))return this.geometries.get(a);const o=Math.max(.001,Math.min(s,Math.min(t,e,n)*.45)),c=new Ll(t,e,n,r,o);return this.geometries.set(a,c),c}cylGeo(t,e,n,s=8){const r=`cyl|${t}|${e}|${n}|${s}`;if(this.geometries.has(r))return this.geometries.get(r);const a=new Xs(t,e,n,s);return this.geometries.set(r,a),a}applyTheme(t){const e=Zs[t]||Zs.sunrise;this.theme=e,this.themeKey=t,this.skyUniforms.top.value.set(e.skyTop),this.skyUniforms.mid.value.set(e.skyMid),this.skyUniforms.bottom.value.set(e.skyBottom),this.skyUniforms.sunColor.value.set(e.sun),this.scene.fog.color.set(e.fog),this.scene.fog.near=t==="neon"?45:62,this.scene.fog.far=t==="neon"?190:260,this.hemi.color.set(e.hemiSky),this.hemi.groundColor.set(e.hemiGround),this.hemi.intensity=t==="neon"?.62:t==="temple"?.46:.44,this.dir.color.set(e.light),this.dir.intensity=t==="neon"?1.3:1.32,this.rim.color.set(e.accent),this.rim.intensity=t==="neon"?.8:.32;for(const n of this.cloudGroup.children)n.material.color.set(e.cloud);this.starMat.opacity=t==="neon"?.9:.12,this.renderer.toneMappingExposure=t==="neon"?1:.98}setLightingBounds(t,e=13){if(!this.theme)return;const s=(t.minX+t.maxX)/2*et,r=(t.minZ+t.maxZ)/2*et,a=(t.minL+t.maxL)/2*on,o=(t.maxX-t.minX+1)*et,c=(t.maxZ-t.minZ+1)*et,l=Ge(Math.max(o,c)*.72+e,22,74),h=this.dir.shadow.camera;h.left=-l,h.right=l,h.top=l,h.bottom=-l,h.updateProjectionMatrix(),this.dir.target.position.set(s,a,r),this.dir.position.set(s+26,a+40,r+22),this.rim.position.set(s-25,a+14,r-22),this.skyUniforms.sunDir.value.set(.45,.5,.36).normalize()}createBall(){const t=new Ie,e=new Jn(pn,40,28),n=new Oc({map:fh(),roughness:.24,metalness:.06,clearcoat:.9,clearcoatRoughness:.1,envMapIntensity:.55}),s=new It(e,n);s.castShadow=!0,s.receiveShadow=!0,t.add(s);const r=new It(new Jn(pn*1.045,24,18),new Ne({color:16760944,transparent:!0,opacity:.09,blending:Ii,side:Ke}));return t.add(r),this.scene.add(t),{group:t,mesh:s,pos:new R(0,2,0),vel:new R,quat:new Ze,grounded:!1,groundCollider:null,coyote:0,jumpBuffer:0,jumpCooldown:0,spin:0,speed:0,active:!1}}createGhost(){const t=new Ie,e=new Ne({color:7337727,transparent:!0,opacity:.28,blending:Ii,depthWrite:!1}),n=new It(new Jn(pn*1.01,24,16),e);t.add(n);const s=new It(new Jn(pn*1.03,14,10),new Ne({color:11206655,wireframe:!0,transparent:!0,opacity:.28,depthWrite:!1}));return t.add(s),t.visible=!1,this.scene.add(t),{group:t,mesh:n,wire:s,path:null,cursor:0,visibleUntil:0}}resetBallPosition(){const t=this.spawn||{x:0,y:4,z:0,yaw:0};this.ball.pos.set(t.x,t.y+tv,t.z),this.ball.vel.set(0,0,0),this.ball.quat.identity(),this.ball.grounded=!1,this.ball.groundCollider=null,this.ball.coyote=0,this.ball.jumpBuffer=0,this.ball.jumpCooldown=0,this.ball.group.position.copy(this.ball.pos),this.ball.group.quaternion.copy(this.ball.quat),this.camYaw=t.yaw??0,this.camPitch=.52,this.camDist=window.innerWidth/window.innerHeight<.8?9.8:8.2,this.camTarget.set(t.x,t.y+1,t.z),this.camLook.copy(this.camTarget);const e=new R(Math.sin(this.camYaw)*Math.cos(this.camPitch),Math.sin(this.camPitch),Math.cos(this.camYaw)*Math.cos(this.camPitch)).multiplyScalar(this.camDist);this.camPos.copy(this.camTarget).add(e),this.ghostMesh.group.visible=!1}clearShowcase(){this.showcaseGroup&&(this.scene.remove(this.showcaseGroup),this.showcaseGroup=null)}showShowcase(){this.mode="showcase",this.cameraMode="showcase",this.clearWorld(),this.clearShowcase(),this.applyTheme("sunrise"),this.ball.active=!1,this.ball.group.visible=!1,this.ghostMesh.group.visible=!1,this.showcaseMarble=null,this.showcaseRing1=null,this.showcaseRing2=null,this.showcaseSparks=[];const t=this.theme,e=new Ie;this.showcaseGroup=e,this.scene.add(e);const n=window.innerWidth/Math.max(1,window.innerHeight)>1.05;e.position.x=n?5.2:0;const s=new It(this.cylGeo(5.85,4.2,1.3,12),this.makeMat(t.grass,{roughness:.85}));s.position.y=-.6,s.receiveShadow=!0,s.castShadow=!0,e.add(s);const r=new It(new An(5.55,.2,8,48),this.makeMat(t.top,{roughness:.65}));r.rotation.x=Math.PI/2,r.position.y=.08,r.receiveShadow=!0,e.add(r);const a=new It(this.cylGeo(4.2,.35,6.5,9),this.makeMat(t.rock,{roughness:.95,flat:!0}));a.position.y=-4.5,a.rotation.y=.4,a.castShadow=!0,e.add(a);for(let g=0;g<14;g++){const v=g/14*Math.PI*2,p=new It(new oa(.45+Math.random()*.7,0),this.makeMat(t.rock,{roughness:1,flat:!0}));p.position.set(Math.cos(v)*(4.2+Math.random()),-5-Math.random()*2.5,Math.sin(v)*(4.2+Math.random())),p.rotation.set(Math.random(),Math.random(),Math.random()),e.add(p)}const o=new It(this.cylGeo(1.7,2.1,.8,16),this.makeMat(t.body,{roughness:.5}));o.position.y=.7,o.castShadow=!0,o.receiveShadow=!0,e.add(o);const c=new It(new An(1.55,.06,8,48),new Un({color:t.accent,emissive:t.accent,emissiveIntensity:2.4,roughness:.3}));c.rotation.x=Math.PI/2,c.position.y=1.12,e.add(c);const l=new Ie,h=new It(new Jn(1.8,48,32),new Oc({map:fh(),roughness:.22,metalness:.06,clearcoat:.9,clearcoatRoughness:.1,envMapIntensity:.6}));h.castShadow=!0,l.add(h),l.position.set(0,4.1,0),e.add(l),this.showcaseMarble=l;const f=new It(new An(2.75,.075,10,72),new Un({color:t.accent2,emissive:t.accent2,emissiveIntensity:2.2,roughness:.35}));f.position.copy(l.position),f.rotation.set(1.1,.2,.4),e.add(f),this.showcaseRing1=f;const d=new It(new An(3.25,.04,8,64),new Un({color:t.accent,emissive:t.accent,emissiveIntensity:1.8,roughness:.35,transparent:!0,opacity:.8}));d.position.copy(l.position),d.rotation.set(1.55,.2,-.5),e.add(d),this.showcaseRing2=d;const u=oo(1337);for(let g=0;g<9;g++){const v=u()*Math.PI*2,p=9+u()*12,m=Math.cos(v)*p,x=Math.sin(v)*p,b=-3-u()*7,M=.8+u()*1.6,T=new Ie,E=new It(this.cylGeo(1.5*M,1.15*M,.4,8),this.makeMat(t.grass,{roughness:.9})),_=new It(this.cylGeo(1.1*M,.1,3.2*M,7),this.makeMat(t.rock,{roughness:1,flat:!0}));if(_.position.y=-1.7*M,E.castShadow=!0,_.castShadow=!0,T.add(E,_),T.position.set(m,b,x),e.add(T),u()>.35){const w=new It(new Di(.35*M,0),new Un({color:t.accent,emissive:t.accent,emissiveIntensity:1.7,roughness:.25}));w.position.set(m+(u()-.5)*1.2,b+1.2+u(),x+(u()-.5)*1.2),w.rotation.set(u(),u(),u()),w.scale.y=1.8,e.add(w)}}for(let g=0;g<16;g++){const v=u()*Math.PI*2,p=7+u()*6,m=1.5+u()*7,x=new It(new Di(.12+u()*.1,0),new Ne({color:g%3?t.glow:t.accent2}));x.position.set(Math.cos(v)*p,m,Math.sin(v)*p),e.add(x),this.showcaseSparks||(this.showcaseSparks=[]),this.showcaseSparks.push(x)}this.addCloudSea(0,0,42,-18,e),this.setLightingBounds({minX:-6,maxX:6,minZ:-6,maxZ:6,minL:0,maxL:1},8),this.autoOrbit=.055,this.cameraMode="showcase",this.camPitch=.25,this.camTarget.set(0,n?4:1.2,0),this.camDist=n?15.5:14.2,this.fovKick=0,this.camera.fov=48,this.camera.updateProjectionMatrix(),this.dir.intensity=2}clearWorld(){this.clearShowcase(),this.courseGroup&&(this.scene.remove(this.courseGroup),this.courseGroup=null),this.builderGroup&&(this.scene.remove(this.builderGroup),this.builderGroup=null),this.colliders=[],this.dynamics=[],this.checkpoints=[],this.boosts=[],this.bounces=[],this.startPiece=null,this.finishPiece=null,this.finishInfo=null,this.spawn=null,this.lastCheckpoint=null,this.currentMap=null,this.builder.hover=null,this.ball.active=!1,this.ball.group.visible=!1,this.ghostMesh.group.visible=!1}topOf(t){return t.l*on}addColliderBox(t,e,n,s,r,a={}){const o={center:t,half:e,quat:n,piece:s,kind:r,radius:e.length(),velocity:new R,...a};return this.colliders.push(o),o}addEdgeOutlines(t,e,n,s,r,a=.45,o=null){this.unitEdges||(this.unitEdges=new Rc(new Si(1,1,1)));const c=new Qo(this.unitEdges,this.lineMat(o||this.theme.accent,a));c.scale.set(e,n,s),c.position.y=r,t.add(c)}addSlab(t,e,n,s={}){const r=s.w??et*.96,a=s.d??et*.96,o=s.thick??.46,c=s.rot||0,l=this.theme,h=this.makeMat(s.colorBody||l.body,{roughness:.55,metalness:.06}),f=this.makeMat(s.colorTop||l.top,{roughness:.66,metalness:.02}),d=new It(this.boxGeo(r,o,a,.13,2),h);d.position.set(t,n-o/2,e),d.rotation.y=c,d.castShadow=!0,d.receiveShadow=!0,this.courseGroup.add(d);const u=new It(this.boxGeo(r*.9,.09,a*.9,.06,2),f);if(u.position.set(t,n-.045,e),u.rotation.y=c,u.receiveShadow=!0,this.courseGroup.add(u),s.outline!==!1){const g=new Ie;g.position.set(t,0,e),g.rotation.y=c,this.courseGroup.add(g),this.addEdgeOutlines(g,r*.98,.13,a*.98,n-.06,s.outlineOpacity??.65,s.outlineColor||null)}if(s.collider!==!1){const g=new Ze().setFromAxisAngle(is,c),v=this.addColliderBox(new R(t,n-o/2,e),new R(r/2,o/2,a/2),g,s.piece||null,s.kind||"platform");return v.topY=n,v}return null}createCurve(t){const e=this.topOf(t),n=.4,s=ao(),r=ln(t.r),a=new It(new la(s,{depth:n,bevelEnabled:!1,curveSegments:20,steps:1}),this.makeMat(this.theme.bodySide,{roughness:.56,metalness:.05}));a.rotation.x=-Math.PI/2,a.rotation.z=0,a.rotation.y=r,a.position.set(t.x*et,e,t.z*et),a.castShadow=!0,a.receiveShadow=!0,this.courseGroup.add(a);const o=new It(new ca(s,20),this.makeMat(this.theme.top,{roughness:.62,metalness:.02,side:hn}));o.rotation.x=-Math.PI/2,o.rotation.y=r,o.position.set(t.x*et,e+.012,t.z*et),o.receiveShadow=!0,this.courseGroup.add(o);const c=new R(t.x*et,e-n/2,t.z*et),l=et*((.5+.17)/2),h=Math.PI*l/2,f=16,d=h/f*.62,u=ln(t.r);for(let g=0;g<f;g++){const v=(g+.5)*(Math.PI/2/f),p=et/2-l*Math.cos(v),m=et/2-l*Math.sin(v),x=new R(p,0,m).applyAxisAngle(is,u).add(c),b=Math.PI-v+u,M=new Ze().setFromAxisAngle(is,b),T=this.addColliderBox(x,new R(et*.18,n/2,d),M,t,"platform");T.topY=e}}createRamp(t){const e=this.theme,n=this.topOf(t),s=Math.atan2(on,et),r=Math.sqrt(et*et+on*on),a=.38,o=new Ze().setFromAxisAngle(is,ln(t.r)),c=new Ze().setFromAxisAngle(new R(1,0,0),-s),l=o.clone().multiply(c),h=new R(t.x*et,n+on/2-a/2*Math.cos(s),t.z*et),f=new It(this.boxGeo(et*.94,a,r,.08,2),this.makeMat(e.bodySide,{roughness:.58}));f.quaternion.copy(l),f.position.copy(h),f.castShadow=!0,f.receiveShadow=!0,this.courseGroup.add(f);const d=new R(0,1,0).applyQuaternion(l),u=new It(this.boxGeo(et*.88,.07,r*.98,.05,2),this.makeMat(e.top,{roughness:.62}));u.quaternion.copy(l),u.position.copy(h).addScaledVector(d,a/2-.02),u.receiveShadow=!0,this.courseGroup.add(u),this.addColliderBox(h.clone(),new R(et*.47,a/2,r/2),l,t,"ramp").topY=n}createWall(t){const e=this.theme,n=this.topOf(t);this.addSlab(t.x*et,t.z*et,n,{piece:t,kind:"platform"});const s=Wr(t.r),r=t.x*et,a=t.z*et,o=new It(this.boxGeo(et*.9,1.5,.34,.1),this.makeMat(e.bodySide,{roughness:.5,emissive:e.accent,emissiveIntensity:.08}));o.position.set(r,n+.75,a),o.rotation.y=ln(t.r),o.castShadow=!0,o.receiveShadow=!0,this.courseGroup.add(o);const c=new It(this.boxGeo(et*.86,.09,.4,.04),this.makeMat(e.accent,{emissive:e.accent,emissiveIntensity:.7,roughness:.4}));c.position.set(r,n+1.5,a),c.rotation.y=ln(t.r),this.courseGroup.add(c);const l=new Ze().setFromAxisAngle(is,ln(t.r));this.addColliderBox(new R(r+s.x*.55,n+.75,a+s.z*.55),new R(et*.45,.75,.17),l,t,"platform")}createSpinner(t){const e=this.theme,n=this.topOf(t);this.addSlab(t.x*et,t.z*et,n,{piece:t,kind:"platform"});const s=t.x*et,r=t.z*et,a=new It(this.cylGeo(.13,.18,1.15,10),this.makeMat(e.accent2,{emissive:e.accent2,emissiveIntensity:.6,roughness:.3,metalness:.3}));a.position.set(s,n+.5,r),a.castShadow=!0,this.courseGroup.add(a);const o=new It(new An(.95,.045,6,40),new Ne({color:e.accent2,transparent:!0,opacity:.7}));o.rotation.x=Math.PI/2,o.position.set(s,n+.025,r),this.courseGroup.add(o);const c=new Ie;c.position.set(s,n+.62,r);const l=et*1.52,h=new It(this.boxGeo(l,.23,.3,.1),this.makeMat(e.accent2,{emissive:e.accent2,emissiveIntensity:.5,roughness:.35,metalness:.25}));h.castShadow=!0,c.add(h);for(const g of[-1,1]){const v=new It(new Jn(.2,14,10),new Ne({color:e.glow}));v.position.x=l/2*g,c.add(v)}this.courseGroup.add(c);const f=new Ze,d=this.addColliderBox(new R(s,n+.62,r),new R(l/2,.16,.18),f,t,"hazard");d.topY=n;const u=(t.x+t.z)%2===0?1.72:-1.72;this.dynamics.push({type:"spinner",mesh:c,collider:d,speed:u,phase:(t.x*7+t.z*3)%9*.4})}createMover(t){const e=this.theme,n=this.topOf(t),s=t.x*et,r=t.z*et,a=Wr(t.r),o=et*.66,c=new Ie;c.position.set(s,0,r);const l=.42,h=new It(this.boxGeo(et*.92,l,et*.92,.12),this.makeMat(e.bodySide,{roughness:.45,metalness:.15}));h.position.y=n-l/2,h.castShadow=!0,h.receiveShadow=!0,c.add(h);const f=new It(this.boxGeo(et*.86,.09,et*.86,.06),this.makeMat(e.top,{roughness:.55}));f.position.y=n-.045,f.receiveShadow=!0,c.add(f);const d=new It(new Si(et*.9,.045,et*.9),new Ne({color:e.accent,transparent:!0,opacity:.5}));d.position.y=n-.44,c.add(d),this.courseGroup.add(c);const u=new It(this.boxGeo(.06,.04,o*2+et*.7,.02),new Ne({color:e.accent,transparent:!0,opacity:.28}));u.position.set(s,n-.5,r),u.rotation.y=ln(t.r),this.courseGroup.add(u);const g=this.addColliderBox(new R(s,n-l/2,r),new R(et*.46,l/2,et*.46),new Ze,t,"platform",{prev:new R(s,n-l/2,r)});g.topY=n,this.dynamics.push({type:"mover",group:c,collider:g,baseX:s,baseZ:r,dir:a,amp:o,speed:1.15,phase:(t.x*5+t.z*7)%11*.37})}getBoostTexture(){if(this.boostTexture)return this.boostTexture;const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.clearRect(0,0,256,256),e.strokeStyle="white",e.lineWidth=26,e.lineJoin="round",e.lineCap="round";for(let s=0;s<3;s++){const r=76+s*52;e.beginPath(),e.moveTo(70,r),e.lineTo(128,r-34),e.lineTo(186,r),e.stroke()}const n=new er(t);return n.colorSpace=He,this.boostTexture=n,n}createBoost(t){const e=this.theme,n=this.topOf(t),s=t.x*et,r=t.z*et;this.addSlab(s,r,n,{piece:t,kind:"platform"});const a=new It(new Ui(et*.82,et*.82),new Ne({map:this.getBoostTexture(),color:e.glow,transparent:!0,opacity:.9,depthWrite:!1,blending:Ii}));a.rotation.x=-Math.PI/2,a.rotation.z=-ln(t.r),a.position.set(s,n+.015,r),this.courseGroup.add(a);const o=Wr(t.r);this.boosts.push({x:s,z:r,topY:n,dir:o,pad:a,readyAt:0,piece:t})}createBounce(t){const e=this.theme,n=this.topOf(t),s=t.x*et,r=t.z*et;this.addSlab(s,r,n,{piece:t,kind:"platform"});const a=new Ie;a.position.set(s,n+.06,r);const o=new It(this.cylGeo(.7,.75,.13,18),this.makeMat(e.accent2,{emissive:e.accent2,emissiveIntensity:.6,roughness:.35}));a.add(o);const c=[];for(let l=0;l<3;l++){const h=new It(new An(.5-l*.04,.035,6,32),new Ne({color:e.glow}));h.rotation.x=Math.PI/2,h.position.y=.12+l*.18,a.add(h),c.push(h)}this.courseGroup.add(a),this.bounces.push({x:s,z:r,topY:n,pad:a,rings:c,readyAt:0,piece:t})}createCheckpoint(t){this.theme;const e=this.topOf(t),n=t.x*et,s=t.z*et;this.addSlab(n,s,e,{piece:t,kind:"platform"});const r=new Ne({color:10134706,transparent:!0,opacity:.7}),a=new It(new An(.62,.055,8,32),r);a.rotation.x=Math.PI/2,a.position.set(n,e+.03,s),this.courseGroup.add(a);const o=new Un({color:10134706,emissive:3359829,emissiveIntensity:.5,roughness:.25,metalness:.2}),c=new It(new Di(.34,0),o);c.position.set(n,e+1.65,s),c.scale.y=1.5,this.courseGroup.add(c);const h={index:this.checkpoints.length,x:n,z:s,topY:e,piece:t,active:!1,mesh:c,ring:a,ringMat:r,diamondMat:o,spawnYaw:ln(t.r)+Math.PI};this.checkpoints.push(h),t._checkpoint=h}createStart(t){const e=this.theme,n=this.topOf(t),s=t.x*et,r=t.z*et;this.addSlab(s,r,n,{piece:t,kind:"platform",outlineOpacity:.85});const a=new It(new Xs(.98,1.02,.06,32),new Un({color:e.accent,emissive:e.accent,emissiveIntensity:.7,roughness:.4}));a.position.set(s,n+.03,r),this.courseGroup.add(a);const o=new It(new An(1.02,.055,8,40),new Ne({color:e.glow}));o.rotation.x=Math.PI/2,o.position.set(s,n+.09,r),this.courseGroup.add(o);const c=new Ts(new as({map:ph("START","#fffdf5",e.glow),transparent:!0,depthWrite:!1}));c.scale.set(2.6,.82,1),c.position.set(s,n+2.55,r),this.courseGroup.add(c),this.startPiece=t,this.spawn={x:s,y:n,z:r,yaw:ln(t.r)+Math.PI},this.camYaw=this.spawn.yaw}createFinish(t){const e=this.theme,n=this.topOf(t),s=t.x*et,r=t.z*et;this.addSlab(s,r,n,{piece:t,kind:"platform",outlineOpacity:.9});const a=new Ie;a.position.set(s,n,r),a.rotation.y=ln(t.r);const o=this.makeMat(e.bodySide,{roughness:.45,metalness:.2});for(const u of[-1,1]){const g=new It(this.boxGeo(.24,2.65,.3,.07),o);g.position.set(u*1.24,1.3,0),g.castShadow=!0,a.add(g);const v=new It(this.boxGeo(.34,.15,.4,.04),this.makeMat(e.accent,{emissive:e.accent,emissiveIntensity:.7,roughness:.35}));v.position.set(u*1.24,2.7,0),a.add(v)}const c=new It(this.boxGeo(2.7,.14,.3,.05),this.makeMat(e.accent,{emissive:e.accent,emissiveIntensity:.45,roughness:.35}));c.position.set(0,2.78,0),a.add(c);const l=new It(new An(.98,.075,10,56),new Un({color:e.accent,emissive:e.accent,emissiveIntensity:1.8,roughness:.25}));l.position.set(0,1.55,0),a.add(l);const h=new It(new wl(.98,40),new Ne({color:e.glow,transparent:!0,opacity:.1,side:hn,blending:Ii,depthWrite:!1}));h.position.set(0,1.55,0),a.add(h);const f=new Ts(new as({map:ph("FINISH","#fffdf5",e.glow),transparent:!0,depthWrite:!1}));f.scale.set(2.9,.9,1),f.position.set(0,3.55,0),a.add(f),this.courseGroup.add(a);const d=Wr(t.r);this.finishPiece=t,this.finishInfo={x:s,z:r,topY:n,ring:l,disc:h,group:a,piece:t,n:new R(d.x,0,d.z),time:0}}buildPiece(t){switch(t.t){case"ramp":this.createRamp(t);break;case"curve":this.createCurve(t);break;case"wall":this.createWall(t);break;case"spinner":this.createSpinner(t);break;case"mover":this.createMover(t);break;case"boost":this.createBoost(t);break;case"bounce":this.createBounce(t);break;case"checkpoint":this.createCheckpoint(t);break;case"start":this.createStart(t);break;case"finish":this.createFinish(t);break;case"beam":this.addSlab(t.x*et,t.z*et,this.topOf(t),{w:1.42,d:et*.98,thick:.4,rot:ln(t.r),piece:t,colorBody:this.theme.bodySide,outlineOpacity:.7});break;default:this.addSlab(t.x*et,t.z*et,this.topOf(t),{piece:t,kind:"platform"})}}addCloudSea(t,e,n,s,r=this.courseGroup){if(!r)return;const a=oo(Math.floor(t*13+e*7+n*3)|0),o=this.cloudTexture.clone();o.needsUpdate=!0,o.wrapS=o.wrapT=Gs,o.repeat.set(4,4);const c=new Ne({map:o,color:this.theme.cloud,transparent:!0,opacity:.26,depthWrite:!1,side:hn,fog:!0}),l=new It(new Ui(n*5.4,n*5.4),c);l.rotation.x=-Math.PI/2,l.position.set(t,s,e),l.renderOrder=-2,r.add(l);const h=Ge(Math.round(n/5),10,22);for(let f=0;f<h;f++){const d=new Ts(new as({map:this.cloudTexture,color:this.theme.cloud,transparent:!0,opacity:.28+a()*.18,depthWrite:!1,fog:!0})),u=a()*Math.PI*2,g=n*.55+a()*n*.95,v=16+a()*26;d.position.set(t+Math.cos(u)*g,s+(a()-.25)*7,e+Math.sin(u)*g),d.scale.set(v,v*.42,1),r.add(d)}}decorateCourse(t,e){const n=this.theme,s=oo(nv(t.id||t.name||"course")),r=(e.minX+e.maxX)/2*et,a=(e.minZ+e.maxZ)/2*et,o=Math.max(e.maxX-e.minX+1,e.maxZ-e.minZ+1)*et;this.addCloudSea(r,a,Math.max(o,28),e.minL*on-24);const c=Ge(Math.round(o/11),5,14);for(let l=0;l<c;l++){const h=s()*Math.PI*2,f=o*.65+10+s()*22,d=r+Math.cos(h)*f,u=a+Math.sin(h)*f,g=-7-s()*10+(s()>.55?10+s()*12:0),v=.7+s()*1.8,p=new Ie,m=new It(this.cylGeo(1.7*v,1.45*v,.38,8),this.makeMat(n.grass,{roughness:.9})),x=new It(this.cylGeo(1.4*v,.08,2.8*v,7),this.makeMat(n.rock,{roughness:1,flat:!0}));if(x.position.y=-1.5*v,m.castShadow=!0,m.receiveShadow=!0,p.add(m,x),p.position.set(d,g,u),this.courseGroup.add(p),s()>.45){const b=new It(new Di(.3*v,0),new Un({color:s()>.5?n.accent:n.accent2,emissive:s()>.5?n.accent:n.accent2,emissiveIntensity:1.2+s(),roughness:.25}));b.position.set(d+(s()-.5)*1.4,g+.9+s(),u+(s()-.5)*1.4),b.scale.y=1.7+s(),b.rotation.y=s()*3,this.courseGroup.add(b)}if(s()>.5)for(let b=0;b<3;b++){const M=new It(new oa(.25+s()*.3,0),this.makeMat(n.grass,{roughness:1,flat:!0}));M.position.set(d+(s()-.5)*2.2,g+.6,u+(s()-.5)*2.2),p.add(M),M.position.set((s()-.5)*2.2,.6,(s()-.5)*2.2)}}for(let l=0;l<26;l++){const h=s()*Math.PI*2,f=o*.3+s()*o*.9,d=new It(new Di(.09+s()*.08,0),new Ne({color:s()>.5?n.glow:n.accent2}));d.position.set(r+Math.cos(h)*f,1+s()*10,a+Math.sin(h)*f),this.courseGroup.add(d)}}buildCourse(t,{editor:e=!1}={}){this.clearWorld(),this.currentMap=t,this.applyTheme(t.theme),this.courseGroup=new Ie,this.scene.add(this.courseGroup),this.ball.group.visible=!1,this.ball.active=!1,this.startPiece=null,this.finishPiece=null,this.finishInfo=null,this.spawn=null,this.checkpoints=[];for(const s of t.pieces)s._checkpoint=null,this.buildPiece(s);const n=Bs(t.pieces);return e?this.decorateCourse(t,n):(this.decorateCourse(t,n),this.startPiece&&(this.ball.group.visible=!1,this.camYaw=this.spawn.yaw)),this.setLightingBounds(n,12),this.builder.active=e,this.cloudGroup.position.set((n.minX+n.maxX)/2*et,0,(n.minZ+n.maxZ)/2*et),e&&(this.setupBuilderGrid(),this.focusBuilderCamera()),n}setupBuilderGrid(){this.builderGroup&&(this.scene.remove(this.builderGroup),this.builderGroup=null);const t=new Ie;this.builderGroup=t,this.scene.add(t);const e=et*(Dn-Mn+1),n=Dn-Mn+1,s=new jf(e,n,16777215,16777215);s.material.transparent=!0,s.material.opacity=.24,s.material.depthWrite=!1,s.position.set((Mn+Dn)/2*et,this.builder.level*on+.03,(Mn+Dn)/2*et),t.add(s),this.builderGrid=s;const r=new Re().setFromPoints([new R(Mn*et-et/2,0,Mn*et-et/2),new R(Dn*et+et/2,0,Mn*et-et/2),new R(Dn*et+et/2,0,Dn*et+et/2),new R(Mn*et-et/2,0,Dn*et+et/2),new R(Mn*et-et/2,0,Mn*et-et/2)]),a=new jh(r,this.lineMat(this.theme.accent,.8));a.position.y=s.position.y,t.add(a),this.builderBorder=a;const o=new Ui(et*.96,et*.96),c=new It(o,new Ne({color:this.theme.accent,transparent:!0,opacity:.35,side:hn,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.y=s.position.y+.01,c.visible=!1,t.add(c),this.builderCursor=c;const l=new Ie,h=new Ne({color:this.theme.accent,transparent:!0,opacity:.38,depthWrite:!1,side:hn}),f=this.boxGeo(et*.96,.4,et*.96,.12),d=new ca(ao(),20),u=new la(ao(),{depth:.4,bevelEnabled:!1,curveSegments:20,steps:1}),g=new It(f,h);l.add(g);const v=new Qo(new Rc(u),new sa({color:this.theme.accent2,transparent:!0,opacity:.9,depthWrite:!1}));v.rotation.x=-Math.PI/2,v.position.y=.22,l.add(v);const p=new It(new Tl(.22,.52,4),new Ne({color:this.theme.accent2,transparent:!0,opacity:.85,depthWrite:!1}));p.rotation.x=Math.PI/2,p.position.set(0,.3,.85),l.add(p),l.visible=!1,t.add(l),this.builderGhost={group:l,mesh:g,arrow:p,curveEdge:v,boxGeometry:f,curveGeometry:d,curveSolid:u}}focusBuilderCamera(){if(!this.builder.map)return;const t=Bs(this.builder.map.pieces),e=(t.minX+t.maxX)/2*et,n=(t.minZ+t.maxZ)/2*et,s=(t.minL+t.maxL)/2*on,r=Math.max(t.maxX-t.minX+3,t.maxZ-t.minZ+3)*et;this.cameraMode="builder",this.camTarget.set(e,s+.8,n),this.camLook.copy(this.camTarget),this.camPitch=.78,this.camYaw=Math.PI*.25,this.camDist=Ge(r*.72+8,14,38),this.camPos.copy(this.camTarget).add(this.cameraOffset(this.camYaw,this.camPitch,this.camDist))}cameraOffset(t,e,n){return new R(Math.sin(t)*Math.cos(e)*n,Math.sin(e)*n,Math.cos(t)*Math.cos(e)*n)}builderSnapshot(){this.builder.history.push(this.builder.map.pieces.map(t=>({...t,_checkpoint:void 0}))),this.builder.history.length>40&&this.builder.history.shift()}builderUndo(){const t=this.builder.history.pop();return t?(this.builder.map.pieces=t,this.rebuildBuilder(),!0):!1}rebuildBuilder(){if(!this.builder.map)return;const t=this.builder.map,e={yaw:this.camYaw,pitch:this.camPitch,dist:this.camDist,target:this.camTarget.clone()};this.buildCourse(t,{editor:!0}),this.builder.map=t,this.camYaw=e.yaw,this.camPitch=e.pitch,this.camDist=e.dist,this.camTarget.copy(e.target),this.applyBuilderCursor(),this.events.onBuilderChange&&this.events.onBuilderChange(t)}setBuilderTool(t){this.builder.tool=t,this.applyBuilderCursor()}setBuilderLevel(t){if(this.builder.level=Ge(t,0,$_-1),this.builderGrid){const e=this.builder.level*on+.03;this.builderGrid.position.y=e,this.builderBorder.position.y=e,this.builderCursor.position.y=e+.01}this.builderGhost&&(this.builderGhost.group.visible=!1)}setBuilderRot(t){this.builder.rot=(t%4+4)%4,this.applyBuilderCursor()}applyBuilderCursor(){if(!this.builderGhost)return;const t=this.builder.tool,e=this.builderGhost,n=t==="ramp",s=t==="beam",r=t==="curve";e.mesh.geometry=r?e.curveGeometry:e.boxGeometry,n?(e.mesh.scale.set(1,.4,1.32),e.mesh.rotation.x=-Math.atan2(on,et)):s?(e.mesh.scale.set(.58,.5,1),e.mesh.rotation.x=0):r?(e.mesh.scale.set(1,1,1),e.mesh.rotation.x=-Math.PI/2):(e.mesh.scale.set(1,.55,1),e.mesh.rotation.x=0),e.mesh.rotation.y=0,e.arrow.rotation.y=0,e.arrow.visible=!["plat","beam","curve","checkpoint","start","finish","erase","bounce"].includes(t),e.curveEdge.visible=r,e.group.rotation.y=ln(this.builder.rot),e.mesh.material.color.set(t==="erase"?"#ff4d5e":this.theme.accent),e.arrow.material.color.set(t==="erase"?"#ff4d5e":this.theme.accent2)}clientToCell(t,e){const n=this.canvas.getBoundingClientRect(),s=new at((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),r=new Qf;r.setFromCamera(s,this.camera);const a=new Qn(new R(0,1,0),-(this.builder.level*on+.03)),o=new R;if(!r.ray.intersectPlane(a,o))return null;const c=Math.round(o.x/et),l=Math.round(o.z/et);return c<Mn||c>Dn||l<Mn||l>Dn?null:{x:c,z:l,point:o}}updateBuilderHover(t,e){if(this.mode!=="builder")return null;const n=this.clientToCell(t,e);if(!n)return this.builderCursor&&(this.builderCursor.visible=!1),this.builderGhost&&(this.builderGhost.group.visible=!1),this.builder.hover=null,null;const s=n.x*et,r=n.z*et,a=this.builder.level*on;if(this.builder.hover=n,this.builderCursor&&(this.builderCursor.visible=!0,this.builderCursor.position.set(s,a+.04,r)),this.builderGhost){const o=this.builderGhost.group;o.visible=!0,o.position.set(s,a+.2,r);const c=this.builder.map?.pieces.some(l=>l.x===n.x&&l.z===n.z&&l.l===this.builder.level);o.children.forEach(l=>{l.material.opacity=this.builder.tool==="erase"?.55:c?.3:.42})}return n}applyBuilderAction(t){if(!this.builder.map||!t)return{ok:!1};const e=this.builder.map.pieces,n=e.findIndex(o=>o.x===t.x&&o.z===t.z&&o.l===this.builder.level),s=this.builder.tool;if(this.builderSnapshot(),s==="erase"||n>=0&&s==="erase")return n>=0&&e.splice(n,1),this.builder.map.pieces=e,this.rebuildBuilder(),{ok:!0,action:"erase"};if(e.length>=360&&n<0)return this.builder.history.pop(),{ok:!1,error:"Course is full — erase a few tiles first."};if(s==="start"||s==="finish")for(let o=e.length-1;o>=0;o--)e[o].t===s&&e.splice(o,1);let r=e.findIndex(o=>o.x===t.x&&o.z===t.z&&o.l===this.builder.level);const a={t:s,x:t.x,z:t.z,l:this.builder.level,r:this.builder.rot};return r>=0?e[r]=a:e.push(a),this.builder.map.pieces=e,this.rebuildBuilder(),{ok:!0,action:r>=0?"replace":"add"}}updateDynamics(t,e=1/60){const n=Math.max(e,.004166666666666667);for(const s of this.dynamics)if(s.type==="spinner"){const r=t*s.speed+s.phase;s.mesh.rotation.y=r,s.collider.quat.setFromAxisAngle(is,r),s.collider.angularVelocity=s.speed}else if(s.type==="mover"){const r=Math.sin(t*s.speed+s.phase)*s.amp,a=s.baseX+s.dir.x*r,o=s.baseZ+s.dir.z*r;s.group.position.x=a,s.group.position.z=o;const c=s.collider.center,l=c.x,h=c.z;c.x=a,c.z=o,s.collider.prev.set(l,c.y,h),s.collider.velocity.set((a-l)/n,0,(o-h)/n)}}tickBoosts(){if(this.raceState!=="running")return;const t=this.animTime;for(const e of this.boosts){const n=this.ball.pos.x-e.x,s=this.ball.pos.z-e.z;if(n*n+s*s<1.25*1.25&&this.ball.pos.y>e.topY-.1&&this.ball.pos.y<e.topY+1.5&&t>e.readyAt){e.readyAt=t+.8,this.ball.vel.addScaledVector(e.dir,6.6);const r=Math.hypot(this.ball.vel.x,this.ball.vel.z);r>14&&(this.ball.vel.x*=14/r,this.ball.vel.z*=14/r),this.fovKick=Math.max(this.fovKick,7),this.camShake=Math.max(this.camShake,.09),this.emit(this.ball.pos,this.theme.glow,8,{speed:4,life:.5,size:.5,gravity:-1}),Qt.boost()}}}tickCheckpoints(){if(this.raceState==="running")for(const t of this.checkpoints){if(t.active)continue;const e=this.ball.pos.x-t.x,n=this.ball.pos.z-t.z;e*e+n*n<1.3*1.3&&this.ball.pos.y>t.topY-.2&&this.ball.pos.y<t.topY+2.2&&this.activateCheckpoint(t)}}activateCheckpoint(t){t.active=!0,t.ringMat.color.set(this.theme.glow),t.ringMat.opacity=1,t.diamondMat.color.set(this.theme.accent),t.diamondMat.emissive.set(this.theme.accent),t.diamondMat.emissiveIntensity=2.2,this.lastCheckpoint=t,this.splits.push(Math.round(this.raceTime)),this.emit(new R(t.x,t.topY+1.2,t.z),this.theme.glow,18,{speed:4.5,life:.8,size:.55,gravity:1}),this.camShake=Math.max(this.camShake,.05),Qt.checkpoint();const e=this.bestSplits?.[this.splits.length-1]??null;this.events.onCheckpoint&&this.events.onCheckpoint({index:t.index,count:this.checkpoints.length,split:Math.round(this.raceTime),bestSplit:e})}checkFinish(){if(this.raceState!=="running"||!this.finishInfo)return;const t=this.finishInfo,e=this.ball.pos.x-t.x,n=this.ball.pos.z-t.z;e*e+n*n<1.45*1.45&&this.ball.pos.y>t.topY-.2&&this.ball.pos.y<t.topY+3&&this.finishRace()}respawn(t=!1){if(this.raceState!=="running"&&!t||this.respawnCooldown>0)return;this.respawnCooldown=.8;const e=this.lastCheckpoint,n=e?{x:e.x,z:e.z,y:e.topY,yaw:e.spawnYaw}:this.spawn;n&&(this.ball.pos.set(n.x,n.y+1.1,n.z),this.ball.vel.set(0,0,0),this.ball.grounded=!1,this.ball.groundCollider=null,this.ball.coyote=0,this.camYaw=n.yaw??this.camYaw,this.camTarget.set(n.x,n.y+.9,n.z),this.camLook.copy(this.camTarget),this.camShake=Math.max(this.camShake,.14),this.emit(new R(n.x,n.y+.7,n.z),this.theme.accent2,16,{speed:3.5,life:.6,size:.45,gravity:0}),Qt.fail(),this.events.onRespawn&&this.events.onRespawn({checkpoint:!!e}))}emit(t,e,n=8,s={}){const r=s.speed??3,a=s.life??.6,o=s.size??.4,c=s.gravity??0;for(let l=0;l<n;l++){const h=this.fx[this.fxIndex];this.fxIndex=(this.fxIndex+1)%this.fx.length;const f=new R(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1);f.lengthSq()<1e-4&&f.set(0,1,0),f.normalize(),h.sprite.position.copy(t),h.sprite.position.x+=(Math.random()-.5)*.25,h.sprite.position.y+=(Math.random()-.5)*.2,h.sprite.position.z+=(Math.random()-.5)*.25,h.vel.copy(f).multiplyScalar(r*(.35+Math.random()*.9)),h.gravity=c,h.life=a*(.7+Math.random()*.6),h.maxLife=h.life,h.size=o*(.6+Math.random()*.8),h.sprite.material.color.set(e),h.sprite.material.opacity=.9,h.sprite.scale.setScalar(h.size),h.sprite.visible=!0}}updateFX(t){for(const e of this.fx){if(e.life<=0)continue;if(e.life-=t,e.life<=0){e.sprite.visible=!1;continue}e.vel.y+=e.gravity*t,e.sprite.position.addScaledVector(e.vel,t);const n=e.life/e.maxLife;e.sprite.material.opacity=n*.85,e.sprite.scale.setScalar(e.size*(.5+n*.8))}}updateTrail(t){this.raceState!=="running"||!this.ball.grounded||this.ball.vel.length()<2.4||(this.trailAcc=(this.trailAcc||0)+t,this.trailAcc>.035&&(this.trailAcc=0,this.emit(new R(this.ball.pos.x,this.ball.pos.y-.33,this.ball.pos.z),this.theme.glow,1,{speed:.25,life:.38,size:.34,gravity:.3})))}previewMap(t){this.mode="preview",this.raceState="idle",this.paused=!1,this.builder.active=!1,this.buildCourse(t,{editor:!1}),this.ball.group.visible=!1;const e=Bs(t.pieces),n=(e.minX+e.maxX)/2*et,s=(e.minZ+e.maxZ)/2*et,r=(e.minL+e.maxL)/2*on,a=Math.max(e.maxX-e.minX+1,e.maxZ-e.minZ+1)*et;this.cameraMode="preview",this.camTarget.set(n,r+1.2,s),this.camLook.copy(this.camTarget),this.camYaw=Math.PI*.22,this.camPitch=.3,this.camDist=Ge(a*.9+12,18,46),this.autoOrbit=.085,this.camera.fov=50,this.camera.updateProjectionMatrix()}startRace(t,e={}){this.mode="race",this.raceState="countdown",this.paused=!1,this.builder.active=!1,this.testMode=!!e.test,this.lastRaceOpts={map:t,opts:e},this.raceTime=0,this.animTime=0,this.totalTime=0,this.countdownT=3.2,this.countdownEnd=performance.now()+3200,this.lastCount=3,this.resuming=!1,this.recording=[],this.recordAcc=0,this.recordingEnabled=e.record!==!1,this.splits=[],this.bestSplits=e.bestSplits||null,this.lastCheckpoint=null,this.respawnCooldown=0,this.fovKick=0,this.camShake=0,this.finishStepped=!1,this.activeRaceMap=t,this.activeRaceOpts=e,this.buildCourse(t,{editor:!1}),this.ball.active=!0,this.ball.group.visible=!0,this.resetBallPosition(),this.camYaw=this.spawn?.yaw??0,this.cameraMode="race",this.camera.fov=58,this.camera.updateProjectionMatrix(),this.ghostMesh.path=e.ghostPath&&e.ghostPath.length>1&&e.ghost!==!1?e.ghostPath:null,this.ghostMesh.cursor=0,this.ghostMesh.group.visible=!1,this.ghostMesh.group.position.set(this.spawn?.x||0,(this.spawn?.y||0)+.5,this.spawn?.z||0);for(const n of this.checkpoints)n.active=!1,n.ringMat.color.set(10134706),n.ringMat.opacity=.7,n.diamondMat.color.set(10134706),n.diamondMat.emissive.set(3359829),n.diamondMat.emissiveIntensity=.5;for(const n of this.boosts)n.readyAt=0;for(const n of this.bounces)n.readyAt=0;this.events.onCountdown&&this.events.onCountdown(3),this.events.onRaceStart&&this.events.onRaceStart(t)}restartRace(){this.activeRaceMap&&this.startRace(this.activeRaceMap,this.activeRaceOpts||{})}pauseRace(){this.raceState==="running"&&(this.raceState="paused",this.events.onPause&&this.events.onPause())}resumeRace(){this.raceState==="paused"&&(this.raceState="countdown",this.resuming=!0,this.countdownT=2.2,this.countdownEnd=performance.now()+2200,this.lastCount=2,this.events.onCountdown&&this.events.onCountdown(2),this.events.onResume&&this.events.onResume())}quitRace(){this.raceState="idle",this.mode="preview",this.ball.group.visible=!1,this.ghostMesh.group.visible=!1,this.events.onQuit&&this.events.onQuit()}finishRace(){if(this.raceState!=="running")return;this.raceState="finished",this.raceTime=this.raceTime,this.recordSample(0,!0),this.ball.vel.set(0,0,0);const t=this.finishInfo;t&&(this.emit(new R(t.x,t.topY+1.4,t.z),this.theme.accent,36,{speed:7,life:1.2,size:.7,gravity:2.5}),this.emit(new R(t.x,t.topY+1,t.z),"#ffffff",22,{speed:5,life:.9,size:.5,gravity:1}),this.camShake=.16),Qt.finish(),this.cameraMode="result",this.resultYaw=this.camYaw,this.camera.fov=52,this.camera.updateProjectionMatrix();const e={time:Math.round(this.raceTime),mapId:this.activeRaceMap?.id,mapName:this.activeRaceMap?.name,test:this.testMode,recording:this.recording.slice(),splits:this.splits.slice(),par:this.activeRaceMap?.par||30};this.events.onFinish&&this.events.onFinish(e)}recordSample(t=.016,e=!1){if(!this.recordingEnabled||(this.recordAcc+=t,!e&&this.recordAcc<.08)||(this.recordAcc=0,this.recording.length>6e3))return;const n=Math.round(this.raceTime/10)/100;this.recording.push([n,Math.round(this.ball.pos.x*100)/100,Math.round(this.ball.pos.y*100)/100,Math.round(this.ball.pos.z*100)/100])}updateGhost(){const t=this.ghostMesh.path;if(!t||!t.length){this.ghostMesh.group.visible=!1;return}const e=this.raceTime/1e3;if(e>t[t.length-1][0]+.6){this.ghostMesh.group.visible=!1;return}let n=this.ghostMesh.cursor;for(;n<t.length-2&&t[n+1][0]<e;)n++;this.ghostMesh.cursor=n;const s=t[Math.max(0,Math.min(n,t.length-1))],r=t[Math.min(n+1,t.length-1)],a=Math.max(1e-4,r[0]-s[0]),o=Ge((e-s[0])/a,0,1),c=s[1]+(r[1]-s[1])*o,l=s[2]+(r[2]-s[2])*o,h=s[3]+(r[3]-s[3])*o;this.ghostMesh.group.visible=!0,this.ghostMesh.group.position.set(c,l,h),this.ghostMesh.wire.rotation.y+=.02}updateRace(t){if(this.raceState==="countdown"){this.countdownT=Math.max(0,(this.countdownEnd-performance.now())/1e3);const e=Ge(Math.ceil(this.countdownT),0,3);e!==this.lastCount&&e>0&&(this.lastCount=e,Qt.countdown(e),this.events.onCountdown&&this.events.onCountdown(e)),this.updateIdleBall(t),this.countdownT<=0&&(this.raceState="running",this.resuming||(this.raceTime=0,this.recording=[],this.recordAcc=0,this.splits=[]),this.resuming=!1,this.ball.jumpBuffer=0,Qt.countdown(0),this.events.onGo&&this.events.onGo());return}if(this.raceState==="finished"){this.updateIdleBall(t);return}this.raceState==="running"&&(this.raceTime+=t*1e3,this.stepBall(t),this.ball.group.position.copy(this.ball.pos),this.ball.group.quaternion.copy(this.ball.quat),this.ball.speed=this.ball.vel.length(),this.tickCheckpoints(),this.tickBoosts(),this.tickBounces(),this.checkFinish(),this.ball.pos.y<-15&&this.respawn(),this.recordSample(t),this.updateGhost(),this.updateTrail(t),Qt.setRolling(this.ball.speed,this.ball.grounded))}updateIdleBall(t){this.ball.group.position.copy(this.ball.pos),this.ball.group.quaternion.copy(this.ball.quat),this.ball.speed=this.ball.vel.length(),this.updateGhost()}tickBounces(){if(this.raceState!=="running")return;const t=this.ball;if(!t.grounded||!t.groundCollider)return;const e=t.groundCollider;if(e.piece?.t!=="bounce")return;const n=this.bounces.find(s=>s.piece===e.piece);!n||this.animTime<n.readyAt||(n.readyAt=this.animTime+.55,t.vel.y=12.8,t.vel.x*=.92,t.vel.z*=.92,t.grounded=!1,t.groundCollider=null,t.coyote=0,this.emit(new R(n.x,n.topY+.6,n.z),this.theme.accent2,16,{speed:5,life:.7,size:.5,gravity:0}),this.camShake=Math.max(this.camShake,.1),this.fovKick=Math.max(this.fovKick,4),Qt.bounce())}getSteerVector(){let t=this.input.x,e=this.input.y;if(this.input.tiltOn){const l=this.input.tiltX,h=this.input.tiltY;Math.hypot(l,h)>.16&&(t=l,e=h)}const n=Math.hypot(t,e);if(n<.08)return{x:0,z:0,mag:0};const s=t/Math.max(1,n),r=e/Math.max(1,n),a=new R(-Math.sin(this.camYaw),0,-Math.cos(this.camYaw)),o=new R(Math.cos(this.camYaw),0,-Math.sin(this.camYaw)),c=new R().addScaledVector(o,s).addScaledVector(a,r);return{x:c.x,z:c.z,mag:Math.min(1,n)}}stepBall(t){const e=this.ball;this.respawnCooldown>0&&(this.respawnCooldown-=t);for(const a of this.dynamics)a.type==="mover"&&e.grounded&&e.groundCollider===a.collider&&(e.pos.x+=a.collider.velocity.x*t,e.pos.z+=a.collider.velocity.z*t);const n=Ge(Math.ceil(t/(1/120)),1,7),s=t/n;for(let a=0;a<n;a++)this.physicsStep(s);const r=Math.hypot(e.vel.x,e.vel.z);if(r>.05){const a=new R(e.vel.z,0,-e.vel.x).normalize(),o=r*s*n/pn,c=new Ze().setFromAxisAngle(a,o);e.quat.premultiply(c)}e.speed=e.vel.length()}physicsStep(t){const e=this.ball,n=this.getSteerVector(),s=e.grounded?K_:J_;n.mag>.02&&(e.vel.x+=n.x*s*n.mag*t,e.vel.z+=n.z*s*n.mag*t);const r=e.grounded?n.mag>.05?.25:2.6:.12;e.vel.x*=Math.exp(-r*t),e.vel.z*=Math.exp(-r*t);const a=Math.hypot(e.vel.x,e.vel.z);a>13.8&&(e.vel.x*=13.8/a,e.vel.z*=13.8/a),e.jumpBuffer=Math.max(0,e.jumpBuffer-t),e.jumpCooldown=Math.max(0,e.jumpCooldown-t),e.jumpBuffer>0&&(e.grounded||e.coyote>0)&&e.jumpCooldown<=0&&(e.vel.y=j_,e.grounded=!1,e.groundCollider=null,e.coyote=0,e.jumpBuffer=0,e.jumpCooldown=.18,this.emit(new R(e.pos.x,e.pos.y-.4,e.pos.z),this.theme.glow,10,{speed:2.5,life:.45,size:.38,gravity:0}),Qt.jump()),e.vel.y-=Q_*t,e.pos.addScaledVector(e.vel,t);const o=e.grounded;let c=!1,l=null,h=-1;for(let f=0;f<2;f++)for(const d of this.colliders){const u=e.pos.x-d.center.x,g=e.pos.y-d.center.y,v=e.pos.z-d.center.z,p=pn+d.radius;if(u*u+g*g+v*v>p*p)continue;const m=this.resolveSphereBox(e,d,t);m&&m.normalY>h&&(h=m.normalY,m.normalY>.5&&(c=!0,l=d))}if(e.grounded=c,e.groundCollider=l,c){if(e.coyote=.12,!o&&e.vel.y<-4){const f=Ge(Math.abs(e.vel.y)/12,.3,1);this.camShake=Math.max(this.camShake,f*.05),this.emit(new R(e.pos.x,e.pos.y-.45,e.pos.z),this.theme.top,5,{speed:1.8,life:.4,size:.3,gravity:1}),Qt.land(f)}}else e.coyote=Math.max(0,e.coyote-t)}resolveSphereBox(t,e,n){const s=this._invQ||(this._invQ=new Ze);s.copy(e.quat).invert();const r=this._local||(this._local=new R);r.copy(t.pos).sub(e.center).applyQuaternion(s);const a=e.half.x,o=e.half.y,c=e.half.z;if(Math.abs(r.x)>a+pn||Math.abs(r.y)>o+pn||Math.abs(r.z)>c+pn)return null;const l=this._closest||(this._closest=new R);l.set(Ge(r.x,-a,a),Ge(r.y,-o,o),Ge(r.z,-c,c));const h=this._diff||(this._diff=new R);h.copy(r).sub(l);let f=h.lengthSq(),d,u;if(f<1e-8){const x=a-Math.abs(r.x),b=o-Math.abs(r.y),M=c-Math.abs(r.z);d=new R,x<=b&&x<=M?(d.set(Math.sign(r.x)||1,0,0),u=x+pn):b<=M?(d.set(0,Math.sign(r.y)||1,0),u=b+pn):(d.set(0,0,Math.sign(r.z)||1),u=M+pn),f=0}else{const x=Math.sqrt(f);d=h.clone().multiplyScalar(1/x),u=pn-x}if(u<-.001)return null;const g=d.clone().applyQuaternion(e.quat).normalize();t.pos.addScaledVector(g,u+5e-4);const v=this._surface||(this._surface=new R);if(v.set(0,0,0),e.kind==="hazard"&&e.angularVelocity){const x=t.pos.x-e.center.x,b=t.pos.z-e.center.z;v.set(e.angularVelocity*b,0,-e.angularVelocity*x)}else e.velocity&&v.copy(e.velocity);const p=this._rel||(this._rel=new R);p.copy(t.vel).sub(v);const m=p.dot(g);if(m<0){const x=e.kind==="hazard"?.28:.08;t.vel.addScaledVector(g,-m*(1+x)),e.kind==="hazard"?(t.vel.addScaledVector(v,.62),this.camShake=Math.max(this.camShake,.07),this.emit(new R(t.pos.x,t.pos.y,t.pos.z),this.theme.accent2,6,{speed:3,life:.4,size:.4,gravity:0}),Qt.collide(1)):Math.abs(m)>3&&Qt.collide(Math.min(1,Math.abs(m)/10))}if(g.y>.55){const x=Math.exp(-1.8*n);t.vel.x*=x,t.vel.z*=x}return{normalY:g.y}}enterBuilder(t){this.mode="builder",this.raceState="idle",this.paused=!1,this.builder.map=t,this.builder.level=0,this.builder.tool="plat",this.builder.rot=0,this.builder.history=[],this.ball.group.visible=!1,this.ghostMesh.group.visible=!1,this.buildCourse(t,{editor:!0}),this.builder.map=t,this.cameraMode="builder",this.camera.fov=50,this.camera.updateProjectionMatrix(),this.applyBuilderCursor()}orbit(t,e){this.mode==="builder"?(this.camYaw-=t*.006,this.camPitch=Ge(this.camPitch+e*.004,.18,1.35)):(this.camYaw-=t*.0052,this.camPitch=Ge(this.camPitch+e*.0038,.1,1.18)),this.userOrbitHold=2.4}zoom(t){const e=this.mode==="builder"?9:this.mode==="race"?4.2:10,n=this.mode==="builder"?48:this.mode==="race"?12:55;this.camDist=Ge(this.camDist*Math.exp(t*.0012),e,n)}followCourse(t){if(this.mode!=="race"||this.raceState!=="running"||this.userOrbitHold>0||this.ball.speed<1.6&&this.raceTime<400)return;let e=this.checkpoints.find(c=>!c.active);if(!e&&this.finishInfo&&(e=this.finishInfo),!e)return;const n=e.x-this.ball.pos.x,s=e.z-this.ball.pos.z;if(n*n+s*s<9)return;let o=Math.atan2(-n,-s)-this.camYaw;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;this.camYaw+=o*(1-Math.exp(-1.15*t))}updateCamera(t){const e=window.innerWidth/window.innerHeight<.82;this.mode==="race"&&this.followCourse(t);const n=this.camShake;this.camShake=Math.max(0,this.camShake-t*.9),this.userOrbitHold=Math.max(0,(this.userOrbitHold||0)-t),this.fovKick=Math.max(0,this.fovKick-t*28);const s=this._shakeVec||(this._shakeVec=new R);s.set((Math.random()-.5)*n,(Math.random()-.5)*n,(Math.random()-.5)*n);let r=58;if(this.mode==="showcase"?r=48:this.mode==="builder"||this.mode==="preview"?r=50:this.raceState==="finished"&&(r=52),this.cameraMode==="race"&&this.mode==="race"&&this.raceState!=="finished"){const c=this._lookAhead||(this._lookAhead=new R);c.copy(this.ball.pos),c.x+=this.ball.vel.x*.055,c.z+=this.ball.vel.z*.055,c.y+=.72;const l=1-Math.exp(-12*t);this.camLook.lerp(c,l),this.camTarget.lerp(c,1-Math.exp(-16*t));const h=this.camDist*(e?1.12:1),f=this.camTarget.clone().add(this.cameraOffset(this.camYaw,this.camPitch,h));f.y<this.camTarget.y-1.6&&(f.y=this.camTarget.y-1.6),this.camPos.lerp(f,1-Math.exp(-9*t)),this.camera.position.copy(this.camPos).add(s),this.camera.lookAt(this.camLook.x,this.camLook.y+.42,this.camLook.z),r+=Ge(this.ball.speed/13,0,1)*2.6}else if(this.cameraMode==="result"||this.mode==="race"&&this.raceState==="finished"){const c=this.finishInfo,l=this._resultTarget||(this._resultTarget=new R);c?l.set(c.x,c.topY+1.35,c.z):l.copy(this.ball.pos).add(new R(0,1,0)),this.camTarget.lerp(l,1-Math.exp(-5*t)),this.userOrbitHold<=0&&(this.camYaw+=t*.22);const h=this.camTarget.clone().add(this.cameraOffset(this.camYaw,this.camPitch,Math.max(this.camDist,8)));this.camPos.lerp(h,1-Math.exp(-4.5*t)),this.camera.position.copy(this.camPos).add(s),this.camera.lookAt(this.camTarget.x,this.camTarget.y+.2,this.camTarget.z)}else if(this.cameraMode==="builder"){this.userOrbitHold<=0&&(this.camYaw+=t*.015);const c=this.camTarget.clone().add(this.cameraOffset(this.camYaw,this.camPitch,this.camDist));this.camPos.lerp(c,1-Math.exp(-12*t)),this.camera.position.copy(this.camPos),this.camera.lookAt(this.camTarget.x,this.camTarget.y+.5,this.camTarget.z)}else if(this.cameraMode==="preview"||this.cameraMode==="showcase"){this.userOrbitHold<=0&&(this.camYaw+=t*(this.autoOrbit||.06));const c=this.camTarget.clone().add(this.cameraOffset(this.camYaw,this.camPitch,this.camDist));this.camPos.lerp(c,1-Math.exp(-4*t)),this.camera.position.copy(this.camPos).add(s),this.camera.lookAt(this.camTarget.x,this.camTarget.y+.35,this.camTarget.z)}const a=r+this.fovKick,o=ev(this.camera.fov,a,6,t);Math.abs(o-this.camera.fov)>.001&&(this.camera.fov=o,this.camera.updateProjectionMatrix())}updateWorldAnimations(t){const e=this.totalTime;this.animTime;for(const n of this.checkpoints)n.mesh.rotation.y=e*1.4+n.index,n.mesh.position.y=n.topY+1.65+Math.sin(e*2+n.index*1.4)*.09,n.active||(n.ring.rotation.z=e*.35);for(const n of this.bounces)n.rings.forEach((s,r)=>{s.position.y=.12+r*.18+Math.sin(e*3.2+r)*.045,s.rotation.z=e*(r%2?.5:-.5)});for(const n of this.boosts)n.pad.material.opacity=.65+Math.sin(e*4)*.2;if(this.finishInfo&&(this.finishInfo.ring.rotation.z=e*.75,this.finishInfo.disc.material.opacity=.08+Math.sin(e*2.2)*.035,this.finishInfo.group.position.y=this.finishInfo.topY+Math.sin(e*1.4)*.02),this.showcaseMarble&&(this.showcaseMarble.rotation.y=e*.28,this.showcaseMarble.rotation.x=Math.sin(e*.4)*.09,this.showcaseMarble.position.y=4.1+Math.sin(e*.9)*.22,this.showcaseRing1.rotation.z=e*.22,this.showcaseRing1.rotation.x=1.1+Math.sin(e*.3)*.12,this.showcaseRing2.rotation.y=e*-.18,this.showcaseRing2.rotation.z=-.5+Math.sin(e*.4)*.1,this.showcaseSparks))for(let n=0;n<this.showcaseSparks.length;n++){const s=this.showcaseSparks[n];s.rotation.y=e*(.4+n*.03),s.position.y+=Math.sin(e*.8+n)*8e-4}this.builderCursor&&(this.builderCursor.material.opacity=.24+Math.sin(e*5)*.09),this.cloudGroup.rotation.y=e*.0015}update(t){const e=Ge(t,0,.05),n=this.raceState==="paused";this.totalTime+=e,n||(this.animTime+=e),n||this.updateDynamics(this.animTime,e),this.mode==="race"&&this.updateRace(e),this.updateWorldAnimations(e),this.updateFX(e),this.updateCamera(e),this.sky.position.copy(this.camera.position),this.stars.position.copy(this.camera.position),this.renderer.render(this.scene,this.camera)}setQuality(t){this.quality=t;const e=t==="low"?1:t==="medium"?1.35:Math.min(window.devicePixelRatio||1,1.75);this.renderer.setPixelRatio(e),this.dir.shadow.map&&(this.dir.shadow.map.dispose(),this.dir.shadow.map=null);const n=t==="low"?1024:2048;this.dir.shadow.mapSize.set(n,n),this.resize()}resize(){const t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;!t||!e||(this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix())}debugGo(){this.raceState==="countdown"&&(this.countdownT=0,this.raceState="running",this.raceTime=0,this.recording=[],this.splits=[],this.events.onGo&&this.events.onGo())}debugTeleport(t,e,n){this.ball.pos.set(t,e,n),this.ball.vel.set(0,0,0),this.ball.group.position.copy(this.ball.pos),this.camTarget.set(t,e,n),this.camLook.copy(this.camTarget)}debugFinish(){this.raceState==="running"&&this.finishRace()}debugState(){return{mode:this.mode,raceState:this.raceState,raceTime:this.raceTime,pos:this.ball.pos.toArray().map(t=>Math.round(t*100)/100),vel:this.ball.vel.toArray().map(t=>Math.round(t*100)/100),grounded:this.ball.grounded,checkpoints:this.checkpoints.length,map:this.activeRaceMap?.id||this.currentMap?.id,builderPieces:this.builder.map?.pieces.length,camera:this.camera.position.toArray().map(t=>Math.round(t*100)/100)}}}const lo="marble-rush-v1",av=40,co=()=>({v:1,settings:{sound:!0,tilt:!1,quality:"auto",ghost:!0},records:{},custom:[],draft:null});function ov(i){try{const t=JSON.parse(i);if(!t||typeof t!="object")return co();const e=co();return{...e,...t,settings:{...e.settings,...t.settings||{}},records:t.records&&typeof t.records=="object"?t.records:{},custom:Array.isArray(t.custom)?t.custom:[]}}catch{return co()}}const $t={data:ov((()=>{try{return localStorage.getItem(lo)}catch{return null}})()),persist(){try{return localStorage.setItem(lo,JSON.stringify(this.data)),!0}catch{for(const i of Object.keys(this.data.records))if(this.data.records[i]?.ghost){delete this.data.records[i].ghost;try{return localStorage.setItem(lo,JSON.stringify(this.data)),!0}catch{}}return!1}},record(i){return this.data.records[i]||null},bestMs(i){return this.data.records[i]?.best??null},saveBest(i,t,e,n=null){const s=this.data.records[i]||{};return!s.best||t<s.best?(this.data.records[i]={...s,best:Math.round(t),ghost:e||null,splits:n,date:Date.now()},this.persist(),!0):(this.data.records[i]={...s,attempts:(s.attempts||0)+1},this.persist(),!1)},bumpAttempt(i){const t=this.data.records[i]||{};this.data.records[i]={...t,attempts:(t.attempts||0)+1},this.persist()},setSetting(i,t){this.data.settings[i]=t,this.persist()},customMaps(){return this.data.custom},getCustom(i){return this.data.custom.find(t=>t.id===i)||null},addCustom(i){const t=this.data.custom.filter(e=>e.id!==i.id);t.unshift(i),this.data.custom=t.slice(0,av),this.persist()},removeCustom(i){this.data.custom=this.data.custom.filter(t=>t.id!==i),delete this.data.records[i],this.persist()},saveDraft(i){this.data.draft=i,this.persist()},clearDraft(){this.data.draft=null,this.persist()},allMaps(){return[...this.data.custom,...Ru()]}};let Ru=()=>[];function lv(i){Ru=i}function Cu(i,t=!0){const e=[];for(const s of i.rivals||[])e.push({name:s.name,time:s.time,color:s.color||"#ffb86b",you:!1});i.creatorBest&&e.push({name:i.creatorName||"Creator",time:i.creatorBest/1e3,color:"#7dd3fc",you:!1,creator:!0});const n=$t.bestMs(i.id);return t&&n&&e.push({name:"You",time:n/1e3,color:"#ff6b35",you:!0}),e.sort((s,r)=>s.time-r.time),e}function Pu(i){if(!$t.bestMs(i.id))return null;const n=Cu(i,!0).findIndex(s=>s.you);return n>=0?n+1:null}function Pn(i,t=!0){if(i==null||Number.isNaN(i))return"--:--.---";const e=Math.max(0,i),n=Math.floor(e/6e4),s=Math.floor(e%6e4/1e3),r=Math.floor(e%1e3),a=`${String(n).padStart(2,"0")}:${String(s).padStart(2,"0")}`;return t?`${a}.${String(r).padStart(3,"0")}`:a}function Bi(i){return i==null?"--":i<60?i.toFixed(2):Pn(i*1e3,!1)}function al(i){if(i==null||Number.isNaN(i))return"";const t=i<=0?"−":"+",e=Math.abs(i);return`${t}${(e/1e3).toFixed(2)}s`}function Lu(i,t){if(!i||!t)return"bronze";const e=i/1e3;return e<=t*.82?"gold":e<=t?"silver":e<=t*1.45?"bronze":"finisher"}function cv(i){let t="";for(let e=0;e<i.length;e+=32768)t+=String.fromCharCode.apply(null,i.subarray(e,e+32768));return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/g,"")}function hv(i){const t=i.replace(/-/g,"+").replace(/_/g,"/"),e=t+"=".repeat((4-t.length%4)%4),n=atob(e),s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}function uv(i,t=null){const e={v:1,n:i.name,a:i.author||"Anon",g:i.tagline||"",t:i.theme||"sunrise",p:i.par||30,d:i.difficulty||2,b:t||null,pieces:i.pieces.map(s=>({t:s.t,x:s.x,z:s.z,l:s.l,r:s.r||0}))},n=new TextEncoder().encode(JSON.stringify(e));return`MR1.${cv(n)}`}const dv=new Set(["plat","ramp","curve","wall","spinner","mover","boost","bounce","beam","checkpoint","start","finish"]);function fv(i){const t=String(i||"").trim(),e=t.startsWith("MR1.")?t.slice(4):t;if(!e||e.length>2e5)throw new Error("That code looks incomplete.");let n;try{n=JSON.parse(new TextDecoder().decode(hv(e)))}catch{throw new Error("That challenge code is not valid.")}if(!n||n.v!==1||!Array.isArray(n.pieces))throw new Error("Unrecognized challenge code.");if(n.pieces.length<2||n.pieces.length>1200)throw new Error("That course has an unusual size.");const s=[];for(const r of n.pieces){if(!r||!dv.has(r.t))continue;const a=Math.round(Number(r.x)),o=Math.round(Number(r.z)),c=Math.max(0,Math.min(5,Math.round(Number(r.l)||0)));!Number.isFinite(a)||!Number.isFinite(o)||Math.abs(a)>40||Math.abs(o)>40||s.push({t:r.t,x:a,z:o,l:c,r:Math.abs(Math.round(Number(r.r)||0))%4})}if(!s.some(r=>r.t==="start")||!s.some(r=>r.t==="finish"))throw new Error("That course is missing a start or finish.");return{id:`u-${Date.now().toString(36)}-${Math.floor(Math.random()*999)}`,name:Ds(n.n||"Shared Course",34),author:Ds(n.a||"Anon",22),tagline:Ds(n.g||"A shared marble course.",80),theme:["sunrise","neon","temple"].includes(n.t)?n.t:"sunrise",par:Math.max(8,Math.min(300,Number(n.p)||30)),difficulty:Math.max(1,Math.min(3,Number(n.d)||2)),pieces:s,creatorBest:Number.isFinite(n.b)&&n.b>2e3&&n.b<36e5?Number(n.b):null,creatorName:Ds(n.a||"Creator",22),createdAt:Date.now(),shared:!0}}function Ds(i,t=30){return String(i||"").replace(/[<>&"]/g,"").replace(/\s+/g," ").trim().slice(0,t)}function pv(){return`u-${Date.now().toString(36)}-${Math.floor(Math.random()*9999)}`}lv(()=>rn);const V=i=>document.getElementById(i),ua=(i,t,e)=>Math.max(t,Math.min(e,i)),Ks=window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;document.body.classList.toggle("touch",Ks);const nn={plat:'<svg viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="11" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M3 11h18" stroke="currentColor" stroke-width="1.5" opacity=".5"/></svg>',ramp:'<svg viewBox="0 0 24 24"><path d="M3 19 21 6v13H3Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="m8 19 8-5" stroke="currentColor" stroke-width="1.5" opacity=".5"/></svg>',curve:'<svg viewBox="0 0 24 24"><path d="M4 20V4h5v11h11v5H4Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 10a5 5 0 0 1 5 5" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',beam:'<svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 6v12" stroke="currentColor" stroke-width="1.2" opacity=".4"/></svg>',spinner:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.6" opacity=".55"/><rect x="3" y="10.4" width="18" height="3.2" rx="1.6" fill="currentColor"/><circle cx="12" cy="12" r="2" fill="#16112c"/></svg>',mover:'<svg viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M2 12h3m14 0h3M5 9l-3 3 3 3m14-6 3 3-3 3" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',boost:'<svg viewBox="0 0 24 24"><path d="m4 15 5-5 4 4 7-7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 7h5v5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',bounce:'<svg viewBox="0 0 24 24"><path d="M4 18h16M12 16V4m0 0L8 8m4-4 4 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 20h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',checkpoint:'<svg viewBox="0 0 24 24"><path d="M12 3 18 12l-6 9-6-9 6-9Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>',start:'<svg viewBox="0 0 24 24"><path d="M6 21V4m0 0h11l-2 4 2 4H6" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',finish:'<svg viewBox="0 0 24 24"><path d="M5 21V4m14 0v17M5 6h14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M8 21V11a4 4 0 0 1 8 0v10" fill="none" stroke="currentColor" stroke-width="1.6" opacity=".65"/></svg>',erase:'<svg viewBox="0 0 24 24"><path d="m14 4 6 6-9 9H5l-2-2 11-13Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="m9 9 6 6M12 19h8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',edit:'<svg viewBox="0 0 24 24"><path d="m4 20 4-1 10-10-3-3L5 16l-1 4ZM13 6l3 3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',share:'<svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="2.5" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="6" cy="12" r="2.5" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="18" cy="19" r="2.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="m8.2 10.7 7.6-4.4m-7.6 7 7.6 4.4" stroke="currentColor" stroke-width="1.7"/></svg>',trash:'<svg viewBox="0 0 24 24"><path d="M4 7h16M9 7V4h6v3m-9 0 1 13h10l1-13M10 11v6m4-6v6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>'},Iu=[{id:"plat",label:"Tile",icon:nn.plat,hint:"Tap a grid cell to add a platform."},{id:"ramp",label:"Ramp",icon:nn.ramp,hint:"Ramps climb one level toward the arrow. Rotate first."},{id:"curve",label:"Curve",icon:nn.curve,hint:"Quarter-turn track. Rotate to choose its corner."},{id:"beam",label:"Beam",icon:nn.beam,hint:"Narrow beams make brave lines. Rotate to aim."},{id:"spinner",label:"Spinner",icon:nn.spinner,hint:"Spinners knock marbles off course. Place them on tile cells."},{id:"mover",label:"Mover",icon:nn.mover,hint:"Movers glide back and forth. Ride them across gaps."},{id:"boost",label:"Boost",icon:nn.boost,hint:"Boost pads fire the marble in their arrow direction."},{id:"bounce",label:"Bounce",icon:nn.bounce,hint:"Bounce pads launch you skyward. Land them on the route."},{id:"checkpoint",label:"Check",icon:nn.checkpoint,hint:"Checkpoints become your respawn. Place them often."},{id:"start",label:"Start",icon:nn.start,hint:"Every course needs one start pad and one finish gate."},{id:"finish",label:"Finish",icon:nn.finish,hint:"Every course needs one finish gate. Reach it to stop the clock."},{id:"erase",label:"Erase",icon:nn.erase,hint:"Tap a piece to remove it. Undo is up top."}];let ot=null,an="official",Sn=rn[0].id,sn=null,_s=!1,ki=!1,Dl=!1,xe=null,da="sunrise",ol=null,mh=null,ll=null,gh=null,fa=null,mn={active:!1,id:null,x:0,y:0},cn=new Set,Nn=new Map,tn=null,ss=null,_i=null,Ni=null,cl=!1;const Kn=V("scene");function Du(){return["screen-home","screen-maps","screen-pause","screen-result","screen-builder"].map(V)}function ir(){for(const i of Du())i.classList.add("is-hidden")}function sr(i){for(const t of Du())t.classList.toggle("is-hidden",t.id!==i)}function rr(i){V("hud").classList.toggle("is-hidden",!i)}function Ue(i,t="",e=null,n=3400){const s=V("toast");V("toast-text").textContent=i;const r=V("toast-action");t&&e?(r.textContent=t,r.classList.remove("is-hidden"),r.onclick=()=>{hl(),e()}):(r.classList.add("is-hidden"),r.onclick=null),s.classList.remove("is-hidden"),s.style.animation="none",s.offsetWidth,s.style.animation="",clearTimeout(ll),ll=setTimeout(hl,n)}function hl(){V("toast").classList.add("is-hidden"),clearTimeout(ll)}function ar(i){V("modal-layer").classList.remove("is-hidden");for(const t of document.querySelectorAll("#modal-layer .modal"))t.classList.add("is-hidden");V(i).classList.remove("is-hidden")}function Fn(){V("modal-layer").classList.add("is-hidden");for(const i of document.querySelectorAll("#modal-layer .modal"))i.classList.add("is-hidden");_i&&(_i(!1),_i=null)}function Nl(i,t,e="YES, DO IT"){return V("confirm-title").textContent=i,V("confirm-copy").textContent=t,V("btn-confirm-yes").textContent=e,ar("modal-confirm"),new Promise(n=>{_i=n})}function mv(i){const t=String(i||"?").trim().split(/\s+/);return((t[0]?.[0]||"?")+(t[1]?.[0]||"")).toUpperCase()}function gv(i){return i<=1?"EASY":i===2?"FLOW":"EXPERT"}function _v(i){const t=n=>i.filter(s=>s.t===n).length,e=t("spinner")*3+t("mover")*2.5+t("bounce")*1.5+t("beam")*1.5+t("ramp")*1.1+t("boost")*1.2+i.length*.06;return e>15?3:e>7?2:1}function vv(i){return i?.pieces?.some(t=>t.t==="start")&&i?.pieces?.some(t=>t.t==="finish")}function xv(i,t){i.width=560,i.height=240;const s=i.getContext("2d"),r=Zs[t.theme]||Zs.sunrise,a=s.createLinearGradient(0,0,560,240);a.addColorStop(0,r.skyTop),a.addColorStop(.58,r.skyMid),a.addColorStop(1,r.skyBottom),s.fillStyle=a,s.fillRect(0,0,560,240),s.globalAlpha=.18,s.strokeStyle=r.top,s.lineWidth=1;for(let b=0;b<560;b+=28)s.beginPath(),s.moveTo(b,0),s.lineTo(b,240),s.stroke(),s.beginPath(),s.moveTo(0,b/2),s.lineTo(560,b/2),s.stroke();s.globalAlpha=1;const o=Bs(t.pieces),c=26,l=Math.max(1,o.maxX-o.minX+1),h=Math.max(1,o.maxZ-o.minZ+1),f=Math.min((560-c*2)/l,(240-c*2)/h),d=(560-l*f)/2-o.minX*f+f/2,u=(240-h*f)/2-o.minZ*f+f/2,g=b=>d+b*f,v=b=>u+b*f,p=Math.max(5,f*.86);t.pieces.length>1&&(s.save(),s.setLineDash([4,8]),s.strokeStyle="rgba(255,255,255,.28)",s.lineWidth=2,s.beginPath(),t.pieces.forEach((b,M)=>{const T=g(b.x),E=v(b.z);M===0?s.moveTo(T,E):s.lineTo(T,E)}),s.stroke(),s.restore());const m=[...t.pieces].sort((b,M)=>b.l-M.l);for(const b of m){const M=g(b.x),T=v(b.z),E=p;if(b.l*1.5,s.fillStyle="rgba(0,0,0,.26)",s.beginPath(),s.roundRect(M-E/2+3,T-E/2+4,E,E,4),s.fill(),b.t==="ramp")s.fillStyle=r.bodySide,s.beginPath(),s.moveTo(M-E/2,T+E/2),s.lineTo(M+E/2,T+E/2),s.lineTo(M+E/2,T-E/2),s.closePath(),s.fill(),s.strokeStyle=r.accent,s.lineWidth=2,s.stroke();else if(b.t==="beam"){s.fillStyle=r.top;const _=E*.34,w=b.r%2===0;s.beginPath(),s.roundRect(M-(w?_:E)/2,T-(w?E:_)/2,w?_:E,w?E:_,3),s.fill()}else b.t==="spinner"?(s.fillStyle=r.body,s.beginPath(),s.roundRect(M-E/2,T-E/2,E,E,4),s.fill(),s.strokeStyle=r.accent2,s.lineWidth=3.5,s.beginPath(),s.moveTo(M-E*.55,T+E*.2),s.lineTo(M+E*.55,T-E*.2),s.stroke(),s.fillStyle=r.accent2,s.beginPath(),s.arc(M,T,2.4,0,Math.PI*2),s.fill()):b.t==="mover"?(s.fillStyle=r.top,s.beginPath(),s.roundRect(M-E/2,T-E/2,E,E,4),s.fill(),s.strokeStyle=r.accent,s.lineWidth=1.5,s.setLineDash([3,3]),b.r===1||b.r,s.beginPath(),s.moveTo(M-E*.7,T),s.lineTo(M+E*.7,T),s.stroke(),s.setLineDash([])):b.t==="boost"?(s.fillStyle=r.body,s.beginPath(),s.roundRect(M-E/2,T-E/2,E,E,4),s.fill(),s.strokeStyle=r.glow,s.lineWidth=2.5,s.beginPath(),s.moveTo(M-E*.2,T+E*.18),s.lineTo(M+E*.1,T-E*.18),s.lineTo(M+E*.35,T+E*.02),s.stroke()):b.t==="bounce"?(s.fillStyle=r.body,s.beginPath(),s.roundRect(M-E/2,T-E/2,E,E,4),s.fill(),s.fillStyle=r.accent2,s.beginPath(),s.arc(M,T,E*.25,0,Math.PI*2),s.fill()):b.t==="start"?(s.fillStyle=r.body,s.beginPath(),s.roundRect(M-E/2,T-E/2,E,E,4),s.fill(),s.fillStyle="#5ce68d",s.beginPath(),s.arc(M,T-2,E*.34,0,Math.PI*2),s.fill(),s.fillStyle="#0b2415",s.beginPath(),s.arc(M,T-2,E*.14,0,Math.PI*2),s.fill()):b.t==="finish"?(s.fillStyle=r.body,s.beginPath(),s.roundRect(M-E/2,T-E/2,E,E,4),s.fill(),s.strokeStyle="#ffcf5a",s.lineWidth=3,s.beginPath(),s.arc(M,T-1,E*.33,0,Math.PI*2),s.stroke()):b.t==="checkpoint"?(s.fillStyle=r.body,s.beginPath(),s.roundRect(M-E/2,T-E/2,E,E,4),s.fill(),s.fillStyle=r.accent,s.beginPath(),s.moveTo(M,T-E*.34),s.lineTo(M+E*.22,T),s.lineTo(M,T+E*.34),s.lineTo(M-E*.22,T),s.closePath(),s.fill()):(s.fillStyle=r.top,s.beginPath(),s.roundRect(M-E/2,T-E/2,E,E,4),s.fill(),s.fillStyle=`rgba(255,255,255,${.04+b.l*.03})`,s.beginPath(),s.roundRect(M-E/2+1.5,T-E/2+1.5,E-3,E*.32,3),s.fill());b.l>0&&(s.strokeStyle="rgba(255,255,255,.24)",s.lineWidth=1,s.beginPath(),s.roundRect(M-E/2,T-E/2,E,E,4),s.stroke())}const x=s.createRadialGradient(560/2,240/2,240*.1,560/2,240/2,560*.65);x.addColorStop(0,"rgba(0,0,0,0)"),x.addColorStop(1,"rgba(5,3,15,.55)"),s.fillStyle=x,s.fillRect(0,0,560,240)}function Mv(i){const t=$t.bestMs(i.id);return t?Bi(t/1e3):i.creatorBest?Bi(i.creatorBest/1e3):"—"}function _h(i,{custom:t=!1}={}){const e=document.createElement("div");e.className=`map-card${t?" has-actions":""}`,e.dataset.id=i.id,e.tabIndex=0,e.setAttribute("role","button");const n=$t.bestMs(i.id)?Pu(i):null,s=$t.bestMs(i.id),r=document.createElement("div");r.className="map-thumb";const a=document.createElement("canvas");r.appendChild(a);const o=document.createElement("div");o.className="diff-badge",o.innerHTML=`${gv(i.difficulty)} `;for(let v=0;v<3;v++){const p=document.createElement("i");v<i.difficulty&&(p.className="on"),o.appendChild(p)}r.appendChild(o);const c=document.createElement("div");if(c.className="par-badge",c.textContent=`PAR ${Bi(i.par)}`,r.appendChild(c),t){const v=document.createElement("div");v.className="map-actions";const p=(m,x,b)=>{const M=document.createElement("button");M.className="mini-btn",M.dataset.act=m,M.setAttribute("aria-label",b),M.title=b,M.innerHTML=x,v.appendChild(M)};p("edit",nn.edit,"Edit map"),p("share",nn.share,"Share map"),p("delete",nn.trash,"Delete map"),e.appendChild(v)}const l=document.createElement("div");l.className="map-info";const h=document.createElement("div");h.className="map-info-main";const f=document.createElement("h3");f.textContent=i.name;const d=document.createElement("p");d.textContent=i.creatorBest&&!s?`Shared by ${i.creatorName||i.author} · target ${Bi(i.creatorBest/1e3)}`:t?`By ${i.author||"You"}${n?` · rank #${n}`:""}`:i.tagline,h.append(f,d);const u=document.createElement("div");u.className="map-best",u.innerHTML=`<small>${s?"YOUR BEST":i.creatorBest?"TARGET":"BEST"}</small><b class="${s?"":"muted"}">${Mv(i)}</b>`,l.append(h,u),e.append(r,l),requestAnimationFrame(()=>xv(a,i));const g=()=>{Sn=i.id,ms(i)};return e.addEventListener("click",v=>{const p=v.target.closest("[data-act]");if(p){v.stopPropagation(),Uv(p.dataset.act,i);return}g()}),e.addEventListener("keydown",v=>{(v.key==="Enter"||v.key===" ")&&(v.preventDefault(),g())}),Ks||e.addEventListener("pointerenter",()=>{clearTimeout(mh),mh=setTimeout(()=>{ot.mode!=="preview"||an==="paused"||Sn!==i.id&&(Sn=i.id,ot.previewMap(i))},170)}),e}function vh(){const i=document.createElement("button");return i.className="create-card",i.innerHTML='<span class="create-plus">+</span><span><b>Build a course</b><small>Start from a template · share it with a code</small></span>',i.addEventListener("click",()=>{Qt.uiOpen(),Ul(Au(),{origin:"maps"})}),i}function Sa(){const i=V("grid-official"),t=V("grid-community");i.innerHTML="",t.innerHTML="";for(const n of rn)i.appendChild(_h(n));i.appendChild(vh()),t.appendChild(vh());const e=$t.customMaps();for(const n of e)t.appendChild(_h(n,{custom:!0}));if(!e.length){const n=document.createElement("div");n.className="empty-state",n.textContent="No courses yet. Build one, or paste a friend’s challenge code with the import button.",t.appendChild(n)}V("official-count").textContent=rn.length,V("community-count").textContent=e.length,V("grid-official").classList.toggle("is-hidden",an!=="official"),V("grid-community").classList.toggle("is-hidden",an!=="community");for(const n of document.querySelectorAll(".tab"))n.classList.toggle("is-active",n.dataset.tab===an)}function Nu(i){return rn.findIndex(t=>t.id===i.id)}function Js(){ir(),sr("screen-home"),rr(!1),document.body.classList.remove("paused","result-open"),ot.showShowcase(),sn=null,_s=!1,ki=!1,Qt.uiBack()}function ai(i=an){an=i,ir(),sr("screen-maps"),rr(!1),document.body.classList.remove("paused","result-open"),Sa();const t=an==="official"?rn:$t.customMaps(),e=t.find(n=>n.id===Sn)||t[0]||rn[0];Sn=e.id,ot.previewMap(e),Qt.uiOpen()}function Uu(i){ir(),rr(!0),document.body.classList.remove("paused","result-open"),V("hud-map").textContent=i.name.toUpperCase(),V("timer-par").textContent=`PAR ${Pn((i.par||30)*1e3)}`,V("timer").textContent="00:00.000",V("hud-cp").textContent="CP 0/0",V("hud-cp").classList.remove("active"),V("ghost-badge").classList.add("is-hidden"),V("split-toast").classList.remove("show")}function Sv(){ot.raceState==="paused"&&(V("pause-time").textContent=Pn(ot.raceTime),V("pause-map").textContent=sn?.name||"Time trial",Gu(),sr("screen-pause"),document.body.classList.add("paused"))}function ya(){V("screen-pause").classList.add("is-hidden"),document.body.classList.remove("paused")}function yv(){ir(),sr("screen-result"),rr(!0),document.body.classList.add("result-open")}function Fu(){ir(),sr("screen-builder"),rr(!1),document.body.classList.remove("paused","result-open")}function ms(i,t={}){if(!i)return;const e=!!t.test,n=!!t.fromBuilder;sn=i,_s=e,ki=n,Dl=n,cn.clear(),ba(),hl(),V("split-toast").classList.remove("show"),V("hint-banner").classList.remove("show"),Uu(i),kv();const s=e?null:$t.record(i.id),r=!e&&$t.data.settings.ghost&&s?.ghost&&s.ghost.length>1?s.ghost:null,a=r?s.best:null;r&&(V("ghost-badge").textContent=`GHOST ${Bi(s.best/1e3)}`,V("ghost-badge").classList.remove("is-hidden")),V("hud-cp").textContent="CP 0/0",Qt.unlock(),Qt.uiOpen(),ot.startRace(i,{ghostPath:r,bestSplits:s?.splits||null,test:e,record:!e,ghost:$t.data.settings.ghost}),V("hud-cp").textContent=`CP 0/${ot.checkpoints.length}`,a&&(V("ghost-badge").textContent=`GHOST ${Bi(a/1e3)}`),clearTimeout(gh),V("hint-banner").textContent=vv(i)?"Follow the course · reach the finish gate":"Reach the glowing gate",V("hint-banner").classList.add("show"),gh=setTimeout(()=>V("hint-banner").classList.remove("show"),4200)}function ul(){sn&&(ya(),ms(sn,{test:_s,fromBuilder:Dl}))}function bv(){const i=ki;ot.quitRace(),ya(),or(),i?Qs():ai(an)}function Ev(i){const t=sn;if(!t)return;cn.clear(),ba();const e=$t.bestMs(t.id);let n=!1;i.test||(n=$t.saveBest(t.id,i.time,i.recording,i.splits)),ol={map:t,result:i,prevBest:e,isBest:n},or(),V("split-toast").classList.remove("show"),V("hint-banner").classList.remove("show"),yv(),Tv();const s=i.test?"finisher":Lu(i.time,t.par);!i.test&&(n||s==="gold")&&Av()}function wv(){if(ki){Qs();return}if(!sn)return Kv();if(_s)return Qs();const i=Nu(sn);if(i>=0&&i<rn.length-1){Sn=rn[i+1].id,ms(rn[i+1]);return}const t=$t.customMaps(),e=t.findIndex(n=>n.id===sn.id);if(e>=0&&e<t.length-1){ms(t[e+1]);return}ai(an)}function Tv(){if(!ol)return;const{map:i,result:t,prevBest:e,isBest:n}=ol,s=!!t.test,r=s?"finisher":Lu(t.time,i.par),a=V("medal");a.className=`medal ${r}`,V("medal-label").textContent=s?"STUDIO":r==="finisher"?"CLEAR":r.toUpperCase(),V("result-eyebrow").textContent=s?`STUDIO TEST · ${i.name.toUpperCase()}`:`${i.name.toUpperCase()} · RUN COMPLETE`;const o=s?null:Pu(i);let c="Course cleared.";s?c="Studio test complete.":n&&e?c="New personal best.":n?c="First run logged.":o===1?c="Course record.":o&&o<=3?c="Podium finish.":r==="gold"&&(c="Untouchable."),V("result-title").textContent=c,V("result-time").textContent=Pn(t.time);const l=V("result-deltas");l.innerHTML="";const h=(g,v="")=>{const p=document.createElement("span");p.className=`pill ${v}`,p.textContent=g,l.appendChild(p)};s?(h("Times are not saved in the studio"),h(`PAR ${Pn(i.par*1e3,!1)}`)):(e&&n?h(`NEW BEST ${al(t.time-e)}`,"good"):e?h(`${al(t.time-e)} off your best`,"bad"):h("FIRST TIME LOGGED","good"),h(r==="gold"?"GOLD PACE":r==="silver"?"SILVER PACE":"PAR "+Pn(i.par*1e3,!1),r==="gold"?"good":""),o&&h(`RANK #${o}`,o<=3?"good":""));const f=V("result-board");if(f.innerHTML="",!s){const g=Cu(i),v=g.findIndex(x=>x.you),p=g.slice(0,5);v>4&&p.push(g[v]);const m=document.createElement("div");if(m.className="board-title",m.innerHTML="<span>CLUB RANKING</span><span>LOCAL</span>",f.appendChild(m),p.forEach(x=>{const b=g.indexOf(x)+1,M=document.createElement("div");M.className=`board-row${x.you?" you":""}`;const T=document.createElement("span");T.className="rank",T.textContent=String(b).padStart(2,"0");const E=document.createElement("span");E.className="name";const _=document.createElement("span");_.className="avatar",_.style.background=x.color||"#ffb86b",_.textContent=mv(x.name),E.append(_,document.createTextNode(x.name));const w=document.createElement("span");w.className="time",w.textContent=Bi(x.time),M.append(T,E,w),f.appendChild(M)}),g.length===0){const x=document.createElement("div");x.className="empty-state",x.textContent="No times on this board yet.",f.appendChild(x)}}V("btn-result-retry").textContent=s?"TEST AGAIN":"RACE AGAIN";const d=V("btn-result-next");if(s)d.textContent="BACK TO STUDIO",d.classList.remove("is-hidden");else{const g=Nu(i),v=$t.customMaps(),p=v.findIndex(x=>x.id===i.id),m=g>=0&&g<rn.length-1||p>=0&&p<v.length-1;d.classList.toggle("is-hidden",!m),d.textContent="NEXT COURSE"}V("btn-result-exit").textContent=s?"QUIT TO MAPS":"BACK TO MAPS",V("result-share").classList.toggle("is-hidden",s||!i.id.startsWith("u-"))}function Av(){const i=V("confetti");i.innerHTML="";const t=["#ff6a3d","#ffc93c","#4ce6d8","#8d6bff","#ff4f9a","#64e6a4"];for(let e=0;e<52;e++){const n=document.createElement("i");n.style.setProperty("--x",`${Math.random()*100}%`),n.style.setProperty("--w",`${5+Math.random()*7}px`),n.style.setProperty("--h",`${8+Math.random()*10}px`),n.style.setProperty("--c",t[e%t.length]),n.style.setProperty("--drift",`${(Math.random()-.5)*220}px`),n.style.setProperty("--rot",`${Math.random()*900-450}deg`),n.style.setProperty("--dur",`${2.2+Math.random()*1.8}s`),n.style.setProperty("--delay",`${Math.random()*.5}s`),i.appendChild(n)}setTimeout(()=>{i.innerHTML=""},4600)}function Rv(i){return JSON.parse(JSON.stringify(i))}function Ul(i,t={}){const e=Rv(i),n=t.editingId||(e.id&&e.id.startsWith("u-")?e.id:null);xe={map:e,editingId:n,origin:t.origin||"maps",dirty:!1},sn=null,_s=!1,ki=!1,ot.enterBuilder(e),Fu(),ri(),Qt.uiOpen()}function ri(){if(!xe)return;const i=xe.map;V("builder-name").textContent=i.name||"Untitled Course",V("level-value").textContent=ot.builder.level;const t=i.pieces.filter(a=>a.t==="checkpoint").length,e=i.pieces.some(a=>a.t==="start"),n=i.pieces.some(a=>a.t==="finish"),s=V("builder-meta");if(s.innerHTML="",!e||!n){const a=document.createElement("span");a.className="builder-warn",a.textContent="Add a start and finish to test or save  ·  ",s.appendChild(a)}s.append(document.createTextNode(`${i.pieces.length} pieces · ${t} checkpoint${t===1?"":"s"} · PAR ≈ ${Pn(Il(i.pieces)*1e3,!1)}`));for(const a of document.querySelectorAll(".piece-btn"))a.classList.toggle("is-active",a.dataset.piece===ot.builder.tool);const r=Iu.find(a=>a.id===ot.builder.tool);V("builder-hint").textContent=(r?.hint||"Tap the grid to place.")+" · drag to orbit",V("btn-builder-save").classList.toggle("attention",xe.dirty)}function Cv(i){ot.setBuilderTool(i),ri()}function Ou(i=!0){if(!xe)return!1;const t=xe.map.pieces;return!t.some(e=>e.t==="start")||!t.some(e=>e.t==="finish")?(i&&Ue("Add a start pad and a finish gate first."),!1):t.length<3?(i&&Ue("Add a little more course first."),!1):!0}function Pv(){Ou()&&ms(xe.map,{test:!0,fromBuilder:!0})}function Qs(){if(!xe){ai("community");return}or(),ya(),ot.enterBuilder(xe.map),Fu(),ri(),Qt.uiBack()}function Bu(){const i=()=>{if(!xe)return Js();xe.origin==="home"?Js():ai("community")};xe?.dirty?Nl("Leave the studio?","Your unsaved course changes will be lost.","LEAVE STUDIO").then(t=>{t&&i()}):i()}function zu(){const i=V("theme-picker");i.innerHTML="";for(const t of Object.values(Zs)){const e=document.createElement("button");e.className=`theme-chip${da===t.id?" is-active":""}`,e.dataset.theme=t.id;const n=document.createElement("i");n.style.background=`linear-gradient(135deg, ${t.skyTop}, ${t.skyMid} 55%, ${t.accent})`;const s=document.createElement("span");s.textContent=t.name,e.append(n,s),e.addEventListener("click",()=>{da=t.id,zu()}),i.appendChild(e)}}function xh(){if(!Ou())return;const i=xe.map;da=i.theme||"sunrise",V("save-name").value=i.name==="Untitled Course"?"":i.name,V("save-name").placeholder="e.g. Candy Canyon",zu();const t=i.pieces.filter(e=>e.t==="checkpoint").length;V("save-summary").textContent=`${i.pieces.length} pieces · ${t} checkpoint${t===1?"":"s"} · estimated par ${Pn(Il(i.pieces)*1e3,!1)}. You can share it with a code after saving.`,ar("modal-save")}function Lv(){if(!xe)return;const i=xe.map,t=Ds(V("save-name").value,34)||"Untitled Course";i.name=t,i.theme=da,i.par=Il(i.pieces),i.difficulty=_v(i.pieces),i.author="You",i.tagline=i.tagline&&i.tagline!=="A course made by you."?i.tagline:"A custom course by you.",i.createdAt=i.createdAt||Date.now(),xe.editingId?i.id=xe.editingId:(i.id=pv(),xe.editingId=i.id),$t.addCustom(i),xe.dirty=!1,Fn(),ri(),V("builder-name").textContent=i.name,Ue("Saved to My Maps.","SHARE",()=>Fl(i)),Qt.uiOpen()}function Fl(i){const t=$t.bestMs(i.id);V("share-best").textContent=t?`Your target: ${Pn(t)}. Can they beat it?`:"No time set yet — race it once to give challengers a target.",V("share-code").value=uv(i,t),ar("modal-share")}async function Iv(){const i=V("share-code");try{await navigator.clipboard.writeText(i.value),Ue("Challenge code copied.")}catch{i.focus(),i.select();try{document.execCommand("copy"),Ue("Challenge code copied.")}catch{Ue("Select the code and copy it manually.")}}}function Dv(){V("import-code").value="",ar("modal-import")}function Nv(){try{const i=fv(V("import-code").value);$t.addCustom(i),Fn(),an="community",Sn=i.id,ai("community"),Ue(`Imported “${i.name}”.`),Qt.uiOpen()}catch(i){Ue(i.message||"Could not read that challenge code.")}}function Uv(i,t){if(i==="edit"){Ul(t,{editingId:t.id,origin:"maps"});return}if(i==="share"){Fl(t);return}i==="delete"&&Nl("Delete this course?",`“${t.name}” and its best time will be removed from this device.`,"DELETE").then(e=>{if(!e)return;$t.removeCustom(t.id),Sn===t.id&&(Sn=$t.customMaps()[0]?.id||rn[0].id),Sa();const n=$t.customMaps(),s=n.find(r=>r.id===Sn)||n[0]||rn[0];ot.previewMap(s),Ue("Course deleted.")})}function Fv(i,t){const e=ot.updateBuilderHover(i,t);if(!e)return;const n=ot.applyBuilderAction(e);if(!n.ok){n.error&&Ue(n.error);return}xe.dirty=!0,ri(),Qt.click()}function ku(){const i=$t.data.settings.quality;return i==="auto"?Ks?"medium":"high":i}function Ov(){const i=!!$t.data.settings.sound,t=V("btn-sound");t.classList.toggle("is-off",!i),t.setAttribute("aria-pressed",String(i)),t.title=i?"Mute sound":"Turn sound on"}function ei(){const i=$t.data.settings;for(const[t,e]of[["set-sound","sound"],["set-ghost","ghost"],["set-tilt","tilt"]]){const n=V(t);n.classList.toggle("is-on",!!i[e]),n.setAttribute("aria-checked",String(!!i[e]))}for(const t of document.querySelectorAll("#set-quality button"))t.classList.toggle("is-active",t.dataset.q===i.quality);Ov(),Gu()}function Gu(){const i=$t.data.settings,t=[["btn-pause-sound","sound"],["btn-pause-tilt","tilt"],["btn-pause-ghost","ghost"]];for(const[e,n]of t){const s=V(e);s&&(s.classList.toggle("is-on",!!i[n]),s.setAttribute("aria-pressed",String(!!i[n])))}}function dl(i,t=!1){$t.setSetting("sound",!!i),Qt.setEnabled(!!i),i&&(Qt.unlock(),t&&Qt.click()),ei()}function Hu(i){$t.setSetting("ghost",!!i),ot.ghostEnabled=!!i,i||(ot.ghostMesh.group.visible=!1),ei(),Ue(i?"Ghost replay on.":"Ghost replay off.")}async function Ol(i,t=!1){if(i){if(typeof DeviceOrientationEvent>"u"){t||Ue("This device has no tilt sensor — use the joystick."),$t.setSetting("tilt",!1),ei();return}if(typeof DeviceOrientationEvent.requestPermission=="function")try{if(await DeviceOrientationEvent.requestPermission()!=="granted"){t||Ue("Motion access was denied — use the joystick."),$t.setSetting("tilt",!1),ei();return}}catch{t||Ue("Motion access is unavailable here."),$t.setSetting("tilt",!1),ei();return}Ni=null,cl=!1,window.addEventListener("deviceorientation",Mh),ot.input.tiltOn=!0,$t.setSetting("tilt",!0),t||Ue("Tilt steering on — hold still to calibrate."),setTimeout(()=>{!cl&&ot.input.tiltOn&&Ue("No motion data yet — the joystick always works too.")},2200)}else window.removeEventListener("deviceorientation",Mh),ot.input.tiltOn=!1,ot.input.tiltX=0,ot.input.tiltY=0,Ni=null,$t.setSetting("tilt",!1),t||Ue("Tilt steering off.");ei()}function Mh(i){if(i.gamma==null&&i.beta==null)return;cl=!0;const t=i.gamma||0,e=i.beta||0;Ni||(Ni={gamma:t,beta:e});let n=(t-Ni.gamma)/21,s=(e-Ni.beta)/21;const r=screen.orientation&&screen.orientation.angle||0;let a=n,o=-s;r===90?(a=-s,o=-n):r===270||r===-90?(a=s,o=n):Math.abs(r)===180&&(a=-n,o=s),ot.input.tiltX=ua(a,-1,1),ot.input.tiltY=ua(o,-1,1)}function Bv(i){$t.setSetting("quality",i),ot.setQuality(ku()),ei(),Ue(`Graphics set to ${i==="auto"?"auto":i}.`)}function Sh(){ei(),ar("modal-settings"),Qt.uiOpen()}function zv(){document.querySelector(".modal-backdrop").addEventListener("click",Fn),V("btn-save-cancel").addEventListener("click",Fn),V("btn-share-close").addEventListener("click",Fn),V("btn-import-cancel").addEventListener("click",Fn),V("btn-settings-close").addEventListener("click",Fn),V("btn-confirm-no").addEventListener("click",()=>{const i=_i;_i=null,Fn(),i?.(!1)}),V("btn-confirm-yes").addEventListener("click",()=>{const i=_i;_i=null,Fn(),i?.(!0)}),V("btn-save-confirm").addEventListener("click",Lv),V("btn-copy-code").addEventListener("click",Iv),V("btn-import-confirm").addEventListener("click",Nv),V("set-sound").addEventListener("click",()=>dl(!$t.data.settings.sound,!0)),V("set-ghost").addEventListener("click",()=>Hu(!$t.data.settings.ghost)),V("set-tilt").addEventListener("click",()=>Ol(!$t.data.settings.tilt));for(const i of document.querySelectorAll("#set-quality button"))i.addEventListener("click",()=>Bv(i.dataset.q));V("btn-reset-data").addEventListener("click",()=>{Nl("Erase everything?","All custom courses, best times and ghost replays will be deleted from this browser.","ERASE ALL").then(i=>{if(i){try{localStorage.removeItem("marble-rush-v1")}catch{}location.reload()}})})}function kv(){const i=V("countdown");i.classList.remove("is-hidden"),i.classList.remove("go")}function or(){clearTimeout(fa),V("countdown").classList.add("is-hidden")}function yh(i){const t=V("countdown"),e=V("countdown-num");t.classList.remove("is-hidden"),i===0?(t.classList.add("go"),e.textContent="GO!"):(t.classList.remove("go"),e.textContent=String(i)),e.style.animation="none",e.offsetWidth,e.style.animation="",clearTimeout(fa),i===0&&(fa=setTimeout(or,720))}function bh(i){const t=V("flash");t.className="flash",t.offsetWidth,t.classList.add(i)}function Gv(i,t){const e=V("split-toast");e.innerHTML=i,e.classList.add("show"),e.style.borderColor=t?"rgba(100,230,164,.4)":"rgba(255,120,120,.35)",clearTimeout(e._timer),e._timer=setTimeout(()=>e.classList.remove("show"),2100)}function ba(){mn.active=!1,mn.id=null,mn.x=0,mn.y=0;const i=V("joy-knob");i&&(i.style.transform="translate(0px, 0px)")}function Hv(){const i=ot.checkpoints.length,t=ot.checkpoints.filter(n=>n.active).length,e=V("hud-cp");e.textContent=`CP ${t}/${i}`,e.classList.toggle("active",t>0)}function Vv(){if(V("hud").classList.contains("is-hidden"))return;const i=Pn(ot.raceTime);i!==pa&&(pa=i,V("timer").textContent=i)}let pa="";function Wv(){if(!ot)return;let i=0,t=0;(cn.has("KeyA")||cn.has("ArrowLeft"))&&(i-=1),(cn.has("KeyD")||cn.has("ArrowRight"))&&(i+=1),(cn.has("KeyW")||cn.has("ArrowUp"))&&(t+=1),(cn.has("KeyS")||cn.has("ArrowDown"))&&(t-=1),ot.input.x=ua(i+mn.x,-1,1),ot.input.y=ua(t+mn.y,-1,1)}function Vu(){!ot||ot.mode!=="race"||ot.raceState!=="running"||(ot.ball.jumpBuffer=.16,Qt.unlock())}function Xv(){const i=V("joystick"),t=V("joy-knob");let e={x:0,y:0};const n=(r,a)=>{let o=r-e.x,c=a-e.y;const l=Math.hypot(o,c),h=30;l>h&&(o=o/l*h,c=c/l*h),t.style.transform=`translate(${o}px, ${c}px)`,mn.x=o/h,mn.y=-c/h};i.addEventListener("pointerdown",r=>{if(ot.mode!=="race"||ot.raceState==="paused")return;r.preventDefault(),r.stopPropagation(),Qt.unlock();const a=i.getBoundingClientRect();e={x:a.left+a.width/2,y:a.top+a.height/2},mn.active=!0,mn.id=r.pointerId;try{i.setPointerCapture(r.pointerId)}catch{}n(r.clientX,r.clientY)}),i.addEventListener("pointermove",r=>{!mn.active||mn.id!==r.pointerId||(r.preventDefault(),n(r.clientX,r.clientY))});const s=r=>{mn.id===r.pointerId&&ba()};i.addEventListener("pointerup",s),i.addEventListener("pointercancel",s),i.addEventListener("lostpointercapture",s)}function qv(){Kn.addEventListener("pointerdown",t=>{if(Qt.unlock(),!(!V("screen-pause").classList.contains("is-hidden")||!V("screen-result").classList.contains("is-hidden")||!V("modal-layer").classList.contains("is-hidden"))){Nn.set(t.pointerId,{x:t.clientX,y:t.clientY});try{Kn.setPointerCapture(t.pointerId)}catch{}if(Nn.size===2){const n=[...Nn.values()];ss={dist:Math.hypot(n[0].x-n[1].x,n[0].y-n[1].y)},tn=null;return}Nn.size>2||(tn={id:t.pointerId,lastX:t.clientX,lastY:t.clientY,moved:0,start:performance.now()},ot.mode==="builder"&&t.pointerType==="mouse"&&ot.updateBuilderHover(t.clientX,t.clientY))}}),Kn.addEventListener("pointermove",t=>{if(Nn.has(t.pointerId)&&Nn.set(t.pointerId,{x:t.clientX,y:t.clientY}),Nn.size>=2&&ss){const e=[...Nn.values()];if(e.length>=2){const n=Math.hypot(e[0].x-e[1].x,e[0].y-e[1].y);ot.zoom((n-ss.dist)*.9),ss.dist=n}return}if(tn&&tn.id===t.pointerId){const e=t.clientX-tn.lastX,n=t.clientY-tn.lastY;tn.lastX=t.clientX,tn.lastY=t.clientY,tn.moved+=Math.abs(e)+Math.abs(n),ot.orbit(e,n),tn.moved<9&&ot.mode==="builder"&&ot.updateBuilderHover(t.clientX,t.clientY)}else t.pointerType==="mouse"&&ot.mode==="builder"&&V("modal-layer").classList.contains("is-hidden")&&ot.updateBuilderHover(t.clientX,t.clientY)});const i=t=>{if(Nn.delete(t.pointerId),ss&&Nn.size<2&&(ss=null),tn&&tn.id===t.pointerId){const{moved:e,start:n}=tn;tn=null,ot.mode==="builder"&&e<10&&performance.now()-n<700&&Fv(t.clientX,t.clientY)}};Kn.addEventListener("pointerup",i),Kn.addEventListener("pointercancel",i),Kn.addEventListener("pointerleave",()=>{ot.mode==="builder"&&!tn&&(ot.builderCursor&&(ot.builderCursor.visible=!1),ot.builderGhost&&(ot.builderGhost.group.visible=!1))}),Kn.addEventListener("contextmenu",t=>t.preventDefault()),Kn.addEventListener("wheel",t=>{t.preventDefault(),ot.zoom(t.deltaY)},{passive:!1})}function Yv(){window.addEventListener("keydown",i=>{if(!(i.target&&(i.target.tagName==="INPUT"||i.target.tagName==="TEXTAREA"))){if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(i.code)&&i.preventDefault(),i.code==="Escape"){$v();return}if(i.code==="Space"){Vu(),ot.mode==="race"&&cn.add("Space");return}if(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.code)){cn.add(i.code),ot.mode==="race"&&i.code==="KeyR"&&ul();return}i.code==="KeyR"&&ot.mode==="race"&&ul()}}),window.addEventListener("keyup",i=>{cn.delete(i.code)}),window.addEventListener("blur",()=>{cn.clear(),ba()})}function $v(){if(!V("modal-layer").classList.contains("is-hidden")){Fn();return}if(!V("screen-pause").classList.contains("is-hidden")){Wu();return}if(!V("screen-result").classList.contains("is-hidden")){ki?Qs():ai(an);return}if(ot.mode==="builder"){Bu();return}if(ot.mode==="race"&&ot.raceState==="running"){ot.pauseRace();return}if(!V("screen-maps").classList.contains("is-hidden")){Js();return}}function Wu(){ya(),Uu(sn),ot.resumeRace()}function Zv(){const i=V("palette");i.innerHTML="";for(const t of Iu){const e=document.createElement("button");e.className=`piece-btn${t.id==="erase"?" erase":""}`,e.dataset.piece=t.id,e.title=t.hint,e.innerHTML=`${t.icon}<span>${t.label}</span>`,e.addEventListener("click",()=>{xe&&(Cv(t.id),Qt.click())}),i.appendChild(e)}}function Kv(i=an){ai(i)}function Jv(){ot.events.onCountdown=i=>{ot.mode==="race"&&yh(i)},ot.events.onGo=()=>{yh(0),pa="",V("timer").textContent=Pn(ot.raceTime),pa=V("timer").textContent,fa=setTimeout(or,720)},ot.events.onCheckpoint=i=>{Hv(),bh("good");let t=`CHECKPOINT ${i.index+1}/${i.count}`,e=!0;if(i.bestSplit!=null){const n=i.split-i.bestSplit;t+=` · <span class="${n<=0?"good":"bad"}">${al(n)}</span>`,e=n<=0}Gv(t,e)},ot.events.onRespawn=i=>{bh("hit"),Ue(i.checkpoint?"Back to the last checkpoint.":"Back to the start — keep rolling.","",null,1600)},ot.events.onFinish=Ev,ot.events.onPause=()=>Sv(),ot.events.onBuilderChange=()=>{xe&&ri()}}function Qv(){V("btn-play").addEventListener("click",()=>{Qt.unlock(),Qt.click(),ai("official")}),V("btn-build").addEventListener("click",()=>{Qt.unlock(),Ul(Au(),{origin:"home"})}),V("btn-sound").addEventListener("click",()=>dl(!$t.data.settings.sound,!0)),V("btn-settings").addEventListener("click",Sh),V("btn-open-settings").addEventListener("click",Sh),V("btn-maps-back").addEventListener("click",Js),V("btn-import").addEventListener("click",Dv);for(const t of document.querySelectorAll(".tab"))t.addEventListener("click",()=>{an=t.dataset.tab,Sa();const e=an==="official"?rn:$t.customMaps(),n=e.find(s=>s.id===Sn)||e[0]||rn[0];Sn=n.id,ot.previewMap(n),Qt.click()});V("btn-pause").addEventListener("click",()=>{ot.raceState==="running"&&ot.pauseRace()}),V("btn-resume").addEventListener("click",Wu),V("btn-restart").addEventListener("click",ul),V("btn-quit").addEventListener("click",bv),V("btn-pause-sound").addEventListener("click",()=>dl(!$t.data.settings.sound,!0)),V("btn-pause-tilt").addEventListener("click",()=>Ol(!$t.data.settings.tilt)),V("btn-pause-ghost").addEventListener("click",()=>Hu(!$t.data.settings.ghost)),V("btn-result-retry").addEventListener("click",()=>{sn&&ms(sn,{test:_s,fromBuilder:Dl})}),V("btn-result-next").addEventListener("click",wv),V("btn-result-exit").addEventListener("click",()=>{ki?Qs():ai(an)}),V("btn-result-share").addEventListener("click",()=>{sn?.id?.startsWith("u-")&&Fl(sn)}),V("btn-builder-back").addEventListener("click",Bu),V("btn-builder-save").addEventListener("click",xh),V("btn-builder-rename").addEventListener("click",xh),V("btn-builder-test").addEventListener("click",Pv),V("btn-builder-undo").addEventListener("click",()=>{xe&&ot.builderUndo()&&(xe.dirty=!0,ri(),Qt.uiBack())}),V("btn-rotate").addEventListener("click",()=>{xe&&(ot.setBuilderRot(ot.builder.rot+1),Qt.click())}),V("btn-level-up").addEventListener("click",()=>{xe&&(ot.setBuilderLevel(ot.builder.level+1),ri(),Qt.click())}),V("btn-level-down").addEventListener("click",()=>{xe&&(ot.setBuilderLevel(ot.builder.level-1),ri(),Qt.click())}),V("btn-jump").addEventListener("pointerdown",t=>{t.preventDefault(),Vu(),V("btn-jump").classList.add("pressed")});const i=()=>V("btn-jump").classList.remove("pressed");V("btn-jump").addEventListener("pointerup",i),V("btn-jump").addEventListener("pointercancel",i),V("btn-jump").addEventListener("pointerleave",i),document.addEventListener("visibilitychange",()=>{document.hidden&&ot.raceState==="running"&&ot.pauseRace()}),window.addEventListener("orientationchange",()=>{Ni=null}),document.addEventListener("pointerdown",()=>Qt.unlock(),{once:!0})}let ho=0;function Xu(i){const t=ho?(i-ho)/1e3:.016;ho=i,Wv(),ot.update(t),Vv(),requestAnimationFrame(Xu)}async function jv(){try{await document.fonts.ready}catch{}ot=new rv(Kn),ot.ghostEnabled=!0,window.MarbleRush={game:ot,store:$t},window.__marble=ot,Jv(),Qv(),zv(),qv(),Yv(),Xv(),Zv(),Sa();const i=$t.data.settings;Qt.setEnabled(!!i.sound),ot.setQuality(ku()),ot.ghostEnabled=!!i.ghost,ei(),i.tilt&&Ks&&typeof DeviceOrientationEvent<"u"&&!DeviceOrientationEvent.requestPermission?Ol(!0,!0):i.tilt&&!Ks&&$t.setSetting("tilt",!1),Js(),requestAnimationFrame(Xu),setTimeout(()=>document.body.classList.add("ready"),500)}jv();
