import{g as c}from"./index-CTjT7uj6.js";function i(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in e)){const o=Object.getOwnPropertyDescriptor(n,a);o&&Object.defineProperty(e,a,o.get?o:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function l(e){const t={className:"number",begin:/[$%]\d+/},r={className:"number",begin:/\d+/},n={className:"number",begin:/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?/},a={className:"number",begin:/:\d{1,5}/};return{name:"Apache config",aliases:["apacheconf"],case_insensitive:!0,contains:[e.HASH_COMMENT_MODE,{className:"section",begin:/<\/?/,end:/>/,contains:[n,a,e.inherit(e.QUOTE_STRING_MODE,{relevance:0})]},{className:"attribute",begin:/\w+/,relevance:0,keywords:{nomarkup:"order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"},starts:{end:/$/,relevance:0,keywords:{literal:"on off all deny allow"},contains:[{className:"meta",begin:/\s\[/,end:/\]$/},{className:"variable",begin:/[\$%]\{/,end:/\}/,contains:["self",t]},n,r,e.QUOTE_STRING_MODE]}}],illegal:/\S/}}var s=l;const d=c(s),u=i({__proto__:null,default:d},[s]);export{u as a};
