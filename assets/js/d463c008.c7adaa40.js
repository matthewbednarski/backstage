/*! For license information please see d463c008.c7adaa40.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[80063],{460027:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(474848),i=t(28453);const o={id:"plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider",title:"IncrementalEntityProvider",description:"API reference for IncrementalEntityProvider"},s=void 0,c={id:"reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider",title:"IncrementalEntityProvider",description:"API reference for IncrementalEntityProvider",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider",permalink:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider",title:"IncrementalEntityProvider",description:"API reference for IncrementalEntityProvider"}},a={},d=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-catalog-backend-module-incremental-ingestion"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider",children:(0,r.jsx)(n.code,{children:"IncrementalEntityProvider"})})]}),"\n",(0,r.jsx)(n.p,{children:"Ingest entities into the catalog in bite-sized chunks."}),"\n",(0,r.jsxs)(n.p,{children:["A Normal ",(0,r.jsx)(n.code,{children:"EntityProvider"})," allows you to introduce entities into the processing pipeline by calling an ",(0,r.jsx)(n.code,{children:"applyMutation()"})," on the full set of entities. However, this is not great when the number of entities that you have to keep track of is extremely large because it entails having all of them in memory at once. An ",(0,r.jsx)(n.code,{children:"IncrementalEntityProvider"})," by contrast allows you to provide batches of entities in sequence so that you never need to have more than a few hundred in memory at a time."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export interface IncrementalEntityProvider<TCursor, TContext> \n"})}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Modifiers"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider.eventhandler",children:"eventHandler?"})}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["{ onEvent: (params: ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-events-node.eventparams",children:"EventParams"}),") => Promise<",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityeventresult",children:"IncrementalEntityEventResult"}),">; supportsEventTopics: () => string[]; }"]}),(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"(Optional)"})," If set, the IncrementalEntityProvider will receive and respond to events."]}),(0,r.jsxs)(n.p,{children:["This system acts as a wrapper for the Backstage events bus, and requires the events backend to function. It does not provide its own events backend. See ",(0,r.jsx)(n.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend",children:"https://github.com/backstage/backstage/tree/master/plugins/events-backend"}),"."]})]})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Method"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider.around",children:"around(burst)"})}),(0,r.jsxs)(n.td,{children:["Do any setup and teardown necessary in order to provide the context for fetching pages. This should always invoke ",(0,r.jsx)(n.code,{children:"burst"})," in order to fetch the individual pages."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider.getprovidername",children:"getProviderName()"})}),(0,r.jsx)(n.td,{children:"This name must be unique between all of the entity providers operating in the catalog."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider.next",children:"next(context, cursor)"})}),(0,r.jsx)(n.td,{children:"Return a single page of entities from a specific point in the ingestion."})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,n,t)=>{var r=t(296540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,o={},d=null,l=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,r)&&!a.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:i,type:e,key:d,ref:l,props:o,_owner:c.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(296540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);