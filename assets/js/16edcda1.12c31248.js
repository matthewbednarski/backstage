/*! For license information please see 16edcda1.12c31248.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[355762],{772508:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=t(474848),s=t(28453);const i={id:"plugin-events-backend.httppostingresseventpublisher.fromconfig",title:"HttpPostIngressEventPublisher.fromConfig()",description:"API reference for HttpPostIngressEventPublisher.fromConfig()"},o=void 0,c={id:"reference/plugin-events-backend.httppostingresseventpublisher.fromconfig",title:"HttpPostIngressEventPublisher.fromConfig()",description:"API reference for HttpPostIngressEventPublisher.fromConfig()",source:"@site/../docs/reference/plugin-events-backend.httppostingresseventpublisher.fromconfig.md",sourceDirName:"reference",slug:"/reference/plugin-events-backend.httppostingresseventpublisher.fromconfig",permalink:"/docs/next/reference/plugin-events-backend.httppostingresseventpublisher.fromconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-events-backend.httppostingresseventpublisher.fromconfig.md",tags:[],version:"current",frontMatter:{id:"plugin-events-backend.httppostingresseventpublisher.fromconfig",title:"HttpPostIngressEventPublisher.fromConfig()",description:"API reference for HttpPostIngressEventPublisher.fromConfig()"}},p={},l=[{value:"Parameters",id:"parameters",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-events-backend",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-events-backend"})})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-events-backend.httppostingresseventpublisher",children:(0,r.jsx)(n.code,{children:"HttpPostIngressEventPublisher"})})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-events-backend.httppostingresseventpublisher.fromconfig",children:(0,r.jsx)(n.code,{children:"fromConfig"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"static fromConfig(env: {\n        config: Config;\n        events: EventsService;\n        ingresses?: {\n            [topic: string]: Omit<HttpPostIngressOptions, 'topic'>;\n        };\n        logger: LoggerService;\n    }): HttpPostIngressEventPublisher;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"env"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsxs)(n.p,{children:["{ config: ",(0,r.jsx)(n.a,{href:"/docs/next/reference/config.config",children:"Config"}),"; events: ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-events-node.eventsservice",children:"EventsService"}),"; ingresses?: { [topic: string]: Omit<",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-events-node.httppostingressoptions",children:"HttpPostIngressOptions"}),", 'topic'>; }; logger: ",(0,r.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api.loggerservice",children:"LoggerService"}),"; }"]}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-events-backend.httppostingresseventpublisher",children:"HttpPostIngressEventPublisher"})})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},221020:(e,n,t)=>{var r=t(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,i={},l=null,d=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,r)&&!p.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:s,type:e,key:l,ref:d,props:i,_owner:c.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(296540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);