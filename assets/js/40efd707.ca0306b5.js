/*! For license information please see 40efd707.ca0306b5.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[200734],{3980:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var r=n(474848),c=n(28453);const t={id:"cli-node.packagegraph.listchangedpackages",title:"PackageGraph.listChangedPackages()",description:"API reference for PackageGraph.listChangedPackages()"},s=void 0,i={id:"reference/cli-node.packagegraph.listchangedpackages",title:"PackageGraph.listChangedPackages()",description:"API reference for PackageGraph.listChangedPackages()",source:"@site/versioned_docs/version-stable/reference/cli-node.packagegraph.listchangedpackages.md",sourceDirName:"reference",slug:"/reference/cli-node.packagegraph.listchangedpackages",permalink:"/docs/reference/cli-node.packagegraph.listchangedpackages",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/cli-node.packagegraph.listchangedpackages.md",tags:[],version:"stable",frontMatter:{id:"cli-node.packagegraph.listchangedpackages",title:"PackageGraph.listChangedPackages()",description:"API reference for PackageGraph.listChangedPackages()"}},o={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){const a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(a.a,{href:"/docs/reference/cli-node",children:(0,r.jsx)(a.code,{children:"@backstage/cli-node"})})," > ",(0,r.jsx)(a.a,{href:"/docs/reference/cli-node.packagegraph",children:(0,r.jsx)(a.code,{children:"PackageGraph"})})," > ",(0,r.jsx)(a.a,{href:"/docs/reference/cli-node.packagegraph.listchangedpackages",children:(0,r.jsx)(a.code,{children:"listChangedPackages"})})]}),"\n",(0,r.jsx)(a.p,{children:"Lists all packages that have changed since a given git ref."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-typescript",children:"listChangedPackages(options: {\n        ref: string;\n        analyzeLockfile?: boolean;\n    }): Promise<PackageGraphNode[]>;\n"})}),"\n",(0,r.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Parameter"}),(0,r.jsx)(a.th,{children:"Type"}),(0,r.jsx)(a.th,{children:"Description"})]})}),(0,r.jsx)(a.tbody,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"options"}),(0,r.jsx)(a.td,{children:"{ ref: string; analyzeLockfile?: boolean; }"}),(0,r.jsx)(a.td,{})]})})]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(a.p,{children:["Promise<",(0,r.jsx)(a.a,{href:"/docs/reference/cli-node.packagegraphnode",children:"PackageGraphNode"}),"[]>"]}),"\n",(0,r.jsx)(a.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(a.p,{children:["If the ",(0,r.jsx)(a.code,{children:"analyzeLockfile"})," option is set to true, the change detection will also consider changes to the dependency management lockfile."]})]})}function h(e={}){const{wrapper:a}={...(0,c.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,a,n)=>{var r=n(296540),c=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,a,n){var r,t={},d=null,l=null;for(r in void 0!==n&&(d=""+n),void 0!==a.key&&(d=""+a.key),void 0!==a.ref&&(l=a.ref),a)s.call(a,r)&&!o.hasOwnProperty(r)&&(t[r]=a[r]);if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===t[r]&&(t[r]=a[r]);return{$$typeof:c,type:e,key:d,ref:l,props:t,_owner:i.current}}a.Fragment=t,a.jsx=d,a.jsxs=d},474848:(e,a,n)=>{e.exports=n(221020)},28453:(e,a,n)=>{n.d(a,{R:()=>s,x:()=>i});var r=n(296540);const c={},t=r.createContext(c);function s(e){const a=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(t.Provider,{value:a},e.children)}}}]);