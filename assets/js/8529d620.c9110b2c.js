/*! For license information please see 8529d620.c9110b2c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[824957],{792702:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(474848),s=t(28453);const r={id:"migrating",title:"Migrating your Backend Plugin to the New Backend System",sidebar_label:"Migration Guide",description:"How to migrate existing backend plugins to the new backend system"},o=void 0,a={id:"backend-system/building-plugins-and-modules/migrating",title:"Migrating your Backend Plugin to the New Backend System",description:"How to migrate existing backend plugins to the new backend system",source:"@site/versioned_docs/version-stable/backend-system/building-plugins-and-modules/08-migrating.md",sourceDirName:"backend-system/building-plugins-and-modules",slug:"/backend-system/building-plugins-and-modules/migrating",permalink:"/docs/backend-system/building-plugins-and-modules/migrating",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/backend-system/building-plugins-and-modules/08-migrating.md",tags:[],version:"stable",sidebarPosition:8,frontMatter:{id:"migrating",title:"Migrating your Backend Plugin to the New Backend System",sidebar_label:"Migration Guide",description:"How to migrate existing backend plugins to the new backend system"},sidebar:"docs",previous:{title:"Testing",permalink:"/docs/backend-system/building-plugins-and-modules/testing"},next:{title:"Overview",permalink:"/docs/backend-system/core-services/index"}},l={},c=[{value:"Dev Server",id:"dev-server",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Migrating an existing backend plugin to the new backend system is fairly straightforward. The process is similar across the majority of plugins which just return a ",(0,i.jsx)(n.code,{children:"Router"})," that is then wired up in the ",(0,i.jsx)(n.code,{children:"index.ts"})," file of your backend. The primary thing that we need to do is to make sure that the dependencies that are required by the plugin are available, and then registering the router with the HTTP router service."]}),"\n",(0,i.jsx)(n.p,{children:"Let's look at an example of migrating the Kubernetes backend plugin. In the existing (old) system, the kubernetes backend is structured like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// @backstage/plugin-kubernetes-backend/src/service/router.ts\n\nimport { KubernetesBuilder } from './KubernetesBuilder';\nexport interface RouterOptions {\n  logger: Logger;\n  config: Config;\n  catalogApi: CatalogApi;\n  clusterSupplier?: KubernetesClustersSupplier;\n  discovery: PluginEndpointDiscovery;\n}\n\nexport async function createRouter(\n  options: RouterOptions,\n): Promise<express.Router> {\n  const { router } = await KubernetesBuilder.createBuilder(options)\n    .setClusterSupplier(options.clusterSupplier)\n    .build();\n  return router;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["We can re-use the ",(0,i.jsx)(n.code,{children:"router"})," created by the ",(0,i.jsx)(n.code,{children:"KubernetesBuilder"})," in the new backend system. We only need to make sure that the dependencies specified in ",(0,i.jsx)(n.code,{children:"RouterOptions"})," above are available. All of them are part of the ",(0,i.jsx)(n.code,{children:"coreServices"})," which makes migration easy."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\nimport { catalogServiceRef } from '@backstage/plugin-catalog-node/alpha';\nimport { Router } from 'express';\nimport { KubernetesBuilder } from './KubernetesBuilder';\n\nexport const kubernetesPlugin = createBackendPlugin({\n  pluginId: 'kubernetes',\n  register(env) {\n    env.registerInit({\n      deps: {\n        logger: coreServices.logger,\n        config: coreServices.rootConfig,\n        catalogApi: catalogServiceRef,\n        discovery: coreServices.discovery,\n        // The http router service is used to register the router created by the KubernetesBuilder.\n        http: coreServices.httpRouter,\n      },\n      async init({ config, logger, catalogApi, discovery, http }) {\n        const { router } = await KubernetesBuilder.createBuilder({\n          config,\n          logger,\n          catalogApi,\n          discovery,\n        }).build();\n\n        // We register the router with the http service.\n        http.use(router);\n      },\n    });\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Lastly, make sure you re-export the plugin instance as the default export of your package in ",(0,i.jsx)(n.code,{children:"src/index.ts"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export { kubernetesPlugin as default } from './plugin.ts';\n"})}),"\n",(0,i.jsx)(n.p,{children:"Done! Users of this plugin are now able to import your plugin package and register it in their backend using"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// packages/backend/src/index.ts\nbackend.add(import('@backstage/plugin-kubernetes-backend'));\n"})}),"\n",(0,i.jsxs)(n.p,{children:["There's one thing missing that those sharp eyed readers might have noticed: the ",(0,i.jsx)(n.code,{children:"clusterSupplier"})," option is missing from the original plugin. Let's add it and discuss the alternatives."]}),"\n",(0,i.jsxs)(n.p,{children:["One alternative is to make it possible to build the cluster supplier using static configuration. It could for example be that there is a selection of built-in implementations to choose from, or that the logic for how the ",(0,i.jsx)(n.code,{children:"ClusterSupplier"})," is supposed to function is all determined by configuration, or a combination of the two. Using static configuration for customization is always the preferred option whenever it's possible. In this case, we could for example imagine that we would be able to configure our cluster supplier like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"/* omitted imports but they remain the same as above */\n\nconst kubernetesPlugin = createBackendPlugin({\n  pluginId: 'kubernetes',\n  register(env) {\n    env.registerInit({\n      deps: {\n        /* omitted dependencies but they remain the same as above */\n      },\n      async init({ config, logger, catalogApi, discovery, http }) {\n        // Note that in a real implementation this would be done by the `KubernetesBuilder` instead,\n        // but here we've extracted it into a separate call to highlight the example.\n        const configuredClusterSupplier = readClusterSupplierFromConfig(config);\n\n        const { router } = await KubernetesBuilder.createBuilder({\n          config,\n          logger,\n          catalogApi,\n          discovery,\n        })\n          .setClusterSupplier(configuredClusterSupplier)\n          .build();\n        http.use(router);\n      },\n    });\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["There are however many types of customizations that are not possible to do with static configuration. In this case we want integrators to be able to create arbitrary implementations of the ",(0,i.jsx)(n.code,{children:"ClusterSupplier"})," interface, which in the end requires an implementation through code. This is where the new backend system's ",(0,i.jsx)(n.a,{href:"/docs/backend-system/architecture/extension-points",children:"extension points"})," come in handy."]}),"\n",(0,i.jsxs)(n.p,{children:["The new ",(0,i.jsx)(n.a,{href:"/docs/backend-system/architecture/extension-points",children:"extension points"})," API allows ",(0,i.jsx)(n.a,{href:"/docs/backend-system/architecture/modules",children:"modules"})," to add functionality into the backend plugin itself, in this case an additional ",(0,i.jsx)(n.code,{children:"ClusterSupplier"}),". Let's look at how we could add support for installing custom suppliers using an extension point. This will allow integrators to build their own internal module with a custom ",(0,i.jsx)(n.code,{children:"ClusterSupplier"})," implementation."]}),"\n",(0,i.jsxs)(n.p,{children:["First we'll go ahead and create a ",(0,i.jsx)(n.code,{children:"@backstage/plugin-kubernetes-node"})," package where we can define our extension point. A separate package is used to avoid direct dependencies on the plugin package itself. With the new package created, we define the extension point like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { createExtensionPoint } from '@backstage/backend-plugin-api';\n\nexport interface KubernetesClusterSupplierExtensionPoint {\n  setClusterSupplier(supplier: KubernetesClustersSupplier): void;\n}\n\n/**\n * An extension point that allows other plugins to set the cluster supplier.\n */\nexport const kubernetesClustersSupplierExtensionPoint =\n  createExtensionPoint<KubernetesClusterSupplierExtensionPoint>({\n    id: 'kubernetes.cluster-supplier',\n  });\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For more information on how to design extension points, see the ",(0,i.jsx)(n.a,{href:"/docs/backend-system/architecture/extension-points#extension-point-design",children:"extension points"})," documentation."]}),"\n",(0,i.jsx)(n.p,{children:"Next we'll need to add support for this extension point to the Kubernetes backend plugin itself:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"/* omitted other imports but they remain the same as above */\nimport { kubernetesClustersSupplierExtensionPoint } from '@backstage/plugin-kubernetes-node';\n\nexport const kubernetesPlugin = createBackendPlugin({\n  pluginId: 'kubernetes',\n  register(env) {\n    let clusterSupplier: KubernetesClustersSupplier | undefined = undefined;\n\n    // We register the extension point with the backend, which allows modules to\n    // register their own ClusterSupplier.\n    env.registerExtensionPoint(kubernetesClustersSupplierExtensionPoint, {\n      setClusterSupplier(supplier) {\n        if (clusterSupplier) {\n          throw new Error('ClusterSupplier may only be set once');\n        }\n        clusterSupplier = supplier;\n      },\n    });\n\n    env.registerInit({\n      deps: {\n        /* omitted dependencies but they remain the same as above */\n      },\n      async init({ config, logger, catalogApi, discovery, http }) {\n        const { router } = await KubernetesBuilder.createBuilder({\n          config,\n          logger,\n          catalogApi,\n          discovery,\n        })\n          .setClusterSupplier(clusterSupplier)\n          .build();\n        http.use(router);\n      },\n    });\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["And that's it! Modules can now be built that add clusters into to the kubernetes backend plugin, here's an example of a module that adds a ",(0,i.jsx)(n.code,{children:"GoogleContainerEngineSupplier"})," to the kubernetes backend:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { kubernetesClustersSupplierExtensionPoint } from '@backstage/plugin-kubernetes-node';\n\n// This is a custom implementation of the ClusterSupplier interface.\nimport { GoogleContainerEngineSupplier } from './GoogleContainerEngineSupplier';\n\nexport default createBackendModule({\n  pluginId: 'kubernetes',\n  moduleId: 'gke-supplier',\n  register(env) {\n    env.registerInit({\n      deps: {\n        supplier: kubernetesClustersSupplierExtensionPoint,\n      },\n      async init({ supplier }) {\n        supplier.setClusterSupplier(new GoogleContainerEngineSupplier());\n      },\n    });\n  },\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"The above module can then be installed by the integrator alongside the kubernetes backend plugin:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"backend.add(import('@backstage/plugin-kubernetes-backend'));\nbackend.add(import('@internal/gke-cluster-supplier'));\n"})}),"\n",(0,i.jsx)(n.h3,{id:"dev-server",children:"Dev Server"}),"\n",(0,i.jsx)(n.p,{children:"Follow the steps below to run your migrated plugin on a local development server:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["First, delete the ",(0,i.jsx)(n.code,{children:"src/run.ts"})," and ",(0,i.jsx)(n.code,{children:"src/service/standaloneServer.ts"})," files in case they exist (the ",(0,i.jsx)(n.code,{children:"backstage-cli"})," previously used these files to run legacy backend plugins locally, but they are no longer required)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Next, create a new development backend in the ",(0,i.jsx)(n.code,{children:"dev/index.ts"})," file. The dev server is a lite version of a backend app that is mainly used to run your plugin locally, so a simple ",(0,i.jsx)(n.code,{children:"kubernetes"})," backend local development server would look like this:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="in dev/index.js"',children:"// This package should be installed as a `dev` dependency\nimport { createBackend } from '@backstage/backend-defaults';\n\nconst backend = createBackend();\n// Path to the file where the plugin is export as default\nbackend.add(import('../src'));\nbackend.start();\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The development server created above will be automatically configured with the default dependency factories, but if you need to mock some of the services your plugin relies on, such as the ",(0,i.jsx)(n.code,{children:"rootConfig"})," service, you can use one of the ",(0,i.jsx)(n.code,{children:"mockServices"})," factories:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="in dev/index.js"',children:"//...\n// This package should be installed as `devDependecies`\nimport { mockServices } from '@backstage/backend-test-utils';\n\nconst backend = createBackend();\n// ...\nbackend.add(\n  mockServices.rootConfig.factory({\n    data: {\n      // your config mocked values goes here\n    },\n  }),\n);\n// ...\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Checkout the ",(0,i.jsx)(n.a,{href:"https://backstage.io/docs/backend-system/building-backends/index#custom-service-implementations",children:"custom service implementations"})," documentation and also the ",(0,i.jsx)(n.a,{href:"https://backstage.io/docs/backend-system/core-services/index",children:"core service configurations"})," page in case you'd like to create your own custom mock factory for one or more services."]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Now you can finally start your plugin locally by running ",(0,i.jsx)(n.code,{children:"yarn start"})," from the root folder of your plugin."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},221020:(e,n,t)=>{var i=t(296540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var i,r={},c=null,d=null;for(i in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,i)&&!l.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:s,type:e,key:c,ref:d,props:r,_owner:a.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(296540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);