/*! For license information please see 44131649.98c091bd.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[612183],{773231:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>d,metadata:()=>o,toc:()=>s});var t=n(474848),a=n(28453);const d={id:"backend-openapi-utils.createvalidatedopenapirouterfromgeneratedendpointmap",title:"createValidatedOpenApiRouterFromGeneratedEndpointMap()",description:"API reference for createValidatedOpenApiRouterFromGeneratedEndpointMap()"},i=void 0,o={id:"reference/backend-openapi-utils.createvalidatedopenapirouterfromgeneratedendpointmap",title:"createValidatedOpenApiRouterFromGeneratedEndpointMap()",description:"API reference for createValidatedOpenApiRouterFromGeneratedEndpointMap()",source:"@site/../docs/reference/backend-openapi-utils.createvalidatedopenapirouterfromgeneratedendpointmap.md",sourceDirName:"reference",slug:"/reference/backend-openapi-utils.createvalidatedopenapirouterfromgeneratedendpointmap",permalink:"/docs/next/reference/backend-openapi-utils.createvalidatedopenapirouterfromgeneratedendpointmap",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/backend-openapi-utils.createvalidatedopenapirouterfromgeneratedendpointmap.md",tags:[],version:"current",frontMatter:{id:"backend-openapi-utils.createvalidatedopenapirouterfromgeneratedendpointmap",title:"createValidatedOpenApiRouterFromGeneratedEndpointMap()",description:"API reference for createValidatedOpenApiRouterFromGeneratedEndpointMap()"}},p={},s=[{value:"Parameters",id:"parameters",level:2}];function c(e){const r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/backend-openapi-utils",children:(0,t.jsx)(r.code,{children:"@backstage/backend-openapi-utils"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/backend-openapi-utils.createvalidatedopenapirouterfromgeneratedendpointmap",children:(0,t.jsx)(r.code,{children:"createValidatedOpenApiRouterFromGeneratedEndpointMap"})})]}),"\n",(0,t.jsx)(r.p,{children:"Create a new OpenAPI router with some default middleware."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"function createValidatedOpenApiRouterFromGeneratedEndpointMap<T extends EndpointMap>(spec: RequiredDoc, options?: {\n    validatorOptions?: Partial<Parameters<typeof OpenApiValidator>['0']>;\n    middleware?: RequestHandler[];\n}): TypedRouter<T>;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"spec"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/backend-openapi-utils.internal.requireddoc",children:"RequiredDoc"})}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"Your OpenAPI spec imported as a JSON object."}),"\n"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"options"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"{ validatorOptions?: Partial<Parameters<typeof OpenApiValidator>['0']>; middleware?: RequestHandler[]; }"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.em,{children:"(Optional)"})}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/backend-openapi-utils.typedrouter",children:"TypedRouter"}),"<T>"]}),"\n",(0,t.jsx)(r.p,{children:"A new express router with validation middleware."})]})}function l(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},221020:(e,r,n)=>{var t=n(296540),a=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,n){var t,d={},s=null,c=null;for(t in void 0!==n&&(s=""+n),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(c=r.ref),r)i.call(r,t)&&!p.hasOwnProperty(t)&&(d[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===d[t]&&(d[t]=r[t]);return{$$typeof:a,type:e,key:s,ref:c,props:d,_owner:o.current}}r.Fragment=d,r.jsx=s,r.jsxs=s},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>o});var t=n(296540);const a={},d=t.createContext(a);function i(e){const r=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(d.Provider,{value:r},e.children)}}}]);