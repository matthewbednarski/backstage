/*! For license information please see da4a7fc7.d534298e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[68382],{233051:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=t(474848),o=t(28453);const s={id:"core-plugin-api.createroutableextension",title:"createRoutableExtension()",description:"API reference for createRoutableExtension()"},i=void 0,c={id:"reference/core-plugin-api.createroutableextension",title:"createRoutableExtension()",description:"API reference for createRoutableExtension()",source:"@site/versioned_docs/version-stable/reference/core-plugin-api.createroutableextension.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.createroutableextension",permalink:"/docs/reference/core-plugin-api.createroutableextension",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/core-plugin-api.createroutableextension.md",tags:[],version:"stable",frontMatter:{id:"core-plugin-api.createroutableextension",title:"createRoutableExtension()",description:"API reference for createRoutableExtension()"}},a={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/core-plugin-api",children:(0,r.jsx)(n.code,{children:"@backstage/core-plugin-api"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/core-plugin-api.createroutableextension",children:(0,r.jsx)(n.code,{children:"createRoutableExtension"})})]}),"\n",(0,r.jsx)(n.p,{children:"Extension for components that can have its own URL route (top-level pages, tabs etc.)."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function createRoutableExtension<T extends (props: any) => JSX.Element | null>(options: {\n    component: () => Promise<T>;\n    mountPoint: RouteRef;\n    name?: string;\n}): Extension<T>;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsxs)(n.td,{children:["{ component: () => Promise<T>; mountPoint: ",(0,r.jsx)(n.a,{href:"/docs/reference/core-plugin-api.routeref",children:"RouteRef"}),"; name?: string; }"]}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/core-plugin-api.extension",children:"Extension"}),"<T>"]}),"\n",(0,r.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"We do not use ComponentType as the return type, since it doesn't let us convey the children prop. ComponentType inserts children as an optional prop whether the inner component accepts it or not, making it impossible to make the usage of children type safe."}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://backstage.io/docs/plugins/composability#extensions",children:"https://backstage.io/docs/plugins/composability#extensions"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},221020:(e,n,t)=>{var r=t(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,s={},l=null,p=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(p=n.ref),n)i.call(n,r)&&!a.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:o,type:e,key:l,ref:p,props:s,_owner:c.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(296540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);