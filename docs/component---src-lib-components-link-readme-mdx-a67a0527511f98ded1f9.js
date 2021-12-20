(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{U5ok:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return u})),n.d(t,"default",(function(){return m}));var o=n("Fcif"),a=n("dV/x"),i=(n("mXGw"),n("/FXl")),r=n("TjRS"),l=n("ZFoC"),c=n("hK9s"),b=n("JN6P");n("aD51");const p=["components"],u={};void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/lib/components/Link/README.mdx"}});const s={_frontmatter:u},d=r.a;function m(e){let{components:t}=e,n=Object(a.a)(e,p);return Object(i.b)(d,Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"link"},"Link"),Object(i.b)("p",null,"Link allow users to follow navigation."),Object(i.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(i.b)("p",null,"To implement the Link component, you need to import it first:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import { Link } from '@react-ui-org/react-ui';\n")),Object(i.b)("p",null,"And use it:"),Object(i.b)(l.c,{__position:0,__code:'<Link href="/contribute/guidelines">How can I contribute to React UI?</Link>',__scope:{props:n,DefaultLayout:r.a,Playground:l.c,Props:l.d,Placeholder:c.a,Link:b.a,DefaultLayout:r.a,_frontmatter:u},mdxType:"Playground"},Object(i.b)(b.a,{href:"/contribute/guidelines",mdxType:"Link"},"How can I contribute to React UI?")),Object(i.b)("p",null,"See ",Object(i.b)("a",{parentName:"p",href:"#api"},"API")," for all available options."),Object(i.b)("h2",{id:"general-guidelines"},"General Guidelines"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Avoid using links for actions"),", use a ",Object(i.b)("a",{parentName:"p",href:"/components/button"},"Button"),"\ninstead. This is because users expect navigation to happen when clicking on\nsomething what looks like a link."),Object(i.b)("h2",{id:"block-level-content"},"Block-Level Content"),Object(i.b)("p",null,"Besides text, link can contain block-level elements too."),Object(i.b)(l.c,{__position:1,__code:'<Link href="/contribute/guidelines">\n  <Placeholder>Block-level element wrapped with link</Placeholder>\n</Link>',__scope:{props:n,DefaultLayout:r.a,Playground:l.c,Props:l.d,Placeholder:c.a,Link:b.a,DefaultLayout:r.a,_frontmatter:u},mdxType:"Playground"},Object(i.b)(b.a,{href:"/contribute/guidelines",mdxType:"Link"},Object(i.b)(c.a,{mdxType:"Placeholder"},"Block-level element wrapped with link"))),Object(i.b)("h2",{id:"custom-routing"},"Custom Routing"),Object(i.b)("p",null,"It's common to use custom function for routing within SPAs. Use the\n",Object(i.b)("inlineCode",{parentName:"p"},"onClick")," option to provide such function."),Object(i.b)(l.c,{__position:2,__code:"<Link\n  href=\"/contribute/guidelines\"\n  onClick={event => {\n    event.preventDefault()\n    window.location = event.currentTarget.getAttribute('href')\n  }}\n>\n  This link is controlled by custom function\n</Link>",__scope:{props:n,DefaultLayout:r.a,Playground:l.c,Props:l.d,Placeholder:c.a,Link:b.a,DefaultLayout:r.a,_frontmatter:u},mdxType:"Playground"},Object(i.b)(b.a,{href:"/contribute/guidelines",onClick:e=>{e.preventDefault(),window.location=e.currentTarget.getAttribute("href")},mdxType:"Link"},"This link is controlled by custom function")),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("p",null,"In addition to the options below, you can specify ",Object(i.b)("a",{parentName:"p",href:"https://reactjs.org/docs/events.html"},"React synthetic events")," or\nany custom HTML attributes that do not interfere with the API, and they will be\npassed to the ",Object(i.b)("inlineCode",{parentName:"p"},"a")," HTML element. This enables making the component interactive\nand helps improve its accessibility."),Object(i.b)(l.d,{table:!0,of:b.a,mdxType:"Props"}),Object(i.b)("h2",{id:"theming"},"Theming"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Custom Property"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"--rui-Link__color")),Object(i.b)("td",{parentName:"tr",align:null},"Text color")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"--rui-Link__text-decoration")),Object(i.b)("td",{parentName:"tr",align:null},"Text decoration, e.g. underline")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"--rui-Link--hover__color")),Object(i.b)("td",{parentName:"tr",align:null},"Text color on hover")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"--rui-Link--hover__text-decoration")),Object(i.b)("td",{parentName:"tr",align:null},"Text decoration on hover")))))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/lib/components/Link/README.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-lib-components-link-readme-mdx-a67a0527511f98ded1f9.js.map