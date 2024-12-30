/*! For license information please see 593001c4.a908c9fa.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[580652],{173812:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=s(474848),n=s(28453);const o={id:"v1.34.0",title:"v1.34.0",description:"Backstage Release v1.34.0"},r=void 0,a={id:"releases/v1.34.0",title:"v1.34.0",description:"Backstage Release v1.34.0",source:"@site/../docs/releases/v1.34.0.md",sourceDirName:"releases",slug:"/releases/v1.34.0",permalink:"/docs/next/releases/v1.34.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/releases/v1.34.0.md",tags:[],version:"current",frontMatter:{id:"v1.34.0",title:"v1.34.0",description:"Backstage Release v1.34.0"},sidebar:"releases",next:{title:"v1.33.0",permalink:"/docs/next/releases/v1.33.0"}},c={},l=[{value:"Highlights",id:"highlights",level:2},{value:"<strong>BREAKING</strong>: New version of <code>keyv</code>, Redis",id:"breaking-new-version-of-keyv-redis",level:3},{value:"<strong>BREAKING</strong>: Route change for notifications",id:"breaking-route-change-for-notifications",level:3},{value:"<strong>BREAKING</strong>: Scaffolder Gitlab module",id:"breaking-scaffolder-gitlab-module",level:3},{value:"Catalog performance improvements",id:"catalog-performance-improvements",level:3},{value:"Direct Google CloudSQL Postgres support",id:"direct-google-cloudsql-postgres-support",level:3},{value:"New integration: Azure blob storage",id:"new-integration-azure-blob-storage",level:3},{value:"Lifecycle and health",id:"lifecycle-and-health",level:3},{value:"Bitbucket API throttling",id:"bitbucket-api-throttling",level:3},{value:"Support for custom service-to-service tokens",id:"support-for-custom-service-to-service-tokens",level:3},{value:"Further improvements to the yarn plugin",id:"further-improvements-to-the-yarn-plugin",level:3},{value:"Removing <code>node-fetch</code> in the backend",id:"removing-node-fetch-in-the-backend",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["These are the release notes for the v1.34.0 release of ",(0,i.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."}),"\n",(0,i.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,i.jsxs)(t.h3,{id:"breaking-new-version-of-keyv-redis",children:[(0,i.jsx)(t.strong,{children:"BREAKING"}),": New version of ",(0,i.jsx)(t.code,{children:"keyv"}),", Redis"]}),"\n",(0,i.jsxs)(t.p,{children:["Our builtin core cache service is based on ",(0,i.jsx)(t.code,{children:"keyv"}),", whose redis integration has been upgraded. This fixes issues that the old version had especially in relation to redis sets. If you were setting ",(0,i.jsx)(t.code,{children:"useRedisSets: false"}),", note that the layout of your key space may be slightly affected after this change."]}),"\n",(0,i.jsxs)(t.p,{children:["Contributed by ",(0,i.jsx)(t.a,{href:"https://github.com/eipc16",children:"@eipc16"})," in ",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/27716",children:"#27716"}),", and more information can be found within that changeset."]}),"\n",(0,i.jsxs)(t.h3,{id:"breaking-route-change-for-notifications",children:[(0,i.jsx)(t.strong,{children:"BREAKING"}),": Route change for notifications"]}),"\n",(0,i.jsxs)(t.p,{children:["If you are interacting directly with the ",(0,i.jsx)(t.code,{children:"notifications"})," backend plugin API, it now no longer uses the ",(0,i.jsx)(t.code,{children:"/"})," root route but rather a ",(0,i.jsx)(t.code,{children:"/notifications"})," sub-route. This aligns it with our standards. The old routes are still available in the notifications backend, but the frontend will use the new routes."]}),"\n",(0,i.jsxs)(t.h3,{id:"breaking-scaffolder-gitlab-module",children:[(0,i.jsx)(t.strong,{children:"BREAKING"}),": Scaffolder Gitlab module"]}),"\n",(0,i.jsxs)(t.p,{children:["We\u2019ve upgraded to the most recent version of the ",(0,i.jsx)(t.code,{children:"gitbeaker"})," library that speaks to Gitlab. In doing so, the ",(0,i.jsx)(t.code,{children:"scopes"})," parameter of the ",(0,i.jsx)(t.code,{children:"gitlab:projectDeployToken:create"})," action is no longer optional, so you will have to pass it a value (for example ",(0,i.jsx)(t.code,{children:"['read_repository']"}),")."]}),"\n",(0,i.jsx)(t.h3,{id:"catalog-performance-improvements",children:"Catalog performance improvements"}),"\n",(0,i.jsxs)(t.p,{children:["Since last month\u2019s release, we have been putting a lot of focus on catalog performance, scouring through the metrics and improving several standout peaks. Among other things you may find that provider ",(0,i.jsx)(t.code,{children:"\u2019delta\u2019"})," mutations as well as some API calls are significantly faster."]}),"\n",(0,i.jsxs)(t.p,{children:["There is also a new experimental ",(0,i.jsx)(t.code,{children:"catalog.disableRelationsCompatibility"})," configuration option that, when set to ",(0,i.jsx)(t.code,{children:"true"}),", avoids JSON deserialization and serialization if possible when reading entities. This significantly reduces the memory usage of the catalog, and slightly increases performance, but it removes the backwards compatibility processing that ensures that both ",(0,i.jsx)(t.code,{children:"entity.relation[].target"})," and ",(0,i.jsx)(t.code,{children:"entity.relation[].targetRef"})," are present in returned entities. Do let us know if you find any problems in case you feel adventurous and enable this flag! Just be aware that the API response shape does change slightly if you do, as outlined above."]}),"\n",(0,i.jsx)(t.h3,{id:"direct-google-cloudsql-postgres-support",children:"Direct Google CloudSQL Postgres support"}),"\n",(0,i.jsxs)(t.p,{children:["You can now connect directly to your Google CloudSQL Postgres databases with IAM auth, without having to use sidecars or similar proxies. Update your ",(0,i.jsx)(t.code,{children:"backend.database.connection"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"connection:\n  type: cloudsql\n  instance: my-project:europe-west1:a-db-instance\n  # ... other settings\n"})}),"\n",(0,i.jsx)(t.h3,{id:"new-integration-azure-blob-storage",children:"New integration: Azure blob storage"}),"\n",(0,i.jsxs)(t.p,{children:["Azure blob storage is now better supported, both in terms of a low level integration package addition, as well as gaining a catalog entity provider that can read directly out of your storages. Head ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/integrations/azure/discovery",children:"straight to the docs"})," if this sounds interesting."]}),"\n",(0,i.jsxs)(t.p,{children:["Contributed by ",(0,i.jsx)(t.a,{href:"https://github.com/Nikunj0601",children:"@Nikunj0601"})," in ",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/27850",children:"#27850"})]}),"\n",(0,i.jsx)(t.h3,{id:"lifecycle-and-health",children:"Lifecycle and health"}),"\n",(0,i.jsxs)(t.p,{children:["The default readiness endpoint now immediately starts returning HTTP 503 errors when the process is asked to shut down. Pairing this with the ",(0,i.jsx)(t.code,{children:"backend.lifecycle.serverShutdownDelay"})," configuration option allows you to let your ingress detect the impending shutdown and drain traffic gracefully before the service finally stops. This helps with zero-downtime deployments."]}),"\n",(0,i.jsxs)(t.p,{children:["On the path to implementing that, the ",(0,i.jsx)(t.code,{children:"coreServices.rootLifecycle"})," service gained a new ",(0,i.jsx)(t.code,{children:"addBeforeShutdownHook"})," method whose registered hooks will run immediately when a termination signal is received. The backend will not proceed with the shutdown and run the regular ",(0,i.jsx)(t.code,{children:"Shutdown"})," hooks until all ",(0,i.jsx)(t.code,{children:"BeforeShutdown"})," hooks have completed."]}),"\n",(0,i.jsxs)(t.p,{children:["If you were using the ",(0,i.jsx)(t.code,{children:"startupRequestPauseTimeout"})," setting of the lifecycle service in code, you should now instead set it in the ",(0,i.jsx)(t.code,{children:"backend.lifecycle.startupRequestPauseTimeout"})," config, next to the one mentioned above."]}),"\n",(0,i.jsx)(t.h3,{id:"bitbucket-api-throttling",children:"Bitbucket API throttling"}),"\n",(0,i.jsx)(t.p,{children:"The Bitbucket integration (URL reader and catalog provider) now apply throttling to outgoing requests, to avoid hitting rate limits. Let us know how it affected your service!"}),"\n",(0,i.jsxs)(t.p,{children:["Contributed by ",(0,i.jsx)(t.a,{href:"https://github.com/kjjuno",children:"@kjjuno"})," in ",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/27850",children:"#27850"})]}),"\n",(0,i.jsx)(t.h3,{id:"support-for-custom-service-to-service-tokens",children:"Support for custom service-to-service tokens"}),"\n",(0,i.jsxs)(t.p,{children:["Do you have a pre-existing service-to-service auth scheme that you would like Backstage installations to leverage instead of only the native Backstage tokens? There\u2019s now a plugin token handler decorator interface that allows for injecting yourself in just the right spot in the auth chain, without having to reimplement the whole ",(0,i.jsx)(t.code,{children:"auth"})," core service. It\u2019s all ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/next/auth/service-to-service-auth#adding-custom-or-logic-for-validation-and-issuing-of-tokens",children:"covered in the docs"}),"!"]}),"\n",(0,i.jsx)(t.h3,{id:"further-improvements-to-the-yarn-plugin",children:"Further improvements to the yarn plugin"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"yarn plugin"})," received a number of updates, making it more conformant with yarn semantics. It now works better behind corporate proxies and uses an improved way of persisting resolutions in the lockfile. On top of it all, its on-disk footprint was reduced massively."]}),"\n",(0,i.jsxs)(t.p,{children:["If you use the classical ",(0,i.jsx)(t.code,{children:"yarn backstage-cli versions:bump"})," command, it now also ensures that the installed plugin itself stays updated with the latest and greatest without any further action on your part."]}),"\n",(0,i.jsxs)(t.p,{children:["Contributed by ",(0,i.jsx)(t.a,{href:"https://github.com/mtlewis",children:"@mtlewis"})," over several pull requests."]}),"\n",(0,i.jsxs)(t.h3,{id:"removing-node-fetch-in-the-backend",children:["Removing ",(0,i.jsx)(t.code,{children:"node-fetch"})," in the backend"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://backstage.io/docs/next/architecture-decisions/adrs-adr014",children:"ADR014"})," replaces its predecessor ADR to recommend using native ",(0,i.jsx)(t.code,{children:"undici"}),"-based ",(0,i.jsx)(t.code,{children:"fetch"})," instead of ",(0,i.jsx)(t.code,{children:"node-fetch"})," in all backend packages. As a result we have almost entirely performed that shift in our core libraries and plugins, and recommend that plugin authors and adopters do the same when they can."]}),"\n",(0,i.jsx)(t.p,{children:"This change should not be noticeable for most adopters. If you see any ill effects of it, please report it to the maintainers."}),"\n",(0,i.jsx)(t.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,i.jsx)(t.p,{children:"This release does not contain any security fixes."}),"\n",(0,i.jsx)(t.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,i.jsxs)(t.p,{children:["We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,i.jsx)(t.p,{children:"Below you can find a list of links and references to help you learn about and start using this new release."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage official website"}),", ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,i.jsxs)(t.li,{children:["Backstage's ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.34.0-changelog.md",children:"Changelog"})}),"\n",(0,i.jsxs)(t.li,{children:["Backstage ",(0,i.jsx)(t.a,{href:"https://backstage.io/demos",children:"Demos"}),", ",(0,i.jsx)(t.a,{href:"https://backstage.io/blog",children:"Blog"}),", ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and ",(0,i.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Sign up for our ",(0,i.jsx)(t.a,{href:"https://info.backstage.spotify.com/newsletter_subscribe",children:"newsletter"})," if you want to be informed about what is happening in the world of Backstage."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},221020:(e,t,s)=>{var i=s(296540),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,s){var i,o={},l=null,d=null;for(i in void 0!==s&&(l=""+s),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,i)&&!c.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===o[i]&&(o[i]=t[i]);return{$$typeof:n,type:e,key:l,ref:d,props:o,_owner:a.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},474848:(e,t,s)=>{e.exports=s(221020)},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var i=s(296540);const n={},o=i.createContext(n);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);