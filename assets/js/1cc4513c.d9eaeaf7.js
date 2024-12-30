/*! For license information please see 1cc4513c.d9eaeaf7.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[510038],{338746:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var t=n(474848),c=n(28453);const a={id:"frontend-plugin-api.analyticstracker",title:"AnalyticsTracker",description:"API reference for AnalyticsTracker"},s=void 0,i={id:"reference/frontend-plugin-api.analyticstracker",title:"AnalyticsTracker",description:"API reference for AnalyticsTracker",source:"@site/../docs/reference/frontend-plugin-api.analyticstracker.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.analyticstracker",permalink:"/docs/next/reference/frontend-plugin-api.analyticstracker",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/frontend-plugin-api.analyticstracker.md",tags:[],version:"current",frontMatter:{id:"frontend-plugin-api.analyticstracker",title:"AnalyticsTracker",description:"API reference for AnalyticsTracker"}},o={},l=[];function d(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/frontend-plugin-api",children:(0,t.jsx)(r.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/frontend-plugin-api.analyticstracker",children:(0,t.jsx)(r.code,{children:"AnalyticsTracker"})})]}),"\n",(0,t.jsx)(r.p,{children:"Represents a tracker with methods that can be called to track events in a configured analytics service."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export type AnalyticsTracker = {\n    captureEvent: (action: string, subject: string, options?: {\n        value?: number;\n        attributes?: AnalyticsEventAttributes;\n    }) => void;\n};\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"References:"})," ",(0,t.jsx)(r.a,{href:"/docs/next/reference/frontend-plugin-api.analyticseventattributes",children:"AnalyticsEventAttributes"})]})]})}function p(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},221020:(e,r,n)=>{var t=n(296540),c=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,a={},l=null,d=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)s.call(r,t)&&!o.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:c,type:e,key:l,ref:d,props:a,_owner:i.current}}r.Fragment=a,r.jsx=l,r.jsxs=l},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>i});var t=n(296540);const c={},a=t.createContext(c);function s(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);