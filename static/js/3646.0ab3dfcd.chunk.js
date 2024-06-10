"use strict";(self.webpackChunkroad_damage=self.webpackChunkroad_damage||[]).push([[3646],{63646:(e,t,r)=>{r.d(t,{A:()=>W});var i=r(35143),s=r(50076),o=r(30726),l=r(68134),n=r(46053),a=(r(81806),r(76460)),u=(r(47249),r(85842)),d=r(99784),c=r(32535),p=r(98),h=r(65768);class y extends h.P{constructor(e,t,r,i,s,o){super(e.usedMemory,e.displayedFeatures,e.totalFeatures,e.maximumFeatures,e.nodes,e.core),this.storedFeatures=t,this.totalVertices=r,this.partial=i,this.mode=s,this.symbolComplexity=o}}var f=r(57867),m=r(83491),g=r(82772),v=r(91967),_=r(50346),F=r(41289),w=r(36643),b=r(39356),x=r(78393),M=r(12016),R=r(13312),q=r(44135);class O{constructor(e){this._controller=e,this._handle=new I((t=>e.schedule(t)))}destroy(){this._handle.destroy()}invoke(e,t){return e.buffer&&0!==e.buffer.byteLength?(e.options.sourceSpatialReference&&e.options.sourceSpatialReference instanceof R.A&&(e.options={...e.options,sourceSpatialReference:e.options.sourceSpatialReference.toJSON()}),this._handle.invoke(e,t).then((e=>{let t=0,r=0;const i=R.A.fromJSON(e.spatialReference);e.spatialReference=i;const s=async o=>{const l=e.fields;if(l)for(;t<l.length;)if(l[t]=q.A.fromJSON(l[t]),t++,o.madeProgress())return this._controller.reschedule((e=>s(e)));const n=e.features;for(;r<n.length;){const e=n[r];++r,e.uid=b.A.generateUID();const t=e.geometry;if(null!=t&&(t.spatialReference=i,E(t),o.madeProgress()))return this._controller.reschedule((e=>s(e)))}return e};return this._controller.schedule((e=>s(e)))}))):Promise.resolve(null)}}function E(e){switch(e.type){case"polyline":e.paths.reduce(((e,t)=>e+t.length),0)<x.y9&&(e.paths=e.hasZ||e.hasM?e.paths.map((e=>e.map((e=>[e[0],e[1],e[2]])))):e.paths.map((e=>e.map((e=>[e[0],e[1]])))));break;case"polygon":e.rings.reduce(((e,t)=>e+t.length),0)<x.y9&&(e.rings=e.hasZ||e.hasM?e.rings.map((e=>e.map((e=>[e[0],e[1],e[2]])))):e.rings.map((e=>e.map((e=>[e[0],e[1]])))))}}class I extends M.B{constructor(e){super("PBFDecoderWorker","_parseFeatureQuery",{_parseFeatureQuery:e=>[e.buffer]},e)}}let Z=class extends v.A{constructor(e){super(e)}get implicitFields(){var e;if(!(null===(e=this.layer.outFields)||void 0===e?void 0:e.includes("*")))return new Set;const t=new Set(this.layerView.requiredFields),r=new Set(this.layerView.availableFields);return(0,F.iv)(r,t)}get queryFeaturesDehydrated(){const{layer:e}=this,t=e.capabilities,r=t&&t.query,i=r&&r.supportsFormatPBF,s=e.parsedUrl;if(i){var o,l;null==this._decoder&&(this._decoder=new O(this.controller));const t={sourceSpatialReference:null!==(o=null===(l=e.spatialReference)||void 0===l?void 0:l.toJSON())&&void 0!==o?o:null,applyTransform:!0,maxStringAttributeFields:this.implicitFields,maxStringAttributeLength:S};return(e,r)=>(0,w.GB)(s,e,"pbf",this._createRequestOptions(r)).then((e=>((0,_.Te)(r),null!=this._decoder?this._decoder.invoke({buffer:e.data,options:t},r.signal):Promise.reject((0,_.NK)()))))}return(t,r)=>(0,w.eW)(s,t,e.spatialReference,this._createRequestOptions(r)).then((e=>(0,d.JS)(e.data,{maxStringAttributeFields:this.implicitFields,maxStringAttributeLength:S})))}queryFeatureCount(e,t){return this.layer.queryFeatureCount(e,t)}destroy(){this._decoder=(0,o.pR)(this._decoder)}_createRequestOptions(e){return{...e,query:{...this.layer.customParameters,token:this.layer.apiKey,...null===e||void 0===e?void 0:e.query}}}};(0,i._)([(0,n.MZ)({constructOnly:!0})],Z.prototype,"layer",void 0),(0,i._)([(0,n.MZ)({constructOnly:!0})],Z.prototype,"layerView",void 0),(0,i._)([(0,n.MZ)({constructOnly:!0})],Z.prototype,"controller",void 0),(0,i._)([(0,n.MZ)({readOnly:!0})],Z.prototype,"implicitFields",null),(0,i._)([(0,n.MZ)({readOnly:!0})],Z.prototype,"queryFeaturesDehydrated",null),Z=(0,i._)([(0,u.$)("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],Z);let A=class extends v.A{constructor(e){super(e)}queryFeaturesDehydrated(e,t){return this.layer.queryFeatures(e,t)}queryFeatureCount(e,t){return this.layer.queryFeatureCount(e,t)}};(0,i._)([(0,n.MZ)({constructOnly:!0})],A.prototype,"layer",void 0),(0,i._)([(0,n.MZ)({readOnly:!0})],A.prototype,"queryFeaturesDehydrated",null),A=(0,i._)([(0,u.$)("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceMeshQuery3D")],A);let C=class extends v.A{constructor(e){super(e)}queryFeaturesDehydrated(e,t){return this.layer.queryFeatures(e,t)}};(0,i._)([(0,n.MZ)({constructOnly:!0})],C.prototype,"layer",void 0),C=(0,i._)([(0,u.$)("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],C);let P=class extends v.A{constructor(e){super(e)}queryFeaturesDehydrated(e,t){return this.source.queryFeaturesJSON(e,t).then(d.JS,(r=>{if(r&&"query-features-json:unsupported"===r.name)return this.layer.queryFeatures(e,t);throw r}))}queryFeatureCount(e,t){return this.layer.queryFeatureCount(e,t)}};(0,i._)([(0,n.MZ)({constructOnly:!0})],P.prototype,"layer",void 0),(0,i._)([(0,n.MZ)({constructOnly:!0})],P.prototype,"source",void 0),P=(0,i._)([(0,u.$)("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileClientQuery3D")],P);const S=1024;class T{constructor(e){this._memoryCache=null,this._capabilities=null;const t=e.layerView.layer;this._layerView=e.layerView,this.objectIdField=t.objectIdField,this.globalIdField="globalIdField"in t?t.globalIdField:null,this._returnZ=e.returnZ,this._returnM=e.returnM;const r=this._layerView.view.resourceController;this.query=function(e,t){const{layer:r}=e;return"feature"===r.type&&"feature-layer"===r.source.type?null!=r.infoFor3D?new A({layer:r}):new Z({layer:r,layerView:e,controller:t}):"feature"===r.type&&"memory"===r.source.type||"csv"===r.type||"geojson"===r.type||"oriented-imagery"===r.type||"wfs"===r.type?new P({layer:r,source:r.source}):"ogc-feature"===r.type?new C({layer:r}):null}(this._layerView,r.normal),r&&this._memoryCacheEnabled&&(this._memoryCache=r.memoryController.newCache("fl-".concat(t.uid)))}get _memoryCacheEnabled(){switch(this._layerView.layer.source.type){case"feature-layer":case"ogc-feature":case"oriented-imagery":return!0;case"csv":case"geojson":case"memory":case"wfs":return!1}}destroy(){this._memoryCache=(0,o.pR)(this._memoryCache),this.query.destroy()}createQuery(){const e=this._layerView.layer.createQuery();return e.outFields=this._layerView.availableFields,e.returnZ=this._returnZ,e.returnM=this._returnM,e.outSpatialReference=this.tilingScheme.spatialReference,e}get memoryCache(){return this._memoryCache}get viewingMode(){return this._layerView.view.state.viewingMode}get tilingScheme(){return this._layerView.view.featureTiles.tilingScheme}get scheduler(){const e=this._layerView.view.resourceController;return e?e.scheduler:null}get geometryType(){return this._layerView.layer.geometryType}get fullExtent(){return this._layerView.layer.fullExtent}get tileMaxRecordCount(){return this._layerView.layer.capabilities.query.tileMaxRecordCount}get maxRecordCount(){return this._layerView.layer.capabilities.query.maxRecordCount}get capabilities(){return null!=this._capabilities||(this._capabilities=(0,g.G)(this._layerView.layer)),this._capabilities}logFetchError(e,t){var r;e.error("#fetchTile()",this._layerView.layer,null!==(r=null===t||void 0===t?void 0:t.message)&&void 0!==r?r:t)}}var V=r(57534),D=r(93938),N=r(44513),Q=r(55053),L=r(10252),j=r(8203),B=r(53430),H=r(46530),k=r(68295),G=r(98976),z=r(2257);const J=e=>{let t=class extends e{constructor(){super(...arguments),this._updatingRequiredFieldsPromise=null,this.dataUpdating=!1,this.filter=null,this.timeExtent=null,this.layer=null,this.requiredFields=[],this.view=null}initialize(){this.addHandles([(0,l.wB)((()=>{var e;const t=this.layer;return[t&&"elevationInfo"in t?null===(e=t.elevationInfo)||void 0===e?void 0:e.featureExpressionInfo:null,t&&"displayField"in t?t.displayField:null,t&&"timeInfo"in t&&t.timeInfo,t&&"renderer"in t&&t.renderer,t&&"labelingInfo"in t&&t.labelingInfo,t&&"floorInfo"in t&&t.floorInfo,this.filter,this.featureEffect,this.timeExtent]}),(()=>this._handleRequiredFieldsChange()),l.pc),(0,l.on)((()=>{var e;return null===(e=this.view)||void 0===e?void 0:e.floors}),"change",(()=>this._handleRequiredFieldsChange())),(0,l.on)((()=>{const e=this.layer;return e&&"sublayers"in e?e.sublayers:null}),"change",(()=>this._handleRequiredFieldsChange()))])}get availableFields(){if(!this.layer)return[];const{layer:e,layer:{fieldsIndex:t},requiredFields:r}=this;return"outFields"in e&&e.outFields?(0,B.DB)(t,[...(0,B.hL)(t,e.outFields),...r]):(0,B.DB)(t,r)}get featureEffect(){return this.layer&&"featureEffect"in this.layer?this.layer.featureEffect:null}set featureEffect(e){this._override("featureEffect",e)}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){a.A.getLogger(this).error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")}get maximumNumberOfFeaturesExceeded(){return!1}highlight(e){throw new Error("missing implementation")}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},t=null!=this.filter?this.filter.createQuery(e):new k.A(e);if("floorInfo"in this.layer&&this.layer.floorInfo){const e=(0,H.E)(this);null!=e&&(t.where=t.where?"(".concat(t.where,") AND (").concat(e,")"):e)}return null!=this.timeExtent&&(t.timeExtent=null!=t.timeExtent?t.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),t}createAggregateQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return new k.A(e)}queryFeatures(e,t){throw new Error("missing implementation")}queryObjectIds(e,t){throw new Error("missing implementation")}queryFeatureCount(e,t){throw new Error("missing implementation")}queryExtent(e,t){throw new Error("missing implementation")}async fetchPopupFeaturesFromGraphics(e,t){return this._validateFetchPopupFeatures(e,t),this._fetchPopupFeatures(e,t)}_loadArcadeModules(e){var t;return null!==(t=e.expressionInfos)&&void 0!==t&&t.length||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type))?(0,G.lw)():Promise.resolve()}_handleRequiredFieldsChange(){const e=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",e),e.then((()=>{this._updatingRequiredFieldsPromise===e&&this._set("_updatingRequiredFieldsPromise",null)}))}async _updateRequiredFields(){if(!this.layer||!this.view)return;const e="3d"===this.view.type,{layer:t,layer:{fieldsIndex:r,objectIdField:i}}=this,s="renderer"in t&&t.renderer,o="orderBy"in t&&t.orderBy,l="featureReduction"in t?t.featureReduction:null,n=new Set,u=await Promise.allSettled([s?s.collectRequiredFields(n,r):null,(0,B.Im)(n,t),e&&"elevationInfo"in t?(0,B.NO)(n,t):null,null!=this.filter?(0,B.o)(n,t,this.filter):null,e||null==this.featureEffect?null:(0,B.o)(n,t,this.featureEffect.filter),!e&&l?(0,B.RP)(n,t,l):null,!e&&o?(0,B.f)(n,t,o):null]);if("timeInfo"in t&&t.timeInfo&&this.timeExtent&&(0,B._w)(n,t.fieldsIndex,[t.timeInfo.startField,t.timeInfo.endField]),"floorInfo"in t&&t.floorInfo&&(0,B._w)(n,t.fieldsIndex,[t.floorInfo.floorField]),"feature"===t.type&&e&&null!=t.infoFor3D&&(null==t.globalIdField&&a.A.getLogger(this).error("globalIdField missing on 3DObjectFeatureLayer"),(0,B._w)(n,t.fieldsIndex,[t.globalIdField])),"subtype-group"===t.type){(0,B.rq)(n,r,t.subtypeField);const e=t.sublayers.map((e=>{var t;return Promise.all([null===(t=e.renderer)||void 0===t?void 0:t.collectRequiredFields(n,r),(0,B.Im)(n,e)])}));await Promise.allSettled(e)}"catalog-footprint"===t.type&&(0,B._w)(n,r,[t.parent.itemSourceField,t.parent.itemTypeField]);for(const c of u)"rejected"===c.status&&a.A.getLogger(this).error(c.reason);(0,B.rq)(n,r,i),e&&"displayField"in t&&t.displayField&&(0,B.rq)(n,r,t.displayField);const d=Array.from(n).sort();this._set("requiredFields",d)}_validateFetchPopupFeatures(e,t){if(null!=t)for(const r of e){const e=r.origin&&"layer"in r.origin?r.origin.layer:r.layer;if("popupEnabled"in e&&!e.popupEnabled)throw new s.A("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:e});if(r.isAggregate){const t="featureReduction"in e?e.featureReduction:null;if(!(t&&"popupTemplate"in t&&t.popupEnabled&&t.popupTemplate))throw new s.A("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:e})}else if("popupTemplate"in e&&!(0,z.D8)(e,t))throw new s.A("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:e})}}_popupFeatureHasRequiredFields(e,t){return(0,B.Kl)(t,e)}async _fetchPopupFeatures(e,t){const r=new Array(e.length),i=new Map,s=await this._createPopupQuery(e.map((e=>{var t,r;return null!==(t=null===(r=e.origin)||void 0===r?void 0:r.layer)&&void 0!==t?t:e.layer})),t);for(let n=0;n<e.length;n++){var o,l;const a=e[n];if(a.isAggregate){r[n]=a;continue}const u=null!==(o=null===(l=a.origin)||void 0===l?void 0:l.layer)&&void 0!==o?o:a.layer;if(!u||!("popupEnabled"in u))continue;const d=(0,B.hL)(this.layer.fieldsIndex,s.outFields),c=(0,z.D8)(u,t);if(null==c)continue;const p=await this._loadArcadeModules(c);(0,_.Te)(t),p&&p.arcadeUtils.hasGeometryOperations(c)||!this._popupFeatureHasRequiredFields(a,d)?i.set(a.getObjectId(),{graphic:a,index:n}):r[n]=a}if("stream"===this.layer.type||0===i.size)return r.filter(Boolean);s.objectIds=Array.from(i.keys());try{const e=await this.layer.queryFeatures(s,t);for(const t of e.features){const{graphic:{geometry:e,origin:s},index:o}=i.get(t.getObjectId());t.geometry||(t.geometry=e),t.origin=s,r[o]=t}}catch{}return r.filter(Boolean)}async _createPopupQuery(e,t){const r=this.layer.createQuery(),i=new Set;let s=!1;const o=null!==e&&void 0!==e?e:[this.layer];for(const l of o){if(!("popupEnabled"in l))continue;const e=(0,z.D8)(l,t);if(null==e)continue;const r=await this._loadArcadeModules(e);(0,_.Te)(t);const o=r&&r.arcadeUtils.hasGeometryOperations(e);s=!("point"!==this.layer.geometryType&&!o);const n=await(0,z.TO)(this.layer,e);(0,_.Te)(t);for(const t of n)i.add(t)}if(r.returnGeometry=s,r.returnZ=s,r.returnM=s,r.outFields=Array.from(i),r.outSpatialReference=this.view.spatialReference,"floorInfo"in this.layer&&this.layer.floorInfo){const e=(0,H.E)(this);null!=e&&(r.where=r.where?"(".concat(r.where,") AND (").concat(e,")"):e)}return r}canResume(){return!!super.canResume()&&(null==this.timeExtent||!this.timeExtent.isEmpty)}getTest(){return{createPopupQuery:e=>this._createPopupQuery(void 0,e)}}get test(){return this.getTest()}};return(0,i._)([(0,n.MZ)()],t.prototype,"_updatingRequiredFieldsPromise",void 0),(0,i._)([(0,n.MZ)({readOnly:!0})],t.prototype,"availableFields",null),(0,i._)([(0,n.MZ)({readOnly:!0})],t.prototype,"dataUpdating",void 0),(0,i._)([(0,n.MZ)({type:L.A})],t.prototype,"featureEffect",null),(0,i._)([(0,n.MZ)({type:j.A})],t.prototype,"filter",void 0),(0,i._)([(0,n.MZ)(Q.ui)],t.prototype,"timeExtent",void 0),(0,i._)([(0,n.MZ)()],t.prototype,"layer",void 0),(0,i._)([(0,n.MZ)({type:Number})],t.prototype,"maximumNumberOfFeatures",null),(0,i._)([(0,n.MZ)({readOnly:!0,type:Boolean})],t.prototype,"maximumNumberOfFeaturesExceeded",null),(0,i._)([(0,n.MZ)({readOnly:!0})],t.prototype,"requiredFields",void 0),(0,i._)([(0,n.MZ)()],t.prototype,"suspended",void 0),(0,i._)([(0,n.MZ)()],t.prototype,"view",void 0),t=(0,i._)([(0,u.$)("esri.views.layers.FeatureLayerView")],t),t};var U=r(91196),$=r(771);let Y=class extends((0,$.A)((0,f.T)(J((0,m.w)(U.A))))){constructor(e){super(e),this._controllerTotal=0,this._processorTotal=0,this._needsRefresh=!1,this.suspendResumeExtentMode="data"}initialize(){this.addHandles([(0,l.wB)((()=>this._updatingRequiredFieldsPromise),(e=>this._updatingHandles.addPromise(e)),l.pc),(0,l.wB)((()=>({controller:this.controller,suspended:this.suspended})),(e=>{let{controller:t,suspended:r}=e;t&&!r&&this._needsRefresh&&(t.refetch(),this._needsRefresh=!1)}))])}destroy(){this._updatingHandles.removeAll(),this._fetcherContext=(0,o.pR)(this._fetcherContext)}get maximumNumberOfFeatures(){var e,t;return null!==(e=null===(t=this.controller)||void 0===t?void 0:t.maximumNumberOfFeatures)&&void 0!==e?e:this._get("maximumNumberOfFeatures")}set maximumNumberOfFeatures(e){this._set("maximumNumberOfFeatures",e),this.controller&&(this.controller.maximumNumberOfFeatures=e)}get maximumNumberOfFeaturesExceeded(){return!!this.controller&&!(this.suspended||!this.controller.maximumNumberOfFeaturesExceeded)}get updatingProgressValue(){var e,t;let r=0;if(null!==(e=this.controller)&&void 0!==e&&e.updating){const e=this.controller.updatingRemaining,t=Math.max(this.controller.updatingTotal,this._controllerTotal);t>0&&(r=(t-e)/t,this._controllerTotal=t)}let i=0;if(null!==(t=this.processor)&&void 0!==t&&t.updating){const e=this.processor.updatingRemaining,t=Math.max(e,this._processorTotal);t>0&&(i=(t-e)/t,this._processorTotal=t)}return.5*(r+i)}get updatePolicy(){if(!this.controller)return N.q.ASYNC;switch(this.controller.mode){case"snapshot":{const e=K.get(this.layer.geometryType);return null==e||this.controller.serviceDataCount>e?N.q.ASYNC:N.q.SYNC}case"tiles":return N.q.ASYNC}}get hasZ(){const e=this.layer,t=e.capabilities&&e.capabilities.data;return!(!t||!t.supportsZ)&&("returnZ"in e&&null!=e.returnZ?e.returnZ:t.supportsZ)}get hasM(){const e=this.layer,t=e.capabilities&&e.capabilities.data;return!(!t||!t.supportsM)&&"returnM"in e&&null!=e.returnM&&e.returnM}setVisibility(e,t){var r;null===(r=this.processor)||void 0===r||r.setObjectIdVisibility(e,t)}createQuery(){return super.createQuery()}queryFeatures(e,t){const r=()=>super.queryFeatures(e,t);return"mesh"===this.layer.geometryType?this._queryFeaturesMesh(this._ensureQuery(e),r):r()}beforeSetController(e){e.maximumNumberOfFeatures=this.maximumNumberOfFeatures}createController(){this._fetcherContext=new T({layerView:this,returnZ:this.hasZ,returnM:this.hasM});const e=new p.e({layerView:this,context:this._fetcherContext,graphics:new V._,extent:this.clippingExtent});return this._updatingHandles.add((()=>e.serviceDataExtent),(e=>{this.processor&&(this.processor.dataExtent=e)}),l.Vh),this.addHandles((0,l.wB)((()=>this.suspended),(t=>{t?e.suspend():e.resume()}),l.pc)),this._updatingHandles.add((()=>{var e;return null===(e=this.processor)||void 0===e?void 0:e.displayFeatureLimit}),(t=>e.displayFeatureLimit=t),l.Vh),this.addHandles((0,l.z7)((()=>!this.updating),(()=>{this._controllerTotal=0,this._processorTotal=0}))),e}async doRefresh(e){const{controller:t,processor:r,suspended:i}=this;e&&t&&(i?this._needsRefresh=!0:(t.refetch(),this._needsRefresh=!1)),r.refreshFilter()}_popupFeatureHasRequiredFields(e,t){if(!super._popupFeatureHasRequiredFields(e,t))return!1;const r=(0,d.RW)(e,this.layer.objectIdField);if(null==r)return!0;const i=this.controller.getMissingAttributesForFeature(r);if(null==i)return!0;for(const s of t)if(i.has(s))return!1;return!0}get usedMemory(){var e,t,r,i;return(null!==(e=null===(t=this.processor)||void 0===t?void 0:t.usedMemory)&&void 0!==e?e:0)+(null!==(r=null===(i=this.controller)||void 0===i?void 0:i.memoryForUnusedFeatures)&&void 0!==r?r:0)}get unloadedMemory(){var e,t,r,i,s,o,l,n;const a=null!==(e=null===(t=this.processor)||void 0===t?void 0:t.unprocessedMemoryEstimate)&&void 0!==e?e:0,u=null!==(r=null===(i=this.controller)||void 0===i?void 0:i.expectedFeatureDiff)&&void 0!==r?r:0,d=null!==(s=null===(o=this.processor)||void 0===o?void 0:o.loadedFeatures)&&void 0!==s?s:0,c=d+u>0?d/(d+u):1;return a+u*(null!==(l=null===(n=this.processor)||void 0===n?void 0:n.usedMemoryPerFeature)&&void 0!==l?l:0)*c}get ignoresMemoryFactor(){var e;return null===(e=this.controller)||void 0===e?void 0:e.hasMaximumNumberOfFeaturesOverride}async _queryFeaturesMesh(e,t){await this._validateQueryFeaturesMesh(e);const r=await t();if(null!==e&&void 0!==e&&e.outStatistics||null==this.graphics3DProcessor)return r;const i=this.layer.objectIdField,s=this.graphics3DProcessor.graphics3DGraphicsByObjectID,o=[];for(const l of r.features)if(l.geometry){const e=s.get(l.attributes[i]);e&&(l.geometry=(0,c.wZ)(e.graphic.geometry),o.push(l))}else o.push(l);return r.features=o,r}async _validateQueryFeaturesMesh(e){if(!e)return;const t=e=>{throw new s.A("feature-layer-view:unsupported-query","Queries on Mesh feature collection layers do not support '".concat(e,"'"))},r=["quantizationParameters","geometryPrecision","maxAllowableOffset"];for(const i of r)null!=e[i]&&t(i);"returnM"in e&&e.returnM&&t("returnM"),"returnCentroid"in e&&e.returnCentroid&&t("returnCentroid"),null==e.outSpatialReference||e.outSpatialReference.equals(this.view.spatialReference)||t("outSpatialReference")}get performanceInfo(){var e,t,r,i,s,o,l;const n=null===(e=this.controller)||void 0===e?void 0:e.displayFeatureLimit,a=null!=n?n.averageSymbolComplexity:void 0,u=null!=a?"f:".concat(a.verticesPerFeature,",v:").concat(a.verticesPerCoordinate):"n/a";return new y(super.performanceInfo,null!==(t=null===(r=this.controller)||void 0===r||null===(r=r.performanceInfo)||void 0===r?void 0:r.storedFeatures)&&void 0!==t?t:0,null!==(i=null===(s=this.controller)||void 0===s||null===(s=s.performanceInfo)||void 0===s?void 0:s.totalVertices)&&void 0!==i?i:0,this.maximumNumberOfFeaturesExceeded,null!==(o=null===(l=this.controller)||void 0===l?void 0:l.mode)&&void 0!==o?o:"n/a",u)}get test(){var e;return{updatePolicy:this.updatePolicy,controller:this.controller,loadedGraphics:null===(e=this.controller)||void 0===e?void 0:e.graphics,...this.getTest()}}};(0,i._)([(0,n.MZ)()],Y.prototype,"layer",void 0),(0,i._)([(0,n.MZ)()],Y.prototype,"controller",void 0),(0,i._)([(0,n.MZ)()],Y.prototype,"_controllerTotal",void 0),(0,i._)([(0,n.MZ)()],Y.prototype,"_processorTotal",void 0),(0,i._)([(0,n.MZ)()],Y.prototype,"_needsRefresh",void 0),(0,i._)([(0,n.MZ)()],Y.prototype,"maximumNumberOfFeatures",null),(0,i._)([(0,n.MZ)()],Y.prototype,"maximumNumberOfFeaturesExceeded",null),(0,i._)([(0,n.MZ)(D.S)],Y.prototype,"updatingProgress",void 0),(0,i._)([(0,n.MZ)({readOnly:!0})],Y.prototype,"updatingProgressValue",null),(0,i._)([(0,n.MZ)({readOnly:!0})],Y.prototype,"updatePolicy",null),(0,i._)([(0,n.MZ)({readOnly:!0})],Y.prototype,"hasZ",null),(0,i._)([(0,n.MZ)({readOnly:!0})],Y.prototype,"hasM",null),(0,i._)([(0,n.MZ)()],Y.prototype,"suspendResumeExtentMode",void 0),Y=(0,i._)([(0,u.$)("esri.views.3d.layers.FeatureLayerViewBase3D")],Y);const K=new Map([["point",5e3],["polygon",500],["polyline",1e3]]),W=Y},771:(e,t,r)=>{r.d(t,{A:()=>a});var i=r(35143),s=r(76460),o=r(50346),l=r(68134),n=(r(81806),r(47249),r(50076),r(85842));const a=e=>{let t=class extends e{initialize(){this.addHandles((0,l.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,o.zf)(e)||s.A.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return t=(0,i._)([(0,n.$)("esri.layers.mixins.RefreshableLayerView")],t),t}}}]);
//# sourceMappingURL=3646.0ab3dfcd.chunk.js.map