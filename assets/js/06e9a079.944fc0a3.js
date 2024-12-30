/*! For license information please see 06e9a079.944fc0a3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[449508],{970338:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var c=n(474848),a=n(28453);const s={id:"cli-node.packagegraph",title:"PackageGraph",description:"API reference for PackageGraph"},t=void 0,d={id:"reference/cli-node.packagegraph",title:"PackageGraph",description:"API reference for PackageGraph",source:"@site/../docs/reference/cli-node.packagegraph.md",sourceDirName:"reference",slug:"/reference/cli-node.packagegraph",permalink:"/docs/next/reference/cli-node.packagegraph",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/cli-node.packagegraph.md",tags:[],version:"current",frontMatter:{id:"cli-node.packagegraph",title:"PackageGraph",description:"API reference for PackageGraph"}},i={},o=[{value:"Methods",id:"methods",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,c.jsx)(r.a,{href:"/docs/next/reference/cli-node",children:(0,c.jsx)(r.code,{children:"@backstage/cli-node"})})," > ",(0,c.jsx)(r.a,{href:"/docs/next/reference/cli-node.packagegraph",children:(0,c.jsx)(r.code,{children:"PackageGraph"})})]}),"\n",(0,c.jsx)(r.p,{children:"Represents a local Backstage monorepo package graph."}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-typescript",children:"class PackageGraph extends Map<string, PackageGraphNode> \n"})}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.strong,{children:"Extends:"})," Map<string, ",(0,c.jsx)(r.a,{href:"/docs/next/reference/cli-node.packagegraphnode",children:"PackageGraphNode"}),">"]}),"\n",(0,c.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,c.jsxs)(r.table,{children:[(0,c.jsx)(r.thead,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsxs)(r.th,{children:["\n",(0,c.jsx)(r.p,{children:"Method"}),"\n"]}),(0,c.jsxs)(r.th,{children:["\n",(0,c.jsx)(r.p,{children:"Modifiers"}),"\n"]}),(0,c.jsxs)(r.th,{children:["\n",(0,c.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,c.jsxs)(r.tbody,{children:[(0,c.jsxs)(r.tr,{children:[(0,c.jsxs)(r.td,{children:["\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.a,{href:"/docs/next/reference/cli-node.packagegraph.collectpackagenames",children:"collectPackageNames(startingPackageNames, collectFn)"})}),"\n"]}),(0,c.jsx)(r.td,{children:"\n"}),(0,c.jsxs)(r.td,{children:["\n",(0,c.jsx)(r.p,{children:"Traverses the package graph and collects a set of package names."}),"\n",(0,c.jsxs)(r.p,{children:["The traversal starts at the provided list names, and continues throughout all the names returned by the ",(0,c.jsx)(r.code,{children:"collectFn"}),", which is called once for each seen package."]}),"\n"]})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsxs)(r.td,{children:["\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.a,{href:"/docs/next/reference/cli-node.packagegraph.frompackages",children:"fromPackages(packages)"})}),"\n"]}),(0,c.jsxs)(r.td,{children:["\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.code,{children:"static"})}),"\n"]}),(0,c.jsxs)(r.td,{children:["\n",(0,c.jsx)(r.p,{children:"Creates a package graph from a list of local packages."}),"\n"]})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsxs)(r.td,{children:["\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.a,{href:"/docs/next/reference/cli-node.packagegraph.listchangedpackages",children:"listChangedPackages(options)"})}),"\n"]}),(0,c.jsx)(r.td,{children:"\n"}),(0,c.jsxs)(r.td,{children:["\n",(0,c.jsx)(r.p,{children:"Lists all packages that have changed since a given git ref."}),"\n"]})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsxs)(r.td,{children:["\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.a,{href:"/docs/next/reference/cli-node.packagegraph.listtargetpackages",children:"listTargetPackages()"})}),"\n"]}),(0,c.jsxs)(r.td,{children:["\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.code,{children:"static"})}),"\n"]}),(0,c.jsxs)(r.td,{children:["\n",(0,c.jsx)(r.p,{children:"Lists all local packages in a monorepo."}),"\n"]})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},221020:(e,r,n)=>{var c=n(296540),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,d=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,n){var c,s={},o=null,l=null;for(c in void 0!==n&&(o=""+n),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(l=r.ref),r)t.call(r,c)&&!i.hasOwnProperty(c)&&(s[c]=r[c]);if(e&&e.defaultProps)for(c in r=e.defaultProps)void 0===s[c]&&(s[c]=r[c]);return{$$typeof:a,type:e,key:o,ref:l,props:s,_owner:d.current}}r.Fragment=s,r.jsx=o,r.jsxs=o},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>d});var c=n(296540);const a={},s=c.createContext(a);function t(e){const r=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),c.createElement(s.Provider,{value:r},e.children)}}}]);