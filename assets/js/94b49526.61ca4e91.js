/*! For license information please see 94b49526.61ca4e91.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[84408],{135495:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var o=i(474848),r=i(28453);const n={id:"services",title:"Backend Services",sidebar_label:"Services",description:"Services for backend plugins"},s=void 0,c={id:"backend-system/architecture/services",title:"Backend Services",description:"Services for backend plugins",source:"@site/versioned_docs/version-stable/backend-system/architecture/03-services.md",sourceDirName:"backend-system/architecture",slug:"/backend-system/architecture/services",permalink:"/docs/backend-system/architecture/services",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/backend-system/architecture/03-services.md",tags:[],version:"stable",sidebarPosition:3,frontMatter:{id:"services",title:"Backend Services",sidebar_label:"Services",description:"Services for backend plugins"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/backend-system/architecture/index"},next:{title:"Plugins",permalink:"/docs/backend-system/architecture/plugins"}},a={},d=[{value:"Service Interfaces",id:"service-interfaces",level:2},{value:"Service References",id:"service-references",level:2},{value:"Service Factories",id:"service-factories",level:2},{value:"Core Services",id:"core-services",level:2},{value:"Service Scope",id:"service-scope",level:2},{value:"Root Scoped Services",id:"root-scoped-services",level:2},{value:"Plugin Metadata",id:"plugin-metadata",level:2},{value:"Root Context for Service Factories",id:"root-context-for-service-factories",level:2},{value:"Default Service Factories",id:"default-service-factories",level:2},{value:"Service Factory Customization",id:"service-factory-customization",level:2},{value:"Service Factory Options Pattern",id:"service-factory-options-pattern",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Backend services provide shared functionality available to all backend plugins and modules. They are made available through service references that embed a type that represents the service interface, similar to how ",(0,o.jsx)(t.a,{href:"/docs/api/utility-apis",children:"Utility APIs"})," work in the Backstage frontend system. To use a service in your plugin or module you request an implementation of that service using the service reference."]}),"\n",(0,o.jsx)(t.p,{children:"The system surrounding services exists to provide a level of indirection between the service interfaces and their implementation. It is an implementation of dependency injection, where each backend instance is the dependency injection container. The implementation for each service is provided by a service factory, which encapsulates the logic for how each service instance is created."}),"\n",(0,o.jsx)(t.h2,{id:"service-interfaces",children:"Service Interfaces"}),"\n",(0,o.jsx)(t.p,{children:"Service interfaces can be any TypeScript type, but it is best to make it an object interface with a number of methods. General guidelines for interface design apply: keep them simple and lean, with few but powerful methods. Take care to avoid locking down the ways in which individual methods can evolve. Often you want to stick to a method with an options object as its only parameter, and return a result object. If there is any reason for uncertainty about whether the method should be async or not, always make it async. For example, a minimal interface should often use the following pattern:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"export interface FooService {\n  foo(options: FooOptions): Promise<FooResult>;\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"service-references",children:"Service References"}),"\n",(0,o.jsxs)(t.p,{children:["Once you have defined a service interface, you need to create a service reference using the ",(0,o.jsx)(t.code,{children:"createServiceRef"})," function. This will create a ",(0,o.jsx)(t.code,{children:"ServiceRef"})," instance, which is a reference that you export in order to allow users to interact with your service. Conceptually this is very similar to ",(0,o.jsx)(t.code,{children:"ApiRef"}),"s in the frontend system. For example:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import { createServiceRef } from '@backstage/backend-plugin-api';\n\nexport interface FooService {\n  foo(options: FooOptions): Promise<FooResult>;\n}\n\nexport const fooServiceRef = createServiceRef<FooService>({\n  id: 'example.foo', // the owner of this service is in this case the 'example' plugin\n});\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"fooServiceRef"})," that we create above should be exported, and can then be used to declare a dependency on the ",(0,o.jsx)(t.code,{children:"FooService"})," interface and receive an implementation of it at runtime."]}),"\n",(0,o.jsxs)(t.p,{children:["When creating a service reference you need to give it an ID. This ID needs to be globally unique, and should generally be of the format ",(0,o.jsx)(t.code,{children:"'<pluginId>.<serviceName>'"}),". For more naming patterns surrounding services, see the ",(0,o.jsx)(t.a,{href:"/docs/backend-system/architecture/naming-patterns#services",children:"naming patterns"})," page."]}),"\n",(0,o.jsx)(t.p,{children:'A note on naming: the frontend and backend systems intentionally use the separate names "APIs" and "Services" for concepts that are quite similar. This is to avoid confusion between the two, both in documentation and discussion, but also in code. While the two systems are quite similar, they are not identical, and they can\'t be used interchangeably.'}),"\n",(0,o.jsx)(t.h2,{id:"service-factories",children:"Service Factories"}),"\n",(0,o.jsx)(t.p,{children:"In order to be able to depend on a service interface through a service reference, we of course also need to have some way of creating the concrete implementation of it. To encapsulate that logic we use service factories, which define both how service instances are created, as well as what other services they depend on for their implementation."}),"\n",(0,o.jsx)(t.p,{children:"Service factories can come from many different sources. There are built-in service factories, external ones that you can import from other packages, and you can also create your own. Specific service factories are installed within each backend instance, which acts as the dependency injection container. For any given backend instance there can only be a single designated service factory for each service."}),"\n",(0,o.jsxs)(t.p,{children:["To define a service factory, we use ",(0,o.jsx)(t.code,{children:"createServiceFactory"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import { createServiceFactory } from '@backstage/backend-plugin-api';\n\nclass DefaultFooService implements FooService {\n  async foo(options: FooOptions): Promise<FooResult> {\n    // ...\n  }\n}\n\nexport const fooServiceFactory = createServiceFactory({\n  service: fooServiceRef,\n  deps: { bar: barServiceRef },\n  factory({ bar }) {\n    return new DefaultFooService(bar);\n  },\n});\n"})}),"\n",(0,o.jsxs)(t.p,{children:["To create a service factory we need to provide a reference to the ",(0,o.jsx)(t.code,{children:"service"})," for which the factory will create instances, a ",(0,o.jsx)(t.code,{children:"deps"})," object which lists the other services that the factory depends on, and a ",(0,o.jsx)(t.code,{children:"factory"})," function which will be called to create the service instance. The backend system will call the ",(0,o.jsx)(t.code,{children:"factory"})," function with an object that contains the service instances for each of the dependencies listed in the ",(0,o.jsx)(t.code,{children:"deps"})," object. If a service implementation does not depend on any other services, the ",(0,o.jsx)(t.code,{children:"deps"})," are left as an empty object (",(0,o.jsx)(t.code,{children:"{}"}),"). The ",(0,o.jsx)(t.code,{children:"factory"})," function must return a value that implements the service interface."]}),"\n",(0,o.jsxs)(t.p,{children:["If you need the creation of the service instance to be asynchronous, you can make the ",(0,o.jsx)(t.code,{children:"factory"})," function async. For example:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"export const fooServiceFactory = createServiceFactory({\n  service: fooServiceRef,\n  deps: {},\n  async factory() {\n    const foo = new DefaultFooService();\n    await foo.init();\n    return foo;\n  },\n});\n"})}),"\n",(0,o.jsx)(t.p,{children:"Note that circular dependencies among service factories are not allowed. This is verified at runtime, and your backend instance will refuse to start up if it detects any conflicts. Likewise, the backend will also fail to start up if a service factory depends on a service that is not provided by any registered service factory."}),"\n",(0,o.jsx)(t.h2,{id:"core-services",children:"Core Services"}),"\n",(0,o.jsxs)(t.p,{children:["The backend system provides a number of core service definitions that both help implement the main functionality of the backend, but also provide a set of utilities for common concerns, such as logging, database access, job scheduling, and so on. These core services will always be present in a backend instance created with ",(0,o.jsx)(t.code,{children:"createBackend"}),", and they can all be overridden with custom implementations if needed."]}),"\n",(0,o.jsxs)(t.p,{children:["The service references for all core services are exported via their own ",(0,o.jsx)(t.code,{children:"coreServices"})," object, available from the ",(0,o.jsx)(t.code,{children:"@backstage/backend-plugin-api"})," package. For example, the logging service is accessible via ",(0,o.jsx)(t.code,{children:"coreServices.logger"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["You can read more about what core services there are and how to use them in the ",(0,o.jsx)(t.a,{href:"/docs/backend-system/core-services/index",children:"core services"})," section."]}),"\n",(0,o.jsx)(t.h2,{id:"service-scope",children:"Service Scope"}),"\n",(0,o.jsxs)(t.p,{children:["By default services are scoped to individual plugins, meaning that separate instances of the service will be created for each plugin. For example, in our ",(0,o.jsx)(t.code,{children:"fooFactory"})," above, a separate instance of ",(0,o.jsx)(t.code,{children:"DefaultFooService"})," will be created for every plugin that depends on the service. This both makes it possible to tailor the service implementations for the individual plugins, and also ensures some level of separation between plugins."]}),"\n",(0,o.jsxs)(t.p,{children:["The service scope is defined during the call to ",(0,o.jsx)(t.code,{children:"createServiceRef"}),", with plugin scope being the default. Our above definition of the ",(0,o.jsx)(t.code,{children:"fooServiceRef"})," is therefore equivalent to the following:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"export const fooServiceRef = createServiceRef<FooService>({\n  scope: 'plugin',\n  id: 'example.foo',\n});\n"})}),"\n",(0,o.jsxs)(t.p,{children:["There are only two possible scopes for services, ",(0,o.jsx)(t.code,{children:"'plugin'"})," and ",(0,o.jsx)(t.code,{children:"'root'"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"root-scoped-services",children:"Root Scoped Services"}),"\n",(0,o.jsx)(t.p,{children:"If a service is defined as a root scoped service, the implementation created by the factory will be shared across all plugins and services. One other differentiating factor for root scoped services is that they are always initialized, regardless of whether any plugins depend on them or not. This makes them suitable for implementing backend-wide concerns that are not specific to any individual plugin."}),"\n",(0,o.jsx)(t.p,{children:"There is a limitation in the usage of root scoped services, which is that their implementation can only depend on other root scoped services. Plugin scoped services on the other hand can depend on both root and plugin scoped services. Because of this limitation, one of the main reasons to define a root scoped services is to make it possible for other root scoped services to depend on it."}),"\n",(0,o.jsx)(t.p,{children:"Because of these limitations and particular use-cases for root scoped services, they tend to be more rare than plugin scoped services. In general, you should prefer defining a service as plugin scoped, unless you are implementing either of the two mentioned use-cases."}),"\n",(0,o.jsxs)(t.p,{children:["Some services come in pairs of a plugin and a root scoped service definition. For example, the ",(0,o.jsx)(t.code,{children:"rootLogger"})," service is a root scoped service, while the ",(0,o.jsx)(t.code,{children:"logger"})," service is a plugin scoped service. The ",(0,o.jsx)(t.code,{children:"rootLogger"})," service houses the main logging implementation, while the ",(0,o.jsx)(t.code,{children:"logger"})," service simply builds upon the ",(0,o.jsx)(t.code,{children:"rootLogger"})," to add plugin specific labels. This division exists so that other root scoped services also have access to a logging service, but it is always preferable if the split can be avoided. If you do end up implementing this pattern, the root scoped service should be prefixed with ",(0,o.jsx)(t.code,{children:"root"}),", this is to encourage use of the plugin scoped service instead."]}),"\n",(0,o.jsx)(t.h2,{id:"plugin-metadata",children:"Plugin Metadata"}),"\n",(0,o.jsxs)(t.p,{children:["Plugin scoped services have access to a plugin metadata service, which is a special service provided by the backend system that is not possible to override. The plugin metadata service provides information about the plugin that a service instance is being created for. It is itself a plugin scoped service, and can be depended on like any other service through the ",(0,o.jsx)(t.code,{children:"coreServices.pluginMetadata"})," reference."]}),"\n",(0,o.jsx)(t.p,{children:"The plugin metadata service is the base for all plugin specific customizations for services. For example, the default implementation of the plugin scoped logger service uses the plugin metadata service to attach the plugin ID as a field in all log messages:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"export const loggerServiceFactory = createServiceFactory({\n  service: coreServices.logger,\n  deps: {\n    rootLogger: coreServices.rootLogger,\n    pluginMetadata: coreServices.pluginMetadata,\n  },\n  factory({ rootLogger, pluginMetadata }) {\n    return rootLogger.child({ plugin: pluginMetadata.getId() });\n  },\n});\n"})}),"\n",(0,o.jsx)(t.h2,{id:"root-context-for-service-factories",children:"Root Context for Service Factories"}),"\n",(0,o.jsxs)(t.p,{children:["Some services may benefit from having a context that is shared across all instances of a service. This of course only applies to plugin scoped services, as root scoped services only ever have a single instance. The root context could for example be used for sharing a common connection pool for database access, generated secrets for development, or any other kind of shared facility. Note that you should not use this to share state between plugins in production, as that would be a violation of the ",(0,o.jsx)(t.a,{href:"/docs/backend-system/architecture/plugins#rules-of-plugins",children:"plugin isolation rule"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["The root context is defined as part of the service factory by passing the ",(0,o.jsx)(t.code,{children:"createRootContext"})," option:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"export const fooServiceFactory = createServiceFactory({\n  service: fooServiceRef,\n  deps: { rootLogger: coreServices.rootLogger, bar: barServiceRef },\n  createRootContext({ rootLogger }) {\n    return new FooRootContext(rootLogger);\n  }\n  factory({ bar }, ctx) {\n    return ctx.forPlugin(bar)\n  },\n});\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Whatever value is returned by the ",(0,o.jsx)(t.code,{children:"createRootContext"})," function will be shared and passed as the second argument to each invocation of the ",(0,o.jsx)(t.code,{children:"factory"})," function. That way you can create a shared context that is used in the creation of each plugin instance. Unlike the ",(0,o.jsx)(t.code,{children:"factory"})," function, the ",(0,o.jsx)(t.code,{children:"createRootContext"})," function will only receive root scoped services as its dependencies, but just like the ",(0,o.jsx)(t.code,{children:"factory"})," function, it can also be ",(0,o.jsx)(t.code,{children:"async"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"default-service-factories",children:"Default Service Factories"}),"\n",(0,o.jsx)(t.p,{children:"There are a lot of services that are installed in any standard Backstage backend instance by default. You can expect these services to always exist, and do not need to take any additional steps to make them available. This is not necessarily true for services that you import from external packages, as the user of your plugin or module might not have installed a factory for that service in their backend. In order to avoid having to ask integrators of your plugin to install a service factory for a service that you depend on, it is possible to define a default factory for a service."}),"\n",(0,o.jsxs)(t.p,{children:["Default service factories are defined as part of the service reference by passing the ",(0,o.jsx)(t.code,{children:"defaultFactory"})," option to ",(0,o.jsx)(t.code,{children:"createServiceRef"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import {\n  createServiceFactory,\n  createServiceRef,\n} from '@backstage/backend-plugin-api';\n\nexport const fooServiceRef = createServiceRef<FooService>({\n  id: 'example.foo',\n  defaultFactory: async service =>\n    createServiceFactory({\n      service,\n      deps: {},\n      factory() {\n        return new DefaultFooService();\n      },\n    }),\n});\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Note that we don't use the ",(0,o.jsx)(t.code,{children:"fooServiceRef"})," when creating our service factory, but instead use the ",(0,o.jsx)(t.code,{children:"service"})," parameter in the default factory callback. This is because attempting to use ",(0,o.jsx)(t.code,{children:"fooServiceRef"})," directly would result in a circular reference."]}),"\n",(0,o.jsx)(t.p,{children:"If a service defines a default factory, that factory will be used if there is no explicit factory registered in the backend for that service. This allows users of your service to directly import and use a service, without worrying about whether it is installed or not. It is recommended to always define a default factory for any service that you are exporting for use in other plugins or modules."}),"\n",(0,o.jsx)(t.p,{children:"When defining a default factory for a service, it is possible for it to end up with duplicate implementations at runtime. This applies both to any shared root context in your factory, as well as plugin specific instances of your service. This is because package dependency version ranges may not line up perfectly, causing duplicate installations of the same package. This can happen both for two different plugins using the same service, but also across a plugin and its modules. If your service would break in this scenario, you should not define a default factory for it, but instead require that users of your service explicitly install a factory in their backend instance."}),"\n",(0,o.jsx)(t.h2,{id:"service-factory-customization",children:"Service Factory Customization"}),"\n",(0,o.jsxs)(t.p,{children:["When declaring a service factory you may also want to make the export the building blocks of the implementation itself. This is to allow for further customization of the service implementation through code, beyond what is possible with static configuration, without the need to re-implement the entire service from scratch. For example, we might export our example ",(0,o.jsx)(t.code,{children:"DefaultFooService"})," class, while moving construction to a static ",(0,o.jsx)(t.code,{children:"create"})," factory method to make it easier to evolve:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"export class DefaultFooService {\n  static create(options: { transform: (foo: string) => string }) {\n    return new DefaultFooService(options.transform ?? (foo) => foo);\n  }\n\n  private constructor(private readonly transform: (foo: string) => string) {}\n\n  foo(foo: string): string {\n    return this.transform(foo);\n  }\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["By exporting ",(0,o.jsx)(t.code,{children:"DefaultFooService"})," we now make it relatively simple for advanced users of our service to customize the implementation. To do so, they can define their own service factory that uses our provided implementation:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"export const customFooServiceFactory = createServiceFactory({\n  service: fooServiceRef,\n  deps: {},\n  factory() {\n    return DefaultFooService.create({\n      transform: foo => foo.toUpperCase(),\n    });\n  },\n});\n"})}),"\n",(0,o.jsx)(t.p,{children:"This allows you to provide more advanced options for the service implementation that couldn't be expressed through static configuration. It also gives users of the service implementation access to other services through dependency injection, which can be useful for their customizations."}),"\n",(0,o.jsx)(t.h2,{id:"service-factory-options-pattern",children:"Service Factory Options Pattern"}),"\n",(0,o.jsx)(t.admonition,{title:"Note",type:"note",children:(0,o.jsx)(t.p,{children:"This pattern is discouraged, only use it when necessary. If possible you should prefer to make services configurable via static configuration or re-implementation instead."})}),"\n",(0,o.jsx)(t.p,{children:"In some cases it might be beneficial to allow users of your service factory to pass options to the factory itself, rather than to the service implementation. This can be enabled by also defining the service factory as a function that returns a reconfigured factory. For example:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"const fooServiceFactoryWithOptions = (options?: {\n  transform: (foo: string) => string;\n}) =>\n  createServiceFactory<FooService>({\n    service: fooServiceRef,\n    deps: {},\n    factory() {\n      return DefaultFooService.create({\n        transform: options?.transform,\n      });\n    },\n  });\n\nexport const fooServiceFactory = Object.assign(\n  fooServiceFactoryWithOptions,\n  fooServiceFactoryWithOptions(),\n);\n"})}),"\n",(0,o.jsxs)(t.p,{children:["This makes it possible to use the ",(0,o.jsx)(t.code,{children:"fooServiceFactory"})," directly, as well passing additional options to create a customized factory:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"backend.add(fooServiceFactory);\n// OR\nbackend.add(fooServiceFactory({ transform: foo => foo.toLowerCase() }));\n"})}),"\n",(0,o.jsxs)(t.p,{children:["This pattern is discouraged due to the inability to access other services through dependency injection. It is however used in a few places in the Backstage framework where the ability to directly pass options without re-implementing the service is very convenient, such as the ",(0,o.jsx)(t.code,{children:"mockServices"})," from ",(0,o.jsx)(t.code,{children:"@backstage/backend-test-utils"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,t,i)=>{var o=i(296540),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,i){var o,n={},d=null,l=null;for(o in void 0!==i&&(d=""+i),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,o)&&!a.hasOwnProperty(o)&&(n[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===n[o]&&(n[o]=t[o]);return{$$typeof:r,type:e,key:d,ref:l,props:n,_owner:c.current}}t.Fragment=n,t.jsx=d,t.jsxs=d},474848:(e,t,i)=>{e.exports=i(221020)},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>c});var o=i(296540);const r={},n=o.createContext(r);function s(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);