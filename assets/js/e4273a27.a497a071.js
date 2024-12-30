/*! For license information please see e4273a27.a497a071.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[798440],{559138:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(474848),s=t(28453);const i={id:"backend-tasks.taskscheduledefinition.frequency",title:"TaskScheduleDefinition.frequency",description:"API reference for TaskScheduleDefinition.frequency"},c=void 0,o={id:"reference/backend-tasks.taskscheduledefinition.frequency",title:"TaskScheduleDefinition.frequency",description:"API reference for TaskScheduleDefinition.frequency",source:"@site/versioned_docs/version-stable/reference/backend-tasks.taskscheduledefinition.frequency.md",sourceDirName:"reference",slug:"/reference/backend-tasks.taskscheduledefinition.frequency",permalink:"/docs/reference/backend-tasks.taskscheduledefinition.frequency",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/backend-tasks.taskscheduledefinition.frequency.md",tags:[],version:"stable",frontMatter:{id:"backend-tasks.taskscheduledefinition.frequency",title:"TaskScheduleDefinition.frequency",description:"API reference for TaskScheduleDefinition.frequency"}},a={},d=[{value:"Remarks",id:"remarks",level:2}];function f(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-tasks",children:(0,r.jsx)(n.code,{children:"@backstage/backend-tasks"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-tasks.taskscheduledefinition",children:(0,r.jsx)(n.code,{children:"TaskScheduleDefinition"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-tasks.taskscheduledefinition.frequency",children:(0,r.jsx)(n.code,{children:"frequency"})})]}),"\n",(0,r.jsx)(n.p,{children:"How often you want the task to run. The system does its best to avoid overlapping invocations."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"frequency: {\n        cron: string;\n    } | Duration | HumanDuration\n    /**\n     * This task will only run when manually triggered with the `triggerTask` method; no automatic\n     * scheduling. This is useful for locking of global tasks that should not be run concurrently.\n     */\n     | {\n        trigger: 'manual';\n    };\n"})}),"\n",(0,r.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"This is the best effort value; under some circumstances there can be deviations. For example, if the task runtime is longer than the frequency and the timeout has not been given or not been exceeded yet, the next invocation of this task will be delayed until after the previous one finishes."}),"\n",(0,r.jsx)(n.p,{children:"This is a required field."})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},221020:(e,n,t)=>{var r=t(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,i={},d=null,f=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(f=n.ref),n)c.call(n,r)&&!a.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:s,type:e,key:d,ref:f,props:i,_owner:o.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(296540);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);