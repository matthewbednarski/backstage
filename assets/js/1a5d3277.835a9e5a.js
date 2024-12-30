/*! For license information please see 1a5d3277.835a9e5a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[417535],{855583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(474848),a=n(28453);const o={id:"backend-openapi-utils.internal.methodawaredocpath",title:"internal.MethodAwareDocPath",description:"API reference for internal.MethodAwareDocPath"},c=void 0,i={id:"reference/backend-openapi-utils.internal.methodawaredocpath",title:"internal.MethodAwareDocPath",description:"API reference for internal.MethodAwareDocPath",source:"@site/../docs/reference/backend-openapi-utils.internal.methodawaredocpath.md",sourceDirName:"reference",slug:"/reference/backend-openapi-utils.internal.methodawaredocpath",permalink:"/docs/next/reference/backend-openapi-utils.internal.methodawaredocpath",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/backend-openapi-utils.internal.methodawaredocpath.md",tags:[],version:"current",frontMatter:{id:"backend-openapi-utils.internal.methodawaredocpath",title:"internal.MethodAwareDocPath",description:"API reference for internal.MethodAwareDocPath"}},d={},s=[];function l(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/backend-openapi-utils",children:(0,r.jsx)(t.code,{children:"@backstage/backend-openapi-utils"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/backend-openapi-utils.internal",children:(0,r.jsx)(t.code,{children:"internal"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/backend-openapi-utils.internal.methodawaredocpath",children:(0,r.jsx)(t.code,{children:"MethodAwareDocPath"})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export type MethodAwareDocPath<Doc extends PathDoc, Path extends DocPathTemplate<Doc>, Method extends DocPathTemplateMethod<Doc, Path>> = ValueOf<{\n    [Template in DocPath<Doc>]: Path extends PathTemplate<Template> ? Method extends DocPathTemplateMethod<Doc, Path> ? PathTemplate<Template> : never : never;\n}>;\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"References:"})," ",(0,r.jsx)(t.a,{href:"/docs/next/reference/backend-openapi-utils.internal.pathdoc",children:"PathDoc"}),", ",(0,r.jsx)(t.a,{href:"/docs/next/reference/backend-openapi-utils.internal.docpathtemplate",children:"DocPathTemplate"}),", ",(0,r.jsx)(t.a,{href:"/docs/next/reference/backend-openapi-utils.internal.docpathtemplatemethod",children:"DocPathTemplateMethod"}),", ",(0,r.jsx)(t.a,{href:"/docs/next/reference/backend-openapi-utils.internal.valueof",children:"ValueOf"}),", ",(0,r.jsx)(t.a,{href:"/docs/next/reference/backend-openapi-utils.internal.docpath",children:"DocPath"}),", ",(0,r.jsx)(t.a,{href:"/docs/next/reference/backend-openapi-utils.pathtemplate",children:"PathTemplate"})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var r=n(296540),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,o={},s=null,l=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,r)&&!d.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:s,ref:l,props:o,_owner:i.current}}t.Fragment=o,t.jsx=s,t.jsxs=s},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(296540);const a={},o=r.createContext(a);function c(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);