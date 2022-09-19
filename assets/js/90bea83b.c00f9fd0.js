"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[362],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="Configuration",c={unversionedId:"config/config",id:"config/config",title:"Configuration",description:"config.yml*",source:"@site/docs/config/config.md",sourceDirName:"config",slug:"/config/",permalink:"/docs/config/",draft:!1,editUrl:"https://github.com/Hazebyte/crate.hazebyte.com/edit/main/docs/config/config.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Customization",permalink:"/docs/category/customization"},next:{title:"Configuration",permalink:"/docs/config/crate"}},l={},p=[{value:"Custom Variables (Premium)",id:"custom-variables-premium",level:2},{value:"Example",id:"example",level:3},{value:"Template",id:"template",level:2}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/docs/config/"},"config.yml"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/config/crate"},"crate.yml"))),(0,a.kt)("h2",{id:"custom-variables-premium"},"Custom Variables (Premium)"),(0,a.kt)("p",null,"As of v2.0.35, CrateReloaded provides a way to have custom variables that directly applies to the crate. This provides a way to reduce redundancy and allow a single source of truth when applying changes."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"config.yml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"custom-variables:\n    '{sword_enchant}': 'sharpness:1 knockback:1'\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"crate.yml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  rewards:\n    - 'item:(diamond_sword 1 {sword_enchant}), chance:(1)`\n")),(0,a.kt)("p",null,"With the custom variable ",(0,a.kt)("inlineCode",{parentName:"p"},"{sword_enchant}")," in defined in config.yml and used in crate.yml, this will give the player a diamond sword with enchantments. See more in ",(0,a.kt)("a",{parentName:"p",href:"/docs/config/crate"},"crate.yml")," to learn how to customize crates."),(0,a.kt)("h2",{id:"template"},"Template"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"%CONFIG\n")))}m.isMDXComponent=!0}}]);