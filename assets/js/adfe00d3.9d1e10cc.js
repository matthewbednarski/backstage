/*! For license information please see adfe00d3.9d1e10cc.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[706976],{662114:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var c=n(474848),s=n(28453);const i={id:"backend-plugin-api.schedulerservice.scheduletask",title:"SchedulerService.scheduleTask()",description:"API reference for SchedulerService.scheduleTask()"},t=void 0,d={id:"reference/backend-plugin-api.schedulerservice.scheduletask",title:"SchedulerService.scheduleTask()",description:"API reference for SchedulerService.scheduleTask()",source:"@site/../docs/reference/backend-plugin-api.schedulerservice.scheduletask.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.schedulerservice.scheduletask",permalink:"/docs/next/reference/backend-plugin-api.schedulerservice.scheduletask",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/backend-plugin-api.schedulerservice.scheduletask.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-api.schedulerservice.scheduletask",title:"SchedulerService.scheduleTask()",description:"API reference for SchedulerService.scheduleTask()"}},a={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function o(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,c.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api",children:(0,c.jsx)(r.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,c.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api.schedulerservice",children:(0,c.jsx)(r.code,{children:"SchedulerService"})})," > ",(0,c.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api.schedulerservice.scheduletask",children:(0,c.jsx)(r.code,{children:"scheduleTask"})})]}),"\n",(0,c.jsx)(r.p,{children:"Schedules a task function for recurring runs."}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-typescript",children:"scheduleTask(task: SchedulerServiceTaskScheduleDefinition & SchedulerServiceTaskInvocationDefinition): Promise<void>;\n"})}),"\n",(0,c.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,c.jsxs)(r.table,{children:[(0,c.jsx)(r.thead,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsxs)(r.th,{children:["\n",(0,c.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,c.jsxs)(r.th,{children:["\n",(0,c.jsx)(r.p,{children:"Type"}),"\n"]}),(0,c.jsxs)(r.th,{children:["\n",(0,c.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,c.jsx)(r.tbody,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsxs)(r.td,{children:["\n",(0,c.jsx)(r.p,{children:"task"}),"\n"]}),(0,c.jsxs)(r.td,{children:["\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api.schedulerservicetaskscheduledefinition",children:"SchedulerServiceTaskScheduleDefinition"})," & ",(0,c.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api.schedulerservicetaskinvocationdefinition",children:"SchedulerServiceTaskInvocationDefinition"})]}),"\n"]}),(0,c.jsxs)(r.td,{children:["\n",(0,c.jsx)(r.p,{children:"The task definition"}),"\n"]})]})})]}),"\n**Returns:**\n",(0,c.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,c.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,c.jsxs)(r.p,{children:["The ",(0,c.jsx)(r.code,{children:"scope"})," task field controls whether to use coordinated exclusive invocation across workers, or to just coordinate within the current worker."]}),"\n",(0,c.jsx)(r.p,{children:"This convenience method performs both the scheduling and invocation in one go."})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},221020:(e,r,n)=>{var c=n(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,d=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var c,i={},l=null,o=null;for(c in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(o=r.ref),r)t.call(r,c)&&!a.hasOwnProperty(c)&&(i[c]=r[c]);if(e&&e.defaultProps)for(c in r=e.defaultProps)void 0===i[c]&&(i[c]=r[c]);return{$$typeof:s,type:e,key:l,ref:o,props:i,_owner:d.current}}r.Fragment=i,r.jsx=l,r.jsxs=l},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>d});var c=n(296540);const s={},i=c.createContext(s);function t(e){const r=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),c.createElement(i.Provider,{value:r},e.children)}}}]);