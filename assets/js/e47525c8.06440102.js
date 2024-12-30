/*! For license information please see e47525c8.06440102.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[688578],{304480:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>d,metadata:()=>i,toc:()=>u});var t=n(474848),s=n(28453);const d={id:"plugin-kubernetes-backend.kubernetesbuilder",title:"KubernetesBuilder",description:"API reference for KubernetesBuilder"},c=void 0,i={id:"reference/plugin-kubernetes-backend.kubernetesbuilder",title:"KubernetesBuilder",description:"API reference for KubernetesBuilder",source:"@site/versioned_docs/version-stable/reference/plugin-kubernetes-backend.kubernetesbuilder.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-backend.kubernetesbuilder",permalink:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.md",tags:[],version:"stable",frontMatter:{id:"plugin-kubernetes-backend.kubernetesbuilder",title:"KubernetesBuilder",description:"API reference for KubernetesBuilder"}},l={},u=[{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function h(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-kubernetes-backend"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder",children:(0,t.jsx)(r.code,{children:"KubernetesBuilder"})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"class KubernetesBuilder \n"})}),"\n",(0,t.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Constructor"}),(0,t.jsx)(r.th,{children:"Modifiers"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder._constructor_",children:"(constructor)(env)"})}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:["Constructs a new instance of the ",(0,t.jsx)(r.code,{children:"KubernetesBuilder"})," class"]})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Property"}),(0,t.jsx)(r.th,{children:"Modifiers"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.env",children:"env"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"readonly"})})]}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesenvironment",children:"KubernetesEnvironment"})}),(0,t.jsx)(r.td,{})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Method"}),(0,t.jsx)(r.th,{children:"Modifiers"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.addauthstrategy",children:"addAuthStrategy(key, strategy)"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.build",children:"build()"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildauthstrategymap",children:"buildAuthStrategyMap()"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildcatalogrelationservicelocator",children:"buildCatalogRelationServiceLocator(clusterSupplier)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildclustersupplier",children:"buildClusterSupplier(refreshInterval)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildcustomresources",children:"buildCustomResources()"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildfetcher",children:"buildFetcher()"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildhttpservicelocator",children:"buildHttpServiceLocator(_clusterSupplier)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildmultitenantservicelocator",children:"buildMultiTenantServiceLocator(clusterSupplier)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildobjectsprovider",children:"buildObjectsProvider(options)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildproxy",children:"buildProxy(logger, clusterSupplier, discovery, httpAuth)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildrouter",children:"buildRouter(objectsProvider, clusterSupplier, catalogApi, proxy, permissionApi, authService, httpAuth)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildservicelocator",children:"buildServiceLocator(method, clusterSupplier)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildsingletenantservicelocator",children:"buildSingleTenantServiceLocator(clusterSupplier)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.createbuilder",children:"createBuilder(env)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"static"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.fetchclusterdetails",children:"fetchClusterDetails(clusterSupplier, options)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.getauthstrategymap",children:"getAuthStrategyMap()"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.getclustersupplier",children:"getClusterSupplier()"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.getfetcher",children:"getFetcher()"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.getobjectsprovider",children:"getObjectsProvider(options)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.getobjecttypestofetch",children:"getObjectTypesToFetch()"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.getproxy",children:"getProxy(logger, clusterSupplier, discovery, httpAuth)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.getservicelocator",children:"getServiceLocator()"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.getservicelocatormethod",children:"getServiceLocatorMethod()"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.setauthstrategymap",children:"setAuthStrategyMap(authStrategyMap)"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.setclustersupplier",children:"setClusterSupplier(clusterSupplier)"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.setdefaultclusterrefreshinterval",children:"setDefaultClusterRefreshInterval(refreshInterval)"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.setfetcher",children:"setFetcher(fetcher)"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.setobjectsprovider",children:"setObjectsProvider(objectsProvider)"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.setproxy",children:"setProxy(proxy)"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.setservicelocator",children:"setServiceLocator(serviceLocator)"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]})]})]})]})}function o(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},221020:(e,r,n)=>{var t=n(296540),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,n){var t,d={},u=null,h=null;for(t in void 0!==n&&(u=""+n),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(h=r.ref),r)c.call(r,t)&&!l.hasOwnProperty(t)&&(d[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===d[t]&&(d[t]=r[t]);return{$$typeof:s,type:e,key:u,ref:h,props:d,_owner:i.current}}r.Fragment=d,r.jsx=u,r.jsxs=u},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>i});var t=n(296540);const s={},d=t.createContext(s);function c(e){const r=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(d.Provider,{value:r},e.children)}}}]);