/*! For license information please see e49a2f5a.e72499e0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[347276],{922068:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var i=t(474848),r=t(28453);const s={id:"frontend-plugin-api.extensionblueprint.makewithoverrides",title:"ExtensionBlueprint.makeWithOverrides()",description:"API reference for ExtensionBlueprint.makeWithOverrides()"},a=void 0,o={id:"reference/frontend-plugin-api.extensionblueprint.makewithoverrides",title:"ExtensionBlueprint.makeWithOverrides()",description:"API reference for ExtensionBlueprint.makeWithOverrides()",source:"@site/versioned_docs/version-stable/reference/frontend-plugin-api.extensionblueprint.makewithoverrides.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.extensionblueprint.makewithoverrides",permalink:"/docs/reference/frontend-plugin-api.extensionblueprint.makewithoverrides",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/frontend-plugin-api.extensionblueprint.makewithoverrides.md",tags:[],version:"stable",frontMatter:{id:"frontend-plugin-api.extensionblueprint.makewithoverrides",title:"ExtensionBlueprint.makeWithOverrides()",description:"API reference for ExtensionBlueprint.makeWithOverrides()"}},d={},p=[{value:"Parameters",id:"parameters",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,i.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api",children:(0,i.jsx)(n.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,i.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensionblueprint",children:(0,i.jsx)(n.code,{children:"ExtensionBlueprint"})})," > ",(0,i.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensionblueprint.makewithoverrides",children:(0,i.jsx)(n.code,{children:"makeWithOverrides"})})]}),"\n",(0,i.jsx)(n.p,{children:"Creates a new extension from the blueprint."}),"\n",(0,i.jsxs)(n.p,{children:["You must either pass ",(0,i.jsx)(n.code,{children:"params"})," directly, or define a ",(0,i.jsx)(n.code,{children:"factory"})," that can optionally call the original factory with the same params."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"makeWithOverrides<TNewNamespace extends string | undefined, TNewName extends string | undefined, TExtensionConfigSchema extends {\n        [key in string]: (zImpl: typeof z) => z.ZodType;\n    }, UFactoryOutput extends ExtensionDataValue<any, any>, UNewOutput extends AnyExtensionDataRef, TExtraInputs extends {\n        [inputName in string]: ExtensionInput<AnyExtensionDataRef, {\n            optional: boolean;\n            singleton: boolean;\n        }>;\n    }>(args: {\n        namespace?: TNewNamespace;\n        name?: TNewName;\n        attachTo?: {\n            id: string;\n            input: string;\n        };\n        disabled?: boolean;\n        inputs?: TExtraInputs & {\n            [KName in keyof TInputs]?: `Error: Input '${KName & string}' is already defined in parent definition`;\n        };\n        output?: Array<UNewOutput>;\n        config?: {\n            schema: TExtensionConfigSchema & {\n                [KName in keyof TConfig]?: `Error: Config key '${KName & string}' is already defined in parent schema`;\n            };\n        };\n        factory(originalFactory: (params: TParams, context?: {\n            config?: TConfig;\n            inputs?: ResolveInputValueOverrides<TInputs>;\n        }) => ExtensionDataContainer<UOutput>, context: {\n            node: AppNode;\n            config: TConfig & {\n                [key in keyof TExtensionConfigSchema]: z.infer<ReturnType<TExtensionConfigSchema[key]>>;\n            };\n            inputs: Expand<ResolvedExtensionInputs<TInputs & TExtraInputs>>;\n        }): Iterable<UFactoryOutput> & VerifyExtensionFactoryOutput<AnyExtensionDataRef extends UNewOutput ? UOutput : UNewOutput, UFactoryOutput>;\n    }): ExtensionDefinition<{\n        [key in keyof TExtensionConfigSchema]: z.infer<ReturnType<TExtensionConfigSchema[key]>>;\n    } & TConfig, z.input<z.ZodObject<{\n        [key in keyof TExtensionConfigSchema]: ReturnType<TExtensionConfigSchema[key]>;\n    }>> & TConfigInput, AnyExtensionDataRef extends UNewOutput ? UOutput : UNewOutput, TInputs & TExtraInputs, {\n        kind: TIdParts['kind'];\n        namespace: string | undefined extends TNewNamespace ? TIdParts['namespace'] : TNewNamespace;\n        name: string | undefined extends TNewName ? TIdParts['name'] : TNewName;\n    }>;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"args"}),(0,i.jsxs)(n.td,{children:["{ namespace?: TNewNamespace; name?: TNewName; attachTo?: { id: string; input: string; }; disabled?: boolean; inputs?: TExtraInputs & { [KName in keyof TInputs]?: `Error: Input '${KName & string}' is already defined in parent definition`; }; output?: Array<UNewOutput>; config?: { schema: TExtensionConfigSchema & { [KName in keyof TConfig]?: `Error: Config key '${KName & string}' is already defined in parent schema`; }; }; factory(originalFactory: (params: TParams, context?: { config?: TConfig; inputs?: ",(0,i.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.resolveinputvalueoverrides",children:"ResolveInputValueOverrides"}),"<TInputs>; }) => ",(0,i.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensiondatacontainer",children:"ExtensionDataContainer"}),"<UOutput>, context: { node: ",(0,i.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.appnode",children:"AppNode"}),"; config: TConfig & { [key in keyof TExtensionConfigSchema]: z.infer<ReturnType<TExtensionConfigSchema[key]>>; }; inputs: Expand<",(0,i.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.resolvedextensioninputs",children:"ResolvedExtensionInputs"}),"<TInputs & TExtraInputs>>; }): Iterable<UFactoryOutput> & VerifyExtensionFactoryOutput<",(0,i.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.anyextensiondataref",children:"AnyExtensionDataRef"})," extends UNewOutput ? UOutput : UNewOutput, UFactoryOutput>; }"]}),(0,i.jsx)(n.td,{})]})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensiondefinition",children:"ExtensionDefinition"}),"<{ [key in keyof TExtensionConfigSchema]: z.infer<ReturnType<TExtensionConfigSchema[key]>>; } & TConfig, z.input<z.ZodObject<{ [key in keyof TExtensionConfigSchema]: ReturnType<TExtensionConfigSchema[key]>; }>> & TConfigInput, ",(0,i.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.anyextensiondataref",children:"AnyExtensionDataRef"})," extends UNewOutput ? UOutput : UNewOutput, TInputs & TExtraInputs, { kind: TIdParts['kind']; namespace: string | undefined extends TNewNamespace ? TIdParts['namespace'] : TNewNamespace; name: string | undefined extends TNewName ? TIdParts['name'] : TNewName; }>"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},221020:(e,n,t)=>{var i=t(296540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,t){var i,s={},p=null,c=null;for(i in void 0!==t&&(p=""+t),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(c=n.ref),n)a.call(n,i)&&!d.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===s[i]&&(s[i]=n[i]);return{$$typeof:r,type:e,key:p,ref:c,props:s,_owner:o.current}}n.Fragment=s,n.jsx=p,n.jsxs=p},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(296540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);