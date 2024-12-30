/*! For license information please see 0e6535ee.935ec996.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[44135],{760070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var i=n(474848),r=n(28453);const c={id:"plugin-auth-node.identityclient.authenticate",title:"IdentityClient.authenticate()",description:"API reference for IdentityClient.authenticate()"},s=void 0,a={id:"reference/plugin-auth-node.identityclient.authenticate",title:"IdentityClient.authenticate()",description:"API reference for IdentityClient.authenticate()",source:"@site/../docs/reference/plugin-auth-node.identityclient.authenticate.md",sourceDirName:"reference",slug:"/reference/plugin-auth-node.identityclient.authenticate",permalink:"/docs/next/reference/plugin-auth-node.identityclient.authenticate",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-auth-node.identityclient.authenticate.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-node.identityclient.authenticate",title:"IdentityClient.authenticate()",description:"API reference for IdentityClient.authenticate()"}},d={},o=[{value:"Parameters",id:"parameters",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,i.jsx)(t.a,{href:"/docs/next/reference/plugin-auth-node",children:(0,i.jsx)(t.code,{children:"@backstage/plugin-auth-node"})})," > ",(0,i.jsx)(t.a,{href:"/docs/next/reference/plugin-auth-node.identityclient",children:(0,i.jsx)(t.code,{children:"IdentityClient"})})," > ",(0,i.jsx)(t.a,{href:"/docs/next/reference/plugin-auth-node.identityclient.authenticate",children:(0,i.jsx)(t.code,{children:"authenticate"})})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Warning: This API is now obsolete."}),"\n",(0,i.jsx)(t.p,{children:"You should start to use IdentityApi#getIdentity instead of authenticate to retrieve the user identity."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Verifies the given backstage identity token Returns a BackstageIdentity (user) matching the token. The method throws an error if verification fails."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"authenticate(token: string | undefined): Promise<BackstageIdentityResponse>;\n"})}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.th,{children:["\n",(0,i.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,i.jsxs)(t.th,{children:["\n",(0,i.jsx)(t.p,{children:"Type"}),"\n"]}),(0,i.jsxs)(t.th,{children:["\n",(0,i.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["\n",(0,i.jsx)(t.p,{children:"token"}),"\n"]}),(0,i.jsxs)(t.td,{children:["\n",(0,i.jsx)(t.p,{children:"string | undefined"}),"\n"]}),(0,i.jsx)(t.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,i.jsxs)(t.p,{children:["Promise<",(0,i.jsx)(t.a,{href:"/docs/next/reference/plugin-auth-node.backstageidentityresponse",children:"BackstageIdentityResponse"}),">"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var i=n(296540),r=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,n){var i,c={},o=null,l=null;for(i in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,i)&&!d.hasOwnProperty(i)&&(c[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===c[i]&&(c[i]=t[i]);return{$$typeof:r,type:e,key:o,ref:l,props:c,_owner:a.current}}t.Fragment=c,t.jsx=o,t.jsxs=o},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(296540);const r={},c=i.createContext(r);function s(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);