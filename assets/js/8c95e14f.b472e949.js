/*! For license information please see 8c95e14f.b472e949.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[492954],{108438:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=t(474848),c=t(28453);const o={id:"plugin-catalog-backend-module-bitbucket-server.bitbucketserverlocationparser",title:"BitbucketServerLocationParser",description:"API reference for BitbucketServerLocationParser"},i=void 0,a={id:"reference/plugin-catalog-backend-module-bitbucket-server.bitbucketserverlocationparser",title:"BitbucketServerLocationParser",description:"API reference for BitbucketServerLocationParser",source:"@site/../docs/reference/plugin-catalog-backend-module-bitbucket-server.bitbucketserverlocationparser.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-bitbucket-server.bitbucketserverlocationparser",permalink:"/docs/next/reference/plugin-catalog-backend-module-bitbucket-server.bitbucketserverlocationparser",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-catalog-backend-module-bitbucket-server.bitbucketserverlocationparser.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-bitbucket-server.bitbucketserverlocationparser",title:"BitbucketServerLocationParser",description:"API reference for BitbucketServerLocationParser"}},s={},l=[];function u(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-bitbucket-server",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-bitbucket-server"})})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-bitbucket-server.bitbucketserverlocationparser",children:(0,n.jsx)(r.code,{children:"BitbucketServerLocationParser"})})]}),"\n",(0,n.jsx)(r.p,{children:"A custom callback that reacts to finding a location by yielding entities. Can be used for custom location/repository parsing logic."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type BitbucketServerLocationParser = (options: {\n    client: BitbucketServerClient;\n    location: LocationSpec;\n    logger: LoggerService;\n}) => AsyncIterable<Entity>;\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-bitbucket-server.bitbucketserverclient",children:"BitbucketServerClient"}),", ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-node.locationspec",children:"LocationSpec"}),", ",(0,n.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api.loggerservice",children:"LoggerService"}),", ",(0,n.jsx)(r.a,{href:"/docs/next/reference/catalog-model.entity",children:"Entity"})]})]})}function d(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},221020:(e,r,t)=>{var n=t(296540),c=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,o={},l=null,u=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(u=r.ref),r)i.call(r,n)&&!s.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:c,type:e,key:l,ref:u,props:o,_owner:a.current}}r.Fragment=o,r.jsx=l,r.jsxs=l},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var n=t(296540);const c={},o=n.createContext(c);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);