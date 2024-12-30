/*! For license information please see 241931bf.7983e7a8.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[839511],{851975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(474848),i=n(28453);const o={id:"catalog-customization",title:"Catalog Customization",description:"How to add custom filters or interface elements to the Backstage software catalog"},s=void 0,l={id:"features/software-catalog/catalog-customization",title:"Catalog Customization",description:"How to add custom filters or interface elements to the Backstage software catalog",source:"@site/versioned_docs/version-stable/features/software-catalog/catalog-customization.md",sourceDirName:"features/software-catalog",slug:"/features/software-catalog/catalog-customization",permalink:"/docs/features/software-catalog/catalog-customization",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/features/software-catalog/catalog-customization.md",tags:[],version:"stable",frontMatter:{id:"catalog-customization",title:"Catalog Customization",description:"How to add custom filters or interface elements to the Backstage software catalog"},sidebar:"docs",previous:{title:"External integrations",permalink:"/docs/features/software-catalog/external-integrations"},next:{title:"API",permalink:"/docs/features/software-catalog/software-catalog-api"}},r={},c=[{value:"Pagination",id:"pagination",level:2},{value:"Initially Selected Filter",id:"initially-selected-filter",level:2},{value:"Initially Selected Kind",id:"initially-selected-kind",level:2},{value:"Owner Picker Mode",id:"owner-picker-mode",level:2},{value:"Table Options",id:"table-options",level:2},{value:"Customize Columns",id:"customize-columns",level:2},{value:"Customize Actions",id:"customize-actions",level:2},{value:"Customize Filters",id:"customize-filters",level:2},{value:"Default Filter Props",id:"default-filter-props",level:3},{value:"Removing Default Filters",id:"removing-default-filters",level:3},{value:"Custom Filters",id:"custom-filters",level:3},{value:"Advanced Customization",id:"advanced-customization",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["The Backstage software catalog comes with a default ",(0,a.jsx)(t.code,{children:"CatalogIndexPage"})," to filter and find catalog entities. This is already set up by default by ",(0,a.jsx)(t.code,{children:"@backstage/create-app"}),". If you want to change the default index page - to set the initially selected filter, adjust columns, add actions, or to add a custom filter to the catalog - the following sections will show you how."]}),"\n",(0,a.jsx)(t.h2,{id:"pagination",children:"Pagination"}),"\n",(0,a.jsxs)(t.p,{children:["Initial support for pagination of the ",(0,a.jsx)(t.code,{children:"CatalogIndexPage"})," was added in v1.21.0 of Backstage, so make sure you are on that version or newer to use this feature. To enable pagination you simply need to pass in the ",(0,a.jsx)(t.code,{children:"pagination"})," prop like this:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:'<Route path="/catalog" element={<CatalogIndexPage pagination />} />\n'})}),"\n",(0,a.jsx)(t.h2,{id:"initially-selected-filter",children:"Initially Selected Filter"}),"\n",(0,a.jsx)(t.p,{children:"By default the initially selected filter defaults to Owned. If you are still building up your catalog this may show an empty list to start. If you would prefer this to show All as the default, here's how you can make that change:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:'<Route\n  path="/catalog"\n  element={<CatalogIndexPage initiallySelectedFilter="all" />}\n/>\n'})}),"\n",(0,a.jsx)(t.p,{children:"Possible options are: owned, starred, or all"}),"\n",(0,a.jsx)(t.h2,{id:"initially-selected-kind",children:"Initially Selected Kind"}),"\n",(0,a.jsx)(t.p,{children:"By default the initially selected Kind when viewing the Catalog is Component, but you may have reasons that you want this to be different. Let's say at your Organization they would like it to always default to Domain, here's how you would do that:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:'<Route path="/catalog" element={<CatalogIndexPage initialKind="domain" />} />\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Possible options are all the ",(0,a.jsx)(t.a,{href:"/docs/features/software-catalog/system-model",children:"default Kinds"})," as well as any custom Kinds that you have added."]}),"\n",(0,a.jsx)(t.h2,{id:"owner-picker-mode",children:"Owner Picker Mode"}),"\n",(0,a.jsx)(t.p,{children:"The Owner filter by default will only contain a list of Users and/or Groups that actually own an entity in the Catalog, now you may have reason to change this. Here's how:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:'<Route path="/catalog" element={<CatalogIndexPage ownerPickerMode="all" />} />\n'})}),"\n",(0,a.jsx)(t.p,{children:"Possible options are: owners-only or all"}),"\n",(0,a.jsx)(t.h2,{id:"table-options",children:"Table Options"}),"\n",(0,a.jsxs)(t.p,{children:["The tables used within Backstage are built on top of ",(0,a.jsx)(t.a,{href:"https://material-table-core.github.io/",children:(0,a.jsx)(t.code,{children:"@material-table/core"})})," and the ",(0,a.jsx)(t.code,{children:"CatalogIndexPage"})," has a ",(0,a.jsx)(t.code,{children:"tableOptions"})," prop that allows you to customize the underlying table to a certain extent, but there are some hard coded Backstage settings that can't be changed. Here's an example of how to use this prop to disable the search filter field in the table's header:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:'<Route\n  path="/catalog"\n  element={<CatalogIndexPage tableOptions={{ search: false }} />}\n/>\n'})}),"\n",(0,a.jsxs)(t.p,{children:["There are many options that can be set using ",(0,a.jsx)(t.code,{children:"tableOptions"}),", the full list of settings can be found in the ",(0,a.jsxs)(t.a,{href:"https://github.com/material-table-core/core/blob/v3.1.0/types/index.d.ts#L323",children:[(0,a.jsx)(t.code,{children:"@material-table/core"})," ",(0,a.jsx)(t.code,{children:"Options"})," interface"]})," (this link goes to ",(0,a.jsx)(t.code,{children:"v3.1.0"})," of ",(0,a.jsx)(t.code,{children:"@material-table/core"})," as that is the version currently used by Backstage)."]}),"\n",(0,a.jsx)(t.h2,{id:"customize-columns",children:"Customize Columns"}),"\n",(0,a.jsxs)(t.p,{children:["By default the columns you see in the ",(0,a.jsx)(t.code,{children:"CatalogIndexPage"})," were selected to be a good starting point for most but there may be reasons that you would like to customize these with more or less columns. One primary use case for this customization is if you added a custom Kind. Support for this was added in v1.23.0 of Backstage, make sure you are on that version or newer to use this feature. Here's an example of how to make this customization:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:"import {\n  CatalogEntityPage,\n  CatalogIndexPage,\n  catalogPlugin,\n  {/* highlight-add-start */}\n  CatalogTable,\n  CatalogTableColumnsFunc,\n  {/* highlight-add-end */}\n} from '@backstage/plugin-catalog';\n\n{/* highlight-add-start */}\nconst myColumnsFunc: CatalogTableColumnsFunc = entityListContext => {\n  if (entityListContext.filters.kind?.value === 'MyKind') {\n    return [\n      CatalogTable.columns.createNameColumn(),\n      CatalogTable.columns.createOwnerColumn(),\n    ];\n  }\n\n  return CatalogTable.defaultColumnsFunc(entityListContext);\n};\n{/* highlight-add-end */}\n\n{/* highlight-remove-next-line */}\n<Route path=\"/catalog\" element={<CatalogIndexPage />} />\n{/* highlight-add-next-line */}\n<Route path=\"/catalog\" element={<CatalogIndexPage columns={myColumnsFunc} />} />\n"})}),"\n",(0,a.jsx)(t.admonition,{title:"Note",type:"note",children:(0,a.jsxs)(t.p,{children:["The above example has been simplified and you will most likely have more code then just this in your ",(0,a.jsx)(t.code,{children:"App.tsx"})," file."]})}),"\n",(0,a.jsx)(t.h2,{id:"customize-actions",children:"Customize Actions"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"CatalogIndexPage"})," comes with three default actions - view, edit, and star. You might want to add more."]}),"\n",(0,a.jsxs)(t.p,{children:["To do this, first you'll need to add ",(0,a.jsx)(t.code,{children:"@mui/utils"})," to your ",(0,a.jsx)(t.code,{children:"packages/app/package.json"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"yarn --cwd packages/app add @mui/utils\n"})}),"\n",(0,a.jsx)(t.p,{children:"Then you'll do the following:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:"import {\n  AlertDisplay,\n  OAuthRequestDialog,\n  SignInPage,\n  {/* highlight-add-next-line */}\n  TableProps,\n} from '@backstage/core-components';\n\nimport {\n  CatalogEntityPage,\n  CatalogIndexPage,\n  {/* highlight-add-next-line */}\n  CatalogTableRow,\n  catalogPlugin,\n} from '@backstage/plugin-catalog';\n\n{/* highlight-add-start */}\nimport { Typography } from '@material-ui/core';\nimport OpenInNew from '@material-ui/icons/OpenInNew';\nimport { visuallyHidden } from '@mui/utils';\n{/* highlight-add-end */}\n\n{/* highlight-add-start */}\nconst customActions: TableProps<CatalogTableRow>['actions'] = [\n  ({ entity }) => {\n    const url = 'https://backstage.io/';\n    const title = `View - ${entity.metadata.name}`;\n\n    return {\n      icon: () => (\n        <>\n          <Typography style={visuallyHidden}>{title}</Typography>\n          <OpenInNew fontSize=\"small\" />\n        </>\n      ),\n      tooltip: title,\n      disabled: !url,\n      onClick: () => {\n        if (!url) return;\n        window.open(url, '_blank');\n      },\n    };\n  },\n];\n{/* highlight-add-end */}\n\n{/* highlight-remove-next-line */}\n<Route path=\"/catalog\" element={<CatalogIndexPage />} />\n{/* highlight-add-next-line */}\n<Route path=\"/catalog\" element={<CatalogIndexPage actions={customActions} />} />\n"})}),"\n",(0,a.jsx)(t.admonition,{title:"Note",type:"note",children:(0,a.jsxs)(t.p,{children:["The above example has been simplified and you will most likely have more code then just this in your ",(0,a.jsx)(t.code,{children:"App.tsx"})," file."]})}),"\n",(0,a.jsxs)(t.p,{children:["The above customization will override the existing actions. Currently the only way to keep them and add your own is to also include the existing actions in your array by copying them from the ",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/57397e7d6d2d725712c439f4ab93f2ac6aa27bf8/plugins/catalog/src/components/CatalogTable/CatalogTable.tsx#L113-L168",children:(0,a.jsx)(t.code,{children:"defaultActions"})}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"customize-filters",children:"Customize Filters"}),"\n",(0,a.jsx)(t.p,{children:"There are three options you have for filters: adjusting the existing filters with props, adding or removing the default filters, or creating a brand new custom filter. The following sections cover these cases"}),"\n",(0,a.jsx)(t.h3,{id:"default-filter-props",children:"Default Filter Props"}),"\n",(0,a.jsx)(t.p,{children:"There are a set of default filters that you can use, which surface all the props mentioned earlier in this document. Here's how they can be used:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:'import { DefaultFilters } from \'@backstage/plugin-catalog-react\';\n\n<Route\n  path="/catalog"\n  element={\n    <CatalogIndexPage\n      filters={\n        <>\n          <DefaultFilters\n            initialKind="Domain"\n            initiallySelectedFilter="all"\n            ownerPickerMode="all"\n          />\n        </>\n      }\n    />\n  }\n/>;\n'})}),"\n",(0,a.jsx)(t.h3,{id:"removing-default-filters",children:"Removing Default Filters"}),"\n",(0,a.jsx)(t.p,{children:"You may have reasons not use the Lifecycle, Tag, and Processing Status filters, here's an example of how you would remove them:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:"import {\n  EntityKindPicker,\n  EntityTypePicker,\n  UserListPicker,\n  EntityOwnerPicker,\n  EntityNamespacePicker,\n} from '@backstage/plugin-catalog-react';\n\n<Route\n  path=\"/catalog\"\n  element={\n    <CatalogIndexPage\n      filters={\n        <>\n          <EntityKindPicker />\n          <EntityTypePicker />\n          <UserListPicker />\n          <EntityOwnerPicker />\n          <EntityNamespacePicker />\n        </>\n      }\n    />\n  }\n/>;\n"})}),"\n",(0,a.jsx)(t.h3,{id:"custom-filters",children:"Custom Filters"}),"\n",(0,a.jsxs)(t.p,{children:["You can add custom filters. For example, suppose that I want to allow filtering by a custom annotation added to entities, ",(0,a.jsx)(t.code,{children:"company.com/security-tier"}),". Here is how we can build a filter to support that need."]}),"\n",(0,a.jsxs)(t.p,{children:["First we need to create a new filter that implements the ",(0,a.jsx)(t.code,{children:"EntityFilter"})," interface:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"import { EntityFilter } from '@backstage/plugin-catalog-react';\nimport { Entity } from '@backstage/catalog-model';\n\nclass EntitySecurityTierFilter implements EntityFilter {\n  constructor(readonly values: string[]) {}\n  filterEntity(entity: Entity): boolean {\n    const tier = entity.metadata.annotations?.['company.com/security-tier'];\n    return tier !== undefined && this.values.includes(tier);\n  }\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"EntityFilter"})," interface permits backend filters, which are passed along to the ",(0,a.jsx)(t.code,{children:"catalog-backend"})," - or frontend filters, which are applied after entities are loaded from the backend."]}),"\n",(0,a.jsx)(t.p,{children:"We'll use this filter to extend the default filters in a type-safe way. Let's create the custom filter shape extending the default somewhere alongside this filter:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"export type CustomFilters = DefaultEntityFilters & {\n  securityTiers?: EntitySecurityTierFilter;\n};\n"})}),"\n",(0,a.jsxs)(t.p,{children:["To control this filter, we can create a React component that shows checkboxes for the security tiers. This component will make use of the ",(0,a.jsx)(t.code,{children:"useEntityList"})," hook, which accepts this extended filter type as a ",(0,a.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/2/generics.html",children:"generic"})," parameter:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"export const EntitySecurityTierPicker = () => {\n  // The securityTiers key is recognized due to the CustomFilter generic\n  const {\n    filters: { securityTiers },\n    updateFilters,\n  } = useEntityList<CustomFilters>();\n\n  // Toggles the value, depending on whether it's already selected\n  function onChange(value: string) {\n    const newTiers = securityTiers?.values.includes(value)\n      ? securityTiers.values.filter(tier => tier !== value)\n      : [...(securityTiers?.values ?? []), value];\n    updateFilters({\n      securityTiers: newTiers.length\n        ? new EntitySecurityTierFilter(newTiers)\n        : undefined,\n    });\n  }\n\n  const tierOptions = ['1', '2', '3'];\n  return (\n    <FormControl component=\"fieldset\">\n      <Typography variant=\"button\">Security Tier</Typography>\n      <FormGroup>\n        {tierOptions.map(tier => (\n          <FormControlLabel\n            key={tier}\n            control={\n              <Checkbox\n                checked={securityTiers?.values.includes(tier)}\n                onChange={() => onChange(tier)}\n              />\n            }\n            label={`Tier ${tier}`}\n          />\n        ))}\n      </FormGroup>\n    </FormControl>\n  );\n};\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Now we can add the component to ",(0,a.jsx)(t.code,{children:"CatalogIndexPage"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:'{\n  /* highlight-add-start */\n}\nimport { DefaultFilters } from \'@backstage/plugin-catalog-react\';\n{\n  /* highlight-add-end */\n}\n\nconst routes = (\n  <FlatRoutes>\n    <Navigate key="/" to="catalog" />\n    {/* highlight-remove-next-line */}\n    <Route path="/catalog" element={<CatalogIndexPage />} />\n    {/* highlight-add-start */}\n    <Route\n      path="/catalog"\n      element={\n        <CatalogIndexPage\n          filters={\n            <>\n              <DefaultFilters />\n              <EntitySecurityTierPicker />\n            </>\n          }\n        />\n      }\n    />\n    {/* highlight-add-end */}\n    {/* ... */}\n  </FlatRoutes>\n);\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The same method can be used to customize the ",(0,a.jsx)(t.em,{children:"default"})," filters with a different interface - for such usage, the generic argument isn't needed since the filter shape remains the same as the default."]}),"\n",(0,a.jsx)(t.h2,{id:"advanced-customization",children:"Advanced Customization"}),"\n",(0,a.jsxs)(t.p,{children:["For those where none of the above fits their needs you can take the option of creating a fully custom ",(0,a.jsx)(t.code,{children:"CatalogIndexPage"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/components/catalog/CustomCatalogIndex.tsx"',children:"import {\n  PageWithHeader,\n  Content,\n  ContentHeader,\n  SupportButton,\n} from '@backstage/core-components';\nimport { useApi, configApiRef } from '@backstage/core-plugin-api';\nimport { CatalogTable } from '@backstage/plugin-catalog';\nimport {\n  EntityListProvider,\n  CatalogFilterLayout,\n  EntityKindPicker,\n  EntityLifecyclePicker,\n  EntityNamespacePicker,\n  EntityOwnerPicker,\n  EntityProcessingStatusPicker,\n  EntityTagPicker,\n  EntityTypePicker,\n  UserListPicker,\n} from '@backstage/plugin-catalog-react';\nimport React from 'react';\n\nexport const CustomCatalogPage = () => {\n  const orgName =\n    useApi(configApiRef).getOptionalString('organization.name') ?? 'Backstage';\n\n  return (\n    <PageWithHeader title={orgName} themeId=\"home\">\n      <Content>\n        <ContentHeader title=\"\">\n          <SupportButton>All your software catalog entities</SupportButton>\n        </ContentHeader>\n        <EntityListProvider pagination>\n          <CatalogFilterLayout>\n            <CatalogFilterLayout.Filters>\n              <EntityKindPicker />\n              <EntityTypePicker />\n              <UserListPicker />\n              <EntityOwnerPicker />\n              <EntityLifecyclePicker />\n              <EntityTagPicker />\n              <EntityProcessingStatusPicker />\n              <EntityNamespacePicker />\n            </CatalogFilterLayout.Filters>\n            <CatalogFilterLayout.Content>\n              <CatalogTable />\n            </CatalogFilterLayout.Content>\n          </CatalogFilterLayout>\n        </EntityListProvider>\n      </Content>\n    </PageWithHeader>\n  );\n};\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The above is a very basic version of a fully custom ",(0,a.jsx)(t.code,{children:"CatalogIndexPage"}),", you'll want to explore the various props to see what you can all do with them. This was built off the building blocks seen in the ",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/catalog/src/components/CatalogPage/DefaultCatalogPage.tsx",children:(0,a.jsx)(t.code,{children:"DefaultCatalogPage"})})]}),"\n",(0,a.jsx)(t.admonition,{title:"Note",type:"note",children:(0,a.jsxs)(t.p,{children:["The catalog index page is designed to have a minimal code footprint to support easy customization, but creating a replica does introduce a possibility of drifting out of date over time. Be sure to check the catalog ",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/catalog/CHANGELOG.md",children:"CHANGELOG"})," periodically."]})}),"\n",(0,a.jsxs)(t.p,{children:["To use this custom ",(0,a.jsx)(t.code,{children:"CatalogIndexPage"})," which we called ",(0,a.jsx)(t.code,{children:"CustomCatalogPage"}),", you'll need to make the following change:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:'const routes = (\n  <FlatRoutes>\n    <Navigate key="/" to="catalog" />\n    {/* highlight-remove-next-line */}\n    <Route path="/catalog" element={<CatalogIndexPage />} />\n    {/* highlight-add-start */}\n    <Route path="/catalog" element={<CatalogIndexPage />}>\n      <CustomCatalogPage />\n    </Route>\n    {/* highlight-add-end */}\n    {/* ... */}\n  </FlatRoutes>\n);\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},221020:(e,t,n)=>{var a=n(296540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var a,o={},c=null,d=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,a)&&!r.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:i,type:e,key:c,ref:d,props:o,_owner:l.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var a=n(296540);const i={},o=a.createContext(i);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);