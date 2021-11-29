(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{Ao5S:function(e,o,a){"use strict";a.r(o),a.d(o,"_frontmatter",(function(){return j})),a.d(o,"default",(function(){return g}));var t=a("Fcif"),r=a("dV/x"),n=a("mXGw"),l=a("/FXl"),b=a("TjRS"),d=a("ZFoC"),i=a("s0IP"),c=a("YBnK"),p=a("QIWs"),m=a("bYQf"),T=a("ltne"),u=a("F9Oc"),s=a("isJs");a("aD51");const h=["components"],j={};void 0!==j&&j&&j===Object(j)&&Object.isExtensible(j)&&!j.hasOwnProperty("__filemeta")&&Object.defineProperty(j,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/lib/components/Toolbar/README.mdx"}});const y={_frontmatter:j},O=b.a;function g(e){let{components:o}=e,a=Object(r.a)(e,h);return Object(l.b)(O,Object(t.a)({},y,a,{components:o,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"toolbar"},"Toolbar"),Object(l.b)("p",null,"The responsive Toolbar layout is a versatile tool that allows spacing, grouping,\nand aligning inline items."),Object(l.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(l.b)("p",null,"To implement the Toolbar component, you need to import it first:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"import { Toolbar, ToolbarItem } from '@react-ui-org/react-ui';\n")),Object(l.b)("p",null,"And use it:"),Object(l.b)(d.c,{__position:0,__code:"<Toolbar>\n  <ToolbarItem>\n    <Placeholder bordered>Toolbar item</Placeholder>\n  </ToolbarItem>\n  <ToolbarItem>\n    <Placeholder bordered>Toolbar item</Placeholder>\n  </ToolbarItem>\n  <ToolbarItem>\n    <Placeholder bordered>Toolbar item</Placeholder>\n  </ToolbarItem>\n</Toolbar>",__scope:{props:a,DefaultLayout:b.a,Playground:d.c,Props:d.d,Placeholder:i.a,CheckboxField:c.a,Button:p.a,ButtonGroup:m.a,Toolbar:T.a,ToolbarGroup:u.a,ToolbarItem:s.a,DefaultLayout:b.a,_frontmatter:j},mdxType:"Playground"},Object(l.b)(T.a,{mdxType:"Toolbar"},Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)(i.a,{bordered:!0,mdxType:"Placeholder"},"Toolbar item")),Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)(i.a,{bordered:!0,mdxType:"Placeholder"},"Toolbar item")),Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)(i.a,{bordered:!0,mdxType:"Placeholder"},"Toolbar item")))),Object(l.b)("p",null,"See ",Object(l.b)("a",{parentName:"p",href:"#api"},"API")," for all available options."),Object(l.b)("h2",{id:"general-guidelines"},"General Guidelines"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Toolbar is great for flexible inline layouts.")," For stacking your content\nvertically, use the ",Object(l.b)("a",{parentName:"p",href:"/components/layout/list"},"List")," layout. For two-dimensional layouts head to\nthe ",Object(l.b)("a",{parentName:"p",href:"/components/layout/grid"},"Grid")," layout.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Wrap your items")," into the ToolbarItem component. This ensures your content\nis properly spaced and aligned with other Toolbar elements. Do ",Object(l.b)("strong",{parentName:"p"},"not")," try to\nput any custom HTML or React components directly into the Toolbar layout\nwithout wrapping it with the ToolbarItem first.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Be careful with using Toolbar with long or dynamic items in narrow\ncontainers.")," Toolbar intentionally prevents its items from shrinking using\n",Object(l.b)("inlineCode",{parentName:"p"},"flex: none")," which may cause overflow in case of lack of horizontal space.\nDepending on your situation, consider turning on the ",Object(l.b)("inlineCode",{parentName:"p"},"nowrap")," option\n(which allows shrinking of items but disables Toolbar from wrapping), using\nthe ",Object(l.b)("a",{parentName:"p",href:"/components/ui/text"},"Text")," component to precisely control text wrapping, or switching to\nthe ",Object(l.b)("a",{parentName:"p",href:"/components/layout/grid"},"Grid")," layout."))),Object(l.b)("h2",{id:"alignment"},"Alignment"),Object(l.b)("p",null,"You can tweak your Toolbar layout using rich alignment options, both in\nhorizontal and vertical direction."),Object(l.b)("p",null,"👉 At the current stage of development, React UI is ",Object(l.b)("strong",{parentName:"p"},"RTL aware")," so switching\nto a fully RTL-compatible behavior in the future should be painless. That's why\nthe justification values are called rather ",Object(l.b)("inlineCode",{parentName:"p"},"start")," than ",Object(l.b)("inlineCode",{parentName:"p"},"left")," and ",Object(l.b)("inlineCode",{parentName:"p"},"end")," instead\nof ",Object(l.b)("inlineCode",{parentName:"p"},"right"),"."),Object(l.b)(d.c,{__position:1,__code:"() => {\n  const [alignment, setAlignment] = React.useState('top')\n  const [justification, setJustification] = React.useState('start')\n  return (\n    <div>\n      <Toolbar>\n        <ToolbarGroup align=\"baseline\">\n          <ToolbarItem>\n            <span id=\"alignment-label\">Alignment:</span>\n          </ToolbarItem>\n          <ToolbarItem>\n            <ButtonGroup aria-labelledby=\"#alignment-label\">\n              <Button\n                color={alignment === 'top' ? 'dark' : 'primary'}\n                label=\"top\"\n                onClick={() => setAlignment('top')}\n              />\n              <Button\n                color={alignment === 'middle' ? 'dark' : 'primary'}\n                label=\"middle\"\n                onClick={() => setAlignment('middle')}\n              />\n              <Button\n                color={alignment === 'bottom' ? 'dark' : 'primary'}\n                label=\"bottom\"\n                onClick={() => setAlignment('bottom')}\n              />\n              <Button\n                color={alignment === 'baseline' ? 'dark' : 'primary'}\n                label=\"baseline\"\n                onClick={() => setAlignment('baseline')}\n              />\n            </ButtonGroup>\n          </ToolbarItem>\n        </ToolbarGroup>\n        <ToolbarGroup align=\"baseline\">\n          <ToolbarItem>\n            <span id=\"justification-label\">Justification:</span>\n          </ToolbarItem>\n          <ToolbarItem>\n            <ButtonGroup aria-labelledby=\"#justification-label\">\n              <Button\n                color={justification === 'start' ? 'dark' : 'primary'}\n                label=\"start\"\n                onClick={() => setJustification('start')}\n              />\n              <Button\n                color={justification === 'center' ? 'dark' : 'primary'}\n                label=\"center\"\n                onClick={() => setJustification('center')}\n              />\n              <Button\n                color={justification === 'end' ? 'dark' : 'primary'}\n                label=\"end\"\n                onClick={() => setJustification('end')}\n              />\n              <Button\n                color={justification === 'space-between' ? 'dark' : 'primary'}\n                label=\"space-between\"\n                onClick={() => setJustification('space-between')}\n              />\n            </ButtonGroup>\n          </ToolbarItem>\n        </ToolbarGroup>\n      </Toolbar>\n      <Toolbar align={alignment} justify={justification}>\n        <ToolbarItem>\n          <Placeholder bordered>First item</Placeholder>\n        </ToolbarItem>\n        <ToolbarItem>\n          <Placeholder bordered>\n            Second item\n            <br />\n            is taller\n          </Placeholder>\n        </ToolbarItem>\n        <ToolbarItem>\n          <Placeholder bordered>Third item</Placeholder>\n        </ToolbarItem>\n      </Toolbar>\n    </div>\n  )\n}",__scope:{props:a,DefaultLayout:b.a,Playground:d.c,Props:d.d,Placeholder:i.a,CheckboxField:c.a,Button:p.a,ButtonGroup:m.a,Toolbar:T.a,ToolbarGroup:u.a,ToolbarItem:s.a,DefaultLayout:b.a,_frontmatter:j},mdxType:"Playground"},()=>{const[e,o]=n.useState("top"),[a,t]=n.useState("start");return Object(l.b)("div",null,Object(l.b)(T.a,{mdxType:"Toolbar"},Object(l.b)(u.a,{align:"baseline",mdxType:"ToolbarGroup"},Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)("span",{id:"alignment-label"},"Alignment:")),Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)(m.a,{"aria-labelledby":"#alignment-label",mdxType:"ButtonGroup"},Object(l.b)(p.a,{color:"top"===e?"dark":"primary",label:"top",onClick:()=>o("top"),mdxType:"Button"}),Object(l.b)(p.a,{color:"middle"===e?"dark":"primary",label:"middle",onClick:()=>o("middle"),mdxType:"Button"}),Object(l.b)(p.a,{color:"bottom"===e?"dark":"primary",label:"bottom",onClick:()=>o("bottom"),mdxType:"Button"}),Object(l.b)(p.a,{color:"baseline"===e?"dark":"primary",label:"baseline",onClick:()=>o("baseline"),mdxType:"Button"})))),Object(l.b)(u.a,{align:"baseline",mdxType:"ToolbarGroup"},Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)("span",{id:"justification-label"},"Justification:")),Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)(m.a,{"aria-labelledby":"#justification-label",mdxType:"ButtonGroup"},Object(l.b)(p.a,{color:"start"===a?"dark":"primary",label:"start",onClick:()=>t("start"),mdxType:"Button"}),Object(l.b)(p.a,{color:"center"===a?"dark":"primary",label:"center",onClick:()=>t("center"),mdxType:"Button"}),Object(l.b)(p.a,{color:"end"===a?"dark":"primary",label:"end",onClick:()=>t("end"),mdxType:"Button"}),Object(l.b)(p.a,{color:"space-between"===a?"dark":"primary",label:"space-between",onClick:()=>t("space-between"),mdxType:"Button"}))))),Object(l.b)(T.a,{align:e,justify:a,mdxType:"Toolbar"},Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)(i.a,{bordered:!0,mdxType:"Placeholder"},"First item")),Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)(i.a,{bordered:!0,mdxType:"Placeholder"},"Second item",Object(l.b)("br",null),"is taller")),Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)(i.a,{bordered:!0,mdxType:"Placeholder"},"Third item"))))}),Object(l.b)("h2",{id:"groups"},"Groups"),Object(l.b)("p",null,"Toolbar items can be grouped which enables you aligning related items together.\nTo provide the best possible flexibility for building your layout, the\nToolbarGroup allows you to set many options similar to the Toolbar: vertical\nalignment, ",Object(l.b)("a",{parentName:"p",href:"#dense-layout"},"dense spacing"),", or ",Object(l.b)("a",{parentName:"p",href:"#wrapping"},"disable wrapping"),"."),Object(l.b)(d.c,{__position:2,__code:'<Toolbar justify="space-between">\n  <ToolbarGroup>\n    <ToolbarItem>\n      <Placeholder bordered>Group A</Placeholder>\n    </ToolbarItem>\n    <ToolbarItem>\n      <Placeholder bordered>Group A</Placeholder>\n    </ToolbarItem>\n  </ToolbarGroup>\n  <ToolbarGroup align="middle">\n    <ToolbarItem>\n      <Placeholder bordered>Group B</Placeholder>\n    </ToolbarItem>\n    <ToolbarItem>\n      <Placeholder bordered>Group B</Placeholder>\n    </ToolbarItem>\n  </ToolbarGroup>\n  <ToolbarItem>\n    <Placeholder bordered>Item</Placeholder>\n  </ToolbarItem>\n</Toolbar>',__scope:{props:a,DefaultLayout:b.a,Playground:d.c,Props:d.d,Placeholder:i.a,CheckboxField:c.a,Button:p.a,ButtonGroup:m.a,Toolbar:T.a,ToolbarGroup:u.a,ToolbarItem:s.a,DefaultLayout:b.a,_frontmatter:j},mdxType:"Playground"},Object(l.b)(T.a,{justify:"space-between",mdxType:"Toolbar"},Object(l.b)(u.a,{mdxType:"ToolbarGroup"},Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)(i.a,{bordered:!0,mdxType:"Placeholder"},"Group A")),Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)(i.a,{bordered:!0,mdxType:"Placeholder"},"Group A"))),Object(l.b)(u.a,{align:"middle",mdxType:"ToolbarGroup"},Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)(i.a,{bordered:!0,mdxType:"Placeholder"},"Group B")),Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)(i.a,{bordered:!0,mdxType:"Placeholder"},"Group B"))),Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)(i.a,{bordered:!0,mdxType:"Placeholder"},"Item")))),Object(l.b)("h2",{id:"dense-layout"},"Dense Layout"),Object(l.b)("p",null,"Sometimes it's useful to get related items even closer together. This can be\neasily achieved through the ",Object(l.b)("inlineCode",{parentName:"p"},"dense")," option which can be applied on individual\ntoolbar groups, or on the entire toolbar."),Object(l.b)(d.c,{__position:3,__code:'() => {\n  const [isGroupDense, setIsGroupDense] = React.useState(true)\n  const [isToolbarDense, setIsToolbarDense] = React.useState(false)\n  return (\n    <div>\n      <Toolbar>\n        <ToolbarItem>\n          <CheckboxField\n            checked={isGroupDense}\n            label="Dense ToolbarGroup"\n            onChange={e => setIsGroupDense(e.target.checked)}\n          />\n        </ToolbarItem>\n        <ToolbarItem>\n          <CheckboxField\n            checked={isToolbarDense}\n            label="Dense Toolbar"\n            onChange={e => setIsToolbarDense(e.target.checked)}\n          />\n        </ToolbarItem>\n      </Toolbar>\n      <Toolbar dense={isToolbarDense}>\n        <ToolbarGroup dense={isGroupDense}>\n          <ToolbarItem>\n            <Placeholder bordered>Group item</Placeholder>\n          </ToolbarItem>\n          <ToolbarItem>\n            <Placeholder bordered>Group item</Placeholder>\n          </ToolbarItem>\n        </ToolbarGroup>\n        <ToolbarItem>\n          <Placeholder bordered>Standalone item</Placeholder>\n        </ToolbarItem>\n        <ToolbarItem>\n          <Placeholder bordered>Standalone item</Placeholder>\n        </ToolbarItem>\n      </Toolbar>\n    </div>\n  )\n}',__scope:{props:a,DefaultLayout:b.a,Playground:d.c,Props:d.d,Placeholder:i.a,CheckboxField:c.a,Button:p.a,ButtonGroup:m.a,Toolbar:T.a,ToolbarGroup:u.a,ToolbarItem:s.a,DefaultLayout:b.a,_frontmatter:j},mdxType:"Playground"},()=>{const[e,o]=n.useState(!0),[a,t]=n.useState(!1);return Object(l.b)("div",null,Object(l.b)(T.a,{mdxType:"Toolbar"},Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)(c.a,{checked:e,label:"Dense ToolbarGroup",onChange:e=>o(e.target.checked),mdxType:"CheckboxField"})),Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)(c.a,{checked:a,label:"Dense Toolbar",onChange:e=>t(e.target.checked),mdxType:"CheckboxField"}))),Object(l.b)(T.a,{dense:a,mdxType:"Toolbar"},Object(l.b)(u.a,{dense:e,mdxType:"ToolbarGroup"},Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)(i.a,{bordered:!0,mdxType:"Placeholder"},"Group item")),Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)(i.a,{bordered:!0,mdxType:"Placeholder"},"Group item"))),Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)(i.a,{bordered:!0,mdxType:"Placeholder"},"Standalone item")),Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)(i.a,{bordered:!0,mdxType:"Placeholder"},"Standalone item"))))}),Object(l.b)("h2",{id:"wrapping"},"Wrapping"),Object(l.b)("p",null,"By default, all toolbar items are queued up one after another in a row. The\nitems automatically wrap and create a new row. To prevent this behavior, just\nset the ",Object(l.b)("inlineCode",{parentName:"p"},"nowrap")," option on the Toolbar or on individual ToolbarGroups. Note that\nToolbarGroups can still wrap when the wrapping is disabled just on their parent\nToolbar."),Object(l.b)("p",null,"📐 Try resizing the playground below to see how it works."),Object(l.b)(d.c,{__position:4,__code:'<>\n  <p>Disabled wrapping on entire toolbar:</p>\n  <Toolbar justify="space-between" nowrap>\n    <ToolbarGroup>\n      <ToolbarItem>\n        <Placeholder bordered>Group A</Placeholder>\n      </ToolbarItem>\n      <ToolbarItem>\n        <Placeholder bordered>Group A</Placeholder>\n      </ToolbarItem>\n    </ToolbarGroup>\n    <ToolbarGroup>\n      <ToolbarItem>\n        <Placeholder bordered>Group B</Placeholder>\n      </ToolbarItem>\n      <ToolbarItem>\n        <Placeholder bordered>Group B</Placeholder>\n      </ToolbarItem>\n    </ToolbarGroup>\n    <ToolbarItem>\n      <Placeholder bordered>Item</Placeholder>\n    </ToolbarItem>\n  </Toolbar>\n  <p>Disabled wrapping on toolbar groups:</p>\n  <Toolbar justify="space-between">\n    <ToolbarGroup nowrap>\n      <ToolbarItem>\n        <Placeholder bordered>Group A</Placeholder>\n      </ToolbarItem>\n      <ToolbarItem>\n        <Placeholder bordered>Group A</Placeholder>\n      </ToolbarItem>\n    </ToolbarGroup>\n    <ToolbarGroup nowrap>\n      <ToolbarItem>\n        <Placeholder bordered>Group B</Placeholder>\n      </ToolbarItem>\n      <ToolbarItem>\n        <Placeholder bordered>Group B</Placeholder>\n      </ToolbarItem>\n    </ToolbarGroup>\n    <ToolbarItem>\n      <Placeholder bordered>Item</Placeholder>\n    </ToolbarItem>\n  </Toolbar>\n</>',__scope:{props:a,DefaultLayout:b.a,Playground:d.c,Props:d.d,Placeholder:i.a,CheckboxField:c.a,Button:p.a,ButtonGroup:m.a,Toolbar:T.a,ToolbarGroup:u.a,ToolbarItem:s.a,DefaultLayout:b.a,_frontmatter:j},mdxType:"Playground"},Object(l.b)(n.Fragment,null,Object(l.b)("p",null,"Disabled wrapping on entire toolbar:"),Object(l.b)(T.a,{justify:"space-between",nowrap:!0,mdxType:"Toolbar"},Object(l.b)(u.a,{mdxType:"ToolbarGroup"},Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)(i.a,{bordered:!0,mdxType:"Placeholder"},"Group A")),Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)(i.a,{bordered:!0,mdxType:"Placeholder"},"Group A"))),Object(l.b)(u.a,{mdxType:"ToolbarGroup"},Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)(i.a,{bordered:!0,mdxType:"Placeholder"},"Group B")),Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)(i.a,{bordered:!0,mdxType:"Placeholder"},"Group B"))),Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)(i.a,{bordered:!0,mdxType:"Placeholder"},"Item"))),Object(l.b)("p",null,"Disabled wrapping on toolbar groups:"),Object(l.b)(T.a,{justify:"space-between",mdxType:"Toolbar"},Object(l.b)(u.a,{nowrap:!0,mdxType:"ToolbarGroup"},Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)(i.a,{bordered:!0,mdxType:"Placeholder"},"Group A")),Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)(i.a,{bordered:!0,mdxType:"Placeholder"},"Group A"))),Object(l.b)(u.a,{nowrap:!0,mdxType:"ToolbarGroup"},Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)(i.a,{bordered:!0,mdxType:"Placeholder"},"Group B")),Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)(i.a,{bordered:!0,mdxType:"Placeholder"},"Group B"))),Object(l.b)(s.a,{mdxType:"ToolbarItem"},Object(l.b)(i.a,{bordered:!0,mdxType:"Placeholder"},"Item"))))),Object(l.b)("p",null,"👉 Depending on your situation, you may need to further control wrapping of text\ncontent placed within Toolbar. The ",Object(l.b)("a",{parentName:"p",href:"/components/ui/text"},"Text")," component is designed\nspecifically for this kind of job."),Object(l.b)("h2",{id:"api"},"API"),Object(l.b)(d.d,{table:!0,of:T.a,mdxType:"Props"}),Object(l.b)("h3",{id:"toolbargroup-api"},"ToolbarGroup API"),Object(l.b)("p",null,"A wrapper for grouping ToolbarItems together."),Object(l.b)(d.d,{table:!0,of:u.a,mdxType:"Props"}),Object(l.b)("h3",{id:"toolbaritem-api"},"ToolbarItem API"),Object(l.b)("p",null,"A wrapper for individual toolbar items."),Object(l.b)(d.d,{table:!0,of:s.a,mdxType:"Props"}),Object(l.b)("h2",{id:"theming"},"Theming"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Custom Property"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--rui-Toolbar__gap")),Object(l.b)("td",{parentName:"tr",align:null},"Gap between toolbar items")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--rui-Toolbar__gap--dense")),Object(l.b)("td",{parentName:"tr",align:null},"Dense gap between toolbar items")))))}void 0!==g&&g&&g===Object(g)&&Object.isExtensible(g)&&!g.hasOwnProperty("__filemeta")&&Object.defineProperty(g,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/lib/components/Toolbar/README.mdx"}}),g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-lib-components-toolbar-readme-mdx-b10332f90fcc4038e535.js.map