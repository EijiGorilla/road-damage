"use strict";(self.webpackChunkroad_damage=self.webpackChunkroad_damage||[]).push([[1819],{46530:(e,t,r)=>{function i(e){var t;const r=e.layer;return"floorInfo"in r&&null!==(t=r.floorInfo)&&void 0!==t&&t.floorField&&"floors"in e.view?n(e.view.floors,r.floorInfo.floorField):null}function o(e,t){var r;return"floorInfo"in t&&null!==(r=t.floorInfo)&&void 0!==r&&r.floorField?n(e,t.floorInfo.floorField):null}function n(e,t){if(null===e||void 0===e||!e.length)return null;const r=e.filter((e=>""!==e)).map((e=>"'".concat(e,"'")));return r.push("''"),"".concat(t," IN (").concat(r.join(","),") OR ").concat(t," IS NULL")}r.d(t,{E:()=>i,f:()=>o})},93080:(e,t,r)=>{r.d(t,{Uh:()=>ee,ox:()=>W});var i=r(35143),o=r(39356),n=r(91967),s=r(18690),l=r(19276),a=r(50076),u=r(54901),p=r(81806),c=r(87663),y=r(50346),d=r(68134),f=r(31633),h=r(46053),m=(r(76460),r(85842)),g=r(76797),v=r(68002),w=r(53430),b=r(46530);function x(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function M(e,t){var r;return"number"==typeof e?e:null!==e&&void 0!==e&&null!==(r=e.stops)&&void 0!==r&&r.length?function(e){let t=0,r=0;for(let i=0;i<e.length;i++){const o=e[i].size;"number"==typeof o&&(t+=o,r++)}return t/r}(e.stops):t}function _(e,t){if(!t)return e;const r=t.filter((e=>"size"===e.type)).map((t=>{const{maxSize:r,minSize:i}=t;return(M(r,e)+M(i,e))/2}));let i=0;const o=r.length;if(0===o)return e;for(let s=0;s<o;s++)i+=r[s];const n=Math.floor(i/o);return Math.max(n,e)}function A(e){const t=null===e||void 0===e?void 0:e.renderer,r="touch"===(null===e||void 0===e?void 0:e.pointerType)?9:6;if(!t)return r;const i="visualVariables"in t?_(r,t.visualVariables):r;if("simple"===t.type)return x(i,t.symbol);if("unique-value"===t.type){var o;let e=i;return null!==(o=t.uniqueValueInfos)&&void 0!==o&&o.forEach((t=>{e=x(e,t.symbol)})),e}if("class-breaks"===t.type){let e=i;return t.classBreakInfos.forEach((t=>{e=x(e,t.symbol)})),e}return"dot-density"===t.type||t.type,i}var S=r(3825),F=r(1438),I=r(54994),R=r(34154),Z=r(19902),E=r(80963),O=r(65419);function j(e,t){var r;const{dpi:i,gdbVersion:o,geometry:n,geometryPrecision:s,height:l,historicMoment:a,layerOption:u,mapExtent:p,maxAllowableOffset:c,returnFieldName:y,returnGeometry:d,returnUnformattedValues:f,returnZ:h,spatialReference:m,timeExtent:g,tolerance:v,width:w}=e.toJSON(),{dynamicLayers:b,layerDefs:x,layerIds:M}=N(e),_=null!=(null===t||void 0===t?void 0:t.geometry)?t.geometry:null,A={historicMoment:a,geometryPrecision:s,maxAllowableOffset:c,returnFieldName:y,returnGeometry:d,returnUnformattedValues:f,returnZ:h,tolerance:v},S=_&&_.toJSON()||n;A.imageDisplay="".concat(w,",").concat(l,",").concat(i),o&&(A.gdbVersion=o),S&&(delete S.spatialReference,A.geometry=JSON.stringify(S),A.geometryType=(0,Z.$B)(S));const F=null!==(r=null!==m&&void 0!==m?m:null===S||void 0===S?void 0:S.spatialReference)&&void 0!==r?r:null===p||void 0===p?void 0:p.spatialReference;if(F&&(A.sr=(0,E.YX)(F)),A.time=g?[g.start,g.end].join(","):null,p){const{xmin:e,ymin:t,xmax:r,ymax:i}=p;A.mapExtent="".concat(e,",").concat(t,",").concat(r,",").concat(i)}return x&&(A.layerDefs=x),b&&!x&&(A.dynamicLayers=b),A.layers="popup"===u?"visible":u,M&&!b&&(A.layers+=":".concat(M.join(","))),A}function N(e){var t;const{mapExtent:r,floors:i,width:o,sublayers:n,layerIds:s,layerOption:l,gdbVersion:a}=e,u=null===n||void 0===n||null===(t=n.find((e=>null!=e.layer)))||void 0===t||null===(t=t.layer)||void 0===t?void 0:t.serviceSublayers,p="popup"===l,c={},y=(0,v.X_)({extent:r,width:o,spatialReference:null===r||void 0===r?void 0:r.spatialReference}),d=[],f=e=>{const t=0===y,r=0===e.minScale||y<=e.minScale,i=0===e.maxScale||y>=e.maxScale;if(e.visible&&(t||r&&i))if(e.sublayers)e.sublayers.forEach(f);else{if(!1===(null===s||void 0===s?void 0:s.includes(e.id))||p&&(!e.popupTemplate||!e.popupEnabled))return;d.unshift(e)}};if(null!==n&&void 0!==n&&n.forEach(f),n&&!d.length)c.layerIds=[];else{const e=(0,O.Sk)(d,u,a),t=d.map((e=>{const t=(0,b.f)(i,e);return e.toExportImageJSON(t)}));if(e)c.dynamicLayers=JSON.stringify(t);else{if(n){let e=d.map((e=>{let{id:t}=e;return t}));s&&(e=e.filter((e=>s.includes(e)))),c.layerIds=e}else(null===s||void 0===s?void 0:s.length)&&(c.layerIds=s);const e=function(e,t){const r=!(null===e||void 0===e||!e.length),i=t.filter((e=>null!=e.definitionExpression||r&&null!=e.floorInfo));return i.length?i.map((t=>{const r=(0,b.f)(e,t),i=(0,R.m)(r,t.definitionExpression);return{id:t.id,definitionExpression:null!==i&&void 0!==i?i:void 0}})):null}(i,d);if(null!=e&&e.length){const t={};for(const r of e)r.definitionExpression&&(t[r.id]=r.definitionExpression);Object.keys(t).length&&(c.layerDefs=JSON.stringify(t))}}}return c}var P,G=r(35238),V=r(82111),T=r(42553),L=r(40565),U=(r(47249),r(17707)),H=r(13312);let k=P=class extends T.oY{static from(e){return(0,L.PZ)(P,e)}constructor(e){super(e),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.historicMoment=null,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}writeHistoricMoment(e,t){t.historicMoment=e&&e.getTime()}};(0,i._)([(0,h.MZ)({type:Number,json:{write:!0}})],k.prototype,"dpi",void 0),(0,i._)([(0,h.MZ)()],k.prototype,"floors",void 0),(0,i._)([(0,h.MZ)({type:String,json:{write:!0}})],k.prototype,"gdbVersion",void 0),(0,i._)([(0,h.MZ)({types:G.yR,json:{read:Z.rS,write:!0}})],k.prototype,"geometry",void 0),(0,i._)([(0,h.MZ)({type:Number,json:{write:!0}})],k.prototype,"geometryPrecision",void 0),(0,i._)([(0,h.MZ)({type:Number,json:{write:!0}})],k.prototype,"height",void 0),(0,i._)([(0,h.MZ)({type:Date})],k.prototype,"historicMoment",void 0),(0,i._)([(0,U.K)("historicMoment")],k.prototype,"writeHistoricMoment",null),(0,i._)([(0,h.MZ)({type:[Number],json:{write:!0}})],k.prototype,"layerIds",void 0),(0,i._)([(0,h.MZ)({type:["top","visible","all","popup"],json:{write:!0}})],k.prototype,"layerOption",void 0),(0,i._)([(0,h.MZ)({type:g.A,json:{write:!0}})],k.prototype,"mapExtent",void 0),(0,i._)([(0,h.MZ)({type:Number,json:{write:!0}})],k.prototype,"maxAllowableOffset",void 0),(0,i._)([(0,h.MZ)({type:Boolean,json:{write:!0}})],k.prototype,"returnFieldName",void 0),(0,i._)([(0,h.MZ)({type:Boolean,json:{write:!0}})],k.prototype,"returnGeometry",void 0),(0,i._)([(0,h.MZ)({type:Boolean,json:{write:!0}})],k.prototype,"returnM",void 0),(0,i._)([(0,h.MZ)({type:Boolean,json:{write:!0}})],k.prototype,"returnUnformattedValues",void 0),(0,i._)([(0,h.MZ)({type:Boolean,json:{write:!0}})],k.prototype,"returnZ",void 0),(0,i._)([(0,h.MZ)({type:H.A,json:{write:!0}})],k.prototype,"spatialReference",void 0),(0,i._)([(0,h.MZ)()],k.prototype,"sublayers",void 0),(0,i._)([(0,h.MZ)({type:V.A,json:{write:!0}})],k.prototype,"timeExtent",void 0),(0,i._)([(0,h.MZ)({type:Number,json:{write:!0}})],k.prototype,"tolerance",void 0),(0,i._)([(0,h.MZ)({type:Number,json:{write:!0}})],k.prototype,"width",void 0),k=P=(0,i._)([(0,m.$)("esri.rest.support.IdentifyParameters")],k);const z=k;var Q=r(28379),J=r(31608);let q=class extends T.oY{constructor(e){super(e),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(e,t){return o.A.fromJSON({attributes:{...t.attributes},geometry:{...t.geometry}})}writeFeature(e,t){if(!e)return;const{attributes:r,geometry:i}=e;r&&(t.attributes={...r}),null!=i&&(t.geometry=i.toJSON(),t.geometryType=J.Y.toJSON(i.type))}};(0,i._)([(0,h.MZ)({type:String,json:{write:!0}})],q.prototype,"displayFieldName",void 0),(0,i._)([(0,h.MZ)({type:o.A})],q.prototype,"feature",void 0),(0,i._)([(0,Q.w)("feature",["attributes","geometry"])],q.prototype,"readFeature",null),(0,i._)([(0,U.K)("feature")],q.prototype,"writeFeature",null),(0,i._)([(0,h.MZ)({type:Number,json:{write:!0}})],q.prototype,"layerId",void 0),(0,i._)([(0,h.MZ)({type:String,json:{write:!0}})],q.prototype,"layerName",void 0),q=(0,i._)([(0,m.$)("esri.rest.support.IdentifyResult")],q);const B=q;async function D(e,t,r){const i=(t=function(e){return z.from(e)}(t)).geometry?[t.geometry]:[],o=(0,I.Dl)(e);return o.path+="/identify",(0,F.el)(i).then((e=>{const i=j(t,{geometry:null===e||void 0===e?void 0:e[0]}),n=(0,I.lF)({...o.query,f:"json",...i}),s=(0,I.jV)(n,r);return(0,S.A)(o.path,s).then(Y).then((e=>function(e,t){if(null===t||void 0===t||!t.length)return e;const r=new Map;function i(e){r.set(e.id,e),e.sublayers&&e.sublayers.forEach(i)}t.forEach(i);for(const o of e.results)o.feature.sourceLayer=r.get(o.layerId);return e}(e,t.sublayers)))}))}function Y(e){const t=e.data;return t.results=t.results||[],t.exceededTransferLimit=Boolean(t.exceededTransferLimit),t.results=t.results.map((e=>B.fromJSON(e))),t}var $=r(98976),C=r(76940),K=r(2257);let X=null;function W(e,t){return"tile"===t.type||"map-image"===t.type}let ee=class extends n.A{constructor(e){super(e),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=(0,y.sg)((async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch((()=>{})))}))}initialize(){const e=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch((()=>{}))),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([(0,d.on)((()=>this.highlightGraphics),"change",(t=>e(t.added)),{onListenerAdd:t=>e(t)})])}async fetchPopupFeaturesAtLocation(e,t){var r,i;const{layerView:{layer:o,view:{scale:n}}}=this;if(!e)throw new a.A("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:o});const s=function(e,t,r){const i=[];if(!e)return i;const o=e=>{const n=0===e.minScale||t<=e.minScale,s=0===e.maxScale||t>=e.maxScale;if(e.visible&&n&&s)if(e.sublayers)e.sublayers.forEach(o);else if(e.popupEnabled){const t=(0,K.D8)(e,{...r,defaultPopupTemplateEnabled:!1});null!=t&&i.unshift({sublayer:e,popupTemplate:t})}};return e.map(o),i}(o.sublayers,n,t);if(!s.length)return[];const l=await async function(e,t){var r;if(null!==(r=e.capabilities)&&void 0!==r&&null!==(r=r.operations)&&void 0!==r&&r.supportsQuery)return!0;try{return await Promise.any(t.map((e=>{let{sublayer:t}=e;return t.load().then((()=>t.capabilities.operations.supportsQuery))})))}catch{return!1}}(o,s);if((null!==(r=null===(i=o.capabilities)||void 0===i||null===(i=i.operations)||void 0===i?void 0:i.supportsIdentify)&&void 0!==r&&!r||!(o.version>=10.5))&&!l)throw new a.A("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:o});return l?this._fetchPopupFeaturesUsingQueries(e,s,t):this._fetchPopupFeaturesUsingIdentify(e,s,t)}clearHighlights(){var e;null===(e=this.highlightGraphics)||void 0===e||e.removeAll()}highlight(e){var t,r;const i=this.highlightGraphics;if(!i)return(0,u.hA)();let n=null;if(e instanceof o.A?n=[e]:l.A.isCollection(e)&&e.length>0?n=e.toArray():Array.isArray(e)&&e.length>0&&(n=e),n=null===(t=n)||void 0===t?void 0:t.filter(s.Ru),null===(r=n)||void 0===r||!r.length)return(0,u.hA)();for(const o of n){const e=o.sourceLayer;null!=e&&"geometryType"in e&&"point"===e.geometryType&&(o.visible=!1)}return i.addMany(n),(0,u.hA)((()=>{var e;return i.removeMany(null!==(e=n)&&void 0!==e?e:[])}))}async _updateHighlightedFeaturesSymbols(e){const{layerView:{view:t},highlightGraphics:i,highlightGraphicUpdated:o}=this;if(i&&o)for(const n of e){const e=n.sourceLayer&&"renderer"in n.sourceLayer&&n.sourceLayer.renderer;n.sourceLayer&&"geometryType"in n.sourceLayer&&"point"===n.sourceLayer.geometryType&&e&&"getSymbolAsync"in e&&e.getSymbolAsync(n).then((async s=>{var l;s||(s=new C.A);let a=null;const u="visualVariables"in e?null===(l=e.visualVariables)||void 0===l?void 0:l.find((e=>"size"===e.type)):void 0;u&&(X||(X=(await Promise.resolve().then(r.bind(r,15492))).getSize),a=X(u,n,{view:t.type,scale:t.scale,shape:"simple-marker"===s.type?s.style:null})),a||(a="width"in s&&"height"in s&&null!=s.width&&null!=s.height?Math.max(s.width,s.height):"size"in s?s.size:16),i.includes(n)&&(n.symbol=new C.A({style:"square",size:a,xoffset:"xoffset"in s?s.xoffset:0,yoffset:"yoffset"in s?s.yoffset:0}),o(n,"symbol"),n.visible=!0)}))}}async _updateHighlightedFeaturesGeometries(e){const{layerView:{layer:t,view:r},highlightGraphics:i,highlightGraphicUpdated:o}=this;if(this._highlightGeometriesResolution=e,!o||null===i||void 0===i||!i.length||!t.capabilities.operations.supportsQuery)return;const n=this._getTargetResolution(e),s=new Map;for(const u of i)if(!this._featuresResolutions.has(u)||this._featuresResolutions.get(u)>n){const e=u.sourceLayer;(0,c.tE)(s,e,(()=>new Map)).set(u.getObjectId(),u)}const l=Array.from(s,(e=>{let[t,i]=e;const o=t.createQuery();return o.objectIds=[...i.keys()],o.outFields=[t.objectIdField],o.returnGeometry=!0,o.maxAllowableOffset=n,o.outSpatialReference=r.spatialReference,t.queryFeatures(o)})),a=await Promise.all(l);if(!this.destroyed)for(const{features:u}of a)for(const e of u){const t=e.sourceLayer,r=s.get(t).get(e.getObjectId());r&&i.includes(r)&&(r.geometry=e.geometry,o(r,"geometry"),this._featuresResolutions.set(r,n))}}_getTargetResolution(e){const t=e*(0,f.GA)(this.layerView.view.spatialReference),r=t/16;return r<=10?0:e/t*r}async _fetchPopupFeaturesUsingIdentify(e,t,r){const i=await this._createIdentifyParameters(e,t,r);if(null==i)return[];const{results:o}=await D(this.layerView.layer.parsedUrl,i,r);return o.map((e=>e.feature))}async _createIdentifyParameters(e,t,r){const{floors:i,layer:o,timeExtent:n,view:{spatialReference:s,scale:l}}=this.layerView;if(!t.length)return null;await Promise.all(t.map((e=>{let{sublayer:t}=e;return t.load(r).catch((()=>{}))})));const a=Math.min((0,p.A)("mapservice-popup-identify-max-tolerance"),o.allSublayers.reduce(((e,t)=>t.renderer?A({renderer:t.renderer,pointerType:null===r||void 0===r?void 0:r.pointerType}):e),2)),u=this.createFetchPopupFeaturesQueryGeometry(e,a),c=(0,v.i1)(l,s),y=Math.round(u.width/c),d=new g.A({xmin:u.center.x-c*y,ymin:u.center.y-c*y,xmax:u.center.x+c*y,ymax:u.center.y+c*y,spatialReference:u.spatialReference});return new z({floors:i,gdbVersion:"gdbVersion"in o?o.gdbVersion:void 0,geometry:e,height:y,layerOption:"popup",mapExtent:d,returnGeometry:!0,spatialReference:s,sublayers:o.sublayers,timeExtent:n,tolerance:a,width:y})}async _fetchPopupFeaturesUsingQueries(e,t,r){const{layerView:{floors:i,timeExtent:o}}=this,n=t.map((async t=>{var n;let{sublayer:s,popupTemplate:l}=t;if(await s.load(r).catch((()=>{})),s.capabilities&&!s.capabilities.operations.supportsQuery)return[];const a=s.createQuery(),u=A({renderer:s.renderer,pointerType:null===r||void 0===r?void 0:r.pointerType}),p=this.createFetchPopupFeaturesQueryGeometry(e,u),c=new Set,[d]=await Promise.all([(0,K.TO)(s,l),null===(n=s.renderer)||void 0===n?void 0:n.collectRequiredFields(c,s.fieldsIndex)]);(0,y.Te)(r),(0,w._w)(c,s.fieldsIndex,d);const f=Array.from(c).sort();if(a.geometry=p,a.outFields=f,a.timeExtent=o,i){const e=i.clone(),t=(0,b.f)(e,s);null!=t&&(a.where=a.where?"(".concat(a.where,") AND (").concat(t,")"):t)}const h=this._getTargetResolution(p.width/u),m=await function(e){var t;return null!==(t=e.expressionInfos)&&void 0!==t&&t.length||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type))?(0,$.lw)():Promise.resolve()}(l);(0,y.Te)(r);const g="point"===s.geometryType||m&&m.arcadeUtils.hasGeometryOperations(l);g||(a.maxAllowableOffset=h);let{features:v}=await s.queryFeatures(a,r);const x=g?0:h;v=await async function(e,t,r){const i=e.renderer;return i&&"defaultSymbol"in i&&!i.defaultSymbol&&(t=i.valueExpression?await Promise.all(t.map((e=>i.getSymbolAsync(e,r).then((t=>t?e:null))))).then((e=>e.filter((e=>null!=e)))):t.filter((e=>null!=i.getSymbol(e)))),t}(s,v,r);for(const e of v)this._featuresResolutions.set(e,x);return v}));return(await Promise.allSettled(n)).reduce(((e,t)=>"fulfilled"===t.status?[...e,...t.value]:e),[]).filter(s.Ru)}};(0,i._)([(0,h.MZ)({constructOnly:!0})],ee.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),(0,i._)([(0,h.MZ)({constructOnly:!0})],ee.prototype,"layerView",void 0),(0,i._)([(0,h.MZ)({constructOnly:!0})],ee.prototype,"highlightGraphics",void 0),(0,i._)([(0,h.MZ)({constructOnly:!0})],ee.prototype,"highlightGraphicUpdated",void 0),(0,i._)([(0,h.MZ)({constructOnly:!0})],ee.prototype,"updatingHandles",void 0),ee=(0,i._)([(0,m.$)("esri.views.layers.support.MapService")],ee)},55754:(e,t,r)=>{r.d(t,{V:()=>n});r(35238);var i=r(31633),o=r(76797);function n(e,t,r){var n;let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new o.A,l=0;if("2d"===r.type)l=t*(null!==(n=r.resolution)&&void 0!==n?n:0);else if("3d"===r.type){const o=r.overlayPixelSizeInMapUnits(e),n=r.basemapSpatialReference;l=null==n||n.equals(r.spatialReference)?t*o:(0,i.GA)(n)/(0,i.GA)(r.spatialReference)}const a=e.x-l,u=e.y-l,p=e.x+l,c=e.y+l,{spatialReference:y}=r;return s.xmin=Math.min(a,p),s.ymin=Math.min(u,c),s.xmax=Math.max(a,p),s.ymax=Math.max(u,c),s.spatialReference=y,s}new o.A}}]);
//# sourceMappingURL=1819.47b218ad.chunk.js.map