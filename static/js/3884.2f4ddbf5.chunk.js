"use strict";(self.webpackChunkroad_damage=self.webpackChunkroad_damage||[]).push([[3884],{83884:(e,r,t)=>{t.r(r),t.d(r,{l:()=>c});var n,a,o,i=t(54787),u={exports:{}};n=u,a="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,"undefined"!=typeof __filename&&(a=a||__filename),o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var r,t,n=e;n.ready=new Promise(((e,n)=>{r=e,t=n}));var o,i,u,s=Object.assign({},n),c="./this.program",l="object"==typeof window,f="function"==typeof importScripts,d="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,h="";if(d){var p=require("fs"),v=require("path");h=f?v.dirname(h)+"/":__dirname+"/",o=(e,r)=>(e=Y(e)?new URL(e):v.normalize(e),p.readFileSync(e,r?void 0:"utf8")),u=e=>{var r=o(e,!0);return r.buffer||(r=new Uint8Array(r)),r},i=function(e,r,t){let n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];e=Y(e)?new URL(e):v.normalize(e),p.readFile(e,n?void 0:"utf8",((e,a)=>{e?t(e):r(n?a.buffer:a)}))},!n.thisProgram&&process.argv.length>1&&(c=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),n.inspect=()=>"[Emscripten Module object]"}else(l||f)&&(f?h=self.location.href:"undefined"!=typeof document&&document.currentScript&&(h=document.currentScript.src),a&&(h=a),h=0!==h.indexOf("blob:")?h.substr(0,h.replace(/[?#].*/,"").lastIndexOf("/")+1):"",o=e=>{var r=new XMLHttpRequest;return r.open("GET",e,!1),r.send(null),r.responseText},f&&(u=e=>{var r=new XMLHttpRequest;return r.open("GET",e,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}),i=(e,r,t)=>{var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="arraybuffer",n.onload=()=>{200==n.status||0==n.status&&n.response?r(n.response):t()},n.onerror=t,n.send(null)});n.print||console.log.bind(console);var m,y,g=n.printErr||console.error.bind(console);Object.assign(n,s),s=null,n.arguments&&n.arguments,n.thisProgram&&(c=n.thisProgram),n.quit&&n.quit,n.wasmBinary&&(m=n.wasmBinary),n.noExitRuntime,"object"!=typeof WebAssembly&&x("no native wasm support detected");var w,_,b,A,T,C,E,F,P=!1;function S(){var e=y.buffer;n.HEAP8=w=new Int8Array(e),n.HEAP16=b=new Int16Array(e),n.HEAPU8=_=new Uint8Array(e),n.HEAPU16=A=new Uint16Array(e),n.HEAP32=T=new Int32Array(e),n.HEAPU32=C=new Uint32Array(e),n.HEAPF32=E=new Float32Array(e),n.HEAPF64=F=new Float64Array(e)}var W=[],M=[],j=[];function R(e){W.unshift(e)}function O(e){j.unshift(e)}var D=0,k=null;function x(e){n.onAbort&&n.onAbort(e),g(e="Aborted("+e+")"),P=!0,e+=". Build with -sASSERTIONS for more info.";var r=new WebAssembly.RuntimeError(e);throw t(r),r}var U,I="data:application/octet-stream;base64,";function H(e){return e.startsWith(I)}function Y(e){return e.startsWith("file://")}function z(e){if(e==U&&m)return new Uint8Array(m);if(u)return u(e);throw"both async and sync fetching of the wasm failed"}function V(e,r,t){return function(e){if(!m&&(l||f)){if("function"==typeof fetch&&!Y(e))return fetch(e,{credentials:"same-origin"}).then((r=>{if(!r.ok)throw"failed to load wasm binary file at '"+e+"'";return r.arrayBuffer()})).catch((()=>z(e)));if(i)return new Promise(((r,t)=>{i(e,(e=>r(new Uint8Array(e))),t)}))}return Promise.resolve().then((()=>z(e)))}(e).then((e=>WebAssembly.instantiate(e,r))).then((e=>e)).then(t,(e=>{g("failed to asynchronously prepare wasm: ".concat(e)),x(e)}))}H(U="lclayout.wasm")||(U=function(e){return n.locateFile?n.locateFile(e,h):h+e}(U));var B=e=>{for(;e.length>0;)e.shift()(n)};function q(e){this.excPtr=e,this.ptr=e-24,this.set_type=function(e){C[this.ptr+4>>2]=e},this.get_type=function(){return C[this.ptr+4>>2]},this.set_destructor=function(e){C[this.ptr+8>>2]=e},this.get_destructor=function(){return C[this.ptr+8>>2]},this.set_caught=function(e){e=e?1:0,w[this.ptr+12|0]=e},this.get_caught=function(){return 0!=w[this.ptr+12|0]},this.set_rethrown=function(e){e=e?1:0,w[this.ptr+13|0]=e},this.get_rethrown=function(){return 0!=w[this.ptr+13|0]},this.init=function(e,r){this.set_adjusted_ptr(0),this.set_type(e),this.set_destructor(r)},this.set_adjusted_ptr=function(e){C[this.ptr+16>>2]=e},this.get_adjusted_ptr=function(){return C[this.ptr+16>>2]},this.get_exception_ptr=function(){if(Xe(this.get_type()))return C[this.excPtr>>2];var e=this.get_adjusted_ptr();return 0!==e?e:this.excPtr}}var L,G,X,N=e=>{for(var r="",t=e;_[t];)r+=L[_[t++]];return r},J={},Z={},$={},K=e=>{throw new G(e)},Q=e=>{throw new X(e)},ee=(e,r,t)=>{function n(r){var n=t(r);n.length!==e.length&&Q("Mismatched type converter count");for(var a=0;a<e.length;++a)re(e[a],n[a])}e.forEach((function(e){$[e]=r}));var a=new Array(r.length),o=[],i=0;r.forEach(((e,r)=>{Z.hasOwnProperty(e)?a[r]=Z[e]:(o.push(e),J.hasOwnProperty(e)||(J[e]=[]),J[e].push((()=>{a[r]=Z[e],++i===o.length&&n(a)})))})),0===o.length&&n(a)};function re(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");return function(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var n=r.name;if(e||K('type "'.concat(n,'" must have a positive integer typeid pointer')),Z.hasOwnProperty(e)){if(t.ignoreDuplicateRegistrations)return;K("Cannot register type '".concat(n,"' twice"))}if(Z[e]=r,delete $[e],J.hasOwnProperty(e)){var a=J[e];delete J[e],a.forEach((e=>e()))}}(e,r,t)}function te(){this.allocated=[void 0],this.freelist=[]}var ne=new te,ae=()=>{for(var e=0,r=ne.reserved;r<ne.allocated.length;++r)void 0!==ne.allocated[r]&&++e;return e},oe=e=>(e||K("Cannot use deleted val. handle = "+e),ne.get(e).value),ie=e=>{switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return ne.allocate({refcount:1,value:e})}};function ue(e){return this.fromWireType(T[e>>2])}var se=(e,r)=>{switch(r){case 4:return function(e){return this.fromWireType(E[e>>2])};case 8:return function(e){return this.fromWireType(F[e>>3])};default:throw new TypeError("invalid float width (".concat(r,"): ").concat(e))}},ce=e=>{if(void 0===e)return"_unknown";var r=(e=e.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=48&&r<=57?"_".concat(e):e};var le,fe=(e,r,t)=>{if(void 0===e[r].overloadTable){var n=e[r];e[r]=function(){return e[r].overloadTable.hasOwnProperty(arguments.length)||K("Function '".concat(t,"' called with an invalid number of arguments (").concat(arguments.length,") - expects one of (").concat(e[r].overloadTable,")!")),e[r].overloadTable[arguments.length].apply(this,arguments)},e[r].overloadTable=[],e[r].overloadTable[n.argCount]=n}},de=(e,r,t)=>{n.hasOwnProperty(e)?((void 0===t||void 0!==n[e].overloadTable&&void 0!==n[e].overloadTable[t])&&K("Cannot register public name '".concat(e,"' twice")),fe(n,e,e),n.hasOwnProperty(t)&&K("Cannot register multiple overloads of a function with the same number of arguments (".concat(t,")!")),n[e].overloadTable[t]=r):(n[e]=r,void 0!==t&&(n[e].numArguments=t))},he=(e,r,t)=>{n.hasOwnProperty(e)||Q("Replacing nonexistant public symbol"),void 0!==n[e].overloadTable&&void 0!==t?n[e].overloadTable[t]=r:(n[e]=r,n[e].argCount=t)},pe=[],ve=e=>{var r=pe[e];return r||(e>=pe.length&&(pe.length=e+1),pe[e]=r=le.get(e)),r},me=(e,r,t)=>e.includes("j")?((e,r,t)=>{var a=n["dynCall_"+e];return t&&t.length?a.apply(null,[r].concat(t)):a.call(null,r)})(e,r,t):ve(r).apply(null,t),ye=(e,r)=>{var t=(e=N(e)).includes("j")?((e,r)=>{var t=[];return function(){return t.length=0,Object.assign(t,arguments),me(e,r,t)}})(e,r):ve(r);return"function"!=typeof t&&K("unknown function pointer with signature ".concat(e,": ").concat(r)),t};var ge,we=e=>{var r=Be(e),t=N(r);return Ge(r),t},_e=(e,r,t)=>{switch(r){case 1:return t?e=>w[e|0]:e=>_[e|0];case 2:return t?e=>b[e>>1]:e=>A[e>>1];case 4:return t?e=>T[e>>2]:e=>C[e>>2];default:throw new TypeError("invalid integer width (".concat(r,"): ").concat(e))}};function be(e){return this.fromWireType(C[e>>2])}var Ae,Te=(e,r,t,n)=>{if(!(n>0))return 0;for(var a=t,o=t+n-1,i=0;i<e.length;++i){var u=e.charCodeAt(i);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&e.charCodeAt(++i)),u<=127){if(t>=o)break;r[t++]=u}else if(u<=2047){if(t+1>=o)break;r[t++]=192|u>>6,r[t++]=128|63&u}else if(u<=65535){if(t+2>=o)break;r[t++]=224|u>>12,r[t++]=128|u>>6&63,r[t++]=128|63&u}else{if(t+3>=o)break;r[t++]=240|u>>18,r[t++]=128|u>>12&63,r[t++]=128|u>>6&63,r[t++]=128|63&u}}return r[t]=0,t-a},Ce=e=>{for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n<=127?r++:n<=2047?r+=2:n>=55296&&n<=57343?(r+=4,++t):r+=3}return r},Ee="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,Fe=(e,r)=>e?((e,r,t)=>{for(var n=r+t,a=r;e[a]&&!(a>=n);)++a;if(a-r>16&&e.buffer&&Ee)return Ee.decode(e.subarray(r,a));for(var o="";r<a;){var i=e[r++];if(128&i){var u=63&e[r++];if(192!=(224&i)){var s=63&e[r++];if((i=224==(240&i)?(15&i)<<12|u<<6|s:(7&i)<<18|u<<12|s<<6|63&e[r++])<65536)o+=String.fromCharCode(i);else{var c=i-65536;o+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else o+=String.fromCharCode((31&i)<<6|u)}else o+=String.fromCharCode(i)}return o})(_,e,r):"",Pe="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0,Se=(e,r)=>{for(var t=e,n=t>>1,a=n+r/2;!(n>=a)&&A[n];)++n;if((t=n<<1)-e>32&&Pe)return Pe.decode(_.subarray(e,t));for(var o="",i=0;!(i>=r/2);++i){var u=b[e+2*i>>1];if(0==u)break;o+=String.fromCharCode(u)}return o},We=(e,r,t)=>{if(void 0===t&&(t=2147483647),t<2)return 0;for(var n=r,a=(t-=2)<2*e.length?t/2:e.length,o=0;o<a;++o){var i=e.charCodeAt(o);b[r>>1]=i,r+=2}return b[r>>1]=0,r-n},Me=e=>2*e.length,je=(e,r)=>{for(var t=0,n="";!(t>=r/4);){var a=T[e+4*t>>2];if(0==a)break;if(++t,a>=65536){var o=a-65536;n+=String.fromCharCode(55296|o>>10,56320|1023&o)}else n+=String.fromCharCode(a)}return n},Re=(e,r,t)=>{if(void 0===t&&(t=2147483647),t<4)return 0;for(var n=r,a=n+t-4,o=0;o<e.length;++o){var i=e.charCodeAt(o);if(i>=55296&&i<=57343&&(i=65536+((1023&i)<<10)|1023&e.charCodeAt(++o)),T[r>>2]=i,(r+=4)+4>a)break}return T[r>>2]=0,r-n},Oe=e=>{for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n>=55296&&n<=57343&&++t,r+=4}return r};Ae=()=>performance.now();var De=e=>{var r=(e-y.buffer.byteLength+65535)/65536;try{return y.grow(r),S(),1}catch(a){}},ke={},xe=()=>{if(!xe.strings){var e={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:c||"./this.program"};for(var r in ke)void 0===ke[r]?delete e[r]:e[r]=ke[r];var t=[];for(var r in e)t.push("".concat(r,"=").concat(e[r]));xe.strings=t}return xe.strings},Ue=e=>e%4==0&&(e%100!=0||e%400==0),Ie=[31,29,31,30,31,30,31,31,30,31,30,31],He=[31,28,31,30,31,30,31,31,30,31,30,31];var Ye=(e,r,t,n)=>{var a=C[n+40>>2],o={tm_sec:T[n>>2],tm_min:T[n+4>>2],tm_hour:T[n+8>>2],tm_mday:T[n+12>>2],tm_mon:T[n+16>>2],tm_year:T[n+20>>2],tm_wday:T[n+24>>2],tm_yday:T[n+28>>2],tm_isdst:T[n+32>>2],tm_gmtoff:T[n+36>>2],tm_zone:a?Fe(a):""},i=Fe(t),u={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var s in u)i=i.replace(new RegExp(s,"g"),u[s]);var c=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],l=["January","February","March","April","May","June","July","August","September","October","November","December"];function f(e,r,t){for(var n="number"==typeof e?e.toString():e||"";n.length<r;)n=t[0]+n;return n}function d(e,r){return f(e,r,"0")}function h(e,r){function t(e){return e<0?-1:e>0?1:0}var n;return 0===(n=t(e.getFullYear()-r.getFullYear()))&&0===(n=t(e.getMonth()-r.getMonth()))&&(n=t(e.getDate()-r.getDate())),n}function p(e){switch(e.getDay()){case 0:return new Date(e.getFullYear()-1,11,29);case 1:return e;case 2:return new Date(e.getFullYear(),0,3);case 3:return new Date(e.getFullYear(),0,2);case 4:return new Date(e.getFullYear(),0,1);case 5:return new Date(e.getFullYear()-1,11,31);case 6:return new Date(e.getFullYear()-1,11,30)}}function v(e){var r=((e,r)=>{for(var t=new Date(e.getTime());r>0;){var n=Ue(t.getFullYear()),a=t.getMonth(),o=(n?Ie:He)[a];if(!(r>o-t.getDate()))return t.setDate(t.getDate()+r),t;r-=o-t.getDate()+1,t.setDate(1),a<11?t.setMonth(a+1):(t.setMonth(0),t.setFullYear(t.getFullYear()+1))}return t})(new Date(e.tm_year+1900,0,1),e.tm_yday),t=new Date(r.getFullYear(),0,4),n=new Date(r.getFullYear()+1,0,4),a=p(t),o=p(n);return h(a,r)<=0?h(o,r)<=0?r.getFullYear()+1:r.getFullYear():r.getFullYear()-1}var m={"%a":e=>c[e.tm_wday].substring(0,3),"%A":e=>c[e.tm_wday],"%b":e=>l[e.tm_mon].substring(0,3),"%B":e=>l[e.tm_mon],"%C":e=>d((e.tm_year+1900)/100|0,2),"%d":e=>d(e.tm_mday,2),"%e":e=>f(e.tm_mday,2," "),"%g":e=>v(e).toString().substring(2),"%G":e=>v(e),"%H":e=>d(e.tm_hour,2),"%I":e=>{var r=e.tm_hour;return 0==r?r=12:r>12&&(r-=12),d(r,2)},"%j":e=>d(e.tm_mday+((e,r)=>{for(var t=0,n=0;n<=r;t+=e[n++]);return t})(Ue(e.tm_year+1900)?Ie:He,e.tm_mon-1),3),"%m":e=>d(e.tm_mon+1,2),"%M":e=>d(e.tm_min,2),"%n":()=>"\n","%p":e=>e.tm_hour>=0&&e.tm_hour<12?"AM":"PM","%S":e=>d(e.tm_sec,2),"%t":()=>"\t","%u":e=>e.tm_wday||7,"%U":e=>{var r=e.tm_yday+7-e.tm_wday;return d(Math.floor(r/7),2)},"%V":e=>{var r=Math.floor((e.tm_yday+7-(e.tm_wday+6)%7)/7);if((e.tm_wday+371-e.tm_yday-2)%7<=2&&r++,r){if(53==r){var t=(e.tm_wday+371-e.tm_yday)%7;4==t||3==t&&Ue(e.tm_year)||(r=1)}}else{r=52;var n=(e.tm_wday+7-e.tm_yday-1)%7;(4==n||5==n&&Ue(e.tm_year%400-1))&&r++}return d(r,2)},"%w":e=>e.tm_wday,"%W":e=>{var r=e.tm_yday+7-(e.tm_wday+6)%7;return d(Math.floor(r/7),2)},"%y":e=>(e.tm_year+1900).toString().substring(2),"%Y":e=>e.tm_year+1900,"%z":e=>{var r=e.tm_gmtoff,t=r>=0;return r=(r=Math.abs(r)/60)/60*100+r%60,(t?"+":"-")+String("0000"+r).slice(-4)},"%Z":e=>e.tm_zone,"%%":()=>"%"};for(var s in i=i.replace(/%%/g,"\0\0"),m)i.includes(s)&&(i=i.replace(new RegExp(s,"g"),m[s](o)));var y=function(e,r,t){var n=t>0?t:Ce(e)+1,a=new Array(n),o=Te(e,a,0,a.length);return r&&(a.length=o),a}(i=i.replace(/\0\0/g,"%"),!1);return y.length>r?0:(((e,r)=>{w.set(e,r)})(y,e),y.length-1)};(()=>{for(var e=new Array(256),r=0;r<256;++r)e[r]=String.fromCharCode(r);L=e})(),G=n.BindingError=class extends Error{constructor(e){super(e),this.name="BindingError"}},X=n.InternalError=class extends Error{constructor(e){super(e),this.name="InternalError"}},Object.assign(te.prototype,{get(e){return this.allocated[e]},has(e){return void 0!==this.allocated[e]},allocate(e){var r=this.freelist.pop()||this.allocated.length;return this.allocated[r]=e,r},free(e){this.allocated[e]=void 0,this.freelist.push(e)}}),ne.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),ne.reserved=ne.allocated.length,n.count_emval_handles=ae,ge=n.UnboundTypeError=((e,r)=>{var t=function(e,r){return{[e=ce(e)]:function(){return r.apply(this,arguments)}}[e]}(r,(function(e){this.name=r,this.message=e;var t=new Error(e).stack;void 0!==t&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""))}));return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return void 0===this.message?this.name:"".concat(this.name,": ").concat(this.message)},t})(Error,"UnboundTypeError");var ze={a:(e,r,t)=>{throw new q(e).init(r,t),e},m:(e,r,t,n,a)=>{},k:(e,r,t,n)=>{re(e,{name:r=N(r),fromWireType:function(e){return!!e},toWireType:function(e,r){return r?t:n},argPackAdvance:8,readValueFromPointer:function(e){return this.fromWireType(_[e])},destructorFunction:null})},i:(e,r,t)=>{e=N(e),ee([],[r],(function(r){return r=r[0],n[e]=r.fromWireType(t),[]}))},j:(e,r)=>{re(e,{name:r=N(r),fromWireType:e=>{var r=oe(e);return(e=>{e>=ne.reserved&&0==--ne.get(e).refcount&&ne.free(e)})(e),r},toWireType:(e,r)=>ie(r),argPackAdvance:8,readValueFromPointer:ue,destructorFunction:null})},h:(e,r,t)=>{re(e,{name:r=N(r),fromWireType:e=>e,toWireType:(e,r)=>r,argPackAdvance:8,readValueFromPointer:se(r,t),destructorFunction:null})},b:(e,r,t,n,a,o,i)=>{var u=((e,r)=>{for(var t=[],n=0;n<e;n++)t.push(C[r+4*n>>2]);return t})(r,t);e=N(e),a=ye(n,a),de(e,(function(){((e,r)=>{var t=[],n={};throw r.forEach((function e(r){n[r]||Z[r]||($[r]?$[r].forEach(e):(t.push(r),n[r]=!0))})),new ge("".concat(e,": ")+t.map(we).join([", "]))})("Cannot call ".concat(e," due to unbound types"),u)}),r-1),ee([],u,(function(t){var n=[t[0],null].concat(t.slice(1));return he(e,function(e,r,t,n,a,o){var i=r.length;i<2&&K("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var u=null!==r[1]&&null!==t,s=!1,c=1;c<r.length;++c)if(null!==r[c]&&void 0===r[c].destructorFunction){s=!0;break}var l="void"!==r[0].name,f=i-2,d=new Array(f),h=[],p=[];return function(){var t;arguments.length!==f&&K("function ".concat(e," called with ").concat(arguments.length," arguments, expected ").concat(f)),p.length=0,h.length=u?2:1,h[0]=a,u&&(t=r[1].toWireType(p,this),h[1]=t);for(var o=0;o<f;++o)d[o]=r[o+2].toWireType(p,arguments[o]),h.push(d[o]);return function(e){if(s)(e=>{for(;e.length;){var r=e.pop();e.pop()(r)}})(p);else for(var n=u?1:2;n<r.length;n++){var a=1===n?t:d[n-2];null!==r[n].destructorFunction&&r[n].destructorFunction(a)}if(l)return r[0].fromWireType(e)}(n.apply(null,h))}}(e,n,null,a,o),r-1),[]}))},d:(e,r,t,n,a)=>{r=N(r);var o=e=>e;if(0===n){var i=32-8*t;o=e=>e<<i>>>i}var u=r.includes("unsigned");re(e,{name:r,fromWireType:o,toWireType:u?function(e,r){return this.name,r>>>0}:function(e,r){return this.name,r},argPackAdvance:8,readValueFromPointer:_e(r,t,0!==n),destructorFunction:null})},c:(e,r,t)=>{var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function a(e){var r=C[e>>2],t=C[e+4>>2];return new n(w.buffer,t,r)}re(e,{name:t=N(t),fromWireType:a,argPackAdvance:8,readValueFromPointer:a},{ignoreDuplicateRegistrations:!0})},g:(e,r)=>{var t="std::string"===(r=N(r));re(e,{name:r,fromWireType(e){var r,n=C[e>>2],a=e+4;if(t)for(var o=a,i=0;i<=n;++i){var u=a+i;if(i==n||0==_[u]){var s=Fe(o,u-o);void 0===r?r=s:(r+=String.fromCharCode(0),r+=s),o=u+1}}else{var c=new Array(n);for(i=0;i<n;++i)c[i]=String.fromCharCode(_[a+i]);r=c.join("")}return Ge(e),r},toWireType(e,r){var n;r instanceof ArrayBuffer&&(r=new Uint8Array(r));var a="string"==typeof r;a||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||K("Cannot pass non-string to std::string"),n=t&&a?Ce(r):r.length;var o=Le(4+n+1),i=o+4;if(C[o>>2]=n,t&&a)((e,r,t)=>{Te(e,_,r,t)})(r,i,n+1);else if(a)for(var u=0;u<n;++u){var s=r.charCodeAt(u);s>255&&(Ge(i),K("String has UTF-16 code units that do not fit in 8 bits")),_[i+u]=s}else for(u=0;u<n;++u)_[i+u]=r[u];return null!==e&&e.push(Ge,o),o},argPackAdvance:8,readValueFromPointer:be,destructorFunction(e){Ge(e)}})},e:(e,r,t)=>{var n,a,o,i,u;t=N(t),2===r?(n=Se,a=We,i=Me,o=()=>A,u=1):4===r&&(n=je,a=Re,i=Oe,o=()=>C,u=2),re(e,{name:t,fromWireType:e=>{for(var t,a=C[e>>2],i=o(),s=e+4,c=0;c<=a;++c){var l=e+4+c*r;if(c==a||0==i[l>>u]){var f=n(s,l-s);void 0===t?t=f:(t+=String.fromCharCode(0),t+=f),s=l+r}}return Ge(e),t},toWireType:(e,n)=>{"string"!=typeof n&&K("Cannot pass non-string to C++ string type ".concat(t));var o=i(n),s=Le(4+o+r);return C[s>>2]=o>>u,a(n,s+4,o+r),null!==e&&e.push(Ge,s),s},argPackAdvance:8,readValueFromPointer:ue,destructorFunction(e){Ge(e)}})},l:(e,r)=>{re(e,{isVoid:!0,name:r=N(r),argPackAdvance:0,fromWireType:()=>{},toWireType:(e,r)=>{}})},r:()=>true,f:()=>{x("")},s:()=>Date.now(),n:()=>2147483648,u:Ae,v:(e,r,t)=>_.copyWithin(e,r,r+t),t:e=>{var r=_.length,t=2147483648;if((e>>>=0)>t)return!1;for(var n=(e,r)=>e+(r-e%r)%r,a=1;a<=4;a*=2){var o=r*(1+.2/a);o=Math.min(o,e+100663296);var i=Math.min(t,n(Math.max(e,o),65536));if(De(i))return!0}return!1},p:(e,r)=>{var t=0;return xe().forEach(((n,a)=>{var o=r+t;C[e+4*a>>2]=o,((e,r)=>{for(var t=0;t<e.length;++t)w[0|r++]=e.charCodeAt(t);w[0|r]=0})(n,o),t+=n.length+1})),0},q:(e,r)=>{var t=xe();C[e>>2]=t.length;var n=0;return t.forEach((e=>n+=e.length+1)),C[r>>2]=n,0},o:(e,r,t,n,a)=>Ye(e,r,t,n)},Ve=function(){var e={a:ze};function r(e,r){return Ve=e.exports,y=Ve.w,S(),le=Ve.y,function(e){M.unshift(e)}(Ve.x),function(e){if(D--,n.monitorRunDependencies&&n.monitorRunDependencies(D),0==D&&k){var r=k;k=null,r()}}(),Ve}if(D++,n.monitorRunDependencies&&n.monitorRunDependencies(D),n.instantiateWasm)try{return n.instantiateWasm(e,r)}catch(o){g("Module.instantiateWasm callback failed with error: ".concat(o)),t(o)}return function(e,r,t,n){return e||"function"!=typeof WebAssembly.instantiateStreaming||H(r)||Y(r)||d||"function"!=typeof fetch?V(r,t,n):fetch(r,{credentials:"same-origin"}).then((e=>WebAssembly.instantiateStreaming(e,t).then(n,(function(e){return g("wasm streaming compile failed: ".concat(e)),g("falling back to ArrayBuffer instantiation"),V(r,t,n)}))))}(m,U,e,(function(e){r(e.instance)})).catch(t),{}}(),Be=e=>(Be=Ve.z)(e);n.__embind_initialize_bindings=()=>(n.__embind_initialize_bindings=Ve.A)();var qe,Le=n._malloc=e=>(Le=n._malloc=Ve.B)(e),Ge=n._free=e=>(Ge=n._free=Ve.C)(e),Xe=e=>(Xe=Ve.D)(e);function Ne(){function e(){qe||(qe=!0,n.calledRun=!0,P||(B(M),r(n),n.onRuntimeInitialized&&n.onRuntimeInitialized(),function(){if(n.postRun)for("function"==typeof n.postRun&&(n.postRun=[n.postRun]);n.postRun.length;)O(n.postRun.shift());B(j)}()))}D>0||(function(){if(n.preRun)for("function"==typeof n.preRun&&(n.preRun=[n.preRun]);n.preRun.length;)R(n.preRun.shift());B(W)}(),D>0||(n.setStatus?(n.setStatus("Running..."),setTimeout((function(){setTimeout((function(){n.setStatus("")}),1),e()}),1)):e()))}if(n.dynCall_viijii=(e,r,t,a,o,i,u)=>(n.dynCall_viijii=Ve.E)(e,r,t,a,o,i,u),n.dynCall_iiiiij=(e,r,t,a,o,i,u)=>(n.dynCall_iiiiij=Ve.F)(e,r,t,a,o,i,u),n.dynCall_iiiiijj=(e,r,t,a,o,i,u,s,c)=>(n.dynCall_iiiiijj=Ve.G)(e,r,t,a,o,i,u,s,c),n.dynCall_iiiiiijj=(e,r,t,a,o,i,u,s,c,l)=>(n.dynCall_iiiiiijj=Ve.H)(e,r,t,a,o,i,u,s,c,l),k=function e(){qe||Ne(),qe||(k=e)},n.preInit)for("function"==typeof n.preInit&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return Ne(),e.ready},n.exports=o;const s=(0,i.g)(u.exports),c=Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"}))}}]);
//# sourceMappingURL=3884.2f4ddbf5.chunk.js.map