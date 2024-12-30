/*! For license information please see ffa42d9f.468c7fc8.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[474451],{239556:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>r});var i=n(474848),c=n(28453);const o={id:"builtin-actions",title:"Builtin actions",description:"Documentation describing the built-in template actions."},a=void 0,s={id:"features/software-templates/builtin-actions",title:"Builtin actions",description:"Documentation describing the built-in template actions.",source:"@site/../docs/features/software-templates/builtin-actions.md",sourceDirName:"features/software-templates",slug:"/features/software-templates/builtin-actions",permalink:"/docs/next/features/software-templates/builtin-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/features/software-templates/builtin-actions.md",tags:[],version:"current",frontMatter:{id:"builtin-actions",title:"Builtin actions",description:"Documentation describing the built-in template actions."},sidebar:"docs",previous:{title:"Input Examples",permalink:"/docs/next/features/software-templates/input-examples"},next:{title:"Writing Custom Actions",permalink:"/docs/next/features/software-templates/writing-custom-actions"}},l={},r=[{value:"Action Modules",id:"action-modules",level:2},{value:"Installing Action Modules",id:"installing-action-modules",level:2},{value:"Listing Actions",id:"listing-actions",level:2},{value:"Migrating from <code>fetch:cookiecutter</code> to <code>fetch:template</code>",id:"migrating-from-fetchcookiecutter-to-fetchtemplate",level:2},{value:"Using <code>cookiecutterCompat</code> mode",id:"using-cookiecuttercompat-mode",level:3},{value:"Manual migration",id:"manual-migration",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"The scaffolder comes with several built-in actions for fetching content,\nregistering in the catalog and of course actions for creating and publishing a\ngit repository."}),"\n",(0,i.jsx)(t.h2,{id:"action-modules",children:"Action Modules"}),"\n",(0,i.jsx)(t.p,{children:"There are also several modules available for various SCM tools:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Azure DevOps: ",(0,i.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-azure"})]}),"\n",(0,i.jsxs)(t.li,{children:["Bitbucket Cloud: ",(0,i.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-bitbucket-cloud"})]}),"\n",(0,i.jsxs)(t.li,{children:["Bitbucket Server: ",(0,i.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-bitbucket-server"})]}),"\n",(0,i.jsxs)(t.li,{children:["Gerrit: ",(0,i.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-gerrit"})]}),"\n",(0,i.jsxs)(t.li,{children:["Gitea: ",(0,i.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-gitea"})]}),"\n",(0,i.jsxs)(t.li,{children:["GitHub: ",(0,i.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-github"})]}),"\n",(0,i.jsxs)(t.li,{children:["GitLab: ",(0,i.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-gitlab"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"installing-action-modules",children:"Installing Action Modules"}),"\n",(0,i.jsx)(t.p,{children:"Here's how to add an action module, first you need to run this command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",metastring:'title="From your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-scaffolder-backend-module-github\n"})}),"\n",(0,i.jsx)(t.p,{children:"Then you need to add it to your backend, this is a simplified new backend system for example purposes:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="/packages/backend/src/index.ts"',children:"import { createBackend } from '@backstage/backend-defaults';\n\nconst backend = createBackend();\n\nbackend.add(import('@backstage/plugin-app-backend'));\n\n// catalog plugin\nbackend.add(import('@backstage/plugin-catalog-backend'));\nbackend.add(\n  import('@backstage/plugin-catalog-backend-module-scaffolder-entity-model'),\n);\n\n// scaffolder plugin\nbackend.add(import('@backstage/plugin-scaffolder-backend'));\n/* highlight-add-next-line */\nbackend.add(import('@backstage/plugin-scaffolder-backend-module-github'));\n\nbackend.start();\n"})}),"\n",(0,i.jsx)(t.admonition,{title:"Note",type:"note",children:(0,i.jsx)(t.p,{children:"This is a simplified example of what your backend may look like, you may have more code in here then this."})}),"\n",(0,i.jsx)(t.h2,{id:"listing-actions",children:"Listing Actions"}),"\n",(0,i.jsxs)(t.p,{children:["A list of all registered actions can be found under ",(0,i.jsx)(t.code,{children:"/create/actions"}),". For local\ndevelopment you should be able to reach them at\n",(0,i.jsx)(t.code,{children:"http://localhost:3000/create/actions"}),"."]}),"\n",(0,i.jsxs)(t.h2,{id:"migrating-from-fetchcookiecutter-to-fetchtemplate",children:["Migrating from ",(0,i.jsx)(t.code,{children:"fetch:cookiecutter"})," to ",(0,i.jsx)(t.code,{children:"fetch:template"})]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"fetch:template"})," action is a new action with a similar API to\n",(0,i.jsx)(t.code,{children:"fetch:cookiecutter"})," but no dependency on ",(0,i.jsx)(t.code,{children:"cookiecutter"}),". There are two options\nfor migrating templates that use ",(0,i.jsx)(t.code,{children:"fetch:cookiecutter"})," to use ",(0,i.jsx)(t.code,{children:"fetch:template"}),":"]}),"\n",(0,i.jsxs)(t.h3,{id:"using-cookiecuttercompat-mode",children:["Using ",(0,i.jsx)(t.code,{children:"cookiecutterCompat"})," mode"]}),"\n",(0,i.jsxs)(t.p,{children:["The new ",(0,i.jsx)(t.code,{children:"fetch:template"})," action has a ",(0,i.jsx)(t.code,{children:"cookiecutterCompat"})," flag which should\nallow most templates built for ",(0,i.jsx)(t.code,{children:"fetch:cookiecutter"})," to work without any changes."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Update action name in ",(0,i.jsx)(t.code,{children:"template.yaml"}),". The name should be changed from\n",(0,i.jsx)(t.code,{children:"fetch:cookiecutter"})," to ",(0,i.jsx)(t.code,{children:"fetch:template"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Set ",(0,i.jsx)(t.code,{children:"cookiecutterCompat"})," to ",(0,i.jsx)(t.code,{children:"true"})," in the ",(0,i.jsx)(t.code,{children:"fetch:template"})," step input in\n",(0,i.jsx)(t.code,{children:"template.yaml"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:'title="template.yaml"',children:"steps:\n   - id: fetch-base\n     name: Fetch Base\n     # highlight-remove-next-line\n     action: fetch:cookiecutter\n     # highlight-add-next-line\n     action: fetch:template\n     input:\n        url: ./skeleton\n        # highlight-add-next-line\n        cookiecutterCompat: true\n        values:\n"})}),"\n",(0,i.jsx)(t.h3,{id:"manual-migration",children:"Manual migration"}),"\n",(0,i.jsx)(t.p,{children:"If you prefer, you can manually migrate your templates to avoid the need for\nenabling cookiecutter compatibility mode, which will result in slightly less\nverbose template variables expressions."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Update action name in ",(0,i.jsx)(t.code,{children:"template.yaml"}),". The name should be changed from\n",(0,i.jsx)(t.code,{children:"fetch:cookiecutter"})," to ",(0,i.jsx)(t.code,{children:"fetch:template"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Update variable syntax in file names and content. ",(0,i.jsx)(t.code,{children:"fetch:cookiecutter"}),"\nexpects variables to be enclosed in ",(0,i.jsx)(t.code,{children:"{{"})," ",(0,i.jsx)(t.code,{children:"}}"})," and prefixed with\n",(0,i.jsx)(t.code,{children:"cookiecutter."}),", while ",(0,i.jsx)(t.code,{children:"fetch:template"})," expects variables to be enclosed in\n",(0,i.jsx)(t.code,{children:"${{"})," ",(0,i.jsx)(t.code,{children:"}}"})," and prefixed with ",(0,i.jsx)(t.code,{children:"values."}),". For example, a reference to variable\n",(0,i.jsx)(t.code,{children:"myInputVariable"})," would need to be migrated from\n",(0,i.jsx)(t.code,{children:"{{ cookiecutter.myInputVariable }}"})," to ",(0,i.jsx)(t.code,{children:"${{ values.myInputVariable }}"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Replace uses of ",(0,i.jsx)(t.code,{children:"jsonify"})," with ",(0,i.jsx)(t.code,{children:"dump"}),". The\n",(0,i.jsxs)(t.a,{href:"https://cookiecutter.readthedocs.io/en/latest/advanced/template_extensions.html#jsonify-extension",children:[(0,i.jsx)(t.code,{children:"jsonify"})," filter"]}),"\nis built in to ",(0,i.jsx)(t.code,{children:"cookiecutter"}),", and is not available by default when using\n",(0,i.jsx)(t.code,{children:"fetch:template"}),". The\n",(0,i.jsxs)(t.a,{href:"https://mozilla.github.io/nunjucks/templating.html#dump",children:[(0,i.jsx)(t.code,{children:"dump"})," filter"]})," is\nthe equivalent filter in nunjucks, so an expression like\n",(0,i.jsx)(t.code,{children:"{{ cookiecutter.myAwesomeList | jsonify }}"})," should be migrated to\n",(0,i.jsx)(t.code,{children:"${{ values.myAwesomeList | dump }}"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},221020:(e,t,n)=>{var i=n(296540),c=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function r(e,t,n){var i,o={},r=null,d=null;for(i in void 0!==n&&(r=""+n),void 0!==t.key&&(r=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,i)&&!l.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===o[i]&&(o[i]=t[i]);return{$$typeof:c,type:e,key:r,ref:d,props:o,_owner:s.current}}t.Fragment=o,t.jsx=r,t.jsxs=r},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var i=n(296540);const c={},o=i.createContext(c);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);