/*! For license information please see 070b50d6.f78f7c7d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[208747],{772834:(e,r,c)=>{c.r(r),c.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var t=c(474848),n=c(28453);const s={id:"plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.bulk",title:"ElasticSearchClientWrapper.bulk()",description:"API reference for ElasticSearchClientWrapper.bulk()"},a=void 0,l={id:"reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.bulk",title:"ElasticSearchClientWrapper.bulk()",description:"API reference for ElasticSearchClientWrapper.bulk()",source:"@site/../docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.bulk.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.bulk",permalink:"/docs/next/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.bulk",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.bulk.md",tags:[],version:"current",frontMatter:{id:"plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.bulk",title:"ElasticSearchClientWrapper.bulk()",description:"API reference for ElasticSearchClientWrapper.bulk()"}},i={},o=[{value:"Parameters",id:"parameters",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-search-backend-module-elasticsearch",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-search-backend-module-elasticsearch"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper",children:(0,t.jsx)(r.code,{children:"ElasticSearchClientWrapper"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.bulk",children:(0,t.jsx)(r.code,{children:"bulk"})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:'bulk(bulkOptions: {\n        datasource: Readable;\n        onDocument: () => ElasticSearchIndexAction;\n        refreshOnCompletion?: string | boolean;\n    }): import("@elastic/elasticsearch/lib/Helpers").BulkHelper<import("@elastic/elasticsearch/lib/Helpers").BulkStats>;\n'})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"bulkOptions"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsxs)(r.p,{children:["{ datasource: Readable; onDocument: () => ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-search-backend-module-elasticsearch.elasticsearchindexaction",children:"ElasticSearchIndexAction"}),"; refreshOnCompletion?: string | boolean; }"]}),"\n"]}),(0,t.jsx)(r.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,t.jsx)(r.p,{children:'import("@elastic/elasticsearch/lib/Helpers").BulkHelper<import("@elastic/elasticsearch/lib/Helpers").BulkStats>'})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},221020:(e,r,c)=>{var t=c(296540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,c){var t,s={},o=null,d=null;for(t in void 0!==c&&(o=""+c),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(d=r.ref),r)a.call(r,t)&&!i.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:n,type:e,key:o,ref:d,props:s,_owner:l.current}}r.Fragment=s,r.jsx=o,r.jsxs=o},474848:(e,r,c)=>{e.exports=c(221020)},28453:(e,r,c)=>{c.d(r,{R:()=>a,x:()=>l});var t=c(296540);const n={},s=t.createContext(n);function a(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);