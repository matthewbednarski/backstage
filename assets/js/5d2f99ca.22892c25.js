/*! For license information please see 5d2f99ca.22892c25.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[636314],{343210:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var n=i(474848),s=i(28453);const t={id:"plugin-permission-react.permissionapi",title:"PermissionApi",description:"API reference for PermissionApi"},o=void 0,c={id:"reference/plugin-permission-react.permissionapi",title:"PermissionApi",description:"API reference for PermissionApi",source:"@site/versioned_docs/version-stable/reference/plugin-permission-react.permissionapi.md",sourceDirName:"reference",slug:"/reference/plugin-permission-react.permissionapi",permalink:"/docs/reference/plugin-permission-react.permissionapi",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-permission-react.permissionapi.md",tags:[],version:"stable",frontMatter:{id:"plugin-permission-react.permissionapi",title:"PermissionApi",description:"API reference for PermissionApi"}},p={},a=[];function l(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-react",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-permission-react"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.permissionapi",children:(0,n.jsx)(r.code,{children:"PermissionApi"})})]}),"\n",(0,n.jsx)(r.p,{children:"This API is used by various frontend utilities that allow developers to implement authorization within their frontend plugins. A plugin developer will likely not have to interact with this API or its implementations directly, but rather with the aforementioned utility components/hooks."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type PermissionApi = {\n    authorize(request: EvaluatePermissionRequest): Promise<EvaluatePermissionResponse>;\n};\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.evaluatepermissionrequest",children:"EvaluatePermissionRequest"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.evaluatepermissionresponse",children:"EvaluatePermissionResponse"})]})]})}function m(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,r,i)=>{var n=i(296540),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,i){var n,t={},a=null,l=null;for(n in void 0!==i&&(a=""+i),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)o.call(r,n)&&!p.hasOwnProperty(n)&&(t[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===t[n]&&(t[n]=r[n]);return{$$typeof:s,type:e,key:a,ref:l,props:t,_owner:c.current}}r.Fragment=t,r.jsx=a,r.jsxs=a},474848:(e,r,i)=>{e.exports=i(221020)},28453:(e,r,i)=>{i.d(r,{R:()=>o,x:()=>c});var n=i(296540);const s={},t=n.createContext(s);function o(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);