import{g as c}from"./index-CTjT7uj6.js";function l(e,a){for(var n=0;n<a.length;n++){const t=a[n];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const o=Object.getOwnPropertyDescriptor(t,r);o&&Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function d(e){const a={$pattern:/\.?\w+/,keyword:"abstract add and array as asc aspect assembly async begin break block by case class concat const copy constructor continue create default delegate desc distinct div do downto dynamic each else empty end ensure enum equals event except exit extension external false final finalize finalizer finally flags for forward from function future global group has if implementation implements implies in index inherited inline interface into invariants is iterator join locked locking loop matching method mod module namespace nested new nil not notify nullable of old on operator or order out override parallel params partial pinned private procedure property protected public queryable raise read readonly record reintroduce remove repeat require result reverse sealed select self sequence set shl shr skip static step soft take then to true try tuple type union unit unsafe until uses using var virtual raises volatile where while with write xor yield await mapped deprecated stdcall cdecl pascal register safecall overload library platform reference packed strict published autoreleasepool selector strong weak unretained"},n=e.COMMENT(/\{/,/\}/,{relevance:0}),t=e.COMMENT("\\(\\*","\\*\\)",{relevance:10}),r={className:"string",begin:"'",end:"'",contains:[{begin:"''"}]},o={className:"string",begin:"(#\\d+)+"},s={className:"function",beginKeywords:"function constructor destructor procedure method",end:"[:;]",keywords:"function constructor|10 destructor|10 procedure|10 method|10",contains:[e.TITLE_MODE,{className:"params",begin:"\\(",end:"\\)",keywords:a,contains:[r,o]},n,t]};return{name:"Oxygene",case_insensitive:!0,keywords:a,illegal:'("|\\$[G-Zg-z]|\\/\\*|</|=>|->)',contains:[n,t,e.C_LINE_COMMENT_MODE,r,o,e.NUMBER_MODE,s,{className:"class",begin:"=\\bclass\\b",end:"end;",keywords:a,contains:[r,o,n,t,e.C_LINE_COMMENT_MODE,s]}]}}var i=d;const u=c(i),f=l({__proto__:null,default:u},[i]);export{f as o};
