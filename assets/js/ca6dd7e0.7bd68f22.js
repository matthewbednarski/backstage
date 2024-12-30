/*! For license information please see ca6dd7e0.7bd68f22.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[781449],{650744:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var t=n(474848),o=n(28453);const s={id:"plugin-catalog-backend-module-aws.awss3entityprovider.fromconfig",title:"AwsS3EntityProvider.fromConfig()",description:"API reference for AwsS3EntityProvider.fromConfig()"},c=void 0,i={id:"reference/plugin-catalog-backend-module-aws.awss3entityprovider.fromconfig",title:"AwsS3EntityProvider.fromConfig()",description:"API reference for AwsS3EntityProvider.fromConfig()",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-backend-module-aws.awss3entityprovider.fromconfig.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-aws.awss3entityprovider.fromconfig",permalink:"/docs/reference/plugin-catalog-backend-module-aws.awss3entityprovider.fromconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-catalog-backend-module-aws.awss3entityprovider.fromconfig.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-backend-module-aws.awss3entityprovider.fromconfig",title:"AwsS3EntityProvider.fromConfig()",description:"API reference for AwsS3EntityProvider.fromConfig()"}},d={},a=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-aws",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-aws"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-aws.awss3entityprovider",children:(0,t.jsx)(r.code,{children:"AwsS3EntityProvider"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-aws.awss3entityprovider.fromconfig",children:(0,t.jsx)(r.code,{children:"fromConfig"})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"static fromConfig(configRoot: Config, options: {\n        logger: LoggerService;\n        schedule?: SchedulerServiceTaskRunner;\n        scheduler?: SchedulerService;\n    }): AwsS3EntityProvider[];\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"configRoot"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/config.config",children:"Config"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"options"}),(0,t.jsxs)(r.td,{children:["{ logger: ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.loggerservice",children:"LoggerService"}),"; schedule?: ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.schedulerservicetaskrunner",children:"SchedulerServiceTaskRunner"}),"; scheduler?: ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.schedulerservice",children:"SchedulerService"}),"; }"]}),(0,t.jsx)(r.td,{})]})]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-aws.awss3entityprovider",children:"AwsS3EntityProvider"}),"[]"]})]})}function f(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,r,n)=>{var t=n(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var t,s={},a=null,l=null;for(t in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,t)&&!d.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:o,type:e,key:a,ref:l,props:s,_owner:i.current}}r.Fragment=s,r.jsx=a,r.jsxs=a},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>i});var t=n(296540);const o={},s=t.createContext(o);function c(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);