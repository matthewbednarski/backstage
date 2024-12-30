import{b as A,c as S,_ as C}from"./defaultTheme-BLQVRFyP.js";import{_ as q}from"./toArray-Bh10GYTQ.js";import{r as o}from"./index-CTjT7uj6.js";import"./react-is.production.min-D0tnNtx9.js";import{c as s}from"./hoist-non-react-statics.cjs-yZcCaz5O.js";import{w as N}from"./capitalize-DKydST9S.js";import{a as D}from"./useControlled-CogIeAPD.js";import{P as M}from"./Paper-DKlVK5mw.js";import{C as L}from"./Collapse-BrA4wGBI.js";import{B as H}from"./ButtonBase-CgEmjkk8.js";import{I as j}from"./IconButton-DuROhx0p.js";var k=o.createContext({}),G=function(e){var n={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],n),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],n)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}},O=o.forwardRef(function(e,n){var l=e.children,a=e.classes,c=e.className,u=e.defaultExpanded,$=u===void 0?!1:u,m=e.disabled,p=m===void 0?!1:m,h=e.expanded,f=e.onChange,t=e.square,b=t===void 0?!1:t,x=e.TransitionComponent,i=x===void 0?L:x,v=e.TransitionProps,y=A(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),_=D({controlled:h,default:$,name:"Accordion",state:"expanded"}),g=S(_,2),r=g[0],B=g[1],E=o.useCallback(function(w){B(!r),f&&f(w,!r)},[r,f,B]),I=o.Children.toArray(l),P=q(I),R=P[0],T=P.slice(1),V=o.useMemo(function(){return{expanded:r,disabled:p,toggle:E}},[r,p,E]);return o.createElement(M,C({className:s(a.root,c,r&&a.expanded,p&&a.disabled,!b&&a.rounded),ref:n,square:b},y),o.createElement(k.Provider,{value:V},R),o.createElement(i,C({in:r,timeout:"auto"},v),o.createElement("div",{"aria-labelledby":R.props.id,id:R.props["aria-controls"],role:"region"},T)))});const te=N(G,{name:"MuiAccordion"})(O);var W=function(e){var n={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:8*6,transition:e.transitions.create(["min-height","background-color"],n),padding:e.spacing(0,2),"&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused, &$focusVisible":{backgroundColor:e.palette.action.focus},"&$disabled":{opacity:e.palette.action.disabledOpacity}},expanded:{},focused:{},focusVisible:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],n),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",n),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}},z=o.forwardRef(function(e,n){var l=e.children,a=e.classes,c=e.className,u=e.expandIcon,$=e.focusVisibleClassName,m=e.IconButtonProps,p=m===void 0?{}:m,h=e.onClick,f=A(e,["children","classes","className","expandIcon","focusVisibleClassName","IconButtonProps","onClick"]),t=o.useContext(k),b=t.disabled,x=b===void 0?!1:b,i=t.expanded,v=t.toggle,y=function(g){v&&v(g),h&&h(g)};return o.createElement(H,C({focusRipple:!1,disableRipple:!0,disabled:x,component:"div","aria-expanded":i,className:s(a.root,c,x&&a.disabled,i&&a.expanded),focusVisibleClassName:s(a.focusVisible,a.focused,$),onClick:y,ref:n},f),o.createElement("div",{className:s(a.content,i&&a.expanded)},l),u&&o.createElement(j,C({className:s(a.expandIcon,i&&a.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},p),u))});const ie=N(W,{name:"MuiAccordionSummary"})(z);var F=function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}},J=o.forwardRef(function(e,n){var l=e.classes,a=e.className,c=A(e,["classes","className"]);return o.createElement("div",C({className:s(l.root,a),ref:n},c))});const se=N(F,{name:"MuiAccordionDetails"})(J);export{te as A,ie as a,se as b};
