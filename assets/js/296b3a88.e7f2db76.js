/*! For license information please see 296b3a88.e7f2db76.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[98284],{574231:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>i,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var o=n(474848),t=n(28453);const c={id:"plugin-catalog-backend-module-puppetdb.resourcetransformer",title:"ResourceTransformer",description:"API reference for ResourceTransformer"},s=void 0,a={id:"reference/plugin-catalog-backend-module-puppetdb.resourcetransformer",title:"ResourceTransformer",description:"API reference for ResourceTransformer",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-backend-module-puppetdb.resourcetransformer.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-puppetdb.resourcetransformer",permalink:"/docs/reference/plugin-catalog-backend-module-puppetdb.resourcetransformer",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-catalog-backend-module-puppetdb.resourcetransformer.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-backend-module-puppetdb.resourcetransformer",title:"ResourceTransformer",description:"API reference for ResourceTransformer"}},d={},p=[];function u(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-puppetdb",children:(0,o.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-puppetdb"})})," > ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-puppetdb.resourcetransformer",children:(0,o.jsx)(r.code,{children:"ResourceTransformer"})})]}),"\n",(0,o.jsx)(r.p,{children:"Customize the ingested Resource entity."}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"export type ResourceTransformer = (node: PuppetNode, config: PuppetDbEntityProviderConfig) => Promise<ResourceEntity | undefined>;\n"})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"References:"})," ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-puppetdb.puppetnode",children:"PuppetNode"}),", ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-puppetdb.puppetdbentityproviderconfig",children:"PuppetDbEntityProviderConfig"}),", ",(0,o.jsx)(r.a,{href:"/docs/reference/catalog-model.resourceentityv1alpha1",children:"ResourceEntity"})]})]})}function i(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},221020:(e,r,n)=>{var o=n(296540),t=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,n){var o,c={},p=null,u=null;for(o in void 0!==n&&(p=""+n),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(u=r.ref),r)s.call(r,o)&&!d.hasOwnProperty(o)&&(c[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===c[o]&&(c[o]=r[o]);return{$$typeof:t,type:e,key:p,ref:u,props:c,_owner:a.current}}r.Fragment=c,r.jsx=p,r.jsxs=p},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>a});var o=n(296540);const t={},c=o.createContext(t);function s(e){const r=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(c.Provider,{value:r},e.children)}}}]);