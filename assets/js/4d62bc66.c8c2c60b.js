/*! For license information please see 4d62bc66.c8c2c60b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[366878],{104263:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var t=n(474848),o=n(28453);const c={id:"plugin-auth-backend.oauthproviderinfo",title:"OAuthProviderInfo",description:"API reference for OAuthProviderInfo"},i=void 0,s={id:"reference/plugin-auth-backend.oauthproviderinfo",title:"OAuthProviderInfo",description:"API reference for OAuthProviderInfo",source:"@site/versioned_docs/version-stable/reference/plugin-auth-backend.oauthproviderinfo.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend.oauthproviderinfo",permalink:"/docs/reference/plugin-auth-backend.oauthproviderinfo",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-auth-backend.oauthproviderinfo.md",tags:[],version:"stable",frontMatter:{id:"plugin-auth-backend.oauthproviderinfo",title:"OAuthProviderInfo",description:"API reference for OAuthProviderInfo"}},a={},d=[];function u(e){const r={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-auth-backend",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-auth-backend"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-auth-backend.oauthproviderinfo",children:(0,t.jsx)(r.code,{children:"OAuthProviderInfo"})})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Warning: This API is now obsolete."}),"\n",(0,t.jsxs)(r.p,{children:["Use ",(0,t.jsx)(r.code,{children:"createOAuthRouteHandlers"})," from ",(0,t.jsx)(r.code,{children:"@backstage/plugin-auth-node"})," instead"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export type OAuthProviderInfo = {\n    accessToken: string;\n    idToken?: string;\n    expiresInSeconds?: number;\n    scope: string;\n};\n"})})]})}function f(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},221020:(e,r,n)=>{var t=n(296540),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,c={},d=null,u=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(u=r.ref),r)i.call(r,t)&&!a.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:o,type:e,key:d,ref:u,props:c,_owner:s.current}}r.Fragment=c,r.jsx=d,r.jsxs=d},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>s});var t=n(296540);const o={},c=t.createContext(o);function i(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);