(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(95)),i={id:"sharing-style",title:"Sharing Style",sidebar_label:"Sharing Style"},s={unversionedId:"features/sharing-style",id:"features/sharing-style",isDocsHomePage:!1,title:"Sharing Style",description:"There are a couple of ways to effectly share/extend styles across components.",source:"@site/docs/features/sharing-style.md",slug:"/features/sharing-style",permalink:"/features/sharing-style",editUrl:"https://github.com/cristianbote/goober/edit/master/docs/features/sharing-style.md",version:"current",sidebar_label:"Sharing Style",sidebar:"docs",previous:{title:"Checklist",permalink:"/features/checklist"},next:{title:"Autoprefixer",permalink:"/features/autoprefixer"}},c=[{value:"Extending",id:"extending",children:[]},{value:"Using <code>as</code> prop",id:"using-as-prop",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are a couple of ways to effectly share/extend styles across components."),Object(o.b)("h2",{id:"extending"},"Extending"),Object(o.b)("p",null,"One can simply extend the desired component that needs to be enrich or overwriten with another set of css rules."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import { styled } from "goober";\n\n// Let\'s declare a primitive for our styled component\nconst Primitive = styled("span")`\n  margin: 0;\n  padding: 0;\n`;\n\n// Later on we could get the primitive shared styles and also add our owns\nconst Container = styled(Primitive)`\n  padding: 1em;\n`;\n')),Object(o.b)("h2",{id:"using-as-prop"},"Using ",Object(o.b)("inlineCode",{parentName:"h2"},"as")," prop"),Object(o.b)("p",null,"Another helpful way to extend a certain component is with the ",Object(o.b)("inlineCode",{parentName:"p"},"as")," property. Given our example above we could modify it like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { styled } from 'goober';\n\n// Our primitive element\nconst Primitive = styled('span')`\n    margin: 0;\n    padding: 0;\n`;\n\nconst Container = styled('div')`\n    padding: 1em;\n`;\n\n// At composition/render time\n<Primitive as={'div'} /> // <div class=\"go01234\" />\n\n// Or using the `Container`\n<Primitive as={Container} /> // <div class=\"go01234 go56789\" />\n")))}p.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);