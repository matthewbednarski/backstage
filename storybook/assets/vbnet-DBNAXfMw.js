import{g as p}from"./index-CTjT7uj6.js";function y(e,i){for(var t=0;t<i.length;t++){const n=i[t];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in e)){const r=Object.getOwnPropertyDescriptor(n,s);r&&Object.defineProperty(e,s,r.get?r:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function d(e){return e?typeof e=="string"?e:e.source:null}function o(...e){return e.map(t=>d(t)).join("")}function a(...e){return"("+e.map(t=>d(t)).join("|")+")"}function v(e){const i={className:"string",begin:/"(""|[^/n])"C\b/},t={className:"string",begin:/"/,end:/"/,illegal:/\n/,contains:[{begin:/""/}]},n=/\d{1,2}\/\d{1,2}\/\d{4}/,s=/\d{4}-\d{1,2}-\d{1,2}/,r=/(\d|1[012])(:\d+){0,2} *(AM|PM)/,l=/\d{1,2}(:\d{1,2}){1,2}/,u={className:"literal",variants:[{begin:o(/# */,a(s,n),/ *#/)},{begin:o(/# */,l,/ *#/)},{begin:o(/# */,r,/ *#/)},{begin:o(/# */,a(s,n),/ +/,a(r,l),/ *#/)}]},g={className:"number",relevance:0,variants:[{begin:/\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/},{begin:/\b\d[\d_]*((U?[SIL])|[%&])?/},{begin:/&H[\dA-F_]+((U?[SIL])|[%&])?/},{begin:/&O[0-7_]+((U?[SIL])|[%&])?/},{begin:/&B[01_]+((U?[SIL])|[%&])?/}]},m={className:"label",begin:/^\w+:/},f=e.COMMENT(/'''/,/$/,{contains:[{className:"doctag",begin:/<\/?/,end:/>/}]}),c=e.COMMENT(null,/$/,{variants:[{begin:/'/},{begin:/([\t ]|^)REM(?=\s)/}]});return{name:"Visual Basic .NET",aliases:["vb"],case_insensitive:!0,classNameAliases:{label:"symbol"},keywords:{keyword:"addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",built_in:"addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",type:"boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",literal:"true false nothing"},illegal:"//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",contains:[i,t,u,g,m,f,c,{className:"meta",begin:/[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,end:/$/,keywords:{"meta-keyword":"const disable else elseif enable end externalsource if region then"},contains:[c]}]}}var b=v;const h=p(b),E=y({__proto__:null,default:h},[b]);export{E as v};
