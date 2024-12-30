/*! For license information please see e6b417c1.894b07a0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[393976],{478459:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=t(474848),a=t(28453);const i={id:"plugin-auth-backend.createauthproviderintegration",title:"createAuthProviderIntegration()",description:"API reference for createAuthProviderIntegration()"},o=void 0,s={id:"reference/plugin-auth-backend.createauthproviderintegration",title:"createAuthProviderIntegration()",description:"API reference for createAuthProviderIntegration()",source:"@site/../docs/reference/plugin-auth-backend.createauthproviderintegration.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend.createauthproviderintegration",permalink:"/docs/next/reference/plugin-auth-backend.createauthproviderintegration",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-auth-backend.createauthproviderintegration.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-backend.createauthproviderintegration",title:"createAuthProviderIntegration()",description:"API reference for createAuthProviderIntegration()"}},c={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-backend",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-auth-backend"})})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-backend.createauthproviderintegration",children:(0,n.jsx)(r.code,{children:"createAuthProviderIntegration"})})]}),"\n",(0,n.jsx)(r.p,{children:"Creates a standardized representation of an integration with a third-party auth provider."}),"\n",(0,n.jsx)(r.p,{children:"The returned object facilitates the creation of provider instances, and supplies built-in sign-in resolvers for the specific provider."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"function createAuthProviderIntegration<TCreateOptions extends unknown[], TResolvers extends {\n    [name in string]: (...args: any[]) => SignInResolver<any>;\n}>(config: {\n    create: (...args: TCreateOptions) => AuthProviderFactory;\n    resolvers?: TResolvers;\n}): Readonly<{\n    create: (...args: TCreateOptions) => AuthProviderFactory;\n    resolvers: Readonly<string extends keyof TResolvers ? never : TResolvers>;\n}>;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"config"}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsxs)(r.p,{children:["{ create: (...args: TCreateOptions) => ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-node.authproviderfactory",children:"AuthProviderFactory"}),"; resolvers?: TResolvers; }"]}),"\n"]}),(0,n.jsx)(r.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,n.jsxs)(r.p,{children:["Readonly<{ create: (...args: TCreateOptions) => ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-node.authproviderfactory",children:"AuthProviderFactory"}),"; resolvers: Readonly<string extends keyof TResolvers ? never : TResolvers>; }>"]})]})}function h(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,r,t)=>{var n=t(296540),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,i={},d=null,l=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)o.call(r,n)&&!c.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:a,type:e,key:d,ref:l,props:i,_owner:s.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>s});var n=t(296540);const a={},i=n.createContext(a);function o(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);