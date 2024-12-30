/*! For license information please see 7c9d75ad.a2c5ec8a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[894753],{535175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var o=n(474848),s=n(28453);const a={id:"configuration",title:"TechDocs Configuration Options",description:"Reference documentation for configuring TechDocs using app-config.yaml"},i=void 0,c={id:"features/techdocs/configuration",title:"TechDocs Configuration Options",description:"Reference documentation for configuring TechDocs using app-config.yaml",source:"@site/../docs/features/techdocs/configuration.md",sourceDirName:"features/techdocs",slug:"/features/techdocs/configuration",permalink:"/docs/next/features/techdocs/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/features/techdocs/configuration.md",tags:[],version:"current",frontMatter:{id:"configuration",title:"TechDocs Configuration Options",description:"Reference documentation for configuring TechDocs using app-config.yaml"},sidebar:"docs",previous:{title:"Creating and Publishing Documentation",permalink:"/docs/next/features/techdocs/creating-and-publishing"},next:{title:"Using Cloud Storage for TechDocs generated files",permalink:"/docs/next/features/techdocs/using-cloud-storage"}},r={},d=[];function l(e){const t={code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Using the ",(0,o.jsx)(t.code,{children:"app-config.yaml"})," in the Backstage app, you can configure TechDocs\nusing several options. This page serves as a reference to all the available\nconfiguration options for TechDocs."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"# File: app-config.yaml\n\ntechdocs:\n  # techdocs.generator is used to configure how documentation sites are generated using MkDocs.\n\n  generator:\n    # techdocs.generator.runIn can be either 'docker' or 'local'. This is to determine how to run the generator - whether to\n    # spin up the techdocs-container docker image or to run mkdocs locally (assuming all the dependencies are taken care of).\n    # You want to change this to 'local' if you are running Backstage using your own custom Docker setup and want to avoid running\n    # into Docker in Docker situation. Read more here\n    # https://backstage.io/docs/features/techdocs/getting-started/#disabling-docker-in-docker-situation-optional\n\n    runIn: 'docker'\n\n    # (Optional) techdocs.generator.dockerImage can be used to control the docker image used during documentation generation. This can be useful\n    # if you want to use MkDocs plugins or other packages that are not included in the default techdocs-container (spotify/techdocs).\n    # NOTE: This setting is only used when techdocs.generator.runIn is set to 'docker'.\n\n    dockerImage: 'spotify/techdocs'\n\n    # (Optional) techdocs.generator.pullImage can be used to disable pulling the latest docker image by default. This can be useful when you are\n    # using a custom techdocs.generator.dockerImage and you have a custom docker login requirement. For example, you need to login to\n    # AWS ECR to pull the docker image.\n    # NOTE: Disabling this requires the docker image was pulled by other means before running the techdocs generator.\n\n    pullImage: true\n\n    mkdocs:\n      # (Optional)  techdocs.generator.omitTechdocsCoreMkdocsPlugin can be used to disable automatic addition of techdocs-core plugin to the mkdocs.yaml files.\n      # Defaults to false, which means that the techdocs-core plugin is always added to the mkdocs file.\n      omitTechdocsCorePlugin: false\n\n      # (Optional and not recommended) Configures the techdocs generator to\n      # attempt to ensure an index.md exists falling back to using <docs-dir>/README.md\n      # or README.md in case a default <docs-dir>/index.md is not provided.\n      # Note that https://www.mkdocs.org/user-guide/configuration/#edit_uri behavior\n      # will be broken in these scenarios.\n      legacyCopyReadmeMdToIndexMd: false\n\n      # (Optional) Configures the default plugins which should be added\n      # automatically to every mkdocs.yaml file. This simplifies the usage as\n      # e.g. styling plugins can be added once for all.\n      # Make sure that the defined plugins are installed locally / in the Docker\n      # image.\n      # By default, only the techdocs-core plugin will be added (except if\n      # omitTechdocsCorePlugin: true).\n      defaultPlugins: ['techdocs-core']\n\n  # techdocs.builder can be either 'local' or 'external'.\n  # Using the default build strategy, if builder is set to 'local' and you open a TechDocs page,\n  # techdocs-backend will try to generate the docs, publish to storage and show the generated docs afterwards.\n  # This is the \"Basic\" setup of the TechDocs Architecture.\n  # Using the default build strategy, if builder is set to 'external' (or anything other than 'local'), techdocs-backend\n  # will only fetch the docs and will NOT try to generate and publish.\n  # In this case, we assume that docs are being built by an external process (e.g. in the CI/CD pipeline of the repository).\n  # This is the \"Recommended\" setup of the architecture.\n  # Note that custom build strategies may alter this behaviour.\n  # Read more about the \"Basic\" and \"Recommended\" setups here https://backstage.io/docs/features/techdocs/architecture\n  # Read more about build strategies here: https://backstage.io/docs/features/techdocs/concepts#techdocs-build-strategy\n\n  builder: 'local'\n\n  # techdocs.publisher is used to configure the Storage option, whether you want to use the local filesystem to store generated docs\n  # or you want to use External storage providers like Google Cloud Storage, AWS S3, etc.\n\n  publisher:\n    # techdocs.publisher.type can be - 'local' or 'googleGcs' or 'awsS3' or 'azureBlobStorage'.\n    # When set to 'local', techdocs-backend will create a 'static' directory at its root to store generated documentation files.\n    # When set to 'googleGcs', techdocs-backend will use a Google Cloud Storage Bucket to store generated documentation files.\n    # When set to 'awsS3', techdocs-backend will use an Amazon Web Service (AWS) S3 bucket to store generated documentation files.\n\n    type: 'local'\n\n    # Optional when techdocs.publisher.type is set to 'local'.\n\n    local:\n      # (Optional). Set this to specify where the generated documentation is stored.\n      publishDirectory: '/path/to/local/directory'\n\n    # Required when techdocs.publisher.type is set to 'googleGcs'. Skip otherwise.\n\n    googleGcs:\n      # (Required) Cloud Storage Bucket Name\n      bucketName: 'techdocs-storage'\n\n      # (Optional) Location in storage bucket to save files\n      # If not set, the default location will be the root of the storage bucket\n      bucketRootPath: '/'\n\n      # (Optional) An API key is required to write to a storage bucket.\n      # If missing, GOOGLE_APPLICATION_CREDENTIALS environment variable will be used.\n      # https://cloud.google.com/docs/authentication/production\n      credentials:\n        $file: '/path/to/google_application_credentials.json'\n\n    # Required when techdocs.publisher.type is set to 'awsS3'. Skip otherwise.\n\n    awsS3:\n      # (Required) AWS S3 Bucket Name\n      bucketName: 'techdocs-storage'\n\n      # (Optional) Location in storage bucket to save files\n      # If not set, the default location will be the root of the storage bucket\n      bucketRootPath: '/'\n\n      # (Optional) The AWS account ID where the storage bucket is located.\n      # Credentials for the account ID must be configured in the 'aws' app config section.\n      # See the integration-aws-node package for details on how to configure credentials in\n      # the 'aws' app config section.\n      # https://www.npmjs.com/package/@backstage/integration-aws-node\n      # If account ID is not set and no credentials are set, environment variables or aws config file will be used to authenticate.\n      # https://www.npmjs.com/package/@aws-sdk/credential-provider-node\n      # https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/setting-credentials-node.html\n      accountId: ${TECHDOCS_AWSS3_ACCOUNT_ID}\n\n      # (Optional) AWS credentials to use to write to the storage bucket.\n      # This configuration section is now deprecated.\n      # Configuring the account ID is now preferred, with credentials in the 'aws' app config section.\n      # If credentials are not set and no account ID is set, environment variables or aws config file will be used to authenticate.\n      # https://www.npmjs.com/package/@aws-sdk/credential-provider-node\n      # https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/setting-credentials-node.html\n      credentials:\n        accessKeyId: ${TECHDOCS_AWSS3_ACCESS_KEY_ID_CREDENTIAL}\n        secretAccessKey: ${TECHDOCS_AWSS3_SECRET_ACCESS_KEY_CREDENTIAL}\n\n      # (Optional) AWS Region of the bucket.\n      # If not set, AWS_REGION environment variable or aws config file will be used.\n      # https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/setting-region.html\n      region: ${AWS_REGION}\n\n      # (Optional) Endpoint URI to send requests to.\n      # If not set, the default endpoint is built from the configured region.\n      # https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/interfaces/s3clientconfig.html#endpoint\n      endpoint: ${AWS_ENDPOINT}\n\n      # (Optional) HTTPS proxy to use for S3 Requests\n      # Defaults to using no proxy\n      # This allows docs to be published and read from behind a proxy\n      httpsProxy: ${HTTPS_PROXY}\n\n      # (Optional) Whether to use path style URLs when communicating with S3.\n      # Defaults to false.\n      # This allows providers like LocalStack, Minio and Wasabi (and possibly others) to be used to host tech docs.\n      s3ForcePathStyle: false\n\n      # (Optional) AWS Server Side Encryption\n      # Defaults to undefined.\n      # If not set, encrypted buckets will fail to publish.\n      # https://docs.aws.amazon.com/AmazonS3/latest/userguide/specifying-s3-encryption.html\n      sse: 'aws:kms' # or AES256\n\n    # Required when techdocs.publisher.type is set to 'azureBlobStorage'. Skip otherwise.\n\n    azureBlobStorage:\n      # (Required) Azure Blob Storage Container Name\n      containerName: 'techdocs-storage'\n\n      # (Optional) Azure blob storage connection string.\n      # Can be useful for local testing through azurite\n      # Defaults to undefined\n      # if provided, takes higher priority, 'techdocs.publisher.azureBlobStorage.credentials' will become irrelevant\n      connectionString: ''\n\n      # (Required) An account name is required to write to a storage blob container.\n      # https://docs.microsoft.com/en-us/rest/api/storageservices/authorize-with-shared-key\n      credentials:\n        accountName: ${TECHDOCS_AZURE_BLOB_STORAGE_ACCOUNT_NAME}\n        # (Optional) An account key is required to write to a storage container.\n        # If missing,AZURE_TENANT_ID, AZURE_CLIENT_ID, AZURE_CLIENT_SECRET environment variable will be used.\n        # https://docs.microsoft.com/en-us/azure/storage/common/storage-auth?toc=/azure/storage/blobs/toc.json\n        accountKey: ${TECHDOCS_AZURE_BLOB_STORAGE_ACCOUNT_KEY}\n\n  # (Optional and not recommended) Prior to version [0.x.y] of TechDocs, docs\n  # sites could only be accessed over paths with case-sensitive entity triplets\n  # e.g. (namespace/Kind/name). If you are upgrading from an older version of\n  # TechDocs and are unable to perform the necessary migration of files in your\n  # external storage, you can set this value to `true` to temporarily revert to\n  # the old, case-sensitive entity triplet behavior.\n  legacyUseCaseSensitiveTripletPaths: false\n\n  # techdocs.cache is optional, and is only recommended when you've configured\n  # an external techdocs.publisher.type above. Also requires backend.cache to\n  # be configured with a valid cache store. Configure techdocs.cache.ttl to\n  # enable caching of techdocs assets.\n  cache:\n    # Represents the number of milliseconds a statically built asset should\n    # stay cached. Cache invalidation is handled automatically by the frontend,\n    # which compares the build times in cached metadata vs. canonical storage,\n    # allowing long TTLs (e.g. 1 month/year)\n    ttl: 3600000\n\n    # (Optional) The time (in milliseconds) that the TechDocs backend will wait\n    # for a cache service to respond before continuing on as though the cached\n    # object was not found (e.g. when the cache service is unavailable). The\n    # default value is 1000\n    readTimeout: 500\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var o=n(296540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var o,a={},d=null,l=null;for(o in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,o)&&!r.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:s,type:e,key:d,ref:l,props:a,_owner:c.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var o=n(296540);const s={},a=o.createContext(s);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);