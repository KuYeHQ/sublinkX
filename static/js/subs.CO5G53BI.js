import{bd as e,d as t,am as a,r,bq as n,o,C as l,c as i,e as u,Z as s,w as d,a2 as c,t as f,M as h,N as v,m as p,l as m,g,$ as y,ay as C,W as w,aH as E,a1 as _,a0 as M,aN as N,aO as R}from"./index.BIi4ItqP.js";import{E as A}from"./el-card.BsgHnynV.js";import{E as b,a as k,c as I,d as P,b as S}from"./el-table-column.DSRLcwN5.js";import{E as z}from"./el-tag.BlCuka-F.js";import{E as V,a as O}from"./el-select.DYCQhOXW.js";import"./el-scrollbar.BCBj2iz1.js";import"./el-popper.Bw01UaGB.js";import{E as D}from"./el-link.Cv3AUpB_.js";import{g as U,E as T,a as L}from"./node.D9OnoKmp.js";import"./el-tooltip.l0sNRNKZ.js";import{E as x,a as B}from"./el-col.BvEv3s5v.js";import{E as H}from"./el-dialog.DdlDQyiG.js";import{g as F}from"./temp.DkV6rwn_.js";import{_ as j}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./isEqual.D1ZakqDZ.js";import"./_initCloneObject.Cr1PHk_Z.js";import"./debounce.3T7hALvl.js";import"./index.Clffk_n0.js";import"./strings.BgEpsYir.js";import"./isUndefined.DgmxjSXK.js";import"./use-dialog.CS3UFbH-.js";import"./refs.Dr4-jDrv.js";function Q(t){return e({url:"/api/v1/subscription/delete",method:"delete",params:t})}var Y,K,$,G,X=function(){return X=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},X.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError,function(e){var t=function(){function t(e,a,r,o){if(this.version=e,this.errorCorrectionLevel=a,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw new RangeError("Version value out of range");if(o<-1||o>7)throw new RangeError("Mask value out of range");this.size=4*e+17;for(var l=[],i=0;i<this.size;i++)l.push(!1);for(i=0;i<this.size;i++)this.modules.push(l.slice()),this.isFunction.push(l.slice());this.drawFunctionPatterns();var u=this.addEccAndInterleave(r);if(this.drawCodewords(u),-1==o){var s=1e9;for(i=0;i<8;i++){this.applyMask(i),this.drawFormatBits(i);var d=this.getPenaltyScore();d<s&&(o=i,s=d),this.applyMask(i)}}n(0<=o&&o<=7),this.mask=o,this.applyMask(o),this.drawFormatBits(o),this.isFunction=[]}return t.encodeText=function(a,r){var n=e.QrSegment.makeSegments(a);return t.encodeSegments(n,r)},t.encodeBinary=function(a,r){var n=e.QrSegment.makeBytes(a);return t.encodeSegments([n],r)},t.encodeSegments=function(e,r,l,i,u,s){if(void 0===l&&(l=1),void 0===i&&(i=40),void 0===u&&(u=-1),void 0===s&&(s=!0),!(t.MIN_VERSION<=l&&l<=i&&i<=t.MAX_VERSION)||u<-1||u>7)throw new RangeError("Invalid value");var d,c;for(d=l;;d++){var f=8*t.getNumDataCodewords(d,r),h=o.getTotalBits(e,d);if(h<=f){c=h;break}if(d>=i)throw new RangeError("Data too long")}for(var v=0,p=[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH];v<p.length;v++){var m=p[v];s&&c<=8*t.getNumDataCodewords(d,m)&&(r=m)}for(var g=[],y=0,C=e;y<C.length;y++){var w=C[y];a(w.mode.modeBits,4,g),a(w.numChars,w.mode.numCharCountBits(d),g);for(var E=0,_=w.getData();E<_.length;E++){var M=_[E];g.push(M)}}n(g.length==c);var N=8*t.getNumDataCodewords(d,r);n(g.length<=N),a(0,Math.min(4,N-g.length),g),a(0,(8-g.length%8)%8,g),n(g.length%8==0);for(var R=236;g.length<N;R^=253)a(R,8,g);for(var A=[];8*A.length<g.length;)A.push(0);return g.forEach((function(e,t){return A[t>>>3]|=e<<7-(7&t)})),new t(d,r,A,u)},t.prototype.getModule=function(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]},t.prototype.getModules=function(){return this.modules},t.prototype.drawFunctionPatterns=function(){for(var e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);var t=this.getAlignmentPatternPositions(),a=t.length;for(e=0;e<a;e++)for(var r=0;r<a;r++)0==e&&0==r||0==e&&r==a-1||e==a-1&&0==r||this.drawAlignmentPattern(t[e],t[r]);this.drawFormatBits(0),this.drawVersion()},t.prototype.drawFormatBits=function(e){for(var t=this.errorCorrectionLevel.formatBits<<3|e,a=t,o=0;o<10;o++)a=a<<1^1335*(a>>>9);var l=21522^(t<<10|a);n(l>>>15==0);for(o=0;o<=5;o++)this.setFunctionModule(8,o,r(l,o));this.setFunctionModule(8,7,r(l,6)),this.setFunctionModule(8,8,r(l,7)),this.setFunctionModule(7,8,r(l,8));for(o=9;o<15;o++)this.setFunctionModule(14-o,8,r(l,o));for(o=0;o<8;o++)this.setFunctionModule(this.size-1-o,8,r(l,o));for(o=8;o<15;o++)this.setFunctionModule(8,this.size-15+o,r(l,o));this.setFunctionModule(8,this.size-8,!0)},t.prototype.drawVersion=function(){if(!(this.version<7)){for(var e=this.version,t=0;t<12;t++)e=e<<1^7973*(e>>>11);var a=this.version<<12|e;n(a>>>18==0);for(t=0;t<18;t++){var o=r(a,t),l=this.size-11+t%3,i=Math.floor(t/3);this.setFunctionModule(l,i,o),this.setFunctionModule(i,l,o)}}},t.prototype.drawFinderPattern=function(e,t){for(var a=-4;a<=4;a++)for(var r=-4;r<=4;r++){var n=Math.max(Math.abs(r),Math.abs(a)),o=e+r,l=t+a;0<=o&&o<this.size&&0<=l&&l<this.size&&this.setFunctionModule(o,l,2!=n&&4!=n)}},t.prototype.drawAlignmentPattern=function(e,t){for(var a=-2;a<=2;a++)for(var r=-2;r<=2;r++)this.setFunctionModule(e+r,t+a,1!=Math.max(Math.abs(r),Math.abs(a)))},t.prototype.setFunctionModule=function(e,t,a){this.modules[t][e]=a,this.isFunction[t][e]=!0},t.prototype.addEccAndInterleave=function(e){var a=this.version,r=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(a,r))throw new RangeError("Invalid argument");for(var o=t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][a],l=t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][a],i=Math.floor(t.getNumRawDataModules(a)/8),u=o-i%o,s=Math.floor(i/o),d=[],c=t.reedSolomonComputeDivisor(l),f=0,h=0;f<o;f++){var v=e.slice(h,h+s-l+(f<u?0:1));h+=v.length;var p=t.reedSolomonComputeRemainder(v,c);f<u&&v.push(0),d.push(v.concat(p))}var m=[],g=function(e){d.forEach((function(t,a){(e!=s-l||a>=u)&&m.push(t[e])}))};for(f=0;f<d[0].length;f++)g(f);return n(m.length==i),m},t.prototype.drawCodewords=function(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var a=0,o=this.size-1;o>=1;o-=2){6==o&&(o=5);for(var l=0;l<this.size;l++)for(var i=0;i<2;i++){var u=o-i,s=!(o+1&2)?this.size-1-l:l;!this.isFunction[s][u]&&a<8*e.length&&(this.modules[s][u]=r(e[a>>>3],7-(7&a)),a++)}}n(a==8*e.length)},t.prototype.applyMask=function(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(var t=0;t<this.size;t++)for(var a=0;a<this.size;a++){var r=void 0;switch(e){case 0:r=(a+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=a%3==0;break;case 3:r=(a+t)%3==0;break;case 4:r=(Math.floor(a/3)+Math.floor(t/2))%2==0;break;case 5:r=a*t%2+a*t%3==0;break;case 6:r=(a*t%2+a*t%3)%2==0;break;case 7:r=((a+t)%2+a*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][a]&&r&&(this.modules[t][a]=!this.modules[t][a])}},t.prototype.getPenaltyScore=function(){for(var e=0,a=0;a<this.size;a++){for(var r=!1,o=0,l=[0,0,0,0,0,0,0],i=0;i<this.size;i++)this.modules[a][i]==r?5==++o?e+=t.PENALTY_N1:o>5&&e++:(this.finderPenaltyAddHistory(o,l),r||(e+=this.finderPenaltyCountPatterns(l)*t.PENALTY_N3),r=this.modules[a][i],o=1);e+=this.finderPenaltyTerminateAndCount(r,o,l)*t.PENALTY_N3}for(i=0;i<this.size;i++){r=!1;var u=0;for(l=[0,0,0,0,0,0,0],a=0;a<this.size;a++)this.modules[a][i]==r?5==++u?e+=t.PENALTY_N1:u>5&&e++:(this.finderPenaltyAddHistory(u,l),r||(e+=this.finderPenaltyCountPatterns(l)*t.PENALTY_N3),r=this.modules[a][i],u=1);e+=this.finderPenaltyTerminateAndCount(r,u,l)*t.PENALTY_N3}for(a=0;a<this.size-1;a++)for(i=0;i<this.size-1;i++){var s=this.modules[a][i];s==this.modules[a][i+1]&&s==this.modules[a+1][i]&&s==this.modules[a+1][i+1]&&(e+=t.PENALTY_N2)}for(var d=0,c=0,f=this.modules;c<f.length;c++){d=f[c].reduce((function(e,t){return e+(t?1:0)}),d)}var h=this.size*this.size,v=Math.ceil(Math.abs(20*d-10*h)/h)-1;return n(0<=v&&v<=9),n(0<=(e+=v*t.PENALTY_N4)&&e<=2568888),e},t.prototype.getAlignmentPatternPositions=function(){if(1==this.version)return[];for(var e=Math.floor(this.version/7)+2,t=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2)),a=[6],r=this.size-7;a.length<e;r-=t)a.splice(1,0,r);return a},t.getNumRawDataModules=function(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw new RangeError("Version number out of range");var a=(16*e+128)*e+64;if(e>=2){var r=Math.floor(e/7)+2;a-=(25*r-10)*r-55,e>=7&&(a-=36)}return n(208<=a&&a<=29648),a},t.getNumDataCodewords=function(e,a){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[a.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[a.ordinal][e]},t.reedSolomonComputeDivisor=function(e){if(e<1||e>255)throw new RangeError("Degree out of range");for(var a=[],r=0;r<e-1;r++)a.push(0);a.push(1);var n=1;for(r=0;r<e;r++){for(var o=0;o<a.length;o++)a[o]=t.reedSolomonMultiply(a[o],n),o+1<a.length&&(a[o]^=a[o+1]);n=t.reedSolomonMultiply(n,2)}return a},t.reedSolomonComputeRemainder=function(e,a){for(var r=a.map((function(e){return 0})),n=function(e){var n=e^r.shift();r.push(0),a.forEach((function(e,a){return r[a]^=t.reedSolomonMultiply(e,n)}))},o=0,l=e;o<l.length;o++){n(l[o])}return r},t.reedSolomonMultiply=function(e,t){if(e>>>8!=0||t>>>8!=0)throw new RangeError("Byte out of range");for(var a=0,r=7;r>=0;r--)a=a<<1^285*(a>>>7),a^=(t>>>r&1)*e;return n(a>>>8==0),a},t.prototype.finderPenaltyCountPatterns=function(e){var t=e[1];n(t<=3*this.size);var a=t>0&&e[2]==t&&e[3]==3*t&&e[4]==t&&e[5]==t;return(a&&e[0]>=4*t&&e[6]>=t?1:0)+(a&&e[6]>=4*t&&e[0]>=t?1:0)},t.prototype.finderPenaltyTerminateAndCount=function(e,t,a){return e&&(this.finderPenaltyAddHistory(t,a),t=0),t+=this.size,this.finderPenaltyAddHistory(t,a),this.finderPenaltyCountPatterns(a)},t.prototype.finderPenaltyAddHistory=function(e,t){0==t[0]&&(e+=this.size),t.pop(),t.unshift(e)},t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],t}();function a(e,t,a){if(t<0||t>31||e>>>t!=0)throw new RangeError("Value out of range");for(var r=t-1;r>=0;r--)a.push(e>>>r&1)}function r(e,t){return!!(e>>>t&1)}function n(e){if(!e)throw new Error("Assertion error")}e.QrCode=t;var o=function(){function e(e,t,a){if(this.mode=e,this.numChars=t,this.bitData=a,t<0)throw new RangeError("Invalid argument");this.bitData=a.slice()}return e.makeBytes=function(t){for(var r=[],n=0,o=t;n<o.length;n++){a(o[n],8,r)}return new e(e.Mode.BYTE,t.length,r)},e.makeNumeric=function(t){if(!e.isNumeric(t))throw new RangeError("String contains non-numeric characters");for(var r=[],n=0;n<t.length;){var o=Math.min(t.length-n,3);a(parseInt(t.substring(n,n+o),10),3*o+1,r),n+=o}return new e(e.Mode.NUMERIC,t.length,r)},e.makeAlphanumeric=function(t){if(!e.isAlphanumeric(t))throw new RangeError("String contains unencodable characters in alphanumeric mode");var r,n=[];for(r=0;r+2<=t.length;r+=2){var o=45*e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r));a(o+=e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r+1)),11,n)}return r<t.length&&a(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r)),6,n),new e(e.Mode.ALPHANUMERIC,t.length,n)},e.makeSegments=function(t){return""==t?[]:e.isNumeric(t)?[e.makeNumeric(t)]:e.isAlphanumeric(t)?[e.makeAlphanumeric(t)]:[e.makeBytes(e.toUtf8ByteArray(t))]},e.makeEci=function(t){var r=[];if(t<0)throw new RangeError("ECI assignment value out of range");if(t<128)a(t,8,r);else if(t<16384)a(2,2,r),a(t,14,r);else{if(!(t<1e6))throw new RangeError("ECI assignment value out of range");a(6,3,r),a(t,21,r)}return new e(e.Mode.ECI,0,r)},e.isNumeric=function(t){return e.NUMERIC_REGEX.test(t)},e.isAlphanumeric=function(t){return e.ALPHANUMERIC_REGEX.test(t)},e.prototype.getData=function(){return this.bitData.slice()},e.getTotalBits=function(e,t){for(var a=0,r=0,n=e;r<n.length;r++){var o=n[r],l=o.mode.numCharCountBits(t);if(o.numChars>=1<<l)return Infinity;a+=4+l+o.bitData.length}return a},e.toUtf8ByteArray=function(e){e=encodeURI(e);for(var t=[],a=0;a<e.length;a++)"%"!=e.charAt(a)?t.push(e.charCodeAt(a)):(t.push(parseInt(e.substring(a+1,a+3),16)),a+=2);return t},e.NUMERIC_REGEX=/^[0-9]*$/,e.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,e.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",e}();e.QrSegment=o}(Y||(Y={})),K=Y||(Y={}),$=K.QrCode||(K.QrCode={}),G=function(){function e(e,t){this.ordinal=e,this.formatBits=t}return e.LOW=new e(0,1),e.MEDIUM=new e(1,0),e.QUARTILE=new e(2,3),e.HIGH=new e(3,2),e}(),$.Ecc=G,function(e){var t,a;t=e.QrSegment||(e.QrSegment={}),a=function(){function e(e,t){this.modeBits=e,this.numBitsCharCount=t}return e.prototype.numCharCountBits=function(e){return this.numBitsCharCount[Math.floor((e+7)/17)]},e.NUMERIC=new e(1,[10,12,14]),e.ALPHANUMERIC=new e(2,[9,11,13]),e.BYTE=new e(4,[8,16,16]),e.KANJI=new e(8,[8,10,12]),e.ECI=new e(7,[0,0,0]),e}(),t.Mode=a}(Y||(Y={}));var W=Y,q={L:W.QrCode.Ecc.LOW,M:W.QrCode.Ecc.MEDIUM,Q:W.QrCode.Ecc.QUARTILE,H:W.QrCode.Ecc.HIGH},J=function(){try{(new Path2D).addPath(new Path2D)}catch(e){return!1}return!0}();function Z(e){return e in q}function ee(e,t){void 0===t&&(t=0);var a=[];return e.forEach((function(e,r){var n=null;e.forEach((function(o,l){if(!o&&null!==n)return a.push("M".concat(n+t," ").concat(r+t,"h").concat(l-n,"v1H").concat(n+t,"z")),void(n=null);if(l!==e.length-1)o&&null===n&&(n=l);else{if(!o)return;null===n?a.push("M".concat(l+t,",").concat(r+t," h1v1H").concat(l+t,"z")):a.push("M".concat(n+t,",").concat(r+t," h").concat(l+1-n,"v1H").concat(n+t,"z"))}}))})),a.join("")}var te={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:"H",validator:function(e){return Z(e)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},ae=X(X({},te),{renderAs:{type:String,required:!1,default:"canvas",validator:function(e){return["canvas","svg"].indexOf(e)>-1}}}),re=t({name:"QRCodeSvg",props:te,setup:function(e){var t=r(0),o=r(""),l=function(){var a=e.value,r=e.level,n=e.margin,l=W.QrCode.encodeText(a,q[r]).getModules();t.value=l.length+2*n,o.value=ee(l,n)};return l(),n(l),function(){return a("svg",{width:e.size,height:e.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(t.value," ").concat(t.value)},[a("path",{fill:e.background,d:"M0,0 h".concat(t.value,"v").concat(t.value,"H0z")}),a("path",{fill:e.foreground,d:o.value})])}}}),ne=t({name:"QRCodeCanvas",props:te,setup:function(e){var t=r(null),l=function(){var a=e.value,r=e.level,n=e.size,o=e.margin,l=e.background,i=e.foreground,u=t.value;if(u){var s=u.getContext("2d");if(s){var d=W.QrCode.encodeText(a,q[r]).getModules(),c=d.length+2*o,f=window.devicePixelRatio||1,h=n/c*f;u.height=u.width=n*f,s.scale(h,h),s.fillStyle=l,s.fillRect(0,0,c,c),s.fillStyle=i,J?s.fill(new Path2D(ee(d,o))):d.forEach((function(e,t){e.forEach((function(e,a){e&&s.fillRect(a+o,t+o,1,1)}))}))}}};return o(l),n(l),function(){return a("canvas",{ref:t,style:{width:"".concat(e.size,"px"),height:"".concat(e.size,"px")}})}}}),oe=t({name:"Qrcode",render:function(){var e=this.$props,t=e.renderAs,r=e.value,n=e.size,o=e.margin,l=e.level,i=e.background,u=e.foreground,s=n>>>0,d=o>>>0,c=Z(l)?l:"H";return a("svg"===t?re:ne,{value:r,size:s,margin:d,level:c,background:i,foreground:u})},props:ae});const le=e=>(N("data-v-4bd1fff0"),e=e(),R(),e),ie={class:"dialog-footer"},ue={class:"m-4"},se=le((()=>m("p",null,"选择已有的节点列表",-1))),de={class:"dialog-footer"},ce=le((()=>m("div",{style:{"margin-bottom":"10px"}},null,-1))),fe={key:0},he={key:0},ve={key:1},pe=le((()=>m("div",{style:{"margin-top":"20px"}},null,-1))),me=le((()=>m("div",{style:{"margin-top":"20px"}},null,-1))),ge=j(t({__name:"subs",setup(t){const a=r([]),n=r(""),N=r(""),R=r(""),j=r(""),Y=r(""),K=r(!1),$=r(),G=r([]),X=r([]),W=r([]),q=r(!1),J=r([]),Z=r(""),ee=r([]);async function te(){const{data:t}=await e({url:"/api/v1/subscription/get",method:"get"});a.value=t}o((()=>{te(),async function(){const{data:e}=await F();ee.value=e}()})),o((async()=>{const{data:e}=await U();G.value=e}));const ae=async()=>{const t=JSON.stringify({clash:n.value.trim(),surge:N.value.trim(),udp:!!W.value.includes("udp"),cert:!!W.value.includes("cert")});var a;"添加订阅"===R.value?(await(a={config:t,name:j.value.trim(),nodes:X.value.join(",")},e({url:"/api/v1/subcription/add",method:"post",data:a,headers:{"Content-Type":"multipart/form-data"}})),te(),C.success("添加成功")):(await function(t){return e({url:"/api/v1/subcription/update",method:"post",data:t,headers:{"Content-Type":"multipart/form-data"}})}({config:t,name:j.value.trim(),nodes:X.value.join(","),oldname:Y.value}),te(),C.success("更新成功")),K.value=!1},re=r([]),ne=e=>{re.value=e},le=()=>{R.value="添加订阅",j.value="",Y.value="",W.value=[],n.value="./template/clash.yaml",N.value="./template/surge.conf",K.value=!0,X.value=[]},ge=()=>{0!==re.value.length&&E.confirm("你是否要删除选中这些 ?","提示",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then((()=>{for(let e=0;e<re.value.length;e++)Q({id:re.value[e].ID}),a.value=a.value.filter((t=>t.ID!==re.value[e].ID));C({type:"success",message:"删除成功"})}))},ye=r(1),Ce=r(10),we=e=>{Ce.value=e},Ee=e=>{ye.value=e},_e=l((()=>{const e=(ye.value-1)*Ce.value,t=e+Ce.value;return a.value.slice(e,t)})),Me=e=>{const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select();try{const e=document.execCommand("copy");C({type:e?"success":"warning",message:e?"复制成功！":"复制失败！"})}catch(a){C({type:"warning",message:"复制失败！"})}finally{document.body.removeChild(t)}},Ne=r(!1),Re=["v2ray","clash","surge"],Ae=r({}),be=e=>{let t=location.protocol+"//"+location.hostname+(location.port?":"+location.port:"");Re.forEach((a=>{var r;Ae.value[a]=`${t}/c/${a}/${r=e,window.btoa(unescape(encodeURIComponent(r)))}`})),Ne.value=!0},ke=r(!1),Ie=r("1");return(e,t)=>{const r=z,o=_,l=H,U=x,F=B,re=b,Re=k,Pe=M,Se=T,ze=L,Ve=V,Oe=O,De=I,Ue=P,Te=D,Le=S,xe=A;return i(),u("div",null,[s(l,{modelValue:ke.value,"onUpdate:modelValue":t[2]||(t[2]=e=>ke.value=e),width:"300px",style:{"text-align":"center"}},{default:d((()=>[s(oe,{value:Z.value,size:200,level:"H"},null,8,["value"]),s(r,{type:"primary",effect:"dark",round:""},{default:d((()=>[c(f(Z.value),1)])),_:1}),s(o,{onClick:t[0]||(t[0]=e=>Me(Z.value))},{default:d((()=>[c("复制")])),_:1}),s(o,{onClick:t[1]||(t[1]=e=>{return t=Z.value,void window.open(t);var t})},{default:d((()=>[c("打开")])),_:1})])),_:1},8,["modelValue"]),s(l,{modelValue:Ne.value,"onUpdate:modelValue":t[3]||(t[3]=e=>Ne.value=e),title:"客户端",style:{"text-align":"center"}},{default:d((()=>[s(F,null,{default:d((()=>[(i(!0),u(h,null,v(Ae.value,((e,t)=>(i(),p(U,{style:{"margin-bottom":"10px"}},{default:d((()=>[s(r,{type:"success",size:"large"},{default:d((()=>[c(f(t),1)])),_:2},1024),s(o,{onClick:t=>{return a=e,ke.value=!0,void(Z.value=a);var a}},{default:d((()=>[c("二维码")])),_:2},1032,["onClick"])])),_:2},1024)))),256))])),_:1})])),_:1},8,["modelValue"]),s(l,{modelValue:q.value,"onUpdate:modelValue":t[4]||(t[4]=e=>q.value=e),title:"访问记录",width:"80%",draggable:""},{footer:d((()=>[m("div",ie,[s(Re,{data:J.value,border:"",style:{width:"100%"}},{default:d((()=>[s(re,{prop:"IP",label:"Ip"}),s(re,{prop:"Count",label:"总访问次数"}),s(re,{prop:"Addr",label:"来源"}),s(re,{prop:"Date",label:"最近时间"})])),_:1},8,["data"])])])),_:1},8,["modelValue"]),s(l,{modelValue:K.value,"onUpdate:modelValue":t[15]||(t[15]=e=>K.value=e),title:R.value},{footer:d((()=>[m("div",de,[s(o,{onClick:t[14]||(t[14]=e=>K.value=!1)},{default:d((()=>[c("关闭")])),_:1}),s(o,{type:"primary",onClick:ae},{default:d((()=>[c("确定")])),_:1})])])),default:d((()=>[s(Pe,{modelValue:j.value,"onUpdate:modelValue":t[5]||(t[5]=e=>j.value=e),placeholder:"请输入订阅名称"},null,8,["modelValue"]),s(F,null,{default:d((()=>[s(r,{type:"primary"},{default:d((()=>[c("clash模版选择")])),_:1}),s(ze,{modelValue:Ie.value,"onUpdate:modelValue":t[6]||(t[6]=e=>Ie.value=e),class:"ml-4"},{default:d((()=>[s(Se,{value:"1"},{default:d((()=>[c("本地")])),_:1}),s(Se,{value:"2"},{default:d((()=>[c("url链接")])),_:1})])),_:1},8,["modelValue"]),"1"===Ie.value?(i(),p(Oe,{key:0,modelValue:n.value,"onUpdate:modelValue":t[7]||(t[7]=e=>n.value=e),placeholder:"clash模版文件"},{default:d((()=>[(i(!0),u(h,null,v(ee.value,(e=>(i(),p(Ve,{key:e.file,label:e.file,value:"./template/"+e.file},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])):(i(),p(Pe,{key:1,modelValue:n.value,"onUpdate:modelValue":t[8]||(t[8]=e=>n.value=e),placeholder:"clash模版文件"},null,8,["modelValue"]))])),_:1}),s(F,null,{default:d((()=>[s(r,{type:"primary"},{default:d((()=>[c("surge模版选择")])),_:1}),s(ze,{modelValue:Ie.value,"onUpdate:modelValue":t[9]||(t[9]=e=>Ie.value=e),class:"ml-4"},{default:d((()=>[s(Se,{value:"1"},{default:d((()=>[c("本地")])),_:1}),s(Se,{value:"2"},{default:d((()=>[c("url链接")])),_:1})])),_:1},8,["modelValue"]),"1"===Ie.value?(i(),p(Oe,{key:0,modelValue:N.value,"onUpdate:modelValue":t[10]||(t[10]=e=>N.value=e),placeholder:"surge模版文件"},{default:d((()=>[(i(!0),u(h,null,v(ee.value,(e=>(i(),p(Ve,{key:e.file,label:e.file,value:"./template/"+e.file},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])):(i(),p(Pe,{key:1,modelValue:N.value,"onUpdate:modelValue":t[11]||(t[11]=e=>N.value=e),placeholder:"surge模版文件"},null,8,["modelValue"]))])),_:1}),s(F,null,{default:d((()=>[s(r,{type:"primary"},{default:d((()=>[c("强制开启选项")])),_:1}),s(Ue,{modelValue:W.value,"onUpdate:modelValue":t[12]||(t[12]=e=>W.value=e),style:{margin:"5px"}},{default:d((()=>[s(De,{value:"udp"},{default:d((()=>[c("udp")])),_:1}),s(De,{value:"cert"},{default:d((()=>[c("跳过证书")])),_:1})])),_:1},8,["modelValue"])])),_:1}),m("div",ue,[se,s(Oe,{modelValue:X.value,"onUpdate:modelValue":t[13]||(t[13]=e=>X.value=e),multiple:"",placeholder:"Select",style:{width:"100%"}},{default:d((()=>[(i(!0),u(h,null,v(G.value,(e=>(i(),p(Ve,{key:e.Name,label:e.Name,value:e.Name},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])])),_:1},8,["modelValue","title"]),s(xe,null,{default:d((()=>[s(o,{type:"primary",onClick:le},{default:d((()=>[c("添加订阅")])),_:1}),ce,s(Re,{ref_key:"table",ref:$,data:g(_e),style:{width:"100%"},stripe:"",onSelectionChange:ne,"row-key":"ID","tree-props":{children:"Nodes"}},{default:d((()=>[s(re,{type:"selection",fixed:"",prop:"ID",label:"id"}),s(re,{prop:"Name",label:"订阅名称 / 节点"},{default:d((({row:e})=>[s(r,{type:e.Nodes?"primary":"success"},{default:d((()=>[c(f(e.Name),1)])),_:2},1032,["type"])])),_:1}),s(re,{prop:"Link",label:"链接","show-overflow-tooltip":!0},{default:d((({row:e})=>[e.Nodes?(i(),u("div",fe,[s(Te,{type:"primary",size:"small",onClick:t=>be(e.Name)},{default:d((()=>[c("客户端")])),_:2},1032,["onClick"])])):y("",!0)])),_:1}),s(re,{prop:"CreateDate",label:"创建时间",sortable:""}),s(re,{label:"操作",width:"120"},{default:d((e=>[e.row.Nodes?(i(),u("div",he,[s(o,{link:"",type:"primary",size:"small",onClick:t=>{return r=e.row,q.value=!0,void w((()=>{a.value.forEach((e=>{e.ID===r.ID&&(J.value=e.SubLogs)}))}));var r}},{default:d((()=>[c("记录")])),_:2},1032,["onClick"]),s(o,{link:"",type:"primary",size:"small",onClick:t=>(e=>{for(let r=0;r<a.value.length;r++)if(a.value[r].ID===e.ID){const e="string"==typeof(t=a.value[r].Config)?JSON.parse(t):t;R.value="编辑订阅",j.value=a.value[r].Name,Y.value=j.value,e.udp&&W.value.push("udp"),e.cert&&W.value.push("cert"),n.value=e.clash,N.value=e.surge,K.value=!0,X.value=a.value[r].Nodes.map((e=>e.Name))}var t})(e.row)},{default:d((()=>[c("编辑")])),_:2},1032,["onClick"]),s(o,{link:"",type:"primary",size:"small",onClick:t=>{return a=e.row,void E.confirm(`你是否要删除 ${a.Name} ?`,"提示",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then((async()=>{await Q({id:a.ID}),te(),C({type:"success",message:"删除成功"})}));var a}},{default:d((()=>[c("删除")])),_:2},1032,["onClick"])])):(i(),u("div",ve,[s(o,{link:"",type:"primary",size:"small",onClick:t=>{return a=e.row,void Me(a.Link);var a}},{default:d((()=>[c("复制")])),_:2},1032,["onClick"])]))])),_:1})])),_:1},8,["data"]),pe,s(o,{type:"info",onClick:t[16]||(t[16]=e=>{a.value.forEach((e=>{$.value.toggleRowSelection(e,!0)}))})},{default:d((()=>[c("全选")])),_:1}),s(o,{type:"warning",onClick:t[17]||(t[17]=e=>{$.value.clearSelection()})},{default:d((()=>[c("取消选择")])),_:1}),s(o,{type:"danger",onClick:ge},{default:d((()=>[c("批量删除")])),_:1}),me,s(Le,{onSizeChange:we,onCurrentChange:Ee,"current-page":ye.value,"page-size":Ce.value,layout:"total, sizes, prev, pager, next, jumper","page-sizes":[10,20,30,40],total:a.value.length},null,8,["current-page","page-size","total"])])),_:1})])}}}),[["__scopeId","data-v-4bd1fff0"]]);export{ge as default};
