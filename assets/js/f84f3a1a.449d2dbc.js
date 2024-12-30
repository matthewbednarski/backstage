/*! For license information please see f84f3a1a.449d2dbc.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[390733],{131713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var o=n(474848),c=n(28453);const r={id:"plugin-techdocs.entitylistdocstable",title:"EntityListDocsTable",description:"API reference for EntityListDocsTable"},s=void 0,i={id:"reference/plugin-techdocs.entitylistdocstable",title:"EntityListDocsTable",description:"API reference for EntityListDocsTable",source:"@site/versioned_docs/version-stable/reference/plugin-techdocs.entitylistdocstable.md",sourceDirName:"reference",slug:"/reference/plugin-techdocs.entitylistdocstable",permalink:"/docs/reference/plugin-techdocs.entitylistdocstable",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-techdocs.entitylistdocstable.md",tags:[],version:"stable",frontMatter:{id:"plugin-techdocs.entitylistdocstable",title:"EntityListDocsTable",description:"API reference for EntityListDocsTable"}},l={},a=[];function d(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,o.jsx)(t.a,{href:"/docs/reference/plugin-techdocs",children:(0,o.jsx)(t.code,{children:"@backstage/plugin-techdocs"})})," > ",(0,o.jsx)(t.a,{href:"/docs/reference/plugin-techdocs.entitylistdocstable",children:(0,o.jsx)(t.code,{children:"EntityListDocsTable"})})]}),"\n",(0,o.jsx)(t.p,{children:"Component which renders a table with entities from catalog."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"EntityListDocsTable: {\n    (props: EntityListDocsTableProps): React.JSX.Element;\n    columns: {\n        createTitleColumn(options?: {\n            hidden?: boolean | undefined;\n        } | undefined): TableColumn<DocsTableRow>;\n        createNameColumn(): TableColumn<DocsTableRow>;\n        createOwnerColumn(): TableColumn<DocsTableRow>;\n        createKindColumn(): TableColumn<DocsTableRow>;\n        createTypeColumn(): TableColumn<DocsTableRow>;\n    };\n    actions: {\n        createCopyDocsUrlAction(copyToClipboard: Function): (row: DocsTableRow) => {\n            icon: () => React.JSX.Element;\n            tooltip: string;\n            onClick: () => any;\n        };\n        createStarEntityAction(isStarredEntity: Function, toggleStarredEntity: Function): (row: DocsTableRow) => {\n            cellStyle: {\n                paddingLeft: string;\n            };\n            icon: () => React.JSX.Element;\n            tooltip: string;\n            onClick: () => any;\n        };\n    };\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},221020:(e,t,n)=>{var o=n(296540),c=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var o,r={},a=null,d=null;for(o in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,o)&&!l.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===r[o]&&(r[o]=t[o]);return{$$typeof:c,type:e,key:a,ref:d,props:r,_owner:i.current}}t.Fragment=r,t.jsx=a,t.jsxs=a},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var o=n(296540);const c={},r=o.createContext(c);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);