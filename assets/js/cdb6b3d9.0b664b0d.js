/*! For license information please see cdb6b3d9.0b664b0d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[788462],{402081:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=n(474848),s=n(28453);const o={id:"plugin-techdocs-node.urlpreparer.prepare",title:"UrlPreparer.prepare()",description:"API reference for UrlPreparer.prepare()"},c=void 0,a={id:"reference/plugin-techdocs-node.urlpreparer.prepare",title:"UrlPreparer.prepare()",description:"API reference for UrlPreparer.prepare()",source:"@site/versioned_docs/version-stable/reference/plugin-techdocs-node.urlpreparer.prepare.md",sourceDirName:"reference",slug:"/reference/plugin-techdocs-node.urlpreparer.prepare",permalink:"/docs/reference/plugin-techdocs-node.urlpreparer.prepare",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-techdocs-node.urlpreparer.prepare.md",tags:[],version:"stable",frontMatter:{id:"plugin-techdocs-node.urlpreparer.prepare",title:"UrlPreparer.prepare()",description:"API reference for UrlPreparer.prepare()"}},p={},d=[{value:"Parameters",id:"parameters",level:2}];function i(e){const r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-techdocs-node",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-techdocs-node"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-techdocs-node.urlpreparer",children:(0,t.jsx)(r.code,{children:"UrlPreparer"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-techdocs-node.urlpreparer.prepare",children:(0,t.jsx)(r.code,{children:"prepare"})})]}),"\n",(0,t.jsx)(r.p,{children:"Given an Entity definition from the Software Catalog, go and prepare a directory with contents from the location in temporary storage and return the path."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"prepare(entity: Entity, options?: PreparerOptions): Promise<PreparerResponse>;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"entity"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/catalog-model.entity",children:"Entity"})}),(0,t.jsx)(r.td,{children:"The entity from the Software Catalog"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"options"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-techdocs-node.prepareroptions",children:"PreparerOptions"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.em,{children:"(Optional)"})," If etag is provided, it will be used to check if the target has updated since the last build."]})]})]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(r.p,{children:["Promise<",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-techdocs-node.preparerresponse",children:"PreparerResponse"}),">"]})]})}function l(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},221020:(e,r,n)=>{var t=n(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,o={},d=null,i=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(i=r.ref),r)c.call(r,t)&&!p.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:s,type:e,key:d,ref:i,props:o,_owner:a.current}}r.Fragment=o,r.jsx=d,r.jsxs=d},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>a});var t=n(296540);const s={},o=t.createContext(s);function c(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);