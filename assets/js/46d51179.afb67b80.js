/*! For license information please see 46d51179.afb67b80.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[500374],{785642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=n(474848),i=n(28453);const r={id:"auth",title:"Auth Service",sidebar_label:"Auth",description:"Documentation for the Auth service"},a=void 0,c={id:"backend-system/core-services/auth",title:"Auth Service",description:"Documentation for the Auth service",source:"@site/versioned_docs/version-stable/backend-system/core-services/auth.md",sourceDirName:"backend-system/core-services",slug:"/backend-system/core-services/auth",permalink:"/docs/backend-system/core-services/auth",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/backend-system/core-services/auth.md",tags:[],version:"stable",frontMatter:{id:"auth",title:"Auth Service",sidebar_label:"Auth",description:"Documentation for the Auth service"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/backend-system/core-services/index"},next:{title:"Cache",permalink:"/docs/backend-system/core-services/cache"}},o={},l=[{value:"Using the Service",id:"using-the-service",level:2},{value:"Creating Request Tokens",id:"creating-request-tokens",level:3},{value:"Authorizing Tokens",id:"authorizing-tokens",level:3},{value:"Inspecting Credentials",id:"inspecting-credentials",level:3},{value:"Configuring the service",id:"configuring-the-service",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"This service deals with the generation and verification of tokens and their\nassociated representations as credentials objects. You can use it for validating\nincoming tokens, and generating tokens for calling other services."}),"\n",(0,s.jsxs)(t.p,{children:["If you want to deal with credentials specifically in the HTTP request/response\nflow, see also ",(0,s.jsxs)(t.a,{href:"/docs/backend-system/core-services/http-auth",children:["the ",(0,s.jsx)(t.code,{children:"httpAuth"})," service"]}),". If you want to extract\nmore details about authenticated users such as their ownership entity refs, use\n",(0,s.jsxs)(t.a,{href:"/docs/backend-system/core-services/user-info",children:["the ",(0,s.jsx)(t.code,{children:"userInfo"})," service"]}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"using-the-service",children:"Using the Service"}),"\n",(0,s.jsxs)(t.p,{children:["In the following code examples, the ",(0,s.jsx)(t.code,{children:"auth"})," and ",(0,s.jsx)(t.code,{children:"httpAuth"})," variables are assumed\nto be dependency-injected instances of the ",(0,s.jsx)(t.code,{children:"coreServices.auth"})," and\n",(0,s.jsx)(t.code,{children:"coreServices.httpAuth"})," service, respectively. For a backend plugin, it might\nlook like this:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"export default createBackendPlugin({\n  pluginId: 'my-plugin',\n  register(env) {\n    env.registerInit({\n      deps: {\n        auth: coreServices.auth,\n        httpAuth: coreServices.httpAuth,\n        httpRouter: coreServices.httpRouter,\n      },\n      async init({ auth, httpAuth, httpRouter }) {\n        // Your code goes here\n      },\n    });\n  },\n});\n"})}),"\n",(0,s.jsx)(t.h3,{id:"creating-request-tokens",children:"Creating Request Tokens"}),"\n",(0,s.jsx)(t.p,{children:"If you need to create a token that can be used for making a request to another\nbackend plugin:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const { token } = await auth.getPluginRequestToken({\n  onBehalfOf: await auth.getOwnServiceCredentials(),\n  targetPluginId: 'catalog',\n});\n"})}),"\n",(0,s.jsx)(t.admonition,{title:"Note",type:"note",children:(0,s.jsxs)(t.p,{children:["Never store and reuse tokens. Always call ",(0,s.jsx)(t.code,{children:"getPluginRequestToken"})," immediately\nbefore making a request. Otherwise you run the risk of running into permission\nproblems when expired tokens are being used for requests."]})}),"\n",(0,s.jsx)(t.p,{children:'This example is suitable when you need to make the request "as your own plugin",\ni.e. when your code is the original initiator of the call. An example of this\ncould be periodic batch processes that index content in another service.'}),"\n",(0,s.jsx)(t.p,{children:"In situations where you are making a call on-behalf-of someone else, for example\nwhen making upstream requests inside a request handler, please always instead\nuse the extracted credentials from the request."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"router.get('/makes-calls', async (req, res) => {\n  const { token } = await auth.getPluginRequestToken({\n    onBehalfOf: await httpAuth.credentials(req),\n    targetPluginId: 'catalog',\n  });\n  // make a call using the token\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This ensures that the original caller and their associated permissions are\nproperly carried along with the request chain. See ",(0,s.jsxs)(t.a,{href:"/docs/backend-system/core-services/http-auth",children:["the ",(0,s.jsx)(t.code,{children:"httpAuth"})," service docs"]}),"\nfor more details."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"/docs/auth/service-to-service-auth",children:"service to service auth docs"}),"\ncontain more details about how to properly use tokens in your HTTP request\npaths."]}),"\n",(0,s.jsx)(t.h3,{id:"authorizing-tokens",children:"Authorizing Tokens"}),"\n",(0,s.jsxs)(t.p,{children:["Most plugins should not deal with incoming request tokens directly at all, but\nrather use ",(0,s.jsx)(t.a,{href:"/docs/backend-system/core-services/http-auth",children:(0,s.jsx)(t.code,{children:"httpAuth.credentials"})})," instead as part of their\nrequest handlers. But in the rare cases where you are holding an incoming token\nand want to validate it and turn it into a credentials object, you can do so:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const credentials = await auth.authenticate(token);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["There is an optional second parameter that you can set to ",(0,s.jsx)(t.code,{children:"{ allowLimitedAccess: true }"})," if you specifically built a plugin that deals with cookie based access,\nwhich is rare."]}),"\n",(0,s.jsx)(t.h3,{id:"inspecting-credentials",children:"Inspecting Credentials"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"auth"})," service also contains facilities for working with credentials\nobjects. For example checking what type of principal (caller type - e.g. user or\nservice) they represent. For example:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"if (auth.isPrincipal(credentials, 'user)) {\n  // In here, the TypeScript type of the credentials object has been properly\n  // narrowed to `BackstageCredentials<BackstageUserPrincipal>` so you can\n  // access its specific properties such as `credentials.principal.userEntityRef`.\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"configuring-the-service",children:"Configuring the service"}),"\n",(0,s.jsx)(t.admonition,{title:"Note",type:"note",children:(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"auth"})," service is not suitable for having its implementation replaced\nentirely in your private repo. If you desire additional service auth related\nfeatures, don't hesitate to ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/new/choose",children:"file an issue"}),"\nor ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/CONTRIBUTING.md",children:"contribute"})," to the open source features."]})}),"\n",(0,s.jsxs)(t.p,{children:["For configuring service-to-service access methods, see ",(0,s.jsx)(t.a,{href:"/docs/auth/service-to-service-auth",children:"the auth docs"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The default auth policy requires all requests to be authenticated with either\nuser or service credentials. This can be disabled by setting the\n",(0,s.jsx)(t.code,{children:"backend.auth.dangerouslyDisableDefaultAuthPolicy"})," app-config flag to ",(0,s.jsx)(t.code,{children:"true"}),".\nDisabling this check means that the backend will no longer block unauthenticated\nrequests, but instead allow them to pass through to plugins. Do not do this in\nproduction unless absolutely necessary."]}),"\n",(0,s.jsx)(t.p,{children:"If permissions are enabled, unauthenticated requests will be treated exactly as\nsuch, leaving it to the permission policy to determine what permissions should\nbe allowed for an unauthenticated identity. Note that this will also apply to\nservice-to-service calls between plugins unless you configure credentials for\nservice calls."})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},221020:(e,t,n)=>{var s=n(296540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var s,r={},l=null,h=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(h=t.ref),t)a.call(t,s)&&!o.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:i,type:e,key:l,ref:h,props:r,_owner:c.current}}t.Fragment=r,t.jsx=l,t.jsxs=l},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var s=n(296540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);