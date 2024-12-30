/*! For license information please see 24a11b9b.5b60fcbf.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[678371],{819043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=n(474848),i=n(28453);const a={id:"configuration",title:"Software Template Configuration",sidebar_label:"Configuration",description:"Configuration options for Backstage Software Templates"},s=void 0,r={id:"features/software-templates/configuration",title:"Software Template Configuration",description:"Configuration options for Backstage Software Templates",source:"@site/../docs/features/software-templates/configuration.md",sourceDirName:"features/software-templates",slug:"/features/software-templates/configuration",permalink:"/docs/next/features/software-templates/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/features/software-templates/configuration.md",tags:[],version:"current",frontMatter:{id:"configuration",title:"Software Template Configuration",sidebar_label:"Configuration",description:"Configuration options for Backstage Software Templates"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/next/features/software-templates/"},next:{title:"Adding your own Templates",permalink:"/docs/next/features/software-templates/adding-templates"}},c={},l=[{value:"Publishing defaults",id:"publishing-defaults",level:2},{value:"Disabling Docker in Docker situation (Optional)",id:"disabling-docker-in-docker-situation-optional",level:2},{value:"Customizing the ScaffolderPage with Grouping and Filtering",id:"customizing-the-scaffolderpage-with-grouping-and-filtering",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Backstage software templates create source code, so your Backstage application\nneeds to be set up to allow repository creation."}),"\n",(0,o.jsxs)(t.p,{children:["This is done in your ",(0,o.jsx)(t.code,{children:"app-config.yaml"})," by adding\n",(0,o.jsx)(t.a,{href:"https://backstage.io/docs/integrations/",children:"Backstage integrations"})," for the\nappropriate source code repository for your organization."]}),"\n",(0,o.jsx)(t.admonition,{title:"Note",type:"note",children:(0,o.jsxs)(t.p,{children:["Integrations may already be set up as part of your ",(0,o.jsx)(t.code,{children:"app-config.yaml"}),"."]})}),"\n",(0,o.jsxs)(t.p,{children:["The next step is to ",(0,o.jsx)(t.a,{href:"http://backstage.io/docs/features/software-templates/adding-templates",children:"add templates"}),"\nto your Backstage app."]}),"\n",(0,o.jsx)(t.h2,{id:"publishing-defaults",children:"Publishing defaults"}),"\n",(0,o.jsxs)(t.p,{children:["Software templates can define ",(0,o.jsx)(t.em,{children:"publish"})," actions, such as ",(0,o.jsx)(t.code,{children:"publish:github"}),", to\ncreate new repositories or submit pull / merge requests to existing\nrepositories. You can configure the author and commit message through the\n",(0,o.jsx)(t.code,{children:"scaffolder"})," configuration in ",(0,o.jsx)(t.code,{children:"app-config.yaml"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"scaffolder:\n  defaultAuthor:\n    name: M.C. Hammer # Defaults to `Scaffolder`\n    email: hammer@donthurtem.com # Defaults to `scaffolder@backstage.io`\n  defaultCommitMessage: \"U can't touch this\" # Defaults to 'Initial commit'\n"})}),"\n",(0,o.jsxs)(t.p,{children:["To configure who can see the new repositories created from software templates,\nadd the ",(0,o.jsx)(t.code,{children:"repoVisibility"})," key within a software template:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"- id: publish\n  name: Publish\n  action: publish:github\n  input:\n    repoUrl: '{{ parameters.repoUrl }}'\n    repoVisibility: public # or 'internal' or 'private'\n"})}),"\n",(0,o.jsx)(t.h2,{id:"disabling-docker-in-docker-situation-optional",children:"Disabling Docker in Docker situation (Optional)"}),"\n",(0,o.jsxs)(t.p,{children:["Software templates use the ",(0,o.jsx)(t.code,{children:"fetch:template"})," action by default, which requires no\nexternal dependencies and offers a\n",(0,o.jsx)(t.a,{href:"https://backstage.io/docs/features/software-templates/builtin-actions#using-cookiecuttercompat-mode",children:"Cookiecutter-compatible mode"}),".\nThere is also a ",(0,o.jsx)(t.code,{children:"fetch:cookiecutter"})," action, which uses\n",(0,o.jsx)(t.a,{href:"https://github.com/cookiecutter/cookiecutter",children:"Cookiecutter"})," directly for\ntemplating. By default, the ",(0,o.jsx)(t.code,{children:"fetch:cookiecutter"})," action will use the\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/scripts/Cookiecutter.dockerfile",children:"scaffolder-backend/Cookiecutter"}),"\ndocker image."]}),"\n",(0,o.jsx)(t.p,{children:"If you are running Backstage from a Docker container and you want to avoid\ncalling a container inside a container, you can set up Cookiecutter in your own\nimage, this will use the local installation instead."}),"\n",(0,o.jsxs)(t.p,{children:["You can do so by including the following lines in the last step of your\n",(0,o.jsx)(t.code,{children:"Dockerfile"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-Dockerfile",children:"RUN apt-get update && apt-get install -y python3 python3-pip\nRUN pip3 install cookiecutter\n"})}),"\n",(0,o.jsx)(t.h2,{id:"customizing-the-scaffolderpage-with-grouping-and-filtering",children:"Customizing the ScaffolderPage with Grouping and Filtering"}),"\n",(0,o.jsxs)(t.p,{children:["Once you have more than a few software templates you may want to customize your\n",(0,o.jsx)(t.code,{children:"ScaffolderPage"})," by grouping and surfacing certain templates together. You can\naccomplish this by creating ",(0,o.jsx)(t.code,{children:"groups"})," and passing them to your ",(0,o.jsx)(t.code,{children:"ScaffolderPage"}),"\nlike below"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"<ScaffolderPage\n  groups={[\n    {\n      title: \"Recommended\",\n      filter: entity =>\n        entity?.metadata?.tags?.includes('recommended') ?? false,\n    },\n  ]}\n/>\n"})}),"\n",(0,o.jsx)(t.p,{children:"This code will group all templates with the 'recommended' tag together at the\ntop of the page above any other templates not filtered by this group or others."}),"\n",(0,o.jsxs)(t.p,{children:["You can also further customize groups by passing in a ",(0,o.jsx)(t.code,{children:"titleComponent"})," instead\nof a ",(0,o.jsx)(t.code,{children:"title"})," which will be a component to use as the header instead of just the\ndefault ",(0,o.jsx)(t.code,{children:"ContentHeader"})," with the ",(0,o.jsx)(t.code,{children:"title"})," set as it's value.\n",(0,o.jsx)(t.img,{alt:"Grouped Templates",src:n(370950).A+"",width:"3570",height:"2034"})]}),"\n",(0,o.jsx)(t.p,{children:"There is also an option to hide some templates.\nYou can have several use cases for that:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"it's still in an experimental phase, so you can combine it with feature flagging for example"}),"\n",(0,o.jsx)(t.li,{children:"you don't want to make them accessible from template list, but only open it on some action with pre-filled data."}),"\n",(0,o.jsx)(t.li,{children:"show different set of templates depends on target environment"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",metastring:"jsx",children:"<ScaffolderPage\n  templateFilter={entity =>\n    entity?.metadata?.tags?.includes('experimental') ?? false\n  }\n/>\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},221020:(e,t,n)=>{var o=n(296540),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var o,a={},l=null,d=null;for(o in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,o)&&!c.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:i,type:e,key:l,ref:d,props:a,_owner:r.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},474848:(e,t,n)=>{e.exports=n(221020)},370950:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/grouped-templates-4be3346a6689c891dd384684ad8fd59e.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var o=n(296540);const i={},a=o.createContext(i);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);