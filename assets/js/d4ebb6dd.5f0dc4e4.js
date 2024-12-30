/*! For license information please see d4ebb6dd.5f0dc4e4.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[144858],{859523:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var c=r(474848),t=r(28453);const s={id:"plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.newclient",title:"ElasticSearchSearchEngine.newClient()",description:"API reference for ElasticSearchSearchEngine.newClient()"},a=void 0,i={id:"reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.newclient",title:"ElasticSearchSearchEngine.newClient()",description:"API reference for ElasticSearchSearchEngine.newClient()",source:"@site/../docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.newclient.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.newclient",permalink:"/docs/next/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.newclient",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.newclient.md",tags:[],version:"current",frontMatter:{id:"plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.newclient",title:"ElasticSearchSearchEngine.newClient()",description:"API reference for ElasticSearchSearchEngine.newClient()"}},l={},o=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,c.jsx)(n.a,{href:"/docs/next/reference/plugin-search-backend-module-elasticsearch",children:(0,c.jsx)(n.code,{children:"@backstage/plugin-search-backend-module-elasticsearch"})})," > ",(0,c.jsx)(n.a,{href:"/docs/next/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine",children:(0,c.jsx)(n.code,{children:"ElasticSearchSearchEngine"})})," > ",(0,c.jsx)(n.a,{href:"/docs/next/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.newclient",children:(0,c.jsx)(n.code,{children:"newClient"})})]}),"\n",(0,c.jsx)(n.p,{children:"Create a custom search client from the derived search client configuration. This need not be the same client that the engine uses internally."}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-typescript",children:"newClient<T>(create: (options: ElasticSearchClientOptions) => T): T;\n"})}),"\n",(0,c.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.th,{children:["\n",(0,c.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,c.jsxs)(n.th,{children:["\n",(0,c.jsx)(n.p,{children:"Type"}),"\n"]}),(0,c.jsxs)(n.th,{children:["\n",(0,c.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:["\n",(0,c.jsx)(n.p,{children:"create"}),"\n"]}),(0,c.jsxs)(n.td,{children:["\n",(0,c.jsxs)(n.p,{children:["(options: ",(0,c.jsx)(n.a,{href:"/docs/next/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientoptions",children:"ElasticSearchClientOptions"}),") => T"]}),"\n"]}),(0,c.jsx)(n.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,c.jsx)(n.p,{children:"T"}),"\n",(0,c.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,c.jsx)(n.p,{children:"Instantiate an instance of an Elasticsearch client."}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"import { isOpenSearchCompatible } from '@backstage/plugin-search-backend-module-elasticsearch';\nimport { Client } from '@elastic/elasticsearch';\n\nconst client = searchEngine.newClient<Client>(options => {\n  // This type guard ensures options are compatible with either OpenSearch\n  // or Elasticsearch client constructors.\n  if (!isOpenSearchCompatible(options)) {\n    return new Client(options);\n  }\n  throw new Error('Incompatible options provided');\n});\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},221020:(e,n,r)=>{var c=r(296540),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,r){var c,s={},o=null,h=null;for(c in void 0!==r&&(o=""+r),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(h=n.ref),n)a.call(n,c)&&!l.hasOwnProperty(c)&&(s[c]=n[c]);if(e&&e.defaultProps)for(c in n=e.defaultProps)void 0===s[c]&&(s[c]=n[c]);return{$$typeof:t,type:e,key:o,ref:h,props:s,_owner:i.current}}n.Fragment=s,n.jsx=o,n.jsxs=o},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var c=r(296540);const t={},s=c.createContext(t);function a(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);