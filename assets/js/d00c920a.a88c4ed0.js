/*! For license information please see d00c920a.a88c4ed0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[235336],{739185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=n(474848),r=n(28453);const s={id:"adrs-adr012",title:"ADR012: Use Luxon.toLocaleString and date/time presets",description:"Architecture Decision Record (ADR) for using Luxon's toLocaleString method and date/time presets for displaying dates and times"},o=void 0,a={id:"architecture-decisions/adrs-adr012",title:"ADR012: Use Luxon.toLocaleString and date/time presets",description:"Architecture Decision Record (ADR) for using Luxon's toLocaleString method and date/time presets for displaying dates and times",source:"@site/../docs/architecture-decisions/adr012-use-luxon-locale-and-date-presets.md",sourceDirName:"architecture-decisions",slug:"/architecture-decisions/adrs-adr012",permalink:"/docs/next/architecture-decisions/adrs-adr012",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/architecture-decisions/adr012-use-luxon-locale-and-date-presets.md",tags:[],version:"current",frontMatter:{id:"adrs-adr012",title:"ADR012: Use Luxon.toLocaleString and date/time presets",description:"Architecture Decision Record (ADR) for using Luxon's toLocaleString method and date/time presets for displaying dates and times"},sidebar:"docs",previous:{title:"ADR011: Plugin Package Structure",permalink:"/docs/next/architecture-decisions/adrs-adr011"},next:{title:"ADR013: [superseded] Proper use of HTTP fetching libraries",permalink:"/docs/next/architecture-decisions/adrs-adr013"}},d={},c=[{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"context",children:"Context"}),"\n",(0,i.jsxs)(t.p,{children:["User's locales will have their own style of reading dates. It's counter\nintuitive to not have dates formatted in their familiar formats, it can cause\nusers to have to think harder about what the date is and could even lead to\ninterpreting dates incorrectly (e.g. 05/03/2021, this could be March 5th or May\n3rd, depending on where the user is). At the moment, plugins are defining dates\nand times using custom formats and the ",(0,i.jsx)(t.code,{children:"toFormat"})," method, which leads to\ninconsistent and unfamiliar formats."]}),"\n",(0,i.jsx)(t.h2,{id:"decision",children:"Decision"}),"\n",(0,i.jsxs)(t.p,{children:["To keep the UI consistent and familiar to users, irrespective of their location,\nwe have decided that we use ",(0,i.jsx)(t.code,{children:"toLocaleString"})," and Luxon's\n",(0,i.jsx)(t.a,{href:"https://github.com/moment/luxon/blob/master/docs/formatting.md#presets",children:"extensive list"}),"\nof Date and Time presets."]}),"\n",(0,i.jsx)(t.p,{children:"Here is an example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"const date = new luxon.DateTime();\n\n/* Avoid this: */\ndate.toFormat('yyyy LLL dd'); // 2014 Aug 06\ndate.toFormat('yyyy LLL dd hh:mm'); // 2014 Aug 06 12:01\n\n/* Do this instead: */\ndate.toLocaleString(luxon.DateTime.DATE_MED); // US: Oct 14, 1983 | FR: 14 oct. 1983\ndate.toLocaleString(luxon.DateTime.DATETIME_MED); // US: Oct 14, 1983, 9:30 | FR: 14 oct. 1983 9:30\n"})}),"\n",(0,i.jsx)(t.h2,{id:"consequences",children:"Consequences"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"We will need to audit the current places Date/Times are being displayed in the\nUI and update them to follow this ADR."}),"\n",(0,i.jsx)(t.li,{children:"We will need to keep in mind for reviewing PRs going forward to follow this\nADR, or find/create a linting rule to automate this in the review process."}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var i=n(296540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var i,s={},c=null,l=null;for(i in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,i)&&!d.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:r,type:e,key:c,ref:l,props:s,_owner:a.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(296540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);