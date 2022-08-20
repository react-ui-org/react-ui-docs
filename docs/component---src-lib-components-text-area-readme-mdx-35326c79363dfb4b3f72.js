(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{vmXQ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return p}));var l=a("Fcif"),r=a("dV/x"),o=(a("mXGw"),a("/FXl")),n=a("TjRS"),i=a("ZFoC"),b=a("nBnF");a("aD51");const d=["components"],s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!Object.prototype.hasOwnProperty.call(s,"__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/lib/components/TextArea/README.mdx"}});const u={_frontmatter:s},c=n.a;function p(e){let{components:t}=e,a=Object(r.a)(e,d);return Object(o.b)(c,Object(l.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"textarea"},"TextArea"),Object(o.b)("p",null,"TextArea enables users to add longer text to a form."),Object(o.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(o.b)("p",null,"To implement the TextArea component, you need to import it first:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { TextArea } from '@react-ui-org/react-ui';\n")),Object(o.b)("p",null,"And use it:"),Object(o.b)(i.c,{__position:0,__code:'<TextArea label="Your feedback" />',__scope:{props:a,DefaultLayout:n.a,Playground:i.c,Props:i.d,TextArea:b.E,DefaultLayout:n.a,_frontmatter:s},mdxType:"Playground"},Object(o.b)(b.E,{label:"Your feedback",mdxType:"TextArea"})),Object(o.b)("p",null,"See ",Object(o.b)("a",{parentName:"p",href:"#api"},"API")," for all available options."),Object(o.b)("h2",{id:"general-guidelines"},"General Guidelines"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Use ",Object(o.b)("strong",{parentName:"p"},"short and descriptive labels"),", ideally nouns rather than seemingly\npolite phrases like ",Object(o.b)("em",{parentName:"p"},"Please enter your message"),". Short labels will help your\nusers accomplish their task faster.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Only make the TextArea's label invisible when there is ",Object(o.b)("strong",{parentName:"p"},"another visual\nclue")," to guide users through filling the input. Using the first option as\nlabel is not recommended either — it disappears once user makes their choice.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"When a short label is not enough, use ",Object(o.b)("strong",{parentName:"p"},"help texts to guide users")," before\nthey enter anything.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Optionally you can ",Object(o.b)("strong",{parentName:"p"},"pre-fill your text fields with a placeholder")," to give\nusers an example of what they're expected to fill in. Just remember the\nplaceholder disappears once a value is entered so don't put anything important\nthere. Usually, en example value starting with “Eg.” works best.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Use ",Object(o.b)("strong",{parentName:"p"},"clear, calm error messages")," when there's a problem with what they\nentered. Be positive and focus on solutions to make the error message helpful.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Ensure the height of a text area ",Object(o.b)("strong",{parentName:"p"},"fits within mobile screen sizes.")))),Object(o.b)("h2",{id:"design-variants"},"Design Variants"),Object(o.b)("p",null,"To satisfy the design requirements of your project, all input fields in React UI\ncome in ",Object(o.b)("strong",{parentName:"p"},"two design variants")," to choose from: outline and filled. Both can be\nfurther ",Object(o.b)("a",{parentName:"p",href:"#theming"},"customized")," with CSS custom properties."),Object(o.b)(i.c,{__position:1,__code:'<TextArea label="Your feedback" />\n<TextArea label="Your feedback" variant="filled" />',__scope:{props:a,DefaultLayout:n.a,Playground:i.c,Props:i.d,TextArea:b.E,DefaultLayout:n.a,_frontmatter:s},mdxType:"Playground"},Object(o.b)(b.E,{label:"Your feedback",mdxType:"TextArea"}),Object(o.b)(b.E,{label:"Your feedback",variant:"filled",mdxType:"TextArea"})),Object(o.b)("h2",{id:"sizes"},"Sizes"),Object(o.b)("p",null,"Aside from the default (medium) size, two additional sizes are available: small\nand large."),Object(o.b)(i.c,{__position:2,__code:'<TextArea label="Your feedback" size="small" />\n<TextArea label="Your feedback" />\n<TextArea label="Your feedback" size="large" />\n<TextArea label="Your feedback" size="small" variant="filled" />\n<TextArea label="Your feedback" variant="filled" />\n<TextArea label="Your feedback" size="large" variant="filled" />',__scope:{props:a,DefaultLayout:n.a,Playground:i.c,Props:i.d,TextArea:b.E,DefaultLayout:n.a,_frontmatter:s},mdxType:"Playground"},Object(o.b)(b.E,{label:"Your feedback",size:"small",mdxType:"TextArea"}),Object(o.b)(b.E,{label:"Your feedback",mdxType:"TextArea"}),Object(o.b)(b.E,{label:"Your feedback",size:"large",mdxType:"TextArea"}),Object(o.b)(b.E,{label:"Your feedback",size:"small",variant:"filled",mdxType:"TextArea"}),Object(o.b)(b.E,{label:"Your feedback",variant:"filled",mdxType:"TextArea"}),Object(o.b)(b.E,{label:"Your feedback",size:"large",variant:"filled",mdxType:"TextArea"})),Object(o.b)("p",null,"Full-width fields span the full width of a parent:"),Object(o.b)(i.c,{__position:3,__code:'<TextArea label="Your feedback" fullWidth />\n<TextArea label="Your feedback" variant="filled" fullWidth />',__scope:{props:a,DefaultLayout:n.a,Playground:i.c,Props:i.d,TextArea:b.E,DefaultLayout:n.a,_frontmatter:s},mdxType:"Playground"},Object(o.b)(b.E,{label:"Your feedback",fullWidth:!0,mdxType:"TextArea"}),Object(o.b)(b.E,{label:"Your feedback",variant:"filled",fullWidth:!0,mdxType:"TextArea"})),Object(o.b)("h2",{id:"input-size"},"Input Size"),Object(o.b)("p",null,"The default width of all inputs is 240 px, and it can be\n",Object(o.b)("a",{parentName:"p",href:"/customize/theming/overview"},"customized")," with a CSS custom property. However, you\ncan also ",Object(o.b)("strong",{parentName:"p"},"control the size of individual text areas")," using the ",Object(o.b)("inlineCode",{parentName:"p"},"rows")," and\n",Object(o.b)("inlineCode",{parentName:"p"},"cols")," properties. Additionally, text areas are vertically resizable by users."),Object(o.b)("p",null,"👉 Remember that the ",Object(o.b)("inlineCode",{parentName:"p"},"cols")," and ",Object(o.b)("inlineCode",{parentName:"p"},"rows")," HTML attributes ",Object(o.b)("strong",{parentName:"p"},"do not limit on how\nmany characters")," the user can enter. Use the\n",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#Min_and_max_length"},Object(o.b)("inlineCode",{parentName:"a"},"maxlength")," attribute"),"\nto achieve that effect."),Object(o.b)(i.c,{__position:4,__code:'<TextArea label="Your feedback" cols={50} rows={6} />\n<TextArea label="Your feedback" variant="filled" cols={50} rows={6} />',__scope:{props:a,DefaultLayout:n.a,Playground:i.c,Props:i.d,TextArea:b.E,DefaultLayout:n.a,_frontmatter:s},mdxType:"Playground"},Object(o.b)(b.E,{label:"Your feedback",cols:50,rows:6,mdxType:"TextArea"}),Object(o.b)(b.E,{label:"Your feedback",variant:"filled",cols:50,rows:6,mdxType:"TextArea"})),Object(o.b)("h2",{id:"forwarding-html-attributes"},"Forwarding HTML Attributes"),Object(o.b)("p",null,"When you want to improve the accessibility of your text fields even further, you\ncan ",Object(o.b)("strong",{parentName:"p"},"add whatever HTML attribute you like.")," All attributes that don't\ninterfere with ",Object(o.b)("a",{parentName:"p",href:"#api"},"component's API")," are forwarded to the native HTML input."),Object(o.b)(i.c,{__position:5,__code:'<TextArea\n  label="Address"\n  autoComplete="street-address"\n  minLength={3}\n  maxLength={80}\n/>\n<TextArea\n  label="Address"\n  variant="filled"\n  autoComplete="street-address"\n  minLength={3}\n  maxLength={80}\n/>',__scope:{props:a,DefaultLayout:n.a,Playground:i.c,Props:i.d,TextArea:b.E,DefaultLayout:n.a,_frontmatter:s},mdxType:"Playground"},Object(o.b)(b.E,{label:"Address",autoComplete:"street-address",minLength:3,maxLength:80,mdxType:"TextArea"}),Object(o.b)(b.E,{label:"Address",variant:"filled",autoComplete:"street-address",minLength:3,maxLength:80,mdxType:"TextArea"})),Object(o.b)("p",null,"👉 Refer to the MDN reference for the full list of\n",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#Attributes"},"supported attributes"),"."),Object(o.b)("h2",{id:"invisible-label"},"Invisible Label"),Object(o.b)("p",null,"In some cases, it may be convenient to visually hide the field label. The label\nremains accessible to assistive technologies."),Object(o.b)("p",null,"While it may be acceptable for login screens with just a few fields or other\nsimple forms, it's dangerous to hide labels from users in most cases. Keep in\nmind you should ",Object(o.b)("strong",{parentName:"p"},"provide another visual clue")," so users know what to fill into\nthe input."),Object(o.b)(i.c,{__position:6,__code:'<TextArea\n  label="Feedback"\n  isLabelVisible={false}\n  placeholder="Eg. What I liked the best was…"\n/>\n<TextArea\n  label="Feedback"\n  isLabelVisible={false}\n  variant="filled"\n  placeholder="Eg. What I liked the best was…"\n/>',__scope:{props:a,DefaultLayout:n.a,Playground:i.c,Props:i.d,TextArea:b.E,DefaultLayout:n.a,_frontmatter:s},mdxType:"Playground"},Object(o.b)(b.E,{label:"Feedback",isLabelVisible:!1,placeholder:"Eg. What I liked the best was…",mdxType:"TextArea"}),Object(o.b)(b.E,{label:"Feedback",isLabelVisible:!1,variant:"filled",placeholder:"Eg. What I liked the best was…",mdxType:"TextArea"})),Object(o.b)("h2",{id:"horizontal-layout"},"Horizontal Layout"),Object(o.b)("p",null,"The default vertical layout is very easy to use and work with. However, there\nare situations where horizontal layout suits better — and that's why React UI\nsupports this kind of layout as well."),Object(o.b)(i.c,{__position:7,__code:'<TextArea label="Your feedback" layout="horizontal" />\n<TextArea label="Your feedback" layout="horizontal" variant="filled" />\n<TextArea label="Your feedback" layout="horizontal" fullWidth />\n<TextArea\n  label="Your feedback"\n  layout="horizontal"\n  variant="filled"\n  fullWidth\n/>\n<TextArea\n  isLabelVisible={false}\n  label="Your feedback"\n  layout="horizontal"\n  placeholder="Your feedback"\n  fullWidth\n/>\n<TextArea\n  isLabelVisible={false}\n  label="Your feedback"\n  layout="horizontal"\n  placeholder="Your feedback"\n  variant="filled"\n  fullWidth\n/>',__scope:{props:a,DefaultLayout:n.a,Playground:i.c,Props:i.d,TextArea:b.E,DefaultLayout:n.a,_frontmatter:s},mdxType:"Playground"},Object(o.b)(b.E,{label:"Your feedback",layout:"horizontal",mdxType:"TextArea"}),Object(o.b)(b.E,{label:"Your feedback",layout:"horizontal",variant:"filled",mdxType:"TextArea"}),Object(o.b)(b.E,{label:"Your feedback",layout:"horizontal",fullWidth:!0,mdxType:"TextArea"}),Object(o.b)(b.E,{label:"Your feedback",layout:"horizontal",variant:"filled",fullWidth:!0,mdxType:"TextArea"}),Object(o.b)(b.E,{isLabelVisible:!1,label:"Your feedback",layout:"horizontal",placeholder:"Your feedback",fullWidth:!0,mdxType:"TextArea"}),Object(o.b)(b.E,{isLabelVisible:!1,label:"Your feedback",layout:"horizontal",placeholder:"Your feedback",variant:"filled",fullWidth:!0,mdxType:"TextArea"})),Object(o.b)("h2",{id:"help-text"},"Help Text"),Object(o.b)("p",null,"You may provide an additional help text to clarify how the input should be\nfilled."),Object(o.b)(i.c,{__position:8,__code:'<TextArea label="Your feedback" helpText="Why would you recommend us?" />\n<TextArea\n  label="Your feedback"\n  variant="filled"\n  helpText="Why would you recommend us?"\n/>\n<TextArea\n  label="Your feedback"\n  layout="horizontal"\n  helpText="Why would you recommend us?"\n/>\n<TextArea\n  label="Your feedback"\n  layout="horizontal"\n  helpText="Why would you recommend us?"\n  variant="filled"\n/>\n<TextArea\n  label="Your feedback"\n  layout="horizontal"\n  helpText="Why would you recommend us?"\n  fullWidth\n/>\n<TextArea\n  label="Your feedback"\n  layout="horizontal"\n  variant="filled"\n  helpText="Why would you recommend us?"\n  fullWidth\n/>',__scope:{props:a,DefaultLayout:n.a,Playground:i.c,Props:i.d,TextArea:b.E,DefaultLayout:n.a,_frontmatter:s},mdxType:"Playground"},Object(o.b)(b.E,{label:"Your feedback",helpText:"Why would you recommend us?",mdxType:"TextArea"}),Object(o.b)(b.E,{label:"Your feedback",variant:"filled",helpText:"Why would you recommend us?",mdxType:"TextArea"}),Object(o.b)(b.E,{label:"Your feedback",layout:"horizontal",helpText:"Why would you recommend us?",mdxType:"TextArea"}),Object(o.b)(b.E,{label:"Your feedback",layout:"horizontal",helpText:"Why would you recommend us?",variant:"filled",mdxType:"TextArea"}),Object(o.b)(b.E,{label:"Your feedback",layout:"horizontal",helpText:"Why would you recommend us?",fullWidth:!0,mdxType:"TextArea"}),Object(o.b)(b.E,{label:"Your feedback",layout:"horizontal",variant:"filled",helpText:"Why would you recommend us?",fullWidth:!0,mdxType:"TextArea"})),Object(o.b)("h2",{id:"states"},"States"),Object(o.b)("h3",{id:"validation-states"},"Validation States"),Object(o.b)("p",null,"Validation states visually present the result of validation of the input. You\nshould always ",Object(o.b)("strong",{parentName:"p"},"provide a help text for states other than valid")," so users know\nwhat happened and what action they should take or what options they have."),Object(o.b)(i.c,{__position:9,__code:'<TextArea\n  label="Your feedback"\n  validationState="valid"\n  validationText="Looks good!"\n  value="Like that!"\n  required\n/>\n<TextArea\n  label="Your feedback"\n  validationState="warning"\n  validationText="The feedback should be at least 3 characters long."\n  value=".."\n  required\n/>\n<TextArea\n  label="Your feedback"\n  validationState="invalid"\n  validationText="Please share your feedback with us."\n  required\n/>\n<TextArea\n  label="Your feedback"\n  validationState="valid"\n  validationText="Looks good!"\n  variant="filled"\n  value="Like that!"\n  required\n/>\n<TextArea\n  label="Your feedback"\n  validationState="warning"\n  validationText="The feedback should be at least 3 characters long."\n  variant="filled"\n  value=".."\n  required\n/>\n<TextArea\n  label="Your feedback"\n  validationState="invalid"\n  validationText="Please share your feedback with us."\n  variant="filled"\n  required\n/>',__scope:{props:a,DefaultLayout:n.a,Playground:i.c,Props:i.d,TextArea:b.E,DefaultLayout:n.a,_frontmatter:s},mdxType:"Playground"},Object(o.b)(b.E,{label:"Your feedback",validationState:"valid",validationText:"Looks good!",value:"Like that!",required:!0,mdxType:"TextArea"}),Object(o.b)(b.E,{label:"Your feedback",validationState:"warning",validationText:"The feedback should be at least 3 characters long.",value:"..",required:!0,mdxType:"TextArea"}),Object(o.b)(b.E,{label:"Your feedback",validationState:"invalid",validationText:"Please share your feedback with us.",required:!0,mdxType:"TextArea"}),Object(o.b)(b.E,{label:"Your feedback",validationState:"valid",validationText:"Looks good!",variant:"filled",value:"Like that!",required:!0,mdxType:"TextArea"}),Object(o.b)(b.E,{label:"Your feedback",validationState:"warning",validationText:"The feedback should be at least 3 characters long.",variant:"filled",value:"..",required:!0,mdxType:"TextArea"}),Object(o.b)(b.E,{label:"Your feedback",validationState:"invalid",validationText:"Please share your feedback with us.",variant:"filled",required:!0,mdxType:"TextArea"})),Object(o.b)("h3",{id:"disabled-state"},"Disabled State"),Object(o.b)("p",null,"It's possible to disable the whole input."),Object(o.b)(i.c,{__position:10,__code:'<TextArea label="Your feedback" disabled />\n<TextArea label="Your feedback" variant="filled" disabled />',__scope:{props:a,DefaultLayout:n.a,Playground:i.c,Props:i.d,TextArea:b.E,DefaultLayout:n.a,_frontmatter:s},mdxType:"Playground"},Object(o.b)(b.E,{label:"Your feedback",disabled:!0,mdxType:"TextArea"}),Object(o.b)(b.E,{label:"Your feedback",variant:"filled",disabled:!0,mdxType:"TextArea"})),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("p",null,"In addition to the options below, you can specify ",Object(o.b)("a",{parentName:"p",href:"https://reactjs.org/docs/events.html"},"React synthetic events")," or\nany custom HTML attributes that do not interfere with the API, and they will be\npassed to the ",Object(o.b)("inlineCode",{parentName:"p"},"<textarea>")," HTML element. This enables making the component\ninteractive and helps improve its ",Object(o.b)("a",{parentName:"p",href:"#forwarding-html-attributes"},"accessibility"),"."),Object(o.b)(i.d,{table:!0,of:b.E,mdxType:"Props"}),Object(o.b)("h2",{id:"theming"},"Theming"),Object(o.b)("p",null,"Head to ",Object(o.b)("a",{parentName:"p",href:"/customize/theming/forms"},"Forms Theming")," to see shared form theming\noptions."))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!Object.prototype.hasOwnProperty.call(p,"__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/lib/components/TextArea/README.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-lib-components-text-area-readme-mdx-35326c79363dfb4b3f72.js.map