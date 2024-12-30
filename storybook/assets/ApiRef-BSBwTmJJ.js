var E=Object.defineProperty;var g=(e,r,n)=>r in e?E(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n;var u=(e,r,n)=>g(e,typeof r!="symbol"?r+"":r,n);import{r as b}from"./index-CTjT7uj6.js";function w(){return typeof window<"u"&&window.Math===Math?window:typeof self<"u"&&self.Math===Math?self:Function("return this")()}const y=w(),N=e=>`__@backstage/${e}__`;function S(e,r){const n=N(e);let t=y[n];return t||(t=r(),y[n]=t,t)}function I(e){return S(e,()=>b.createContext(void 0))}function x(e){return b.useContext(I(e))}function m(e){if(typeof e!="object"||e===null||Array.isArray(e))return!1;const r=e;return!(typeof r.name!="string"||r.name===""||typeof r.message!="string")}class f extends Error{constructor(r){super(f._prepareSuperMessage(r)),Object.defineProperty(this,"name",{value:"NonError",configurable:!0,writable:!0}),Error.captureStackTrace&&Error.captureStackTrace(this,f)}static _prepareSuperMessage(r){try{return JSON.stringify(r)}catch{return String(r)}}}const A=[{property:"name",enumerable:!1},{property:"message",enumerable:!1},{property:"stack",enumerable:!1},{property:"code",enumerable:!0}],l=Symbol(".toJSON called"),O=e=>{e[l]=!0;const r=e.toJSON();return delete e[l],r},d=({from:e,seen:r,to_:n,forceEnumerable:t,maxDepth:s,depth:c})=>{const o=n||(Array.isArray(e)?[]:{});if(r.push(e),c>=s)return o;if(typeof e.toJSON=="function"&&e[l]!==!0)return O(e);for(const[i,a]of Object.entries(e)){if(typeof Buffer=="function"&&Buffer.isBuffer(a)){o[i]="[object Buffer]";continue}if(typeof a!="function"){if(!a||typeof a!="object"){o[i]=a;continue}if(!r.includes(e[i])){c++,o[i]=d({from:e[i],seen:r.slice(),forceEnumerable:t,maxDepth:s,depth:c});continue}o[i]="[Circular]"}}for(const{property:i,enumerable:a}of A)typeof e[i]=="string"&&Object.defineProperty(o,i,{value:e[i],enumerable:t?!0:a,configurable:!0,writable:!0});return o},j=(e,r={})=>{const{maxDepth:n=Number.POSITIVE_INFINITY}=r;return typeof e=="object"&&e!==null?d({from:e,seen:[],forceEnumerable:!0,maxDepth:n,depth:0}):typeof e=="function"?`[Function: ${e.name||"anonymous"}]`:e},$=(e,r={})=>{const{maxDepth:n=Number.POSITIVE_INFINITY}=r;if(e instanceof Error)return e;if(typeof e=="object"&&e!==null&&!Array.isArray(e)){const t=new Error;return d({from:e,seen:[],to_:t,maxDepth:n,depth:0}),t}return new f(e)};var k={serializeError:j,deserializeError:$};function P(e){const r=k.deserializeError(e);return e.stack||(r.stack=void 0),r}function C(e){if(m(e)){const r=String(e);return r!=="[object Object]"?r:`${e.name}: ${e.message}`}return`unknown error '${e}'`}class h extends Error{constructor(n,t){var c;let s=n;if(t!==void 0){const o=C(t);s?s+=`; caused by ${o}`:s=`caused by ${o}`}super(s);u(this,"cause");(c=Error.captureStackTrace)==null||c.call(Error,this,this.constructor),(!this.name||this.name==="Error")&&this.constructor.name!=="Error"&&(this.name=this.constructor.name),this.cause=m(t)?t:void 0}}class F extends h{constructor(){super(...arguments);u(this,"name","NotFoundError")}}class p extends h{constructor(){super(...arguments);u(this,"name","NotImplementedError")}}function T(){const e=x("api-context");if(!e)throw new p("API context is not available");const r=e.atVersion(1);if(!r)throw new p("ApiContext v1 not available");return r}function B(e){const n=T().get(e);if(!n)throw new p(`No implementation available for ${e}`);return n}class z{constructor(r){if(this.config=r,!r.id.split(".").flatMap(t=>t.split("-")).every(t=>t.match(/^[a-z][a-z0-9]*$/)))throw new Error(`API id must only contain period separated lowercase alphanum tokens with dashes, got '${r.id}'`)}get id(){return this.config.id}get T(){throw new Error(`tried to read ApiRef.T of ${this}`)}toString(){return`apiRef{${this.config.id}}`}}function H(e){return new z(e)}export{F as N,x as a,I as b,H as c,T as d,P as e,p as f,S as g,B as u};
