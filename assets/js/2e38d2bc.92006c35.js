/*! For license information please see 2e38d2bc.92006c35.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[530086],{242347:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var t=o(474848),s=o(28453);const r={id:"troubleshooting",title:"Troubleshooting TechDocs",sidebar_label:"Troubleshooting",description:"Troubleshooting for TechDocs"},c=void 0,i={id:"features/techdocs/troubleshooting",title:"Troubleshooting TechDocs",description:"Troubleshooting for TechDocs",source:"@site/../docs/features/techdocs/troubleshooting.md",sourceDirName:"features/techdocs",slug:"/features/techdocs/troubleshooting",permalink:"/docs/next/features/techdocs/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/features/techdocs/troubleshooting.md",tags:[],version:"current",frontMatter:{id:"troubleshooting",title:"Troubleshooting TechDocs",sidebar_label:"Troubleshooting",description:"Troubleshooting for TechDocs"},sidebar:"docs",previous:{title:"How-To guides",permalink:"/docs/next/features/techdocs/how-to-guides"},next:{title:"FAQ",permalink:"/docs/next/features/techdocs/faqs"}},a={},d=[{value:"Documentation not found when generating",id:"documentation-not-found-when-generating",level:2},{value:"MkDocs Build Errors",id:"mkdocs-build-errors",level:2},{value:"PlantUML with <code>svg_object</code> doesn&#39;t render",id:"plantuml-with-svg_object-doesnt-render",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"documentation-not-found-when-generating",children:"Documentation not found when generating"}),"\n",(0,t.jsx)(n.p,{children:'This may happen if you have TechDocs set up using the "out-of-the-box"\nconfiguration, wherein documentation is built dynamically by the TechDocs\nbackend, and your TechDocs files are being pulled from a git-based source\ncontrol management system (e.g. GitHub, BitBucket, etc).'}),"\n",(0,t.jsxs)(n.p,{children:["If you experience this, check that TechDocs-related files (e.g. markdown,\nassets, or the ",(0,t.jsx)(n.code,{children:"mkdocs.yml"})," file) are not matched by an ",(0,t.jsx)(n.code,{children:"export-ignore"}),"\nattribute in a ",(0,t.jsx)(n.code,{children:".gitattributes"})," file in the relevant repository."]}),"\n",(0,t.jsx)(n.p,{children:"TechDocs' backend is not able to see such files, and therefore may generate\npartial (or no) TechDocs as a result."}),"\n",(0,t.jsx)(n.p,{children:'You\'ll need to reconsider how you distribute tar archives based on your source\ncode (and how you prevent internal documentation from being included in those\narchives). Alternatively, you could consider switching to the "recommended"\nTechDocs architecture (documentation generated and published in CI/CD).'}),"\n",(0,t.jsx)(n.h2,{id:"mkdocs-build-errors",children:"MkDocs Build Errors"}),"\n",(0,t.jsxs)(n.p,{children:["Using the ",(0,t.jsx)(n.a,{href:"https://github.com/backstage/techdocs-cli",children:"TechDocs CLI"}),", you can\ntroubleshoot MkDocs build issues locally. Note this requires you have Docker\navailable to launch images. First, ",(0,t.jsx)(n.code,{children:"git clone"})," the target repository locally,\nthen in the root of the repository, run:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npx @techdocs/cli serve\n"})}),"\n",(0,t.jsx)(n.p,{children:"For example, if you have forgotten to put an MkDocs configuration file in your\nrepo, the resulting error will be:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npx: installed 278 in 9.089s\n[techdocs-preview-bundle] Running local version of Backstage at http://localhost:3000\nINFO    -  Building documentation...\n\nConfig file '/content/mkdocs.yml' does not exist.\n"})}),"\n",(0,t.jsx)(n.p,{children:"When it works, a local copy of both Backstage and your site will be launched\nlocally:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npx: installed 278 in 9.682s\n[techdocs-preview-bundle] Running local version of Backstage at http://localhost:3000\nINFO    -  Building documentation...\nWARNING -  Config value: 'dev_addr'. Warning: The use of the IP address '0.0.0.0'\n  suggests a production environment or the use of a proxy to connect to the MkDocs\n  server. However, the MkDocs' server is intended for local development purposes only.\n  Please use a third party production-ready server instead.\nINFO    -  Cleaning site directory\nDEBUG   -  Successfully imported extension module \"plantuml_markdown\".\nDEBUG   -  Successfully loaded extension \"plantuml_markdown.PlantUMLMarkdownExtension\".\nINFO    -  Documentation built in 0.23 seconds\n[I 210115 19:00:45 server:335] Serving on http://0.0.0.0:8000\nINFO    -  Serving on http://0.0.0.0:8000\n[I 210115 19:00:45 handlers:62] Start watching changes\nINFO    -  Start watching changes\n[I 210115 19:00:45 handlers:64] Start detecting changes\nINFO    -  Start detecting changes\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"plantuml-with-svg_object-doesnt-render",children:["PlantUML with ",(0,t.jsx)(n.code,{children:"svg_object"})," doesn't render"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://pypi.org/project/plantuml-markdown/",children:"plantuml-markdown"})," MkDocs\nplugin available in\n",(0,t.jsx)(n.a,{href:"https://github.com/backstage/mkdocs-techdocs-core",children:(0,t.jsx)(n.code,{children:"mkdocs-techdocs-core"})}),"\nsupports different formats for rendering diagrams. TechDocs does however not\nsupport all of them."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"svg_object"})," format renders a diagram as an HTML ",(0,t.jsx)(n.code,{children:"<object>"})," tag but this is\nnot allowed as it enables bad actors to inject malicious content into\ndocumentation pages. See\n",(0,t.jsx)(n.a,{href:"https://github.com/advisories/GHSA-gg96-f8wr-p89f",children:"CVE-2021-32661"})," for more\ndetails."]}),"\n",(0,t.jsxs)(n.p,{children:["Instead use ",(0,t.jsx)(n.code,{children:"svg_inline"})," which renders as an ",(0,t.jsx)(n.code,{children:"<svg>"})," tag and provides the same\nbenefits as ",(0,t.jsx)(n.code,{children:"svg_object"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,n,o)=>{var t=o(296540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,o){var t,r={},d=null,l=null;for(t in void 0!==o&&(d=""+o),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,t)&&!a.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:s,type:e,key:d,ref:l,props:r,_owner:i.current}}n.Fragment=r,n.jsx=d,n.jsxs=d},474848:(e,n,o)=>{e.exports=o(221020)},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>i});var t=o(296540);const s={},r=t.createContext(s);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);