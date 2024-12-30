/*! For license information please see 9c346efb.5dd51753.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[913549],{108748:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=t(474848),o=t(28453);const r={id:"database",title:"Database",description:"How to set up PostgreSQL for your Backstage instance."},i=void 0,a={id:"getting-started/config/database",title:"Database",description:"How to set up PostgreSQL for your Backstage instance.",source:"@site/../docs/getting-started/config/database.md",sourceDirName:"getting-started/config",slug:"/getting-started/config/database",permalink:"/docs/next/getting-started/config/database",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/getting-started/config/database.md",tags:[],version:"current",frontMatter:{id:"database",title:"Database",description:"How to set up PostgreSQL for your Backstage instance."},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/next/getting-started/"},next:{title:"Authentication",permalink:"/docs/next/getting-started/config/authentication"}},l={},c=[{value:"Summary",id:"summary",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Install and Configure PostgreSQL",id:"1-install-and-configure-postgresql",level:2},{value:"2. Configuring Backstage <code>pg</code> Client",id:"2-configuring-backstage-pg-client",level:2},{value:"Alternatives",id:"alternatives",level:2},{value:"Docker",id:"docker",level:3},{value:"Docker Compose",id:"docker-compose",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"Further Reading",id:"further-reading",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Audience: Admins"}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(n.p,{children:["This guide walks through how to set up a PostgreSQL database to host your Backstage data. It assumes you've already have a scaffolded Backstage app from following the ",(0,s.jsx)(n.a,{href:"/docs/next/getting-started/",children:"Creating your Backstage App"})," guide."]}),"\n",(0,s.jsx)(n.p,{children:"By the end of this tutorial, you will have a working PostgreSQL database hooked up to your Backstage install."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.p,{children:["This guide assumes a basic understanding of working on a Linux based operating system and have some experience with the terminal, specifically, these commands: ",(0,s.jsx)(n.code,{children:"apt-get"}),", ",(0,s.jsx)(n.code,{children:"psql"}),", ",(0,s.jsx)(n.code,{children:"yarn"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Access to a Linux-based operating system, such as Linux, MacOS or\n",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/windows/wsl/",children:"Windows Subsystem for Linux"})]}),"\n",(0,s.jsx)(n.li,{children:"An account with elevated rights to install prerequisites on your operating\nsystem"}),"\n",(0,s.jsxs)(n.li,{children:["If the database is not hosted on the same server as the Backstage app, the\nPostgreSQL port needs to be accessible (the default is ",(0,s.jsx)(n.code,{children:"5432"})," or ",(0,s.jsx)(n.code,{children:"5433"}),")"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"1-install-and-configure-postgresql",children:"1. Install and Configure PostgreSQL"}),"\n",(0,s.jsx)(n.admonition,{title:"Already configured your database?",type:"tip",children:(0,s.jsxs)(n.p,{children:["If you've already installed PostgreSQL and created a schema and user, you can skip to ",(0,s.jsx)(n.a,{href:"#2-configuring-backstage-pg-client",children:"Step 2"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"Let's install PostgreSQL and get it set up for our Backstage app. First, we'll need to actually install the SQL server."}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["The command below is for Linux. If you're not on Linux or having issues with package managers, check out ",(0,s.jsx)(n.a,{href:"https://www.postgresql.org/download/",children:"how to install PostgreSQL"})," to help you get sorted."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo apt-get install postgresql\n"})}),"\n",(0,s.jsx)(n.p,{children:"To test if your database is working:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo -u postgres psql\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should see a very welcoming message, like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'psql (12.9 (Ubuntu 12.9-0ubuntu0.20.04.1))\nType "help" for help.\n\npostgres=#\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For this tutorial we're going to use the existing postgres user. The next step is to set the password for this user. You'll want to replace the ",(0,s.jsx)(n.code,{children:"<secret>"})," with a real password in the command below. Keep note of the password you choose here, you'll need it later."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"postgres=# ALTER USER postgres PASSWORD '<secret>';\n"})}),"\n",(0,s.jsxs)(n.p,{children:["That's enough database administration to get started. Type ",(0,s.jsx)(n.code,{children:"\\q"}),", followed by\npressing the enter key. Then again type ",(0,s.jsx)(n.code,{children:"exit"})," and press enter. Next, you need\nto install and configure the client."]}),"\n",(0,s.jsxs)(n.h2,{id:"2-configuring-backstage-pg-client",children:["2. Configuring Backstage ",(0,s.jsx)(n.code,{children:"pg"})," Client"]}),"\n",(0,s.jsxs)(n.p,{children:["Use your favorite editor to open ",(0,s.jsx)(n.code,{children:"app-config.yaml"})," and add your PostgreSQL configuration in the root directory of your Backstage app using the credentials from the previous steps."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="app-config.yaml"',children:"backend:\n  database:\n    # highlight-remove-start\n    client: better-sqlite3\n    connection: ':memory:'\n    # highlight-remove-end\n    # highlight-add-start\n    # config options: https://node-postgres.com/apis/client\n    client: pg\n    connection:\n      host: ${POSTGRES_HOST}\n      port: ${POSTGRES_PORT}\n      user: ${POSTGRES_USER}\n      password: ${POSTGRES_PASSWORD}\n    # highlight-add-end\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"${...}"})," syntax denotes environment variables, specifically,"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"POSTGRES_HOST"})," - The URL/IP to access your PostgreSQL database at. If you've installed PostgreSQL locally, this will likely be 127.0.0.1."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"POSTGRES_PORT"})," - The port to access your PostgreSQL database on. If you've installed PostgreSQL locally, this will be ",(0,s.jsx)(n.code,{children:"5432"})," or ",(0,s.jsx)(n.code,{children:"5433"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"POSTGRES_USER"})," - The user from the SQL command above, ",(0,s.jsx)(n.code,{children:"postgres"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"POSTGRES_PASSWORD"})," - The password you set in the SQL command above."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"When filling these out, you have 2 choices,"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Use environment variables when you launch Backstage, either using an environment variable injector like ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/dotenv-cli",children:(0,s.jsx)(n.code,{children:"dotenv-cli"})})," or ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/env-cmd",children:(0,s.jsx)(n.code,{children:"env-cmd"})})," or loading the variables directly with ",(0,s.jsx)(n.code,{children:"EXPORT POSTGRES_...=..."}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Replacing the entire ",(0,s.jsx)(n.code,{children:"${POSTGRES_...}"})," string with the value you identified earlier. This is the less secure option, but worth doing if you don't have much experience with environment variables."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsxs)(n.p,{children:["If you opt for the second option of replacing the entire string, take care to not commit your ",(0,s.jsx)(n.code,{children:"app-config.yaml"})," to source control. It may contain passwords that you don't want leaked."]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/next/getting-started/#2-run-the-backstage-app",children:"Start the Backstage app"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"yarn dev\n"})}),"\n",(0,s.jsx)(n.p,{children:"After the Backstage frontend launches, you should notice that nothing has changed. This is a good sign. If everything is setup correctly above, this means that the data is flowing from the demo data files directly into your database!"}),"\n",(0,s.jsx)(n.p,{children:"We've now made your data persist in your Backstage database."}),"\n",(0,s.jsx)(n.h2,{id:"alternatives",children:"Alternatives"}),"\n",(0,s.jsx)(n.p,{children:"You may not want to install Postgres locally, the following sections outline alternatives."}),"\n",(0,s.jsx)(n.h3,{id:"docker",children:"Docker"}),"\n",(0,s.jsx)(n.p,{children:"You can run Postgres in a Docker container, this is great for local development or getting a Backstage POC up and running quickly, here's how:"}),"\n",(0,s.jsxs)(n.p,{children:["First we need to pull down the container image, we'll use Postgres 17, check out the ",(0,s.jsx)(n.a,{href:"/docs/next/overview/versioning-policy#postgresql-releases",children:"Postgres Version Policy"})," to learn which versions are supported."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker pull postgres:17.0-bookworm\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then we just need to start up the container."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker run -d --name postgres --restart=always -p 5432:5432 -e POSTGRES_PASSWORD=<secret> postgres:17.0-bookworm\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will run Postgres in the background for you, but remember to start it up again when you reboot your system."}),"\n",(0,s.jsx)(n.h3,{id:"docker-compose",children:"Docker Compose"}),"\n",(0,s.jsx)(n.p,{children:"Another way to run Postgres is to use Docker Compose, here's what that would look like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="docker-compose.local.yaml"',children:"version: '4'\n\nservices:\n  postgres:\n    image: postgres:17.0-bookworm\n    environment:\n      POSTGRES_USER: postgres\n      POSTGRES_PASSWORD: <secret>\n    ports:\n      - 5432:5432\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then you would just run ",(0,s.jsx)(n.code,{children:"docker compose -f docker-compose.local.yaml up"})," to start Postgres."]}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(n.p,{children:["We recommend you read ",(0,s.jsx)(n.a,{href:"/docs/next/getting-started/config/authentication",children:"Setting up authentication"})," next."]}),"\n",(0,s.jsx)(n.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,s.jsx)(n.p,{children:"If you want to read more about the database configuration, here are some helpful links:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/next/tutorials/configuring-plugin-databases#privileges",children:"Configuring Plugin Databases"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"http://knexjs.org/",children:"Read more about Knex"}),", the database wrapper that we use."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.a,{href:"https://www.pgadmin.org/",children:["Install ",(0,s.jsx)(n.code,{children:"pgAdmin"})," 4"]}),", a helpful tool for querying your database."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},221020:(e,n,t)=>{var s=t(296540),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,r={},c=null,d=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,s)&&!l.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:o,type:e,key:c,ref:d,props:r,_owner:a.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(296540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);