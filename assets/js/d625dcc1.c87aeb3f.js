/*! For license information please see d625dcc1.c87aeb3f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[7005],{42470:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var i=r(474848),t=r(28453);const s={id:"plugin-auth-backend-module-gcp-iap-provider.gcpiapsigninresolvers",title:"gcpIapSignInResolvers",description:"API reference for gcpIapSignInResolvers"},c=void 0,o={id:"reference/plugin-auth-backend-module-gcp-iap-provider.gcpiapsigninresolvers",title:"gcpIapSignInResolvers",description:"API reference for gcpIapSignInResolvers",source:"@site/../docs/reference/plugin-auth-backend-module-gcp-iap-provider.gcpiapsigninresolvers.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend-module-gcp-iap-provider.gcpiapsigninresolvers",permalink:"/docs/next/reference/plugin-auth-backend-module-gcp-iap-provider.gcpiapsigninresolvers",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-auth-backend-module-gcp-iap-provider.gcpiapsigninresolvers.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-backend-module-gcp-iap-provider.gcpiapsigninresolvers",title:"gcpIapSignInResolvers",description:"API reference for gcpIapSignInResolvers"}},a={},p=[{value:"Variables",id:"variables",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-auth-backend-module-gcp-iap-provider",children:(0,i.jsx)(n.code,{children:"@backstage/plugin-auth-backend-module-gcp-iap-provider"})})," > ",(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-auth-backend-module-gcp-iap-provider.gcpiapsigninresolvers",children:(0,i.jsx)(n.code,{children:"gcpIapSignInResolvers"})})]}),"\n",(0,i.jsx)(n.p,{children:"Available sign-in resolvers for the Google auth provider."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"namespace gcpIapSignInResolvers \n"})}),"\n",(0,i.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Variable"}),"\n"]}),(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-auth-backend-module-gcp-iap-provider.gcpiapsigninresolvers.emailmatchinguserentityannotation",children:"emailMatchingUserEntityAnnotation"})}),"\n"]}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsxs)(n.p,{children:["Looks up the user by matching their email to the ",(0,i.jsx)(n.code,{children:"google.com/email"})," annotation."]}),"\n"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-auth-backend-module-gcp-iap-provider.gcpiapsigninresolvers.idmatchinguserentityannotation",children:"idMatchingUserEntityAnnotation"})}),"\n"]}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsxs)(n.p,{children:["Looks up the user by matching their user ID to the ",(0,i.jsx)(n.code,{children:"google.com/user-id"})," annotation."]}),"\n"]})]})]})]})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},221020:(e,n,r)=>{var i=r(296540),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,r){var i,s={},p=null,d=null;for(i in void 0!==r&&(p=""+r),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(d=n.ref),n)c.call(n,i)&&!a.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===s[i]&&(s[i]=n[i]);return{$$typeof:t,type:e,key:p,ref:d,props:s,_owner:o.current}}n.Fragment=s,n.jsx=p,n.jsxs=p},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>o});var i=r(296540);const t={},s=i.createContext(t);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);