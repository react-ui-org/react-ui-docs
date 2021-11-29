(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{myKr:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return j}));var l=t("Fcif"),a=t("dV/x"),c=t("mXGw"),d=t("/FXl"),o=t("TjRS"),b=t("ZFoC"),i=t("s0IP");t("aD51");const r=["components"],s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/css-helpers/box-alignment.mdx"}});const m={_frontmatter:s},p=o.a;function j(e){let{components:n}=e,t=Object(a.a)(e,r);return Object(d.b)(p,Object(l.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(d.b)("h1",{id:"box-alignment"},"Box Alignment"),Object(d.b)("p",null,"Responsive box-alignment helper classes allow aligning the content across both\naxes by setting the ",Object(d.b)("inlineCode",{parentName:"p"},"align-items")," and ",Object(d.b)("inlineCode",{parentName:"p"},"justify-content")," CSS properties."),Object(d.b)("p",null,"Use the box-alignment classes ",Object(d.b)("strong",{parentName:"p"},"on flex or grid containers,")," they will not work\nelsewhere."),Object(d.b)("p",null,"👉 If you need to quickly create a flex container, there is the\n",Object(d.b)("a",{parentName:"p",href:"/css-helpers/display"},Object(d.b)("inlineCode",{parentName:"a"},".d-flex"))," helper class at your disposal."),Object(d.b)("p",null,"📖 Read more about\n",Object(d.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox"},"flexbox"),"\nand ",Object(d.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids"},"grid"),"\nlayout concepts."),Object(d.b)("h2",{id:"naming-system"},"Naming System"),Object(d.b)("p",null,"The classes are named using the format ",Object(d.b)("inlineCode",{parentName:"p"},"[alignment]-[value]")," for ",Object(d.b)("inlineCode",{parentName:"p"},"xs")," and\n",Object(d.b)("inlineCode",{parentName:"p"},"[alignment]-[breakpoint]-[value]")," for ",Object(d.b)("inlineCode",{parentName:"p"},"sm"),", ",Object(d.b)("inlineCode",{parentName:"p"},"md"),", ",Object(d.b)("inlineCode",{parentName:"p"},"lg"),", ",Object(d.b)("inlineCode",{parentName:"p"},"xl"),", ",Object(d.b)("inlineCode",{parentName:"p"},"xxl"),", and\n",Object(d.b)("inlineCode",{parentName:"p"},"xxxl")," ",Object(d.b)("a",{parentName:"p",href:"/foundation/breakpoints"},"breakpoints"),"."),Object(d.b)("p",null,"Where ",Object(d.b)("inlineCode",{parentName:"p"},"alignment")," is one of:"),Object(d.b)("ul",null,Object(d.b)("li",{parentName:"ul"},Object(d.b)("inlineCode",{parentName:"li"},"align-items")),Object(d.b)("li",{parentName:"ul"},Object(d.b)("inlineCode",{parentName:"li"},"justify-content"))),Object(d.b)("p",null,"For ",Object(d.b)("inlineCode",{parentName:"p"},"align-items")," the value can be:"),Object(d.b)("ul",null,Object(d.b)("li",{parentName:"ul"},Object(d.b)("inlineCode",{parentName:"li"},"start")),Object(d.b)("li",{parentName:"ul"},Object(d.b)("inlineCode",{parentName:"li"},"flex-start")),Object(d.b)("li",{parentName:"ul"},Object(d.b)("inlineCode",{parentName:"li"},"center")),Object(d.b)("li",{parentName:"ul"},Object(d.b)("inlineCode",{parentName:"li"},"baseline")),Object(d.b)("li",{parentName:"ul"},Object(d.b)("inlineCode",{parentName:"li"},"end")),Object(d.b)("li",{parentName:"ul"},Object(d.b)("inlineCode",{parentName:"li"},"flex-end"))),Object(d.b)("p",null,"For ",Object(d.b)("inlineCode",{parentName:"p"},"justify-content")," the value can be:"),Object(d.b)("ul",null,Object(d.b)("li",{parentName:"ul"},Object(d.b)("inlineCode",{parentName:"li"},"start")),Object(d.b)("li",{parentName:"ul"},Object(d.b)("inlineCode",{parentName:"li"},"flex-start")),Object(d.b)("li",{parentName:"ul"},Object(d.b)("inlineCode",{parentName:"li"},"center")),Object(d.b)("li",{parentName:"ul"},Object(d.b)("inlineCode",{parentName:"li"},"end")),Object(d.b)("li",{parentName:"ul"},Object(d.b)("inlineCode",{parentName:"li"},"flex-end")),Object(d.b)("li",{parentName:"ul"},Object(d.b)("inlineCode",{parentName:"li"},"space-between"))),Object(d.b)("p",null,"👉 The difference between ",Object(d.b)("inlineCode",{parentName:"p"},"start"),"/",Object(d.b)("inlineCode",{parentName:"p"},"flex-start")," and ",Object(d.b)("inlineCode",{parentName:"p"},"end"),"/",Object(d.b)("inlineCode",{parentName:"p"},"flex-end")," is that the\nprefixed variants are intended for flexbox while the versions without prefix\nonly work inside a grid layout."),Object(d.b)("p",null,"📖 ",Object(d.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment"},"Read more about CSS Box Alignment concepts.")),Object(d.b)("h2",{id:"horizontal-main-axis-alignment-justification"},"Horizontal (Main-Axis) Alignment (Justification)"),Object(d.b)("p",null,"There are 6 options of alignment on the main axis: ",Object(d.b)("inlineCode",{parentName:"p"},"start")," (",Object(d.b)("inlineCode",{parentName:"p"},"flex-start")," for\nflexbox), ",Object(d.b)("inlineCode",{parentName:"p"},"center"),", ",Object(d.b)("inlineCode",{parentName:"p"},"end")," (",Object(d.b)("inlineCode",{parentName:"p"},"flex-end")," for flexbox), and ",Object(d.b)("inlineCode",{parentName:"p"},"space-between"),"."),Object(d.b)(b.c,{__position:0,__code:'<>\n  <div className="d-flex justify-content-flex-start">\n    <Placeholder bordered>\n      <code>.justify-content-flex-start</code>\n    </Placeholder>\n  </div>\n  <div className="d-flex justify-content-center">\n    <Placeholder bordered>\n      <code>.justify-content-center</code>\n    </Placeholder>\n  </div>\n  <div className="d-flex justify-content-flex-end">\n    <Placeholder bordered>\n      <code>.justify-content-flex-end</code>\n    </Placeholder>\n  </div>\n  <div className="d-flex justify-content-space-between">\n    <Placeholder bordered>\n      <code>.justify-content-space-between</code>\n    </Placeholder>\n    <Placeholder bordered>\n      <code>.justify-content-space-between</code>\n    </Placeholder>\n  </div>\n</>',__scope:{props:t,DefaultLayout:o.a,Playground:b.c,Placeholder:i.a,DefaultLayout:o.a,_frontmatter:s},mdxType:"Playground"},Object(d.b)(c.Fragment,null,Object(d.b)("div",{className:"d-flex justify-content-flex-start"},Object(d.b)(i.a,{bordered:!0,mdxType:"Placeholder"},Object(d.b)("code",null,".justify-content-flex-start"))),Object(d.b)("div",{className:"d-flex justify-content-center"},Object(d.b)(i.a,{bordered:!0,mdxType:"Placeholder"},Object(d.b)("code",null,".justify-content-center"))),Object(d.b)("div",{className:"d-flex justify-content-flex-end"},Object(d.b)(i.a,{bordered:!0,mdxType:"Placeholder"},Object(d.b)("code",null,".justify-content-flex-end"))),Object(d.b)("div",{className:"d-flex justify-content-space-between"},Object(d.b)(i.a,{bordered:!0,mdxType:"Placeholder"},Object(d.b)("code",null,".justify-content-space-between")),Object(d.b)(i.a,{bordered:!0,mdxType:"Placeholder"},Object(d.b)("code",null,".justify-content-space-between"))))),Object(d.b)("h2",{id:"vertical-cross-axis-alignment"},"Vertical (Cross-Axis) Alignment"),Object(d.b)("p",null,"There are 6 options of alignment on the cross axis: ",Object(d.b)("inlineCode",{parentName:"p"},"start")," (",Object(d.b)("inlineCode",{parentName:"p"},"flex-start")," for\nflexbox), ",Object(d.b)("inlineCode",{parentName:"p"},"center"),", ",Object(d.b)("inlineCode",{parentName:"p"},"end")," (",Object(d.b)("inlineCode",{parentName:"p"},"flex-end")," for flexbox), and ",Object(d.b)("inlineCode",{parentName:"p"},"baseline"),"."),Object(d.b)(b.c,{__position:1,__code:"<>\n  <Placeholder bordered>\n    <div className=\"d-flex align-items-flex-start\" style={{ height: '6rem' }}>\n      <Placeholder bordered>\n        <code>.align-items-flex-start</code>\n      </Placeholder>\n    </div>\n  </Placeholder>\n  <Placeholder bordered>\n    <div className=\"d-flex align-items-center\" style={{ height: '6rem' }}>\n      <Placeholder bordered>\n        <code>.align-items-center</code>\n      </Placeholder>\n    </div>\n  </Placeholder>\n  <Placeholder bordered>\n    <div className=\"d-flex align-items-flex-end\" style={{ height: '6rem' }}>\n      <Placeholder bordered>\n        <code>.align-items-flex-end</code>\n      </Placeholder>\n    </div>\n  </Placeholder>\n  <Placeholder bordered>\n    <div className=\"d-flex align-items-baseline\" style={{ height: '6rem' }}>\n      <Placeholder bordered>\n        <code>.align-items-baseline</code>\n      </Placeholder>\n      <Placeholder bordered>\n        <code style={{ lineHeight: 4 }}>.align-items-baseline</code>\n      </Placeholder>\n    </div>\n  </Placeholder>\n</>",__scope:{props:t,DefaultLayout:o.a,Playground:b.c,Placeholder:i.a,DefaultLayout:o.a,_frontmatter:s},mdxType:"Playground"},Object(d.b)(c.Fragment,null,Object(d.b)(i.a,{bordered:!0,mdxType:"Placeholder"},Object(d.b)("div",{className:"d-flex align-items-flex-start",style:{height:"6rem"}},Object(d.b)(i.a,{bordered:!0,mdxType:"Placeholder"},Object(d.b)("code",null,".align-items-flex-start")))),Object(d.b)(i.a,{bordered:!0,mdxType:"Placeholder"},Object(d.b)("div",{className:"d-flex align-items-center",style:{height:"6rem"}},Object(d.b)(i.a,{bordered:!0,mdxType:"Placeholder"},Object(d.b)("code",null,".align-items-center")))),Object(d.b)(i.a,{bordered:!0,mdxType:"Placeholder"},Object(d.b)("div",{className:"d-flex align-items-flex-end",style:{height:"6rem"}},Object(d.b)(i.a,{bordered:!0,mdxType:"Placeholder"},Object(d.b)("code",null,".align-items-flex-end")))),Object(d.b)(i.a,{bordered:!0,mdxType:"Placeholder"},Object(d.b)("div",{className:"d-flex align-items-baseline",style:{height:"6rem"}},Object(d.b)(i.a,{bordered:!0,mdxType:"Placeholder"},Object(d.b)("code",null,".align-items-baseline")),Object(d.b)(i.a,{bordered:!0,mdxType:"Placeholder"},Object(d.b)("code",{style:{lineHeight:4}},".align-items-baseline")))))),Object(d.b)("h2",{id:"responsive-box-alignment"},"Responsive Box Alignment"),Object(d.b)("p",null,"From ",Object(d.b)("inlineCode",{parentName:"p"},"sm")," up you can set the desired box alignment for individual\n",Object(d.b)("a",{parentName:"p",href:"/foundation/breakpoints"},"breakpoints"),"."),Object(d.b)(b.c,{__position:2,__code:'<>\n  <div className="d-flex justify-content-sm-flex-start">\n    <Placeholder bordered>\n      <code>.justify-content-sm-flex-start</code>\n    </Placeholder>\n  </div>\n  <div className="d-flex justify-content-md-center">\n    <Placeholder bordered>\n      <code>.justify-content-md-center</code>\n    </Placeholder>\n  </div>\n  <div className="d-flex justify-content-lg-flex-end">\n    <Placeholder bordered>\n      <code>.justify-content-lg-flex-end</code>\n    </Placeholder>\n  </div>\n  <div className="d-flex justify-content-xl-space-between">\n    <Placeholder bordered>\n      <code>.justify-content-xl-space-between</code>\n    </Placeholder>\n    <Placeholder bordered>\n      <code>.justify-content-xl-space-between</code>\n    </Placeholder>\n  </div>\n</>',__scope:{props:t,DefaultLayout:o.a,Playground:b.c,Placeholder:i.a,DefaultLayout:o.a,_frontmatter:s},mdxType:"Playground"},Object(d.b)(c.Fragment,null,Object(d.b)("div",{className:"d-flex justify-content-sm-flex-start"},Object(d.b)(i.a,{bordered:!0,mdxType:"Placeholder"},Object(d.b)("code",null,".justify-content-sm-flex-start"))),Object(d.b)("div",{className:"d-flex justify-content-md-center"},Object(d.b)(i.a,{bordered:!0,mdxType:"Placeholder"},Object(d.b)("code",null,".justify-content-md-center"))),Object(d.b)("div",{className:"d-flex justify-content-lg-flex-end"},Object(d.b)(i.a,{bordered:!0,mdxType:"Placeholder"},Object(d.b)("code",null,".justify-content-lg-flex-end"))),Object(d.b)("div",{className:"d-flex justify-content-xl-space-between"},Object(d.b)(i.a,{bordered:!0,mdxType:"Placeholder"},Object(d.b)("code",null,".justify-content-xl-space-between")),Object(d.b)(i.a,{bordered:!0,mdxType:"Placeholder"},Object(d.b)("code",null,".justify-content-xl-space-between"))))))}void 0!==j&&j&&j===Object(j)&&Object.isExtensible(j)&&!j.hasOwnProperty("__filemeta")&&Object.defineProperty(j,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/css-helpers/box-alignment.mdx"}}),j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-css-helpers-box-alignment-mdx-f6dcb796755b3f7b2eb5.js.map