/*! For license information please see 5d5a8d88.c031e998.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[677878],{175691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=n(474848),s=n(28453);const r={id:"create-a-component",title:"Create a Component",description:"Leverage the scaffolder to start creating components with best practices."},i=void 0,a={id:"getting-started/create-a-component",title:"Create a Component",description:"Leverage the scaffolder to start creating components with best practices.",source:"@site/versioned_docs/version-stable/getting-started/create-a-component.md",sourceDirName:"getting-started",slug:"/getting-started/create-a-component",permalink:"/docs/getting-started/create-a-component",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/getting-started/create-a-component.md",tags:[],version:"stable",frontMatter:{id:"create-a-component",title:"Create a Component",description:"Leverage the scaffolder to start creating components with best practices."},sidebar:"docs",previous:{title:"Registering a Component",permalink:"/docs/getting-started/register-a-component"},next:{title:"Keeping Backstage Updated",permalink:"/docs/getting-started/keeping-backstage-updated"}},c={},d=[{value:"Summary",id:"summary",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating your component",id:"creating-your-component",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Audience: Developers"}),"\n",(0,o.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,o.jsx)(t.p,{children:"This guide will walk you through how to use Software Templates to create new components with baked in best practices."}),"\n",(0,o.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["If you're running Backstage with Node 20 or later, you'll need to pass the flag ",(0,o.jsx)(t.code,{children:"--no-node-snapshot"})," to Node in order to use the templates feature. One way to do this is to specify the ",(0,o.jsx)(t.code,{children:"NODE_OPTIONS"})," environment variable before starting Backstage: ",(0,o.jsx)(t.code,{children:"export NODE_OPTIONS=--no-node-snapshot"})]})}),"\n",(0,o.jsxs)(t.p,{children:["You should already have ",(0,o.jsx)(t.a,{href:"/docs/getting-started/",children:"a standalone app"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["You will also need to register the ",(0,o.jsx)(t.a,{href:"/docs/features/software-templates/builtin-actions#installing-action-modules",children:"GitHub Scaffolder Action module"})," before moving forward."]}),"\n",(0,o.jsx)(t.h2,{id:"creating-your-component",children:"Creating your component"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Go to ",(0,o.jsx)(t.code,{children:"create"})," and choose to create a website with the ",(0,o.jsx)(t.code,{children:"Example Node.js Template"})]}),"\n",(0,o.jsxs)(t.li,{children:["Type in a name, let's use ",(0,o.jsx)(t.code,{children:"tutorial"})," and click ",(0,o.jsx)(t.code,{children:"Next Step"})]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Software template deployment input screen asking for a name",src:n(84209).A+"",width:"926",height:"387"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"You should see the following screen:"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Software template deployment input screen asking for the GitHub username, and name of the new repo to create",src:n(154042).A+"",width:"985",height:"639"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"For host, it should default to github.com"}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"As owner, type your GitHub username"}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["For the repository name, type ",(0,o.jsx)(t.code,{children:"tutorial"}),". Go to the next step"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Review the details of this new service, and press ",(0,o.jsx)(t.code,{children:"Create"})," if you want to\ndeploy it like this."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"You can follow along with the progress, and as soon as every step is\nfinished, you can take a look at your new service"}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var o=n(296540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var o,r={},d=null,l=null;for(o in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,o)&&!c.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===r[o]&&(r[o]=t[o]);return{$$typeof:s,type:e,key:d,ref:l,props:r,_owner:a.current}}t.Fragment=r,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},84209:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/b-scaffold-1-871f837941da85da9ca44153daa3d425.png"},154042:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/b-scaffold-2-70becaccaa4539823f1dde9492f06e0f.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(296540);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);