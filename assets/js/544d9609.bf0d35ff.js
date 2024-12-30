/*! For license information please see 544d9609.bf0d35ff.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[464320],{986094:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=r(474848),s=r(28453);const i={id:"version-bridge",title:"@backstage/version-bridge",description:"API Reference for @backstage/version-bridge"},o=void 0,c={id:"reference/version-bridge",title:"@backstage/version-bridge",description:"API Reference for @backstage/version-bridge",source:"@site/versioned_docs/version-stable/reference/version-bridge.md",sourceDirName:"reference",slug:"/reference/version-bridge",permalink:"/docs/reference/version-bridge",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/version-bridge.md",tags:[],version:"stable",frontMatter:{id:"version-bridge",title:"@backstage/version-bridge",description:"API Reference for @backstage/version-bridge"}},d={},a=[{value:"Functions",id:"functions",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/version-bridge",children:(0,t.jsx)(n.code,{children:"@backstage/version-bridge"})})]}),"\n",(0,t.jsx)(n.p,{children:"Utilities used by Backstage packages to support multiple concurrent versions"}),"\n",(0,t.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Function"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/version-bridge.createversionedcontext",children:"createVersionedContext(key)"})}),(0,t.jsx)(n.td,{children:"Get the existing or create a new versioned React context that's stored inside a global singleton."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/version-bridge.createversionedcontextfortesting",children:"createVersionedContextForTesting(key)"})}),(0,t.jsx)(n.td,{children:"Creates a helper for writing tests towards multiple different combinations of versions provided from a context."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/version-bridge.createversionedvaluemap",children:"createVersionedValueMap(versions)"})}),(0,t.jsx)(n.td,{children:"Creates a container for a map of versioned values that implements VersionedValue."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/version-bridge.getorcreateglobalsingleton",children:"getOrCreateGlobalSingleton(id, supplier)"})}),(0,t.jsx)(n.td,{children:"Serializes access to a global singleton value, with the first caller creating the value."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/version-bridge.useversionedcontext",children:"useVersionedContext(key)"})}),(0,t.jsx)(n.td,{children:"A hook that simplifies the consumption of a versioned contexts that's stored inside a global singleton."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type Alias"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/version-bridge.versionedvalue",children:"VersionedValue"})}),(0,t.jsx)(n.td,{children:"The versioned value interface is a container for a set of values that can be looked up by version. It is intended to be used as a container for values that can be versioned independently of package versions."})]})})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,n,r)=>{var t=r(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var t,i={},a=null,l=null;for(t in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,t)&&!d.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:s,type:e,key:a,ref:l,props:i,_owner:c.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var t=r(296540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);