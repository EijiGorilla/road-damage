"use strict";(self.webpackChunkroad_damage=self.webpackChunkroad_damage||[]).push([[2278,5617,3391],{11113:(t,e,i)=>{i.d(e,{Ee:()=>s,W4:()=>a,t_:()=>l,tr:()=>h,zJ:()=>r});var n=i(24648),o=i(96820);function r(t,e,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"abbr";return(0,o.zJ)(t,(0,n.kM)(e,i).value,i,r,s)}function s(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"abbr";return(0,o.Ee)(t,e.value,e.unit,i,n)}function a(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"abbr";return(0,o.W4)(t,e.value,e.unit,i,n)}function h(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"abbr";return(0,o.tr)(t,e.value,e.unit,i,n)}function l(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"abbr";return(0,o.t_)(t,e.value,e.unit,i,n)}},35617:(t,e,i)=>{i.r(e),i.d(e,{hydratedAdapter:()=>h});var n=i(76797),o=i(66388),r=i(13904),s=i(65215),a=i(23701);const h={convertToGEGeometry:function(t,e){if(null==e)return null;let i="cache"in e?e.cache._geVersion:void 0;return null==i&&(i=t.convertJSONToGeometry(e),"cache"in e&&(e.cache._geVersion=i)),i},exportPoint:function(t,e,i){const n=t.hasZ(e),o=t.hasM(e),s=new r.A({x:t.getPointX(e),y:t.getPointY(e),spatialReference:i});return n&&(s.z=t.getPointZ(e)),o&&(s.m=t.getPointM(e)),s.cache._geVersion=e,s},exportPolygon:function(t,e,i){const n=new s.A({rings:t.exportPaths(e),hasZ:t.hasZ(e),hasM:t.hasM(e),spatialReference:i});return n.cache._geVersion=e,n},exportPolyline:function(t,e,i){const n=new a.A({paths:t.exportPaths(e),hasZ:t.hasZ(e),hasM:t.hasM(e),spatialReference:i});return n.cache._geVersion=e,n},exportMultipoint:function(t,e,i){const n=new o.A({hasZ:t.hasZ(e),hasM:t.hasM(e),points:t.exportPoints(e),spatialReference:i});return n.cache._geVersion=e,n},exportExtent:function(t,e,i){const o=t.hasZ(e),r=t.hasM(e),s=new n.A({xmin:t.getXMin(e),ymin:t.getYMin(e),xmax:t.getXMax(e),ymax:t.getYMax(e),spatialReference:i});if(o){const i=t.getZExtent(e);s.zmin=i.vmin,s.zmax=i.vmax}if(r){const i=t.getMExtent(e);s.mmin=i.vmin,s.mmax=i.vmax}return s.cache._geVersion=e,s}}},63391:(t,e,i)=>{i.r(e),i.d(e,{buffer:()=>R,changeDefaultSpatialReferenceTolerance:()=>Q,clearDefaultSpatialReferenceTolerance:()=>F,clip:()=>a,contains:()=>l,convexHull:()=>b,crosses:()=>c,cut:()=>h,densify:()=>j,difference:()=>w,disjoint:()=>x,distance:()=>d,equals:()=>u,extendedSpatialReferenceInfo:()=>s,flipHorizontal:()=>Z,flipVertical:()=>D,generalize:()=>L,geodesicArea:()=>V,geodesicBuffer:()=>P,geodesicDensify:()=>X,geodesicLength:()=>B,intersect:()=>S,intersectLinesToPoints:()=>N,intersects:()=>p,isSimple:()=>m,nearestCoordinate:()=>G,nearestVertex:()=>I,nearestVertices:()=>T,offset:()=>C,overlaps:()=>g,planarArea:()=>Y,planarLength:()=>O,relate:()=>v,rotate:()=>z,simplify:()=>y,symmetricDifference:()=>M,touches:()=>f,union:()=>A,within:()=>_});var n=i(52612),o=i(35617);function r(t){return Array.isArray(t)?t[0].spatialReference:t&&t.spatialReference}function s(t){return n.G.extendedSpatialReferenceInfo(t)}function a(t,e){return n.G.clip(o.hydratedAdapter,r(t),t,e)}function h(t,e){return n.G.cut(o.hydratedAdapter,r(t),t,e)}function l(t,e){return n.G.contains(o.hydratedAdapter,r(t),t,e)}function c(t,e){return n.G.crosses(o.hydratedAdapter,r(t),t,e)}function d(t,e,i){return n.G.distance(o.hydratedAdapter,r(t),t,e,i)}function u(t,e){return n.G.equals(o.hydratedAdapter,r(t),t,e)}function p(t,e){return n.G.intersects(o.hydratedAdapter,r(t),t,e)}function f(t,e){return n.G.touches(o.hydratedAdapter,r(t),t,e)}function _(t,e){return n.G.within(o.hydratedAdapter,r(t),t,e)}function x(t,e){return n.G.disjoint(o.hydratedAdapter,r(t),t,e)}function g(t,e){return n.G.overlaps(o.hydratedAdapter,r(t),t,e)}function v(t,e,i){return n.G.relate(o.hydratedAdapter,r(t),t,e,i)}function m(t){return n.G.isSimple(o.hydratedAdapter,r(t),t)}function y(t){return n.G.simplify(o.hydratedAdapter,r(t),t)}function b(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n.G.convexHull(o.hydratedAdapter,r(t),t,e)}function w(t,e){return n.G.difference(o.hydratedAdapter,r(t),t,e)}function M(t,e){return n.G.symmetricDifference(o.hydratedAdapter,r(t),t,e)}function S(t,e){return n.G.intersect(o.hydratedAdapter,r(t),t,e)}function A(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return n.G.union(o.hydratedAdapter,r(t),t,e)}function C(t,e,i,s,a,h){return n.G.offset(o.hydratedAdapter,r(t),t,e,i,s,a,h)}function R(t,e,i){let s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return n.G.buffer(o.hydratedAdapter,r(t),t,e,i,s)}function P(t,e,i,s,a,h){return n.G.geodesicBuffer(o.hydratedAdapter,r(t),t,e,i,s,a,h)}function G(t,e){let i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return n.G.nearestCoordinate(o.hydratedAdapter,r(t),t,e,i)}function I(t,e){return n.G.nearestVertex(o.hydratedAdapter,r(t),t,e)}function T(t,e,i,s){return n.G.nearestVertices(o.hydratedAdapter,r(t),t,e,i,s)}function k(t){var e,i;return"xmin"in t?"center"in t?t.center:null:"x"in t?t:"extent"in t&&null!==(e=null===(i=t.extent)||void 0===i?void 0:i.center)&&void 0!==e?e:null}function z(t,e,i){var o;if(null==t)throw new E;const r=t.spatialReference;if(null==(i=null!==(o=i)&&void 0!==o?o:k(t)))throw new E;const s=t.constructor.fromJSON(n.G.rotate(t,e,i));return s.spatialReference=r,s}function Z(t,e){var i;if(null==t)throw new E;const o=t.spatialReference;if(null==(e=null!==(i=e)&&void 0!==i?i:k(t)))throw new E;const r=t.constructor.fromJSON(n.G.flipHorizontal(t,e));return r.spatialReference=o,r}function D(t,e){var i;if(null==t)throw new E;const o=t.spatialReference;if(null==(e=null!==(i=e)&&void 0!==i?i:k(t)))throw new E;const r=t.constructor.fromJSON(n.G.flipVertical(t,e));return r.spatialReference=o,r}function L(t,e,i,s){return n.G.generalize(o.hydratedAdapter,r(t),t,e,i,s)}function j(t,e,i){return n.G.densify(o.hydratedAdapter,r(t),t,e,i)}function X(t,e,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return n.G.geodesicDensify(o.hydratedAdapter,r(t),t,e,i,s)}function Y(t,e){return n.G.planarArea(o.hydratedAdapter,r(t),t,e)}function O(t,e){return n.G.planarLength(o.hydratedAdapter,r(t),t,e)}function V(t,e,i){return n.G.geodesicArea(o.hydratedAdapter,r(t),t,e,i)}function B(t,e,i){return n.G.geodesicLength(o.hydratedAdapter,r(t),t,e,i)}function N(t,e){return n.G.intersectLinesToPoints(o.hydratedAdapter,r(t),t,e)}function Q(t,e){n.G.changeDefaultSpatialReferenceTolerance(t,e)}function F(t){n.G.clearDefaultSpatialReferenceTolerance(t)}class E extends Error{constructor(){super("Illegal Argument Exception")}}},7137:(t,e,i)=>{i.d(e,{TT:()=>c,Xn:()=>_,Zj:()=>u,_3:()=>f,l1:()=>d,vN:()=>p});i(35238);var n=i(50076),o=i(31633),r=i(63885),s=i(80963),a=(i(23701),i(65215),i(13904),i(13312));function h(t){if(!t)return null;if((0,s.EA)(t)&&t.wkid){const e=r.uw[t.wkid];if(e)return e}const e=t.wkt2||t.wkt;if(e){const t=function(t){const e=r._f.exec(t);if(!e||2!==e.length)return null;const i=e[1].split(",");if(!i||i.length<3)return null;const n=parseFloat(i[1]),o=parseFloat(i[2]);return isNaN(n)||isNaN(o)?null:{a:n,f:0===o?0:1/o}}(e);if(t)return t}return null}function l(t){const e=h(t);if(function(t){return null!=t&&"b"in t&&"eSq"in t&&"radius"in t}(e))return e;const i=e.a*(1-e.f);return Object.assign(e,{b:i,eSq:1-(i/e.a)**2,radius:(2*e.a+i)/3,densificationRatio:1e4/((2*e.a+i)/3)})}function c(t){return null!==h(t)}function d(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"meters";if(!t)throw new n.A("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(t.some((t=>!c(t.spatialReference))))throw new n.A("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");const i=[];for(let n=0;n<t.length;n++){const r=t[n],{spatialReference:s}=r,a="polyline"===r.type?r.paths:r.rings;let h=0;for(let t=0;t<a.length;t++){const e=a[t];let i=0;for(let t=1;t<e.length;t++){const n=e[t-1][0],o=e[t][0],r=e[t-1][1],a=e[t][1];if(r!==a||n!==o){const t=new u;f(t,[n,r],[o,a],s),i+=t.distance}}h+=i}h=(0,o.oU)(h,"meters",e),i.push(h)}return i}class u{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;this.distance=t,this.azimuth=e,this.reverseAzimuth=i}}function p(t,e,i,n,o){const s=e[0],a=e[1],h=s*r.eh,c=a*r.eh,d=(null!==i&&void 0!==i?i:0)*r.eh,{a:u,b:p,f:f}=l(o),_=Math.sin(d),x=Math.cos(d),g=(1-f)*Math.tan(c),v=1/Math.sqrt(1+g*g),m=g*v,y=Math.atan2(g,x),b=v*_,w=b*b,M=1-w,S=M*(u*u-p*p)/(p*p),A=1+S/16384*(4096+S*(S*(320-175*S)-768)),C=S/1024*(256+S*(S*(74-47*S)-128));let R,P,G,I,T=n/(p*A),k=2*Math.PI;for(;Math.abs(T-k)>1e-12;)G=Math.cos(2*y+T),R=Math.sin(T),P=Math.cos(T),I=C*R*(G+C/4*(P*(2*G*G-1)-C/6*G*(4*R*R-3)*(4*G*G-3))),k=T,T=n/(p*A)+I;const z=m*R-v*P*x,Z=Math.atan2(m*P+v*R*x,(1-f)*Math.sqrt(w+z*z)),D=Math.atan2(R*_,v*P-m*R*x),L=f/16*M*(4+f*(4-3*M)),j=Z/r.eh,X=(h+(D-(1-L)*f*b*(T+L*R*(G+L*P*(2*G*G-1)))))/r.eh;return t[0]=X,t[1]=j,t}function f(t,e,i,n){const o=e[0]*r.eh,s=e[1]*r.eh,a=i[0]*r.eh,h=i[1]*r.eh,{a:c,b:d,f:u,radius:p}=l(n),f=a-o,_=Math.atan((1-u)*Math.tan(s)),x=Math.atan((1-u)*Math.tan(h)),g=Math.sin(_),v=Math.cos(_),m=Math.sin(x),y=Math.cos(x);let b,w,M,S,A,C,R,P,G,I,T=1e3,k=f;do{if(R=Math.sin(k),P=Math.cos(k),M=Math.sqrt(y*R*(y*R)+(v*m-g*y*P)*(v*m-g*y*P)),0===M)return t.distance=0,t.azimuth=void 0,t.reverseAzimuth=void 0,t;A=g*m+v*y*P,C=Math.atan2(M,A),G=v*y*R/M,w=1-G*G,S=A-2*g*m/w,isNaN(S)&&(S=0),I=u/16*w*(4+u*(4-3*w)),b=k,k=f+(1-I)*u*G*(C+I*M*(S+I*A*(2*S*S-1)))}while(Math.abs(k-b)>1e-12&&--T>0);if(0===T){const e=p,i=Math.acos(Math.sin(s)*Math.sin(h)+Math.cos(s)*Math.cos(h)*Math.cos(a-o))*e,n=a-o,l=Math.sin(n)*Math.cos(h),c=Math.cos(s)*Math.sin(h)-Math.sin(s)*Math.cos(h)*Math.cos(n),d=Math.atan2(l,c);return t.azimuth=d/r.eh,t.distance=i,t.reverseAzimuth=void 0,t}const z=w*(c*c-d*d)/(d*d),Z=z/1024*(256+z*(z*(74-47*z)-128)),D=d*(1+z/16384*(4096+z*(z*(320-175*z)-768)))*(C-Z*M*(S+Z/4*(A*(2*S*S-1)-Z/6*S*(4*M*M-3)*(4*S*S-3)))),L=Math.atan2(y*Math.sin(k),v*m-g*y*Math.cos(k)),j=Math.atan2(v*Math.sin(k),v*m*Math.cos(k)-g*y);return t.azimuth=L/r.eh,t.distance=D,t.reverseAzimuth=j/r.eh,t}function _(t){return c(t)?t:(0,s.K8)(t)?a.A.WGS84:null}},19747:(t,e,i)=>{i.d(e,{c:()=>r});var n=i(31633),o=i(65308);function r(t){var e,i,r,s,a;const h="metric";if(null==t)return h;const l=t.map,c=null!==(e=l&&"portalItem"in l?null===(i=l.portalItem)||void 0===i?void 0:i.portal:null)&&void 0!==e?e:o.A.getDefault();switch(null!==(r=null===(s=c.user)||void 0===s?void 0:s.units)&&void 0!==r?r:c.units){case h:return h;case"english":return"imperial"}return null!==(a=(0,n.jM)(t.spatialReference))&&void 0!==a?a:h}},11020:(t,e,i)=>{i.d(e,{N:()=>R,R:()=>G});var n=i(69539),o=i(88321),r=i(68134),s=i(76931),a=i(19555),h=i(20664),l=i(9392),c=i(69230),d=i(17072),u=i(35143),p=i(91967),f=i(46053),_=(i(81806),i(76460),i(47249),i(85842));i(27347);let x=t=>({vnodeSelector:"",properties:void 0,children:void 0,text:t.toString(),domNode:null}),g=(t,e,i)=>{for(let n=0,o=e.length;n<o;n++){let o=e[n];Array.isArray(o)?g(t,o,i):null!=o&&!1!==o&&("string"==typeof o&&(o=x(o)),i.push(o))}};function v(t,e,i){if(Array.isArray(e))i=e,e=void 0;else if(e&&("string"==typeof e||e.hasOwnProperty("vnodeSelector"))||i&&("string"==typeof i||i.hasOwnProperty("vnodeSelector")))throw new Error("h called with invalid arguments");let n,o;return i&&1===i.length&&"string"==typeof i[0]?n=i[0]:i&&(o=[],g(t,i,o),0===o.length&&(o=void 0)),{vnodeSelector:t,properties:e,children:o,text:""===n?void 0:n,domNode:null}}i(48396);let m=class extends p.A{get startPosition(){return[this.startX,this.startY]}set startPosition(t){this._set("startX",t[0]),this._set("startY",t[1])}get endPosition(){return[this.endX,this.endY]}set endPosition(t){this._set("endX",t[0]),this._set("endY",t[1])}constructor(t){super(t),this.startX=0,this.startY=0,this.endX=0,this.endY=0,this.width=1,this.color=[0,0,0,.5],this.visible=!0,this.isDecoration=!0}get _strokeStyle(){const t=this.color;return"rgba(".concat(t[0],", ").concat(t[1],", ").concat(t[2],", ").concat(t[3],")")}get _lineCap(){return"round"}render(){const{height:t,left:e,top:i,width:n,x1:o,x2:r,y1:s,y2:a}=this._calculateCoordinates(y),h="stroke: ".concat(this._strokeStyle,"; stroke-width: ").concat(this.width,"; stroke-linecap: ").concat(this._lineCap,";");return v("div",{classes:{"esri-line-overlay-item":!0},styles:{left:e+"px",top:i+"px",width:n+"px",height:t+"px",visibility:this.visible?"visible":"hidden"}},[v("svg",{width:n,height:t},[v("line",{x1:o,y1:s,x2:r,y2:a,style:h})])])}renderCanvas(t){if(!this.visible)return;t.strokeStyle=this._strokeStyle,t.lineWidth=this.width,t.lineCap=this._lineCap;const e=this._calculateCoordinates(y);t.beginPath(),t.moveTo(e.left+e.x1,e.top+e.y1),t.lineTo(e.left+e.x2,e.top+e.y2),t.stroke()}_calculateCoordinates(t){const e=Math.min(this.startX,this.endX),i=Math.max(this.startX,this.endX),n=Math.min(this.startY,this.endY),o=Math.max(this.startY,this.endY),r=this.width;return t.left=e-r,t.top=n-r,t.width=i-e+2*r,t.height=Math.max(20,o-n+2*r),t.x1=this.startX-e+r,t.y1=this.startY-n+r,t.x2=this.endX-e+r,t.y2=this.endY-n+r,t}};(0,u._)([(0,f.MZ)()],m.prototype,"startX",void 0),(0,u._)([(0,f.MZ)()],m.prototype,"startY",void 0),(0,u._)([(0,f.MZ)()],m.prototype,"endX",void 0),(0,u._)([(0,f.MZ)()],m.prototype,"endY",void 0),(0,u._)([(0,f.MZ)()],m.prototype,"startPosition",null),(0,u._)([(0,f.MZ)()],m.prototype,"endPosition",null),(0,u._)([(0,f.MZ)()],m.prototype,"width",void 0),(0,u._)([(0,f.MZ)()],m.prototype,"color",void 0),(0,u._)([(0,f.MZ)()],m.prototype,"visible",void 0),(0,u._)([(0,f.MZ)()],m.prototype,"isDecoration",void 0),(0,u._)([(0,f.MZ)({readOnly:!0})],m.prototype,"_strokeStyle",null),m=(0,u._)([(0,_.$)("esri.views.overlay.LineOverlayItem")],m);const y={left:0,top:0,width:0,height:0,x1:0,y1:0,x2:0,y2:0},b=m,w={bottom:"esri-text-overlay-item-anchor-bottom","bottom-right":"esri-text-overlay-item-anchor-bottom-right","bottom-left":"esri-text-overlay-item-anchor-bottom-left",top:"esri-text-overlay-item-anchor-top","top-right":"esri-text-overlay-item-anchor-top-right","top-left":"esri-text-overlay-item-anchor-top-left",center:"esri-text-overlay-item-anchor-center",right:"esri-text-overlay-item-anchor-right",left:"esri-text-overlay-item-anchor-left"};let M=class extends p.A{get position(){return[this.x,this.y]}set position(t){this._set("x",t[0]),this._set("y",t[1])}get _textShadowColor(){const{textColor:t,backgroundColor:e}=this,i=e.clone();return i.a*=t.a,i}get _textShadow(){const t=this._textShadowColor.toCss(!0);return"0 0 ".concat(this._textShadowSize,"px ").concat(t)}get padding(){return.5*this.fontSize}get _borderRadius(){return this.padding}constructor(t){super(t),this.x=0,this.y=0,this.text="-",this.fontSize=14,this.anchor="center",this.visible=!0,this.isDecoration=!0,this.backgroundColor=new n.A([0,0,0,.6]),this.textColor=new n.A([255,255,255]),this._textShadowSize=1}render(){return v("div",{classes:this._cssClasses(),styles:{left:Math.floor(this.x)+"px",top:Math.floor(this.y)+"px",visibility:this.visible?"visible":"hidden",fontSize:this.fontSize+"px",lineHeight:this.fontSize+"px",backgroundColor:this.backgroundColor.toCss(!0),color:this.textColor.toCss(!0),padding:this.padding+"px",borderRadius:this._borderRadius+"px",textShadow:this._textShadow}},[this.text])}renderCanvas(t){if(!this.visible)return;const e=t.font.replace(/^(.*?)px/,"");t.font="".concat(this.fontSize,"px ").concat(e);const i=this.padding,n=this._borderRadius,o=t.measureText(this.text).width,r=this.fontSize,s=S[this.anchor];t.textAlign="center",t.textBaseline="middle";const a=o+2*i,h=r+2*i,l=this.x+s.x*a,c=this.y+s.y*h;this._roundedRect(t,l,c,a,h,n),t.fillStyle=this.backgroundColor.toCss(!0),t.fill();const d=this.x+(s.x+.5)*a,u=this.y+(s.y+.5)*h;this._renderTextShadow(t,this.text,d,u),t.fillStyle=this.textColor.toCss(!0),t.fillText(this.text,d,u)}_renderTextShadow(t,e,i,n){t.lineJoin="miter",t.fillStyle="rgba(".concat(this._textShadowColor.r,", ").concat(this._textShadowColor.g,", ").concat(this._textShadowColor.b,", ").concat(1/A.length,")");const o=this._textShadowSize;for(const[r,s]of A)t.fillText(e,i+o*r,n+o*s)}_roundedRect(t,e,i,n,o,r){t.beginPath(),t.moveTo(e,i+r),t.arcTo(e,i,e+r,i,r),t.lineTo(e+n-r,i),t.arcTo(e+n,i,e+n,i+r,r),t.lineTo(e+n,i+o-r),t.arcTo(e+n,i+o,e+n-r,i+o,r),t.lineTo(e+r,i+o),t.arcTo(e,i+o,e,i+o-r,r),t.closePath()}_cssClasses(){const t={"esri-text-overlay-item":!0};let e;for(e in w)t[w[e]]=this.anchor===e;return t}};(0,u._)([(0,f.MZ)()],M.prototype,"x",void 0),(0,u._)([(0,f.MZ)()],M.prototype,"y",void 0),(0,u._)([(0,f.MZ)()],M.prototype,"position",null),(0,u._)([(0,f.MZ)()],M.prototype,"text",void 0),(0,u._)([(0,f.MZ)()],M.prototype,"fontSize",void 0),(0,u._)([(0,f.MZ)()],M.prototype,"anchor",void 0),(0,u._)([(0,f.MZ)()],M.prototype,"visible",void 0),(0,u._)([(0,f.MZ)()],M.prototype,"isDecoration",void 0),(0,u._)([(0,f.MZ)()],M.prototype,"backgroundColor",void 0),(0,u._)([(0,f.MZ)()],M.prototype,"textColor",void 0),(0,u._)([(0,f.MZ)()],M.prototype,"_textShadowSize",void 0),(0,u._)([(0,f.MZ)()],M.prototype,"_textShadowColor",null),(0,u._)([(0,f.MZ)()],M.prototype,"_textShadow",null),(0,u._)([(0,f.MZ)()],M.prototype,"padding",null),(0,u._)([(0,f.MZ)()],M.prototype,"_borderRadius",null),M=(0,u._)([(0,_.$)("esri.views.overlay.TextOverlayItem")],M);const S={bottom:{x:-.5,y:-1,textAlign:"center",textBaseline:"bottom"},"bottom-left":{x:0,y:-1,textAlign:"left",textBaseline:"bottom"},"bottom-right":{x:-1,y:-1,textAlign:"right",textBaseline:"bottom"},center:{x:-.5,y:-.5,textAlign:"center",textBaseline:"middle"},left:{x:0,y:-.5,textAlign:"left",textBaseline:"middle"},right:{x:-1,y:-.5,textAlign:"right",textBaseline:"middle"},top:{x:-.5,y:0,textAlign:"center",textBaseline:"top"},"top-left":{x:0,y:0,textAlign:"left",textBaseline:"top"},"top-right":{x:-1,y:0,textAlign:"right",textBaseline:"top"}},A=[];{const t=16;for(let e=0;e<360;e+=360/t)A.push([Math.cos(Math.PI*e/180),Math.sin(Math.PI*e/180)])}const C=M;class R extends c.B{constructor(t){super(t),this._handles=new o.A,this._textItem=null,this._calloutItem=null,this._showCallout=!0,this._showText=!0,this._geometry=null,this._text="-",this._fontSize=14,this._backgroundColor=new n.A([0,0,0,.6]),this._calloutColor=new n.A([0,0,0,.5]),this._textColor=new n.A([255,255,255]),this._distance=25,this._anchor="right",this.updatePositionOnCameraMove=!0,this.applyProperties(t)}get geometry(){return this._geometry}set geometry(t){this._geometry=t,this.updateLabelPosition()}get isDecoration(){return this._isDecoration}set isDecoration(t){this._isDecoration=t,this._textItem&&(this._textItem.isDecoration=t),this._calloutItem&&(this._calloutItem.isDecoration=t)}get textItem(){return this._textItem}get text(){return this._text}set text(t){this._text=t,this.attached&&(this._textItem.text=this._text)}get fontSize(){return this._fontSize}set fontSize(t){this._fontSize=t,this.attached&&(this._textItem.fontSize=this._fontSize)}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){this._backgroundColor=t,this.attached&&(this._textItem.backgroundColor=this._backgroundColor)}get calloutColor(){return this._calloutColor}set calloutColor(t){this._calloutColor=t,this.attached&&(this._calloutItem.color=this._calloutColor.toRgba())}get textColor(){return this._textColor}set textColor(t){this._textColor=t,this.attached&&(this._textItem.textColor=this._textColor)}get distance(){return this._distance}set distance(t){this._distance!==t&&(this._distance=t,this.updateLabelPosition())}get anchor(){return this._anchor}set anchor(t){this._anchor!==t&&(this._anchor=t,this.updateLabelPosition())}get _camera(){return this.view.state.cssCamera}overlaps(t){var e;return!!this.attached&&this.textItem.visible&&t.textItem.visible&&!(null===(e=this.view.overlay)||void 0===e||!e.overlaps(this._textItem,t.textItem))}updateLabelPosition(){if(!this.attached)return;this._showText=!1,this._showCallout=!1;const{geometry:t,view:e,visible:i}=this;if(null!=t&&e._stage)switch(t.type){case"point":if(!this._computeLabelPositionFromPoint(t.point,Y))break;if(t.callout){const e=this._camera,i=t.callout.distance;(0,a.WQ)(X,X,[0,t.callout.offset]),e.renderToScreen(X,Y),(0,a.hZ)(D,0,1),(0,a.hs)(D,D,i),(0,a.WQ)(D,D,X),e.renderToScreen(D,O),this._showCallout=this._updatePosition(Y,O)}else this._textItem.position=[Y[0],Y[1]],this._textItem.anchor="center";this._showText=!0;break;case"corner":if(!this._computeLabelPositionFromCorner(t,this._distance,Y,O))break;this._showCallout=this._updatePosition(Y,O),this._showText=!0;break;case"segment":{if(!this._computeLabelPositionFromSegment(t,this._distance,this._anchor,Y,O))break;this._showText=!0;const e=this._updatePosition(Y,O);this._showCallout=!1!==t.callout&&e,this._showCallout||(this._textItem.anchor="center")}}this.updateVisibility(i)}_computeLabelPositionFromPoint(t,e){const i=this._camera;return i.projectToRenderScreen(t,j),!(j[2]<0||j[2]>1)&&(i.renderToScreen(j,e),!0)}_computeLabelPositionFromCorner(t,e,i,n){if(!t)return!1;const o=this._camera;return P(t.left,1,o,z),(0,a.ze)(z,z),P(t.right,0,o,Z),(0,a.WQ)(D,z,Z),(0,a.ze)(D,D),(0,a.S8)(D,D),o.projectToRenderScreen(t.left.endRenderSpace,j),!(j[2]<0||j[2]>1)&&(o.renderToScreen(j,i),(0,a.hs)(D,D,e),(0,a.WQ)(D,D,j),o.renderToScreen(D,n),!0)}_computeLabelPositionFromSegment(t,e,i,n,o){if(!t)return!1;const r=t.segment,s=this._camera;(0,d.QO)(r.startRenderSpace,r.endRenderSpace,s,z),(0,a.hZ)(D,-z[1],z[0]);let h=!1;switch(i){case"top":h=D[1]<0;break;case"bottom":h=D[1]>0;break;case"left":h=D[0]>0;break;case"right":h=D[0]<0}if(h&&(0,a.ze)(D,D),0===(0,a.Bw)(D))switch(i){case"top":D[1]=1;break;case"bottom":D[1]=-1;break;case"left":D[0]=-1;break;case"right":D[0]=1}return r.eval(V[t.sampleLocation],L),s.projectToRenderScreen(L,j),!(j[2]<0||j[2]>1)&&(s.renderToScreen(j,n),(0,a.hs)(D,D,e),(0,a.WQ)(D,D,j),s.renderToScreen(D,o),!0)}_updatePosition(t,e){if(e){const i=e[0]-t[0],n=e[1]-t[1];return this._textItem.position=[e[0],e[1]],this._textItem.anchor=Math.abs(i)>Math.abs(n)?i>0?"left":"right":n>0?"top":"bottom",this._calloutItem.startPosition=[t[0],t[1]],this._calloutItem.endPosition=[e[0],e[1]],!0}return this._textItem.position=[t[0],t[1]],this._textItem.anchor="center",!1}createResources(){var t;this._textItem=new C({visible:!0,text:this._text,fontSize:this._fontSize,backgroundColor:this._backgroundColor,textColor:this._textColor,isDecoration:this._isDecoration}),this._calloutItem=new b({color:this._calloutColor.toRgba(),visible:!0,width:2,isDecoration:this._isDecoration}),this.updateLabelPosition(),null!==(t=this.view.overlay)&&void 0!==t&&t.items.addMany([this._textItem,this._calloutItem]),this.updatePositionOnCameraMove&&this._handles.add((0,r.wB)((()=>this.view.state.camera),(()=>this.updateLabelPosition())))}destroyResources(){this.view.overlay&&!this.view.overlay.destroyed&&this.view.overlay.items.removeMany([this._textItem,this._calloutItem]),this._handles.removeAll()}updateVisibility(t){this._textItem.visible=this._showText&&t,this._calloutItem.visible=this._showCallout&&t}}function P(t,e,i,n){return t.eval(e,I,k),(0,h.g)(T,I,k),(0,d.QO)(I,T,i,n)}function G(t){switch(t){case"top":return"bottom";case"right":return"left";case"bottom":return"top";case"left":return"right"}}const I=(0,l.vt)(),T=(0,l.vt)(),k=(0,l.vt)(),z=(0,s.QG)(),Z=(0,s.QG)(),D=(0,s.QG)(),L=(0,l.vt)(),j=(0,s.r_)(),X=(0,s.QG)(),Y=(0,s.gs)(),O=(0,s.gs)(),V={start:0,center:.5,end:1}},25191:(t,e,i)=>{i.d(e,{C:()=>c,J:()=>d});var n=i(20664),o=i(9392),r=i(9624),s=i(98510),a=i(14487),h=i(75762),l=i(94966);class c{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,o.vt)(),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,o.vt)();this.startRenderSpace=t,this.endRenderSpace=e,this.type="euclidean"}eval(t,e,i){return(0,n.m)(e,this.startRenderSpace,this.endRenderSpace,t),i&&((0,n.f)(i,this.endRenderSpace,this.startRenderSpace),(0,n.n)(i,i)),e}createRenderGeometry(t,e){const i=[],o=[],r=(e,r)=>{const s=p;(0,n.f)(s,e,t),i.push([s[0],s[1],s[2]]),o.push([r[0],r[1],r[2]])},s=e.worldUpAtPosition(this.eval(.5,u),h.rq.get());return r(this.startRenderSpace,s),r(this.endRenderSpace,s),{points:i,normals:o}}static fromPositionAndVector(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return(0,n.h)(u,e,i),(0,n.g)(u,t,u),new c((0,o.o8)(t),(0,o.o8)(u))}}class d{_projectIn(t,e){this._project?(0,a.F)(t,this.renderSpatialReference,e,this._pcpf):(0,n.c)(e,t)}constructor(t,e,i){this.startRenderSpace=t,this.endRenderSpace=e,this.renderSpatialReference=i,this.type="geodesic",this._start=(0,o.vt)(),this._end=(0,o.vt)(),this._pcpf=(0,s.lO)(i),this._project=(0,r.canProjectWithoutEngine)(i,this._pcpf),this._projectIn(t,this._start),this._projectIn(e,this._end)}eval(t,e,i){if(this._project)if(i){const o=p;(0,l.is)(this._start,this._end,t,e,o),(0,n.g)(f,e,o),(0,a.F)(e,this._pcpf,e,this.renderSpatialReference),(0,a.F)(f,this._pcpf,f,this.renderSpatialReference),(0,n.f)(i,f,e),(0,n.n)(i,i)}else(0,l.nu)(this._start,this._end,t,e),(0,a.F)(e,this._pcpf,e,this.renderSpatialReference);else(0,n.m)(e,this._start,this._end,t),i&&((0,n.f)(i,this._end,this._start),(0,n.n)(i,i));return e}createRenderGeometry(t,e){const i=[],o=[],r=(e,r)=>{const s=f;(0,n.f)(s,e,t),i.push([s[0],s[1],s[2]]),o.push([r[0],r[1],r[2]])};for(let n=0;n<128;++n){const t=n/127,i=u,o=p;this.eval(t,i),e.worldUpAtPosition(i,o),r(i,o)}return{points:i,normals:o}}}const u=(0,o.vt)(),p=(0,o.vt)(),f=(0,o.vt)()},17072:(t,e,i)=>{i.d(e,{QO:()=>l,XG:()=>c,jq:()=>d});var n=i(76931),o=i(19555),r=i(20664),s=i(9392),a=i(18117),h=i(12482);function l(t,e,i,n){i.projectToRenderScreen(t,f),i.projectToRenderScreen(e,_),(0,o.Re)(n,_,f),(0,o.S8)(n,n)}function c(t,e,i,n){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:(0,s.vt)();const a=(0,r.c)(p,t);return a[2]=(0,h.xS)(n,a,e,i)||0,n.renderCoordsHelper.toRenderCoords(a,e,o),o}function d(t,e,i,o){return"2d"===o.type?(u.x=t[0],u.y=t[1],u.spatialReference=e,o.toScreen(u)):(c(t,e,i,o,p),o.state.camera.projectToScreen(p,x),(0,n.tc)(x[0],x[1]))}const u=(0,a.T)(0,0,0,null),p=(0,s.vt)(),f=(0,n.QG)(),_=(0,n.QG)(),x=(0,n.gs)()}}]);
//# sourceMappingURL=2278.5bb8f671.chunk.js.map