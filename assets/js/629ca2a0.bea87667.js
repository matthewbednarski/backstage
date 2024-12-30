/*! For license information please see 629ca2a0.bea87667.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[880013],{127386:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=r(474848),i=r(28453);const o={id:"integration.getgitlabfilefetchurl",title:"getGitLabFileFetchUrl()",description:"API reference for getGitLabFileFetchUrl()"},s=void 0,a={id:"reference/integration.getgitlabfilefetchurl",title:"getGitLabFileFetchUrl()",description:"API reference for getGitLabFileFetchUrl()",source:"@site/versioned_docs/version-stable/reference/integration.getgitlabfilefetchurl.md",sourceDirName:"reference",slug:"/reference/integration.getgitlabfilefetchurl",permalink:"/docs/reference/integration.getgitlabfilefetchurl",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/integration.getgitlabfilefetchurl.md",tags:[],version:"stable",frontMatter:{id:"integration.getgitlabfilefetchurl",title:"getGitLabFileFetchUrl()",description:"API reference for getGitLabFileFetchUrl()"}},c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/integration",children:(0,n.jsx)(t.code,{children:"@backstage/integration"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/integration.getgitlabfilefetchurl",children:(0,n.jsx)(t.code,{children:"getGitLabFileFetchUrl"})})]}),"\n",(0,n.jsx)(t.p,{children:"Given a URL pointing to a file on a provider, returns a URL that is suitable for fetching the contents of the data."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"function getGitLabFileFetchUrl(url: string, config: GitLabIntegrationConfig): Promise<string>;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"url"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"A URL pointing to a file"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"config"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/integration.gitlabintegrationconfig",children:"GitLabIntegrationConfig"})}),(0,n.jsx)(t.td,{children:"The relevant provider config"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"Promise<string>"}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(t.p,{children:["Converts from: ",(0,n.jsx)(t.a,{href:"https://gitlab.example.com/a/b/blob/master/c.yaml",children:"https://gitlab.example.com/a/b/blob/master/c.yaml"})," to: ",(0,n.jsx)(t.a,{href:"https://gitlab.com/api/v4/projects/projectId/repository/c.yaml?ref=master",children:"https://gitlab.com/api/v4/projects/projectId/repository/c.yaml?ref=master"})," -or- from: ",(0,n.jsx)(t.a,{href:"https://gitlab.com/groupA/teams/teamA/subgroupA/repoA/-/blob/branch/filepath",children:"https://gitlab.com/groupA/teams/teamA/subgroupA/repoA/-/blob/branch/filepath"})," to: ",(0,n.jsx)(t.a,{href:"https://gitlab.com/api/v4/projects/projectId/repository/files/filepath?ref=branch",children:"https://gitlab.com/api/v4/projects/projectId/repository/files/filepath?ref=branch"})]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},221020:(e,t,r)=>{var n=r(296540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,o={},l=null,h=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(h=t.ref),t)s.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:i,type:e,key:l,ref:h,props:o,_owner:a.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},474848:(e,t,r)=>{e.exports=r(221020)},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var n=r(296540);const i={},o=n.createContext(i);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);