/*! For license information please see 1d4a0148.4d53e65a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[387144],{68691:(e,c,r)=>{r.r(c),r.d(c,{assets:()=>h,contentTitle:()=>t,default:()=>a,frontMatter:()=>d,metadata:()=>o,toc:()=>i});var n=r(474848),s=r(28453);const d={id:"plugin-techdocs",title:"@backstage/plugin-techdocs",description:"API Reference for @backstage/plugin-techdocs"},t=void 0,o={id:"reference/plugin-techdocs",title:"@backstage/plugin-techdocs",description:"API Reference for @backstage/plugin-techdocs",source:"@site/versioned_docs/version-stable/reference/plugin-techdocs.md",sourceDirName:"reference",slug:"/reference/plugin-techdocs",permalink:"/docs/reference/plugin-techdocs",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-techdocs.md",tags:[],version:"stable",frontMatter:{id:"plugin-techdocs",title:"@backstage/plugin-techdocs",description:"API Reference for @backstage/plugin-techdocs"}},h={},i=[{value:"Classes",id:"classes",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function l(e){const c={a:"a",code:"code",h2:"h2",p:"p",reader:"reader",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(c.p,{children:[(0,n.jsx)(c.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs",children:(0,n.jsx)(c.code,{children:"@backstage/plugin-techdocs"})})]}),"\n",(0,n.jsx)(c.p,{children:"The Backstage plugin that renders technical documentation for your components"}),"\n",(0,n.jsx)(c.h2,{id:"classes",children:"Classes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(c.table,{children:[(0,n.jsx)(c.thead,{children:(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.th,{children:"Class"}),(0,n.jsx)(c.th,{children:"Description"})]})}),(0,n.jsxs)(c.tbody,{children:[(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsclient",children:"TechDocsClient"})}),(0,n.jsxs)(c.td,{children:["API to talk to ",(0,n.jsx)(c.code,{children:"techdocs-backend"}),"."]})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsstorageclient",children:"TechDocsStorageClient"})}),(0,n.jsx)(c.td,{children:"API which talks to TechDocs storage to fetch files to render."})]})]})]}),"\n",(0,n.jsx)(c.h2,{id:"interfaces",children:"Interfaces"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(c.table,{children:[(0,n.jsx)(c.thead,{children:(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.th,{children:"Interface"}),(0,n.jsx)(c.th,{children:"Description"})]})}),(0,n.jsxs)(c.tbody,{children:[(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.panelconfig",children:"PanelConfig"})}),(0,n.jsx)(c.td,{children:"Type representing a TechDocsCustomHome panel."})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.tabconfig",children:"TabConfig"})}),(0,n.jsx)(c.td,{children:"Type representing a TechDocsCustomHome tab."})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsapi",children:"TechDocsApi"})}),(0,n.jsx)(c.td,{children:"API to talk to techdocs-backend."})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsstorageapi",children:"TechDocsStorageApi"})}),(0,n.jsx)(c.td,{children:"API which talks to TechDocs storage to fetch files to render."})]})]})]}),"\n",(0,n.jsx)(c.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(c.table,{children:[(0,n.jsx)(c.thead,{children:(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.th,{children:"Variable"}),(0,n.jsx)(c.th,{children:"Description"})]})}),(0,n.jsxs)(c.tbody,{children:[(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.defaulttechdocshome",children:"DefaultTechDocsHome"})}),(0,n.jsx)(c.td,{children:"Component which renders a default documentation landing page."})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.docscardgrid",children:"DocsCardGrid"})}),(0,n.jsx)(c.td,{children:"Component which accepts a list of entities and renders a item card for each entity"})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.docstable",children:"DocsTable"})}),(0,n.jsx)(c.td,{children:"Component which renders a table documents"})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.embeddeddocsrouter",children:"EmbeddedDocsRouter"})}),(0,n.jsx)(c.td,{children:"Responsible for registering route to view docs on Entity page"})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.entitylistdocsgrid",children:"EntityListDocsGrid"})}),(0,n.jsx)(c.td,{children:"Component responsible to get entities from entity list context and pass down to DocsCardGrid"})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.entitylistdocstable",children:"EntityListDocsTable"})}),(0,n.jsx)(c.td,{children:"Component which renders a table with entities from catalog."})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.entitytechdocscontent",children:"EntityTechdocsContent"})}),(0,n.jsx)(c.td,{children:"Routable extension used to render docs on Entity page"})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.istechdocsavailable",children:"isTechDocsAvailable"})}),(0,n.jsx)(c.td,{children:"Helper that takes in entity and returns true/false if TechDocs is available for the entity"})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.reader",children:"Reader"})}),(0,n.jsx)(c.td,{children:"Component responsible for rendering TechDocs documentation"})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.router",children:"Router"})}),(0,n.jsx)(c.td,{children:"Responsible for registering routes for TechDocs, TechDocs Homepage and separate TechDocs page"})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsapiref",children:"techdocsApiRef"})}),(0,n.jsxs)(c.td,{children:["Utility API reference for the ",(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsapi",children:"TechDocsApi"}),"."]})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocscustomhome",children:"TechDocsCustomHome"})}),(0,n.jsx)(c.td,{children:"Component which takes a custom tabs config object and renders a documentation landing page."})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsindexpage",children:"TechDocsIndexPage"})}),(0,n.jsx)(c.td,{children:"Responsible for rendering the provided router element"})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocspage",children:"TechdocsPage"})}),(0,n.jsx)(c.td,{children:"Routable extension used to render docs"})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocspagewrapper",children:"TechDocsPageWrapper"})}),(0,n.jsx)(c.td,{children:"Component wrapping a TechDocs page with Page and Header components"})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocspicker",children:"TechDocsPicker"})}),(0,n.jsx)(c.td,{children:"Component responsible for updating TechDocs filters"})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsplugin",children:"techdocsPlugin"})}),(0,n.jsx)(c.td,{children:"The Backstage plugin that renders technical documentation for your components"})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsreaderlayout",children:"TechDocsReaderLayout"})}),(0,n.jsx)(c.td,{children:"Default TechDocs reader page structure composed with a header and content"})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsreaderpage",children:"TechDocsReaderPage"})}),(0,n.jsx)(c.td,{children:"Component responsible for composing a TechDocs reader page experience"})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsreaderpagecontent",children:"TechDocsReaderPageContent"})}),(0,n.jsx)(c.td,{children:"Renders the reader page content"})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsreaderpageheader",children:"TechDocsReaderPageHeader"})}),(0,n.jsx)(c.td,{children:"Renders the reader page header. This component does not accept props, please use the Tech Docs add-ons to customize it"})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsreaderpagesubheader",children:"TechDocsReaderPageSubheader"})}),(0,n.jsx)(c.td,{children:"Renders the reader page subheader. Please use the Tech Docs add-ons to customize it"})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsreaderprovider",children:"TechDocsReaderProvider"})}),(0,n.jsx)(c.td,{children:"Provides shared building process state to the reader page components."})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocssearch",children:"TechDocsSearch"})}),(0,n.jsx)(c.td,{children:"Component used to render search bar on TechDocs page, scoped to"})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocssearchresultlistitem",children:"TechDocsSearchResultListItem"})}),(0,n.jsx)(c.td,{children:"React extension used to render results on Search page or modal"})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsstorageapiref",children:"techdocsStorageApiRef"})}),(0,n.jsxs)(c.td,{children:["Utility API reference for the ",(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsstorageapi",children:"TechDocsStorageApi"}),"."]})]})]})]}),"\n",(0,n.jsx)(c.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(c.table,{children:[(0,n.jsx)(c.thead,{children:(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.th,{children:"Type Alias"}),(0,n.jsx)(c.th,{children:"Description"})]})}),(0,n.jsxs)(c.tbody,{children:[(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.contentstatetypes",children:"ContentStateTypes"})}),(0,n.jsxs)(c.td,{children:["A state representation that is used to configure the UI of ",(0,n.jsx)(c.reader,{})]})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.defaulttechdocshomeprops",children:"DefaultTechDocsHomeProps"})}),(0,n.jsxs)(c.td,{children:["Props for ",(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.defaulttechdocshome",children:"DefaultTechDocsHome"})]})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.docscardgridprops",children:"DocsCardGridProps"})}),(0,n.jsxs)(c.td,{children:["Props for ",(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.docscardgrid",children:"DocsCardGrid"})]})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.docsgroupconfig",children:"DocsGroupConfig"})}),(0,n.jsxs)(c.td,{children:["Props for ",(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.entitylistdocsgrid",children:"EntityListDocsGrid"})]})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.docstableprops",children:"DocsTableProps"})}),(0,n.jsxs)(c.td,{children:["Props for ",(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.docstable",children:"DocsTable"}),"."]})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.docstablerow",children:"DocsTableRow"})}),(0,n.jsx)(c.td,{children:"Generic representing the metadata structure for a docs table row."})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.entitylistdocsgridpageprops",children:"EntityListDocsGridPageProps"})}),(0,n.jsxs)(c.td,{children:["Props for ",(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.entitylistdocsgrid",children:"EntityListDocsGrid"})]})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.entitylistdocstableprops",children:"EntityListDocsTableProps"})}),(0,n.jsxs)(c.td,{children:["Props for ",(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.entitylistdocstable",children:"EntityListDocsTable"}),"."]})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.paneltype",children:"PanelType"})}),(0,n.jsx)(c.td,{children:"Available panel types"})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.readerstate",children:"ReaderState"})}),(0,n.jsx)(c.td,{children:"shared reader state"})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.syncresult",children:"SyncResult"})}),(0,n.jsx)(c.td,{children:"The outcome of a docs sync operation."})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.tabsconfig",children:"TabsConfig"})}),(0,n.jsx)(c.td,{children:"Type representing a list of TechDocsCustomHome tabs."})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocscustomhomeprops",children:"TechDocsCustomHomeProps"})}),(0,n.jsxs)(c.td,{children:["Props for ",(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocscustomhome",children:"TechDocsCustomHome"})]})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsentitymetadata",children:"TechDocsEntityMetadata"})}),(0,n.jsx)(c.td,{})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsindexpageprops",children:"TechDocsIndexPageProps"})}),(0,n.jsxs)(c.td,{children:["Props for ",(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsindexpage",children:"TechDocsIndexPage"})]})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsmetadata",children:"TechDocsMetadata"})}),(0,n.jsx)(c.td,{})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocspagewrapperprops",children:"TechDocsPageWrapperProps"})}),(0,n.jsxs)(c.td,{children:["Props for ",(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocspagewrapper",children:"TechDocsPageWrapper"})]})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsreaderlayoutprops",children:"TechDocsReaderLayoutProps"})}),(0,n.jsxs)(c.td,{children:["Props for ",(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsreaderlayout",children:"TechDocsReaderLayout"})]})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsreaderpagecontentprops",children:"TechDocsReaderPageContentProps"})}),(0,n.jsxs)(c.td,{children:["Props for ",(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsreaderpagecontent",children:"TechDocsReaderPageContent"})]})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsreaderpageheaderprops",children:"TechDocsReaderPageHeaderProps"})}),(0,n.jsxs)(c.td,{children:["Props for ",(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsreaderpageheader",children:"TechDocsReaderPageHeader"})]})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsreaderpageprops",children:"TechDocsReaderPageProps"})}),(0,n.jsx)(c.td,{})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsreaderpagerenderfunction",children:"TechDocsReaderPageRenderFunction"})}),(0,n.jsxs)(c.td,{children:["Helper function that gives the children of ",(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsreaderpage",children:"TechDocsReaderPage"})," access to techdocs and entity metadata"]})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsreaderproviderprops",children:"TechDocsReaderProviderProps"})}),(0,n.jsxs)(c.td,{children:["Props for ",(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsreaderprovider",children:"TechDocsReaderProvider"})]})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsreaderproviderrenderfunction",children:"TechDocsReaderProviderRenderFunction"})}),(0,n.jsxs)(c.td,{children:["Render function for ",(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocsreaderprovider",children:"TechDocsReaderProvider"})]})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocssearchprops",children:"TechDocsSearchProps"})}),(0,n.jsxs)(c.td,{children:["Props for ",(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocssearch",children:"TechDocsSearch"})]})]}),(0,n.jsxs)(c.tr,{children:[(0,n.jsx)(c.td,{children:(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocssearchresultlistitemprops",children:"TechDocsSearchResultListItemProps"})}),(0,n.jsxs)(c.td,{children:["Props for ",(0,n.jsx)(c.a,{href:"/docs/reference/plugin-techdocs.techdocssearchresultlistitem",children:"TechDocsSearchResultListItem"}),"."]})]})]})]})]})}function a(e={}){const{wrapper:c}={...(0,s.R)(),...e.components};return c?(0,n.jsx)(c,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,c,r)=>{var n=r(296540),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function i(e,c,r){var n,d={},i=null,l=null;for(n in void 0!==r&&(i=""+r),void 0!==c.key&&(i=""+c.key),void 0!==c.ref&&(l=c.ref),c)t.call(c,n)&&!h.hasOwnProperty(n)&&(d[n]=c[n]);if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===d[n]&&(d[n]=c[n]);return{$$typeof:s,type:e,key:i,ref:l,props:d,_owner:o.current}}c.Fragment=d,c.jsx=i,c.jsxs=i},474848:(e,c,r)=>{e.exports=r(221020)},28453:(e,c,r)=>{r.d(c,{R:()=>t,x:()=>o});var n=r(296540);const s={},d=n.createContext(s);function t(e){const c=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function o(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(d.Provider,{value:c},e.children)}}}]);