"use strict";(self.webpackChunkroad_damage=self.webpackChunkroad_damage||[]).push([[6588],{56588:(e,t,r)=>{r.d(t,{isAnimatedPNG:()=>c,parseApng:()=>h});var n,i=r(54787),s=r(50346),a=r(91417),o={exports:{}};n=function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}return r.m=e,r.c=t,r.p="",r(0)}([function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.isNotPNG=function(e){return e===s},t.isNotAPNG=function(e){return e===a},t.default=function(e){var t=new Uint8Array(e);if(Array.prototype.some.call(o,(function(e,r){return e!==t[r]})))return s;var r=!1;if(u(t,(function(e){return!(r="acTL"===e)})),!r)return a;var n=[],h=[],p=null,m=null,d=0,v=new i.APNG;if(u(t,(function(e,t,r,s){var a=new DataView(t.buffer);switch(e){case"IHDR":p=t.subarray(r+8,r+8+s),v.width=a.getUint32(r+8),v.height=a.getUint32(r+12);break;case"acTL":v.numPlays=a.getUint32(r+8+4);break;case"fcTL":m&&(v.frames.push(m),d++),(m=new i.Frame).width=a.getUint32(r+8+4),m.height=a.getUint32(r+8+8),m.left=a.getUint32(r+8+12),m.top=a.getUint32(r+8+16);var o=a.getUint16(r+8+20),u=a.getUint16(r+8+22);0===u&&(u=100),m.delay=1e3*o/u,m.delay<=10&&(m.delay=100),v.playTime+=m.delay,m.disposeOp=a.getUint8(r+8+24),m.blendOp=a.getUint8(r+8+25),m.dataParts=[],0===d&&2===m.disposeOp&&(m.disposeOp=1);break;case"fdAT":m&&m.dataParts.push(t.subarray(r+8+4,r+8+s));break;case"IDAT":m&&m.dataParts.push(t.subarray(r+8,r+8+s));break;case"IEND":h.push(l(t,r,12+s));break;default:n.push(l(t,r,12+s))}})),m&&v.frames.push(m),0==v.frames.length)return a;var _=new Blob(n),g=new Blob(h);return v.frames.forEach((function(e){var t=[];t.push(o),p.set(f(e.width),0),p.set(f(e.height),4),t.push(c("IHDR",p)),t.push(_),e.dataParts.forEach((function(e){return t.push(c("IDAT",e))})),t.push(g),e.imageData=new Blob(t,{type:"image/png"}),delete e.dataParts,t=null})),v};var n=function(e){return e&&e.__esModule?e:{default:e}}(r(1)),i=r(2);var s=new Error("Not a PNG"),a=new Error("Not an animated PNG");var o=new Uint8Array([137,80,78,71,13,10,26,10]);function u(e,t){var r=new DataView(e.buffer),n=8,i=void 0,s=void 0,a=void 0;do{s=r.getUint32(n),a=t(i=h(e,n+4,4),e,n,s),n+=12+s}while(!1!==a&&"IEND"!=i&&n<e.length)}function h(e,t,r){var n=Array.prototype.slice.call(e.subarray(t,t+r));return String.fromCharCode.apply(String,n)}function l(e,t,r){var n=new Uint8Array(r);return n.set(e.subarray(t,t+r)),n}var c=function(e,t){var r=e.length+t.length,i=new Uint8Array(r+8),s=new DataView(i.buffer);s.setUint32(0,t.length),i.set(function(e){for(var t=new Uint8Array(e.length),r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(e),4),i.set(t,8);var a=(0,n.default)(i,4,r);return s.setUint32(r+4,a),i},f=function(e){return new Uint8Array([e>>>24&255,e>>>16&255,e>>>8&255,255&e])}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=-1,i=t,s=t+(arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.length-t);i<s;i++)n=n>>>8^r[255&(n^e[i])];return~n};for(var r=new Uint32Array(256),n=0;n<256;n++){for(var i=n,s=0;s<8;s++)i=0!=(1&i)?3988292384^i>>>1:i>>>1;r[n]=i}},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.Frame=t.APNG=void 0;var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(e){return e&&e.__esModule?e:{default:e}}(r(3));function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.APNG=function(){function e(){s(this,e),this.width=0,this.height=0,this.numPlays=0,this.playTime=0,this.frames=[]}return n(e,[{key:"createImages",value:function(){return Promise.all(this.frames.map((function(e){return e.createImage()})))}},{key:"getPlayer",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.createImages().then((function(){return new i.default(t,e,r)}))}}]),e}(),t.Frame=function(){function e(){s(this,e),this.left=0,this.top=0,this.width=0,this.height=0,this.delay=0,this.disposeOp=0,this.blendOp=0,this.imageData=null,this.imageElement=null}return n(e,[{key:"createImage",value:function(){var e=this;return this.imageElement?Promise.resolve():new Promise((function(t,r){var n=URL.createObjectURL(e.imageData);e.imageElement=document.createElement("img"),e.imageElement.onload=function(){URL.revokeObjectURL(n),t()},e.imageElement.onerror=function(){URL.revokeObjectURL(n),e.imageElement=null,r(new Error("Image creation error"))},e.imageElement.src=n}))}}]),e}()},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var i=function(e){function t(e,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return i.playbackRate=1,i._currentFrameNumber=0,i._ended=!1,i._paused=!0,i._numPlays=0,i._apng=e,i.context=r,i.stop(),n&&i.play(),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"renderNextFrame",value:function(){this._currentFrameNumber=(this._currentFrameNumber+1)%this._apng.frames.length,this._currentFrameNumber===this._apng.frames.length-1&&(this._numPlays++,0!==this._apng.numPlays&&this._numPlays>=this._apng.numPlays&&(this._ended=!0,this._paused=!0)),this._prevFrame&&1==this._prevFrame.disposeOp?this.context.clearRect(this._prevFrame.left,this._prevFrame.top,this._prevFrame.width,this._prevFrame.height):this._prevFrame&&2==this._prevFrame.disposeOp&&this.context.putImageData(this._prevFrameData,this._prevFrame.left,this._prevFrame.top);var e=this.currentFrame;this._prevFrame=e,this._prevFrameData=null,2==e.disposeOp&&(this._prevFrameData=this.context.getImageData(e.left,e.top,e.width,e.height)),0==e.blendOp&&this.context.clearRect(e.left,e.top,e.width,e.height),this.context.drawImage(e.imageElement,e.left,e.top),this.emit("frame",this._currentFrameNumber),this._ended&&this.emit("end")}},{key:"play",value:function(){var e=this;this.emit("play"),this._ended&&this.stop(),this._paused=!1;var t=performance.now()+this.currentFrame.delay/this.playbackRate;requestAnimationFrame((function r(n){if(!e._ended&&!e._paused){if(n>=t){for(;n-t>=e._apng.playTime/e.playbackRate;)t+=e._apng.playTime/e.playbackRate,e._numPlays++;do{e.renderNextFrame(),t+=e.currentFrame.delay/e.playbackRate}while(!e._ended&&n>t)}requestAnimationFrame(r)}}))}},{key:"pause",value:function(){this._paused||(this.emit("pause"),this._paused=!0)}},{key:"stop",value:function(){this.emit("stop"),this._numPlays=0,this._ended=!1,this._paused=!0,this._currentFrameNumber=-1,this.context.clearRect(0,0,this._apng.width,this._apng.height),this.renderNextFrame()}},{key:"currentFrameNumber",get:function(){return this._currentFrameNumber}},{key:"currentFrame",get:function(){return this._apng.frames[this._currentFrameNumber]}},{key:"paused",get:function(){return this._paused}},{key:"ended",get:function(){return this._ended}}]),t}(function(e){return e&&e.__esModule?e:{default:e}}(r(4)).default);t.default=i},function(e,t){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function n(e){return"function"==typeof e}function i(e){return"object"==typeof e&&null!==e}function s(e){return void 0===e}e.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if(!function(e){return"number"==typeof e}(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,r,a,o,u,h;if(this._events||(this._events={}),"error"===e&&(!this._events.error||i(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var l=new Error('Uncaught, unspecified "error" event. ('+t+")");throw l.context=t,l}if(s(r=this._events[e]))return!1;if(n(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:o=Array.prototype.slice.call(arguments,1),r.apply(this,o)}else if(i(r))for(o=Array.prototype.slice.call(arguments,1),a=(h=r.slice()).length,u=0;u<a;u++)h[u].apply(this,o);return!0},r.prototype.addListener=function(e,t){var a;if(!n(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,n(t.listener)?t.listener:t),this._events[e]?i(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,i(this._events[e])&&!this._events[e].warned&&(a=s(this._maxListeners)?r.defaultMaxListeners:this._maxListeners)&&a>0&&this._events[e].length>a&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){if(!n(t))throw TypeError("listener must be a function");var r=!1;function i(){this.removeListener(e,i),r||(r=!0,t.apply(this,arguments))}return i.listener=t,this.on(e,i),this},r.prototype.removeListener=function(e,t){var r,s,a,o;if(!n(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(a=(r=this._events[e]).length,s=-1,r===t||n(r.listener)&&r.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(i(r)){for(o=a;o-- >0;)if(r[o]===t||r[o].listener&&r[o].listener===t){s=o;break}if(s<0)return this;1===r.length?(r.length=0,delete this._events[e]):r.splice(s,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n(r=this._events[e]))this.removeListener(e,r);else if(r)for(;r.length;)this.removeListener(e,r[r.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){return this._events&&this._events[e]?n(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(n(t))return 1;if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}}])},o.exports=n();const u=(0,i.g)(o.exports);async function h(e,t){const r=u(e);if(r instanceof Error)throw r;await r.createImages(),(0,s.Te)(t);const{frames:n,width:i,height:o}=r,h=document.createElement("canvas");h.width=i,h.height=o;const l=h.getContext("2d",{willReadFrequently:!0}),c=[],f=[];let p=0;for(const s of n){const e=(0,a.l5)(s.delay||100);f.push(e),p+=e;const t=s.imageElement;0===s.blendOp?l.globalCompositeOperation="copy":l.globalCompositeOperation="source-over";const r=2===s.disposeOp?l.getImageData(s.left,s.top,s.width,s.height):void 0;l.drawImage(t,s.left,s.top);const n=l.getImageData(0,0,i,o);c.push(n),0===s.disposeOp||(1===s.disposeOp?l.clearRect(s.left,s.top,s.width,s.height):2===s.disposeOp&&l.putImageData(r,s.left,s.top))}return{frameCount:n.length,duration:p,frameDurations:f,getFrame:e=>c[e],width:i,height:o}}const l=[137,80,78,71,13,10,26,10];function c(e){if(!function(e){const t=new Uint8Array(e);return!l.some(((e,r)=>e!==t[r]))}(e))return!1;const t=new DataView(e),r=new Uint8Array(e);let n,i=8;do{const e=t.getUint32(i);if(n=String.fromCharCode.apply(String,Array.prototype.slice.call(r.subarray(i+4,i+8))),"acTL"===n)return!0;i+=12+e}while("IEND"!==n&&i<r.length);return!1}}}]);
//# sourceMappingURL=6588.225121a4.chunk.js.map