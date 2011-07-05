// GLOWCoreMath.js r1 - http://github.com/empaempa/GLOW
GLOW.Float=function(){function b(a){this.value=new Float32Array(1);this.value[0]=a!==void 0?a:0}b.prototype.set=function(a){this.value[0]=a;return this};b.prototype.add=function(a){this.value[0]+=a;return this};b.prototype.sub=function(a){this.value[0]-=a;return this};b.prototype.multiply=function(a){this.value[0]*=a;return this};b.prototype.divide=function(a){this.value[0]/=a;return this};b.prototype.modulo=function(a){this.value[0]%=a;return this};return b}();
GLOW.Int=function(){function b(a){this.value=new int32Array(1);this.value[0]=a!==void 0?a:0}b.prototype.set=function(a){this.value[0]=a;return this};b.prototype.add=function(a){this.value[0]+=a;return this};b.prototype.sub=function(a){this.value[0]-=a;return this};b.prototype.multiply=function(a){this.value[0]*=a;return this};b.prototype.divide=function(a){this.value[0]/=a;return this};b.prototype.modulo=function(a){this.value[0]%=a;return this};return b};
GLOW.Vector2=function(){function b(a,c){this.value=new Float32Array(2);this.value[0]=a!==void 0?a:0;this.value[1]=c!==void 0?c:0}b.prototype.set=function(a,c){this.value[0]=a;this.value[1]=c;return this};b.prototype.copy=function(a){this.value[0]=a.value[0];this.value[1]=a.value[1];return this};b.prototype.addSelf=function(a){this.value[0]+=a.value[0];this.value[1]+=a.value[1];return this};b.prototype.add=function(a,c){this.value[0]=a.value[0]+c.value[0];this.value[1]=a.value[1]+c.value[1];return this};
b.prototype.subSelf=function(a){this.value[0]-=a.x;this.value[1]-=a.y;return this};b.prototype.sub=function(a,c){this.value[0]=a.value[0]-c.value[0];this.value[1]=a.value[1]-c.value[1];return this};b.prototype.multiplySelf=function(a){this.value[0]*=a.value[0];this.value[1]*=a.value[1];return this};b.prototype.multiply=function(a,c){this.value[0]=a.value[0]*c.value[0];this.value[1]=a.value[1]*c.value[1];return this};b.prototype.multiplyScalar=function(a){this.value[0]*=a;this.value[1]*=a;return this};
b.prototype.negate=function(){this.value[0]=-this.value[0];this.value[1]=-this.value[1];return this};b.prototype.normalize=function(){this.multiplyScalar(1/this.length());return this};b.prototype.length=function(){return Math.sqrt(this.lengthSq())};b.prototype.lengthSq=function(){return this.value[0]*this.value[0]+this.value[1]*this.value[1]};b.prototype.clone=function(){return new GLOW.Vector2(this.value[0],this.value[1])};return b}();
GLOW.Vector3=function(){function b(a,c,b){this.value=new Float32Array(3);this.value[0]=a!==void 0?a:0;this.value[1]=c!==void 0?c:0;this.value[2]=b!==void 0?b:0}b.prototype.set=function(a,c,b){this.value[0]=a;this.value[1]=c;this.value[2]=b;return this};b.prototype.copy=function(){this.set(this.value[0],this.value[1],this.value[2]);return this};b.prototype.add=function(a,c){a=a.value;c=c.value;this.value[0]=a[0]+c[0];this.value[1]=a[1]+c[1];this.value[2]=a[2]+c[2];return this};b.prototype.addSelf=
function(a){a=a.value;this.value[0]+=a[0];this.value[1]+=a[1];this.value[2]+=a[2];return this};b.prototype.addScalar=function(a){this.value[0]+=a;this.value[1]+=a;this.value[2]+=a;return this};b.prototype.sub=function(a,c){a=a.value;c=c.value;this.value[0]=a[0]-c[0];this.value[1]=a[1]-c[1];this.value[2]=a[2]-c[2];return this};b.prototype.subSelf=function(a){a=a.value;this.value[0]-=a[0];this.value[1]-=a[1];this.value[2]-=a[2];return this};b.prototype.cross=function(a,c){a=a.value;c=c.value;this.value[0]=
a[1]*c[2]-a[2]*c[1];this.value[1]=a[2]*c[0]-a[0]*c[2];this.value[2]=a[0]*c[1]-a[1]*c[0];return this};b.prototype.crossSelf=function(a){var a=a.value,c=a[0],b=a[1],a=a[2],d=this.value[0],e=this.value[1],g=this.value[2];this.value[0]=b*g-a*e;this.value[1]=a*d-c*g;this.value[2]=c*e-b*d;return this};b.prototype.multiply=function(a,c){a=a.value;c=c.value;this.value[0]=a[0]*c[0];this.value[1]=a[1]*c[1];this.value[2]=a[2]*c[2];return this};b.prototype.multiplySelf=function(a){a=a.value;this.value[0]*=a[0];
this.value[1]*=a[1];this.value[2]*=a[2];return this};b.prototype.multiplyScalar=function(a){this.value[0]*=a;this.value[1]*=a;this.value[2]*=a;return this};b.prototype.divideSelf=function(a){a=a.value;this.value[0]/=a[0];this.value[1]/=a[1];this.value[2]/=a[2];return this};b.prototype.divideScalar=function(a){this.value[0]/=a;this.value[1]/=a;this.value[2]/=a;return this};b.prototype.negate=function(){this.value[0]=-this.value[0];this.value[1]=-this.value[1];this.value[2]=-this.value[2];return this};
b.prototype.dot=function(a){a=a.value;return this.value[0]*a[0]+this.value[1]*a[1]+this.value[2]*a[2]};b.prototype.distanceTo=function(a){return Math.sqrt(this.distanceToSquared(a))};b.prototype.distanceToSquared=function(a){var a=a.value,c=this.value[0]-a[0],b=this.value[1]-a[1],a=this.value[2]-a[2];return c*c+b*b+a*a};b.prototype.length=function(){return Math.sqrt(this.lengthSq())};b.prototype.lengthSq=function(){return this.value[0]*this.value[0]+this.value[1]*this.value[1]+this.value[2]*this.value[2]};
b.prototype.lengthManhattan=function(){return this.value[0]+this.value[1]+this.value[2]};b.prototype.normalize=function(){var a=Math.sqrt(this.value[0]*this.value[0]+this.value[1]*this.value[1]+this.value[2]*this.value[2]);a>0?this.multiplyScalar(1/a):this.set(0,0,0);return this};b.prototype.setPositionFromMatrix=function(a){a=a.value;this.value[0]=a[12];this.value[1]=a[13];this.value[2]=a[14]};b.prototype.setLength=function(a){return this.normalize().multiplyScalar(a)};b.prototype.isZero=function(){return Math.abs(this.value[0])<
1.0E-4&&Math.abs(this.value[1])<1.0E-4&&Math.abs(this.value[2])<1.0E-4};b.prototype.clone=function(){return GLOW.Vector3(this.value[0],this.value[1],this.value[2])};return b}();
GLOW.Vector4=function(){function b(a,c,b,d){this.value=new Float32Array(4);this.value[0]=a!==void 0?a:0;this.value[1]=c!==void 0?c:0;this.value[2]=b!==void 0?b:0;this.value[3]=d!==void 0?d:0}b.prototype.set=function(a,c,b,d){this.value[0]=a;this.value[1]=c;this.value[2]=b;this.value[3]=d;return this};b.prototype.copy=function(a){this.value[0]=a.value[0];this.value[1]=a.value[1];this.value[2]=a.value[2];this.value[3]=a.value[3];return this};b.prototype.add=function(a,c){this.value[0]=a.value[0]+c.value[0];
this.value[1]=a.value[1]+c.value[1];this.value[2]=a.value[2]+c.value[2];this.value[3]=a.value[3]+c.value[3];return this};b.prototype.addSelf=function(a){this.value[0]+=a.value[0];this.value[1]+=a.value[1];this.value[2]+=a.value[2];this.value[3]+=a.value[3];return this};b.prototype.sub=function(a,c){this.value[0]=a.value[0]-c.value[0];this.value[1]=a.value[1]-c.value[1];this.value[2]=a.value[2]-c.value[2];this.value[3]=a.value[3]-c.value[3];return this};b.prototype.subSelf=function(a){this.value[0]-=
a.value[0];this.value[1]-=a.value[1];this.value[2]-=a.value[2];this.value[3]-=a.value[3];return this};b.prototype.multiplyScalar=function(a){this.value[0]*=a;this.value[1]*=a;this.value[2]*=a;this.value[3]*=a;return this};b.prototype.divideScalar=function(a){this.value[0]/=a;this.value[1]/=a;this.value[2]/=a;this.value[3]/=a;return this};b.prototype.lerpSelf=function(a,c){this.value[0]+=(a.x-this.value[0])*c;this.value[1]+=(a.y-this.value[1])*c;this.value[2]+=(a.z-this.value[2])*c;this.value[3]+=
(a.w-this.value[3])*c;return this};b.prototype.clone=function(){return new GLOW.Vector4(this.value[0],this.value[1],this.value[2],this.value[3])};return b}();
GLOW.Matrix3=function(){function b(){this.value=new Float32Array(9);this.identity()}b.prototype.set=function(a,c,b,d,e,g,f,h,i){this.value[0]=a;this.value[4]=c;this.value[8]=b;this.value[1]=d;this.value[5]=e;this.value[9]=g;this.value[2]=f;this.value[6]=h;this.value[10]=i;return this};b.prototype.identity=function(){this.set(1,0,0,0,1,0,0,0,1);return this};return b}();
GLOW.Matrix4=function(){function b(){this.value=new Float32Array(16);this.rotation=new GLOW.Vector3;this.position=new GLOW.Vector3;this.columnX=new GLOW.Vector3;this.columnY=new GLOW.Vector3;this.columnZ=new GLOW.Vector3;this.identity()}b.prototype.set=function(a,c,b,d,e,g,f,h,i,k,l,n,o,r,p,q){this.value[0]=a;this.value[4]=c;this.value[8]=b;this.value[12]=d;this.value[1]=e;this.value[5]=g;this.value[9]=f;this.value[13]=h;this.value[2]=i;this.value[6]=k;this.value[10]=l;this.value[14]=n;this.value[3]=
o;this.value[7]=r;this.value[11]=p;this.value[15]=q;return this};b.prototype.identity=function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this};b.prototype.copy=function(a){a=a.value;this.set(a[0],a[4],a[8],a[12],a[1],a[5],a[9],a[13],a[2],a[6],a[10],a[14],a[3],a[7],a[11],a[15]);return this};b.prototype.lookAt=function(a,c){var b=GLOW.Matrix4.tempVector3A,d=GLOW.Matrix4.tempVector3B,e=GLOW.Matrix4.tempVector3C,g=this.getPosition();g.value[0]=this.value[12];g.value[1]=this.value[13];g.value[2]=
this.value[14];e.sub(g,a).normalize();e.length()===0&&(e.value[3]=1);b.cross(c,e).normalize();b.length()===0&&(e.value[0]+=1.0E-4,b.cross(c,e).normalize());d.cross(e,b).normalize();b=b.value;d=d.value;e=e.value;this.value[0]=b[0];this.value[4]=d[0];this.value[8]=e[0];this.value[1]=b[1];this.value[5]=d[1];this.value[9]=e[1];this.value[2]=b[2];this.value[6]=d[2];this.value[10]=e[2];return this};b.prototype.multiplyVector3=function(a){var c=a.value[0],b=a.value[1],d=a.value[2],e=1/(this.value[3]*c+this.value[7]*
b+this.value[11]*d+this.value[15]);a.value[0]=(this.value[0]*c+this.value[4]*b+this.value[8]*d+this.value[12])*e;a.value[1]=(this.value[1]*c+this.value[5]*b+this.value[9]*d+this.value[13])*e;a.value[2]=(this.value[2]*c+this.value[6]*b+this.value[10]*d+this.value[14])*e;return a};b.prototype.multiplyVector4=function(a){var c=a.value[0],b=a.value[1],d=a.value[2],e=a.value[3];a.value[0]=this.value[0]*c+this.value[4]*b+this.value[8]*d+this.value[12]*e;a.value[1]=this.value[1]*c+this.value[5]*b+this.value[9]*
d+this.value[13]*e;a.value[2]=this.value[2]*c+this.value[6]*b+this.value[10]*d+this.value[14]*e;a.value[3]=this.value[3]*c+this.value[7]*b+this.value[11]*d+this.value[15]*e;return a};b.prototype.rotateAxis=function(a){var c=a.value[0],b=a.value[1],d=a.value[2];a.value[0]=c*this.value[0]+b*this.value[4]+d*this.value[8];a.value[1]=c*this.value[1]+b*this.value[5]+d*this.value[9];a.value[2]=c*this.value[2]+b*this.value[6]+d*this.value[10];a.normalize();return a};b.prototype.crossVector=function(a){var c=
GLOW.Vector4(),b=a.value[0],d=a.value[1],e=a.value[2],a=a.value[3];c.value[0]=this.value[0]*b+this.value[4]*d+this.value[8]*e+this.value[12]*a;c.value[1]=this.value[1]*b+this.value[5]*d+this.value[9]*e+this.value[13]*a;c.value[2]=this.value[2]*b+this.value[6]*d+this.value[10]*e+this.value[14]*a;c.value[3]=a?this.value[3]*b+this.value[7]*d+this.value[11]*e+this.value[15]*a:1;return c};b.prototype.multiply=function(a,c){var a=a.value,c=c.value,b=a[0],d=a[4],e=a[8],g=a[12],f=a[1],h=a[5],i=a[9],k=a[13],
l=a[2],n=a[6],o=a[10],r=a[14],p=a[3],q=a[7],s=a[11],t=a[15],u=c[0],v=c[4],w=c[8],x=c[12],y=c[1],z=c[5],A=c[9],B=c[13],C=c[2],D=c[6],E=c[10],F=c[14];this.value[0]=b*u+d*y+e*C;this.value[4]=b*v+d*z+e*D;this.value[8]=b*w+d*A+e*E;this.value[12]=b*x+d*B+e*F+g;this.value[1]=f*u+h*y+i*C;this.value[5]=f*v+h*z+i*D;this.value[9]=f*w+h*A+i*E;this.value[13]=f*x+h*B+i*F+k;this.value[2]=l*u+n*y+o*C;this.value[6]=l*v+n*z+o*D;this.value[10]=l*w+n*A+o*E;this.value[14]=l*x+n*B+o*F+r;this.value[3]=p*u+q*y+s*C;this.value[7]=
p*v+q*z+s*D;this.value[11]=p*w+q*A+s*E;this.value[15]=p*x+q*B+s*F+t;return this};b.prototype.multiplySelf=function(a){this.multiply(m,a);return this};b.prototype.multiplyScalar=function(a){this.value[0]*=a;this.value[4]*=a;this.value[8]*=a;this.value[12]*=a;this.value[1]*=a;this.value[5]*=a;this.value[9]*=a;this.value[13]*=a;this.value[2]*=a;this.value[6]*=a;this.value[10]*=a;this.value[14]*=a;this.value[3]*=a;this.value[7]*=a;this.value[11]*=a;this.value[15]*=a;return this};b.prototype.determinant=
function(){var a=this.value[0],c=this.value[4],b=this.value[8],d=this.value[12],e=this.value[1],g=this.value[5],f=this.value[9],h=this.value[13],i=this.value[2],k=this.value[6],l=this.value[10],n=this.value[14],o=this.value[3],r=this.value[7],p=this.value[11],q=this.value[15];return d*f*k*o-b*h*k*o-d*g*l*o+c*h*l*o+b*g*n*o-c*f*n*o-d*f*i*r+b*h*i*r+d*e*l*r-a*h*l*r-b*e*n*r+a*f*n*r+d*g*i*p-c*h*i*p-d*e*k*p+a*h*k*p+c*e*n*p-a*g*n*p-b*g*i*q+c*f*i*q+b*e*k*q-a*f*k*q-c*e*l*q+a*g*l*q};b.prototype.transpose=function(){var a;
a=this.value[1];this.value[1]=this.value[4];this.value[4]=a;a=this.value[2];this.value[2]=this.value[8];this.value[8]=a;a=this.value[6];this.value[6]=this.value[9];this.value[9]=a;a=this.value[3];this.value[3]=this.value[12];this.value[12]=a;a=this.value[7];this.value[7]=this.value[13];this.value[13]=a;a=this.value[11];this.value[11]=this.value[14];this.value[11]=a;return this};b.prototype.clone=function(){var a=new GLOW.Matrix4;a.value=new Float32Array(m);return a};b.prototype.setPosition=function(a,
c,b){this.value[12]=a;this.value[13]=c;this.value[14]=b;return this};b.prototype.addPosition=function(a,c,b){this.value[12]+=a;this.value[13]+=c;this.value[14]+=b};b.prototype.setRotation=function(a,c,b){this.rotation.set(a,c,b);var d=Math.cos(a),a=Math.sin(a),e=Math.cos(c),c=Math.sin(c),g=Math.cos(b),b=Math.sin(b),f=d*c,h=a*c;this.value[0]=e*g;this.value[4]=-e*b;this.value[8]=c;this.value[1]=h*g+d*b;this.value[5]=-h*b+d*g;this.value[9]=-a*e;this.value[2]=-f*g+a*b;this.value[6]=f*b+a*g;this.value[10]=
d*e;return this};b.prototype.addRotation=function(a,b,j){this.rotation.value[0]+=a;this.rotation.value[1]+=b;this.rotation.value[2]+=j;this.setRotation(this.rotation.value[0],this.rotation.value[1],this.rotation.value[2])};b.prototype.getPosition=function(){this.position.set(this.value[12],this.value[13],this.value[14]);return this.position};b.prototype.getColumnX=function(){this.columnX.set(this.value[0],this.value[1],this.value[2]);return this.columnX};b.prototype.getColumnY=function(){this.columnY.set(this.value[4],
this.value[5],this.value[6]);return this.columnY};b.prototype.getColumnZ=function(){this.columnZ.set(this.value[8],this.value[9],this.value[10]);return this.columnZ};b.prototype.scale=function(a,b,j){var d;b!==void 0&&j!==void 0?d=a:(d=a.value[0],b=a.value[1],j=a.value[2]);this.value[0]*=d;this.value[4]*=b;this.value[8]*=j;this.value[1]*=d;this.value[5]*=b;this.value[9]*=j;this.value[2]*=d;this.value[6]*=b;this.value[10]*=j;this.value[3]*=d;this.value[7]*=b;this.value[11]*=j;return this};return b}();
GLOW.Matrix4.makeInverse=function(b,a){a===void 0&&(a=new GLOW.Matrix4);var c=b.value,j=a.value,d=c[0],e=c[4],g=c[8],f=c[12],h=c[1],i=c[5],k=c[9],l=c[13],n=c[2],o=c[6],r=c[10],p=c[14],q=c[3],s=c[7],t=c[11],c=c[15];j[0]=k*p*s-l*r*s+l*o*t-i*p*t-k*o*c+i*r*c;j[1]=l*r*q-k*p*q-l*n*t+h*p*t+k*n*c-h*r*c;j[2]=i*p*q-l*o*q+l*n*s-h*p*s-i*n*c+h*o*c;j[3]=k*o*q-i*r*q-k*n*s+h*r*s+i*n*t-h*o*t;j[4]=f*r*s-g*p*s-f*o*t+e*p*t+g*o*c-e*r*c;j[5]=g*p*q-f*r*q+f*n*t-d*p*t-g*n*c+d*r*c;j[6]=f*o*q-e*p*q-f*n*s+d*p*s+e*n*c-d*o*c;
j[7]=e*r*q-g*o*q+g*n*s-d*r*s-e*n*t+d*o*t;j[8]=g*l*s-f*k*s+f*i*t-e*l*t-g*i*c+e*k*c;j[9]=f*k*q-g*l*q-f*h*t+d*l*t+g*h*c-d*k*c;j[10]=g*l*q-f*i*q+f*h*s-d*l*s-e*h*c+d*i*c;j[11]=g*i*q-e*k*q-g*h*s+d*k*s+e*h*t-d*i*t;j[12]=f*k*o-g*l*o-f*i*r+e*l*r+g*i*p-e*k*p;j[13]=g*l*n-f*k*n+f*h*r-d*l*r-g*h*p+d*k*p;j[14]=f*i*n-e*l*n-f*h*o+d*l*o+e*h*p-d*i*p;j[15]=e*k*n-g*i*n+g*h*o-d*k*o-e*h*r+d*i*r;a.multiplyScalar(1/b.determinant());return a};
GLOW.Matrix4.makeFrustum=function(b,a,c,j,d,e){var g,f;g=new GLOW.Matrix4;f=g.value;f[0]=2*d/(a-b);f[4]=0;f[8]=(a+b)/(a-b);f[12]=0;f[1]=0;f[5]=2*d/(j-c);f[9]=(j+c)/(j-c);f[13]=0;f[2]=0;f[6]=0;f[10]=-(e+d)/(e-d);f[14]=-2*e*d/(e-d);f[3]=0;f[7]=0;f[11]=-1;f[15]=0;return g};GLOW.Matrix4.makeProjection=function(b,a,c,j){var d,b=c*Math.tan(b*Math.PI/360);d=-b;return GLOW.Matrix4.makeFrustum(d*a,b*a,d,b,c,j)};
GLOW.Matrix4.makeOrtho=function(b,a,c,j,d,e){var g,f,h,i,k;g=GLOW.Matrix4();h=a-b;i=c-j;k=e-d;f=g.value;f[0]=2/h;f[4]=0;f[8]=0;f[12]=-((a+b)/h);f[1]=0;f[5]=2/i;f[9]=0;f[13]=-((c+j)/i);f[2]=0;f[6]=0;f[10]=-2/k;f[14]=-((e+d)/k);f[3]=0;f[7]=0;f[11]=0;f[15]=1;return g};GLOW.Matrix4.tempVector3A=new GLOW.Vector3;GLOW.Matrix4.tempVector3B=new GLOW.Vector3;GLOW.Matrix4.tempVector3C=new GLOW.Vector3;GLOW.Matrix4.tempVector3D=new GLOW.Vector3;
