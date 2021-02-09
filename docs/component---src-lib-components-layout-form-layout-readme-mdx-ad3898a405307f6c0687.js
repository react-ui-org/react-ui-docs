(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"6EPl":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return g})),a.d(t,"default",(function(){return v}));var o=a("Fcif"),l=a("dV/x"),n=a("mXGw"),i=a("/FXl"),r=a("TjRS"),d=a("ZFoC"),b=a("s0IP"),m=a("8X2u"),u=a("99Eb"),c=a("CTg9"),s=a("hDax"),p=a("XZkq"),h=a("9W4D"),y=a("m+kp"),f=a("l6hz"),x=a("Fg4Y"),T=a("0Dnc"),F=a("Dser"),O=a("yp0Q"),j=a("O/lP");a("aD51");const g={};void 0!==g&&g&&g===Object(g)&&Object.isExtensible(g)&&!g.hasOwnProperty("__filemeta")&&Object.defineProperty(g,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/lib/components/layout/FormLayout/README.mdx"}});const L={_frontmatter:g},w=r.a;function v(e){let{components:t}=e,a=Object(l.a)(e,["components"]);return Object(i.b)(w,Object(o.a)({},L,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"formlayout"},"FormLayout"),Object(i.b)("p",null,"The FormLayout aligns form fields into an organized grid."),Object(i.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(i.b)("p",null,"To implement the FormLayout component, you need to import it first:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import { FormLayout } from '@react-ui-org/react-ui';\n")),Object(i.b)("p",null,"And use it:"),Object(i.b)(d.c,{__position:0,__code:'<FormLayout>\n  <TextField id="my-text-field" label="A form element" />\n</FormLayout>',__scope:{props:a,DefaultLayout:r.a,Playground:d.c,Props:d.d,Placeholder:b.a,Button:m.a,ButtonGroup:u.a,CheckboxField:c.a,Radio:s.a,SelectField:p.a,TextArea:h.a,TextField:y.a,Toggle:f.a,Center:x.a,Toolbar:T.a,ToolbarItem:F.a,FormLayout:O.a,FormLayoutCustomField:j.a,DefaultLayout:r.a,_frontmatter:g},mdxType:"Playground"},Object(i.b)(O.a,{mdxType:"FormLayout"},Object(i.b)(y.a,{id:"my-text-field",label:"A form element",mdxType:"TextField"}))),Object(i.b)("p",null,"See ",Object(i.b)("a",{parentName:"p",href:"#api"},"API")," for all available options."),Object(i.b)("h2",{id:"general-guidelines"},"General Guidelines"),Object(i.b)("p",null,"Since all form fields in React UI are styled as inline blocks, they ",Object(i.b)("strong",{parentName:"p"},"queue up\none after another in a row by default.")," The FormLayout component is there to\nmake building ",Object(i.b)("strong",{parentName:"p"},"vertical and horizontal forms")," easy. It uses the right tool for\nthe job: the\n",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"},"CSS grid layout"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Put ",Object(i.b)("strong",{parentName:"p"},"only form field components")," from React UI inside the FormLayout and\nmake sure they are ",Object(i.b)("strong",{parentName:"p"},"direct descendants")," of it (React\n",Object(i.b)("a",{parentName:"p",href:"https://reactjs.org/docs/fragments.html"},"fragments"),"\nare supported!). All React UI form components are ready for this use case and\ndon't need to be wrapped in any ",Object(i.b)("inlineCode",{parentName:"p"},"div"),"s. Namely, the FormLayout supports the\nfollowing React UI components:\n",Object(i.b)("a",{parentName:"p",href:"/components/ui/checkbox-field"},"CheckboxField"),",\n",Object(i.b)("a",{parentName:"p",href:"/components/ui/radio"},"Radio"),", ",Object(i.b)("a",{parentName:"p",href:"/components/ui/select-field"},"SelectField"),",\n",Object(i.b)("a",{parentName:"p",href:"/components/ui/text-area"},"TextArea"),", ",Object(i.b)("a",{parentName:"p",href:"/components/ui/text-field"},"TextField"),",\nand ",Object(i.b)("a",{parentName:"p",href:"/components/ui/toggle"},"Toggle"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use the ",Object(i.b)("a",{parentName:"p",href:"#custom-fields"},"FormLayoutCustomField")," component when you need to\nplace any ",Object(i.b)("strong",{parentName:"p"},"custom content")," inside the FormLayout. This layout helper ensures\nyour content is properly spaced and aligned with other FormLayout elements.\nDo ",Object(i.b)("strong",{parentName:"p"},"not")," try to put any custom HTML or React components directly into\nFormLayout without wrapping it with the FormLayoutCustomField first."))),Object(i.b)("p",null,"👉 For usage in auto-width Modal, you may need to turn on the ",Object(i.b)("inlineCode",{parentName:"p"},"autoWidth")," option\nfor your FormLayout. This prevents FormLayout from unexpectedly growing in\nbrowsers that don't support\n",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid"},"CSS subgrid"),"\nin cases when there are longer validation messages or help texts."),Object(i.b)("h2",{id:"vertical-layout"},"Vertical Layout"),Object(i.b)("p",null,"Vertical FormLayout works similar to the ",Object(i.b)("a",{parentName:"p",href:"/components/layout/list"},"List")," layout\nexcept that no equivalent of ListItems is needed. It stacks the form fields\nvertically while it forces the vertical layout mode on them. To use this layout,\nsimply wrap your form fields with the FormLayout component:"),Object(i.b)(d.c,{__position:1,__code:'<FormLayout>\n  <TextField id="my-text-field-vertical-1" label="A form element" />\n  <TextField id="my-text-field-vertical-2" label="Another form element" />\n  <TextField id="my-text-field-vertical-3" label="Yet another one" />\n</FormLayout>',__scope:{props:a,DefaultLayout:r.a,Playground:d.c,Props:d.d,Placeholder:b.a,Button:m.a,ButtonGroup:u.a,CheckboxField:c.a,Radio:s.a,SelectField:p.a,TextArea:h.a,TextField:y.a,Toggle:f.a,Center:x.a,Toolbar:T.a,ToolbarItem:F.a,FormLayout:O.a,FormLayoutCustomField:j.a,DefaultLayout:r.a,_frontmatter:g},mdxType:"Playground"},Object(i.b)(O.a,{mdxType:"FormLayout"},Object(i.b)(y.a,{id:"my-text-field-vertical-1",label:"A form element",mdxType:"TextField"}),Object(i.b)(y.a,{id:"my-text-field-vertical-2",label:"Another form element",mdxType:"TextField"}),Object(i.b)(y.a,{id:"my-text-field-vertical-3",label:"Yet another one",mdxType:"TextField"}))),Object(i.b)("h2",{id:"horizontal-layout"},"Horizontal Layout"),Object(i.b)("p",null,"Horizontal FormLayout is designed for horizontal form fields: it nicely ",Object(i.b)("strong",{parentName:"p"},"aligns\nlabels and inputs in an organized grid.")," It is applied starting from the ",Object(i.b)("inlineCode",{parentName:"p"},"md"),"\nviewport size onward and it forces the horizontal layout on the fields."),Object(i.b)(d.c,{__position:2,__code:'<FormLayout fieldLayout="horizontal">\n  <TextField id="my-text-field-horizontal-1" label="A form element" />\n  <TextField id="my-text-field-horizontal-2" label="Another form element" />\n  <TextField id="my-text-field-horizontal-3" label="Yet another one" />\n</FormLayout>',__scope:{props:a,DefaultLayout:r.a,Playground:d.c,Props:d.d,Placeholder:b.a,Button:m.a,ButtonGroup:u.a,CheckboxField:c.a,Radio:s.a,SelectField:p.a,TextArea:h.a,TextField:y.a,Toggle:f.a,Center:x.a,Toolbar:T.a,ToolbarItem:F.a,FormLayout:O.a,FormLayoutCustomField:j.a,DefaultLayout:r.a,_frontmatter:g},mdxType:"Playground"},Object(i.b)(O.a,{fieldLayout:"horizontal",mdxType:"FormLayout"},Object(i.b)(y.a,{id:"my-text-field-horizontal-1",label:"A form element",mdxType:"TextField"}),Object(i.b)(y.a,{id:"my-text-field-horizontal-2",label:"Another form element",mdxType:"TextField"}),Object(i.b)(y.a,{id:"my-text-field-horizontal-3",label:"Yet another one",mdxType:"TextField"}))),Object(i.b)("h3",{id:"label-width"},"Label Width"),Object(i.b)("p",null,"In the horizontal layout mode, it's possible to fine-tune the way how the form\nwill be aligned through the ",Object(i.b)("inlineCode",{parentName:"p"},"labelWidth")," option to cover various design\nrequirements. It comes with ",Object(i.b)("strong",{parentName:"p"},"three globally shared options:")," default width,\nauto width, and limited width. For cases where an individual manual width works\nbetter, there is the ",Object(i.b)("strong",{parentName:"p"},"local custom width mode")," which enables setting a width\nthat is applied just for the current FormLayout."),Object(i.b)("p",null,"👉 All global label width options can be easily ",Object(i.b)("a",{parentName:"p",href:"/customize/theming"},"customized"),"\nwith CSS custom properties."),Object(i.b)("h4",{id:"label-width-options"},"Label Width Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"default")," mode (global) sets the width of all labels to a ",Object(i.b)("strong",{parentName:"p"},"global default\nvalue")," which is 10 em.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"auto")," mode (global) aligns the form ",Object(i.b)("strong",{parentName:"p"},"according to the longest label."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"limited")," mode (global) works as ",Object(i.b)("inlineCode",{parentName:"p"},"auto")," except it's intended for values\nthat ",Object(i.b)("strong",{parentName:"p"},"set a limit for the label width.")," Its default value is\n",Object(i.b)("inlineCode",{parentName:"p"},"fitcontent(50%)")," which also aligns the form according to the longest label\nlike ",Object(i.b)("inlineCode",{parentName:"p"},"auto"),", but with the difference that the labels cannot be wider than\n50 % of the FormLayout.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"custom")," mode (local) allows you to enter any ",Object(i.b)("strong",{parentName:"p"},"custom label width for\nindividual FormLayouts.")))),Object(i.b)("p",null,"👉 Please note the ",Object(i.b)("inlineCode",{parentName:"p"},"auto")," and ",Object(i.b)("inlineCode",{parentName:"p"},"limited")," label width options may not function\ncorrectly in combination with other auto layout mechanisms, eg. the auto-width\n",Object(i.b)("a",{parentName:"p",href:"/components/ui/modal"},"Modal"),". It's just too much of magic that doesn't quite\nwork together yet 🎩."),Object(i.b)("p",null,"Try to resize the playground to see how individual options work."),Object(i.b)(d.c,{__position:3,__code:"() => {\n  const [labelWidth, setLabelWidth] = React.useState('default')\n  const [customLabelWidth, setCustomLabelWidth] = React.useState('20em')\n  return (\n    <div>\n      <div className=\"mb-6\">\n        <Toolbar align=\"baseline\">\n          <ToolbarItem>\n            <span id=\"label-width-options-label\">Label width:</span>\n          </ToolbarItem>\n          <ToolbarItem>\n            <ButtonGroup aria-labelledby=\"#label-width-options-label\">\n              <Button\n                label=\"default\"\n                clickHandler={() => setLabelWidth('default')}\n                variant={labelWidth === 'default' ? 'dark' : 'primary'}\n              />\n              <Button\n                label=\"auto\"\n                clickHandler={() => setLabelWidth('auto')}\n                variant={labelWidth === 'auto' ? 'dark' : 'primary'}\n              />\n              <Button\n                label=\"limited\"\n                clickHandler={() => setLabelWidth('limited')}\n                variant={labelWidth === 'limited' ? 'dark' : 'primary'}\n              />\n              <Button\n                label=\"custom\"\n                clickHandler={() => setLabelWidth('custom')}\n                variant={labelWidth === 'custom' ? 'dark' : 'primary'}\n              />\n            </ButtonGroup>\n          </ToolbarItem>\n          {labelWidth === 'custom' && (\n            <ToolbarItem>\n              <TextField\n                changeHandler={e => setCustomLabelWidth(e.target.value)}\n                id=\"form-layout-custom-label-width\"\n                inputSize={5}\n                isLabelVisible={false}\n                label=\"Custom label width\"\n                layout=\"horizontal\"\n                value={customLabelWidth}\n              />\n            </ToolbarItem>\n          )}\n        </Toolbar>\n      </div>\n      <FormLayout\n        fieldLayout=\"horizontal\"\n        labelWidth={labelWidth === 'custom' ? customLabelWidth : labelWidth}\n      >\n        <TextField id=\"my-text-field-label-width-1\" label=\"A form element\" />\n        <TextField\n          id=\"my-text-field-label-width-2\"\n          label={\n            'Another form element with a very long label that is so ' +\n            'long that in the auto mode, it should make the label column ' +\n            'grow until the inputs reach the end of the line, but it will ' +\n            'not exceed 50 % of the FormLayout width in the limited label ' +\n            'width mode'\n          }\n        />\n        <TextField id=\"my-text-field-label-width-3\" label=\"Yet another one\" />\n      </FormLayout>\n    </div>\n  )\n}",__scope:{props:a,DefaultLayout:r.a,Playground:d.c,Props:d.d,Placeholder:b.a,Button:m.a,ButtonGroup:u.a,CheckboxField:c.a,Radio:s.a,SelectField:p.a,TextArea:h.a,TextField:y.a,Toggle:f.a,Center:x.a,Toolbar:T.a,ToolbarItem:F.a,FormLayout:O.a,FormLayoutCustomField:j.a,DefaultLayout:r.a,_frontmatter:g},mdxType:"Playground"},()=>{const[e,t]=n.useState("default"),[a,o]=n.useState("20em");return Object(i.b)("div",null,Object(i.b)("div",{className:"mb-6"},Object(i.b)(T.a,{align:"baseline",mdxType:"Toolbar"},Object(i.b)(F.a,{mdxType:"ToolbarItem"},Object(i.b)("span",{id:"label-width-options-label"},"Label width:")),Object(i.b)(F.a,{mdxType:"ToolbarItem"},Object(i.b)(u.a,{"aria-labelledby":"#label-width-options-label",mdxType:"ButtonGroup"},Object(i.b)(m.a,{label:"default",clickHandler:()=>t("default"),variant:"default"===e?"dark":"primary",mdxType:"Button"}),Object(i.b)(m.a,{label:"auto",clickHandler:()=>t("auto"),variant:"auto"===e?"dark":"primary",mdxType:"Button"}),Object(i.b)(m.a,{label:"limited",clickHandler:()=>t("limited"),variant:"limited"===e?"dark":"primary",mdxType:"Button"}),Object(i.b)(m.a,{label:"custom",clickHandler:()=>t("custom"),variant:"custom"===e?"dark":"primary",mdxType:"Button"}))),"custom"===e&&Object(i.b)(F.a,{mdxType:"ToolbarItem"},Object(i.b)(y.a,{changeHandler:e=>o(e.target.value),id:"form-layout-custom-label-width",inputSize:5,isLabelVisible:!1,label:"Custom label width",layout:"horizontal",value:a,mdxType:"TextField"})))),Object(i.b)(O.a,{fieldLayout:"horizontal",labelWidth:"custom"===e?a:e,mdxType:"FormLayout"},Object(i.b)(y.a,{id:"my-text-field-label-width-1",label:"A form element",mdxType:"TextField"}),Object(i.b)(y.a,{id:"my-text-field-label-width-2",label:"Another form element with a very long label that is so long that in the auto mode, it should make the label column grow until the inputs reach the end of the line, but it will not exceed 50 % of the FormLayout width in the limited label width mode",mdxType:"TextField"}),Object(i.b)(y.a,{id:"my-text-field-label-width-3",label:"Yet another one",mdxType:"TextField"})))}),Object(i.b)("h2",{id:"alignment"},"Alignment"),Object(i.b)("p",null,"To align whole FormLayout to center of a container, simply wrap it with the\n",Object(i.b)("a",{parentName:"p",href:"/components/layout/center"},"Center")," layout."),Object(i.b)(d.c,{__position:4,__code:'<Placeholder bordered height="24rem">\n  <Center>\n    <FormLayout autoWidth>\n      <TextField id="my-text-field-auto-width-1" label="A form element" />\n      <TextField\n        id="my-text-field-auto-width-2"\n        label="Another form element"\n      />\n      <TextField id="my-text-field-auto-width-3" label="Yet another one" />\n    </FormLayout>\n  </Center>\n</Placeholder>',__scope:{props:a,DefaultLayout:r.a,Playground:d.c,Props:d.d,Placeholder:b.a,Button:m.a,ButtonGroup:u.a,CheckboxField:c.a,Radio:s.a,SelectField:p.a,TextArea:h.a,TextField:y.a,Toggle:f.a,Center:x.a,Toolbar:T.a,ToolbarItem:F.a,FormLayout:O.a,FormLayoutCustomField:j.a,DefaultLayout:r.a,_frontmatter:g},mdxType:"Playground"},Object(i.b)(b.a,{bordered:!0,height:"24rem",mdxType:"Placeholder"},Object(i.b)(x.a,{mdxType:"Center"},Object(i.b)(O.a,{autoWidth:!0,mdxType:"FormLayout"},Object(i.b)(y.a,{id:"my-text-field-auto-width-1",label:"A form element",mdxType:"TextField"}),Object(i.b)(y.a,{id:"my-text-field-auto-width-2",label:"Another form element",mdxType:"TextField"}),Object(i.b)(y.a,{id:"my-text-field-auto-width-3",label:"Yet another one",mdxType:"TextField"}))))),Object(i.b)("h2",{id:"custom-fields"},"Custom Fields"),Object(i.b)("p",null,"You can even place any content you need into the FormLayout — just wrap it with\nthe ",Object(i.b)("a",{parentName:"p",href:"#formlayoutcustomfield"},"FormLayoutCustomField")," component. This layout\nhelper ensures your content is properly spaced and aligned with to other\nFormLayout elements. FormLayoutCustomFields are designed to work solely inside\nthe FormLayout component."),Object(i.b)(d.c,{__position:5,__code:'<FormLayout fieldLayout="horizontal">\n  <TextField id="my-text-field-custom-1" label="A form element" />\n  <FormLayoutCustomField label="Optional label">\n    <Placeholder bordered>Custom content</Placeholder>\n  </FormLayoutCustomField>\n  <TextField id="my-text-field-custom-2" label="Another form element" />\n</FormLayout>',__scope:{props:a,DefaultLayout:r.a,Playground:d.c,Props:d.d,Placeholder:b.a,Button:m.a,ButtonGroup:u.a,CheckboxField:c.a,Radio:s.a,SelectField:p.a,TextArea:h.a,TextField:y.a,Toggle:f.a,Center:x.a,Toolbar:T.a,ToolbarItem:F.a,FormLayout:O.a,FormLayoutCustomField:j.a,DefaultLayout:r.a,_frontmatter:g},mdxType:"Playground"},Object(i.b)(O.a,{fieldLayout:"horizontal",mdxType:"FormLayout"},Object(i.b)(y.a,{id:"my-text-field-custom-1",label:"A form element",mdxType:"TextField"}),Object(i.b)(j.a,{label:"Optional label",mdxType:"FormLayoutCustomField"},Object(i.b)(b.a,{bordered:!0,mdxType:"Placeholder"},"Custom content")),Object(i.b)(y.a,{id:"my-text-field-custom-2",label:"Another form element",mdxType:"TextField"}))),Object(i.b)("h2",{id:"full-example"},"Full Example"),Object(i.b)("p",null,"This is a demo of all components supported by FormLayout."),Object(i.b)(d.c,{__position:6,__code:'<FormLayout fieldLayout="horizontal" labelWidth="auto">\n  <>\n    <TextField\n      id="form-layout-horizontal-first-name"\n      changeHandler={() => {}}\n      label="First Name"\n    />\n    <TextField\n      id="form-layout-horizontal-last-name"\n      changeHandler={() => {}}\n      label="Last Name"\n    />\n  </>\n  <TextField\n    id="form-layout-horizontal-email"\n    changeHandler={() => {}}\n    helpText="Optional"\n    label="Email address"\n    type="email"\n  />\n  <>\n    <TextField\n      id="form-layout-horizontal-address-1"\n      changeHandler={() => {}}\n      label="Address"\n      placeholder="Address line 1"\n    />\n    <TextField\n      id="form-layout-horizontal-address-2"\n      changeHandler={() => {}}\n      isLabelVisible={false}\n      label="Address 2"\n      placeholder="Address line 2"\n    />\n    <TextField\n      id="form-layout-horizontal-zip"\n      changeHandler={() => {}}\n      label="ZIP"\n      inputSize={6}\n      validationState="invalid"\n      validationText="ZIP should be 5 to 6 digits long code."\n    />\n    <FormLayoutCustomField\n      id="form-layout-horizontal-country"\n      label="Country"\n    >\n      <span>Czech Republic</span>\n    </FormLayoutCustomField>\n    <CheckboxField\n      id="form-layout-horizontal-delivery"\n      changeHandler={() => {}}\n      label="This is my delivery address"\n    />\n  </>\n  <SelectField\n    id="form-layout-horizontal-fruit"\n    changeHandler={() => {}}\n    label="Your favourite fruit"\n    options={[\n      {\n        label: \'Apple\',\n        value: \'apple\',\n      },\n      {\n        label: \'Banana\',\n        value: \'banana\',\n      },\n      {\n        label: \'Grapefruit\',\n        value: \'grapefruit\',\n      },\n    ]}\n  />\n  <TextArea\n    id="form-layout-horizontal-message"\n    changeHandler={() => {}}\n    fullWidth\n    label="Message"\n    rows={3}\n  />\n  <Toggle\n    id="form-layout-horizontal-newsletter"\n    changeHandler={() => {}}\n    checked\n    helpText="Only once per week!"\n    label="Receive weekly newsletter"\n    required\n  />\n  <Radio\n    id="form-layout-horizontal-fruit-2"\n    changeHandler={() => {}}\n    label="And fruit again!"\n    options={[\n      {\n        label: \'Apple\',\n        value: \'apple\',\n      },\n      {\n        label: \'Banana\',\n        value: \'banana\',\n      },\n      {\n        label: \'Grapefruit\',\n        value: \'grapefruit\',\n      },\n    ]}\n    value="apple"\n  />\n</FormLayout>',__scope:{props:a,DefaultLayout:r.a,Playground:d.c,Props:d.d,Placeholder:b.a,Button:m.a,ButtonGroup:u.a,CheckboxField:c.a,Radio:s.a,SelectField:p.a,TextArea:h.a,TextField:y.a,Toggle:f.a,Center:x.a,Toolbar:T.a,ToolbarItem:F.a,FormLayout:O.a,FormLayoutCustomField:j.a,DefaultLayout:r.a,_frontmatter:g},mdxType:"Playground"},Object(i.b)(O.a,{fieldLayout:"horizontal",labelWidth:"auto",mdxType:"FormLayout"},Object(i.b)(n.Fragment,null,Object(i.b)(y.a,{id:"form-layout-horizontal-first-name",changeHandler:()=>{},label:"First Name",mdxType:"TextField"}),Object(i.b)(y.a,{id:"form-layout-horizontal-last-name",changeHandler:()=>{},label:"Last Name",mdxType:"TextField"})),Object(i.b)(y.a,{id:"form-layout-horizontal-email",changeHandler:()=>{},helpText:"Optional",label:"Email address",type:"email",mdxType:"TextField"}),Object(i.b)(n.Fragment,null,Object(i.b)(y.a,{id:"form-layout-horizontal-address-1",changeHandler:()=>{},label:"Address",placeholder:"Address line 1",mdxType:"TextField"}),Object(i.b)(y.a,{id:"form-layout-horizontal-address-2",changeHandler:()=>{},isLabelVisible:!1,label:"Address 2",placeholder:"Address line 2",mdxType:"TextField"}),Object(i.b)(y.a,{id:"form-layout-horizontal-zip",changeHandler:()=>{},label:"ZIP",inputSize:6,validationState:"invalid",validationText:"ZIP should be 5 to 6 digits long code.",mdxType:"TextField"}),Object(i.b)(j.a,{id:"form-layout-horizontal-country",label:"Country",mdxType:"FormLayoutCustomField"},Object(i.b)("span",null,"Czech Republic")),Object(i.b)(c.a,{id:"form-layout-horizontal-delivery",changeHandler:()=>{},label:"This is my delivery address",mdxType:"CheckboxField"})),Object(i.b)(p.a,{id:"form-layout-horizontal-fruit",changeHandler:()=>{},label:"Your favourite fruit",options:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Grapefruit",value:"grapefruit"}],mdxType:"SelectField"}),Object(i.b)(h.a,{id:"form-layout-horizontal-message",changeHandler:()=>{},fullWidth:!0,label:"Message",rows:3,mdxType:"TextArea"}),Object(i.b)(f.a,{id:"form-layout-horizontal-newsletter",changeHandler:()=>{},checked:!0,helpText:"Only once per week!",label:"Receive weekly newsletter",required:!0,mdxType:"Toggle"}),Object(i.b)(s.a,{id:"form-layout-horizontal-fruit-2",changeHandler:()=>{},label:"And fruit again!",options:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Grapefruit",value:"grapefruit"}],value:"apple",mdxType:"Radio"}))),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)(d.d,{table:!0,of:O.a,mdxType:"Props"}),Object(i.b)("h3",{id:"formlayoutcustomfield"},"FormLayoutCustomField"),Object(i.b)("p",null,"A place for custom content inside FormLayout."),Object(i.b)(d.d,{table:!0,of:j.a,mdxType:"Props"}))}void 0!==v&&v&&v===Object(v)&&Object.isExtensible(v)&&!v.hasOwnProperty("__filemeta")&&Object.defineProperty(v,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/lib/components/layout/FormLayout/README.mdx"}}),v.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-lib-components-layout-form-layout-readme-mdx-ad3898a405307f6c0687.js.map