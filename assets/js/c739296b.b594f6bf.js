/*! For license information please see c739296b.b594f6bf.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[518174],{126217:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var r=s(474848),c=s(28453);const t={id:"plugin-scaffolder-backend",title:"@backstage/plugin-scaffolder-backend",description:"API Reference for @backstage/plugin-scaffolder-backend"},i=void 0,d={id:"reference/plugin-scaffolder-backend",title:"@backstage/plugin-scaffolder-backend",description:"API Reference for @backstage/plugin-scaffolder-backend",source:"@site/../docs/reference/plugin-scaffolder-backend.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend",permalink:"/docs/next/reference/plugin-scaffolder-backend",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-scaffolder-backend.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend",title:"@backstage/plugin-scaffolder-backend",description:"API Reference for @backstage/plugin-scaffolder-backend"}},l={},a=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-scaffolder-backend"})})]}),"\n",(0,r.jsx)(n.p,{children:"The Backstage backend plugin that helps you create new things"}),"\n",(0,r.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Class"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.databasetaskstore",children:"DatabaseTaskStore"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"DatabaseTaskStore"}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskmanager",children:"TaskManager"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"TaskManager"}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskworker",children:"TaskWorker"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"TaskWorker"}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.templateactionregistry",children:"TemplateActionRegistry"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Registry of all registered template actions."}),"\n"]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Function"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createbuiltinactions",children:"createBuiltinActions(options)"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"A function to generate create a list of default actions that the scaffolder provides. Is called internally in the default setup, but can be used when adding your own actions or overriding the default ones"}),"\n",(0,r.jsx)(n.p,{children:"TODO(blam): version 2 of the scaffolder shouldn't ship with the additional modules. We should ship the basics, and let people install modules for the providers they want to use."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createcatalogregisteraction",children:"createCatalogRegisterAction(options)"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Registers entities from a catalog descriptor file in the workspace into the software catalog."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createcatalogwriteaction",children:"createCatalogWriteAction()"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Writes a catalog descriptor file containing the provided entity to a path in the workspace."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createdebuglogaction",children:"createDebugLogAction()"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Writes a message into the log or lists all files in the workspace"}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createfetchcatalogentityaction",children:"createFetchCatalogEntityAction(options)"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Returns entity or entities from the catalog by entity reference(s)."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createfetchplainaction",children:"createFetchPlainAction(options)"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Downloads content and places it in the workspace, or optionally in a subdirectory specified by the 'targetPath' input option."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createfetchplainfileaction",children:"createFetchPlainFileAction(options)"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Downloads content and places it in the workspace, or optionally in a subdirectory specified by the 'targetPath' input option."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createfetchtemplateaction",children:"createFetchTemplateAction(options)"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Downloads a skeleton, templates variables into file and directory names and content. Then places the result in the workspace, or optionally in a subdirectory specified by the 'targetPath' input option."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createfetchtemplatefileaction",children:"createFetchTemplateFileAction(options)"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Downloads a single file and templates variables into file. Then places the result in the workspace, or optionally in a subdirectory specified by the 'targetPath' input option."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createfilesystemdeleteaction",children:"createFilesystemDeleteAction()"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Creates new action that enables deletion of files and directories in the workspace."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createfilesystemreaddiraction",children:"createFilesystemReadDirAction()"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Creates new action that enables reading directories in the workspace."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createfilesystemrenameaction",children:"createFilesystemRenameAction()"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Creates a new action that allows renames of files and directories in the workspace."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createpublishgithubpullrequestaction",children:"createPublishGithubPullRequestAction(options)"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createpublishgitlabmergerequestaction",children:"createPublishGitlabMergeRequestAction(options)"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createrouter",children:"createRouter(options)"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"A method to create a router for the scaffolder backend plugin."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createtemplateaction",children:"createTemplateAction(action)"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createwaitaction",children:"createWaitAction(options)"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Waits for a certain period of time."}),"\n"]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Interface"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createbuiltinactionsoptions",children:"CreateBuiltInActionsOptions"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsxs)(n.p,{children:["The options passed to ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createbuiltinactions",children:"createBuiltinActions()"})]}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.currentclaimedtask",children:"CurrentClaimedTask"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Stores the state of the current claimed task passed to the TaskContext"}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.routeroptions",children:"RouterOptions"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"RouterOptions"}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskstore",children:"TaskStore"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"TaskStore"}),"\n"]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Variable"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.creategithubactionsdispatchaction",children:"createGithubActionsDispatchAction"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.creategithubdeploykeyaction",children:"createGithubDeployKeyAction"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.creategithubenvironmentaction",children:"createGithubEnvironmentAction"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.creategithubissueslabelaction",children:"createGithubIssuesLabelAction"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.creategithubrepocreateaction",children:"createGithubRepoCreateAction"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.creategithubrepopushaction",children:"createGithubRepoPushAction"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.creategithubwebhookaction",children:"createGithubWebhookAction"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createpublishazureaction",children:"createPublishAzureAction"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createpublishbitbucketaction",children:"createPublishBitbucketAction"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createpublishbitbucketcloudaction",children:"createPublishBitbucketCloudAction"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createpublishbitbucketserveraction",children:"createPublishBitbucketServerAction"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createpublishbitbucketserverpullrequestaction",children:"createPublishBitbucketServerPullRequestAction"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createpublishgerritaction",children:"createPublishGerritAction"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createpublishgerritreviewaction",children:"createPublishGerritReviewAction"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createpublishgithubaction",children:"createPublishGithubAction"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createpublishgitlabaction",children:"createPublishGitlabAction"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.executeshellcommand",children:"executeShellCommand"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Run a command in a sub-process, normally a shell command."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.fetchcontents",children:"fetchContents"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"A helper function that reads the contents of a directory from the given URL. Can be used in your own actions, and also used behind fetch:template and fetch:plain"}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.scaffolderentitiesprocessor",children:"ScaffolderEntitiesProcessor"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Adds support for scaffolder specific entity kinds to the catalog."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.scaffolderplugin",children:"scaffolderPlugin"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Scaffolder plugin"}),"\n"]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Type Alias"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.actioncontext",children:"ActionContext"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.actionpermissionruleinput",children:"ActionPermissionRuleInput"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.creategithubpullrequestactionoptions",children:"CreateGithubPullRequestActionOptions"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createworkeroptions",children:"CreateWorkerOptions"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"CreateWorkerOptions"}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.databasetaskstoreoptions",children:"DatabaseTaskStoreOptions"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"DatabaseTaskStore"}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.runcommandoptions",children:"RunCommandOptions"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsxs)(n.p,{children:["Options for ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.executeshellcommand",children:"executeShellCommand"}),"."]}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.serializedtask",children:"SerializedTask"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"SerializedTask"}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.serializedtaskevent",children:"SerializedTaskEvent"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"SerializedTaskEvent"}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskbroker",children:"TaskBroker"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"TaskBroker"}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskbrokerdispatchoptions",children:"TaskBrokerDispatchOptions"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsxs)(n.p,{children:["The options passed to ",(0,r.jsx)(n.code,{children:"TaskBroker.dispatch"}),". Currently a spec and optional secrets"]}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskbrokerdispatchresult",children:"TaskBrokerDispatchResult"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsxs)(n.p,{children:["The result of ",(0,r.jsx)(n.code,{children:"TaskBroker.dispatch"}),"."]}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskcompletionstate",children:"TaskCompletionState"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"The state of a completed task."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskcontext",children:"TaskContext"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Task"}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskeventtype",children:"TaskEventType"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"TaskEventType"}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.tasksecrets",children:"TaskSecrets"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskstatus",children:"TaskStatus"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"The status of each step of the Task"}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskstorecreatetaskoptions",children:"TaskStoreCreateTaskOptions"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsxs)(n.p,{children:["The options passed to ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskstore.createtask",children:"TaskStore.createTask()"})]}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskstorecreatetaskresult",children:"TaskStoreCreateTaskResult"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsxs)(n.p,{children:["The response from ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskstore.createtask",children:"TaskStore.createTask()"})]}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskstoreemitoptions",children:"TaskStoreEmitOptions"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"TaskStoreEmitOptions"}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskstorelisteventsoptions",children:"TaskStoreListEventsOptions"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"TaskStoreListEventsOptions"}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskstorerecovertaskoptions",children:"TaskStoreRecoverTaskOptions"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsxs)(n.p,{children:["The options passed to ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskstore.recovertasks",children:"TaskStore.recoverTasks()"})]}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskstoreshutdowntaskoptions",children:"TaskStoreShutDownTaskOptions"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"TaskStoreShutDownTaskOptions"}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.templateaction",children:"TemplateAction"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.templatefilter",children:"TemplateFilter"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.templateglobal",children:"TemplateGlobal"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.templatepermissionruleinput",children:"TemplatePermissionRuleInput"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]})]})]})]})}function o(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},221020:(e,n,s)=>{var r=s(296540),c=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var r,t={},a=null,h=null;for(r in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(h=n.ref),n)i.call(n,r)&&!l.hasOwnProperty(r)&&(t[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===t[r]&&(t[r]=n[r]);return{$$typeof:c,type:e,key:a,ref:h,props:t,_owner:d.current}}n.Fragment=t,n.jsx=a,n.jsxs=a},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var r=s(296540);const c={},t=r.createContext(c);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);