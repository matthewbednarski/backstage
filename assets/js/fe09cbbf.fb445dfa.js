/*! For license information please see fe09cbbf.fb445dfa.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[967254],{369118:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>s,toc:()=>i});var n=o(474848),a=o(28453);const t={id:"plugin-catalog-backend-module-msgraph.microsoftgraphorgreaderprocessor.readlocation",title:"MicrosoftGraphOrgReaderProcessor.readLocation()",description:"API reference for MicrosoftGraphOrgReaderProcessor.readLocation()"},c=void 0,s={id:"reference/plugin-catalog-backend-module-msgraph.microsoftgraphorgreaderprocessor.readlocation",title:"MicrosoftGraphOrgReaderProcessor.readLocation()",description:"API reference for MicrosoftGraphOrgReaderProcessor.readLocation()",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-backend-module-msgraph.microsoftgraphorgreaderprocessor.readlocation.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-msgraph.microsoftgraphorgreaderprocessor.readlocation",permalink:"/docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphorgreaderprocessor.readlocation",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphorgreaderprocessor.readlocation.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-backend-module-msgraph.microsoftgraphorgreaderprocessor.readlocation",title:"MicrosoftGraphOrgReaderProcessor.readLocation()",description:"API reference for MicrosoftGraphOrgReaderProcessor.readLocation()"}},d={},i=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-msgraph"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphorgreaderprocessor",children:(0,n.jsx)(r.code,{children:"MicrosoftGraphOrgReaderProcessor"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphorgreaderprocessor.readlocation",children:(0,n.jsx)(r.code,{children:"readLocation"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"readLocation(location: LocationSpec, _optional: boolean, emit: CatalogProcessorEmit): Promise<boolean>;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"location"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-common.locationspec",children:"LocationSpec"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"_optional"}),(0,n.jsx)(r.td,{children:"boolean"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"emit"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessoremit",children:"CatalogProcessorEmit"})}),(0,n.jsx)(r.td,{})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"Promise<boolean>"})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,r,o)=>{var n=o(296540),a=Symbol.for("react.element"),t=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,o){var n,t={},i=null,l=null;for(n in void 0!==o&&(i=""+o),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,n)&&!d.hasOwnProperty(n)&&(t[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===t[n]&&(t[n]=r[n]);return{$$typeof:a,type:e,key:i,ref:l,props:t,_owner:s.current}}r.Fragment=t,r.jsx=i,r.jsxs=i},474848:(e,r,o)=>{e.exports=o(221020)},28453:(e,r,o)=>{o.d(r,{R:()=>c,x:()=>s});var n=o(296540);const a={},t=n.createContext(a);function c(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);