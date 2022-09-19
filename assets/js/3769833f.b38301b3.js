"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[434],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(a),c=r,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||l;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5178:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={},i="Configuration",o={unversionedId:"config/crate",id:"config/crate",title:"Configuration",description:"This page will explain each section key of the default crate.yml.",source:"@site/docs/config/crate.md",sourceDirName:"config",slug:"/config/crate",permalink:"/docs/config/crate",draft:!1,editUrl:"https://github.com/Hazebyte/crate.hazebyte.com/edit/main/docs/config/crate.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/config/"},next:{title:"NPC Crates",permalink:"/docs/config/npc"}},p={},s=[{value:"Features",id:"features",level:2},{value:"Crate Types",id:"crate-types",level:3},{value:"The Physical Crate or Key",id:"the-physical-crate-or-key",level:3},{value:"Animations",id:"animations",level:3},{value:"Crate Hologram",id:"crate-hologram",level:3},{value:"Confirmation",id:"confirmation",level:3},{value:"Preview",id:"preview",level:3},{value:"Item Parser",id:"item-parser",level:3},{value:"Examples",id:"examples",level:4},{value:"Effects",id:"effects",level:3},{value:"Rewards",id:"rewards",level:3},{value:"Tag",id:"tag",level:4},{value:"Items",id:"items",level:5},{value:"Commands",id:"commands",level:5},{value:"Chance",id:"chance",level:5},{value:"How does the chance system work?",id:"how-does-the-chance-system-work",level:6},{value:"Permission",id:"permission",level:5},{value:"Fallback Rewards",id:"fallback-rewards",level:6},{value:"Unique",id:"unique",level:5},{value:"Always",id:"always",level:5}],m={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"This page will explain each section key of the default crate.yml."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/config/"},"config.yml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/config/crate"},"crate.yml")))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unlimited crates and rewards"),(0,r.kt)("li",{parentName:"ul"},"Multi-world support"),(0,r.kt)("li",{parentName:"ul"},"Animations"),(0,r.kt)("li",{parentName:"ul"},"Preview Menu"),(0,r.kt)("li",{parentName:"ul"},"Message System"),(0,r.kt)("li",{parentName:"ul"},"Particle Effects"),(0,r.kt)("li",{parentName:"ul"},"Rewards support items and commands")),(0,r.kt)("h3",{id:"crate-types"},"Crate Types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YML"},"FoodKey:\n    type: KEYCRATE\n    ...\n")),(0,r.kt)("p",null,"The type of crate defines the unique interaction with the player when the crate is activated. These are the following types..."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Support for Animation")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Activation")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SUPPLY"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Placeable crate that acts as a Minecraft chest"),(0,r.kt)("td",{parentName:"tr",align:null},"Placing down a chest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MYSTERY"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Crate that is activated by any type of click"),(0,r.kt)("td",{parentName:"tr",align:null},"Right or left click with the crate in-hand")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Crate that is preset to a block. This block acts as a hub for users to interact with."),(0,r.kt)("td",{parentName:"tr",align:null},"Right or left click a preset block with the crate in-hand. Left click is set to preview while right click is to open the crate.")))),(0,r.kt)("h3",{id:"the-physical-crate-or-key"},"The Physical Crate or Key"),(0,r.kt)("p",null,"Crates and keys are physical items in Minecraft. These physical items are what players use to interact and activate rewards. Each crate or key-crate has its own item or key, respectively."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YML"},"FoodKey:\n    ...\n    item: 'tripwire_hook 1 name:&c[&6Foodie_&eKey&c]_&f#124 lore:&7Mmmm,_something_smells_good.|&8Place_the_chest_down_to_obtain_a_pack_of_food! glow:true'\n    ...\n")),(0,r.kt)("p",null,"!> This plugin uses the EssentialsX item format. For more information about item parsing, ",(0,r.kt)("a",{parentName:"p",href:"#item-parser"},"click here"),"."),(0,r.kt)("h3",{id:"animations"},"Animations"),(0,r.kt)("p",null,"Some crates types support different animations, which appear in a GUI when the crate is activated."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YML"},"FoodKey:\n    ...\n    animation: 'NONE'\n    end-animation: 'BLANK'\n    ...\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Active Animations")," run while the reward is being selected on the player's screen\n",(0,r.kt)("strong",{parentName:"p"},"Ending Animations")," occur after the player's reward has been selected - this animation plays immediately after the Active animation ends")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Active")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Ending")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ROULETTE"),(0,r.kt)("td",{parentName:"tr",align:null},"BLANK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CSGO"),(0,r.kt)("td",{parentName:"tr",align:null},"RANDOM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CSGO_REVERSE"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RECTANGLE"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RECTANGLE_REVERSE"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"crate-hologram"},"Crate Hologram"),(0,r.kt)("p",null,"This creates a hologram which hovers above the block or NPC location in which the crate is set."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YML"},"FoodKey:\n    ...\n    holographic:\n        - 'Lines'\n        - 'of'\n        - 'text'\n    ...\n")),(0,r.kt)("p",null,"!> For holograms to work, you must have ",(0,r.kt)("a",{parentName:"p",href:"https://dev.bukkit.org/projects/holographic-displays"},"HolographicDisplays")," installed on your server"),(0,r.kt)("h3",{id:"confirmation"},"Confirmation"),(0,r.kt)("p",null,"The confirmation menu allows users to verify the usage before activating a crate. This may be\ntoggled on a per-crate basis."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YML"},"FoodKey:\n    ...\n    confirmation:\n        enabled: true\n        accept-button: 'GREEN_STAINED_GLASS_PANE 1 name:&aYes lore:&fClick_here_to_open_{crate}!'\n        decline-button: 'RED_STAINED_GLASS_PANE 1 name:&4No'\n    ...\n")),(0,r.kt)("h3",{id:"preview"},"Preview"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"preview")," feature allows players to see the rewards in a crate.\nPreviews are automatically generated based off item or display tags from rewards.\nThe plugin will automatically resize and offer pagination if there isn't enough slots.\nThe menu may be toggled in the config."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YAML"},"  FoodKey:\n    ...\n    preview:\n        enabled: true\n        rows: 4\n    ...\n")),(0,r.kt)("h3",{id:"item-parser"},"Item Parser"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Item Parser")," is how the plugin figures out what item to take or replace. Follow the template below to use for your crates. You can find some examples by scrolling down."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Template")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YML"},"display:(material:durability amount [OPTIONS])\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YML"},"display:(material:durability amount name:myName lore:lore1|lore2 skull:base64 color:r,g,b effect:haste power:1 duration:30 splash:true unbreakable:true glow:true hide:true)\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For simplicity, we use a near identical version of ",(0,r.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/resources/essentialsx.9089/"},"EssentialsX")," item parser")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"List of options")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Option")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Expected Value")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lore"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"player"),(0,r.kt)("td",{parentName:"tr",align:null},"String(Name)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"skull"),(0,r.kt)("td",{parentName:"tr",align:null},"String(Base64)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"color"),(0,r.kt)("td",{parentName:"tr",align:null},"String(R,G,B)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"flag"),(0,r.kt)("td",{parentName:"tr",align:null},"String(Enum)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"effect"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"power"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"duration"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"splash"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unbreakable"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"glow"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hide"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")))),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Potion:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"display:(potion 1 name:Potion lore:Test effect:haste power:3 duration:180)'\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Potion with multiple effects:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"display:(potion 1 name:Potion lore:Test effect:haste power:3 duration:180 effect:jump_boost power:3 duration:180)'\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Enchanted Sword with unbreakable and hidden attributes:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"display:(diamond_sword 1 sharpness:1 knockback:1 unbreakable:true flag:HIDE_UNBREAKABLE)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sword with durability:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"display:(diamond_sword:100 1)\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Hazebyte/CrateReloaded/issues/97"},(0,r.kt)("strong",{parentName:"a"},"Minecraft Head:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"display:(player_head 1 name:&aWilltella lore:&aA_delicious_snack!! skull:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNTE1ZGNiMmRhMDJjZjczNDgyOWUxZTI3M2UzMDI1NjE3ZDgwNzE1MTZmOTUzMjUxYjUyNTQ1ZGE4ZDNlOGRiOCJ9fX0)\ndisplay:(player_head 1 name:&aNotch player:notch)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Custom Model Data:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"display:(diamond_sword{CustomModelData:1001} 1)\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Flags")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Name")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HIDE_ENCHANTS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HIDE_ATTRIBUTES")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HIDE_UNBREAKABLE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HIDE_DESTROYS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HIDE_PLACED_ON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HIDE_POTION_EFFECTS")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"display:(GOLD_RECORD 1 name:&4Close! flag:HIDE_POTION_EFFECTS)\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Leather Armor Dye")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"display:(leather_chestplate 1 color:0,0,0)\ndisplay:(leather_leggings 1 color:255,255,255)\n")),(0,r.kt)("h3",{id:"effects"},"Effects"),(0,r.kt)("p",null,"This section defines the effects and sounds that the crate may have.\nEffects are run under a given condition or notably, the ",(0,r.kt)("inlineCode",{parentName:"p"},"category"),".\nThe manifestation of the effect is given by the ",(0,r.kt)("inlineCode",{parentName:"p"},"class"),"."),(0,r.kt)("p",null,"For more information, click ",(0,r.kt)("a",{parentName:"p",href:"/docs/config/effects"},"here")),(0,r.kt)("h3",{id:"rewards"},"Rewards"),(0,r.kt)("p",null,"Each individual crate supports its own set of rewards. Crates may give out a random amount between two numbers\nby setting a minimum and a maximum number of rewards."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Crates with animations default and support one reward.\nAlways ensure that the number of minimum rewards is greater than or equal to the number of rewards available.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YML"},"    reward:\n        minimum-rewards: 1\n        maximum-rewards: 1\n        rewards:\n            # Always heals the player to full\n            - 'unique:(),     chance:(1000),      cmd:(/heal {player})'\n")),(0,r.kt)("h4",{id:"tag"},"Tag"),(0,r.kt)("p",null,"Tags are used to identify the important values set in the config that is passed to the plugin.\nA list of tags include..."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Tag")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Limit")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"item"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221e"),(0,r.kt)("td",{parentName:"tr",align:null},"Represents an item")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cmd"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221e"),(0,r.kt)("td",{parentName:"tr",align:null},"Represents a command")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chance"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Represents the raw weighted chance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"display"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Represents a display item")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"broadcast"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"String that is broadcasted when this reward is given")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"append"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"String that appends to the crate's broadcast message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msg"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"String that is shown to the player when one opens the crate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unique"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Reward that is only given once in a single crate probability roll")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"permission"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221e"),(0,r.kt)("td",{parentName:"tr",align:null},"Reward that is given only if the player does not have the permission")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"always"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Reward that is always given regardless of the probability.")))),(0,r.kt)("p",null,"Tags start with the name and have a colon and parenthesis to represent intake value ",(0,r.kt)("inlineCode",{parentName:"p"},"e.g. unique:()")),(0,r.kt)("h5",{id:"items"},"Items"),(0,r.kt)("p",null,"Click ",(0,r.kt)("a",{parentName:"p",href:"#item-parser"},"here")," to read more about item parsing."),(0,r.kt)("h5",{id:"commands"},"Commands"),(0,r.kt)("p",null,"Any command may be specified here. Commands are executed through the console."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YML"},"    cmd:(/heal {player})     # Commands may start with '/'\n    cmd:(heal {player})      # They also don't have to :)\n")),(0,r.kt)("p",null,"You may also specify multiple commands per line."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YML"},"    cmd:(/heal {player}), cmd:(tell {player} You're awesome!)\n")),(0,r.kt)("h5",{id:"chance"},"Chance"),(0,r.kt)("p",null,"Each reward is expected to have a chance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YML"},"    chance:(10)\n")),(0,r.kt)("p",null,"!> If no chance is specified, the plugin will spit a soft error. The chance will default to zero and may\nstill appear in preview systems but won't be included in reward rolls."),(0,r.kt)("h6",{id:"how-does-the-chance-system-work"},"How does the chance system work?"),(0,r.kt)("p",null,"The probability system is not one that is based on chances but one that is based on a weight. This is because we put together all rewards into a single pool to pick a winner. "),(0,r.kt)("p",null,'An analogy is to imagine a bag of tickets where the plugin will pick out a ticket and that represents the winning reward. Each reward has a "chance" number that represents the number of tickets. The more tickets you put in, the higher probability that it will get choosen, vice versa.  The following is a more concrete example.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For this example, we choose convenient numbers where the summation adds up to 100.\nThe total does not have to add up to 100.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YML"},"    - 'item:(dirt 1),       chance:(50)'\n    - 'item:(stone 1),      chance:(20)'\n    - 'item:(iron_ingot 1), chance:(15)'\n    - 'item:(gold_ingot 1), chance:(10)'\n    - 'item:(diamond 1),    chance:(5)'\n")),(0,r.kt)("p",null,"Each reward is calculated to a percentage based on its weight."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"total weight")," is ",(0,r.kt)("strong",{parentName:"li"},"100 = (50 + 20 + 15 + 10 + 5)"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Reward Percentage")," = (",(0,r.kt)("strong",{parentName:"li"},"weight / total weight"),") ","*"," 100%.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YML"},"    - 'item:(dirt 1),       chance:(50)' # (50 / 100) * 100% = 50%\n    - 'item:(stone 1),      chance:(20)' # (20 / 100) * 100% = 20%\n    - 'item:(iron_ingot 1), chance:(15)' # (15 / 100) * 100% = 15%\n    - 'item:(gold_ingot 1), chance:(10)' # (10 / 100) * 100% = 10%\n    - 'item:(diamond 1),    chance:(5)'  # (5 / 100) * 100% = 5%\n")),(0,r.kt)("h5",{id:"permission"},"Permission"),(0,r.kt)("p",null,"Rewards that have the ",(0,r.kt)("inlineCode",{parentName:"p"},"permission")," tag are given only if the player does not\nhave the permission."),(0,r.kt)("p",null,"In the following example, the reward will give the user the permission ",(0,r.kt)("inlineCode",{parentName:"p"},"user.vip")," and 64 diamonds only if they\ndo not have the permission ",(0,r.kt)("inlineCode",{parentName:"p"},"user.vip"),". Once the player receives the reward, they will not be eligible to receive this reward again because they have received the permission."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YML"},"    reward:\n        rewards:\n            - 'chance:(10), permission:(user.vip), cmd:(pex add {player} user.vip), cmd:(/give {player} 64 diamond)'\n")),(0,r.kt)("p",null,"!> Operators (ops) have all permissions and won't be able to receive any rewards that have the permission tag."),(0,r.kt)("p",null,"!> Be sure to include fallback rewards if a player has all permission-based rewards. The plugin handles if there are no rewards\nhowever you are encouraged catch and handle the situation."),(0,r.kt)("h6",{id:"fallback-rewards"},"Fallback Rewards"),(0,r.kt)("p",null,"If the player is an operator or has permission of each reward in a crate, the plugin will not take a key\nand tell the player that there are no rewards. A fallback reward may be provided as such..."),(0,r.kt)("p",null,"If the player has the permission ",(0,r.kt)("inlineCode",{parentName:"p"},"user.vip"),", the player will simply receive a message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YML"},"    reward:\n        rewards:\n            - 'permission:(user.vip), cmd:(pex add {player} user.vip), chance:(100)'\n            - 'cmd:(tell {player} You have won all the rewards), chance:(1)'\n")),(0,r.kt)("h5",{id:"unique"},"Unique"),(0,r.kt)("p",null,"Rewards that have the ",(0,r.kt)("inlineCode",{parentName:"p"},"unique")," tag are given once every opening. This is useful when you have\na minimum/maximum reward where it is possible to give multiple rewards but only want each reward to be\ngiven once. This means that each reward line can be ",(0,r.kt)("strong",{parentName:"p"},"rewarded only once per opening")," but\nmay be rewarded multiple times if they activate the same crate or key."),(0,r.kt)("p",null,"!> If you are looking for rewards that are given only once, take a look at permission-based rewards."),(0,r.kt)("p",null,"In the following example, this crate will give the player the following rewards: ",(0,r.kt)("em",{parentName:"p"},"one dirt, one diamond, and one iron"),".\nEach reward is unique per crate opening."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YML"},"    reward:\n        minimum-rewards: 3\n        maximum-rewards: 3\n        rewards:\n            - 'unique:(),     chance:(1000),      item:(dirt 1)'\n            - 'unique:(),     chance:(1000),      item:(diamond 1)'\n            - 'unique:(),     chance:(1000),      item:(iron 1)'\n")),(0,r.kt)("h5",{id:"always"},"Always"),(0,r.kt)("p",null,"Rewards that have the ",(0,r.kt)("inlineCode",{parentName:"p"},"always")," tag are given regardless of any other reward."),(0,r.kt)("p",null,"The crate will always give the player ",(0,r.kt)("em",{parentName:"p"},"a heal")," and either ",(0,r.kt)("em",{parentName:"p"},"a diamond or a iron")," depending on their luck!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YML"},"    reward:\n        minimum-rewards: 1\n        maximum-rewards: 1\n        rewards:\n            # Always heals the player to full\n            - 'always:(),                         cmd:(/heal {player})'\n            - 'unique:(),     chance:(1000),      item:(diamond 1)'\n            - 'unique:(),     chance:(1000),      item:(iron 1)'\n")),(0,r.kt)("p",null,"?> The chance tag for rewards that have the ",(0,r.kt)("inlineCode",{parentName:"p"},"always")," tag is optional."))}d.isMDXComponent=!0}}]);