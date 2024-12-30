/*! For license information please see c1523120.980ec7ba.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[836396],{286901:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var t=n(474848),o=n(28453);const a={id:"plugin-scaffolder.scaffolderplugin",title:"scaffolderPlugin",description:"API reference for scaffolderPlugin"},c=void 0,s={id:"reference/plugin-scaffolder.scaffolderplugin",title:"scaffolderPlugin",description:"API reference for scaffolderPlugin",source:"@site/versioned_docs/version-stable/reference/plugin-scaffolder.scaffolderplugin.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder.scaffolderplugin",permalink:"/docs/reference/plugin-scaffolder.scaffolderplugin",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-scaffolder.scaffolderplugin.md",tags:[],version:"stable",frontMatter:{id:"plugin-scaffolder.scaffolderplugin",title:"scaffolderPlugin",description:"API reference for scaffolderPlugin"}},i={},l=[];function f(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-scaffolder"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder.scaffolderplugin",children:(0,t.jsx)(r.code,{children:"scaffolderPlugin"})})]}),"\n",(0,t.jsx)(r.p,{children:"The main plugin export for the scaffolder."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:'scaffolderPlugin: import("@backstage/core-plugin-api").BackstagePlugin<{\n    root: import("@backstage/core-plugin-api").RouteRef<undefined>;\n    selectedTemplate: import("@backstage/core-plugin-api").SubRouteRef<import("@backstage/core-plugin-api").PathParams<"/templates/:namespace/:templateName">>;\n    ongoingTask: import("@backstage/core-plugin-api").SubRouteRef<import("@backstage/core-plugin-api").PathParams<"/tasks/:taskId">>;\n    actions: import("@backstage/core-plugin-api").SubRouteRef<undefined>;\n    listTasks: import("@backstage/core-plugin-api").SubRouteRef<undefined>;\n    edit: import("@backstage/core-plugin-api").SubRouteRef<undefined>;\n}, {\n    registerComponent: import("@backstage/core-plugin-api").ExternalRouteRef<undefined, true>;\n    viewTechDoc: import("@backstage/core-plugin-api").ExternalRouteRef<{\n        name: string;\n        kind: string;\n        namespace: string;\n    }, true>;\n}>\n'})})]})}function p(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},221020:(e,r,n)=>{var t=n(296540),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,a={},l=null,f=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(f=r.ref),r)c.call(r,t)&&!i.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:o,type:e,key:l,ref:f,props:a,_owner:s.current}}r.Fragment=a,r.jsx=l,r.jsxs=l},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>s});var t=n(296540);const o={},a=t.createContext(o);function c(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);