/*! For license information please see e6d7de01.3c7cfdc3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[406397],{31170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var r=n(474848),s=n(28453);const c={id:"catalog-client.catalogapi.getentityancestors",title:"CatalogApi.getEntityAncestors()",description:"API reference for CatalogApi.getEntityAncestors()"},a=void 0,o={id:"reference/catalog-client.catalogapi.getentityancestors",title:"CatalogApi.getEntityAncestors()",description:"API reference for CatalogApi.getEntityAncestors()",source:"@site/../docs/reference/catalog-client.catalogapi.getentityancestors.md",sourceDirName:"reference",slug:"/reference/catalog-client.catalogapi.getentityancestors",permalink:"/docs/next/reference/catalog-client.catalogapi.getentityancestors",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/catalog-client.catalogapi.getentityancestors.md",tags:[],version:"current",frontMatter:{id:"catalog-client.catalogapi.getentityancestors",title:"CatalogApi.getEntityAncestors()",description:"API reference for CatalogApi.getEntityAncestors()"}},i={},l=[{value:"Parameters",id:"parameters",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/catalog-client",children:(0,r.jsx)(t.code,{children:"@backstage/catalog-client"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/catalog-client.catalogapi",children:(0,r.jsx)(t.code,{children:"CatalogApi"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/catalog-client.catalogapi.getentityancestors",children:(0,r.jsx)(t.code,{children:"getEntityAncestors"})})]}),"\n",(0,r.jsx)(t.p,{children:"Gets entity ancestor information, i.e. the hierarchy of parent entities whose processing resulted in a given entity appearing in the catalog."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"getEntityAncestors(request: GetEntityAncestorsRequest, options?: CatalogRequestOptions): Promise<GetEntityAncestorsResponse>;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"request"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/next/reference/catalog-client.getentityancestorsrequest",children:"GetEntityAncestorsRequest"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"Request parameters"}),"\n"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"options"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/next/reference/catalog-client.catalogrequestoptions",children:"CatalogRequestOptions"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," Additional options"]}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,r.jsxs)(t.p,{children:["Promise<",(0,r.jsx)(t.a,{href:"/docs/next/reference/catalog-client.getentityancestorsresponse",children:"GetEntityAncestorsResponse"}),">"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},221020:(e,t,n)=>{var r=n(296540),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,c={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,r)&&!i.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:s,type:e,key:l,ref:d,props:c,_owner:o.current}}t.Fragment=c,t.jsx=l,t.jsxs=l},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(296540);const s={},c=r.createContext(s);function a(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);