(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{szry:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return f}));var n=a("Fcif"),l=a("dV/x"),o=a("mXGw"),i=a("/FXl"),r=a("TjRS"),u=a("ZFoC"),p=a("nBnF");a("aD51");const s=["components"],b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!Object.prototype.hasOwnProperty.call(b,"__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/lib/components/SelectField/README.mdx"}});const d={_frontmatter:b},c=r.a;function f(e){let{components:t}=e,a=Object(l.a)(e,s);return Object(i.b)(c,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"selectfield"},"SelectField"),Object(i.b)("p",null,"SelectField allows users to select one option from a set."),Object(i.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(i.b)("p",null,"To implement the SelectField component, you need to import it first:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import { SelectField } from '@react-ui-org/react-ui';\n")),Object(i.b)("p",null,"And use it:"),Object(i.b)(u.c,{__position:0,__code:"() => {\n  const [fruit, setFruit] = React.useState('apple')\n  return (\n    <SelectField\n      label=\"Your favourite fruit\"\n      onChange={e => setFruit(e.target.value)}\n      options={[\n        {\n          label: 'Apple',\n          value: 'apple',\n        },\n        {\n          label: 'Banana',\n          value: 'banana',\n        },\n        {\n          label: 'Grapefruit',\n          value: 'grapefruit',\n        },\n      ]}\n      value={fruit}\n    />\n  )\n}",__scope:{props:a,DefaultLayout:r.a,Playground:u.c,Props:u.d,SelectField:p.z,DefaultLayout:r.a,_frontmatter:b},mdxType:"Playground"},()=>{const[e,t]=o.useState("apple");return Object(i.b)(p.z,{label:"Your favourite fruit",onChange:e=>t(e.target.value),options:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Grapefruit",value:"grapefruit"}],value:e,mdxType:"SelectField"})}),Object(i.b)("p",null,"See ",Object(i.b)("a",{parentName:"p",href:"#api"},"API")," for all available options."),Object(i.b)("h2",{id:"general-guidelines"},"General Guidelines"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use SelectField for ",Object(i.b)("strong",{parentName:"p"},"many options"),". For sets of just a few options\n(say 3 at maximum) consider using the ",Object(i.b)("a",{parentName:"p",href:"/components/radio"},"Radio")," component.\nThis will help keep your UI clean and uncluttered and prevent your users from\nbeing overwhelmed by too many options.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Don't use for boolean")," (true/false) selection or to toggle things on and\noff. ",Object(i.b)("a",{parentName:"p",href:"/components/checkbox-field"},"CheckboxField")," and\n",Object(i.b)("a",{parentName:"p",href:"/components/toggle"},"Toggle")," are more suitable for such cases.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use ",Object(i.b)("strong",{parentName:"p"},"short and descriptive labels"),", ideally nouns rather than seemingly\npolite phrases like ",Object(i.b)("em",{parentName:"p"},"Please select your favourite fruit"),". Short labels will\nhelp your users accomplish their task faster.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Only make the SelectField's label invisible when there is ",Object(i.b)("strong",{parentName:"p"},"another visual\nclue")," to guide users through filling the input. Using the first option as\nlabel is not recommended either — it disappears once user makes their choice.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"When a short label is not enough, use ",Object(i.b)("strong",{parentName:"p"},"help texts to guide users")," before\nthey enter anything.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use ",Object(i.b)("strong",{parentName:"p"},"clear, calm error messages")," when there's a problem with what they\nentered.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In case of a large amount of options, consider ",Object(i.b)("strong",{parentName:"p"},"grouping related items\ntogether")," by nesting them."))),Object(i.b)("p",null,"👉 We use the ",Object(i.b)("strong",{parentName:"p"},"native ",Object(i.b)("inlineCode",{parentName:"strong"},"select"))," HTML element to improve user experience on\nmobile devices by using the native select of the platform."),Object(i.b)("h2",{id:"design-variants"},"Design Variants"),Object(i.b)("p",null,"To satisfy the design requirements of your project, all input fields in React UI\ncome in two design variants to choose from: outline and filled. Both can be\nfurther ",Object(i.b)("a",{parentName:"p",href:"#theming"},"customized")," with CSS custom properties."),Object(i.b)(u.c,{__position:1,__code:"() => {\n  const [fruit, setFruit] = React.useState('apple')\n  const options = [\n    {\n      label: 'Apple',\n      value: 'apple',\n    },\n    {\n      label: 'Banana',\n      value: 'banana',\n    },\n    {\n      label: 'Grapefruit',\n      value: 'grapefruit',\n    },\n  ]\n  return (\n    <>\n      <SelectField\n        label=\"Your favourite fruit\"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        value={fruit}\n      />\n      <SelectField\n        label=\"Your favourite fruit\"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        variant=\"filled\"\n        value={fruit}\n      />\n    </>\n  )\n}",__scope:{props:a,DefaultLayout:r.a,Playground:u.c,Props:u.d,SelectField:p.z,DefaultLayout:r.a,_frontmatter:b},mdxType:"Playground"},()=>{const[e,t]=o.useState("apple"),a=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Grapefruit",value:"grapefruit"}];return Object(i.b)(o.Fragment,null,Object(i.b)(p.z,{label:"Your favourite fruit",onChange:e=>t(e.target.value),options:a,value:e,mdxType:"SelectField"}),Object(i.b)(p.z,{label:"Your favourite fruit",onChange:e=>t(e.target.value),options:a,variant:"filled",value:e,mdxType:"SelectField"}))}),Object(i.b)("h2",{id:"sizes"},"Sizes"),Object(i.b)("p",null,"Aside from the default (medium) size, two additional sizes are available: small\nand large."),Object(i.b)(u.c,{__position:2,__code:'() => {\n  const [fruit, setFruit] = React.useState(\'apple\')\n  const options = [\n    {\n      label: \'Apple\',\n      value: \'apple\',\n    },\n    {\n      label: \'Banana\',\n      value: \'banana\',\n    },\n    {\n      label: \'Grapefruit\',\n      value: \'grapefruit\',\n    },\n  ]\n  return (\n    <>\n      <SelectField\n        label="Your favourite fruit"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        size="small"\n        value={fruit}\n      />\n      <SelectField\n        label="Your favourite fruit"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        value={fruit}\n      />\n      <SelectField\n        label="Your favourite fruit"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        size="large"\n        value={fruit}\n      />\n      <SelectField\n        label="Your favourite fruit"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        size="small"\n        value={fruit}\n        variant="filled"\n      />\n      <SelectField\n        label="Your favourite fruit"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        value={fruit}\n        variant="filled"\n      />\n      <SelectField\n        label="Your favourite fruit"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        size="large"\n        value={fruit}\n        variant="filled"\n      />\n    </>\n  )\n}',__scope:{props:a,DefaultLayout:r.a,Playground:u.c,Props:u.d,SelectField:p.z,DefaultLayout:r.a,_frontmatter:b},mdxType:"Playground"},()=>{const[e,t]=o.useState("apple"),a=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Grapefruit",value:"grapefruit"}];return Object(i.b)(o.Fragment,null,Object(i.b)(p.z,{label:"Your favourite fruit",onChange:e=>t(e.target.value),options:a,size:"small",value:e,mdxType:"SelectField"}),Object(i.b)(p.z,{label:"Your favourite fruit",onChange:e=>t(e.target.value),options:a,value:e,mdxType:"SelectField"}),Object(i.b)(p.z,{label:"Your favourite fruit",onChange:e=>t(e.target.value),options:a,size:"large",value:e,mdxType:"SelectField"}),Object(i.b)(p.z,{label:"Your favourite fruit",onChange:e=>t(e.target.value),options:a,size:"small",value:e,variant:"filled",mdxType:"SelectField"}),Object(i.b)(p.z,{label:"Your favourite fruit",onChange:e=>t(e.target.value),options:a,value:e,variant:"filled",mdxType:"SelectField"}),Object(i.b)(p.z,{label:"Your favourite fruit",onChange:e=>t(e.target.value),options:a,size:"large",value:e,variant:"filled",mdxType:"SelectField"}))}),Object(i.b)("p",null,"Full-width fields span the full width of a parent:"),Object(i.b)(u.c,{__position:3,__code:"() => {\n  const [fruit, setFruit] = React.useState('apple')\n  const options = [\n    {\n      label: 'Apple',\n      value: 'apple',\n    },\n    {\n      label: 'Banana',\n      value: 'banana',\n    },\n    {\n      label: 'Grapefruit',\n      value: 'grapefruit',\n    },\n  ]\n  return (\n    <>\n      <SelectField\n        fullWidth\n        label=\"Your favourite fruit\"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        value={fruit}\n      />\n      <SelectField\n        fullWidth\n        label=\"Your favourite fruit\"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        value={fruit}\n        variant=\"filled\"\n      />\n    </>\n  )\n}",__scope:{props:a,DefaultLayout:r.a,Playground:u.c,Props:u.d,SelectField:p.z,DefaultLayout:r.a,_frontmatter:b},mdxType:"Playground"},()=>{const[e,t]=o.useState("apple"),a=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Grapefruit",value:"grapefruit"}];return Object(i.b)(o.Fragment,null,Object(i.b)(p.z,{fullWidth:!0,label:"Your favourite fruit",onChange:e=>t(e.target.value),options:a,value:e,mdxType:"SelectField"}),Object(i.b)(p.z,{fullWidth:!0,label:"Your favourite fruit",onChange:e=>t(e.target.value),options:a,value:e,variant:"filled",mdxType:"SelectField"}))}),Object(i.b)("h2",{id:"grouping-related-options"},"Grouping Related Options"),Object(i.b)("p",null,"For a large amount of options you can group related items together by nesting\nthem (implements the ",Object(i.b)("inlineCode",{parentName:"p"},"optgroup")," HTML element)."),Object(i.b)(u.c,{__position:4,__code:"() => {\n  const [crop, setCrop] = React.useState('apple')\n  const options = [\n    {\n      label: 'Fruits',\n      options: [\n        {\n          label: 'Apple',\n          value: 'apple',\n        },\n        {\n          label: 'Banana',\n          value: 'banana',\n        },\n        {\n          label: 'Grapefruit',\n          value: 'grapefruit',\n        },\n      ],\n    },\n    {\n      label: 'Vegetables',\n      options: [\n        {\n          label: 'Beetroot',\n          value: 'beetroot',\n        },\n        {\n          label: 'Carrot',\n          value: 'carrot',\n        },\n        {\n          label: 'Tomato',\n          value: 'tomato',\n        },\n      ],\n    },\n  ]\n  return (\n    <>\n      <SelectField\n        label=\"Your favourite crop\"\n        onChange={e => setCrop(e.target.value)}\n        options={options}\n        value={crop}\n      />\n      <SelectField\n        label=\"Your favourite crop\"\n        onChange={e => setCrop(e.target.value)}\n        options={options}\n        value={crop}\n        variant=\"filled\"\n      />\n    </>\n  )\n}",__scope:{props:a,DefaultLayout:r.a,Playground:u.c,Props:u.d,SelectField:p.z,DefaultLayout:r.a,_frontmatter:b},mdxType:"Playground"},()=>{const[e,t]=o.useState("apple"),a=[{label:"Fruits",options:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Grapefruit",value:"grapefruit"}]},{label:"Vegetables",options:[{label:"Beetroot",value:"beetroot"},{label:"Carrot",value:"carrot"},{label:"Tomato",value:"tomato"}]}];return Object(i.b)(o.Fragment,null,Object(i.b)(p.z,{label:"Your favourite crop",onChange:e=>t(e.target.value),options:a,value:e,mdxType:"SelectField"}),Object(i.b)(p.z,{label:"Your favourite crop",onChange:e=>t(e.target.value),options:a,value:e,variant:"filled",mdxType:"SelectField"}))}),Object(i.b)("h2",{id:"invisible-label"},"Invisible Label"),Object(i.b)("p",null,"While it may be acceptable for login screens with just a few fields or for other\nsimple forms, it's dangerous to hide labels from users in most cases. Keep in\nmind you should ",Object(i.b)("strong",{parentName:"p"},"provide another visual clue")," so users know what to fill into\nthe input."),Object(i.b)(u.c,{__position:5,__code:"() => {\n  const [fruit, setFruit] = React.useState('apple')\n  const options = [\n    {\n      label: 'Apple',\n      value: 'apple',\n    },\n    {\n      label: 'Banana',\n      value: 'banana',\n    },\n    {\n      label: 'Grapefruit',\n      value: 'grapefruit',\n    },\n  ]\n  return (\n    <>\n      <SelectField\n        isLabelVisible={false}\n        label=\"Your favourite fruit\"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        value={fruit}\n      />\n      <SelectField\n        isLabelVisible={false}\n        label=\"Your favourite fruit\"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        value={fruit}\n        variant=\"filled\"\n      />\n    </>\n  )\n}",__scope:{props:a,DefaultLayout:r.a,Playground:u.c,Props:u.d,SelectField:p.z,DefaultLayout:r.a,_frontmatter:b},mdxType:"Playground"},()=>{const[e,t]=o.useState("apple"),a=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Grapefruit",value:"grapefruit"}];return Object(i.b)(o.Fragment,null,Object(i.b)(p.z,{isLabelVisible:!1,label:"Your favourite fruit",onChange:e=>t(e.target.value),options:a,value:e,mdxType:"SelectField"}),Object(i.b)(p.z,{isLabelVisible:!1,label:"Your favourite fruit",onChange:e=>t(e.target.value),options:a,value:e,variant:"filled",mdxType:"SelectField"}))}),Object(i.b)("h2",{id:"horizontal-layout"},"Horizontal Layout"),Object(i.b)("p",null,"The default vertical layout is very easy to use and work with. However, there\nare situations where horizontal layout suits better — and that's why React UI\nsupports this kind of layout as well."),Object(i.b)(u.c,{__position:6,__code:'() => {\n  const [fruit, setFruit] = React.useState(\'apple\')\n  const options = [\n    {\n      label: \'Apple\',\n      value: \'apple\',\n    },\n    {\n      label: \'Banana\',\n      value: \'banana\',\n    },\n    {\n      label: \'Grapefruit\',\n      value: \'grapefruit\',\n    },\n  ]\n  return (\n    <>\n      <SelectField\n        label="Your favourite fruit"\n        layout="horizontal"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        value={fruit}\n      />\n      <SelectField\n        label="Your favourite fruit"\n        layout="horizontal"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        value={fruit}\n        variant="filled"\n      />\n      <SelectField\n        fullWidth\n        label="Your favourite fruit"\n        layout="horizontal"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        value={fruit}\n      />\n      <SelectField\n        fullWidth\n        label="Your favourite fruit"\n        layout="horizontal"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        value={fruit}\n        variant="filled"\n      />\n      <SelectField\n        fullWidth\n        isLabelVisible={false}\n        label="Your favourite fruit"\n        layout="horizontal"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        value={fruit}\n      />\n      <SelectField\n        fullWidth\n        isLabelVisible={false}\n        label="Your favourite fruit"\n        layout="horizontal"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        value={fruit}\n        variant="filled"\n      />\n    </>\n  )\n}',__scope:{props:a,DefaultLayout:r.a,Playground:u.c,Props:u.d,SelectField:p.z,DefaultLayout:r.a,_frontmatter:b},mdxType:"Playground"},()=>{const[e,t]=o.useState("apple"),a=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Grapefruit",value:"grapefruit"}];return Object(i.b)(o.Fragment,null,Object(i.b)(p.z,{label:"Your favourite fruit",layout:"horizontal",onChange:e=>t(e.target.value),options:a,value:e,mdxType:"SelectField"}),Object(i.b)(p.z,{label:"Your favourite fruit",layout:"horizontal",onChange:e=>t(e.target.value),options:a,value:e,variant:"filled",mdxType:"SelectField"}),Object(i.b)(p.z,{fullWidth:!0,label:"Your favourite fruit",layout:"horizontal",onChange:e=>t(e.target.value),options:a,value:e,mdxType:"SelectField"}),Object(i.b)(p.z,{fullWidth:!0,label:"Your favourite fruit",layout:"horizontal",onChange:e=>t(e.target.value),options:a,value:e,variant:"filled",mdxType:"SelectField"}),Object(i.b)(p.z,{fullWidth:!0,isLabelVisible:!1,label:"Your favourite fruit",layout:"horizontal",onChange:e=>t(e.target.value),options:a,value:e,mdxType:"SelectField"}),Object(i.b)(p.z,{fullWidth:!0,isLabelVisible:!1,label:"Your favourite fruit",layout:"horizontal",onChange:e=>t(e.target.value),options:a,value:e,variant:"filled",mdxType:"SelectField"}))}),Object(i.b)("h2",{id:"help-text"},"Help Text"),Object(i.b)("p",null,"You may provide an additional help text to clarify how the input should be\nfilled."),Object(i.b)(u.c,{__position:7,__code:'() => {\n  const [fruit, setFruit] = React.useState(\'apple\')\n  const options = [\n    {\n      label: \'Apple\',\n      value: \'apple\',\n    },\n    {\n      label: \'Banana\',\n      value: \'banana\',\n    },\n    {\n      label: \'Grapefruit\',\n      value: \'grapefruit\',\n    },\n  ]\n  return (\n    <>\n      <SelectField\n        helpText="Choose one or more kinds of fruit to feel happy."\n        label="Your favourite fruit"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        value={fruit}\n      />\n      <SelectField\n        helpText="Choose one or more kinds of fruit to feel happy."\n        label="Your favourite fruit"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        value={fruit}\n        variant="filled"\n      />\n      <SelectField\n        helpText="Choose one or more kinds of fruit to feel happy."\n        label="Your favourite fruit"\n        layout="horizontal"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        value={fruit}\n      />\n      <SelectField\n        helpText="Choose one or more kinds of fruit to feel happy."\n        label="Your favourite fruit"\n        layout="horizontal"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        value={fruit}\n        variant="filled"\n      />\n      <SelectField\n        fullWidth\n        helpText="Choose one or more kinds of fruit to feel happy."\n        label="Your favourite fruit"\n        layout="horizontal"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        value={fruit}\n      />\n      <SelectField\n        fullWidth\n        helpText="Choose one or more kinds of fruit to feel happy."\n        label="Your favourite fruit"\n        layout="horizontal"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        value={fruit}\n        variant="filled"\n      />\n    </>\n  )\n}',__scope:{props:a,DefaultLayout:r.a,Playground:u.c,Props:u.d,SelectField:p.z,DefaultLayout:r.a,_frontmatter:b},mdxType:"Playground"},()=>{const[e,t]=o.useState("apple"),a=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Grapefruit",value:"grapefruit"}];return Object(i.b)(o.Fragment,null,Object(i.b)(p.z,{helpText:"Choose one or more kinds of fruit to feel happy.",label:"Your favourite fruit",onChange:e=>t(e.target.value),options:a,value:e,mdxType:"SelectField"}),Object(i.b)(p.z,{helpText:"Choose one or more kinds of fruit to feel happy.",label:"Your favourite fruit",onChange:e=>t(e.target.value),options:a,value:e,variant:"filled",mdxType:"SelectField"}),Object(i.b)(p.z,{helpText:"Choose one or more kinds of fruit to feel happy.",label:"Your favourite fruit",layout:"horizontal",onChange:e=>t(e.target.value),options:a,value:e,mdxType:"SelectField"}),Object(i.b)(p.z,{helpText:"Choose one or more kinds of fruit to feel happy.",label:"Your favourite fruit",layout:"horizontal",onChange:e=>t(e.target.value),options:a,value:e,variant:"filled",mdxType:"SelectField"}),Object(i.b)(p.z,{fullWidth:!0,helpText:"Choose one or more kinds of fruit to feel happy.",label:"Your favourite fruit",layout:"horizontal",onChange:e=>t(e.target.value),options:a,value:e,mdxType:"SelectField"}),Object(i.b)(p.z,{fullWidth:!0,helpText:"Choose one or more kinds of fruit to feel happy.",label:"Your favourite fruit",layout:"horizontal",onChange:e=>t(e.target.value),options:a,value:e,variant:"filled",mdxType:"SelectField"}))}),Object(i.b)("h2",{id:"states"},"States"),Object(i.b)("h3",{id:"validation-states"},"Validation States"),Object(i.b)("p",null,"Validation states visually present the result of validation of the input. You\nshould always ",Object(i.b)("strong",{parentName:"p"},"provide a validation message for states other than valid")," so\nusers know what happened and what action they should take or what options they\nhave."),Object(i.b)(u.c,{__position:8,__code:'() => {\n  const [fruit, setFruit] = React.useState(\'apple\')\n  const options = [\n    {\n      label: \'Apple\',\n      value: \'apple\',\n    },\n    {\n      label: \'Banana\',\n      value: \'banana\',\n    },\n    {\n      label: \'Grapefruit\',\n      value: \'grapefruit\',\n    },\n  ]\n  return (\n    <>\n      <SelectField\n        label="Your favourite fruit"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        required\n        validationState="valid"\n        validationText="Great, they\'re in stock!"\n        value={fruit}\n      />\n      <SelectField\n        label="Your favourite fruit"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        required\n        validationState="warning"\n        validationText="Oh, really?"\n        value={fruit}\n      />\n      <SelectField\n        label="Your favourite fruit"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        required\n        validationState="invalid"\n        validationText="You must select at least one kind of fruit."\n        value={fruit}\n      />\n      <SelectField\n        label="Your favourite fruit"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        required\n        validationState="valid"\n        validationText="Great, they\'re in stock!"\n        value={fruit}\n        variant="filled"\n      />\n      <SelectField\n        label="Your favourite fruit"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        required\n        validationState="warning"\n        validationText="Oh, really?"\n        value={fruit}\n        variant="filled"\n      />\n      <SelectField\n        label="Your favourite fruit"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        required\n        value={fruit}\n        validationState="invalid"\n        validationText="You must select at least one kind of fruit."\n        variant="filled"\n      />\n    </>\n  )\n}',__scope:{props:a,DefaultLayout:r.a,Playground:u.c,Props:u.d,SelectField:p.z,DefaultLayout:r.a,_frontmatter:b},mdxType:"Playground"},()=>{const[e,t]=o.useState("apple"),a=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Grapefruit",value:"grapefruit"}];return Object(i.b)(o.Fragment,null,Object(i.b)(p.z,{label:"Your favourite fruit",onChange:e=>t(e.target.value),options:a,required:!0,validationState:"valid",validationText:"Great, they're in stock!",value:e,mdxType:"SelectField"}),Object(i.b)(p.z,{label:"Your favourite fruit",onChange:e=>t(e.target.value),options:a,required:!0,validationState:"warning",validationText:"Oh, really?",value:e,mdxType:"SelectField"}),Object(i.b)(p.z,{label:"Your favourite fruit",onChange:e=>t(e.target.value),options:a,required:!0,validationState:"invalid",validationText:"You must select at least one kind of fruit.",value:e,mdxType:"SelectField"}),Object(i.b)(p.z,{label:"Your favourite fruit",onChange:e=>t(e.target.value),options:a,required:!0,validationState:"valid",validationText:"Great, they're in stock!",value:e,variant:"filled",mdxType:"SelectField"}),Object(i.b)(p.z,{label:"Your favourite fruit",onChange:e=>t(e.target.value),options:a,required:!0,validationState:"warning",validationText:"Oh, really?",value:e,variant:"filled",mdxType:"SelectField"}),Object(i.b)(p.z,{label:"Your favourite fruit",onChange:e=>t(e.target.value),options:a,required:!0,value:e,validationState:"invalid",validationText:"You must select at least one kind of fruit.",variant:"filled",mdxType:"SelectField"}))}),Object(i.b)("h3",{id:"disabled-state"},"Disabled State"),Object(i.b)("p",null,"It's possible to disable just some options or the whole input."),Object(i.b)(u.c,{__position:9,__code:'() => {\n  const [fruit, setFruit] = React.useState(\'apple\')\n  const options = [\n    {\n      label: \'Apple\',\n      value: \'apple\',\n    },\n    {\n      disabled: true,\n      label: \'Banana\',\n      value: \'banana\',\n    },\n    {\n      label: \'Grapefruit\',\n      value: \'grapefruit\',\n    },\n  ]\n  return (\n    <>\n      <SelectField\n        label="Your favourite fruit"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        value={fruit}\n      />\n      <SelectField\n        label="Your favourite fruit"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        value={fruit}\n        variant="filled"\n      />\n      <SelectField\n        disabled\n        label="Your favourite fruit"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        value="apple"\n      />\n      <SelectField\n        disabled\n        label="Your favourite fruit"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        value="apple"\n        variant="filled"\n      />\n    </>\n  )\n}',__scope:{props:a,DefaultLayout:r.a,Playground:u.c,Props:u.d,SelectField:p.z,DefaultLayout:r.a,_frontmatter:b},mdxType:"Playground"},()=>{const[e,t]=o.useState("apple"),a=[{label:"Apple",value:"apple"},{disabled:!0,label:"Banana",value:"banana"},{label:"Grapefruit",value:"grapefruit"}];return Object(i.b)(o.Fragment,null,Object(i.b)(p.z,{label:"Your favourite fruit",onChange:e=>t(e.target.value),options:a,value:e,mdxType:"SelectField"}),Object(i.b)(p.z,{label:"Your favourite fruit",onChange:e=>t(e.target.value),options:a,value:e,variant:"filled",mdxType:"SelectField"}),Object(i.b)(p.z,{disabled:!0,label:"Your favourite fruit",onChange:e=>t(e.target.value),options:a,value:"apple",mdxType:"SelectField"}),Object(i.b)(p.z,{disabled:!0,label:"Your favourite fruit",onChange:e=>t(e.target.value),options:a,value:"apple",variant:"filled",mdxType:"SelectField"}))}),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("p",null,"In addition to the options below, you can specify ",Object(i.b)("a",{parentName:"p",href:"https://reactjs.org/docs/events.html"},"React synthetic events")," or\nany custom HTML attributes that do not interfere with the API, and they will be\npassed to the ",Object(i.b)("inlineCode",{parentName:"p"},"<select>")," HTML element. This enables making the component\ninteractive and helps improve its accessibility."),Object(i.b)(u.d,{table:!0,of:p.z,mdxType:"Props"}),Object(i.b)("h2",{id:"theming"},"Theming"),Object(i.b)("p",null,"Head to ",Object(i.b)("a",{parentName:"p",href:"/customize/theming/forms"},"Forms Theming")," to see shared form theming\noptions. On top of that, the following options are available for SelectField."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Custom Property"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"--rui-FormField--box--select__caret__border-style")),Object(i.b)("td",{parentName:"tr",align:null},"SelectField arrow border style (e.g. ",Object(i.b)("inlineCode",{parentName:"td"},"solid"),")")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"--rui-FormField--box--select__caret__background")),Object(i.b)("td",{parentName:"tr",align:null},"SelectField arrow background (including ",Object(i.b)("inlineCode",{parentName:"td"},"url()")," or gradient)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"--rui-FormField--box--select__option--disabled__color")),Object(i.b)("td",{parentName:"tr",align:null},"Text color of disabled SelectField options")))))}void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&!Object.prototype.hasOwnProperty.call(f,"__filemeta")&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/lib/components/SelectField/README.mdx"}}),f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-lib-components-select-field-readme-mdx-1ea56ff79ac97a3fd3fb.js.map