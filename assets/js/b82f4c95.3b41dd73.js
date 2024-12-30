/*! For license information please see b82f4c95.3b41dd73.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[583372],{286258:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var r=s(474848),n=s(28453);const a={id:"plugin-scaffolder-backend.databasetaskstore.list",title:"DatabaseTaskStore.list()",description:"API reference for DatabaseTaskStore.list()"},c=void 0,i={id:"reference/plugin-scaffolder-backend.databasetaskstore.list",title:"DatabaseTaskStore.list()",description:"API reference for DatabaseTaskStore.list()",source:"@site/../docs/reference/plugin-scaffolder-backend.databasetaskstore.list.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend.databasetaskstore.list",permalink:"/docs/next/reference/plugin-scaffolder-backend.databasetaskstore.list",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-scaffolder-backend.databasetaskstore.list.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend.databasetaskstore.list",title:"DatabaseTaskStore.list()",description:"API reference for DatabaseTaskStore.list()"}},d={},o=[{value:"Parameters",id:"parameters",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-backend",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-backend.databasetaskstore",children:(0,r.jsx)(t.code,{children:"DatabaseTaskStore"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-backend.databasetaskstore.list",children:(0,r.jsx)(t.code,{children:"list"})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"list(options: {\n        createdBy?: string;\n        status?: TaskStatus;\n        filters?: {\n            createdBy?: string | string[];\n            status?: TaskStatus | TaskStatus[];\n        };\n        pagination?: {\n            limit?: number;\n            offset?: number;\n        };\n        order?: {\n            order: 'asc' | 'desc';\n            field: string;\n        }[];\n    }): Promise<{\n        tasks: SerializedTask[];\n        totalTasks?: number;\n    }>;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"options"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsxs)(t.p,{children:["{ createdBy?: string; status?: ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-node.taskstatus",children:"TaskStatus"}),"; filters?: { createdBy?: string | string[]; status?: ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-node.taskstatus",children:"TaskStatus"})," | ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-node.taskstatus",children:"TaskStatus"}),"[]; }; pagination?: { limit?: number; offset?: number; }; order?: { order: 'asc' | 'desc'; field: string; }[]; }"]}),"\n"]}),(0,r.jsx)(t.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,r.jsxs)(t.p,{children:["Promise<{ tasks: ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-node.serializedtask",children:"SerializedTask"}),"[]; totalTasks?: number; }>"]})]})}function f(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,t,s)=>{var r=s(296540),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,s){var r,a={},o=null,l=null;for(r in void 0!==s&&(o=""+s),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,r)&&!d.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:n,type:e,key:o,ref:l,props:a,_owner:i.current}}t.Fragment=a,t.jsx=o,t.jsxs=o},474848:(e,t,s)=>{e.exports=s(221020)},28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>i});var r=s(296540);const n={},a=r.createContext(n);function c(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);