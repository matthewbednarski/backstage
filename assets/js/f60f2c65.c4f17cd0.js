/*! For license information please see f60f2c65.c4f17cd0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[392767],{21735:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=t(474848),r=t(28453);const a={id:"backend-openapi-utils.internal.templatetodocendpoint",title:"internal.TemplateToDocEndpoint",description:"API reference for internal.TemplateToDocEndpoint"},c=void 0,i={id:"reference/backend-openapi-utils.internal.templatetodocendpoint",title:"internal.TemplateToDocEndpoint",description:"API reference for internal.TemplateToDocEndpoint",source:"@site/../docs/reference/backend-openapi-utils.internal.templatetodocendpoint.md",sourceDirName:"reference",slug:"/reference/backend-openapi-utils.internal.templatetodocendpoint",permalink:"/docs/next/reference/backend-openapi-utils.internal.templatetodocendpoint",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/backend-openapi-utils.internal.templatetodocendpoint.md",tags:[],version:"current",frontMatter:{id:"backend-openapi-utils.internal.templatetodocendpoint",title:"internal.TemplateToDocEndpoint",description:"API reference for internal.TemplateToDocEndpoint"}},p={},d=[];function s(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,o.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils",children:(0,o.jsx)(n.code,{children:"@backstage/backend-openapi-utils"})})," > ",(0,o.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.internal",children:(0,o.jsx)(n.code,{children:"internal"})})," > ",(0,o.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.internal.templatetodocendpoint",children:(0,o.jsx)(n.code,{children:"TemplateToDocEndpoint"})})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"export type TemplateToDocEndpoint<Doc extends EndpointMap, Path extends DocEndpointTemplate<Doc>> = ValueOf<{\n    [Template in DocEndpoint<Doc>]: Path extends PathTemplate<Template> ? Template : never;\n}>;\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"References:"})," ",(0,o.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.internal.endpointmap",children:"EndpointMap"}),", ",(0,o.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.internal.docendpointtemplate",children:"DocEndpointTemplate"}),", ",(0,o.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.internal.valueof",children:"ValueOf"}),", ",(0,o.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.internal.docendpoint",children:"DocEndpoint"}),", ",(0,o.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.pathtemplate",children:"PathTemplate"})]})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},221020:(e,n,t)=>{var o=t(296540),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var o,a={},d=null,s=null;for(o in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(s=n.ref),n)c.call(n,o)&&!p.hasOwnProperty(o)&&(a[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===a[o]&&(a[o]=n[o]);return{$$typeof:r,type:e,key:d,ref:s,props:a,_owner:i.current}}n.Fragment=a,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var o=t(296540);const r={},a=o.createContext(r);function c(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);