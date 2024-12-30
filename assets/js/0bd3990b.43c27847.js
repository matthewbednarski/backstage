/*! For license information please see 0bd3990b.43c27847.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[445950],{272302:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var o=t(474848),s=t(28453);const n={id:"plugin-catalog-backend-module-github.githubdiscoveryprocessor",title:"GithubDiscoveryProcessor",description:"API reference for GithubDiscoveryProcessor"},c=void 0,i={id:"reference/plugin-catalog-backend-module-github.githubdiscoveryprocessor",title:"GithubDiscoveryProcessor",description:"API reference for GithubDiscoveryProcessor",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-backend-module-github.githubdiscoveryprocessor.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-github.githubdiscoveryprocessor",permalink:"/docs/reference/plugin-catalog-backend-module-github.githubdiscoveryprocessor",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-catalog-backend-module-github.githubdiscoveryprocessor.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-backend-module-github.githubdiscoveryprocessor",title:"GithubDiscoveryProcessor",description:"API reference for GithubDiscoveryProcessor"}},a={},d=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-github",children:(0,o.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-github"})})," > ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githubdiscoveryprocessor",children:(0,o.jsx)(r.code,{children:"GithubDiscoveryProcessor"})})]}),"\n",(0,o.jsx)(r.p,{children:"Extracts repositories out of a GitHub org."}),"\n",(0,o.jsx)(r.p,{children:"The following will create locations for all projects which have a catalog-info.yaml on the default branch. The first is shorthand for the second."}),"\n",(0,o.jsxs)(r.p,{children:['target: "',(0,o.jsx)(r.a,{href:"https://github.com/backstage",children:"https://github.com/backstage"}),'" or target: ',(0,o.jsx)(r.a,{href:"https://github.com/backstage/%5C*/blob/-/catalog-info.yaml",children:"https://github.com/backstage/\\*/blob/-/catalog-info.yaml"})]}),"\n",(0,o.jsx)(r.p,{children:"You may also explicitly specify the source branch:"}),"\n",(0,o.jsxs)(r.p,{children:["target: ",(0,o.jsx)(r.a,{href:"https://github.com/backstage/%5C*/blob/main/catalog-info.yaml",children:"https://github.com/backstage/\\*/blob/main/catalog-info.yaml"})]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"class GithubDiscoveryProcessor implements CatalogProcessor \n"})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Implements:"})," ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessor",children:"CatalogProcessor"})]}),"\n",(0,o.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Constructor"}),(0,o.jsx)(r.th,{children:"Modifiers"}),(0,o.jsx)(r.th,{children:"Description"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githubdiscoveryprocessor._constructor_",children:"(constructor)(options)"})}),(0,o.jsx)(r.td,{}),(0,o.jsxs)(r.td,{children:["Constructs a new instance of the ",(0,o.jsx)(r.code,{children:"GithubDiscoveryProcessor"})," class"]})]})})]}),"\n",(0,o.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Method"}),(0,o.jsx)(r.th,{children:"Modifiers"}),(0,o.jsx)(r.th,{children:"Description"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githubdiscoveryprocessor.fromconfig",children:"fromConfig(config, options)"})}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"static"})}),(0,o.jsx)(r.td,{})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githubdiscoveryprocessor.getprocessorname",children:"getProcessorName()"})}),(0,o.jsx)(r.td,{}),(0,o.jsx)(r.td,{})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githubdiscoveryprocessor.readlocation",children:"readLocation(location, _optional, emit)"})}),(0,o.jsx)(r.td,{}),(0,o.jsx)(r.td,{})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,r,t)=>{var o=t(296540),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var o,n={},d=null,l=null;for(o in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,o)&&!a.hasOwnProperty(o)&&(n[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===n[o]&&(n[o]=r[o]);return{$$typeof:s,type:e,key:d,ref:l,props:n,_owner:i.current}}r.Fragment=n,r.jsx=d,r.jsxs=d},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>i});var o=t(296540);const s={},n=o.createContext(s);function c(e){const r=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(n.Provider,{value:r},e.children)}}}]);