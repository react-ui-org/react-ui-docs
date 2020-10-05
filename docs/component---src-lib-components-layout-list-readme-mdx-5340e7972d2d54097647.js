(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"8Bkj":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return h}));var i=a("k0FJ"),n=a("yHgN"),o=(a("mXGw"),a("/FXl")),r=a("TjRS"),l=a("ZFoC"),s=a("s0IP"),b=a("zPnZ"),d=a("kNT2");a("aD51");const c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/lib/components/layout/List/README.mdx"}});const m={_frontmatter:c},p=r.a;function h(e){let{components:t}=e,a=Object(n.a)(e,["components"]);return Object(o.b)(p,Object(i.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"list"},"List"),Object(o.b)("p",null,"The List aligns content into an organized list."),Object(o.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(o.b)("p",null,"To implement the List component, you need to import it first:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"import { List, ListItem } from '@react-ui-org/react-ui';\n")),Object(o.b)("p",null,"And use it:"),Object(o.b)(l.c,{__position:0,__code:"<List>\n  <ListItem>\n    <Placeholder bordered>List item</Placeholder>\n  </ListItem>\n  <ListItem>\n    <Placeholder bordered>List item</Placeholder>\n  </ListItem>\n  <ListItem>\n    <Placeholder bordered>List item</Placeholder>\n  </ListItem>\n</List>",__scope:{props:a,DefaultLayout:r.a,Playground:l.c,Props:l.d,Placeholder:s.a,List:b.a,ListItem:d.a,DefaultLayout:r.a,_frontmatter:c},mdxType:"Playground"},Object(o.b)(b.a,{mdxType:"List"},Object(o.b)(d.a,{mdxType:"ListItem"},Object(o.b)(s.a,{bordered:!0,mdxType:"Placeholder"},"List item")),Object(o.b)(d.a,{mdxType:"ListItem"},Object(o.b)(s.a,{bordered:!0,mdxType:"Placeholder"},"List item")),Object(o.b)(d.a,{mdxType:"ListItem"},Object(o.b)(s.a,{bordered:!0,mdxType:"Placeholder"},"List item")))),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#api"}),"API")," for all available options."),Object(o.b)("h2",{id:"general-guidelines"},"General Guidelines"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Wrap your items")," into the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#listitem"}),"ListItem")," component. This ensures\nyour content is properly spaced and aligned with other List elements. Do\n",Object(o.b)("strong",{parentName:"p"},"not")," try to put any custom HTML or React components directly into the\nList layout without wrapping it with the ListItem first.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"For forms, use rather the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/components/layout/form-layout"}),"FormLayout"),"\ncomponent which is designed specifically for that purpose."))),Object(o.b)("h2",{id:"list-alignment"},"List Alignment"),Object(o.b)("p",null,"You can simply set the list alignment by specifying the ",Object(o.b)("inlineCode",{parentName:"p"},"align")," option."),Object(o.b)("p",null,"👉 At the current stage of development, React UI is ",Object(o.b)("strong",{parentName:"p"},"RTL aware")," so switching\nto a fully RTL-compatible behavior in the future should be painless. That's why\nthe alignment values are called rather ",Object(o.b)("inlineCode",{parentName:"p"},"start")," than ",Object(o.b)("inlineCode",{parentName:"p"},"left")," and ",Object(o.b)("inlineCode",{parentName:"p"},"end")," instead of\n",Object(o.b)("inlineCode",{parentName:"p"},"right"),"."),Object(o.b)(l.c,{__position:1,__code:'<List align="end">\n  <ListItem>\n    <Placeholder bordered>List item</Placeholder>\n  </ListItem>\n  <ListItem>\n    <Placeholder bordered>List item</Placeholder>\n  </ListItem>\n  <ListItem>\n    <Placeholder bordered>List item</Placeholder>\n  </ListItem>\n</List>',__scope:{props:a,DefaultLayout:r.a,Playground:l.c,Props:l.d,Placeholder:s.a,List:b.a,ListItem:d.a,DefaultLayout:r.a,_frontmatter:c},mdxType:"Playground"},Object(o.b)(b.a,{align:"end",mdxType:"List"},Object(o.b)(d.a,{mdxType:"ListItem"},Object(o.b)(s.a,{bordered:!0,mdxType:"Placeholder"},"List item")),Object(o.b)(d.a,{mdxType:"ListItem"},Object(o.b)(s.a,{bordered:!0,mdxType:"Placeholder"},"List item")),Object(o.b)(d.a,{mdxType:"ListItem"},Object(o.b)(s.a,{bordered:!0,mdxType:"Placeholder"},"List item")))),Object(o.b)("h2",{id:"auto-width"},"Auto Width"),Object(o.b)("p",null,"For cases when you prefer the list items to keep their original width and don't\nwant them to expand over the full width of the parent of the list, there is the\n",Object(o.b)("inlineCode",{parentName:"p"},"autoWidth")," option. It ",Object(o.b)("strong",{parentName:"p"},"shrinks the list according to its longest item."),"\nHowever, the root div always behaves as a full-width block element (unless you\nput it inside a flex or grid layout)."),Object(o.b)(l.c,{__position:2,__code:'<List align="end" autoWidth>\n  <ListItem>\n    <Placeholder bordered>List item</Placeholder>\n  </ListItem>\n  <ListItem>\n    <Placeholder bordered>List item that is longer</Placeholder>\n  </ListItem>\n  <ListItem>\n    <Placeholder bordered>List item that is even a bit longer</Placeholder>\n  </ListItem>\n</List>',__scope:{props:a,DefaultLayout:r.a,Playground:l.c,Props:l.d,Placeholder:s.a,List:b.a,ListItem:d.a,DefaultLayout:r.a,_frontmatter:c},mdxType:"Playground"},Object(o.b)(b.a,{align:"end",autoWidth:!0,mdxType:"List"},Object(o.b)(d.a,{mdxType:"ListItem"},Object(o.b)(s.a,{bordered:!0,mdxType:"Placeholder"},"List item")),Object(o.b)(d.a,{mdxType:"ListItem"},Object(o.b)(s.a,{bordered:!0,mdxType:"Placeholder"},"List item that is longer")),Object(o.b)(d.a,{mdxType:"ListItem"},Object(o.b)(s.a,{bordered:!0,mdxType:"Placeholder"},"List item that is even a bit longer")))),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)(l.d,{of:b.a,mdxType:"Props"}),Object(o.b)("h2",{id:"listitem"},"ListItem"),Object(o.b)("p",null,"A wrapper for individual list items."),Object(o.b)(l.d,{of:d.a,mdxType:"Props"}),Object(o.b)("hr",null),Object(o.b)("p",null,"Next: ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/components/layout/media"}),"Media →")))}void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/lib/components/layout/List/README.mdx"}}),h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-lib-components-layout-list-readme-mdx-5340e7972d2d54097647.js.map