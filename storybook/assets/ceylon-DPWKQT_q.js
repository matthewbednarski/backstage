import{g as c}from"./index-CTjT7uj6.js";function i(n,s){for(var r=0;r<s.length;r++){const t=s[r];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in n)){const a=Object.getOwnPropertyDescriptor(t,e);a&&Object.defineProperty(n,e,a.get?a:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}function l(n){const s="assembly module package import alias class interface object given value assign void function new of extends satisfies abstracts in out return break continue throw assert dynamic if else switch case for while try catch finally then let this outer super is exists nonempty",r="shared abstract formal default actual variable late native deprecated final sealed annotation suppressWarnings small",t="doc by license see throws tagged",e={className:"subst",excludeBegin:!0,excludeEnd:!0,begin:/``/,end:/``/,keywords:s,relevance:10},a=[{className:"string",begin:'"""',end:'"""',relevance:10},{className:"string",begin:'"',end:'"',contains:[e]},{className:"string",begin:"'",end:"'"},{className:"number",begin:"#[0-9a-fA-F_]+|\\$[01_]+|[0-9_]+(?:\\.[0-9_](?:[eE][+-]?\\d+)?)?[kMGTPmunpf]?",relevance:0}];return e.contains=a,{name:"Ceylon",keywords:{keyword:s+" "+r,meta:t},illegal:"\\$[^01]|#[^0-9a-fA-F]",contains:[n.C_LINE_COMMENT_MODE,n.COMMENT("/\\*","\\*/",{contains:["self"]}),{className:"meta",begin:'@[a-z]\\w*(?::"[^"]*")?'}].concat(a)}}var o=l;const u=c(o),d=i({__proto__:null,default:u},[o]);export{d as c};
