/*! For license information please see 20f5a062.a7e2193a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[742629],{736151:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var i=n(474848),s=n(28453);const t={id:"plugin-permission-react.permissionapi",title:"PermissionApi",description:"API reference for PermissionApi"},o=void 0,c={id:"reference/plugin-permission-react.permissionapi",title:"PermissionApi",description:"API reference for PermissionApi",source:"@site/../docs/reference/plugin-permission-react.permissionapi.md",sourceDirName:"reference",slug:"/reference/plugin-permission-react.permissionapi",permalink:"/docs/next/reference/plugin-permission-react.permissionapi",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-permission-react.permissionapi.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-react.permissionapi",title:"PermissionApi",description:"API reference for PermissionApi"}},p={},a=[];function l(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,i.jsx)(r.a,{href:"/docs/next/reference/plugin-permission-react",children:(0,i.jsx)(r.code,{children:"@backstage/plugin-permission-react"})})," > ",(0,i.jsx)(r.a,{href:"/docs/next/reference/plugin-permission-react.permissionapi",children:(0,i.jsx)(r.code,{children:"PermissionApi"})})]}),"\n",(0,i.jsx)(r.p,{children:"This API is used by various frontend utilities that allow developers to implement authorization within their frontend plugins. A plugin developer will likely not have to interact with this API or its implementations directly, but rather with the aforementioned utility components/hooks."}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"export type PermissionApi = {\n    authorize(request: EvaluatePermissionRequest): Promise<EvaluatePermissionResponse>;\n};\n"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"References:"})," ",(0,i.jsx)(r.a,{href:"/docs/next/reference/plugin-permission-common.evaluatepermissionrequest",children:"EvaluatePermissionRequest"}),", ",(0,i.jsx)(r.a,{href:"/docs/next/reference/plugin-permission-common.evaluatepermissionresponse",children:"EvaluatePermissionResponse"})]})]})}function m(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},221020:(e,r,n)=>{var i=n(296540),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var i,t={},a=null,l=null;for(i in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)o.call(r,i)&&!p.hasOwnProperty(i)&&(t[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps)void 0===t[i]&&(t[i]=r[i]);return{$$typeof:s,type:e,key:a,ref:l,props:t,_owner:c.current}}r.Fragment=t,r.jsx=a,r.jsxs=a},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>c});var i=n(296540);const s={},t=i.createContext(s);function o(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);