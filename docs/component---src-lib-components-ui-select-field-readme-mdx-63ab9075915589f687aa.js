(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{dit0:function(e,t,l){"use strict";l.r(t),l.d(t,"_frontmatter",(function(){return s})),l.d(t,"default",(function(){return c}));var a=l("Fcif"),n=l("dV/x"),i=l("mXGw"),o=l("/FXl"),r=l("TjRS"),u=l("ZFoC"),d=l("XZkq");l("aD51");const s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/lib/components/ui/SelectField/README.mdx"}});const p={_frontmatter:s},f=r.a;function c(e){let{components:t}=e,l=Object(n.a)(e,["components"]);return Object(o.b)(f,Object(a.a)({},p,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"selectfield"},"SelectField"),Object(o.b)("p",null,"SelectField allows users to select one option from a set."),Object(o.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(o.b)("p",null,"To implement the SelectField component, you need to import it first:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { SelectField } from '@react-ui-org/react-ui';\n")),Object(o.b)("p",null,"And use it:"),Object(o.b)(u.c,{__position:0,__code:"() => {\n  const [fruit, setFruit] = React.useState('apple')\n  return (\n    <SelectField\n      changeHandler={e => setFruit(e.target.value)}\n      id=\"my-select-field\"\n      label=\"Your favourite fruit\"\n      options={[\n        {\n          label: 'Apple',\n          value: 'apple',\n        },\n        {\n          label: 'Banana',\n          value: 'banana',\n        },\n        {\n          label: 'Grapefruit',\n          value: 'grapefruit',\n        },\n      ]}\n      value={fruit}\n    />\n  )\n}",__scope:{props:l,DefaultLayout:r.a,Playground:u.c,Props:u.d,SelectField:d.a,DefaultLayout:r.a,_frontmatter:s},mdxType:"Playground"},()=>{const[e,t]=i.useState("apple");return Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),id:"my-select-field",label:"Your favourite fruit",options:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Grapefruit",value:"grapefruit"}],value:e,mdxType:"SelectField"})}),Object(o.b)("p",null,"See ",Object(o.b)("a",{parentName:"p",href:"#api"},"API")," for all available options."),Object(o.b)("h2",{id:"general-guidelines"},"General Guidelines"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Use SelectField for ",Object(o.b)("strong",{parentName:"p"},"many options"),". For sets of just a few options\n(say 3 at maximum) consider using the ",Object(o.b)("a",{parentName:"p",href:"/components/ui/radio"},"Radio")," component.\nThis will help keep your UI clean and uncluttered and prevent your users from\nbeing overwhelmed by too many options.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Don't use for boolean")," (true/false) selection or to toggle things on and\noff. ",Object(o.b)("a",{parentName:"p",href:"/components/ui/checkbox-field"},"CheckboxField")," and\n",Object(o.b)("a",{parentName:"p",href:"/components/ui/toggle"},"Toggle")," are more suitable for such cases.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Use ",Object(o.b)("strong",{parentName:"p"},"short and descriptive labels"),", ideally nouns rather than seemingly\npolite phrases like ",Object(o.b)("em",{parentName:"p"},"Please select your favourite fruit"),". Short labels will\nhelp your users accomplish their task faster.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Only make the SelectField's label invisible when there is ",Object(o.b)("strong",{parentName:"p"},"another visual\nclue")," to guide users through filling the input. Using the first option as\nlabel is not recommended either — it disappears once user makes their choice.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"When a short label is not enough, use ",Object(o.b)("strong",{parentName:"p"},"help texts to guide users")," before\nthey enter anything.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Use ",Object(o.b)("strong",{parentName:"p"},"clear, calm error messages")," when there's a problem with what they\nentered.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In case of a large amount of options, consider ",Object(o.b)("strong",{parentName:"p"},"grouping related items\ntogether")," by nesting them (implements the ",Object(o.b)("inlineCode",{parentName:"p"},"optgroup")," HTML element)."))),Object(o.b)("p",null,"👉 We use the ",Object(o.b)("strong",{parentName:"p"},"native ",Object(o.b)("inlineCode",{parentName:"strong"},"select"))," HTML element to improve user experience on\nmobile devices by using the native select of the platform."),Object(o.b)("h2",{id:"design-variants"},"Design Variants"),Object(o.b)("p",null,"To satisfy the design requirements of your project, all input fields in React UI\ncome in two design variants to choose from: outline and filled. Both can be\nfurther ",Object(o.b)("a",{parentName:"p",href:"/customize/theming"},"customized")," with CSS custom properties."),Object(o.b)(u.c,{__position:1,__code:"() => {\n  const [fruit, setFruit] = React.useState('apple')\n  const options = [\n    {\n      label: 'Apple',\n      value: 'apple',\n    },\n    {\n      label: 'Banana',\n      value: 'banana',\n    },\n    {\n      label: 'Grapefruit',\n      value: 'grapefruit',\n    },\n  ]\n  return (\n    <>\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        id=\"my-select-field-outline\"\n        label=\"Your favourite fruit\"\n        options={options}\n        value={fruit}\n      />\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        id=\"my-select-field-filled\"\n        label=\"Your favourite fruit\"\n        options={options}\n        variant=\"filled\"\n        value={fruit}\n      />\n    </>\n  )\n}",__scope:{props:l,DefaultLayout:r.a,Playground:u.c,Props:u.d,SelectField:d.a,DefaultLayout:r.a,_frontmatter:s},mdxType:"Playground"},()=>{const[e,t]=i.useState("apple"),l=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Grapefruit",value:"grapefruit"}];return Object(o.b)(i.Fragment,null,Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),id:"my-select-field-outline",label:"Your favourite fruit",options:l,value:e,mdxType:"SelectField"}),Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),id:"my-select-field-filled",label:"Your favourite fruit",options:l,variant:"filled",value:e,mdxType:"SelectField"}))}),Object(o.b)("h2",{id:"sizes"},"Sizes"),Object(o.b)("p",null,"Aside from the default (medium) size, two additional sizes are available: small\nand large."),Object(o.b)(u.c,{__position:2,__code:'() => {\n  const [fruit, setFruit] = React.useState(\'apple\')\n  const options = [\n    {\n      label: \'Apple\',\n      value: \'apple\',\n    },\n    {\n      label: \'Banana\',\n      value: \'banana\',\n    },\n    {\n      label: \'Grapefruit\',\n      value: \'grapefruit\',\n    },\n  ]\n  return (\n    <>\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        id="my-select-field-outline-small"\n        label="Your favourite fruit"\n        options={options}\n        size="small"\n        value={fruit}\n      />\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        id="my-select-field-outline-medium"\n        label="Your favourite fruit"\n        options={options}\n        value={fruit}\n      />\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        id="my-select-field-outline-large"\n        label="Your favourite fruit"\n        options={options}\n        size="large"\n        value={fruit}\n      />\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        id="my-select-field-filled-small"\n        label="Your favourite fruit"\n        options={options}\n        size="small"\n        value={fruit}\n        variant="filled"\n      />\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        id="my-select-field-filled-medium"\n        label="Your favourite fruit"\n        options={options}\n        value={fruit}\n        variant="filled"\n      />\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        id="my-select-field-filled-large"\n        label="Your favourite fruit"\n        options={options}\n        size="large"\n        value={fruit}\n        variant="filled"\n      />\n    </>\n  )\n}',__scope:{props:l,DefaultLayout:r.a,Playground:u.c,Props:u.d,SelectField:d.a,DefaultLayout:r.a,_frontmatter:s},mdxType:"Playground"},()=>{const[e,t]=i.useState("apple"),l=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Grapefruit",value:"grapefruit"}];return Object(o.b)(i.Fragment,null,Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),id:"my-select-field-outline-small",label:"Your favourite fruit",options:l,size:"small",value:e,mdxType:"SelectField"}),Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),id:"my-select-field-outline-medium",label:"Your favourite fruit",options:l,value:e,mdxType:"SelectField"}),Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),id:"my-select-field-outline-large",label:"Your favourite fruit",options:l,size:"large",value:e,mdxType:"SelectField"}),Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),id:"my-select-field-filled-small",label:"Your favourite fruit",options:l,size:"small",value:e,variant:"filled",mdxType:"SelectField"}),Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),id:"my-select-field-filled-medium",label:"Your favourite fruit",options:l,value:e,variant:"filled",mdxType:"SelectField"}),Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),id:"my-select-field-filled-large",label:"Your favourite fruit",options:l,size:"large",value:e,variant:"filled",mdxType:"SelectField"}))}),Object(o.b)("p",null,"Full-width fields span the full width of a parent:"),Object(o.b)(u.c,{__position:3,__code:"() => {\n  const [fruit, setFruit] = React.useState('apple')\n  const options = [\n    {\n      label: 'Apple',\n      value: 'apple',\n    },\n    {\n      label: 'Banana',\n      value: 'banana',\n    },\n    {\n      label: 'Grapefruit',\n      value: 'grapefruit',\n    },\n  ]\n  return (\n    <>\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        fullWidth\n        id=\"my-select-field-outline-full-width\"\n        label=\"Your favourite fruit\"\n        options={options}\n        value={fruit}\n      />\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        fullWidth\n        id=\"my-select-field-filled-full-width\"\n        label=\"Your favourite fruit\"\n        options={options}\n        value={fruit}\n        variant=\"filled\"\n      />\n    </>\n  )\n}",__scope:{props:l,DefaultLayout:r.a,Playground:u.c,Props:u.d,SelectField:d.a,DefaultLayout:r.a,_frontmatter:s},mdxType:"Playground"},()=>{const[e,t]=i.useState("apple"),l=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Grapefruit",value:"grapefruit"}];return Object(o.b)(i.Fragment,null,Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),fullWidth:!0,id:"my-select-field-outline-full-width",label:"Your favourite fruit",options:l,value:e,mdxType:"SelectField"}),Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),fullWidth:!0,id:"my-select-field-filled-full-width",label:"Your favourite fruit",options:l,value:e,variant:"filled",mdxType:"SelectField"}))}),Object(o.b)("h2",{id:"invisible-label"},"Invisible Label"),Object(o.b)("p",null,"While it may be acceptable for login screens with just a few fields or for other\nsimple forms, it's dangerous to hide labels from users in most cases. Keep in\nmind you should ",Object(o.b)("strong",{parentName:"p"},"provide another visual clue")," so users know what to fill into\nthe input."),Object(o.b)(u.c,{__position:4,__code:"() => {\n  const [fruit, setFruit] = React.useState('apple')\n  const options = [\n    {\n      label: 'Apple',\n      value: 'apple',\n    },\n    {\n      label: 'Banana',\n      value: 'banana',\n    },\n    {\n      label: 'Grapefruit',\n      value: 'grapefruit',\n    },\n  ]\n  return (\n    <>\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        id=\"my-select-field-outline-hidden-label\"\n        isLabelVisible={false}\n        label=\"Your favourite fruit\"\n        options={options}\n        value={fruit}\n      />\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        id=\"my-select-field-filled-hidden-label\"\n        isLabelVisible={false}\n        label=\"Your favourite fruit\"\n        options={options}\n        value={fruit}\n        variant=\"filled\"\n      />\n    </>\n  )\n}",__scope:{props:l,DefaultLayout:r.a,Playground:u.c,Props:u.d,SelectField:d.a,DefaultLayout:r.a,_frontmatter:s},mdxType:"Playground"},()=>{const[e,t]=i.useState("apple"),l=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Grapefruit",value:"grapefruit"}];return Object(o.b)(i.Fragment,null,Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),id:"my-select-field-outline-hidden-label",isLabelVisible:!1,label:"Your favourite fruit",options:l,value:e,mdxType:"SelectField"}),Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),id:"my-select-field-filled-hidden-label",isLabelVisible:!1,label:"Your favourite fruit",options:l,value:e,variant:"filled",mdxType:"SelectField"}))}),Object(o.b)("h2",{id:"horizontal-layout"},"Horizontal Layout"),Object(o.b)("p",null,"The default vertical layout is very easy to use and work with. However, there\nare situations where horizontal layout suits better — and that's why React UI\nsupports this kind of layout as well."),Object(o.b)(u.c,{__position:5,__code:'() => {\n  const [fruit, setFruit] = React.useState(\'apple\')\n  const options = [\n    {\n      label: \'Apple\',\n      value: \'apple\',\n    },\n    {\n      label: \'Banana\',\n      value: \'banana\',\n    },\n    {\n      label: \'Grapefruit\',\n      value: \'grapefruit\',\n    },\n  ]\n  return (\n    <>\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        id="my-select-field-outline-horizontal"\n        label="Your favourite fruit"\n        layout="horizontal"\n        options={options}\n        value={fruit}\n      />\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        id="my-select-field-filled-horizontal"\n        label="Your favourite fruit"\n        layout="horizontal"\n        options={options}\n        value={fruit}\n        variant="filled"\n      />\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        fullWidth\n        id="my-select-field-outline-horizontal-full-width"\n        label="Your favourite fruit"\n        layout="horizontal"\n        options={options}\n        value={fruit}\n      />\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        fullWidth\n        id="my-select-field-filled-horizontal-full-width"\n        label="Your favourite fruit"\n        layout="horizontal"\n        options={options}\n        value={fruit}\n        variant="filled"\n      />\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        fullWidth\n        id="my-select-field-outline-horizontal-full-width-invisible-label"\n        isLabelVisible={false}\n        label="Your favourite fruit"\n        layout="horizontal"\n        value={fruit}\n        options={options}\n      />\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        fullWidth\n        id="my-select-field-filled-horizontal-full-width-invisible-label"\n        isLabelVisible={false}\n        label="Your favourite fruit"\n        layout="horizontal"\n        options={options}\n        value={fruit}\n        variant="filled"\n      />\n    </>\n  )\n}',__scope:{props:l,DefaultLayout:r.a,Playground:u.c,Props:u.d,SelectField:d.a,DefaultLayout:r.a,_frontmatter:s},mdxType:"Playground"},()=>{const[e,t]=i.useState("apple"),l=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Grapefruit",value:"grapefruit"}];return Object(o.b)(i.Fragment,null,Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),id:"my-select-field-outline-horizontal",label:"Your favourite fruit",layout:"horizontal",options:l,value:e,mdxType:"SelectField"}),Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),id:"my-select-field-filled-horizontal",label:"Your favourite fruit",layout:"horizontal",options:l,value:e,variant:"filled",mdxType:"SelectField"}),Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),fullWidth:!0,id:"my-select-field-outline-horizontal-full-width",label:"Your favourite fruit",layout:"horizontal",options:l,value:e,mdxType:"SelectField"}),Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),fullWidth:!0,id:"my-select-field-filled-horizontal-full-width",label:"Your favourite fruit",layout:"horizontal",options:l,value:e,variant:"filled",mdxType:"SelectField"}),Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),fullWidth:!0,id:"my-select-field-outline-horizontal-full-width-invisible-label",isLabelVisible:!1,label:"Your favourite fruit",layout:"horizontal",value:e,options:l,mdxType:"SelectField"}),Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),fullWidth:!0,id:"my-select-field-filled-horizontal-full-width-invisible-label",isLabelVisible:!1,label:"Your favourite fruit",layout:"horizontal",options:l,value:e,variant:"filled",mdxType:"SelectField"}))}),Object(o.b)("h2",{id:"help-text"},"Help Text"),Object(o.b)("p",null,"You may provide an additional help text to clarify how the input should be\nfilled."),Object(o.b)(u.c,{__position:6,__code:'() => {\n  const [fruit, setFruit] = React.useState(\'apple\')\n  const options = [\n    {\n      label: \'Apple\',\n      value: \'apple\',\n    },\n    {\n      label: \'Banana\',\n      value: \'banana\',\n    },\n    {\n      label: \'Grapefruit\',\n      value: \'grapefruit\',\n    },\n  ]\n  return (\n    <>\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        helpText="Choose one or more kinds of fruit to feel happy."\n        id="my-select-field-outline-help-text"\n        label="Your favourite fruit"\n        options={options}\n        value={fruit}\n      />\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        helpText="Choose one or more kinds of fruit to feel happy."\n        id="my-select-field-filled-help-text"\n        label="Your favourite fruit"\n        options={options}\n        value={fruit}\n        variant="filled"\n      />\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        helpText="Choose one or more kinds of fruit to feel happy."\n        id="my-select-field-outline-help-text-horizontal"\n        label="Your favourite fruit"\n        layout="horizontal"\n        options={options}\n        value={fruit}\n      />\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        helpText="Choose one or more kinds of fruit to feel happy."\n        id="my-select-field-filled-help-text-horizontal"\n        label="Your favourite fruit"\n        layout="horizontal"\n        options={options}\n        value={fruit}\n        variant="filled"\n      />\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        fullWidth\n        helpText="Choose one or more kinds of fruit to feel happy."\n        id="my-select-field-outline-help-text-horizontal-full-width"\n        label="Your favourite fruit"\n        layout="horizontal"\n        options={options}\n        value={fruit}\n      />\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        fullWidth\n        helpText="Choose one or more kinds of fruit to feel happy."\n        id="my-select-field-filled-help-text-horizontal-full-width"\n        label="Your favourite fruit"\n        layout="horizontal"\n        options={options}\n        value={fruit}\n        variant="filled"\n      />\n    </>\n  )\n}',__scope:{props:l,DefaultLayout:r.a,Playground:u.c,Props:u.d,SelectField:d.a,DefaultLayout:r.a,_frontmatter:s},mdxType:"Playground"},()=>{const[e,t]=i.useState("apple"),l=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Grapefruit",value:"grapefruit"}];return Object(o.b)(i.Fragment,null,Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),helpText:"Choose one or more kinds of fruit to feel happy.",id:"my-select-field-outline-help-text",label:"Your favourite fruit",options:l,value:e,mdxType:"SelectField"}),Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),helpText:"Choose one or more kinds of fruit to feel happy.",id:"my-select-field-filled-help-text",label:"Your favourite fruit",options:l,value:e,variant:"filled",mdxType:"SelectField"}),Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),helpText:"Choose one or more kinds of fruit to feel happy.",id:"my-select-field-outline-help-text-horizontal",label:"Your favourite fruit",layout:"horizontal",options:l,value:e,mdxType:"SelectField"}),Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),helpText:"Choose one or more kinds of fruit to feel happy.",id:"my-select-field-filled-help-text-horizontal",label:"Your favourite fruit",layout:"horizontal",options:l,value:e,variant:"filled",mdxType:"SelectField"}),Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),fullWidth:!0,helpText:"Choose one or more kinds of fruit to feel happy.",id:"my-select-field-outline-help-text-horizontal-full-width",label:"Your favourite fruit",layout:"horizontal",options:l,value:e,mdxType:"SelectField"}),Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),fullWidth:!0,helpText:"Choose one or more kinds of fruit to feel happy.",id:"my-select-field-filled-help-text-horizontal-full-width",label:"Your favourite fruit",layout:"horizontal",options:l,value:e,variant:"filled",mdxType:"SelectField"}))}),Object(o.b)("h2",{id:"states"},"States"),Object(o.b)("h3",{id:"validation-states"},"Validation States"),Object(o.b)("p",null,"Validation states visually present the result of validation of the input. You\nshould always ",Object(o.b)("strong",{parentName:"p"},"provide a validation message for states other than valid")," so\nusers know what happened and what action they should take or what options they\nhave."),Object(o.b)(u.c,{__position:7,__code:'() => {\n  const [fruit, setFruit] = React.useState(\'apple\')\n  const options = [\n    {\n      label: \'Apple\',\n      value: \'apple\',\n    },\n    {\n      label: \'Banana\',\n      value: \'banana\',\n    },\n    {\n      label: \'Grapefruit\',\n      value: \'grapefruit\',\n    },\n  ]\n  return (\n    <>\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        id="my-select-field-outline-success"\n        label="Your favourite fruit"\n        options={options}\n        required\n        validationState="valid"\n        validationText="Great, they\'re in stock!"\n        value={fruit}\n      />\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        id="my-select-field-outline-warning"\n        label="Your favourite fruit"\n        options={options}\n        required\n        validationState="warning"\n        validationText="Oh, really?"\n        value={fruit}\n      />\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        id="my-select-field-outline-error"\n        label="Your favourite fruit"\n        options={options}\n        required\n        validationState="invalid"\n        validationText="You must select at least one kind of fruit."\n        value={fruit}\n      />\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        id="my-select-field-filled-success"\n        label="Your favourite fruit"\n        options={options}\n        required\n        validationState="valid"\n        validationText="Great, they\'re in stock!"\n        value={fruit}\n        variant="filled"\n      />\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        id="my-select-field-filled-warning"\n        label="Your favourite fruit"\n        options={options}\n        required\n        validationState="warning"\n        validationText="Oh, really?"\n        value={fruit}\n        variant="filled"\n      />\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        id="my-select-field-filled-error"\n        label="Your favourite fruit"\n        options={options}\n        required\n        value={fruit}\n        validationState="invalid"\n        validationText="You must select at least one kind of fruit."\n        variant="filled"\n      />\n    </>\n  )\n}',__scope:{props:l,DefaultLayout:r.a,Playground:u.c,Props:u.d,SelectField:d.a,DefaultLayout:r.a,_frontmatter:s},mdxType:"Playground"},()=>{const[e,t]=i.useState("apple"),l=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Grapefruit",value:"grapefruit"}];return Object(o.b)(i.Fragment,null,Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),id:"my-select-field-outline-success",label:"Your favourite fruit",options:l,required:!0,validationState:"valid",validationText:"Great, they're in stock!",value:e,mdxType:"SelectField"}),Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),id:"my-select-field-outline-warning",label:"Your favourite fruit",options:l,required:!0,validationState:"warning",validationText:"Oh, really?",value:e,mdxType:"SelectField"}),Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),id:"my-select-field-outline-error",label:"Your favourite fruit",options:l,required:!0,validationState:"invalid",validationText:"You must select at least one kind of fruit.",value:e,mdxType:"SelectField"}),Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),id:"my-select-field-filled-success",label:"Your favourite fruit",options:l,required:!0,validationState:"valid",validationText:"Great, they're in stock!",value:e,variant:"filled",mdxType:"SelectField"}),Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),id:"my-select-field-filled-warning",label:"Your favourite fruit",options:l,required:!0,validationState:"warning",validationText:"Oh, really?",value:e,variant:"filled",mdxType:"SelectField"}),Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),id:"my-select-field-filled-error",label:"Your favourite fruit",options:l,required:!0,value:e,validationState:"invalid",validationText:"You must select at least one kind of fruit.",variant:"filled",mdxType:"SelectField"}))}),Object(o.b)("h3",{id:"disabled-state"},"Disabled State"),Object(o.b)("p",null,"It's possible to disable just some options or the whole input."),Object(o.b)(u.c,{__position:8,__code:'() => {\n  const [fruit, setFruit] = React.useState(\'apple\')\n  const options = [\n    {\n      label: \'Apple\',\n      value: \'apple\',\n    },\n    {\n      disabled: true,\n      label: \'Banana\',\n      value: \'banana\',\n    },\n    {\n      label: \'Grapefruit\',\n      value: \'grapefruit\',\n    },\n  ]\n  return (\n    <>\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        id="my-select-field-outline-disabled-option"\n        label="Your favourite fruit"\n        options={options}\n        value={fruit}\n      />\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        id="my-select-field-filled-disabled-option"\n        label="Your favourite fruit"\n        options={options}\n        value={fruit}\n        variant="filled"\n      />\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        disabled\n        id="my-select-field-outline-disabled"\n        label="Your favourite fruit"\n        options={options}\n        value="apple"\n      />\n      <SelectField\n        changeHandler={e => setFruit(e.target.value)}\n        disabled\n        id="my-select-field-filled-disabled"\n        label="Your favourite fruit"\n        options={options}\n        value="apple"\n        variant="filled"\n      />\n    </>\n  )\n}',__scope:{props:l,DefaultLayout:r.a,Playground:u.c,Props:u.d,SelectField:d.a,DefaultLayout:r.a,_frontmatter:s},mdxType:"Playground"},()=>{const[e,t]=i.useState("apple"),l=[{label:"Apple",value:"apple"},{disabled:!0,label:"Banana",value:"banana"},{label:"Grapefruit",value:"grapefruit"}];return Object(o.b)(i.Fragment,null,Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),id:"my-select-field-outline-disabled-option",label:"Your favourite fruit",options:l,value:e,mdxType:"SelectField"}),Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),id:"my-select-field-filled-disabled-option",label:"Your favourite fruit",options:l,value:e,variant:"filled",mdxType:"SelectField"}),Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),disabled:!0,id:"my-select-field-outline-disabled",label:"Your favourite fruit",options:l,value:"apple",mdxType:"SelectField"}),Object(o.b)(d.a,{changeHandler:e=>t(e.target.value),disabled:!0,id:"my-select-field-filled-disabled",label:"Your favourite fruit",options:l,value:"apple",variant:"filled",mdxType:"SelectField"}))}),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("p",null,"In addition to the options below, you can add any custom attributes that do not\ninterfere with the API, and they will be passed to the ",Object(o.b)("inlineCode",{parentName:"p"},"select")," HTML element.\nThis is useful mainly to improve component's accessibility."),Object(o.b)(u.d,{table:!0,of:d.a,mdxType:"Props"}),Object(o.b)("h2",{id:"theming"},"Theming"),Object(o.b)("p",null,"Head to ",Object(o.b)("a",{parentName:"p",href:"/customize/theming#forms"},"Forms Theming"),"."))}void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/lib/components/ui/SelectField/README.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-lib-components-ui-select-field-readme-mdx-63ab9075915589f687aa.js.map