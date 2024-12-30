/*! For license information please see 256faba1.4364056b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[567939],{711404:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var n=o(474848),s=o(28453);const t={id:"errors.errorresponsebody",title:"ErrorResponseBody",description:"API reference for ErrorResponseBody"},c=void 0,d={id:"reference/errors.errorresponsebody",title:"ErrorResponseBody",description:"API reference for ErrorResponseBody",source:"@site/versioned_docs/version-stable/reference/errors.errorresponsebody.md",sourceDirName:"reference",slug:"/reference/errors.errorresponsebody",permalink:"/docs/reference/errors.errorresponsebody",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/errors.errorresponsebody.md",tags:[],version:"stable",frontMatter:{id:"errors.errorresponsebody",title:"ErrorResponseBody",description:"API reference for ErrorResponseBody"}},i={},a=[];function p(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/errors",children:(0,n.jsx)(r.code,{children:"@backstage/errors"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/errors.errorresponsebody",children:(0,n.jsx)(r.code,{children:"ErrorResponseBody"})})]}),"\n",(0,n.jsx)(r.p,{children:"A standard shape of JSON data returned as the body of backend errors."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type ErrorResponseBody = {\n    error: SerializedError;\n    request?: {\n        method: string;\n        url: string;\n    };\n    response: {\n        statusCode: number;\n    };\n};\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/docs/reference/errors.serializederror",children:"SerializedError"})]})]})}function f(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},221020:(e,r,o)=>{var n=o(296540),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,o){var n,t={},a=null,p=null;for(n in void 0!==o&&(a=""+o),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(p=r.ref),r)c.call(r,n)&&!i.hasOwnProperty(n)&&(t[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===t[n]&&(t[n]=r[n]);return{$$typeof:s,type:e,key:a,ref:p,props:t,_owner:d.current}}r.Fragment=t,r.jsx=a,r.jsxs=a},474848:(e,r,o)=>{e.exports=o(221020)},28453:(e,r,o)=>{o.d(r,{R:()=>c,x:()=>d});var n=o(296540);const s={},t=n.createContext(s);function c(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);