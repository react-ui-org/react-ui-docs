(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{OWDE:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n("Fcif"),r=n("dV/x"),b=(n("mXGw"),n("/FXl")),i=n("TjRS");n("aD51");const l=["components"],p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!Object.prototype.hasOwnProperty.call(p,"__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/foundation/breakpoints.mdx"}});const o={_frontmatter:p},c=i.a;function d(e){let{components:t}=e,n=Object(r.a)(e,l);return Object(b.b)(c,Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"breakpoints"},"Breakpoints"),Object(b.b)("p",null,"There are 7 CSS breakpoints to provide you maximum control over the\nresponsive behavior of the layout of your app."),Object(b.b)("p",null,"These breakpoint values are used throughout React UI, in components, or in\nhelper classes. You can reuse them in your own CSS and components to create a\nseamless experience for your users."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:"right"},"Value in em"),Object(b.b)("th",{parentName:"tr",align:"right"},"Value in px*"),Object(b.b)("th",{parentName:"tr",align:null},"Usage in CSS**"),Object(b.b)("th",{parentName:"tr",align:null},"Usage in SCSS"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"xs"),Object(b.b)("td",{parentName:"tr",align:"right"},"0 em"),Object(b.b)("td",{parentName:"tr",align:"right"},"0 px"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"--rui-breakpoint-xs")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"@include breakpoint.up(xs)"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"sm"),Object(b.b)("td",{parentName:"tr",align:"right"},"36 em"),Object(b.b)("td",{parentName:"tr",align:"right"},"576 px"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"--rui-breakpoint-sm")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"@include breakpoint.up(sm)"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"md"),Object(b.b)("td",{parentName:"tr",align:"right"},"48 em"),Object(b.b)("td",{parentName:"tr",align:"right"},"768 px"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"--rui-breakpoint-md")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"@include breakpoint.up(md)"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"lg"),Object(b.b)("td",{parentName:"tr",align:"right"},"66 em"),Object(b.b)("td",{parentName:"tr",align:"right"},"1056 px"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"--rui-breakpoint-lg")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"@include breakpoint.up(lg)"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"xl"),Object(b.b)("td",{parentName:"tr",align:"right"},"84 em"),Object(b.b)("td",{parentName:"tr",align:"right"},"1344 px"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"--rui-breakpoint-xl")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"@include breakpoint.up(xl)"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"x2l"),Object(b.b)("td",{parentName:"tr",align:"right"},"90 em"),Object(b.b)("td",{parentName:"tr",align:"right"},"1440 px"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"--rui-breakpoint-x2l")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"@include breakpoint.up(x2l)"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"x3l"),Object(b.b)("td",{parentName:"tr",align:"right"},"120 em"),Object(b.b)("td",{parentName:"tr",align:"right"},"1920 px"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"--rui-breakpoint-x3l")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"@include breakpoint.up(x3l)"))))),Object(b.b)("p",null,"*"," Supposed the root font size is 16 px."),Object(b.b)("p",null,"*","* ⚠️ Consider ",Object(b.b)("strong",{parentName:"p"},"CSS breakpoints as read-only:")," because\n",Object(b.b)("a",{parentName:"p",href:"https://www.w3.org/TR/css-variables-1/#using-variables"},"CSS custom properties"),"\ncannot be used inside media queries (media query is\n",Object(b.b)("a",{parentName:"p",href:"https://stackoverflow.com/q/40722882"},"not a CSS property"),"), changing their\nvalues will have no effect. If you need to adjust the breakpoint values, you\nmust override the ",Object(b.b)("inlineCode",{parentName:"p"},"$values")," SCSS map defined in\n",Object(b.b)("inlineCode",{parentName:"p"},"styles/settings/_breakpoints.scss"),"."))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!Object.prototype.hasOwnProperty.call(d,"__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/foundation/breakpoints.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-foundation-breakpoints-mdx-64d50efdef1d298eb4a6.js.map