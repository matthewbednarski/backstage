import{_ as l,b}from"./defaultTheme-BLQVRFyP.js";import{r as c}from"./index-CTjT7uj6.js";import{c as x}from"./hoist-non-react-statics.cjs-yZcCaz5O.js";import{w as _}from"./capitalize-DKydST9S.js";var w=function(a){var e={};return a.shadows.forEach(function(o,r){e["elevation".concat(r)]={boxShadow:o}}),l({root:{backgroundColor:a.palette.background.paper,color:a.palette.text.primary,transition:a.transitions.create("box-shadow")},rounded:{borderRadius:a.shape.borderRadius},outlined:{border:"1px solid ".concat(a.palette.divider)}},e)},P=c.forwardRef(function(a,e){var o=a.classes,r=a.className,t=a.component,v=t===void 0?"div":t,s=a.square,u=s===void 0?!1:s,n=a.elevation,p=n===void 0?1:n,i=a.variant,m=i===void 0?"elevation":i,f=b(a,["classes","className","component","square","elevation","variant"]);return c.createElement(v,l({className:x(o.root,r,m==="outlined"?o.outlined:o["elevation".concat(p)],!u&&o.rounded),ref:e},f))});const h=_(w,{name:"MuiPaper"})(P);export{h as P};
