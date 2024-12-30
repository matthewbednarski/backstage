/*! For license information please see 206920f4.5c52c8da.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[352546],{441030:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=t(474848),s=t(28453);const i={id:"structure-of-a-plugin",title:"Structure of a Plugin",description:"Details about structure of a plugin"},a=void 0,r={id:"plugins/structure-of-a-plugin",title:"Structure of a Plugin",description:"Details about structure of a plugin",source:"@site/versioned_docs/version-stable/plugins/structure-of-a-plugin.md",sourceDirName:"plugins",slug:"/plugins/structure-of-a-plugin",permalink:"/docs/plugins/structure-of-a-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/plugins/structure-of-a-plugin.md",tags:[],version:"stable",frontMatter:{id:"structure-of-a-plugin",title:"Structure of a Plugin",description:"Details about structure of a plugin"},sidebar:"docs",previous:{title:"Plugin Development",permalink:"/docs/plugins/plugin-development"},next:{title:"Integrate into the Software Catalog",permalink:"/docs/plugins/integrating-plugin-into-software-catalog"}},l={},c=[{value:"Folder structure",id:"folder-structure",level:2},{value:"Base files",id:"base-files",level:2},{value:"The plugin file",id:"the-plugin-file",level:2},{value:"Components",id:"components",level:2},{value:"Connecting the plugin to the Backstage app",id:"connecting-the-plugin-to-the-backstage-app",level:2},{value:"Talking to the outside world",id:"talking-to-the-outside-world",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Nice, you have a new plugin! We'll soon see how we can develop it into doing\ngreat things. But first off, let's look at what we get out of the box."}),"\n",(0,o.jsx)(n.h2,{id:"folder-structure",children:"Folder structure"}),"\n",(0,o.jsx)(n.p,{children:"The new plugin should look something like:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"new-plugin/\n    dev/\n        index.ts\n    node_modules/\n    src/\n        components/\n            ExampleComponent/\n                ExampleComponent.test.tsx\n                ExampleComponent.tsx\n                index.ts\n            ExampleFetchComponent/\n                ExampleFetchComponent.test.tsx\n                ExampleFetchComponent.tsx\n                index.ts\n        index.ts\n        plugin.test.ts\n        plugin.ts\n        routes.ts\n        setupTests.ts\n    .eslintrc.js\n    package.json\n    README.md\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You might note a thing or two. Yes, a plugin looks like a mini project on it's\nown with a ",(0,o.jsx)(n.code,{children:"package.json"})," and a ",(0,o.jsx)(n.code,{children:"src"})," folder. And this is because we want\nplugins to be separate packages. This makes it possible to ship plugins on npm\nand it lets you work on a plugin in isolation, without loading all the other\nplugins in a potentially big Backstage app."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"index.ts"})," files are there to let us import from the folder path and not\nspecific files. It's a way to have control over the exports in one file per\nfolder."]}),"\n",(0,o.jsx)(n.h2,{id:"base-files",children:"Base files"}),"\n",(0,o.jsx)(n.p,{children:"You get a readme to populate with info about your plugin and a\npackage.json to declare the plugin dependencies, metadata and scripts."}),"\n",(0,o.jsx)(n.h2,{id:"the-plugin-file",children:"The plugin file"}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.code,{children:"src"})," folder we get to the interesting bits. Check out the ",(0,o.jsx)(n.code,{children:"plugin.ts"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"import {\n  createPlugin,\n  createRoutableExtension,\n} from '@backstage/core-plugin-api';\n\nimport { rootRouteRef } from './routes';\n\nexport const examplePlugin = createPlugin({\n  id: 'example',\n  routes: {\n    root: rootRouteRef,\n  },\n});\n\nexport const ExamplePage = examplePlugin.provide(\n  createRoutableExtension({\n    name: 'ExamplePage',\n    component: () =>\n      import('./components/ExampleComponent').then(m => m.ExampleComponent),\n    mountPoint: rootRouteRef,\n  }),\n);\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This is where the plugin is created and where it creates and exports extensions\nthat can be imported and used the app. See reference docs for\n",(0,o.jsx)(n.a,{href:"/docs/reference/core-plugin-api.createplugin",children:(0,o.jsx)(n.code,{children:"createPlugin"})})," or introduction to\nthe new ",(0,o.jsx)(n.a,{href:"/docs/plugins/composability",children:"Composability System"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"components",children:"Components"}),"\n",(0,o.jsx)(n.p,{children:"The generated plugin includes two example components to showcase how we\nstructure our plugins. There are usually one or multiple page components and\nnext to them you can split up the UI in as many components as you feel like."}),"\n",(0,o.jsxs)(n.p,{children:["We have the ",(0,o.jsx)(n.code,{children:"ExampleComponent"})," to show an example Backstage page component. The\n",(0,o.jsx)(n.code,{children:"ExampleFetchComponent"})," showcases the common task of making an async request to\na public API and plot the response data in a table using Material UI components."]}),"\n",(0,o.jsx)(n.p,{children:"You may tweak these components, rename them and/or replace them completely."}),"\n",(0,o.jsx)(n.h2,{id:"connecting-the-plugin-to-the-backstage-app",children:"Connecting the plugin to the Backstage app"}),"\n",(0,o.jsx)(n.p,{children:"There are two things needed for a Backstage app to start making use of a plugin."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Add plugin as dependency in ",(0,o.jsx)(n.code,{children:"app/package.json"})]}),"\n",(0,o.jsxs)(n.li,{children:["Import and use one or more plugin extensions, for example in\n",(0,o.jsx)(n.code,{children:"app/src/App.tsx"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Luckily both of these steps happen automatically when you create a plugin with\nthe Backstage CLI."}),"\n",(0,o.jsx)(n.h2,{id:"talking-to-the-outside-world",children:"Talking to the outside world"}),"\n",(0,o.jsxs)(n.p,{children:["If your plugin needs to communicate with services outside the Backstage\nenvironment you will probably face challenges like CORS policies and/or\nbackend-side authorization. To smooth this process out you can use proxy -\neither the one you already have (like Nginx, HAProxy, etc.) or the proxy-backend\nplugin that we provide for the Backstage backend.\n",(0,o.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/proxy-backend/README.md",children:"Read more"})]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},221020:(e,n,t)=>{var o=t(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,r=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var o,i={},c=null,p=null;for(o in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(p=n.ref),n)a.call(n,o)&&!l.hasOwnProperty(o)&&(i[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===i[o]&&(i[o]=n[o]);return{$$typeof:s,type:e,key:c,ref:p,props:i,_owner:r.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var o=t(296540);const s={},i=o.createContext(s);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);