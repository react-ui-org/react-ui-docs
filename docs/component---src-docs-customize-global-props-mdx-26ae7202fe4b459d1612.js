(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"2K0t":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return u})),n.d(t,"default",(function(){return v}));var o=n("Fcif"),a=n("dV/x"),l=n("mXGw"),i=n("/FXl"),r=n("TjRS"),b=n("ZFoC"),c=n("e9mA"),p=n("IICW"),d=n("s04U"),s=n("KjXw"),m=n("wNj7");n("aD51");const u={};void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/customize/global-props.mdx"}});const f={_frontmatter:u},j=r.a;function v(e){let{components:t}=e,n=Object(a.a)(e,["components"]);return Object(i.b)(j,Object(o.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"global-props"},"Global Props"),Object(i.b)("p",null,"Sometimes it can be useful to share some configuration props between\nmultiple instances of components of the same or different kind."),Object(i.b)("p",null,"This can be achieved by wrapping application or its part with ",Object(i.b)("inlineCode",{parentName:"p"},"RUIProvider"),"\nand passing in the common props through ",Object(i.b)("inlineCode",{parentName:"p"},"globalProps")," prop. With or without\nusing ",Object(i.b)("inlineCode",{parentName:"p"},"RUIProvider")," the component can be configured by passing in the props\ndirectly. The props passed in directly always take precedence over props\ncoming from ",Object(i.b)("inlineCode",{parentName:"p"},"RUIProvider"),"."),Object(i.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(i.b)("p",null,"To define global props, you need to import ",Object(i.b)("inlineCode",{parentName:"p"},"RUIProvider")," first:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import { RUIProvider } from '@react-ui-org/react-ui';\n")),Object(i.b)("p",null,"Then wrap application or its part with ",Object(i.b)("inlineCode",{parentName:"p"},"RUIProvider")," with defined ",Object(i.b)("inlineCode",{parentName:"p"},"globalProps"),"\nattribute holding an object. Keys are names of the components, and their\nvalues are objects with arbitrary props you want to pass to the specified\ncomponents."),Object(i.b)("p",null,"Keys conform to actual names of components:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"<RUIProvider globalProps={{\n  Button: { priority: 'filled' },\n  TextField: { variant: 'filled' },\n  SelectField: { variant: 'filled' },\n}}>\n  //...\n</RUIProvider>\n")),Object(i.b)("p",null,"See working example:"),Object(i.b)(b.c,{__position:0,__code:'() => {\n  const [variant, setVariant] = React.useState(\'filled\')\n  return (\n    <RUIProvider\n      globalProps={{\n        Button: { priority: variant },\n        TextField: { variant },\n        SelectField: { variant },\n      }}\n    >\n      <Toolbar align="bottom">\n        <ToolbarItem>\n          <SelectField\n            changeHandler={e => setVariant(e.target.value)}\n            id="variant"\n            label="Select variant of Select Field"\n            options={[\n              {\n                label: \'filled\',\n                value: \'filled\',\n              },\n              {\n                label: \'outline\',\n                value: \'outline\',\n              },\n            ]}\n            value={variant}\n          />\n        </ToolbarItem>\n        <ToolbarItem>\n          <TextField id="my-text-field" label="Text Field" />\n        </ToolbarItem>\n        <ToolbarItem>\n          <Button clickHandler={() => {}} id="my-button" label="Button" />\n        </ToolbarItem>\n      </Toolbar>\n    </RUIProvider>\n  )\n}',__scope:{props:n,DefaultLayout:r.a,Playground:b.c,Toolbar:c.a,ToolbarItem:c.b,Button:p.a,SelectField:d.a,TextField:s.a,RUIProvider:m.a,DefaultLayout:r.a,_frontmatter:u},mdxType:"Playground"},()=>{const[e,t]=l.useState("filled");return Object(i.b)(m.a,{globalProps:{Button:{priority:e},TextField:{variant:e},SelectField:{variant:e}},mdxType:"RUIProvider"},Object(i.b)(c.a,{align:"bottom",mdxType:"Toolbar"},Object(i.b)(c.b,{mdxType:"ToolbarItem"},Object(i.b)(d.a,{changeHandler:e=>t(e.target.value),id:"variant",label:"Select variant of Select Field",options:[{label:"filled",value:"filled"},{label:"outline",value:"outline"}],value:e,mdxType:"SelectField"})),Object(i.b)(c.b,{mdxType:"ToolbarItem"},Object(i.b)(s.a,{id:"my-text-field",label:"Text Field",mdxType:"TextField"})),Object(i.b)(c.b,{mdxType:"ToolbarItem"},Object(i.b)(p.a,{clickHandler:()=>{},id:"my-button",label:"Button",mdxType:"Button"}))))}))}void 0!==v&&v&&v===Object(v)&&Object.isExtensible(v)&&!v.hasOwnProperty("__filemeta")&&Object.defineProperty(v,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/customize/global-props.mdx"}}),v.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-customize-global-props-mdx-26ae7202fe4b459d1612.js.map