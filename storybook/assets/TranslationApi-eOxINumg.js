var R=Object.defineProperty;var v=t=>{throw TypeError(t)};var h=(t,e,r)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var $=(t,e,r)=>h(t,typeof e!="symbol"?e+"":e,r),g=(t,e,r)=>e.has(t)||v("Cannot "+r);var c=(t,e,r)=>(g(t,e,"read from private field"),r?r.call(t):e.get(t)),l=(t,e,r)=>e.has(t)?v("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),u=(t,e,r,n)=>(g(t,e,"write to private field"),n?n.call(t,r):e.set(t,r),r);import{c as p}from"./ApiRef-BSBwTmJJ.js";const I=p({id:"core.error"});function k(t){const e=t;if(e.$$type!=="@backstage/TranslationResource")throw new Error(`Invalid translation resource, bad type '${e.$$type}'`);if(e.version!=="v1")throw new Error(`Invalid translation resource, bad version '${e.version}'`);return e}function b(t){return{$$type:"@backstage/TranslationResource",version:"v1",id:t.ref.id,resources:Object.entries(t.translations).map(([e,r])=>({language:e,loader:()=>r().then(n=>{const s=n.default;return{messages:(s==null?void 0:s.$$type)==="@backstage/TranslationMessages"?s.messages:s}})}))}}function w(t){const e=new Array;function r(n,s){for(const[d,f]of Object.entries(n))typeof f=="string"?e.push([s+d,f]):r(f,`${s}${d}.`)}return r(t,""),Object.fromEntries(e)}var a,o,i;class y{constructor(e){l(this,a);l(this,o);l(this,i);$(this,"$$type","@backstage/TranslationRef");$(this,"version","v1");u(this,a,e.id),u(this,o,w(e.messages))}get id(){return c(this,a)}get T(){throw new Error("Not implemented")}getDefaultMessages(){return c(this,o)}setDefaultResource(e){u(this,i,e)}getDefaultResource(){return c(this,i)}toString(){return`TranslationRef{id=${this.id}}`}}a=new WeakMap,o=new WeakMap,i=new WeakMap;function E(t){const e=new y(t);return t.translations&&e.setDefaultResource(b({ref:e,translations:t.translations})),e}function A(t){const e=t;if(e.$$type!=="@backstage/TranslationRef")throw new Error(`Invalid translation ref, bad type '${e.$$type}'`);if(e.version!=="v1")throw new Error(`Invalid translation ref, bad version '${e.version}'`);return e}const D=p({id:"core.translation"});export{A as a,k as b,E as c,I as e,D as t};
