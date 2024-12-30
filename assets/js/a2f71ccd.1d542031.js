/*! For license information please see a2f71ccd.1d542031.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[429762],{590849:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=r(474848),o=r(28453);const s={id:"plugin-catalog-backend-module-ldap.userconfig",title:"UserConfig",description:"API reference for UserConfig"},c=void 0,a={id:"reference/plugin-catalog-backend-module-ldap.userconfig",title:"UserConfig",description:"API reference for UserConfig",source:"@site/../docs/reference/plugin-catalog-backend-module-ldap.userconfig.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-ldap.userconfig",permalink:"/docs/next/reference/plugin-catalog-backend-module-ldap.userconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-catalog-backend-module-ldap.userconfig.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-ldap.userconfig",title:"UserConfig",description:"API reference for UserConfig"}},i={},l=[];function d(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-catalog-backend-module-ldap",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-catalog-backend-module-ldap"})})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-catalog-backend-module-ldap.userconfig",children:(0,t.jsx)(n.code,{children:"UserConfig"})})]}),"\n",(0,t.jsx)(n.p,{children:"The settings that govern the reading and interpretation of users."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export type UserConfig = {\n    dn: string;\n    options: SearchOptions;\n    set?: {\n        [path: string]: JsonValue;\n    };\n    map: {\n        rdn: string;\n        name: string;\n        description?: string;\n        displayName: string;\n        email: string;\n        picture?: string;\n        memberOf: string;\n    };\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"References:"})," ",(0,t.jsx)(n.a,{href:"/docs/next/reference/types.jsonvalue",children:"JsonValue"})]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},221020:(e,n,r)=>{var t=r(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,s={},l=null,d=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)c.call(n,t)&&!i.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:o,type:e,key:l,ref:d,props:s,_owner:a.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>a});var t=r(296540);const o={},s=t.createContext(o);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);