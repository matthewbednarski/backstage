/*! For license information please see 37d3c6c8.1f3a1098.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[992880],{546575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=n(474848),i=n(28453);const s={id:"adrs-adr010",title:"ADR010: Use the Luxon Date Library",description:"Architecture Decision Record (ADR) for Luxon Date Library"},a=void 0,o={id:"architecture-decisions/adrs-adr010",title:"ADR010: Use the Luxon Date Library",description:"Architecture Decision Record (ADR) for Luxon Date Library",source:"@site/../docs/architecture-decisions/adr010-luxon-date-library.md",sourceDirName:"architecture-decisions",slug:"/architecture-decisions/adrs-adr010",permalink:"/docs/next/architecture-decisions/adrs-adr010",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/architecture-decisions/adr010-luxon-date-library.md",tags:[],version:"current",frontMatter:{id:"adrs-adr010",title:"ADR010: Use the Luxon Date Library",description:"Architecture Decision Record (ADR) for Luxon Date Library"},sidebar:"docs",previous:{title:"ADR009: Entity References",permalink:"/docs/next/architecture-decisions/adrs-adr009"},next:{title:"ADR011: Plugin Package Structure",permalink:"/docs/next/architecture-decisions/adrs-adr011"}},c={},d=[{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"context",children:"Context"}),"\n",(0,r.jsxs)(t.p,{children:["Date formatting (e.g. ",(0,r.jsx)(t.code,{children:"a day ago"}),") and calculations are common within Backstage.\nSome of these useful features are not supported by the standard JavaScript\n",(0,r.jsx)(t.code,{children:"Date"})," object. The popular ",(0,r.jsx)(t.a,{href:"https://momentjs.com/",children:"Moment.js"})," library has been\ncommonly used to fill this gap but is affected by large bundle sizes and mutable\nstate issues. On top of this, ",(0,r.jsx)(t.code,{children:"momentjs"})," is\n",(0,r.jsx)(t.a,{href:"https://momentjs.com/docs/#/-project-status/",children:"being sunset"})," and the project\nrecommends using one of the more modern alternative libraries."]}),"\n",(0,r.jsxs)(t.p,{children:["See\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/3401",children:"[RFC] Standardized Date & Time Library"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"decision",children:"Decision"}),"\n",(0,r.jsxs)(t.p,{children:["We will use ",(0,r.jsx)(t.a,{href:"https://moment.github.io/luxon/index.html",children:"Luxon"})," as the standard\ndate library within Backstage."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Luxon"})," provides a similar feature set and API to ",(0,r.jsx)(t.code,{children:"Moment.js"}),", but improves on\nits design through immutability and the usage of modern JavaScript APIs (e.g.\n",(0,r.jsx)(t.code,{children:"Intl"}),"). This results in smaller bundle sizes while providing a full feature set\nand avoids the need for using additional libraries for common date & time tasks."]}),"\n",(0,r.jsx)(t.h2,{id:"consequences",children:"Consequences"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["All core packages and plugins within Backstage should use ",(0,r.jsx)(t.code,{children:"Luxon"})," for any date\nmanipulation or formatting that cannot be easily accomplished with the native\nJavaScript ",(0,r.jsx)(t.code,{children:"Date"})," object."]}),"\n",(0,r.jsx)(t.li,{children:"Using a single date library avoids having to learn multiple library APIs"}),"\n",(0,r.jsx)(t.li,{children:"Having a single date library will reduce bundle sizes"}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var r=n(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,s={},d=null,l=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:d,ref:l,props:s,_owner:o.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(296540);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);