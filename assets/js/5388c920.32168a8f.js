/*! For license information please see 5388c920.32168a8f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[598597],{524149:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=n(474848),s=n(28453);const a={id:"backend-tasks.taskscheduledefinition.initialdelay",title:"TaskScheduleDefinition.initialDelay",description:"API reference for TaskScheduleDefinition.initialDelay"},r=void 0,o={id:"reference/backend-tasks.taskscheduledefinition.initialdelay",title:"TaskScheduleDefinition.initialDelay",description:"API reference for TaskScheduleDefinition.initialDelay",source:"@site/versioned_docs/version-stable/reference/backend-tasks.taskscheduledefinition.initialdelay.md",sourceDirName:"reference",slug:"/reference/backend-tasks.taskscheduledefinition.initialdelay",permalink:"/docs/reference/backend-tasks.taskscheduledefinition.initialdelay",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/backend-tasks.taskscheduledefinition.initialdelay.md",tags:[],version:"stable",frontMatter:{id:"backend-tasks.taskscheduledefinition.initialdelay",title:"TaskScheduleDefinition.initialDelay",description:"API reference for TaskScheduleDefinition.initialDelay"}},c={},l=[{value:"Remarks",id:"remarks",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(i.a,{href:"/docs/reference/backend-tasks",children:(0,t.jsx)(i.code,{children:"@backstage/backend-tasks"})})," > ",(0,t.jsx)(i.a,{href:"/docs/reference/backend-tasks.taskscheduledefinition",children:(0,t.jsx)(i.code,{children:"TaskScheduleDefinition"})})," > ",(0,t.jsx)(i.a,{href:"/docs/reference/backend-tasks.taskscheduledefinition.initialdelay",children:(0,t.jsx)(i.code,{children:"initialDelay"})})]}),"\n",(0,t.jsx)(i.p,{children:"The amount of time that should pass before the first invocation happens."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typescript",children:"initialDelay?: Duration | HumanDuration;\n"})}),"\n",(0,t.jsx)(i.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsx)(i.p,{children:"This can be useful in cold start scenarios to stagger or delay some heavy compute jobs. If no value is given for this field then the first invocation will happen as soon as possible according to the cadence."}),"\n",(0,t.jsxs)(i.p,{children:["NOTE: This is a per-worker delay. If you have a cluster of workers all collaborating on a task that has its ",(0,t.jsx)(i.code,{children:"scope"})," field set to ",(0,t.jsx)(i.code,{children:"'global'"}),', then you may still see the task being processed by other long-lived workers, while any given single worker is in its initial sleep delay time e.g. after a deployment. Therefore, this parameter is not useful for "globally" pausing work; its main intended use is for individual machines to get a chance to reach some equilibrium at startup before triggering heavy batch workloads.']})]})}function f(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},221020:(e,i,n)=>{var t=n(296540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,i,n){var t,a={},l=null,d=null;for(t in void 0!==n&&(l=""+n),void 0!==i.key&&(l=""+i.key),void 0!==i.ref&&(d=i.ref),i)r.call(i,t)&&!c.hasOwnProperty(t)&&(a[t]=i[t]);if(e&&e.defaultProps)for(t in i=e.defaultProps)void 0===a[t]&&(a[t]=i[t]);return{$$typeof:s,type:e,key:l,ref:d,props:a,_owner:o.current}}i.Fragment=a,i.jsx=l,i.jsxs=l},474848:(e,i,n)=>{e.exports=n(221020)},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>o});var t=n(296540);const s={},a=t.createContext(s);function r(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);