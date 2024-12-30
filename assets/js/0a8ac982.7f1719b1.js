/*! For license information please see 0a8ac982.7f1719b1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[326273],{811936:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=r(474848),o=r(28453);const i={id:"provider",title:"VMware Cloud Authentication Provider",sidebar_label:"VMware Cloud",description:"Adding VMware Cloud as an authentication provider in Backstage"},s=void 0,a={id:"auth/vmware-cloud/provider",title:"VMware Cloud Authentication Provider",description:"Adding VMware Cloud as an authentication provider in Backstage",source:"@site/../docs/auth/vmware-cloud/provider.md",sourceDirName:"auth/vmware-cloud",slug:"/auth/vmware-cloud/provider",permalink:"/docs/next/auth/vmware-cloud/provider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/auth/vmware-cloud/provider.md",tags:[],version:"current",frontMatter:{id:"provider",title:"VMware Cloud Authentication Provider",sidebar_label:"VMware Cloud",description:"Adding VMware Cloud as an authentication provider in Backstage"},sidebar:"docs",previous:{title:"OneLogin",permalink:"/docs/next/auth/onelogin/provider"},next:{title:"Sign-in Identities and Resolvers",permalink:"/docs/next/auth/identity-resolver"}},d={},l=[{value:"Create an OAuth App in the VMware Cloud Console",id:"create-an-oauth-app-in-the-vmware-cloud-console",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Resolvers",id:"resolvers",level:3},{value:"Backend Installation",id:"backend-installation",level:2},{value:"Adding the provider to the Backstage frontend",id:"adding-the-provider-to-the-backstage-frontend",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Backstage comes with an auth provider module to allow users to sign-in with\ntheir VMware Cloud account. This page describes some actions within the VMware\nCloud Console and within a Backstage app required to enable this capability."}),"\n",(0,t.jsx)(n.h2,{id:"create-an-oauth-app-in-the-vmware-cloud-console",children:"Create an OAuth App in the VMware Cloud Console"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Log in to the ",(0,t.jsx)(n.a,{href:"https://console.cloud.vmware.com",children:"VMware Cloud Console"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Navigate to ",(0,t.jsx)(n.a,{href:"https://console.cloud.vmware.com/csp/gateway/portal/#/consumer/usermgmt/oauth-apps",children:"Identity & Access Management > OAuth Apps"}),"\nand click the ",(0,t.jsx)(n.a,{href:"https://console.cloud.vmware.com/csp/gateway/portal/#/consumer/usermgmt/oauth-apps/owned-apps/view",children:"Owned Apps"}),"\ntab -- if you are not an Organization Owner or Administrator but only a\nMember, you will not see this nav entry unless the ",(0,t.jsx)(n.strong,{children:"Developer"})," check box is\nselected for your role (see the ",(0,t.jsx)(n.a,{href:"https://docs.vmware.com/en/VMware-Cloud-services/services/Using-VMware-Cloud-Services/GUID-C11D3AAC-267C-4F16-A0E3-3EDF286EBE53.html#organization-roles-and-permissions-0",children:"Organization roles and permissions"}),"\ndocs for details)."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Create App"}),", choose 'Web/Mobile app' and click ",(0,t.jsx)(n.strong,{children:"Continue"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Use default settings except:\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"App Name"})," and ",(0,t.jsx)(n.code,{children:"App Description"})," of your choosing."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Redirect URIs"}),": ",(0,t.jsx)(n.code,{children:"${baseUrl}/api/auth/vmwareCloudServices/handler/frame"}),"\nwhere ",(0,t.jsx)(n.code,{children:"baseUrl"})," is the URL where your Backstage backend can be reached;\nnote that VMware Cloud does not support the combination of an ",(0,t.jsx)(n.code,{children:"http://"}),"\nscheme and a ",(0,t.jsx)(n.code,{children:"localhost"})," hostname, so when testing locally it may help to\nset your backend base URL to ",(0,t.jsx)(n.code,{children:"http://127.0.0.1:7007"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Refresh Token"}),": check ",(0,t.jsx)(n.code,{children:"Issue refresh token"}),"; refresh tokens are required\nto prevent forcing users to re-login when they refresh their browser."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Define Scopes"}),": check ",(0,t.jsx)(n.code,{children:"OpenID"})," at the bottom."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Create"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Take note of the ",(0,t.jsx)(n.code,{children:"App ID"})," in the resulting modal; this is the client ID to be\nused by Backstage."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Add the following to your ",(0,t.jsx)(n.code,{children:"app-config.yaml"})," under the root ",(0,t.jsx)(n.code,{children:"auth"})," configuration:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"auth:\n  session:\n    secret: your session secret\n  environment: development\n  providers:\n    vmwareCloudServices:\n      development:\n        clientId: ${APP_ID}\n        organizationId: ${ORG_ID}\n        signIn:\n          resolvers:\n            # See https://backstage.io/docs/auth/vmware-cloud/provider#resolvers for more resolvers\n            - resolver: emailMatchingUserEntityProfileEmail\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Where ",(0,t.jsx)(n.code,{children:"APP_ID"})," refers to the ID retrieved when creating the OAuth App, and\n",(0,t.jsx)(n.code,{children:"ORG_ID"})," is the ",(0,t.jsx)(n.a,{href:"https://docs.vmware.com/en/VMware-Cloud-services/services/Using-VMware-Cloud-Services/GUID-CF9E9318-B811-48CF-8499-9419997DC1F8.html#view-the-organization-id-1",children:"long ID of the Organization"}),"\nin VMware Cloud for which you wish to enable sign-in."]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"note",children:(0,t.jsxs)(n.p,{children:["VMware Cloud requires OAuth Apps to use\n",(0,t.jsx)(n.a,{href:"https://oauth.net/2/pkce/",children:"PKCE"})," when performing authorization code flows; the\nlibrary used by this provider requires the use of Express session middleware to\ndo this. Therefore the value ",(0,t.jsx)(n.code,{children:"your session secret"})," under ",(0,t.jsx)(n.code,{children:"auth.session.secret"}),"\nshould be replaced with a long, complex and unique string which will act as a\nkey for signing session cookies set by Backstage."]})}),"\n",(0,t.jsx)(n.h3,{id:"resolvers",children:"Resolvers"}),"\n",(0,t.jsx)(n.p,{children:"This provider includes several resolvers out of the box that you can use:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"emailMatchingUserEntityProfileEmail"}),": Matches the email address from the auth provider with the User entity that has a matching ",(0,t.jsx)(n.code,{children:"spec.profile.email"}),". If no match is found it will throw a ",(0,t.jsx)(n.code,{children:"NotFoundError"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"emailLocalPartMatchingUserEntityName"}),": Matches the ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Email_address#Local-part",children:"local part"})," of the email address from the auth provider with the User entity that has a matching ",(0,t.jsx)(n.code,{children:"name"}),". If no match is found it will throw a ",(0,t.jsx)(n.code,{children:"NotFoundError"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"note",children:(0,t.jsxs)(n.p,{children:["The resolvers will be tried in order, but will only be skipped if they throw a ",(0,t.jsx)(n.code,{children:"NotFoundError"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["If these resolvers do not fit your needs you can build a custom resolver, this is covered in the ",(0,t.jsx)(n.a,{href:"/docs/next/auth/identity-resolver#building-custom-resolvers",children:"Building Custom Resolvers"})," section of the Sign-in Identities and Resolvers documentation."]}),"\n",(0,t.jsx)(n.h2,{id:"backend-installation",children:"Backend Installation"}),"\n",(0,t.jsx)(n.p,{children:"To add the provider to the backend we will first need to install the package by running this command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="from your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-auth-backend-module-vmware-cloud-provider\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then we will need to this line:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="in packages/backend/src/index.ts"',children:"backend.add(import('@backstage/plugin-auth-backend'));\n/* highlight-add-start */\nbackend.add(\n  import('@backstage/plugin-auth-backend-module-vmware-cloud-provider'),\n);\n/* highlight-add-end */\n"})}),"\n",(0,t.jsx)(n.h2,{id:"adding-the-provider-to-the-backstage-frontend",children:"Adding the provider to the Backstage frontend"}),"\n",(0,t.jsxs)(n.p,{children:["To add the provider to the frontend, add the ",(0,t.jsx)(n.code,{children:"vmwareCloudAuthApiRef"})," reference and\n",(0,t.jsx)(n.code,{children:"SignInPage"})," component as shown in\n",(0,t.jsx)(n.a,{href:"/docs/next/auth/#sign-in-configuration",children:"Adding the provider to the sign-in page"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},221020:(e,n,r)=>{var t=r(296540),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,i={},l=null,c=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)s.call(n,t)&&!d.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:o,type:e,key:l,ref:c,props:i,_owner:a.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var t=r(296540);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);