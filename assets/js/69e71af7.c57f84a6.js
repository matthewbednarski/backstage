/*! For license information please see 69e71af7.c57f84a6.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[437047],{847121:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(474848),i=n(28453);const a={id:"catalog-client.catalogapi.getentitybyref",title:"CatalogApi.getEntityByRef()",description:"API reference for CatalogApi.getEntityByRef()"},c=void 0,o={id:"reference/catalog-client.catalogapi.getentitybyref",title:"CatalogApi.getEntityByRef()",description:"API reference for CatalogApi.getEntityByRef()",source:"@site/versioned_docs/version-stable/reference/catalog-client.catalogapi.getentitybyref.md",sourceDirName:"reference",slug:"/reference/catalog-client.catalogapi.getentitybyref",permalink:"/docs/reference/catalog-client.catalogapi.getentitybyref",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/catalog-client.catalogapi.getentitybyref.md",tags:[],version:"stable",frontMatter:{id:"catalog-client.catalogapi.getentitybyref",title:"CatalogApi.getEntityByRef()",description:"API reference for CatalogApi.getEntityByRef()"}},s={},l=[{value:"Parameters",id:"parameters",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-client",children:(0,r.jsx)(t.code,{children:"@backstage/catalog-client"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-client.catalogapi",children:(0,r.jsx)(t.code,{children:"CatalogApi"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-client.catalogapi.getentitybyref",children:(0,r.jsx)(t.code,{children:"getEntityByRef"})})]}),"\n",(0,r.jsx)(t.p,{children:"Gets a single entity from the catalog by its ref (kind, namespace, name) triplet."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"getEntityByRef(entityRef: string | CompoundEntityRef, options?: CatalogRequestOptions): Promise<Entity | undefined>;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"entityRef"}),(0,r.jsxs)(t.td,{children:["string | ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-model.compoundentityref",children:"CompoundEntityRef"})]}),(0,r.jsx)(t.td,{children:"A complete entity ref, either on string or compound form"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"options"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/catalog-client.catalogrequestoptions",children:"CatalogRequestOptions"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," Additional options"]})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(t.p,{children:["Promise<",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-model.entity",children:"Entity"})," | undefined>"]}),"\n",(0,r.jsx)(t.p,{children:"The matching entity, or undefined if there was no entity with that ref"})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},221020:(e,t,n)=>{var r=n(296540),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,a={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,r)&&!s.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:d,props:a,_owner:o.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var r=n(296540);const i={},a=r.createContext(i);function c(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);