"use strict";(self.webpackChunkroad_damage=self.webpackChunkroad_damage||[]).push([[5297],{55297:(t,e,n)=>{n.r(e),n.d(e,{executeAttachmentQuery:()=>d,fetchAttachments:()=>p,processAttachmentQueryResult:()=>h});var a=n(55171),o=n(3825),s=n(90534),c=n(78238),r=n(88084);function u(t){const e=t.toJSON();return e.attachmentTypes&&(e.attachmentTypes=e.attachmentTypes.join(",")),e.keywords&&(e.keywords=e.keywords.join(",")),e.globalIds&&(e.globalIds=e.globalIds.join(",")),e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.size&&(e.size=e.size.join(",")),e}function h(t,e){const n={};for(const o of e){const{parentObjectId:e,parentGlobalId:c,attachmentInfos:u}=o;for(const o of u){const{id:u}=o,h=(0,s.yM)((0,a.Y3)("".concat(t.path,"/").concat(e,"/attachments/").concat(u))),d=r.A.fromJSON(o);d.set({url:h,parentObjectId:e,parentGlobalId:c}),n[e]?n[e].push(d):n[e]=[d]}}return n}function d(t,e,n){let a={query:(0,c.z)({...t.query,f:"json",...u(e)})};return n&&(a={...n,...a,query:{...n.query,...a.query}}),(0,o.A)(t.path+"/queryAttachments",a).then((t=>t.data.attachmentGroups))}async function p(t,e,n){const{objectIds:a}=e,s=[];for(const c of a)s.push((0,o.A)(t.path+"/"+c+"/attachments",n));return Promise.all(s).then((t=>a.map(((e,n)=>({parentObjectId:e,attachmentInfos:t[n].data.attachmentInfos})))))}}}]);
//# sourceMappingURL=5297.ff19aac8.chunk.js.map