/*! For license information please see a2d7e9f3.b707d6f4.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[234930],{317617:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var s=n(474848),t=n(28453);const a={id:"core-plugin-api.paramkeys",title:"ParamKeys",description:"API reference for ParamKeys"},o=void 0,c={id:"reference/core-plugin-api.paramkeys",title:"ParamKeys",description:"API reference for ParamKeys",source:"@site/versioned_docs/version-stable/reference/core-plugin-api.paramkeys.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.paramkeys",permalink:"/docs/reference/core-plugin-api.paramkeys",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/core-plugin-api.paramkeys.md",tags:[],version:"stable",frontMatter:{id:"core-plugin-api.paramkeys",title:"ParamKeys",description:"API reference for ParamKeys"}},i={},p=[];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/core-plugin-api",children:(0,s.jsx)(r.code,{children:"@backstage/core-plugin-api"})})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/core-plugin-api.paramkeys",children:(0,s.jsx)(r.code,{children:"ParamKeys"})})]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"Warning: This API is now obsolete."}),"\n",(0,s.jsx)(r.p,{children:"this type is deprecated and will be removed in the future"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Type describing the key type of a route parameter mapping."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"export type ParamKeys<Params extends AnyParams> = keyof Params extends never ? [] : (keyof Params)[];\n"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"References:"})," ",(0,s.jsx)(r.a,{href:"/docs/reference/core-plugin-api.anyparams",children:"AnyParams"})]})]})}function d(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,r,n)=>{var s=n(296540),t=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,n){var s,a={},p=null,l=null;for(s in void 0!==n&&(p=""+n),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(l=r.ref),r)o.call(r,s)&&!i.hasOwnProperty(s)&&(a[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===a[s]&&(a[s]=r[s]);return{$$typeof:t,type:e,key:p,ref:l,props:a,_owner:c.current}}r.Fragment=a,r.jsx=p,r.jsxs=p},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>c});var s=n(296540);const t={},a=s.createContext(t);function o(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);