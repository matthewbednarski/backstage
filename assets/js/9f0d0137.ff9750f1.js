/*! For license information please see 9f0d0137.ff9750f1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[668877],{29572:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=r(474848),n=r(28453);const o={id:"backend-plugin-api.rootservicefactoryoptions.initialization",title:"RootServiceFactoryOptions.initialization",description:"API reference for RootServiceFactoryOptions.initialization"},a=void 0,c={id:"reference/backend-plugin-api.rootservicefactoryoptions.initialization",title:"RootServiceFactoryOptions.initialization",description:"API reference for RootServiceFactoryOptions.initialization",source:"@site/versioned_docs/version-stable/reference/backend-plugin-api.rootservicefactoryoptions.initialization.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.rootservicefactoryoptions.initialization",permalink:"/docs/reference/backend-plugin-api.rootservicefactoryoptions.initialization",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/backend-plugin-api.rootservicefactoryoptions.initialization.md",tags:[],version:"stable",frontMatter:{id:"backend-plugin-api.rootservicefactoryoptions.initialization",title:"RootServiceFactoryOptions.initialization",description:"API reference for RootServiceFactoryOptions.initialization"}},s={},l=[{value:"Remarks",id:"remarks",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(i.a,{href:"/docs/reference/backend-plugin-api",children:(0,t.jsx)(i.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,t.jsx)(i.a,{href:"/docs/reference/backend-plugin-api.rootservicefactoryoptions",children:(0,t.jsx)(i.code,{children:"RootServiceFactoryOptions"})})," > ",(0,t.jsx)(i.a,{href:"/docs/reference/backend-plugin-api.rootservicefactoryoptions.initialization",children:(0,t.jsx)(i.code,{children:"initialization"})})]}),"\n",(0,t.jsxs)(i.p,{children:["The initialization strategy for the service factory. This service is root scoped and will use ",(0,t.jsx)(i.code,{children:"always"})," by default."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typescript",children:"initialization?: 'always' | 'lazy';\n"})}),"\n",(0,t.jsx)(i.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"always"})," - The service will always be initialized regardless if it is used or not. - ",(0,t.jsx)(i.code,{children:"lazy"})," - The service will only be initialized if it is depended on by a different service or feature."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Service factories for root scoped services use ",(0,t.jsx)(i.code,{children:"always"})," as the default, while plugin scoped services use ",(0,t.jsx)(i.code,{children:"lazy"}),"."]})]})}function p(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},221020:(e,i,r)=>{var t=r(296540),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,i,r){var t,o={},l=null,d=null;for(t in void 0!==r&&(l=""+r),void 0!==i.key&&(l=""+i.key),void 0!==i.ref&&(d=i.ref),i)a.call(i,t)&&!s.hasOwnProperty(t)&&(o[t]=i[t]);if(e&&e.defaultProps)for(t in i=e.defaultProps)void 0===o[t]&&(o[t]=i[t]);return{$$typeof:n,type:e,key:l,ref:d,props:o,_owner:c.current}}i.Fragment=o,i.jsx=l,i.jsxs=l},474848:(e,i,r)=>{e.exports=r(221020)},28453:(e,i,r)=>{r.d(i,{R:()=>a,x:()=>c});var t=r(296540);const n={},o=t.createContext(n);function a(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);