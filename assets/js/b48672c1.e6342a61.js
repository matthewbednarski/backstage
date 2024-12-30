/*! For license information please see b48672c1.e6342a61.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[414156],{173568:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>a});var n=r(474848),o=r(28453);const c={id:"plugin-catalog-react.entityautocompletepickerprops",title:"EntityAutocompletePickerProps",description:"API reference for EntityAutocompletePickerProps"},i=void 0,s={id:"reference/plugin-catalog-react.entityautocompletepickerprops",title:"EntityAutocompletePickerProps",description:"API reference for EntityAutocompletePickerProps",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-react.entityautocompletepickerprops.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-react.entityautocompletepickerprops",permalink:"/docs/reference/plugin-catalog-react.entityautocompletepickerprops",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-catalog-react.entityautocompletepickerprops.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-react.entityautocompletepickerprops",title:"EntityAutocompletePickerProps",description:"API reference for EntityAutocompletePickerProps"}},l={},a=[];function p(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-react",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-catalog-react"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-react.entityautocompletepickerprops",children:(0,n.jsx)(t.code,{children:"EntityAutocompletePickerProps"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export type EntityAutocompletePickerProps<T extends DefaultEntityFilters = DefaultEntityFilters, Name extends AllowedEntityFilters<T> = AllowedEntityFilters<T>> = {\n    label: string;\n    name: Name;\n    path: string;\n    showCounts?: boolean;\n    Filter: {\n        new (values: string[]): NonNullable<T[Name]>;\n    };\n    InputProps?: TextFieldProps;\n    initialSelectedOptions?: string[];\n    filtersForAvailableValues?: Array<keyof T>;\n};\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"References:"})," ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-react.defaultentityfilters",children:"DefaultEntityFilters"}),", ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-react.allowedentityfilters",children:"AllowedEntityFilters"})]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},221020:(e,t,r)=>{var n=r(296540),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,c={},a=null,p=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(p=t.ref),t)i.call(t,n)&&!l.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:p,props:c,_owner:s.current}}t.Fragment=c,t.jsx=a,t.jsxs=a},474848:(e,t,r)=>{e.exports=r(221020)},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>s});var n=r(296540);const o={},c=n.createContext(o);function i(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);