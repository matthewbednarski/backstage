/*! For license information please see 201fa212.6ef28dcb.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[569616],{843540:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=n(474848),o=n(28453);const i={id:"backend-plugin-api.rootservicefactoryoptions",title:"RootServiceFactoryOptions",description:"API reference for RootServiceFactoryOptions"},s=void 0,c={id:"reference/backend-plugin-api.rootservicefactoryoptions",title:"RootServiceFactoryOptions",description:"API reference for RootServiceFactoryOptions",source:"@site/versioned_docs/version-stable/reference/backend-plugin-api.rootservicefactoryoptions.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.rootservicefactoryoptions",permalink:"/docs/reference/backend-plugin-api.rootservicefactoryoptions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/backend-plugin-api.rootservicefactoryoptions.md",tags:[],version:"stable",frontMatter:{id:"backend-plugin-api.rootservicefactoryoptions",title:"RootServiceFactoryOptions",description:"API reference for RootServiceFactoryOptions"}},a={},d=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api",children:(0,t.jsx)(r.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.rootservicefactoryoptions",children:(0,t.jsx)(r.code,{children:"RootServiceFactoryOptions"})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export interface RootServiceFactoryOptions<TService, // TODO(Rugvip): Can we forward the entire service ref type here instead of forwarding each type arg once the callback form is gone?\nTInstances extends 'singleton' | 'multiton', TImpl extends TService, TDeps extends {\n    [name in string]: ServiceRef<unknown>;\n}> \n"})}),"\n",(0,t.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Property"}),(0,t.jsx)(r.th,{children:"Modifiers"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.rootservicefactoryoptions.deps",children:"deps"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"TDeps"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.rootservicefactoryoptions.initialization",children:"initialization?"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"'always' | 'lazy'"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.em,{children:"(Optional)"})," The initialization strategy for the service factory. This service is root scoped and will use ",(0,t.jsx)(r.code,{children:"always"})," by default."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.rootservicefactoryoptions.service",children:"service"})}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.serviceref",children:"ServiceRef"}),"<TService, 'root', TInstances>"]}),(0,t.jsx)(r.td,{})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Method"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.rootservicefactoryoptions.factory",children:"factory(deps)"})}),(0,t.jsx)(r.td,{})]})})]})]})}function p(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,r,n)=>{var t=n(296540),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,i={},d=null,l=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)s.call(r,t)&&!a.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:o,type:e,key:d,ref:l,props:i,_owner:c.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>c});var t=n(296540);const o={},i=t.createContext(o);function s(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);