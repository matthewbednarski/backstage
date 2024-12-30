/*! For license information please see b5021664.972ad263.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[871601],{146518:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=r(474848),o=r(28453);const s={id:"plugin-auth-backend.bitbucketpassportprofile",title:"BitbucketPassportProfile",description:"API reference for BitbucketPassportProfile"},c=void 0,i={id:"reference/plugin-auth-backend.bitbucketpassportprofile",title:"BitbucketPassportProfile",description:"API reference for BitbucketPassportProfile",source:"@site/../docs/reference/plugin-auth-backend.bitbucketpassportprofile.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend.bitbucketpassportprofile",permalink:"/docs/next/reference/plugin-auth-backend.bitbucketpassportprofile",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-auth-backend.bitbucketpassportprofile.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-backend.bitbucketpassportprofile",title:"BitbucketPassportProfile",description:"API reference for BitbucketPassportProfile"}},a={},p=[];function u(e){const t={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/plugin-auth-backend",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-auth-backend"})})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/plugin-auth-backend.bitbucketpassportprofile",children:(0,n.jsx)(t.code,{children:"BitbucketPassportProfile"})})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Warning: This API is now obsolete."}),"\n",(0,n.jsxs)(t.p,{children:["The Bitbucket auth provider was extracted to ",(0,n.jsx)(t.code,{children:"@backstage/plugin-auth-backend-module-bitbucket-provider"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export type BitbucketPassportProfile = PassportProfile & {\n    id?: string;\n    displayName?: string;\n    username?: string;\n    avatarUrl?: string;\n    _json?: {\n        links?: {\n            avatar?: {\n                href?: string;\n            };\n        };\n    };\n};\n"})})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},221020:(e,t,r)=>{var n=r(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,r){var n,s={},p=null,u=null;for(n in void 0!==r&&(p=""+r),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,n)&&!a.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:p,ref:u,props:s,_owner:i.current}}t.Fragment=s,t.jsx=p,t.jsxs=p},474848:(e,t,r)=>{e.exports=r(221020)},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>i});var n=r(296540);const o={},s=n.createContext(o);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);