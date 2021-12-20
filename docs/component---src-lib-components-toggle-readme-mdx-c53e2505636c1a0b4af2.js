(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{irsp:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return g}));var n=a("Fcif"),o=a("dV/x"),i=a("mXGw"),l=a("/FXl"),r=a("TjRS"),s=a("ZFoC"),u=a("fRCu");a("aD51");const b=["components"],c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/lib/components/Toggle/README.mdx"}});const d={_frontmatter:c},p=r.a;function g(e){let{components:t}=e,a=Object(o.a)(e,b);return Object(l.b)(p,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"toggle"},"Toggle"),Object(l.b)("p",null,"Toggle switches things on and off."),Object(l.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(l.b)("p",null,"To implement the Toggle component, you need to import it first:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"import { Toggle } from '@react-ui-org/react-ui';\n")),Object(l.b)("p",null,"And use it:"),Object(l.b)(s.c,{__position:0,__code:'() => {\n  const [studioQuality, setStudioQuality] = React.useState(true)\n  return (\n    <Toggle\n      checked={studioQuality}\n      label="Listen in studio quality"\n      onChange={() => setStudioQuality(!studioQuality)}\n    />\n  )\n}',__scope:{props:a,DefaultLayout:r.a,Playground:s.c,Props:s.d,Toggle:u.a,DefaultLayout:r.a,_frontmatter:c},mdxType:"Playground"},()=>{const[e,t]=i.useState(!0);return Object(l.b)(u.a,{checked:e,label:"Listen in studio quality",onChange:()=>t(!e),mdxType:"Toggle"})}),Object(l.b)("p",null,"See ",Object(l.b)("a",{parentName:"p",href:"#api"},"API")," for all available options."),Object(l.b)("h2",{id:"general-guidelines"},"General Guidelines"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Use the toggle only for boolean (true/false) input ",Object(l.b)("strong",{parentName:"p"},"with an immediate effect\n(without confirmation)"),". To toggle things on or off in forms that require to\nbe submitted by a button, use rather the\n",Object(l.b)("a",{parentName:"p",href:"/components/checkbox-field"},"CheckboxField")," component.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Use positive wording for the toggle label,")," so that it's clear what will\nhappen when the user turns on the toggle. Avoid negations such as “Don't send\nme any emails” which would mean that the user needs to turn the toggle ",Object(l.b)("strong",{parentName:"p"},"on"),"\nin order for something ",Object(l.b)("strong",{parentName:"p"},"not")," to happen.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Only make the Toggle's label invisible when there is ",Object(l.b)("strong",{parentName:"p"},"another visual clue"),"\nto guide users through using the input.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"When a short label is not enough, use ",Object(l.b)("strong",{parentName:"p"},"help texts to guide users")," before\nthey enter anything.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Use ",Object(l.b)("strong",{parentName:"p"},"clear, calm error messages")," when there's a problem with what they\nentered.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"The toggle is designed for ",Object(l.b)("strong",{parentName:"p"},"switching things on and off.")," Don't use it to\nswitch between two different things that cannot be described as on or off\nusing a single label, e.g. different viewing modes. In such cases, consider\nusing the ",Object(l.b)("a",{parentName:"p",href:"/components/button-group"},"ButtonGroup")," component."))),Object(l.b)("h2",{id:"help-text"},"Help Text"),Object(l.b)("p",null,"You may provide an additional help text to clarify what will be the impact of\nturning the toggle on or off."),Object(l.b)(s.c,{__position:1,__code:"() => {\n  const [studioQuality, setStudioQuality] = React.useState(true)\n  return (\n    <Toggle\n      checked={studioQuality}\n      helpText={\n        'Unrivaled audio quality. Uses the MQA audio format. ' +\n        'Transfers a lot of data.'\n      }\n      label=\"Listen in studio quality\"\n      onChange={() => setStudioQuality(!studioQuality)}\n    />\n  )\n}",__scope:{props:a,DefaultLayout:r.a,Playground:s.c,Props:s.d,Toggle:u.a,DefaultLayout:r.a,_frontmatter:c},mdxType:"Playground"},()=>{const[e,t]=i.useState(!0);return Object(l.b)(u.a,{checked:e,helpText:"Unrivaled audio quality. Uses the MQA audio format. Transfers a lot of data.",label:"Listen in studio quality",onChange:()=>t(!e),mdxType:"Toggle"})}),Object(l.b)("h2",{id:"label-options"},"Label Options"),Object(l.b)("p",null,"In some cases, it may be convenient to visually hide the toggle label. The label\nremains accessible to assistive technologies."),Object(l.b)(s.c,{__position:2,__code:'() => {\n  const [studioQuality, setStudioQuality] = React.useState(true)\n  return (\n    <Toggle\n      checked={studioQuality}\n      isLabelVisible={false}\n      label="You cannot see this"\n      onChange={() => setStudioQuality(!studioQuality)}\n    />\n  )\n}',__scope:{props:a,DefaultLayout:r.a,Playground:s.c,Props:s.d,Toggle:u.a,DefaultLayout:r.a,_frontmatter:c},mdxType:"Playground"},()=>{const[e,t]=i.useState(!0);return Object(l.b)(u.a,{checked:e,isLabelVisible:!1,label:"You cannot see this",onChange:()=>t(!e),mdxType:"Toggle"})}),Object(l.b)("p",null,"It's also possible to display the label before the input:"),Object(l.b)(s.c,{__position:3,__code:'() => {\n  const [studioQuality, setStudioQuality] = React.useState(true)\n  return (\n    <Toggle\n      checked={studioQuality}\n      label="Listen in studio quality"\n      labelPosition="before"\n      onChange={() => setStudioQuality(!studioQuality)}\n    />\n  )\n}',__scope:{props:a,DefaultLayout:r.a,Playground:s.c,Props:s.d,Toggle:u.a,DefaultLayout:r.a,_frontmatter:c},mdxType:"Playground"},()=>{const[e,t]=i.useState(!0);return Object(l.b)(u.a,{checked:e,label:"Listen in studio quality",labelPosition:"before",onChange:()=>t(!e),mdxType:"Toggle"})}),Object(l.b)("h2",{id:"states"},"States"),Object(l.b)("h3",{id:"validation-states"},"Validation States"),Object(l.b)("p",null,"Validation states visually present the result of validation of the input. You\nshould always ",Object(l.b)("strong",{parentName:"p"},"provide a validation message for states other than valid")," so\nusers know what happened and what action they should take or what options they\nhave."),Object(l.b)(s.c,{__position:4,__code:'() => {\n  const [studioQuality, setStudioQuality] = React.useState(true)\n  return (\n    <>\n      <Toggle\n        checked={studioQuality}\n        label="Listen in studio quality"\n        onChange={() => setStudioQuality(!studioQuality)}\n        validationState="valid"\n      />\n      <Toggle\n        checked={studioQuality}\n        label="Listen in studio quality"\n        onChange={() => setStudioQuality(!studioQuality)}\n        validationState="warning"\n        validationText={\n          \'Looks like you are connected over cellular network. \' +\n          \'Please make sure you know what you are doing.\'\n        }\n      />\n      <Toggle\n        checked={studioQuality}\n        label="Listen in studio quality"\n        onChange={() => setStudioQuality(!studioQuality)}\n        validationState="invalid"\n        validationText="Please upgrade your plan to make this option available."\n      />\n    </>\n  )\n}',__scope:{props:a,DefaultLayout:r.a,Playground:s.c,Props:s.d,Toggle:u.a,DefaultLayout:r.a,_frontmatter:c},mdxType:"Playground"},()=>{const[e,t]=i.useState(!0);return Object(l.b)(i.Fragment,null,Object(l.b)(u.a,{checked:e,label:"Listen in studio quality",onChange:()=>t(!e),validationState:"valid",mdxType:"Toggle"}),Object(l.b)(u.a,{checked:e,label:"Listen in studio quality",onChange:()=>t(!e),validationState:"warning",validationText:"Looks like you are connected over cellular network. Please make sure you know what you are doing.",mdxType:"Toggle"}),Object(l.b)(u.a,{checked:e,label:"Listen in studio quality",onChange:()=>t(!e),validationState:"invalid",validationText:"Please upgrade your plan to make this option available.",mdxType:"Toggle"}))}),Object(l.b)("h3",{id:"disabled-state"},"Disabled State"),Object(l.b)("p",null,"Disabled state makes the input unavailable."),Object(l.b)(s.c,{__position:5,__code:'<Toggle label="Disabled toggle" disabled />\n<Toggle label="Disabled toggle, checked" disabled checked />',__scope:{props:a,DefaultLayout:r.a,Playground:s.c,Props:s.d,Toggle:u.a,DefaultLayout:r.a,_frontmatter:c},mdxType:"Playground"},Object(l.b)(u.a,{label:"Disabled toggle",disabled:!0,mdxType:"Toggle"}),Object(l.b)(u.a,{label:"Disabled toggle, checked",disabled:!0,checked:!0,mdxType:"Toggle"})),Object(l.b)("h2",{id:"api"},"API"),Object(l.b)("p",null,"In addition to the options below, you can specify ",Object(l.b)("a",{parentName:"p",href:"https://reactjs.org/docs/events.html"},"React synthetic events")," or\nany custom HTML attributes that do not interfere with the API, and they will be\npassed to the ",Object(l.b)("inlineCode",{parentName:"p"},"input")," HTML element. This enables making the component\ninteractive and helps improve its accessibility."),Object(l.b)(s.d,{table:!0,of:u.a,mdxType:"Props"}),Object(l.b)("h2",{id:"theming"},"Theming"),Object(l.b)("p",null,"Head to ",Object(l.b)("a",{parentName:"p",href:"/customize/theming/forms"},"Forms Theming")," to see shared form theming\noptions. On top of that, the following options are available for Toggle."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Custom Property"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--rui-FormField--check__input--toggle__width")),Object(l.b)("td",{parentName:"tr",align:null},"Input width (height is shared with other check fields)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--rui-FormField--check__input--toggle__border-radius")),Object(l.b)("td",{parentName:"tr",align:null},"Input corner radius")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--rui-FormField--check__input--toggle__background-size")),Object(l.b)("td",{parentName:"tr",align:null},"Input background size")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--rui-FormField--check__input--toggle--default__background-image")),Object(l.b)("td",{parentName:"tr",align:null},"Background image of unchecked input")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--rui-FormField--check__input--toggle--default__background-position")),Object(l.b)("td",{parentName:"tr",align:null},"Background position of unchecked input")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--rui-FormField--check__input--toggle--checked__background-image")),Object(l.b)("td",{parentName:"tr",align:null},"Background image of checked input")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--rui-FormField--check__input--toggle--checked__background-position")),Object(l.b)("td",{parentName:"tr",align:null},"Background position of checked input")))))}void 0!==g&&g&&g===Object(g)&&Object.isExtensible(g)&&!g.hasOwnProperty("__filemeta")&&Object.defineProperty(g,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/lib/components/Toggle/README.mdx"}}),g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-lib-components-toggle-readme-mdx-c53e2505636c1a0b4af2.js.map