import{g as c}from"./index-CTjT7uj6.js";function g(e,r){for(var a=0;a<r.length;a++){const n=r[a];if(typeof n!="string"&&!Array.isArray(n)){for(const t in n)if(t!=="default"&&!(t in e)){const s=Object.getOwnPropertyDescriptor(n,t);s&&Object.defineProperty(e,t,s.get?s:{enumerable:!0,get:()=>n[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function o(e){return{name:"HAML",case_insensitive:!0,contains:[{className:"meta",begin:"^!!!( (5|1\\.1|Strict|Frameset|Basic|Mobile|RDFa|XML\\b.*))?$",relevance:10},e.COMMENT("^\\s*(!=#|=#|-#|/).*$",!1,{relevance:0}),{begin:"^\\s*(-|=|!=)(?!#)",starts:{end:"\\n",subLanguage:"ruby"}},{className:"tag",begin:"^\\s*%",contains:[{className:"selector-tag",begin:"\\w+"},{className:"selector-id",begin:"#[\\w-]+"},{className:"selector-class",begin:"\\.[\\w-]+"},{begin:/\{\s*/,end:/\s*\}/,contains:[{begin:":\\w+\\s*=>",end:",\\s+",returnBegin:!0,endsWithParent:!0,contains:[{className:"attr",begin:":\\w+"},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{begin:"\\w+",relevance:0}]}]},{begin:"\\(\\s*",end:"\\s*\\)",excludeEnd:!0,contains:[{begin:"\\w+\\s*=",end:"\\s+",returnBegin:!0,endsWithParent:!0,contains:[{className:"attr",begin:"\\w+",relevance:0},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{begin:"\\w+",relevance:0}]}]}]},{begin:"^\\s*[=~]\\s*"},{begin:/#\{/,starts:{end:/\}/,subLanguage:"ruby"}}]}}var i=o;const l=c(i),u=g({__proto__:null,default:l},[i]);export{u as h};
