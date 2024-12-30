/*! For license information please see 5614c647.91af6735.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[38689],{383499:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var r=t(474848),a=t(28453);const c={id:"backend-openapi-utils.internal.endpointmaprequesthandler",title:"internal.EndpointMapRequestHandler",description:"API reference for internal.EndpointMapRequestHandler"},i=void 0,o={id:"reference/backend-openapi-utils.internal.endpointmaprequesthandler",title:"internal.EndpointMapRequestHandler",description:"API reference for internal.EndpointMapRequestHandler",source:"@site/../docs/reference/backend-openapi-utils.internal.endpointmaprequesthandler.md",sourceDirName:"reference",slug:"/reference/backend-openapi-utils.internal.endpointmaprequesthandler",permalink:"/docs/next/reference/backend-openapi-utils.internal.endpointmaprequesthandler",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/backend-openapi-utils.internal.endpointmaprequesthandler.md",tags:[],version:"current",frontMatter:{id:"backend-openapi-utils.internal.endpointmaprequesthandler",title:"internal.EndpointMapRequestHandler",description:"API reference for internal.EndpointMapRequestHandler"}},s={},d=[];function p(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils",children:(0,r.jsx)(n.code,{children:"@backstage/backend-openapi-utils"})})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.internal",children:(0,r.jsx)(n.code,{children:"internal"})})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.internal.endpointmaprequesthandler",children:(0,r.jsx)(n.code,{children:"EndpointMapRequestHandler"})})]}),"\n",(0,r.jsx)(n.p,{children:"Typed express request handler."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export type EndpointMapRequestHandler<Doc extends EndpointMap, Path extends DocEndpoint<Doc>, Method extends DocEndpointMethod<Doc, Path>> = core.RequestHandler<StaticPathParamsSchema<Doc, Path, Method>, StaticResponseSchema<Doc, Path, Method>, StaticRequestBodySchema<Doc, Path, Method>, StaticQueryParamsSchema<Doc, Path, Method>, Record<string, string>>;\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"References:"})," ",(0,r.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.internal.endpointmap",children:"EndpointMap"}),", ",(0,r.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.internal.docendpoint",children:"DocEndpoint"}),", ",(0,r.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.internal.docendpointmethod",children:"DocEndpointMethod"}),", ",(0,r.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.internal.staticpathparamsschema",children:"StaticPathParamsSchema"}),", ",(0,r.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.internal.staticresponseschema",children:"StaticResponseSchema"}),", ",(0,r.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.internal.staticrequestbodyschema",children:"StaticRequestBodySchema"}),", ",(0,r.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.internal.staticqueryparamsschema",children:"StaticQueryParamsSchema"})]})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},221020:(e,n,t)=>{var r=t(296540),a=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,c={},d=null,p=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(p=n.ref),n)i.call(n,r)&&!s.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:a,type:e,key:d,ref:p,props:c,_owner:o.current}}n.Fragment=c,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(296540);const a={},c=r.createContext(a);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);