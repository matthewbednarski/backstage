import{g as i}from"./index-CTjT7uj6.js";function a(t,r){for(var s=0;s<r.length;s++){const e=r[s];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in t)){const c=Object.getOwnPropertyDescriptor(e,n);c&&Object.defineProperty(t,n,c.get?c:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}function l(t){return{keywords:"dsconfig",contains:[{className:"keyword",begin:"^dsconfig",end:/\s/,excludeEnd:!0,relevance:10},{className:"built_in",begin:/(list|create|get|set|delete)-(\w+)/,end:/\s/,excludeEnd:!0,illegal:"!@#$%^&*()",relevance:10},{className:"built_in",begin:/--(\w+)/,end:/\s/,excludeEnd:!0},{className:"string",begin:/"/,end:/"/},{className:"string",begin:/'/,end:/'/},{className:"string",begin:/[\w\-?]+:\w+/,end:/\W/,relevance:0},{className:"string",begin:/\w+(\-\w+)*/,end:/(?=\W)/,relevance:0},t.HASH_COMMENT_MODE]}}var o=l;const d=i(o),E=a({__proto__:null,default:d},[o]);export{E as d};
