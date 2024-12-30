/*! For license information please see a62dfed3.643c98dd.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[124016],{891967:(e,a,c)=>{c.r(a),c.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var r=c(474848),n=c(28453);const t={id:"cli-node.packagegraph.collectpackagenames",title:"PackageGraph.collectPackageNames()",description:"API reference for PackageGraph.collectPackageNames()"},s=void 0,o={id:"reference/cli-node.packagegraph.collectpackagenames",title:"PackageGraph.collectPackageNames()",description:"API reference for PackageGraph.collectPackageNames()",source:"@site/versioned_docs/version-stable/reference/cli-node.packagegraph.collectpackagenames.md",sourceDirName:"reference",slug:"/reference/cli-node.packagegraph.collectpackagenames",permalink:"/docs/reference/cli-node.packagegraph.collectpackagenames",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/cli-node.packagegraph.collectpackagenames.md",tags:[],version:"stable",frontMatter:{id:"cli-node.packagegraph.collectpackagenames",title:"PackageGraph.collectPackageNames()",description:"API reference for PackageGraph.collectPackageNames()"}},l={},d=[{value:"Parameters",id:"parameters",level:2}];function i(e){const a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(a.a,{href:"/docs/reference/cli-node",children:(0,r.jsx)(a.code,{children:"@backstage/cli-node"})})," > ",(0,r.jsx)(a.a,{href:"/docs/reference/cli-node.packagegraph",children:(0,r.jsx)(a.code,{children:"PackageGraph"})})," > ",(0,r.jsx)(a.a,{href:"/docs/reference/cli-node.packagegraph.collectpackagenames",children:(0,r.jsx)(a.code,{children:"collectPackageNames"})})]}),"\n",(0,r.jsx)(a.p,{children:"Traverses the package graph and collects a set of package names."}),"\n",(0,r.jsxs)(a.p,{children:["The traversal starts at the provided list names, and continues throughout all the names returned by the ",(0,r.jsx)(a.code,{children:"collectFn"}),", which is called once for each seen package."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-typescript",children:"collectPackageNames(startingPackageNames: string[], collectFn: (pkg: PackageGraphNode) => Iterable<string> | undefined): Set<string>;\n"})}),"\n",(0,r.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Parameter"}),(0,r.jsx)(a.th,{children:"Type"}),(0,r.jsx)(a.th,{children:"Description"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"startingPackageNames"}),(0,r.jsx)(a.td,{children:"string[]"}),(0,r.jsx)(a.td,{})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"collectFn"}),(0,r.jsxs)(a.td,{children:["(pkg: ",(0,r.jsx)(a.a,{href:"/docs/reference/cli-node.packagegraphnode",children:"PackageGraphNode"}),") => Iterable<string> | undefined"]}),(0,r.jsx)(a.td,{})]})]})]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(a.p,{children:"Set<string>"})]})}function p(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},221020:(e,a,c)=>{var r=c(296540),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,a,c){var r,t={},d=null,i=null;for(r in void 0!==c&&(d=""+c),void 0!==a.key&&(d=""+a.key),void 0!==a.ref&&(i=a.ref),a)s.call(a,r)&&!l.hasOwnProperty(r)&&(t[r]=a[r]);if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===t[r]&&(t[r]=a[r]);return{$$typeof:n,type:e,key:d,ref:i,props:t,_owner:o.current}}a.Fragment=t,a.jsx=d,a.jsxs=d},474848:(e,a,c)=>{e.exports=c(221020)},28453:(e,a,c)=>{c.d(a,{R:()=>s,x:()=>o});var r=c(296540);const n={},t=r.createContext(n);function s(e){const a=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(t.Provider,{value:a},e.children)}}}]);