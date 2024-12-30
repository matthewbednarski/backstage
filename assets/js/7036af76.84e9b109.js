/*! For license information please see 7036af76.84e9b109.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[502327],{810785:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(474848),s=t(28453);const i={id:"core-plugin-api.useelementfilter",title:"useElementFilter()",description:"API reference for useElementFilter()"},c=void 0,o={id:"reference/core-plugin-api.useelementfilter",title:"useElementFilter()",description:"API reference for useElementFilter()",source:"@site/versioned_docs/version-stable/reference/core-plugin-api.useelementfilter.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.useelementfilter",permalink:"/docs/reference/core-plugin-api.useelementfilter",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/core-plugin-api.useelementfilter.md",tags:[],version:"stable",frontMatter:{id:"core-plugin-api.useelementfilter",title:"useElementFilter()",description:"API reference for useElementFilter()"}},l={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/core-plugin-api",children:(0,r.jsx)(n.code,{children:"@backstage/core-plugin-api"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/core-plugin-api.useelementfilter",children:(0,r.jsx)(n.code,{children:"useElementFilter"})})]}),"\n",(0,r.jsxs)(n.p,{children:["useElementFilter is a utility that helps you narrow down and retrieve data from a React element tree, typically operating on the ",(0,r.jsx)(n.code,{children:"children"})," property passed in to a component."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function useElementFilter<T>(node: ReactNode, filterFn: (arg: ElementCollection) => T, dependencies?: any[]): T;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"node"}),(0,r.jsx)(n.td,{children:"ReactNode"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"filterFn"}),(0,r.jsxs)(n.td,{children:["(arg: ",(0,r.jsx)(n.a,{href:"/docs/reference/core-plugin-api.elementcollection",children:"ElementCollection"}),") => T"]}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dependencies"}),(0,r.jsx)(n.td,{children:"any[]"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"(Optional)"})})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(n.p,{children:"T"}),"\n",(0,r.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(n.p,{children:["A common use-case is to construct declarative APIs where a React component defines its behavior based on its children, such as the relationship between ",(0,r.jsx)(n.code,{children:"Routes"})," and ",(0,r.jsx)(n.code,{children:"Route"})," in ",(0,r.jsx)(n.code,{children:"react-router"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The purpose of this hook is similar to ",(0,r.jsx)(n.code,{children:"React.Children.map"}),", and it expands upon it to also handle traversal of fragments and Backstage specific things like the ",(0,r.jsx)(n.code,{children:"FeatureFlagged"})," component."]}),"\n",(0,r.jsxs)(n.p,{children:["The return value of the hook is computed by the provided filter function, but with added memoization based on the input ",(0,r.jsx)(n.code,{children:"node"}),". If further memoization dependencies are used in the filter function, they should be added to the third ",(0,r.jsx)(n.code,{children:"dependencies"})," argument, just like ",(0,r.jsx)(n.code,{children:"useMemo"}),", ",(0,r.jsx)(n.code,{children:"useEffect"}),", etc."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var r=t(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,i={},d=null,a=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)c.call(n,r)&&!l.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:s,type:e,key:d,ref:a,props:i,_owner:o.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(296540);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);