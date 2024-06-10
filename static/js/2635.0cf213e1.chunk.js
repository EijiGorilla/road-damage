"use strict";(self.webpackChunkroad_damage=self.webpackChunkroad_damage||[]).push([[2635],{95085:(e,t,i)=>{i.d(t,{A:()=>c});var n=i(35143),s=i(91967),r=i(18690),l=i(69098),o=i(5632),a=i(42553),u=i(46053),p=(i(81806),i(76460),i(85842));let d=0,y=class extends((0,a.Te)((0,l.O)((0,o.sA)(s.A)))){constructor(e){super(e),this.id="".concat(Date.now().toString(16),"-analysis-").concat(d++),this.title=null}get parent(){return this._get("parent")}set parent(e){const t=this.parent;if(null!=t)switch(t.type){case"line-of-sight":case"dimension":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this)}this._set("parent",e)}get isEditable(){return this.requiredPropertiesForEditing.every(r.Ru)}};(0,n._)([(0,u.MZ)({type:String,constructOnly:!0,clonable:!1})],y.prototype,"id",void 0),(0,n._)([(0,u.MZ)({type:String})],y.prototype,"title",void 0),(0,n._)([(0,u.MZ)({clonable:!1,value:null})],y.prototype,"parent",null),(0,n._)([(0,u.MZ)({readOnly:!0})],y.prototype,"isEditable",null),y=(0,n._)([(0,p.$)("esri.analysis.Analysis")],y);const c=y},78059:(e,t,i)=>{i.d(t,{A:()=>v});var n=i(35143),s=i(42251),r=i(91967),l=i(69098),o=i(42553),a=i(30726),u=i(46053),p=(i(81806),i(76460),i(47249),i(85842)),d=i(37546),y=i(13904),c=i(731);let h=class extends((0,o.Te)((0,l.O)(r.A))){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return(0,a.CM)(this.position,e.position)&&(0,a.CM)(this.elevationInfo,e.elevationInfo)&&(0,s.xH)(this.feature,e.feature)}};(0,n._)([(0,u.MZ)({type:y.A,json:{write:{isRequired:!0}}})],h.prototype,"position",void 0),(0,n._)([(0,u.MZ)({type:c.A}),(0,d.P)()],h.prototype,"elevationInfo",void 0),(0,n._)([(0,u.MZ)(s.N1)],h.prototype,"feature",void 0),h=(0,n._)([(0,p.$)("esri.analysis.LineOfSightAnalysisObserver")],h);const v=h},60664:(e,t,i)=>{i.d(t,{A:()=>h});var n=i(35143),s=i(42251),r=i(69098),l=i(42553),o=i(30726),a=i(46053),u=(i(81806),i(76460),i(47249),i(85842)),p=i(37546),d=i(13904),y=i(731);let c=class extends((0,l.Te)(r.P)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return(0,o.CM)(this.position,e.position)&&(0,o.CM)(this.elevationInfo,e.elevationInfo)&&(0,s.xH)(this.feature,e.feature)}};(0,n._)([(0,a.MZ)({type:d.A}),(0,p.P)()],c.prototype,"position",void 0),(0,n._)([(0,a.MZ)({type:y.A}),(0,p.P)()],c.prototype,"elevationInfo",void 0),(0,n._)([(0,a.MZ)(s.N1)],c.prototype,"feature",void 0),c=(0,n._)([(0,u.$)("esri.analysis.LineOfSightAnalysisTarget")],c);const h=c},42251:(e,t,i)=>{function n(e,t){return s(e)===s(t)}function s(e){if(null==e)return null;const t=null!=e.layer?e.layer.id:"";let i=null;return i=null!=e.objectId?e.objectId:null!=e.layer&&"objectIdField"in e.layer&&null!=e.layer.objectIdField&&null!=e.attributes?e.attributes[e.layer.objectIdField]:e.uid,null==i?null:"o-".concat(t,"-").concat(i)}i.d(t,{N1:()=>r,wY:()=>s,xH:()=>n});const r={json:{write:{writer:function(e,t){var i;null!=(null===e||void 0===e||null===(i=e.layer)||void 0===i?void 0:i.objectIdField)&&null!=e.attributes&&(t.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})},target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:function(e){if(null!=e.layerId&&null!=e.objectId)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}}}}}},62635:(e,t,i)=>{i.r(t),i.d(t,{default:()=>I});var n=i(35143),s=i(95085),r=i(78059),l=i(60664),o=i(19276),a=i(3975),u=i(68134),p=i(46053),d=(i(81806),i(76460),i(47249),i(85842)),y=i(9624),c=i(42294),h=i(12482);const v=o.A.ofType(l.A);let g=class extends s.A{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles((0,u.wB)((()=>this._computeExtent()),(e=>{null==(null===e||void 0===e?void 0:e.pending)&&this._set("extent",null!=e?e.extent:null)}),u.pc))}get targets(){return this._get("targets")||new v}set targets(e){this._set("targets",(0,a.V)(e,this.targets,v))}get spatialReference(){var e;return null!=(null===(e=this.observer)||void 0===e?void 0:e.position)?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){var e;return[null===(e=this.observer)||void 0===e?void 0:e.position]}async waitComputeExtent(){const e=this._computeExtent();return null!=e?e.pending:Promise.resolve()}_computeExtent(){var e;const t=this.spatialReference;if(null==(null===(e=this.observer)||void 0===e?void 0:e.position)||null==t)return null;const i=e=>"absolute-height"===(0,h.w7)(e.position,e.elevationInfo),n=this.observer.position,s=(0,c.fA)(n.x,n.y,n.z,n.x,n.y,n.z);for(const l of this.targets)if(null!=l.position){const e=(0,y.projectOrLoad)(l.position,t);if(null!=e.pending)return{pending:e.pending,extent:null};if(null!=e.geometry){const{x:t,y:i,z:n}=e.geometry;(0,c.iT)(s,[t,i,n])}}const r=(0,c.w1)(s,t);return i(this.observer)&&this.targets.every(i)||(r.zmin=void 0,r.zmax=void 0),{pending:null,extent:r}}clear(){this.observer=null,this.targets.removeAll()}};(0,n._)([(0,p.MZ)({type:["line-of-sight"]})],g.prototype,"type",void 0),(0,n._)([(0,p.MZ)({type:r.A,json:{read:!0,write:!0}})],g.prototype,"observer",void 0),(0,n._)([(0,p.MZ)({cast:a.H,type:v,nonNullable:!0,json:{read:!0,write:!0}})],g.prototype,"targets",null),(0,n._)([(0,p.MZ)({value:null,readOnly:!0})],g.prototype,"extent",void 0),(0,n._)([(0,p.MZ)({readOnly:!0})],g.prototype,"spatialReference",null),(0,n._)([(0,p.MZ)({readOnly:!0})],g.prototype,"requiredPropertiesForEditing",null),g=(0,n._)([(0,d.$)("esri.analysis.LineOfSightAnalysis")],g);const f=g;var b=i(77717),_=i(25515),w=i(11270);const M=o.A.ofType(l.A);let A=class extends((0,w.q)((0,b.P)(_.A))){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new f,this.opacity=1}initialize(){this.addHandles((0,u.wB)((()=>this.analysis),((e,t)=>{null!=t&&t.parent===this&&(t.parent=null),null!=e&&(e.parent=this)}),u.pc))}async load(){return null!=this.analysis&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){var e;return null===(e=this.analysis)||void 0===e?void 0:e.observer}set observer(e){const{analysis:t}=this;t&&(t.observer=e)}get targets(){return null!=this.analysis?this.analysis.targets:new o.A}set targets(e){var t;(0,a.V)(e,null===(t=this.analysis)||void 0===t?void 0:t.targets)}get fullExtent(){return null!=this.analysis?this.analysis.extent:null}get spatialReference(){return null!=this.analysis?this.analysis.spatialReference:null}releaseAnalysis(e){this.analysis===e&&(this.analysis=new f)}};(0,n._)([(0,p.MZ)({json:{read:!1},readOnly:!0})],A.prototype,"type",void 0),(0,n._)([(0,p.MZ)({type:["LineOfSightLayer"]})],A.prototype,"operationalLayerType",void 0),(0,n._)([(0,p.MZ)({type:r.A,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],A.prototype,"observer",null),(0,n._)([(0,p.MZ)({type:M,json:{read:!0,write:{ignoreOrigin:!0}}})],A.prototype,"targets",null),(0,n._)([(0,p.MZ)({nonNullable:!0,json:{read:!1,write:!1}})],A.prototype,"analysis",void 0),(0,n._)([(0,p.MZ)({readOnly:!0})],A.prototype,"fullExtent",null),(0,n._)([(0,p.MZ)({readOnly:!0})],A.prototype,"spatialReference",null),(0,n._)([(0,p.MZ)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],A.prototype,"opacity",void 0),(0,n._)([(0,p.MZ)({type:["show","hide"]})],A.prototype,"listMode",void 0),A=(0,n._)([(0,d.$)("esri.layers.LineOfSightLayer")],A);const I=A}}]);
//# sourceMappingURL=2635.0cf213e1.chunk.js.map