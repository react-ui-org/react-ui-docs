(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{SuH1:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return b})),t.d(a,"default",(function(){return c}));var l=t("Fcif"),n=t("dV/x"),i=(t("mXGw"),t("/FXl")),r=t("TjRS"),o=t("ZFoC"),d=t("9W4D");t("aD51");const b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/lib/components/ui/TextArea/README.mdx"}});const u={_frontmatter:b},s=r.a;function c(e){let{components:a}=e,t=Object(n.a)(e,["components"]);return Object(i.b)(s,Object(l.a)({},u,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"textarea"},"TextArea"),Object(i.b)("p",null,"TextArea enables users to add longer text to a form."),Object(i.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(i.b)("p",null,"To implement the TextArea component, you need to import it first:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import { TextArea } from '@react-ui-org/react-ui';\n")),Object(i.b)("p",null,"And use it:"),Object(i.b)(o.c,{__position:0,__code:'<TextArea id="my-text-area" label="Your feedback" />',__scope:{props:t,DefaultLayout:r.a,Playground:o.c,Props:o.d,TextArea:d.a,DefaultLayout:r.a,_frontmatter:b},mdxType:"Playground"},Object(i.b)(d.a,{id:"my-text-area",label:"Your feedback",mdxType:"TextArea"})),Object(i.b)("p",null,"See ",Object(i.b)("a",{parentName:"p",href:"#api"},"API")," for all available options."),Object(i.b)("h2",{id:"general-guidelines"},"General Guidelines"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use ",Object(i.b)("strong",{parentName:"p"},"short and descriptive labels"),", ideally nouns rather than seemingly\npolite phrases like ",Object(i.b)("em",{parentName:"p"},"Please enter your message"),". Short labels will help your\nusers accomplish their task faster.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Only make the TextArea's label invisible when there is ",Object(i.b)("strong",{parentName:"p"},"another visual\nclue")," to guide users through filling the input. Using the first option as\nlabel is not recommended either — it disappears once user makes their choice.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"When a short label is not enough, use ",Object(i.b)("strong",{parentName:"p"},"help texts to guide users")," before\nthey enter anything.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Optionally you can ",Object(i.b)("strong",{parentName:"p"},"pre-fill your text fields with a placeholder")," to give\nusers an example of what they're expected to fill in. Just remember the\nplaceholder disappears once a value is entered so don't put anything important\nthere. Usually, en example value starting with “Eg.” works best.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use ",Object(i.b)("strong",{parentName:"p"},"clear, calm error messages")," when there's a problem with what they\nentered. Be positive and focus on solutions to make the error message helpful.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Ensure the height of a text area ",Object(i.b)("strong",{parentName:"p"},"fits within mobile screen sizes.")))),Object(i.b)("h2",{id:"design-variants"},"Design Variants"),Object(i.b)("p",null,"To satisfy the design requirements of your project, all input fields in React UI\ncome in ",Object(i.b)("strong",{parentName:"p"},"two design variants")," to choose from: outline and filled. Both can be\nfurther ",Object(i.b)("a",{parentName:"p",href:"#theming"},"customized")," with CSS custom properties."),Object(i.b)(o.c,{__position:1,__code:'<TextArea id="my-text-area-outline" label="Your feedback" />\n<TextArea id="my-text-area-filled" label="Your feedback" variant="filled" />',__scope:{props:t,DefaultLayout:r.a,Playground:o.c,Props:o.d,TextArea:d.a,DefaultLayout:r.a,_frontmatter:b},mdxType:"Playground"},Object(i.b)(d.a,{id:"my-text-area-outline",label:"Your feedback",mdxType:"TextArea"}),Object(i.b)(d.a,{id:"my-text-area-filled",label:"Your feedback",variant:"filled",mdxType:"TextArea"})),Object(i.b)("h2",{id:"sizes"},"Sizes"),Object(i.b)("p",null,"Aside from the default (medium) size, two additional sizes are available: small\nand large."),Object(i.b)(o.c,{__position:2,__code:'<TextArea\n  id="my-text-area-outline-small"\n  label="Your feedback"\n  size="small"\n/>\n<TextArea id="my-text-area-outline-medium" label="Your feedback" />\n<TextArea\n  id="my-text-area-outline-large"\n  label="Your feedback"\n  size="large"\n/>\n<TextArea\n  id="my-text-area-filled-small"\n  label="Your feedback"\n  size="small"\n  variant="filled"\n/>\n<TextArea\n  id="my-text-area-filled-medium"\n  label="Your feedback"\n  variant="filled"\n/>\n<TextArea\n  id="my-text-area-filled-large"\n  label="Your feedback"\n  size="large"\n  variant="filled"\n/>',__scope:{props:t,DefaultLayout:r.a,Playground:o.c,Props:o.d,TextArea:d.a,DefaultLayout:r.a,_frontmatter:b},mdxType:"Playground"},Object(i.b)(d.a,{id:"my-text-area-outline-small",label:"Your feedback",size:"small",mdxType:"TextArea"}),Object(i.b)(d.a,{id:"my-text-area-outline-medium",label:"Your feedback",mdxType:"TextArea"}),Object(i.b)(d.a,{id:"my-text-area-outline-large",label:"Your feedback",size:"large",mdxType:"TextArea"}),Object(i.b)(d.a,{id:"my-text-area-filled-small",label:"Your feedback",size:"small",variant:"filled",mdxType:"TextArea"}),Object(i.b)(d.a,{id:"my-text-area-filled-medium",label:"Your feedback",variant:"filled",mdxType:"TextArea"}),Object(i.b)(d.a,{id:"my-text-area-filled-large",label:"Your feedback",size:"large",variant:"filled",mdxType:"TextArea"})),Object(i.b)("p",null,"Full-width fields span the full width of a parent:"),Object(i.b)(o.c,{__position:3,__code:'<TextArea\n  id="my-text-area-outline-full-width"\n  label="Your feedback"\n  fullWidth\n/>\n<TextArea\n  id="my-text-area-filled-full-width"\n  label="Your feedback"\n  variant="filled"\n  fullWidth\n/>',__scope:{props:t,DefaultLayout:r.a,Playground:o.c,Props:o.d,TextArea:d.a,DefaultLayout:r.a,_frontmatter:b},mdxType:"Playground"},Object(i.b)(d.a,{id:"my-text-area-outline-full-width",label:"Your feedback",fullWidth:!0,mdxType:"TextArea"}),Object(i.b)(d.a,{id:"my-text-area-filled-full-width",label:"Your feedback",variant:"filled",fullWidth:!0,mdxType:"TextArea"})),Object(i.b)("h2",{id:"input-size"},"Input Size"),Object(i.b)("p",null,"The default width of all inputs is 240 px, and it can be\n",Object(i.b)("a",{parentName:"p",href:"/customize/theming/overview"},"customized")," with a CSS custom property. However, you\ncan also ",Object(i.b)("strong",{parentName:"p"},"control the size of individual text areas")," using the ",Object(i.b)("inlineCode",{parentName:"p"},"rows")," and\n",Object(i.b)("inlineCode",{parentName:"p"},"cols")," properties. Additionally, text areas are vertically resizable by users."),Object(i.b)("p",null,"👉 Remember that the ",Object(i.b)("inlineCode",{parentName:"p"},"cols")," and ",Object(i.b)("inlineCode",{parentName:"p"},"rows")," HTML attributes ",Object(i.b)("strong",{parentName:"p"},"do not limit on how\nmany characters")," the user can enter. Use the\n",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#Min_and_max_length"},Object(i.b)("inlineCode",{parentName:"a"},"maxlength")," attribute"),"\nto achieve that effect."),Object(i.b)(o.c,{__position:4,__code:'<TextArea\n  id="my-text-area-outline-input-size"\n  label="Your feedback"\n  cols={50}\n  rows={6}\n/>\n<TextArea\n  id="my-text-area-filled-input-size"\n  label="Your feedback"\n  variant="filled"\n  cols={50}\n  rows={6}\n/>',__scope:{props:t,DefaultLayout:r.a,Playground:o.c,Props:o.d,TextArea:d.a,DefaultLayout:r.a,_frontmatter:b},mdxType:"Playground"},Object(i.b)(d.a,{id:"my-text-area-outline-input-size",label:"Your feedback",cols:50,rows:6,mdxType:"TextArea"}),Object(i.b)(d.a,{id:"my-text-area-filled-input-size",label:"Your feedback",variant:"filled",cols:50,rows:6,mdxType:"TextArea"})),Object(i.b)("h2",{id:"forwarding-html-attributes"},"Forwarding HTML Attributes"),Object(i.b)("p",null,"When you want to improve the accessibility of your text fields even further, you\ncan ",Object(i.b)("strong",{parentName:"p"},"add whatever HTML attribute you like.")," All attributes that don't\ninterfere with ",Object(i.b)("a",{parentName:"p",href:"#api"},"component's API")," are forwarded to the native HTML input."),Object(i.b)(o.c,{__position:5,__code:'<TextArea\n  id="my-text-area-outline-forwarding"\n  label="Address"\n  autoComplete="street-address"\n  minLength={3}\n  maxLength={80}\n/>\n<TextArea\n  id="my-text-area-filled-forwarding"\n  label="Address"\n  variant="filled"\n  autoComplete="street-address"\n  minLength={3}\n  maxLength={80}\n/>',__scope:{props:t,DefaultLayout:r.a,Playground:o.c,Props:o.d,TextArea:d.a,DefaultLayout:r.a,_frontmatter:b},mdxType:"Playground"},Object(i.b)(d.a,{id:"my-text-area-outline-forwarding",label:"Address",autoComplete:"street-address",minLength:3,maxLength:80,mdxType:"TextArea"}),Object(i.b)(d.a,{id:"my-text-area-filled-forwarding",label:"Address",variant:"filled",autoComplete:"street-address",minLength:3,maxLength:80,mdxType:"TextArea"})),Object(i.b)("p",null,"👉 Refer to the MDN reference for the full list of\n",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#Attributes"},"supported attributes"),"."),Object(i.b)("h2",{id:"invisible-label"},"Invisible Label"),Object(i.b)("p",null,"In some cases, it may be convenient to visually hide the field label. The label\nremains accessible to assistive technologies."),Object(i.b)("p",null,"While it may be acceptable for login screens with just a few fields or other\nsimple forms, it's dangerous to hide labels from users in most cases. Keep in\nmind you should ",Object(i.b)("strong",{parentName:"p"},"provide another visual clue")," so users know what to fill into\nthe input."),Object(i.b)(o.c,{__position:6,__code:'<TextArea\n  id="my-text-area-outline-hidden-label"\n  label="Feedback"\n  isLabelVisible={false}\n  placeholder="Eg. What I liked the best was…"\n/>\n<TextArea\n  id="my-text-area-filled-hidden-label"\n  label="Feedback"\n  isLabelVisible={false}\n  variant="filled"\n  placeholder="Eg. What I liked the best was…"\n/>',__scope:{props:t,DefaultLayout:r.a,Playground:o.c,Props:o.d,TextArea:d.a,DefaultLayout:r.a,_frontmatter:b},mdxType:"Playground"},Object(i.b)(d.a,{id:"my-text-area-outline-hidden-label",label:"Feedback",isLabelVisible:!1,placeholder:"Eg. What I liked the best was…",mdxType:"TextArea"}),Object(i.b)(d.a,{id:"my-text-area-filled-hidden-label",label:"Feedback",isLabelVisible:!1,variant:"filled",placeholder:"Eg. What I liked the best was…",mdxType:"TextArea"})),Object(i.b)("h2",{id:"horizontal-layout"},"Horizontal Layout"),Object(i.b)("p",null,"The default vertical layout is very easy to use and work with. However, there\nare situations where horizontal layout suits better — and that's why React UI\nsupports this kind of layout as well."),Object(i.b)(o.c,{__position:7,__code:'<TextArea\n  id="my-text-area-outline-horizontal"\n  label="Your feedback"\n  layout="horizontal"\n/>\n<TextArea\n  id="my-text-area-filled-horizontal"\n  label="Your feedback"\n  layout="horizontal"\n  variant="filled"\n/>\n<TextArea\n  id="my-text-area-outline-horizontal-full-width"\n  label="Your feedback"\n  layout="horizontal"\n  fullWidth\n/>\n<TextArea\n  id="my-text-area-filled-horizontal-full-width"\n  label="Your feedback"\n  layout="horizontal"\n  variant="filled"\n  fullWidth\n/>\n<TextArea\n  id="my-text-area-outline-horizontal-full-width-invisible-label"\n  isLabelVisible={false}\n  label="Your feedback"\n  layout="horizontal"\n  placeholder="Your feedback"\n  fullWidth\n/>\n<TextArea\n  id="my-text-area-filled-horizontal-full-width-invisible-label"\n  isLabelVisible={false}\n  label="Your feedback"\n  layout="horizontal"\n  placeholder="Your feedback"\n  variant="filled"\n  fullWidth\n/>',__scope:{props:t,DefaultLayout:r.a,Playground:o.c,Props:o.d,TextArea:d.a,DefaultLayout:r.a,_frontmatter:b},mdxType:"Playground"},Object(i.b)(d.a,{id:"my-text-area-outline-horizontal",label:"Your feedback",layout:"horizontal",mdxType:"TextArea"}),Object(i.b)(d.a,{id:"my-text-area-filled-horizontal",label:"Your feedback",layout:"horizontal",variant:"filled",mdxType:"TextArea"}),Object(i.b)(d.a,{id:"my-text-area-outline-horizontal-full-width",label:"Your feedback",layout:"horizontal",fullWidth:!0,mdxType:"TextArea"}),Object(i.b)(d.a,{id:"my-text-area-filled-horizontal-full-width",label:"Your feedback",layout:"horizontal",variant:"filled",fullWidth:!0,mdxType:"TextArea"}),Object(i.b)(d.a,{id:"my-text-area-outline-horizontal-full-width-invisible-label",isLabelVisible:!1,label:"Your feedback",layout:"horizontal",placeholder:"Your feedback",fullWidth:!0,mdxType:"TextArea"}),Object(i.b)(d.a,{id:"my-text-area-filled-horizontal-full-width-invisible-label",isLabelVisible:!1,label:"Your feedback",layout:"horizontal",placeholder:"Your feedback",variant:"filled",fullWidth:!0,mdxType:"TextArea"})),Object(i.b)("h2",{id:"help-text"},"Help Text"),Object(i.b)("p",null,"You may provide an additional help text to clarify how the input should be\nfilled."),Object(i.b)(o.c,{__position:8,__code:'<TextArea\n  id="my-text-area-outline-help-text"\n  label="Your feedback"\n  helpText="Why would you recommend us?"\n/>\n<TextArea\n  id="my-text-area-filled-help-text"\n  label="Your feedback"\n  variant="filled"\n  helpText="Why would you recommend us?"\n/>\n<TextArea\n  id="my-text-area-outline-help-text-horizontal"\n  label="Your feedback"\n  layout="horizontal"\n  helpText="Why would you recommend us?"\n/>\n<TextArea\n  id="my-text-area-filled-help-text-horizontal"\n  label="Your feedback"\n  layout="horizontal"\n  helpText="Why would you recommend us?"\n  variant="filled"\n/>\n<TextArea\n  id="my-text-area-outline-help-text-horizontal-full-width"\n  label="Your feedback"\n  layout="horizontal"\n  helpText="Why would you recommend us?"\n  fullWidth\n/>\n<TextArea\n  id="my-text-area-filled-help-text-horizontal-full-width"\n  label="Your feedback"\n  layout="horizontal"\n  variant="filled"\n  helpText="Why would you recommend us?"\n  fullWidth\n/>',__scope:{props:t,DefaultLayout:r.a,Playground:o.c,Props:o.d,TextArea:d.a,DefaultLayout:r.a,_frontmatter:b},mdxType:"Playground"},Object(i.b)(d.a,{id:"my-text-area-outline-help-text",label:"Your feedback",helpText:"Why would you recommend us?",mdxType:"TextArea"}),Object(i.b)(d.a,{id:"my-text-area-filled-help-text",label:"Your feedback",variant:"filled",helpText:"Why would you recommend us?",mdxType:"TextArea"}),Object(i.b)(d.a,{id:"my-text-area-outline-help-text-horizontal",label:"Your feedback",layout:"horizontal",helpText:"Why would you recommend us?",mdxType:"TextArea"}),Object(i.b)(d.a,{id:"my-text-area-filled-help-text-horizontal",label:"Your feedback",layout:"horizontal",helpText:"Why would you recommend us?",variant:"filled",mdxType:"TextArea"}),Object(i.b)(d.a,{id:"my-text-area-outline-help-text-horizontal-full-width",label:"Your feedback",layout:"horizontal",helpText:"Why would you recommend us?",fullWidth:!0,mdxType:"TextArea"}),Object(i.b)(d.a,{id:"my-text-area-filled-help-text-horizontal-full-width",label:"Your feedback",layout:"horizontal",variant:"filled",helpText:"Why would you recommend us?",fullWidth:!0,mdxType:"TextArea"})),Object(i.b)("h2",{id:"states"},"States"),Object(i.b)("h3",{id:"validation-states"},"Validation States"),Object(i.b)("p",null,"Validation states visually present the result of validation of the input. You\nshould always ",Object(i.b)("strong",{parentName:"p"},"provide a help text for states other than valid")," so users know\nwhat happened and what action they should take or what options they have."),Object(i.b)(o.c,{__position:9,__code:'<TextArea\n  id="my-text-area-outline-success"\n  label="Your feedback"\n  validationState="valid"\n  validationText="Looks good!"\n  value="Like that!"\n  required\n/>\n<TextArea\n  id="my-text-area-outline-warning"\n  label="Your feedback"\n  validationState="warning"\n  validationText="The feedback should be at least 3 characters long."\n  value=".."\n  required\n/>\n<TextArea\n  id="my-text-area-outline-error"\n  label="Your feedback"\n  validationState="invalid"\n  validationText="Please share your feedback with us."\n  required\n/>\n<TextArea\n  id="my-text-area-filled-success"\n  label="Your feedback"\n  validationState="valid"\n  validationText="Looks good!"\n  variant="filled"\n  value="Like that!"\n  required\n/>\n<TextArea\n  id="my-text-area-filled-warning"\n  label="Your feedback"\n  validationState="warning"\n  validationText="The feedback should be at least 3 characters long."\n  variant="filled"\n  value=".."\n  required\n/>\n<TextArea\n  id="my-text-area-filled-error"\n  label="Your feedback"\n  validationState="invalid"\n  validationText="Please share your feedback with us."\n  variant="filled"\n  required\n/>',__scope:{props:t,DefaultLayout:r.a,Playground:o.c,Props:o.d,TextArea:d.a,DefaultLayout:r.a,_frontmatter:b},mdxType:"Playground"},Object(i.b)(d.a,{id:"my-text-area-outline-success",label:"Your feedback",validationState:"valid",validationText:"Looks good!",value:"Like that!",required:!0,mdxType:"TextArea"}),Object(i.b)(d.a,{id:"my-text-area-outline-warning",label:"Your feedback",validationState:"warning",validationText:"The feedback should be at least 3 characters long.",value:"..",required:!0,mdxType:"TextArea"}),Object(i.b)(d.a,{id:"my-text-area-outline-error",label:"Your feedback",validationState:"invalid",validationText:"Please share your feedback with us.",required:!0,mdxType:"TextArea"}),Object(i.b)(d.a,{id:"my-text-area-filled-success",label:"Your feedback",validationState:"valid",validationText:"Looks good!",variant:"filled",value:"Like that!",required:!0,mdxType:"TextArea"}),Object(i.b)(d.a,{id:"my-text-area-filled-warning",label:"Your feedback",validationState:"warning",validationText:"The feedback should be at least 3 characters long.",variant:"filled",value:"..",required:!0,mdxType:"TextArea"}),Object(i.b)(d.a,{id:"my-text-area-filled-error",label:"Your feedback",validationState:"invalid",validationText:"Please share your feedback with us.",variant:"filled",required:!0,mdxType:"TextArea"})),Object(i.b)("h3",{id:"disabled-state"},"Disabled State"),Object(i.b)("p",null,"It's possible to disable the whole input."),Object(i.b)(o.c,{__position:10,__code:'<TextArea id="my-text-area-outline-disabled" label="Your feedback" disabled />\n<TextArea\n  id="my-text-area-filled-disabled"\n  label="Your feedback"\n  variant="filled"\n  disabled\n/>',__scope:{props:t,DefaultLayout:r.a,Playground:o.c,Props:o.d,TextArea:d.a,DefaultLayout:r.a,_frontmatter:b},mdxType:"Playground"},Object(i.b)(d.a,{id:"my-text-area-outline-disabled",label:"Your feedback",disabled:!0,mdxType:"TextArea"}),Object(i.b)(d.a,{id:"my-text-area-filled-disabled",label:"Your feedback",variant:"filled",disabled:!0,mdxType:"TextArea"})),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("p",null,"In addition to the options below, you can add any custom attributes that do not\ninterfere with the API, and they will be passed to the ",Object(i.b)("inlineCode",{parentName:"p"},"textarea")," HTML element.\nThis is useful mainly to improve component's\n",Object(i.b)("a",{parentName:"p",href:"#forwarding-html-attributes"},"accessibility"),"."),Object(i.b)(o.d,{table:!0,of:d.a,mdxType:"Props"}),Object(i.b)("h2",{id:"theming"},"Theming"),Object(i.b)("p",null,"Head to ",Object(i.b)("a",{parentName:"p",href:"/customize/theming/forms"},"Forms Theming")," to see shared form theming\noptions."))}void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/lib/components/ui/TextArea/README.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-lib-components-ui-text-area-readme-mdx-cdca19fe0ad29a49ef11.js.map