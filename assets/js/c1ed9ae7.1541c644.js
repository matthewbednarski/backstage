/*! For license information please see c1ed9ae7.1541c644.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[359734],{127893:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var t=r(474848),s=r(28453);const o={id:"plugin-scaffolder-node.commitandpushrepo",title:"commitAndPushRepo()",description:"API reference for commitAndPushRepo()"},i=void 0,c={id:"reference/plugin-scaffolder-node.commitandpushrepo",title:"commitAndPushRepo()",description:"API reference for commitAndPushRepo()",source:"@site/../docs/reference/plugin-scaffolder-node.commitandpushrepo.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-node.commitandpushrepo",permalink:"/docs/next/reference/plugin-scaffolder-node.commitandpushrepo",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-scaffolder-node.commitandpushrepo.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-node.commitandpushrepo",title:"commitAndPushRepo()",description:"API reference for commitAndPushRepo()"}},d={},a=[{value:"Parameters",id:"parameters",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-node",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-scaffolder-node"})})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-node.commitandpushrepo",children:(0,t.jsx)(n.code,{children:"commitAndPushRepo"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"function commitAndPushRepo(input: {\n    dir: string;\n    auth: {\n        username: string;\n        password: string;\n    } | {\n        token: string;\n    };\n    logger: Logger;\n    commitMessage: string;\n    gitAuthorInfo?: {\n        name?: string;\n        email?: string;\n    };\n    branch?: string;\n    remoteRef?: string;\n}): Promise<{\n    commitHash: string;\n}>;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"input"}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"{ dir: string; auth: { username: string; password: string; } | { token: string; }; logger: Logger; commitMessage: string; gitAuthorInfo?: { name?: string; email?: string; }; branch?: string; remoteRef?: string; }"}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,t.jsx)(n.p,{children:"Promise<{ commitHash: string; }>"})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,n,r)=>{var t=r(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var t,o={},a=null,l=null;for(t in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,t)&&!d.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:s,type:e,key:a,ref:l,props:o,_owner:c.current}}n.Fragment=o,n.jsx=a,n.jsxs=a},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var t=r(296540);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);