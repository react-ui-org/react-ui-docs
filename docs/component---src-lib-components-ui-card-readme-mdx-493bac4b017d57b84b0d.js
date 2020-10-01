(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{RJhb:function(e,a,r){"use strict";r.r(a),r.d(a,"_frontmatter",(function(){return s})),r.d(a,"default",(function(){return u}));var o=r("k0FJ"),t=r("yHgN"),d=(r("mXGw"),r("/FXl")),n=r("TjRS"),b=r("ZFoC"),l=r("8X2u"),i=r("3DVT"),c=r("Zdvd"),p=r("NH5+");r("aD51");const s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/lib/components/ui/Card/README.mdx"}});const y={_frontmatter:s},m=n.a;function u(e){let{components:a}=e,r=Object(t.a)(e,["components"]);return Object(d.b)(m,Object(o.a)({},y,r,{components:a,mdxType:"MDXLayout"}),Object(d.b)("h1",{id:"card"},"Card"),Object(d.b)("p",null,"Cards contain content and actions about a single subject."),Object(d.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(d.b)("p",null,"To use the Card component, you need to import at least Card and\n",Object(d.b)("a",Object(o.a)({parentName:"p"},{href:"#cardbody"}),"CardBody")," components:"),Object(d.b)("pre",null,Object(d.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import { Card, CardBody } from '@react-ui-org/react-ui';\n")),Object(d.b)("p",null,"And use it:"),Object(d.b)(b.c,{__position:0,__code:"<Card>\n  <CardBody>Hello!</CardBody>\n</Card>",__scope:{props:r,DefaultLayout:n.a,Playground:b.c,Props:b.d,Button:l.a,Card:i.a,CardBody:c.a,CardFooter:p.a,DefaultLayout:n.a,_frontmatter:s},mdxType:"Playground"},Object(d.b)(i.a,{mdxType:"Card"},Object(d.b)(c.a,{mdxType:"CardBody"},"Hello!"))),Object(d.b)("h2",{id:"general-guidelines"},"General Guidelines"),Object(d.b)("ul",null,Object(d.b)("li",{parentName:"ul"},Object(d.b)("p",{parentName:"li"},"The default (flat) card is ",Object(d.b)("strong",{parentName:"p"},"designed for a non-white background.")," You may\nwant to either use a different ",Object(d.b)("a",Object(o.a)({parentName:"p"},{href:"#variants"}),"variant")," or\n",Object(d.b)("a",Object(o.a)({parentName:"p"},{href:"/getting-started/theming"}),"customize")," the default appearance to make it stand\nout on white surfaces.")),Object(d.b)("li",{parentName:"ul"},Object(d.b)("p",{parentName:"li"},"The ",Object(d.b)("a",Object(o.a)({parentName:"p"},{href:"#cardbody"}),"CardBody")," component is the only required element in a card.\n",Object(d.b)("a",Object(o.a)({parentName:"p"},{href:"#cardfooter"}),"CardFooter")," is optional.")),Object(d.b)("li",{parentName:"ul"},Object(d.b)("p",{parentName:"li"},"Use ",Object(d.b)("strong",{parentName:"p"},"medium or low-emphasis buttons")," when there are more cards, eg. in a\ngrid. It will help you keep the UI clean and easy to scan."))),Object(d.b)("h2",{id:"card-composition"},"Card Composition"),Object(d.b)("p",null,"Aside from the mandatory ",Object(d.b)("a",Object(o.a)({parentName:"p"},{href:"#cardbody"}),"CardBody")," element, you can add a\n",Object(d.b)("a",Object(o.a)({parentName:"p"},{href:"#cardfooter"}),"CardFooter")," to better separate your card's actions from the rest\nof the content."),Object(d.b)("p",null,"Import all necessary components:"),Object(d.b)("pre",null,Object(d.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import { Card, CardBody, CardFooter } from '@react-ui-org/react-ui';\n")),Object(d.b)("p",null,"And use them:"),Object(d.b)(b.c,{__position:1,__code:'<Card>\n  <CardBody>Hello! I&apos;m card with a footer.</CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" />\n  </CardFooter>\n</Card>',__scope:{props:r,DefaultLayout:n.a,Playground:b.c,Props:b.d,Button:l.a,Card:i.a,CardBody:c.a,CardFooter:p.a,DefaultLayout:n.a,_frontmatter:s},mdxType:"Playground"},Object(d.b)(i.a,{mdxType:"Card"},Object(d.b)(c.a,{mdxType:"CardBody"},"Hello! I'm card with a footer."),Object(d.b)(p.a,{mdxType:"CardFooter"},Object(d.b)(l.a,{label:"Read more",priority:"outline",mdxType:"Button"})))),Object(d.b)("p",null,"👉 CardFooter is required in case you need to align the actions of multiple\ncards with varying height of content."),Object(d.b)("h2",{id:"raised-card"},"Raised Card"),Object(d.b)("p",null,"Add optional shadow to lift the card above surface."),Object(d.b)(b.c,{__position:2,__code:'<Card raised>\n  <CardBody>Hello! I&apos;m a raised card with a footer.</CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" />\n  </CardFooter>\n</Card>',__scope:{props:r,DefaultLayout:n.a,Playground:b.c,Props:b.d,Button:l.a,Card:i.a,CardBody:c.a,CardFooter:p.a,DefaultLayout:n.a,_frontmatter:s},mdxType:"Playground"},Object(d.b)(i.a,{raised:!0,mdxType:"Card"},Object(d.b)(c.a,{mdxType:"CardBody"},"Hello! I'm a raised card with a footer."),Object(d.b)(p.a,{mdxType:"CardFooter"},Object(d.b)(l.a,{label:"Read more",priority:"outline",mdxType:"Button"})))),Object(d.b)("h2",{id:"bordered-card"},"Bordered Card"),Object(d.b)("p",null,"Use a border when you need to visually separate the card from its background."),Object(d.b)(b.c,{__position:3,__code:'<Card type="bordered">\n  <CardBody>Hello! I&apos;m card with a border and a footer.</CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" />\n  </CardFooter>\n</Card>\n<Card type="bordered" raised>\n  <CardBody>\n    Hello! I&apos;m a raised card with a border and a footer.\n  </CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" />\n  </CardFooter>\n</Card>',__scope:{props:r,DefaultLayout:n.a,Playground:b.c,Props:b.d,Button:l.a,Card:i.a,CardBody:c.a,CardFooter:p.a,DefaultLayout:n.a,_frontmatter:s},mdxType:"Playground"},Object(d.b)(i.a,{type:"bordered",mdxType:"Card"},Object(d.b)(c.a,{mdxType:"CardBody"},"Hello! I'm card with a border and a footer."),Object(d.b)(p.a,{mdxType:"CardFooter"},Object(d.b)(l.a,{label:"Read more",priority:"outline",mdxType:"Button"}))),Object(d.b)(i.a,{type:"bordered",raised:!0,mdxType:"Card"},Object(d.b)(c.a,{mdxType:"CardBody"},"Hello! I'm a raised card with a border and a footer."),Object(d.b)(p.a,{mdxType:"CardFooter"},Object(d.b)(l.a,{label:"Read more",priority:"outline",mdxType:"Button"})))),Object(d.b)("h2",{id:"dense-card"},"Dense Card"),Object(d.b)("p",null,"Use a dense card when you need to save space on screen. Other elements in the\ncard should be also smaller to keep the card contained and easy to scan."),Object(d.b)(b.c,{__position:4,__code:'<Card dense raised>\n  <CardBody>\n    <small>Hello! I&apos;m a dense card. Everything is smaller here.</small>\n  </CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" size="small" />\n  </CardFooter>\n</Card>',__scope:{props:r,DefaultLayout:n.a,Playground:b.c,Props:b.d,Button:l.a,Card:i.a,CardBody:c.a,CardFooter:p.a,DefaultLayout:n.a,_frontmatter:s},mdxType:"Playground"},Object(d.b)(i.a,{dense:!0,raised:!0,mdxType:"Card"},Object(d.b)(c.a,{mdxType:"CardBody"},Object(d.b)("small",null,"Hello! I'm a dense card. Everything is smaller here.")),Object(d.b)(p.a,{mdxType:"CardFooter"},Object(d.b)(l.a,{label:"Read more",priority:"outline",size:"small",mdxType:"Button"})))),Object(d.b)("h2",{id:"variants"},"Variants"),Object(d.b)("p",null,"All ",Object(d.b)("a",Object(o.a)({parentName:"p"},{href:"/foundation/colors#ui-colors"}),"UI colors")," (success, warning, error, help,\ninfo, and note) are supported by cards to cover various needs of your app. The\nbordered card type is forced automatically to make sure the border is visible."),Object(d.b)(b.c,{__position:5,__code:'<Card type="success">\n  <CardBody>Hello! I&apos;m success variant of card.</CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" variant="success" />\n  </CardFooter>\n</Card>\n<Card type="warning">\n  <CardBody>Hello! I&apos;m warning variant of card.</CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" variant="warning" />\n  </CardFooter>\n</Card>\n<Card type="error">\n  <CardBody>Hello! I&apos;m error variant of card.</CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" variant="danger" />\n  </CardFooter>\n</Card>\n<Card type="help">\n  <CardBody>Hello! I&apos;m help variant of card.</CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" variant="dark" />\n  </CardFooter>\n</Card>\n<Card type="info">\n  <CardBody>Hello! I&apos;m info variant of card.</CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" variant="dark" />\n  </CardFooter>\n</Card>\n<Card type="note">\n  <CardBody>Hello! I&apos;m note variant of card.</CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" variant="dark" />\n  </CardFooter>\n</Card>',__scope:{props:r,DefaultLayout:n.a,Playground:b.c,Props:b.d,Button:l.a,Card:i.a,CardBody:c.a,CardFooter:p.a,DefaultLayout:n.a,_frontmatter:s},mdxType:"Playground"},Object(d.b)(i.a,{type:"success",mdxType:"Card"},Object(d.b)(c.a,{mdxType:"CardBody"},"Hello! I'm success variant of card."),Object(d.b)(p.a,{mdxType:"CardFooter"},Object(d.b)(l.a,{label:"Read more",priority:"outline",variant:"success",mdxType:"Button"}))),Object(d.b)(i.a,{type:"warning",mdxType:"Card"},Object(d.b)(c.a,{mdxType:"CardBody"},"Hello! I'm warning variant of card."),Object(d.b)(p.a,{mdxType:"CardFooter"},Object(d.b)(l.a,{label:"Read more",priority:"outline",variant:"warning",mdxType:"Button"}))),Object(d.b)(i.a,{type:"error",mdxType:"Card"},Object(d.b)(c.a,{mdxType:"CardBody"},"Hello! I'm error variant of card."),Object(d.b)(p.a,{mdxType:"CardFooter"},Object(d.b)(l.a,{label:"Read more",priority:"outline",variant:"danger",mdxType:"Button"}))),Object(d.b)(i.a,{type:"help",mdxType:"Card"},Object(d.b)(c.a,{mdxType:"CardBody"},"Hello! I'm help variant of card."),Object(d.b)(p.a,{mdxType:"CardFooter"},Object(d.b)(l.a,{label:"Read more",priority:"outline",variant:"dark",mdxType:"Button"}))),Object(d.b)(i.a,{type:"info",mdxType:"Card"},Object(d.b)(c.a,{mdxType:"CardBody"},"Hello! I'm info variant of card."),Object(d.b)(p.a,{mdxType:"CardFooter"},Object(d.b)(l.a,{label:"Read more",priority:"outline",variant:"dark",mdxType:"Button"}))),Object(d.b)(i.a,{type:"note",mdxType:"Card"},Object(d.b)(c.a,{mdxType:"CardBody"},"Hello! I'm note variant of card."),Object(d.b)(p.a,{mdxType:"CardFooter"},Object(d.b)(l.a,{label:"Read more",priority:"outline",variant:"dark",mdxType:"Button"})))),Object(d.b)("h2",{id:"states"},"States"),Object(d.b)("h3",{id:"disabled-state"},"Disabled State"),Object(d.b)("p",null,"An entire card can appear disabled. However, you'll still need to manually\ndisable its interactive elements to disallow user's interaction."),Object(d.b)(b.c,{__position:6,__code:'<Card disabled>\n  <CardBody>Hello! I&apos;m a disabled card.</CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" disabled />\n  </CardFooter>\n</Card>\n<Card disabled raised>\n  <CardBody>Hello! I&apos;m a disabled raised card.</CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" disabled />\n  </CardFooter>\n</Card>\n<Card variant="bordered" disabled>\n  <CardBody>Hello! I&apos;m a disabled bordered card.</CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" disabled />\n  </CardFooter>\n</Card>\n<Card type="success" disabled>\n  <CardBody>Hello! I&apos;m a disabled success variant of card.</CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" variant="success" disabled />\n  </CardFooter>\n</Card>',__scope:{props:r,DefaultLayout:n.a,Playground:b.c,Props:b.d,Button:l.a,Card:i.a,CardBody:c.a,CardFooter:p.a,DefaultLayout:n.a,_frontmatter:s},mdxType:"Playground"},Object(d.b)(i.a,{disabled:!0,mdxType:"Card"},Object(d.b)(c.a,{mdxType:"CardBody"},"Hello! I'm a disabled card."),Object(d.b)(p.a,{mdxType:"CardFooter"},Object(d.b)(l.a,{label:"Read more",priority:"outline",disabled:!0,mdxType:"Button"}))),Object(d.b)(i.a,{disabled:!0,raised:!0,mdxType:"Card"},Object(d.b)(c.a,{mdxType:"CardBody"},"Hello! I'm a disabled raised card."),Object(d.b)(p.a,{mdxType:"CardFooter"},Object(d.b)(l.a,{label:"Read more",priority:"outline",disabled:!0,mdxType:"Button"}))),Object(d.b)(i.a,{variant:"bordered",disabled:!0,mdxType:"Card"},Object(d.b)(c.a,{mdxType:"CardBody"},"Hello! I'm a disabled bordered card."),Object(d.b)(p.a,{mdxType:"CardFooter"},Object(d.b)(l.a,{label:"Read more",priority:"outline",disabled:!0,mdxType:"Button"}))),Object(d.b)(i.a,{type:"success",disabled:!0,mdxType:"Card"},Object(d.b)(c.a,{mdxType:"CardBody"},"Hello! I'm a disabled success variant of card."),Object(d.b)(p.a,{mdxType:"CardFooter"},Object(d.b)(l.a,{label:"Read more",priority:"outline",variant:"success",disabled:!0,mdxType:"Button"})))),Object(d.b)("h2",{id:"api"},"API"),Object(d.b)(b.d,{of:i.a,mdxType:"Props"}),Object(d.b)("h2",{id:"cardbody"},"CardBody"),Object(d.b)("p",null,"CardBody is the only required element in a card. See\n",Object(d.b)("a",Object(o.a)({parentName:"p"},{href:"#card-composition"}),"Card Composition")," for all details."),Object(d.b)(b.d,{of:c.a,mdxType:"Props"}),Object(d.b)("h2",{id:"cardfooter"},"CardFooter"),Object(d.b)("p",null,"Separate your card actions with CardFooter. See\n",Object(d.b)("a",Object(o.a)({parentName:"p"},{href:"#card-composition"}),"Card Composition")," for all details."),Object(d.b)(b.d,{of:p.a,mdxType:"Props"}),Object(d.b)("hr",null),Object(d.b)("p",null,"Next: ",Object(d.b)("a",Object(o.a)({parentName:"p"},{href:"/components/ui/checkbox-field"}),"CheckboxField →")))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/lib/components/ui/Card/README.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-lib-components-ui-card-readme-mdx-493bac4b017d57b84b0d.js.map