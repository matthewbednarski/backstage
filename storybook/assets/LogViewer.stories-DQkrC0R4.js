const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./RealLogViewer-B5ITVzR1.js","./useCopyToClipboard--quXt9ov.js","./interopRequireDefault-Y9pwbXtE.js","./createSvgIcon-yIvaDIOA.js","./index-CTjT7uj6.js","./capitalize-DKydST9S.js","./defaultTheme-BLQVRFyP.js","./withStyles-K20mGrhL.js","./hoist-non-react-statics.cjs-yZcCaz5O.js","./useControlled-CogIeAPD.js","./index-QA7F3UF1.js","./createSvgIcon-DMq0di89.js","./isMuiElement-Cb6QZSLO.js","./unstable_useId-B3Hiq1YI.js","./useMountedState-DkESzBh4.js","./index-Cqve-NHl.js","./FilterList-D7DfoZst.js","./startCase-BoCYGAPE.js","./_arrayReduce-B24CUDp3.js","./toString-C6iK1gA3.js","./upperFirst-C77TYvPJ.js","./_baseSlice-z0Zd1-Ev.js","./_hasUnicode-B1tElml4.js","./Link-bsB8Po3b.js","./lodash-CoGan1YB.js","./index-DNAWfEOe.js","./ApiRef-BSBwTmJJ.js","./makeStyles-DyV0dNcq.js","./useAnalytics-DTrkS1Gy.js","./ConfigApi-DBUUc3nU.js","./Typography-Drxa_JDy.js","./ChevronRight-CBJCPALX.js","./IconButton-DuROhx0p.js","./ButtonBase-CgEmjkk8.js","./TransitionGroupContext-BtzQ-Cv7.js","./TextField-DphlYY4P.js","./FormLabel-CKsZGm0z.js","./formControlState-ByiNFc8I.js","./useFormControl-F4cJWIkJ.js","./InputLabel-B_it_ep8.js","./Select-amRMFpvY.js","./react-is.production.min-D0tnNtx9.js","./useTheme-DHQwi4PO.js","./Popover-FpBL0i50.js","./Modal-BhcLMLNB.js","./classCallCheck-BNzALLS0.js","./Portal-DHXjgkAG.js","./Paper-DKlVK5mw.js","./Grow-C52yxNn8.js","./utils-DQjp17aO.js","./List-CWUfEUrU.js","./ListContext-DydK1sOh.js","./TranslationApi-eOxINumg.js","./Box-CUgtRipO.js","./typography-CCicI0oZ.js"])))=>i.map(i=>d[i]);
import{r as s,R as t}from"./index-CTjT7uj6.js";import{_ as n}from"./iframe-DbvFFfrl.js";import{b as l}from"./index-DNAWfEOe.js";import{w as c}from"./appWrappers-zuJY6Z2z.js";import"../sb-preview/runtime.js";import"./ApiRef-BSBwTmJJ.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-yIvaDIOA.js";import"./capitalize-DKydST9S.js";import"./defaultTheme-BLQVRFyP.js";import"./withStyles-K20mGrhL.js";import"./hoist-non-react-statics.cjs-yZcCaz5O.js";import"./useControlled-CogIeAPD.js";import"./index-QA7F3UF1.js";import"./createSvgIcon-DMq0di89.js";import"./isMuiElement-Cb6QZSLO.js";import"./unstable_useId-B3Hiq1YI.js";import"./MockTranslationApi-WfPveaUo.js";import"./index-CFaqwFgm.js";import"./classCallCheck-BNzALLS0.js";import"./inherits-BlLXsrOw.js";import"./toArray-Bh10GYTQ.js";import"./TranslationApi-eOxINumg.js";import"./ConfigApi-DBUUc3nU.js";import"./useAnalytics-DTrkS1Gy.js";import"./WebStorage-D5Fgivzj.js";import"./useAsync-CXA3qup_.js";import"./useMountedState-DkESzBh4.js";import"./componentData-CM4hSmEF.js";import"./mapValues-r4uG88u0.js";import"./toString-C6iK1gA3.js";import"./ApiProvider-CuNQiN7Z.js";import"./index-BRV0Se7Z.js";import"./CssBaseline-gcFoYqiq.js";import"./ThemeProvider-CHb3fgCH.js";import"./jsx-runtime-Cw0GR0a5.js";import"./palettes-B20oCNII.js";const d=s.lazy(()=>n(()=>import("./RealLogViewer-B5ITVzR1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54]),import.meta.url).then(e=>({default:e.RealLogViewer})));function o(e){const{Progress:p}=l().getComponents();return t.createElement(s.Suspense,{fallback:t.createElement(p,null)},t.createElement(d,{...e}))}o.__docgenInfo={description:`A component that displays logs in a scrollable text area.

@remarks
The LogViewer has support for search and filtering, as well as displaying
text content with ANSI color escape codes.

Since the LogViewer uses windowing to avoid rendering all contents at once, the
log is sized automatically to fill the available vertical space. This means
it may often be needed to wrap the LogViewer in a container that provides it
with a fixed amount of space.

@public`,methods:[],displayName:"LogViewer",props:{text:{required:!0,tsType:{name:"string"},description:`The text of the logs to display.

The LogViewer component is optimized for appending content at the end of the text.`},classes:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  root?: string;
}`,signature:{properties:[{key:"root",value:{name:"string",required:!1}}]}},description:"Styling overrides for classes within the LogViewer component."}}};const X={title:"Data Display/LogViewer",component:o,decorators:[e=>c(t.createElement(e,null))]},u=`Starting up task with 3 steps
Beginning step Fetch Skeleton + Template
\x1B[32minfo\x1B[39m: Fetching template content from remote URL: https://github.com/backstage/software-templates/tree/main/scaffolder-templates/react-ssr-template/skeleton {"timestamp":"2021-12-03T15:47:11.625Z"}
\x1B[32minfo\x1B[39m: Listing files and directories in template {"timestamp":"2021-12-03T15:47:12.797Z"}
\x1B[32minfo\x1B[39m: Processing 33 template files/directories with input values {"component_id":"srnthsrthntrhsn","description":"rnthsrtnhssrthnrsthn","destination":{"host":"github.com","owner":"rtshnsrtmhrstmh","repo":"srtmhsrtmhrsthms"},"owner":"rstnhrstnhsrthn","timestamp":"2021-12-03T15:47:12.801Z"}
\x1B[32minfo\x1B[39m: Writing file .editorconfig to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.816Z"}
\x1B[32minfo\x1B[39m: Writing file .eslintignore to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.818Z"}
\x1B[32minfo\x1B[39m: Writing file .eslintrc.js to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.820Z"}
\x1B[32minfo\x1B[39m: Writing directory .github/ to template output path. {"timestamp":"2021-12-03T15:47:12.823Z"}
\x1B[32minfo\x1B[39m: Writing file .gitignore to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.824Z"}
\x1B[32minfo\x1B[39m: Writing file README.md to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.827Z"}
\x1B[32minfo\x1B[39m: Writing file babel.config.js to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.829Z"}
\x1B[32minfo\x1B[39m: Writing file catalog-info.yaml to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.831Z"}
\x1B[32minfo\x1B[39m: Writing directory docs/ to template output path. {"timestamp":"2021-12-03T15:47:12.834Z"}
\x1B[32minfo\x1B[39m: Writing file jest.config.js to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.836Z"}
\x1B[32minfo\x1B[39m: Writing file mkdocs.yml to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.838Z"}
\x1B[32minfo\x1B[39m: Writing file next-env.d.ts to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.841Z"}
\x1B[32minfo\x1B[39m: Writing file next.config.js to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.844Z"}
\x1B[32minfo\x1B[39m: Writing file package.json to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.845Z"}
\x1B[32minfo\x1B[39m: Writing file prettier.config.js to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.848Z"}
\x1B[32minfo\x1B[39m: Writing directory public/ to template output path. {"timestamp":"2021-12-03T15:47:12.849Z"}
\x1B[32minfo\x1B[39m: Writing directory src/ to template output path. {"timestamp":"2021-12-03T15:47:12.850Z"}
\x1B[32minfo\x1B[39m: Writing file tsconfig.json to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.851Z"}
\x1B[32minfo\x1B[39m: Writing directory .github/workflows/ to template output path. {"timestamp":"2021-12-03T15:47:12.853Z"}
\x1B[32minfo\x1B[39m: Writing file docs/index.md to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.854Z"}
\x1B[32minfo\x1B[39m: Writing directory public/static/ to template output path. {"timestamp":"2021-12-03T15:47:12.857Z"}
\x1B[32minfo\x1B[39m: Writing directory src/__tests__/ to template output path. {"timestamp":"2021-12-03T15:47:12.858Z"}
\x1B[32minfo\x1B[39m: Writing directory src/components/ to template output path. {"timestamp":"2021-12-03T15:47:12.858Z"}
\x1B[32minfo\x1B[39m: Writing directory src/pages/ to template output path. {"timestamp":"2021-12-03T15:47:12.859Z"}
\x1B[32minfo\x1B[39m: Copying file/directory .github/workflows/build.yml without processing. {"timestamp":"2021-12-03T15:47:12.859Z"}
\x1B[32minfo\x1B[39m: Writing file .github/workflows/build.yml to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.860Z"}
\x1B[32minfo\x1B[39m: Writing file public/static/fonts.css to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.861Z"}
\x1B[32minfo\x1B[39m: Writing file src/components/Header.tsx to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.863Z"}
\x1B[32minfo\x1B[39m: Writing file src/__tests__/index.test.tsx to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.865Z"}
\x1B[32minfo\x1B[39m: Writing file src/pages/_app.tsx to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.868Z"}
\x1B[32minfo\x1B[39m: Writing file src/pages/_document.tsx to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.871Z"}
\x1B[32minfo\x1B[39m: Writing directory src/pages/api/ to template output path. {"timestamp":"2021-12-03T15:47:12.873Z"}
\x1B[32minfo\x1B[39m: Writing file src/pages/index.tsx to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.874Z"}
\x1B[32minfo\x1B[39m: Writing file src/pages/api/ping.ts to template output path with mode 33188. {"timestamp":"2021-12-03T15:47:12.877Z"}
\x1B[32minfo\x1B[39m: Template result written to /var/folders/k6/9s7hd6w17115xlgwnsp0wsbr0000gn/T/5c9f8584-fded-4741-b6ef-46d94ff2cbdb {"timestamp":"2021-12-03T15:47:12.878Z"}
Finished step Fetch Skeleton + Template
Beginning step Publish
HttpError: Not Found
    at /Users/patriko/dev/backstage/node_modules/@octokit/request/dist-node/index.js:86:21
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (internal/process/task_queues.js:95:5)
    at async Object.handler (webpack-internal:///../../plugins/scaffolder-backend/src/scaffolder/actions/builtin/publish/github.ts:156:20)
    at async HandlebarsWorkflowRunner.execute (webpack-internal:///../../plugins/scaffolder-backend/src/scaffolder/tasks/HandlebarsWorkflowRunner.ts:254:11)
    at async TaskWorker.runOneTask (webpack-internal:///../../plugins/scaffolder-backend/src/scaffolder/tasks/TaskWorker.ts:110:13)
    at async eval (webpack-internal:///../../plugins/scaffolder-backend/src/scaffolder/tasks/TaskWorker.ts:100:9)
Run completed with status: failed`,i=()=>t.createElement("div",{style:{height:240}},t.createElement(o,{text:u}));i.__docgenInfo={description:"",methods:[],displayName:"ExampleLogViewer"};var m,a,r;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`() => <div style={{
  height: 240
}}>
    <LogViewer text={exampleLog} />
  </div>`,...(r=(a=i.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const Y=["ExampleLogViewer"];export{i as ExampleLogViewer,Y as __namedExportsOrder,X as default};
