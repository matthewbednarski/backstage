import{d as C}from"./ArrowForward-DsesPz8G.js";import{d as E}from"./Close-8Wi6YqR3.js";import{R as e,r}from"./index-CTjT7uj6.js";import{r as M}from"./plugin-Byk3m1UT.js";import{m as g}from"./makeStyles-DyV0dNcq.js";import{D as I,a as w,b as x,c as P}from"./DialogTitle-Cwc2DxOH.js";import{u as R,S as k}from"./SearchContext-BQYqBmky.js";import{d as T,u as N}from"./index-DNAWfEOe.js";import{u as _}from"./useTheme-DHQwi4PO.js";import{u as q}from"./Page-CsRAkKmT.js";import{B as A}from"./Box-CUgtRipO.js";import{SearchBar as F}from"./SearchBar-DcJCyRi5.js";import{I as $}from"./IconButton-DuROhx0p.js";import{S as h}from"./Grid-DRKqbyUB.js";import{B as f}from"./Button-BqJPQoqF.js";import{D}from"./Divider-CHL0fjlM.js";import{a as B}from"./SearchResult-CeyJFuAq.js";import{d as V}from"./ArrowBackIos-DzAP0pJI.js";import{d as W}from"./ArrowForwardIos-BTF3Cun1.js";import{u as J}from"./useRouteRef-D0BCYqYb.js";import{b as K}from"./ApiRef-BSBwTmJJ.js";import{a as X}from"./ConfigApi-DBUUc3nU.js";const j=g(t=>({root:{display:"flex",justifyContent:"space-between",gap:t.spacing(2),margin:t.spacing(2,0)}})),S=()=>{const{fetchNextPage:t,fetchPreviousPage:a}=R(),n=j();return!t&&!a?e.createElement(e.Fragment,null):e.createElement("nav",{"aria-label":"pagination navigation",className:n.root},e.createElement(f,{"aria-label":"previous page",disabled:!a,onClick:a,startIcon:e.createElement(V,null)},"Previous"),e.createElement(f,{"aria-label":"next page",disabled:!t,onClick:t,endIcon:e.createElement(W,null)},"Next"))};S.__docgenInfo={description:"@public",methods:[],displayName:"SearchResultPager"};const b=g(t=>({dialogTitle:{gap:t.spacing(1),display:"grid",alignItems:"center",gridTemplateColumns:"1fr auto","&> button":{marginTop:t.spacing(1)}},input:{flex:1},button:{"&:hover":{background:"none"}},paperFullWidth:{height:"calc(100% - 128px)"},dialogActionsContainer:{padding:t.spacing(1,3)},viewResultsLink:{verticalAlign:"0.5em"}})),y=({toggleModal:t,resultItemComponents:a})=>{const n=b(),l=T(),{transitions:d}=_(),{focusContent:s}=q(),i=J(M)(),u=r.useRef(null);r.useEffect(()=>{var o;(o=u==null?void 0:u.current)==null||o.focus()});const c=r.useCallback(()=>{setTimeout(s,d.duration.leavingScreen)},[s,d]),m=r.useCallback(()=>{var p;const o=((p=u.current)==null?void 0:p.value)??"";l(`${i}?query=${o}`),c()},[l,c,i]);return e.createElement(e.Fragment,null,e.createElement(w,null,e.createElement(A,{className:n.dialogTitle},e.createElement(F,{className:n.input,inputProps:{ref:u},onSubmit:m}),e.createElement($,{"aria-label":"close",onClick:t},e.createElement(E,null)))),e.createElement(x,null,e.createElement(h,{container:!0,direction:"row-reverse",justifyContent:"flex-start",alignItems:"center"},e.createElement(h,{item:!0},e.createElement(f,{className:n.button,color:"primary",endIcon:e.createElement(C,null),onClick:m,disableRipple:!0},"View Full Results"))),e.createElement(D,null),e.createElement(B,{onClick:c,onKeyDown:c},a)),e.createElement(P,{className:n.dialogActionsContainer},e.createElement(h,{container:!0,direction:"row"},e.createElement(h,{item:!0,xs:12},e.createElement(S,null)))))},L=t=>{const{open:a=!0,hidden:n,toggleModal:l,children:d,resultItemComponents:s}=t,i=b();return e.createElement(I,{classes:{paperFullWidth:i.paperFullWidth},onClose:l,"aria-label":"Search Modal","aria-modal":"true",fullWidth:!0,maxWidth:"lg",open:a,hidden:n},a&&e.createElement(k,{inheritParentContextIfAvailable:!0},(d&&d({toggleModal:l,resultItemComponents:s||[]}))??e.createElement(y,{toggleModal:l,resultItemComponents:s})))};y.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{toggleModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"A function that should be invoked when navigating away from the modal."},resultItemComponents:{required:!1,tsType:{name:"union",raw:`| ReactNode
| ((resultSet: SearchResultSet) => JSX.Element)`,elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Ability to provide custom components to render the result items"}}};L.__docgenInfo={description:"@public",methods:[],displayName:"SearchModal",props:{open:{required:!1,tsType:{name:"boolean"},description:"If true, it renders the modal."},hidden:{required:!1,tsType:{name:"boolean"},description:"This is supposed to be used together with the open prop.\nIf `hidden` is true, it hides the modal.\nIf `open` is false, the value of `hidden` has no effect on the modal.\nUse `open` for controlling whether the modal should be rendered or not."},toggleModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`a function invoked when a search item is pressed or when the dialog
should be closed.`},children:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: SearchModalChildrenProps) => JSX.Element",signature:{arguments:[{type:{name:"SearchModalChildrenProps"},name:"props"}],return:{name:"JSX.Element"}}},description:`A function that returns custom content to render in the search modal in
place of the default.`},resultItemComponents:{required:!1,tsType:{name:"SearchModalChildrenProps['resultItemComponents']",raw:"SearchModalChildrenProps['resultItemComponents']"},description:"Optional ability to pass in result item component renderers."}}};function O(){var t=r.useRef(!0);return t.current?(t.current=!1,!0):t.current}var U=function(t,a){var n=O();r.useEffect(function(){if(!n)return t()},a)};const v=K("search-modal-context"),G=t=>{const a=z(t.showInitially),n=X({1:a});return e.createElement(v.Provider,{value:n},t.children)};function z(t=!1){const[a,n]=r.useState({hidden:!t,open:t}),l=r.useCallback(()=>n(o=>({open:!0,hidden:!o.hidden})),[]),d=r.useCallback(o=>n(p=>({open:p.open||o,hidden:!o})),[]),s=r.useContext(v),i=s==null?void 0:s.atVersion(1),u=!!(i!=null&&i.state),c=N(),m=`${c.pathname}${c.search}${c.hash}`;return U(()=>{n(o=>({open:o.open,hidden:!0}))},[m]),u?i:{state:a,toggleModal:l,setOpen:d}}G.__docgenInfo={description:`A context provider responsible for storing and managing state related to the
search modal.

@remarks
If you need to control visibility of the search toggle outside of the modal
itself, you can optionally place this higher up in the react tree where your
custom code and the search modal share the same context.

@example
\`\`\`tsx
import {
  SearchModalProvider,
  SidebarSearchModal,
} from '@backstage/plugin-search';

// ...

<SearchModalProvider>
  <KeyboardShortcutSearchToggler />
  <SidebarSearchModal>
    {({ toggleModal }) => <SearchModal toggleModal={toggleModal} />}
  </SidebarSearchModal>
</SearchModalProvider>
\`\`\`

@public`,methods:[],displayName:"SearchModalProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:`Children which should have access to the SearchModal context and the
associated useSearchModal() hook.`},showInitially:{required:!1,tsType:{name:"boolean"},description:"Pass true if the modal should be rendered initially."}}};export{L as S,S as a,G as b,z as u};
