/*! For license information please see 7e35929c.22eb221b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[139414],{704516:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var n=r(474848),s=r(28453);const c={id:"plugin-kubernetes-node.kubernetesservicelocator.getclustersbyentity",title:"KubernetesServiceLocator.getClustersByEntity()",description:"API reference for KubernetesServiceLocator.getClustersByEntity()"},o=void 0,i={id:"reference/plugin-kubernetes-node.kubernetesservicelocator.getclustersbyentity",title:"KubernetesServiceLocator.getClustersByEntity()",description:"API reference for KubernetesServiceLocator.getClustersByEntity()",source:"@site/versioned_docs/version-stable/reference/plugin-kubernetes-node.kubernetesservicelocator.getclustersbyentity.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-node.kubernetesservicelocator.getclustersbyentity",permalink:"/docs/reference/plugin-kubernetes-node.kubernetesservicelocator.getclustersbyentity",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-kubernetes-node.kubernetesservicelocator.getclustersbyentity.md",tags:[],version:"stable",frontMatter:{id:"plugin-kubernetes-node.kubernetesservicelocator.getclustersbyentity",title:"KubernetesServiceLocator.getClustersByEntity()",description:"API reference for KubernetesServiceLocator.getClustersByEntity()"}},l={},d=[{value:"Parameters",id:"parameters",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-node",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-kubernetes-node"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesservicelocator",children:(0,n.jsx)(t.code,{children:"KubernetesServiceLocator"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesservicelocator.getclustersbyentity",children:(0,n.jsx)(t.code,{children:"getClustersByEntity"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"getClustersByEntity(entity: Entity, requestContext: ServiceLocatorRequestContext): Promise<{\n        clusters: ClusterDetails[];\n    }>;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"entity"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.entity",children:"Entity"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"requestContext"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-node.servicelocatorrequestcontext",children:"ServiceLocatorRequestContext"})}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(t.p,{children:["Promise<{ clusters: ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-node.clusterdetails",children:"ClusterDetails"}),"[]; }>"]})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},221020:(e,t,r)=>{var n=r(296540),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,c={},d=null,u=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,n)&&!l.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:s,type:e,key:d,ref:u,props:c,_owner:i.current}}t.Fragment=c,t.jsx=d,t.jsxs=d},474848:(e,t,r)=>{e.exports=r(221020)},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var n=r(296540);const s={},c=n.createContext(s);function o(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);