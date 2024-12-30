/*! For license information please see 51529bad.4fabfb8e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[322794],{254660:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>o,frontMatter:()=>a,metadata:()=>i,toc:()=>h});var s=c(474848),r=c(28453);const a={id:"plugin-search-backend-module-elasticsearch",title:"@backstage/plugin-search-backend-module-elasticsearch",description:"API Reference for @backstage/plugin-search-backend-module-elasticsearch"},t=void 0,i={id:"reference/plugin-search-backend-module-elasticsearch",title:"@backstage/plugin-search-backend-module-elasticsearch",description:"API Reference for @backstage/plugin-search-backend-module-elasticsearch",source:"@site/versioned_docs/version-stable/reference/plugin-search-backend-module-elasticsearch.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-module-elasticsearch",permalink:"/docs/reference/plugin-search-backend-module-elasticsearch",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-search-backend-module-elasticsearch.md",tags:[],version:"stable",frontMatter:{id:"plugin-search-backend-module-elasticsearch",title:"@backstage/plugin-search-backend-module-elasticsearch",description:"API Reference for @backstage/plugin-search-backend-module-elasticsearch"}},l={},h=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch",children:(0,s.jsx)(n.code,{children:"@backstage/plugin-search-backend-module-elasticsearch"})})]}),"\n",(0,s.jsx)(n.p,{children:"A module for the search backend that implements search using ElasticSearch"}),"\n",(0,s.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Class"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper",children:"ElasticSearchClientWrapper"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.p,{children:"A wrapper class that exposes logical methods that are conditionally fired against either a configured Elasticsearch client or a configured Opensearch client."}),(0,s.jsx)(n.p,{children:"This is necessary because, despite its intention to be API-compatible, the opensearch client does not support API key-based authentication. This is also the sanest way to accomplish this while making typescript happy."}),(0,s.jsx)(n.p,{children:"In the future, if the differences between implementations become unmaintainably divergent, we should split out the Opensearch and Elasticsearch search engine implementations."})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine",children:"ElasticSearchSearchEngine"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengineindexer",children:"ElasticSearchSearchEngineIndexer"})}),(0,s.jsx)(n.td,{children:"Elasticsearch specific search engine indexer."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Function"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.decodeelasticsearchpagecursor",children:"decodeElasticSearchPageCursor(pageCursor)"})}),(0,s.jsx)(n.td,{})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Interface"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.baseelasticsearchclientoptions",children:"BaseElasticSearchClientOptions"})}),(0,s.jsxs)(n.td,{children:["Base client options that are shared across ",(0,s.jsx)(n.code,{children:"@opensearch-project/opensearch"})," and ",(0,s.jsx)(n.code,{children:"@elastic/elasticsearch"})," clients."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchagentoptions",children:"ElasticSearchAgentOptions"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchconnectionconstructor",children:"ElasticSearchConnectionConstructor"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchelasticsearchclientoptions",children:"ElasticSearchElasticSearchClientOptions"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.p,{children:["Options used to configure the ",(0,s.jsx)(n.code,{children:"@elastic/elasticsearch"})," client."]}),(0,s.jsxs)(n.p,{children:["They are drawn from the ",(0,s.jsx)(n.code,{children:"ClientOptions"})," class of ",(0,s.jsx)(n.code,{children:"@elastic/elasticsearch"}),", but are maintained separately so that this interface is not coupled to it."]})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchnodeoptions",children:"ElasticSearchNodeOptions"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchtransportconstructor",children:"ElasticSearchTransportConstructor"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.opensearchconnectionconstructor",children:"OpenSearchConnectionConstructor"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.opensearchelasticsearchclientoptions",children:"OpenSearchElasticSearchClientOptions"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.p,{children:["Options used to configure the ",(0,s.jsx)(n.code,{children:"@opensearch-project/opensearch"})," client."]}),(0,s.jsxs)(n.p,{children:["They are drawn from the ",(0,s.jsx)(n.code,{children:"ClientOptions"})," class of ",(0,s.jsx)(n.code,{children:"@opensearch-project/opensearch"}),", but are maintained separately so that this interface is not coupled to it."]})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.opensearchnodeoptions",children:"OpenSearchNodeOptions"})}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Variable"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.isopensearchcompatible",children:"isOpenSearchCompatible"})}),(0,s.jsxs)(n.td,{children:["Typeguard to differentiate ElasticSearch client options which are compatible with OpenSearch vs. ElasticSearch clients. Useful when calling the ",(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.newclient",children:"ElasticSearchSearchEngine.newClient()"})," method."]})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type Alias"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchaliasaction",children:"ElasticSearchAliasAction"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchauth",children:"ElasticSearchAuth"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientoptions",children:"ElasticSearchClientOptions"})}),(0,s.jsxs)(n.td,{children:["Options used to configure the ",(0,s.jsx)(n.code,{children:"@elastic/elasticsearch"})," client or the ",(0,s.jsx)(n.code,{children:"@opensearch-project/opensearch"})," client, depending on the given config. It will be passed as an argument to the ",(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.newclient",children:"ElasticSearchSearchEngine.newClient()"})," method."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchconcretequery",children:"ElasticSearchConcreteQuery"})}),(0,s.jsx)(n.td,{children:"Search query that the elasticsearch engine understands."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchcustomindextemplate",children:"ElasticSearchCustomIndexTemplate"})}),(0,s.jsx)(n.td,{children:"Elasticsearch specific index template"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchcustomindextemplatebody",children:"ElasticSearchCustomIndexTemplateBody"})}),(0,s.jsx)(n.td,{children:"Elasticsearch specific index template body"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchhighlightconfig",children:"ElasticSearchHighlightConfig"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchhighlightoptions",children:"ElasticSearchHighlightOptions"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchindexaction",children:"ElasticSearchIndexAction"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchoptions",children:"ElasticSearchOptions"})}),(0,s.jsx)(n.td,{children:"Options for instantiate ElasticSearchSearchEngine"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchquerytranslator",children:"ElasticSearchQueryTranslator"})}),(0,s.jsx)(n.td,{children:"Elasticsearch specific query translator."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchquerytranslatoroptions",children:"ElasticSearchQueryTranslatorOptions"})}),(0,s.jsx)(n.td,{children:"Options available for the Elasticsearch specific query translator."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengineindexeroptions",children:"ElasticSearchSearchEngineIndexerOptions"})}),(0,s.jsx)(n.td,{children:"Options for instantiate ElasticSearchSearchEngineIndexer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.opensearchauth",children:"OpenSearchAuth"})}),(0,s.jsx)(n.td,{})]})]})]})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},221020:(e,n,c)=>{var s=c(296540),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(e,n,c){var s,a={},h=null,d=null;for(s in void 0!==c&&(h=""+c),void 0!==n.key&&(h=""+n.key),void 0!==n.ref&&(d=n.ref),n)t.call(n,s)&&!l.hasOwnProperty(s)&&(a[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===a[s]&&(a[s]=n[s]);return{$$typeof:r,type:e,key:h,ref:d,props:a,_owner:i.current}}n.Fragment=a,n.jsx=h,n.jsxs=h},474848:(e,n,c)=>{e.exports=c(221020)},28453:(e,n,c)=>{c.d(n,{R:()=>t,x:()=>i});var s=c(296540);const r={},a=s.createContext(r);function t(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);