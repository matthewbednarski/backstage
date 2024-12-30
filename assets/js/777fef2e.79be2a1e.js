/*! For license information please see 777fef2e.79be2a1e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[607040],{848407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(474848),s=n(28453);const i={id:"plugin-catalog-backend.builtinkindsentityprocessor.postprocessentity",title:"BuiltinKindsEntityProcessor.postProcessEntity()",description:"API reference for BuiltinKindsEntityProcessor.postProcessEntity()"},o=void 0,c={id:"reference/plugin-catalog-backend.builtinkindsentityprocessor.postprocessentity",title:"BuiltinKindsEntityProcessor.postProcessEntity()",description:"API reference for BuiltinKindsEntityProcessor.postProcessEntity()",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-backend.builtinkindsentityprocessor.postprocessentity.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend.builtinkindsentityprocessor.postprocessentity",permalink:"/docs/reference/plugin-catalog-backend.builtinkindsentityprocessor.postprocessentity",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-catalog-backend.builtinkindsentityprocessor.postprocessentity.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-backend.builtinkindsentityprocessor.postprocessentity",title:"BuiltinKindsEntityProcessor.postProcessEntity()",description:"API reference for BuiltinKindsEntityProcessor.postProcessEntity()"}},a={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog-backend"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.builtinkindsentityprocessor",children:(0,r.jsx)(t.code,{children:"BuiltinKindsEntityProcessor"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.builtinkindsentityprocessor.postprocessentity",children:(0,r.jsx)(t.code,{children:"postProcessEntity"})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"postProcessEntity(entity: Entity, _location: LocationSpec, emit: CatalogProcessorEmit): Promise<Entity>;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"entity"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/catalog-model.entity",children:"Entity"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"_location"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-common.locationspec",children:"LocationSpec"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"emit"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessoremit",children:"CatalogProcessorEmit"})}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(t.p,{children:["Promise<",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-model.entity",children:"Entity"}),">"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var r=n(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,i={},d=null,l=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,r)&&!a.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:d,ref:l,props:i,_owner:c.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(296540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);