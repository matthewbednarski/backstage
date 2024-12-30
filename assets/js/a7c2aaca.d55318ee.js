/*! For license information please see a7c2aaca.d55318ee.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[490786],{376362:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=t(474848),o=t(28453);const a={id:"observability",title:"Observability",description:"Adding Observability to Your Plugin"},r=void 0,i={id:"plugins/observability",title:"Observability",description:"Adding Observability to Your Plugin",source:"@site/versioned_docs/version-stable/plugins/observability.md",sourceDirName:"plugins",slug:"/plugins/observability",permalink:"/docs/plugins/observability",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/plugins/observability.md",tags:[],version:"stable",frontMatter:{id:"observability",title:"Observability",description:"Adding Observability to Your Plugin"},sidebar:"docs",previous:{title:"Add to Directory",permalink:"/docs/plugins/add-to-directory"},next:{title:"Static Configuration in Backstage",permalink:"/docs/conf/"}},c={},l=[{value:"Datadog RUM Events",id:"datadog-rum-events",level:2},{value:"Logging",id:"logging",level:2},{value:"New Backend",id:"new-backend",level:3},{value:"Old Backend",id:"old-backend",level:3},{value:"Health Checks",id:"health-checks",level:2},{value:"New Backend (post 1.29.0)",id:"new-backend-post-1290",level:3},{value:"New Backend (pre 1.29.0)",id:"new-backend-pre-1290",level:3},{value:"Old Backend",id:"old-backend-1",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This article briefly describes the observability options that are available to a\nBackstage integrator."}),"\n",(0,s.jsx)(n.h2,{id:"datadog-rum-events",children:"Datadog RUM Events"}),"\n",(0,s.jsxs)(n.p,{children:["See how to install Datadog Events in your app\n",(0,s.jsx)(n.a,{href:"/docs/integrations/datadog-rum/installation",children:"here"})]}),"\n",(0,s.jsx)(n.h2,{id:"logging",children:"Logging"}),"\n",(0,s.jsx)(n.h3,{id:"new-backend",children:"New Backend"}),"\n",(0,s.jsxs)(n.p,{children:["The backend supplies a central logging service,\n",(0,s.jsx)(n.a,{href:"/docs/backend-system/core-services/root-logger",children:(0,s.jsx)(n.code,{children:"rootLogger"})}),", as well as a plugin\nbased logger, ",(0,s.jsx)(n.a,{href:"/docs/backend-system/core-services/logger",children:(0,s.jsx)(n.code,{children:"logger"})})," from ",(0,s.jsx)(n.code,{children:"coreServices"}),".\nTo add additional granularity to your logs, you can create children from the plugin\nbased logger, using the ",(0,s.jsx)(n.code,{children:".child()"})," method and provide is with JSON data. For example,\nif you wanted to log items for a specific span in your plugin, you could do"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export function createRouter({ logger }) {\n  const router = Router();\n\n  router.post('/task/:taskId/queue', (req, res) => {\n    const { taskId } = req.params;\n    const taskLogger = logger.child({ task: taskId });\n    taskLogger.log('Queueing this task.');\n  });\n\n  router.get('/task/:taskId/results', (req, res) => {\n    const { taskId } = req.params;\n    const taskLogger = logger.child({ task: taskId });\n    taskLogger.log('Getting the results of this task.');\n  });\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also add additional metadata to all logs for your Backstage instance by\noverriding the ",(0,s.jsx)(n.code,{children:"rootLogger"})," implementation, you can see an example in\n",(0,s.jsxs)(n.a,{href:"/docs/backend-system/core-services/root-logger#configuring-the-service",children:["the ",(0,s.jsx)(n.code,{children:"rootLogger"})," docs"]}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"old-backend",children:"Old Backend"}),"\n",(0,s.jsxs)(n.p,{children:["The backend supplies a central ",(0,s.jsx)(n.a,{href:"https://github.com/winstonjs/winston",children:"winston"}),"\nroot logger that plugins are expected to use for their logging needs. In the\ndefault production setup, it emits structured JSON logs on stdout, with a field\n",(0,s.jsx)(n.code,{children:'"service": "backstage"'})," and also tagged on a per-plugin basis. Plugins that\nwant to more finely specify what part of their processes that emitted the log\nmessage should add a ",(0,s.jsx)(n.code,{children:'"component"'})," field to do so."]}),"\n",(0,s.jsx)(n.p,{children:"An example log line could look as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "service": "backstage",\n  "type": "plugin",\n  "plugin": "catalog",\n  "component": "catalog-all-locations-refresh",\n  "level": "info",\n  "message": "Locations Refresh: Refreshing location bootstrap:bootstrap"\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"health-checks",children:"Health Checks"}),"\n",(0,s.jsx)(n.h3,{id:"new-backend-post-1290",children:"New Backend (post 1.29.0)"}),"\n",(0,s.jsxs)(n.p,{children:["The new backend provides a ",(0,s.jsx)(n.code,{children:"RootHealthService"})," which implements\n",(0,s.jsx)(n.code,{children:"/.backstage/health/v1/readiness"})," and ",(0,s.jsx)(n.code,{children:"/.backstage/health/v1/liveness"})," endpoints\nto provide health checks for the entire backend instance."]}),"\n",(0,s.jsxs)(n.p,{children:["You can read more about this new service and how to customize it in the\n",(0,s.jsx)(n.a,{href:"/docs/backend-system/core-services/root-health",children:"Root Health Service documentation"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"new-backend-pre-1290",children:"New Backend (pre 1.29.0)"}),"\n",(0,s.jsx)(n.p,{children:"The new backend is moving towards health checks being plugin-based, as such there is no\ncurrent plugin for providing a health check route. You can add this yourself easily though,"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import {\n  coreServices,\n  createBackendModule,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\n\nconst healthCheck = createBackendPlugin({\n  pluginId: 'healthcheck',\n\n  register(env) {\n    env.registerInit({\n      deps: {\n        rootHttpRouter: coreServices.rootHttpRouter,\n      },\n      init: async ({ rootHttpRouter }) => {\n        // You can adjust the route name and response as you need.\n        rootHttpRouter.use('/healthcheck', (req, res) => {\n          res.json({ status: 'ok' });\n        });\n      },\n    });\n  },\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"old-backend-1",children:"Old Backend"}),"\n",(0,s.jsxs)(n.p,{children:["The example old backend in the Backstage repository\n",(0,s.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/bc18571b7a742863a770b2a54e785d6bbef7e184/packages/backend/src/index.ts#L99",children:"supplies"}),"\na very basic health check endpoint on the ",(0,s.jsx)(n.code,{children:"/healthcheck"})," route. You may add such\na handler to your backend as well, and supply your own logic to it that fits\nyour particular health checking needs."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},221020:(e,n,t)=>{var s=t(296540),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var s,a={},l=null,d=null;for(s in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)r.call(n,s)&&!c.hasOwnProperty(s)&&(a[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===a[s]&&(a[s]=n[s]);return{$$typeof:o,type:e,key:l,ref:d,props:a,_owner:i.current}}n.Fragment=a,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var s=t(296540);const o={},a=s.createContext(o);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);