(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{Q3gs:function(e,r,d){"use strict";d.r(r),d.d(r,"_frontmatter",(function(){return p})),d.d(r,"default",(function(){return u}));var t=d("Fcif"),o=d("dV/x"),a=(d("mXGw"),d("/FXl")),l=d("TjRS"),i=d("ZFoC"),n=d("s0IP"),c=d("fvS2"),b=d("eS2G");d("aD51");const m=["components"],p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!Object.prototype.hasOwnProperty.call(p,"__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/lib/components/Grid/README.mdx"}});const s={_frontmatter:p},h=l.a;function u(e){let{components:r}=e,d=Object(o.a)(e,m);return Object(a.b)(h,Object(t.a)({},s,d,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"grid"},"Grid"),Object(a.b)("p",null,"The responsive Grid layout aligns content into an organized grid."),Object(a.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(a.b)("p",null,"To implement the Grid component, you need to import it first:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import { Grid } from '@react-ui-org/react-ui';\n")),Object(a.b)("p",null,"And use it:"),Object(a.b)(i.c,{__position:0,__code:"<Grid>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n</Grid>",__scope:{props:d,DefaultLayout:l.a,Playground:i.c,Props:i.d,Placeholder:n.a,Grid:c.a,GridSpan:b.a,DefaultLayout:l.a,_frontmatter:p},mdxType:"Playground"},Object(a.b)(c.a,{mdxType:"Grid"},Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"))),Object(a.b)("p",null,"See ",Object(a.b)("a",{parentName:"p",href:"#api"},"API")," for all available options."),Object(a.b)("h2",{id:"general-guidelines"},"General Guidelines"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"This component implements native ",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"},"CSS grid layout"),", a powerful\ntool for two-dimensional layouts. You may use any value accepted by\n",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns"},"grid-template-columns"),", ",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows"},"grid-template-rows"),", ",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap"},"grid-column-gap"),",\n",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap"},"grid-row-gap"),", ",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow"},"grid-auto-flow"),", ",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/align-content"},"align-content"),", ",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/align-items"},"align-items"),",\n",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content"},"justify-content"),", ",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items"},"justify-items"),", and CSS properties in corresponding API\noptions of the component.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"To align your items in the grid, ",Object(a.b)("strong",{parentName:"p"},"simply wrap")," them with the Grid\ncomponent. Unlike other grid frameworks and UI libraries, ",Object(a.b)("strong",{parentName:"p"},"no additional\nmarkup")," like GridItem or Cell is necessary for your items. But it's there\nwhen you really need it—see ",Object(a.b)("a",{parentName:"p",href:"#advanced-layouts"},"Advanced Layouts"),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"For forms, use rather the ",Object(a.b)("a",{parentName:"p",href:"/components/form-layout"},"FormLayout")," component\nwhich is designed specifically for that purpose.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"The Grid component is so powerful that it enables you to build even very\nadvanced layouts ",Object(a.b)("strong",{parentName:"p"},"without")," having to write ",Object(a.b)("strong",{parentName:"p"},"a single line of custom CSS."),"\nSee ",Object(a.b)("a",{parentName:"p",href:"#advanced-layouts"},"Advanced Layouts")," for more."))),Object(a.b)("p",null,"👉 Vertical margin of items inside Grid is reset to zero."),Object(a.b)("h2",{id:"columns"},"Columns"),Object(a.b)("p",null,"Stack is the default outcome of Grid. Use the ",Object(a.b)("inlineCode",{parentName:"p"},"columns")," option to organize your\nitems into grid."),Object(a.b)(i.c,{__position:1,__code:'<Grid columns="1fr 1fr 1fr">\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n</Grid>',__scope:{props:d,DefaultLayout:l.a,Playground:i.c,Props:i.d,Placeholder:n.a,Grid:c.a,GridSpan:b.a,DefaultLayout:l.a,_frontmatter:p},mdxType:"Playground"},Object(a.b)(c.a,{columns:"1fr 1fr 1fr",mdxType:"Grid"},Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"))),Object(a.b)("p",null,"You can use the ",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/repeat"},Object(a.b)("inlineCode",{parentName:"a"},"repeat()"))," function to specify a recurring pattern."),Object(a.b)(i.c,{__position:2,__code:'<Grid columns="repeat(3, 1fr)">\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n</Grid>',__scope:{props:d,DefaultLayout:l.a,Playground:i.c,Props:i.d,Placeholder:n.a,Grid:c.a,GridSpan:b.a,DefaultLayout:l.a,_frontmatter:p},mdxType:"Playground"},Object(a.b)(c.a,{columns:"repeat(3, 1fr)",mdxType:"Grid"},Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"))),Object(a.b)("p",null,"Combine ",Object(a.b)("inlineCode",{parentName:"p"},"repeat()")," with ",Object(a.b)("inlineCode",{parentName:"p"},"auto-fit")," and ",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/minmax"},Object(a.b)("inlineCode",{parentName:"a"},"minmax()"))," to build automatic\nresponsive layouts. Resize the playground to see it in action."),Object(a.b)(i.c,{__position:3,__code:'<Grid columns="repeat(auto-fit, minmax(200px, auto))">\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n</Grid>',__scope:{props:d,DefaultLayout:l.a,Playground:i.c,Props:i.d,Placeholder:n.a,Grid:c.a,GridSpan:b.a,DefaultLayout:l.a,_frontmatter:p},mdxType:"Playground"},Object(a.b)(c.a,{columns:"repeat(auto-fit, minmax(200px, auto))",mdxType:"Grid"},Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"))),Object(a.b)("p",null,"👉 If you need your items to have ",Object(a.b)("strong",{parentName:"p"},"equal height")," even with content of varying\nlength, it may be necessary to set ",Object(a.b)("inlineCode",{parentName:"p"},"height: 100%")," on them."),Object(a.b)("h2",{id:"rows"},"Rows"),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"columns")," and ",Object(a.b)("inlineCode",{parentName:"p"},"rows")," to specify a more complicated grid layout."),Object(a.b)(i.c,{__position:4,__code:'<Grid columns="1fr 2fr" rows="auto 200px auto">\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n</Grid>',__scope:{props:d,DefaultLayout:l.a,Playground:i.c,Props:i.d,Placeholder:n.a,Grid:c.a,GridSpan:b.a,DefaultLayout:l.a,_frontmatter:p},mdxType:"Playground"},Object(a.b)(c.a,{columns:"1fr 2fr",rows:"auto 200px auto",mdxType:"Grid"},Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"))),Object(a.b)("h2",{id:"gaps"},"Gaps"),Object(a.b)("p",null,"Both column and row gaps can be customized."),Object(a.b)(i.c,{__position:5,__code:'<Grid columns="repeat(3, 1fr)" columnGap="0.75rem" rowGap="2rem">\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n</Grid>',__scope:{props:d,DefaultLayout:l.a,Playground:i.c,Props:i.d,Placeholder:n.a,Grid:c.a,GridSpan:b.a,DefaultLayout:l.a,_frontmatter:p},mdxType:"Playground"},Object(a.b)(c.a,{columns:"repeat(3, 1fr)",columnGap:"0.75rem",rowGap:"2rem",mdxType:"Grid"},Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"))),Object(a.b)("h2",{id:"alignment"},"Alignment"),Object(a.b)("p",null,"Individual items and the entire grid content can be aligned and along both axes."),Object(a.b)(i.c,{__position:6,__code:'<Grid\n  columns="repeat(3, 10em)"\n  alignItems="center"\n  justifyItems="center"\n  justifyContent="center"\n>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>\n    Grid item\n    <br /> with two lines\n  </Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n</Grid>',__scope:{props:d,DefaultLayout:l.a,Playground:i.c,Props:i.d,Placeholder:n.a,Grid:c.a,GridSpan:b.a,DefaultLayout:l.a,_frontmatter:p},mdxType:"Playground"},Object(a.b)(c.a,{columns:"repeat(3, 10em)",alignItems:"center",justifyItems:"center",justifyContent:"center",mdxType:"Grid"},Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item",Object(a.b)("br",null)," with two lines"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"))),Object(a.b)("h2",{id:"custom-html-tag"},"Custom HTML Tag"),Object(a.b)("p",null,"To render as list for example, just change the output ",Object(a.b)("inlineCode",{parentName:"p"},"tag")," to ",Object(a.b)("inlineCode",{parentName:"p"},"ul")," or ",Object(a.b)("inlineCode",{parentName:"p"},"ol")," and\nwrap your items with ",Object(a.b)("inlineCode",{parentName:"p"},"<li>"),"."),Object(a.b)(i.c,{__position:7,__code:'<Grid tag="ul">\n  <li>\n    <Placeholder bordered>List item</Placeholder>\n  </li>\n  <li>\n    <Placeholder bordered>List item</Placeholder>\n  </li>\n  <li>\n    <Placeholder bordered>List item</Placeholder>\n  </li>\n</Grid>',__scope:{props:d,DefaultLayout:l.a,Playground:i.c,Props:i.d,Placeholder:n.a,Grid:c.a,GridSpan:b.a,DefaultLayout:l.a,_frontmatter:p},mdxType:"Playground"},Object(a.b)(c.a,{tag:"ul",mdxType:"Grid"},Object(a.b)("li",null,Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"List item")),Object(a.b)("li",null,Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"List item")),Object(a.b)("li",null,Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"List item")))),Object(a.b)("h2",{id:"media-queries"},"Media Queries"),Object(a.b)("p",null,"If you need to build more complicated layouts, you have full control over the\ngrid definition. Just specify your grid layout for\n",Object(a.b)("a",{parentName:"p",href:"/foundation/breakpoints"},"breakpoints")," where a change of layout is needed.\nThe Grid component is written with the mobile-first approach so values for small\nbreakpoints are used until they're overridden by a bigger breakpoint. If ",Object(a.b)("inlineCode",{parentName:"p"},"xs"),"\nsettings are omitted, theme defaults are used. Resize your browser to see how it\nworks."),Object(a.b)(i.c,{__position:8,__code:"<Grid\n  columns={{\n    xs: '1fr',\n    md: '1fr 2fr',\n  }}\n  columnGap={{\n    md: 'var(--rui-spacing-2)',\n    lg: 'var(--rui-spacing-4)',\n  }}\n  rows={{\n    xs: 'auto auto 200px 200px',\n    md: 'auto 200px auto',\n  }}\n  rowGap={{\n    xs: 'var(--rui-spacing-3)',\n    md: 'var(--rui-spacing-4)',\n  }}\n>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n</Grid>",__scope:{props:d,DefaultLayout:l.a,Playground:i.c,Props:i.d,Placeholder:n.a,Grid:c.a,GridSpan:b.a,DefaultLayout:l.a,_frontmatter:p},mdxType:"Playground"},Object(a.b)(c.a,{columns:{xs:"1fr",md:"1fr 2fr"},columnGap:{md:"var(--rui-spacing-2)",lg:"var(--rui-spacing-4)"},rows:{xs:"auto auto 200px 200px",md:"auto 200px auto"},rowGap:{xs:"var(--rui-spacing-3)",md:"var(--rui-spacing-4)"},mdxType:"Grid"},Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"))),Object(a.b)("h2",{id:"advanced-layouts"},"Advanced Layouts"),Object(a.b)("p",null,"Wrap your content with GridSpan component to span it over multiple columns or\nrows. Use the ",Object(a.b)("inlineCode",{parentName:"p"},"autoFlow")," option to control the layout when combined with\nresponsive columns and rows."),Object(a.b)(i.c,{__position:9,__code:"<Grid\n  autoFlow={{\n    xs: 'row dense',\n    sm: 'column',\n  }}\n  columns={{\n    xs: 'repeat(2, 1fr)',\n    sm: 'repeat(4, 1fr)',\n  }}\n  rows={{\n    xs: 'repeat(8, 50px)',\n    sm: 'auto 100px auto auto',\n  }}\n>\n  <Placeholder bordered>Grid item 1</Placeholder>\n  <Placeholder bordered>Grid item 2</Placeholder>\n  <Placeholder bordered>Grid item 3</Placeholder>\n  <Placeholder bordered>Grid item 4</Placeholder>\n  <Placeholder bordered>Grid item 5</Placeholder>\n  <GridSpan columns={2} rows={2}>\n    <Placeholder bordered height=\"100%\">\n      Grid item spanning over two lines and two rows\n    </Placeholder>\n  </GridSpan>\n  <Placeholder bordered>Grid item 6</Placeholder>\n  <Placeholder bordered>Grid item 7</Placeholder>\n  <Placeholder bordered>Grid item 8</Placeholder>\n  <Placeholder bordered>Grid item 9</Placeholder>\n  <Placeholder bordered>Grid item 10</Placeholder>\n  <Placeholder bordered>Grid item 11</Placeholder>\n  <Placeholder bordered>Grid item 12</Placeholder>\n</Grid>",__scope:{props:d,DefaultLayout:l.a,Playground:i.c,Props:i.d,Placeholder:n.a,Grid:c.a,GridSpan:b.a,DefaultLayout:l.a,_frontmatter:p},mdxType:"Playground"},Object(a.b)(c.a,{autoFlow:{xs:"row dense",sm:"column"},columns:{xs:"repeat(2, 1fr)",sm:"repeat(4, 1fr)"},rows:{xs:"repeat(8, 50px)",sm:"auto 100px auto auto"},mdxType:"Grid"},Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item 1"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item 2"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item 3"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item 4"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item 5"),Object(a.b)(b.a,{columns:2,rows:2,mdxType:"GridSpan"},Object(a.b)(n.a,{bordered:!0,height:"100%",mdxType:"Placeholder"},"Grid item spanning over two lines and two rows")),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item 6"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item 7"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item 8"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item 9"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item 10"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item 11"),Object(a.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item 12"))),Object(a.b)("p",null,"👉 ",Object(a.b)("inlineCode",{parentName:"p"},"autoFlow")," (used in the example above) implements the ",Object(a.b)("inlineCode",{parentName:"p"},"grid-auto-flow")," CSS\nproperty. Check ",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow"},"MDN")," to fully understand available options."),Object(a.b)("h2",{id:"api"},"API"),Object(a.b)(i.d,{table:!0,of:c.a,mdxType:"Props"}),Object(a.b)("h3",{id:"gridspan-api"},"GridSpan API"),Object(a.b)("p",null,"Wrapper for content that should span multiple rows or columns."),Object(a.b)(i.d,{table:!0,of:b.a,mdxType:"Props"}),Object(a.b)("h2",{id:"theming"},"Theming"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Custom Property"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"--rui-Grid__column-gap")),Object(a.b)("td",{parentName:"tr",align:null},"Default column gap")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"--rui-Grid__row-gap")),Object(a.b)("td",{parentName:"tr",align:null},"Default row gap")))))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!Object.prototype.hasOwnProperty.call(u,"__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/lib/components/Grid/README.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-lib-components-grid-readme-mdx-bbe52b86fe5efcbdeacf.js.map