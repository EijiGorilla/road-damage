"use strict";(self.webpackChunkroad_damage=self.webpackChunkroad_damage||[]).push([[6108],{56287:(e,t,r)=>{r.d(t,{r:()=>l});var s=r(35143),a=r(91967),i=r(46053),o=(r(81806),r(76460),r(47249),r(85842));const n={visible:"visibleSublayers"};let l=class extends a.A{constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(n[e.propertyName])))],"layer"))}get layers(){return this.visibleSublayers.filter((e=>{let{name:t}=e;return t})).map((e=>{let{name:t}=e;return t})).join()}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:t}=this,r=null===e||void 0===e?void 0:e.sublayers,s=[],a=e=>{const{minScale:r,maxScale:i,sublayers:o,visible:n}=e;n&&(0===t||(0===r||t<=r)&&(0===i||t>=i))&&(o?o.forEach(a):s.push(e))};return null!==r&&void 0!==r&&r.forEach(a),s}toJSON(){const{layer:e,layers:t}=this,{imageFormat:r,imageTransparency:s,version:a}=e;return{format:r,request:"GetMap",service:"WMS",styles:"",transparent:s?"TRUE":"FALSE",version:a,layers:t}}};(0,s._)([(0,i.MZ)()],l.prototype,"layer",null),(0,s._)([(0,i.MZ)({readOnly:!0})],l.prototype,"layers",null),(0,s._)([(0,i.MZ)({type:Number})],l.prototype,"scale",void 0),(0,s._)([(0,i.MZ)({readOnly:!0})],l.prototype,"version",null),(0,s._)([(0,i.MZ)({readOnly:!0})],l.prototype,"visibleSublayers",null),l=(0,s._)([(0,o.$)("esri.layers.support.ExportWMSImageParameters")],l)},86108:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var s=r(35143),a=r(50076),i=(r(76460),r(81806),r(47249),r(85842)),o=r(76797),n=r(10183),l=r(30726),p=r(50346),h=r(46053),u=r(55053),y=r(56287);const c=e=>{let t=class extends e{initialize(){this.exportImageParameters=new y.r({layer:this.layer})}destroy(){this.exportImageParameters=(0,l.pR)(this.exportImageParameters)}get exportImageVersion(){var e;return null!==(e=this.exportImageParameters)&&void 0!==e&&e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeaturesAtLocation(e,t){const{layer:r}=this;if(!e)throw new a.A("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r});const{popupEnabled:s}=r;if(!s)throw new a.A("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:s});const i=this.createFetchPopupFeaturesQuery(e);if(!i)return[];const{extent:o,width:n,height:l,x:h,y:u}=i;if(!(o&&n&&l))throw new a.A("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:o,width:n,height:l});const y=await r.fetchFeatureInfo(o,n,l,h,u);return(0,p.Te)(t),y}};return(0,s._)([(0,h.MZ)()],t.prototype,"exportImageParameters",void 0),(0,s._)([(0,h.MZ)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,s._)([(0,h.MZ)()],t.prototype,"layer",void 0),(0,s._)([(0,h.MZ)(u.ui)],t.prototype,"timeExtent",void 0),t=(0,s._)([(0,i.$)("esri.layers.mixins.WMSLayerView")],t),t};let m=class extends(c(n.A)){constructor(){super(...arguments),this.type="wms-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new a.A("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view"))),this._updatingHandles.add((()=>{var e;return null===(e=this.exportImageParameters)||void 0===e?void 0:e.version}),(()=>{this._updatingHandles.addPromise(this.refreshDebounced())}))}createFetchPopupFeaturesQuery(e){const t=this.findExtentInfoAt(e),r=t.extent,s=new o.A(r[0],r[1],r[2],r[3],this._spatialReference),a=t.imageSize,i=a.width,n=a.height,l=s.width/i;return{extent:s,width:i,height:n,x:Math.round((e.x-s.xmin)/l),y:Math.round((s.ymax-e.y)/l)}}getFetchOptions(){return{timeExtent:this.timeExtent}}};m=(0,s._)([(0,i.$)("esri.views.3d.layers.WMSLayerView3D")],m);const d=m}}]);
//# sourceMappingURL=6108.ebf7766e.chunk.js.map