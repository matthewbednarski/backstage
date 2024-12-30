/*! For license information please see e992f704.e105b467.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[229386],{364243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var r=n(474848),a=n(28453);const c={id:"plugin-catalog-backend.catalogbuilder.addentitypolicy",title:"CatalogBuilder.addEntityPolicy()",description:"API reference for CatalogBuilder.addEntityPolicy()"},i=void 0,l={id:"reference/plugin-catalog-backend.catalogbuilder.addentitypolicy",title:"CatalogBuilder.addEntityPolicy()",description:"API reference for CatalogBuilder.addEntityPolicy()",source:"@site/../docs/reference/plugin-catalog-backend.catalogbuilder.addentitypolicy.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend.catalogbuilder.addentitypolicy",permalink:"/docs/next/reference/plugin-catalog-backend.catalogbuilder.addentitypolicy",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-catalog-backend.catalogbuilder.addentitypolicy.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend.catalogbuilder.addentitypolicy",title:"CatalogBuilder.addEntityPolicy()",description:"API reference for CatalogBuilder.addEntityPolicy()"}},o={},d=[{value:"Parameters",id:"parameters",level:2}];function s(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-catalog-backend",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog-backend"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-catalog-backend.catalogbuilder",children:(0,r.jsx)(t.code,{children:"CatalogBuilder"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-catalog-backend.catalogbuilder.addentitypolicy",children:(0,r.jsx)(t.code,{children:"addEntityPolicy"})})]}),"\n",(0,r.jsx)(t.p,{children:"Adds policies that are used to validate entities between the pre- processing and post-processing stages. All such policies must pass for the entity to be considered valid."}),"\n",(0,r.jsx)(t.p,{children:"If what you want to do is to replace the rules for what format is allowed in various core entity fields (such as metadata.name), you may want to use  instead."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"addEntityPolicy(...policies: Array<EntityPolicy | Array<EntityPolicy>>): CatalogBuilder;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"policies"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsxs)(t.p,{children:["Array<",(0,r.jsx)(t.a,{href:"/docs/next/reference/catalog-model.entitypolicy",children:"EntityPolicy"})," | Array<",(0,r.jsx)(t.a,{href:"/docs/next/reference/catalog-model.entitypolicy",children:"EntityPolicy"}),">>"]}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"One or more policies"}),"\n"]})]})})]}),"\n**Returns:**\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-catalog-backend.catalogbuilder",children:"CatalogBuilder"})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},221020:(e,t,n)=>{var r=n(296540),a=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,c={},d=null,s=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(s=t.ref),t)i.call(t,r)&&!o.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:a,type:e,key:d,ref:s,props:c,_owner:l.current}}t.Fragment=c,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(296540);const a={},c=r.createContext(a);function i(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);