/*! For license information please see 2bab869b.dd0e4c25.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[293089],{475934:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var r=t(474848),s=t(28453);const o={id:"plugin-scaffolder-node.fetchcontents",title:"fetchContents()",description:"API reference for fetchContents()"},c=void 0,i={id:"reference/plugin-scaffolder-node.fetchcontents",title:"fetchContents()",description:"API reference for fetchContents()",source:"@site/versioned_docs/version-stable/reference/plugin-scaffolder-node.fetchcontents.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-node.fetchcontents",permalink:"/docs/reference/plugin-scaffolder-node.fetchcontents",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-scaffolder-node.fetchcontents.md",tags:[],version:"stable",frontMatter:{id:"plugin-scaffolder-node.fetchcontents",title:"fetchContents()",description:"API reference for fetchContents()"}},d={},a=[{value:"Parameters",id:"parameters",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-scaffolder-node"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.fetchcontents",children:(0,r.jsx)(n.code,{children:"fetchContents"})})]}),"\n",(0,r.jsx)(n.p,{children:"A helper function that reads the contents of a directory from the given URL. Can be used in your own actions, and also used behind fetch:template and fetch:plain"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function fetchContents(options: {\n    reader: UrlReaderService;\n    integrations: ScmIntegrations;\n    baseUrl?: string;\n    fetchUrl?: string;\n    outputPath: string;\n    token?: string;\n}): Promise<void>;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsxs)(n.td,{children:["{ reader: ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice",children:"UrlReaderService"}),"; integrations: ",(0,r.jsx)(n.a,{href:"/docs/reference/integration.scmintegrations",children:"ScmIntegrations"}),"; baseUrl?: string; fetchUrl?: string; outputPath: string; token?: string; }"]}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(n.p,{children:"Promise<void>"})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,n,t)=>{var r=t(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var r,o={},a=null,l=null;for(r in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,r)&&!d.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:s,type:e,key:a,ref:l,props:o,_owner:i.current}}n.Fragment=o,n.jsx=a,n.jsxs=a},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var r=t(296540);const s={},o=r.createContext(s);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);