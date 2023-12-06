"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[20529],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,k=m["".concat(l,".").concat(c)]||m[c]||p[c]||o;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58836:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});a(67294);var n=a(3905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={title:"useCustomMutation",siderbar_label:"useCustomMutation",source:"packages/core/src/hooks/data/useCustomMutation.ts"},l=void 0,u={unversionedId:"core/hooks/data/use-custom-mutation/index",id:"core/hooks/data/use-custom-mutation/index",title:"useCustomMutation",description:"useCustomMutation is used when sending custom mutation requests using the TanStack Query advantages. It is an extended version of TanStack Query's useMutation and not only supports all features of the mutation but also adds some extra features.",source:"@site/docs/core/hooks/data/use-custom-mutation/index.md",sourceDirName:"core/hooks/data/use-custom-mutation",slug:"/core/hooks/data/use-custom-mutation/",permalink:"/docs/core/hooks/data/use-custom-mutation/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/core/hooks/data/use-custom-mutation/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1701851526,formattedLastUpdatedAt:"Dec 6, 2023",frontMatter:{title:"useCustomMutation",siderbar_label:"useCustomMutation",source:"packages/core/src/hooks/data/useCustomMutation.ts"},sidebar:"mainSidebar",previous:{title:"useCustom",permalink:"/docs/core/hooks/data/use-custom/"},next:{title:"useInvalidate",permalink:"/docs/core/hooks/data/use-invalidate/"}},d={},p=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>mutationOptions</code>",id:"mutationoptions",level:3},{value:"Mutation Parameters",id:"mutation-parameters",level:2},{value:"<code>url</code> <PropTag required />",id:"url-",level:3},{value:"<code>method</code> <PropTag required />",id:"method-",level:3},{value:"<code>values</code> <PropTag required />",id:"values-",level:3},{value:"<code>config.headers</code>",id:"configheaders",level:3},{value:"<code>successNotification</code>",id:"successnotification",level:3},{value:"<code>errorNotification</code>",id:"errornotification",level:3},{value:"<code>meta</code>",id:"meta",level:3},{value:"<code>dataProviderName</code>",id:"dataprovidername",level:3},{value:"<code>overtimeOptions</code>",id:"overtimeoptions",level:3},{value:"Return Values",id:"return-values",level:2},{value:"Additional Values",id:"additional-values",level:3},{value:"<code>overtime</code>",id:"overtime",level:4},{value:"API",id:"api",level:2},{value:"Mutation Parameters",id:"mutation-parameters-1",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return value",id:"return-value",level:3}],m=(c="PropTag",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var c;const k={toc:p};function h(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},k,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useCustomMutation")," is used when sending custom mutation requests using the TanStack Query advantages. It is an extended version of TanStack Query's ",(0,n.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},(0,n.kt)("inlineCode",{parentName:"a"},"useMutation"))," and not only supports all features of the mutation but also adds some extra features."),(0,n.kt)("p",null,"It uses the ",(0,n.kt)("inlineCode",{parentName:"p"},"custom")," method as the ",(0,n.kt)("strong",{parentName:"p"},"mutation function")," from the ",(0,n.kt)("a",{parentName:"p",href:"/docs/core/providers/data-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"dataProvider"))," which is passed to ",(0,n.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,n.kt)("admonition",{title:"attention",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"useCustomMutation")," should ",(0,n.kt)("strong",{parentName:"p"},"not")," be used when creating, updating, or deleting a resource. Following hooks should be used for these instead: ",(0,n.kt)("a",{parentName:"p",href:"/docs/core/hooks/data/use-create"},"useCreate"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/core/hooks/data/use-update"},"useUpdate")," or ",(0,n.kt)("a",{parentName:"p",href:"/docs/core/hooks/data/use-delete"},"useDelete"),"."),(0,n.kt)("p",{parentName:"admonition"},"This is because ",(0,n.kt)("inlineCode",{parentName:"p"},"useCustomMutation"),", unlike other data hooks, does not ",(0,n.kt)("a",{parentName:"p",href:"https://tanstack.com/query/latest/docs/react/guides/query-invalidation"},"invalidate queries")," and therefore will not update the application state either."),(0,n.kt)("p",{parentName:"admonition"},"If you need to custom query request, use the ",(0,n.kt)("a",{parentName:"p",href:"/docs/core/hooks/data/use-custom"},"useCustom")," hook.")),(0,n.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"useCustomMutation")," hook returns many useful properties and methods. One of them is the ",(0,n.kt)("inlineCode",{parentName:"p"},"mutate")," method which expects ",(0,n.kt)("inlineCode",{parentName:"p"},"values"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"method"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"url")," as parameters. These parameters will be passed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider")," as parameters."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useCustomMutation, useApiUrl } from "@refinedev/core";\n\ninterface ICategory {\n  id: number;\n  title: string;\n}\n\nconst apiUrl = useApiUrl();\n\nconst { mutate } = useCustomMutation<ICategory>();\n\nmutate({\n  url: `${API_URL}/categories`,\n  method: "post",\n  values: {\n    title: "New Category",\n  },\n});\n')),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"mutationoptions"},(0,n.kt)("inlineCode",{parentName:"h3"},"mutationOptions")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"mutationOptions")," is used to pass options to the ",(0,n.kt)("inlineCode",{parentName:"p"},"useMutation")," hook. It is useful when you want to pass additional options to the ",(0,n.kt)("inlineCode",{parentName:"p"},"useMutation")," hook."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},(0,n.kt)("inlineCode",{parentName:"a"},"useMutation")," documentation ","\u2192"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"useCustomMutation({\n  mutationOptions: {\n    retry: 3,\n  },\n});\n")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"mutationOptions")," does not support ",(0,n.kt)("inlineCode",{parentName:"p"},"onSuccess")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"onError")," props because they override the default ",(0,n.kt)("inlineCode",{parentName:"p"},"onSuccess")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"onError")," functions. If you want to use these props, you can pass them to mutate functions like this:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCustomMutation();\n\nmutate(\n  {\n    url: `${API_URL}/categories`,\n    method: "post",\n    values: {\n      title: "New Category",\n    },\n  },\n  {\n    onError: (error, variables, context) => {\n      // An error occurred!\n    },\n    onSuccess: (data, variables, context) => {\n      // Let\'s celebrate!\n    },\n  },\n);\n'))),(0,n.kt)("h2",{id:"mutation-parameters"},"Mutation Parameters"),(0,n.kt)("h3",{id:"url-"},(0,n.kt)("inlineCode",{parentName:"h3"},"url")," ",(0,n.kt)(m,{required:!0,mdxType:"PropTag"})),(0,n.kt)("p",null,"It will be passed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is usually used to specify the endpoint of the request."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCustomMutation();\n\nmutate({\n  url: "www.example.com/api/update-products",\n});\n')),(0,n.kt)("h3",{id:"method-"},(0,n.kt)("inlineCode",{parentName:"h3"},"method")," ",(0,n.kt)(m,{required:!0,mdxType:"PropTag"})),(0,n.kt)("p",null,"It will be passed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is usually used to specify the HTTP method of the request."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCustomMutation();\n\nmutate({\n  method: "post",\n});\n')),(0,n.kt)("h3",{id:"values-"},(0,n.kt)("inlineCode",{parentName:"h3"},"values")," ",(0,n.kt)(m,{required:!0,mdxType:"PropTag"})),(0,n.kt)("p",null,"It will be passed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. The parameter is usually used as the data to be sent with the request."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCustomMutation();\n\nmutate({\n  values: {\n    name: "New Category",\n    description: "New Category Description",\n  },\n});\n')),(0,n.kt)("h3",{id:"configheaders"},(0,n.kt)("inlineCode",{parentName:"h3"},"config.headers")),(0,n.kt)("p",null,"It will be passed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It can be used to specify the headers of the request."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCustomMutation();\n\nmutate({\n  config: {\n    headers: {\n      "x-custom-header": "foo-bar",\n    },\n  },\n});\n')),(0,n.kt)("h3",{id:"successnotification"},(0,n.kt)("inlineCode",{parentName:"h3"},"successNotification")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"/docs/core/providers/notification-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,n.kt)("p",null,"This prop allows you to customize the success notification that shows up when the data is fetched successfully and ",(0,n.kt)("inlineCode",{parentName:"p"},"useCustomMutation")," calls the ",(0,n.kt)("inlineCode",{parentName:"p"},"open")," function from ",(0,n.kt)("inlineCode",{parentName:"p"},"NotificationProvider"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCustomMutation();\n\nmutate({\n  successNotification: (data, values) => {\n    return {\n      message: `${data.title} Successfully fetched.`,\n      description: "Success with no errors",\n      type: "success",\n    };\n  },\n});\n')),(0,n.kt)("h3",{id:"errornotification"},(0,n.kt)("inlineCode",{parentName:"h3"},"errorNotification")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"/docs/core/providers/notification-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,n.kt)("p",null,"After data fetching is failed, ",(0,n.kt)("inlineCode",{parentName:"p"},"useCustomMutation")," will call ",(0,n.kt)("inlineCode",{parentName:"p"},"open")," function from ",(0,n.kt)("inlineCode",{parentName:"p"},"NotificationProvider")," to show an error notification. With this prop, you can customize the error notification."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCustomMutation();\n\nmutate({\n  errorNotification: (data, values) => {\n    return {\n      message: `Something went wrong when getting ${data.id}`,\n      description: "Error",\n      type: "error",\n    };\n  },\n});\n')),(0,n.kt)("h3",{id:"meta"},(0,n.kt)("inlineCode",{parentName:"h3"},"meta")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"meta")," is a special property that can be used to pass additional information to data provider methods for the following purposes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Customizing the data provider methods for specific use cases."),(0,n.kt)("li",{parentName:"ul"},"Generating GraphQL queries using plain JavaScript Objects (JSON).")),(0,n.kt)("p",null,"In the following example, ",(0,n.kt)("inlineCode",{parentName:"p"},"meta")," is passed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCustomMutation();\n\nmutate({\n  meta: {\n    foo: "bar",\n  },\n});\n\nconst myDataProvider = {\n  //...\n  custom: async ({ url, method, sort, filters, payload, query, headers, meta }) => {\n    const foo = meta?.foo;\n\n    console.log(foo); // "bar"\n\n    //...\n  },\n  //...\n};\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/guides-concepts/general-concepts/#meta-concept"},(0,n.kt)("inlineCode",{parentName:"a"},"meta")," section of the General Concepts documentation","\u2192"))),(0,n.kt)("h3",{id:"dataprovidername"},(0,n.kt)("inlineCode",{parentName:"h3"},"dataProviderName")),(0,n.kt)("p",null,"If there is more than one ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider"),", you can specify which one to use by passing the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProviderName")," prop. It is useful when you have a different data provider for different resources."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCustomMutation();\n\nmutate({\n  dataProviderName: "second-data-provider",\n});\n')),(0,n.kt)("h3",{id:"overtimeoptions"},(0,n.kt)("inlineCode",{parentName:"h3"},"overtimeOptions")),(0,n.kt)("p",null,"If you want loading overtime for the request, you can pass the ",(0,n.kt)("inlineCode",{parentName:"p"},"overtimeOptions")," prop to the this hook. It is useful when you want to show a loading indicator when the request takes too long.\n",(0,n.kt)("inlineCode",{parentName:"p"},"interval")," is the time interval in milliseconds. ",(0,n.kt)("inlineCode",{parentName:"p"},"onInterval")," is the function that will be called on each interval."),(0,n.kt)("p",null,"Return ",(0,n.kt)("inlineCode",{parentName:"p"},"overtime")," object from this hook. ",(0,n.kt)("inlineCode",{parentName:"p"},"elapsedTime")," is the elapsed time in milliseconds. It becomes ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," when the request is completed."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"const { overtime } = useCustomMutation({\n  //...\n  overtimeOptions: {\n    interval: 1000,\n    onInterval(elapsedInterval) {\n      console.log(elapsedInterval);\n    },\n  },\n});\n\nconsole.log(overtime.elapsedTime); // undefined, 1000, 2000, 3000 4000, ...\n\n// You can use it like this:\n{\n  elapsedTime >= 4000 && <div>this takes a bit longer than expected</div>;\n}\n")),(0,n.kt)("h2",{id:"return-values"},"Return Values"),(0,n.kt)("p",null,"Returns an object with TanStack Query's ",(0,n.kt)("inlineCode",{parentName:"p"},"useMutation")," return values."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},"Refer to the ",(0,n.kt)("inlineCode",{parentName:"a"},"useMutation")," documentation for more information ","\u2192")),(0,n.kt)("h3",{id:"additional-values"},"Additional Values"),(0,n.kt)("h4",{id:"overtime"},(0,n.kt)("inlineCode",{parentName:"h4"},"overtime")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"overtime")," object is returned from this hook. ",(0,n.kt)("inlineCode",{parentName:"p"},"elapsedTime")," is the elapsed time in milliseconds. It becomes ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," when the request is completed."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"const { overtime } = useCustomMutation();\n\nconsole.log(overtime.elapsedTime); // undefined, 1000, 2000, 3000 4000, ...\n")),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("h3",{id:"mutation-parameters-1"},"Mutation Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"url ",(0,n.kt)("div",{className:"required"},"Required")),(0,n.kt)("td",{parentName:"tr",align:null},"URL"),(0,n.kt)("td",{parentName:"tr",align:null},"string")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"method ",(0,n.kt)("div",{className:"required"},"Required")),(0,n.kt)("td",{parentName:"tr",align:null},"Method"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"post"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"put"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"patch"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"delete"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"values ",(0,n.kt)("div",{className:" required"},"Required")),(0,n.kt)("td",{parentName:"tr",align:null},"Values for mutation function"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"TVariables"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"config"),(0,n.kt)("td",{parentName:"tr",align:null},"The config of your request. You can send ",(0,n.kt)("inlineCode",{parentName:"td"},"headers")," using this field."),(0,n.kt)("td",{parentName:"tr",align:null},"{ headers?: {}; }")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"successNotification"),(0,n.kt)("td",{parentName:"tr",align:null},"Successful mutation notification"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/core/interface-references#successerrornotification"},(0,n.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errorNotification"),(0,n.kt)("td",{parentName:"tr",align:null},"Unsuccessful mutation notification"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/core/interface-references#successerrornotification"},(0,n.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"meta"),(0,n.kt)("td",{parentName:"tr",align:null},"Meta data query for ",(0,n.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/core/interface-references#metadataquery"},(0,n.kt)("inlineCode",{parentName:"a"},"MetaDataQuery")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"dataProviderName"),(0,n.kt)("td",{parentName:"tr",align:null},"If there is more than one ",(0,n.kt)("inlineCode",{parentName:"td"},"dataProvider"),", you should use the ",(0,n.kt)("inlineCode",{parentName:"td"},"dataProviderName")," that you will use."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))))),(0,n.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TData"),(0,n.kt)("td",{parentName:"tr",align:null},"Result data of the query. Extends ",(0,n.kt)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TError"),(0,n.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,n.kt)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,n.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,n.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,n.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TQuery"),(0,n.kt)("td",{parentName:"tr",align:null},"Values for query params."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"TQuery")),(0,n.kt)("td",{parentName:"tr",align:null},"unknown")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TPayload"),(0,n.kt)("td",{parentName:"tr",align:null},"Values for params."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"TPayload")),(0,n.kt)("td",{parentName:"tr",align:null},"unknown")))),(0,n.kt)("h3",{id:"return-value"},"Return value"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Result of the TanStack Query's useMutation"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},(0,n.kt)("inlineCode",{parentName:"a"},"UseMutationResult<{ data: TData }, TError, { resource: string; values: TVariables; }, unknown>")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"overtime"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"{ elapsedTime?: number }"))))))}h.isMDXComponent=!0}}]);