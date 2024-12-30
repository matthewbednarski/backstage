/*! For license information please see f491a960.9bf07684.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[846927],{16097:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=r(474848),c=r(28453);const s={id:"backend-plugin-api.httpauthservice.credentials",title:"HttpAuthService.credentials()",description:"API reference for HttpAuthService.credentials()"},i=void 0,a={id:"reference/backend-plugin-api.httpauthservice.credentials",title:"HttpAuthService.credentials()",description:"API reference for HttpAuthService.credentials()",source:"@site/../docs/reference/backend-plugin-api.httpauthservice.credentials.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.httpauthservice.credentials",permalink:"/docs/next/reference/backend-plugin-api.httpauthservice.credentials",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/backend-plugin-api.httpauthservice.credentials.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-api.httpauthservice.credentials",title:"HttpAuthService.credentials()",description:"API reference for HttpAuthService.credentials()"}},d={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function o(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api",children:(0,t.jsx)(n.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api.httpauthservice",children:(0,t.jsx)(n.code,{children:"HttpAuthService"})})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api.httpauthservice.credentials",children:(0,t.jsx)(n.code,{children:"credentials"})})]}),"\n",(0,t.jsx)(n.p,{children:"Extracts the caller's credentials from a request."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"credentials<TAllowed extends keyof BackstagePrincipalTypes = 'unknown'>(\n    req: Request<any, any, any, any, any>, \n    options?: {\n        allow?: Array<TAllowed>;\n        allowLimitedAccess?: boolean;\n    }): Promise<BackstageCredentials<BackstagePrincipalTypes[TAllowed]>>;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"req"}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"Request<any, any, any, any, any>"}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"options"}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"{ allow?: Array<TAllowed>; allowLimitedAccess?: boolean; }"}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"(Optional)"})}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,t.jsxs)(n.p,{children:["Promise<",(0,t.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api.backstagecredentials",children:"BackstageCredentials"}),"<",(0,t.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api.backstageprincipaltypes",children:"BackstagePrincipalTypes"}),"[TAllowed]>>"]}),"\n",(0,t.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(n.p,{children:["The credentials have been validated before returning, and are guaranteed to adhere to whatever policies have been added to this route using ",(0,t.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api.httprouterservice.addauthpolicy",children:"HttpRouterService.addAuthPolicy()"}),", if any."]}),"\n",(0,t.jsx)(n.p,{children:"Further restrictions can be imposed by passing in options that control the allowed types of credential."}),"\n",(0,t.jsxs)(n.p,{children:["You can narrow the returned credentials object to specific principal types using ",(0,t.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api.authservice.isprincipal",children:"AuthService.isPrincipal()"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},221020:(e,n,r)=>{var t=r(296540),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,s={},l=null,o=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(o=n.ref),n)i.call(n,t)&&!d.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:c,type:e,key:l,ref:o,props:s,_owner:a.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var t=r(296540);const c={},s=t.createContext(c);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);