"use strict";(self.webpackChunkroad_damage=self.webpackChunkroad_damage||[]).push([[698],{50698:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var s=n(12580),i=n(96141),a=n(83661),r=n(8775);class c{async extract(e){const t=o(e),n=(0,r.o6)(t),s=[t.data.buffer];return{result:l(n,s),transferList:s}}async extractComponentsEdgeLocations(e){const t=o(e),n=(0,r.hx)(t.data,t.skipDeduplicate,t.indices,t.indicesLength),i=(0,a.K)(n,d,f),c=[];return{result:(0,s.L)(i.regular.instancesData,c),transferList:c}}async extractEdgeLocations(e){const t=o(e),n=(0,r.hx)(t.data,t.skipDeduplicate,t.indices,t.indicesLength),i=(0,a.K)(n,u,f),c=[];return{result:(0,s.L)(i.regular.instancesData,c),transferList:c}}}function o(e){return{data:i.I$.createView(e.dataBuffer),indices:"Uint32Array"===e.indicesType?new Uint32Array(e.indices):"Uint16Array"===e.indicesType?new Uint16Array(e.indices):e.indices,indicesLength:e.indicesLength,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}}function l(e,t){return t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:(0,s.L)(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:(0,s.L)(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}}const u=new class{allocate(e){return r.Jb.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1)}},d=new class{allocate(e){return r.HY.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1),e.componentIndex.set(t,n.componentIndex)}},f={allocate:()=>null,write:()=>{},trim:()=>null}}}]);
//# sourceMappingURL=698.a628cd83.chunk.js.map