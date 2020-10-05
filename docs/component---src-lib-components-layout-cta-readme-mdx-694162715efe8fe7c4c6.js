(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{Dpj8:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return m})),a.d(t,"default",(function(){return h}));var n=a("k0FJ"),r=a("yHgN"),o=(a("mXGw"),a("/FXl")),l=a("TjRS"),b=a("ZFoC"),c=a("s0IP"),d=a("mjKP"),p=a("h8v9"),i=a("DXhY"),s=a("jHou");a("aD51");const m={};void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/lib/components/layout/CTA/README.mdx"}});const T={_frontmatter:m},j=l.a;function h(e){let{components:t}=e,a=Object(r.a)(e,["components"]);return Object(o.b)(j,Object(n.a)({},T,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"cta"},"CTA"),Object(o.b)("p",null,"The responsive CTA layout holds an action at the center and two additional\nelements on sides."),Object(o.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(o.b)("p",null,"To implement the CTA component, you need to import it first:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { CTA } from '@react-ui-org/react-ui';\n")),Object(o.b)("p",null,"And use it:"),Object(o.b)(b.c,{__position:0,__code:"<Placeholder bordered>\n  <CTA>\n    <CTAStart>\n      <Placeholder bordered>Start</Placeholder>\n    </CTAStart>\n    <CTACenter>\n      <Placeholder bordered>Center</Placeholder>\n    </CTACenter>\n    <CTAEnd>\n      <Placeholder bordered>End</Placeholder>\n    </CTAEnd>\n  </CTA>\n</Placeholder>",__scope:{props:a,DefaultLayout:l.a,Playground:b.c,Props:b.d,Placeholder:c.a,CTA:d.a,CTACenter:p.a,CTAEnd:i.a,CTAStart:s.a,DefaultLayout:l.a,_frontmatter:m},mdxType:"Playground"},Object(o.b)(c.a,{bordered:!0,mdxType:"Placeholder"},Object(o.b)(d.a,{mdxType:"CTA"},Object(o.b)(s.a,{mdxType:"CTAStart"},Object(o.b)(c.a,{bordered:!0,mdxType:"Placeholder"},"Start")),Object(o.b)(p.a,{mdxType:"CTACenter"},Object(o.b)(c.a,{bordered:!0,mdxType:"Placeholder"},"Center")),Object(o.b)(i.a,{mdxType:"CTAEnd"},Object(o.b)(c.a,{bordered:!0,mdxType:"Placeholder"},"End"))))),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#api"}),"API")," for all available options."),Object(o.b)("h2",{id:"general-guidelines"},"General Guidelines"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The CTA (call to action) layout is designed for an ",Object(o.b)("strong",{parentName:"p"},"action placed at the\ncenter")," of its parent and two optional side elements. It works perfectly\nespecially in composition with a load-more button.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Place rather ",Object(o.b)("strong",{parentName:"p"},"a few smaller elements")," into the layout, so they fit the\nscreen even at the smallest size. For complex layouts and a lot of actions,\nconsider using the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/components/layout/toolbar"}),"Toolbar")," layout."))),Object(o.b)("p",null,"👉 On screen sizes smaller than 66 em (the ",Object(o.b)("inlineCode",{parentName:"p"},"lg"),"\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/foundation/breakpoints"}),"breakpoint"),"), the start element expands over the full\nwidth of its parent. Please resize your browser rather than the playground to\nsee this work."),Object(o.b)("h2",{id:"vertical-alignment"},"Vertical Alignment"),Object(o.b)("p",null,"There are four options of vertical alignment: baseline (default), top, middle,\nand bottom."),Object(o.b)(b.c,{__position:1,__code:'<Placeholder bordered>\n  <CTA align="bottom">\n    <CTAStart>\n      <Placeholder bordered>Start</Placeholder>\n    </CTAStart>\n    <CTACenter>\n      <Placeholder bordered>\n        Center\n        <br />\n        Element\n      </Placeholder>\n    </CTACenter>\n    <CTAEnd>\n      <Placeholder bordered>End</Placeholder>\n    </CTAEnd>\n  </CTA>\n</Placeholder>',__scope:{props:a,DefaultLayout:l.a,Playground:b.c,Props:b.d,Placeholder:c.a,CTA:d.a,CTACenter:p.a,CTAEnd:i.a,CTAStart:s.a,DefaultLayout:l.a,_frontmatter:m},mdxType:"Playground"},Object(o.b)(c.a,{bordered:!0,mdxType:"Placeholder"},Object(o.b)(d.a,{align:"bottom",mdxType:"CTA"},Object(o.b)(s.a,{mdxType:"CTAStart"},Object(o.b)(c.a,{bordered:!0,mdxType:"Placeholder"},"Start")),Object(o.b)(p.a,{mdxType:"CTACenter"},Object(o.b)(c.a,{bordered:!0,mdxType:"Placeholder"},"Center",Object(o.b)("br",null),"Element")),Object(o.b)(i.a,{mdxType:"CTAEnd"},Object(o.b)(c.a,{bordered:!0,mdxType:"Placeholder"},"End"))))),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)(b.d,{of:d.a,mdxType:"Props"}),Object(o.b)("h2",{id:"ctastart"},"CTAStart"),Object(o.b)("p",null,"The start element of the CTA layout."),Object(o.b)(b.d,{of:s.a,mdxType:"Props"}),Object(o.b)("h2",{id:"ctacenter"},"CTACenter"),Object(o.b)("p",null,"The center element of the CTA layout."),Object(o.b)(b.d,{of:p.a,mdxType:"Props"}),Object(o.b)("h2",{id:"ctaend"},"CTAEnd"),Object(o.b)("p",null,"The end element of the CTA layout."),Object(o.b)(b.d,{of:i.a,mdxType:"Props"}),Object(o.b)("hr",null),Object(o.b)("p",null,"Next: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/components/layout/center"}),"Center →")))}void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/lib/components/layout/CTA/README.mdx"}}),h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-lib-components-layout-cta-readme-mdx-694162715efe8fe7c4c6.js.map