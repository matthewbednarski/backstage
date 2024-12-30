/*! For license information please see 1e1275c8.a3f556ed.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[553253],{445855:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=n(474848),i=n(28453);const s={id:"core-plugin-api.withapis",title:"withApis()",description:"API reference for withApis()"},o=void 0,c={id:"reference/core-plugin-api.withapis",title:"withApis()",description:"API reference for withApis()",source:"@site/versioned_docs/version-stable/reference/core-plugin-api.withapis.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.withapis",permalink:"/docs/reference/core-plugin-api.withapis",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/core-plugin-api.withapis.md",tags:[],version:"stable",frontMatter:{id:"core-plugin-api.withapis",title:"withApis()",description:"API reference for withApis()"}},p={},a=[{value:"Parameters",id:"parameters",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api",children:(0,t.jsx)(r.code,{children:"@backstage/core-plugin-api"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.withapis",children:(0,t.jsx)(r.code,{children:"withApis"})})]}),"\n",(0,t.jsx)(r.p,{children:"Wrapper for giving component an API context."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"function withApis<T extends {}>(apis: TypesToApiRefs<T>): <TProps extends T>(WrappedComponent: React.ComponentType<TProps>) => {\n    (props: React.PropsWithChildren<Omit<TProps, keyof T>>): React.JSX.Element;\n    displayName: string;\n};\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"apis"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.typestoapirefs",children:"TypesToApiRefs"}),"<T>"]}),(0,t.jsx)(r.td,{children:"APIs for the context."})]})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(r.p,{children:"<TProps extends T>(WrappedComponent: React.ComponentType<TProps>) => { (props: React.PropsWithChildren<Omit<TProps, keyof T>>): React.JSX.Element; displayName: string; }"})]})}function l(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},221020:(e,r,n)=>{var t=n(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var t,s={},a=null,d=null;for(t in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(d=r.ref),r)o.call(r,t)&&!p.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:i,type:e,key:a,ref:d,props:s,_owner:c.current}}r.Fragment=s,r.jsx=a,r.jsxs=a},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>c});var t=n(296540);const i={},s=t.createContext(i);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);