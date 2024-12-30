/*! For license information please see 002ac13a.b4dd31d1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[13164],{478943:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>u});var s=n(474848),i=n(28453);const t={id:"plugin-permission-node.makecreatepermissionrule",title:"makeCreatePermissionRule",description:"API reference for makeCreatePermissionRule"},o=void 0,a={id:"reference/plugin-permission-node.makecreatepermissionrule",title:"makeCreatePermissionRule",description:"API reference for makeCreatePermissionRule",source:"@site/versioned_docs/version-stable/reference/plugin-permission-node.makecreatepermissionrule.md",sourceDirName:"reference",slug:"/reference/plugin-permission-node.makecreatepermissionrule",permalink:"/docs/reference/plugin-permission-node.makecreatepermissionrule",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-permission-node.makecreatepermissionrule.md",tags:[],version:"stable",frontMatter:{id:"plugin-permission-node.makecreatepermissionrule",title:"makeCreatePermissionRule",description:"API reference for makeCreatePermissionRule"}},c={},u=[];function l(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/plugin-permission-node",children:(0,s.jsx)(r.code,{children:"@backstage/plugin-permission-node"})})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/plugin-permission-node.makecreatepermissionrule",children:(0,s.jsx)(r.code,{children:"makeCreatePermissionRule"})})]}),"\n",(0,s.jsx)(r.p,{children:"Helper for making plugin-specific createPermissionRule functions, that have the TResource and TQuery type parameters populated but infer the params from the supplied rule. This helps ensure that rules created for this plugin use consistent types for the resource and query."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"makeCreatePermissionRule: <TResource, TQuery, TResourceType extends string>() => <TParams extends PermissionRuleParams = undefined>(rule: PermissionRule<TResource, TQuery, TResourceType, TParams>) => PermissionRule<TResource, TQuery, TResourceType, TParams>\n"})})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,r,n)=>{var s=n(296540),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,n){var s,t={},u=null,l=null;for(s in void 0!==n&&(u=""+n),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(l=r.ref),r)o.call(r,s)&&!c.hasOwnProperty(s)&&(t[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===t[s]&&(t[s]=r[s]);return{$$typeof:i,type:e,key:u,ref:l,props:t,_owner:a.current}}r.Fragment=t,r.jsx=u,r.jsxs=u},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>a});var s=n(296540);const i={},t=s.createContext(i);function o(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);