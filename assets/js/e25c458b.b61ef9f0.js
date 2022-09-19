"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[584],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},749:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],u={},c="1.X to 2.X",l={unversionedId:"reference/update",id:"reference/update",title:"1.X to 2.X",description:"To prevent any data corruption, it is advised that the server is shutdown before continuing.",source:"@site/docs/reference/update.md",sourceDirName:"reference",slug:"/reference/update",permalink:"/docs/reference/update",draft:!1,editUrl:"https://github.com/Hazebyte/CrateReloaded/tree/dev/docs/reference/update.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"FAQ",permalink:"/docs/reference/faq"},next:{title:"API (For Developers)",permalink:"/docs/category/api-for-developers"}},p={},s=[{value:"Update",id:"update",level:2}],d={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1x-to-2x"},"1.X to 2.X"),(0,a.kt)("p",null,"To prevent any data corruption, it is advised that the server is shutdown before continuing.\nThis guide should be attempted on a backup server before on your production server. You may\nalso attempt this on a backup server then copy the plugin files over."),(0,a.kt)("p",null,"!> It is recommended that you perform this upgrade on the same Bukkit server version. If\nyou previously ran CrateReloaded on Bukkit 1.12, you should perform this conversion\non Bukkit 1.12 -- not 1.13 or otherwise."),(0,a.kt)("h2",{id:"update"},"Update"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the latest file from the respective page.\n",(0,a.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/resources/.3663/"},"[Premium]"),(0,a.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/resources/.861/"},"[Free]")),(0,a.kt)("li",{parentName:"ol"},"Put ",(0,a.kt)("inlineCode",{parentName:"li"},"CrateReloaded.jar")," into ",(0,a.kt)("inlineCode",{parentName:"li"},"/plugins/"),"."),(0,a.kt)("li",{parentName:"ol"},"Start your server ",(0,a.kt)("inlineCode",{parentName:"li"},"java -jar spigot.jar"),"."),(0,a.kt)("li",{parentName:"ol"},"The plugin will automatically backup and convert your crate files.")),(0,a.kt)("p",null,"?> Data such as crate/npc locations, default config settings, and language files will not be\nautomatically converted but backed up in the root server directory."))}f.isMDXComponent=!0}}]);