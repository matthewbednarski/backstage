/*! For license information please see fbf65afe.0108f46f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[518254],{60226:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var i=t(474848),a=t(28453);const s={id:"input-examples",title:"Input Examples",description:"Some examples to use in your template"},l=void 0,r={id:"features/software-templates/input-examples",title:"Input Examples",description:"Some examples to use in your template",source:"@site/versioned_docs/version-stable/features/software-templates/input-examples.md",sourceDirName:"features/software-templates",slug:"/features/software-templates/input-examples",permalink:"/docs/features/software-templates/input-examples",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/features/software-templates/input-examples.md",tags:[],version:"stable",frontMatter:{id:"input-examples",title:"Input Examples",description:"Some examples to use in your template"},sidebar:"docs",previous:{title:"Writing Templates",permalink:"/docs/features/software-templates/writing-templates"},next:{title:"Builtin actions",permalink:"/docs/features/software-templates/builtin-actions"}},o={},p=[{value:"Simple text input",id:"simple-text-input",level:2},{value:"Simple input with basic validations",id:"simple-input-with-basic-validations",level:3},{value:"Custom validation error message",id:"custom-validation-error-message",level:4},{value:"Multi line text input",id:"multi-line-text-input",level:3},{value:"Arrays options",id:"arrays-options",level:2},{value:"Array with custom titles",id:"array-with-custom-titles",level:3},{value:"A multiple choices list",id:"a-multiple-choices-list",level:3},{value:"Array with another types",id:"array-with-another-types",level:3},{value:"Boolean options",id:"boolean-options",level:2},{value:"Boolean",id:"boolean",level:3},{value:"Boolean Yes or No options",id:"boolean-yes-or-no-options",level:3},{value:"Boolean multiple options",id:"boolean-multiple-options",level:3},{value:"Use parameters as condition in steps",id:"use-parameters-as-condition-in-steps",level:2},{value:"Use parameters as conditional for fields",id:"use-parameters-as-conditional-for-fields",level:2},{value:"Conditionally set parameters",id:"conditionally-set-parameters",level:2},{value:"Use placeholders to reference remote files",id:"use-placeholders-to-reference-remote-files",level:2},{value:"template.yaml",id:"templateyaml",level:3},{value:"example.yaml",id:"exampleyaml",level:3},{value:"action.yaml",id:"actionyaml",level:3}];function m(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["All the examples on this page you can test using ",(0,i.jsx)(n.em,{children:"create/edit"})," from your Backstage installation."]}),"\n",(0,i.jsxs)(n.p,{children:["It is important to remember that all examples are based on ",(0,i.jsx)(n.a,{href:"https://rjsf-team.github.io/react-jsonschema-form/",children:"react-jsonschema-form"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"simple-text-input",children:"Simple text input"}),"\n",(0,i.jsx)(n.h3,{id:"simple-input-with-basic-validations",children:"Simple input with basic validations"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"parameters:\n  - title: Fill in some steps\n    properties:\n      name:\n        title: Simple text input\n        type: string\n        description: Description about input\n        maxLength: 8\n        pattern: '^([a-zA-Z][a-zA-Z0-9]*)(-[a-zA-Z0-9]+)*$'\n        ui:autofocus: true\n        ui:help: 'Hint: additional description...'\n"})}),"\n",(0,i.jsx)(n.h4,{id:"custom-validation-error-message",children:"Custom validation error message"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"parameters:\n  - title: Fill in some steps\n    properties:\n      name:\n        title: Simple text input\n        type: string\n        description: Description about input\n        maxLength: 8\n        pattern: '^([a-zA-Z][a-zA-Z0-9]*)(-[a-zA-Z0-9]+)*$'\n        ui:autofocus: true\n        ui:help: 'Hint: additional description...'\n    errorMessage:\n      properties:\n        name: '1-8 alphanumeric tokens (first starts with letter) delimited by -'\n"})}),"\n",(0,i.jsx)(n.h3,{id:"multi-line-text-input",children:"Multi line text input"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"parameters:\n  - title: Fill in some steps\n    properties:\n      multiline:\n        title: Text area input\n        type: string\n        description: Insert your multi line string\n        ui:widget: textarea\n        ui:options:\n          rows: 10\n        ui:help: 'Hint: Make it strong!'\n        ui:placeholder: |\n          apiVersion: backstage.io/v1alpha1\n            kind: Component\n            metadata:\n              name: backstage\n            spec:\n              type: library\n              owner: CNCF\n              lifecycle: experimental\n"})}),"\n",(0,i.jsx)(n.h2,{id:"arrays-options",children:"Arrays options"}),"\n",(0,i.jsx)(n.h3,{id:"array-with-custom-titles",children:"Array with custom titles"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"parameters:\n  - title: Fill in some steps\n    properties:\n      volume_type:\n        title: Volume Type\n        type: string\n        description: The volume type to be used\n        default: gp2\n        enum:\n          - gp2\n          - gp3\n          - io1\n          - io2\n          - sc1\n          - st1\n          - standard\n        enumNames:\n          - 'General Purpose SSD (gp2)'\n          - 'General Purpose SSD (gp3)'\n          - 'Provisioned IOPS (io1)'\n          - 'Provisioned IOPS (io2)'\n          - 'Cold HDD (sc1)'\n          - 'Throughput Optimized HDD (st1)'\n          - 'Magnetic (standard)'\n"})}),"\n",(0,i.jsx)(n.h3,{id:"a-multiple-choices-list",children:"A multiple choices list"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"parameters:\n  - title: Fill in some steps\n    properties:\n      name:\n        title: Select environments\n        type: array\n        items:\n          type: string\n          enum:\n            - production\n            - staging\n            - development\n        uniqueItems: true\n        ui:widget: checkboxes\n"})}),"\n",(0,i.jsx)(n.h3,{id:"array-with-another-types",children:"Array with another types"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"parameters:\n  - title: Fill in some steps\n    properties:\n      arrayObjects:\n        title: Array with custom objects\n        type: array\n        minItems: 0\n        ui:options:\n          addable: true\n          orderable: true\n          removable: true\n        items:\n          type: object\n          properties:\n            array:\n              title: Array string with default value\n              type: string\n              default: value3\n              enum:\n                - value1\n                - value2\n                - value3\n            flag:\n              title: Boolean flag\n              type: boolean\n              ui:widget: radio\n            someInput:\n              title: Simple text input\n              type: string\n"})}),"\n",(0,i.jsx)(n.h2,{id:"boolean-options",children:"Boolean options"}),"\n",(0,i.jsx)(n.h3,{id:"boolean",children:"Boolean"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"parameters:\n  - title: Fill in some steps\n    properties:\n      name:\n        title: Checkbox boolean\n        type: boolean\n"})}),"\n",(0,i.jsx)(n.h3,{id:"boolean-yes-or-no-options",children:"Boolean Yes or No options"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"parameters:\n  - title: Fill in some steps\n    properties:\n      name:\n        title: Yes or No options\n        type: boolean\n        ui:widget: radio\n"})}),"\n",(0,i.jsx)(n.h3,{id:"boolean-multiple-options",children:"Boolean multiple options"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"parameters:\n  - title: Fill in some steps\n    properties:\n      name:\n        title: Select features\n        type: array\n        items:\n          type: boolean\n          enum:\n            - 'Enable scraping'\n            - 'Enable HPA'\n            - 'Enable cache'\n        uniqueItems: true\n        ui:widget: checkboxes\n"})}),"\n",(0,i.jsx)(n.h2,{id:"use-parameters-as-condition-in-steps",children:"Use parameters as condition in steps"}),"\n",(0,i.jsx)(n.p,{children:"Conditions use Javascript equality operators."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'- name: Only development environments\n  if: ${{ parameters.environment === "staging" or parameters.environment === "development" }}\n  action: debug:log\n  input:\n    message: \'development step\'\n\n- name: Only production environments\n  if: ${{ parameters.environment === "prod" or parameters.environment === "production" }}\n  action: debug:log\n  input:\n    message: \'production step\'\n\n- name: Non-production environments\n  if: ${{ parameters.environment !== "prod" and parameters.environment !== "production" }}\n  action: debug:log\n  input:\n    message: \'non-production step\'\n'})}),"\n",(0,i.jsx)(n.h2,{id:"use-parameters-as-conditional-for-fields",children:"Use parameters as conditional for fields"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"parameters:\n  - title: Fill in some steps\n    properties:\n      includeName:\n        title: Include Name?\n        type: boolean\n        default: true\n\n    dependencies:\n      includeName:\n        allOf:\n          - if:\n              properties:\n                includeName:\n                  const: true\n            then:\n              properties:\n                lastName:\n                  title: Last Name\n                  type: string\n              # You can use additional fields of parameters within conditional parameters such as required.\n              required:\n                - lastName\n"})}),"\n",(0,i.jsx)(n.h2,{id:"conditionally-set-parameters",children:"Conditionally set parameters"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"if"})," keyword within the parameter uses ",(0,i.jsx)(n.a,{href:"https://mozilla.github.io/nunjucks/templating.html#if",children:"nunjucks templating"}),". The ",(0,i.jsx)(n.code,{children:"not"})," keyword is unavailable; instead, use javascript equality."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"spec:\n  parameters:\n    - title: Fill in some steps\n      properties:\n        path:\n          title: path\n          type: string\n\n  steps:\n    - id: fetch\n      name: Fetch template\n      action: fetch:template\n      input:\n        url: ${{ parameters.path if parameters.path else '/root' }}\n    - id: fetch_not_example\n      name: Fetch template not example\n      action: fetch:template\n      input:\n        url: ${{ '/root' if parameters.path !== true else parameters.path }}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"use-placeholders-to-reference-remote-files",children:"Use placeholders to reference remote files"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Testing of this functionality is not yet supported using ",(0,i.jsx)(n.em,{children:"create/edit"}),". In addition, this functionality only works for remote files and not local files. You also cannot nest files."]})}),"\n",(0,i.jsx)(n.h3,{id:"templateyaml",children:"template.yaml"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"spec:\n  parameters:\n    - $yaml: https://github.com/example/path/to/example.yaml\n    - title: Fill in some steps\n      properties:\n        path:\n          title: path\n          type: string\n\n  steps:\n    - $yaml: https://github.com//example/path/to/action.yaml\n\n    - id: fetch\n      name: Fetch template\n      action: fetch:template\n      input:\n        url: ${{ parameters.path if parameters.path else '/root' }}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"exampleyaml",children:"example.yaml"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"title: Provide simple information\nrequired:\n  - url\nproperties:\n  url:\n    title: url\n    type: string\n"})}),"\n",(0,i.jsx)(n.h3,{id:"actionyaml",children:"action.yaml"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"id: publish\nname: Publish files\naction: publish:github\ninput:\n  repoUrl: ${{ parameters.url }}\n"})})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},221020:(e,n,t)=>{var i=t(296540),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,r=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,t){var i,s={},p=null,m=null;for(i in void 0!==t&&(p=""+t),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(m=n.ref),n)l.call(n,i)&&!o.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===s[i]&&(s[i]=n[i]);return{$$typeof:a,type:e,key:p,ref:m,props:s,_owner:r.current}}n.Fragment=s,n.jsx=p,n.jsxs=p},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var i=t(296540);const a={},s=i.createContext(a);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);