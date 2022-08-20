(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{DAzz:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return m})),a.d(t,"default",(function(){return O}));var n=a("Fcif"),b=a("dV/x"),i=a("mXGw"),r=a("/FXl"),l=a("TjRS"),o=a("ZFoC"),c=a("9re2"),s=a("nBnF");a("aD51");const d=["components"],m={};void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!Object.prototype.hasOwnProperty.call(m,"__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/lib/components/Tabs/README.mdx"}});const p={_frontmatter:m},u=l.a;function O(e){let{components:t}=e,a=Object(b.a)(e,d);return Object(r.b)(u,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"tabs"},"Tabs"),Object(r.b)("p",null,"Tabs separate related content into groups within a single context."),Object(r.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(r.b)("p",null,"To implement the Tabs component, you need to import it first:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import { Tabs, TabsItem } from '@react-ui-org/react-ui';\n")),Object(r.b)("p",null,"And use it:"),Object(r.b)(o.c,{__position:0,__code:'() => {\n  const [activeTab, setActiveTab] = React.useState(1)\n  const navigate = (event, tab) => {\n    setActiveTab(tab)\n    event.preventDefault()\n  }\n  return (\n    <Tabs>\n      <TabsItem\n        href="#design"\n        isActive={activeTab === 1}\n        label="Design"\n        onClick={e => navigate(e, 1)}\n      />\n      <TabsItem\n        href="#code"\n        isActive={activeTab === 2}\n        label="Code"\n        onClick={e => navigate(e, 2)}\n      />\n      <TabsItem\n        href="#resources"\n        isActive={activeTab === 3}\n        label="Resources"\n        onClick={e => navigate(e, 3)}\n      />\n    </Tabs>\n  )\n}',__scope:{props:a,DefaultLayout:l.a,Playground:o.c,Props:o.d,Icon:c.a,ScrollView:s.y,Tabs:s.B,TabsItem:s.C,DefaultLayout:l.a,_frontmatter:m},mdxType:"Playground"},()=>{const[e,t]=i.useState(1),a=(e,a)=>{t(a),e.preventDefault()};return Object(r.b)(s.B,{mdxType:"Tabs"},Object(r.b)(s.C,{href:"#design",isActive:1===e,label:"Design",onClick:e=>a(e,1),mdxType:"TabsItem"}),Object(r.b)(s.C,{href:"#code",isActive:2===e,label:"Code",onClick:e=>a(e,2),mdxType:"TabsItem"}),Object(r.b)(s.C,{href:"#resources",isActive:3===e,label:"Resources",onClick:e=>a(e,3),mdxType:"TabsItem"}))}),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"#api"},"API")," for all available options."),Object(r.b)("h2",{id:"general-guidelines"},"General Guidelines"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Use tabs to divide similar content.")," Tabs make sense when the content they\ncontain is related.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Make sure everything necessary")," to complete a single task is contained\nwithin one tab. Users don't like switching context to get their task done.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Make labels short and clear.")," Long tab names impede comprehension. Use as\nfew words as possible, preferably just one.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Limit the number of tabs.")," Having too many tabs increases clutter and\ncan be overwhelming for users. Try to have no more than 5 or 6 tabs."))),Object(r.b)("h2",{id:"tabs-with-icons"},"Tabs with Icons"),Object(r.b)("p",null,"Tab titles can be accompanied by icons. Once you decide to have icons, use one\nfor each tab and don't leave some tabs without an icon."),Object(r.b)(o.c,{__position:1,__code:'() => {\n  const [activeTab, setActiveTab] = React.useState(1)\n  const navigate = (event, tab) => {\n    setActiveTab(tab)\n    event.preventDefault()\n  }\n  return (\n    <Tabs>\n      <TabsItem\n        beforeLabel={<Icon icon="pencil" />}\n        href="#design"\n        isActive={activeTab === 1}\n        label="Design"\n        onClick={e => navigate(e, 1)}\n      />\n      <TabsItem\n        beforeLabel={<Icon icon="code" />}\n        href="#code"\n        isActive={activeTab === 2}\n        label="Code"\n        onClick={e => navigate(e, 2)}\n      />\n      <TabsItem\n        beforeLabel={<Icon icon="star" />}\n        href="#resources"\n        isActive={activeTab === 3}\n        label="Resources"\n        onClick={e => navigate(e, 3)}\n      />\n    </Tabs>\n  )\n}',__scope:{props:a,DefaultLayout:l.a,Playground:o.c,Props:o.d,Icon:c.a,ScrollView:s.y,Tabs:s.B,TabsItem:s.C,DefaultLayout:l.a,_frontmatter:m},mdxType:"Playground"},()=>{const[e,t]=i.useState(1),a=(e,a)=>{t(a),e.preventDefault()};return Object(r.b)(s.B,{mdxType:"Tabs"},Object(r.b)(s.C,{beforeLabel:Object(r.b)(c.a,{icon:"pencil",mdxType:"Icon"}),href:"#design",isActive:1===e,label:"Design",onClick:e=>a(e,1),mdxType:"TabsItem"}),Object(r.b)(s.C,{beforeLabel:Object(r.b)(c.a,{icon:"code",mdxType:"Icon"}),href:"#code",isActive:2===e,label:"Code",onClick:e=>a(e,2),mdxType:"TabsItem"}),Object(r.b)(s.C,{beforeLabel:Object(r.b)(c.a,{icon:"star",mdxType:"Icon"}),href:"#resources",isActive:3===e,label:"Resources",onClick:e=>a(e,3),mdxType:"TabsItem"}))}),Object(r.b)("h2",{id:"scrollable-tabs"},"Scrollable Tabs"),Object(r.b)("p",null,"If you have more than a few tabs, you may need to make sure they will be all\naccessible no matter the space they have around. Wrap Tabs into\n",Object(r.b)("a",{parentName:"p",href:"/components/scroll-view"},"ScrollView")," to make them scrollable if necessary."),Object(r.b)(o.c,{__position:2,__code:'() => {\n  const [activeTab, setActiveTab] = React.useState(1)\n  const navigate = (event, tab) => {\n    setActiveTab(tab)\n    event.preventDefault()\n  }\n  return (\n    <div style={{ width: \'19rem\' }}>\n      <ScrollView direction="horizontal">\n        <Tabs>\n          <TabsItem\n            href="#design"\n            isActive={activeTab === 1}\n            label="Design"\n            onClick={e => navigate(e, 1)}\n          />\n          <TabsItem\n            href="#code"\n            isActive={activeTab === 2}\n            label="Code"\n            onClick={e => navigate(e, 2)}\n          />\n          <TabsItem\n            href="#resources"\n            isActive={activeTab === 3}\n            label="Resources"\n            onClick={e => navigate(e, 3)}\n          />\n          <TabsItem\n            href="#other"\n            isActive={activeTab === 4}\n            label="Other"\n            onClick={e => navigate(e, 4)}\n          />\n          <TabsItem\n            href="#more"\n            isActive={activeTab === 5}\n            label="More"\n            onClick={e => navigate(e, 5)}\n          />\n        </Tabs>\n      </ScrollView>\n    </div>\n  )\n}',__scope:{props:a,DefaultLayout:l.a,Playground:o.c,Props:o.d,Icon:c.a,ScrollView:s.y,Tabs:s.B,TabsItem:s.C,DefaultLayout:l.a,_frontmatter:m},mdxType:"Playground"},()=>{const[e,t]=i.useState(1),a=(e,a)=>{t(a),e.preventDefault()};return Object(r.b)("div",{style:{width:"19rem"}},Object(r.b)(s.y,{direction:"horizontal",mdxType:"ScrollView"},Object(r.b)(s.B,{mdxType:"Tabs"},Object(r.b)(s.C,{href:"#design",isActive:1===e,label:"Design",onClick:e=>a(e,1),mdxType:"TabsItem"}),Object(r.b)(s.C,{href:"#code",isActive:2===e,label:"Code",onClick:e=>a(e,2),mdxType:"TabsItem"}),Object(r.b)(s.C,{href:"#resources",isActive:3===e,label:"Resources",onClick:e=>a(e,3),mdxType:"TabsItem"}),Object(r.b)(s.C,{href:"#other",isActive:4===e,label:"Other",onClick:e=>a(e,4),mdxType:"TabsItem"}),Object(r.b)(s.C,{href:"#more",isActive:5===e,label:"More",onClick:e=>a(e,5),mdxType:"TabsItem"}))))}),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)(o.d,{table:!0,of:s.B,mdxType:"Props"}),Object(r.b)("h3",{id:"tabsitem"},"TabsItem"),Object(r.b)(o.d,{table:!0,of:s.C,mdxType:"Props"}),Object(r.b)("h2",{id:"theming"},"Theming"),Object(r.b)("h3",{id:"tabs-theming"},"Tabs Theming"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Custom Property"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"--rui-Tabs__border-bottom-width")),Object(r.b)("td",{parentName:"tr",align:null},"Width of decorative bottom border")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"--rui-Tabs__border-bottom-color")),Object(r.b)("td",{parentName:"tr",align:null},"Color of decorative bottom border")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"--rui-Tabs__gap--xs")),Object(r.b)("td",{parentName:"tr",align:null},"Gap between individual tab items on smallest screens")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"--rui-Tabs__gap--sm")),Object(r.b)("td",{parentName:"tr",align:null},"Gap between individual tab items from ",Object(r.b)("inlineCode",{parentName:"td"},"sm")," breakpoint up")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"--rui-Tabs__gap--md")),Object(r.b)("td",{parentName:"tr",align:null},"Gap between individual tab items from ",Object(r.b)("inlineCode",{parentName:"td"},"md")," breakpoint up")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"--rui-Tabs__padding-x")),Object(r.b)("td",{parentName:"tr",align:null},"Horizontal padding")))),Object(r.b)("h3",{id:"tabsitem-theming"},"TabsItem Theming"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Custom Property"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"--rui-Tabs__item__padding--xs")),Object(r.b)("td",{parentName:"tr",align:null},"Padding of tab items on smallest screens")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"--rui-Tabs__item__padding--sm")),Object(r.b)("td",{parentName:"tr",align:null},"Padding of tab items from ",Object(r.b)("inlineCode",{parentName:"td"},"sm")," breakpoint up")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"--rui-Tabs__item__padding--md")),Object(r.b)("td",{parentName:"tr",align:null},"Padding of tab items from ",Object(r.b)("inlineCode",{parentName:"td"},"md")," breakpoint up")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"--rui-Tabs__item__font-weight")),Object(r.b)("td",{parentName:"tr",align:null},"Label font weight")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"--rui-Tabs__item__color")),Object(r.b)("td",{parentName:"tr",align:null},"Label color")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"--rui-Tabs__item__border-width")),Object(r.b)("td",{parentName:"tr",align:null},"Border width, allows specifying for individual sides")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"--rui-Tabs__item__border-color")),Object(r.b)("td",{parentName:"tr",align:null},"Border color, allows specifying for individual sides")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"--rui-Tabs__item__border-radius")),Object(r.b)("td",{parentName:"tr",align:null},"Top corners radius")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"--rui-Tabs__item__background-color")),Object(r.b)("td",{parentName:"tr",align:null},"Background color")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"--rui-Tabs__item__box-shadow")),Object(r.b)("td",{parentName:"tr",align:null},"Box shadow")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"--rui-Tabs__item__icon__gap")),Object(r.b)("td",{parentName:"tr",align:null},"Gap between label and accompanying elements, e.g. icons")))),Object(r.b)("h4",{id:"theming-tabsitem-hover-and-active-states"},"Theming TabsItem Hover and Active States"),Object(r.b)("p",null,"Most of TabsItem options can be adjusted for hover and active states as follows:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"--rui-Tabs__item--<STATE>__<PROPERTY>")),Object(r.b)("p",null,"Where:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<STATE>")," is one of ",Object(r.b)("inlineCode",{parentName:"li"},"hover")," or ",Object(r.b)("inlineCode",{parentName:"li"},"active"),","),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<PROPERTY>")," is one of ",Object(r.b)("inlineCode",{parentName:"li"},"font-weight"),", ",Object(r.b)("inlineCode",{parentName:"li"},"color"),", ",Object(r.b)("inlineCode",{parentName:"li"},"border-width"),", ",Object(r.b)("inlineCode",{parentName:"li"},"border-color"),",\n",Object(r.b)("inlineCode",{parentName:"li"},"background-color"),", ",Object(r.b)("inlineCode",{parentName:"li"},"box-shadow"),", ",Object(r.b)("inlineCode",{parentName:"li"},"shift-y")," (shifts vertically the whole\nitem), or ",Object(r.b)("inlineCode",{parentName:"li"},"label__shift-y")," (tweaks vertical position of tab label).")))}void 0!==O&&O&&O===Object(O)&&Object.isExtensible(O)&&!Object.prototype.hasOwnProperty.call(O,"__filemeta")&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/lib/components/Tabs/README.mdx"}}),O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-lib-components-tabs-readme-mdx-447842ad03d7a334b8d0.js.map