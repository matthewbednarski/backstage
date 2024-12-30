/*! For license information please see c75cf5e1.0ebf529d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[834388],{494710:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(474848),i=n(28453);const o={id:"plugin-catalog-backend-module-gitlab.gitlabdiscoveryentityprovider",title:"GitlabDiscoveryEntityProvider",description:"API reference for GitlabDiscoveryEntityProvider"},c=void 0,s={id:"reference/plugin-catalog-backend-module-gitlab.gitlabdiscoveryentityprovider",title:"GitlabDiscoveryEntityProvider",description:"API reference for GitlabDiscoveryEntityProvider",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-backend-module-gitlab.gitlabdiscoveryentityprovider.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-gitlab.gitlabdiscoveryentityprovider",permalink:"/docs/reference/plugin-catalog-backend-module-gitlab.gitlabdiscoveryentityprovider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-catalog-backend-module-gitlab.gitlabdiscoveryentityprovider.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-backend-module-gitlab.gitlabdiscoveryentityprovider",title:"GitlabDiscoveryEntityProvider",description:"API reference for GitlabDiscoveryEntityProvider"}},a={},d=[{value:"Methods",id:"methods",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-gitlab",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-gitlab"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-gitlab.gitlabdiscoveryentityprovider",children:(0,r.jsx)(t.code,{children:"GitlabDiscoveryEntityProvider"})})]}),"\n",(0,r.jsx)(t.p,{children:"Discovers catalog files located in your GitLab instance. The provider will search your GitLab instance's projects and register catalog files matching the configured path as Location entity and via following processing steps add all contained catalog entities. This can be useful as an alternative to static locations or manually adding things to the catalog."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class GitlabDiscoveryEntityProvider implements EntityProvider \n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Implements:"})," ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-node.entityprovider",children:"EntityProvider"})]}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Modifiers"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-gitlab.gitlabdiscoveryentityprovider.connect",children:"connect(connection)"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-gitlab.gitlabdiscoveryentityprovider.fromconfig",children:"fromConfig(config, options)"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"static"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-gitlab.gitlabdiscoveryentityprovider.getprovidername",children:"getProviderName()"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-gitlab.gitlabdiscoveryentityprovider.refresh",children:"refresh(logger)"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Performs a full scan on the GitLab instance searching for locations to be ingested"})]})]})]})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var r=n(296540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,o={},d=null,l=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,r)&&!a.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:d,ref:l,props:o,_owner:s.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>s});var r=n(296540);const i={},o=r.createContext(i);function c(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);