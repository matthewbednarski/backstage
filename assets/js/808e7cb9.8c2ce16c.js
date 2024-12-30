/*! For license information please see 808e7cb9.8c2ce16c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[926295],{176891:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var t=n(474848),a=n(28453);const s={id:"core-plugin-api.pathparams",title:"PathParams",description:"API reference for PathParams"},o=void 0,c={id:"reference/core-plugin-api.pathparams",title:"PathParams",description:"API reference for PathParams",source:"@site/versioned_docs/version-stable/reference/core-plugin-api.pathparams.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.pathparams",permalink:"/docs/reference/core-plugin-api.pathparams",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/core-plugin-api.pathparams.md",tags:[],version:"stable",frontMatter:{id:"core-plugin-api.pathparams",title:"PathParams",description:"API reference for PathParams"}},i={},p=[];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api",children:(0,t.jsx)(r.code,{children:"@backstage/core-plugin-api"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.pathparams",children:(0,t.jsx)(r.code,{children:"PathParams"})})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Warning: This API is now obsolete."}),"\n",(0,t.jsx)(r.p,{children:"this type is deprecated and will be removed in the future"}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["This utility type helps us infer a Param object type from a string path For example, ",(0,t.jsx)(r.code,{children:"/foo/:bar/:baz"})," inferred to ",(0,t.jsx)(r.code,{children:"{ bar: string, baz: string }"})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export type PathParams<S extends string> = {\n    [name in ParamNames<S>]: string;\n};\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"References:"})," ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.paramnames",children:"ParamNames"})]})]})}function d(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,r,n)=>{var t=n(296540),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,n){var t,s={},p=null,l=null;for(t in void 0!==n&&(p=""+n),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(l=r.ref),r)o.call(r,t)&&!i.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:a,type:e,key:p,ref:l,props:s,_owner:c.current}}r.Fragment=s,r.jsx=p,r.jsxs=p},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>c});var t=n(296540);const a={},s=t.createContext(a);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);