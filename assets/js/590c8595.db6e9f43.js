/*! For license information please see 590c8595.db6e9f43.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[87793],{60799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=n(474848),r=n(28453);const s={id:"test-utils.mockfetchapioptions.injectidentityauth",title:"MockFetchApiOptions.injectIdentityAuth",description:"API reference for MockFetchApiOptions.injectIdentityAuth"},c=void 0,o={id:"reference/test-utils.mockfetchapioptions.injectidentityauth",title:"MockFetchApiOptions.injectIdentityAuth",description:"API reference for MockFetchApiOptions.injectIdentityAuth",source:"@site/versioned_docs/version-stable/reference/test-utils.mockfetchapioptions.injectidentityauth.md",sourceDirName:"reference",slug:"/reference/test-utils.mockfetchapioptions.injectidentityauth",permalink:"/docs/reference/test-utils.mockfetchapioptions.injectidentityauth",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/test-utils.mockfetchapioptions.injectidentityauth.md",tags:[],version:"stable",frontMatter:{id:"test-utils.mockfetchapioptions.injectidentityauth",title:"MockFetchApiOptions.injectIdentityAuth",description:"API reference for MockFetchApiOptions.injectIdentityAuth"}},a={},d=[{value:"Remarks",id:"remarks",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,i.jsx)(t.a,{href:"/docs/reference/test-utils",children:(0,i.jsx)(t.code,{children:"@backstage/test-utils"})})," > ",(0,i.jsx)(t.a,{href:"/docs/reference/test-utils.mockfetchapioptions",children:(0,i.jsx)(t.code,{children:"MockFetchApiOptions"})})," > ",(0,i.jsx)(t.a,{href:"/docs/reference/test-utils.mockfetchapioptions.injectidentityauth",children:(0,i.jsx)(t.code,{children:"injectIdentityAuth"})})]}),"\n",(0,i.jsxs)(t.p,{children:["Add token based Authorization headers to requests, basically simulating what ",(0,i.jsx)(t.a,{href:"/docs/reference/core-app-api.fetchmiddlewares.injectidentityauth",children:"FetchMiddlewares.injectIdentityAuth()"})," does."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"injectIdentityAuth?: undefined | {\n        token: string;\n    } | {\n        identityApi: Pick<IdentityApi, 'getCredentials'>;\n    };\n"})}),"\n",(0,i.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsxs)(t.p,{children:["Leaving out this parameter or passing ",(0,i.jsx)(t.code,{children:"undefined"}),", disables auth injection."]}),"\n",(0,i.jsx)(t.p,{children:"To enable the feature, pass in either a static token or an identity API which is queried on each request for a token."})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},221020:(e,t,n)=>{var i=n(296540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var i,s={},d=null,h=null;for(i in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(h=t.ref),t)c.call(t,i)&&!a.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:r,type:e,key:d,ref:h,props:s,_owner:o.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var i=n(296540);const r={},s=i.createContext(r);function c(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);