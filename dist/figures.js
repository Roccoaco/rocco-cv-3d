(()=>{var Yc=0,ll=1,Zc=2;var js=1,Jc=2,ji=3,si=0,Ve=1,tn=2,Mn=0,ts=1,es=2,cl=3,hl=4,$c=5;var yi=100,Kc=101,Qc=102,jc=103,th=104,eh=200,nh=201,ih=202,sh=203,ul=204,dl=205,rh=206,ah=207,oh=208,lh=209,ch=210,hh=211,uh=212,dh=213,fh=214,Gr=0,Hr=1,qr=2,Vi=3,Wr=4,Xr=5,Yr=6,Zr=7,fl=0,ph=1,mh=2,hn=0,pl=1,ml=2,gl=3,_l=4,xl=5,vl=6,yl=7;var Ml=300,ri=301,Mi=302,wa=303,Ea=304,tr=306,Jr=1e3,gn=1001,$r=1002,Re=1003,gh=1004;var er=1005;var Ie=1006,Aa=1007;var ai=1008;var We=1009,Sl=1010,bl=1011,ns=1012,Ta=1013,un=1014,en=1015,dn=1016,Ca=1017,Ra=1018,is=1020,wl=35902,El=35899,Al=1021,Tl=1022,nn=1023,_n=1026,oi=1027,Ia=1028,Pa=1029,li=1030,La=1031;var Fa=1033,nr=33776,ir=33777,sr=33778,rr=33779,Da=35840,Na=35841,Ua=35842,Ba=35843,Oa=36196,za=37492,ka=37496,Va=37488,Ga=37489,ar=37490,Ha=37491,qa=37808,Wa=37809,Xa=37810,Ya=37811,Za=37812,Ja=37813,$a=37814,Ka=37815,Qa=37816,ja=37817,to=37818,eo=37819,no=37820,io=37821,so=36492,ro=36494,ao=36495,oo=36283,lo=36284,or=36285,co=36286;var ys=2300,Kr=2301,kr=2302,$o=2303,Ko=2400,Qo=2401,jo=2402;var _h=3200;var ho=0,xh=1,On="",Se="srgb",Ms="srgb-linear",Ss="linear",oe="srgb";var Vr=7680;var vh=519,yh=512,Mh=513,Sh=514,uo=515,bh=516,wh=517,fo=518,Eh=519,Ah=35044;var Cl="300 es",cn=2e3,Gi=2001;function bu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function wu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Th(){let i=bs("canvas");return i.style.display="block",i}var mc={},Hi=null;function Rl(...i){let t="THREE."+i.shift();Hi?Hi("log",t,...i):console.log(t,...i)}function Ch(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Vt(...i){i=Ch(i);let t="THREE."+i.shift();if(Hi)Hi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ht(...i){i=Ch(i);let t="THREE."+i.shift();if(Hi)Hi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function mi(...i){let t=i.join(" ");t in mc||(mc[t]=!0,Vt(...i))}function Rh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Ih={[Gr]:Hr,[qr]:Yr,[Wr]:Zr,[Vi]:Xr,[Hr]:Gr,[Yr]:qr,[Zr]:Wr,[Xr]:Vi},xn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var wo=Math.PI/180,Qr=180/Math.PI;function ss(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function te(i,t,e){return Math.max(t,Math.min(e,i))}function Eu(i,t){return(i%t+t)%t}function Eo(i,t,e){return(1-e)*i+e*t}function hs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Nl=class Nl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Nl.prototype.isVector2=!0;var vt=Nl,Oe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(d!==y||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*y;m<0&&(u=-u,f=-f,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){let E=Math.acos(m),T=Math.sin(E);p=Math.sin(p*E)/T,o=Math.sin(o*E)/T,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+y*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+y*o;let E=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=E,c*=E,h*=E,d*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ul=class Ul{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ao.copy(this).projectOnVector(t),this.sub(Ao)}reflect(t){return this.sub(Ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ul.prototype.isVector3=!0;var F=Ul,Ao=new F,gc=new Oe,Bl=class Bl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],E=s[1],T=s[4],v=s[7],A=s[2],w=s[5],P=s[8];return r[0]=a*y+o*E+l*A,r[3]=a*m+o*T+l*w,r[6]=a*p+o*v+l*P,r[1]=c*y+h*E+d*A,r[4]=c*m+h*T+d*w,r[7]=c*p+h*v+d*P,r[2]=u*y+f*E+g*A,r[5]=u*m+f*T+g*w,r[8]=u*p+f*v+g*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return mi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(To.makeScale(t,e)),this}rotate(t){return mi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(To.makeRotation(-t)),this}translate(t,e){return mi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(To.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Bl.prototype.isMatrix3=!0;var Xt=Bl,To=new Xt,_c=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xc=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Au(){let i={enabled:!0,workingColorSpace:Ms,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===oe&&(s.r=Pn(s.r),s.g=Pn(s.g),s.b=Pn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===oe&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===On?Ss:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return mi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return mi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ms]:{primaries:t,whitePoint:n,transfer:Ss,toXYZ:_c,fromXYZ:xc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Se},outputColorSpaceConfig:{drawingBufferColorSpace:Se}},[Se]:{primaries:t,whitePoint:n,transfer:oe,toXYZ:_c,fromXYZ:xc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Se}}}),i}var ee=Au();function Pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ai,jr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ai===void 0&&(Ai=bs("canvas")),Ai.width=t.width,Ai.height=t.height;let s=Ai.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ai}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=bs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Pn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pn(e[n]/255)*255):e[n]=Pn(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Tu=0,qi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=ss(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Co(s[a].image)):r.push(Co(s[a]))}else r=Co(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Co(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?jr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}var Cu=0,Ro=new F,ze=class i extends xn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=gn,s=gn,r=Ie,a=ai,o=nn,l=We,c=i.DEFAULT_ANISOTROPY,h=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=ss(),this.name="",this.source=new qi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ro).x}get height(){return this.source.getSize(Ro).y}get depth(){return this.source.getSize(Ro).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ml)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jr:t.x=t.x-Math.floor(t.x);break;case gn:t.x=t.x<0?0:1;break;case $r:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jr:t.y=t.y-Math.floor(t.y);break;case gn:t.y=t.y<0?0:1;break;case $r:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=Ml;ze.DEFAULT_ANISOTROPY=1;var Ol=class Ol{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,v=(f+1)/2,A=(p+1)/2,w=(h+u)/4,P=(d+y)/4,_=(g+m)/4;return T>v&&T>A?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=w/n,r=P/n):v>A?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=_/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=P/r,s=_/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-y)/E,this.z=(u-h)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ol.prototype.isVector4=!0;var ge=Ol,ta=class extends xn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ie,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new ze(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ie,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new qi(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},He=class extends ta{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ws=class extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ea=class extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ba=class ba{constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,y,m)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ba().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ti.setFromMatrixColumn(t,0).length(),r=1/Ti.setFromMatrixColumn(t,1).length(),a=1/Ti.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,y=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u+y*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u-y*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,y=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-y*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ru,t,Iu)}lookAt(t,e,n){let s=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Gn.crossVectors(n,Xe),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Gn.crossVectors(n,Xe)),Gn.normalize(),xr.crossVectors(Xe,Gn),s[0]=Gn.x,s[4]=xr.x,s[8]=Xe.x,s[1]=Gn.y,s[5]=xr.y,s[9]=Xe.y,s[2]=Gn.z,s[6]=xr.z,s[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],E=n[3],T=n[7],v=n[11],A=n[15],w=s[0],P=s[4],_=s[8],b=s[12],I=s[1],N=s[5],O=s[9],H=s[13],C=s[2],D=s[6],V=s[10],q=s[14],ct=s[3],tt=s[7],ot=s[11],lt=s[15];return r[0]=a*w+o*I+l*C+c*ct,r[4]=a*P+o*N+l*D+c*tt,r[8]=a*_+o*O+l*V+c*ot,r[12]=a*b+o*H+l*q+c*lt,r[1]=h*w+d*I+u*C+f*ct,r[5]=h*P+d*N+u*D+f*tt,r[9]=h*_+d*O+u*V+f*ot,r[13]=h*b+d*H+u*q+f*lt,r[2]=g*w+y*I+m*C+p*ct,r[6]=g*P+y*N+m*D+p*tt,r[10]=g*_+y*O+m*V+p*ot,r[14]=g*b+y*H+m*q+p*lt,r[3]=E*w+T*I+v*C+A*ct,r[7]=E*P+T*N+v*D+A*tt,r[11]=E*_+T*O+v*V+A*ot,r[15]=E*b+T*H+v*q+A*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],y=t[7],m=t[11],p=t[15],E=l*f-c*u,T=o*f-c*d,v=o*u-l*d,A=a*f-c*h,w=a*u-l*h,P=a*d-o*h;return e*(y*E-m*T+p*v)-n*(g*E-m*A+p*w)+s*(g*T-y*A+p*P)-r*(g*v-y*w+m*P)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],y=t[13],m=t[14],p=t[15],E=e*o-n*a,T=e*l-s*a,v=e*c-r*a,A=n*l-s*o,w=n*c-r*o,P=s*c-r*l,_=h*y-d*g,b=h*m-u*g,I=h*p-f*g,N=d*m-u*y,O=d*p-f*y,H=u*p-f*m,C=E*H-T*O+v*N+A*I-w*b+P*_;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/C;return t[0]=(o*H-l*O+c*N)*D,t[1]=(s*O-n*H-r*N)*D,t[2]=(y*P-m*w+p*A)*D,t[3]=(u*w-d*P-f*A)*D,t[4]=(l*I-a*H-c*b)*D,t[5]=(e*H-s*I+r*b)*D,t[6]=(m*v-g*P-p*T)*D,t[7]=(h*P-u*v+f*T)*D,t[8]=(a*O-o*I+c*_)*D,t[9]=(n*I-e*O-r*_)*D,t[10]=(g*w-y*v+p*E)*D,t[11]=(d*v-h*w-f*E)*D,t[12]=(o*b-a*N-l*_)*D,t[13]=(e*N-n*b+s*_)*D,t[14]=(y*T-g*A-m*E)*D,t[15]=(h*A-d*T+u*E)*D,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,y=a*h,m=a*d,p=o*d,E=l*c,T=l*h,v=l*d,A=n.x,w=n.y,P=n.z;return s[0]=(1-(y+p))*A,s[1]=(f+v)*A,s[2]=(g-T)*A,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(u+p))*w,s[6]=(m+E)*w,s[7]=0,s[8]=(g+T)*P,s[9]=(m-E)*P,s[10]=(1-(u+y))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ti.set(s[0],s[1],s[2]).length(),o=Ti.set(s[4],s[5],s[6]).length(),l=Ti.set(s[8],s[9],s[10]).length();r<0&&(a=-a),an.copy(this);let c=1/a,h=1/o,d=1/l;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=d,an.elements[9]*=d,an.elements[10]*=d,e.setFromRotationMatrix(an),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=cn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===cn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Gi)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=cn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===cn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Gi)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ba.prototype.isMatrix4=!0;var ce=ba,Ti=new F,an=new ce,Ru=new F(0,0,0),Iu=new F(1,1,1),Gn=new F,xr=new F,Xe=new F,vc=new ce,yc=new Oe,Ln=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yc.setFromEuler(this),this.setFromQuaternion(yc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ln.DEFAULT_ORDER="XYZ";var Wi=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Pu=0,Mc=new F,Ci=new Oe,An=new ce,vr=new F,us=new F,Lu=new F,Fu=new Oe,Sc=new F(1,0,0),bc=new F(0,1,0),wc=new F(0,0,1),Ec={type:"added"},Du={type:"removed"},Ri={type:"childadded",child:null},Io={type:"childremoved",child:null},be=class i extends xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new Ln,n=new Oe,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Xt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.premultiply(Ci),this}rotateX(t){return this.rotateOnAxis(Sc,t)}rotateY(t){return this.rotateOnAxis(bc,t)}rotateZ(t){return this.rotateOnAxis(wc,t)}translateOnAxis(t,e){return Mc.copy(t).applyQuaternion(this.quaternion),this.position.add(Mc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sc,t)}translateY(t){return this.translateOnAxis(bc,t)}translateZ(t){return this.translateOnAxis(wc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vr.copy(t):vr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(us,vr,this.up):An.lookAt(vr,us,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(An),this.quaternion.premultiply(Ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ec),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Du),Io.child=t,this.dispatchEvent(Io),Io.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ec),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,t,Lu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,Fu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};be.DEFAULT_UP=new F(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var me=class extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nu={type:"move"},Xi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},yr={h:0,s:0,l:0};function Po(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=Eu(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Po(a,r,t+1/3),this.g=Po(a,r,t),this.b=Po(a,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=Se){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){let n=Ph[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pn(t.r),this.g=Pn(t.g),this.b=Pn(t.b),this}copyLinearToSRGB(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return ee.workingToColorSpace(De.copy(this),t),Math.round(te(De.r*255,0,255))*65536+Math.round(te(De.g*255,0,255))*256+Math.round(te(De.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(De.copy(this),e);let n=De.r,s=De.g,r=De.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Se){ee.workingToColorSpace(De.copy(this),t);let e=De.r,n=De.g,s=De.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(yr);let n=Eo(Hn.h,yr.h,e),s=Eo(Hn.s,yr.s,e),r=Eo(Hn.l,yr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},De=new qt;qt.NAMES=Ph;var Fn=class extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},on=new F,Tn=new F,Lo=new F,Cn=new F,Ii=new F,Pi=new F,Ac=new F,Fo=new F,Do=new F,No=new F,Uo=new ge,Bo=new ge,Oo=new ge,Yn=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),on.subVectors(t,e),s.cross(on);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){on.subVectors(s,e),Tn.subVectors(n,e),Lo.subVectors(t,e);let a=on.dot(on),o=on.dot(Tn),l=on.dot(Lo),c=Tn.dot(Tn),h=Tn.dot(Lo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Uo.setScalar(0),Bo.setScalar(0),Oo.setScalar(0),Uo.fromBufferAttribute(t,e),Bo.fromBufferAttribute(t,n),Oo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Uo,r.x),a.addScaledVector(Bo,r.y),a.addScaledVector(Oo,r.z),a}static isFrontFacing(t,e,n,s){return on.subVectors(n,e),Tn.subVectors(t,e),on.cross(Tn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),on.cross(Tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ii.subVectors(s,n),Pi.subVectors(r,n),Fo.subVectors(t,n);let l=Ii.dot(Fo),c=Pi.dot(Fo);if(l<=0&&c<=0)return e.copy(n);Do.subVectors(t,s);let h=Ii.dot(Do),d=Pi.dot(Do);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ii,a);No.subVectors(t,r);let f=Ii.dot(No),g=Pi.dot(No);if(g>=0&&f<=g)return e.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Pi,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Ac.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Ac,o);let p=1/(m+y+u);return a=y*p,o=u*p,e.copy(n).addScaledVector(Ii,a).addScaledVector(Pi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vn=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ln):ln.fromBufferAttribute(r,a),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mr.copy(n.boundingBox)),Mr.applyMatrix4(t.matrixWorld),this.union(Mr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ds),Sr.subVectors(this.max,ds),Li.subVectors(t.a,ds),Fi.subVectors(t.b,ds),Di.subVectors(t.c,ds),qn.subVectors(Fi,Li),Wn.subVectors(Di,Fi),ui.subVectors(Li,Di);let e=[0,-qn.z,qn.y,0,-Wn.z,Wn.y,0,-ui.z,ui.y,qn.z,0,-qn.x,Wn.z,0,-Wn.x,ui.z,0,-ui.x,-qn.y,qn.x,0,-Wn.y,Wn.x,0,-ui.y,ui.x,0];return!zo(e,Li,Fi,Di,Sr)||(e=[1,0,0,0,1,0,0,0,1],!zo(e,Li,Fi,Di,Sr))?!1:(br.crossVectors(qn,Wn),e=[br.x,br.y,br.z],zo(e,Li,Fi,Di,Sr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Rn=[new F,new F,new F,new F,new F,new F,new F,new F],ln=new F,Mr=new vn,Li=new F,Fi=new F,Di=new F,qn=new F,Wn=new F,ui=new F,ds=new F,Sr=new F,br=new F,di=new F;function zo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){di.fromArray(i,r);let o=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),l=t.dot(di),c=e.dot(di),h=n.dot(di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var ye=new F,wr=new vt,Uu=0,Be=class extends xn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ah,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wr.fromBufferAttribute(this,e),wr.applyMatrix3(t),this.setXY(e,wr.x,wr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Es=class extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var As=class extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var re=class extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}},Bu=new vn,fs=new F,ko=new F,Jn=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Bu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fs.subVectors(t,this.center);let e=fs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(fs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fs.copy(t.center).add(ko)),this.expandByPoint(fs.copy(t.center).sub(ko))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ou=0,Qe=new ce,Vo=new be,Ni=new F,Ye=new vn,ps=new vn,Ce=new F,we=class i extends xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bu(t)?As:Es)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return Vo.lookAt(t),Vo.updateMatrix(),this.applyMatrix4(Vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ps.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors(Ye.min,ps.min),Ye.expandByPoint(Ce),Ce.addVectors(Ye.max,ps.max),Ye.expandByPoint(Ce)):(Ye.expandByPoint(ps.min),Ye.expandByPoint(ps.max))}Ye.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ce.fromBufferAttribute(o,c),l&&(Ni.fromBufferAttribute(t,c),Ce.add(Ni)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Be(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new F,l[_]=new F;let c=new F,h=new F,d=new F,u=new vt,f=new vt,g=new vt,y=new F,m=new F;function p(_,b,I){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,I),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,I),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let N=1/(f.x*g.y-g.x*f.y);isFinite(N)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(N),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(N),o[_].add(y),o[b].add(y),o[I].add(y),l[_].add(m),l[b].add(m),l[I].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let _=0,b=E.length;_<b;++_){let I=E[_],N=I.start,O=I.count;for(let H=N,C=N+O;H<C;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let T=new F,v=new F,A=new F,w=new F;function P(_){A.fromBufferAttribute(s,_),w.copy(A);let b=o[_];T.copy(b),T.sub(A.multiplyScalar(A.dot(b))).normalize(),v.crossVectors(w,b);let N=v.dot(l[_])<0?-1:1;a.setXYZW(_,T.x,T.y,T.z,N)}for(let _=0,b=E.length;_<b;++_){let I=E[_],N=I.start,O=I.count;for(let H=N,C=N+O;H<C;H+=3)P(t.getX(H+0)),P(t.getX(H+1)),P(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,d=new F;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Be(u,h,d)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Go=new F,zu=new F,ku=new Xt,Ze=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Go.subVectors(n,e).cross(zu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Go),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ku.getNormalMatrix(t),s=this.coplanarPoint(Go).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Vu=0,$n=class extends xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=ts,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ul,this.blendDst=dl,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ze().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new vt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new vt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var In=new F,Ho=new F,Er=new F,Ar=new F,Ts=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ho.copy(t).add(e).multiplyScalar(.5),Er.copy(e).sub(t).normalize(),Ar.copy(this.origin).sub(Ho);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Er),o=Ar.dot(this.direction),l=-Ar.dot(Er),c=Ar.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ho).addScaledVector(Er,u),f}intersectSphere(t,e){if(t.radius<0)return null;In.subVectors(t.center,this.origin);let n=In.dot(this.direction),s=In.dot(In)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,y=e.y-a.y,m=e.z-a.z,p=n.x-a.x,E=n.y-a.y,T=n.z-a.z,v=Math.abs(l),A=Math.abs(c),w=Math.abs(h),P,_,b,I,N,O,H,C,D,V,q,ct;if(v>=A&&v>=w?(b=l,O=d,D=g,ct=p,l>=0?(P=c,_=h,I=u,N=f,H=y,C=m,V=E,q=T):(P=h,_=c,I=f,N=u,H=m,C=y,V=T,q=E)):A>=w?(b=c,O=u,D=y,ct=E,c>=0?(P=h,_=l,I=f,N=d,H=m,C=g,V=T,q=p):(P=l,_=h,I=d,N=f,H=g,C=m,V=p,q=T)):(b=h,O=f,D=m,ct=T,h>=0?(P=l,_=c,I=d,N=u,H=g,C=y,V=p,q=E):(P=c,_=l,I=u,N=d,H=y,C=g,V=E,q=p)),b===0)return null;let tt=P/b,ot=_/b,lt=1/b,Tt=I-tt*O,Mt=N-ot*O,Zt=H-tt*D,zt=C-ot*D,Yt=V-tt*ct,rt=q-ot*ct,ut=Yt*zt-rt*Zt,yt=Tt*rt-Mt*Yt,Bt=Zt*Mt-zt*Tt;if(s){if(ut<0||yt<0||Bt<0)return null}else if((ut<0||yt<0||Bt<0)&&(ut>0||yt>0||Bt>0))return null;let bt=ut+yt+Bt;if(bt===0)return null;let kt=lt*(ut*O+yt*D+Bt*ct);return(bt>0?kt<0:kt>0)?null:this.at(kt/bt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qe=class extends $n{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Tc=new ce,fi=new Ts,Tr=new Jn,Cc=new F,Cr=new F,Rr=new F,Ir=new F,qo=new F,Pr=new F,Rc=new F,Lr=new F,pe=class extends be{constructor(t=new we,e=new qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Pr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(qo.fromBufferAttribute(d,t),a?Pr.addScaledVector(qo,h):Pr.addScaledVector(qo.sub(e),h))}e.add(Pr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(r),fi.copy(t.ray).recast(t.near),!(Tr.containsPoint(fi.origin)===!1&&(fi.intersectSphere(Tr,Cc)===null||fi.origin.distanceToSquared(Cc)>(t.far-t.near)**2))&&(Tc.copy(r).invert(),fi.copy(t.ray).applyMatrix4(Tc),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,A=T;v<A;v+=3){let w=o.getX(v),P=o.getX(v+1),_=o.getX(v+2);s=Fr(this,p,t,n,c,h,d,w,P,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let E=o.getX(m),T=o.getX(m+1),v=o.getX(m+2);s=Fr(this,a,t,n,c,h,d,E,T,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,A=T;v<A;v+=3){let w=v,P=v+1,_=v+2;s=Fr(this,p,t,n,c,h,d,w,P,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let E=m,T=m+1,v=m+2;s=Fr(this,a,t,n,c,h,d,E,T,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Gu(i,t,e,n,s,r,a,o){let l;if(t.side===Ve?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===si,o),l===null)return null;Lr.copy(o),Lr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Lr);return c<e.near||c>e.far?null:{distance:c,point:Lr.clone(),object:i}}function Fr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Cr),i.getVertexPosition(l,Rr),i.getVertexPosition(c,Ir);let h=Gu(i,t,e,n,Cr,Rr,Ir,Rc);if(h){let d=new F;Yn.getBarycoord(Rc,Cr,Rr,Ir,d),s&&(h.uv=Yn.getInterpolatedAttribute(s,o,l,c,d,new vt)),r&&(h.uv1=Yn.getInterpolatedAttribute(r,o,l,c,d,new vt)),a&&(h.normal=Yn.getInterpolatedAttribute(a,o,l,c,d,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new F,materialIndex:0};Yn.getNormal(Cr,Rr,Ir,u.normal),h.face=u,h.barycoord=d}return h}var Cs=class extends ze{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Re,h=Re,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yi=class extends Be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ui=new ce,Ic=new ce,Dr=[],Pc=new vn,Hu=new ce,ms=new pe,gs=new Jn,Dn=class extends pe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Yi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Hu)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ui),Pc.copy(t.boundingBox).applyMatrix4(Ui),this.boundingBox.union(Pc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ui),gs.copy(t.boundingSphere).applyMatrix4(Ui),this.boundingSphere.union(gs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ms.geometry=this.geometry,ms.material=this.material,ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gs.copy(this.boundingSphere),gs.applyMatrix4(n),t.ray.intersectsSphere(gs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ui),Ic.multiplyMatrices(n,Ui),ms.matrixWorld=Ic,ms.raycast(t,Dr);for(let a=0,o=Dr.length;a<o;a++){let l=Dr[a];l.instanceId=r,l.object=this,e.push(l)}Dr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Yi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cs(new Float32Array(s*this.count),s,this.count,Ia,en));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},pi=new Jn,qu=new vt(.5,.5),Nr=new F,Zi=class{constructor(t=new Ze,e=new Ze,n=new Ze,s=new Ze,r=new Ze,a=new Ze){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=cn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],E=r[12],T=r[13],v=r[14],A=r[15];if(s[0].setComponents(c-a,f-h,p-g,A-E).normalize(),s[1].setComponents(c+a,f+h,p+g,A+E).normalize(),s[2].setComponents(c+o,f+d,p+y,A+T).normalize(),s[3].setComponents(c-o,f-d,p-y,A-T).normalize(),n)s[4].setComponents(l,u,m,v).normalize(),s[5].setComponents(c-l,f-u,p-m,A-v).normalize();else if(s[4].setComponents(c-l,f-u,p-m,A-v).normalize(),e===cn)s[5].setComponents(c+l,f+u,p+m,A+v).normalize();else if(e===Gi)s[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(t){pi.center.set(0,0,0);let e=qu.distanceTo(t.center);return pi.radius=.7071067811865476+e,pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Nr.x=s.normal.x>0?t.max.x:t.min.x,Nr.y=s.normal.y>0?t.max.y:t.min.y,Nr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Rs=class extends ze{constructor(t=[],e=ri,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},gi=class extends ze{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Kn=class extends ze{constructor(t,e,n=un,s,r,a,o=Re,l=Re,c,h=_n,d=1){if(h!==_n&&h!==oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},na=class extends Kn{constructor(t,e=un,n=ri,s,r,a=Re,o=Re,l,c=_n){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Is=class extends ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Pe=class i extends we{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(d,2));function g(y,m,p,E,T,v,A,w,P,_,b){let I=v/P,N=A/_,O=v/2,H=A/2,C=w/2,D=P+1,V=_+1,q=0,ct=0,tt=new F;for(let ot=0;ot<V;ot++){let lt=ot*N-H;for(let Tt=0;Tt<D;Tt++){let Mt=Tt*I-O;tt[y]=Mt*E,tt[m]=lt*T,tt[p]=C,c.push(tt.x,tt.y,tt.z),tt[y]=0,tt[m]=0,tt[p]=w>0?1:-1,h.push(tt.x,tt.y,tt.z),d.push(Tt/P),d.push(1-ot/_),q+=1}}for(let ot=0;ot<_;ot++)for(let lt=0;lt<P;lt++){let Tt=u+lt+D*ot,Mt=u+lt+D*(ot+1),Zt=u+(lt+1)+D*(ot+1),zt=u+(lt+1)+D*ot;l.push(Tt,Mt,zt),l.push(Mt,Zt,zt),ct+=6}o.addGroup(f,ct,b),f+=ct,u+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ps=class i extends we{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,g=n*2+r,y=s+1,m=new F,p=new F;for(let E=0;E<=g;E++){let T=0,v=0,A=0,w=0;if(E<=n){let b=E/n,I=b*Math.PI/2;v=-h-t*Math.cos(I),A=t*Math.sin(I),w=-t*Math.cos(I),T=b*d}else if(E<=n+r){let b=(E-n)/r;v=-h+b*e,A=t,w=0,T=d+b*u}else{let b=(E-n-r)/n,I=b*Math.PI/2;v=h+t*Math.sin(I),A=t*Math.cos(I),w=t*Math.sin(I),T=d+u+b*d}let P=Math.max(0,Math.min(1,T/f)),_=0;E===0?_=.5/s:E===g&&(_=-.5/s);for(let b=0;b<=s;b++){let I=b/s,N=I*Math.PI*2,O=Math.sin(N),H=Math.cos(N);p.x=-A*H,p.y=v,p.z=A*O,o.push(p.x,p.y,p.z),m.set(-A*H,w,A*O),m.normalize(),l.push(m.x,m.y,m.z),c.push(I+_,P)}if(E>0){let b=(E-1)*y;for(let I=0;I<s;I++){let N=b+I,O=b+I+1,H=E*y+I,C=E*y+I+1;a.push(N,O,H),a.push(O,C,H)}}}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var yn=class i extends we{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,y=[],m=n/2,p=0;E(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new re(d,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(f,2));function E(){let v=new F,A=new F,w=0,P=(e-t)/n;for(let _=0;_<=r;_++){let b=[],I=_/r,N=I*(e-t)+t;for(let O=0;O<=s;O++){let H=O/s,C=H*l+o,D=Math.sin(C),V=Math.cos(C);A.x=N*D,A.y=-I*n+m,A.z=N*V,d.push(A.x,A.y,A.z),v.set(D,P,V).normalize(),u.push(v.x,v.y,v.z),f.push(H,1-I),b.push(g++)}y.push(b)}for(let _=0;_<s;_++)for(let b=0;b<r;b++){let I=y[b][_],N=y[b+1][_],O=y[b+1][_+1],H=y[b][_+1];(t>0||b!==0)&&(h.push(I,N,H),w+=3),(e>0||b!==r-1)&&(h.push(N,O,H),w+=3)}c.addGroup(p,w,0),p+=w}function T(v){let A=g,w=new vt,P=new F,_=0,b=v===!0?t:e,I=v===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*I,0),u.push(0,I,0),f.push(.5,.5),g++;let N=g;for(let O=0;O<=s;O++){let C=O/s*l+o,D=Math.cos(C),V=Math.sin(C);P.x=b*V,P.y=m*I,P.z=b*D,d.push(P.x,P.y,P.z),u.push(0,I,0),w.x=D*.5+.5,w.y=V*.5*I+.5,f.push(w.x,w.y),g++}for(let O=0;O<s;O++){let H=A+O,C=N+O;v===!0?h.push(C,C+1,H):h.push(C+1,C,H),_+=3}c.addGroup(p,_,v===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ls=class i extends yn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fs=class i extends we{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(E){let T=new F,v=new F,A=new F;for(let w=0;w<e.length;w+=3)f(e[w+0],T),f(e[w+1],v),f(e[w+2],A),l(T,v,A,E)}function l(E,T,v,A){let w=A+1,P=[];for(let _=0;_<=w;_++){P[_]=[];let b=E.clone().lerp(v,_/w),I=T.clone().lerp(v,_/w),N=w-_;for(let O=0;O<=N;O++)O===0&&_===w?P[_][O]=b:P[_][O]=b.clone().lerp(I,O/N)}for(let _=0;_<w;_++)for(let b=0;b<2*(w-_)-1;b++){let I=Math.floor(b/2);b%2===0?(u(P[_][I+1]),u(P[_+1][I]),u(P[_][I])):(u(P[_][I+1]),u(P[_+1][I+1]),u(P[_+1][I]))}}function c(E){let T=new F;for(let v=0;v<r.length;v+=3)T.x=r[v+0],T.y=r[v+1],T.z=r[v+2],T.normalize().multiplyScalar(E),r[v+0]=T.x,r[v+1]=T.y,r[v+2]=T.z}function h(){let E=new F;for(let T=0;T<r.length;T+=3){E.x=r[T+0],E.y=r[T+1],E.z=r[T+2];let v=m(E)/2/Math.PI+.5,A=p(E)/Math.PI+.5;a.push(v,1-A)}g(),d()}function d(){for(let E=0;E<a.length;E+=6){let T=a[E+0],v=a[E+2],A=a[E+4],w=Math.max(T,v,A),P=Math.min(T,v,A);w>.9&&P<.1&&(T<.2&&(a[E+0]+=1),v<.2&&(a[E+2]+=1),A<.2&&(a[E+4]+=1))}}function u(E){r.push(E.x,E.y,E.z)}function f(E,T){let v=E*3;T.x=t[v+0],T.y=t[v+1],T.z=t[v+2]}function g(){let E=new F,T=new F,v=new F,A=new F,w=new vt,P=new vt,_=new vt;for(let b=0,I=0;b<r.length;b+=9,I+=6){E.set(r[b+0],r[b+1],r[b+2]),T.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),w.set(a[I+0],a[I+1]),P.set(a[I+2],a[I+3]),_.set(a[I+4],a[I+5]),A.copy(E).add(T).add(v).divideScalar(3);let N=m(A);y(w,I+0,E,N),y(P,I+2,T,N),y(_,I+4,v,N)}}function y(E,T,v,A){A<0&&E.x===1&&(a[T]=E.x-1),v.x===0&&v.z===0&&(a[T]=A/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},Ds=class i extends Fs{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ke=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new vt:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new F,s=[],r=[],a=[],o=new F,l=new ce;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(te(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(te(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ji=class extends ke{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new vt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ia=class extends Ji{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Il(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Lc=new F,Fc=new F,Wo=new Il,Xo=new Il,Yo=new Il,Qn=class extends ke{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Fc.subVectors(s[0],s[1]).add(s[0]),c=Fc);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Lc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Lc),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Wo.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,y,m),Xo.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,y,m),Yo.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Wo.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Xo.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Yo.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Wo.calc(l),Xo.calc(l),Yo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Dc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Wu(i,t){let e=1-i;return e*e*t}function Xu(i,t){return 2*(1-i)*i*t}function Yu(i,t){return i*i*t}function xs(i,t,e,n){return Wu(i,t)+Xu(i,e)+Yu(i,n)}function Zu(i,t){let e=1-i;return e*e*e*t}function Ju(i,t){let e=1-i;return 3*e*e*i*t}function $u(i,t){return 3*(1-i)*i*i*t}function Ku(i,t){return i*i*i*t}function vs(i,t,e,n,s){return Zu(i,t)+Ju(i,e)+$u(i,n)+Ku(i,s)}var Ns=class extends ke{constructor(t=new vt,e=new vt,n=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new vt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vs(t,s.x,r.x,a.x,o.x),vs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},sa=class extends ke{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vs(t,s.x,r.x,a.x,o.x),vs(t,s.y,r.y,a.y,o.y),vs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Us=class extends ke{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ra=class extends ke{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bs=class extends ke{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(xs(t,s.x,r.x,a.x),xs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Os=class extends ke{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(xs(t,s.x,r.x,a.x),xs(t,s.y,r.y,a.y),xs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zs=class extends ke{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Dc(o,l.x,c.x,h.x,d.x),Dc(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new vt().fromArray(s))}return this}},aa=Object.freeze({__proto__:null,ArcCurve:ia,CatmullRomCurve3:Qn,CubicBezierCurve:Ns,CubicBezierCurve3:sa,EllipseCurve:Ji,LineCurve:Us,LineCurve3:ra,QuadraticBezierCurve:Bs,QuadraticBezierCurve3:Os,SplineCurve:zs}),oa=class extends ke{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new aa[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new aa[s.type]().fromJSON(s))}return this}},_i=class extends oa{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Us(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Bs(this.currentPoint.clone(),new vt(t,e),new vt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Ns(this.currentPoint.clone(),new vt(t,e),new vt(n,s),new vt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new zs(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Ji(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ks=class extends _i{constructor(t){super(t),this.uuid=ss(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new _i().fromJSON(s))}return this}};function Qu(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Lh(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=id(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,d=l;for(let u=e;u<s;u+=e){let f=i[u],g=i[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Vs(r,a,e,o,l,c,0),a}function Lh(i,t,e,n,s){let r;if(s===pd(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Nc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Nc(a/n|0,i[a],i[a+1],r);return r&&$i(r,r.next)&&(Hs(r),r=r.next),r}function xi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&($i(e,e.next)||_e(e.prev,e,e.next)===0)){if(Hs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Vs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&ld(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?td(i,n,s,r):ju(i)){t.push(l.i,i.i,c.i),Hs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=ed(xi(i),t),Vs(i,t,e,n,s,r,2)):a===2&&nd(i,t,e,n,s,r):Vs(xi(i),t,e,n,s,r,1);break}}}function ju(i){let t=i.prev,e=i,n=i.next;if(_e(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&_s(s,o,r,l,a,c,g.x,g.y)&&_e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function td(i,t,e,n){let s=i.prev,r=i,a=i.next;if(_e(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),y=Math.max(o,l,c),m=Math.max(h,d,u),p=tl(f,g,t,e,n),E=tl(y,m,t,e,n),T=i.prevZ,v=i.nextZ;for(;T&&T.z>=p&&v&&v.z<=E;){if(T.x>=f&&T.x<=y&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&_s(o,h,l,d,c,u,T.x,T.y)&&_e(T.prev,T,T.next)>=0||(T=T.prevZ,v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&_s(o,h,l,d,c,u,v.x,v.y)&&_e(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;T&&T.z>=p;){if(T.x>=f&&T.x<=y&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&_s(o,h,l,d,c,u,T.x,T.y)&&_e(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;v&&v.z<=E;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&_s(o,h,l,d,c,u,v.x,v.y)&&_e(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function ed(i,t){let e=i;do{let n=e.prev,s=e.next.next;!$i(n,s)&&Dh(n,e,e.next,s)&&Gs(n,s)&&Gs(s,n)&&(t.push(n.i,e.i,s.i),Hs(e),Hs(e.next),e=i=s),e=e.next}while(e!==i);return xi(e)}function nd(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ud(a,o)){let l=Nh(a,o);a=xi(a,a.next),l=xi(l,l.next),Vs(a,t,e,n,s,r,0),Vs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function id(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Lh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(hd(c))}s.sort(sd);for(let r=0;r<s.length;r++)e=rd(s[r],e);return e}function sd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function rd(i,t){let e=ad(i,t);if(!e)return t;let n=Nh(e,i);return xi(n,n.next),xi(e,e.next)}function ad(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if($i(i,e))return e;do{if($i(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Fh(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);Gs(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&od(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function od(i,t){return _e(i.prev,i,t.prev)<0&&_e(t.next,i,i.next)<0}function ld(i,t,e,n){let s=i;do s.z===0&&(s.z=tl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,cd(s)}function cd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function tl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function hd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Fh(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function _s(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Fh(i,t,e,n,s,r,a,o)}function ud(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!dd(i,t)&&(Gs(i,t)&&Gs(t,i)&&fd(i,t)&&(_e(i.prev,i,t.prev)||_e(i,t.prev,t))||$i(i,t)&&_e(i.prev,i,i.next)>0&&_e(t.prev,t,t.next)>0)}function _e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function $i(i,t){return i.x===t.x&&i.y===t.y}function Dh(i,t,e,n){let s=Br(_e(i,t,e)),r=Br(_e(i,t,n)),a=Br(_e(e,n,i)),o=Br(_e(e,n,t));return!!(s!==r&&a!==o||s===0&&Ur(i,e,t)||r===0&&Ur(i,n,t)||a===0&&Ur(e,i,n)||o===0&&Ur(e,t,n))}function Ur(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Br(i){return i>0?1:i<0?-1:0}function dd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Dh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Gs(i,t){return _e(i.prev,i,i.next)<0?_e(i,t,i.next)>=0&&_e(i,i.prev,t)>=0:_e(i,t,i.prev)<0||_e(i,i.next,t)<0}function fd(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Nh(i,t){let e=el(i.i,i.x,i.y),n=el(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Nc(i,t,e,n){let s=el(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Hs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function el(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function pd(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var nl=class{static triangulate(t,e,n=2){return Qu(t,e,n)}},Zn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Uc(t),Bc(n,t);let a=t.length;e.forEach(Uc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Bc(n,e[l]);let o=nl.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Uc(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Bc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var qs=class i extends we{constructor(t=new ks([new vt(.5,.5),new vt(-.5,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new re(s,3)),this.setAttribute("uv",new re(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:md,T,v=!1,A,w,P,_;if(p){T=p.getSpacedPoints(h),v=!0,u=!1;let ht=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(h,ht),w=new F,P=new F,_=new F}u||(m=0,f=0,g=0,y=0);let b=o.extractPoints(c),I=b.shape,N=b.holes;if(!Zn.isClockWise(I)){I=I.reverse();for(let ht=0,dt=N.length;ht<dt;ht++){let mt=N[ht];Zn.isClockWise(mt)&&(N[ht]=mt.reverse())}}function H(ht){let mt=10000000000000001e-36,gt=ht[0];for(let xt=1;xt<=ht.length;xt++){let Nt=xt%ht.length,Lt=ht[Nt],Ot=Lt.x-gt.x,Gt=Lt.y-gt.y,U=Ot*Ot+Gt*Gt,Qt=Math.max(Math.abs(Lt.x),Math.abs(Lt.y),Math.abs(gt.x),Math.abs(gt.y)),Wt=mt*Qt*Qt;if(U<=Wt){ht.splice(Nt,1),xt--;continue}gt=Lt}}H(I),N.forEach(H);let C=N.length,D=I;for(let ht=0;ht<C;ht++){let dt=N[ht];I=I.concat(dt)}function V(ht,dt,mt){return dt||Ht("ExtrudeGeometry: vec does not exist"),ht.clone().addScaledVector(dt,mt)}let q=I.length;function ct(ht,dt,mt){let gt,xt,Nt,Lt=ht.x-dt.x,Ot=ht.y-dt.y,Gt=mt.x-ht.x,U=mt.y-ht.y,Qt=Lt*Lt+Ot*Ot,Wt=Lt*U-Ot*Gt;if(Math.abs(Wt)>Number.EPSILON){let R=Math.sqrt(Qt),x=Math.sqrt(Gt*Gt+U*U),G=dt.x-Ot/R,Z=dt.y+Lt/R,it=mt.x-U/x,_t=mt.y+Gt/x,X=((it-G)*U-(_t-Z)*Gt)/(Lt*U-Ot*Gt);gt=G+Lt*X-ht.x,xt=Z+Ot*X-ht.y;let Y=gt*gt+xt*xt;if(Y<=2)return new vt(gt,xt);Nt=Math.sqrt(Y/2)}else{let R=!1;Lt>Number.EPSILON?Gt>Number.EPSILON&&(R=!0):Lt<-Number.EPSILON?Gt<-Number.EPSILON&&(R=!0):Math.sign(Ot)===Math.sign(U)&&(R=!0),R?(gt=-Ot,xt=Lt,Nt=Math.sqrt(Qt)):(gt=Lt,xt=Ot,Nt=Math.sqrt(Qt/2))}return new vt(gt/Nt,xt/Nt)}let tt=[];for(let ht=0,dt=D.length,mt=dt-1,gt=ht+1;ht<dt;ht++,mt++,gt++)mt===dt&&(mt=0),gt===dt&&(gt=0),tt[ht]=ct(D[ht],D[mt],D[gt]);let ot=[],lt,Tt=tt.concat();for(let ht=0,dt=C;ht<dt;ht++){let mt=N[ht];lt=[];for(let gt=0,xt=mt.length,Nt=xt-1,Lt=gt+1;gt<xt;gt++,Nt++,Lt++)Nt===xt&&(Nt=0),Lt===xt&&(Lt=0),lt[gt]=ct(mt[gt],mt[Nt],mt[Lt]);ot.push(lt),Tt=Tt.concat(lt)}let Mt;if(m===0)Mt=Zn.triangulateShape(D,N);else{let ht=[],dt=[];for(let mt=0;mt<m;mt++){let gt=mt/m,xt=f*Math.cos(gt*Math.PI/2),Nt=g*Math.sin(gt*Math.PI/2)+y;for(let Lt=0,Ot=D.length;Lt<Ot;Lt++){let Gt=V(D[Lt],tt[Lt],Nt);yt(Gt.x,Gt.y,-xt),gt===0&&ht.push(Gt)}for(let Lt=0,Ot=C;Lt<Ot;Lt++){let Gt=N[Lt];lt=ot[Lt];let U=[];for(let Qt=0,Wt=Gt.length;Qt<Wt;Qt++){let R=V(Gt[Qt],lt[Qt],Nt);yt(R.x,R.y,-xt),gt===0&&U.push(R)}gt===0&&dt.push(U)}}Mt=Zn.triangulateShape(ht,dt)}let Zt=Mt.length,zt=g+y;for(let ht=0;ht<q;ht++){let dt=u?V(I[ht],Tt[ht],zt):I[ht];v?(P.copy(A.normals[0]).multiplyScalar(dt.x),w.copy(A.binormals[0]).multiplyScalar(dt.y),_.copy(T[0]).add(P).add(w),yt(_.x,_.y,_.z)):yt(dt.x,dt.y,0)}for(let ht=1;ht<=h;ht++)for(let dt=0;dt<q;dt++){let mt=u?V(I[dt],Tt[dt],zt):I[dt];v?(P.copy(A.normals[ht]).multiplyScalar(mt.x),w.copy(A.binormals[ht]).multiplyScalar(mt.y),_.copy(T[ht]).add(P).add(w),yt(_.x,_.y,_.z)):yt(mt.x,mt.y,d/h*ht)}for(let ht=m-1;ht>=0;ht--){let dt=ht/m,mt=f*Math.cos(dt*Math.PI/2),gt=g*Math.sin(dt*Math.PI/2)+y;for(let xt=0,Nt=D.length;xt<Nt;xt++){let Lt=V(D[xt],tt[xt],gt);yt(Lt.x,Lt.y,d+mt)}for(let xt=0,Nt=N.length;xt<Nt;xt++){let Lt=N[xt];lt=ot[xt];for(let Ot=0,Gt=Lt.length;Ot<Gt;Ot++){let U=V(Lt[Ot],lt[Ot],gt);v?yt(U.x,U.y+T[h-1].y,T[h-1].x+mt):yt(U.x,U.y,d+mt)}}}Yt(),rt();function Yt(){let ht=s.length/3;if(u){let dt=0,mt=q*dt;for(let gt=0;gt<Zt;gt++){let xt=Mt[gt];Bt(xt[2]+mt,xt[1]+mt,xt[0]+mt)}dt=h+m*2,mt=q*dt;for(let gt=0;gt<Zt;gt++){let xt=Mt[gt];Bt(xt[0]+mt,xt[1]+mt,xt[2]+mt)}}else{for(let dt=0;dt<Zt;dt++){let mt=Mt[dt];Bt(mt[2],mt[1],mt[0])}for(let dt=0;dt<Zt;dt++){let mt=Mt[dt];Bt(mt[0]+q*h,mt[1]+q*h,mt[2]+q*h)}}n.addGroup(ht,s.length/3-ht,0)}function rt(){let ht=s.length/3,dt=0;ut(D,dt),dt+=D.length;for(let mt=0,gt=N.length;mt<gt;mt++){let xt=N[mt];ut(xt,dt),dt+=xt.length}n.addGroup(ht,s.length/3-ht,1)}function ut(ht,dt){let mt=ht.length;for(;--mt>=0;){let gt=mt,xt=mt-1;xt<0&&(xt=ht.length-1);for(let Nt=0,Lt=h+m*2;Nt<Lt;Nt++){let Ot=q*Nt,Gt=q*(Nt+1),U=dt+gt+Ot,Qt=dt+xt+Ot,Wt=dt+xt+Gt,R=dt+gt+Gt;bt(U,Qt,Wt,R)}}}function yt(ht,dt,mt){l.push(ht),l.push(dt),l.push(mt)}function Bt(ht,dt,mt){kt(ht),kt(dt),kt(mt);let gt=s.length/3,xt=E.generateTopUV(n,s,gt-3,gt-2,gt-1);Jt(xt[0]),Jt(xt[1]),Jt(xt[2])}function bt(ht,dt,mt,gt){kt(ht),kt(dt),kt(gt),kt(dt),kt(mt),kt(gt);let xt=s.length/3,Nt=E.generateSideWallUV(n,s,xt-6,xt-3,xt-2,xt-1);Jt(Nt[0]),Jt(Nt[1]),Jt(Nt[3]),Jt(Nt[1]),Jt(Nt[2]),Jt(Nt[3])}function kt(ht){s.push(l[ht*3+0]),s.push(l[ht*3+1]),s.push(l[ht*3+2])}function Jt(ht){r.push(ht.x),r.push(ht.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return gd(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new aa[s.type]().fromJSON(s)),new i(n,t.options)}},md={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new vt(r,a),new vt(o,l),new vt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],y=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new vt(a,1-l),new vt(c,1-d),new vt(u,1-g),new vt(y,1-p)]:[new vt(o,1-l),new vt(h,1-d),new vt(f,1-g),new vt(m,1-p)]}};function gd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ws=class i extends Fs{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var vi=class i extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let E=p*u-a;for(let T=0;T<c;T++){let v=T*d-r;g.push(v,-E,0),y.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){let T=E+c*p,v=E+c*(p+1),A=E+1+c*(p+1),w=E+1+c*p;f.push(T,v,w),f.push(v,A,w)}this.setIndex(f),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(y,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Nn=class i extends we{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new F,u=new F,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let E=[],T=p/n,v=a+T*o,A=t*Math.cos(v),w=Math.sqrt(t*t-A*A),P=0;p===0&&a===0?P=.5/e:p===n&&l===Math.PI&&(P=-.5/e);for(let _=0;_<=e;_++){let b=_/e,I=s+b*r;d.x=-w*Math.cos(I),d.y=A,d.z=w*Math.sin(I),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(b+P,1-T),E.push(c++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){let T=h[p][E+1],v=h[p][E],A=h[p+1][E],w=h[p+1][E+1];(p!==0||a>0)&&f.push(T,v,w),(p!==n-1||l<Math.PI)&&f.push(v,A,w)}this.setIndex(f),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(y,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ki=class i extends we{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new F,f=new F,g=new F;for(let y=0;y<=n;y++){let m=a+y/n*o;for(let p=0;p<=s;p++){let E=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(E),f.y=(t+e*Math.cos(m))*Math.sin(E),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(E),u.y=t*Math.sin(E),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,E=(s+1)*(y-1)+m-1,T=(s+1)*(y-1)+m,v=(s+1)*y+m;l.push(p,E,v),l.push(E,T,v)}this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var jn=class i extends we{constructor(t=new Os(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new F,l=new F,c=new vt,h=new F,d=[],u=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new re(d,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(f,2));function y(){for(let T=0;T<e;T++)m(T);m(r===!1?e:0),E(),p()}function m(T){h=t.getPointAt(T/e,h);let v=a.normals[T],A=a.binormals[T];for(let w=0;w<=s;w++){let P=w/s*Math.PI*2,_=Math.sin(P),b=-Math.cos(P);l.x=b*v.x+_*A.x,l.y=b*v.y+_*A.y,l.z=b*v.z+_*A.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let T=1;T<=e;T++)for(let v=1;v<=s;v++){let A=(s+1)*(T-1)+(v-1),w=(s+1)*T+(v-1),P=(s+1)*T+v,_=(s+1)*(T-1)+v;g.push(A,w,_),g.push(w,P,_)}}function E(){for(let T=0;T<=e;T++)for(let v=0;v<=s;v++)c.x=T/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new aa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Si(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Oc(s))s.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Oc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ne(i){let t={};for(let e=0;e<i.length;e++){let n=Si(i[e]);for(let s in n)t[s]=n[s]}return t}function Oc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function _d(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Pl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var Uh={clone:Si,merge:Ne},xd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Je=class extends $n{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xd,this.fragmentShader=vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Si(t.uniforms),this.uniformsGroups=_d(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new qt().setHex(s.value);break;case"v2":this.uniforms[n].value=new vt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ge().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Xt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ce().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},la=class extends Je{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},je=class extends $n{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ho,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ca=class extends $n{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ha=class extends $n{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Bi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Zo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ti=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ua=class extends ti{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ko,endingEnd:Ko}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Qo:r=t,o=2*e-n;break;case jo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Qo:a=t,l=2*n-e;break;case jo:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,E=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,T=(-1-f)*m+(1.5+f)*y+.5*g,v=f*m-f*y;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+E*a[c+A]+T*a[l+A]+v*a[d+A];return r}},da=class extends ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},fa=class extends ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},pa=class extends ti{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),y=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let y=a[c+g],m=a[l+g],p=f*u+g*2,E=d[p],T=d[p+1],v=t*u+g*2,A=h[v],w=h[v+1],P=Md(n,e,E,A,s);r[g]=Bh(P,y,T,w,m)}return r}};function Bh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function yd(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Md(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Bh(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=yd(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var $e=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Bi(e,this.TimeBufferType),this.values=Bi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Bi(t.times,Array),values:Bi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Zo(t.settings)&&(n.settings={inTangents:Bi(t.settings.inTangents,Array),outTangents:Bi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new pa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ys:e=this.InterpolantFactoryMethodDiscrete;break;case Kr:e=this.InterpolantFactoryMethodLinear;break;case kr:e=this.InterpolantFactoryMethodSmooth;break;case $o:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Vt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ys;case this.InterpolantFactoryMethodLinear:return Kr;case this.InterpolantFactoryMethodSmooth:return kr;case this.InterpolantFactoryMethodBezier:return $o}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Zo(this.settings)&&(zc(this.settings.inTangents,t),zc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ht("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ht("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&wu(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ht("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===kr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let y=e[d+g];if(y!==e[u+g]||y!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Zo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function zc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}$e.prototype.ValueTypeName="";$e.prototype.TimeBufferType=Float32Array;$e.prototype.ValueBufferType=Float32Array;$e.prototype.DefaultInterpolation=Kr;var ei=class extends $e{constructor(t,e,n){super(t,e,n)}};ei.prototype.ValueTypeName="bool";ei.prototype.ValueBufferType=Array;ei.prototype.DefaultInterpolation=ys;ei.prototype.InterpolantFactoryMethodLinear=void 0;ei.prototype.InterpolantFactoryMethodSmooth=void 0;var ma=class extends $e{constructor(t,e,n,s){super(t,e,n,s)}};ma.prototype.ValueTypeName="color";var ga=class extends $e{constructor(t,e,n,s){super(t,e,n,s)}};ga.prototype.ValueTypeName="number";var _a=class extends ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Oe.slerpFlat(r,0,a,c-o,a,c,l);return r}},Xs=class extends $e{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new _a(this.times,this.values,this.getValueSize(),t)}};Xs.prototype.ValueTypeName="quaternion";Xs.prototype.InterpolantFactoryMethodSmooth=void 0;var ni=class extends $e{constructor(t,e,n){super(t,e,n)}};ni.prototype.ValueTypeName="string";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=ys;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends $e{constructor(t,e,n,s){super(t,e,n,s)}};xa.prototype.ValueTypeName="vector";var va=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Oh=new va,Ys=class{constructor(t){this.manager=t!==void 0?t:Oh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ys.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qi=class extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Un=class extends Qi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Jo=new ce,kc=new F,Vc=new F,Zs=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=We,this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zi,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;kc.setFromMatrixPosition(t.matrixWorld),e.position.copy(kc),Vc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Jo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Jo,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Gi||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Jo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Or=new F,zr=new Oe,mn=new F,Js=class extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Or,zr,mn),mn.x===1&&mn.y===1&&mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Or,zr,mn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Or,zr,mn),mn.x===1&&mn.y===1&&mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Or,zr,mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Xn=new F,Gc=new vt,Hc=new vt,Me=class extends Js{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Qr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qr*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,Gc,Hc),e.subVectors(Hc,Gc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(wo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var il=class extends Zs{constructor(){super(new Me(90,1,.5,500)),this.isPointLightShadow=!0}},$s=class extends Qi{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new il}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ii=class extends Js{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},sl=class extends Zs{constructor(){super(new ii(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Bn=class extends Qi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new sl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Oi=-90,zi=1,ya=class extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Me(Oi,zi,t,e);s.layers=this.layers,this.add(s);let r=new Me(Oi,zi,t,e);r.layers=this.layers,this.add(r);let a=new Me(Oi,zi,t,e);a.layers=this.layers,this.add(a);let o=new Me(Oi,zi,t,e);o.layers=this.layers,this.add(o);let l=new Me(Oi,zi,t,e);l.layers=this.layers,this.add(l);let c=new Me(Oi,zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Gi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ma=class extends Me{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ll="\\[\\]\\.:\\/",Sd=new RegExp("["+Ll+"]","g"),Fl="[^"+Ll+"]",bd="[^"+Ll.replace("\\.","")+"]",wd=/((?:WC+[\/:])*)/.source.replace("WC",Fl),Ed=/(WCOD+)?/.source.replace("WCOD",bd),Ad=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fl),Td=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fl),Cd=new RegExp("^"+wd+Ed+Ad+Td+"$"),Rd=["material","materials","bones","map"],rl=class{constructor(t,e,n){let s=n||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Sd,"")}static parseTrackName(t){let e=Cd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Rd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fe.Composite=rl;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Og=new Float32Array(1);var qc=new ce,Ks=class{constructor(t,e,n=0,s=1/0){this.ray=new Ts(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Wi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ht("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return qc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qc),this}intersectObject(t,e=!0,n=[]){return al(t,this,n,e),n.sort(Wc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)al(t[s],this,n,e);return n.sort(Wc),n}};function Wc(i,t){return i.distance-t.distance}function al(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)al(r[a],t,e,!0)}}var zl=class zl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};zl.prototype.isMatrix2=!0;var ol=zl,Xc=new vt,Sa=class{constructor(t=new vt(1/0,1/0),e=new vt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Xc.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xc).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};var Qs=class{constructor(){this.type="ShapePath",this.color=new qt,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new _i,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,a){return this.currentPath.bezierCurveTo(t,e,n,s,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(l,c){let h=!1,d=c.length;for(let u=0,f=d-1;u<d;f=u++){let g=c[u],y=c[f];g.y>l.y!=y.y>l.y&&l.x<(y.x-g.x)*(l.y-g.y)/(y.y-g.y)+g.x&&(h=!h)}return h}function e(l,c){let h=c.getCenter(new vt);if(t(h,l))return h;let d=h.y,u=[],f=l.length;for(let g=0;g<f;g++){let y=l[g],m=l[(g+1)%f];if(y.y>d!=m.y>d){let p=y.x+(d-y.y)*(m.x-y.x)/(m.y-y.y);u.push(p)}}return u.length>1&&(u.sort((g,y)=>g-y),h.x=(u[0]+u[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(Vt('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let s=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let h=Zn.area(c);if(h===0)continue;let d=new Sa;for(let u=0;u<c.length;u++)d.expandByPoint(c[u]);r.push({subPath:l,points:c,boundingBox:d,interiorPoint:e(c,d),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){let c=r[l],h=0;for(let d=l-1;d>=0;d--){let u=r[d];if(u.boundingBox.containsBox(c.boundingBox)&&t(c.interiorPoint,u.points)){c.container=u.exclude?u.container:u,h=u.winding,c.winding+=h;break}}s(c.winding)===s(h)&&(c.exclude=!0)}for(let l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let a=[],o=new Map;for(let l of r){if(l.exclude||l.role!=="outer")continue;let c=new ks;c.curves=l.subPath.curves,a.push(c),o.set(l,c)}for(let l of r){if(l.exclude||l.role!=="hole")continue;let c=o.get(l.container);if(!c)continue;let h=new _i;h.curves=l.subPath.curves,c.holes.push(h)}return a}};function Dl(i,t,e,n){let s=Id(n);switch(e){case Al:return i*t;case Ia:return i*t/s.components*s.byteLength;case Pa:return i*t/s.components*s.byteLength;case li:return i*t*2/s.components*s.byteLength;case La:return i*t*2/s.components*s.byteLength;case Tl:return i*t*3/s.components*s.byteLength;case nn:return i*t*4/s.components*s.byteLength;case Fa:return i*t*4/s.components*s.byteLength;case nr:case ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case sr:case rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:case Ba:return Math.max(i,16)*Math.max(t,8)/4;case Da:case Ua:return Math.max(i,8)*Math.max(t,8)/2;case Oa:case za:case Va:case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ka:case ar:case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case to:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case eo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case no:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case io:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case so:case ro:case ao:return Math.ceil(i/4)*Math.ceil(t/4)*16;case oo:case lo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case or:case co:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Id(i){switch(i){case We:case Sl:return{byteLength:1,components:1};case ns:case bl:case dn:return{byteLength:2,components:1};case Ca:case Ra:return{byteLength:2,components:4};case un:case Ta:case en:return{byteLength:4,components:1};case wl:case El:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function au(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Od(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var zd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kd=`#ifdef USE_ALPHAHASH
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
#endif`,Vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wd=`#ifdef USE_AOMAP
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
#endif`,Xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yd=`#ifdef USE_BATCHING
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
#endif`,Zd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qd=`#ifdef USE_IRIDESCENCE
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
#endif`,jd=`#ifdef USE_BUMPMAP
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
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,af=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,of=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,cf=`#define PI 3.141592653589793
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
} // validated`,hf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uf=`vec3 transformedNormal = objectNormal;
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
#endif`,df=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",_f=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xf=`#ifdef USE_ENVMAP
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
#endif`,vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
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
#endif`,Mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sf=`#ifdef USE_ENVMAP
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
#endif`,bf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ef=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Af=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tf=`#ifdef USE_GRADIENTMAP
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
}`,Cf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Lf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
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
				#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ff=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
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
#endif`,Of=`uniform sampler2D dfgLUT;
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
		float roughness = material.clearcoatRoughness;
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
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
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
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,zf=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
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
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,Hf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$f=`#if defined( USE_POINTS_UV )
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
#endif`,Kf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ep=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,np=`#ifdef USE_MORPHTARGETS
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
#endif`,ip=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cp=`#ifdef USE_NORMALMAP
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
#endif`,hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,up=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_p=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ep=`float getShadowMask() {
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
}`,Ap=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tp=`#ifdef USE_SKINNING
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
#endif`,Cp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rp=`#ifdef USE_SKINNING
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
#endif`,Ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dp=`#ifdef USE_TRANSMISSION
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
#endif`,Np=`#ifdef USE_TRANSMISSION
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
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vp=`uniform sampler2D t2D;
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
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`#include <common>
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
}`,Yp=`#if DEPTH_PACKING == 3200
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
}`,Zp=`#define DISTANCE
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
}`,Jp=`#define DISTANCE
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`uniform float scale;
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
}`,jp=`uniform vec3 diffuse;
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
}`,tm=`#include <common>
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
}`,em=`uniform vec3 diffuse;
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
}`,nm=`#define LAMBERT
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
}`,im=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,sm=`#define MATCAP
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
}`,rm=`#define MATCAP
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
}`,am=`#define NORMAL
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
}`,om=`#define NORMAL
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
}`,lm=`#define PHONG
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
}`,cm=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,hm=`#define STANDARD
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
}`,um=`#define STANDARD
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
#include <cube_uv_reflection_fragment>
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
}`,dm=`#define TOON
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
}`,fm=`#define TOON
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
}`,pm=`uniform float size;
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
}`,mm=`uniform vec3 diffuse;
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
}`,gm=`#include <common>
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
}`,_m=`uniform vec3 color;
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
}`,xm=`uniform float rotation;
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
}`,vm=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:zd,alphahash_pars_fragment:kd,alphamap_fragment:Vd,alphamap_pars_fragment:Gd,alphatest_fragment:Hd,alphatest_pars_fragment:qd,aomap_fragment:Wd,aomap_pars_fragment:Xd,batching_pars_vertex:Yd,batching_vertex:Zd,begin_vertex:Jd,beginnormal_vertex:$d,bsdfs:Kd,iridescence_fragment:Qd,bumpmap_pars_fragment:jd,clipping_planes_fragment:tf,clipping_planes_pars_fragment:ef,clipping_planes_pars_vertex:nf,clipping_planes_vertex:sf,color_fragment:rf,color_pars_fragment:af,color_pars_vertex:of,color_vertex:lf,common:cf,cube_uv_reflection_fragment:hf,defaultnormal_vertex:uf,displacementmap_pars_vertex:df,displacementmap_vertex:ff,emissivemap_fragment:pf,emissivemap_pars_fragment:mf,colorspace_fragment:gf,colorspace_pars_fragment:_f,envmap_fragment:xf,envmap_common_pars_fragment:vf,envmap_pars_fragment:yf,envmap_pars_vertex:Mf,envmap_physical_pars_fragment:Lf,envmap_vertex:Sf,fog_vertex:bf,fog_pars_vertex:wf,fog_fragment:Ef,fog_pars_fragment:Af,gradientmap_pars_fragment:Tf,lightmap_pars_fragment:Cf,lights_lambert_fragment:Rf,lights_lambert_pars_fragment:If,lights_pars_begin:Pf,lights_toon_fragment:Ff,lights_toon_pars_fragment:Df,lights_phong_fragment:Nf,lights_phong_pars_fragment:Uf,lights_physical_fragment:Bf,lights_physical_pars_fragment:Of,lights_fragment_begin:zf,lights_fragment_maps:kf,lights_fragment_end:Vf,lightprobes_pars_fragment:Gf,logdepthbuf_fragment:Hf,logdepthbuf_pars_fragment:qf,logdepthbuf_pars_vertex:Wf,logdepthbuf_vertex:Xf,map_fragment:Yf,map_pars_fragment:Zf,map_particle_fragment:Jf,map_particle_pars_fragment:$f,metalnessmap_fragment:Kf,metalnessmap_pars_fragment:Qf,morphinstance_vertex:jf,morphcolor_vertex:tp,morphnormal_vertex:ep,morphtarget_pars_vertex:np,morphtarget_vertex:ip,normal_fragment_begin:sp,normal_fragment_maps:rp,normal_pars_fragment:ap,normal_pars_vertex:op,normal_vertex:lp,normalmap_pars_fragment:cp,clearcoat_normal_fragment_begin:hp,clearcoat_normal_fragment_maps:up,clearcoat_pars_fragment:dp,iridescence_pars_fragment:fp,opaque_fragment:pp,packing:mp,premultiplied_alpha_fragment:gp,project_vertex:_p,dithering_fragment:xp,dithering_pars_fragment:vp,roughnessmap_fragment:yp,roughnessmap_pars_fragment:Mp,shadowmap_pars_fragment:Sp,shadowmap_pars_vertex:bp,shadowmap_vertex:wp,shadowmask_pars_fragment:Ep,skinbase_vertex:Ap,skinning_pars_vertex:Tp,skinning_vertex:Cp,skinnormal_vertex:Rp,specularmap_fragment:Ip,specularmap_pars_fragment:Pp,tonemapping_fragment:Lp,tonemapping_pars_fragment:Fp,transmission_fragment:Dp,transmission_pars_fragment:Np,uv_pars_fragment:Up,uv_pars_vertex:Bp,uv_vertex:Op,worldpos_vertex:zp,background_vert:kp,background_frag:Vp,backgroundCube_vert:Gp,backgroundCube_frag:Hp,cube_vert:qp,cube_frag:Wp,depth_vert:Xp,depth_frag:Yp,distance_vert:Zp,distance_frag:Jp,equirect_vert:$p,equirect_frag:Kp,linedashed_vert:Qp,linedashed_frag:jp,meshbasic_vert:tm,meshbasic_frag:em,meshlambert_vert:nm,meshlambert_frag:im,meshmatcap_vert:sm,meshmatcap_frag:rm,meshnormal_vert:am,meshnormal_frag:om,meshphong_vert:lm,meshphong_frag:cm,meshphysical_vert:hm,meshphysical_frag:um,meshtoon_vert:dm,meshtoon_frag:fm,points_vert:pm,points_frag:mm,shadow_vert:gm,shadow_frag:_m,sprite_vert:xm,sprite_frag:vm},St={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},bn={basic:{uniforms:Ne([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Ne([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Ne([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Ne([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Ne([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new qt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Ne([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Ne([St.points,St.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Ne([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Ne([St.common,St.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Ne([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Ne([St.sprite,St.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:Ne([St.common,St.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:Ne([St.lights,St.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};bn.physical={uniforms:Ne([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var po={r:0,b:0,g:0},ym=new ce,ou=new Xt;ou.set(-1,0,0,0,1,0,0,0,1);function Mm(i,t,e,n,s,r){let a=new qt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(E){let T=E.isScene===!0?E.background:null;if(T&&T.isTexture){let v=E.backgroundBlurriness>0;T=t.get(T,v)}return T}function g(E){let T=!1,v=f(E);v===null?m(a,o):v&&v.isColor&&(m(v,1),T=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(E,T){let v=f(T);v&&(v.isCubeTexture||v.mapping===tr)?(c===void 0&&(c=new pe(new Pe(1,1,1),new Je({name:"BackgroundCubeMaterial",uniforms:Si(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ym.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ou),c.material.toneMapped=ee.getTransfer(v.colorSpace)!==oe,(h!==v||d!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new pe(new vi(2,2),new Je({name:"BackgroundMaterial",uniforms:Si(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ee.getTransfer(v.colorSpace)!==oe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,T){E.getRGB(po,Pl(i)),e.buffers.color.setClear(po.r,po.g,po.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,T=1){a.set(E),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:g,addToRenderList:y,dispose:p}}function Sm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(N,O,H,C,D){let V=!1,q=d(N,C,H,O);r!==q&&(r=q,c(r.object)),V=f(N,C,H,D),V&&g(N,C,H,D),D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,v(N,O,H,C),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function d(N,O,H,C){let D=C.wireframe===!0,V=n[O.id];V===void 0&&(V={},n[O.id]=V);let q=N.isInstancedMesh===!0?N.id:0,ct=V[q];ct===void 0&&(ct={},V[q]=ct);let tt=ct[H.id];tt===void 0&&(tt={},ct[H.id]=tt);let ot=tt[D];return ot===void 0&&(ot=u(l()),tt[D]=ot),ot}function u(N){let O=[],H=[],C=[];for(let D=0;D<e;D++)O[D]=0,H[D]=0,C[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:C,object:N,attributes:{},index:null}}function f(N,O,H,C){let D=r.attributes,V=O.attributes,q=0,ct=H.getAttributes();for(let tt in ct)if(ct[tt].location>=0){let lt=D[tt],Tt=V[tt];if(Tt===void 0&&(tt==="instanceMatrix"&&N.instanceMatrix&&(Tt=N.instanceMatrix),tt==="instanceColor"&&N.instanceColor&&(Tt=N.instanceColor)),lt===void 0||lt.attribute!==Tt||Tt&&lt.data!==Tt.data)return!0;q++}return r.attributesNum!==q||r.index!==C}function g(N,O,H,C){let D={},V=O.attributes,q=0,ct=H.getAttributes();for(let tt in ct)if(ct[tt].location>=0){let lt=V[tt];lt===void 0&&(tt==="instanceMatrix"&&N.instanceMatrix&&(lt=N.instanceMatrix),tt==="instanceColor"&&N.instanceColor&&(lt=N.instanceColor));let Tt={};Tt.attribute=lt,lt&&lt.data&&(Tt.data=lt.data),D[tt]=Tt,q++}r.attributes=D,r.attributesNum=q,r.index=C}function y(){let N=r.newAttributes;for(let O=0,H=N.length;O<H;O++)N[O]=0}function m(N){p(N,0)}function p(N,O){let H=r.newAttributes,C=r.enabledAttributes,D=r.attributeDivisors;H[N]=1,C[N]===0&&(i.enableVertexAttribArray(N),C[N]=1),D[N]!==O&&(i.vertexAttribDivisor(N,O),D[N]=O)}function E(){let N=r.newAttributes,O=r.enabledAttributes;for(let H=0,C=O.length;H<C;H++)O[H]!==N[H]&&(i.disableVertexAttribArray(H),O[H]=0)}function T(N,O,H,C,D,V,q){q===!0?i.vertexAttribIPointer(N,O,H,D,V):i.vertexAttribPointer(N,O,H,C,D,V)}function v(N,O,H,C){y();let D=C.attributes,V=H.getAttributes(),q=O.defaultAttributeValues;for(let ct in V){let tt=V[ct];if(tt.location>=0){let ot=D[ct];if(ot===void 0&&(ct==="instanceMatrix"&&N.instanceMatrix&&(ot=N.instanceMatrix),ct==="instanceColor"&&N.instanceColor&&(ot=N.instanceColor)),ot!==void 0){let lt=ot.normalized,Tt=ot.itemSize,Mt=t.get(ot);if(Mt===void 0)continue;let Zt=Mt.buffer,zt=Mt.type,Yt=Mt.bytesPerElement,rt=zt===i.INT||zt===i.UNSIGNED_INT||ot.gpuType===Ta;if(ot.isInterleavedBufferAttribute){let ut=ot.data,yt=ut.stride,Bt=ot.offset;if(ut.isInstancedInterleavedBuffer){for(let bt=0;bt<tt.locationSize;bt++)p(tt.location+bt,ut.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let bt=0;bt<tt.locationSize;bt++)m(tt.location+bt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let bt=0;bt<tt.locationSize;bt++)T(tt.location+bt,Tt/tt.locationSize,zt,lt,yt*Yt,(Bt+Tt/tt.locationSize*bt)*Yt,rt)}else{if(ot.isInstancedBufferAttribute){for(let ut=0;ut<tt.locationSize;ut++)p(tt.location+ut,ot.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let ut=0;ut<tt.locationSize;ut++)m(tt.location+ut);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let ut=0;ut<tt.locationSize;ut++)T(tt.location+ut,Tt/tt.locationSize,zt,lt,Tt*Yt,Tt/tt.locationSize*ut*Yt,rt)}}else if(q!==void 0){let lt=q[ct];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(tt.location,lt);break;case 3:i.vertexAttrib3fv(tt.location,lt);break;case 4:i.vertexAttrib4fv(tt.location,lt);break;default:i.vertexAttrib1fv(tt.location,lt)}}}}E()}function A(){b();for(let N in n){let O=n[N];for(let H in O){let C=O[H];for(let D in C){let V=C[D];for(let q in V)h(V[q].object),delete V[q];delete C[D]}}delete n[N]}}function w(N){if(n[N.id]===void 0)return;let O=n[N.id];for(let H in O){let C=O[H];for(let D in C){let V=C[D];for(let q in V)h(V[q].object),delete V[q];delete C[D]}}delete n[N.id]}function P(N){for(let O in n){let H=n[O];for(let C in H){let D=H[C];if(D[N.id]===void 0)continue;let V=D[N.id];for(let q in V)h(V[q].object),delete V[q];delete D[N.id]}}}function _(N){for(let O in n){let H=n[O],C=N.isInstancedMesh===!0?N.id:0,D=H[C];if(D!==void 0){for(let V in D){let q=D[V];for(let ct in q)h(q[ct].object),delete q[ct];delete D[V]}delete H[C],Object.keys(H).length===0&&delete n[O]}}}function b(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:m,disableUnusedAttributes:E}}function bm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function wm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==nn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let _=P===dn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==We&&P!==en&&!_&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Vt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:v,maxSamples:A,samples:w}}function Em(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Ze,o=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:n,T=E*4,v=p.clippingState||null;l.value=v,v=h(g,u,T,f);for(let A=0;A!==T;++A)v[A]=e[A];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,v=f;T!==y;++T,v+=4)a.copy(d[T]).applyMatrix4(E,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var as=4,Am=6,Tm=20,Cm=256,lr=new ii,zh=new qt,kl=null,Vl=0,Gl=0,Hl=!1,Rm=new F,bi=new F,go=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Rm}=r;kl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(kl,Vl,Gl),this._renderer.xr.enabled=Hl,t.scissorTest=!1,rs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ri||t.mapping===Mi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ie,minFilter:Ie,generateMipmaps:!1,type:dn,format:nn,colorSpace:Ms,depthBuffer:!1},s=kh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Im(r)),this._blurMaterial=Lm(r,t,e),this._ggxMaterial=Pm(r,t,e)}return s}_compileMaterial(t){let e=new pe(new we,t);this._renderer.compile(e,lr)}_sceneToCubeUV(t,e,n,s,r){let l=new Me(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(zh),d.toneMapping=hn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pe(new Pe,new qe({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,E=t.background;E?E.isColor&&(m.color.copy(E),t.background=null,p=!0):(m.color.copy(zh),p=!0);for(let T=0;T<6;T++){let v=T%3;v===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):v===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));let A=this._cubeSize;rs(s,v*A,T>2?A:0,A,A),d.setRenderTarget(s),p&&d.render(y,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ri||t.mapping===Mi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;rs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,lr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-as?n-g+as:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,rs(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(o,lr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,rs(t,m,p,3*y,2*y),s.setRenderTarget(t),s.render(o,lr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-as?s-this._lodMax+as:0),u=4*(this._cubeSize-h);rs(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,lr)}};function Im(i){let t=[],e=[],n=i,s=i-as+1+Am;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),y=new Float32Array(f*u*d);for(let p=0;p<d;p++){let E=p%3*2/3-1,T=p>2?0:-1,v=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];g.set(v,f*u*p);for(let A=0;A<u;A++){let w=h[A*2]*2-1,P=h[A*2+1]*2-1;p===0?bi.set(1,P,w):p===1?bi.set(-w,1,-P):p===2?bi.set(-w,P,1):p===3?bi.set(-1,P,-w):p===4?bi.set(-w,-1,P):bi.set(w,P,-1),bi.toArray(y,(p*u+A)*f)}}let m=new we;m.setAttribute("position",new Be(g,f)),m.setAttribute("outputDirection",new Be(y,f)),e.push(new pe(m,null)),n>as&&n--}return{lodMeshes:e,sizeLods:t}}function kh(i,t,e){let n=new He(i,t,e);return n.texture.mapping=tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Pm(i,t,e){return new Je({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Cm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Lm(i,t,e){return new Je({name:"SphericalGaussianBlur",defines:{SAMPLES:Tm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

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

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Vh(){return new Je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Gh(){return new Je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function xo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var _o=class extends He{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Rs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pe(5,5,5),r=new Je({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:Mn});r.uniforms.tEquirect.value=e;let a=new pe(s,r),o=e.minFilter;return e.minFilter===ai&&(e.minFilter=Ie),new ya(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Fm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===wa||f===Ea)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new _o(g.height);return y.fromEquirectangularTexture(i,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===wa||f===Ea,y=f===ri||f===Mi;if(g||y){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new go(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let E=u.image;return g&&E&&E.height>0||y&&E&&l(E)?(n===null&&(n=new go(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===wa?u.mapping=ri:f===Ea&&(u.mapping=Mi),u}function l(u){let f=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Dm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&mi("WebGLRenderer: "+n+" extension not supported."),s}}}function Nm(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(f!==null){let E=f.array;y=f.version;for(let T=0,v=E.length;T<v;T+=3){let A=E[T+0],w=E[T+1],P=E[T+2];u.push(A,w,w,P,P,A)}}else{let E=g.array;y=g.version;for(let T=0,v=E.length/3-1;T<v;T+=3){let A=T+0,w=T+1,P=T+2;u.push(A,w,w,P,P,A)}}let m=new(g.count>=65535?As:Es)(u,1);m.version=y;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Um(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=u[m];e.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Bm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Ht("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Om(i,t,e){let n=new WeakMap,s=new ge;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let b=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],T=0;f===!0&&(T=1),g===!0&&(T=2),y===!0&&(T=3);let v=o.attributes.position.count*T,A=1;v>t.maxTextureSize&&(A=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*A*4*d),P=new ws(w,v,A,d);P.type=en,P.needsUpdate=!0;let _=T*4;for(let I=0;I<d;I++){let N=m[I],O=p[I],H=E[I],C=v*A*4*I;for(let D=0;D<N.count;D++){let V=D*_;f===!0&&(s.fromBufferAttribute(N,D),w[C+V+0]=s.x,w[C+V+1]=s.y,w[C+V+2]=s.z,w[C+V+3]=0),g===!0&&(s.fromBufferAttribute(O,D),w[C+V+4]=s.x,w[C+V+5]=s.y,w[C+V+6]=s.z,w[C+V+7]=0),y===!0&&(s.fromBufferAttribute(H,D),w[C+V+8]=s.x,w[C+V+9]=s.y,w[C+V+10]=s.z,w[C+V+11]=H.itemSize===4?s.w:1)}}u={count:d,texture:P,size:new vt(v,A)},n.set(o,u),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function zm(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var km={[pl]:"LINEAR_TONE_MAPPING",[ml]:"REINHARD_TONE_MAPPING",[gl]:"CINEON_TONE_MAPPING",[_l]:"ACES_FILMIC_TONE_MAPPING",[vl]:"AGX_TONE_MAPPING",[yl]:"NEUTRAL_TONE_MAPPING",[xl]:"CUSTOM_TONE_MAPPING"};function Vm(i,t,e,n,s,r){let a=new He(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new we;c.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new re([0,2,0,0,2,0],2));let h=new la({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new pe(c,h),u=new ii(-1,1,1,-1,0,1),f=null,g=null,y=!1,m,p=null,E=[],T=!1;this.setSize=function(v,A){a.setSize(v,A),o!==null&&o.setSize(v,A),l!==null&&l.setSize(v,A);for(let w=0;w<E.length;w++){let P=E[w];P.setSize&&P.setSize(v,A)}},this.setEffects=function(v){E=v,T=E.length>0&&E[0].isRenderPass===!0;let A=a.width,w=a.height;E.length>0&&o===null&&(o=new He(A,w,{type:dn,depthBuffer:!1,stencilBuffer:!1}),l=new He(A,w,{type:dn,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<E.length;P++){let _=E[P];_.setSize&&_.setSize(A,w)}},this.begin=function(v,A){if(y||v.toneMapping===hn&&E.length===0)return!1;if(p=A,A!==null){let w=A.width,P=A.height;(a.width!==w||a.height!==P)&&this.setSize(w,P)}return T===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=hn,!0},this.hasRenderPass=function(){return T},this.end=function(v,A){v.toneMapping=m,y=!0;let w=a,P=o;for(let _=0;_<E.length;_++){let b=E[_];b.enabled!==!1&&(b.render(v,P,w,A),b.needsSwap!==!1&&(w=P,P=P===o?l:o))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,h.defines={},ee.getTransfer(f)===oe&&(h.defines.SRGB_TRANSFER="");let _=km[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(p),v.render(d,u),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var lu=new ze,Xl=new Kn(1,1),cu=new ws,hu=new ea,uu=new Rs,Hh=[],qh=[],Wh=new Float32Array(16),Xh=new Float32Array(9),Yh=new Float32Array(4);function ls(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Hh[s];if(r===void 0&&(r=new Float32Array(s),Hh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function vo(i,t){let e=qh[t];e===void 0&&(e=new Int32Array(t),qh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Gm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Hm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function Wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function Xm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Ee(e,n))return;Yh.set(n),i.uniformMatrix2fv(this.addr,!1,Yh),Ae(e,n)}}function Ym(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Ee(e,n))return;Xh.set(n),i.uniformMatrix3fv(this.addr,!1,Xh),Ae(e,n)}}function Zm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Ee(e,n))return;Wh.set(n),i.uniformMatrix4fv(this.addr,!1,Wh),Ae(e,n)}}function Jm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function $m(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function Km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function Qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function jm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function t0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function e0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function n0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function i0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xl.compareFunction=e.isReversedDepthBuffer()?fo:uo,r=Xl):r=lu,e.setTexture2D(t||r,s)}function s0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||hu,s)}function r0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||uu,s)}function a0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||cu,s)}function o0(i){switch(i){case 5126:return Gm;case 35664:return Hm;case 35665:return qm;case 35666:return Wm;case 35674:return Xm;case 35675:return Ym;case 35676:return Zm;case 5124:case 35670:return Jm;case 35667:case 35671:return $m;case 35668:case 35672:return Km;case 35669:case 35673:return Qm;case 5125:return jm;case 36294:return t0;case 36295:return e0;case 36296:return n0;case 35678:case 36198:case 36298:case 36306:case 35682:return i0;case 35679:case 36299:case 36307:return s0;case 35680:case 36300:case 36308:case 36293:return r0;case 36289:case 36303:case 36311:case 36292:return a0}}function l0(i,t){i.uniform1fv(this.addr,t)}function c0(i,t){let e=ls(t,this.size,2);i.uniform2fv(this.addr,e)}function h0(i,t){let e=ls(t,this.size,3);i.uniform3fv(this.addr,e)}function u0(i,t){let e=ls(t,this.size,4);i.uniform4fv(this.addr,e)}function d0(i,t){let e=ls(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function f0(i,t){let e=ls(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function p0(i,t){let e=ls(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function m0(i,t){i.uniform1iv(this.addr,t)}function g0(i,t){i.uniform2iv(this.addr,t)}function _0(i,t){i.uniform3iv(this.addr,t)}function x0(i,t){i.uniform4iv(this.addr,t)}function v0(i,t){i.uniform1uiv(this.addr,t)}function y0(i,t){i.uniform2uiv(this.addr,t)}function M0(i,t){i.uniform3uiv(this.addr,t)}function S0(i,t){i.uniform4uiv(this.addr,t)}function b0(i,t,e){let n=this.cache,s=t.length,r=vo(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Xl:a=lu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function w0(i,t,e){let n=this.cache,s=t.length,r=vo(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||hu,r[a])}function E0(i,t,e){let n=this.cache,s=t.length,r=vo(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||uu,r[a])}function A0(i,t,e){let n=this.cache,s=t.length,r=vo(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||cu,r[a])}function T0(i){switch(i){case 5126:return l0;case 35664:return c0;case 35665:return h0;case 35666:return u0;case 35674:return d0;case 35675:return f0;case 35676:return p0;case 5124:case 35670:return m0;case 35667:case 35671:return g0;case 35668:case 35672:return _0;case 35669:case 35673:return x0;case 5125:return v0;case 36294:return y0;case 36295:return M0;case 36296:return S0;case 35678:case 36198:case 36298:case 36306:case 35682:return b0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return A0}}var Yl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=o0(e.type)}},Zl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=T0(e.type)}},Jl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ql=/(\w+)(\])?(\[|\.)?/g;function Zh(i,t){i.seq.push(t),i.map[t.id]=t}function C0(i,t,e){let n=i.name,s=n.length;for(ql.lastIndex=0;;){let r=ql.exec(n),a=ql.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Zh(e,c===void 0?new Yl(o,i,t):new Zl(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Jl(o),Zh(e,d)),e=d}}}var os=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);C0(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Jh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var R0=37297,I0=0;function P0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var $h=new Xt;function L0(i){ee._getMatrix($h,ee.workingColorSpace,i);let t=`mat3( ${$h.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case Ss:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Kh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+P0(i.getShaderSource(t),o)}else return r}function F0(i,t){let e=L0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var D0={[pl]:"Linear",[ml]:"Reinhard",[gl]:"Cineon",[_l]:"ACESFilmic",[vl]:"AgX",[yl]:"Neutral",[xl]:"Custom"};function N0(i,t){let e=D0[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var mo=new F;function U0(){ee.getLuminanceCoefficients(mo);let i=mo.x.toFixed(4),t=mo.y.toFixed(4),e=mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function O0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function z0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function hr(i){return i!==""}function Qh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var k0=/^[ \t]*#include +<([\w\d./]+)>/gm;function $l(i){return i.replace(k0,G0)}var V0=new Map;function G0(i,t){let e=Kt[t];if(e===void 0){let n=V0.get(t);if(n!==void 0)e=Kt[n],Vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return $l(e)}var H0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tu(i){return i.replace(H0,q0)}function q0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function eu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var W0={[js]:"SHADOWMAP_TYPE_PCF",[ji]:"SHADOWMAP_TYPE_VSM"};function X0(i){return W0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Y0={[ri]:"ENVMAP_TYPE_CUBE",[Mi]:"ENVMAP_TYPE_CUBE",[tr]:"ENVMAP_TYPE_CUBE_UV"};function Z0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Y0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var J0={[Mi]:"ENVMAP_MODE_REFRACTION"};function $0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":J0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var K0={[fl]:"ENVMAP_BLENDING_MULTIPLY",[ph]:"ENVMAP_BLENDING_MIX",[mh]:"ENVMAP_BLENDING_ADD"};function Q0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":K0[i.combine]||"ENVMAP_BLENDING_NONE"}function j0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function tg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=X0(e),c=Z0(e),h=$0(e),d=Q0(e),u=j0(e),f=B0(e),g=O0(r),y=s.createProgram(),m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hr).join(`
`),p.length>0&&(p+=`
`)):(m=[eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),p=[eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hn?"#define TONE_MAPPING":"",e.toneMapping!==hn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==hn?N0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,F0("linearToOutputTexel",e.outputColorSpace),U0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hr).join(`
`)),a=$l(a),a=Qh(a,e),a=jh(a,e),o=$l(o),o=Qh(o,e),o=jh(o,e),a=tu(a),o=tu(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=E+m+a,v=E+p+o,A=Jh(s,s.VERTEX_SHADER,T),w=Jh(s,s.FRAGMENT_SHADER,v);s.attachShader(y,A),s.attachShader(y,w),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function P(N){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(y)||"",H=s.getShaderInfoLog(A)||"",C=s.getShaderInfoLog(w)||"",D=O.trim(),V=H.trim(),q=C.trim(),ct=!0,tt=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ct=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,A,w);else{let ot=Kh(s,A,"vertex"),lt=Kh(s,w,"fragment");Ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+D+`
`+ot+`
`+lt)}else D!==""?Vt("WebGLProgram: Program Info Log:",D):(V===""||q==="")&&(tt=!1);tt&&(N.diagnostics={runnable:ct,programLog:D,vertexShader:{log:V,prefix:m},fragmentShader:{log:q,prefix:p}})}s.deleteShader(A),s.deleteShader(w),_=new os(s,y),b=z0(s,y)}let _;this.getUniforms=function(){return _===void 0&&P(this),_};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(y,R0)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=I0++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=w,this}var eg=0,Kl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ql(t),e.set(t,n)),n}},Ql=class{constructor(t){this.id=eg++,this.code=t,this.usedTimes=0}};function ng(i){return i===li||i===ar||i===or}function ig(i,t,e,n,s,r){let a=new Wi,o=new Kl,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,b,I,N,O,H){let C=N.fog,D=O.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?N.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ct=t.get(_.envMap||V,q),tt=ct&&ct.mapping===tr?ct.image.height:null,ot=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Vt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let lt=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Tt=lt!==void 0?lt.length:0,Mt=0;D.morphAttributes.position!==void 0&&(Mt=1),D.morphAttributes.normal!==void 0&&(Mt=2),D.morphAttributes.color!==void 0&&(Mt=3);let Zt,zt,Yt,rt;if(ot){let ne=bn[ot];Zt=ne.vertexShader,zt=ne.fragmentShader}else{Zt=_.vertexShader,zt=_.fragmentShader;let ne=o.getVertexShaderStage(_),ie=o.getFragmentShaderStage(_);o.update(_,ne,ie),Yt=ne.id,rt=ie.id}let ut=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),Bt=O.isInstancedMesh===!0,bt=O.isBatchedMesh===!0,kt=!!_.map,Jt=!!_.matcap,ht=!!ct,dt=!!_.aoMap,mt=!!_.lightMap,gt=!!_.bumpMap&&_.wireframe===!1,xt=!!_.normalMap,Nt=!!_.displacementMap,Lt=!!_.emissiveMap,Ot=!!_.metalnessMap,Gt=!!_.roughnessMap,U=_.anisotropy>0,Qt=_.clearcoat>0,Wt=_.dispersion>0,R=_.retroreflectivity>0,x=_.iridescence>0,G=_.sheen>0,Z=_.transmission>0,it=U&&!!_.anisotropyMap,_t=Qt&&!!_.clearcoatMap,X=Qt&&!!_.clearcoatNormalMap,Y=Qt&&!!_.clearcoatRoughnessMap,K=x&&!!_.iridescenceMap,ft=x&&!!_.iridescenceThicknessMap,Et=G&&!!_.sheenColorMap,L=G&&!!_.sheenRoughnessMap,B=!!_.specularMap,k=!!_.specularColorMap,et=!!_.specularIntensityMap,j=Z&&!!_.transmissionMap,S=Z&&!!_.thicknessMap,Q=!!_.gradientMap,W=!!_.alphaMap,at=_.alphaTest>0,pt=!!_.alphaHash,st=!!_.extensions,Pt=hn;_.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Pt=i.toneMapping);let Ct={shaderID:ot,shaderType:_.type,shaderName:_.name,vertexShader:Zt,fragmentShader:zt,defines:_.defines,customVertexShaderID:Yt,customFragmentShaderID:rt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:bt,batchingColor:bt&&O._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&O.instanceColor!==null,instancingMorph:Bt&&O.morphTexture!==null,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:kt,matcap:Jt,envMap:ht,envMapMode:ht&&ct.mapping,envMapCubeUVHeight:tt,aoMap:dt,lightMap:mt,bumpMap:gt,normalMap:xt,displacementMap:Nt,emissiveMap:Lt,normalMapObjectSpace:xt&&_.normalMapType===xh,normalMapTangentSpace:xt&&_.normalMapType===ho,packedNormalMap:xt&&_.normalMapType===ho&&ng(_.normalMap.format),metalnessMap:Ot,roughnessMap:Gt,anisotropy:U,anisotropyMap:it,clearcoat:Qt,clearcoatMap:_t,clearcoatNormalMap:X,clearcoatRoughnessMap:Y,dispersion:Wt,retroreflection:R,iridescence:x,iridescenceMap:K,iridescenceThicknessMap:ft,sheen:G,sheenColorMap:Et,sheenRoughnessMap:L,specularMap:B,specularColorMap:k,specularIntensityMap:et,transmission:Z,transmissionMap:j,thicknessMap:S,gradientMap:Q,opaque:_.transparent===!1&&_.blending===ts&&_.alphaToCoverage===!1,alphaMap:W,alphaTest:at,alphaHash:pt,combine:_.combine,mapUv:kt&&g(_.map.channel),aoMapUv:dt&&g(_.aoMap.channel),lightMapUv:mt&&g(_.lightMap.channel),bumpMapUv:gt&&g(_.bumpMap.channel),normalMapUv:xt&&g(_.normalMap.channel),displacementMapUv:Nt&&g(_.displacementMap.channel),emissiveMapUv:Lt&&g(_.emissiveMap.channel),metalnessMapUv:Ot&&g(_.metalnessMap.channel),roughnessMapUv:Gt&&g(_.roughnessMap.channel),anisotropyMapUv:it&&g(_.anisotropyMap.channel),clearcoatMapUv:_t&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:X&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:L&&g(_.sheenRoughnessMap.channel),specularMapUv:B&&g(_.specularMap.channel),specularColorMapUv:k&&g(_.specularColorMap.channel),specularIntensityMapUv:et&&g(_.specularIntensityMap.channel),transmissionMapUv:j&&g(_.transmissionMap.channel),thicknessMapUv:S&&g(_.thicknessMap.channel),alphaMapUv:W&&g(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(xt||U),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!D.attributes.uv&&(kt||W),fog:!!C,useFog:_.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&xt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:yt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Mt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pt,decodeVideoTexture:kt&&_.map.isVideoTexture===!0&&ee.getTransfer(_.map.colorSpace)===oe,decodeVideoTextureEmissive:Lt&&_.emissiveMap.isVideoTexture===!0&&ee.getTransfer(_.emissiveMap.colorSpace)===oe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===tn,flipSided:_.side===Ve,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:st&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&_.extensions.multiDraw===!0||bt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function m(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)b.push(I),b.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(p(b,_),E(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function E(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function T(_){let b=f[_.type],I;if(b){let N=bn[b];I=Uh.clone(N.uniforms)}else I=_.uniforms;return I}function v(_,b){let I=h.get(b);return I!==void 0?++I.usedTimes:(I=new tg(i,b,_,s),c.push(I),h.set(b,I)),I}function A(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function P(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:T,acquireProgram:v,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:P}}function sg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function rg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function nu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function iu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,y,m,p){let E=i[t];return E===void 0?(E={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},i[t]=E):(E.id=u.id,E.object=u,E.geometry=f,E.material=g,E.materialVariant=a(u),E.groupOrder=y,E.renderOrder=u.renderOrder,E.z=m,E.group=p),t++,E}function l(u,f,g,y,m,p,E){E.reversedDepth===!0&&(m=-m);let T=o(u,f,g,y,m,p);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):e.push(T)}function c(u,f,g,y,m,p){let E=o(u,f,g,y,m,p);g.transmission>0?n.unshift(E):g.transparent===!0?s.unshift(E):e.unshift(E)}function h(u,f){e.length>1&&e.sort(u||rg),n.length>1&&n.sort(f||nu),s.length>1&&s.sort(f||nu)}function d(){for(let u=t,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function ag(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new iu,i.set(n,[a])):s>=r.length?(a=new iu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function og(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new qt};break;case"SpotLight":e={position:new F,direction:new F,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function lg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var cg=0;function hg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ug(i){let t=new og,e=lg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new ce,a=new ce;function o(c){let h=0,d=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,E=0,T=0,v=0,A=0,w=0,P=0,_=0,b=0,I=0;c.sort(hg);for(let O=0,H=c.length;O<H;O++){let C=c[O],D=C.color,V=C.intensity,q=C.distance,ct=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===li?ct=C.shadow.map.texture:ct=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=D.r*V,d+=D.g*V,u+=D.b*V;else if(C.isLightProbe){for(let tt=0;tt<9;tt++)n.probe[tt].addScaledVector(C.sh.coefficients[tt],V);I++}else if(C.isSunLight){let tt=t.get(C);if(tt.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let ot=C.shadow,lt=e.get(C);lt.shadowIntensity=ot.intensity,lt.shadowBias=ot.bias,lt.shadowNormalBias=ot.normalBias,lt.shadowRadius=ot.radius,lt.shadowMapSize.copy(ot.mapSize).multiply(ot.getFrameExtents()),n.sunShadow[g]=lt,n.sunShadowMap[g]=ct;let Tt=ot.getViewportCount();for(let Mt=0;Mt<Tt;Mt++)n.sunShadowMatrix[y+Mt]=ot.getMatrix(Mt),n.sunShadowCascade[y+Mt]=ot._cascadeData[Mt];y+=Tt,g++}n.sun[f]=tt,f++}else if(C.isDirectionalLight){let tt=t.get(C);if(tt.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let ot=C.shadow,lt=e.get(C);lt.shadowIntensity=ot.intensity,lt.shadowBias=ot.bias,lt.shadowNormalBias=ot.normalBias,lt.shadowRadius=ot.radius,lt.shadowMapSize=ot.mapSize,n.directionalShadow[m]=lt,n.directionalShadowMap[m]=ct,n.directionalShadowMatrix[m]=C.shadow.matrix,A++}n.directional[m]=tt,m++}else if(C.isSpotLight){let tt=t.get(C);tt.position.setFromMatrixPosition(C.matrixWorld),tt.color.copy(D).multiplyScalar(V),tt.distance=q,tt.coneCos=Math.cos(C.angle),tt.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),tt.decay=C.decay,n.spot[E]=tt;let ot=C.shadow;if(C.map&&(n.spotLightMap[_]=C.map,_++,ot.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[E]=ot.matrix,C.castShadow){let lt=e.get(C);lt.shadowIntensity=ot.intensity,lt.shadowBias=ot.bias,lt.shadowNormalBias=ot.normalBias,lt.shadowRadius=ot.radius,lt.shadowMapSize=ot.mapSize,n.spotShadow[E]=lt,n.spotShadowMap[E]=ct,P++}E++}else if(C.isRectAreaLight){let tt=t.get(C);tt.color.copy(D).multiplyScalar(V),tt.halfWidth.set(C.width*.5,0,0),tt.halfHeight.set(0,C.height*.5,0),n.rectArea[T]=tt,T++}else if(C.isPointLight){let tt=t.get(C);if(tt.color.copy(C.color).multiplyScalar(C.intensity),tt.distance=C.distance,tt.decay=C.decay,C.castShadow){let ot=C.shadow,lt=e.get(C);lt.shadowIntensity=ot.intensity,lt.shadowBias=ot.bias,lt.shadowNormalBias=ot.normalBias,lt.shadowRadius=ot.radius,lt.shadowMapSize=ot.mapSize,lt.shadowCameraNear=ot.camera.near,lt.shadowCameraFar=ot.camera.far,n.pointShadow[p]=lt,n.pointShadowMap[p]=ct,n.pointShadowMatrix[p]=C.shadow.matrix,w++}n.point[p]=tt,p++}else if(C.isHemisphereLight){let tt=t.get(C);tt.skyColor.copy(C.color).multiplyScalar(V),tt.groundColor.copy(C.groundColor).multiplyScalar(V),n.hemi[v]=tt,v++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let N=n.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==E||N.rectAreaLength!==T||N.hemiLength!==v||N.numSunShadows!==g||N.numDirectionalShadows!==A||N.numPointShadows!==w||N.numSpotShadows!==P||N.numSpotMaps!==_||N.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=m,n.spot.length=E,n.rectArea.length=T,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+_-b,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=I,N.sunLength=f,N.directionalLength=m,N.pointLength=p,N.spotLength=E,N.rectAreaLength=T,N.hemiLength=v,N.numSunShadows=g,N.numDirectionalShadows=A,N.numPointShadows=w,N.numSpotShadows=P,N.numSpotMaps=_,N.numLightProbes=I,n.version=cg++)}function l(c,h){let d=0,u=0,f=0,g=0,y=0,m=0,p=h.matrixWorldInverse;for(let E=0,T=c.length;E<T;E++){let v=c[E];if(v.isSunLight){let A=n.sun[d];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(p),d++}else if(v.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),u++}else if(v.isSpotLight){let A=n.spot[g];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let A=n.rectArea[y];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(v.width*.5,0,0),A.halfHeight.set(0,v.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let A=n.point[f];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let A=n.hemi[m];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function su(i){let t=new ug(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function dg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new su(i),t.set(s,[o])):r>=a.length?(o=new su(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pg=`uniform sampler2D shadow_pass;
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
}`,mg=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],gg=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],ru=new ce,cr=new F,Wl=new F;function _g(i,t,e){let n=new Zi,s=new vt,r=new vt,a=new ge,o=new ca,l=new ha,c={},h=e.maxTextureSize,d={[si]:Ve,[Ve]:si,[tn]:tn},u=new Je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:fg,fragmentShader:pg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new we;g.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new pe(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=js;let p=this.type;this.render=function(w,P,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Jc&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=js);let b=i.getRenderTarget(),I=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Mn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let H=p!==this.type;H&&P.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(D=>D.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,D=w.length;C<D;C++){let V=w[C],q=V.shadow;if(q===void 0){Vt("WebGLShadowMap:",V,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let ct=q.getFrameExtents();s.multiply(ct),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,q.mapSize.y=r.y));let tt=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=tt,q.map===null||H===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===ji){if(V.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new He(s.x,s.y,{format:li,type:dn,minFilter:Ie,magFilter:Ie,generateMipmaps:!1}),q.map.texture.name=V.name+".shadowMap",q.map.depthTexture=new Kn(s.x,s.y,en),q.map.depthTexture.name=V.name+".shadowMapDepth",q.map.depthTexture.format=_n,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Re,q.map.depthTexture.magFilter=Re}else V.isPointLight?(q.map=new _o(s.x),q.map.depthTexture=new na(s.x,un)):(q.map=new He(s.x,s.y),q.map.depthTexture=new Kn(s.x,s.y,un)),q.map.depthTexture.name=V.name+".shadowMap",q.map.depthTexture.format=_n,this.type===js?(q.map.depthTexture.compareFunction=tt?fo:uo,q.map.depthTexture.minFilter=Ie,q.map.depthTexture.magFilter=Ie):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Re,q.map.depthTexture.magFilter=Re);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let ot=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();V.isPointLight!==!0&&q.updateMatrices(V,_);for(let lt=0;lt<ot;lt++){let Tt=q.getCamera(lt);if(V.isPointLight){let Mt=q.camera,Zt=q.matrix,zt=V.distance||Mt.far;zt!==Mt.far&&(Mt.far=zt,Mt.updateProjectionMatrix()),cr.setFromMatrixPosition(V.matrixWorld),Mt.position.copy(cr),Wl.copy(Mt.position),Wl.add(mg[lt]),Mt.up.copy(gg[lt]),Mt.lookAt(Wl),Mt.updateMatrixWorld(),Zt.makeTranslation(-cr.x,-cr.y,-cr.z),ru.multiplyMatrices(Mt.projectionMatrix,Mt.matrixWorldInverse),q._frustum.setFromProjectionMatrix(ru,Mt.coordinateSystem,Mt.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,lt),i.clear();else{lt===0&&(i.setRenderTarget(q.map),i.clear());let Mt=q.getViewport(lt);a.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),O.viewport(a)}n=q.getFrustum(lt),v(P,_,Tt,V,this.type)}q.isPointLightShadow!==!0&&this.type===ji&&E(q,_),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,I,N)};function E(w,P){let _=t.update(y);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new He(s.x,s.y,{format:li,type:dn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(P,null,_,u,y,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(P,null,_,f,y,null)}function T(w,P,_,b){let I=null,N=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)I=N;else if(I=_.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let O=I.uuid,H=P.uuid,C=c[O];C===void 0&&(C={},c[O]=C);let D=C[H];D===void 0&&(D=I.clone(),C[H]=D,P.addEventListener("dispose",A)),I=D}if(I.visible=P.visible,I.wireframe=P.wireframe,b===ji?I.side=P.shadowSide!==null?P.shadowSide:P.side:I.side=P.shadowSide!==null?P.shadowSide:d[P.side],I.alphaMap=P.alphaMap,I.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,I.map=P.map,I.clipShadows=P.clipShadows,I.clippingPlanes=P.clippingPlanes,I.clipIntersection=P.clipIntersection,I.displacementMap=P.displacementMap,I.displacementScale=P.displacementScale,I.displacementBias=P.displacementBias,I.wireframeLinewidth=P.wireframeLinewidth,I.linewidth=P.linewidth,_.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let O=i.properties.get(I);O.light=_}return I}function v(w,P,_,b,I){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===ji)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let H=t.update(w),C=w.material;if(Array.isArray(C)){let D=H.groups;for(let V=0,q=D.length;V<q;V++){let ct=D[V],tt=C[ct.materialIndex];if(tt&&tt.visible){let ot=T(w,tt,b,I);w.onBeforeShadow(i,w,P,_,H,ot,ct),i.renderBufferDirect(_,null,H,ot,w,ct),w.onAfterShadow(i,w,P,_,H,ot,ct)}}}else if(C.visible){let D=T(w,C,b,I);w.onBeforeShadow(i,w,P,_,H,D,null),i.renderBufferDirect(_,null,H,D,w,null),w.onAfterShadow(i,w,P,_,H,D,null)}}let O=w.children;for(let H=0,C=O.length;H<C;H++)v(O[H],P,_,b,I)}function A(w){w.target.removeEventListener("dispose",A);for(let _ in c){let b=c[_],I=w.target.uuid;I in b&&(b[I].dispose(),delete b[I])}}}function xg(i,t){function e(){let S=!1,Q=new ge,W=null,at=new ge(0,0,0,0);return{setMask:function(pt){W!==pt&&!S&&(i.colorMask(pt,pt,pt,pt),W=pt)},setLocked:function(pt){S=pt},setClear:function(pt,st,Pt,Ct,ne){ne===!0&&(pt*=Ct,st*=Ct,Pt*=Ct),Q.set(pt,st,Pt,Ct),at.equals(Q)===!1&&(i.clearColor(pt,st,Pt,Ct),at.copy(Q))},reset:function(){S=!1,W=null,at.set(-1,0,0,0)}}}function n(){let S=!1,Q=!1,W=null,at=null,pt=null;return{setReversed:function(st){if(Q!==st){let Pt=t.get("EXT_clip_control");st?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),Q=st;let Ct=pt;pt=null,this.setClear(Ct)}},getReversed:function(){return Q},setTest:function(st){st?ut(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(st){W!==st&&!S&&(i.depthMask(st),W=st)},setFunc:function(st){if(Q&&(st=Ih[st]),at!==st){switch(st){case Gr:i.depthFunc(i.NEVER);break;case Hr:i.depthFunc(i.ALWAYS);break;case qr:i.depthFunc(i.LESS);break;case Vi:i.depthFunc(i.LEQUAL);break;case Wr:i.depthFunc(i.EQUAL);break;case Xr:i.depthFunc(i.GEQUAL);break;case Yr:i.depthFunc(i.GREATER);break;case Zr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}at=st}},setLocked:function(st){S=st},setClear:function(st){pt!==st&&(pt=st,Q&&(st=1-st),i.clearDepth(st))},reset:function(){S=!1,W=null,at=null,pt=null,Q=!1}}}function s(){let S=!1,Q=null,W=null,at=null,pt=null,st=null,Pt=null,Ct=null,ne=null;return{setTest:function(ie){S||(ie?ut(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(ie){Q!==ie&&!S&&(i.stencilMask(ie),Q=ie)},setFunc:function(ie,rn,fn){(W!==ie||at!==rn||pt!==fn)&&(i.stencilFunc(ie,rn,fn),W=ie,at=rn,pt=fn)},setOp:function(ie,rn,fn){(st!==ie||Pt!==rn||Ct!==fn)&&(i.stencilOp(ie,rn,fn),st=ie,Pt=rn,Ct=fn)},setLocked:function(ie){S=ie},setClear:function(ie){ne!==ie&&(i.clearStencil(ie),ne=ie)},reset:function(){S=!1,Q=null,W=null,at=null,pt=null,st=null,Pt=null,Ct=null,ne=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,E=null,T=null,v=null,A=null,w=null,P=null,_=new qt(0,0,0),b=0,I=!1,N=null,O=null,H=null,C=null,D=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,ct=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(tt)[1]),q=ct>=1):tt.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),q=ct>=2);let ot=null,lt={},Tt=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),Zt=new ge().fromArray(Tt),zt=new ge().fromArray(Mt);function Yt(S,Q,W,at){let pt=new Uint8Array(4),st=i.createTexture();i.bindTexture(S,st),i.texParameteri(S,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(S,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<W;Pt++)S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,at,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(Q+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return st}let rt={};rt[i.TEXTURE_2D]=Yt(i.TEXTURE_2D,i.TEXTURE_2D,1),rt[i.TEXTURE_CUBE_MAP]=Yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[i.TEXTURE_2D_ARRAY]=Yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),rt[i.TEXTURE_3D]=Yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ut(i.DEPTH_TEST),a.setFunc(Vi),gt(!1),xt(ll),ut(i.CULL_FACE),dt(Mn);function ut(S){h[S]!==!0&&(i.enable(S),h[S]=!0)}function yt(S){h[S]!==!1&&(i.disable(S),h[S]=!1)}function Bt(S,Q){return u[S]!==Q?(i.bindFramebuffer(S,Q),u[S]=Q,S===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Q),S===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function bt(S,Q){let W=g,at=!1;if(S){W=f.get(Q),W===void 0&&(W=[],f.set(Q,W));let pt=S.textures;if(W.length!==pt.length||W[0]!==i.COLOR_ATTACHMENT0){for(let st=0,Pt=pt.length;st<Pt;st++)W[st]=i.COLOR_ATTACHMENT0+st;W.length=pt.length,at=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,at=!0);at&&i.drawBuffers(W)}function kt(S){return y!==S?(i.useProgram(S),y=S,!0):!1}let Jt={[yi]:i.FUNC_ADD,[Kc]:i.FUNC_SUBTRACT,[Qc]:i.FUNC_REVERSE_SUBTRACT};Jt[jc]=i.MIN,Jt[th]=i.MAX;let ht={[eh]:i.ZERO,[nh]:i.ONE,[ih]:i.SRC_COLOR,[ul]:i.SRC_ALPHA,[ch]:i.SRC_ALPHA_SATURATE,[oh]:i.DST_COLOR,[rh]:i.DST_ALPHA,[sh]:i.ONE_MINUS_SRC_COLOR,[dl]:i.ONE_MINUS_SRC_ALPHA,[lh]:i.ONE_MINUS_DST_COLOR,[ah]:i.ONE_MINUS_DST_ALPHA,[hh]:i.CONSTANT_COLOR,[uh]:i.ONE_MINUS_CONSTANT_COLOR,[dh]:i.CONSTANT_ALPHA,[fh]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(S,Q,W,at,pt,st,Pt,Ct,ne,ie){if(S===Mn){m===!0&&(yt(i.BLEND),m=!1);return}if(m===!1&&(ut(i.BLEND),m=!0),S!==$c){if(S!==p||ie!==I){if((E!==yi||A!==yi)&&(i.blendEquation(i.FUNC_ADD),E=yi,A=yi),ie)switch(S){case ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case es:i.blendFunc(i.ONE,i.ONE);break;case cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ht("WebGLState: Invalid blending: ",S);break}else switch(S){case ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case cl:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hl:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",S);break}T=null,v=null,w=null,P=null,_.set(0,0,0),b=0,p=S,I=ie}return}pt=pt||Q,st=st||W,Pt=Pt||at,(Q!==E||pt!==A)&&(i.blendEquationSeparate(Jt[Q],Jt[pt]),E=Q,A=pt),(W!==T||at!==v||st!==w||Pt!==P)&&(i.blendFuncSeparate(ht[W],ht[at],ht[st],ht[Pt]),T=W,v=at,w=st,P=Pt),(Ct.equals(_)===!1||ne!==b)&&(i.blendColor(Ct.r,Ct.g,Ct.b,ne),_.copy(Ct),b=ne),p=S,I=!1}function mt(S,Q){S.side===tn?yt(i.CULL_FACE):ut(i.CULL_FACE);let W=S.side===Ve;Q&&(W=!W),gt(W),S.blending===ts&&S.transparent===!1?dt(Mn):dt(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),a.setFunc(S.depthFunc),a.setTest(S.depthTest),a.setMask(S.depthWrite),r.setMask(S.colorWrite);let at=S.stencilWrite;o.setTest(at),at&&(o.setMask(S.stencilWriteMask),o.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),o.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),Lt(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function gt(S){N!==S&&(S?i.frontFace(i.CW):i.frontFace(i.CCW),N=S)}function xt(S){S!==Yc?(ut(i.CULL_FACE),S!==O&&(S===ll?i.cullFace(i.BACK):S===Zc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),O=S}function Nt(S){S!==H&&(q&&i.lineWidth(S),H=S)}function Lt(S,Q,W){S?(ut(i.POLYGON_OFFSET_FILL),(C!==Q||D!==W)&&(C=Q,D=W,a.getReversed()&&(Q=-Q),i.polygonOffset(Q,W))):yt(i.POLYGON_OFFSET_FILL)}function Ot(S){S?ut(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function Gt(S){S===void 0&&(S=i.TEXTURE0+V-1),ot!==S&&(i.activeTexture(S),ot=S)}function U(S,Q,W){W===void 0&&(ot===null?W=i.TEXTURE0+V-1:W=ot);let at=lt[W];at===void 0&&(at={type:void 0,texture:void 0},lt[W]=at),(at.type!==S||at.texture!==Q)&&(ot!==W&&(i.activeTexture(W),ot=W),i.bindTexture(S,Q||rt[S]),at.type=S,at.texture=Q)}function Qt(){let S=lt[ot];S!==void 0&&S.type!==void 0&&(i.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function Wt(){try{i.compressedTexImage2D(...arguments)}catch(S){Ht("WebGLState:",S)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(S){Ht("WebGLState:",S)}}function x(){try{i.texSubImage2D(...arguments)}catch(S){Ht("WebGLState:",S)}}function G(){try{i.texSubImage3D(...arguments)}catch(S){Ht("WebGLState:",S)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(S){Ht("WebGLState:",S)}}function it(){try{i.compressedTexSubImage3D(...arguments)}catch(S){Ht("WebGLState:",S)}}function _t(){try{i.texStorage2D(...arguments)}catch(S){Ht("WebGLState:",S)}}function X(){try{i.texStorage3D(...arguments)}catch(S){Ht("WebGLState:",S)}}function Y(){try{i.texImage2D(...arguments)}catch(S){Ht("WebGLState:",S)}}function K(){try{i.texImage3D(...arguments)}catch(S){Ht("WebGLState:",S)}}function ft(S){return d[S]!==void 0?d[S]:i.getParameter(S)}function Et(S,Q){d[S]!==Q&&(i.pixelStorei(S,Q),d[S]=Q)}function L(S){Zt.equals(S)===!1&&(i.scissor(S.x,S.y,S.z,S.w),Zt.copy(S))}function B(S){zt.equals(S)===!1&&(i.viewport(S.x,S.y,S.z,S.w),zt.copy(S))}function k(S,Q){let W=c.get(Q);W===void 0&&(W=new WeakMap,c.set(Q,W));let at=W.get(S);at===void 0&&(at=i.getUniformBlockIndex(Q,S.name),W.set(S,at))}function et(S,Q){let at=c.get(Q).get(S);l.get(Q)!==at&&(i.uniformBlockBinding(Q,at,S.__bindingPointIndex),l.set(Q,at))}function j(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},ot=null,lt={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,E=null,T=null,v=null,A=null,w=null,P=null,_=new qt(0,0,0),b=0,I=!1,N=null,O=null,H=null,C=null,D=null,Zt.set(0,0,i.canvas.width,i.canvas.height),zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ut,disable:yt,bindFramebuffer:Bt,drawBuffers:bt,useProgram:kt,setBlending:dt,setMaterial:mt,setFlipSided:gt,setCullFace:xt,setLineWidth:Nt,setPolygonOffset:Lt,setScissorTest:Ot,activeTexture:Gt,bindTexture:U,unbindTexture:Qt,compressedTexImage2D:Wt,compressedTexImage3D:R,texImage2D:Y,texImage3D:K,pixelStorei:Et,getParameter:ft,updateUBOMapping:k,uniformBlockBinding:et,texStorage2D:_t,texStorage3D:X,texSubImage2D:x,texSubImage3D:G,compressedTexSubImage2D:Z,compressedTexSubImage3D:it,scissor:L,viewport:B,reset:j}}function vg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(R){}function y(R,x){return g?new OffscreenCanvas(R,x):bs("canvas")}function m(R,x,G){let Z=1,it=Wt(R);if((it.width>G||it.height>G)&&(Z=G/Math.max(it.width,it.height)),Z<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){let _t=Math.floor(Z*it.width),X=Math.floor(Z*it.height);u===void 0&&(u=y(_t,X));let Y=x?y(_t,X):u;return Y.width=_t,Y.height=X,Y.getContext("2d").drawImage(R,0,0,_t,X),Vt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+_t+"x"+X+")."),Y}else return"data"in R&&Vt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),R;return R}function p(R){return R.generateMipmaps}function E(R){i.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(R,x,G,Z,it,_t=!1){if(R!==null){if(i[R]!==void 0)return i[R];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let X;Z&&(X=t.get("EXT_texture_norm16"),X||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===i.RED&&(G===i.FLOAT&&(Y=i.R32F),G===i.HALF_FLOAT&&(Y=i.R16F),G===i.UNSIGNED_BYTE&&(Y=i.R8),G===i.UNSIGNED_SHORT&&X&&(Y=X.R16_EXT),G===i.SHORT&&X&&(Y=X.R16_SNORM_EXT)),x===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.R8UI),G===i.UNSIGNED_SHORT&&(Y=i.R16UI),G===i.UNSIGNED_INT&&(Y=i.R32UI),G===i.BYTE&&(Y=i.R8I),G===i.SHORT&&(Y=i.R16I),G===i.INT&&(Y=i.R32I)),x===i.RG&&(G===i.FLOAT&&(Y=i.RG32F),G===i.HALF_FLOAT&&(Y=i.RG16F),G===i.UNSIGNED_BYTE&&(Y=i.RG8),G===i.UNSIGNED_SHORT&&X&&(Y=X.RG16_EXT),G===i.SHORT&&X&&(Y=X.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.RG8UI),G===i.UNSIGNED_SHORT&&(Y=i.RG16UI),G===i.UNSIGNED_INT&&(Y=i.RG32UI),G===i.BYTE&&(Y=i.RG8I),G===i.SHORT&&(Y=i.RG16I),G===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),G===i.UNSIGNED_INT&&(Y=i.RGB32UI),G===i.BYTE&&(Y=i.RGB8I),G===i.SHORT&&(Y=i.RGB16I),G===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),G===i.UNSIGNED_INT&&(Y=i.RGBA32UI),G===i.BYTE&&(Y=i.RGBA8I),G===i.SHORT&&(Y=i.RGBA16I),G===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&(G===i.UNSIGNED_SHORT&&X&&(Y=X.RGB16_EXT),G===i.SHORT&&X&&(Y=X.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),x===i.RGBA){let K=_t?Ss:ee.getTransfer(it);G===i.FLOAT&&(Y=i.RGBA32F),G===i.HALF_FLOAT&&(Y=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Y=K===oe?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&X&&(Y=X.RGBA16_EXT),G===i.SHORT&&X&&(Y=X.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function A(R,x){let G;return R?x===null||x===un||x===is?G=i.DEPTH24_STENCIL8:x===en?G=i.DEPTH32F_STENCIL8:x===ns&&(G=i.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===un||x===is?G=i.DEPTH_COMPONENT24:x===en?G=i.DEPTH_COMPONENT32F:x===ns&&(G=i.DEPTH_COMPONENT16),G}function w(R,x){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Re&&R.minFilter!==Ie?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function P(R){let x=R.target;x.removeEventListener("dispose",P),b(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function _(R){let x=R.target;x.removeEventListener("dispose",_),N(x)}function b(R){let x=n.get(R);if(x.__webglInit===void 0)return;let G=R.source,Z=f.get(G);if(Z){let it=Z[x.__cacheKey];it.usedTimes--,it.usedTimes===0&&I(R),Object.keys(Z).length===0&&f.delete(G)}n.remove(R)}function I(R){let x=n.get(R);i.deleteTexture(x.__webglTexture);let G=R.source,Z=f.get(G);delete Z[x.__cacheKey],a.memory.textures--}function N(R){let x=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let it=0;it<x.__webglFramebuffer[Z].length;it++)i.deleteFramebuffer(x.__webglFramebuffer[Z][it]);else i.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[Z]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let G=R.textures;for(let Z=0,it=G.length;Z<it;Z++){let _t=n.get(G[Z]);_t.__webglTexture&&(i.deleteTexture(_t.__webglTexture),a.memory.textures--),n.remove(G[Z])}n.remove(R)}let O=0;function H(){O=0}function C(){return O}function D(R){O=R}function V(){let R=O;return R>=s.maxTextures&&Vt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,R}function q(R){let x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function ct(R,x){let G=n.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){let Z=R.image;if(Z===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(G,R,x);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+x)}function tt(R,x){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){yt(G,R,x);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+x)}function ot(R,x){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){yt(G,R,x);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+x)}function lt(R,x){let G=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&G.__version!==R.version){Bt(G,R,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+x)}let Tt={[Jr]:i.REPEAT,[gn]:i.CLAMP_TO_EDGE,[$r]:i.MIRRORED_REPEAT},Mt={[Re]:i.NEAREST,[gh]:i.NEAREST_MIPMAP_NEAREST,[er]:i.NEAREST_MIPMAP_LINEAR,[Ie]:i.LINEAR,[Aa]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},Zt={[yh]:i.NEVER,[Eh]:i.ALWAYS,[Mh]:i.LESS,[uo]:i.LEQUAL,[Sh]:i.EQUAL,[fo]:i.GEQUAL,[bh]:i.GREATER,[wh]:i.NOTEQUAL};function zt(R,x){if(x.type===en&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ie||x.magFilter===Aa||x.magFilter===er||x.magFilter===ai||x.minFilter===Ie||x.minFilter===Aa||x.minFilter===er||x.minFilter===ai)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Tt[x.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Tt[x.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Tt[x.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Mt[x.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Mt[x.minFilter]),x.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Zt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Re||x.minFilter!==er&&x.minFilter!==ai||x.type===en&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Yt(R,x){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",P));let Z=x.source,it=f.get(Z);it===void 0&&(it={},f.set(Z,it));let _t=q(x);if(_t!==R.__cacheKey){it[_t]===void 0&&(it[_t]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),it[_t].usedTimes++;let X=it[R.__cacheKey];X!==void 0&&(it[R.__cacheKey].usedTimes--,X.usedTimes===0&&I(x)),R.__cacheKey=_t,R.__webglTexture=it[_t].texture}return G}function rt(R,x,G){return Math.floor(Math.floor(R/G)/x)}function ut(R,x,G,Z){let _t=R.updateRanges;if(_t.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,G,Z,x.data);else{_t.sort((Et,L)=>Et.start-L.start);let X=0;for(let Et=1;Et<_t.length;Et++){let L=_t[X],B=_t[Et],k=L.start+L.count,et=rt(B.start,x.width,4),j=rt(L.start,x.width,4);B.start<=k+1&&et===j&&rt(B.start+B.count-1,x.width,4)===et?L.count=Math.max(L.count,B.start+B.count-L.start):(++X,_t[X]=B)}_t.length=X+1;let Y=e.getParameter(i.UNPACK_ROW_LENGTH),K=e.getParameter(i.UNPACK_SKIP_PIXELS),ft=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Et=0,L=_t.length;Et<L;Et++){let B=_t[Et],k=Math.floor(B.start/4),et=Math.ceil(B.count/4),j=k%x.width,S=Math.floor(k/x.width),Q=et,W=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,j),e.pixelStorei(i.UNPACK_SKIP_ROWS,S),e.texSubImage2D(i.TEXTURE_2D,0,j,S,Q,W,G,Z,x.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Y),e.pixelStorei(i.UNPACK_SKIP_PIXELS,K),e.pixelStorei(i.UNPACK_SKIP_ROWS,ft)}}function yt(R,x,G){let Z=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=i.TEXTURE_3D);let it=Yt(R,x),_t=x.source;e.bindTexture(Z,R.__webglTexture,i.TEXTURE0+G);let X=n.get(_t);if(_t.version!==X.__version||it===!0){if(e.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap!="undefined"&&x.image instanceof ImageBitmap)===!1){let W=ee.getPrimaries(ee.workingColorSpace),at=x.colorSpace===On?null:ee.getPrimaries(x.colorSpace),pt=x.colorSpace===On||W===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let K=m(x.image,!1,s.maxTextureSize);K=Qt(x,K);let ft=r.convert(x.format,x.colorSpace),Et=r.convert(x.type),L=v(x.internalFormat,ft,Et,x.normalized,x.colorSpace,x.isVideoTexture);zt(Z,x);let B,k=x.mipmaps,et=x.isVideoTexture!==!0,j=X.__version===void 0||it===!0,S=_t.dataReady,Q=w(x,K);if(x.isDepthTexture)L=A(x.format===oi,x.type),j&&(et?e.texStorage2D(i.TEXTURE_2D,1,L,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,L,K.width,K.height,0,ft,Et,null));else if(x.isDataTexture)if(k.length>0){et&&j&&e.texStorage2D(i.TEXTURE_2D,Q,L,k[0].width,k[0].height);for(let W=0,at=k.length;W<at;W++)B=k[W],et?S&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,B.width,B.height,ft,Et,B.data):e.texImage2D(i.TEXTURE_2D,W,L,B.width,B.height,0,ft,Et,B.data);x.generateMipmaps=!1}else et?(j&&e.texStorage2D(i.TEXTURE_2D,Q,L,K.width,K.height),S&&ut(x,K,ft,Et)):e.texImage2D(i.TEXTURE_2D,0,L,K.width,K.height,0,ft,Et,K.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){et&&j&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Q,L,k[0].width,k[0].height,K.depth);for(let W=0,at=k.length;W<at;W++)if(B=k[W],x.format!==nn)if(ft!==null)if(et){if(S)if(x.layerUpdates.size>0){let pt=Dl(B.width,B.height,x.format,x.type);for(let st of x.layerUpdates){let Pt=B.data.subarray(st*pt/B.data.BYTES_PER_ELEMENT,(st+1)*pt/B.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,st,B.width,B.height,1,ft,Pt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,B.width,B.height,K.depth,ft,B.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,L,B.width,B.height,K.depth,0,B.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?S&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,B.width,B.height,K.depth,ft,Et,B.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,L,B.width,B.height,K.depth,0,ft,Et,B.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{et&&j&&e.texStorage2D(i.TEXTURE_2D,Q,L,k[0].width,k[0].height);for(let W=0,at=k.length;W<at;W++)B=k[W],x.format!==nn?ft!==null?et?S&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,B.width,B.height,ft,B.data):e.compressedTexImage2D(i.TEXTURE_2D,W,L,B.width,B.height,0,B.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?S&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,B.width,B.height,ft,Et,B.data):e.texImage2D(i.TEXTURE_2D,W,L,B.width,B.height,0,ft,Et,B.data)}else if(x.isDataArrayTexture)if(et){if(j&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Q,L,K.width,K.height,K.depth),S)if(x.layerUpdates.size>0){let W=Dl(K.width,K.height,x.format,x.type);for(let at of x.layerUpdates){let pt=K.data.subarray(at*W/K.data.BYTES_PER_ELEMENT,(at+1)*W/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,at,K.width,K.height,1,ft,Et,pt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ft,Et,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,L,K.width,K.height,K.depth,0,ft,Et,K.data);else if(x.isData3DTexture)et?(j&&e.texStorage3D(i.TEXTURE_3D,Q,L,K.width,K.height,K.depth),S&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ft,Et,K.data)):e.texImage3D(i.TEXTURE_3D,0,L,K.width,K.height,K.depth,0,ft,Et,K.data);else if(x.isFramebufferTexture){if(j)if(et)e.texStorage2D(i.TEXTURE_2D,Q,L,K.width,K.height);else{let W=K.width,at=K.height;for(let pt=0;pt<Q;pt++)e.texImage2D(i.TEXTURE_2D,pt,L,W,at,0,ft,Et,null),W>>=1,at>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let W=i.canvas;if(W.hasAttribute("layoutsubtree")||W.setAttribute("layoutsubtree","true"),K.parentNode!==W){W.appendChild(K),d.add(x),W.onpaint=at=>{let pt=at.changedElements;for(let st of d)pt.includes(st.image)&&(st.needsUpdate=!0)},W.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let pt=i.RGBA,st=i.RGBA,Pt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pt,st,Pt,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(k.length>0){if(et&&j){let W=Wt(k[0]);e.texStorage2D(i.TEXTURE_2D,Q,L,W.width,W.height)}for(let W=0,at=k.length;W<at;W++)B=k[W],et?S&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,ft,Et,B):e.texImage2D(i.TEXTURE_2D,W,L,ft,Et,B);x.generateMipmaps=!1}else if(et){if(j){let W=Wt(K);e.texStorage2D(i.TEXTURE_2D,Q,L,W.width,W.height)}S&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,Et,K)}else e.texImage2D(i.TEXTURE_2D,0,L,ft,Et,K);p(x)&&E(Z),X.__version=_t.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Bt(R,x,G){if(x.image.length!==6)return;let Z=Yt(R,x),it=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);let _t=n.get(it);if(it.version!==_t.__version||Z===!0){e.activeTexture(i.TEXTURE0+G);let X=ee.getPrimaries(ee.workingColorSpace),Y=x.colorSpace===On?null:ee.getPrimaries(x.colorSpace),K=x.colorSpace===On||X===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ft=x.isCompressedTexture||x.image[0].isCompressedTexture,Et=x.image[0]&&x.image[0].isDataTexture,L=[];for(let st=0;st<6;st++)!ft&&!Et?L[st]=m(x.image[st],!0,s.maxCubemapSize):L[st]=Et?x.image[st].image:x.image[st],L[st]=Qt(x,L[st]);let B=L[0],k=r.convert(x.format,x.colorSpace),et=r.convert(x.type),j=v(x.internalFormat,k,et,x.normalized,x.colorSpace),S=x.isVideoTexture!==!0,Q=_t.__version===void 0||Z===!0,W=it.dataReady,at=w(x,B);zt(i.TEXTURE_CUBE_MAP,x);let pt;if(ft){S&&Q&&e.texStorage2D(i.TEXTURE_CUBE_MAP,at,j,B.width,B.height);for(let st=0;st<6;st++){pt=L[st].mipmaps;for(let Pt=0;Pt<pt.length;Pt++){let Ct=pt[Pt];x.format!==nn?k!==null?S?W&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt,0,0,Ct.width,Ct.height,k,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt,j,Ct.width,Ct.height,0,Ct.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):S?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt,0,0,Ct.width,Ct.height,k,et,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt,j,Ct.width,Ct.height,0,k,et,Ct.data)}}}else{if(pt=x.mipmaps,S&&Q){pt.length>0&&at++;let st=Wt(L[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,at,j,st.width,st.height)}for(let st=0;st<6;st++)if(Et){S?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,L[st].width,L[st].height,k,et,L[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,j,L[st].width,L[st].height,0,k,et,L[st].data);for(let Pt=0;Pt<pt.length;Pt++){let ne=pt[Pt].image[st].image;S?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt+1,0,0,ne.width,ne.height,k,et,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt+1,j,ne.width,ne.height,0,k,et,ne.data)}}else{S?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,k,et,L[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,j,k,et,L[st]);for(let Pt=0;Pt<pt.length;Pt++){let Ct=pt[Pt];S?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt+1,0,0,k,et,Ct.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt+1,j,k,et,Ct.image[st])}}}p(x)&&E(i.TEXTURE_CUBE_MAP),_t.__version=it.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function bt(R,x,G,Z,it,_t){let X=r.convert(G.format,G.colorSpace),Y=r.convert(G.type),K=v(G.internalFormat,X,Y,G.normalized,G.colorSpace),ft=n.get(x),Et=n.get(G);if(Et.__renderTarget=x,!ft.__hasExternalTextures){let L=Math.max(1,x.width>>_t),B=Math.max(1,x.height>>_t);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,_t,K,L,B,x.depth,0,X,Y,null):e.texImage2D(it,_t,K,L,B,0,X,Y,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Gt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,it,Et.__webglTexture,0,Ot(x)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,it,Et.__webglTexture,_t),e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(R,x,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),x.depthBuffer){let Z=x.depthTexture,it=Z&&Z.isDepthTexture?Z.type:null,_t=A(x.stencilBuffer,it),X=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Gt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ot(x),_t,x.width,x.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot(x),_t,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,_t,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,R)}else{let Z=x.textures;for(let it=0;it<Z.length;it++){let _t=Z[it],X=r.convert(_t.format,_t.colorSpace),Y=r.convert(_t.type),K=v(_t.internalFormat,X,Y,_t.normalized,_t.colorSpace);Gt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ot(x),K,x.width,x.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot(x),K,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,K,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Jt(R,x,G){let Z=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(x.depthTexture);if(it.__renderTarget=x,(!it.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z){if(it.__webglInit===void 0&&(it.__webglInit=!0,x.depthTexture.addEventListener("dispose",P)),it.__webglTexture===void 0){it.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),zt(i.TEXTURE_CUBE_MAP,x.depthTexture);let ft=r.convert(x.depthTexture.format),Et=r.convert(x.depthTexture.type),L;x.depthTexture.format===_n?L=i.DEPTH_COMPONENT24:x.depthTexture.format===oi&&(L=i.DEPTH24_STENCIL8);for(let B=0;B<6;B++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,L,x.width,x.height,0,ft,Et,null)}}else ct(x.depthTexture,0);let _t=it.__webglTexture,X=Ot(x),Y=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,K=x.depthTexture.format===oi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===_n)Gt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Y,_t,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,K,Y,_t,0);else if(x.depthTexture.format===oi)Gt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Y,_t,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,K,Y,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ht(R){let x=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){let Z=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){let it=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",it)};Z.addEventListener("dispose",it),x.__depthDisposeCallback=it}x.__boundDepthTexture=Z}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(G)for(let Z=0;Z<6;Z++)Jt(x.__webglFramebuffer[Z],R,Z);else{let Z=R.texture.mipmaps;Z&&Z.length>0?Jt(x.__webglFramebuffer[0],R,0):Jt(x.__webglFramebuffer,R,0)}else if(G){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=i.createRenderbuffer(),kt(x.__webglDepthbuffer[Z],R,!1);else{let it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=x.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,_t)}}else{let Z=R.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),kt(x.__webglDepthbuffer,R,!1);else{let it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,_t)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(R,x,G){let Z=n.get(R);x!==void 0&&bt(Z.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&ht(R)}function mt(R){let x=R.texture,G=n.get(R),Z=n.get(x);R.addEventListener("dispose",_);let it=R.textures,_t=R.isWebGLCubeRenderTarget===!0,X=it.length>1;if(X||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=x.version,a.memory.textures++),_t){G.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[Y]=[];for(let K=0;K<x.mipmaps.length;K++)G.__webglFramebuffer[Y][K]=i.createFramebuffer()}else G.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)G.__webglFramebuffer[Y]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(X)for(let Y=0,K=it.length;Y<K;Y++){let ft=n.get(it[Y]);ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Gt(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Y=0;Y<it.length;Y++){let K=it[Y];G.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[Y]);let ft=r.convert(K.format,K.colorSpace),Et=r.convert(K.type),L=v(K.internalFormat,ft,Et,K.normalized,K.colorSpace,R.isXRRenderTarget===!0),B=Ot(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,B,L,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,G.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),kt(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_t){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),zt(i.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)bt(G.__webglFramebuffer[Y][K],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,K);else bt(G.__webglFramebuffer[Y],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(x)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(X){for(let Y=0,K=it.length;Y<K;Y++){let ft=it[Y],Et=n.get(ft),L=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(L=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(L,Et.__webglTexture),zt(L,ft),bt(G.__webglFramebuffer,R,ft,i.COLOR_ATTACHMENT0+Y,L,0),p(ft)&&E(L)}e.unbindTexture()}else{let Y=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Y=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,Z.__webglTexture),zt(Y,x),x.mipmaps&&x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)bt(G.__webglFramebuffer[K],R,x,i.COLOR_ATTACHMENT0,Y,K);else bt(G.__webglFramebuffer,R,x,i.COLOR_ATTACHMENT0,Y,0);p(x)&&E(Y),e.unbindTexture()}R.depthBuffer&&ht(R)}function gt(R){let x=R.textures;for(let G=0,Z=x.length;G<Z;G++){let it=x[G];if(p(it)){let _t=T(R),X=n.get(it).__webglTexture;e.bindTexture(_t,X),E(_t),e.unbindTexture()}}}let xt=[],Nt=[];function Lt(R){if(R.samples>0){if(Gt(R)===!1){let x=R.textures,G=R.width,Z=R.height,it=i.COLOR_BUFFER_BIT,_t=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=n.get(R),Y=x.length>1;if(Y)for(let ft=0;ft<x.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,X.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,X.__webglMultisampledFramebuffer);let K=R.texture.mipmaps;K&&K.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,X.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,X.__webglFramebuffer);for(let ft=0;ft<x.length;ft++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,X.__webglColorRenderbuffer[ft]);let Et=n.get(x[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Et,0)}i.blitFramebuffer(0,0,G,Z,0,0,G,Z,it,i.NEAREST),l===!0&&(xt.length=0,Nt.length=0,xt.push(i.COLOR_ATTACHMENT0+ft),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(xt.push(_t),Nt.push(_t),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Nt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let ft=0;ft<x.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,X.__webglColorRenderbuffer[ft]);let Et=n.get(x[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,X.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Et,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,X.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let x=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ot(R){return Math.min(s.maxSamples,R.samples)}function Gt(R){let x=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function U(R){let x=a.render.frame;h.get(R)!==x&&(h.set(R,x),R.update())}function Qt(R,x){let G=R.colorSpace,Z=R.format,it=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Ms&&G!==On&&(ee.getTransfer(G)===oe?(Z!==nn||it!==We)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",G)),x}function Wt(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=H,this.getTextureUnits=C,this.setTextureUnits=D,this.setTexture2D=ct,this.setTexture2DArray=tt,this.setTexture3D=ot,this.setTextureCube=lt,this.rebindTextures=dt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function yg(i,t){function e(n,s=On){let r,a=ee.getTransfer(s);if(n===We)return i.UNSIGNED_BYTE;if(n===Ca)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ra)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===El)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sl)return i.BYTE;if(n===bl)return i.SHORT;if(n===ns)return i.UNSIGNED_SHORT;if(n===Ta)return i.INT;if(n===un)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===dn)return i.HALF_FLOAT;if(n===Al)return i.ALPHA;if(n===Tl)return i.RGB;if(n===nn)return i.RGBA;if(n===_n)return i.DEPTH_COMPONENT;if(n===oi)return i.DEPTH_STENCIL;if(n===Ia)return i.RED;if(n===Pa)return i.RED_INTEGER;if(n===li)return i.RG;if(n===La)return i.RG_INTEGER;if(n===Fa)return i.RGBA_INTEGER;if(n===nr||n===ir||n===sr||n===rr)if(a===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Da||n===Na||n===Ua||n===Ba)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oa||n===za||n===ka||n===Va||n===Ga||n===ar||n===Ha)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oa||n===za)return a===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ka)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Va)return r.COMPRESSED_R11_EAC;if(n===Ga)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ar)return r.COMPRESSED_RG11_EAC;if(n===Ha)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===qa||n===Wa||n===Xa||n===Ya||n===Za||n===Ja||n===$a||n===Ka||n===Qa||n===ja||n===to||n===eo||n===no||n===io)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ya)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Za)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ja)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$a)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ka)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ja)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===to)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===eo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===no)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===io)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===so||n===ro||n===ao)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===so)return a===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ro)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ao)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===oo||n===lo||n===or||n===co)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===oo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===lo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===or)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===co)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Mg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sg=`
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

}`,jl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Is(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Je({vertexShader:Mg,fragmentShader:Sg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pe(new vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tc=class extends xn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,y=typeof XRWebGLBinding!="undefined",m=new jl,p={},E=e.getContextAttributes(),T=null,v=null,A=[],w=[],P=new vt,_=null,b=null,I=new Me;I.viewport=new ge;let N=new Me;N.viewport=new ge;let O=[I,N],H=new Ma,C=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let ut=A[rt];return ut===void 0&&(ut=new Xi,A[rt]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(rt){let ut=A[rt];return ut===void 0&&(ut=new Xi,A[rt]=ut),ut.getGripSpace()},this.getHand=function(rt){let ut=A[rt];return ut===void 0&&(ut=new Xi,A[rt]=ut),ut.getHandSpace()};function V(rt){let ut=w.indexOf(rt.inputSource);if(ut===-1)return;let yt=A[ut];yt!==void 0&&(yt.update(rt.inputSource,rt.frame,c||a),yt.dispatchEvent({type:rt.type,data:rt.inputSource}))}function q(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",ct);for(let rt=0;rt<A.length;rt++){let ut=w[rt];ut!==null&&(w[rt]=null,A[rt].disconnect(ut))}C=null,D=null,m.reset();for(let rt in p)delete p[rt];if(t.setRenderTarget(T),f=null,u=null,d=null,s=null,v=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(P.width,P.height,!1),b!==null){let rt=b.camera;rt.fov=b.fov,rt.zoom=b.zoom,rt.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){r=rt,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){o=rt,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(rt){c=rt},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(rt){if(s=rt,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",q),s.addEventListener("inputsourceschange",ct),E.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(P),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Bt=null,bt=null;E.depth&&(bt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=E.stencil?oi:_n,Bt=E.stencil?is:un);let kt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(kt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new He(u.textureWidth,u.textureHeight,{format:nn,type:We,depthTexture:new Kn(u.textureWidth,u.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let yt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new He(f.framebufferWidth,f.framebufferHeight,{format:nn,type:We,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Yt.setContext(s),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ct(rt){for(let ut=0;ut<rt.removed.length;ut++){let yt=rt.removed[ut],Bt=w.indexOf(yt);Bt>=0&&(w[Bt]=null,A[Bt].disconnect(yt))}for(let ut=0;ut<rt.added.length;ut++){let yt=rt.added[ut],Bt=w.indexOf(yt);if(Bt===-1){for(let kt=0;kt<A.length;kt++)if(kt>=w.length){w.push(yt),Bt=kt;break}else if(w[kt]===null){w[kt]=yt,Bt=kt;break}if(Bt===-1)break}let bt=A[Bt];bt&&bt.connect(yt)}}let tt=new F,ot=new F;function lt(rt,ut,yt){tt.setFromMatrixPosition(ut.matrixWorld),ot.setFromMatrixPosition(yt.matrixWorld);let Bt=tt.distanceTo(ot),bt=ut.projectionMatrix.elements,kt=yt.projectionMatrix.elements,Jt=bt[14]/(bt[10]-1),ht=bt[14]/(bt[10]+1),dt=(bt[9]+1)/bt[5],mt=(bt[9]-1)/bt[5],gt=(bt[8]-1)/bt[0],xt=(kt[8]+1)/kt[0],Nt=Jt*gt,Lt=Jt*xt,Ot=Bt/(-gt+xt),Gt=Ot*-gt;if(ut.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(Gt),rt.translateZ(Ot),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),bt[10]===-1)rt.projectionMatrix.copy(ut.projectionMatrix),rt.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{let U=Jt+Ot,Qt=ht+Ot,Wt=Nt-Gt,R=Lt+(Bt-Gt),x=dt*ht/Qt*U,G=mt*ht/Qt*U;rt.projectionMatrix.makePerspective(Wt,R,x,G,U,Qt),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function Tt(rt,ut){ut===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(ut.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(s===null)return;let ut=rt.near,yt=rt.far;m.texture!==null&&(m.depthNear>0&&(ut=m.depthNear),m.depthFar>0&&(yt=m.depthFar)),H.near=N.near=I.near=ut,H.far=N.far=I.far=yt,(C!==H.near||D!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),C=H.near,D=H.far),H.layers.mask=rt.layers.mask|6,I.layers.mask=H.layers.mask&-5,N.layers.mask=H.layers.mask&-3;let Bt=rt.parent,bt=H.cameras;Tt(H,Bt);for(let kt=0;kt<bt.length;kt++)Tt(bt[kt],Bt);bt.length===2?lt(H,I,N):H.projectionMatrix.copy(I.projectionMatrix),b===null&&rt.isPerspectiveCamera&&(b={camera:rt,fov:rt.fov,zoom:rt.zoom}),Mt(rt,H,Bt)};function Mt(rt,ut,yt){yt===null?rt.matrix.copy(ut.matrixWorld):(rt.matrix.copy(yt.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(ut.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(ut.projectionMatrix),rt.projectionMatrixInverse.copy(ut.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=Qr*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(rt){l=rt,u!==null&&(u.fixedFoveation=rt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=rt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(rt){return p[rt]};let Zt=null;function zt(rt,ut){if(h=ut.getViewerPose(c||a),g=ut,h!==null){let yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Bt=!1;yt.length!==H.cameras.length&&(H.cameras.length=0,Bt=!0);for(let ht=0;ht<yt.length;ht++){let dt=yt[ht],mt=null;if(f!==null)mt=f.getViewport(dt);else{let xt=d.getViewSubImage(u,dt);mt=xt.viewport,ht===0&&(t.setRenderTargetTextures(v,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(v))}let gt=O[ht];gt===void 0&&(gt=new Me,gt.layers.enable(ht),gt.viewport=new ge,O[ht]=gt),gt.matrix.fromArray(dt.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(dt.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(mt.x,mt.y,mt.width,mt.height),ht===0&&(H.matrix.copy(gt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Bt===!0&&H.cameras.push(gt)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let ht=d.getDepthInformation(yt[0]);ht&&ht.isValid&&ht.texture&&m.init(ht,s.renderState)}if(bt&&bt.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let ht=0;ht<yt.length;ht++){let dt=yt[ht].camera;if(dt){let mt=p[dt];mt||(mt=new Is,p[dt]=mt);let gt=d.getCameraImage(dt);mt.sourceTexture=gt}}}}for(let yt=0;yt<A.length;yt++){let Bt=w[yt],bt=A[yt];Bt!==null&&bt!==void 0&&bt.update(Bt,ut,c||a)}Zt&&Zt(rt,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),g=null}let Yt=new au;Yt.setAnimationLoop(zt),this.setAnimationLoop=function(rt){Zt=rt},this.dispose=function(){}}},bg=new ce,du=new Xt;du.set(-1,0,0,0,1,0,0,0,1);function wg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Pl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,T,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ve&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ve&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=t.get(p),T=E.envMap,v=E.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(bg.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(du),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=T*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ve&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Eg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,A){let w=A.program;n.uniformBlockBinding(v,w)}function c(v,A){let w=s[v.id];w===void 0&&(m(v),w=h(v),s[v.id]=w,v.addEventListener("dispose",E));let P=A.program;n.updateUBOMapping(v,P);let _=t.render.frame;r[v.id]!==_&&(u(v),r[v.id]=_)}function h(v){let A=d();v.__bindingPointIndex=A;let w=i.createBuffer(),P=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,P,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,w),w}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let A=s[v.id],w=v.uniforms,P=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let _=0,b=w.length;_<b;_++){let I=w[_];if(Array.isArray(I))for(let N=0,O=I.length;N<O;N++)f(I[N],_,N,P);else f(I,_,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,A,w,P){if(y(v,A,w,P)===!0){let _=v.__offset,b=v.value;if(Array.isArray(b)){let I=0;for(let N=0;N<b.length;N++){let O=b[N],H=p(O);g(O,v.__data,I),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(I+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function g(v,A,w){typeof v=="number"||typeof v=="boolean"?A[0]=v:v.isMatrix3?(A[0]=v.elements[0],A[1]=v.elements[1],A[2]=v.elements[2],A[3]=0,A[4]=v.elements[3],A[5]=v.elements[4],A[6]=v.elements[5],A[7]=0,A[8]=v.elements[6],A[9]=v.elements[7],A[10]=v.elements[8],A[11]=0):ArrayBuffer.isView(v)?A.set(new v.constructor(v.buffer,v.byteOffset,A.length)):v.toArray(A,w)}function y(v,A,w,P){let _=v.value,b=A+"_"+w;if(P[b]===void 0)return typeof _=="number"||typeof _=="boolean"?P[b]=_:ArrayBuffer.isView(_)?P[b]=_.slice():P[b]=_.clone(),!0;{let I=P[b];if(typeof _=="number"||typeof _=="boolean"){if(I!==_)return P[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(I.equals(_)===!1)return I.copy(_),!0}}return!1}function m(v){let A=v.uniforms,w=0,P=16;for(let b=0,I=A.length;b<I;b++){let N=Array.isArray(A[b])?A[b]:[A[b]];for(let O=0,H=N.length;O<H;O++){let C=N[O],D=Array.isArray(C.value)?C.value:[C.value];for(let V=0,q=D.length;V<q;V++){let ct=D[V],tt=p(ct),ot=w%P,lt=ot%tt.boundary,Tt=ot+lt;w+=lt,Tt!==0&&P-Tt<tt.storage&&(w+=P-Tt),C.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=w,w+=tt.storage}}}let _=w%P;return _>0&&(w+=P-_),v.__size=w,v.__cache={},this}function p(v){let A={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(A.boundary=4,A.storage=4):v.isVector2?(A.boundary=8,A.storage=8):v.isVector3||v.isColor?(A.boundary=16,A.storage=12):v.isVector4?(A.boundary=16,A.storage=16):v.isMatrix3?(A.boundary=48,A.storage=48):v.isMatrix4?(A.boundary=64,A.storage=64):v.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(A.boundary=16,A.storage=v.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",v),A}function E(v){let A=v.target;A.removeEventListener("dispose",E);let w=a.indexOf(A.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function T(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:T}}var Ag=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Sn=null;function Tg(){return Sn===null&&(Sn=new Cs(Ag,16,16,li,dn),Sn.name="DFG_LUT",Sn.minFilter=Ie,Sn.magFilter=Ie,Sn.wrapS=gn,Sn.wrapT=gn,Sn.generateMipmaps=!1,Sn.needsUpdate=!0),Sn}var ur=class{constructor(t={}){let{canvas:e=Th(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=We}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=f,m=new Set([Fa,La,Pa]),p=new Set([We,un,ns,is,Ca,Ra]),E=new Uint32Array(4),T=new Int32Array(4),v=new F,A=null,w=null,P=[],_=[],b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,N=!1,O=null,H=null,C=null,D=null;this._outputColorSpace=Se;let V=0,q=0,ct=null,tt=-1,ot=null,lt=new ge,Tt=new ge,Mt=null,Zt=new qt(0),zt=0,Yt=e.width,rt=e.height,ut=1,yt=null,Bt=null,bt=new ge(0,0,Yt,rt),kt=new ge(0,0,Yt,rt),Jt=!1,ht=new Zi,dt=!1,mt=!1,gt=new ce,xt=new F,Nt=new ge,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ot=!1;function Gt(){return ct===null?ut:1}let U=n;function Qt(M,z){return e.getContext(M,z)}let Wt,R,x,G,Z,it,_t,X,Y,K,ft,Et,L,B,k,et,j,S,Q,W,at,pt,st;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ne,!1),e.addEventListener("webglcontextrestored",ie,!1),e.addEventListener("webglcontextcreationerror",rn,!1),U===null){let z="webgl2";if(U=Qt(z,M),U===null)throw Qt(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pt()}catch(M){throw e.removeEventListener("webglcontextlost",ne,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",rn,!1),Ht("WebGLRenderer: "+M.message),M}function Pt(){Wt=new Dm(U),Wt.init(),at=new yg(U,Wt),R=new wm(U,Wt,t,at),x=new xg(U,Wt),R.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),H=U.createFramebuffer(),C=U.createFramebuffer(),D=U.createFramebuffer(),G=new Bm(U),Z=new sg,it=new vg(U,Wt,x,Z,R,at,G),_t=new Fm(I),X=new Od(U),pt=new Sm(U,X),Y=new Nm(U,X,G,pt),K=new zm(U,Y,X,pt,G),S=new Om(U,R,it),k=new Em(Z),ft=new ig(I,_t,Wt,R,pt,k),Et=new wg(I,Z),L=new ag,B=new dg(Wt),j=new Mm(I,_t,x,K,g,l),et=new _g(I,K,R),st=new Eg(U,G,R,x),Q=new bm(U,Wt,G),W=new Um(U,Wt,G),G.programs=ft.programs,I.capabilities=R,I.extensions=Wt,I.properties=Z,I.renderLists=L,I.shadowMap=et,I.state=x,I.info=G}y!==We&&(b=new Vm(y,e.width,e.height,o,s,r));let Ct=new tc(I,U);this.xr=Ct,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let M=Wt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Wt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ut},this.setPixelRatio=function(M){M!==void 0&&(ut=M,this.setSize(Yt,rt,!1))},this.getSize=function(M){return M.set(Yt,rt)},this.setSize=function(M,z,nt=!0){if(Ct.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}Yt=M,rt=z,e.width=Math.floor(M*ut),e.height=Math.floor(z*ut),nt===!0&&(e.style.width=M+"px",e.style.height=z+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,M,z)},this.getDrawingBufferSize=function(M){return M.set(Yt*ut,rt*ut).floor()},this.setDrawingBufferSize=function(M,z,nt){Yt=M,rt=z,ut=nt,e.width=Math.floor(M*nt),e.height=Math.floor(z*nt),this.setViewport(0,0,M,z)},this.setEffects=function(M){if(y===We){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let z=0;z<M.length;z++)if(M[z].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(lt)},this.getViewport=function(M){return M.copy(bt)},this.setViewport=function(M,z,nt,J){M.isVector4?bt.set(M.x,M.y,M.z,M.w):bt.set(M,z,nt,J),x.viewport(lt.copy(bt).multiplyScalar(ut).round())},this.getScissor=function(M){return M.copy(kt)},this.setScissor=function(M,z,nt,J){M.isVector4?kt.set(M.x,M.y,M.z,M.w):kt.set(M,z,nt,J),x.scissor(Tt.copy(kt).multiplyScalar(ut).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(M){x.setScissorTest(Jt=M)},this.setOpaqueSort=function(M){yt=M},this.setTransparentSort=function(M){Bt=M},this.getClearColor=function(M){return M.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor(...arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha(...arguments)},this.clear=function(M=!0,z=!0,nt=!0){let J=0;if(M){let $=!1;if(ct!==null){let At=ct.texture.format;$=m.has(At)}if($){let At=ct.texture.type,It=p.has(At),wt=j.getClearColor(),Ft=j.getClearAlpha(),Ut=wt.r,$t=wt.g,jt=wt.b;It?(E[0]=Ut,E[1]=$t,E[2]=jt,E[3]=Ft,U.clearBufferuiv(U.COLOR,0,E)):(T[0]=Ut,T[1]=$t,T[2]=jt,T[3]=Ft,U.clearBufferiv(U.COLOR,0,T))}else J|=U.COLOR_BUFFER_BIT}z&&(J|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),nt&&(J|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&U.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),O=M},this.dispose=function(){e.removeEventListener("webglcontextlost",ne,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",rn,!1),j.dispose(),L.dispose(),B.dispose(),Z.dispose(),_t.dispose(),K.dispose(),pt.dispose(),st.dispose(),ft.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",ac),Ct.removeEventListener("sessionend",oc),hi.stop()};function ne(M){M.preventDefault(),Rl("WebGLRenderer: Context Lost."),N=!0}function ie(){Rl("WebGLRenderer: Context Restored."),N=!1;let M=G.autoReset,z=et.enabled,nt=et.autoUpdate,J=et.needsUpdate,$=et.type;Pt(),G.autoReset=M,et.enabled=z,et.autoUpdate=nt,et.needsUpdate=J,et.type=$}function rn(M){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function fn(M){let z=M.target;z.removeEventListener("dispose",fn),gu(z)}function gu(M){_u(M),Z.remove(M)}function _u(M){let z=Z.get(M).programs;z!==void 0&&(z.forEach(function(nt){ft.releaseProgram(nt)}),M.isShaderMaterial&&ft.releaseShaderCache(M))}this.renderBufferDirect=function(M,z,nt,J,$,At){z===null&&(z=Lt);let It=$.isMesh&&$.matrixWorld.determinantAffine()<0,wt=yu(M,z,nt,J,$);x.setMaterial(J,It);let Ft=nt.index,Ut=1;if(J.wireframe===!0){if(Ft=Y.getWireframeAttribute(nt),Ft===void 0)return;Ut=2}let $t=nt.drawRange,jt=nt.attributes.position,Dt=$t.start*Ut,ae=($t.start+$t.count)*Ut;At!==null&&(Dt=Math.max(Dt,At.start*Ut),ae=Math.min(ae,(At.start+At.count)*Ut)),Ft!==null?(Dt=Math.max(Dt,0),ae=Math.min(ae,Ft.count)):jt!=null&&(Dt=Math.max(Dt,0),ae=Math.min(ae,jt.count));let ve=ae-Dt;if(ve<0||ve===1/0)return;pt.setup($,J,wt,nt,Ft);let de,he=Q;if(Ft!==null&&(de=X.get(Ft),he=W,he.setIndex(de)),$.isMesh)J.wireframe===!0?(x.setLineWidth(J.wireframeLinewidth*Gt()),he.setMode(U.LINES)):he.setMode(U.TRIANGLES);else if($.isLine){let Le=J.linewidth;Le===void 0&&(Le=1),x.setLineWidth(Le*Gt()),$.isLineSegments?he.setMode(U.LINES):$.isLineLoop?he.setMode(U.LINE_LOOP):he.setMode(U.LINE_STRIP)}else $.isPoints?he.setMode(U.POINTS):$.isSprite&&he.setMode(U.TRIANGLES);if($.isBatchedMesh)if(Wt.get("WEBGL_multi_draw"))he.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Le=$._multiDrawStarts,Rt=$._multiDrawCounts,Ue=$._multiDrawCount,se=Ft?X.get(Ft).bytesPerElement:1,Ke=Z.get(J).currentProgram.getUniforms();for(let pn=0;pn<Ue;pn++)Ke.setValue(U,"_gl_DrawID",pn),he.render(Le[pn]/se,Rt[pn])}else if($.isInstancedMesh)he.renderInstances(Dt,ve,$.count);else if(nt.isInstancedBufferGeometry){let Le=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Rt=Math.min(nt.instanceCount,Le);he.renderInstances(Dt,ve,Rt)}else he.render(Dt,ve)};function rc(M,z,nt,J){O!==null&&M.isNodeMaterial&&O.setObject(J,M),dt===!0&&k.setState(M,nt,!1),M.transparent===!0&&M.side===tn&&M.forceSinglePass===!1?(M.side=Ve,M.needsUpdate=!0,_r(M,z,J),M.side=si,M.needsUpdate=!0,_r(M,z,J),M.side=tn):_r(M,z,J)}this.compile=function(M,z,nt=null){nt===null&&(nt=M),O!==null&&O.renderStart(M,z,nt),w=B.get(nt),w.init(z),_.push(w),nt.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),M!==nt&&M.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),w.setupLights(),O!==null&&O.updateLights(w.state.lightsArray),mt=this.localClippingEnabled,dt=k.init(this.clippingPlanes,mt),dt===!0&&k.setGlobalState(this.clippingPlanes,z),O!==null&&et.render(w.state.shadowsArray,nt,z);let J=new Set;return M.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let At=$.material;if(At)if(Array.isArray(At))for(let It=0;It<At.length;It++){let wt=At[It];rc(wt,nt,z,$),J.add(wt)}else rc(At,nt,z,$),J.add(At)}),w=_.pop(),O!==null&&O.renderEnd(),J},this.compileAsync=function(M,z,nt=null){let J=this.compile(M,z,nt);return new Promise($=>{function At(){if(J.forEach(function(It){let Ft=Z.get(It).currentProgram;(Ft===void 0||Ft.isReady())&&J.delete(It)}),J.size===0){$(M);return}setTimeout(At,10)}Wt.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let So=null;function xu(M){So&&So(M)}function ac(){hi.stop()}function oc(){hi.start()}let hi=new au;hi.setAnimationLoop(xu),typeof self!="undefined"&&hi.setContext(self),this.setAnimationLoop=function(M){So=M,Ct.setAnimationLoop(M),M===null?hi.stop():hi.start()},Ct.addEventListener("sessionstart",ac),Ct.addEventListener("sessionend",oc),this.render=function(M,z){if(z!==void 0&&z.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(M,z);let nt=Ct.enabled===!0&&Ct.isPresenting===!0,J=b!==null&&(ct===null||nt)&&b.begin(I,ct);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(z),z=Ct.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,z,ct),w=B.get(M,_.length),w.init(z),w.state.textureUnits=it.getTextureUnits(),_.push(w),gt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ht.setFromProjectionMatrix(gt,cn,z.reversedDepth),mt=this.localClippingEnabled,dt=k.init(this.clippingPlanes,mt),A=L.get(M,P.length),A.init(),P.push(A),Ct.enabled===!0&&Ct.isPresenting===!0){let It=I.xr.getDepthSensingMesh();It!==null&&bo(It,z,-1/0,I.sortObjects)}bo(M,z,0,I.sortObjects),A.finish(),O!==null&&O.updateLights(w.state.lightsArray),I.sortObjects===!0&&A.sort(yt,Bt),Ot=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,Ot&&j.addToRenderList(A,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),dt===!0&&k.beginShadows();let $=w.state.shadowsArray;if(et.render($,M,z),dt===!0&&k.endShadows(),(J&&b.hasRenderPass())===!1){let It=A.opaque,wt=A.transmissive;if(w.setupLights(),z.isArrayCamera){let Ft=z.cameras;if(wt.length>0)for(let Ut=0,$t=Ft.length;Ut<$t;Ut++){let jt=Ft[Ut];cc(It,wt,M,jt)}Ot&&j.render(M);for(let Ut=0,$t=Ft.length;Ut<$t;Ut++){let jt=Ft[Ut];lc(A,M,jt,jt.viewport)}}else wt.length>0&&cc(It,wt,M,z),Ot&&j.render(M),lc(A,M,z)}ct!==null&&q===0&&(it.updateMultisampleRenderTarget(ct),it.updateRenderTargetMipmap(ct)),J&&b.end(I),M.isScene===!0&&M.onAfterRender(I,M,z),pt.resetDefaultState(),tt=-1,ot=null,_.pop(),_.length>0?(w=_[_.length-1],it.setTextureUnits(w.state.textureUnits),dt===!0&&k.setGlobalState(I.clippingPlanes,w.state.camera)):w=null,P.pop(),P.length>0?A=P[P.length-1]:A=null,O!==null&&O.renderEnd()};function bo(M,z,nt,J){if(M.visible===!1)return;if(M.layers.test(z.layers)){if(M.isGroup)nt=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(z);else if(M.isLightProbeGrid)w.pushLightProbeGrid(M);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(ht)){J&&Nt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(gt);let It=K.update(M),wt=M.material;wt.visible&&A.push(M,It,wt,nt,Nt.z,null,z)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(ht))){let It=K.update(M),wt=M.material;if(J&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Nt.copy(M.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Nt.copy(It.boundingSphere.center)),Nt.applyMatrix4(M.matrixWorld).applyMatrix4(gt)),Array.isArray(wt)){let Ft=It.groups;for(let Ut=0,$t=Ft.length;Ut<$t;Ut++){let jt=Ft[Ut],Dt=wt[jt.materialIndex];Dt&&Dt.visible&&A.push(M,It,Dt,nt,Nt.z,jt,z)}}else wt.visible&&A.push(M,It,wt,nt,Nt.z,null,z)}}let At=M.children;for(let It=0,wt=At.length;It<wt;It++)bo(At[It],z,nt,J)}function lc(M,z,nt,J){let{opaque:$,transmissive:At,transparent:It}=M;w.setupLightsView(nt),dt===!0&&k.setGlobalState(I.clippingPlanes,nt),J&&x.viewport(lt.copy(J)),$.length>0&&gr($,z,nt),At.length>0&&gr(At,z,nt),It.length>0&&gr(It,z,nt),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function cc(M,z,nt,J){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[J.id]===void 0){let Dt=Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[J.id]=new He(1,1,{generateMipmaps:!0,type:Dt?dn:We,minFilter:ai,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}let At=w.state.transmissionRenderTarget[J.id],It=J.viewport||lt;At.setSize(It.z*I.transmissionResolutionScale,It.w*I.transmissionResolutionScale);let wt=I.getRenderTarget(),Ft=I.getActiveCubeFace(),Ut=I.getActiveMipmapLevel();I.setRenderTarget(At),I.getClearColor(Zt),zt=I.getClearAlpha(),zt<1&&I.setClearColor(16777215,.5),I.clear(),Ot&&j.render(nt);let $t=I.toneMapping;I.toneMapping=hn;let jt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),w.setupLightsView(J),dt===!0&&k.setGlobalState(I.clippingPlanes,J),gr(M,nt,J),it.updateMultisampleRenderTarget(At),it.updateRenderTargetMipmap(At),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let ae=0,ve=z.length;ae<ve;ae++){let de=z[ae],{object:he,geometry:Le,material:Rt,group:Ue}=de;if(Rt.side===tn&&he.layers.test(J.layers)){let se=Rt.side;Rt.side=Ve,Rt.needsUpdate=!0,hc(he,nt,J,Le,Rt,Ue),Rt.side=se,Rt.needsUpdate=!0,Dt=!0}}Dt===!0&&(it.updateMultisampleRenderTarget(At),it.updateRenderTargetMipmap(At))}I.setRenderTarget(wt,Ft,Ut),I.setClearColor(Zt,zt),jt!==void 0&&(J.viewport=jt),I.toneMapping=$t}function gr(M,z,nt){let J=z.isScene===!0?z.overrideMaterial:null;for(let $=0,At=M.length;$<At;$++){let It=M[$],{object:wt,geometry:Ft,group:Ut}=It,$t=It.material;$t.allowOverride===!0&&J!==null&&($t=J),wt.layers.test(nt.layers)&&hc(wt,z,nt,Ft,$t,Ut)}}function hc(M,z,nt,J,$,At){O!==null&&$.isNodeMaterial&&O.setObject(M,$),M.onBeforeRender(I,z,nt,J,$,At),M.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),$.onBeforeRender(I,z,nt,J,M,At),$.transparent===!0&&$.side===tn&&$.forceSinglePass===!1?($.side=Ve,$.needsUpdate=!0,I.renderBufferDirect(nt,z,J,$,M,At),$.side=si,$.needsUpdate=!0,I.renderBufferDirect(nt,z,J,$,M,At),$.side=tn):I.renderBufferDirect(nt,z,J,$,M,At),M.onAfterRender(I,z,nt,J,$,At)}function _r(M,z,nt){z.isScene!==!0&&(z=Lt);let J=Z.get(M),$=w.state.lights,At=w.state.shadowsArray,It=$.state.version,wt=ft.getParameters(M,$.state,At,z,nt,w.state.lightProbeGridArray),Ft=ft.getProgramCacheKey(wt),Ut=J.programs;J.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?z.environment:null,J.fog=z.fog;let $t=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;J.envMap=_t.get(M.envMap||J.environment,$t),J.envMapRotation=J.environment!==null&&M.envMap===null?z.environmentRotation:M.envMapRotation,Ut===void 0&&(M.addEventListener("dispose",fn),Ut=new Map,J.programs=Ut);let jt=Ut.get(Ft);if(jt!==void 0){if(J.currentProgram===jt&&J.lightsStateVersion===It)return dc(M,wt),jt}else wt.uniforms=ft.getUniforms(M),O!==null&&M.isNodeMaterial&&O.build(M,nt,wt),M.onBeforeCompile(wt,I),jt=ft.acquireProgram(wt,Ft),Ut.set(Ft,jt),J.uniforms=wt.uniforms;let Dt=J.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Dt.clippingPlanes=k.uniform),dc(M,wt),J.needsLights=Su(M),J.lightsStateVersion=It,J.needsLights&&(Dt.ambientLightColor.value=$.state.ambient,Dt.lightProbe.value=$.state.probe,Dt.sunLights.value=$.state.sun,Dt.sunLightShadows.value=$.state.sunShadow,Dt.directionalLights.value=$.state.directional,Dt.directionalLightShadows.value=$.state.directionalShadow,Dt.spotLights.value=$.state.spot,Dt.spotLightShadows.value=$.state.spotShadow,Dt.rectAreaLights.value=$.state.rectArea,Dt.ltc_1.value=$.state.rectAreaLTC1,Dt.ltc_2.value=$.state.rectAreaLTC2,Dt.pointLights.value=$.state.point,Dt.pointLightShadows.value=$.state.pointShadow,Dt.hemisphereLights.value=$.state.hemi,Dt.sunShadowMatrix.value=$.state.sunShadowMatrix,Dt.sunShadowCascade.value=$.state.sunShadowCascade,Dt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Dt.spotLightMatrix.value=$.state.spotLightMatrix,Dt.spotLightMap.value=$.state.spotLightMap,Dt.pointShadowMatrix.value=$.state.pointShadowMatrix),J.lightProbeGrid=w.state.lightProbeGridArray.length>0,J.currentProgram=jt,J.uniformsList=null,jt}function uc(M){if(M.uniformsList===null){let z=M.currentProgram.getUniforms();M.uniformsList=os.seqWithValue(z.seq,M.uniforms)}return M.uniformsList}function dc(M,z){let nt=Z.get(M);nt.outputColorSpace=z.outputColorSpace,nt.batching=z.batching,nt.batchingColor=z.batchingColor,nt.instancing=z.instancing,nt.instancingColor=z.instancingColor,nt.instancingMorph=z.instancingMorph,nt.skinning=z.skinning,nt.morphTargets=z.morphTargets,nt.morphNormals=z.morphNormals,nt.morphColors=z.morphColors,nt.morphTargetsCount=z.morphTargetsCount,nt.numClippingPlanes=z.numClippingPlanes,nt.numIntersection=z.numClipIntersection,nt.vertexAlphas=z.vertexAlphas,nt.vertexTangents=z.vertexTangents,nt.toneMapping=z.toneMapping}function vu(M,z){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;v.setFromMatrixPosition(z.matrixWorld);for(let nt=0,J=M.length;nt<J;nt++){let $=M[nt];if($.texture!==null&&$.boundingBox.containsPoint(v))return $}return null}function yu(M,z,nt,J,$){z.isScene!==!0&&(z=Lt),it.resetTextureUnits();let At=z.fog,It=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?z.environment:null,wt=ct===null?I.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:ee.workingColorSpace,Ft=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Ut=_t.get(J.envMap||It,Ft),$t=J.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,jt=!!nt.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Dt=!!nt.morphAttributes.position,ae=!!nt.morphAttributes.normal,ve=!!nt.morphAttributes.color,de=hn;J.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(de=I.toneMapping);let he=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Le=he!==void 0?he.length:0,Rt=Z.get(J),Ue=w.state.lights;if(dt===!0&&(mt===!0||M!==ot)){let ue=M===ot&&J.id===tt;k.setState(J,M,ue)}let se=!1;J.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Ue.state.version||Rt.outputColorSpace!==wt||$.isBatchedMesh&&Rt.batching===!1||!$.isBatchedMesh&&Rt.batching===!0||$.isBatchedMesh&&Rt.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Rt.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Rt.instancing===!1||!$.isInstancedMesh&&Rt.instancing===!0||$.isSkinnedMesh&&Rt.skinning===!1||!$.isSkinnedMesh&&Rt.skinning===!0||$.isInstancedMesh&&Rt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Rt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Rt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Rt.instancingMorph===!1&&$.morphTexture!==null||Rt.envMap!==Ut||J.fog===!0&&Rt.fog!==At||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==k.numPlanes||Rt.numIntersection!==k.numIntersection)||Rt.vertexAlphas!==$t||Rt.vertexTangents!==jt||Rt.morphTargets!==Dt||Rt.morphNormals!==ae||Rt.morphColors!==ve||Rt.toneMapping!==de||Rt.morphTargetsCount!==Le||!!Rt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(se=!0):(se=!0,Rt.__version=J.version);let Ke=Rt.currentProgram;se===!0&&(Ke=_r(J,z,$),O&&J.isNodeMaterial&&O.onUpdateProgram(J,Ke,Rt));let pn=!1,zn=!1,wi=!1,le=Ke.getUniforms(),xe=Rt.uniforms;if(x.useProgram(Ke.program)&&(pn=!0,zn=!0,wi=!0),J.id!==tt&&(tt=J.id,zn=!0),Rt.needsLights){let ue=vu(w.state.lightProbeGridArray,$);Rt.lightProbeGrid!==ue&&(Rt.lightProbeGrid=ue,zn=!0)}if(pn||ot!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),le.setValue(U,"projectionMatrix",M.projectionMatrix),le.setValue(U,"viewMatrix",M.matrixWorldInverse);let Vn=le.map.cameraPosition;Vn!==void 0&&Vn.setValue(U,xt.setFromMatrixPosition(M.matrixWorld)),R.logarithmicDepthBuffer&&le.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&le.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),ot!==M&&(ot=M,zn=!0,wi=!0)}if(Rt.needsLights&&(Ue.state.sunShadowMap.length>0&&le.setValue(U,"sunShadowMap",Ue.state.sunShadowMap,it),Ue.state.directionalShadowMap.length>0&&le.setValue(U,"directionalShadowMap",Ue.state.directionalShadowMap,it),Ue.state.spotShadowMap.length>0&&le.setValue(U,"spotShadowMap",Ue.state.spotShadowMap,it),Ue.state.pointShadowMap.length>0&&le.setValue(U,"pointShadowMap",Ue.state.pointShadowMap,it)),$.isSkinnedMesh){le.setOptional(U,$,"bindMatrix"),le.setOptional(U,$,"bindMatrixInverse");let ue=$.skeleton;ue&&(ue.boneTexture===null&&ue.computeBoneTexture(),le.setValue(U,"boneTexture",ue.boneTexture,it))}$.isBatchedMesh&&(le.setOptional(U,$,"batchingTexture"),le.setValue(U,"batchingTexture",$._matricesTexture,it),le.setOptional(U,$,"batchingIdTexture"),le.setValue(U,"batchingIdTexture",$._indirectTexture,it),le.setOptional(U,$,"batchingColorTexture"),$._colorsTexture!==null&&le.setValue(U,"batchingColorTexture",$._colorsTexture,it));let kn=nt.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&S.update($,nt,Ke),(zn||Rt.receiveShadow!==$.receiveShadow)&&(Rt.receiveShadow=$.receiveShadow,le.setValue(U,"receiveShadow",$.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&z.environment!==null&&(xe.envMapIntensity.value=z.environmentIntensity),xe.dfgLUT!==void 0&&(xe.dfgLUT.value=Tg()),zn){if(le.setValue(U,"toneMappingExposure",I.toneMappingExposure),Rt.needsLights&&Mu(xe,wi),At&&J.fog===!0&&Et.refreshFogUniforms(xe,At),Et.refreshMaterialUniforms(xe,J,ut,rt,w.state.transmissionRenderTarget[M.id]),Rt.needsLights&&Rt.lightProbeGrid){let ue=Rt.lightProbeGrid;xe.probesSH.value=ue.texture,xe.probesMin.value.copy(ue.boundingBox.min),xe.probesMax.value.copy(ue.boundingBox.max),xe.probesResolution.value.copy(ue.resolution)}os.upload(U,uc(Rt),xe,it)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(os.upload(U,uc(Rt),xe,it),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&le.setValue(U,"center",$.center),le.setValue(U,"modelViewMatrix",$.modelViewMatrix),le.setValue(U,"normalMatrix",$.normalMatrix),le.setValue(U,"modelMatrix",$.matrixWorld),J.uniformsGroups!==void 0){let ue=J.uniformsGroups;for(let Vn=0,Ei=ue.length;Vn<Ei;Vn++){let pc=ue[Vn];st.update(pc,Ke),st.bind(pc,Ke)}}return Ke}function Mu(M,z){M.ambientLightColor.needsUpdate=z,M.lightProbe.needsUpdate=z,M.sunLights.needsUpdate=z,M.sunLightShadows.needsUpdate=z,M.directionalLights.needsUpdate=z,M.directionalLightShadows.needsUpdate=z,M.pointLights.needsUpdate=z,M.pointLightShadows.needsUpdate=z,M.spotLights.needsUpdate=z,M.spotLightShadows.needsUpdate=z,M.rectAreaLights.needsUpdate=z,M.hemisphereLights.needsUpdate=z}function Su(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return ct},this.setRenderTargetTextures=function(M,z,nt){let J=Z.get(M);J.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Z.get(M.texture).__webglTexture=z,Z.get(M.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:nt,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,z){let nt=Z.get(M);nt.__webglFramebuffer=z,nt.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(M,z=0,nt=0){ct=M,V=z,q=nt;let J=null,$=!1,At=!1;if(M){let wt=Z.get(M);if(wt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(U.FRAMEBUFFER,wt.__webglFramebuffer),lt.copy(M.viewport),Tt.copy(M.scissor),Mt=M.scissorTest,x.viewport(lt),x.scissor(Tt),x.setScissorTest(Mt),tt=-1;return}else if(wt.__webglFramebuffer===void 0)it.setupRenderTarget(M);else if(wt.__hasExternalTextures)it.rebindTextures(M,Z.get(M.texture).__webglTexture,Z.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let $t=M.depthTexture;if(wt.__boundDepthTexture!==$t){if($t!==null&&Z.has($t)&&(M.width!==$t.image.width||M.height!==$t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(M)}}let Ft=M.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(At=!0);let Ut=Z.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ut[z])?J=Ut[z][nt]:J=Ut[z],$=!0):M.samples>0&&it.useMultisampledRTT(M)===!1?J=Z.get(M).__webglMultisampledFramebuffer:Array.isArray(Ut)?J=Ut[nt]:J=Ut,lt.copy(M.viewport),Tt.copy(M.scissor),Mt=M.scissorTest}else lt.copy(bt).multiplyScalar(ut).floor(),Tt.copy(kt).multiplyScalar(ut).floor(),Mt=Jt;if(nt!==0&&(J=H),x.bindFramebuffer(U.FRAMEBUFFER,J)&&x.drawBuffers(M,J),x.viewport(lt),x.scissor(Tt),x.setScissorTest(Mt),$){let wt=Z.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+z,wt.__webglTexture,nt)}else if(At){let wt=z;for(let Ft=0;Ft<M.textures.length;Ft++){let Ut=Z.get(M.textures[Ft]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ft,Ut.__webglTexture,nt,wt)}}else if(M!==null&&nt!==0){let wt=Z.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,wt.__webglTexture,nt)}tt=-1};function fc(M){let z=Z.get(M);return(z.__readFormat!==M.format||z.__readType!==M.type)&&(z.__readFormat=M.format,z.__readType=M.type,z.__formatReadable=R.textureFormatReadable(M.format),z.__typeReadable=R.textureTypeReadable(M.type)),z}this.readRenderTargetPixels=function(M,z,nt,J,$,At,It,wt=0){if(!(M&&M.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Z.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&It!==void 0&&(Ft=Ft[It]),Ft){x.bindFramebuffer(U.FRAMEBUFFER,Ft);try{let Ut=M.textures[wt],$t=Ut.format,jt=Ut.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+wt);let Dt=fc(Ut);if(Dt.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Dt.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=M.width-J&&nt>=0&&nt<=M.height-$&&U.readPixels(z,nt,J,$,at.convert($t),at.convert(jt),At)}finally{let Ut=ct!==null?Z.get(ct).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(M,z,nt,J,$,At,It,wt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Z.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&It!==void 0&&(Ft=Ft[It]),Ft)if(z>=0&&z<=M.width-J&&nt>=0&&nt<=M.height-$){x.bindFramebuffer(U.FRAMEBUFFER,Ft);let Ut=M.textures[wt],$t=Ut.format,jt=Ut.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+wt);let Dt=fc(Ut);if(Dt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Dt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ae=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ae),U.bufferData(U.PIXEL_PACK_BUFFER,At.byteLength,U.STREAM_READ),U.readPixels(z,nt,J,$,at.convert($t),at.convert(jt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let ve=ct!==null?Z.get(ct).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,ve);let de=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Rh(U,de,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ae),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,At),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ae),U.deleteSync(de),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,z=null,nt=0){let J=Math.pow(2,-nt),$=Math.floor(M.image.width*J),At=Math.floor(M.image.height*J),It=z!==null?z.x:0,wt=z!==null?z.y:0;it.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,nt,0,0,It,wt,$,At),x.unbindTexture()},this.copyTextureToTexture=function(M,z,nt=null,J=null,$=0,At=0){let It,wt,Ft,Ut,$t,jt,Dt,ae,ve,de=M.isCompressedTexture?M.mipmaps[At]:M.image;if(nt!==null)It=nt.max.x-nt.min.x,wt=nt.max.y-nt.min.y,Ft=nt.isBox3?nt.max.z-nt.min.z:1,Ut=nt.min.x,$t=nt.min.y,jt=nt.isBox3?nt.min.z:0;else{let xe=Math.pow(2,-$);It=Math.floor(de.width*xe),wt=Math.floor(de.height*xe),M.isDataArrayTexture?Ft=de.depth:M.isData3DTexture?Ft=Math.floor(de.depth*xe):Ft=1,Ut=0,$t=0,jt=0}J!==null?(Dt=J.x,ae=J.y,ve=J.z):(Dt=0,ae=0,ve=0);let he=at.convert(z.format),Le=at.convert(z.type),Rt;z.isData3DTexture?(it.setTexture3D(z,0),Rt=U.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(it.setTexture2DArray(z,0),Rt=U.TEXTURE_2D_ARRAY):(it.setTexture2D(z,0),Rt=U.TEXTURE_2D),x.activeTexture(U.TEXTURE0),x.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),x.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),x.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);let Ue=x.getParameter(U.UNPACK_ROW_LENGTH),se=x.getParameter(U.UNPACK_IMAGE_HEIGHT),Ke=x.getParameter(U.UNPACK_SKIP_PIXELS),pn=x.getParameter(U.UNPACK_SKIP_ROWS),zn=x.getParameter(U.UNPACK_SKIP_IMAGES);x.pixelStorei(U.UNPACK_ROW_LENGTH,de.width),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,de.height),x.pixelStorei(U.UNPACK_SKIP_PIXELS,Ut),x.pixelStorei(U.UNPACK_SKIP_ROWS,$t),x.pixelStorei(U.UNPACK_SKIP_IMAGES,jt);let wi=M.isDataArrayTexture||M.isData3DTexture,le=z.isDataArrayTexture||z.isData3DTexture;if(M.isDepthTexture){let xe=Z.get(M),kn=Z.get(z),ue=Z.get(xe.__renderTarget),Vn=Z.get(kn.__renderTarget);x.bindFramebuffer(U.READ_FRAMEBUFFER,ue.__webglFramebuffer),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let Ei=0;Ei<Ft;Ei++)wi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Z.get(M).__webglTexture,$,jt+Ei),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Z.get(z).__webglTexture,At,ve+Ei)),U.blitFramebuffer(Ut,$t,It,wt,Dt,ae,It,wt,U.DEPTH_BUFFER_BIT,U.NEAREST);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if($!==0||M.isRenderTargetTexture||Z.has(M)){let xe=Z.get(M),kn=Z.get(z);x.bindFramebuffer(U.READ_FRAMEBUFFER,C),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,D);for(let ue=0;ue<Ft;ue++)wi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,xe.__webglTexture,$,jt+ue):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xe.__webglTexture,$),le?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,kn.__webglTexture,At,ve+ue):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,kn.__webglTexture,At),$!==0?U.blitFramebuffer(Ut,$t,It,wt,Dt,ae,It,wt,U.COLOR_BUFFER_BIT,U.NEAREST):le?U.copyTexSubImage3D(Rt,At,Dt,ae,ve+ue,Ut,$t,It,wt):U.copyTexSubImage2D(Rt,At,Dt,ae,Ut,$t,It,wt);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else le?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(Rt,At,Dt,ae,ve,It,wt,Ft,he,Le,de.data):z.isCompressedArrayTexture?U.compressedTexSubImage3D(Rt,At,Dt,ae,ve,It,wt,Ft,he,de.data):U.texSubImage3D(Rt,At,Dt,ae,ve,It,wt,Ft,he,Le,de):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,At,Dt,ae,It,wt,he,Le,de.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,At,Dt,ae,de.width,de.height,he,de.data):U.texSubImage2D(U.TEXTURE_2D,At,Dt,ae,It,wt,he,Le,de);x.pixelStorei(U.UNPACK_ROW_LENGTH,Ue),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,se),x.pixelStorei(U.UNPACK_SKIP_PIXELS,Ke),x.pixelStorei(U.UNPACK_SKIP_ROWS,pn),x.pixelStorei(U.UNPACK_SKIP_IMAGES,zn),At===0&&z.generateMipmaps&&U.generateMipmap(Rt),x.unbindTexture()},this.initRenderTarget=function(M){Z.get(M).__webglFramebuffer===void 0&&it.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?it.setTextureCube(M,0):M.isData3DTexture?it.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?it.setTexture2DArray(M,0):it.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){V=0,q=0,ct=null,x.reset(),pt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};function pu(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new we,c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=fu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let y=0;y<a[h].length;++y)f.push(a[h][y][u]);let g=fu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function fu(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Be(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){let y=h.getComponent(u,g);o.setComponent(u+d,g,y)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var yo=class{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100,n="ltr"){let s=[],r=Cg(t,e,this.data,n);for(let a=0,o=r.length;a<o;a++)s.push(...r[a].toShapes());return s}};function Cg(i,t,e,n){let s=Array.from(i),r=t/e.resolution,a=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*r,o=[],l=0,c=0;(n=="rtl"||n=="tb")&&s.reverse();for(let h=0;h<s.length;h++){let d=s[h];if(d===`
`)l=0,c-=a;else{let u=Rg(d,r,l,c,e);n=="tb"?(l=0,c+=e.ascender*r):l+=u.offsetX,o.push(u.path)}}return o}function Rg(i,t,e,n,s){let r=s.glyphs[i]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+i+'" does not exists in font family '+s.familyName+".");return}let a=new Qs,o,l,c,h,d,u,f,g;if(r.o){let y=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,p=y.length;m<p;)switch(y[m++]){case"m":o=y[m++]*t+e,l=y[m++]*t+n,a.moveTo(o,l);break;case"l":o=y[m++]*t+e,l=y[m++]*t+n,a.lineTo(o,l);break;case"q":c=y[m++]*t+e,h=y[m++]*t+n,d=y[m++]*t+e,u=y[m++]*t+n,a.quadraticCurveTo(d,u,c,h);break;case"b":c=y[m++]*t+e,h=y[m++]*t+n,d=y[m++]*t+e,u=y[m++]*t+n,f=y[m++]*t+e,g=y[m++]*t+n,a.bezierCurveTo(d,u,f,g,c,h);break}}return{offsetX:r.ha*t,path:a}}var dr={glyphs:{B:{ha:731,x_min:61,x_max:696,o:"m 383 0 l 81 0 q 67 6 72 0 q 61 20 61 12 l 61 20 l 61 718 q 67 736 61 729 q 83 742 73 742 l 83 742 l 369 742 q 599 693 519 742 q 678 547 678 643 l 678 547 q 650 456 678 493 q 547 385 621 418 l 547 385 q 545 382 545 384 q 547 378 545 379 l 547 378 q 662 309 628 350 q 696 201 696 267 l 696 201 q 618 50 696 99 q 383 0 540 0 l 383 0 m 278 135 l 378 135 q 459 161 432 135 q 486 222 486 186 l 486 222 q 473 267 486 248 q 437 296 460 286 q 384 306 414 306 l 384 306 l 284 306 q 263 286 263 306 l 263 286 l 263 155 q 278 135 263 135 l 278 135 m 278 444 l 384 444 q 421 450 404 444 q 451 465 438 455 q 471 490 464 475 q 478 524 478 504 l 478 524 q 449 585 478 563 q 376 607 420 607 l 376 607 l 284 607 q 263 589 263 607 l 263 589 l 263 465 q 278 444 263 444 l 278 444"},o:{ha:600,x_min:26,x_max:574,o:"m 299 -10 l 299 -10 q 157 25 218 -10 q 61 122 95 60 q 26 262 26 183 l 26 262 q 62 409 26 346 q 160 506 98 471 q 300 540 222 540 l 300 540 q 444 504 382 540 q 540 406 505 468 q 574 262 574 343 l 574 262 q 539 122 574 183 q 443 25 504 60 q 299 -10 381 -10 l 299 -10 m 300 106 l 300 106 q 353 123 332 106 q 384 176 374 140 q 394 266 394 212 l 394 266 q 384 357 394 321 q 353 411 373 393 q 300 428 332 428 l 300 428 q 248 411 269 428 q 216 357 226 393 q 206 266 206 321 l 206 266 q 216 176 206 211 q 248 123 226 140 q 300 106 269 106 l 300 106"},k:{ha:618,x_min:49,x_max:603,o:"m 435 336 l 600 26 q 601 9 605 18 q 583 0 596 0 l 583 0 l 431 0 q 412 6 419 0 q 401 23 405 12 l 401 23 l 314 212 q 306 223 310 221 q 294 216 302 224 l 294 216 l 235 160 q 229 150 231 156 q 227 133 227 144 l 227 133 l 227 27 q 220 6 227 12 q 197 0 213 0 l 197 0 l 74 0 q 54 6 59 0 q 49 23 49 11 l 49 23 l 49 721 q 66 742 49 742 l 66 742 l 210 742 q 227 723 227 742 l 227 723 l 227 331 q 230 324 227 326 l 230 324 q 230 323 230 323 l 230 323 q 238 328 233 322 l 238 328 l 407 514 q 436 530 423 530 l 436 530 l 559 530 q 577 522 574 530 q 571 503 580 513 l 571 503 l 436 368 q 429 355 430 361 q 435 336 428 349 l 435 336"}," ":{ha:203,x_min:0,x_max:0,o:""},a:{ha:568,x_min:14,x_max:518,o:"m 327 46 l 327 46 q 261 6 298 22 q 176 -10 224 -10 l 176 -10 q 57 32 100 -10 q 14 136 14 73 l 14 136 q 51 237 14 194 q 154 304 87 280 q 313 329 221 328 l 313 329 l 334 330 q 344 333 338 330 q 349 344 349 335 l 349 344 l 349 363 q 331 414 349 396 q 277 432 313 432 l 277 432 q 228 421 252 432 q 187 379 203 409 l 187 379 q 179 370 183 372 q 162 369 175 367 l 162 369 l 46 393 q 37 400 40 395 q 40 422 34 405 l 40 422 q 128 512 64 484 q 286 540 191 540 l 286 540 q 425 519 374 540 q 497 461 475 498 q 518 374 518 424 l 518 374 l 518 25 q 514 6 518 11 q 497 0 510 0 l 497 0 l 376 0 q 360 10 365 0 q 353 31 354 19 l 353 31 l 352 46 q 347 55 351 53 l 347 55 q 327 46 341 58 m 349 171 l 349 230 q 344 245 349 241 l 344 245 q 334 247 340 247 l 334 247 l 318 246 q 278 241 300 246 q 235 225 255 235 q 201 198 214 214 q 187 160 187 182 l 187 160 q 205 119 187 134 q 255 104 223 104 l 255 104 q 294 111 277 104 q 321 127 310 118 l 321 127 q 341 148 333 137 q 349 171 349 158 l 349 171"},w:{ha:825,x_min:18,x_max:808,o:"m 701 530 l 790 530 q 806 522 801 530 q 806 504 810 514 l 806 504 l 639 17 q 632 4 636 8 q 616 0 627 0 l 616 0 l 523 0 q 496 20 502 0 l 496 20 l 421 261 q 413 272 417 272 q 406 261 409 272 l 406 261 l 328 17 q 320 4 325 8 q 305 0 315 0 l 305 0 l 208 0 q 182 20 188 0 l 182 20 l 20 504 q 21 522 16 514 q 37 530 26 530 l 37 530 l 174 530 q 190 525 183 530 q 198 512 196 519 l 198 512 l 277 265 q 284 256 279 255 q 292 266 288 256 l 292 266 l 367 512 q 376 525 369 519 q 390 530 382 530 l 390 530 l 488 530 q 502 525 495 530 q 511 512 509 519 l 511 512 l 585 265 q 592 256 587 255 q 600 266 596 256 l 600 266 l 677 512 q 687 525 681 519 q 701 530 693 530 l 701 530"},r:{ha:441,x_min:48,x_max:419,o:"m 196 0 l 72 0 q 53 6 58 0 q 48 23 48 11 l 48 23 l 48 509 q 65 530 48 530 l 65 530 l 203 530 q 219 512 219 530 l 219 512 l 219 454 q 225 446 219 447 q 235 451 230 444 l 235 451 q 278 497 253 477 q 331 529 303 517 q 382 540 359 540 l 382 540 q 419 521 419 540 l 419 521 l 419 387 q 414 374 419 377 l 414 374 q 401 372 410 370 l 401 372 q 359 380 381 377 q 323 382 336 382 l 323 382 q 288 376 305 382 q 257 358 271 369 q 234 333 242 347 q 226 305 226 319 l 226 305 l 226 26 q 196 0 226 0 l 196 0"},s:{ha:535,x_min:18,x_max:512,o:"m 377 385 l 377 385 q 335 420 361 404 q 269 435 309 435 l 269 435 q 216 424 238 435 q 194 390 194 412 l 194 390 q 202 372 194 381 q 241 355 210 362 l 241 355 l 351 330 q 476 266 440 311 q 512 165 512 221 l 512 165 q 481 71 512 110 q 395 11 450 31 q 266 -10 339 -10 l 266 -10 q 110 22 173 -10 q 22 99 47 54 l 22 99 q 18 115 18 107 q 24 126 18 122 l 24 126 l 102 166 q 120 170 114 171 q 130 164 126 169 l 130 164 q 159 134 143 148 q 201 110 175 119 q 267 101 227 100 l 267 101 q 311 107 291 102 q 343 122 331 112 q 354 147 354 132 l 354 147 q 343 170 354 160 q 298 187 332 180 l 298 187 l 196 207 q 80 260 120 222 q 38 362 39 298 l 38 362 q 65 454 38 413 q 145 517 92 494 q 271 540 197 540 l 271 540 q 407 512 350 540 q 486 445 463 483 l 486 445 q 494 430 491 438 q 486 418 496 422 l 486 418 l 404 378 q 389 376 395 374 q 377 385 383 378 l 377 385"},h:{ha:601,x_min:49,x_max:558,o:"m 197 0 l 72 0 q 49 23 49 0 l 49 23 l 49 721 q 66 742 49 742 l 66 742 l 207 742 q 224 723 224 742 l 224 723 l 224 470 q 227 463 224 464 q 236 466 230 462 l 236 466 q 293 510 266 494 q 347 533 320 526 q 401 540 373 540 l 401 540 q 517 498 476 540 q 558 377 558 455 l 558 377 l 558 27 q 530 0 558 0 l 530 0 l 401 0 q 385 5 389 0 q 380 23 380 10 l 380 23 l 380 355 q 364 398 380 383 q 318 413 347 413 l 318 413 q 284 407 300 413 q 255 389 268 401 q 227 357 241 376 l 227 357 l 227 26 q 197 0 227 0 l 197 0"},p:{ha:613,x_min:48,x_max:585,o:"m 73 530 l 203 530 q 226 508 226 530 l 226 508 l 226 483 q 231 476 226 476 q 241 480 236 476 l 241 480 q 279 511 259 497 q 325 532 299 524 q 384 540 350 540 l 384 540 q 486 511 441 540 q 558 421 531 481 q 585 268 585 361 l 585 268 q 557 108 585 169 q 482 18 529 46 q 377 -10 435 -10 l 377 -10 q 309 2 340 -10 q 246 41 277 13 l 246 41 q 230 51 234 51 q 226 36 226 50 l 226 36 l 226 -146 q 209 -165 226 -165 l 209 -165 l 65 -165 q 48 -145 48 -165 l 48 -145 l 48 506 q 53 524 48 518 q 73 530 58 530 l 73 530 m 226 363 l 226 145 q 262 112 242 124 q 308 100 281 100 l 308 100 q 360 116 338 100 q 393 170 381 132 q 405 273 405 207 l 405 273 q 394 368 405 334 q 361 416 382 402 q 309 430 339 430 l 309 430 q 267 421 286 430 q 237 396 248 411 q 226 363 226 381 l 226 363"},H:{ha:757,x_min:61,x_max:696,o:"m 480 306 l 277 306 q 263 293 263 306 l 263 293 l 263 26 q 233 0 263 0 l 233 0 l 85 0 q 66 6 71 0 q 61 23 61 11 l 61 23 l 61 721 q 78 742 61 742 l 78 742 l 246 742 q 263 723 263 742 l 263 723 l 263 479 q 279 460 263 460 l 279 460 l 478 460 q 494 479 494 460 l 494 479 l 494 723 q 511 742 494 742 l 511 742 l 679 742 q 696 721 696 742 l 696 721 l 696 23 q 691 6 696 11 q 672 0 686 0 l 672 0 l 524 0 q 494 26 494 0 l 494 26 l 494 293 q 480 306 494 306 l 480 306"},v:{ha:583,x_min:18,x_max:565,o:"m 448 530 l 548 530 q 563 522 559 530 q 563 504 567 514 l 563 504 l 367 23 q 333 0 358 0 l 333 0 l 250 0 q 215 23 224 0 l 215 23 l 19 504 q 21 522 16 514 q 37 530 26 530 l 37 530 l 185 530 q 201 525 194 530 q 210 512 207 519 l 210 512 l 311 250 q 317 241 314 241 l 317 241 q 326 251 321 240 l 326 251 l 424 512 q 434 525 428 519 q 448 530 440 530 l 448 530"},e:{ha:588,x_min:26,x_max:565,o:"m 209 216 l 209 216 q 225 158 209 182 q 267 122 240 134 q 326 109 293 109 l 326 109 q 384 123 356 109 q 444 170 412 136 l 444 170 q 451 175 448 174 q 463 172 454 175 l 463 172 l 545 138 q 554 130 552 135 l 554 130 q 549 116 555 124 l 549 116 q 479 40 514 67 q 400 1 443 12 q 302 -10 357 -10 l 302 -10 q 161 24 224 -10 q 62 118 98 58 q 26 257 26 178 l 26 257 q 64 406 26 342 q 164 505 101 470 q 299 540 226 540 l 299 540 q 437 507 377 540 q 531 410 496 473 q 565 257 565 347 l 565 257 q 563 239 565 245 q 548 232 560 233 l 548 232 l 223 232 q 213 228 217 232 q 209 216 209 224 m 212 327 l 375 326 q 389 329 385 326 q 392 340 392 331 l 392 340 q 383 381 392 359 q 355 418 374 402 q 307 434 336 434 l 307 434 q 258 422 280 434 q 224 385 236 409 q 212 327 212 361 l 212 327"},c:{ha:553,x_min:26,x_max:532,o:"m 298 540 l 298 540 q 414 516 366 540 q 491 454 462 491 q 530 379 520 417 l 530 379 q 529 361 534 367 l 529 361 q 514 355 525 355 l 514 355 l 393 347 q 377 359 380 345 l 377 359 q 364 391 371 375 q 342 416 356 406 q 303 426 327 426 l 303 426 q 252 409 274 426 q 218 357 230 392 q 206 265 206 321 l 206 265 q 219 172 206 208 q 256 119 232 135 q 312 102 280 102 l 312 102 q 377 125 354 102 q 420 184 399 148 l 420 184 q 426 190 422 188 q 439 189 430 191 l 439 189 l 523 171 q 530 167 527 170 l 530 167 q 531 150 534 162 l 531 150 q 509 103 525 130 q 466 50 493 75 q 397 7 438 24 q 298 -10 355 -10 l 298 -10 q 158 25 219 -10 q 61 121 96 59 q 26 263 26 182 l 26 263 q 62 408 26 346 q 159 505 97 470 q 298 540 220 540"},n:{ha:600,x_min:48,x_max:558,o:"m 196 0 l 72 0 q 48 23 48 0 l 48 23 l 48 509 q 65 530 48 530 l 65 530 l 207 530 q 224 512 224 530 l 224 512 l 224 464 q 227 457 224 458 q 236 460 230 455 l 236 460 q 285 502 259 484 q 340 530 311 520 q 400 540 368 540 l 400 540 q 515 497 471 540 q 558 380 558 453 l 558 380 l 558 27 q 530 0 558 0 l 530 0 l 401 0 q 385 5 389 0 q 380 23 380 10 l 380 23 l 380 355 q 364 398 380 383 q 317 413 347 413 l 317 413 q 284 407 299 413 q 254 389 268 401 q 226 357 240 376 l 226 357 l 226 26 q 196 0 226 0 l 196 0"},t:{ha:448,x_min:19,x_max:421,o:"m 398 409 l 299 409 q 287 397 287 409 l 287 397 l 287 181 q 304 137 287 151 q 356 123 320 123 l 356 123 l 404 123 q 416 118 411 123 q 420 105 420 112 l 420 105 l 419 33 q 393 7 419 12 l 393 7 q 352 3 374 4 q 309 1 330 1 q 266 0 287 0 l 266 0 q 153 34 196 0 q 109 131 109 67 l 109 131 l 109 392 q 95 409 109 409 l 95 409 l 41 409 q 19 429 19 409 l 19 429 l 19 513 q 39 530 19 530 l 39 530 l 103 530 q 114 541 113 530 l 114 541 l 129 691 q 146 710 131 710 l 146 710 l 274 710 q 292 690 292 710 l 292 690 l 292 541 q 302 531 292 531 l 302 531 l 401 531 q 421 514 421 531 l 421 514 l 421 429 q 398 409 421 409 l 398 409"},i:{ha:274,x_min:47,x_max:227,o:"m 226 511 l 226 27 q 219 6 226 12 q 196 0 212 0 l 196 0 l 72 0 q 53 6 58 0 q 48 23 48 11 l 48 23 l 48 509 q 66 530 48 530 l 66 530 l 209 530 q 226 511 226 530 l 226 511 m 227 722 l 227 611 q 196 584 227 584 l 196 584 l 71 584 q 52 590 57 584 q 47 608 47 596 l 47 608 l 47 720 q 65 742 47 742 l 65 742 l 209 742 q 227 722 227 742 l 227 722"},C:{ha:731,x_min:37,x_max:701,o:"m 384 752 l 384 752 q 497 735 444 752 q 590 688 549 718 q 656 616 630 657 q 691 527 682 575 l 691 527 q 693 503 696 508 q 679 496 689 497 l 679 496 l 523 485 q 511 490 513 485 q 506 503 508 494 l 506 503 q 470 582 497 551 q 389 613 443 613 l 389 613 q 286 559 324 613 q 248 376 248 504 l 248 376 q 284 192 248 247 q 389 137 319 137 l 389 137 q 484 165 443 137 q 550 259 524 192 l 550 259 q 575 266 555 270 l 575 266 l 688 244 q 698 238 692 243 q 700 214 703 232 l 700 214 q 683 168 696 196 q 645 109 669 140 q 584 51 621 78 q 497 7 547 24 q 383 -10 447 -10 l 383 -10 q 199 40 277 -10 q 79 177 121 89 q 37 379 37 265 l 37 379 q 79 577 37 493 q 200 706 121 660 q 384 752 278 752 l 384 752"},u:{ha:597,x_min:42,x_max:551,o:"m 280 116 l 280 116 q 330 130 306 116 q 371 166 353 144 l 371 166 l 371 504 q 401 530 371 530 l 401 530 l 527 530 q 551 506 551 530 l 551 506 l 547 20 q 530 0 547 0 l 530 0 l 391 0 q 374 18 374 0 l 374 18 l 374 65 q 371 73 374 71 q 363 69 368 74 l 363 69 q 284 9 325 28 q 194 -10 242 -10 l 194 -10 q 116 10 150 -10 q 62 66 82 29 q 42 154 42 103 l 42 154 l 42 503 q 70 530 42 530 l 70 530 l 199 530 q 220 506 220 530 l 220 506 l 220 176 q 237 132 220 148 q 280 116 253 116 l 280 116"},"?":{ha:542,x_min:0,x_max:516,o:"m 346 162 l 346 27 q 315 0 346 0 l 315 0 l 180 0 q 161 6 166 0 q 156 23 156 11 l 156 23 l 156 161 q 173 181 156 181 l 173 181 l 329 181 q 346 162 346 181 l 346 162 m 126 543 l 11 569 q 1 579 2 571 q 2 594 -1 586 l 2 594 q 101 711 34 670 q 264 752 168 752 l 264 752 q 397 728 340 752 q 485 665 453 704 q 516 579 516 626 l 516 579 q 496 502 516 533 q 448 446 476 470 q 390 398 419 421 q 342 345 361 374 q 322 274 322 316 l 322 274 q 316 259 322 265 q 299 253 309 253 l 299 253 l 205 253 q 182 279 182 253 l 182 279 q 198 367 182 330 q 238 431 214 403 q 285 480 261 458 q 325 523 309 502 q 341 569 341 544 l 341 569 q 318 617 341 599 q 262 634 295 634 l 262 634 q 217 625 239 634 q 178 597 195 615 q 149 554 160 579 l 149 554 q 141 543 146 545 q 126 543 136 541 l 126 543"},P:{ha:723,x_min:61,x_max:690,o:"m 690 506 l 690 506 q 656 381 690 433 q 560 302 621 329 q 417 274 499 274 l 417 274 l 274 274 q 263 264 263 274 l 263 264 l 263 26 q 233 0 263 0 l 233 0 l 84 0 q 66 6 71 0 q 61 23 61 11 l 61 23 l 61 721 q 78 742 61 742 l 78 742 l 394 742 q 543 717 476 742 q 650 639 610 691 q 690 506 690 586 l 690 506 m 484 509 l 484 509 q 471 558 484 538 q 434 589 457 578 q 382 599 411 599 l 382 599 l 284 599 q 263 579 263 599 l 263 579 l 263 438 q 278 418 263 418 l 278 418 l 388 418 q 458 443 432 418 q 484 509 484 468 l 484 509"},q:{ha:613,x_min:28,x_max:565,o:"m 467 530 l 540 530 q 560 524 555 530 q 565 506 565 518 l 565 506 l 565 -145 q 547 -165 565 -165 l 547 -165 l 404 -165 q 387 -146 387 -165 l 387 -146 l 387 29 q 383 44 387 42 q 370 39 378 46 l 370 39 q 310 4 343 18 q 241 -10 277 -10 l 241 -10 q 128 22 176 -10 q 54 115 80 54 q 28 265 28 176 l 28 265 q 55 410 28 348 q 132 507 82 472 q 251 541 182 541 l 251 541 q 321 530 291 541 q 375 501 351 519 q 417 459 399 482 l 417 459 q 425 455 421 454 l 425 455 q 430 462 428 455 l 430 462 l 444 508 q 453 525 447 519 q 467 530 458 530 l 467 530 m 387 138 l 387 345 q 377 392 387 372 q 348 424 366 412 q 304 436 329 436 l 304 436 q 254 419 276 436 q 220 364 232 402 q 208 266 208 326 l 208 266 q 219 169 208 205 q 252 116 230 132 q 301 99 273 99 l 301 99 q 349 109 327 99 q 387 138 370 119 l 387 138"},A:{ha:785,x_min:28,x_max:758,o:"m 180 0 l 45 0 q 31 10 35 0 q 31 33 26 19 l 31 33 l 277 721 q 287 737 281 732 q 305 742 293 742 l 305 742 l 479 742 q 513 717 504 742 l 513 717 l 756 31 q 756 11 759 22 q 742 0 753 0 l 742 0 l 570 0 q 549 16 554 0 l 549 16 l 505 146 q 501 154 503 150 q 490 157 498 157 l 490 157 l 263 157 q 249 146 252 157 l 249 146 l 202 14 q 195 4 200 8 q 180 0 190 0 l 180 0 m 306 309 l 445 309 q 453 312 450 309 l 453 312 q 454 328 457 316 l 454 328 l 382 529 q 376 534 380 534 q 370 529 372 534 l 370 529 l 297 328 q 297 312 293 317 l 297 312 q 306 309 299 309 l 306 309"},f:{ha:411,x_min:19,x_max:396,o:"m 296 530 l 369 530 q 386 524 381 530 q 391 510 391 518 l 391 510 l 391 426 q 372 409 391 409 l 372 409 l 300 409 q 289 397 289 409 l 289 397 l 289 20 q 271 0 289 0 l 271 0 l 127 0 q 111 19 111 0 l 111 19 l 111 399 q 103 409 111 409 l 103 409 l 39 409 q 19 426 19 409 l 19 426 l 19 510 q 24 524 19 518 q 41 530 29 530 l 41 530 l 98 530 q 111 546 111 530 l 111 546 l 111 603 q 151 705 111 668 q 262 742 191 742 l 262 742 l 370 742 q 396 719 396 742 l 396 719 l 396 643 q 392 631 396 636 q 380 625 388 625 l 380 625 l 332 625 q 298 609 312 625 q 284 570 284 593 l 284 570 l 284 542 q 296 530 284 530 l 296 530"},m:{ha:924,x_min:48,x_max:881,o:"m 196 0 l 72 0 q 48 23 48 0 l 48 23 l 48 509 q 65 530 48 530 l 65 530 l 206 530 q 223 512 223 530 l 223 512 l 223 464 q 226 457 223 458 q 235 460 229 455 l 235 460 q 285 502 259 484 q 339 531 310 520 q 398 541 368 541 l 398 541 q 487 516 450 541 q 540 446 524 491 l 540 446 q 546 443 542 442 q 553 448 549 444 l 553 448 q 603 495 574 474 q 665 528 632 515 q 727 540 697 540 l 727 540 q 839 497 796 540 q 881 376 881 454 l 881 376 l 881 27 q 853 0 881 0 l 853 0 l 724 0 q 708 5 712 0 q 703 23 703 10 l 703 23 l 703 355 q 687 398 703 383 q 643 413 671 413 l 643 413 q 612 407 627 413 q 585 390 597 400 q 562 369 572 380 l 562 369 q 555 356 557 362 q 553 341 553 349 l 553 341 l 553 27 q 526 0 553 0 l 526 0 l 397 0 q 381 5 386 0 q 376 23 376 10 l 376 23 l 376 355 q 361 398 376 383 q 316 413 345 413 l 316 413 q 268 400 290 413 q 226 357 246 386 l 226 357 l 226 26 q 196 0 226 0 l 196 0"}},familyName:"Libre Franklin",ascender:966,descender:-246,underlinePosition:-100,underlineThickness:50,boundingBox:{xMin:-166,yMin:-269,xMax:1406,yMax:1165},resolution:1e3,original_font_information:{license:"SIL Open Font License 1.1, The Libre Franklin Project Authors"},phrases:["Book a workshop","Have a conversation","Curious?","Pose a question","Ask for information"]};var sn=document.getElementById("figures"),ic=document.getElementById("fig-canvas"),ci=JSON.parse(document.getElementById("cv-data").textContent),Te=window.matchMedia("(prefers-reduced-motion: reduce)").matches,fr=Array.from(sn?sn.querySelectorAll(".fig-w"):[]),pr=0;fr.length&&!Te&&(sn.classList.add("is-cycling"),fr[0].classList.add("is-on"),setInterval(()=>{document.hidden||(fr[pr].classList.remove("is-on"),pr=(pr+1)%fr.length,fr[pr].classList.add("is-on"))},2800));function wn(i,t){let e=i,n=t,s=1.2,r=[new Pe(e,s,n)];for(let a=0;a<i;a++)for(let o=0;o<t;o++){let l=new yn(.3,.3,.22,16);l.translate(a-(i-1)/2,s/2+.11,o-(t-1)/2),r.push(l)}return pu(r)}function Pg(){let i;try{i=new ur({canvas:ic,antialias:!0,alpha:!0,powerPreference:"low-power"})}catch(C){sn.classList.add("no-3d");return}if(!i||!i.getContext()){sn.classList.add("no-3d");return}i.outputColorSpace=Se,sn.classList.add("has-3d");let t=new Fn,e=new Me(28,1,.1,100);e.position.set(0,0,30),t.add(new Un(16777215,727885,1.9));let n=new Bn(16777215,2.4);n.position.set(-6,10,8),t.add(n);let s=C=>new je({color:new qt(C),roughness:.45,metalness:.05,transparent:!0}),r=new be,a=[new me,new me,new me];a.forEach(C=>t.add(C));let o=ci.workshops?ci.workshops.length:13,l=new Dn(wn(4,2),s(16766011),o);a[0].add(l);let c=(C,D)=>D.set(Math.sin(C)+2*Math.sin(2*C),Math.cos(C)-2*Math.cos(2*C),-Math.sin(3*C)).multiplyScalar(.62);class h extends ke{getPoint(D,V=new F){return c(D*Math.PI*2,V)}}a[0].add(new pe(new jn(new h,240,.025,6,!0),new qe({color:9414399,transparent:!0,opacity:.45})));let d=ci.who||[],u=ci.seats||382,f=[16777215,16766011,9414399,13220095],g=new Dn(wn(1,1),s(16777215),u),y=[],m=0;for(d.map(C=>C.n).concat([Math.max(0,u-d.reduce((C,D)=>C+D.n,0))]).forEach((C,D)=>{for(let V=0;V<C&&m<u;V++,m++)g.setColorAt(m,new qt(f[D]||f[3]))});m<u;m++)g.setColorAt(m,new qt(f[0]));let E=Math.PI*(3-Math.sqrt(5));for(let C=0;C<u;C++){let D=1-C/(u-1)*2,V=Math.sqrt(1-D*D),q=E*C,ct=1.6+.55*Math.sin(C*12.9898)*Math.sin(C*78.233);y.push(new F(Math.cos(q)*V*ct,D*ct,Math.sin(q)*V*ct))}g.instanceColor.needsUpdate=!0,a[1].add(g);let T=d.map((C,D)=>{let V=Math.max(6,Math.round(C.n/5)),q=new Dn(wn(1,1),s(f[D]),V),ct=new me;return ct.add(q),ct.rotation.set(.5+D*.9,D*1.1,D*.6),a[2].add(ct),{mesh:q,g:ct,n:V,r:1+D*.36,glow:D===0?1:0}}),v=new F,A=new F,w=1,P=0,_=0;function b(){let C=ic.getBoundingClientRect(),D=Math.max(1,C.width),V=Math.max(1,C.height);i.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),i.setSize(D,V,!1),e.aspect=D/V,e.updateProjectionMatrix(),w=2*e.position.z*Math.tan(e.fov*Math.PI/360)/V,Array.from(sn.querySelectorAll(".fig")).forEach((tt,ot)=>{let lt=tt.getBoundingClientRect(),Tt=lt.left+lt.width/2-(C.left+D/2),Mt=Math.min(lt.width*.46,V*.44)*w;a[ot].position.set(Tt*w,0,0),a[ot].scale.setScalar(Mt/2.6)})}function I(C){let D=C/1e3;for(let V=0;V<o;V++){let q=V/o*Math.PI*2+D*.18;c(q,v),c(q+.05,A),r.position.copy(v),r.lookAt(A),r.scale.setScalar(.15),r.updateMatrix(),l.setMatrixAt(V,r.matrix)}l.instanceMatrix.needsUpdate=!0,a[0].rotation.set(.35+_*.2,D*.12+P*.35,0);for(let V=0;V<u;V++){let q=y[V],ct=D*.22+q.y*.55*Math.sin(D*.37),tt=1+.1*Math.sin(q.y*2.7+D*1.1)+.06*Math.sin(q.x*3.1-D*.8),ot=Math.cos(ct),lt=Math.sin(ct);r.position.set((q.x*ot-q.z*lt)*tt,q.y*tt,(q.x*lt+q.z*ot)*tt),r.rotation.set(q.x*2+D*.4,q.y*3,q.z*2),r.scale.setScalar(.09),r.updateMatrix(),g.setMatrixAt(V,r.matrix)}g.instanceMatrix.needsUpdate=!0,a[1].rotation.set(_*.2,P*.35,0),T.forEach((V,q)=>{let ct=Te||q===pr?1:0;V.glow+=(ct-V.glow)*.06,V.mesh.material.opacity=.28+.72*V.glow;let tt=1+.12*V.glow;for(let ot=0;ot<V.n;ot++){let lt=ot/V.n*Math.PI*2+D*(.25+q*.11)*(q%2?-1:1),Tt=1+.08*Math.sin(lt*3+D);r.position.set(Math.cos(lt)*V.r*tt*Tt,0,Math.sin(lt)*V.r*tt*Tt),r.rotation.set(0,-lt,0),r.scale.setScalar(.13),r.updateMatrix(),V.mesh.setMatrixAt(ot,r.matrix)}V.mesh.instanceMatrix.needsUpdate=!0,V.g.rotation.z+=.0015*(q+1)}),a[2].rotation.set(_*.2,D*.08+P*.35,0),i.render(t,e)}b(),window.addEventListener("resize",()=>{b(),N||I(performance.now())}),document.fonts&&document.fonts.ready&&document.fonts.ready.then(b),sn.addEventListener("pointermove",C=>{let D=sn.getBoundingClientRect();P=(C.clientX-D.left)/D.width-.5,_=(C.clientY-D.top)/D.height-.5});let N=!1,O=0,H=C=>{I(C),O=requestAnimationFrame(H)};if(Te){I(4e3);return}I(0),new IntersectionObserver(C=>{let D=C[0].isIntersecting;D&&!N?(N=!0,O=requestAnimationFrame(H)):!D&&N&&(N=!1,cancelAnimationFrame(O))}).observe(sn)}if(sn&&ic)try{Pg()}catch(i){sn.classList.add("no-3d")}var En=i=>Math.max(0,Math.min(1,i)),mu=i=>1+(1.6+1)*Math.pow(i-1,3)+1.6*Math.pow(i-1,2),mr=i=>i*i*(3-2*i);function Mo(i){try{let t=new ur({canvas:i,antialias:!0,alpha:!0,powerPreference:"low-power"});return t.getContext()?(t.outputColorSpace=Se,t):null}catch(t){return null}}function sc(i,t){let e=!1,n=0,s=r=>{t(r),n=requestAnimationFrame(s)};new IntersectionObserver(r=>{let a=r[0].isIntersecting;a&&!e?(e=!0,n=requestAnimationFrame(s)):!a&&e&&(e=!1,cancelAnimationFrame(n))}).observe(i)}function Lg(){let i=document.getElementById("say"),t=document.getElementById("say-canvas");if(!i||!t||Te)return;let e=Array.from(i.querySelectorAll(".say-w")),n=Mo(t);if(!n){let T=0;i.classList.add("is-cycling"),e[0].classList.add("is-on"),setInterval(()=>{e[T].classList.remove("is-on"),T=(T+1)%e.length,e[T].classList.add("is-on")},3400);return}i.classList.add("has-3d");let s=new yo(dr),r=dr.resolution,a=new Fn,o=new ii(0,1,1,-1,-100,100);o.position.z=10,a.add(new Un(16777215,4082291,1.5));let l=new Bn(16777215,1.8);l.position.set(-1,1.6,2.2),a.add(l);let c=dr.phrases.map(T=>{let v=new je({color:16777215,emissive:16777215,emissiveIntensity:.42,roughness:.55,transparent:!0,opacity:0}),A=new me;A.visible=!1,a.add(A);let w=0,P=[];for(let _ of T){let b=dr.glyphs[_];if(_!==" "){let I=new qs(s.generateShapes(_,1),{depth:.16,curveSegments:5,bevelEnabled:!0,bevelThickness:.02,bevelSize:.014,bevelSegments:2});I.computeBoundingBox();let N=I.boundingBox,O=(N.min.x+N.max.x)/2,H=(N.min.y+N.max.y)/2;I.translate(-O,-H,-.08);let C=new pe(I,v);C.userData={x:w+O,y:H,i:P.length},C.position.set(C.userData.x,C.userData.y,0),A.add(C),P.push(C)}w+=(b?b.ha:r*.3)/r}return{g:A,mat:v,letters:P,width:w}}),h=Math.max(...c.map(T=>T.width)),d=1,u=1;function f(){let T=t.getBoundingClientRect();d=Math.max(1,T.width),u=Math.max(1,T.height),n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.setSize(d,u,!1),o.left=0,o.right=d,o.top=u/2,o.bottom=-u/2,o.updateProjectionMatrix();let v=Math.min((d-4)/h,u*.62,72);c.forEach(A=>{A.g.scale.set(v,v,v),A.g.position.set(2,-v*.36,0)})}f(),window.addEventListener("resize",f);let g=1.1,y=2.6,m=.8,p=g+y+m,E=null;sc(i,T=>{let v=T/1e3;E===null&&(E=v);let A=v-E,w=Math.floor(A/p)%c.length,P=A%p;c.forEach((b,I)=>{b.g.visible=I===w});let _=c[w];_.mat.opacity=P<g?En(P/.5):P>g+y?1-En((P-g-y)/m):1,_.letters.forEach(b=>{let I=b.userData.i,N=I*.04,O=En((P-N)/.75),H=En((P-g-y-N*.5)/.6),C=mu(O),D=mr(H);b.rotation.x=(1-C)*-1.5+D*1.3+.12*Math.sin(v*1.3+I*.6),b.rotation.y=.22*Math.sin(v*1.1+I*.45),b.position.y=b.userData.y+.05*Math.sin(v*1.9+I*.7)+D*.25,b.position.z=(1-C)*-.6}),n.render(a,o)})}try{Lg()}catch(i){}function Fg(){let i=[],t=3.5*Math.PI;for(let r=0;r<=70;r++){let a=r/70*t,o=.06+.9*(a/t);i.push(new F(o*Math.sin(a),o*Math.cos(a),0))}let e=2.25,n=0;for(let r=1;r<=140;r++){let a=r/140*e,o=2*Math.PI*a,l=1-.2*a;i.push(new F(-.96*l*Math.cos(o),n+.36*o+.95*l*Math.sin(o),0))}let s=i[i.length-1];for(let r=1;r<=8;r++)i.push(new F(s.x*(1-r/8),s.y+r*.32,0));return i}function Dg(){let i=document.getElementById("unalome"),t=document.getElementById("unalome-canvas"),e=document.getElementById("hue-bubble"),n=i&&i.parentNode;if(!i||!t||!e)return;let s=Mo(t);if(!s){n.classList.add("no-3d");return}n.classList.add("has-3d");let r=new Fn,a=new Me(24,1,.1,100);r.add(new Un(16777215,727885,1.4));let o=new Bn(16777215,1.4);o.position.set(2,3,4),r.add(o);let l=new Qn(Fg()),c=new je({color:16777215,emissive:16777215,emissiveIntensity:.55,roughness:.4}),h=new jn(l,600,.075,10,!1),d=new pe(h,c),u=c,f=new me;f.add(d);let g=l.getPoint(1);[.7,1.35,1.9].forEach((C,D)=>{let V=new pe(new Nn(.16-D*.03,20,14),u);V.position.set(g.x,g.y+C,0),f.add(V)});let y=new pe(new Nn(.14,16,12),new qe({color:16777215,transparent:!0,opacity:.9}));f.add(y),r.add(f);let m=g.y+2.1,p=-1,E=(m+p)/2;f.position.y=-E;function T(){let C=t.getBoundingClientRect(),D=Math.max(1,C.width),V=Math.max(1,C.height);s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.setSize(D,V,!1),a.aspect=D/V;let q=(m-p)*1.06;a.position.set(0,0,q/2/Math.tan(a.fov*Math.PI/360)),a.updateProjectionMatrix()}T(),window.addEventListener("resize",T);let v=h.index.count,A="unalome-hue",w="w";try{let C=localStorage.getItem(A);(C==="w"||/^\d{1,3}$/.test(C||""))&&(w=C)}catch(C){}let P=document.getElementById("hue-range"),_=Array.from(e.querySelectorAll(".hue-dot"));function b(){let C=w==="w"?new qt(16777215):new qt().setHSL(+w/360,.85,.72);c.color.copy(C),c.emissive.copy(C),_.forEach(D=>D.setAttribute("aria-pressed",String(D.getAttribute("data-hue")===w))),w!=="w"&&(P.value=w),Te&&H(performance.now())}function I(C){w=String(C),b();try{localStorage.setItem(A,w)}catch(D){}}_.forEach(C=>C.addEventListener("click",()=>I(C.getAttribute("data-hue")))),P.addEventListener("input",()=>I(P.value));function N(C){i.setAttribute("aria-expanded",String(C)),C?(e.hidden=!1,requestAnimationFrame(()=>e.classList.add("is-open")),(_.find(D=>D.getAttribute("aria-pressed")==="true")||P).focus()):(e.classList.remove("is-open"),setTimeout(()=>{i.getAttribute("aria-expanded")==="false"&&(e.hidden=!0)},260))}i.addEventListener("click",()=>N(i.getAttribute("aria-expanded")!=="true")),document.addEventListener("keydown",C=>{C.key==="Escape"&&i.getAttribute("aria-expanded")==="true"&&(N(!1),i.focus())}),document.addEventListener("pointerdown",C=>{i.getAttribute("aria-expanded")==="true"&&!n.contains(C.target)&&N(!1)});let O=null;function H(C){let D=C/1e3;O===null&&(O=D);let V=Te?1:mr(En((D-O)/2.6));h.setDrawRange(0,Math.floor(v*V/3)*3),f.children.forEach(ct=>{ct!==d&&ct!==y&&(ct.visible=V>.98)});let q=Te?.5:mr(D*.16%1);y.visible=!Te&&V>.98,y.position.copy(l.getPointAt(q)),f.rotation.y=Te?.35:.55*Math.sin(D*.45),f.rotation.x=Te?0:.08*Math.sin(D*.7),s.render(r,a)}b(),Te?H(0):sc(n,H)}try{Dg()}catch(i){let t=document.querySelector(".unalome-wrap");t&&t.classList.add("no-3d")}var cs=(i,t)=>{let e=[],n=Math.max(8,Math.round(2*Math.PI*i));for(let s=0;s<n;s++){let r=s/n*Math.PI*2;e.push(t(Math.round(Math.cos(r)*i*10)/10,Math.round(Math.sin(r)*i*10)/10))}return e},ec=(i,t)=>{let e=[],n=(i-1)/2;for(let s=0;s<i;s++)for(let r=0;r<i;r++)(s===0||r===0||s===i-1||r===i-1)&&e.push([s-n,t,r-n]);return e},nc=[{name:"a tower",build:()=>{let i=[];for(let t=0;t<16;t++)i=i.concat(ec(5,t));for(let t=16;t<20;t++)i=i.concat(ec(7,t));for(let t=20;t<26;t++)i.push([0,t,0]);return i},col:(i,t)=>t>=16?16766011:t%4===0?10334709:16777215},{name:"a bridge",build:()=>{let i=[];for(let t=-15;t<=15;t++){for(let n=-1;n<=1;n++)i.push([t,7,n]);let e=Math.round(6.5*(1-t/15*(t/15)));i.push([t,e,-1.5],[t,e,1.5]),e>0&&i.push([t,e-1,-1.5],[t,e-1,1.5]),t%2===0&&i.push([t,8,-1.5],[t,8,1.5])}return[-15,-8,8,15].forEach(t=>{for(let e=0;e<7;e++)for(let n=-1;n<=1;n++)i.push([t,e,n])}),i},col:(i,t)=>t>=7?16777215:t>3?10334709:16766011},{name:"a temple",build:()=>{let i=[];for(let t=0;t<3;t++){let e=17-t*2,n=11-t*2;for(let s=0;s<e;s++)for(let r=0;r<n;r++)(t===2||s===0||r===0||s===e-1||r===n-1)&&i.push([s-(e-1)/2,t,r-(n-1)/2])}for(let t=-5;t<=5;t+=2)for(let e of[-3,3])for(let n=3;n<10;n++)i.push([t,n,e]);for(let t=-6;t<=6;t++)for(let e of[-3.5,3.5])i.push([t,10,e]);for(let t=0;t<6;t++)for(let e=-6+t;e<=6-t;e++)for(let n of[-3.5,3.5])i.push([e,11+t,n]);return i},col:(i,t)=>t<3?10334709:t>=10?16766011:16777215},{name:"a pyramid",build:()=>{let i=[];for(let t=0;t<9;t++){let e=17-2*t;i=i.concat(e>1?ec(e,t):[[0,t,0]])}return i},col:(i,t)=>t>6?16777215:t%2?16766011:14723072},{name:"a dome",build:()=>{let i=[];for(let t=0;t<4;t++)i=i.concat(cs(5,(e,n)=>[e,t,n]));for(let t=0;t<6;t++){let e=Math.sqrt(Math.max(0,25-t*1.2*(t*1.2)));i=i.concat(e>.6?cs(e,(n,s)=>[n,4+t,s]):[[0,4+t,0]])}for(let t=10;t<13;t++)i=i.concat(cs(.8,(e,n)=>[e,t,n]));return i},col:(i,t)=>t<4?16777215:t>=10?16766011:10334709},{name:"a lighthouse",build:()=>{let i=[];for(let t=0;t<15;t++)i=i.concat(cs(3.2-t*.08,(e,n)=>[e,t,n]));i=i.concat(cs(3.6,(t,e)=>[t,15,e]));for(let t=16;t<19;t++)i=i.concat(cs(1.4,(e,n)=>[e,t,n]));for(let t=19;t<22;t++)i.push([0,t,0]);return i},col:(i,t)=>t>=15?16766011:Math.floor(t/3)%2?15026253:16777215}];function Ng(i,t){let e=[];if(i.length>=t)for(let n=0;n<t;n++)e.push(i[Math.floor(n*i.length/t)]);else for(let n=0;n<t;n++)e.push(i[n%i.length]);return e}function Ug(){let i=document.getElementById("gx-clicker"),t=document.getElementById("galaxy"),e=document.getElementById("gx-canvas");if(!i||!t||!e)return;let n=!1;try{n=!!document.createElement("canvas").getContext("webgl2")}catch(X){}if(!n)return;i.hidden=!1;let s=document.getElementById("gx-state"),r=document.getElementById("gx-converge"),a=Array.from(t.querySelectorAll(".gx-node")),o="galaxy-settings",l={spin:30,spread:100,size:100,hue:"mix",show:{section:!0,workshop:!0,talk:!0}},c=JSON.parse(JSON.stringify(l));try{let X=JSON.parse(localStorage.getItem(o)||"null");X&&typeof X=="object"&&(c=Object.assign(c,X,{show:Object.assign({},l.show,X.show||{})}))}catch(X){}let h=()=>{try{localStorage.setItem(o,JSON.stringify(c))}catch(X){}},d=null,u,f,g,y,m,p=ci.seats||382,E=a.length,T=[],v=[],A=[],w=[],P=null,_=null,b=-1,I=1,N=0,O=0,H=0,C=0,D=26,V=0,q=0,ct=0,tt=!1,ot=0,lt=new Oe,Tt=new Oe,Mt=new Oe,Zt=0,zt=new be,Yt=new Oe,rt=new F(0,1,0),ut=new F(1,0,0),yt=new F,Bt=X=>X<.5?4*X*X*X:1-Math.pow(-2*X+2,3)/2,bt=[16777215,16766011,10334709,13227263],kt=7,Jt=()=>(kt=kt*16807%2147483647)/2147483647;function ht(){if(d=Mo(e),!d)return i.hidden=!0,!1;u=new Fn,f=new Me(45,1,.1,200),u.add(new Un(16777215,727885,1.6));let X=new Bn(16777215,2);X.position.set(-5,9,7),u.add(X),g=new me,u.add(g),g.quaternion.setFromAxisAngle(ut,.5),y=new Dn(wn(1,1),new je({roughness:.5,metalness:.05}),p),m=new Dn(wn(2,1),new je({roughness:.4,emissive:16777215,emissiveIntensity:.25}),E),g.add(y),g.add(m);for(let L=0;L<p;L++){let B=L%3,k=Math.pow(Jt(),.65),et=.6+k*9,j=B*(Math.PI*2/3)+k*3.6+(Jt()-.5)*.5,S=(Jt()-.5)*(1.6-k)*1.1;T.push(new F(Math.cos(j)*et,S,Math.sin(j)*et)),v.push([Jt()*6.3,Jt()*6.3,Jt()*6.3])}a.forEach((L,B)=>{let k=L.getAttribute("data-kind"),et=B%3,j=.25+B/E*.7,S=1.5+j*8.5,Q=et*(Math.PI*2/3)+j*3.6+.25;A.push(new F(Math.cos(Q)*S,k==="section"?.9:.4,Math.sin(Q)*S));let W=B/E*Math.PI*2;w.push(new F(Math.cos(W)*11.5,(B%3-1)*1.3-.5,Math.sin(W)*11.5)),m.setColorAt(B,new qt(k==="section"?16777215:k==="workshop"?16766011:10334709))}),xt();let Y=null,K=new Map,ft=0;e.addEventListener("pointerdown",L=>{e.setPointerCapture(L.pointerId),K.set(L.pointerId,[L.clientX,L.clientY]),Y=[L.clientX,L.clientY],V=q=0}),e.addEventListener("pointermove",L=>{if(K.has(L.pointerId)){if(K.set(L.pointerId,[L.clientX,L.clientY]),K.size===2){let[B,k]=Array.from(K.values()),et=Math.hypot(B[0]-k[0],B[1]-k[1]);ft&&mt(D*ft/et),ft=et;return}Y&&(V=(L.clientX-Y[0])*.006,q=(L.clientY-Y[1])*.006,Y=[L.clientX,L.clientY],gt(V,q))}});let Et=L=>{K.delete(L.pointerId),K.size<2&&(ft=0),K.size||(Y=null)};return e.addEventListener("pointerup",Et),e.addEventListener("pointercancel",Et),e.addEventListener("wheel",L=>{L.preventDefault(),mt(D*(1+Math.sign(L.deltaY)*.08))},{passive:!1}),window.addEventListener("resize",()=>{tt&&Nt()}),!0}let dt=!1;function mt(X){dt=!0,D=Math.max(8,Math.min(80,X))}function gt(X,Y){Yt.setFromAxisAngle(rt,X),g.quaternion.premultiply(Yt),Yt.setFromAxisAngle(ut,Y),g.quaternion.premultiply(Yt)}function xt(){let X=c.hue;for(let Y=0;Y<p;Y++){let K;if(P&&_&&N>.5?K=new qt(_[Y]):K=new qt(bt[Y*7%bt.length]),X!=="mix"){let ft={};K.getHSL(ft),K.setHSL(+X/360,.75,Math.max(.45,Math.min(.8,ft.l)))}y.setColorAt(Y,K)}y.instanceColor.needsUpdate=!0}function Nt(){let X=e.getBoundingClientRect();d.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),d.setSize(X.width,X.height,!1),f.aspect=X.width/Math.max(1,X.height),f.updateProjectionMatrix(),dt||(D=f.aspect<1?Math.min(70,26*.8/f.aspect):26)}function Lt(){let X=H===0;if(X){b=(b+1)%nc.length;let Y=nc[b],K=Ng(Y.build(),p),ft=0,Et=0;K.forEach(L=>{ft=Math.max(ft,L[1]),Et=Math.max(Et,Math.abs(L[0])*2,Math.abs(L[2])*2,L[1]*1.2)}),I=Math.min(1,12/Et),P=K.map(L=>new F(L[0]*1.02*I,(L[1]*1.2-ft*.6)*I,L[2]*1.02*I)),_=K.map(L=>Y.col(L[0],L[1],L[2]))}if(X){let Y=yt.set(0,0,1).applyQuaternion(g.quaternion),K=Math.atan2(Y.x,Y.z);lt.copy(g.quaternion),Tt.setFromAxisAngle(rt,K),Mt.setFromAxisAngle(ut,.32),Tt.premultiply(Mt),Zt=Te?0:performance.now(),Te&&g.quaternion.copy(Tt)}O=N,H=X?1:0,C=performance.now(),r.setAttribute("aria-pressed",String(X)),r.textContent=X?"Diverge":"Converge",s.textContent=X?`Converged: ${p} bricks build ${nc[b].name}. Press Diverge to scatter them, then Converge again for the next one.`:"Diverged: the galaxy again. Converge builds the next structure.",Te&&(N=H)}function Ot(X){let Y=Math.min(.05,(X-(ot||X))/1e3);if(ot=X,C){let k=En((X-C)/(Te?1:2400));N=O+(H-O)*k,k>=1&&(C=0),(O<.5!=N<.5||k>=1)&&xt()}if(Zt){let k=En((X-Zt)/1100);g.quaternion.slerpQuaternions(lt,Tt,Bt(k)),k>=1&&(Zt=0)}!Te&&!Zt&&(V*=.93,q*=.93,Math.abs(V)+Math.abs(q)>5e-4&&gt(V,q)),!Te&&c.spin&&!Zt&&(Yt.setFromAxisAngle(yt.set(0,1,0),Y*c.spin*.006),N>.5?g.quaternion.premultiply(Yt):g.quaternion.multiply(Yt));let K=c.spread/100,ft=.16*c.size/100;for(let k=0;k<p;k++){let et=T[k],j=0;if(P){let at=P[k],pt=En((at.y/I+9)/22)*.45;j=Bt(En((N-pt*(H?1:.5))/(1-pt*.6)))}let S=et.x*K,Q=et.y*K,W=et.z*K;if(P&&j>0){let at=P[k],pt=Math.sin(j*Math.PI)*3;zt.position.set(S+(at.x-S)*j,Q+(at.y-Q)*j+pt,W+(at.z-W)*j);let st=v[k];zt.rotation.set(st[0]*(1-j),st[1]*(1-j),st[2]*(1-j)),zt.scale.setScalar(ft*(1-j)+.97*I*j)}else{let at=Math.sin(X*7e-4+k)*.08;zt.position.set(S,Q+at,W);let pt=v[k];zt.rotation.set(pt[0]+X*3e-4,pt[1],pt[2]),zt.scale.setScalar(ft)}zt.updateMatrix(),y.setMatrixAt(k,zt.matrix)}y.instanceMatrix.needsUpdate=!0;let Et=Bt(En(N)),L=e.clientWidth,B=e.clientHeight;f.position.set(0,0,D),f.lookAt(0,0,0),g.updateMatrixWorld(),a.forEach((k,et)=>{let j=c.show[k.getAttribute("data-kind")],S=yt.copy(A[et]).multiplyScalar(K).lerp(w[et],Et);if(zt.position.copy(S),zt.rotation.set(0,X*6e-4+et,0),zt.scale.setScalar(j?.34:1e-4),zt.updateMatrix(),m.setMatrixAt(et,zt.matrix),!j){k.hidden=!0;return}k.hidden=!1,S.applyMatrix4(g.matrixWorld).project(f);let Q=(S.x*.5+.5)*L,W=(-S.y*.5+.5)*B,at=S.z>1;k.style.transform=`translate(${Math.round(Q)}px, ${Math.round(W)}px) translate(-50%, -150%)`,k.classList.toggle("is-far",at||Q<-40||Q>L+40||W<-40||W>B+40)}),m.instanceMatrix.needsUpdate=!0,d.render(u,f),tt&&(ct=requestAnimationFrame(Ot))}let Gt=document.getElementById("gx-spin"),U=document.getElementById("gx-spread"),Qt=document.getElementById("gx-size"),Wt=Array.from(t.querySelectorAll("[data-show]")),R=Array.from(t.querySelectorAll(".gx-hue"));function x(){Gt.value=c.spin,U.value=c.spread,Qt.value=c.size,Wt.forEach(X=>{X.checked=!!c.show[X.getAttribute("data-show")]}),R.forEach(X=>X.setAttribute("aria-pressed",String(X.getAttribute("data-hue")===c.hue)))}x(),Gt.addEventListener("input",()=>{c.spin=+Gt.value,h()}),U.addEventListener("input",()=>{c.spread=+U.value,h()}),Qt.addEventListener("input",()=>{c.size=+Qt.value,h()}),Wt.forEach(X=>X.addEventListener("change",()=>{c.show[X.getAttribute("data-show")]=X.checked,h()})),R.forEach(X=>X.addEventListener("click",()=>{c.hue=X.getAttribute("data-hue"),x(),h(),d&&xt()})),document.getElementById("gx-reset").addEventListener("click",()=>{c=JSON.parse(JSON.stringify(l)),x(),h(),d&&xt()}),r.addEventListener("click",()=>{d&&Lt()});let G=null;function Z(){!d&&!ht()||(G=document.activeElement,t.hidden=!1,document.documentElement.classList.add("tl-locked"),Nt(),tt=!0,ot=0,requestAnimationFrame(()=>t.classList.add("is-open")),ct=requestAnimationFrame(Ot),document.getElementById("gx-close").focus())}function it(X){tt=!1,cancelAnimationFrame(ct),t.classList.remove("is-open"),document.documentElement.classList.remove("tl-locked"),setTimeout(()=>{t.hidden=!0,X?X():G&&G.focus()},Te?0:250)}i.addEventListener("click",Z),document.getElementById("gx-close").addEventListener("click",()=>it()),t.addEventListener("keydown",X=>{if(X.key==="Escape"){X.preventDefault(),it();return}if(X.target.tagName!=="INPUT"){if(X.key==="ArrowLeft")gt(-.12,0);else if(X.key==="ArrowRight")gt(.12,0);else if(X.key==="ArrowUp")gt(0,-.12);else if(X.key==="ArrowDown")gt(0,.12);else if(X.key==="+"||X.key==="=")mt(D*.9);else if(X.key==="-")mt(D*1.1);else return;X.preventDefault()}}),a.forEach(X=>X.addEventListener("click",()=>{let Y=X.getAttribute("data-href");it(()=>{if(Y.charAt(0)==="#"){let K=document.createElement("a");K.href=Y,document.body.appendChild(K),K.click(),K.remove()}else location.href=Y})}));let _t=new Set;if("IntersectionObserver"in window){let X=document.querySelector(".contact-foot"),Y=document.querySelector(".name .c2"),K=new IntersectionObserver(ft=>{ft.forEach(Et=>{Et.isIntersecting?_t.add(Et.target):_t.delete(Et.target)}),i.classList.toggle("is-away",_t.has(X)),i.classList.toggle("is-left",_t.has(Y))});[X,Y].forEach(ft=>{ft&&K.observe(ft)})}}try{Ug()}catch(i){let t=document.getElementById("gx-clicker");t&&(t.hidden=!0)}function Bg(){let i=document.getElementById("play"),t=document.getElementById("play-canvas");if(!i||!t)return;let e=Mo(t);if(!e){i.classList.add("no-3d");return}e.setPixelRatio(Math.min(window.devicePixelRatio||1,2));let n=document.getElementById("play-note"),s=ci.education||[],r=ci.languages||[],a=ci.certificates||[],o=new Fn,l=new Me(32,1,.1,300);o.add(new Un(16777215,727885,1.7));let c=new Bn(16777215,2.2);c.position.set(-8,14,10),o.add(c);let h=new me;o.add(h);let d=(L,B)=>new je(Object.assign({color:new qt(L),roughness:.45,metalness:.05},B||{})),u=(L,B,k,et,j,S)=>{let Q=new pe(L,B);return Q.position.set(k,et,j),(S||h).add(Q),Q},f=(L,B,k,et,j)=>{let S=new F().subVectors(B,L),Q=new pe(new yn(k,k,S.length(),10),et);return Q.position.copy(L).addScaledVector(S,.5),Q.quaternion.setFromUnitVectors(new F(0,1,0),S.normalize()),j.add(Q),Q};u(new yn(13,13,.4,72),d(1390535,{roughness:.9}),0,-.2,0);let g=(L,B,k,et)=>{let j=u(new yn(k,k,.02,56),d(et,{roughness:.95,transparent:!0,opacity:.32}),L,.01,B);j.scale.z=.72};g(-6,3.2,4.2,9414399),g(6,-2.5,3.8,13220095);let y=d(16777215),m=d(16766011),p=d(13220095),E=d(9414399),T=d(727885),v=new me;v.position.set(-8.4,0,-2.6),v.rotation.y=.95,h.add(v),[-.6,.6].forEach(L=>u(new Pe(.16,3.4,.16),y,L,1.7,0,v));for(let L=0;L<5;L++)u(new Pe(1.2,.1,.1),y,0,.5+L*.6,0,v);u(wn(2,2),E,0,3.45,.8,v).scale.set(.8,.3,.8);let w=u(new Pe(1.2,.12,4.9),m,0,1.85,3.55,v);w.rotation.x=.71,[-.62,.62].forEach(L=>{let B=u(new Pe(.1,.3,4.9),m,L,2,3.55,v);B.rotation.x=.71});let P=(L,B,k,et,j)=>{let S=new me;S.position.set(L,0,B),S.rotation.y=k,h.add(S),[.6,1.8].forEach(W=>{u(wn(2,2),et,0,W,0,S).scale.set(1.2,1,1.2)});let Q=u(new Ls(2,1.5,4),j,0,3.2,0,S);Q.rotation.y=Math.PI/4,u(new Pe(.7,1.1,.06),T,0,.55,1.22,S),u(new Pe(.5,.5,.06),T,0,1.85,1.22,S)};P(8.7,-4.7,-.9,y,m),P(10.1,-.9,-1.45,p,E);let _=new me;_.position.set(4.6,0,5.4),_.rotation.y=-.3,h.add(_),[-2,2].forEach(L=>{let B=u(wn(5,1),m,0,.3,L,_);B.scale.y=.5}),[-2,2].forEach(L=>{let B=u(wn(1,3),m,L,.3,0,_);B.scale.y=.5}),u(new Pe(3,.3,3),d(15983541,{roughness:1}),0,.2,0,_),[[-.8,.5,16752519,2],[.7,-.6,9414399,1],[.2,.9,16777215,1],[-.5,-.8,13220095,2]].forEach(([L,B,k,et])=>{let j=u(wn(et,1),d(k),L,.52,B,_);j.scale.setScalar(.42),j.rotation.y=L*2});let b=[],I=(L,B,k,et)=>{let j=new me;j.position.set(L,0,B),j.rotation.y=k,h.add(j);let S=d(et),Q=d(727885,{roughness:.8}),W=[-.85,.85].map(pt=>u(new Ki(.62,.07,10,30),Q,pt,.62,0,j)),at=(pt,st)=>new F(pt,st,0);[[at(-.85,.62),at(0,.55)],[at(0,.55),at(-.25,1.35)],[at(-.25,1.35),at(-.85,.62)],[at(0,.55),at(.6,1.3)],[at(-.25,1.3),at(.6,1.3)],[at(.6,1.3),at(.85,.62)],[at(.6,1.3),at(.55,1.65)]].forEach(([pt,st])=>f(pt,st,.05,S,j)),f(new F(.55,1.65,-.35),new F(.55,1.65,.35),.04,S,j),u(new Pe(.42,.08,.2),T,-.28,1.42,0,j),b.push({g:j,wheels:W,x0:L,z0:B,ry:k,ph:b.length*2.1})};I(-5.6,6.2,.35,16752519),I(-3,8,.15,16777215);let N=L=>{let B=document.createElement("canvas");B.width=180,B.height=116;let k=B.getContext("2d"),et="#B9E4C9",j="#FBFBFF",S="#F6B8B8",Q="#B8C7F0",W="#FFE8A3";L===0?[et,j,S].forEach((pt,st)=>{k.fillStyle=pt,k.fillRect(st*60,0,60,116)}):L===1?(k.fillStyle=Q,k.fillRect(0,0,180,116),k.strokeStyle=j,k.lineWidth=18,k.beginPath(),k.moveTo(0,0),k.lineTo(180,116),k.moveTo(180,0),k.lineTo(0,116),k.stroke(),k.strokeStyle=S,k.lineWidth=6,k.stroke(),k.fillStyle=j,k.fillRect(74,0,32,116),k.fillRect(0,42,180,32),k.fillStyle=S,k.fillRect(80,0,20,116),k.fillRect(0,48,180,20)):(k.fillStyle=S,k.fillRect(0,0,180,116),k.fillStyle=W,k.fillRect(0,29,180,58));let at=new gi(B);return at.colorSpace=Se,at},O=[[-3.3,-9.4],[0,-9.9],[3.3,-9.4]].slice(0,Math.max(3,r.length)).map(([L,B],k)=>{let et=new me;et.position.set(L,0,B),h.add(et),u(new yn(.05,.05,3.7,8),d(16777215,{transparent:!0,opacity:.6}),0,1.85,0,et);let j=new vi(1.8,1.16,18,8);j.translate(.9,0,0);let S=u(j,new qe({map:N(k),transparent:!0,opacity:.5,side:tn}),.05,3.05,0,et);return S.userData={kind:"flag",i:k},{m:S,base:Float32Array.from(j.attributes.position.array),ph:k*1.7,gust:0}}),H=(L,B,k)=>{let et=document.createElement("canvas");et.width=380,et.height=540;let j=et.getContext("2d"),S=()=>{j.clearRect(0,0,380,540),j.fillStyle="#0B1B4D",j.fillRect(0,0,380,540),j.shadowColor="#8FA6FF",j.shadowBlur=16,j.strokeStyle="#9FE8FF",j.lineCap="round",j.lineWidth=4,j.strokeRect(18,18,344,504),j.lineWidth=2,j.strokeRect(30,30,320,480),j.lineWidth=3;let W=190,at=k?270:200;for(let st=0;st<4;st++)j.beginPath(),j.arc(W,at,30+st*22,Math.PI*(.15+st*.1+B*.2),Math.PI*(.85+st*.25+B*.2)),j.stroke();j.beginPath();for(let st=0;st<12;st+=.1){let Pt=4+st*4.2,Ct=W+Math.cos(st+B)*Pt,ne=at+Math.sin(st+B)*Pt;st===0?j.moveTo(Ct,ne):j.lineTo(Ct,ne)}j.stroke(),j.fillStyle="#9FE8FF",[[-1,1],[1,1]].forEach(([st])=>{j.beginPath(),j.arc(W+st*26,at-10,7,0,Math.PI*2),j.fill()}),j.font='800 30px "Libre Franklin", sans-serif',j.textAlign="center";let pt=["\u25C6","\u25CF","\u25B2"][B%3];if(j.fillText(pt,54,74),j.save(),j.translate(326,466),j.rotate(Math.PI),j.fillText(pt,0,0),j.restore(),!k){j.shadowBlur=10,j.fillStyle="#FFFFFF",j.font='800 30px "Libre Franklin", sans-serif';let st=L.split(" "),Pt=[],Ct="";st.forEach(ne=>{let ie=Ct?Ct+" "+ne:ne;j.measureText(ie).width>290&&Ct?(Pt.push(Ct),Ct=ne):Ct=ie}),Pt.push(Ct),Pt.slice(0,5).forEach((ne,ie)=>j.fillText(ne,190,352+ie*36))}j.shadowBlur=0};S();let Q=new gi(et);return Q.colorSpace=Se,Q.anisotropy=4,document.fonts&&document.fonts.load&&document.fonts.load('800 30px "Libre Franklin"').then(()=>{S(),Q.needsUpdate=!0}).catch(()=>{}),Q},C=3.3,D=2.75,V=new me;V.position.y=C,h.add(V);let q=new qe({color:10479871}),ct=a.map((L,B)=>{let k=B/a.length*Math.PI*2,et=H(L,B,!1),j=H(L,B,!0),S=at=>new je({map:at,emissiveMap:at,emissive:new qt(16777215),emissiveIntensity:.6,roughness:.6}),Q=new pe(new Pe(1.9,2.7,.07),[q,q,q,q,S(et),S(j)]),W=new me;return W.position.set(Math.sin(k)*D,0,Math.cos(k)*D),W.rotation.y=k,W.add(Q),V.add(W),Q.userData={kind:"card",i:B},{m:Q,holder:W,ph:B*2.2,flip:0}}),tt=u(new Nn(.3,24,16),new qe({color:15398655}),0,C,0),ot=u(new Nn(.95,24,16),new qe({color:10479871,transparent:!0,opacity:.16,blending:es,depthWrite:!1}),0,C,0),lt=new $s(10479871,7,9,1.4);lt.position.set(0,C,0),h.add(lt);let Tt=[{y:.85,r:11.2,col:16766011,ph:.3,dir:1,speed:.15},{y:2.15,r:7.4,col:13220095,ph:1.7,dir:-1,speed:.22},{y:5.5,r:4,col:9414399,ph:2.9,dir:1,speed:.32}],Mt=(L,B,k=new F)=>{let et=Tt[L],j=et.r*(1+.06*Math.sin(3*B+et.ph));return k.set(Math.cos(B)*j,et.y+.32*Math.sin(2*B+et.ph),Math.sin(B)*j)},Zt=(L,B,k,et,j)=>{let S=B?360:90;u(new jn(L,S,k,8,B),new qe({color:et,transparent:!0,opacity:j}),0,0,0),u(new jn(L,S,k*2.8,8,B),new qe({color:et,transparent:!0,opacity:j*.18,blending:es,depthWrite:!1}),0,0,0)};Tt.forEach((L,B)=>{let k=[];for(let et=0;et<64;et++)k.push(Mt(B,et/64*Math.PI*2));Zt(new Qn(k,!0,"centripetal"),!0,.07,L.col,.8)});let zt=(L,B)=>Zt(new Qn(L),!1,.05,B,.55);for(let L=0;L<4;L++){let B=L*Math.PI/2+Math.PI/4,k=Mt(0,B),et=Mt(1,B+.45);zt([k,new F().lerpVectors(k,et,.5).add(new F(0,.9,0)),et],15130367)}for(let L=0;L<3;L++){let B=L*Math.PI*2/3+.4,k=Mt(1,B),et=Mt(2,B+.5);zt([k,new F().lerpVectors(k,et,.5).add(new F(0,1.4,0)),et],13227263)}zt([new F(0,0,0),new F(.35,1,.15),new F(-.25,2.1,-.2),new F(0,C-.3,0)],16766011);for(let L=0;L<3;L++){let B=L*Math.PI*2/3+1.2,k=Mt(2,B);zt([new F(0,C+.3,0),new F(Math.cos(B)*1.4,C+1.5,Math.sin(B)*1.4),k],12570879)}let Yt=(L,B)=>{let k=document.createElement("canvas");k.width=256,k.height=128;let et=k.getContext("2d"),j=et.createLinearGradient(0,0,256,128);j.addColorStop(0,L),j.addColorStop(1,B),et.fillStyle=j,et.fillRect(0,0,256,128),et.globalAlpha=.55,et.strokeStyle="#FFFFFF",et.lineCap="round";for(let Q=0;Q<7;Q++){et.lineWidth=2+Q%3*2,et.beginPath();for(let W=0;W<=256;W+=8){let at=64+Math.sin(W/256*Math.PI*(2+Q)+Q*1.3)*(20+Q*5)+(Q-3)*9;W===0?et.moveTo(W,at):et.lineTo(W,at)}et.stroke()}let S=new gi(k);return S.colorSpace=Se,S},rt=[["#FFD43B","#FF9F87"],["#C9B8FF","#8FA6FF"],["#8FA6FF","#EAF0FF"],["#FF9F87","#C9B8FF"],["#9FE3C5","#8FA6FF"]].map(([L,B])=>new je({map:Yt(L,B),roughness:.15,metalness:.1})),ut=new Nn(.27,24,16),yt=[];[7,5,3].forEach((L,B)=>{for(let k=0;k<L;k++){let et=new pe(ut,rt[(B*2+k)%rt.length]);h.add(et),yt.push({m:et,li:B,a:k/L*Math.PI*2+B,v:.85+k*37%10/30,s:1,state:0,t:0,to:B})}});let Bt=2,bt=[16766011,13220095,9414399,16752519],kt=[new Ws(.72,3),new Ki(.52,.24,18,40),new Ps(.4,.7,8,16),new Ds(.7)],Jt=Float32Array.from(kt[0].attributes.position.array),ht=[[-4.5,1.5],[-2.2,4.2],[1.6,4.4],[4.4,1],[5.6,-2.6],[-5.6,-1.8],[-2.6,-5.8],[2.6,-6],[.4,7.6],[6.8,2.8],[4.6,5.4,.35],[-7.2,3.2],[-.2,-7.2],[7.2,-6.6]],dt=new Set,mt=kt.map((L,B)=>{let k=new pe(L,d(bt[B],{roughness:.32,emissive:new qt(bt[B]),emissiveIntensity:.12})),et=new me;et.add(k),h.add(et);let j=[0,3,6,9][B];dt.add(j);let S=new F(ht[j][0],0,ht[j][1]);return et.position.copy(S),k.userData={kind:"shape",i:B},{g:et,m:k,spot:j,from:S.clone(),to:S.clone(),t:1,dur:1,h:1.4,wait:.6+B*.9,land:0,yaw:0,spin:0,lift:ht[j][2]||0}}),gt=(L,B)=>{dt.delete(L.spot);let k=L.spot,et=-1;for(let S=0;S<6;S++){let Q=Math.floor(Math.random()*ht.length);if(dt.has(Q)||Q===L.spot)continue;let W=Math.hypot(ht[Q][0]-L.g.position.x,ht[Q][1]-L.g.position.z),at=(B?W:10-Math.abs(W-4.5))+Math.random()*2;at>et&&(et=at,k=Q)}dt.add(k),L.spot=k,L.from.copy(L.g.position),L.from.y=0,L.to.set(ht[k][0],0,ht[k][1]),L.lift=ht[k][2]||0;let j=L.from.distanceTo(L.to);L.dur=.7+j*.12,L.h=(B?2.6:1.1)+j*.12,L.t=0,L.spin=B?1:0},xt=L=>{let B=mt[L];B&&(B.t>=1?gt(B,!0):B.spin=1,n&&s[L]&&(n.textContent=s[L]))},Nt=-.35,Lt=0,Ot=!1,Gt=0,U=0,Qt=0,Wt=new Ks,R=new vt,x=new Ze(new F(0,1,0),0),G=new F,Z={on:!1},it=[...mt.map(L=>L.m),...ct.map(L=>L.m),...O.map(L=>L.m)],_t=L=>{let B=t.getBoundingClientRect();R.set((L.clientX-B.left)/B.width*2-1,-((L.clientY-B.top)/B.height)*2+1)},X=()=>{Wt.setFromCamera(R,l);let L=Wt.intersectObjects(it,!1)[0];return L?L.object.userData:null};t.addEventListener("pointerdown",L=>{Gt=U=L.clientX,Qt=0,Ot=!0,Lt=0}),window.addEventListener("pointermove",L=>{if(Ot){let k=L.clientX-U;U=L.clientX,Qt+=Math.abs(k),Qt>4&&(t.classList.add("is-dragging"),Nt+=k*.008,Lt=k*.008);return}if(L.target!==t){Z.on=!1;return}_t(L),Wt.setFromCamera(R,l);let B=Wt.ray.intersectPlane(x,G);Z.on=!!B,B&&h.worldToLocal(G),t.style.cursor=X()?"pointer":""},{passive:!0}),window.addEventListener("pointerup",L=>{if(!Ot||(Ot=!1,t.classList.remove("is-dragging"),Qt>4||L.target!==t))return;_t(L);let B=X();B&&(B.kind==="shape"?xt(B.i):B.kind==="card"?(ct[B.i].flip=1,n&&(n.textContent=a[B.i])):B.kind==="flag"&&(O[B.i].gust=1,n&&(n.textContent=r[B.i]||"")))}),document.querySelectorAll(".edu>li").forEach(L=>{let B=+L.getAttribute("data-i");L.addEventListener("mouseenter",()=>xt(B)),L.addEventListener("focus",()=>xt(B))});let Y=()=>{let L=t.clientWidth,B=t.clientHeight;if(!L||!B)return;e.setSize(L,B,!1),l.aspect=L/B;let k=Math.max(28,41/l.aspect);l.position.set(0,k*.4,k),l.lookAt(0,1.2,0),l.updateProjectionMatrix()};window.addEventListener("resize",Y),Y();let K=new F,ft=0,Et=0;sc(i,L=>{let B=Math.min(.05,ft?(L-ft)/1e3:.016);ft=L;let k=!Te;k&&(Et+=B);let et=Et;if(Ot||(Math.abs(Lt)>1e-4?(Nt+=Lt,Lt*=.94):k&&(Nt+=B*.05)),h.rotation.y=Nt,mt.forEach((S,Q)=>{if(S.t<1){S.t=Math.min(1,S.t+B/S.dur);let W=mr(S.t);S.g.position.lerpVectors(S.from,S.to,W),S.g.position.y=4*S.h*S.t*(1-S.t)+S.lift*W;let at=1+.22*Math.sin(Math.PI*S.t);S.m.scale.set(1/Math.sqrt(at),at,1/Math.sqrt(at));let pt=Math.atan2(S.to.x-S.from.x,S.to.z-S.from.z);S.yaw+=(pt-S.yaw)*.15,S.t>=1&&(S.land=1,S.wait=1.2+Math.random()*2.6)}else{k&&(S.wait-=B),S.land=Math.max(0,S.land-B*3);let W=1-.28*S.land*Math.sin(S.land*Math.PI),at=1+.035*Math.sin(et*2.4+Q);if(S.m.scale.set(at/Math.sqrt(W),at*W,at/Math.sqrt(W)),Z.on){let pt=Math.atan2(G.x-S.g.position.x,G.z-S.g.position.z);S.yaw+=(pt-S.yaw)*.06}S.wait<=0&&k&&gt(S,!1)}S.g.rotation.y=S.yaw,S.m.position.y=.72*S.m.scale.y,S.spin>0&&(S.spin=Math.max(0,S.spin-B*.9),S.m.rotation.y=(1-S.spin)*Math.PI*2),Q===1&&(S.m.rotation.x=.4+Math.sin(et*.8)*.2),Q===3&&(S.m.rotation.z=et*.4)}),k){let S=kt[0].attributes.position;for(let Q=0;Q<S.count;Q++){let W=Jt[Q*3],at=Jt[Q*3+1],pt=Jt[Q*3+2],st=1+.07*Math.sin(W*4+et*2.1)*Math.sin(at*4+et*1.6)+.04*Math.sin(pt*5+et*2.7);S.setXYZ(Q,W*st,at*st,pt*st)}S.needsUpdate=!0,kt[0].computeVertexNormals()}if(k&&(Bt-=B,Bt<=0)){Bt=1.6+Math.random()*2.4;let S=yt.filter(W=>W.state===0),Q=S[Math.floor(Math.random()*S.length)];Q&&(Q.to=Q.li===0||Q.li===2?1:Math.random()<.5?0:2,Q.state=1,Q.t=0)}yt.forEach((S,Q)=>{let W=Tt[S.li];k&&(S.a+=B*W.speed*W.dir*S.v),S.state===1?(S.t+=B/.35,S.s=Math.max(0,1-S.t),S.t>=1&&(S.li=S.to,S.state=2,S.t=0)):S.state===2&&(S.t+=B/.45,S.s=mu(Math.min(1,S.t)),S.t>=1&&(S.state=0,S.s=1)),Mt(S.li,S.a,K),S.m.position.copy(K),S.m.position.y+=.3,S.m.scale.setScalar(Math.max(.001,S.s)),S.m.rotation.z-=B*2.4*W.dir,S.m.rotation.y=-S.a}),V.rotation.y=et*.12,ct.forEach(S=>{S.holder.position.y=Math.sin(et*.9+S.ph)*.18,S.m.rotation.z=Math.sin(et*.6+S.ph)*.05,S.flip>0&&(S.flip=Math.max(0,S.flip-B*.8),S.m.rotation.y=mr(1-S.flip)*Math.PI*2)});let j=1+.08*Math.sin(et*2.2);ot.scale.setScalar(j),tt.scale.setScalar(.95+.05*Math.sin(et*3.1)),O.forEach(S=>{S.gust=Math.max(0,S.gust-B*.6);let Q=S.m.geometry.attributes.position,W=.1+S.gust*.25;for(let at=0;at<Q.count;at++){let pt=S.base[at*3];Q.setZ(at,Math.sin(pt*2.4-et*(2.6+S.gust*3)+S.ph)*W*(pt/1.8))}Q.needsUpdate=!0}),b.forEach(S=>{let Q=Math.sin(et*.45+S.ph)*.7;S.g.position.set(S.x0+Math.cos(S.ry)*Q,0,S.z0-Math.sin(S.ry)*Q),S.wheels.forEach(W=>{W.rotation.z=-Q/.62})}),e.render(o,l)})}try{Bg()}catch(i){let t=document.getElementById("play");t&&t.classList.add("no-3d")}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
