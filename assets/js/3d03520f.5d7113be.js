/*! For license information please see 3d03520f.5d7113be.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[607114],{752965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(474848),a=n(28453);const o={id:"catalog-model.entityschemavalidator",title:"entitySchemaValidator()",description:"API reference for entitySchemaValidator()"},c=void 0,i={id:"reference/catalog-model.entityschemavalidator",title:"entitySchemaValidator()",description:"API reference for entitySchemaValidator()",source:"@site/versioned_docs/version-stable/reference/catalog-model.entityschemavalidator.md",sourceDirName:"reference",slug:"/reference/catalog-model.entityschemavalidator",permalink:"/docs/reference/catalog-model.entityschemavalidator",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/catalog-model.entityschemavalidator.md",tags:[],version:"stable",frontMatter:{id:"catalog-model.entityschemavalidator",title:"entitySchemaValidator()",description:"API reference for entitySchemaValidator()"}},s={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-model",children:(0,r.jsx)(t.code,{children:"@backstage/catalog-model"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-model.entityschemavalidator",children:(0,r.jsx)(t.code,{children:"entitySchemaValidator"})})]}),"\n",(0,r.jsxs)(t.p,{children:["Creates a validation function that takes some arbitrary data, and either returns that data cast to an ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-model.entity",children:"Entity"})," (or the given subtype) if it matches that schema, or throws a  describing the errors."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"function entitySchemaValidator<T extends Entity = Entity>(schema?: unknown): (data: unknown) => T;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"schema"}),(0,r.jsx)(t.td,{children:"unknown"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.em,{children:"(Optional)"})})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"(data: unknown) => T"}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(t.p,{children:"Note that this validator is only meant for applying the base schema checks; it does not take custom policies or additional processor based validation into account."}),"\n",(0,r.jsxs)(t.p,{children:["By default, the plain ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-model.entity",children:"Entity"})," schema is used. If you pass in your own, it may contain ",(0,r.jsx)(t.code,{children:"$ref"})," references to the following, which are resolved automatically for you:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/catalog-model.entity",children:"Entity"})," - ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-model.entityenvelope",children:"EntityEnvelope"})," - ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-model.entitymeta",children:"EntityMeta"})," - ",(0,r.jsx)(t.code,{children:"common#<id>"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},221020:(e,t,n)=>{var r=n(296540),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,o={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:l,ref:d,props:o,_owner:i.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(296540);const a={},o=r.createContext(a);function c(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);