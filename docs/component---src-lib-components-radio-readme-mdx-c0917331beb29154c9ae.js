(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{jJT0:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return p})),a.d(t,"default",(function(){return h}));var n=a("Fcif"),l=a("dV/x"),o=a("mXGw"),r=a("/FXl"),i=a("TjRS"),u=a("ZFoC"),s=a("SdXv");a("aD51");const b=["components"],p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/lib/components/Radio/README.mdx"}});const c={_frontmatter:p},d=i.a;function h(e){let{components:t}=e,a=Object(l.a)(e,b);return Object(r.b)(d,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"radio"},"Radio"),Object(r.b)("p",null,"Radio allows users to select one option from a set."),Object(r.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(r.b)("p",null,"To implement the Radio component, you need to import it first:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import { Radio } from '@react-ui-org/react-ui';\n")),Object(r.b)("p",null,"And use it:"),Object(r.b)(u.c,{__position:0,__code:"() => {\n  const [fruit, setFruit] = React.useState('apple')\n  return (\n    <Radio\n      label=\"Your favourite fruit\"\n      onChange={e => setFruit(e.target.value)}\n      options={[\n        {\n          label: 'Apple',\n          value: 'apple',\n        },\n        {\n          label: 'Banana',\n          value: 'banana',\n        },\n        {\n          label: 'Grapefruit',\n          value: 'grapefruit',\n        },\n      ]}\n      value={fruit}\n    />\n  )\n}",__scope:{props:a,DefaultLayout:i.a,Playground:u.c,Props:u.d,Radio:s.a,DefaultLayout:i.a,_frontmatter:p},mdxType:"Playground"},()=>{const[e,t]=o.useState("apple");return Object(r.b)(s.a,{label:"Your favourite fruit",onChange:e=>t(e.target.value),options:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Grapefruit",value:"grapefruit"}],value:e,mdxType:"Radio"})}),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"#api"},"API")," for all available options."),Object(r.b)("h2",{id:"general-guidelines"},"General Guidelines"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Use Radio for ",Object(r.b)("strong",{parentName:"p"},"just a few options"),". For larger sets of many options (say 4\nand more) consider using the ",Object(r.b)("a",{parentName:"p",href:"/components/select-field"},"SelectField"),"\ncomponent. This will help keep your UI clean and uncluttered and prevent your\nusers from being overwhelmed by too many options.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Don't use for boolean")," (true/false) selection or to toggle things on and\noff. ",Object(r.b)("a",{parentName:"p",href:"/components/checkbox-field"},"CheckboxField")," and\n",Object(r.b)("a",{parentName:"p",href:"/components/toggle"},"Toggle")," are more suitable for such cases.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Use ",Object(r.b)("strong",{parentName:"p"},"short and descriptive labels"),", ideally nouns rather than seemingly\npolite phrases like ",Object(r.b)("em",{parentName:"p"},"Please select your favourite fruit"),". Short labels will\nhelp your users accomplish their task faster.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Only make the Radio's label invisible when there is ",Object(r.b)("strong",{parentName:"p"},"another visual\nclue")," to guide users through filling the input.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"When a short label is not enough, use ",Object(r.b)("strong",{parentName:"p"},"help texts to guide users")," before\nthey enter anything.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Use ",Object(r.b)("strong",{parentName:"p"},"clear, calm error messages")," when there's a problem with what they\nentered."))),Object(r.b)("p",null,"📖 ",Object(r.b)("a",{parentName:"p",href:"https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/"},"Read more about checkboxes and radios at Nielsen Norman Group.")),Object(r.b)("h2",{id:"invisible-label"},"Invisible Label"),Object(r.b)("p",null,"While it may be acceptable for login screens with just a few fields or for other\nsimple forms, it's dangerous to hide labels from users in most cases. Keep in\nmind you should ",Object(r.b)("strong",{parentName:"p"},"provide another visual clue")," so users know what to fill into\nthe input."),Object(r.b)(u.c,{__position:1,__code:"() => {\n  const [frequency, setFrequency] = React.useState('weekly')\n  return (\n    <Radio\n      isLabelVisible={false}\n      label=\"Newsletter frequency\"\n      onChange={e => setFrequency(e.target.value)}\n      options={[\n        {\n          label: 'I want to subscribe to the weekly newsletter',\n          value: 'weekly',\n        },\n        {\n          label: 'I want to subscribe to the monthly newsletter',\n          value: 'monthly',\n        },\n        {\n          label: \"I don't wish to receive anything\",\n          value: 'never',\n        },\n      ]}\n      value={frequency}\n    />\n  )\n}",__scope:{props:a,DefaultLayout:i.a,Playground:u.c,Props:u.d,Radio:s.a,DefaultLayout:i.a,_frontmatter:p},mdxType:"Playground"},()=>{const[e,t]=o.useState("weekly");return Object(r.b)(s.a,{isLabelVisible:!1,label:"Newsletter frequency",onChange:e=>t(e.target.value),options:[{label:"I want to subscribe to the weekly newsletter",value:"weekly"},{label:"I want to subscribe to the monthly newsletter",value:"monthly"},{label:"I don't wish to receive anything",value:"never"}],value:e,mdxType:"Radio"})}),Object(r.b)("h2",{id:"horizontal-layout"},"Horizontal Layout"),Object(r.b)("p",null,"The default vertical layout is very easy to use and work with. However, there\nare situations where horizontal layout suits better — and that's why React UI\nsupports this kind of layout as well."),Object(r.b)(u.c,{__position:2,__code:"() => {\n  const [frequency, setFrequency] = React.useState('weekly')\n  return (\n    <Radio\n      label=\"Newsletter frequency\"\n      layout=\"horizontal\"\n      onChange={e => setFrequency(e.target.value)}\n      options={[\n        {\n          label: 'I want to subscribe to the weekly newsletter',\n          value: 'weekly',\n        },\n        {\n          label: 'I want to subscribe to the monthly newsletter',\n          value: 'monthly',\n        },\n        {\n          label: \"I don't wish to receive anything\",\n          value: 'never',\n        },\n      ]}\n      value={frequency}\n    />\n  )\n}",__scope:{props:a,DefaultLayout:i.a,Playground:u.c,Props:u.d,Radio:s.a,DefaultLayout:i.a,_frontmatter:p},mdxType:"Playground"},()=>{const[e,t]=o.useState("weekly");return Object(r.b)(s.a,{label:"Newsletter frequency",layout:"horizontal",onChange:e=>t(e.target.value),options:[{label:"I want to subscribe to the weekly newsletter",value:"weekly"},{label:"I want to subscribe to the monthly newsletter",value:"monthly"},{label:"I don't wish to receive anything",value:"never"}],value:e,mdxType:"Radio"})}),Object(r.b)("h2",{id:"help-text"},"Help Text"),Object(r.b)("p",null,"You may provide an additional help text to clarify how the input should be\nfilled."),Object(r.b)(u.c,{__position:3,__code:"() => {\n  const [fruit, setFruit] = React.useState('apple')\n  return (\n    <Radio\n      helpText=\"What do you prefer?\"\n      label=\"Your favourite fruit\"\n      onChange={e => setFruit(e.target.value)}\n      options={[\n        {\n          label: 'Apple',\n          value: 'apple',\n        },\n        {\n          label: 'Banana',\n          value: 'banana',\n        },\n        {\n          label: 'Grapefruit',\n          value: 'grapefruit',\n        },\n      ]}\n      value={fruit}\n    />\n  )\n}",__scope:{props:a,DefaultLayout:i.a,Playground:u.c,Props:u.d,Radio:s.a,DefaultLayout:i.a,_frontmatter:p},mdxType:"Playground"},()=>{const[e,t]=o.useState("apple");return Object(r.b)(s.a,{helpText:"What do you prefer?",label:"Your favourite fruit",onChange:e=>t(e.target.value),options:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Grapefruit",value:"grapefruit"}],value:e,mdxType:"Radio"})}),Object(r.b)("h2",{id:"states"},"States"),Object(r.b)("h3",{id:"validation-states"},"Validation States"),Object(r.b)("p",null,"Validation states visually present the result of validation of the input. You\nshould always ",Object(r.b)("strong",{parentName:"p"},"provide a validation message for states other than valid")," so\nusers know what happened and what action they should take or what options they\nhave."),Object(r.b)(u.c,{__position:4,__code:'() => {\n  const [fruit, setFruit] = React.useState(\'apple\')\n  const options = [\n    {\n      label: \'Apple\',\n      value: \'apple\',\n    },\n    {\n      label: \'Banana\',\n      value: \'banana\',\n    },\n    {\n      label: \'Grapefruit\',\n      value: \'grapefruit\',\n    },\n  ]\n  return (\n    <>\n      <Radio\n        label="Your favourite fruit"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        required\n        validationState="valid"\n        validationText="Great, they\'re in stock!"\n        value={fruit}\n      />\n      <Radio\n        label="Your favourite fruit"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        required\n        validationState="warning"\n        validationText="Oh, really?"\n        value={fruit}\n      />\n      <Radio\n        label="Your favourite fruit"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        required\n        validationState="invalid"\n        validationText="You must select one kind of fruit."\n        value={fruit}\n      />\n    </>\n  )\n}',__scope:{props:a,DefaultLayout:i.a,Playground:u.c,Props:u.d,Radio:s.a,DefaultLayout:i.a,_frontmatter:p},mdxType:"Playground"},()=>{const[e,t]=o.useState("apple"),a=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Grapefruit",value:"grapefruit"}];return Object(r.b)(o.Fragment,null,Object(r.b)(s.a,{label:"Your favourite fruit",onChange:e=>t(e.target.value),options:a,required:!0,validationState:"valid",validationText:"Great, they're in stock!",value:e,mdxType:"Radio"}),Object(r.b)(s.a,{label:"Your favourite fruit",onChange:e=>t(e.target.value),options:a,required:!0,validationState:"warning",validationText:"Oh, really?",value:e,mdxType:"Radio"}),Object(r.b)(s.a,{label:"Your favourite fruit",onChange:e=>t(e.target.value),options:a,required:!0,validationState:"invalid",validationText:"You must select one kind of fruit.",value:e,mdxType:"Radio"}))}),Object(r.b)("h3",{id:"disabled-state"},"Disabled State"),Object(r.b)("p",null,"It's possible to disable just some options or the whole set."),Object(r.b)(u.c,{__position:5,__code:"() => {\n  const [fruit, setFruit] = React.useState('apple')\n  const options = [\n    {\n      label: 'Apple',\n      value: 'apple',\n    },\n    {\n      label: 'Banana',\n      value: 'banana',\n    },\n    {\n      disabled: true,\n      label: 'Grapefruit',\n      value: 'grapefruit',\n    },\n  ]\n  return (\n    <>\n      <Radio\n        label=\"Your favourite fruit\"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        value={fruit}\n      />\n      <Radio\n        disabled\n        label=\"Your favourite fruit\"\n        onChange={e => setFruit(e.target.value)}\n        options={options}\n        value=\"apple\"\n      />\n    </>\n  )\n}",__scope:{props:a,DefaultLayout:i.a,Playground:u.c,Props:u.d,Radio:s.a,DefaultLayout:i.a,_frontmatter:p},mdxType:"Playground"},()=>{const[e,t]=o.useState("apple"),a=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{disabled:!0,label:"Grapefruit",value:"grapefruit"}];return Object(r.b)(o.Fragment,null,Object(r.b)(s.a,{label:"Your favourite fruit",onChange:e=>t(e.target.value),options:a,value:e,mdxType:"Radio"}),Object(r.b)(s.a,{disabled:!0,label:"Your favourite fruit",onChange:e=>t(e.target.value),options:a,value:"apple",mdxType:"Radio"}))}),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("p",null,"In addition to the options below, you can specify ",Object(r.b)("a",{parentName:"p",href:"https://reactjs.org/docs/events.html"},"React synthetic events")," or\nany custom HTML attributes that do not interfere with the API, and they will be\npassed to the ",Object(r.b)("inlineCode",{parentName:"p"},"input")," HTML element. This enables making the component\ninteractive and helps improve its accessibility."),Object(r.b)(u.d,{table:!0,of:s.a,mdxType:"Props"}),Object(r.b)("h2",{id:"theming"},"Theming"),Object(r.b)("p",null,"Head to ",Object(r.b)("a",{parentName:"p",href:"/customize/theming/forms"},"Forms Theming")," to see shared form theming\noptions. On top of that, the following options are available for Radio."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Custom Property"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"--rui-FormField--check__input--radio__border-radius")),Object(r.b)("td",{parentName:"tr",align:null},"Input corner radius")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"--rui-FormField--check__input--radio--checked__background-image")),Object(r.b)("td",{parentName:"tr",align:null},"Checked input background image (inline, URL, …)")))))}void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/lib/components/Radio/README.mdx"}}),h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-lib-components-radio-readme-mdx-c0917331beb29154c9ae.js.map