import{g as o}from"./index-CTjT7uj6.js";function c(t,n){for(var s=0;s<n.length;s++){const e=n[s];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const a=Object.getOwnPropertyDescriptor(e,r);a&&Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}function l(t){const n=["add","and","cmp","cmpg","cmpl","const","div","double","float","goto","if","int","long","move","mul","neg","new","nop","not","or","rem","return","shl","shr","sput","sub","throw","ushr","xor"],s=["aget","aput","array","check","execute","fill","filled","goto/16","goto/32","iget","instance","invoke","iput","monitor","packed","sget","sparse"],e=["transient","constructor","abstract","final","synthetic","public","private","protected","static","bridge","system"];return{name:"Smali",contains:[{className:"string",begin:'"',end:'"',relevance:0},t.COMMENT("#","$",{relevance:0}),{className:"keyword",variants:[{begin:"\\s*\\.end\\s[a-zA-Z0-9]*"},{begin:"^[ ]*\\.[a-zA-Z]*",relevance:0},{begin:"\\s:[a-zA-Z_0-9]*",relevance:0},{begin:"\\s("+e.join("|")+")"}]},{className:"built_in",variants:[{begin:"\\s("+n.join("|")+")\\s"},{begin:"\\s("+n.join("|")+")((-|/)[a-zA-Z0-9]+)+\\s",relevance:10},{begin:"\\s("+s.join("|")+")((-|/)[a-zA-Z0-9]+)*\\s",relevance:10}]},{className:"class",begin:`L[^(;:
]*;`,relevance:0},{begin:"[vp][0-9]+"}]}}var i=l;const g=o(i),p=c({__proto__:null,default:g},[i]);export{p as s};
