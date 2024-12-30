/*! For license information please see 01ed3f4f.70a6e11b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[970124],{598129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=n(474848),a=n(28453);const i={id:"database",title:"Database",description:"How to set up PostgreSQL for your Backstage instance."},o=void 0,r={id:"getting-started/config/database",title:"Database",description:"How to set up PostgreSQL for your Backstage instance.",source:"@site/versioned_docs/version-stable/getting-started/config/database.md",sourceDirName:"getting-started/config",slug:"/getting-started/config/database",permalink:"/docs/getting-started/config/database",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/getting-started/config/database.md",tags:[],version:"stable",frontMatter:{id:"database",title:"Database",description:"How to set up PostgreSQL for your Backstage instance."},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/getting-started/"},next:{title:"Authentication",permalink:"/docs/getting-started/config/authentication"}},l={},c=[{value:"Summary",id:"summary",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"1. Install and configure PostgreSQL",id:"1-install-and-configure-postgresql",level:3},{value:"2. Configuring Backstage <code>pg</code> Client",id:"2-configuring-backstage-pg-client",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"Further Reading",id:"further-reading",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Audience: Admins"}),"\n",(0,s.jsx)(t.h3,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(t.p,{children:["This guide walks through how to set up a PostgreSQL database to host your Backstage data. It assumes you've already have a scaffolded Backstage app from following the ",(0,s.jsx)(t.a,{href:"/docs/getting-started/",children:"Standalone Install"})," guide."]}),"\n",(0,s.jsx)(t.p,{children:"By the end of this tutorial, you will have a working PostgreSQL database hooked up to your Backstage install."}),"\n",(0,s.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.p,{children:["This guide assumes a basic understanding of working on a Linux based operating system and have some experience with the terminal, specifically, these commands: ",(0,s.jsx)(t.code,{children:"apt-get"}),", ",(0,s.jsx)(t.code,{children:"psql"}),", ",(0,s.jsx)(t.code,{children:"yarn"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Access to a Linux-based operating system, such as Linux, MacOS or\n",(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/windows/wsl/",children:"Windows Subsystem for Linux"})]}),"\n",(0,s.jsx)(t.li,{children:"An account with elevated rights to install prerequisites on your operating\nsystem"}),"\n",(0,s.jsxs)(t.li,{children:["If the database is not hosted on the same server as the Backstage app, the\nPostgreSQL port needs to be accessible (the default is ",(0,s.jsx)(t.code,{children:"5432"})," or ",(0,s.jsx)(t.code,{children:"5433"}),")"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"1-install-and-configure-postgresql",children:"1. Install and configure PostgreSQL"}),"\n",(0,s.jsx)(t.admonition,{title:"Already configured your database?",type:"tip",children:(0,s.jsxs)(t.p,{children:["If you've already installed PostgreSQL and created a schema and user, you can skip to ",(0,s.jsx)(t.a,{href:"#2-configuring-backstage-pg-client",children:"Step 2"}),"."]})}),"\n",(0,s.jsx)(t.p,{children:"Let's install PostgreSQL and get it set up for our Backstage app. First, we'll need to actually install the SQL server."}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["The command below is for Linux. If you're not on Linux or having issues with package managers, check out ",(0,s.jsx)(t.a,{href:"https://www.postgresql.org/download/",children:"how to install PostgreSQL"})," to help you get sorted."]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"sudo apt-get install postgresql\n"})}),"\n",(0,s.jsx)(t.p,{children:"To test if your database is working:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"sudo -u postgres psql\n"})}),"\n",(0,s.jsx)(t.p,{children:"You should see a very welcoming message, like:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'psql (12.9 (Ubuntu 12.9-0ubuntu0.20.04.1))\nType "help" for help.\n\npostgres=#\n'})}),"\n",(0,s.jsxs)(t.p,{children:["For this tutorial we're going to use the existing postgres user. The next step is to set the password for this user. You'll want to replace the ",(0,s.jsx)(t.code,{children:"<secret>"})," with a real password in the command below. Keep note of the password you choose here, you'll need it later."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"postgres=# ALTER USER postgres PASSWORD '<secret>';\n"})}),"\n",(0,s.jsxs)(t.p,{children:["That's enough database administration to get started. Type ",(0,s.jsx)(t.code,{children:"\\q"}),", followed by\npressing the enter key. Then again type ",(0,s.jsx)(t.code,{children:"exit"})," and press enter. Next, you need\nto install and configure the client."]}),"\n",(0,s.jsxs)(t.h3,{id:"2-configuring-backstage-pg-client",children:["2. Configuring Backstage ",(0,s.jsx)(t.code,{children:"pg"})," Client"]}),"\n",(0,s.jsx)(t.p,{children:"Go to the root directory of your freshly installed Backstage\nApp. Run the following to install the PostgreSQL client into your backend:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="From your Backstage root directory"',children:"yarn --cwd packages/backend add pg\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Use your favorite editor to open ",(0,s.jsx)(t.code,{children:"app-config.yaml"})," and add your PostgreSQL\nconfiguration in the root directory of your Backstage app using the credentials from the previous steps."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",metastring:'title="app-config.yaml"',children:"backend:\n  database:\n    # highlight-remove-start\n    client: better-sqlite3\n    connection: ':memory:'\n    # highlight-remove-end\n    # highlight-add-start\n    # config options: https://node-postgres.com/apis/client\n    client: pg\n    connection:\n      host: ${POSTGRES_HOST}\n      port: ${POSTGRES_PORT}\n      user: ${POSTGRES_USER}\n      password: ${POSTGRES_PASSWORD}\n    # highlight-add-end\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"${...}"})," syntax denotes environment variables, specifically,"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"POSTGRES_HOST"})," - The URL/IP to access your PostgreSQL database at. If you've installed PostgreSQL locally, this will likely be 127.0.0.1."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"POSTGRES_PORT"})," - The port to access your PostgreSQL database on. If you've installed PostgreSQL locally, this will be ",(0,s.jsx)(t.code,{children:"5432"})," or ",(0,s.jsx)(t.code,{children:"5433"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"POSTGRES_USER"})," - The user from the SQL command above, ",(0,s.jsx)(t.code,{children:"postgres"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"POSTGRES_PASSWORD"})," - The password you set in the SQL command above."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"When filling these out, you have 2 choices,"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Use environment variables when you launch Backstage, either using an environment variable injector like ",(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/dotenv-cli",children:(0,s.jsx)(t.code,{children:"dotenv-cli"})})," or ",(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/env-cmd",children:(0,s.jsx)(t.code,{children:"env-cmd"})})," or loading the variables directly with ",(0,s.jsx)(t.code,{children:"EXPORT POSTGRES_...=..."}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Replacing the entire ",(0,s.jsx)(t.code,{children:"${POSTGRES_...}"})," string with the value you identified earlier. This is the less secure option, but worth doing if you don't have much experience with environment variables."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsxs)(t.p,{children:["If you opt for the second option of replacing the entire string, take care to not commit your ",(0,s.jsx)(t.code,{children:"app-config.yaml"})," to source control. It may contain passwords that you don't want leaked."]})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/getting-started/#2-run-the-backstage-app",children:"Start the Backstage app"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"yarn dev\n"})}),"\n",(0,s.jsx)(t.p,{children:"After the Backstage frontend launches, you should notice that nothing has changed. This is a good sign. If everything is setup correctly above, this means that the data is flowing from the demo data files directly into your database!"}),"\n",(0,s.jsx)(t.p,{children:"We've now made your data persist in your Backstage database."}),"\n",(0,s.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(t.p,{children:["We recommend you read ",(0,s.jsx)(t.a,{href:"/docs/getting-started/config/authentication",children:"Setting up authentication"})," next."]}),"\n",(0,s.jsx)(t.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,s.jsx)(t.p,{children:"If you want to read more about the database configuration, here are some helpful links:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/tutorials/configuring-plugin-databases#privileges",children:"Configuring Plugin Databases"})}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"http://knexjs.org/",children:"Read more about Knex"}),", the database wrapper that we use."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},221020:(e,t,n)=>{var s=n(296540),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,i={},c=null,d=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,s)&&!l.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:a,type:e,key:c,ref:d,props:i,_owner:r.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(296540);const a={},i=s.createContext(a);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);