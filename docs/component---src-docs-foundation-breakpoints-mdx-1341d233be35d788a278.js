(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{OWDE:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n("Fcif"),r=n("dV/x"),b=(n("mXGw"),n("/FXl")),i=n("TjRS");n("aD51");const l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/foundation/breakpoints.mdx"}});const p={_frontmatter:l},o=i.a;function c(e){let{components:t}=e,n=Object(r.a)(e,["components"]);return Object(b.b)(o,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"breakpoints"},"Breakpoints"),Object(b.b)("p",null,"There are 7 CSS breakpoints to provide you maximum control over the\nresponsive behavior of the layout of your app."),Object(b.b)("p",null,"These breakpoint values are used throughout React UI, in components, or in\nhelper classes. You can reuse them in your own CSS and components to create a\nseamless experience for your users."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:"right"},"Value in em"),Object(b.b)("th",{parentName:"tr",align:"right"},"Value in px*"),Object(b.b)("th",{parentName:"tr",align:null},"Usage in CSS**"),Object(b.b)("th",{parentName:"tr",align:null},"Usage in SCSS"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"xs"),Object(b.b)("td",{parentName:"tr",align:"right"},"0 em"),Object(b.b)("td",{parentName:"tr",align:"right"},"0 px"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"--rui-breakpoint-xs")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"@include breakpoint.up(xs)"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"sm"),Object(b.b)("td",{parentName:"tr",align:"right"},"36 em"),Object(b.b)("td",{parentName:"tr",align:"right"},"576 px"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"--rui-breakpoint-sm")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"@include breakpoint.up(sm)"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"md"),Object(b.b)("td",{parentName:"tr",align:"right"},"48 em"),Object(b.b)("td",{parentName:"tr",align:"right"},"768 px"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"--rui-breakpoint-md")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"@include breakpoint.up(md)"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"lg"),Object(b.b)("td",{parentName:"tr",align:"right"},"66 em"),Object(b.b)("td",{parentName:"tr",align:"right"},"1056 px"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"--rui-breakpoint-lg")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"@include breakpoint.up(lg)"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"xl"),Object(b.b)("td",{parentName:"tr",align:"right"},"84 em"),Object(b.b)("td",{parentName:"tr",align:"right"},"1344 px"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"--rui-breakpoint-xl")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"@include breakpoint.up(xl)"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"xxl"),Object(b.b)("td",{parentName:"tr",align:"right"},"90 em"),Object(b.b)("td",{parentName:"tr",align:"right"},"1440 px"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"--rui-breakpoint-xxl")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"@include breakpoint.up(xxl)"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"xxxl"),Object(b.b)("td",{parentName:"tr",align:"right"},"120 em"),Object(b.b)("td",{parentName:"tr",align:"right"},"1920 px"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"--rui-breakpoint-xxxl")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"@include breakpoint.up(xxxl)"))))),Object(b.b)("p",null,"*"," Supposed the root font size is 16 px."),Object(b.b)("p",null,"*","* ⚠️ Consider ",Object(b.b)("strong",{parentName:"p"},"CSS breakpoints as read-only:")," because\n",Object(b.b)("a",{parentName:"p",href:"https://www.w3.org/TR/css-variables-1/#using-variables"},"CSS custom properties"),"\ncannot be used inside media queries (media query is\n",Object(b.b)("a",{parentName:"p",href:"https://stackoverflow.com/q/40722882"},"not a CSS property"),"), changing their\nvalues will have no effect. If you need to adjust the breakpoint values, you\nmust override the ",Object(b.b)("inlineCode",{parentName:"p"},"$values")," SCSS map defined in\n",Object(b.b)("inlineCode",{parentName:"p"},"styles/settings/_breakpoints.scss"),"."))}void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/foundation/breakpoints.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-foundation-breakpoints-mdx-1341d233be35d788a278.js.map