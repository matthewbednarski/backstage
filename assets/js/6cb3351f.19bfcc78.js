/*! For license information please see 6cb3351f.19bfcc78.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[322698],{28111:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var i=r(474848),c=r(28453);const t={id:"backend-plugin-api.schedulerservicetaskscheduledefinition.frequency",title:"SchedulerServiceTaskScheduleDefinition.frequency",description:"API reference for SchedulerServiceTaskScheduleDefinition.frequency"},s=void 0,o={id:"reference/backend-plugin-api.schedulerservicetaskscheduledefinition.frequency",title:"SchedulerServiceTaskScheduleDefinition.frequency",description:"API reference for SchedulerServiceTaskScheduleDefinition.frequency",source:"@site/../docs/reference/backend-plugin-api.schedulerservicetaskscheduledefinition.frequency.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.schedulerservicetaskscheduledefinition.frequency",permalink:"/docs/next/reference/backend-plugin-api.schedulerservicetaskscheduledefinition.frequency",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/backend-plugin-api.schedulerservicetaskscheduledefinition.frequency.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-api.schedulerservicetaskscheduledefinition.frequency",title:"SchedulerServiceTaskScheduleDefinition.frequency",description:"API reference for SchedulerServiceTaskScheduleDefinition.frequency"}},a={},d=[{value:"Remarks",id:"remarks",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,i.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api",children:(0,i.jsx)(n.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,i.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api.schedulerservicetaskscheduledefinition",children:(0,i.jsx)(n.code,{children:"SchedulerServiceTaskScheduleDefinition"})})," > ",(0,i.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api.schedulerservicetaskscheduledefinition.frequency",children:(0,i.jsx)(n.code,{children:"frequency"})})]}),"\n",(0,i.jsx)(n.p,{children:"How often you want the task to run. The system does its best to avoid overlapping invocations."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"frequency: {\n        cron: string;\n    } | Duration | HumanDuration | {\n        trigger: 'manual';\n    };\n"})}),"\n",(0,i.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsx)(n.p,{children:"This is the best effort value; under some circumstances there can be deviations. For example, if the task runtime is longer than the frequency and the timeout has not been given or not been exceeded yet, the next invocation of this task will be delayed until after the previous one finishes."}),"\n",(0,i.jsx)(n.p,{children:"This is a required field."})]})}function l(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},221020:(e,n,r)=>{var i=r(296540),c=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var i,t={},d=null,u=null;for(i in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(u=n.ref),n)s.call(n,i)&&!a.hasOwnProperty(i)&&(t[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===t[i]&&(t[i]=n[i]);return{$$typeof:c,type:e,key:d,ref:u,props:t,_owner:o.current}}n.Fragment=t,n.jsx=d,n.jsxs=d},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>o});var i=r(296540);const c={},t=i.createContext(c);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);