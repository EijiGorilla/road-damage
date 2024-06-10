"use strict";(self.webpackChunkroad_damage=self.webpackChunkroad_damage||[]).push([[1845,4552],{1845:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ve});var i,l=r(35143),o=r(3825),s=r(18690),n=r(19276),a=r(50076),u=r(53084),p=r(77717),c=r(48611),d=r(50346),m=r(68134),h=r(90534),y=r(46053),f=(r(81806),r(76460),r(28379)),v=r(85842),g=r(17707),w=r(76797),M=r(25515),x=r(24552),S=r(65624),T=r(11270),A=r(94729),I=r(21617),_=r(5682),b=r(16852),L=r(88235),P=r(44067),E=r(90565),C=r(42553);r(47249);let R=i=class extends C.oY{constructor(e){super(e),this.fullExtent=null,this.id=null,this.tileInfo=null}clone(){const e=new i;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e}};(0,l._)([(0,y.MZ)({type:w.A,json:{read:{source:"fullExtent"}}})],R.prototype,"fullExtent",void 0),(0,l._)([(0,y.MZ)({type:String,json:{read:{source:"id"}}})],R.prototype,"id",void 0),(0,l._)([(0,y.MZ)({type:L.A,json:{read:{source:"tileInfo"}}})],R.prototype,"tileInfo",void 0),R=i=(0,l._)([(0,v.$)("esri.layer.support.TileMatrixSet")],R);const Z=R;var O;let F=O=class extends C.oY{constructor(e){super(e),this.id=null,this.title=null,this.description=null,this.legendUrl=null}clone(){const e=new O;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}};(0,l._)([(0,y.MZ)({json:{read:{source:"id"}}})],F.prototype,"id",void 0),(0,l._)([(0,y.MZ)({json:{read:{source:"title"}}})],F.prototype,"title",void 0),(0,l._)([(0,y.MZ)({json:{read:{source:"abstract"}}})],F.prototype,"description",void 0),(0,l._)([(0,y.MZ)({json:{read:{source:"legendUrl"}}})],F.prototype,"legendUrl",void 0),(0,l._)([(0,y.MZ)({json:{read:{source:"isDefault"}}})],F.prototype,"isDefault",void 0),(0,l._)([(0,y.MZ)({json:{read:{source:"keywords"}}})],F.prototype,"keywords",void 0),F=O=(0,l._)([(0,v.$)("esri.layer.support.WMTSStyle")],F);const j=F;var U;let V=U=class extends C.oY{constructor(e){super(e),this.description=null,this.fullExtent=null,this.fullExtents=null,this.id=null,this.imageFormats=null,this.layer=null,this.parent=null,this.styles=null,this.title=null,this.tileMatrixSetId=null,this.tileMatrixSets=null}readFullExtent(e,t){return(e=t.fullExtent)?w.A.fromJSON(e):null}readFullExtents(e,t){var r,i,l;return null!==(r=t.fullExtents)&&void 0!==r&&r.length?t.fullExtents.map((e=>w.A.fromJSON(e))):null!==(i=null===(l=t.tileMatrixSets)||void 0===l?void 0:l.map((e=>w.A.fromJSON(e.fullExtent))).filter((e=>e)))&&void 0!==i?i:[]}get imageFormat(){let e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e}set imageFormat(e){const t=this.imageFormats;e&&(e.includes("image/")||t&&!t.includes(e))&&(e.includes("image/")||(e="image/"+e),t&&!t.includes(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}get styleId(){var e,t;let r=this._get("styleId");return r||(r=null!==(e=null===(t=this.styles)||void 0===t||null===(t=t.at(0))||void 0===t?void 0:t.id)&&void 0!==e?e:""),r}set styleId(e){this._set("styleId",e)}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find((e=>e.id===this.tileMatrixSetId)):null}clone(){var e,t,r;const i=new U;return this.hasOwnProperty("description")&&(i.description=this.description),this.hasOwnProperty("imageFormats")&&(i.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(i.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(i.fullExtent=null===(e=this.fullExtent)||void 0===e?void 0:e.clone()),this.hasOwnProperty("id")&&(i.id=this.id),this.hasOwnProperty("layer")&&(i.layer=this.layer),this.hasOwnProperty("styleId")&&(i.styleId=this.styleId),this.hasOwnProperty("styles")&&(i.styles=null===(t=this.styles)||void 0===t?void 0:t.clone()),this.hasOwnProperty("tileMatrixSetId")&&(i.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(i.tileMatrixSets=null===(r=this.tileMatrixSets)||void 0===r?void 0:r.clone()),this.hasOwnProperty("title")&&(i.title=this.title),i}};(0,l._)([(0,y.MZ)()],V.prototype,"description",void 0),(0,l._)([(0,y.MZ)()],V.prototype,"fullExtent",void 0),(0,l._)([(0,f.w)("fullExtent",["fullExtent"])],V.prototype,"readFullExtent",null),(0,l._)([(0,y.MZ)({readOnly:!0})],V.prototype,"fullExtents",void 0),(0,l._)([(0,f.w)("fullExtents",["fullExtents","tileMatrixSets"])],V.prototype,"readFullExtents",null),(0,l._)([(0,y.MZ)()],V.prototype,"id",void 0),(0,l._)([(0,y.MZ)()],V.prototype,"imageFormat",null),(0,l._)([(0,y.MZ)({json:{read:{source:"formats"}}})],V.prototype,"imageFormats",void 0),(0,l._)([(0,y.MZ)()],V.prototype,"layer",void 0),(0,l._)([(0,y.MZ)()],V.prototype,"parent",void 0),(0,l._)([(0,y.MZ)()],V.prototype,"styleId",null),(0,l._)([(0,y.MZ)({type:n.A.ofType(j),json:{read:{source:"styles"}}})],V.prototype,"styles",void 0),(0,l._)([(0,y.MZ)({json:{write:{ignoreOrigin:!0}}})],V.prototype,"title",void 0),(0,l._)([(0,y.MZ)()],V.prototype,"tileMatrixSetId",void 0),(0,l._)([(0,y.MZ)({readOnly:!0})],V.prototype,"tileMatrixSet",null),(0,l._)([(0,y.MZ)({type:n.A.ofType(Z),json:{read:{source:"tileMatrixSets"}}})],V.prototype,"tileMatrixSets",void 0),V=U=(0,l._)([(0,v.$)("esri.layers.support.WMTSSublayer")],V);const N=V;var W=r(34111),k=r(13904),D=r(85996),B=r(65660),K=r(83497),q=r(22848);const H=90.71428571428571;function J(e){const t=e.replaceAll(/ows:/gi,"");if(!z("Contents",(new DOMParser).parseFromString(t,"text/xml").documentElement))throw new a.A("wmtslayer:wmts-capabilities-xml-is-not-valid","the wmts get capabilities response is not compliant",{text:e})}function $(e){return e.nodeType===Node.ELEMENT_NODE}function z(e,t){for(let r=0;r<t.childNodes.length;r++){const i=t.childNodes[r];if($(i)&&i.nodeName===e)return i}return null}function G(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const l=t.childNodes[i];$(l)&&l.nodeName===e&&r.push(l)}return r}function Y(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const l=t.childNodes[i];$(l)&&l.nodeName===e&&r.push(l)}return r.map((e=>e.textContent)).filter(s.Ru)}function Q(e,t){return e.split(">").forEach((e=>{t&&(t=z(e,t))})),t&&t.textContent}function X(e,t,r,i){let l;return Array.prototype.slice.call(i.childNodes).some((i=>{if(i.nodeName.includes(e)){const e=z(t,i),o=null===e||void 0===e?void 0:e.textContent;if(o===r||r.split(":")&&r.split(":")[1]===o)return l=i,!0}return!1})),l}function ee(e,t,r,i,l){const o=Q("Abstract",t),s=Y("Format",t);return{id:e,fullExtent:ie(t),fullExtents:le(t),description:o,formats:s,styles:oe(t,i),title:Q("Title",t),tileMatrixSets:se(l,t,r)}}function te(e,t){var r;const i=[],l=null===(r=e.layerMap)||void 0===r?void 0:r.get(t);if(!l)return null;const o=G("ResourceURL",l),s=G("Dimension",l);let n,a,u,p;return s.length&&(n=Q("Identifier",s[0]),a=Y("Default",s[0])||Y("Value",s[0])),s.length>1&&(u=Q("Identifier",s[1]),p=Y("Default",s[1])||Y("Value",s[1])),e.dimensionMap.set(t,{dimensions:a,dimensions2:p}),o.forEach((e=>{let t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(n&&a.length)if(t.includes("{"+n+"}"))t=t.replace("{"+n+"}","{dimensionValue}");else{const e=t.toLowerCase().indexOf("{"+n.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue}"+t.substring(e+n.length+2))}if(u&&p.length)if(t.includes("{"+u+"}"))t=t.replace("{"+u+"}","{dimensionValue2}");else{const e=t.toLowerCase().indexOf("{"+u.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue2}"+t.substring(e+u.length+2))}i.push({template:t,format:e.getAttribute("format"),resourceType:"tile"})}})),i}function re(e,t,r,i,l,o,s,n){var a,u;const p=function(e,t,r){var i;const l=te(e,t),o=null===l||void 0===l?void 0:l.filter((e=>e.format===r));return null!==(i=null!==o&&void 0!==o&&o.length?o:l)&&void 0!==i?i:[]}(e,t,i);if(!((null===p||void 0===p?void 0:p.length)>0))return"";const{dimensionMap:c}=e,d=null===(a=c.get(t).dimensions)||void 0===a?void 0:a[0],m=null===(u=c.get(t).dimensions2)||void 0===u?void 0:u[0];return p[s%p.length].template.replaceAll(/\{Style\}/gi,null!==l&&void 0!==l?l:"").replaceAll(/\{TileMatrixSet\}/gi,null!==r&&void 0!==r?r:"").replaceAll(/\{TileMatrix\}/gi,o).replaceAll(/\{TileRow\}/gi,""+s).replaceAll(/\{TileCol\}/gi,""+n).replaceAll(/\{dimensionValue\}/gi,d).replaceAll(/\{dimensionValue2\}/gi,m)}function ie(e){const t=z("WGS84BoundingBox",e),r=t?Q("LowerCorner",t).split(" "):["-180","-90"],i=t?Q("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function le(e){const t=[];return(0,K.p)(e,{BoundingBox:e=>{if(!e.getAttribute("crs"))return;const r=e.getAttribute("crs").toLowerCase(),i=ne(r),l=r.includes("epsg")&&(0,B.m)(i.wkid);let o,s,n,a;(0,K.p)(e,{LowerCorner:e=>{[o,s]=e.textContent.split(" ").map((e=>Number.parseFloat(e))),l&&([o,s]=[s,o])},UpperCorner:e=>{[n,a]=e.textContent.split(" ").map((e=>Number.parseFloat(e))),l&&([n,a]=[a,n])}}),t.push({xmin:o,ymin:s,xmax:n,ymax:a,spatialReference:i})}}),t}function oe(e,t){return G("Style",e).map((e=>{const r=z("LegendURL",e),i=z("Keywords",e),l=i?Y("Keyword",i):[];let o=r&&r.getAttribute("xlink:href");return t&&(o=o&&o.replace(/^http:/i,"https:")),{abstract:Q("Abstract",e),id:Q("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:l,legendUrl:o,title:Q("Title",e)}}))}function se(e,t,r){return G("TileMatrixSetLink",t).map((t=>function(e,t,r){const i=z("TileMatrixSet",t).textContent,l=Y("TileMatrix",t),o=r.find((e=>{const t=z("Identifier",e),r=null===t||void 0===t?void 0:t.textContent;return!!(r===i||i.split(":")&&i.split(":")[1]===r)})),s=z("TileMatrixSetLimits",t),n=s&&G("TileMatrixLimits",s),a=new Map;if(null!==n&&void 0!==n&&n.length)for(const v of n){const e=z("TileMatrix",v).textContent,t=+z("MinTileRow",v).textContent,r=+z("MaxTileRow",v).textContent,i=+z("MinTileCol",v).textContent,l=+z("MaxTileCol",v).textContent;a.set(e,{minCol:i,maxCol:l,minRow:t,maxRow:r})}const u=Q("SupportedCRS",o).toLowerCase(),p=function(e,t){return ae(z("TileMatrix",e),t)}(o,u),c=p.spatialReference,d=z("TileMatrix",o),m=[parseInt(Q("TileWidth",d),10),parseInt(Q("TileHeight",d),10)],h=[];l.length?l.forEach(((e,t)=>{const r=X("TileMatrix","Identifier",e,o);h.push(de(r,u,t,i,a))})):G("TileMatrix",o).forEach(((e,t)=>{h.push(de(e,u,t,i,a))}));const y=function(e,t,r,i,l){const o=z("BoundingBox",t);let s,n,a,u,p,c;if(o&&(s=Q("LowerCorner",o).split(" "),n=Q("UpperCorner",o).split(" ")),s&&s.length>1&&n&&n.length>1)a=parseFloat(s[0]),p=parseFloat(s[1]),u=parseFloat(n[0]),c=parseFloat(n[1]);else{const e=z("TileMatrix",t),o=parseInt(Q("MatrixWidth",e),10),s=parseInt(Q("MatrixHeight",e),10);a=r.x,c=r.y,u=a+o*i[0]*l.resolution,p=c-s*i[1]*l.resolution}return function(e,t,r){return"1.0.0"===e&&(0,B.m)(t.wkid)&&!(r.spatialReference.isGeographic&&r.x<-90&&r.y>=-90)}(e,r.spatialReference,r)?new w.A(p,a,c,u,r.spatialReference):new w.A(a,p,u,c,r.spatialReference)}(e,o,p,m,h[0]).toJSON(),f=new L.A({dpi:96,spatialReference:c,size:m,origin:p,lods:h}).toJSON();return{id:i,fullExtent:y,tileInfo:f}}(e,t,r)))}function ne(e){e=e.toLowerCase();let t=parseInt(e.split(":").pop(),10);900913!==t&&3857!==t||(t=102100);const r=function(e){return e.includes("crs84")||e.includes("crs:84")?ue.CRS84:e.includes("crs83")||e.includes("crs:83")?ue.CRS83:e.includes("crs27")||e.includes("crs:27")?ue.CRS27:null}(e);return null!=r&&(t=r),{wkid:t}}function ae(e,t){const r=ne(t),[i,l]=Q("TopLeftCorner",e).split(" ").map((e=>parseFloat(e))),o=t.includes("epsg")&&(0,B.m)(r.wkid);return new k.A(o?{x:l,y:i,spatialReference:r}:{x:i,y:l,spatialReference:r})}var ue,pe,ce;function de(e,t,r,i,l){var o;const s=ne(t),n=Q("Identifier",e);let a=parseFloat(Q("ScaleDenominator",e));const u=me(s.wkid,a,i);a*=96/H;const p=+Q("MatrixWidth",e),c=+Q("MatrixHeight",e),{maxCol:d=p-1,maxRow:m=c-1,minCol:h=0,minRow:y=0}=null!==(o=l.get(n))&&void 0!==o?o:{},{x:f,y:v}=ae(e,t);return new q.A({cols:[h,d],level:r,levelValue:n,origin:[f,v],scale:a,resolution:u,rows:[y,m]})}function me(e,t,r){let i;return i=D.A.hasOwnProperty(""+e)?D.A.values[D.A[e]]:"default028mm"===r?6370997*Math.PI/180:(0,W.y7)(e).metersPerDegree,7*t/25e3/i}(pe=ue||(ue={}))[pe.CRS84=4326]="CRS84",pe[pe.CRS83=4269]="CRS83",pe[pe.CRS27=4267]="CRS27";const he={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},ye=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let fe=ce=class extends((0,S.d)((0,I.J)((0,_.j)((0,T.q)((0,A.A)((0,p.P)(M.A))))))){constructor(){super(...arguments),this.activeLayer=null,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.addHandles([(0,m.wB)((()=>this.activeLayer),((e,t)=>{var r;t&&!(null!==(r=this.sublayers)&&void 0!==r&&r.includes(t))&&(t.layer=null,t.parent=null),e&&(e.layer=this,e.parent=this)}),m.OH),(0,m.on)((()=>this.sublayers),"after-add",(e=>{let{item:t}=e;t.layer=this,t.parent=this}),m.OH),(0,m.on)((()=>this.sublayers),"after-remove",(e=>{let{item:t}=e;t.layer=null,t.parent=null}),m.OH),(0,m.wB)((()=>this.sublayers),((e,t)=>{if(t)for(const r of t)r.layer=null,r.parent=null;if(e)for(const r of e)r.layer=this,r.parent=this}),m.OH)])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(d.QP).then((()=>this._fetchService(e))).catch((e=>{throw(0,d.QP)(e),new a.A("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),Promise.resolve(this)}readActiveLayerFromService(e,t,r){this.activeLayer||(this.activeLayer=new N);let i=t.layers.find((e=>e.id===this.activeLayer.id));return i||(i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:i}=t,l=r?this._getLowerCasedUrlParams(r):null,o=null===i||void 0===i?void 0:i.layerIdentifier;let s=null;const n=null===i||void 0===i?void 0:i.tileMatrixSet;n&&(Array.isArray(n)?n.length&&(s=n[0]):s=n);const a=null===l||void 0===l?void 0:l.format,u=null===l||void 0===l?void 0:l.style;return new N({id:o,imageFormat:a,styleId:u,tileMatrixSetId:s})}writeActiveLayer(e,t,r,i){const l=this.activeLayer;t.templateUrl=this.getUrlTemplate(l.id,l.tileMatrixSetId,l.imageFormat,l.styleId);const o=(0,c.wc)("tileMatrixSet.tileInfo",l);t.tileInfo=o?o.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:l.id,tileMatrixSet:l.tileMatrixSetId}}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){return this.activeLayer.fullExtents}readServiceMode(e,t){return t.templateUrl.includes("?")?"KVP":"RESTful"}readSublayersFromService(e,t,r){return function(e,t){return e.map((e=>{const r=new N;return r.read(e,t),r}))}(t.layers,r)}get supportedSpatialReferences(){var e,t;return null!==(e=null===(t=this.activeLayer.tileMatrixSets)||void 0===t?void 0:t.map((e=>{var t;return null===(t=e.tileInfo)||void 0===t?void 0:t.spatialReference})).toArray().filter(s.Ru))&&void 0!==e?e:[]}get tilemapCache(){var e;const t=null===(e=this.activeLayer)||void 0===e||null===(e=e.tileMatrixSet)||void 0===e?void 0:e.tileInfo;return t?new P.A(t):void 0}get title(){var e,t;return null!==(e=null===(t=this.activeLayer)||void 0===t?void 0:t.title)&&void 0!==e?e:"Layer"}set title(e){this._overrideIfSome("title",e)}get url(){return this._get("url")}set url(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId),i=null===r||void 0===r?void 0:r.tileInfo,l=e.fullExtent,o=new E.x({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(o.customLayerParameters=this.customLayerParameters),this.customParameters&&(o.customParameters=this.customParameters),new x.default({fullExtent:l,urlTemplate:t,tileInfo:i,wmtsInfo:o})}async fetchTile(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:l}=i,s=this.getTileUrl(e,t,r),{data:n}=await(0,o.A)(s,{responseType:"image",signal:l});return n}async fetchImageBitmapTile(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:l}=i;if(this.fetchTile!==ce.prototype.fetchTile){const o=await this.fetchTile(e,t,r,i);return(0,b.C)(o,e,t,r,l)}const s=this.getTileUrl(e,t,r),{data:n}=await(0,o.A)(s,{responseType:"blob",signal:l});return(0,b.C)(n,e,t,r,l)}findSublayerById(e){var t;return null===(t=this.sublayers)||void 0===t?void 0:t.find((t=>t.id===e))}getTileUrl(e,t,r){var i;const l=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId),o=null===l||void 0===l||null===(i=l.tileInfo)||void 0===i?void 0:i.lods[e],s=o?o.levelValue||"".concat(o.level):"".concat(e);let n=this.resourceInfo?"":re({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,s,t,r);return n||(n=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replaceAll(/\{level\}/gi,s).replaceAll(/\{row\}/gi,"".concat(t)).replaceAll(/\{col\}/gi,"".concat(r))),n=this._appendCustomLayerParameters(n),n}getUrlTemplate(e,t,r,i){if(!this.resourceInfo){const r=function(e,t,r,i){const{dimensionMap:l}=e,o=te(e,t);let s="";if(o&&o.length>0){var n,a;const e=null===(n=l.get(t).dimensions)||void 0===n?void 0:n[0],u=null===(a=l.get(t).dimensions2)||void 0===a?void 0:a[0];s=o[0].template,s.endsWith(".xxx")&&(s=s.slice(0,-4)),s=s.replaceAll(/\{Style\}/gi,i),s=s.replaceAll(/\{TileMatrixSet\}/gi,r),s=s.replaceAll(/\{TileMatrix\}/gi,"{level}"),s=s.replaceAll(/\{TileRow\}/gi,"{row}"),s=s.replaceAll(/\{TileCol\}/gi,"{col}"),s=s.replaceAll(/\{dimensionValue\}/gi,e),s=s.replaceAll(/\{dimensionValue2\}/gi,u)}return s}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(r)return r}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){let l="";return he[r.toLowerCase()]&&(l=he[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+l}return""}async _fetchService(e){let t;if(this.resourceInfo)"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.includes("?")?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e),J(t.data)}catch{const i="KVP"===this.serviceMode?"RESTful":"KVP";try{t=await this._getCapabilities(i,e),J(t.data),this.serviceMode=i}catch(r){throw new a.A("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:r})}}this.resourceInfo?t.data=function(e){return e.layers.forEach((e=>{var t;null===(t=e.tileMatrixSets)||void 0===t||t.forEach((e=>{var t;const r=e.tileInfo;r&&96!==r.dpi&&(null!==(t=r.lods)&&void 0!==t&&t.forEach((t=>{var i;t.scale=96*t.scale/r.dpi,t.resolution=me(null===(i=r.spatialReference)||void 0===i?void 0:i.wkid,t.scale*H/96,e.id)})),r.dpi=96)}))})),e}(t.data):t.data=function(e,t){var r;e=e.replaceAll(/ows:/gi,"");const i=(new DOMParser).parseFromString(e,"text/xml").documentElement,l=new Map,o=new Map,s=z("Contents",i);if(!s)throw new a.A("wmtslayer:wmts-capabilities-xml-is-not-valid");const n=z("OperationsMetadata",i),u=null===n||void 0===n?void 0:n.querySelector("[name='GetTile']"),p=null===u||void 0===u?void 0:u.getElementsByTagName("Get"),c=p&&Array.prototype.slice.call(p),d=null===(r=t.url)||void 0===r?void 0:r.indexOf("https"),m=void 0!==d&&d>-1;let h,y,f=t.serviceMode,v=null===t||void 0===t?void 0:t.url;if(null!==c&&void 0!==c&&c.length&&c.some((e=>{const t=z("Constraint",e);return!t||X("AllowedValues","Value",f,t)?(v=e.attributes[0].nodeValue,!0):(!t||X("AllowedValues","Value","RESTful",t)||X("AllowedValues","Value","REST",t)?y=e.attributes[0].nodeValue:t&&!X("AllowedValues","Value","KVP",t)||(h=e.attributes[0].nodeValue),!1)})),!v)if(y)v=y,f="RESTful";else if(h)v=h,f="KVP";else{const e=z("ServiceMetadataURL",i);v=null===e||void 0===e?void 0:e.getAttribute("xlink:href")}const g=v.indexOf("1.0.0/");-1===g&&"RESTful"===f?v+="/":g>-1&&(v=v.substring(0,g)),"KVP"===f&&(v+=g>-1?"":"?"),m&&(v=v.replace(/^http:/i,"https:"));const w=Q("ServiceIdentification>ServiceTypeVersion",i),M=Q("ServiceIdentification>AccessConstraints",i),x=M&&/^none$/i.test(M)?null:M,S=G("Layer",s),T=G("TileMatrixSet",s),A=S.map((e=>{const t=Q("Identifier",e);return l.set(t,e),ee(t,e,T,m,w)}));return{copyright:x,dimensionMap:o,layerMap:l,layers:A,serviceMode:f,tileUrl:v}}(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"})}async _getCapabilities(e,t){const r=this._getCapabilitiesUrl(e);return await(0,o.A)(r,{...t,responseType:"text"})}_getTileMatrixSetById(e){var t;const r=this.findSublayerById(this.activeLayer.id),i=null===r||void 0===r||null===(t=r.tileMatrixSets)||void 0===t?void 0:t.find((t=>t.id===e));return i}_appendCustomParameters(e){return this._appendParameters(e,this.customParameters)}_appendCustomLayerParameters(e){return this._appendParameters(e,{...(0,u.o8)(this.customParameters),...this.customLayerParameters})}_appendParameters(e,t){const r=(0,h.An)(e),i={...r.query,...t},l=(0,h.x0)(i);return""===l?r.path:"".concat(r.path,"?").concat(l)}_getCapabilitiesUrl(e){this.url=(0,h.An)(this.url).path;let t=this.url;switch(e){case"KVP":t+="?request=GetCapabilities&service=WMTS&version=".concat(this.version);break;case"RESTful":{const e="/".concat(this.version,"/WMTSCapabilities.xml"),r=new RegExp(e,"i");t=t.replace(r,""),t+=e;break}}return this._appendCustomParameters(t)}_getLowerCasedUrlParams(e){if(!e)return null;const t=(0,h.An)(e).query;if(!t)return null;const r={};return Object.keys(t).forEach((e=>{r[e.toLowerCase()]=t[e]})),r}_mergeParams(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const t=Object.keys(r);t.length&&(e=e?(0,u.o8)(e):{},t.forEach((t=>{e.hasOwnProperty(t)||ye.has(t)||(e[t]=r[t])})))}return e}};(0,l._)([(0,y.MZ)()],fe.prototype,"dimensionMap",void 0),(0,l._)([(0,y.MZ)()],fe.prototype,"layerMap",void 0),(0,l._)([(0,y.MZ)({type:N,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],fe.prototype,"activeLayer",void 0),(0,l._)([(0,f.w)("service","activeLayer",["layers"])],fe.prototype,"readActiveLayerFromService",null),(0,l._)([(0,f.w)(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],fe.prototype,"readActiveLayerFromItemOrWebDoc",null),(0,l._)([(0,g.K)(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:L.A},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],fe.prototype,"writeActiveLayer",null),(0,l._)([(0,y.MZ)({type:String,value:"",json:{write:!0}})],fe.prototype,"copyright",void 0),(0,l._)([(0,y.MZ)({type:["show","hide"]})],fe.prototype,"listMode",void 0),(0,l._)([(0,y.MZ)({json:{read:!0,write:!0}})],fe.prototype,"blendMode",void 0),(0,l._)([(0,y.MZ)({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],fe.prototype,"customParameters",void 0),(0,l._)([(0,f.w)(["portal-item","web-document"],"customParameters")],fe.prototype,"readCustomParameters",null),(0,l._)([(0,y.MZ)({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],fe.prototype,"customLayerParameters",void 0),(0,l._)([(0,y.MZ)({type:w.A,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],fe.prototype,"fullExtent",void 0),(0,l._)([(0,y.MZ)({readOnly:!0})],fe.prototype,"fullExtents",null),(0,l._)([(0,y.MZ)({type:["WebTiledLayer"]})],fe.prototype,"operationalLayerType",void 0),(0,l._)([(0,y.MZ)()],fe.prototype,"resourceInfo",void 0),(0,l._)([(0,y.MZ)()],fe.prototype,"serviceMode",void 0),(0,l._)([(0,f.w)(["portal-item","web-document"],"serviceMode",["templateUrl"])],fe.prototype,"readServiceMode",null),(0,l._)([(0,y.MZ)({type:n.A.ofType(N)})],fe.prototype,"sublayers",void 0),(0,l._)([(0,f.w)("service","sublayers",["layers"])],fe.prototype,"readSublayersFromService",null),(0,l._)([(0,y.MZ)({readOnly:!0})],fe.prototype,"supportedSpatialReferences",null),(0,l._)([(0,y.MZ)({readOnly:!0})],fe.prototype,"tilemapCache",null),(0,l._)([(0,y.MZ)({json:{read:{source:"title"}}})],fe.prototype,"title",null),(0,l._)([(0,y.MZ)({json:{read:!1},readOnly:!0,value:"wmts"})],fe.prototype,"type",void 0),(0,l._)([(0,y.MZ)({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],fe.prototype,"url",null),(0,l._)([(0,y.MZ)()],fe.prototype,"version",void 0),fe=ce=(0,l._)([(0,v.$)("esri.layers.WMTSLayer")],fe);const ve=fe},24552:(e,t,r)=>{r.r(t),r.d(t,{default:()=>L});var i,l=r(35143),o=(r(35238),r(3825)),s=r(50076),n=r(77717),a=r(88685),u=r(90534),p=r(46053),c=(r(81806),r(76460),r(47249),r(28379)),d=r(85842),m=r(17707),h=r(25515),y=r(65624),f=r(11270),v=r(94729),g=r(21617),w=r(5682),M=r(16852),x=r(22848),S=r(88235),T=r(90565),A=r(76797),I=r(13312),_=r(13904);let b=i=class extends((0,y.d)((0,g.J)((0,w.j)((0,f.q)((0,v.A)((0,n.P)(h.A))))))){constructor(){super(...arguments),this.copyright="",this.fullExtent=new A.A(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,I.A.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=I.A.WebMercator,this.subDomains=null,this.tileInfo=new S.A({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new _.A({x:-20037508.342787,y:20037508.342787,spatialReference:I.A.WebMercator}),spatialReference:I.A.WebMercator,lods:[new x.A({level:0,scale:591657527.591555,resolution:156543.033928}),new x.A({level:1,scale:295828763.795777,resolution:78271.5169639999}),new x.A({level:2,scale:147914381.897889,resolution:39135.7584820001}),new x.A({level:3,scale:73957190.948944,resolution:19567.8792409999}),new x.A({level:4,scale:36978595.474472,resolution:9783.93962049996}),new x.A({level:5,scale:18489297.737236,resolution:4891.96981024998}),new x.A({level:6,scale:9244648.868618,resolution:2445.98490512499}),new x.A({level:7,scale:4622324.434309,resolution:1222.99245256249}),new x.A({level:8,scale:2311162.217155,resolution:611.49622628138}),new x.A({level:9,scale:1155581.108577,resolution:305.748113140558}),new x.A({level:10,scale:577790.554289,resolution:152.874056570411}),new x.A({level:11,scale:288895.277144,resolution:76.4370282850732}),new x.A({level:12,scale:144447.638572,resolution:38.2185141425366}),new x.A({level:13,scale:72223.819286,resolution:19.1092570712683}),new x.A({level:14,scale:36111.909643,resolution:9.55462853563415}),new x.A({level:15,scale:18055.954822,resolution:4.77731426794937}),new x.A({level:16,scale:9027.977411,resolution:2.38865713397468}),new x.A({level:17,scale:4513.988705,resolution:1.19432856685505}),new x.A({level:18,scale:2256.994353,resolution:.597164283559817}),new x.A({level:19,scale:1128.497176,resolution:.298582141647617}),new x.A({level:20,scale:564.248588,resolution:.14929107082380833}),new x.A({level:21,scale:282.124294,resolution:.07464553541190416}),new x.A({level:22,scale:141.062147,resolution:.03732276770595208}),new x.A({level:23,scale:70.5310735,resolution:.01866138385297604})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){var t;const r=new u.s0(this.urlTemplate);!(this.subDomains&&this.subDomains.length>0)&&(null===(t=r.authority)||void 0===t?void 0:t.includes("{subDomain}"))&&(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new s.A("web-tile-layer:load","WebTileLayer (title: '".concat(this.title,"', id: '").concat(this.id,"') ").concat(e))}));return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){var r;return e||I.A.fromJSON(null===(r=t.fullExtent)||void 0===r?void 0:r.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:r}=this,i=new u.s0(t),l=i.scheme?i.scheme+"://":"//",o=l+i.authority+"/",s=i.authority;if(null!==s&&void 0!==s&&s.includes("{subDomain}")){if(r&&r.length>0&&s.split(".").length>1)for(const n of r)e.push(l+s.replaceAll(/\{subDomain\}/gi,n)+"/")}else e.push(o);return e.map(u.Il)}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new u.s0(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){(0,u.BQ)(e)&&(e="https:"+e),e&&(e=e.replaceAll(/\{z\}/gi,"{level}").replaceAll(/\{x\}/gi,"{col}").replaceAll(/\{y\}/gi,"{row}"),e=(0,u.S8)(e)),t.templateUrl=e}fetchTile(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:l}=i,s=this.getTileUrl(e,t,r),n={responseType:"image",signal:l,query:{...this.refreshParameters}};return(0,o.A)(s,n).then((e=>e.data))}async fetchImageBitmapTile(e,t,r){let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:s}=l;if(this.fetchTile!==i.prototype.fetchTile){const i=await this.fetchTile(e,t,r,l);return(0,M.C)(i,e,t,r,s)}const n=this.getTileUrl(e,t,r),a={responseType:"blob",signal:s,query:{...this.refreshParameters}},{data:u}=await(0,o.A)(n,a);return(0,M.C)(u,e,t,r,s)}getTileUrl(e,t,r){const{levelValues:i,tileServers:l,urlPath:o}=this;if(!i||!l||!o)return"";const s=i[e];return l[t%l.length]+(0,a.HC)(o,{level:s,z:s,col:r,x:r,row:t,y:t})}};(0,l._)([(0,p.MZ)({type:String,value:"",json:{write:!0}})],b.prototype,"copyright",void 0),(0,l._)([(0,p.MZ)({type:A.A,json:{write:!0},nonNullable:!0})],b.prototype,"fullExtent",void 0),(0,l._)([(0,p.MZ)({readOnly:!0,json:{read:!1,write:!1}})],b.prototype,"legendEnabled",void 0),(0,l._)([(0,p.MZ)({type:["show","hide"]})],b.prototype,"listMode",void 0),(0,l._)([(0,p.MZ)({json:{read:!0,write:!0}})],b.prototype,"blendMode",void 0),(0,l._)([(0,p.MZ)()],b.prototype,"levelValues",null),(0,l._)([(0,p.MZ)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],b.prototype,"isReference",void 0),(0,l._)([(0,p.MZ)({type:["WebTiledLayer"],value:"WebTiledLayer"})],b.prototype,"operationalLayerType",void 0),(0,l._)([(0,p.MZ)({readOnly:!0,json:{read:!1,write:!1}})],b.prototype,"popupEnabled",void 0),(0,l._)([(0,p.MZ)({type:I.A})],b.prototype,"spatialReference",void 0),(0,l._)([(0,c.w)("spatialReference",["spatialReference","fullExtent.spatialReference"])],b.prototype,"readSpatialReference",null),(0,l._)([(0,p.MZ)({type:[String],json:{write:!0}})],b.prototype,"subDomains",void 0),(0,l._)([(0,p.MZ)({type:S.A,json:{write:!0}})],b.prototype,"tileInfo",void 0),(0,l._)([(0,p.MZ)({readOnly:!0})],b.prototype,"tileServers",null),(0,l._)([(0,p.MZ)({json:{read:!1}})],b.prototype,"type",void 0),(0,l._)([(0,p.MZ)()],b.prototype,"urlPath",null),(0,l._)([(0,p.MZ)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],b.prototype,"urlTemplate",void 0),(0,l._)([(0,c.w)("urlTemplate",["urlTemplate","templateUrl"])],b.prototype,"readUrlTemplate",null),(0,l._)([(0,m.K)("urlTemplate",{templateUrl:{type:String}})],b.prototype,"writeUrlTemplate",null),(0,l._)([(0,p.MZ)({type:T.x,json:{write:!0}})],b.prototype,"wmtsInfo",void 0),b=i=(0,l._)([(0,d.$)("esri.layers.WebTileLayer")],b);const L=b},65660:(e,t,r)=>{r.d(t,{m:()=>l});const i=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function l(e){return null!=e&&i.some((t=>{let[r,i]=t;return e>=r&&e<=i}))}},83497:(e,t,r)=>{function i(e,t){if(e&&t)for(const r of e.children)if(r.localName in t){const e=t[r.localName];if("function"==typeof e){const t=e(r);t&&i(r,t)}else i(r,e)}}function*l(e,t){for(const r of e.children)if(r.localName in t){const e=t[r.localName];"function"==typeof e?yield e(r):yield*l(r,e)}}r.d(t,{i:()=>l,p:()=>i})},90565:(e,t,r)=>{r.d(t,{x:()=>u});var i,l=r(35143),o=r(42553),s=r(53084),n=r(46053),a=(r(81806),r(76460),r(85842));let u=i=class extends o.oY{constructor(e){super(e)}clone(){return new i({customLayerParameters:(0,s.o8)(this.customLayerParameters),customParameters:(0,s.o8)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};(0,l._)([(0,n.MZ)({json:{type:Object,write:!0}})],u.prototype,"customLayerParameters",void 0),(0,l._)([(0,n.MZ)({json:{type:Object,write:!0}})],u.prototype,"customParameters",void 0),(0,l._)([(0,n.MZ)({type:String,json:{write:!0}})],u.prototype,"layerIdentifier",void 0),(0,l._)([(0,n.MZ)({type:String,json:{write:!0}})],u.prototype,"tileMatrixSet",void 0),(0,l._)([(0,n.MZ)({type:String,json:{write:!0}})],u.prototype,"url",void 0),u=i=(0,l._)([(0,a.$)("esri.layer.support.WMTSLayerInfo")],u)}}]);
//# sourceMappingURL=1845.b960f107.chunk.js.map