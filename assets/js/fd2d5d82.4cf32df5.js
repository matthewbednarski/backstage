/*! For license information please see fd2d5d82.4cf32df5.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[331154],{799215:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var t=i(474848),c=i(28453);const s={id:"backend-plugin-api.authservice.listpublicservicekeys",title:"AuthService.listPublicServiceKeys()",description:"API reference for AuthService.listPublicServiceKeys()"},n=void 0,o={id:"reference/backend-plugin-api.authservice.listpublicservicekeys",title:"AuthService.listPublicServiceKeys()",description:"API reference for AuthService.listPublicServiceKeys()",source:"@site/../docs/reference/backend-plugin-api.authservice.listpublicservicekeys.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.authservice.listpublicservicekeys",permalink:"/docs/next/reference/backend-plugin-api.authservice.listpublicservicekeys",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/backend-plugin-api.authservice.listpublicservicekeys.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-api.authservice.listpublicservicekeys",title:"AuthService.listPublicServiceKeys()",description:"API reference for AuthService.listPublicServiceKeys()"}},l={},a=[];function u(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api",children:(0,t.jsx)(r.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api.authservice",children:(0,t.jsx)(r.code,{children:"AuthService"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api.authservice.listpublicservicekeys",children:(0,t.jsx)(r.code,{children:"listPublicServiceKeys"})})]}),"\n",(0,t.jsx)(r.p,{children:"Retrieve the public keys that have been used to sign tokens that were issued by this service. This list is periodically pruned from keys that are significantly past their expiry."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"listPublicServiceKeys(): Promise<{\n        keys: JsonObject[];\n    }>;\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(r.p,{children:["Promise<{ keys: ",(0,t.jsx)(r.a,{href:"/docs/next/reference/types.jsonobject",children:"JsonObject"}),"[]; }>"]})]})}function p(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},221020:(e,r,i)=>{var t=i(296540),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,i){var t,s={},a=null,u=null;for(t in void 0!==i&&(a=""+i),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(u=r.ref),r)n.call(r,t)&&!l.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:c,type:e,key:a,ref:u,props:s,_owner:o.current}}r.Fragment=s,r.jsx=a,r.jsxs=a},474848:(e,r,i)=>{e.exports=i(221020)},28453:(e,r,i)=>{i.d(r,{R:()=>n,x:()=>o});var t=i(296540);const c={},s=t.createContext(c);function n(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:n(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);