/*! For license information please see 52d9ee3a.0c6821e0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[600789],{736970:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(474848),o=t(28453);const s={id:"consuming",title:"Consuming Utility APIs",sidebar_label:"Consuming APIs",description:"Consuming utility APIs"},r=void 0,a={id:"frontend-system/utility-apis/consuming",title:"Consuming Utility APIs",description:"Consuming utility APIs",source:"@site/../docs/frontend-system/utility-apis/03-consuming.md",sourceDirName:"frontend-system/utility-apis",slug:"/frontend-system/utility-apis/consuming",permalink:"/docs/next/frontend-system/utility-apis/consuming",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/frontend-system/utility-apis/03-consuming.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"consuming",title:"Consuming Utility APIs",sidebar_label:"Consuming APIs",description:"Consuming utility APIs"},sidebar:"docs",previous:{title:"Creating APIs",permalink:"/docs/next/frontend-system/utility-apis/creating"},next:{title:"Configuring",permalink:"/docs/next/frontend-system/utility-apis/configuring"}},c={},l=[{value:"Via React hooks",id:"via-react-hooks",level:2},{value:"Via dependencies",id:"via-dependencies",level:2}];function d(e){const n={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"NOTE: The new frontend system is in alpha and is only supported by a small number of plugins."})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"All of the utility API extensions that were passed into your app through installed plugins, get instantiated and configured in the right order by the framework, and are then made available for consumption. You can interact with these instances in the following ways."}),"\n",(0,i.jsx)(n.h2,{id:"via-react-hooks",children:"Via React hooks"}),"\n",(0,i.jsxs)(n.p,{children:["The most common consumption pattern for utility APIs is to call the ",(0,i.jsx)(n.code,{children:"useApi"})," hook inside React components to get an implementation via its API ref. This applies whether it was originally provided from the core framework or from a plugin."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { useApi, configApiRef } from '@backstage/frontend-plugin-api';\n\nconst MyComponent = () => {\n  const configApi = useApi(configApiRef);\n  const title = configApi.getString('app.title');\n  // ...\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"useApi"})," hook always returns a value, or throws an exception if the API ref could not be resolved to a registered implementation. For advanced use cases, where you explicitly want to optionally request a utility API that may or may not have been provided at runtime, you can use the underlying ",(0,i.jsx)(n.code,{children:"useApiHolder"})," hook instead."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { useApiHolder, configApiRef } from '@backstage/frontend-plugin-api';\n\nconst MyComponent = () => {\n  const apis = useApiHolder();\n  const configApi = apis.get(configApiRef); // may return undefined\n  if (configApi) {\n    const title = configApi.getString('app.title');\n    // ...\n  }\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"via-dependencies",children:"Via dependencies"}),"\n",(0,i.jsxs)(n.p,{children:["Your utility APIs can depend on other utility APIs in their factories. You do this by declaring ",(0,i.jsx)(n.code,{children:"deps"})," on your ",(0,i.jsx)(n.code,{children:"createApiFactory"}),", and reading the outcome in your ",(0,i.jsx)(n.code,{children:"factory"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import {\n  configApiRef,\n  ApiBlueprint,\n  createApiFactory,\n  discoveryApiRef,\n} from '@backstage/frontend-plugin-api';\nimport { MyApiImpl } from './MyApiImpl';\n\nconst myApi = ApiBlueprint.make({\n  params: {\n    factory: createApiFactory({\n      api: myApiRef,\n      deps: {\n        configApi: configApiRef,\n        discoveryApi: discoveryApiRef,\n      },\n      factory: ({ configApi, discoveryApi }) => {\n        return new MyApiImpl({ configApi, discoveryApi });\n      },\n    }),\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note how the ",(0,i.jsx)(n.code,{children:"deps"})," section essentially assigns free-form names that you choose, to API refs. Here we for example map ",(0,i.jsx)(n.code,{children:"configApiRef"})," to the name ",(0,i.jsx)(n.code,{children:"configApi"}),", but that's just a convention. The framework will ensure that all of those deps get instantiated and passed into your ",(0,i.jsx)(n.code,{children:"factory"})," function with the same set of names as your ",(0,i.jsx)(n.code,{children:"deps"}),". At that point, ",(0,i.jsx)(n.code,{children:"configApi"})," refers to an actual functioning instance of that API ref."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},221020:(e,n,t)=>{var i=t(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var i,s={},l=null,d=null;for(i in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)r.call(n,i)&&!c.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===s[i]&&(s[i]=n[i]);return{$$typeof:o,type:e,key:l,ref:d,props:s,_owner:a.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(296540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);