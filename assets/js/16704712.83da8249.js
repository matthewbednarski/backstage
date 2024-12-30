/*! For license information please see 16704712.83da8249.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[53985],{636806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=n(474848),i=n(28453);const r={id:"index",title:"Deploying Backstage",sidebar_label:"Overview",description:"Packaging Backstage and deploying to production"},s=void 0,a={id:"deployment/index",title:"Deploying Backstage",description:"Packaging Backstage and deploying to production",source:"@site/versioned_docs/version-stable/deployment/index.md",sourceDirName:"deployment",slug:"/deployment/",permalink:"/docs/deployment/",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/deployment/index.md",tags:[],version:"stable",frontMatter:{id:"index",title:"Deploying Backstage",sidebar_label:"Overview",description:"Packaging Backstage and deploying to production"},sidebar:"docs",previous:{title:"Package Metadata",permalink:"/docs/tooling/package-metadata"},next:{title:"Scaling",permalink:"/docs/deployment/scaling"}},c={},d=[];function l(e){const t={a:"a",admonition:"admonition",em:"em",li:"li",ol:"ol",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Backstage provides tooling to build Docker images, but can be deployed with or\nwithout Docker on many different infrastructures. The ",(0,o.jsx)(t.em,{children:"best"})," way to deploy\nBackstage is in ",(0,o.jsx)(t.em,{children:"the same way"})," you deploy other software at your organization."]}),"\n",(0,o.jsx)(t.p,{children:"This documentation shows common examples that may be useful when deploying\nBackstage for the first time, or for those without established deployment\npractices."}),"\n",(0,o.jsx)(t.admonition,{title:"Note",type:"note",children:(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.em,{children:"easiest"})," way to explore Backstage is to visit the\n",(0,o.jsx)(t.a,{href:"https://demo.backstage.io",children:"live demo site"}),"."]})}),"\n",(0,o.jsx)(t.p,{children:"At Spotify, we deploy software generally by:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Building a Docker image"}),"\n",(0,o.jsx)(t.li,{children:"Storing the Docker image on a container registry"}),"\n",(0,o.jsx)(t.li,{children:"Referencing the image in a Kubernetes Deployment YAML"}),"\n",(0,o.jsx)(t.li,{children:"Applying that Deployment to a Kubernetes cluster"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["This method is covered in ",(0,o.jsx)(t.a,{href:"/docs/deployment/docker",children:"Building a Docker image"})," and\n",(0,o.jsx)(t.a,{href:"/docs/deployment/k8s",children:"Deploying with Kubernetes"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["There is also an example of deploying on ",(0,o.jsx)(t.a,{href:"/docs/deployment/heroku",children:"Heroku"}),", which only\nrequires the first two steps."]}),"\n",(0,o.jsxs)(t.p,{children:["There is also a contrib guide to deploying Backstage with\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/contrib/docs/tutorials/aws-fargate-deployment.md",children:"AWS Fargate and Aurora PostgreSQL"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Please consider contributing other deployment guides if you get Backstage set up\non common infrastructure, it would be a great benefit to the community."}),"\n",(0,o.jsxs)(t.p,{children:["If you need to run Backstage behind a corporate proxy, this\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/contrib/docs/tutorials/help-im-behind-a-corporate-proxy.md",children:"contributed guide"}),"\nmay help."]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var o=n(296540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var o,r={},d=null,l=null;for(o in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,o)&&!c.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===r[o]&&(r[o]=t[o]);return{$$typeof:i,type:e,key:d,ref:l,props:r,_owner:a.current}}t.Fragment=r,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(296540);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);