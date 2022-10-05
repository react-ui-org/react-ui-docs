(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{ATV0:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return u}));var r=a("Fcif"),n=a("dV/x"),o=(a("mXGw"),a("/FXl")),p=a("TjRS"),b=a("ZFoC"),i=a("nBnF");a("aD51");const l=["components"],c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!Object.prototype.hasOwnProperty.call(c,"__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/lib/components/Paper/README.mdx"}});const d={_frontmatter:c},s=p.a;function u(e){let{components:t}=e,a=Object(n.a)(e,l);return Object(o.b)(s,Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"paper"},"Paper"),Object(o.b)("p",null,"Paper is a basic surface to hold content."),Object(o.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(o.b)("p",null,"To implement the Paper component, you need to import it first:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { Paper } from '@react-ui-org/react-ui';\n")),Object(o.b)("p",null,"And use it:"),Object(o.b)(b.c,{__position:0,__code:"<Paper>Hello!</Paper>",__scope:{props:a,DefaultLayout:p.a,Playground:b.c,Props:b.d,Paper:i.u,DefaultLayout:p.a,_frontmatter:c},mdxType:"Playground"},Object(o.b)(i.u,{mdxType:"Paper"},"Hello!")),Object(o.b)("p",null,"See ",Object(o.b)("a",{parentName:"p",href:"#api"},"API")," for all available options."),Object(o.b)("h2",{id:"general-guidelines"},"General Guidelines"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Paper is ",Object(o.b)("strong",{parentName:"p"},"designed for non-white background.")," You may want to either use its\n",Object(o.b)("a",{parentName:"p",href:"#raised-paper"},"raised variant")," or ",Object(o.b)("a",{parentName:"p",href:"/customize/theming/overview"},"customize"),"\nthe default appearance to make it stand out on white background.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Paper, or Card?")," Paper is a basic surface to put content on. However,\nthere is also the ",Object(o.b)("a",{parentName:"p",href:"/components/card"},"Card")," component. While Paper is\nusually used to hold larger content areas like lists, grids, or forms, Card is\ndesigned for displaying items. Card also supports more visual options."))),Object(o.b)("h2",{id:"raised-paper"},"Raised Paper"),Object(o.b)("p",null,"Add optional shadow to lift the paper above background."),Object(o.b)(b.c,{__position:1,__code:"<Paper raised>Hello! I&apos;m paper and I&apos;m raised.</Paper>",__scope:{props:a,DefaultLayout:p.a,Playground:b.c,Props:b.d,Paper:i.u,DefaultLayout:p.a,_frontmatter:c},mdxType:"Playground"},Object(o.b)(i.u,{raised:!0,mdxType:"Paper"},"Hello! I'm paper and I'm raised.")),Object(o.b)("h2",{id:"muted-paper"},"Muted Paper"),Object(o.b)("p",null,"Dim background and add transparency to visually suppress the Paper."),Object(o.b)(b.c,{__position:2,__code:"<Paper muted>Sssh! I&apos;m paper and I&apos;m muted.</Paper>",__scope:{props:a,DefaultLayout:p.a,Playground:b.c,Props:b.d,Paper:i.u,DefaultLayout:p.a,_frontmatter:c},mdxType:"Playground"},Object(o.b)(i.u,{muted:!0,mdxType:"Paper"},"Sssh! I'm paper and I'm muted.")),Object(o.b)("h2",{id:"forwarding-html-attributes"},"Forwarding HTML Attributes"),Object(o.b)("p",null,"In addition to the options below in the ",Object(o.b)("a",{parentName:"p",href:"#api"},"component's API")," section, you\ncan specify ",Object(o.b)("a",{parentName:"p",href:"https://reactjs.org/docs/events.html"},"React synthetic events")," or ",Object(o.b)("strong",{parentName:"p"},"any HTML attribute you like.")," All\nattributes that don't interfere with the API are forwarded to the root ",Object(o.b)("inlineCode",{parentName:"p"},"<div>"),"\nHTML element. This enables making the component interactive and helps to improve\nits accessibility."),Object(o.b)("p",null,"👉 Refer to the MDN reference for the full list of supported attributes of the\n",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes"},"div")," element."),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)(b.d,{table:!0,of:i.u,mdxType:"Props"}),Object(o.b)("h2",{id:"theming"},"Theming"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Custom Property"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"--rui-Paper__padding")),Object(o.b)("td",{parentName:"tr",align:null},"Padding of Paper")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"--rui-Paper__border-width")),Object(o.b)("td",{parentName:"tr",align:null},"Border width")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"--rui-Paper__border-color")),Object(o.b)("td",{parentName:"tr",align:null},"Border color")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"--rui-Paper__border-radius")),Object(o.b)("td",{parentName:"tr",align:null},"Corner radius")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"--rui-Paper__background-color")),Object(o.b)("td",{parentName:"tr",align:null},"Paper background color")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"--rui-Paper--muted__background-color")),Object(o.b)("td",{parentName:"tr",align:null},"Background color of muted paper")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"--rui-Paper--muted__opacity")),Object(o.b)("td",{parentName:"tr",align:null},"Opacity of muted paper")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"--rui-Paper--raised__box-shadow")),Object(o.b)("td",{parentName:"tr",align:null},"Box shadow of raised paper")))))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!Object.prototype.hasOwnProperty.call(u,"__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/lib/components/Paper/README.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-lib-components-paper-readme-mdx-0c33a0a7da229ade528a.js.map