/*! For license information please see 6328d0e7.c01dc806.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[604968],{800322:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var n=r(474848),i=r(28453);const c={id:"integration.getgithubfilefetchurl",title:"getGithubFileFetchUrl()",description:"API reference for getGithubFileFetchUrl()"},s=void 0,o={id:"reference/integration.getgithubfilefetchurl",title:"getGithubFileFetchUrl()",description:"API reference for getGithubFileFetchUrl()",source:"@site/versioned_docs/version-stable/reference/integration.getgithubfilefetchurl.md",sourceDirName:"reference",slug:"/reference/integration.getgithubfilefetchurl",permalink:"/docs/reference/integration.getgithubfilefetchurl",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/integration.getgithubfilefetchurl.md",tags:[],version:"stable",frontMatter:{id:"integration.getgithubfilefetchurl",title:"getGithubFileFetchUrl()",description:"API reference for getGithubFileFetchUrl()"}},a={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/integration",children:(0,n.jsx)(t.code,{children:"@backstage/integration"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/integration.getgithubfilefetchurl",children:(0,n.jsx)(t.code,{children:"getGithubFileFetchUrl"})})]}),"\n",(0,n.jsx)(t.p,{children:"Given a URL pointing to a file on a provider, returns a URL that is suitable for fetching the contents of the data."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"function getGithubFileFetchUrl(url: string, config: GithubIntegrationConfig, credentials: GithubCredentials): string;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"url"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"A URL pointing to a file"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"config"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/integration.githubintegrationconfig",children:"GithubIntegrationConfig"})}),(0,n.jsx)(t.td,{children:"The relevant provider config"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"credentials"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/integration.githubcredentials",children:"GithubCredentials"})}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"string"}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(t.p,{children:["Converts from: ",(0,n.jsx)(t.a,{href:"https://github.com/a/b/blob/branchname/path/to/c.yaml",children:"https://github.com/a/b/blob/branchname/path/to/c.yaml"})," to: ",(0,n.jsx)(t.a,{href:"https://api.github.com/repos/a/b/contents/path/to/c.yaml?ref=branchname",children:"https://api.github.com/repos/a/b/contents/path/to/c.yaml?ref=branchname"})," or: ",(0,n.jsx)(t.a,{href:"https://raw.githubusercontent.com/a/b/branchname/c.yaml",children:"https://raw.githubusercontent.com/a/b/branchname/c.yaml"})]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,t,r)=>{var n=r(296540),i=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,r){var n,c={},h=null,l=null;for(n in void 0!==r&&(h=""+r),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,n)&&!a.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:i,type:e,key:h,ref:l,props:c,_owner:o.current}}t.Fragment=c,t.jsx=h,t.jsxs=h},474848:(e,t,r)=>{e.exports=r(221020)},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var n=r(296540);const i={},c=n.createContext(i);function s(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);