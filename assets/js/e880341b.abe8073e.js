/*! For license information please see e880341b.abe8073e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[683280],{323865:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=r(474848),t=r(28453);const s={id:"plugin-scaffolder-backend-module-github.creategithubrepocreateaction",title:"createGithubRepoCreateAction()",description:"API reference for createGithubRepoCreateAction()"},o=void 0,d={id:"reference/plugin-scaffolder-backend-module-github.creategithubrepocreateaction",title:"createGithubRepoCreateAction()",description:"API reference for createGithubRepoCreateAction()",source:"@site/../docs/reference/plugin-scaffolder-backend-module-github.creategithubrepocreateaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend-module-github.creategithubrepocreateaction",permalink:"/docs/next/reference/plugin-scaffolder-backend-module-github.creategithubrepocreateaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-scaffolder-backend-module-github.creategithubrepocreateaction.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend-module-github.creategithubrepocreateaction",title:"createGithubRepoCreateAction()",description:"API reference for createGithubRepoCreateAction()"}},a={},c=[{value:"Parameters",id:"parameters",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend-module-github",children:(0,i.jsx)(n.code,{children:"@backstage/plugin-scaffolder-backend-module-github"})})," > ",(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend-module-github.creategithubrepocreateaction",children:(0,i.jsx)(n.code,{children:"createGithubRepoCreateAction"})})]}),"\n",(0,i.jsx)(n.p,{children:"Creates a new action that initializes a git repository"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'function createGithubRepoCreateAction(options: {\n    integrations: ScmIntegrationRegistry;\n    githubCredentialsProvider?: GithubCredentialsProvider;\n}): import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    repoUrl: string;\n    description?: string | undefined;\n    homepage?: string | undefined;\n    access?: string | undefined;\n    deleteBranchOnMerge?: boolean | undefined;\n    gitAuthorName?: string | undefined;\n    gitAuthorEmail?: string | undefined;\n    allowRebaseMerge?: boolean | undefined;\n    allowSquashMerge?: boolean | undefined;\n    squashMergeCommitTitle?: "PR_TITLE" | "COMMIT_OR_PR_TITLE" | undefined;\n    squashMergeCommitMessage?: "PR_BODY" | "COMMIT_MESSAGES" | "BLANK" | undefined;\n    allowMergeCommit?: boolean | undefined;\n    allowAutoMerge?: boolean | undefined;\n    requireCodeOwnerReviews?: boolean | undefined;\n    bypassPullRequestAllowances?: {\n        users?: string[] | undefined;\n        teams?: string[] | undefined;\n        apps?: string[] | undefined;\n    } | undefined;\n    requiredApprovingReviewCount?: number | undefined;\n    restrictions?: {\n        users: string[];\n        teams: string[];\n        apps?: string[] | undefined;\n    } | undefined;\n    requiredStatusCheckContexts?: string[] | undefined;\n    requireBranchesToBeUpToDate?: boolean | undefined;\n    requiredConversationResolution?: boolean | undefined;\n    repoVisibility?: "internal" | "private" | "public" | undefined;\n    collaborators?: ({\n        user: string;\n        access: string;\n    } | {\n        team: string;\n        access: string;\n    } | {\n        username: string;\n        access: \'pull\' | \'push\' | \'admin\' | \'maintain\' | \'triage\';\n    })[] | undefined;\n    hasProjects?: boolean | undefined;\n    hasWiki?: boolean | undefined;\n    hasIssues?: boolean | undefined;\n    token?: string | undefined;\n    topics?: string[] | undefined;\n    repoVariables?: {\n        [key: string]: string;\n    } | undefined;\n    secrets?: {\n        [key: string]: string;\n    } | undefined;\n    oidcCustomization?: {\n        useDefault: boolean;\n        includeClaimKeys?: string[] | undefined;\n    } | undefined;\n    requireCommitSigning?: boolean | undefined;\n    requiredLinearHistory?: boolean | undefined;\n    customProperties?: {\n        [key: string]: string;\n    } | undefined;\n}, import("@backstage/types").JsonObject>;\n'})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Type"}),"\n"]}),(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:"options"}),"\n"]}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsxs)(n.p,{children:["{ integrations: ",(0,i.jsx)(n.a,{href:"/docs/next/reference/integration.scmintegrationregistry",children:"ScmIntegrationRegistry"}),"; githubCredentialsProvider?: ",(0,i.jsx)(n.a,{href:"/docs/next/reference/integration.githubcredentialsprovider",children:"GithubCredentialsProvider"}),"; }"]}),"\n"]}),(0,i.jsx)(n.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,i.jsxs)(n.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),'<{ repoUrl: string; description?: string | undefined; homepage?: string | undefined; access?: string | undefined; deleteBranchOnMerge?: boolean | undefined; gitAuthorName?: string | undefined; gitAuthorEmail?: string | undefined; allowRebaseMerge?: boolean | undefined; allowSquashMerge?: boolean | undefined; squashMergeCommitTitle?: "PR_TITLE" | "COMMIT_OR_PR_TITLE" | undefined; squashMergeCommitMessage?: "PR_BODY" | "COMMIT_MESSAGES" | "BLANK" | undefined; allowMergeCommit?: boolean | undefined; allowAutoMerge?: boolean | undefined; requireCodeOwnerReviews?: boolean | undefined; bypassPullRequestAllowances?: { users?: string[] | undefined; teams?: string[] | undefined; apps?: string[] | undefined; } | undefined; requiredApprovingReviewCount?: number | undefined; restrictions?: { users: string[]; teams: string[]; apps?: string[] | undefined; } | undefined; requiredStatusCheckContexts?: string[] | undefined; requireBranchesToBeUpToDate?: boolean | undefined; requiredConversationResolution?: boolean | undefined; repoVisibility?: "internal" | "private" | "public" | undefined; collaborators?: ({ user: string; access: string; } | { team: string; access: string; } | { username: string; access: \'pull\' | \'push\' | \'admin\' | \'maintain\' | \'triage\'; })[] | undefined; hasProjects?: boolean | undefined; hasWiki?: boolean | undefined; hasIssues?: boolean | undefined; token?: string | undefined; topics?: string[] | undefined; repoVariables?: { [key: string]: string; } | undefined; secrets?: { [key: string]: string; } | undefined; oidcCustomization?: { useDefault: boolean; includeClaimKeys?: string[] | undefined; } | undefined; requireCommitSigning?: boolean | undefined; requiredLinearHistory?: boolean | undefined; customProperties?: { [key: string]: string; } | undefined; }, import("@backstage/types").',(0,i.jsx)(n.a,{href:"/docs/next/reference/types.jsonobject",children:"JsonObject"}),">"]})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},221020:(e,n,r)=>{var i=r(296540),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var i,s={},c=null,u=null;for(i in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(u=n.ref),n)o.call(n,i)&&!a.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===s[i]&&(s[i]=n[i]);return{$$typeof:t,type:e,key:c,ref:u,props:s,_owner:d.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var i=r(296540);const t={},s=i.createContext(t);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);