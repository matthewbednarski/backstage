/*! For license information please see 978a8e8d.42d97dc6.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[55427],{916846:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var c=r(474848),i=r(28453);const n={id:"index",title:"Core Backend Service APIs",sidebar_label:"Overview",description:"Core backend service APIs"},t=void 0,o={id:"backend-system/core-services/index",title:"Core Backend Service APIs",description:"Core backend service APIs",source:"@site/versioned_docs/version-stable/backend-system/core-services/01-index.md",sourceDirName:"backend-system/core-services",slug:"/backend-system/core-services/index",permalink:"/docs/backend-system/core-services/index",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/backend-system/core-services/01-index.md",tags:[],version:"stable",sidebarPosition:1,frontMatter:{id:"index",title:"Core Backend Service APIs",sidebar_label:"Overview",description:"Core backend service APIs"},sidebar:"docs",previous:{title:"Migration Guide",permalink:"/docs/backend-system/building-plugins-and-modules/migrating"},next:{title:"Auth",permalink:"/docs/backend-system/core-services/auth"}},a={},d=[{value:"Service Documentation Index",id:"service-documentation-index",level:2}];function l(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.p,{children:["The default backend provides several ",(0,c.jsx)(s.a,{href:"https://github.com/backstage/backstage/blob/master/packages/backend-plugin-api/src/services/definitions/coreServices.ts",children:"core services"})," out of the box which includes access to configuration, logging, URL Readers, databases and more."]}),"\n",(0,c.jsxs)(s.p,{children:["All core services are available through the ",(0,c.jsx)(s.code,{children:"coreServices"})," namespace in the ",(0,c.jsx)(s.code,{children:"@backstage/backend-plugin-api"})," package:"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-ts",children:"import { coreServices } from '@backstage/backend-plugin-api';\n"})}),"\n",(0,c.jsx)(s.h2,{id:"service-documentation-index",children:"Service Documentation Index"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.a,{href:"/docs/backend-system/core-services/auth",children:"Auth Service"})," - Token authentication and credentials management."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.a,{href:"/docs/backend-system/core-services/cache",children:"Cache Service"})," - Key-value store for caching data."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.a,{href:"/docs/backend-system/core-services/database",children:"Database Service"})," - Database access and management via ",(0,c.jsx)(s.a,{href:"https://knexjs.org/",children:"knex"}),"."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.a,{href:"/docs/backend-system/core-services/discovery",children:"Discovery Service"})," - Service discovery for inter-plugin communication."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.a,{href:"/docs/backend-system/core-services/http-auth",children:"Http Auth Service"})," - Authentication of HTTP requests."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.a,{href:"/docs/backend-system/core-services/http-router",children:"Http Router Service"})," - HTTP route registration for plugins."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.a,{href:"/docs/backend-system/core-services/identity",children:"Identity Service"})," - Deprecated user authentication service, use the ",(0,c.jsx)(s.a,{href:"/docs/backend-system/core-services/auth",children:"Auth Service"})," instead."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.a,{href:"/docs/backend-system/core-services/lifecycle",children:"Lifecycle Service"})," - Registration of plugin startup and shutdown lifecycle hooks."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.a,{href:"/docs/backend-system/core-services/logger",children:"Logger Service"})," - Plugin-level logging."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.a,{href:"/docs/backend-system/core-services/permissions",children:"Permissions Service"})," - Permission system integration for authorization of user actions."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.a,{href:"/docs/backend-system/core-services/plugin-metadata",children:"Plugin Metadata Service"})," - Built-in service for accessing metadata about the current plugin."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.a,{href:"/docs/backend-system/core-services/root-config",children:"Root Config Service"})," - Access to static configuration."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.a,{href:"/docs/backend-system/core-services/root-health",children:"Root Health Service"})," - Health check endpoints for the backend."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.a,{href:"/docs/backend-system/core-services/root-http-router",children:"Root Http Router Service"})," - HTTP route registration for root services."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.a,{href:"/docs/backend-system/core-services/root-lifecycle",children:"Root Lifecycle Service"})," - Registration of backend startup and shutdown lifecycle hooks."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.a,{href:"/docs/backend-system/core-services/root-logger",children:"Root Logger Service"})," - Root-level logging."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.a,{href:"/docs/backend-system/core-services/scheduler",children:"Scheduler Service"})," - Scheduling of distributed background tasks."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.a,{href:"/docs/backend-system/core-services/token-manager",children:"Token Manager Service"})," - Deprecated service authentication service, use the ",(0,c.jsx)(s.a,{href:"/docs/backend-system/core-services/auth",children:"Auth Service"})," instead."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.a,{href:"/docs/backend-system/core-services/url-reader",children:"Url Reader Service"})," - Reading content from external systems."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.a,{href:"/docs/backend-system/core-services/user-info",children:"User Info Service"})," - Authenticated user information retrieval."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},221020:(e,s,r)=>{var c=r(296540),i=Symbol.for("react.element"),n=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,o=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,r){var c,n={},d=null,l=null;for(c in void 0!==r&&(d=""+r),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(l=s.ref),s)t.call(s,c)&&!a.hasOwnProperty(c)&&(n[c]=s[c]);if(e&&e.defaultProps)for(c in s=e.defaultProps)void 0===n[c]&&(n[c]=s[c]);return{$$typeof:i,type:e,key:d,ref:l,props:n,_owner:o.current}}s.Fragment=n,s.jsx=d,s.jsxs=d},474848:(e,s,r)=>{e.exports=r(221020)},28453:(e,s,r)=>{r.d(s,{R:()=>t,x:()=>o});var c=r(296540);const i={},n=c.createContext(i);function t(e){const s=c.useContext(n);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),c.createElement(n.Provider,{value:s},e.children)}}}]);