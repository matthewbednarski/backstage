import{g}from"./index-CTjT7uj6.js";function u(e,o){for(var a=0;a<o.length;a++){const t=o[a];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in e)){const r=Object.getOwnPropertyDescriptor(t,n);r&&Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function E(e){const o="div mod in and or not xor asserterror begin case do downto else end exit for if of repeat then to until while with var",a="false true",t=[e.C_LINE_COMMENT_MODE,e.COMMENT(/\{/,/\}/,{relevance:0}),e.COMMENT(/\(\*/,/\*\)/,{relevance:10})],n={className:"string",begin:/'/,end:/'/,contains:[{begin:/''/}]},r={className:"string",begin:/(#\d+)+/},i={className:"number",begin:"\\b\\d+(\\.\\d+)?(DT|D|T)",relevance:0},l={className:"string",begin:'"',end:'"'},s={className:"function",beginKeywords:"procedure",end:/[:;]/,keywords:"procedure|10",contains:[e.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,keywords:o,contains:[n,r]}].concat(t)},d={className:"class",begin:"OBJECT (Table|Form|Report|Dataport|Codeunit|XMLport|MenuSuite|Page|Query) (\\d+) ([^\\r\\n]+)",returnBegin:!0,contains:[e.TITLE_MODE,s]};return{name:"C/AL",case_insensitive:!0,keywords:{keyword:o,literal:a},illegal:/\/\*/,contains:[n,r,i,l,e.NUMBER_MODE,d,s]}}var c=E;const f=g(c),T=u({__proto__:null,default:f},[c]);export{T as c};
