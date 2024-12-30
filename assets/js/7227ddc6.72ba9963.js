/*! For license information please see 7227ddc6.72ba9963.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[723050],{127443:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var r=t(474848),o=t(28453);const i={id:"plugin-auth-backend.providers",title:"providers",description:"API reference for providers"},a=void 0,u={id:"reference/plugin-auth-backend.providers",title:"providers",description:"API reference for providers",source:"@site/versioned_docs/version-stable/reference/plugin-auth-backend.providers.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend.providers",permalink:"/docs/reference/plugin-auth-backend.providers",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-auth-backend.providers.md",tags:[],version:"stable",frontMatter:{id:"plugin-auth-backend.providers",title:"providers",description:"API reference for providers"}},s={},l=[];function d(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-auth-backend"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend.providers",children:(0,r.jsx)(n.code,{children:"providers"})})]}),"\n",(0,r.jsx)(n.p,{children:"All built-in auth provider integrations."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'providers: Readonly<{\n    atlassian: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("..").OAuthResult> | undefined;\n            signIn?: {\n                resolver: import("@backstage/plugin-auth-node").SignInResolver<import("..").OAuthResult>;\n            } | undefined;\n        } | undefined) => AuthProviderFactory;\n        resolvers: never;\n    }>;\n    auth0: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("..").OAuthResult> | undefined;\n            signIn?: {\n                resolver: import("@backstage/plugin-auth-node").SignInResolver<import("..").OAuthResult>;\n            } | undefined;\n        } | undefined) => AuthProviderFactory;\n        resolvers: never;\n    }>;\n    awsAlb: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("@backstage/plugin-auth-backend-module-aws-alb-provider").AwsAlbResult> | undefined;\n            signIn: {\n                resolver: import("@backstage/plugin-auth-node").SignInResolver<import("@backstage/plugin-auth-backend-module-aws-alb-provider").AwsAlbResult>;\n            };\n        } | undefined) => AuthProviderFactory;\n        resolvers: never;\n    }>;\n    bitbucket: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("..").OAuthResult> | undefined;\n            signIn?: {\n                resolver: import("@backstage/plugin-auth-node").SignInResolver<import("..").OAuthResult>;\n            } | undefined;\n        } | undefined) => AuthProviderFactory;\n        resolvers: Readonly<{\n            userIdMatchingUserEntityAnnotation: () => import("@backstage/plugin-auth-node").SignInResolver<import("..").OAuthResult>;\n            usernameMatchingUserEntityAnnotation: () => import("@backstage/plugin-auth-node").SignInResolver<import("..").OAuthResult>;\n        }>;\n    }>;\n    bitbucketServer: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("./bitbucketServer").BitbucketServerOAuthResult> | undefined;\n            signIn?: {\n                resolver: import("@backstage/plugin-auth-node").SignInResolver<import("./bitbucketServer").BitbucketServerOAuthResult>;\n            } | undefined;\n        } | undefined) => AuthProviderFactory;\n        resolvers: Readonly<{\n            emailMatchingUserEntityProfileEmail: () => import("@backstage/plugin-auth-node").SignInResolver<import("./bitbucketServer").BitbucketServerOAuthResult>;\n        }>;\n    }>;\n    cfAccess: Readonly<{\n        create: (options: {\n            authHandler?: import("./types").AuthHandler<import("./cloudflare-access").CloudflareAccessResult> | undefined;\n            signIn: {\n                resolver: import("@backstage/plugin-auth-node").SignInResolver<import("./cloudflare-access").CloudflareAccessResult>;\n            };\n            cache?: import("@backstage/backend-plugin-api").CacheService | undefined;\n        }) => AuthProviderFactory;\n        resolvers: Readonly<typeof import("@backstage/plugin-auth-backend-module-cloudflare-access-provider").cloudflareAccessSignInResolvers>;\n    }>;\n    gcpIap: Readonly<{\n        create: (options: {\n            authHandler?: import("./types").AuthHandler<import("@backstage/plugin-auth-backend-module-gcp-iap-provider").GcpIapResult> | undefined;\n            signIn: {\n                resolver: import("@backstage/plugin-auth-node").SignInResolver<import("@backstage/plugin-auth-backend-module-gcp-iap-provider").GcpIapResult>;\n            };\n        }) => AuthProviderFactory;\n        resolvers: never;\n    }>;\n    github: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("./github").GithubOAuthResult> | undefined;\n            signIn?: {\n                resolver: import("@backstage/plugin-auth-node").SignInResolver<import("./github").GithubOAuthResult>;\n            } | undefined;\n            stateEncoder?: import("./types").StateEncoder | undefined;\n        } | undefined) => AuthProviderFactory;\n        resolvers: Readonly<{\n            usernameMatchingUserEntityName: () => import("@backstage/plugin-auth-node").SignInResolver<import("./github").GithubOAuthResult>;\n        }>;\n    }>;\n    gitlab: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("..").OAuthResult> | undefined;\n            signIn?: {\n                resolver: import("@backstage/plugin-auth-node").SignInResolver<import("..").OAuthResult>;\n            } | undefined;\n        } | undefined) => AuthProviderFactory;\n        resolvers: never;\n    }>;\n    google: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("..").OAuthResult> | undefined;\n            signIn?: {\n                resolver: import("@backstage/plugin-auth-node").SignInResolver<import("..").OAuthResult>;\n            } | undefined;\n        } | undefined) => AuthProviderFactory;\n        resolvers: Readonly<{\n            emailMatchingUserEntityProfileEmail: () => import("@backstage/plugin-auth-node").SignInResolver<import("..").OAuthResult>;\n            emailLocalPartMatchingUserEntityName: () => import("@backstage/plugin-auth-node").SignInResolver<import("..").OAuthResult>;\n            emailMatchingUserEntityAnnotation: () => import("@backstage/plugin-auth-node").SignInResolver<import("..").OAuthResult>;\n        }>;\n    }>;\n    microsoft: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("..").OAuthResult> | undefined;\n            signIn?: {\n                resolver: import("@backstage/plugin-auth-node").SignInResolver<import("..").OAuthResult>;\n            } | undefined;\n        } | undefined) => AuthProviderFactory;\n        resolvers: Readonly<{\n            emailMatchingUserEntityProfileEmail: () => import("@backstage/plugin-auth-node").SignInResolver<import("..").OAuthResult>;\n            emailLocalPartMatchingUserEntityName: () => import("@backstage/plugin-auth-node").SignInResolver<import("..").OAuthResult>;\n            emailMatchingUserEntityAnnotation: () => import("@backstage/plugin-auth-node").SignInResolver<import("..").OAuthResult>;\n        }>;\n    }>;\n    oauth2: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("..").OAuthResult> | undefined;\n            signIn?: {\n                resolver: import("@backstage/plugin-auth-node").SignInResolver<import("..").OAuthResult>;\n            } | undefined;\n        } | undefined) => AuthProviderFactory;\n        resolvers: never;\n    }>;\n    oauth2Proxy: Readonly<{\n        create: (options: {\n            authHandler?: import("./types").AuthHandler<import("@backstage/plugin-auth-backend-module-oauth2-proxy-provider").OAuth2ProxyResult> | undefined;\n            signIn: {\n                resolver: import("@backstage/plugin-auth-node").SignInResolver<import("@backstage/plugin-auth-backend-module-oauth2-proxy-provider").OAuth2ProxyResult>;\n            };\n        }) => AuthProviderFactory;\n        resolvers: never;\n    }>;\n    oidc: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("@backstage/plugin-auth-backend-module-oidc-provider").OidcAuthResult> | undefined;\n            signIn?: {\n                resolver: import("@backstage/plugin-auth-node").SignInResolver<import("@backstage/plugin-auth-backend-module-oidc-provider").OidcAuthResult>;\n            } | undefined;\n        } | undefined) => AuthProviderFactory;\n        resolvers: Readonly<{\n            emailLocalPartMatchingUserEntityName: () => import("@backstage/plugin-auth-node").SignInResolver<unknown>;\n            emailMatchingUserEntityProfileEmail: () => import("@backstage/plugin-auth-node").SignInResolver<unknown>;\n        }>;\n    }>;\n    okta: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("..").OAuthResult> | undefined;\n            signIn?: {\n                resolver: import("@backstage/plugin-auth-node").SignInResolver<import("..").OAuthResult>;\n            } | undefined;\n        } | undefined) => AuthProviderFactory;\n        resolvers: Readonly<{\n            emailLocalPartMatchingUserEntityName: () => import("@backstage/plugin-auth-node").SignInResolver<unknown>;\n            emailMatchingUserEntityProfileEmail: () => import("@backstage/plugin-auth-node").SignInResolver<unknown>;\n            emailMatchingUserEntityAnnotation(): import("@backstage/plugin-auth-node").SignInResolver<import("..").OAuthResult>;\n        }>;\n    }>;\n    onelogin: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("..").OAuthResult> | undefined;\n            signIn?: {\n                resolver: import("@backstage/plugin-auth-node").SignInResolver<import("..").OAuthResult>;\n            } | undefined;\n        } | undefined) => AuthProviderFactory;\n        resolvers: never;\n    }>;\n    saml: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("./saml").SamlAuthResult> | undefined;\n            signIn?: {\n                resolver: import("@backstage/plugin-auth-node").SignInResolver<import("./saml").SamlAuthResult>;\n            } | undefined;\n        } | undefined) => AuthProviderFactory;\n        resolvers: Readonly<{\n            nameIdMatchingUserEntityName(): import("@backstage/plugin-auth-node").SignInResolver<import("./saml").SamlAuthResult>;\n        }>;\n    }>;\n    easyAuth: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("@backstage/plugin-auth-backend-module-azure-easyauth-provider").AzureEasyAuthResult> | undefined;\n            signIn: {\n                resolver: import("@backstage/plugin-auth-node").SignInResolver<import("@backstage/plugin-auth-backend-module-azure-easyauth-provider").AzureEasyAuthResult>;\n            };\n        } | undefined) => AuthProviderFactory;\n        resolvers: never;\n    }>;\n}>\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},221020:(e,n,t)=>{var r=t(296540),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,i={},l=null,d=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,r)&&!s.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:l,ref:d,props:i,_owner:u.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>u});var r=t(296540);const o={},i=r.createContext(o);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);