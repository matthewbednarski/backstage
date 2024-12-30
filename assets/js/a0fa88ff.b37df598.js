/*! For license information please see a0fa88ff.b37df598.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[457967],{158933:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=t(474848),o=t(28453);const c={id:"plugin-scaffolder-node.actioncontext",title:"ActionContext",description:"API reference for ActionContext"},s=void 0,i={id:"reference/plugin-scaffolder-node.actioncontext",title:"ActionContext",description:"API reference for ActionContext",source:"@site/versioned_docs/version-stable/reference/plugin-scaffolder-node.actioncontext.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-node.actioncontext",permalink:"/docs/reference/plugin-scaffolder-node.actioncontext",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-scaffolder-node.actioncontext.md",tags:[],version:"stable",frontMatter:{id:"plugin-scaffolder-node.actioncontext",title:"ActionContext",description:"API reference for ActionContext"}},a={},d=[];function l(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-scaffolder-node"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.actioncontext",children:(0,r.jsx)(n.code,{children:"ActionContext"})})]}),"\n",(0,r.jsx)(n.p,{children:"ActionContext is passed into scaffolder actions."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export type ActionContext<TActionInput extends JsonObject, TActionOutput extends JsonObject = JsonObject> = {\n    logger: Logger;\n    logStream: Writable;\n    secrets?: TaskSecrets;\n    workspacePath: string;\n    input: TActionInput;\n    checkpoint<U extends JsonValue>(key: string, fn: () => Promise<U>): Promise<U>;\n    output(name: keyof TActionOutput, value: TActionOutput[keyof TActionOutput]): void;\n    createTemporaryDirectory(): Promise<string>;\n    getInitiatorCredentials(): Promise<BackstageCredentials>;\n    templateInfo?: TemplateInfo;\n    isDryRun?: boolean;\n    user?: {\n        entity?: UserEntity;\n        ref?: string;\n    };\n    signal?: AbortSignal;\n    each?: JsonObject;\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"References:"})," ",(0,r.jsx)(n.a,{href:"/docs/reference/types.jsonobject",children:"JsonObject"}),", ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.tasksecrets",children:"TaskSecrets"}),", ",(0,r.jsx)(n.a,{href:"/docs/reference/types.jsonvalue",children:"JsonValue"}),", ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.backstagecredentials",children:"BackstageCredentials"}),", ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-common.templateinfo",children:"TemplateInfo"}),", ",(0,r.jsx)(n.a,{href:"/docs/reference/catalog-model.userentityv1alpha1",children:"UserEntity"})]})]})}function f(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,n,t)=>{var r=t(296540),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,c={},d=null,l=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,r)&&!a.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:o,type:e,key:d,ref:l,props:c,_owner:i.current}}n.Fragment=c,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(296540);const o={},c=r.createContext(o);function s(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);