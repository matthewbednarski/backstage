import{g as a}from"./index-CTjT7uj6.js";function c(s,r){for(var n=0;n<r.length;n++){const e=r[n];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in s)){const i=Object.getOwnPropertyDescriptor(e,t);i&&Object.defineProperty(s,t,i.get?i:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}function u(s){return{name:"SubUnit",case_insensitive:!0,contains:[{className:"string",begin:`\\[
(multipart)?`,end:`\\]
`},{className:"string",begin:"\\d{4}-\\d{2}-\\d{2}(\\s+)\\d{2}:\\d{2}:\\d{2}.\\d+Z"},{className:"string",begin:"(\\+|-)\\d+"},{className:"keyword",relevance:10,variants:[{begin:"^(test|testing|success|successful|failure|error|skip|xfail|uxsuccess)(:?)\\s+(test)?"},{begin:"^progress(:?)(\\s+)?(pop|push)?"},{begin:"^tags:"},{begin:"^time:"}]}]}}var o=u;const g=a(o),b=c({__proto__:null,default:g},[o]);export{b as s};
