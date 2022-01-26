(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{xtVv:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return L})),a.d(t,"default",(function(){return N}));var l=a("Fcif"),o=a("dV/x"),n=a("mXGw"),i=a("/FXl"),r=a("TjRS"),b=a("ZFoC"),d=a("s0IP"),m=a("QIWs"),u=a("bYQf"),s=a("YBnK"),c=a("z6AO"),p=a("SdXv"),h=a("j3Hi"),y=a("OZHr"),f=a("ET+1"),F=a("fRCu"),O=a("ltne"),j=a("isJs"),T=a("2QZn"),g=a("gcC3");a("aD51");const x=["components"],L={};void 0!==L&&L&&L===Object(L)&&Object.isExtensible(L)&&!L.hasOwnProperty("__filemeta")&&Object.defineProperty(L,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/lib/components/FormLayout/README.mdx"}});const C={_frontmatter:L},w=r.a;function N(e){let{components:t}=e,a=Object(o.a)(e,x);return Object(i.b)(w,Object(l.a)({},C,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"formlayout"},"FormLayout"),Object(i.b)("p",null,"The FormLayout aligns form fields into an organized grid."),Object(i.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(i.b)("p",null,"To implement the FormLayout component, you need to import it first:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import { FormLayout } from '@react-ui-org/react-ui';\n")),Object(i.b)("p",null,"And use it:"),Object(i.b)(b.c,{__position:0,__code:'<FormLayout>\n  <TextField label="A form element" />\n</FormLayout>',__scope:{props:a,DefaultLayout:r.a,Playground:b.c,Props:b.d,Placeholder:d.a,Button:m.a,ButtonGroup:u.a,CheckboxField:s.a,FileInputField:c.a,Radio:p.a,SelectField:h.a,TextArea:y.a,TextField:f.a,Toggle:F.a,Toolbar:O.a,ToolbarItem:j.a,FormLayout:T.a,FormLayoutCustomField:g.a,DefaultLayout:r.a,_frontmatter:L},mdxType:"Playground"},Object(i.b)(T.a,{mdxType:"FormLayout"},Object(i.b)(f.a,{label:"A form element",mdxType:"TextField"}))),Object(i.b)("p",null,"See ",Object(i.b)("a",{parentName:"p",href:"#api"},"API")," for all available options."),Object(i.b)("h2",{id:"general-guidelines"},"General Guidelines"),Object(i.b)("p",null,"Since all form fields in React UI are styled as inline blocks, they ",Object(i.b)("strong",{parentName:"p"},"queue up\none after another in a row by default.")," The FormLayout component is there to\nmake building ",Object(i.b)("strong",{parentName:"p"},"vertical and horizontal forms")," easy. It uses the right tool for\nthe job: the ",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"},"CSS grid layout"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Put ",Object(i.b)("strong",{parentName:"p"},"only form field components")," from React UI inside the FormLayout and\nmake sure they are ",Object(i.b)("strong",{parentName:"p"},"direct descendants")," of it (React ",Object(i.b)("a",{parentName:"p",href:"https://reactjs.org/docs/fragments.html"},"fragments")," are\nsupported!). All React UI form components are ready for this use case and\ndon't need to be wrapped in any ",Object(i.b)("inlineCode",{parentName:"p"},"div"),"s. Namely, the FormLayout supports the\nfollowing React UI components:\n",Object(i.b)("a",{parentName:"p",href:"/components/checkbox-field"},"CheckboxField"),",\n",Object(i.b)("a",{parentName:"p",href:"/components/radio"},"Radio"),", ",Object(i.b)("a",{parentName:"p",href:"/components/select-field"},"SelectField"),",\n",Object(i.b)("a",{parentName:"p",href:"/components/text-area"},"TextArea"),", ",Object(i.b)("a",{parentName:"p",href:"/components/text-field"},"TextField"),",\nand ",Object(i.b)("a",{parentName:"p",href:"/components/toggle"},"Toggle"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use the ",Object(i.b)("a",{parentName:"p",href:"#custom-fields"},"FormLayoutCustomField")," component when you need to\nplace any ",Object(i.b)("strong",{parentName:"p"},"custom content")," inside the FormLayout. This layout helper ensures\nyour content is properly spaced and aligned with other FormLayout elements.\nDo ",Object(i.b)("strong",{parentName:"p"},"not")," try to put any custom HTML or React components directly into\nFormLayout without wrapping it with the FormLayoutCustomField first."))),Object(i.b)("p",null,"👉 For usage in auto-width Modal, you may need to turn on the ",Object(i.b)("inlineCode",{parentName:"p"},"autoWidth")," option\nfor your FormLayout. This prevents FormLayout from unexpectedly growing in\nbrowsers that ",Object(i.b)("a",{parentName:"p",href:"https://github.com/react-ui-org/react-ui/issues/232"},"don't support")," ",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid"},"CSS subgrid")," in cases when\nthere are longer validation messages or help texts."),Object(i.b)("h2",{id:"vertical-layout"},"Vertical Layout"),Object(i.b)("p",null,"Vertical FormLayout works similar to the ",Object(i.b)("a",{parentName:"p",href:"/components/list"},"List")," layout\nexcept that no equivalent of ListItems is needed. It stacks the form fields\nvertically while it forces the vertical layout mode on them. To use this layout,\nsimply wrap your form fields with the FormLayout component:"),Object(i.b)(b.c,{__position:1,__code:'<FormLayout>\n  <TextField label="A form element" />\n  <TextField label="Another form element" />\n  <TextField label="Yet another one" />\n</FormLayout>',__scope:{props:a,DefaultLayout:r.a,Playground:b.c,Props:b.d,Placeholder:d.a,Button:m.a,ButtonGroup:u.a,CheckboxField:s.a,FileInputField:c.a,Radio:p.a,SelectField:h.a,TextArea:y.a,TextField:f.a,Toggle:F.a,Toolbar:O.a,ToolbarItem:j.a,FormLayout:T.a,FormLayoutCustomField:g.a,DefaultLayout:r.a,_frontmatter:L},mdxType:"Playground"},Object(i.b)(T.a,{mdxType:"FormLayout"},Object(i.b)(f.a,{label:"A form element",mdxType:"TextField"}),Object(i.b)(f.a,{label:"Another form element",mdxType:"TextField"}),Object(i.b)(f.a,{label:"Yet another one",mdxType:"TextField"}))),Object(i.b)("h2",{id:"horizontal-layout"},"Horizontal Layout"),Object(i.b)("p",null,"Horizontal FormLayout is designed for horizontal form fields: it nicely ",Object(i.b)("strong",{parentName:"p"},"aligns\nlabels and inputs in an organized grid.")," It is applied starting from the ",Object(i.b)("inlineCode",{parentName:"p"},"md"),"\nviewport size onward and it forces the horizontal layout on the fields."),Object(i.b)(b.c,{__position:2,__code:'<FormLayout fieldLayout="horizontal">\n  <TextField label="A form element" />\n  <TextField label="Another form element" />\n  <TextField label="Yet another one" />\n</FormLayout>',__scope:{props:a,DefaultLayout:r.a,Playground:b.c,Props:b.d,Placeholder:d.a,Button:m.a,ButtonGroup:u.a,CheckboxField:s.a,FileInputField:c.a,Radio:p.a,SelectField:h.a,TextArea:y.a,TextField:f.a,Toggle:F.a,Toolbar:O.a,ToolbarItem:j.a,FormLayout:T.a,FormLayoutCustomField:g.a,DefaultLayout:r.a,_frontmatter:L},mdxType:"Playground"},Object(i.b)(T.a,{fieldLayout:"horizontal",mdxType:"FormLayout"},Object(i.b)(f.a,{label:"A form element",mdxType:"TextField"}),Object(i.b)(f.a,{label:"Another form element",mdxType:"TextField"}),Object(i.b)(f.a,{label:"Yet another one",mdxType:"TextField"}))),Object(i.b)("h3",{id:"label-width"},"Label Width"),Object(i.b)("p",null,"In the horizontal layout mode, it's possible to fine-tune the way how the form\nwill be aligned through the ",Object(i.b)("inlineCode",{parentName:"p"},"labelWidth")," option to cover various design\nrequirements. It comes with ",Object(i.b)("strong",{parentName:"p"},"three globally shared options:")," default width,\nauto width, and limited width. For cases where an individual manual width works\nbetter, there is the ",Object(i.b)("strong",{parentName:"p"},"local custom width mode")," which enables setting a width\nthat is applied just for the current FormLayout."),Object(i.b)("p",null,"👉 All global label width options can be easily ",Object(i.b)("a",{parentName:"p",href:"/customize/theming/overview"},"customized"),"\nwith CSS custom properties."),Object(i.b)("h4",{id:"label-width-options"},"Label Width Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"default")," mode (global) sets the width of all labels to a ",Object(i.b)("strong",{parentName:"p"},"global default\nvalue")," which is 10 em.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"auto")," mode (global) aligns the form ",Object(i.b)("strong",{parentName:"p"},"according to the longest label."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"limited")," mode (global) works as ",Object(i.b)("inlineCode",{parentName:"p"},"auto")," except it's intended for values\nthat ",Object(i.b)("strong",{parentName:"p"},"set a limit for the label width.")," Its default value is\n",Object(i.b)("inlineCode",{parentName:"p"},"fitcontent(50%)")," which also aligns the form according to the longest label\nlike ",Object(i.b)("inlineCode",{parentName:"p"},"auto"),", but with the difference that the labels cannot be wider than\n50 % of the FormLayout.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"custom")," mode (local) allows you to enter any ",Object(i.b)("strong",{parentName:"p"},"custom label width for\nindividual FormLayouts.")))),Object(i.b)("p",null,"📐 Try resizing the playground to see how individual options work."),Object(i.b)(b.c,{__position:3,__code:"() => {\n  const [labelWidth, setLabelWidth] = React.useState('default')\n  const [customLabelWidth, setCustomLabelWidth] = React.useState('20em')\n  return (\n    <div>\n      <Toolbar align=\"baseline\">\n        <ToolbarItem>\n          <span id=\"label-width-options-label\">Label width:</span>\n        </ToolbarItem>\n        <ToolbarItem>\n          <ButtonGroup aria-labelledby=\"#label-width-options-label\">\n            <Button\n              color={labelWidth === 'default' ? 'dark' : 'primary'}\n              label=\"default\"\n              onClick={() => setLabelWidth('default')}\n            />\n            <Button\n              color={labelWidth === 'auto' ? 'dark' : 'primary'}\n              label=\"auto\"\n              onClick={() => setLabelWidth('auto')}\n            />\n            <Button\n              color={labelWidth === 'limited' ? 'dark' : 'primary'}\n              label=\"limited\"\n              onClick={() => setLabelWidth('limited')}\n            />\n            <Button\n              color={labelWidth === 'custom' ? 'dark' : 'primary'}\n              label=\"custom\"\n              onClick={() => setLabelWidth('custom')}\n            />\n          </ButtonGroup>\n        </ToolbarItem>\n        {labelWidth === 'custom' && (\n          <ToolbarItem>\n            <TextField\n              inputSize={5}\n              isLabelVisible={false}\n              label=\"Custom label width\"\n              layout=\"horizontal\"\n              onChange={e => setCustomLabelWidth(e.target.value)}\n              value={customLabelWidth}\n            />\n          </ToolbarItem>\n        )}\n      </Toolbar>\n      <FormLayout\n        fieldLayout=\"horizontal\"\n        labelWidth={labelWidth === 'custom' ? customLabelWidth : labelWidth}\n      >\n        <TextField label=\"A form element\" />\n        <TextField\n          label={\n            'Another form element with a very long label that is so ' +\n            'long that in the auto mode, it should make the label column ' +\n            'grow until the inputs reach the end of the line, but it will ' +\n            'not exceed 50 % of the FormLayout width in the limited label ' +\n            'width mode'\n          }\n        />\n        <TextField label=\"Yet another one\" />\n      </FormLayout>\n    </div>\n  )\n}",__scope:{props:a,DefaultLayout:r.a,Playground:b.c,Props:b.d,Placeholder:d.a,Button:m.a,ButtonGroup:u.a,CheckboxField:s.a,FileInputField:c.a,Radio:p.a,SelectField:h.a,TextArea:y.a,TextField:f.a,Toggle:F.a,Toolbar:O.a,ToolbarItem:j.a,FormLayout:T.a,FormLayoutCustomField:g.a,DefaultLayout:r.a,_frontmatter:L},mdxType:"Playground"},()=>{const[e,t]=n.useState("default"),[a,l]=n.useState("20em");return Object(i.b)("div",null,Object(i.b)(O.a,{align:"baseline",mdxType:"Toolbar"},Object(i.b)(j.a,{mdxType:"ToolbarItem"},Object(i.b)("span",{id:"label-width-options-label"},"Label width:")),Object(i.b)(j.a,{mdxType:"ToolbarItem"},Object(i.b)(u.a,{"aria-labelledby":"#label-width-options-label",mdxType:"ButtonGroup"},Object(i.b)(m.a,{color:"default"===e?"dark":"primary",label:"default",onClick:()=>t("default"),mdxType:"Button"}),Object(i.b)(m.a,{color:"auto"===e?"dark":"primary",label:"auto",onClick:()=>t("auto"),mdxType:"Button"}),Object(i.b)(m.a,{color:"limited"===e?"dark":"primary",label:"limited",onClick:()=>t("limited"),mdxType:"Button"}),Object(i.b)(m.a,{color:"custom"===e?"dark":"primary",label:"custom",onClick:()=>t("custom"),mdxType:"Button"}))),"custom"===e&&Object(i.b)(j.a,{mdxType:"ToolbarItem"},Object(i.b)(f.a,{inputSize:5,isLabelVisible:!1,label:"Custom label width",layout:"horizontal",onChange:e=>l(e.target.value),value:a,mdxType:"TextField"}))),Object(i.b)(T.a,{fieldLayout:"horizontal",labelWidth:"custom"===e?a:e,mdxType:"FormLayout"},Object(i.b)(f.a,{label:"A form element",mdxType:"TextField"}),Object(i.b)(f.a,{label:"Another form element with a very long label that is so long that in the auto mode, it should make the label column grow until the inputs reach the end of the line, but it will not exceed 50 % of the FormLayout width in the limited label width mode",mdxType:"TextField"}),Object(i.b)(f.a,{label:"Yet another one",mdxType:"TextField"})))}),Object(i.b)("h3",{id:"limitations"},"Limitations"),Object(i.b)("h4",{id:"modals"},"Modals"),Object(i.b)("p",null,"Please note the ",Object(i.b)("inlineCode",{parentName:"p"},"auto")," and ",Object(i.b)("inlineCode",{parentName:"p"},"limited")," label width options may not function\ncorrectly in combination with other auto layout mechanisms, e.g. the auto-width\n",Object(i.b)("a",{parentName:"p",href:"/components/modal"},"Modal"),". It's just too much of magic that doesn't quite\nwork together yet 🎩."),Object(i.b)("h4",{id:"inline-form-fields"},"Inline Form Fields"),Object(i.b)("p",null,"CheckboxField and Toggle always display their labels after inputs inside\nFormLayout. In other words, their labels never appear in a column with other\nfields' labels even when they have ",Object(i.b)("inlineCode",{parentName:"p"},"labelPosition")," set to ",Object(i.b)("inlineCode",{parentName:"p"},"before"),". This feature\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/react-ui-org/react-ui/issues/232"},"will be implemented")," once ",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid"},"CSS subgrid")," is fully supported in\n",Object(i.b)("a",{parentName:"p",href:"/getting-started/browsers-and-devices"},"browsers that we support"),"."),Object(i.b)("h2",{id:"custom-fields"},"Custom Fields"),Object(i.b)("p",null,"You can even place any content you need into the FormLayout — just wrap it with\nthe ",Object(i.b)("a",{parentName:"p",href:"#formlayoutcustomfield"},"FormLayoutCustomField")," component. This layout\nhelper ensures your content is properly spaced and aligned with to other\nFormLayout elements. FormLayoutCustomFields are designed to work solely inside\nthe FormLayout component."),Object(i.b)(b.c,{__position:4,__code:'<FormLayout fieldLayout="horizontal" labelWidth="auto">\n  <TextField label="A form element" />\n  <FormLayoutCustomField label="Optional custom field label">\n    <Placeholder bordered>Custom field content</Placeholder>\n  </FormLayoutCustomField>\n  <TextField label="Another form element" />\n</FormLayout>',__scope:{props:a,DefaultLayout:r.a,Playground:b.c,Props:b.d,Placeholder:d.a,Button:m.a,ButtonGroup:u.a,CheckboxField:s.a,FileInputField:c.a,Radio:p.a,SelectField:h.a,TextArea:y.a,TextField:f.a,Toggle:F.a,Toolbar:O.a,ToolbarItem:j.a,FormLayout:T.a,FormLayoutCustomField:g.a,DefaultLayout:r.a,_frontmatter:L},mdxType:"Playground"},Object(i.b)(T.a,{fieldLayout:"horizontal",labelWidth:"auto",mdxType:"FormLayout"},Object(i.b)(f.a,{label:"A form element",mdxType:"TextField"}),Object(i.b)(g.a,{label:"Optional custom field label",mdxType:"FormLayoutCustomField"},Object(i.b)(d.a,{bordered:!0,mdxType:"Placeholder"},"Custom field content")),Object(i.b)(f.a,{label:"Another form element",mdxType:"TextField"}))),Object(i.b)("p",null,"👉 While you can set FormLayoutCustomField as ",Object(i.b)("inlineCode",{parentName:"p"},"disabled"),", ",Object(i.b)("inlineCode",{parentName:"p"},"valid")," or ",Object(i.b)("inlineCode",{parentName:"p"},"required"),"\nand its styles may affect contained form fields through CSS cascade, don't\nforget to mirror the aforementioned properties to the contained form fields too\nas API options as such are ",Object(i.b)("strong",{parentName:"p"},"not")," inherited."),Object(i.b)("h3",{id:"label-alignment"},"Label Alignment"),Object(i.b)("p",null,"If you are in a situation with one or more box form fields inside your\nFormLayoutCustomField, you may want to have its label aligned with the fields\ninside. Since it's ",Object(i.b)("a",{parentName:"p",href:"https://github.com/react-ui-org/react-ui/issues/265"},"not quite possible to do this automatically")," due to\nlimited browser support, there is ",Object(i.b)("inlineCode",{parentName:"p"},"innerFieldSize")," option which accepts any of\nexisting box field sizes (small, medium, or large) and is intended right for\nthis task."),Object(i.b)(b.c,{__position:5,__code:'<FormLayout fieldLayout="horizontal" labelWidth="auto">\n  <TextField label="A form element" />\n  <FormLayoutCustomField\n    innerFieldSize="medium"\n    label="Custom field label aligned to inner text input"\n  >\n    <TextField\n      isLabelVisible={false}\n      label="A form element"\n      placeholder="Text field with invisible label"\n    />\n  </FormLayoutCustomField>\n  <TextField label="Another form element" />\n</FormLayout>',__scope:{props:a,DefaultLayout:r.a,Playground:b.c,Props:b.d,Placeholder:d.a,Button:m.a,ButtonGroup:u.a,CheckboxField:s.a,FileInputField:c.a,Radio:p.a,SelectField:h.a,TextArea:y.a,TextField:f.a,Toggle:F.a,Toolbar:O.a,ToolbarItem:j.a,FormLayout:T.a,FormLayoutCustomField:g.a,DefaultLayout:r.a,_frontmatter:L},mdxType:"Playground"},Object(i.b)(T.a,{fieldLayout:"horizontal",labelWidth:"auto",mdxType:"FormLayout"},Object(i.b)(f.a,{label:"A form element",mdxType:"TextField"}),Object(i.b)(g.a,{innerFieldSize:"medium",label:"Custom field label aligned to inner text input",mdxType:"FormLayoutCustomField"},Object(i.b)(f.a,{isLabelVisible:!1,label:"A form element",placeholder:"Text field with invisible label",mdxType:"TextField"})),Object(i.b)(f.a,{label:"Another form element",mdxType:"TextField"}))),Object(i.b)("h3",{id:"validation-states"},"Validation States"),Object(i.b)("p",null,"Custom fields support the same validation states as regular form fields to\nprovide labels with optional feedback style."),Object(i.b)(b.c,{__position:6,__code:'<FormLayout fieldLayout="horizontal" labelWidth="auto">\n  <TextField label="A form element" />\n  <FormLayoutCustomField\n    label="Custom field label in valid state"\n    validationState="valid"\n  >\n    <Placeholder bordered>Custom field content</Placeholder>\n  </FormLayoutCustomField>\n  <TextField label="Another form element" />\n</FormLayout>',__scope:{props:a,DefaultLayout:r.a,Playground:b.c,Props:b.d,Placeholder:d.a,Button:m.a,ButtonGroup:u.a,CheckboxField:s.a,FileInputField:c.a,Radio:p.a,SelectField:h.a,TextArea:y.a,TextField:f.a,Toggle:F.a,Toolbar:O.a,ToolbarItem:j.a,FormLayout:T.a,FormLayoutCustomField:g.a,DefaultLayout:r.a,_frontmatter:L},mdxType:"Playground"},Object(i.b)(T.a,{fieldLayout:"horizontal",labelWidth:"auto",mdxType:"FormLayout"},Object(i.b)(f.a,{label:"A form element",mdxType:"TextField"}),Object(i.b)(g.a,{label:"Custom field label in valid state",validationState:"valid",mdxType:"FormLayoutCustomField"},Object(i.b)(d.a,{bordered:!0,mdxType:"Placeholder"},"Custom field content")),Object(i.b)(f.a,{label:"Another form element",mdxType:"TextField"}))),Object(i.b)("h3",{id:"accessibility"},"Accessibility"),Object(i.b)("p",null,"If possible, use the ",Object(i.b)("inlineCode",{parentName:"p"},"labelForId")," option to provide ID of contained form field\nso the field remains accessible via custom field label."),Object(i.b)("p",null,"You can also specify size of contained form field so custom field label is\nproperly vertically aligned."),Object(i.b)(b.c,{__position:7,__code:'() => {\n  const [isChecked, setIsChecked] = React.useState(false)\n  return (\n    <FormLayout fieldLayout="horizontal" labelWidth="auto">\n      <TextField label="A form element" />\n      <FormLayoutCustomField\n        fullWidth\n        label="Custom field label aligned with medium form field"\n        labelForId="my-text-field-custom-accessibility-2"\n        innerFieldSize="medium"\n      >\n        <Toolbar align="middle" dense>\n          <ToolbarItem>\n            <TextField\n              isLabelVisible={false}\n              label="A form element"\n              placeholder="Text field with invisible label"\n            />\n          </ToolbarItem>\n          <ToolbarItem>\n            <CheckboxField\n              checked={isChecked}\n              label="Another form field"\n              onChange={() => setIsChecked(!isChecked)}\n            />\n          </ToolbarItem>\n        </Toolbar>\n      </FormLayoutCustomField>\n      <TextField label="Another form element" />\n    </FormLayout>\n  )\n}',__scope:{props:a,DefaultLayout:r.a,Playground:b.c,Props:b.d,Placeholder:d.a,Button:m.a,ButtonGroup:u.a,CheckboxField:s.a,FileInputField:c.a,Radio:p.a,SelectField:h.a,TextArea:y.a,TextField:f.a,Toggle:F.a,Toolbar:O.a,ToolbarItem:j.a,FormLayout:T.a,FormLayoutCustomField:g.a,DefaultLayout:r.a,_frontmatter:L},mdxType:"Playground"},()=>{const[e,t]=n.useState(!1);return Object(i.b)(T.a,{fieldLayout:"horizontal",labelWidth:"auto",mdxType:"FormLayout"},Object(i.b)(f.a,{label:"A form element",mdxType:"TextField"}),Object(i.b)(g.a,{fullWidth:!0,label:"Custom field label aligned with medium form field",labelForId:"my-text-field-custom-accessibility-2",innerFieldSize:"medium",mdxType:"FormLayoutCustomField"},Object(i.b)(O.a,{align:"middle",dense:!0,mdxType:"Toolbar"},Object(i.b)(j.a,{mdxType:"ToolbarItem"},Object(i.b)(f.a,{isLabelVisible:!1,label:"A form element",placeholder:"Text field with invisible label",mdxType:"TextField"})),Object(i.b)(j.a,{mdxType:"ToolbarItem"},Object(i.b)(s.a,{checked:e,label:"Another form field",onChange:()=>t(!e),mdxType:"CheckboxField"})))),Object(i.b)(f.a,{label:"Another form element",mdxType:"TextField"}))}),Object(i.b)("h2",{id:"full-example"},"Full Example"),Object(i.b)("p",null,"This is a demo of all components supported by FormLayout."),Object(i.b)(b.c,{__position:8,__code:'() => {\n  const [fieldLayout, setFieldLayout] = React.useState(\'vertical\')\n  const [fruit, setFruit] = React.useState(\'apple\')\n  const [isDeliveryAddress, setIsDeliveryAddress] = React.useState(true)\n  const [receiveNewsletter, setReceiveNewsletter] = React.useState(true)\n  const options = [\n    {\n      label: \'Apple\',\n      value: \'apple\',\n    },\n    {\n      label: \'Banana\',\n      value: \'banana\',\n    },\n    {\n      label: \'Grapefruit\',\n      value: \'grapefruit\',\n    },\n  ]\n  return (\n    <div>\n      <Toolbar>\n        <ToolbarItem>\n          <ButtonGroup>\n            <Button\n              color={fieldLayout === \'vertical\' ? \'dark\' : \'primary\'}\n              label="Vertical layout"\n              onClick={() => setFieldLayout(\'vertical\')}\n            />\n            <Button\n              color={fieldLayout === \'horizontal\' ? \'dark\' : \'primary\'}\n              label="Horizontal layout"\n              onClick={() => setFieldLayout(\'horizontal\')}\n            />\n          </ButtonGroup>\n        </ToolbarItem>\n      </Toolbar>\n      <FormLayout fieldLayout={fieldLayout} labelWidth="auto">\n        <>\n          <TextField label="First Name" />\n          <TextField label="Last Name" />\n        </>\n        <TextField helpText="Optional" label="Email address" type="email" />\n        <>\n          <TextField label="Address" placeholder="Address line 1" />\n          <TextField\n            isLabelVisible={false}\n            label="Address 2"\n            placeholder="Address line 2"\n          />\n          <TextField\n            inputSize={6}\n            label="ZIP"\n            validationState="invalid"\n            validationText="ZIP should be 5 to 6 digits long code."\n          />\n          <FormLayoutCustomField label="Country">\n            <span>Czech Republic</span>\n          </FormLayoutCustomField>\n          <CheckboxField\n            checked={isDeliveryAddress}\n            label="This is my delivery address"\n            onChange={() => setIsDeliveryAddress(!isDeliveryAddress)}\n          />\n        </>\n        <SelectField\n          label="Your favourite fruit"\n          onChange={e => setFruit(e.target.value)}\n          options={options}\n          value={fruit}\n        />\n        <TextArea fullWidth label="Message" rows={3} />\n        <FileInputField label="Attachment" />\n        <Toggle\n          checked={receiveNewsletter}\n          helpText="Only once per week!"\n          label="Receive weekly newsletter"\n          onChange={() => setReceiveNewsletter(!receiveNewsletter)}\n          required\n        />\n        <Radio\n          label="And fruit again!"\n          onChange={e => setFruit(e.target.value)}\n          options={options}\n          value={fruit}\n        />\n      </FormLayout>\n    </div>\n  )\n}',__scope:{props:a,DefaultLayout:r.a,Playground:b.c,Props:b.d,Placeholder:d.a,Button:m.a,ButtonGroup:u.a,CheckboxField:s.a,FileInputField:c.a,Radio:p.a,SelectField:h.a,TextArea:y.a,TextField:f.a,Toggle:F.a,Toolbar:O.a,ToolbarItem:j.a,FormLayout:T.a,FormLayoutCustomField:g.a,DefaultLayout:r.a,_frontmatter:L},mdxType:"Playground"},()=>{const[e,t]=n.useState("vertical"),[a,l]=n.useState("apple"),[o,r]=n.useState(!0),[b,d]=n.useState(!0),x=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Grapefruit",value:"grapefruit"}];return Object(i.b)("div",null,Object(i.b)(O.a,{mdxType:"Toolbar"},Object(i.b)(j.a,{mdxType:"ToolbarItem"},Object(i.b)(u.a,{mdxType:"ButtonGroup"},Object(i.b)(m.a,{color:"vertical"===e?"dark":"primary",label:"Vertical layout",onClick:()=>t("vertical"),mdxType:"Button"}),Object(i.b)(m.a,{color:"horizontal"===e?"dark":"primary",label:"Horizontal layout",onClick:()=>t("horizontal"),mdxType:"Button"})))),Object(i.b)(T.a,{fieldLayout:e,labelWidth:"auto",mdxType:"FormLayout"},Object(i.b)(n.Fragment,null,Object(i.b)(f.a,{label:"First Name",mdxType:"TextField"}),Object(i.b)(f.a,{label:"Last Name",mdxType:"TextField"})),Object(i.b)(f.a,{helpText:"Optional",label:"Email address",type:"email",mdxType:"TextField"}),Object(i.b)(n.Fragment,null,Object(i.b)(f.a,{label:"Address",placeholder:"Address line 1",mdxType:"TextField"}),Object(i.b)(f.a,{isLabelVisible:!1,label:"Address 2",placeholder:"Address line 2",mdxType:"TextField"}),Object(i.b)(f.a,{inputSize:6,label:"ZIP",validationState:"invalid",validationText:"ZIP should be 5 to 6 digits long code.",mdxType:"TextField"}),Object(i.b)(g.a,{label:"Country",mdxType:"FormLayoutCustomField"},Object(i.b)("span",null,"Czech Republic")),Object(i.b)(s.a,{checked:o,label:"This is my delivery address",onChange:()=>r(!o),mdxType:"CheckboxField"})),Object(i.b)(h.a,{label:"Your favourite fruit",onChange:e=>l(e.target.value),options:x,value:a,mdxType:"SelectField"}),Object(i.b)(y.a,{fullWidth:!0,label:"Message",rows:3,mdxType:"TextArea"}),Object(i.b)(c.a,{label:"Attachment",mdxType:"FileInputField"}),Object(i.b)(F.a,{checked:b,helpText:"Only once per week!",label:"Receive weekly newsletter",onChange:()=>d(!b),required:!0,mdxType:"Toggle"}),Object(i.b)(p.a,{label:"And fruit again!",onChange:e=>l(e.target.value),options:x,value:a,mdxType:"Radio"})))}),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)(b.d,{table:!0,of:T.a,mdxType:"Props"}),Object(i.b)("h3",{id:"formlayoutcustomfield-api"},"FormLayoutCustomField API"),Object(i.b)("p",null,"A place for custom content inside FormLayout."),Object(i.b)(b.d,{table:!0,of:g.a,mdxType:"Props"}),Object(i.b)("h2",{id:"theming"},"Theming"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Custom Property"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"--rui-FormLayout__row-gap")),Object(i.b)("td",{parentName:"tr",align:null},"Gap between individual rows")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"--rui-FormLayout--horizontal__label__width")),Object(i.b)("td",{parentName:"tr",align:null},"Default label width")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"--rui-FormLayout--horizontal__label__width--auto")),Object(i.b)("td",{parentName:"tr",align:null},"Label width in automatic layout")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"--rui-FormLayout--horizontal__label__width--limited")),Object(i.b)("td",{parentName:"tr",align:null},"Label width in limited-width layout")))),Object(i.b)("h3",{id:"formlayoutcustomfield-theming"},"FormLayoutCustomField Theming"),Object(i.b)("p",null,"FormLayoutCustomField can be styled using a small subset of\n",Object(i.b)("a",{parentName:"p",href:"/customize/theming/forms"},"other form fields theming options"),"."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Custom Property"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"--rui-FormField--custom--default__surrounding-text-color")),Object(i.b)("td",{parentName:"tr",align:null},"Custom field label color in default state")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"--rui-FormField--custom--disabled__surrounding-text-color")),Object(i.b)("td",{parentName:"tr",align:null},"Custom field label color in disabled-like state")))))}void 0!==N&&N&&N===Object(N)&&Object.isExtensible(N)&&!N.hasOwnProperty("__filemeta")&&Object.defineProperty(N,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/lib/components/FormLayout/README.mdx"}}),N.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-lib-components-form-layout-readme-mdx-8a9baa3b105817122bba.js.map