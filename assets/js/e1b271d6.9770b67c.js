/*! For license information please see e1b271d6.9770b67c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[23191],{246003:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var t=i(474848),l=i(28453);const s={id:"ui-options-examples",title:"ui:options Examples",description:"The input props that can be specified under ui:options for different pickers"},r=void 0,o={id:"features/software-templates/ui-options-examples",title:"ui:options Examples",description:"The input props that can be specified under ui:options for different pickers",source:"@site/versioned_docs/version-stable/features/software-templates/ui-options-examples.md",sourceDirName:"features/software-templates",slug:"/features/software-templates/ui-options-examples",permalink:"/docs/features/software-templates/ui-options-examples",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/features/software-templates/ui-options-examples.md",tags:[],version:"stable",frontMatter:{id:"ui-options-examples",title:"ui:options Examples",description:"The input props that can be specified under ui:options for different pickers"}},d={},a=[{value:"EntityPicker",id:"entitypicker",level:2},{value:"<code>allowArbitraryValues</code>",id:"allowarbitraryvalues",level:3},{value:"<code>allowedKinds</code>",id:"allowedkinds",level:3},{value:"<code>catalogFilter</code>",id:"catalogfilter",level:3},{value:"<code>defaultKind</code>",id:"defaultkind",level:3},{value:"<code>defaultNamespace</code>",id:"defaultnamespace",level:3},{value:"MultiEntityPicker",id:"multientitypicker",level:2},{value:"<code>allowArbitraryValues</code>",id:"allowarbitraryvalues-1",level:3},{value:"<code>catalogFilter</code>",id:"catalogfilter-1",level:3},{value:"<code>defaultKind</code>",id:"defaultkind-1",level:3},{value:"<code>defaultNamespace</code>",id:"defaultnamespace-1",level:3},{value:"<code>OwnerPicker</code>",id:"ownerpicker",level:2},{value:"<code>allowArbitraryValues</code>",id:"allowarbitraryvalues-2",level:3},{value:"<code>allowedKinds</code>",id:"allowedkinds-1",level:3},{value:"<code>catalogFilter</code>",id:"catalogfilter-2",level:3},{value:"<code>defaultNamespace</code>",id:"defaultnamespace-2",level:3},{value:"RepoUrlPicker",id:"repourlpicker",level:2},{value:"<code>allowedHosts</code>",id:"allowedhosts",level:3},{value:"<code>allowedOrganizations</code>",id:"allowedorganizations",level:3},{value:"<code>allowedProjects</code>",id:"allowedprojects",level:3},{value:"<code>allowedRepos</code>",id:"allowedrepos",level:3},{value:"<code>allowedOwners</code>",id:"allowedowners",level:3},{value:"<code>requestUserCredentials</code>",id:"requestusercredentials",level:3},{value:"RepoBranchPicker",id:"repobranchpicker",level:2},{value:"<code>requestUserCredentials</code>",id:"requestusercredentials-1",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"entitypicker",children:"EntityPicker"}),"\n",(0,t.jsxs)(n.p,{children:["The input props that can be specified under ",(0,t.jsx)(n.code,{children:"ui:options"})," for the ",(0,t.jsx)(n.code,{children:"EntityPicker"})," field extension."]}),"\n",(0,t.jsx)(n.h3,{id:"allowarbitraryvalues",children:(0,t.jsx)(n.code,{children:"allowArbitraryValues"})}),"\n",(0,t.jsx)(n.p,{children:"Whether to allow arbitrary user input. Defaults to true."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"allowArbitraryValues"})," provides input validation when selecting an entity as the values you enter will correspond to a valid entity."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Adding a valid entity with ",(0,t.jsx)(n.code,{children:"allowArbitraryValues"})," as ",(0,t.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"entity:\n  title: Entity\n  type: string\n  description: Entity of the component\n  ui:field: EntityPicker\n  ui:options:\n    allowArbitraryValues: false\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Adding an arbitrary entity with ",(0,t.jsx)(n.code,{children:"allowArbitraryValues"})," as ",(0,t.jsx)(n.code,{children:"true"})," (default value)"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"entity:\n  title: Entity\n  type: string\n  description: Entity of the component\n  ui:field: EntityPicker\n  ui:options:\n    allowArbitraryValues: true\n"})}),"\n",(0,t.jsx)(n.h3,{id:"allowedkinds",children:(0,t.jsx)(n.code,{children:"allowedKinds"})}),"\n",(0,t.jsxs)(n.p,{children:["DEPRECATED: Use ",(0,t.jsx)(n.code,{children:"catalogFilter"})," instead."]}),"\n",(0,t.jsx)(n.h3,{id:"catalogfilter",children:(0,t.jsx)(n.code,{children:"catalogFilter"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"catalogFilter"})," supports filtering options by any field(s) of an entity."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Get all entities of kind ",(0,t.jsx)(n.code,{children:"Group"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"entity:\n  title: Entity\n  type: string\n  description: Entity of the component\n  ui:field: EntityPicker\n  ui:options:\n    catalogFilter:\n      - kind: Group\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Get entities of kind ",(0,t.jsx)(n.code,{children:"Group"})," and spec.type ",(0,t.jsx)(n.code,{children:"team"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"entity:\n  title: Entity\n  type: string\n  description: Entity of the component\n  ui:field: EntityPicker\n  ui:options:\n    catalogFilter:\n      - kind: Group\n        spec.type: team\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For the full details on the spec.* values see ",(0,t.jsx)(n.a,{href:"/docs/features/software-catalog/descriptor-format#kind-group",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"defaultkind",children:(0,t.jsx)(n.code,{children:"defaultKind"})}),"\n",(0,t.jsx)(n.p,{children:"The default entity kind."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"system:\n  title: System\n  type: string\n  description: System of the component\n  ui:field: EntityPicker\n  ui:options:\n    catalogFilter:\n      kind: System\n    defaultKind: System\n"})}),"\n",(0,t.jsx)(n.h3,{id:"defaultnamespace",children:(0,t.jsx)(n.code,{children:"defaultNamespace"})}),"\n",(0,t.jsxs)(n.p,{children:["The ID of a namespace that the entity belongs to. The default value is ",(0,t.jsx)(n.code,{children:"default"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Listing all entities in the ",(0,t.jsx)(n.code,{children:"default"})," namespace (default value)"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"entity:\n  title: Entity\n  type: string\n  description: Entity of the component\n  ui:field: EntityPicker\n  ui:options:\n    defaultNamespace: default\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Listing all entities in the ",(0,t.jsx)(n.code,{children:"payment"})," namespace"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"entity:\n  title: Entity\n  type: string\n  description: Entity of the component\n  ui:field: EntityPicker\n  ui:options:\n    defaultNamespace: payment\n"})}),"\n",(0,t.jsx)(n.h2,{id:"multientitypicker",children:"MultiEntityPicker"}),"\n",(0,t.jsxs)(n.p,{children:["The input props that can be specified under ",(0,t.jsx)(n.code,{children:"ui:options"})," for the ",(0,t.jsx)(n.code,{children:"MultiEntityPicker"})," field extension."]}),"\n",(0,t.jsx)(n.h3,{id:"allowarbitraryvalues-1",children:(0,t.jsx)(n.code,{children:"allowArbitraryValues"})}),"\n",(0,t.jsx)(n.p,{children:"Whether to allow arbitrary user input. Defaults to true."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"allowArbitraryValues"})," provides input validation when selecting an entity as the values you enter will correspond to a valid entity."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Adding a valid entity with ",(0,t.jsx)(n.code,{children:"allowArbitraryValues"})," as ",(0,t.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"entity:\n  title: Entities\n  type: array\n  description: Entities of the component\n  ui:field: MultiEntityPicker\n  ui:options:\n    allowArbitraryValues: false\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Adding an arbitrary entity with ",(0,t.jsx)(n.code,{children:"allowArbitraryValues"})," as ",(0,t.jsx)(n.code,{children:"true"})," (default value)"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"entity:\n  title: Entities\n  type: array\n  description: Entities of the component\n  ui:field: MultiEntityPicker\n  ui:options:\n    allowArbitraryValues: true\n"})}),"\n",(0,t.jsx)(n.h3,{id:"catalogfilter-1",children:(0,t.jsx)(n.code,{children:"catalogFilter"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"catalogFilter"})," supports filtering options by any field(s) of an entity."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Get all entities of kind ",(0,t.jsx)(n.code,{children:"Group"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"entity:\n  title: Entities\n  type: array\n  description: Entities of the component\n  ui:field: MultiEntityPicker\n  ui:options:\n    catalogFilter:\n      - kind: Group\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Get entities of kind ",(0,t.jsx)(n.code,{children:"Group"})," and spec.type ",(0,t.jsx)(n.code,{children:"team"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"entity:\n  title: Entities\n  type: array\n  description: Entities of the component\n  ui:field: MultiEntityPicker\n  ui:options:\n    catalogFilter:\n      - kind: Group\n        spec.type: team\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For the full details on the spec.* values see ",(0,t.jsx)(n.a,{href:"/docs/features/software-catalog/descriptor-format#kind-group",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"defaultkind-1",children:(0,t.jsx)(n.code,{children:"defaultKind"})}),"\n",(0,t.jsx)(n.p,{children:"The default entity kind."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"system:\n  title: System\n  type: array\n  description: Systems of the component\n  ui:field: MultiEntityPicker\n  ui:options:\n    catalogFilter:\n      kind: System\n    defaultKind: System\n"})}),"\n",(0,t.jsx)(n.h3,{id:"defaultnamespace-1",children:(0,t.jsx)(n.code,{children:"defaultNamespace"})}),"\n",(0,t.jsxs)(n.p,{children:["The ID of a namespace that the entity belongs to. The default value is ",(0,t.jsx)(n.code,{children:"default"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Listing all entities in the ",(0,t.jsx)(n.code,{children:"default"})," namespace (default value)"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"entity:\n  title: Entity\n  type: array\n  description: Entities of the component\n  ui:field: MultiEntityPicker\n  ui:options:\n    defaultNamespace: default\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Listing all entities in the ",(0,t.jsx)(n.code,{children:"payment"})," namespace"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"entity:\n  title: Entity\n  type: array\n  description: Entities of the component\n  ui:field: MultiEntityPicker\n  ui:options:\n    defaultNamespace: payment\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ownerpicker",children:(0,t.jsx)(n.code,{children:"OwnerPicker"})}),"\n",(0,t.jsxs)(n.p,{children:["The input props that can be specified under ",(0,t.jsx)(n.code,{children:"ui:options"})," for the ",(0,t.jsx)(n.code,{children:"OwnerPicker"})," field extension."]}),"\n",(0,t.jsx)(n.h3,{id:"allowarbitraryvalues-2",children:(0,t.jsx)(n.code,{children:"allowArbitraryValues"})}),"\n",(0,t.jsx)(n.p,{children:"Whether to allow arbitrary user input. Defaults to true."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"allowArbitraryValues"})," provides input validation when selecting an owner as the values you enter will correspond to a valid owner."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Adding a valid owner with ",(0,t.jsx)(n.code,{children:"allowArbitraryValues"})," as ",(0,t.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"owner:\n  title: Owner\n  type: string\n  description: Owner of the component\n  ui:field: OwnerPicker\n  ui:options:\n    allowArbitraryValues: false\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Adding an arbitrary owner with ",(0,t.jsx)(n.code,{children:"allowArbitraryValues"})," as ",(0,t.jsx)(n.code,{children:"true"})," (default value)"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"owner:\n  title: Owner\n  type: string\n  description: Owner of the component\n  ui:field: OwnerPicker\n  ui:options:\n    allowArbitraryValues: true\n"})}),"\n",(0,t.jsx)(n.h3,{id:"allowedkinds-1",children:(0,t.jsx)(n.code,{children:"allowedKinds"})}),"\n",(0,t.jsxs)(n.p,{children:["DEPRECATED: Use ",(0,t.jsx)(n.code,{children:"catalogFilter"})," instead."]}),"\n",(0,t.jsx)(n.h3,{id:"catalogfilter-2",children:(0,t.jsx)(n.code,{children:"catalogFilter"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"catalogFilter"})," supports filtering options by any field(s) of an entity."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Get all entities of kind ",(0,t.jsx)(n.code,{children:"Group"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"owner:\n  title: Owner\n  type: string\n  description: Owner of the component\n  ui:field: OwnerPicker\n  ui:options:\n    catalogFilter:\n      - kind: Group\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Get entities of kind ",(0,t.jsx)(n.code,{children:"Group"})," and spec.type ",(0,t.jsx)(n.code,{children:"team"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"owner:\n  title: Owner\n  type: string\n  description: Owner of the component\n  ui:field: OwnerPicker\n  ui:options:\n    catalogFilter:\n      - kind: Group\n        spec.type: team\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For the full details on the spec.* values see ",(0,t.jsx)(n.a,{href:"/docs/features/software-catalog/descriptor-format#kind-group",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"defaultnamespace-2",children:(0,t.jsx)(n.code,{children:"defaultNamespace"})}),"\n",(0,t.jsxs)(n.p,{children:["The ID of a namespace that the owner belongs to. The default value is ",(0,t.jsx)(n.code,{children:"default"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Listing owners in the ",(0,t.jsx)(n.code,{children:"default"})," namespace (default value)"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"owner:\n  title: Owner\n  type: string\n  description: Owner of the component\n  ui:field: OwnerPicker\n  ui:options:\n    catalogFilter:\n      - kind: Group\n    defaultNamespace: default\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Listing owners in the ",(0,t.jsx)(n.code,{children:"payment"})," namespace"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"owner:\n  title: Owner\n  type: string\n  description: Owner of the component\n  ui:field: OwnerPicker\n  ui:options:\n    catalogFilter:\n      - kind: Group\n    defaultNamespace: payment\n"})}),"\n",(0,t.jsx)(n.h2,{id:"repourlpicker",children:"RepoUrlPicker"}),"\n",(0,t.jsxs)(n.p,{children:["The input props that can be specified under ",(0,t.jsx)(n.code,{children:"ui:options"})," for the ",(0,t.jsx)(n.code,{children:"RepoUrlPicker"})," field extension."]}),"\n",(0,t.jsx)(n.h3,{id:"allowedhosts",children:(0,t.jsx)(n.code,{children:"allowedHosts"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"allowedHosts"})," part should be set to where you wish to enable this template\nto publish to. And it can be any host that is listed in your integrations'\nconfig in ",(0,t.jsx)(n.code,{children:"app-config.yaml"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Publish only to repositories from ",(0,t.jsx)(n.code,{children:"github.com"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"repoUrl:\n  title: Repository Location\n  type: string\n  ui:field: RepoUrlPicker\n  ui:options:\n    allowedHosts:\n      - github.com\n"})}),"\n",(0,t.jsx)(n.h3,{id:"allowedorganizations",children:(0,t.jsx)(n.code,{children:"allowedOrganizations"})}),"\n",(0,t.jsx)(n.p,{children:"List of allowed organizations in the given SCM platform. You can restrict the template to publish to a set of organizations."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Publish only to repositories from organization ",(0,t.jsx)(n.code,{children:"my_organization"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"repoUrl:\n  title: Repository Location\n  type: string\n  ui:field: RepoUrlPicker\n  ui:options:\n    allowedOrganizations:\n      - my_organization\n"})}),"\n",(0,t.jsx)(n.h3,{id:"allowedprojects",children:(0,t.jsx)(n.code,{children:"allowedProjects"})}),"\n",(0,t.jsx)(n.p,{children:"List of allowed projects in the given SCM platform. You can restrict the template to publish to a set of projects."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Publish only to repositories from project ",(0,t.jsx)(n.code,{children:"project_1"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"repoUrl:\n  title: Repository Location\n  type: string\n  ui:field: RepoUrlPicker\n  ui:options:\n    allowedProjects:\n      - project_1\n"})}),"\n",(0,t.jsx)(n.h3,{id:"allowedrepos",children:(0,t.jsx)(n.code,{children:"allowedRepos"})}),"\n",(0,t.jsx)(n.p,{children:"List of allowed repos in the given SCM platform. You can restrict the template to publish to a set of repository names."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Publish to only ",(0,t.jsx)(n.code,{children:"repo_1"})," and ",(0,t.jsx)(n.code,{children:"repo_2"})," repositories"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"repoUrl:\n  title: Repository Location\n  type: string\n  ui:field: RepoUrlPicker\n  ui:options:\n    allowedRepos:\n      - repo_1\n      - repo_2\n"})}),"\n",(0,t.jsx)(n.h3,{id:"allowedowners",children:(0,t.jsx)(n.code,{children:"allowedOwners"})}),"\n",(0,t.jsxs)(n.p,{children:["List of allowed owners in the given SCM platform. You can restrict the template to publish to repositories owned by specific users/groups by setting the ",(0,t.jsx)(n.code,{children:"allowedOwners"})," option."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Publish to only repositories from owner ",(0,t.jsx)(n.code,{children:"owner_1"})," and ",(0,t.jsx)(n.code,{children:"owner_2"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"repoUrl:\n  title: Repository Location\n  type: string\n  ui:field: RepoUrlPicker\n  ui:options:\n    allowedOwners:\n      - owner_1\n      - owner_2\n"})}),"\n",(0,t.jsx)(n.h3,{id:"requestusercredentials",children:(0,t.jsx)(n.code,{children:"requestUserCredentials"})}),"\n",(0,t.jsx)(n.p,{children:"If defined will request user credentials to auth against the given SCM platform."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"repoUrl:\n  title: Repository Location\n  type: string\n  ui:field: RepoUrlPicker\n  ui:options:\n    requestUserCredentials:\n      secretsKey: USER_OAUTH_TOKEN\n      additionalScopes:\n        github:\n          - workflow:write\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"secretsKey"})," is the key used within the template secrets context to store the credential and ",(0,t.jsx)(n.code,{children:"additionalScopes"})," is any additional permission scopes to request."]}),"\n",(0,t.jsxs)(n.p,{children:["The supported ",(0,t.jsx)(n.code,{children:"additionalScopes"})," values are ",(0,t.jsx)(n.code,{children:"gerrit"}),", ",(0,t.jsx)(n.code,{children:"github"}),", ",(0,t.jsx)(n.code,{children:"gitlab"}),", ",(0,t.jsx)(n.code,{children:"bitbucket"}),", and ",(0,t.jsx)(n.code,{children:"azure"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"repobranchpicker",children:"RepoBranchPicker"}),"\n",(0,t.jsxs)(n.p,{children:["The input props that can be specified under ",(0,t.jsx)(n.code,{children:"ui:options"})," for the ",(0,t.jsx)(n.code,{children:"RepoBranchPicker"})," field extension."]}),"\n",(0,t.jsx)(n.h3,{id:"requestusercredentials-1",children:(0,t.jsx)(n.code,{children:"requestUserCredentials"})}),"\n",(0,t.jsx)(n.p,{children:"If defined will request user credentials to auth against the given SCM platform."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"repoUrl:\n  title: Repository Branch\n  type: string\n  ui:field: RepoBranchPicker\n  ui:options:\n    requestUserCredentials:\n      secretsKey: USER_OAUTH_TOKEN\n      additionalScopes:\n        github:\n          - workflow:write\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"secretsKey"})," is the key used within the template secrets context to store the credential and ",(0,t.jsx)(n.code,{children:"additionalScopes"})," is any additional permission scopes to request."]}),"\n",(0,t.jsxs)(n.p,{children:["The supported ",(0,t.jsx)(n.code,{children:"additionalScopes"})," values are ",(0,t.jsx)(n.code,{children:"gerrit"}),", ",(0,t.jsx)(n.code,{children:"github"}),", ",(0,t.jsx)(n.code,{children:"gitlab"}),", ",(0,t.jsx)(n.code,{children:"bitbucket"}),", and ",(0,t.jsx)(n.code,{children:"azure"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If you're also using the ",(0,t.jsx)(n.code,{children:"RepoUrlPicker"})," field extension, you should simply duplicate this part from there."]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},221020:(e,n,i)=>{var t=i(296540),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,i){var t,s={},a=null,c=null;for(t in void 0!==i&&(a=""+i),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(c=n.ref),n)r.call(n,t)&&!d.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:l,type:e,key:a,ref:c,props:s,_owner:o.current}}n.Fragment=s,n.jsx=a,n.jsxs=a},474848:(e,n,i)=>{e.exports=i(221020)},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(296540);const l={},s=t.createContext(l);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);