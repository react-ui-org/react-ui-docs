(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{ZzoA:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return g}));var n=a("k0FJ"),o=a("yHgN"),i=a("mXGw"),l=a("/FXl"),s=a("TjRS"),u=a("ZFoC"),d=a("l6hz");a("aD51");const r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/lib/components/ui/Toggle/README.mdx"}});const c={_frontmatter:r},b=s.a;function g(e){let{components:t}=e,a=Object(o.a)(e,["components"]);return Object(l.b)(b,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"toggle"},"Toggle"),Object(l.b)("p",null,"Toggle switches things on and off."),Object(l.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(l.b)("p",null,"To implement the Toggle component, you need to import it first:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { Toggle } from '@react-ui-org/react-ui';\n")),Object(l.b)("p",null,"And use it:"),Object(l.b)(u.c,{__position:0,__code:'() => {\n  const [studioQuality, setStudioQuality] = React.useState(true)\n  return (\n    <Toggle\n      changeHandler={() => setStudioQuality(!studioQuality)}\n      checked={studioQuality}\n      id="my-toggle"\n      label="Listen in studio quality"\n    />\n  )\n}',__scope:{props:a,DefaultLayout:s.a,Playground:u.c,Props:u.d,Toggle:d.a,DefaultLayout:s.a,_frontmatter:r},mdxType:"Playground"},()=>{const[e,t]=i.useState(!0);return Object(l.b)(d.a,{changeHandler:()=>t(!e),checked:e,id:"my-toggle",label:"Listen in studio quality",mdxType:"Toggle"})}),Object(l.b)("p",null,"See ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#api"}),"API")," for all available options."),Object(l.b)("h2",{id:"general-guidelines"},"General Guidelines"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Use the toggle only for boolean (true/false) input ",Object(l.b)("strong",{parentName:"p"},"with an immediate effect\n(without confirmation)"),". To toggle things on or off in forms that require to\nbe submitted by a button, use rather the\n",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/components/ui/checkbox-field"}),"CheckboxField")," component.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Use positive wording for the toggle label,")," so that it's clear what will\nhappen when the user turns on the toggle. Avoid negations such as “Don't send\nme any emails” which would mean that the user needs to turn the toggle ",Object(l.b)("strong",{parentName:"p"},"on"),"\nin order for something ",Object(l.b)("strong",{parentName:"p"},"not")," to happen.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Only make the Toggle's label invisible when there is ",Object(l.b)("strong",{parentName:"p"},"another visual clue"),"\nto guide users through using the input.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"When a short label is not enough, use ",Object(l.b)("strong",{parentName:"p"},"help texts to guide users")," before\nthey enter anything.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Use ",Object(l.b)("strong",{parentName:"p"},"clear, calm error messages")," when there's a problem with what they\nentered.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"The toggle is designed for ",Object(l.b)("strong",{parentName:"p"},"switching things on and off.")," Don't use it to\nswitch between two different things that cannot be described as on or off\nusing a single label, eg. different viewing modes. In such cases, consider\nusing the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/components/ui/button-group"}),"ButtonGroup")," component."))),Object(l.b)("h2",{id:"help-text"},"Help Text"),Object(l.b)("p",null,"You may provide an additional help text to clarify what will be the impact of\nturning the toggle on or off."),Object(l.b)(u.c,{__position:1,__code:"() => {\n  const [studioQuality, setStudioQuality] = React.useState(true)\n  return (\n    <Toggle\n      changeHandler={() => setStudioQuality(!studioQuality)}\n      checked={studioQuality}\n      description={\n        'Unrivaled audio quality. Uses the MQA audio format. ' +\n        'Transfers a lot of data.'\n      }\n      id=\"my-toggle-with-helper-text\"\n      label=\"Listen in studio quality\"\n    />\n  )\n}",__scope:{props:a,DefaultLayout:s.a,Playground:u.c,Props:u.d,Toggle:d.a,DefaultLayout:s.a,_frontmatter:r},mdxType:"Playground"},()=>{const[e,t]=i.useState(!0);return Object(l.b)(d.a,{changeHandler:()=>t(!e),checked:e,description:"Unrivaled audio quality. Uses the MQA audio format. Transfers a lot of data.",id:"my-toggle-with-helper-text",label:"Listen in studio quality",mdxType:"Toggle"})}),Object(l.b)("h2",{id:"label-options"},"Label Options"),Object(l.b)("p",null,"In some cases, it may be convenient to visually hide the toggle label. The label\nremains accessible to assistive technologies."),Object(l.b)(u.c,{__position:2,__code:'() => {\n  const [studioQuality, setStudioQuality] = React.useState(true)\n  return (\n    <Toggle\n      changeHandler={() => setStudioQuality(!studioQuality)}\n      checked={studioQuality}\n      id="my-toggle-with-invisible-label"\n      isLabelVisible={false}\n      label="You cannot see this"\n    />\n  )\n}',__scope:{props:a,DefaultLayout:s.a,Playground:u.c,Props:u.d,Toggle:d.a,DefaultLayout:s.a,_frontmatter:r},mdxType:"Playground"},()=>{const[e,t]=i.useState(!0);return Object(l.b)(d.a,{changeHandler:()=>t(!e),checked:e,id:"my-toggle-with-invisible-label",isLabelVisible:!1,label:"You cannot see this",mdxType:"Toggle"})}),Object(l.b)("p",null,"It's also possible to display the label before the input:"),Object(l.b)(u.c,{__position:3,__code:'() => {\n  const [studioQuality, setStudioQuality] = React.useState(true)\n  return (\n    <Toggle\n      changeHandler={() => setStudioQuality(!studioQuality)}\n      checked={studioQuality}\n      id="my-toggle-with-label-before-input"\n      label="Listen in studio quality"\n      labelPosition="before"\n    />\n  )\n}',__scope:{props:a,DefaultLayout:s.a,Playground:u.c,Props:u.d,Toggle:d.a,DefaultLayout:s.a,_frontmatter:r},mdxType:"Playground"},()=>{const[e,t]=i.useState(!0);return Object(l.b)(d.a,{changeHandler:()=>t(!e),checked:e,id:"my-toggle-with-label-before-input",label:"Listen in studio quality",labelPosition:"before",mdxType:"Toggle"})}),Object(l.b)("h2",{id:"states"},"States"),Object(l.b)("h3",{id:"validation-states"},"Validation States"),Object(l.b)("p",null,"Validation states visually present the result of validation of the input. You\nshould always ",Object(l.b)("strong",{parentName:"p"},"provide a help text for states other than valid")," so users know\nwhat happened and what action they should take or what options they have."),Object(l.b)(u.c,{__position:4,__code:'() => {\n  const [studioQuality, setStudioQuality] = React.useState(true)\n  return (\n    <>\n      <Toggle\n        changeHandler={() => setStudioQuality(!studioQuality)}\n        checked={studioQuality}\n        id="my-toggle-valid"\n        label="Listen in studio quality"\n        validationState="valid"\n      />\n      <Toggle\n        changeHandler={() => setStudioQuality(!studioQuality)}\n        checked={studioQuality}\n        description={\n          \'Looks like you are connected over cellular network. \' +\n          \'Please make sure you know what you are doing.\'\n        }\n        id="my-toggle-warning"\n        label="Listen in studio quality"\n        validationState="warning"\n      />\n      <Toggle\n        changeHandler={() => setStudioQuality(!studioQuality)}\n        checked={studioQuality}\n        error="Please upgrade your plan to make this option available."\n        id="my-toggle-invalid"\n        label="Listen in studio quality"\n        validationState="invalid"\n      />\n    </>\n  )\n}',__scope:{props:a,DefaultLayout:s.a,Playground:u.c,Props:u.d,Toggle:d.a,DefaultLayout:s.a,_frontmatter:r},mdxType:"Playground"},()=>{const[e,t]=i.useState(!0);return Object(l.b)(i.Fragment,null,Object(l.b)(d.a,{changeHandler:()=>t(!e),checked:e,id:"my-toggle-valid",label:"Listen in studio quality",validationState:"valid",mdxType:"Toggle"}),Object(l.b)(d.a,{changeHandler:()=>t(!e),checked:e,description:"Looks like you are connected over cellular network. Please make sure you know what you are doing.",id:"my-toggle-warning",label:"Listen in studio quality",validationState:"warning",mdxType:"Toggle"}),Object(l.b)(d.a,{changeHandler:()=>t(!e),checked:e,error:"Please upgrade your plan to make this option available.",id:"my-toggle-invalid",label:"Listen in studio quality",validationState:"invalid",mdxType:"Toggle"}))}),Object(l.b)("h3",{id:"disabled-state"},"Disabled State"),Object(l.b)("p",null,"Disabled state makes the input unavailable."),Object(l.b)(u.c,{__position:5,__code:'<Toggle label="Disabled toggle" id="my-toggle-disabled" disabled />\n<Toggle\n  label="Disabled toggle, checked"\n  id="my-toggle-checked-disabled"\n  disabled\n  checked\n/>',__scope:{props:a,DefaultLayout:s.a,Playground:u.c,Props:u.d,Toggle:d.a,DefaultLayout:s.a,_frontmatter:r},mdxType:"Playground"},Object(l.b)(d.a,{label:"Disabled toggle",id:"my-toggle-disabled",disabled:!0,mdxType:"Toggle"}),Object(l.b)(d.a,{label:"Disabled toggle, checked",id:"my-toggle-checked-disabled",disabled:!0,checked:!0,mdxType:"Toggle"})),Object(l.b)("h2",{id:"api"},"API"),Object(l.b)("p",null,"In addition to the options below, you can add any custom attributes that do not\ninterfere with the API, and they will be passed to the ",Object(l.b)("inlineCode",{parentName:"p"},"input")," HTML element.\nThis is useful mainly to improve component's accessibility."),Object(l.b)(u.d,{of:d.a,mdxType:"Props"}),Object(l.b)("hr",null),Object(l.b)("p",null,"Next: ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/components/layout/cta"}),"CTA →")))}void 0!==g&&g&&g===Object(g)&&Object.isExtensible(g)&&!g.hasOwnProperty("__filemeta")&&Object.defineProperty(g,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/lib/components/ui/Toggle/README.mdx"}}),g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-lib-components-ui-toggle-readme-mdx-8137c77554ffd5d2cc22.js.map