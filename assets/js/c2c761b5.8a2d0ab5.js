"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41509],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>l});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={title:"<AutoSaveIndicator />",description:"<AutoSaveIndicator> component shows `autoSave` status on edit actions.",source:"packages/chakra-ui/src/components/autoSaveIndicator/index.tsx"},s=void 0,u={unversionedId:"ui-integrations/chakra-ui/components/auto-save-indicator/index",id:"ui-integrations/chakra-ui/components/auto-save-indicator/index",title:"<AutoSaveIndicator />",description:"<AutoSaveIndicator> component shows `autoSave` status on edit actions.",source:"@site/docs/ui-integrations/chakra-ui/components/auto-save-indicator/index.md",sourceDirName:"ui-integrations/chakra-ui/components/auto-save-indicator",slug:"/ui-integrations/chakra-ui/components/auto-save-indicator/",permalink:"/docs/ui-integrations/chakra-ui/components/auto-save-indicator/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/chakra-ui/components/auto-save-indicator/index.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1710247743,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{title:"<AutoSaveIndicator />",description:"<AutoSaveIndicator> component shows `autoSave` status on edit actions.",source:"packages/chakra-ui/src/components/autoSaveIndicator/index.tsx"},sidebar:"mainSidebar",previous:{title:"Breadcrumb",permalink:"/docs/ui-integrations/chakra-ui/components/breadcrumb/"},next:{title:"Inferencer",permalink:"/docs/ui-integrations/chakra-ui/components/inferencer/"}},p={},l=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=d("DocThumbsUpDownFeedbackWidget"),f=d("PropsTable"),v={toc:l};function b(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},v,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<AutoSaveIndicator>")," component from Refine for ",(0,r.kt)("strong",{parentName:"p"},"Chakra UI")," can be used to communicate auto-save status to the user."),(0,r.kt)("admonition",{title:"Good to know",type:"simple"},(0,r.kt)("p",{parentName:"admonition"},"This component is an extended version of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/components/auto-save-indicator"},(0,r.kt)("inlineCode",{parentName:"a"},"<AutoSaveIndicator>"))," component from Refine's core package. It provides a set of elements which align with Chakra UI's components and styling.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)("p",null,"Simple usage is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { AutoSaveIndicator, useForm } from "@refinedev/chakra-ui";\n\nconst MyComponent = () => {\n  const {\n    refineCore: { autoSaveProps },\n  } = useForm({\n    refineCoreProps: {\n      autoSave: {\n        enabled: true,\n      },\n    },\n  });\n\n  console.log(autoSaveProps);\n  /*\n    {\n      status: "success",  // "loading" | "error" | "idle" | "success"\n      error: null,        // HttpError | null\n      data: { ... },      // UpdateResponse | undefined,\n    }\n  */\n\n  return <AutoSaveIndicator {...autoSaveProps} />;\n};\n'))),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)(m,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)(f,{module:"@refinedev/chakra-ui/AutoSaveIndicator",mdxType:"PropsTable"})))}b.isMDXComponent=!0}}]);