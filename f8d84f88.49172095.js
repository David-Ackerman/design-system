(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),b=i,f=p["".concat(o,".").concat(b)]||p[b]||u[b]||a;return n?r.a.createElement(f,c(c({ref:t},l),{},{components:n})):r.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var i=n(2),r=n(6),a=(n(0),n(104)),o={title:"Principles"},c={unversionedId:"principles",id:"principles",isDocsHomePage:!1,title:"Principles",description:"This page is incomplete and may see significant changes.",source:"@site/docs/principles.md",permalink:"/design-system/docs/principles",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/principles.md",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1596779093,sidebar:"docs",previous:{title:"Introduction",permalink:"/design-system/docs/"},next:{title:"Getting started",permalink:"/design-system/docs/getting-started"}},s=[{value:"Accessibility first",id:"accessibility-first",children:[]},{value:"Content focused",id:"content-focused",children:[]},{value:"Sensible defaults",id:"sensible-defaults",children:[]},{value:"Modular and loosely coupled",id:"modular-and-loosely-coupled",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Work in progress")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"This page is incomplete and may see significant changes.\nPlease ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/wwnorton/design-system/issues"}),"submit feedback on GitHub"),"\nif you would like to contribute."))),Object(a.b)("h2",{id:"accessibility-first"},"Accessibility first"),Object(a.b)("p",null,"Accessibility is never an afterthought","\u2014","it is a driving force in all of the\nchoices that go into the design system. Inspired by mobile-first design, this\naccessibility-first approach defines the information architecture and interaction\ndesigns needs for assistive technology before designing for any other modalities."),Object(a.b)("h2",{id:"content-focused"},"Content focused"),Object(a.b)("h2",{id:"sensible-defaults"},"Sensible defaults"),Object(a.b)("h2",{id:"modular-and-loosely-coupled"},"Modular and loosely coupled"))}d.isMDXComponent=!0}}]);