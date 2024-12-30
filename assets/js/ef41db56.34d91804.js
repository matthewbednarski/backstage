/*! For license information please see ef41db56.34d91804.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[49816],{550649:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=t(474848),r=t(28453);const o={id:"migrate-to-mui5",title:"Migrating from Material UI v4 to v5",description:"Additional resources for the Material UI v5 migration guide specifically for Backstage"},s=void 0,a={id:"tutorials/migrate-to-mui5",title:"Migrating from Material UI v4 to v5",description:"Additional resources for the Material UI v5 migration guide specifically for Backstage",source:"@site/../docs/tutorials/migrate-to-mui5.md",sourceDirName:"tutorials",slug:"/tutorials/migrate-to-mui5",permalink:"/docs/next/tutorials/migrate-to-mui5",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/tutorials/migrate-to-mui5.md",tags:[],version:"current",frontMatter:{id:"migrate-to-mui5",title:"Migrating from Material UI v4 to v5",description:"Additional resources for the Material UI v5 migration guide specifically for Backstage"},sidebar:"docs",previous:{title:"Migration to Yarn 4",permalink:"/docs/next/tutorials/yarn-migration"},next:{title:"Migrating to New Auth Services",permalink:"/docs/next/tutorials/auth-service-migration"}},l={},c=[{value:"Plugins",id:"plugins",level:3}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsxs)(i.p,{children:["We are in the process of determining the path forward regarding a New Design System for Backstage, for the time being we recommend pausing any migrations to MUI v5 until this has been settled. More details can be found in ",(0,n.jsx)(i.a,{href:"https://github.com/backstage/backstage/issues/27726",children:'"RFC: New design system for Backstage"'}),"."]})}),"\n",(0,n.jsxs)(i.p,{children:["Backstage supports developing new plugins or components using Material UI v5. At the same time, large parts of the application as well as existing plugins will still be using Material UI v4. To support Material UI v4 and v5 at the same time, we have introduced a new concept called the ",(0,n.jsx)(i.code,{children:"UnifiedTheme"}),". The goal of the ",(0,n.jsx)(i.code,{children:"UnifiedTheme"})," is to allow gradual migration by running both versions in parallel, applying theme options similarly & supporting potential future versions of Material UI."]}),"\n",(0,n.jsxs)(i.p,{children:["By default, the ",(0,n.jsx)(i.code,{children:"UnifiedThemeProvider"})," is already used. If you add a custom theme in your ",(0,n.jsx)(i.code,{children:"createApp"})," function, you would need to replace the Material UI ",(0,n.jsx)(i.code,{children:"ThemeProvider"})," with the ",(0,n.jsx)(i.code,{children:"UnifiedThemeProvider"}),":"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-diff",metastring:"ts",children:"+ import import {\n+   UnifiedThemeProvider,\n+   themes as builtinThemes,\n+ } from '@backstage/theme';\n\n  const app = createApp({\n    // ...\n    themes: [\n      {\n        // ...\n        Provider: ({ children }) => (\n-         <ThemeProvider theme={lightTheme}>.\n-           <CssBaseline>{children}</CssBaseline>.\n-         </ThemeProvider\n+         <UnifiedThemeProvider theme={builtinThemes.light} children={children} />\n        ),\n      }\n    ]\n  });\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Before making specific changes to your Backstage instance, it might be helpful to take a look at the ",(0,n.jsx)(i.a,{href:"https://mui.com/material-ui/migration/migration-v4/",children:"Migration Guide provided by Material UI"})," first. It breaks down the differences between v4 and v5, and will make it easier to understand the impact on your Backstage instance & plugins."]}),"\n",(0,n.jsxs)(i.p,{children:["It is worth noting that we are still using ",(0,n.jsx)(i.code,{children:"@mui/styles"})," & ",(0,n.jsx)(i.code,{children:"jss"}),". You may stumble upon documentation for migrating to ",(0,n.jsx)(i.code,{children:"emotion"})," when using ",(0,n.jsx)(i.code,{children:"makeStyles"})," or ",(0,n.jsx)(i.code,{children:"withStyles"}),". It is not necessary to switch to ",(0,n.jsx)(i.code,{children:"emotion"}),"."]}),"\n",(0,n.jsx)(i.p,{children:"Important to keep in mind is that Material UI v5 is meant to be used with React Version 17 or higher. This means if you intend to use the Material UI v5 components in your plugins, you have to enforce React Version to be at least 17 for these plugins:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:'...\n  "peerDependencies": {\n    "react": "^17.0.0 || ^18.0.0",\n    "react-dom": "^17.0.0 || ^18.0.0",\n    "react-router-dom": "6.0.0-beta.0 || ^6.3.0"\n  },\n...\n'})}),"\n",(0,n.jsxs)(i.p,{children:["To comply with Material UI recommendations, we are enforcing a new linting rule that favors standard imports over named imports and also restricts 3rd-level imports as they are considered private (",(0,n.jsx)(i.a,{href:"https://mui.com/material-ui/guides/minimizing-bundle-size",children:"Guide: Minimizing Bundle Size"}),")."]}),"\n",(0,n.jsxs)(i.p,{children:["There are ",(0,n.jsx)(i.code,{children:"core-components"})," as well as components exported from Backstage ",(0,n.jsx)(i.code,{children:"*-react"})," plugins written in Material UI v4, which expect Material UI components as props. In these cases you will still be forced to use Material UI v4."]}),"\n",(0,n.jsxs)(i.p,{children:["For current known issues with the Material UI v5 migration, follow our ",(0,n.jsx)(i.a,{href:"https://github.com/backstage/backstage/milestone/40",children:"Milestone on GitHub"}),". Please open a new issue if you run into different problems."]}),"\n",(0,n.jsx)(i.h3,{id:"plugins",children:"Plugins"}),"\n",(0,n.jsx)(i.p,{children:"To migrate your plugin to Material UI v5, you can build on the resources available."}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Manually fix the imports from named to default imports to match the new ",(0,n.jsx)(i.a,{href:"https://mui.com/material-ui/guides/minimizing-bundle-size",children:"linting rules for minimizing bundle size"}),". Note: you can use the ",(0,n.jsxs)(i.a,{href:"https://github.com/backstage/backstage/blob/master/packages/eslint-plugin/docs/rules/no-top-level-material-ui-4-imports.md",children:["new ",(0,n.jsx)(i.code,{children:"@backstage/no-top-level-material-ui-4-imports"})," ESLint"]})," rule to help with this."]}),"\n",(0,n.jsxs)(i.li,{children:["Run the migration ",(0,n.jsx)(i.code,{children:"codemod"})," for the path of the specific plugin: ",(0,n.jsx)(i.code,{children:"npx @mui/codemod v5.0.0/preset-safe plugins/<path>"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Take a look at possible ",(0,n.jsx)(i.code,{children:"TODO:"})," items the ",(0,n.jsx)(i.code,{children:"codemod"})," could not fix."]}),"\n",(0,n.jsxs)(i.li,{children:["Remove types & methods from ",(0,n.jsx)(i.code,{children:"@backstage/theme"})," which are marked as ",(0,n.jsx)(i.code,{children:"@deprecated"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Ensure you are using ",(0,n.jsx)(i.code,{children:'"react": "^17.0.0"'})," (or newer) as a peer dependency"]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["You can follow the ",(0,n.jsx)(i.a,{href:"https://github.com/backstage/backstage/pull/17696",children:"migration of the GraphiQL plugin"})," as an example of a plugin migration."]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},221020:(e,i,t)=>{var n=t(296540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,i,t){var n,o={},c=null,d=null;for(n in void 0!==t&&(c=""+t),void 0!==i.key&&(c=""+i.key),void 0!==i.ref&&(d=i.ref),i)s.call(i,n)&&!l.hasOwnProperty(n)&&(o[n]=i[n]);if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:r,type:e,key:c,ref:d,props:o,_owner:a.current}}i.Fragment=o,i.jsx=c,i.jsxs=c},474848:(e,i,t)=>{e.exports=t(221020)},28453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>a});var n=t(296540);const r={},o=n.createContext(r);function s(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);