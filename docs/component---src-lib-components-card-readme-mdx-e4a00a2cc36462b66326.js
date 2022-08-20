(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{y5Lm:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return b})),t.d(a,"default",(function(){return u}));var r=t("Fcif"),o=t("dV/x"),n=(t("mXGw"),t("/FXl")),d=t("TjRS"),l=t("ZFoC"),i=t("nBnF");t("aD51");const c=["components"],b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!Object.prototype.hasOwnProperty.call(b,"__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/lib/components/Card/README.mdx"}});const s={_frontmatter:b},p=d.a;function u(e){let{components:a}=e,t=Object(o.a)(e,c);return Object(n.b)(p,Object(r.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"card"},"Card"),Object(n.b)("p",null,"Cards contain content and actions about a single subject."),Object(n.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(n.b)("p",null,"To implement the Card component, you need to import at least Card and\n",Object(n.b)("a",{parentName:"p",href:"#cardbody"},"CardBody")," components:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},"import { Card, CardBody } from '@react-ui-org/react-ui';\n")),Object(n.b)("p",null,"And use it:"),Object(n.b)(l.c,{__position:0,__code:"<Card>\n  <CardBody>Hello!</CardBody>\n</Card>",__scope:{props:t,DefaultLayout:d.a,Playground:l.c,Props:l.d,Button:i.c,ScrollView:i.y,Card:i.e,CardBody:i.f,CardFooter:i.g,DefaultLayout:d.a,_frontmatter:b},mdxType:"Playground"},Object(n.b)(i.e,{mdxType:"Card"},Object(n.b)(i.f,{mdxType:"CardBody"},"Hello!"))),Object(n.b)("p",null,"See ",Object(n.b)("a",{parentName:"p",href:"#api"},"API")," for all available options."),Object(n.b)("h2",{id:"general-guidelines"},"General Guidelines"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Default card is ",Object(n.b)("strong",{parentName:"p"},"designed for non-white background.")," You may want to either\nuse the ",Object(n.b)("a",{parentName:"p",href:"#raised-card"},"raised variant")," or\n",Object(n.b)("a",{parentName:"p",href:"/customize/theming/overview"},"customize")," the default appearance to make the\ncard stand out on white surfaces.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Use optional ",Object(n.b)("a",{parentName:"p",href:"#cardbody"},"CardBody")," and ",Object(n.b)("a",{parentName:"p",href:"#cardfooter"},"CardFooter")," components to\nprovide your content with expected spacing.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Use ",Object(n.b)("strong",{parentName:"p"},"medium or low-emphasis buttons")," when there are more cards, e.g. in a\ngrid. It will help you keep the UI clean and easy to scan.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Card, or Paper?")," Card is a versatile surface for displaying content.\nHowever, there is also the ",Object(n.b)("a",{parentName:"p",href:"/components/paper"},"Paper")," component. While Card\nis designed for displaying items (and also supports more visual options),\nPaper is usually used to hold larger content areas like lists, grids, or\nforms."))),Object(n.b)("h2",{id:"card-composition"},"Card Composition"),Object(n.b)("p",null,"Aside from the ",Object(n.b)("a",{parentName:"p",href:"#cardbody"},"CardBody")," element, you can add a\n",Object(n.b)("a",{parentName:"p",href:"#cardfooter"},"CardFooter")," to better separate your card's actions from the rest\nof the content."),Object(n.b)("p",null,"Import all necessary components:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},"import { Card, CardBody, CardFooter } from '@react-ui-org/react-ui';\n")),Object(n.b)("p",null,"And use them:"),Object(n.b)(l.c,{__position:1,__code:'<Card>\n  <CardBody>Hello! I&apos;m card with footer.</CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" />\n  </CardFooter>\n</Card>',__scope:{props:t,DefaultLayout:d.a,Playground:l.c,Props:l.d,Button:i.c,ScrollView:i.y,Card:i.e,CardBody:i.f,CardFooter:i.g,DefaultLayout:d.a,_frontmatter:b},mdxType:"Playground"},Object(n.b)(i.e,{mdxType:"Card"},Object(n.b)(i.f,{mdxType:"CardBody"},"Hello! I'm card with footer."),Object(n.b)(i.g,{mdxType:"CardFooter"},Object(n.b)(i.c,{label:"Read more",priority:"outline",mdxType:"Button"})))),Object(n.b)("p",null,"👉 CardFooter is required in case you need to align the actions of multiple\ncards with varying height of content."),Object(n.b)("h2",{id:"raised-card"},"Raised Card"),Object(n.b)("p",null,"Add optional shadow to lift the card above surface."),Object(n.b)(l.c,{__position:2,__code:'<Card raised>\n  <CardBody>Hello! I&apos;m raised card with footer.</CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" />\n  </CardFooter>\n</Card>',__scope:{props:t,DefaultLayout:d.a,Playground:l.c,Props:l.d,Button:i.c,ScrollView:i.y,Card:i.e,CardBody:i.f,CardFooter:i.g,DefaultLayout:d.a,_frontmatter:b},mdxType:"Playground"},Object(n.b)(i.e,{raised:!0,mdxType:"Card"},Object(n.b)(i.f,{mdxType:"CardBody"},"Hello! I'm raised card with footer."),Object(n.b)(i.g,{mdxType:"CardFooter"},Object(n.b)(i.c,{label:"Read more",priority:"outline",mdxType:"Button"})))),Object(n.b)("h2",{id:"dense-card"},"Dense Card"),Object(n.b)("p",null,"Use a dense card when you need to save space on screen. Other elements in the\ncard should be also smaller to keep the card contained and easy to scan."),Object(n.b)(l.c,{__position:3,__code:'<Card dense raised>\n  <CardBody>\n    <small>Hello! I&apos;m dense card. Everything is smaller here.</small>\n  </CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" size="small" />\n  </CardFooter>\n</Card>',__scope:{props:t,DefaultLayout:d.a,Playground:l.c,Props:l.d,Button:i.c,ScrollView:i.y,Card:i.e,CardBody:i.f,CardFooter:i.g,DefaultLayout:d.a,_frontmatter:b},mdxType:"Playground"},Object(n.b)(i.e,{dense:!0,raised:!0,mdxType:"Card"},Object(n.b)(i.f,{mdxType:"CardBody"},Object(n.b)("small",null,"Hello! I'm dense card. Everything is smaller here.")),Object(n.b)(i.g,{mdxType:"CardFooter"},Object(n.b)(i.c,{label:"Read more",priority:"outline",size:"small",mdxType:"Button"})))),Object(n.b)("h2",{id:"scrollable-card"},"Scrollable Card"),Object(n.b)("p",null,"Combine Card with ",Object(n.b)("a",{parentName:"p",href:"/components/scroll-view"},"ScrollView")," to enable scrolling\nfor card content."),Object(n.b)(l.c,{__position:4,__code:"<div\n  style={{\n    display: 'flex',\n    height: '200px',\n  }}\n>\n  <Card raised>\n    <ScrollView>\n      <CardBody>\n        Hello! I&apos;m scrollable card. Lorem ipsum dolor sit amet,\n        consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean\n        massa. Cum sociis natoque penatibus et magnis dis parturient montes,\n        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque\n        eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede\n        justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim\n        justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum\n        felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus\n        elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo\n        ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam\n        lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus\n        viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean\n        imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper\n        ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus\n        eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing\n        sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,\n        hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.\n      </CardBody>\n    </ScrollView>\n  </Card>\n</div>",__scope:{props:t,DefaultLayout:d.a,Playground:l.c,Props:l.d,Button:i.c,ScrollView:i.y,Card:i.e,CardBody:i.f,CardFooter:i.g,DefaultLayout:d.a,_frontmatter:b},mdxType:"Playground"},Object(n.b)("div",{style:{display:"flex",height:"200px"}},Object(n.b)(i.e,{raised:!0,mdxType:"Card"},Object(n.b)(i.y,{mdxType:"ScrollView"},Object(n.b)(i.f,{mdxType:"CardBody"},"Hello! I'm scrollable card. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus."))))),Object(n.b)("h2",{id:"color-variants"},"Color Variants"),Object(n.b)("p",null,"Card supports all\n",Object(n.b)("a",{parentName:"p",href:"/foundation/colors#component-colors"},"component colors")," to cover different needs\nof your app."),Object(n.b)(l.c,{__position:5,__code:'<Card color="primary">\n  <CardBody>Hello! I&apos;m primary variant of card.</CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" />\n  </CardFooter>\n</Card>\n<Card color="secondary">\n  <CardBody>Hello! I&apos;m secondary variant of card.</CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" color="secondary" />\n  </CardFooter>\n</Card>\n<Card color="success">\n  <CardBody>Hello! I&apos;m success variant of card.</CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" color="success" />\n  </CardFooter>\n</Card>\n<Card color="warning">\n  <CardBody>Hello! I&apos;m warning variant of card.</CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" color="warning" />\n  </CardFooter>\n</Card>\n<Card color="danger">\n  <CardBody>Hello! I&apos;m danger variant of card.</CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" color="danger" />\n  </CardFooter>\n</Card>\n<Card color="help">\n  <CardBody>Hello! I&apos;m help variant of card.</CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" color="help" />\n  </CardFooter>\n</Card>\n<Card color="info">\n  <CardBody>Hello! I&apos;m info variant of card.</CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" color="info" />\n  </CardFooter>\n</Card>\n<Card color="note">\n  <CardBody>Hello! I&apos;m note variant of card.</CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" color="note" />\n  </CardFooter>\n</Card>\n<Card>\n  <CardBody>Hello! I&apos;m light (default) variant of card.</CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" color="dark" />\n  </CardFooter>\n</Card>\n<Card color="dark">\n  <CardBody>Hello! I&apos;m dark variant of card.</CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" color="light" />\n  </CardFooter>\n</Card>',__scope:{props:t,DefaultLayout:d.a,Playground:l.c,Props:l.d,Button:i.c,ScrollView:i.y,Card:i.e,CardBody:i.f,CardFooter:i.g,DefaultLayout:d.a,_frontmatter:b},mdxType:"Playground"},Object(n.b)(i.e,{color:"primary",mdxType:"Card"},Object(n.b)(i.f,{mdxType:"CardBody"},"Hello! I'm primary variant of card."),Object(n.b)(i.g,{mdxType:"CardFooter"},Object(n.b)(i.c,{label:"Read more",priority:"outline",mdxType:"Button"}))),Object(n.b)(i.e,{color:"secondary",mdxType:"Card"},Object(n.b)(i.f,{mdxType:"CardBody"},"Hello! I'm secondary variant of card."),Object(n.b)(i.g,{mdxType:"CardFooter"},Object(n.b)(i.c,{label:"Read more",priority:"outline",color:"secondary",mdxType:"Button"}))),Object(n.b)(i.e,{color:"success",mdxType:"Card"},Object(n.b)(i.f,{mdxType:"CardBody"},"Hello! I'm success variant of card."),Object(n.b)(i.g,{mdxType:"CardFooter"},Object(n.b)(i.c,{label:"Read more",priority:"outline",color:"success",mdxType:"Button"}))),Object(n.b)(i.e,{color:"warning",mdxType:"Card"},Object(n.b)(i.f,{mdxType:"CardBody"},"Hello! I'm warning variant of card."),Object(n.b)(i.g,{mdxType:"CardFooter"},Object(n.b)(i.c,{label:"Read more",priority:"outline",color:"warning",mdxType:"Button"}))),Object(n.b)(i.e,{color:"danger",mdxType:"Card"},Object(n.b)(i.f,{mdxType:"CardBody"},"Hello! I'm danger variant of card."),Object(n.b)(i.g,{mdxType:"CardFooter"},Object(n.b)(i.c,{label:"Read more",priority:"outline",color:"danger",mdxType:"Button"}))),Object(n.b)(i.e,{color:"help",mdxType:"Card"},Object(n.b)(i.f,{mdxType:"CardBody"},"Hello! I'm help variant of card."),Object(n.b)(i.g,{mdxType:"CardFooter"},Object(n.b)(i.c,{label:"Read more",priority:"outline",color:"help",mdxType:"Button"}))),Object(n.b)(i.e,{color:"info",mdxType:"Card"},Object(n.b)(i.f,{mdxType:"CardBody"},"Hello! I'm info variant of card."),Object(n.b)(i.g,{mdxType:"CardFooter"},Object(n.b)(i.c,{label:"Read more",priority:"outline",color:"info",mdxType:"Button"}))),Object(n.b)(i.e,{color:"note",mdxType:"Card"},Object(n.b)(i.f,{mdxType:"CardBody"},"Hello! I'm note variant of card."),Object(n.b)(i.g,{mdxType:"CardFooter"},Object(n.b)(i.c,{label:"Read more",priority:"outline",color:"note",mdxType:"Button"}))),Object(n.b)(i.e,{mdxType:"Card"},Object(n.b)(i.f,{mdxType:"CardBody"},"Hello! I'm light (default) variant of card."),Object(n.b)(i.g,{mdxType:"CardFooter"},Object(n.b)(i.c,{label:"Read more",priority:"outline",color:"dark",mdxType:"Button"}))),Object(n.b)(i.e,{color:"dark",mdxType:"Card"},Object(n.b)(i.f,{mdxType:"CardBody"},"Hello! I'm dark variant of card."),Object(n.b)(i.g,{mdxType:"CardFooter"},Object(n.b)(i.c,{label:"Read more",priority:"outline",color:"light",mdxType:"Button"})))),Object(n.b)("h2",{id:"states"},"States"),Object(n.b)("h3",{id:"disabled-state"},"Disabled State"),Object(n.b)("p",null,"Entire card can appear disabled. However, you'll still need to manually disable\nits interactive elements to disallow user's interaction."),Object(n.b)(l.c,{__position:6,__code:'<Card disabled>\n  <CardBody>Hello! I&apos;m a disabled card.</CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" disabled />\n  </CardFooter>\n</Card>\n<Card disabled raised>\n  <CardBody>Hello! I&apos;m a disabled raised card.</CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" disabled />\n  </CardFooter>\n</Card>\n<Card color="success" disabled>\n  <CardBody>Hello! I&apos;m a disabled success variant of card.</CardBody>\n  <CardFooter>\n    <Button label="Read more" priority="outline" color="success" disabled />\n  </CardFooter>\n</Card>',__scope:{props:t,DefaultLayout:d.a,Playground:l.c,Props:l.d,Button:i.c,ScrollView:i.y,Card:i.e,CardBody:i.f,CardFooter:i.g,DefaultLayout:d.a,_frontmatter:b},mdxType:"Playground"},Object(n.b)(i.e,{disabled:!0,mdxType:"Card"},Object(n.b)(i.f,{mdxType:"CardBody"},"Hello! I'm a disabled card."),Object(n.b)(i.g,{mdxType:"CardFooter"},Object(n.b)(i.c,{label:"Read more",priority:"outline",disabled:!0,mdxType:"Button"}))),Object(n.b)(i.e,{disabled:!0,raised:!0,mdxType:"Card"},Object(n.b)(i.f,{mdxType:"CardBody"},"Hello! I'm a disabled raised card."),Object(n.b)(i.g,{mdxType:"CardFooter"},Object(n.b)(i.c,{label:"Read more",priority:"outline",disabled:!0,mdxType:"Button"}))),Object(n.b)(i.e,{color:"success",disabled:!0,mdxType:"Card"},Object(n.b)(i.f,{mdxType:"CardBody"},"Hello! I'm a disabled success variant of card."),Object(n.b)(i.g,{mdxType:"CardFooter"},Object(n.b)(i.c,{label:"Read more",priority:"outline",color:"success",disabled:!0,mdxType:"Button"})))),Object(n.b)("h2",{id:"api"},"API"),Object(n.b)(l.d,{table:!0,of:i.e,mdxType:"Props"}),Object(n.b)("h3",{id:"cardbody"},"CardBody"),Object(n.b)("p",null,"Space your content with CardBody. See ",Object(n.b)("a",{parentName:"p",href:"#card-composition"},"Card Composition")," for\nall details."),Object(n.b)(l.d,{table:!0,of:i.f,mdxType:"Props"}),Object(n.b)("h3",{id:"cardfooter"},"CardFooter"),Object(n.b)("p",null,"Separate your card actions with CardFooter. See\n",Object(n.b)("a",{parentName:"p",href:"#card-composition"},"Card Composition")," for all details."),Object(n.b)(l.d,{table:!0,of:i.g,mdxType:"Props"}),Object(n.b)("h2",{id:"theming"},"Theming"),Object(n.b)("h3",{id:"common-theming-options"},"Common Theming Options"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Custom Property"),Object(n.b)("th",{parentName:"tr",align:null},"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"--rui-Card__padding")),Object(n.b)("td",{parentName:"tr",align:null},"Padding shared by card header, body and footer")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"--rui-Card__border-width")),Object(n.b)("td",{parentName:"tr",align:null},"Border width")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"--rui-Card__border-radius")),Object(n.b)("td",{parentName:"tr",align:null},"Corner radius")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"--rui-Card--dense__padding")),Object(n.b)("td",{parentName:"tr",align:null},"Padding of dense card")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"--rui-Card--raised__box-shadow")),Object(n.b)("td",{parentName:"tr",align:null},"Box shadow of raised card")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"--rui-Card--disabled__background-color")),Object(n.b)("td",{parentName:"tr",align:null},"Card background color in disabled state")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"--rui-Card--disabled__opacity")),Object(n.b)("td",{parentName:"tr",align:null},"Card opacity in disabled state")))),Object(n.b)("h3",{id:"theming-variants"},"Theming Variants"),Object(n.b)("p",null,"It's possible to adjust the theme of specific color variant. Naming convention\nlooks as follows:"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"--rui-Card--<COLOR>__<PROPERTY>")),Object(n.b)("p",null,"Where:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"<COLOR>")," is one of supported\n",Object(n.b)("a",{parentName:"li",href:"/foundation/colors#component-colors"},"component colors"),"\n(see ",Object(n.b)("a",{parentName:"li",href:"#color-variants"},"color variants")," and ",Object(n.b)("a",{parentName:"li",href:"#api"},"API"),"),"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"<PROPERTY>")," is one of ",Object(n.b)("inlineCode",{parentName:"li"},"color")," (color of text), ",Object(n.b)("inlineCode",{parentName:"li"},"border-color"),", or\n",Object(n.b)("inlineCode",{parentName:"li"},"background-color"),".")))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!Object.prototype.hasOwnProperty.call(u,"__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/lib/components/Card/README.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-lib-components-card-readme-mdx-e4a00a2cc36462b66326.js.map