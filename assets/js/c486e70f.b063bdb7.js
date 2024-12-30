/*! For license information please see c486e70f.b063bdb7.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[666886],{276990:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=r(474848),i=r(28453);const s={id:"integration.singleinstancegithubcredentialsprovider.getcredentials",title:"SingleInstanceGithubCredentialsProvider.getCredentials()",description:"API reference for SingleInstanceGithubCredentialsProvider.getCredentials()"},a=void 0,c={id:"reference/integration.singleinstancegithubcredentialsprovider.getcredentials",title:"SingleInstanceGithubCredentialsProvider.getCredentials()",description:"API reference for SingleInstanceGithubCredentialsProvider.getCredentials()",source:"@site/../docs/reference/integration.singleinstancegithubcredentialsprovider.getcredentials.md",sourceDirName:"reference",slug:"/reference/integration.singleinstancegithubcredentialsprovider.getcredentials",permalink:"/docs/next/reference/integration.singleinstancegithubcredentialsprovider.getcredentials",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/integration.singleinstancegithubcredentialsprovider.getcredentials.md",tags:[],version:"current",frontMatter:{id:"integration.singleinstancegithubcredentialsprovider.getcredentials",title:"SingleInstanceGithubCredentialsProvider.getCredentials()",description:"API reference for SingleInstanceGithubCredentialsProvider.getCredentials()"}},d={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/integration",children:(0,t.jsx)(n.code,{children:"@backstage/integration"})})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/integration.singleinstancegithubcredentialsprovider",children:(0,t.jsx)(n.code,{children:"SingleInstanceGithubCredentialsProvider"})})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/integration.singleinstancegithubcredentialsprovider.getcredentials",children:(0,t.jsx)(n.code,{children:"getCredentials"})})]}),"\n",(0,t.jsxs)(n.p,{children:["Returns ",(0,t.jsx)(n.a,{href:"/docs/next/reference/integration.githubcredentials",children:"GithubCredentials"})," for a given URL."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"getCredentials(opts: {\n        url: string;\n    }): Promise<GithubCredentials>;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"opts"}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"{ url: string; }"}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"The organization or repository URL"}),"\n"]})]})})]}),"\n**Returns:**\n",(0,t.jsxs)(n.p,{children:["Promise<",(0,t.jsx)(n.a,{href:"/docs/next/reference/integration.githubcredentials",children:"GithubCredentials"}),">"]}),"\n",(0,t.jsxs)(n.p,{children:["A promise of ",(0,t.jsx)(n.a,{href:"/docs/next/reference/integration.githubcredentials",children:"GithubCredentials"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsx)(n.p,{children:"Consecutive calls to this method with the same URL will return cached credentials."}),"\n",(0,t.jsx)(n.p,{children:"The shortest lifetime for a token returned is 10 minutes."}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const { token, headers } = await getCredentials({\n  url: 'github.com/backstage/foobar'\n})\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},221020:(e,n,r)=>{var t=r(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,s={},l=null,o=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(o=n.ref),n)a.call(n,t)&&!d.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:i,type:e,key:l,ref:o,props:s,_owner:c.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>c});var t=r(296540);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);