/*! For license information please see cd58a639.f174c7ba.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[782708],{188520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var i=n(474848),r=n(28453);const c={id:"plugin-scaffolder-backend-module-bitbucket.createpublishbitbucketaction",title:"createPublishBitbucketAction()",description:"API reference for createPublishBitbucketAction()"},s=void 0,o={id:"reference/plugin-scaffolder-backend-module-bitbucket.createpublishbitbucketaction",title:"createPublishBitbucketAction()",description:"API reference for createPublishBitbucketAction()",source:"@site/../docs/reference/plugin-scaffolder-backend-module-bitbucket.createpublishbitbucketaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend-module-bitbucket.createpublishbitbucketaction",permalink:"/docs/next/reference/plugin-scaffolder-backend-module-bitbucket.createpublishbitbucketaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-scaffolder-backend-module-bitbucket.createpublishbitbucketaction.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend-module-bitbucket.createpublishbitbucketaction",title:"createPublishBitbucketAction()",description:"API reference for createPublishBitbucketAction()"}},a={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,i.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-backend-module-bitbucket",children:(0,i.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-bitbucket"})})," > ",(0,i.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-backend-module-bitbucket.createpublishbitbucketaction",children:(0,i.jsx)(t.code,{children:"createPublishBitbucketAction"})})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Warning: This API is now obsolete."}),"\n",(0,i.jsx)(t.p,{children:'in favor of "createPublishBitbucketCloudAction" by @backstage/plugin-scaffolder-backend-module-bitbucket-cloud and "createPublishBitbucketServerAction" by @backstage/plugin-scaffolder-backend-module-bitbucket-server'}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Creates a new action that initializes a git repository of the content in the workspace and publishes it to Bitbucket."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'function createPublishBitbucketAction(options: {\n    integrations: ScmIntegrationRegistry;\n    config: Config;\n}): import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    repoUrl: string;\n    description?: string | undefined;\n    defaultBranch?: string | undefined;\n    repoVisibility?: "private" | "public" | undefined;\n    sourcePath?: string | undefined;\n    enableLFS?: boolean | undefined;\n    token?: string | undefined;\n    gitCommitMessage?: string | undefined;\n    gitAuthorName?: string | undefined;\n    gitAuthorEmail?: string | undefined;\n}, import("@backstage/types").JsonObject>;\n'})}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.th,{children:["\n",(0,i.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,i.jsxs)(t.th,{children:["\n",(0,i.jsx)(t.p,{children:"Type"}),"\n"]}),(0,i.jsxs)(t.th,{children:["\n",(0,i.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["\n",(0,i.jsx)(t.p,{children:"options"}),"\n"]}),(0,i.jsxs)(t.td,{children:["\n",(0,i.jsxs)(t.p,{children:["{ integrations: ",(0,i.jsx)(t.a,{href:"/docs/next/reference/integration.scmintegrationregistry",children:"ScmIntegrationRegistry"}),"; config: ",(0,i.jsx)(t.a,{href:"/docs/next/reference/config.config",children:"Config"}),"; }"]}),"\n"]}),(0,i.jsx)(t.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,i.jsxs)(t.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,i.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),'<{ repoUrl: string; description?: string | undefined; defaultBranch?: string | undefined; repoVisibility?: "private" | "public" | undefined; sourcePath?: string | undefined; enableLFS?: boolean | undefined; token?: string | undefined; gitCommitMessage?: string | undefined; gitAuthorName?: string | undefined; gitAuthorEmail?: string | undefined; }, import("@backstage/types").',(0,i.jsx)(t.a,{href:"/docs/next/reference/types.jsonobject",children:"JsonObject"}),">"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var i=n(296540),r=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var i,c={},d=null,l=null;for(i in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,i)&&!a.hasOwnProperty(i)&&(c[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===c[i]&&(c[i]=t[i]);return{$$typeof:r,type:e,key:d,ref:l,props:c,_owner:o.current}}t.Fragment=c,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var i=n(296540);const r={},c=i.createContext(r);function s(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);