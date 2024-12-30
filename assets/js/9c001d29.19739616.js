/*! For license information please see 9c001d29.19739616.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[616919],{233480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(474848),a=n(28453);const o={id:"integrating-plugin-into-software-catalog",title:"Integrate into the Software Catalog",description:"How to integrate a plugin into software catalog"},r=void 0,s={id:"plugins/integrating-plugin-into-software-catalog",title:"Integrate into the Software Catalog",description:"How to integrate a plugin into software catalog",source:"@site/versioned_docs/version-stable/plugins/integrating-plugin-into-software-catalog.md",sourceDirName:"plugins",slug:"/plugins/integrating-plugin-into-software-catalog",permalink:"/docs/plugins/integrating-plugin-into-software-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/plugins/integrating-plugin-into-software-catalog.md",tags:[],version:"stable",frontMatter:{id:"integrating-plugin-into-software-catalog",title:"Integrate into the Software Catalog",description:"How to integrate a plugin into software catalog"},sidebar:"docs",previous:{title:"Structure of a Plugin",permalink:"/docs/plugins/structure-of-a-plugin"},next:{title:"Integrating Search into a plugin",permalink:"/docs/plugins/integrating-search-into-plugins"}},l={},c=[{value:"Steps",id:"steps",level:2},{value:"Create a plugin",id:"create-a-plugin",level:3},{value:"Reading entities from within your plugin",id:"reading-entities-from-within-your-plugin",level:3},{value:"Import your plugin and embed in the entities page",id:"import-your-plugin-and-embed-in-the-entities-page",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"This is an advanced use case and currently is an experimental feature. Expect\nAPI to change over time"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#create-a-plugin",children:"Create a plugin"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#reading-entities-from-within-your-plugin",children:"Reading entities from within your plugin"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#import-your-plugin-and-embed-in-the-entities-page",children:"Import your plugin and embed in the entities page"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"create-a-plugin",children:"Create a plugin"}),"\n",(0,i.jsxs)(t.p,{children:["Follow the ",(0,i.jsx)(t.a,{href:"/docs/plugins/create-a-plugin",children:"same process"})," as for standalone plugin. You\nshould have a separate package in a folder, which represents your plugin."]}),"\n",(0,i.jsx)(t.p,{children:"Example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"$ yarn new --select plugin\n> ? Enter an ID for the plugin [required] my-plugin\n> ? Enter the owner(s) of the plugin. If specified, this will be added to CODEOWNERS for the plugin path. [optional]\n\nCreating the plugin...\n"})}),"\n",(0,i.jsx)(t.h3,{id:"reading-entities-from-within-your-plugin",children:"Reading entities from within your plugin"}),"\n",(0,i.jsxs)(t.p,{children:["You can access the currently selected entity using the backstage api\n",(0,i.jsx)(t.a,{href:"/docs/reference/plugin-catalog-react.useentity",children:(0,i.jsx)(t.code,{children:"useEntity"})}),". For example,"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"import { useEntity } from '@backstage/plugin-catalog-react';\n\nexport const MyPluginEntityContent = () => {\n  const entity = useEntity();\n\n  // Do something with the entity data...\n};\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Internally ",(0,i.jsx)(t.code,{children:"useEntity"})," makes use of\n",(0,i.jsxs)(t.a,{href:"https://reactjs.org/docs/context.html",children:["react ",(0,i.jsx)(t.code,{children:"Context"}),"s"]}),". The entity context is\nprovided by the entity page into which your plugin will be embedded."]}),"\n",(0,i.jsx)(t.h3,{id:"import-your-plugin-and-embed-in-the-entities-page",children:"Import your plugin and embed in the entities page"}),"\n",(0,i.jsxs)(t.p,{children:["To begin, you will need to import your plugin in the entities page. Located at\n",(0,i.jsx)(t.code,{children:"packages/app/src/components/Catalog/EntityPage.tsx"})," from the root package of\nyour backstage app."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"import { MyPluginEntityContent } from '@backstage/plugin-my-plugin;\n"})}),"\n",(0,i.jsxs)(t.p,{children:["To add your component to the Entity view, you will need to modify the\n",(0,i.jsx)(t.code,{children:"packages/app/src/components/Catalog/EntityPage.tsx"}),". Depending on the needs of\nyour plugin, you may only care about certain kinds of\n",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/descriptor-format",children:"entities"}),",\neach of which has its own\n",(0,i.jsx)(t.a,{href:"https://reactjs.org/docs/rendering-elements.html",children:"element"})," for rendering. This\nfunctionality is handled by the ",(0,i.jsx)(t.code,{children:"EntitySwitch"})," component:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"export const entityPage = (\n  <EntitySwitch>\n    <EntitySwitch.Case if={isKind('component')} children={componentPage} />\n    <EntitySwitch.Case if={isKind('api')} children={apiPage} />\n    <EntitySwitch.Case if={isKind('group')} children={groupPage} />\n    <EntitySwitch.Case if={isKind('user')} children={userPage} />\n    <EntitySwitch.Case if={isKind('system')} children={systemPage} />\n    <EntitySwitch.Case if={isKind('domain')} children={domainPage} />\n\n    <EntitySwitch.Case>{defaultEntityPage}</EntitySwitch.Case>\n  </EntitySwitch>\n);\n"})}),"\n",(0,i.jsxs)(t.p,{children:["At this point, you will need to modify the specific page where you want your\ncomponent to appear. If you are extending the Software Catalog model you will\nneed to add a new case to the ",(0,i.jsx)(t.code,{children:"EntitySwitch"}),". For adding a plugin to an existing\ncomponent type, you modify the existing page. For example, if you want to add\nyour plugin to the ",(0,i.jsx)(t.code,{children:"systemPage"}),", you can add a new tab by adding an\n",(0,i.jsx)(t.code,{children:"EntityLayout.Route"})," such as below:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:'const systemPage = (\n  <EntityLayout>\n    <EntityLayout.Route path="/" title="Overview">\n      <Grid container spacing={3} alignItems="stretch">\n        <Grid item md={6}>\n          <EntityAboutCard variant="gridItem" />\n        </Grid>\n        <Grid item md={6}>\n          <EntityHasComponentsCard variant="gridItem" />\n        </Grid>\n        <Grid item md={6}>\n          <EntityHasApisCard variant="gridItem" />\n        </Grid>\n        <Grid item md={6}>\n          <EntityHasResourcesCard variant="gridItem" />\n        </Grid>\n      </Grid>\n    </EntityLayout.Route>\n    <EntityLayout.Route path="/diagram" title="Diagram">\n      <EntityCatalogGraphCard variant="gridItem" height={400} />\n    </EntityLayout.Route>\n\n    {/* Adding a new tab to the system view */}\n    <EntityLayout.Route path="/your-custom-route" title="CustomTitle">\n      <MyPluginEntityContent />\n    </EntityLayout.Route>\n  </EntityLayout>\n);\n'})})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},221020:(e,t,n)=>{var i=n(296540),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var i,o={},c=null,d=null;for(i in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,i)&&!l.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===o[i]&&(o[i]=t[i]);return{$$typeof:a,type:e,key:c,ref:d,props:o,_owner:s.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var i=n(296540);const a={},o=i.createContext(a);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);