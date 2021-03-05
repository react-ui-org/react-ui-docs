(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"dcg+":function(e,t,l){"use strict";l.r(t),l.d(t,"_frontmatter",(function(){return p})),l.d(t,"default",(function(){return m}));var i=l("Fcif"),n=l("dV/x"),a=(l("mXGw"),l("/FXl")),o=l("TjRS"),d=l("ZFoC"),r=l("m+kp");l("aD51");const p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/lib/components/ui/TextField/README.mdx"}});const s={_frontmatter:p},b=o.a;function m(e){let{components:t}=e,l=Object(n.a)(e,["components"]);return Object(a.b)(b,Object(i.a)({},s,l,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"textfield"},"TextField"),Object(a.b)("p",null,"TextField allows users to input text information."),Object(a.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(a.b)("p",null,"To implement the TextField component, you need to import it first:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import { TextField } from '@react-ui-org/react-ui';\n")),Object(a.b)("p",null,"And use it:"),Object(a.b)(d.c,{__position:0,__code:'<TextField id="my-text-field" label="First name" />',__scope:{props:l,DefaultLayout:o.a,Playground:d.c,Props:d.d,TextField:r.a,DefaultLayout:o.a,_frontmatter:p},mdxType:"Playground"},Object(a.b)(r.a,{id:"my-text-field",label:"First name",mdxType:"TextField"})),Object(a.b)("p",null,"See ",Object(a.b)("a",{parentName:"p",href:"#api"},"API")," for all available options."),Object(a.b)("h2",{id:"general-guidelines"},"General Guidelines"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Use the ",Object(a.b)("strong",{parentName:"p"},"most suitable input type")," for current context: aside from the\ncommon ",Object(a.b)("inlineCode",{parentName:"p"},"text")," type, there are also ",Object(a.b)("inlineCode",{parentName:"p"},"email"),", ",Object(a.b)("inlineCode",{parentName:"p"},"number"),", ",Object(a.b)("inlineCode",{parentName:"p"},"password"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"tel"),"\ntypes at your disposal. A properly chosen input type is especially important\nfor touch users as it triggers an appropriate virtual keyboard, so it helps\nspeed up the completion of the field.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Beware of the ",Object(a.b)("inlineCode",{parentName:"strong"},"number")," input type:")," it may not be always what you want.\nNot all number-like values are actually numbers, eg. phone numbers, credit\ncard numbers, or business IDs. In such cases use the most appropriate input\ntype (probably ",Object(a.b)("inlineCode",{parentName:"p"},"text")," or ",Object(a.b)("inlineCode",{parentName:"p"},"tel"),") along with the\n",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern"},Object(a.b)("inlineCode",{parentName:"a"},"pattern")," attribute"),"\nto improve the input experience for touch users.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Use ",Object(a.b)("strong",{parentName:"p"},"short and descriptive labels"),", ideally nouns rather than seemingly\npolite phrases like ",Object(a.b)("em",{parentName:"p"},"Please enter your first name"),". Short labels will help\nyour users accomplish their task faster.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Only make the TextField's label invisible when there is ",Object(a.b)("strong",{parentName:"p"},"another visual\nclue")," to guide users through filling the input.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"When a short label is not enough, use ",Object(a.b)("strong",{parentName:"p"},"help texts to guide users")," before\nthey enter anything.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Optionally you can ",Object(a.b)("strong",{parentName:"p"},"pre-fill your text fields with a placeholder")," to give\nusers an example of what they're expected to fill in. Just remember the\nplaceholder disappears once a value is entered so don't put anything important\nthere. Usually, en example value starting with “Eg.” works best.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Use ",Object(a.b)("strong",{parentName:"p"},"clear, calm error messages")," when there's a problem with what they\nentered. Be positive and focus on solutions to make the error message helpful.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"When asking users for their contact information or other personal information,\nmake use of the\n",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete"},Object(a.b)("inlineCode",{parentName:"a"},"autocomplete")," attribute"),"\nto help them fill the form faster."))),Object(a.b)("h2",{id:"design-variants"},"Design Variants"),Object(a.b)("p",null,"To satisfy the design requirements of your project, all input fields in React UI\ncome in ",Object(a.b)("strong",{parentName:"p"},"two design variants")," to choose from: outline and filled. Both can be\nfurther ",Object(a.b)("a",{parentName:"p",href:"#theming"},"customized")," with CSS custom properties."),Object(a.b)(d.c,{__position:1,__code:'<TextField id="my-text-field-outline" label="First name" />\n<TextField id="my-text-field-filled" label="First name" variant="filled" />',__scope:{props:l,DefaultLayout:o.a,Playground:d.c,Props:d.d,TextField:r.a,DefaultLayout:o.a,_frontmatter:p},mdxType:"Playground"},Object(a.b)(r.a,{id:"my-text-field-outline",label:"First name",mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-filled",label:"First name",variant:"filled",mdxType:"TextField"})),Object(a.b)("h2",{id:"sizes"},"Sizes"),Object(a.b)("p",null,"Aside from the default (medium) size, two additional sizes are available: small\nand large."),Object(a.b)(d.c,{__position:2,__code:'<TextField id="my-text-field-outline-small" label="First name" size="small" />\n<TextField id="my-text-field-outline-medium" label="First name" />\n<TextField id="my-text-field-outline-large" label="First name" size="large" />\n<TextField\n  id="my-text-field-filled-small"\n  label="First name"\n  size="small"\n  variant="filled"\n/>\n<TextField\n  id="my-text-field-filled-medium"\n  label="First name"\n  variant="filled"\n/>\n<TextField\n  id="my-text-field-filled-large"\n  label="First name"\n  size="large"\n  variant="filled"\n/>',__scope:{props:l,DefaultLayout:o.a,Playground:d.c,Props:d.d,TextField:r.a,DefaultLayout:o.a,_frontmatter:p},mdxType:"Playground"},Object(a.b)(r.a,{id:"my-text-field-outline-small",label:"First name",size:"small",mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-outline-medium",label:"First name",mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-outline-large",label:"First name",size:"large",mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-filled-small",label:"First name",size:"small",variant:"filled",mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-filled-medium",label:"First name",variant:"filled",mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-filled-large",label:"First name",size:"large",variant:"filled",mdxType:"TextField"})),Object(a.b)("p",null,"Full-width fields span the full width of a parent:"),Object(a.b)(d.c,{__position:3,__code:'<TextField\n  id="my-text-field-outline-full-width"\n  label="First name"\n  fullWidth\n/>\n<TextField\n  id="my-text-field-filled-full-width"\n  label="First name"\n  variant="filled"\n  fullWidth\n/>',__scope:{props:l,DefaultLayout:o.a,Playground:d.c,Props:d.d,TextField:r.a,DefaultLayout:o.a,_frontmatter:p},mdxType:"Playground"},Object(a.b)(r.a,{id:"my-text-field-outline-full-width",label:"First name",fullWidth:!0,mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-filled-full-width",label:"First name",variant:"filled",fullWidth:!0,mdxType:"TextField"})),Object(a.b)("h2",{id:"input-types"},"Input Types"),Object(a.b)("p",null,"Aside from the common ",Object(a.b)("inlineCode",{parentName:"p"},"text")," type, there are also ",Object(a.b)("inlineCode",{parentName:"p"},"email"),", ",Object(a.b)("inlineCode",{parentName:"p"},"number"),", ",Object(a.b)("inlineCode",{parentName:"p"},"password"),",\nand ",Object(a.b)("inlineCode",{parentName:"p"},"tel")," types at your disposal."),Object(a.b)(d.c,{__position:4,__code:'<TextField\n  id="my-text-field-outline-input-type-email"\n  label="Email"\n  type="email"\n/>\n<TextField\n  id="my-text-field-filled-input-type-email"\n  label="Email"\n  variant="filled"\n  type="email"\n/>\n<TextField\n  id="my-text-field-outline-input-type-number"\n  label="Age"\n  type="number"\n/>\n<TextField\n  id="my-text-field-filled-input-type-number"\n  label="Age"\n  variant="filled"\n  type="number"\n/>\n<TextField\n  id="my-text-field-outline-input-type-password"\n  label="Password"\n  type="password"\n/>\n<TextField\n  id="my-text-field-filled-input-type-password"\n  label="Password"\n  variant="filled"\n  type="password"\n/>\n<TextField\n  id="my-text-field-outline-input-type-tel"\n  label="Phone"\n  type="tel"\n/>\n<TextField\n  id="my-text-field-filled-input-type-tel"\n  label="Phone"\n  variant="filled"\n  type="tel"\n/>',__scope:{props:l,DefaultLayout:o.a,Playground:d.c,Props:d.d,TextField:r.a,DefaultLayout:o.a,_frontmatter:p},mdxType:"Playground"},Object(a.b)(r.a,{id:"my-text-field-outline-input-type-email",label:"Email",type:"email",mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-filled-input-type-email",label:"Email",variant:"filled",type:"email",mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-outline-input-type-number",label:"Age",type:"number",mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-filled-input-type-number",label:"Age",variant:"filled",type:"number",mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-outline-input-type-password",label:"Password",type:"password",mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-filled-input-type-password",label:"Password",variant:"filled",type:"password",mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-outline-input-type-tel",label:"Phone",type:"tel",mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-filled-input-type-tel",label:"Phone",variant:"filled",type:"tel",mdxType:"TextField"})),Object(a.b)("h2",{id:"input-size"},"Input Size"),Object(a.b)("p",null,"The default width of all inputs is 240 px, and it can be ",Object(a.b)("a",{parentName:"p",href:"#theming"},"customized"),"\nwith a CSS custom property. However, you can also ",Object(a.b)("strong",{parentName:"p"},"change the width of\nindividual text fields")," using the ",Object(a.b)("inlineCode",{parentName:"p"},"inputSize")," property. It (obviously) sets the\n",Object(a.b)("inlineCode",{parentName:"p"},"size")," attribute of the ",Object(a.b)("inlineCode",{parentName:"p"},"input")," element and is further picked up by CSS to\nnormalize rendering across browsers."),Object(a.b)("p",null,"👉 Remember that the\n",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text#size"},Object(a.b)("inlineCode",{parentName:"a"},"size")),"\nHTML attribute ",Object(a.b)("strong",{parentName:"p"},"does not limit on how many characters")," the user can enter. Use\nthe ",Object(a.b)("inlineCode",{parentName:"p"},"maxlength")," attribute to achieve that effect."),Object(a.b)("p",null,"👉 For compatibility with the HTML specification, the ",Object(a.b)("inlineCode",{parentName:"p"},"inputSize")," option (which\nis translated as ",Object(a.b)("inlineCode",{parentName:"p"},"size")," attribute of the input element) is\n",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number#Controlling_input_size"},"not available for the ",Object(a.b)("inlineCode",{parentName:"a"},"number")," input type"),".\nHowever, you can use the ",Object(a.b)("inlineCode",{parentName:"p"},"max")," attribute to determine the desired width of the\nnumber input instead."),Object(a.b)(d.c,{__position:5,__code:'<TextField\n  id="my-text-field-outline-input-size"\n  inputSize={3}\n  label="Title"\n/>\n<TextField\n  id="my-text-field-filled-input-size"\n  inputSize={3}\n  label="Title"\n  variant="filled"\n/>\n<TextField\n  id="my-text-field-outline-input-size-number"\n  label="Age"\n  min={13}\n  max={120}\n  type="number"\n/>\n<TextField\n  id="my-text-field-filled-input-size-number"\n  label="Age"\n  min={13}\n  max={120}\n  variant="filled"\n  type="number"\n/>',__scope:{props:l,DefaultLayout:o.a,Playground:d.c,Props:d.d,TextField:r.a,DefaultLayout:o.a,_frontmatter:p},mdxType:"Playground"},Object(a.b)(r.a,{id:"my-text-field-outline-input-size",inputSize:3,label:"Title",mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-filled-input-size",inputSize:3,label:"Title",variant:"filled",mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-outline-input-size-number",label:"Age",min:13,max:120,type:"number",mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-filled-input-size-number",label:"Age",min:13,max:120,variant:"filled",type:"number",mdxType:"TextField"})),Object(a.b)("h2",{id:"forwarding-html-attributes"},"Forwarding HTML Attributes"),Object(a.b)("p",null,"When you want to improve the accessibility of your text fields even further, you\ncan ",Object(a.b)("strong",{parentName:"p"},"add whatever HTML attribute you like.")," All attributes that don't\ninterfere with ",Object(a.b)("a",{parentName:"p",href:"#api"},"component's API")," are forwarded to the native HTML input."),Object(a.b)(d.c,{__position:6,__code:'<TextField\n  id="my-text-field-outline-forwarding"\n  label="Address"\n  autoComplete="street-address"\n  minLength={3}\n  maxLength={80}\n/>\n<TextField\n  id="my-text-field-filled-forwarding"\n  label="Address"\n  variant="filled"\n  autoComplete="street-address"\n  minLength={3}\n  maxLength={80}\n/>',__scope:{props:l,DefaultLayout:o.a,Playground:d.c,Props:d.d,TextField:r.a,DefaultLayout:o.a,_frontmatter:p},mdxType:"Playground"},Object(a.b)(r.a,{id:"my-text-field-outline-forwarding",label:"Address",autoComplete:"street-address",minLength:3,maxLength:80,mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-filled-forwarding",label:"Address",variant:"filled",autoComplete:"street-address",minLength:3,maxLength:80,mdxType:"TextField"})),Object(a.b)("p",null,"👉 Refer to the MDN reference for the full list of supported attributes of the\n",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text"},"text"),",\n",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email"},"email"),",\n",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number"},"number"),",\n",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel"},"tel"),", and\n",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password"},"password"),"\ninput types."),Object(a.b)("h2",{id:"invisible-label"},"Invisible Label"),Object(a.b)("p",null,"In some cases, it may be convenient to visually hide the field label. The label\nremains accessible to assistive technologies."),Object(a.b)("p",null,"While it may be acceptable for login screens with just a few fields or for other\nsimple forms, it's dangerous to hide labels from users in most cases. Keep in\nmind you should ",Object(a.b)("strong",{parentName:"p"},"provide another visual clue")," so users know what to fill into\nthe input."),Object(a.b)(d.c,{__position:7,__code:'<TextField\n  id="my-text-field-outline-hidden-label"\n  label="User name"\n  isLabelVisible={false}\n  placeholder="Eg. john@example.com"\n/>\n<TextField\n  id="my-text-field-filled-hidden-label"\n  label="User name"\n  isLabelVisible={false}\n  variant="filled"\n  placeholder="Eg. john@example.com"\n/>',__scope:{props:l,DefaultLayout:o.a,Playground:d.c,Props:d.d,TextField:r.a,DefaultLayout:o.a,_frontmatter:p},mdxType:"Playground"},Object(a.b)(r.a,{id:"my-text-field-outline-hidden-label",label:"User name",isLabelVisible:!1,placeholder:"Eg. john@example.com",mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-filled-hidden-label",label:"User name",isLabelVisible:!1,variant:"filled",placeholder:"Eg. john@example.com",mdxType:"TextField"})),Object(a.b)("h2",{id:"horizontal-layout"},"Horizontal Layout"),Object(a.b)("p",null,"The default vertical layout is very easy to use and work with. However, there\nare situations where horizontal layout suits better — and that's why React UI\nsupports this kind of layout as well."),Object(a.b)(d.c,{__position:8,__code:'<TextField\n  id="my-text-field-outline-input-size-horizontal"\n  inputSize={3}\n  label="Title"\n  layout="horizontal"\n/>\n<TextField\n  id="my-text-field-filled-input-size-horizontal"\n  inputSize={3}\n  label="Title"\n  layout="horizontal"\n  variant="filled"\n/>\n<TextField\n  id="my-text-field-outline-horizontal"\n  label="First name"\n  layout="horizontal"\n/>\n<TextField\n  id="my-text-field-filled-horizontal"\n  label="First name"\n  layout="horizontal"\n  variant="filled"\n/>\n<TextField\n  id="my-text-field-outline-horizontal-full-width"\n  label="First name"\n  layout="horizontal"\n  fullWidth\n/>\n<TextField\n  id="my-text-field-filled-horizontal-full-width"\n  label="First name"\n  layout="horizontal"\n  variant="filled"\n  fullWidth\n/>\n<TextField\n  id="my-text-field-outline-horizontal-full-width-invisible-label"\n  isLabelVisible={false}\n  label="First name"\n  layout="horizontal"\n  placeholder="First name"\n  fullWidth\n/>\n<TextField\n  id="my-text-field-filled-horizontal-full-width-invisible-label"\n  isLabelVisible={false}\n  label="First name"\n  layout="horizontal"\n  placeholder="First name"\n  variant="filled"\n  fullWidth\n/>',__scope:{props:l,DefaultLayout:o.a,Playground:d.c,Props:d.d,TextField:r.a,DefaultLayout:o.a,_frontmatter:p},mdxType:"Playground"},Object(a.b)(r.a,{id:"my-text-field-outline-input-size-horizontal",inputSize:3,label:"Title",layout:"horizontal",mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-filled-input-size-horizontal",inputSize:3,label:"Title",layout:"horizontal",variant:"filled",mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-outline-horizontal",label:"First name",layout:"horizontal",mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-filled-horizontal",label:"First name",layout:"horizontal",variant:"filled",mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-outline-horizontal-full-width",label:"First name",layout:"horizontal",fullWidth:!0,mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-filled-horizontal-full-width",label:"First name",layout:"horizontal",variant:"filled",fullWidth:!0,mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-outline-horizontal-full-width-invisible-label",isLabelVisible:!1,label:"First name",layout:"horizontal",placeholder:"First name",fullWidth:!0,mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-filled-horizontal-full-width-invisible-label",isLabelVisible:!1,label:"First name",layout:"horizontal",placeholder:"First name",variant:"filled",fullWidth:!0,mdxType:"TextField"})),Object(a.b)("h2",{id:"help-text"},"Help Text"),Object(a.b)("p",null,"You may provide an additional help text to clarify how the input should be\nfilled."),Object(a.b)(d.c,{__position:9,__code:'<TextField\n  id="my-text-field-outline-help-text"\n  label="First name"\n  helpText="Choose one or more kinds of fruit to feel happy."\n/>\n<TextField\n  id="my-text-field-filled-help-text"\n  label="First name"\n  variant="filled"\n  helpText="Choose one or more kinds of fruit to feel happy."\n/>\n<TextField\n  id="my-text-field-outline-help-text-horizontal"\n  label="First name"\n  layout="horizontal"\n  helpText="Choose one or more kinds of fruit to feel happy."\n/>\n<TextField\n  id="my-text-field-filled-help-text-horizontal"\n  label="First name"\n  layout="horizontal"\n  helpText="Choose one or more kinds of fruit to feel happy."\n  variant="filled"\n/>\n<TextField\n  id="my-text-field-outline-help-text-horizontal-full-width"\n  label="First name"\n  layout="horizontal"\n  helpText="Choose one or more kinds of fruit to feel happy."\n  fullWidth\n/>\n<TextField\n  id="my-text-field-filled-help-text-horizontal-full-width"\n  label="First name"\n  layout="horizontal"\n  variant="filled"\n  helpText="Choose one or more kinds of fruit to feel happy."\n  fullWidth\n/>',__scope:{props:l,DefaultLayout:o.a,Playground:d.c,Props:d.d,TextField:r.a,DefaultLayout:o.a,_frontmatter:p},mdxType:"Playground"},Object(a.b)(r.a,{id:"my-text-field-outline-help-text",label:"First name",helpText:"Choose one or more kinds of fruit to feel happy.",mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-filled-help-text",label:"First name",variant:"filled",helpText:"Choose one or more kinds of fruit to feel happy.",mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-outline-help-text-horizontal",label:"First name",layout:"horizontal",helpText:"Choose one or more kinds of fruit to feel happy.",mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-filled-help-text-horizontal",label:"First name",layout:"horizontal",helpText:"Choose one or more kinds of fruit to feel happy.",variant:"filled",mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-outline-help-text-horizontal-full-width",label:"First name",layout:"horizontal",helpText:"Choose one or more kinds of fruit to feel happy.",fullWidth:!0,mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-filled-help-text-horizontal-full-width",label:"First name",layout:"horizontal",variant:"filled",helpText:"Choose one or more kinds of fruit to feel happy.",fullWidth:!0,mdxType:"TextField"})),Object(a.b)("p",null,"Keep in mind that ",Object(a.b)("strong",{parentName:"p"},"long help texts don't play well with small input sizes,"),"\nespecially in a vertical layout. To fix this at least for the horizontal layout,\nthe help text expands over the full field width when the desired input width\n(based on ",Object(a.b)("inlineCode",{parentName:"p"},"inputSize")," and ",Object(a.b)("inlineCode",{parentName:"p"},"max")," options) is 10 characters or smaller."),Object(a.b)(d.c,{__position:10,__code:'<TextField\n  id="my-text-field-outline-help-text-input-size-horizontal"\n  inputSize={3}\n  label="Title"\n  layout="horizontal"\n  helpText="What academic degree do you hold?"\n/>\n<TextField\n  id="my-text-field-filled-help-text-input-size-horizontal"\n  inputSize={3}\n  label="Title"\n  layout="horizontal"\n  variant="filled"\n  helpText="What academic degree do you hold?"\n/>\n<TextField\n  id="my-text-field-outline-help-text-input-size-number-horizontal"\n  label="Age"\n  layout="horizontal"\n  min={13}\n  max={120}\n  type="number"\n  helpText="How old do you see yourself?"\n/>\n<TextField\n  id="my-text-field-filled-help-text-input-size-number-horizontal"\n  label="Age"\n  layout="horizontal"\n  min={13}\n  max={120}\n  variant="filled"\n  type="number"\n  helpText="How old do you see yourself?"\n/>',__scope:{props:l,DefaultLayout:o.a,Playground:d.c,Props:d.d,TextField:r.a,DefaultLayout:o.a,_frontmatter:p},mdxType:"Playground"},Object(a.b)(r.a,{id:"my-text-field-outline-help-text-input-size-horizontal",inputSize:3,label:"Title",layout:"horizontal",helpText:"What academic degree do you hold?",mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-filled-help-text-input-size-horizontal",inputSize:3,label:"Title",layout:"horizontal",variant:"filled",helpText:"What academic degree do you hold?",mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-outline-help-text-input-size-number-horizontal",label:"Age",layout:"horizontal",min:13,max:120,type:"number",helpText:"How old do you see yourself?",mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-filled-help-text-input-size-number-horizontal",label:"Age",layout:"horizontal",min:13,max:120,variant:"filled",type:"number",helpText:"How old do you see yourself?",mdxType:"TextField"})),Object(a.b)("h2",{id:"states"},"States"),Object(a.b)("h3",{id:"validation-states"},"Validation States"),Object(a.b)("p",null,"Validation states visually present the result of validation of the input. You\nshould always ",Object(a.b)("strong",{parentName:"p"},"provide a validation message for states other than valid")," so\nusers know what happened and what action they should take or what options they\nhave."),Object(a.b)(d.c,{__position:11,__code:'<TextField\n  id="my-text-field-outline-success"\n  label="User name"\n  validationState="valid"\n  validationText="Looks good!"\n  value="johnny1986"\n  required\n/>\n<TextField\n  id="my-text-field-outline-warning"\n  label="User name"\n  validationState="warning"\n  validationText="Account with this name already exists, pick a different one."\n  value="joe"\n  required\n/>\n<TextField\n  id="my-text-field-outline-error"\n  label="User name"\n  validationState="invalid"\n  validationText="Please enter a user name of your choice."\n  required\n/>\n<TextField\n  id="my-text-field-filled-success"\n  label="User name"\n  validationState="valid"\n  validationText="Looks good!"\n  variant="filled"\n  value="johnny1986"\n  required\n/>\n<TextField\n  id="my-text-field-filled-warning"\n  label="User name"\n  validationState="warning"\n  validationText="Account with this name already exists, pick a different one."\n  variant="filled"\n  value="joe"\n  required\n/>\n<TextField\n  id="my-text-field-filled-error"\n  label="User name"\n  validationState="invalid"\n  validationText="Please enter a user name of your choice."\n  variant="filled"\n  required\n/>',__scope:{props:l,DefaultLayout:o.a,Playground:d.c,Props:d.d,TextField:r.a,DefaultLayout:o.a,_frontmatter:p},mdxType:"Playground"},Object(a.b)(r.a,{id:"my-text-field-outline-success",label:"User name",validationState:"valid",validationText:"Looks good!",value:"johnny1986",required:!0,mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-outline-warning",label:"User name",validationState:"warning",validationText:"Account with this name already exists, pick a different one.",value:"joe",required:!0,mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-outline-error",label:"User name",validationState:"invalid",validationText:"Please enter a user name of your choice.",required:!0,mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-filled-success",label:"User name",validationState:"valid",validationText:"Looks good!",variant:"filled",value:"johnny1986",required:!0,mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-filled-warning",label:"User name",validationState:"warning",validationText:"Account with this name already exists, pick a different one.",variant:"filled",value:"joe",required:!0,mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-filled-error",label:"User name",validationState:"invalid",validationText:"Please enter a user name of your choice.",variant:"filled",required:!0,mdxType:"TextField"})),Object(a.b)("h3",{id:"disabled-state"},"Disabled State"),Object(a.b)("p",null,"It's possible to disable the whole input."),Object(a.b)(d.c,{__position:12,__code:'<TextField\n  id="my-text-field-outline-disabled"\n  label="First name"\n  value="John"\n  disabled\n/>\n<TextField\n  id="my-text-field-filled-disabled"\n  label="First name"\n  variant="filled"\n  value="John"\n  disabled\n/>',__scope:{props:l,DefaultLayout:o.a,Playground:d.c,Props:d.d,TextField:r.a,DefaultLayout:o.a,_frontmatter:p},mdxType:"Playground"},Object(a.b)(r.a,{id:"my-text-field-outline-disabled",label:"First name",value:"John",disabled:!0,mdxType:"TextField"}),Object(a.b)(r.a,{id:"my-text-field-filled-disabled",label:"First name",variant:"filled",value:"John",disabled:!0,mdxType:"TextField"})),Object(a.b)("h2",{id:"api"},"API"),Object(a.b)("p",null,"In addition to the options below, you can add any custom attributes that do not\ninterfere with the API, and they will be passed to the ",Object(a.b)("inlineCode",{parentName:"p"},"input")," HTML element.\nThis is useful mainly to improve component's\n",Object(a.b)("a",{parentName:"p",href:"#forwarding-html-attributes"},"accessibility"),"."),Object(a.b)(d.d,{table:!0,of:r.a,mdxType:"Props"}),Object(a.b)("h2",{id:"theming"},"Theming"),Object(a.b)("p",null,"Head to ",Object(a.b)("a",{parentName:"p",href:"/customize/theming/forms"},"Forms Theming")," to see shared form theming\noptions."))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/lib/components/ui/TextField/README.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-lib-components-ui-text-field-readme-mdx-d4739b09a2a3ffe9836d.js.map