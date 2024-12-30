import{a as pe,i as y,b as We,c as Ae,_ as C,j as ze}from"./defaultTheme-BLQVRFyP.js";import{r as t}from"./index-CTjT7uj6.js";import{r as He}from"./index-QA7F3UF1.js";import{c as D}from"./hoist-non-react-statics.cjs-yZcCaz5O.js";import{w as Ge,c as je}from"./capitalize-DKydST9S.js";import{a as Ue,b as qe,u as O,s as Je}from"./useControlled-CogIeAPD.js";import{u as Ke}from"./unstable_useId-B3Hiq1YI.js";import{u as Qe}from"./useTheme-DHQwi4PO.js";import{P as Xe}from"./Popper-DD91Ec3e.js";import{G as Ye}from"./Grow-C52yxNn8.js";function me(P){return Math.round(P*1e5)/1e5}function Ze(){return{'&[x-placement*="bottom"] $arrow':{top:0,left:0,marginTop:"-0.71em",marginLeft:4,marginRight:4,"&::before":{transformOrigin:"0 100%"}},'&[x-placement*="top"] $arrow':{bottom:0,left:0,marginBottom:"-0.71em",marginLeft:4,marginRight:4,"&::before":{transformOrigin:"100% 0"}},'&[x-placement*="right"] $arrow':{left:0,marginLeft:"-0.71em",height:"1em",width:"0.71em",marginTop:4,marginBottom:4,"&::before":{transformOrigin:"100% 100%"}},'&[x-placement*="left"] $arrow':{right:0,marginRight:"-0.71em",height:"1em",width:"0.71em",marginTop:4,marginBottom:4,"&::before":{transformOrigin:"0 0"}}}}var er=function(e){return{popper:{zIndex:e.zIndex.tooltip,pointerEvents:"none"},popperInteractive:{pointerEvents:"auto"},popperArrow:Ze(),tooltip:{backgroundColor:pe(e.palette.grey[700],.9),borderRadius:e.shape.borderRadius,color:e.palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(10),lineHeight:"".concat(me(14/10),"em"),maxWidth:300,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},tooltipArrow:{position:"relative",margin:"0"},arrow:{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:pe(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}},touch:{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:"".concat(me(16/14),"em"),fontWeight:e.typography.fontWeightRegular},tooltipPlacementLeft:y({transformOrigin:"right center",margin:"0 24px "},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementRight:y({transformOrigin:"left center",margin:"0 24px"},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementTop:y({transformOrigin:"center bottom",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"}),tooltipPlacementBottom:y({transformOrigin:"center top",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"})}},w=!1,F=null,rr=t.forwardRef(function(e,fe){var S=e.arrow,x=S===void 0?!1:S,a=e.children,s=e.classes,$=e.disableFocusListener,de=$===void 0?!1:$,E=e.disableHoverListener,N=E===void 0?!1:E,B=e.disableTouchListener,he=B===void 0?!1:B,M=e.enterDelay,I=M===void 0?100:M,k=e.enterNextDelay,V=k===void 0?0:k,W=e.enterTouchDelay,ve=W===void 0?700:W,ge=e.id,A=e.interactive,R=A===void 0?!1:A,z=e.leaveDelay,H=z===void 0?0:z,G=e.leaveTouchDelay,Te=G===void 0?1500:G,j=e.onClose,U=e.onOpen,be=e.open,q=e.placement,ye=q===void 0?"bottom":q,J=e.PopperComponent,we=J===void 0?Xe:J,K=e.PopperProps,m=e.title,Q=e.TransitionComponent,Pe=Q===void 0?Ye:Q,xe=e.TransitionProps,X=We(e,["arrow","children","classes","disableFocusListener","disableHoverListener","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","id","interactive","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"]),Y=Qe(),Z=t.useState(),c=Z[0],ee=Z[1],re=t.useState(null),L=re[0],Re=re[1],f=t.useRef(!1),d=t.useRef(),h=t.useRef(),u=t.useRef(),v=t.useRef(),Le=Ue({controlled:be,default:!1,name:"Tooltip",state:"open"}),oe=Ae(Le,2),_e=oe[0],te=oe[1],g=_e,Ce=Ke(ge);t.useEffect(function(){return function(){clearTimeout(d.current),clearTimeout(h.current),clearTimeout(u.current),clearTimeout(v.current)}},[]);var ne=function(o){clearTimeout(F),w=!0,te(!0),U&&U(o)},T=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return function(r){var i=a.props;r.type==="mouseover"&&i.onMouseOver&&o&&i.onMouseOver(r),!(f.current&&r.type!=="touchstart")&&(c&&c.removeAttribute("title"),clearTimeout(h.current),clearTimeout(u.current),I||w&&V?(r.persist(),h.current=setTimeout(function(){ne(r)},w?V:I)):ne(r))}},_=qe(),De=_.isFocusVisible,Oe=_.onBlurVisible,Fe=_.ref,ae=t.useState(!1),Se=ae[0],ie=ae[1],$e=function(){Se&&(ie(!1),Oe())},se=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return function(r){c||ee(r.currentTarget),De(r)&&(ie(!0),T()(r));var i=a.props;i.onFocus&&o&&i.onFocus(r)}},le=function(o){clearTimeout(F),F=setTimeout(function(){w=!1},800+H),te(!1),j&&j(o),clearTimeout(d.current),d.current=setTimeout(function(){f.current=!1},Y.transitions.duration.shortest)},b=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return function(r){var i=a.props;r.type==="blur"&&(i.onBlur&&o&&i.onBlur(r),$e()),r.type==="mouseleave"&&i.onMouseLeave&&r.currentTarget===c&&i.onMouseLeave(r),clearTimeout(h.current),clearTimeout(u.current),r.persist(),u.current=setTimeout(function(){le(r)},H)}},ue=function(o){f.current=!0;var r=a.props;r.onTouchStart&&r.onTouchStart(o)},Ee=function(o){ue(o),clearTimeout(u.current),clearTimeout(d.current),clearTimeout(v.current),o.persist(),v.current=setTimeout(function(){T()(o)},ve)},Ne=function(o){a.props.onTouchEnd&&a.props.onTouchEnd(o),clearTimeout(v.current),clearTimeout(u.current),o.persist(),u.current=setTimeout(function(){le(o)},Te)},Be=O(ee,fe),ce=O(Fe,Be),Me=t.useCallback(function(n){Je(ce,He.findDOMNode(n))},[ce]),Ie=O(a.ref,Me);m===""&&(g=!1);var ke=!g&&!N,l=C({"aria-describedby":g?Ce:null,title:ke&&typeof m=="string"?m:null},X,a.props,{className:D(X.className,a.props.className),onTouchStart:ue,ref:Ie}),p={};he||(l.onTouchStart=Ee,l.onTouchEnd=Ne),N||(l.onMouseOver=T(),l.onMouseLeave=b(),R&&(p.onMouseOver=T(!1),p.onMouseLeave=b(!1))),de||(l.onFocus=se(),l.onBlur=b(),R&&(p.onFocus=se(!1),p.onBlur=b(!1)));var Ve=t.useMemo(function(){return ze({popperOptions:{modifiers:{arrow:{enabled:!!L,element:L}}}},K)},[L,K]);return t.createElement(t.Fragment,null,t.cloneElement(a,l),t.createElement(we,C({className:D(s.popper,R&&s.popperInteractive,x&&s.popperArrow),placement:ye,anchorEl:c,open:c?g:!1,id:l["aria-describedby"],transition:!0},p,Ve),function(n){var o=n.placement,r=n.TransitionProps;return t.createElement(Pe,C({timeout:Y.transitions.duration.shorter},r,xe),t.createElement("div",{className:D(s.tooltip,s["tooltipPlacement".concat(je(o.split("-")[0]))],f.current&&s.touch,x&&s.tooltipArrow)},m,x?t.createElement("span",{className:s.arrow,ref:Re}):null))}))});const mr=Ge(er,{name:"MuiTooltip",flip:!1})(rr);export{mr as T};
