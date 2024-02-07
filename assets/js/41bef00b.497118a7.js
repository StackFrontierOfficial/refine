"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50209],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"TypeScript Record Type with Examples",description:"We'll explore TypeScript Record type with examples.",slug:"typescript-record-type",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-16-typescript-record/social.png",hide_table_of_contents:!1},p=void 0,l={permalink:"/blog/typescript-record-type",source:"@site/blog/2023-06-16-typescript-record.md",title:"TypeScript Record Type with Examples",description:"We'll explore TypeScript Record type with examples.",date:"2023-06-16T00:00:00.000Z",formattedDate:"June 16, 2023",tags:[{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:6.165,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"TypeScript Record Type with Examples",description:"We'll explore TypeScript Record type with examples.",slug:"typescript-record-type",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-16-typescript-record/social.png",hide_table_of_contents:!1},prevItem:{title:"A Detailed Guide on Docker run Command",permalink:"/blog/docker-run-command"},nextItem:{title:"refine Open Source Hackathon 2",permalink:"/blog/refine-hackathon-2"},relatedPosts:[{title:"A Detailed Guide on TypeScript Pick Type",description:"We'll deep dive into the TypeScript Pick utility type with examples and use cases.",permalink:"/blog/typescript-pick-utility-type",formattedDate:"September 30, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:6.475,date:"2022-09-30T00:00:00.000Z"},{title:"How to use TypeScript Partial Type?",description:"We'll explain the TypeScript Partial utility type with examples",permalink:"/blog/typescript-partial-utility-type",formattedDate:"October 10, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.925,date:"2022-10-10T00:00:00.000Z"},{title:"TypeScript vs JavaScript - A Detailed Comparison",description:"This post provides an insightful comparison and contrast between TypeScript and its ECMA standardized forerunner, JavaScript.",permalink:"/blog/javascript-vs-typescript",formattedDate:"November 21, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:16.925,date:"2023-11-21T00:00:00.000Z"}],authorPosts:[{title:"Pilot & refine architecture",description:"We'll be taking a look at the architecture of refine and how week of RefineWeek series will be structured.",permalink:"/blog/refine-react-invoice-generator-1",formattedDate:"April 10, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:9.195,date:"2023-04-10T00:00:00.000Z"},{title:"Creating Mission and Invoice Pages",description:"We add more CRUD views to the Pdf Invoice Generator app we have been building using refine and Strapi last few days.",permalink:"/blog/refine-react-invoice-generator-4",formattedDate:"April 13, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:17.81,date:"2023-04-13T00:00:00.000Z"},{title:"Building a React Admin Panel with Refine and daisyUI",description:"We'll build a simple React admin panel using Refine and daisyUI.",permalink:"/blog/daisy-ui-react-admin-panel",formattedDate:"September 6, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:60.32,date:"2023-09-06T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Understanding the Record Type",id:"understanding-the-record-type",level:2},{value:"Enter the <code>Record&lt;&gt;</code>",id:"enter-the-record",level:3},{value:"Union of Key Types",id:"union-of-key-types",level:3},{value:"Other Quirks",id:"other-quirks",level:3},{value:"Using TypeScript <code>Record&lt;&gt;</code> with React Components",id:"using-typescript-record-with-react-components",level:2},{value:"Summary",id:"summary",level:2}],m={toc:c};function u(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Record<>")," utility type in TypeScript is typically associated with a record or a collection of records returned from an API endpoint. It helps define a type with property names such as ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," and map the values to the type of the data."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Record<>")," type is a TypeScript object transformation type that is often used to derive stable object types for API data in an application. This is possible mainly because the property identifiers of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Record<>")," type are themselves types and the mapped value is also a type. As such, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Record<>")," type helps write error-free, maintainable and efficient code, and becomes increasingly useful when an application's API endpoints and versions start growing."),(0,a.kt)("p",null,"This post explores the TypeScript Record type with a series of examples ranging from simple strings and numbers based types to more common ones involving API data and React components. With the examples, we see how to derive ",(0,a.kt)("inlineCode",{parentName:"p"},"Record<>")," types by assigning types for ",(0,a.kt)("inlineCode",{parentName:"p"},"Keys")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Value"),", discuss how a ",(0,a.kt)("inlineCode",{parentName:"p"},"Record<>")," type is advantageous over simple object types and index signatures, and try to understand the quirks of its usage."),(0,a.kt)("h2",{id:"understanding-the-record-type"},"Understanding the Record Type"),(0,a.kt)("p",null,"Starting easy, let's begin with a simple ",(0,a.kt)("strong",{parentName:"p"},"object type")," that represents a user:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'type TUser = {\n    email: string;\n    password: string;\n};\n\nconst user: TUser = {\n    email: "example@example.com",\n    password: "12345678",\n};\n\nconsole.log(user.email); // "example@example.com"\n')),(0,a.kt)("p",null,"The object type is fine for typing a user. And we need it to base a record type on it."),(0,a.kt)("p",null,"We could also use an ",(0,a.kt)("strong",{parentName:"p"},"index signature"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'type TIUser = {\n    [s: string]: string;\n};\n\nconst iUser: TIUser = {\n    email: "example@example.com",\n    password: "12345678",\n};\n\nconsole.log(iUser.email); // "example@example.com"\n')),(0,a.kt)("p",null,"Not very insightful. This is because albeit acceptable, the index signature is a misrepresentation of the user data that has a well-defined shape in itself."),(0,a.kt)("p",null,"For API data like a ",(0,a.kt)("inlineCode",{parentName:"p"},"user"),", a much more accurate representation is by constructing a member based on indexed table columns like ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'"3xamp1eUSERIdSTOR3DinAdb": {\n    email: "example@example.com",\n    password: "12345678",\n};\n')),(0,a.kt)("p",null,"This is crucial, especially in backend development for building RESTful APIs that use ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"s in query params to fetch data from API endpoints."),(0,a.kt)("h3",{id:"enter-the-record"},"Enter the ",(0,a.kt)("inlineCode",{parentName:"h3"},"Record<>")),(0,a.kt)("p",null,"The TypeScript ",(0,a.kt)("inlineCode",{parentName:"p"},"Record<>")," type helps reconstruct API data types into structured maps that are easier to handle:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'type TUser = {\n    email: string;\n    password: string;\n};\n\nconst user: Record<string, TUser> = {\n    "3xamp1eUSERIdSTOR3DinAdb": {\n        email: "example@example.com",\n        password: "12345678",\n    }\n};\n\nconsole.log(user["3xamp1eUSERIdSTOR3DinAdb"].email); // "example@example.com"\n')),(0,a.kt)("p",null,"Now the type is a more structured hash map whose members can be plucked with the id."),(0,a.kt)("p",null,"Notice the ",(0,a.kt)("inlineCode",{parentName:"p"},"Record<Keys, Value>")," is a generic. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Keys")," passed represents the type or union of types for the member name. And the ",(0,a.kt)("inlineCode",{parentName:"p"},"Value")," is the type for the value of the property."),(0,a.kt)("p",null,"The important thing here is that we're still using the ",(0,a.kt)("inlineCode",{parentName:"p"},"TUser")," type to base the record type on the actual shape of the data."),(0,a.kt)("p",null,"The derived Record type actually represents a collection of data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const users: Record<string, TUser> = {\n    "3xamp1eUSERIdSTOR3DinAdb": {\n        email: "example@example.com",\n        password: "12345678",\n    },\n     "another3xamp1eUSERIdSTOR3DinAdb": {\n        email: "another_example@example.com",\n        password: "12345678",\n    },\n};\n\nconsole.log(users["another3xamp1eUSERIdSTOR3DinAdb"].email); // "another_example@example.com"\n')),(0,a.kt)("h3",{id:"union-of-key-types"},"Union of Key Types"),(0,a.kt)("p",null,"The transformed type above is unrestricted with respect to the number of items because we can add as many members as possible."),(0,a.kt)("p",null,"However, if we want to restrict the collection to a number of ids, ",(0,a.kt)("inlineCode",{parentName:"p"},"Keys")," can have a union of types:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'type TUser = {\n    email: string;\n    password: string;\n};\n\ntype ActiveUserIds = "3xamp1eUSERIdSTOR3DinAdb" | "another3xamp1eUSERIdSTOR3DinAdb" | "yetAnother3xamp1eUSERIdSTOR3DinAdb";\n\nconst activeUsers: Record<ActiveUserIds, TUser> = {\n    "3xamp1eUSERIdSTOR3DinAdb": {\n        email: "example@example.com",\n        password: "12345678",\n    },\n     "another3xamp1eUSERIdSTOR3DinAdb": {\n        email: "another_example@example.com",\n        password: "12345678",\n    },\n     "yetAnother3xamp1eUSERIdSTOR3DinAdb": {\n        email: "yet_another_example@example.com",\n        password: "12345678",\n    },\n};\n\nconsole.log(activeUsers[ "3xamp1eUSERIdSTOR3DinAdb"].email); // example@example.com\nconsole.log(activeUsers["amongOther3xamp1eUSERIdsSTOR3DinAdb"].email);\n/*\nProperty \'amonganother3xamp1eUSERIdSTOR3DinAdb\' does not exist on type \'Record<activeUserIds, TUser>\'. Did you mean \'another3xamp1eUSERIdSTOR3DinAdb\'?(2551)\n*/\n')),(0,a.kt)("p",null,"Notice the ",(0,a.kt)("inlineCode",{parentName:"p"},"Keys")," argument is now a union of ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," strings, which helps us restrict the members to only ",(0,a.kt)("inlineCode",{parentName:"p"},"activeUserIds"),". This means that accessing users with ids that are not included, like ",(0,a.kt)("inlineCode",{parentName:"p"},"amongOther3xamp1eUSERIdsSTOR3DinAdb"),", throws the above TypeScript ",(0,a.kt)("inlineCode",{parentName:"p"},"2551")," error."),(0,a.kt)("p",null,"Union of keys types in ",(0,a.kt)("inlineCode",{parentName:"p"},"Record<>")," is much more restrictive - in the sense that TypeScript considers the union strictly as a set. If we miss one item from the union as the map key, we get a ",(0,a.kt)("inlineCode",{parentName:"p"},"2741")," error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'type TUser = {\n    email: string;\n    password: string;\n};\n\ntype ActiveUserIds = "3xamp1eUSERIdSTOR3DinAdb" | "another3xamp1eUSERIdSTOR3DinAdb" | "yetAnother3xamp1eUSERIdSTOR3DinAdb";\n\nconst activeUsers: Record<ActiveUserIds, TUser> = {\n    "3xamp1eUSERIdSTOR3DinAdb": {\n        email: "example@example.com",\n        password: "12345678",\n    },\n     "yetAnother3xamp1eUSERIdSTOR3DinAdb": {\n        email: "yet_another_example@example.com",\n        password: "12345678",\n    },\n};\n\n/*\nProperty \'another3xamp1eUSERIdSTOR3DinAdb\' is missing in type \'{ "3xamp1eUSERIdSTOR3DinAdb": { email: string; password: string; }; yetAnother3xamp1eUSERIdSTOR3DinAdb: { email: string; password: string; }; }\' but required in type \'Record<activeUserIds, TUser>\'.(2741)\n*/\n')),(0,a.kt)("p",null,"This is not the case with the values though. For example, in the below code, the values include ",(0,a.kt)("inlineCode",{parentName:"p"},"TProjectManager")," type and there is no such member in the map, and TypeScript acts as usual and does not complain:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// No error with missing a type in values.\n\ntype TUser = {\n    email: string;\n    password: string;\n};\n\ntype TProjectManager = {\n    phone: string;\n    email: string;\n    password: string;\n}\n\ntype ActiveUserIds = "3xamp1eUSERIdSTOR3DinAdb" | "another3xamp1eUSERIdSTOR3DinAdb" | "yetAnother3xamp1eUSERIdSTOR3DinAdb";\n\nconst user: Record<ActiveUserIds, TUser | TProjectManager> = {\n    "3xamp1eUSERIdSTOR3DinAdb": {\n        email: "example@example.com",\n        password: "12345678",\n    },\n     "another3xamp1eUSERIdSTOR3DinAdb": {\n        email: "another_example@example.com",\n        password: "12345678",\n    },\n     "yetAnother3xamp1eUSERIdSTOR3DinAdb": {\n        email: "yetAnother_example@example.com",\n        password: "12345678",\n    },\n};\n')),(0,a.kt)("h3",{id:"other-quirks"},"Other Quirks"),(0,a.kt)("p",null,"Among other quirks are the types allowed for keys and values."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Allowed Types for Keys")),(0,a.kt)("p",null,"The types for ",(0,a.kt)("inlineCode",{parentName:"p"},"Keys")," can only be ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"symbol"),". Types other than these throw ",(0,a.kt)("inlineCode",{parentName:"p"},"2344")," error at definition:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type numberedUser = Record<number, TUser>;\ntype stringUser = Record<string, TUser>;\ntype symbolUser = Record<symbol, TUser>;\n\ntype booleanUser = Record<boolean, TUser>; // Type 'boolean' does not satisfy the constraint 'string | number | symbol'.(2344)\ntype booleanUser = Record<object, TUser>; // Type 'object' does not satisfy the constraint 'string | number | symbol'.(2344)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Allowed Types for Values")),(0,a.kt)("p",null,"Types for values can be of any type. ",(0,a.kt)("inlineCode",{parentName:"p"},"object"),"s and function types are common. This means, they can also be React components. Below, we see a React example."),(0,a.kt)("h2",{id:"using-typescript-record-with-react-components"},"Using TypeScript ",(0,a.kt)("inlineCode",{parentName:"h2"},"Record<>")," with React Components"),(0,a.kt)("p",null,"Now, we'll consider a more elaborate usage of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Record<>")," type using React components."),(0,a.kt)("p",null,"Let's say our user has permission to a few types of accounts, namely: ",(0,a.kt)("inlineCode",{parentName:"p"},"ProjectManager"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Recruiter"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Employer"),". Each of these memberships has a dashboard page and we want to render a preview of each dashboard page somewhere inside a main dash page."),(0,a.kt)("p",null,"We can type the permissions and then define a ",(0,a.kt)("inlineCode",{parentName:"p"},"Record<>")," type with values as ",(0,a.kt)("inlineCode",{parentName:"p"},"JSX.Element")," like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'type TPermissions = "ProjectManager" | "Recruiter" | "Employer";\n\ntype TDashBoardPreview = Record<TPermissions, JSX.Element>;\n\nconst dashboardPreviews: TDashboardPreview = {\n    "ProjectManager": <DashboardPreview type="ProjectManager" size="thumbnail" />,\n    "Recruiter": <DashboardPreview type="Recruiter" size="thumbnail" />,\n    "Employer": <DashboardPreview type="Employer" size="thumbnail" />,\n};\n')),(0,a.kt)("p",null,"We can then use the map inside main dash page."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"In this post we explored how to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Record<>")," type in TypeScript to construct stable types that are error-prone and more maintainable. We saw how the derived type is a hash map based on a type that represents the actual shape of the data. It also accepts and assigns types to member keys of the map, which can be restricted by using a union type. We have seen an example of using ",(0,a.kt)("inlineCode",{parentName:"p"},"Record<>")," to type ",(0,a.kt)("inlineCode",{parentName:"p"},"users")," data for an API endpoint as well as one example that uses ",(0,a.kt)("inlineCode",{parentName:"p"},"Record<>")," type for rendering React components."))}u.isMDXComponent=!0}}]);