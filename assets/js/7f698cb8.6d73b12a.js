/*! For license information please see 7f698cb8.6d73b12a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[562006],{23315:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var s=t(474848),n=t(28453);const o={id:"plugin-kubernetes-common.clusterattributes.dashboardurl",title:"ClusterAttributes.dashboardUrl",description:"API reference for ClusterAttributes.dashboardUrl"},a=void 0,c={id:"reference/plugin-kubernetes-common.clusterattributes.dashboardurl",title:"ClusterAttributes.dashboardUrl",description:"API reference for ClusterAttributes.dashboardUrl",source:"@site/../docs/reference/plugin-kubernetes-common.clusterattributes.dashboardurl.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-common.clusterattributes.dashboardurl",permalink:"/docs/next/reference/plugin-kubernetes-common.clusterattributes.dashboardurl",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-kubernetes-common.clusterattributes.dashboardurl.md",tags:[],version:"current",frontMatter:{id:"plugin-kubernetes-common.clusterattributes.dashboardurl",title:"ClusterAttributes.dashboardUrl",description:"API reference for ClusterAttributes.dashboardUrl"}},u={},i=[{value:"Remarks",id:"remarks",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-kubernetes-common",children:(0,s.jsx)(r.code,{children:"@backstage/plugin-kubernetes-common"})})," > ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-kubernetes-common.clusterattributes",children:(0,s.jsx)(r.code,{children:"ClusterAttributes"})})," > ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-kubernetes-common.clusterattributes.dashboardurl",children:(0,s.jsx)(r.code,{children:"dashboardUrl"})})]}),"\n",(0,s.jsx)(r.p,{children:"Specifies the link to the Kubernetes dashboard managing this cluster."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"dashboardUrl?: string;\n"})}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsx)(r.p,{children:"Note that you should specify the app used for the dashboard using the dashboardApp property, in order to properly format links to kubernetes resources, otherwise it will assume that you're running the standard one. Also, for cloud clusters such as GKE, you should provide additional parameters using dashboardParameters."})]})}function l(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},221020:(e,r,t)=>{var s=t(296540),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var s,o={},i=null,d=null;for(s in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(d=r.ref),r)a.call(r,s)&&!u.hasOwnProperty(s)&&(o[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===o[s]&&(o[s]=r[s]);return{$$typeof:n,type:e,key:i,ref:d,props:o,_owner:c.current}}r.Fragment=o,r.jsx=i,r.jsxs=i},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>c});var s=t(296540);const n={},o=s.createContext(n);function a(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);