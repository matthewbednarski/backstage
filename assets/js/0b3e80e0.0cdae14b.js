/*! For license information please see 0b3e80e0.0cdae14b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[216778],{329265:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var o=n(474848),s=n(28453);const t={id:"plugin-permission-node.createpermissionintegrationrouterresourceoptions",title:"CreatePermissionIntegrationRouterResourceOptions",description:"API reference for CreatePermissionIntegrationRouterResourceOptions"},i=void 0,c={id:"reference/plugin-permission-node.createpermissionintegrationrouterresourceoptions",title:"CreatePermissionIntegrationRouterResourceOptions",description:"API reference for CreatePermissionIntegrationRouterResourceOptions",source:"@site/../docs/reference/plugin-permission-node.createpermissionintegrationrouterresourceoptions.md",sourceDirName:"reference",slug:"/reference/plugin-permission-node.createpermissionintegrationrouterresourceoptions",permalink:"/docs/next/reference/plugin-permission-node.createpermissionintegrationrouterresourceoptions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-permission-node.createpermissionintegrationrouterresourceoptions.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-node.createpermissionintegrationrouterresourceoptions",title:"CreatePermissionIntegrationRouterResourceOptions",description:"API reference for CreatePermissionIntegrationRouterResourceOptions"}},p={},a=[];function u(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,o.jsx)(r.a,{href:"/docs/next/reference/plugin-permission-node",children:(0,o.jsx)(r.code,{children:"@backstage/plugin-permission-node"})})," > ",(0,o.jsx)(r.a,{href:"/docs/next/reference/plugin-permission-node.createpermissionintegrationrouterresourceoptions",children:(0,o.jsx)(r.code,{children:"CreatePermissionIntegrationRouterResourceOptions"})})]}),"\n",(0,o.jsx)(r.p,{children:"Options for creating a permission integration router specific for a particular resource type."}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"export type CreatePermissionIntegrationRouterResourceOptions<TResourceType extends string, TResource> = {\n    resourceType: TResourceType;\n    permissions?: Array<Permission>;\n    rules: PermissionRule<TResource, any, NoInfer<TResourceType>>[];\n    getResources?: (resourceRefs: string[]) => Promise<Array<TResource | undefined>>;\n};\n"})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"References:"})," ",(0,o.jsx)(r.a,{href:"/docs/next/reference/plugin-permission-common.permission",children:"Permission"}),", ",(0,o.jsx)(r.a,{href:"/docs/next/reference/plugin-permission-node.permissionrule",children:"PermissionRule"})]})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},221020:(e,r,n)=>{var o=n(296540),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var o,t={},a=null,u=null;for(o in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(u=r.ref),r)i.call(r,o)&&!p.hasOwnProperty(o)&&(t[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===t[o]&&(t[o]=r[o]);return{$$typeof:s,type:e,key:a,ref:u,props:t,_owner:c.current}}r.Fragment=t,r.jsx=a,r.jsxs=a},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>c});var o=n(296540);const s={},t=o.createContext(s);function i(e){const r=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(t.Provider,{value:r},e.children)}}}]);