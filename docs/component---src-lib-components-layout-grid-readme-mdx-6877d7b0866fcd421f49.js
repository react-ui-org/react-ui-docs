(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"sm/y":function(e,r,d){"use strict";d.r(r),d.d(r,"_frontmatter",(function(){return m})),d.d(r,"default",(function(){return h}));var o=d("Fcif"),a=d("dV/x"),t=(d("mXGw"),d("/FXl")),l=d("TjRS"),i=d("ZFoC"),n=d("s0IP"),c=d("G2fw"),b=d("D1aC");d("aD51");const m={};void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/lib/components/layout/Grid/README.mdx"}});const p={_frontmatter:m},s=l.a;function h(e){let{components:r}=e,d=Object(a.a)(e,["components"]);return Object(t.b)(s,Object(o.a)({},p,d,{components:r,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"grid"},"Grid"),Object(t.b)("p",null,"The responsive Grid layout aligns content into an organized grid."),Object(t.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(t.b)("p",null,"To implement the Grid component, you need to import it first:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-js"},"import { Grid } from '@react-ui-org/react-ui';\n")),Object(t.b)("p",null,"And use it:"),Object(t.b)(i.c,{__position:0,__code:'<Grid columns="1fr 1fr 1fr">\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n</Grid>',__scope:{props:d,DefaultLayout:l.a,Playground:i.c,Props:i.d,Placeholder:n.a,Grid:c.a,GridSpan:b.a,DefaultLayout:l.a,_frontmatter:m},mdxType:"Playground"},Object(t.b)(c.a,{columns:"1fr 1fr 1fr",mdxType:"Grid"},Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"))),Object(t.b)("p",null,"See ",Object(t.b)("a",{parentName:"p",href:"#api"},"API")," for all available options."),Object(t.b)("h2",{id:"general-guidelines"},"General Guidelines"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("p",{parentName:"li"},"This component implements native\n",Object(t.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"},"CSS grid layout"),",\nthe right CSS tool for two-dimensional layouts. You may use any value accepted\nby\n",Object(t.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns"},"grid-template-columns"),",\n",Object(t.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows"},"grid-template-rows"),",\n",Object(t.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap"},"grid-column-gap"),",\n",Object(t.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap"},"grid-row-gap"),",\n",Object(t.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow"},"grid-auto-flow"),",\n",Object(t.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/align-content"},"align-content"),",\n",Object(t.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/align-items"},"align-items"),",\n",Object(t.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content"},"justify-content"),",\n",Object(t.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items"},"justify-items"),"\nand CSS properties in corresponding API options of the component.")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("p",{parentName:"li"},"To align your items in the grid, ",Object(t.b)("strong",{parentName:"p"},"simply wrap")," them with the Grid\ncomponent. Unlike other grid frameworks and UI libraries, ",Object(t.b)("strong",{parentName:"p"},"no additional\nmarkup")," like GridItem or Cell is necessary for your items. But it's there\nwhen you really need it—see ",Object(t.b)("a",{parentName:"p",href:"#advanced-layouts"},"Advanced Layouts"),".")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("p",{parentName:"li"},"The Grid component is so powerful that it enables you to build even very\nadvanced layouts ",Object(t.b)("strong",{parentName:"p"},"without")," having to write ",Object(t.b)("strong",{parentName:"p"},"a single line of custom CSS."),"\nSee ",Object(t.b)("a",{parentName:"p",href:"#advanced-layouts"},"Advanced Layouts")," for more."))),Object(t.b)("p",null,"👉 The default layout has one column, auto-sized rows and gaps of\n",Object(t.b)("a",{parentName:"p",href:"/foundation/spacing"},"size 4"),". Defaults for all Grid API options can be\n",Object(t.b)("a",{parentName:"p",href:"/customize/theming"},"customized")," with CSS custom properties."),Object(t.b)("h2",{id:"columns-and-rows"},"Columns and Rows"),Object(t.b)("p",null,"Use ",Object(t.b)("inlineCode",{parentName:"p"},"columns")," and ",Object(t.b)("inlineCode",{parentName:"p"},"rows")," to specify your grid layout."),Object(t.b)(i.c,{__position:1,__code:'<Grid columns="1fr 2fr" rows="auto 200px auto">\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n</Grid>',__scope:{props:d,DefaultLayout:l.a,Playground:i.c,Props:i.d,Placeholder:n.a,Grid:c.a,GridSpan:b.a,DefaultLayout:l.a,_frontmatter:m},mdxType:"Playground"},Object(t.b)(c.a,{columns:"1fr 2fr",rows:"auto 200px auto",mdxType:"Grid"},Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"))),Object(t.b)("p",null,"You can use the\n",Object(t.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/repeat"},Object(t.b)("inlineCode",{parentName:"a"},"repeat()"))," function\nto specify a recurring pattern."),Object(t.b)(i.c,{__position:2,__code:'<Grid columns="repeat(3, 1fr)">\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n</Grid>',__scope:{props:d,DefaultLayout:l.a,Playground:i.c,Props:i.d,Placeholder:n.a,Grid:c.a,GridSpan:b.a,DefaultLayout:l.a,_frontmatter:m},mdxType:"Playground"},Object(t.b)(c.a,{columns:"repeat(3, 1fr)",mdxType:"Grid"},Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"))),Object(t.b)("p",null,"Combine ",Object(t.b)("inlineCode",{parentName:"p"},"repeat()")," with ",Object(t.b)("inlineCode",{parentName:"p"},"auto-fit")," and\n",Object(t.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/minmax"},Object(t.b)("inlineCode",{parentName:"a"},"minmax()"))," to build\nautomatic responsive layouts. Resize the playground to see it in action."),Object(t.b)(i.c,{__position:3,__code:'<Grid columns="repeat(auto-fit, minmax(200px, auto))">\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n</Grid>',__scope:{props:d,DefaultLayout:l.a,Playground:i.c,Props:i.d,Placeholder:n.a,Grid:c.a,GridSpan:b.a,DefaultLayout:l.a,_frontmatter:m},mdxType:"Playground"},Object(t.b)(c.a,{columns:"repeat(auto-fit, minmax(200px, auto))",mdxType:"Grid"},Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"))),Object(t.b)("p",null,"👉 If you need your items to have ",Object(t.b)("strong",{parentName:"p"},"equal height")," even with content of varying\nlength, it may be necessary to set ",Object(t.b)("inlineCode",{parentName:"p"},"height: 100%")," on them."),Object(t.b)("h2",{id:"gaps"},"Gaps"),Object(t.b)("p",null,"Both column and row gaps can be customized."),Object(t.b)(i.c,{__position:4,__code:'<Grid columns="repeat(3, 1fr)" columnGap="0.75rem" rowGap="2rem">\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n</Grid>',__scope:{props:d,DefaultLayout:l.a,Playground:i.c,Props:i.d,Placeholder:n.a,Grid:c.a,GridSpan:b.a,DefaultLayout:l.a,_frontmatter:m},mdxType:"Playground"},Object(t.b)(c.a,{columns:"repeat(3, 1fr)",columnGap:"0.75rem",rowGap:"2rem",mdxType:"Grid"},Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"))),Object(t.b)("h2",{id:"alignment"},"Alignment"),Object(t.b)("p",null,"Individual items and the entire grid content can be aligned and along both axes."),Object(t.b)(i.c,{__position:5,__code:'<Grid\n  columns="repeat(3, 10em)"\n  alignItems="center"\n  justifyItems="center"\n  justifyContent="center"\n>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>\n    Grid item\n    <br /> with two lines\n  </Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n</Grid>',__scope:{props:d,DefaultLayout:l.a,Playground:i.c,Props:i.d,Placeholder:n.a,Grid:c.a,GridSpan:b.a,DefaultLayout:l.a,_frontmatter:m},mdxType:"Playground"},Object(t.b)(c.a,{columns:"repeat(3, 10em)",alignItems:"center",justifyItems:"center",justifyContent:"center",mdxType:"Grid"},Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item",Object(t.b)("br",null)," with two lines"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"))),Object(t.b)("h2",{id:"media-queries"},"Media Queries"),Object(t.b)("p",null,"If you need to build more complicated layouts, you have full control over the\ngrid definition. Just specify your grid layout for\n",Object(t.b)("a",{parentName:"p",href:"/foundation/breakpoints"},"breakpoints")," where a change of layout is needed.\nThe Grid component is written with the mobile-first approach so values for small\nbreakpoints are used until they're overriden by a bigger breakpoint. If ",Object(t.b)("inlineCode",{parentName:"p"},"xs"),"\nsettings are omitted, theme defaults are used. Resize your browser to see how it\nworks."),Object(t.b)(i.c,{__position:6,__code:"<Grid\n  columns={{\n    xs: '1fr',\n    md: '1fr 2fr',\n  }}\n  columnGap={{\n    md: 'var(--rui-spacing-2)',\n    lg: 'var(--rui-spacing-4)',\n  }}\n  rows={{\n    xs: 'auto auto 200px 200px',\n    md: 'auto 200px auto',\n  }}\n  rowGap={{\n    xs: 'var(--rui-spacing-3)',\n    md: 'var(--rui-spacing-4)',\n  }}\n>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n</Grid>",__scope:{props:d,DefaultLayout:l.a,Playground:i.c,Props:i.d,Placeholder:n.a,Grid:c.a,GridSpan:b.a,DefaultLayout:l.a,_frontmatter:m},mdxType:"Playground"},Object(t.b)(c.a,{columns:{xs:"1fr",md:"1fr 2fr"},columnGap:{md:"var(--rui-spacing-2)",lg:"var(--rui-spacing-4)"},rows:{xs:"auto auto 200px 200px",md:"auto 200px auto"},rowGap:{xs:"var(--rui-spacing-3)",md:"var(--rui-spacing-4)"},mdxType:"Grid"},Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"))),Object(t.b)("h2",{id:"advanced-layouts"},"Advanced Layouts"),Object(t.b)("p",null,"Wrap your content with GridSpan component to span it over multiple columns or\nrows. Use the ",Object(t.b)("inlineCode",{parentName:"p"},"autoFlow")," option to control the layout when combined with\nresponsive columns and rows."),Object(t.b)(i.c,{__position:7,__code:"<Grid\n  autoFlow=\"row dense\"\n  columns={{\n    xs: 'repeat(2, 1fr)',\n    sm: 'repeat(4, 1fr)',\n  }}\n  rows={{\n    xs: 'repeat(8, 50px)',\n    sm: 'auto 100px auto auto',\n  }}\n>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <GridSpan columns={2} rows={2}>\n    <Placeholder bordered height=\"100%\">\n      Grid item spanning over two lines and two rows\n    </Placeholder>\n  </GridSpan>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n  <Placeholder bordered>Grid item</Placeholder>\n</Grid>",__scope:{props:d,DefaultLayout:l.a,Playground:i.c,Props:i.d,Placeholder:n.a,Grid:c.a,GridSpan:b.a,DefaultLayout:l.a,_frontmatter:m},mdxType:"Playground"},Object(t.b)(c.a,{autoFlow:"row dense",columns:{xs:"repeat(2, 1fr)",sm:"repeat(4, 1fr)"},rows:{xs:"repeat(8, 50px)",sm:"auto 100px auto auto"},mdxType:"Grid"},Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(b.a,{columns:2,rows:2,mdxType:"GridSpan"},Object(t.b)(n.a,{bordered:!0,height:"100%",mdxType:"Placeholder"},"Grid item spanning over two lines and two rows")),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"),Object(t.b)(n.a,{bordered:!0,mdxType:"Placeholder"},"Grid item"))),Object(t.b)("p",null,"👉 ",Object(t.b)("inlineCode",{parentName:"p"},"autoFlow")," implements the ",Object(t.b)("inlineCode",{parentName:"p"},"grid-auto-flow")," CSS property. See\n",Object(t.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow"},"MDN")," to fully\nunderstand available options."),Object(t.b)("h2",{id:"api"},"API"),Object(t.b)(i.d,{table:!0,of:c.a,mdxType:"Props"}),Object(t.b)("h3",{id:"gridspan"},"GridSpan"),Object(t.b)("p",null,"Wrapper for content that should span multiple rows or columns."),Object(t.b)(i.d,{table:!0,of:b.a,mdxType:"Props"}))}void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/lib/components/layout/Grid/README.mdx"}}),h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-lib-components-layout-grid-readme-mdx-6877d7b0866fcd421f49.js.map