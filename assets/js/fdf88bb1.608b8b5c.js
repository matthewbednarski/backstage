/*! For license information please see fdf88bb1.608b8b5c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[400730],{267652:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var t=o(474848),a=o(28453);const c={id:"plugin-techdocs-module-addons-contrib.expandablenavigation",title:"ExpandableNavigation()",description:"API reference for ExpandableNavigation()"},r=void 0,s={id:"reference/plugin-techdocs-module-addons-contrib.expandablenavigation",title:"ExpandableNavigation()",description:"API reference for ExpandableNavigation()",source:"@site/versioned_docs/version-stable/reference/plugin-techdocs-module-addons-contrib.expandablenavigation.md",sourceDirName:"reference",slug:"/reference/plugin-techdocs-module-addons-contrib.expandablenavigation",permalink:"/docs/reference/plugin-techdocs-module-addons-contrib.expandablenavigation",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-techdocs-module-addons-contrib.expandablenavigation.md",tags:[],version:"stable",frontMatter:{id:"plugin-techdocs-module-addons-contrib.expandablenavigation",title:"ExpandableNavigation()",description:"API reference for ExpandableNavigation()"}},d={},i=[{value:"Example",id:"example",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-module-addons-contrib",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-techdocs-module-addons-contrib"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-module-addons-contrib.expandablenavigation",children:(0,t.jsx)(n.code,{children:"ExpandableNavigation"})})]}),"\n",(0,t.jsx)(n.p,{children:"TechDocs addon that lets you expand/collapse the TechDocs main navigation and keep the preferred state in local storage. The addon will render as a button next to the site name if the documentation has nested navigation."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"function ExpandableNavigation(): JSX.Element | null\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(n.p,{children:"JSX.Element | null"}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Here's a simple example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"import {\n  DefaultTechDocsHome,\n  TechDocsIndexPage,\n  TechDocsReaderPage,\n} from '@backstage/plugin-techdocs';\nimport { TechDocsAddons } from '@backstage/plugin-techdocs-react/alpha';\nimport { ExpandableNavigation } from '@backstage/plugin-techdocs-module-addons-contrib';\n\n\nconst AppRoutes = () => {\n  <FlatRoutes>\n    // other plugin routes\n    <Route path=\"/docs\" element={<TechDocsIndexPage />}>\n      <DefaultTechDocsHome />\n    </Route>\n    <Route\n      path=\"/docs/:namespace/:kind/:name/*\"\n      element={<TechDocsReaderPage />}\n    >\n      <TechDocsAddons>\n        <ExpandableNavigation />\n      </TechDocsAddons>\n    </Route>\n  </FlatRoutes>;\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,n,o)=>{var t=o(296540),a=Symbol.for("react.element"),c=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,o){var t,c={},i=null,l=null;for(t in void 0!==o&&(i=""+o),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(l=n.ref),n)r.call(n,t)&&!d.hasOwnProperty(t)&&(c[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===c[t]&&(c[t]=n[t]);return{$$typeof:a,type:e,key:i,ref:l,props:c,_owner:s.current}}n.Fragment=c,n.jsx=i,n.jsxs=i},474848:(e,n,o)=>{e.exports=o(221020)},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>s});var t=o(296540);const a={},c=t.createContext(a);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);