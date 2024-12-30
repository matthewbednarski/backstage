/*! For license information please see 06d06bdd.4e1f35e3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[267593],{861722:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>f});var t=r(474848),o=r(28453);const i={id:"plugin-scaffolder.scaffolderplugin",title:"scaffolderPlugin",description:"API reference for scaffolderPlugin"},a=void 0,c={id:"reference/plugin-scaffolder.scaffolderplugin",title:"scaffolderPlugin",description:"API reference for scaffolderPlugin",source:"@site/../docs/reference/plugin-scaffolder.scaffolderplugin.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder.scaffolderplugin",permalink:"/docs/next/reference/plugin-scaffolder.scaffolderplugin",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-scaffolder.scaffolderplugin.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder.scaffolderplugin",title:"scaffolderPlugin",description:"API reference for scaffolderPlugin"}},s={},f=[];function l(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-scaffolder"})})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder.scaffolderplugin",children:(0,t.jsx)(n.code,{children:"scaffolderPlugin"})})]}),"\n",(0,t.jsx)(n.p,{children:"The main plugin export for the scaffolder."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'scaffolderPlugin: import("@backstage/core-plugin-api").BackstagePlugin<{\n    root: import("@backstage/core-plugin-api").RouteRef<undefined>;\n    selectedTemplate: import("@backstage/core-plugin-api").SubRouteRef<import("@backstage/core-plugin-api").PathParams<"/templates/:namespace/:templateName">>;\n    ongoingTask: import("@backstage/core-plugin-api").SubRouteRef<import("@backstage/core-plugin-api").PathParams<"/tasks/:taskId">>;\n    actions: import("@backstage/core-plugin-api").SubRouteRef<undefined>;\n    listTasks: import("@backstage/core-plugin-api").SubRouteRef<undefined>;\n    edit: import("@backstage/core-plugin-api").SubRouteRef<undefined>;\n    editor: import("@backstage/core-plugin-api").SubRouteRef<undefined>;\n    customFields: import("@backstage/core-plugin-api").SubRouteRef<undefined>;\n    templateForm: import("@backstage/core-plugin-api").SubRouteRef<undefined>;\n}, {\n    registerComponent: import("@backstage/core-plugin-api").ExternalRouteRef<undefined, true>;\n    viewTechDoc: import("@backstage/core-plugin-api").ExternalRouteRef<{\n        name: string;\n        kind: string;\n        namespace: string;\n    }, true>;\n}>\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,n,r)=>{var t=r(296540),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function f(e,n,r){var t,i={},f=null,l=null;for(t in void 0!==r&&(f=""+r),void 0!==n.key&&(f=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,t)&&!s.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:o,type:e,key:f,ref:l,props:i,_owner:c.current}}n.Fragment=i,n.jsx=f,n.jsxs=f},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>c});var t=r(296540);const o={},i=t.createContext(o);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);