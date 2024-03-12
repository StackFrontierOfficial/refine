"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[96703],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>c});var i=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,i,a=function(e,t){if(null==e)return{};var o,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=i.createContext({}),h=function(e){var t=i.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=h(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=h(o),c=a,d=g["".concat(l,".").concat(c)]||g[c]||p[c]||n;return o?i.createElement(d,r(r({ref:t},u),{},{components:o})):i.createElement(d,r({ref:t},u))}));function c(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,r=new Array(n);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var h=2;h<n;h++)r[h]=o[h];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}g.displayName="MDXCreateElement"},36313:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>h,toc:()=>p});o(67294);var i=o(3905);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})),e}function r(e,t){if(null==e)return{};var o,i,a=function(e,t){if(null==e)return{};var o,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}const s={title:"Using Google Lighthouse to improve app performance",description:"Learn how to use the Google Chrome Lighthouse performance audit tool to identify and improve problems with your app.",slug:"lighthouse-google-chrome",authors:"joseph_mawa",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-31-google-lighthouse/social.png",hide_table_of_contents:!1},l=void 0,h={permalink:"/blog/lighthouse-google-chrome",source:"@site/blog/2022-08-31-google-lighthouse.md",title:"Using Google Lighthouse to improve app performance",description:"Learn how to use the Google Chrome Lighthouse performance audit tool to identify and improve problems with your app.",date:"2022-08-31T00:00:00.000Z",formattedDate:"August 31, 2022",tags:[{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:14.605,hasTruncateMarker:!0,authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],frontMatter:{title:"Using Google Lighthouse to improve app performance",description:"Learn how to use the Google Chrome Lighthouse performance audit tool to identify and improve problems with your app.",slug:"lighthouse-google-chrome",authors:"joseph_mawa",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-31-google-lighthouse/social.png",hide_table_of_contents:!1},prevItem:{title:"Framer Motion examples for React animations",permalink:"/blog/framer-motion-react-animations"},nextItem:{title:"CSS Grid vs Flexbox - A brief guide",permalink:"/blog/css-grid-vs-flexbox"},relatedPosts:[{title:"How to use Zustand",description:"We'll learn how to use Zustand in our React project.",permalink:"/blog/zustand-react-state",formattedDate:"May 18, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:15.585,date:"2023-05-18T00:00:00.000Z"},{title:"Kubernetes CrashLoopBackOff - What is it and how to fix it?",description:"In this article, we will discuss the Kubernetes CrashLoopBackOff error, its causes, and how to fix it.",permalink:"/blog/crashloopbackoff-kubernetes",formattedDate:"November 22, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.76,date:"2023-11-22T00:00:00.000Z"},{title:"How to use Docker Exec command?",description:"We'll go over the Docker exec command syntax, usage as well as some examples.",permalink:"/blog/docker-exec",formattedDate:"August 18, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.995,date:"2023-08-18T00:00:00.000Z"}],authorPosts:[{title:"Building a React Admin Dashboard with Tremor Library",description:"We'll build a simple React admin dashboard using Refine and Tremor.",permalink:"/blog/building-react-admin-dashboard-with-tremor",formattedDate:"July 2, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:23.495,date:"2023-07-02T00:00:00.000Z"},{title:"CSS Box Shadow with 25 Examples",description:"We'll explore the CSS `box-shadow` property.",permalink:"/blog/box-shadow-css",formattedDate:"February 28, 2024",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:18.315,date:"2024-02-28T00:00:00.000Z"},{title:"React Hook Form vs Formik - Comparing the most popular React form libraries",description:"This article will compare React Hook Form and Formik by highlighting their strengths and weaknesses.",permalink:"/blog/react-hook-form-vs-formik",formattedDate:"January 30, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:7.945,date:"2023-01-30T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"What is Google Lighthouse",id:"what-is-google-lighthouse",level:2},{value:"How to use Google lighthouse from Chrome DevTools",id:"how-to-use-google-lighthouse-from-chrome-devtools",level:2},{value:"Step 1 - Navigate to the site you want to audit",id:"step-1---navigate-to-the-site-you-want-to-audit",level:3},{value:"Step 2 - Open Chrome DevTools",id:"step-2---open-chrome-devtools",level:3},{value:"Step 3 - Select categories to audit",id:"step-3---select-categories-to-audit",level:3},{value:"Step 4 - Run the audit",id:"step-4---run-the-audit",level:3},{value:"Step 5 - Interpret the audit results",id:"step-5---interpret-the-audit-results",level:3},{value:"Best practices",id:"best-practices",level:4},{value:"Performance",id:"performance",level:4},{value:"Accessibility",id:"accessibility",level:4},{value:"Progressive Web Apps",id:"progressive-web-apps",level:4},{value:"Search Engine Optimization",id:"search-engine-optimization",level:4},{value:"How to use Google lighthouse Node CLI",id:"how-to-use-google-lighthouse-node-cli",level:2},{value:"How to use Google lighthouse Node module",id:"how-to-use-google-lighthouse-node-module",level:2},{value:"How to use Google Lighthouse Chrome browser extension",id:"how-to-use-google-lighthouse-chrome-browser-extension",level:2},{value:"Step 1 - Navigate to the website you want to audit",id:"step-1---navigate-to-the-website-you-want-to-audit",level:3},{value:"Step 2 - Open the extension popup",id:"step-2---open-the-extension-popup",level:3},{value:"Step 3 - Select the categories to audit",id:"step-3---select-the-categories-to-audit",level:3},{value:"Step 4 - Generate report",id:"step-4---generate-report",level:3},{value:"How to use Google lighthouse for auditing progressive web apps",id:"how-to-use-google-lighthouse-for-auditing-progressive-web-apps",level:2},{value:"How to view Google lighthouse report",id:"how-to-view-google-lighthouse-report",level:2},{value:"How to add Google lighthouse to a CI workflow",id:"how-to-add-google-lighthouse-to-a-ci-workflow",level:2},{value:"Step 1 - Create GitHub Actions workflow directory",id:"step-1---create-github-actions-workflow-directory",level:3},{value:"Step 2 - Create GitHub Actions workflow file",id:"step-2---create-github-actions-workflow-file",level:3},{value:"Step 3 - Push the changes to GitHub",id:"step-3---push-the-changes-to-github",level:3},{value:"Conclusion",id:"conclusion",level:2}],g={toc:p};function c(e){var{components:t}=e,o=r(e,["components"]);return(0,i.kt)("wrapper",n(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},i=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),i.forEach((function(t){a(e,t,o[t])}))}return e}({},g,o),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"As websites and web applications become more complex, it is necessary to measure and track their overall quality to provide a seamless browsing experience to your clients. Though several other tools exist for this purpose, Google lighthouse is quite popular among web developers mainly because it is part of the Chrome DevTools."),(0,i.kt)("p",null,"If it doesn't meet your needs as part of Chrome DevTools, Google lighthouse is also readily available as a Node package or command line utility. You can use it for auditing a website for performance, best practices, accessibility, progressive web app (PWA), and search engine optimization(SEO)."),(0,i.kt)("p",null,"You will explore the different ways of using Google Lighthouse in this article. You will also learn how to remedy some of the issues highlighted in the performance measurement and use Google lighthouse in continuous integration(CI) workflow."),(0,i.kt)("p",null,"Step we'll cover:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#what-is-google-lighthouse"},"What is Google Lighthouse")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-use-google-lighthouse-from-chrome-devtools"},"How to use Google lighthouse from Chrome DevTools")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-use-google-lighthouse-node-cli"},"How to use Google lighthouse Node CLI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-use-google-lighthouse-node-module"},"How to use Google lighthouse Node module")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-use-google-lighthouse-chrome-browser-extension"},"How to use Google Lighthouse Chrome browser extension")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-use-google-lighthouse-for-auditing-progressive-web-apps"},"How to use Google lighthouse for auditing progressive web apps")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-view-google-lighthouse-report"},"How to view Google lighthouse report")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-add-google-lighthouse-to-a-ci-workflow"},"How to add Google lighthouse to a CI workflow"))),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Depending on how you intend to use Google lighthouse, you need to have some or all of the following tools."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Node version 14 or higher. ",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Download Node for your system")," if you haven't."),(0,i.kt)("li",{parentName:"ul"},"Chrome browser. ",(0,i.kt)("a",{parentName:"li",href:"https://www.google.com/chrome/"},"Download Chrome for your system")," if you haven't.")),(0,i.kt)("h2",{id:"what-is-google-lighthouse"},"What is Google Lighthouse"),(0,i.kt)("p",null,"Google Lighthouse is an open-source, Apache-licensed tool developed and maintained by Google. It is distributed primarily as part of Chrome DevTools and other Chromium-based browsers like Opera, Brave, and Edge."),(0,i.kt)("p",null,"You can use it for auditing a web page or browser extension primarily for performance, best practices, accessibility, PWA, and SEO. It presents the test results as percentages and goes above and beyond to provide actionable tips on fixing the identified problems in the specified categories."),(0,i.kt)("p",null,"Though the easiest way of using Google lighthouse is via the Chrome DevTools, you can also run it as a chrome extension, command line tool, or an NPM package. The subsequent sections will explain the different ways you can use Google Lighthouse."),(0,i.kt)("h2",{id:"how-to-use-google-lighthouse-from-chrome-devtools"},"How to use Google lighthouse from Chrome DevTools"),(0,i.kt)("p",null,"Most Chromium-based browsers package Google lighthouse as part of their DevTools however, we will focus more on the Chrome DevTools in this article. Using it with other browsers should be similar, with slight variations."),(0,i.kt)("p",null,"Follow the steps below to start using Google lighthouse in Chrome DevTools."),(0,i.kt)("h3",{id:"step-1---navigate-to-the-site-you-want-to-audit"},"Step 1 - Navigate to the site you want to audit"),(0,i.kt)("p",null,"To use Google lighthouse in Chrome DevTools, navigate to the site you want to audit. We will use the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/"},"Refine"),"\xa0landing page for illustration throughout this article."),(0,i.kt)("h3",{id:"step-2---open-chrome-devtools"},"Step 2 - Open Chrome DevTools"),(0,i.kt)("p",null,"You can open Chrome DevTools by pressing the ",(0,i.kt)("kbd",null," F12 ")," key. Click the lighthouse tab after that."),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-31-google-lighthouse/checked-categories.png",alt:"Lighthouse checked"}),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"step-3---select-categories-to-audit"},"Step 3 - Select categories to audit"),(0,i.kt)("p",null,"As pointed out in the introduction section, you can use Google lighthouse for auditing a website for performance, accessibility, best practices, SEO, and PWA. You can select the different categories you want Google lighthouse to audit. If your site won't run as a PWA, it is unnecessary to leave the PWA category checked."),(0,i.kt)("p",null,"Similarly, you can choose whether Google lighthouse should emulate a mobile device or desktop when auditing your site."),(0,i.kt)("h3",{id:"step-4---run-the-audit"},"Step 4 - Run the audit"),(0,i.kt)("p",null,"You can click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Analyze page load")," button to start auditing the website."),(0,i.kt)("h3",{id:"step-5---interpret-the-audit-results"},"Step 5 - Interpret the audit results"),(0,i.kt)("p",null,"After successfully analyzing the page, Google lighthouse will present the lighthouse scores and provide suggestions on where to make improvements. The lighthouse scores for the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/"},"Refine"),"\xa0landing page look like the image below."),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-31-google-lighthouse/scores-all-categories.png",alt:"Lighthouse scores for all categories"}),(0,i.kt)("br",null),(0,i.kt)("p",null,"You can copy and save the audit data in JSON format from the Tools menu."),(0,i.kt)("p",null,"As highlighted above, Google Lighthouse audits a web page for performance, best practices, accessibility, SEO, and PWA while simulating a mobile device or desktop. It presents the score for each category as a percentage. It will go above and beyond to explain why a test in a particular category is passing or failing. Let us have an overview of these categories in the sub-sections below."),(0,i.kt)("h4",{id:"best-practices"},"Best practices"),(0,i.kt)("p",null,"There are certain best practices you need to follow in Front-end development. Some of these best practices include adding ",(0,i.kt)("inlineCode",{parentName:"p"},"doctype")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"HTML")," element, using HTTPS, displaying images with the correct aspect ratio, and serving images with the appropriate resolution. Google Lighthouse will audit your site for some of these best practices and highlight the passing and failing tests."),(0,i.kt)("h4",{id:"performance"},"Performance"),(0,i.kt)("p",null,"Performance measurement is one of the main reasons developers use Google Lighthouse. Google Lighthouse uses the metrics below to estimate the ultimate performance score."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"First Contentful Paint"),"\xa0- Duration, in seconds, it takes to render the first DOM content after navigating to the page."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Time to Interactive"),"\xa0- Amount of time, in seconds, for the page to become fully interactive."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Speed Index"),"\xa0- It is a measure, in seconds, of how quickly content visually displays during page load."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Blocking Time"),"\xa0- Total amount of time, in milliseconds, that a page is incapable of responding to user input like mouse clicks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Largest Contentful Paint"),"\xa0- Time, in seconds, at which the browser paints the largest text or image."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cumulative Layout Shift"),"\xa0- Measures the movement of visible elements within the viewport.")),(0,i.kt)("p",null,"The final score is a weighted average of the individual scores of the above metrics. This score can help you optimize your site so users can see and interact with it. It will also highlight potential opportunities for speeding up the page load. Read the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://web.dev/performance-scoring/"},"documentation"),"\xa0for more insights on the individual metric scores and how Lighthouse calculates the final weighted score."),(0,i.kt)("h4",{id:"accessibility"},"Accessibility"),(0,i.kt)("p",null,"Google Lighthouse can audit your site and highlight accessibility issues like contrast ratio, input labels, and heading elements. However, it can detect only a certain percentage of accessibility issues. You need to go the extra mile and manually check some accessibility issues. A web page can have an accessibility score of 100 percent and still be inaccessible."),(0,i.kt)("h4",{id:"progressive-web-apps"},"Progressive Web Apps"),(0,i.kt)("p",null,"Progressives Webb Apps, better known as PWAs in short, can provide a native experience to your clients. Your PWA must be installable and should serve them from a secure origin. You can use Google lighthouse to test your PWA for some of these basic features and best practices."),(0,i.kt)("h4",{id:"search-engine-optimization"},"Search Engine Optimization"),(0,i.kt)("p",null,"Optimizing a website for Search Engines is inevitable in this day and age. Google Lighthouse can audit your site for SEO. Among other items, it can check whether your site has links with descriptive text and are crawlable. You can then use the test results to increase your search rankings."),(0,i.kt)("p",null,"It is also worth mentioning that newer versions of Google Lighthouse run in three modes (user flows). These modes are the Navigation mode, Time span mode, and Snapshot mode."),(0,i.kt)("p",null,"The Navigation mode analyzes a single page load and is the default. We will use the default mode throughout this article. The Time span mode analyzes for an arbitrary period, usually as the user interacts with the page. On the other hand, the Snapshot mode analyzes the page in a snapshot when the page is in a particular state."),(0,i.kt)("p",null,"Each mode has unique use cases, benefits, and limitations which the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/GoogleChrome/lighthouse/blob/HEAD/docs/user-flows.md#user-flows-in-lighthouse"},"Lighthouse documentation"),"\xa0articulates in great detail. Do check it out. You can select one of the other modes before analyzing if the default doesn't meet your use case."),(0,i.kt)("br",null),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://github.com/refinedev/refine"},(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/github-support-banner.png",alt:"github support banner"}))),(0,i.kt)("h2",{id:"how-to-use-google-lighthouse-node-cli"},"How to use Google lighthouse Node CLI"),(0,i.kt)("p",null,"You have the flexibility of running Google lighthouse as a command line tool. The command line tool requires you to have Node version 14 or higher. If you don't have Node, you can install it for your system from the Node\xa0",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"downloads page"),"."),(0,i.kt)("p",null,"If you have installed Node, you can install lighthouse from the NPM package registry like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# NPM\nnpm install -g lighthouse\n\n# Yarn\nyarn global add lighthouse\n")),(0,i.kt)("p",null,"The code below shows the general syntax for running an audit using the command line tool. The ",(0,i.kt)("inlineCode",{parentName:"p"},"lighthouse")," command requires the URL of the page you want to audit. You can also pass optional arguments to the ",(0,i.kt)("inlineCode",{parentName:"p"},"lighthouse")," command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"lighthouse <url> <options>\n")),(0,i.kt)("p",null,"The Google lighthouse command line tool has comprehensive documentation accessible using the command below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lighthouse --help\n")),(0,i.kt)("p",null,"The command line tool will generate the audit report and write it in an HTML file by default. You can pass optional arguments to the lighthouse command to change the default behavior. The code below will audit the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/"},"Refine landing page"),"\xa0for accessibility and writes the report to a JSON file. You can view the JSON report using the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://googlechrome.github.io/lighthouse/viewer/"},"lighthouse viewer"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"lighthouse https://refine.dev/  --output=json --output-path=./report.json --only-categories=accessibility\n")),(0,i.kt)("p",null,"You can read the documentation for more options to pass to the ",(0,i.kt)("inlineCode",{parentName:"p"},"lighthouse")," command."),(0,i.kt)("h2",{id:"how-to-use-google-lighthouse-node-module"},"How to use Google lighthouse Node module"),(0,i.kt)("p",null,"In addition to running Google Lighthouse as a command line tool, you can also run it programmatically as a Node module. You need to install Lighthouse most likely as a development dependency from the NPM package registry like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# NPM\n\nnpm i -D lighthouse\n\n# Yarn\n\nyarn add --dev lighthouse\n")),(0,i.kt)("p",null,"Ordinarily, when running Lighthouse programmatically, you launch a Chrome instance before running Lighthouse, like in the example below. Below, we are launching a headless Chrome instance using the ",(0,i.kt)("inlineCode",{parentName:"p"},"chrome-launcher")," package. It is a tool for launching Google Chrome with ease from Node. Check the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/GoogleChrome/chrome-launcher#chrome-launcher--"},"documentation"),"\xa0to learn how to use it. After running Lighthouse, you can save the audit data to file and terminate the Chrome instance."),(0,i.kt)("p",null,"For our case, Lighthouse takes the URL of the site you want to audit as its first argument. The first argument is optional if you are running Lighthouse in ",(0,i.kt)("inlineCode",{parentName:"p"},"auditMode"),". The second and third arguments are also optional. If you don't pass them, Lighthouse will use the default."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const fs = require("fs");\nconst chromeLauncher = require("chrome-launcher");\nconst lighthouse = require("lighthouse");\n\nconst launchChromeAndAudit = async (url) => {\n  const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });\n  const result = await lighthouse(url, {\n    output: "json",\n    logLevel: "info",\n    port: chrome.port,\n    onlyCategories: ["accessibility"],\n    screenEmulation: { mobile: true },\n  });\n  fs.writeFileSync(`${Date.now()}-audit-report.json`, result.report);\n  chrome.kill();\n};\n\nlaunchChromeAndAudit("https://refine.dev/");\n')),(0,i.kt)("p",null,"The code above will audit the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/"},"Refine landing page"),"\xa0for accessibility and save the report to a file in JSON format. After that, you can upload the data to the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://googlechrome.github.io/lighthouse/viewer/"},"lighthouse viewer"),"\xa0to view it in the browser. Omitting the ",(0,i.kt)("inlineCode",{parentName:"p"},"onlyCategories")," field will audit the site for all categories."),(0,i.kt)("p",null,"You can also save the audit report as an HTML file by setting the value of the output field to ",(0,i.kt)("inlineCode",{parentName:"p"},"html")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"json"),", as we did in the example above. What I have provided above is a simple example. Check the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/GoogleChrome/lighthouse/blob/master/docs/readme.md#using-programmatically"},"documentation"),"\xa0for more on how to run Google lighthouse programmatically."),(0,i.kt)("h2",{id:"how-to-use-google-lighthouse-chrome-browser-extension"},"How to use Google Lighthouse Chrome browser extension"),(0,i.kt)("p",null,"In addition to being part of the Chrome DevTools, Google lighthouse also comes as a browser extension. The browser extension doesn't allow testing of local sites and authenticated pages. Therefore it is preferable to use Google lighthouse from Chrome DevTools instead of the browser extension."),(0,i.kt)("p",null,"You can install the browser extension from the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk"},"Chrome web store")," if you have a good reason for using it. After installation, follow the steps below to audit any site using the lighthouse browser extension."),(0,i.kt)("h3",{id:"step-1---navigate-to-the-website-you-want-to-audit"},"Step 1 - Navigate to the website you want to audit"),(0,i.kt)("p",null,"Like using Google lighthouse in chrome DevTools, start by navigating to the site you want to audit. For this illustration, navigate to the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/"},"Refine landing page"),"."),(0,i.kt)("h3",{id:"step-2---open-the-extension-popup"},"Step 2 - Open the extension popup"),(0,i.kt)("p",null,"Open the Google lighthouse chrome extension popup by clicking the extension icon in the Chrome toolbar."),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-31-google-lighthouse/chrome-extension-dropdown.png",alt:"Lighthouse extension dropdown"}),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"step-3---select-the-categories-to-audit"},"Step 3 - Select the categories to audit"),(0,i.kt)("p",null,"As pointed out in the introduction section, you can audit a website for performance, accessibility, best practices, SEO, and PWA. In the extension popup, you can click the gear icon to select the categories to audit and the device to emulate."),(0,i.kt)("h3",{id:"step-4---generate-report"},"Step 4 - Generate report"),(0,i.kt)("p",null,'Finally, click the "Generate Report" button to generate the audit report. The report should be similar to what we got after running Google lighthouse from the Chrome DevTools. You can as well save the data in HTML or JSON format.'),(0,i.kt)("h2",{id:"how-to-use-google-lighthouse-for-auditing-progressive-web-apps"},"How to use Google lighthouse for auditing progressive web apps"),(0,i.kt)("p",null,"As pointed out above, Google lighthouse can audit a website for performance, best practices, accessibility, SEO, and PWA. In addition to being installable, Progressive web apps come with several progressively enhanced features. You can use Google lighthouse to validate whether a site is installable or optimized for PWA."),(0,i.kt)("p",null,"If you navigate to the ",(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/"},"Refine landing page")," and use Lighthouse to audit the site for PWA features and best practices, you will get a report similar to the image below. Because ",(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/"},"Refine")," is not a PWA, most of the tests will fail. Google lighthouse will highlight the failing test and provide a link to documentation that explains the feature."),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-31-google-lighthouse/scores-pwa-category.png",alt:"Lighthouse pwa"}),(0,i.kt)("br",null),(0,i.kt)("p",null,"It is worth mentioning that PWAs have several features and best practices to follow. Google lighthouse can audit only a handful of these features. You need to check some of them manually. Google lighthouse will also hint at the items you need to check manually."),(0,i.kt)("h2",{id:"how-to-view-google-lighthouse-report"},"How to view Google lighthouse report"),(0,i.kt)("p",null,"Using Google lighthouse via the Chrome DevTools or the browser extension will generate the report and immediately display it in the browser. Depending on how you use Google lighthouse, you can also save the performance data in HTML or JSON format."),(0,i.kt)("p",null,"View the report by opening the HTML file in the browser or uploading the data in JSON format to the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://googlechrome.github.io/lighthouse/viewer/"},"lighthouse viewer"),". When using\xa0",(0,i.kt)("a",{parentName:"p",href:"https://googlechrome.github.io/lighthouse/viewer/"},"lighthouse viewer"),", it is possible to save the JSON data in a GitHub gist and use the gist URL instead of uploading the data from a storage device."),(0,i.kt)("h2",{id:"how-to-add-google-lighthouse-to-a-ci-workflow"},"How to add Google lighthouse to a CI workflow"),(0,i.kt)("p",null,"If your team uses a continuous integration workflow, you can use the Google lighthouse CI toolset to run Google Lighthouse as part of your workflow. According to the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/GoogleChrome/lighthouse-ci#lighthouse-ci"},"documentation"),", Google lighthouse CI is a suite of tools that simplify running Google lighthouse scores in your CI workflow."),(0,i.kt)("p",null,"Lighthouse CI works with CI providers like Circle CI, GitHub actions, and Travis CI. Follow the steps below to learn how to use it with GitHub actions."),(0,i.kt)("h3",{id:"step-1---create-github-actions-workflow-directory"},"Step 1 - Create GitHub Actions workflow directory"),(0,i.kt)("p",null,"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflow")," directory to store your GitHub workflow files at the root of your project directory to start using GitHub actions."),(0,i.kt)("h3",{id:"step-2---create-github-actions-workflow-file"},"Step 2 - Create GitHub Actions workflow file"),(0,i.kt)("p",null,"Create a YAML workflow file that will contain the code for running Google lighthouse CI when certain events occur. We will run Google lighthouse CI when either ",(0,i.kt)("inlineCode",{parentName:"p"},"push")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"pull_request")," event occurs. Give a descriptive name to the YAML file. I will name it ",(0,i.kt)("inlineCode",{parentName:"p"},"lighthouse.yaml"),"."),(0,i.kt)("p",null,"Copy and paste the code below into the YAML file you have just created. The code runs whenever you push changes to the Git repository or open a pull request. I am taking the simplest case, where you have an HTML file at the root of the project directory. You can modify the workflow file slightly if your project requires a build step."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Run lighthouse CI\n\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  lhci:\n    name: Lighthouse CI\n    runs-on: ubuntu-latest\n\n    strategy:\n      matrix:\n        node-version: [14.x]\n\n    steps:\n      - uses: actions/checkout@v2\n      - name: Use Node.js ${{ matrix.node-version }}\n        uses: actions/setup-node@v1\n        with:\n          node-version: ${{ matrix.node-version }}\n      - name: Run lighthouse CI\n        run: |\n          npm install -g @lhci/cli@0.3.x && lhci autorun --upload.target=temporary-public-storage --collect.staticDistDir=./\n")),(0,i.kt)("p",null,"The above example also assumes you don't have a configuration file at the root of your project directory."),(0,i.kt)("h3",{id:"step-3---push-the-changes-to-github"},"Step 3 - Push the changes to GitHub"),(0,i.kt)("p",null,"The code above will run the Google lighthouse CI when you commit and push the changes to GitHub. Each time someone opens a pull request or pushes a commit, GitHub actions will run the specified command so that you are aware of regressions over time."),(0,i.kt)("p",null,"GitHub is by no means the only CI provider. You can run Google lighthouse with other CI tools like Circle CI and Travis CI. The Google lighthouse CI documentation explains all the supported CI providers."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"You can use Google Lighthouse for auditing a website or application for performance, accessibility, best practices, SEO, and PWA. Depending on your preferences, you can use Chrome DevTools, as a Chrome extension, command line tool, or Node module. Several other Chromium-based browsers like Opera, Edge, and Brave also package Google Lighthouse as part of their DevTools."),(0,i.kt)("p",null,"On the other hand, it is worth mentioning that Google Lighthouse is just a tool. And a tool is only as good as the user. Striving for the highest Google lighthouse scores is commendable but not sufficient. One fine example where the Google lighthouse usually falls short is the accessibility audit. It is common to have an inaccessible site with a perfect Google lighthouse accessibility score."),(0,i.kt)("p",null,"Therefore, you must go above and beyond to test your site with actual users even though you have perfect Google lighthouse accessibility scores. We have covered the introduction to Google Lighthouse in this article. Check the documentation for in-depth guides."),(0,i.kt)("br",null),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://discord.gg/refine"},(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord-banner.png",alt:"discord banner"}))),(0,i.kt)("hr",null))}c.isMDXComponent=!0}}]);