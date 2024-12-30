/*! For license information please see 5de09a34.cd6ef2fd.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[764220],{482150:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var t=s(474848),o=s(28453);const c={id:"backend-tasks.taskscheduledefinitionconfig.scope",title:"TaskScheduleDefinitionConfig.scope",description:"API reference for TaskScheduleDefinitionConfig.scope"},r=void 0,i={id:"reference/backend-tasks.taskscheduledefinitionconfig.scope",title:"TaskScheduleDefinitionConfig.scope",description:"API reference for TaskScheduleDefinitionConfig.scope",source:"@site/versioned_docs/version-stable/reference/backend-tasks.taskscheduledefinitionconfig.scope.md",sourceDirName:"reference",slug:"/reference/backend-tasks.taskscheduledefinitionconfig.scope",permalink:"/docs/reference/backend-tasks.taskscheduledefinitionconfig.scope",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/backend-tasks.taskscheduledefinitionconfig.scope.md",tags:[],version:"stable",frontMatter:{id:"backend-tasks.taskscheduledefinitionconfig.scope",title:"TaskScheduleDefinitionConfig.scope",description:"API reference for TaskScheduleDefinitionConfig.scope"}},a={},d=[{value:"Remarks",id:"remarks",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-tasks",children:(0,t.jsx)(n.code,{children:"@backstage/backend-tasks"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-tasks.taskscheduledefinitionconfig",children:(0,t.jsx)(n.code,{children:"TaskScheduleDefinitionConfig"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-tasks.taskscheduledefinitionconfig.scope",children:(0,t.jsx)(n.code,{children:"scope"})})]}),"\n",(0,t.jsx)(n.p,{children:"Sets the scope of concurrency control / locking to apply for invocations of this task."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"scope?: 'global' | 'local';\n"})}),"\n",(0,t.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(n.p,{children:["When the scope is set to the default value ",(0,t.jsx)(n.code,{children:"'global'"}),", the scheduler will attempt to ensure that only one worker machine runs the task at a time, according to the given cadence. This means that as the number of worker hosts increases, the invocation frequency of this task will not go up. Instead, the load is spread randomly across hosts. This setting is useful for tasks that access shared resources, for example catalog ingestion tasks where you do not want many machines to repeatedly import the same data and trample over each other."]}),"\n",(0,t.jsxs)(n.p,{children:["When the scope is set to ",(0,t.jsx)(n.code,{children:"'local'"}),", there is no concurrency control across hosts. Each host runs the task according to the given cadence similarly to ",(0,t.jsx)(n.code,{children:"setInterval"}),", but the runtime ensures that there are no overlapping runs."]})]})}function f(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,n,s)=>{var t=s(296540),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var t,c={},d=null,l=null;for(t in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)r.call(n,t)&&!a.hasOwnProperty(t)&&(c[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===c[t]&&(c[t]=n[t]);return{$$typeof:o,type:e,key:d,ref:l,props:c,_owner:i.current}}n.Fragment=c,n.jsx=d,n.jsxs=d},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>i});var t=s(296540);const o={},c=t.createContext(o);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);