/*! For license information please see afcc5ea2.f7f4598e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[615806],{707617:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>u,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(824246),o=t(511151);const i={id:"frontend-plugin-api.extensiondefinition.override",title:"ExtensionDefinition.override()",description:"API reference for ExtensionDefinition.override()"},u=void 0,a={id:"reference/frontend-plugin-api.extensiondefinition.override",title:"ExtensionDefinition.override()",description:"API reference for ExtensionDefinition.override()",source:"@site/../docs/reference/frontend-plugin-api.extensiondefinition.override.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.extensiondefinition.override",permalink:"/docs/reference/frontend-plugin-api.extensiondefinition.override",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/frontend-plugin-api.extensiondefinition.override.md",tags:[],version:"current",frontMatter:{id:"frontend-plugin-api.extensiondefinition.override",title:"ExtensionDefinition.override()",description:"API reference for ExtensionDefinition.override()"}},s={},c=[{value:"Parameters",id:"parameters",level:2}];function f(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api",children:(0,r.jsx)(n.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensiondefinition",children:(0,r.jsx)(n.code,{children:"ExtensionDefinition"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensiondefinition.override",children:(0,r.jsx)(n.code,{children:"override"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"override<TExtensionConfigSchema extends {\n        [key in string]: (zImpl: typeof z) => z.ZodType;\n    }, UFactoryOutput extends ExtensionDataValue<any, any>, UNewOutput extends AnyExtensionDataRef, TExtraInputs extends {\n        [inputName in string]: ExtensionInput<AnyExtensionDataRef, {\n            optional: boolean;\n            singleton: boolean;\n        }>;\n    }>(args: {\n        attachTo?: {\n            id: string;\n            input: string;\n        };\n        disabled?: boolean;\n        inputs?: TExtraInputs & {\n            [KName in keyof TInputs]?: `Error: Input '${KName & string}' is already defined in parent definition`;\n        };\n        output?: Array<UNewOutput>;\n        config?: {\n            schema: TExtensionConfigSchema & {\n                [KName in keyof TConfig]?: `Error: Config key '${KName & string}' is already defined in parent schema`;\n            };\n        };\n        factory(originalFactory: (context?: {\n            config?: TConfig;\n            inputs?: Expand<ResolvedExtensionInputs<TInputs>>;\n        }) => ExtensionDataContainer<UOutput>, context: {\n            node: AppNode;\n            config: TConfig & {\n                [key in keyof TExtensionConfigSchema]: z.infer<ReturnType<TExtensionConfigSchema[key]>>;\n            };\n            inputs: Expand<ResolvedExtensionInputs<TInputs & TExtraInputs>>;\n        }): Iterable<UFactoryOutput>;\n    } & VerifyExtensionFactoryOutput<AnyExtensionDataRef extends UNewOutput ? UOutput : UNewOutput, UFactoryOutput>): ExtensionDefinition<{\n        [key in keyof TExtensionConfigSchema]: z.infer<ReturnType<TExtensionConfigSchema[key]>>;\n    } & TConfig, z.input<z.ZodObject<{\n        [key in keyof TExtensionConfigSchema]: ReturnType<TExtensionConfigSchema[key]>;\n    }>> & TConfigInput, AnyExtensionDataRef extends UNewOutput ? UOutput : UNewOutput, TInputs & TExtraInputs>;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"args"}),(0,r.jsxs)(n.td,{children:["{ attachTo?: { id: string; input: string; }; disabled?: boolean; inputs?: TExtraInputs & { [KName in keyof TInputs]?: `Error: Input '${KName & string}' is already defined in parent definition`; }; output?: Array<UNewOutput>; config?: { schema: TExtensionConfigSchema & { [KName in keyof TConfig]?: `Error: Config key '${KName & string}' is already defined in parent schema`; }; }; factory(originalFactory: (context?: { config?: TConfig; inputs?: Expand<",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.resolvedextensioninputs",children:"ResolvedExtensionInputs"}),"<TInputs>>; }) => ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensiondatacontainer",children:"ExtensionDataContainer"}),"<UOutput>, context: { node: ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.appnode",children:"AppNode"}),"; config: TConfig & { [key in keyof TExtensionConfigSchema]: z.infer<ReturnType<TExtensionConfigSchema[key]>>; }; inputs: Expand<",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.resolvedextensioninputs",children:"ResolvedExtensionInputs"}),"<TInputs & TExtraInputs>>; }): Iterable<UFactoryOutput>; } & VerifyExtensionFactoryOutput<",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.anyextensiondataref",children:"AnyExtensionDataRef"})," extends UNewOutput ? UOutput : UNewOutput, UFactoryOutput>"]}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensiondefinition",children:"ExtensionDefinition"}),"<{ [key in keyof TExtensionConfigSchema]: z.infer<ReturnType<TExtensionConfigSchema[key]>>; } & TConfig, z.input<z.ZodObject<{ [key in keyof TExtensionConfigSchema]: ReturnType<TExtensionConfigSchema[key]>; }>> & TConfigInput, ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.anyextensiondataref",children:"AnyExtensionDataRef"})," extends UNewOutput ? UOutput : UNewOutput, TInputs & TExtraInputs>"]})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},371426:(e,n,t)=>{var r=t(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,i={},c=null,f=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(f=n.ref),n)u.call(n,r)&&!s.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:c,ref:f,props:i,_owner:a.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,h={};function m(e,n,t){this.props=e,this.context=n,this.refs=h,this.updater=t||y}function g(){}function E(e,n,t){this.props=e,this.context=n,this.refs=h,this.updater=t||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=m.prototype;var v=E.prototype=new g;v.constructor=E,x(v,m.prototype),v.isPureReactComponent=!0;var b=Array.isArray,_=Object.prototype.hasOwnProperty,T={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function j(e,n,r){var o,i={},u=null,a=null;if(null!=n)for(o in void 0!==n.ref&&(a=n.ref),void 0!==n.key&&(u=""+n.key),n)_.call(n,o)&&!k.hasOwnProperty(o)&&(i[o]=n[o]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var c=Array(s),f=0;f<s;f++)c[f]=arguments[f+2];i.children=c}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===i[o]&&(i[o]=s[o]);return{$$typeof:t,type:e,key:u,ref:a,props:i,_owner:T.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var S=/\/+/g;function O(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function R(e,n,o,i,u){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var s=!1;if(null===e)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case t:case r:s=!0}}if(s)return u=u(s=e),e=""===i?"."+O(s,0):i,b(u)?(o="",null!=e&&(o=e.replace(S,"$&/")+"/"),R(u,n,o,"",(function(e){return e}))):null!=u&&(C(u)&&(u=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||s&&s.key===u.key?"":(""+u.key).replace(S,"$&/")+"/")+e)),n.push(u)),1;if(s=0,i=""===i?".":i+":",b(e))for(var c=0;c<e.length;c++){var f=i+O(a=e[c],c);s+=R(a,n,o,f,u)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),c=0;!(a=e.next()).done;)s+=R(a=a.value,n,o,f=i+O(a,c++),u);else if("object"===a)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function I(e,n,t){if(null==e)return e;var r=[],o=0;return R(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function w(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},U={transition:null},$={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:U,ReactCurrentOwner:T};n.Children={map:I,forEach:function(e,n,t){I(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return I(e,(function(){n++})),n},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=m,n.Fragment=o,n.Profiler=u,n.PureComponent=E,n.StrictMode=i,n.Suspense=f,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=x({},e.props),i=e.key,u=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(u=n.ref,a=T.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in n)_.call(n,c)&&!k.hasOwnProperty(c)&&(o[c]=void 0===n[c]&&void 0!==s?s[c]:n[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){s=Array(c);for(var f=0;f<c;f++)s[f]=arguments[f+2];o.children=s}return{$$typeof:t,type:e.type,key:i,ref:u,props:o,_owner:a}},n.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=j,n.createFactory=function(e){var n=j.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:c,render:e}},n.isValidElement=C,n.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:w}},n.memo=function(e,n){return{$$typeof:l,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=U.transition;U.transition={};try{e()}finally{U.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return N.current.useCallback(e,n)},n.useContext=function(e){return N.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return N.current.useDeferredValue(e)},n.useEffect=function(e,n){return N.current.useEffect(e,n)},n.useId=function(){return N.current.useId()},n.useImperativeHandle=function(e,n,t){return N.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return N.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return N.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return N.current.useMemo(e,n)},n.useReducer=function(e,n,t){return N.current.useReducer(e,n,t)},n.useRef=function(e){return N.current.useRef(e)},n.useState=function(e){return N.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return N.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return N.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>u});var r=t(667294);const o={},i=r.createContext(o);function u(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:u(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);