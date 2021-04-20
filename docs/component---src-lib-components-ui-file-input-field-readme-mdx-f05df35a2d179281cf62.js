(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{Z6t6:function(e,t,l){"use strict";l.r(t),l.d(t,"_frontmatter",(function(){return r})),l.d(t,"default",(function(){return b}));var i=l("Fcif"),n=l("dV/x"),a=(l("mXGw"),l("/FXl")),o=l("TjRS"),p=l("ZFoC"),d=l("ENV1");l("aD51");const r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/lib/components/ui/FileInputField/README.mdx"}});const s={_frontmatter:r},u=o.a;function b(e){let{components:t}=e,l=Object(n.a)(e,["components"]);return Object(a.b)(u,Object(i.a)({},s,l,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"fileinputfield"},"FileInputField"),Object(a.b)("p",null,"FileInputField allows users to select files to upload."),Object(a.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(a.b)("p",null,"To implement the FileInputField component, you need to import it first:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import { FileInputField } from '@react-ui-org/react-ui';\n")),Object(a.b)("p",null,"And use it:"),Object(a.b)(p.c,{__position:0,__code:'<FileInputField id="my-file-input-field" label="Attachment" />',__scope:{props:l,DefaultLayout:o.a,Playground:p.c,Props:p.d,FileInputField:d.a,DefaultLayout:o.a,_frontmatter:r},mdxType:"Playground"},Object(a.b)(d.a,{id:"my-file-input-field",label:"Attachment",mdxType:"FileInputField"})),Object(a.b)("p",null,"See ",Object(a.b)("a",{parentName:"p",href:"#api"},"API")," for all available options."),Object(a.b)("h2",{id:"general-guidelines"},"General Guidelines"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Apply ",Object(a.b)("a",{parentName:"p",href:"#forwarding-html-attributes"},"native HTML attributes")," to control ",Object(a.b)("strong",{parentName:"p"},"what\nand how many files")," users can select.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Use ",Object(a.b)("strong",{parentName:"p"},"short and descriptive labels"),", ideally nouns rather than seemingly\npolite phrases like ",Object(a.b)("em",{parentName:"p"},"Please attach your file here"),". Short labels will help\nyour users accomplish their task faster.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Only make the FileInputField's label invisible when there is ",Object(a.b)("strong",{parentName:"p"},"another visual\nclue")," to guide users through filling the input.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"When a short label is not enough, use ",Object(a.b)("strong",{parentName:"p"},"help texts to guide users")," before\nthey enter anything.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Use ",Object(a.b)("strong",{parentName:"p"},"clear, calm error messages")," when there's a problem with what they\nentered. Be positive and focus on solutions to make the error message helpful."))),Object(a.b)("p",null,"👉 FileInputField implements native HTML ",Object(a.b)("inlineCode",{parentName:"p"},'input type="file"'),". Therefore, it is\nnot possible to affect neither its translations (they depend on a browser), nor\nappearance.\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/react-ui-org/react-ui/issues/244"},"Custom translations and appearance"),"\nare considered to be implemented at some point in the future. However, from the\nlayout perspective, FileInputFields work just like any other form fields."),Object(a.b)("h2",{id:"sizes"},"Sizes"),Object(a.b)("p",null,"Full-width fields span the full width of a parent:"),Object(a.b)(p.c,{__position:1,__code:'<FileInputField\n  id="my-file-input-field-full-width"\n  fullWidth\n  label="First name"\n/>',__scope:{props:l,DefaultLayout:o.a,Playground:p.c,Props:p.d,FileInputField:d.a,DefaultLayout:o.a,_frontmatter:r},mdxType:"Playground"},Object(a.b)(d.a,{id:"my-file-input-field-full-width",fullWidth:!0,label:"First name",mdxType:"FileInputField"})),Object(a.b)("h2",{id:"forwarding-html-attributes"},"Forwarding HTML Attributes"),Object(a.b)("p",null,"When you want to refine your file input fields even further, you\ncan ",Object(a.b)("strong",{parentName:"p"},"add whatever HTML attribute you like.")," All attributes that don't\ninterfere with ",Object(a.b)("a",{parentName:"p",href:"#api"},"component's API")," are forwarded to the native HTML input."),Object(a.b)(p.c,{__position:2,__code:'<FileInputField\n  accept=".pdf,.jpg,.jpeg,.png"\n  helpText={`\n    Choose up to 10 files. Allowed extensions are .pdf, .jpg, .jpeg, or .png.\n    Size limit is 10 MB.\n  `}\n  id="my-file-input-field-forwarding"\n  label="Attachment"\n  multiple\n/>',__scope:{props:l,DefaultLayout:o.a,Playground:p.c,Props:p.d,FileInputField:d.a,DefaultLayout:o.a,_frontmatter:r},mdxType:"Playground"},Object(a.b)(d.a,{accept:".pdf,.jpg,.jpeg,.png",helpText:"\n      Choose up to 10 files. Allowed extensions are .pdf, .jpg, .jpeg, or .png.\n      Size limit is 10 MB.\n    ",id:"my-file-input-field-forwarding",label:"Attachment",multiple:!0,mdxType:"FileInputField"})),Object(a.b)("p",null,"👉 Refer to the MDN reference for the full list of supported attributes of the\n",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file"},"file input"),"\ntype."),Object(a.b)("h2",{id:"invisible-label"},"Invisible Label"),Object(a.b)("p",null,"In some cases, it may be convenient to visually hide the field label. The label\nremains accessible to assistive technologies."),Object(a.b)("p",null,"While it may be acceptable for simple forms with just a few fields, it's\ndangerous to hide labels from users in most cases. Keep in mind you should\n",Object(a.b)("strong",{parentName:"p"},"provide another visual clue")," so users know what to fill into the input."),Object(a.b)(p.c,{__position:3,__code:'<FileInputField\n  id="my-file-input-field-hidden-label"\n  isLabelVisible={false}\n  label="Attachment"\n/>',__scope:{props:l,DefaultLayout:o.a,Playground:p.c,Props:p.d,FileInputField:d.a,DefaultLayout:o.a,_frontmatter:r},mdxType:"Playground"},Object(a.b)(d.a,{id:"my-file-input-field-hidden-label",isLabelVisible:!1,label:"Attachment",mdxType:"FileInputField"})),Object(a.b)("h2",{id:"horizontal-layout"},"Horizontal Layout"),Object(a.b)("p",null,"The default vertical layout is very easy to use and work with. However, there\nare situations where horizontal layout suits better — and that's why React UI\nsupports this kind of layout as well."),Object(a.b)(p.c,{__position:4,__code:'<FileInputField\n  id="my-file-input-field-horizontal"\n  label="Attachment"\n  layout="horizontal"\n/>\n<FileInputField\n  fullWidth\n  id="my-file-input-field-horizontal-full-width-invisible-label"\n  isLabelVisible={false}\n  label="Attachment"\n  layout="horizontal"\n/>',__scope:{props:l,DefaultLayout:o.a,Playground:p.c,Props:p.d,FileInputField:d.a,DefaultLayout:o.a,_frontmatter:r},mdxType:"Playground"},Object(a.b)(d.a,{id:"my-file-input-field-horizontal",label:"Attachment",layout:"horizontal",mdxType:"FileInputField"}),Object(a.b)(d.a,{fullWidth:!0,id:"my-file-input-field-horizontal-full-width-invisible-label",isLabelVisible:!1,label:"Attachment",layout:"horizontal",mdxType:"FileInputField"})),Object(a.b)("h2",{id:"help-text"},"Help Text"),Object(a.b)("p",null,"You may provide an additional help text to clarify how the input should be\nfilled."),Object(a.b)(p.c,{__position:5,__code:'<FileInputField\n  helpText="Choose one or more files to upload."\n  id="my-file-input-field-help-text"\n  label="Attachment"\n/>\n<FileInputField\n  helpText="Choose one or more files to upload."\n  id="my-file-input-field-help-text-horizontal"\n  label="Attachment"\n  layout="horizontal"\n/>\n<FileInputField\n  fullWidth\n  helpText="Choose one or more files to upload."\n  id="my-file-input-field-help-text-horizontal-full-width"\n  label="Attachment"\n  layout="horizontal"\n/>',__scope:{props:l,DefaultLayout:o.a,Playground:p.c,Props:p.d,FileInputField:d.a,DefaultLayout:o.a,_frontmatter:r},mdxType:"Playground"},Object(a.b)(d.a,{helpText:"Choose one or more files to upload.",id:"my-file-input-field-help-text",label:"Attachment",mdxType:"FileInputField"}),Object(a.b)(d.a,{helpText:"Choose one or more files to upload.",id:"my-file-input-field-help-text-horizontal",label:"Attachment",layout:"horizontal",mdxType:"FileInputField"}),Object(a.b)(d.a,{fullWidth:!0,helpText:"Choose one or more files to upload.",id:"my-file-input-field-help-text-horizontal-full-width",label:"Attachment",layout:"horizontal",mdxType:"FileInputField"})),Object(a.b)("h2",{id:"states"},"States"),Object(a.b)("h3",{id:"validation-states"},"Validation States"),Object(a.b)("p",null,"Validation states visually present the result of validation of the input. You\nshould always ",Object(a.b)("strong",{parentName:"p"},"provide a validation message for states other than valid")," so\nusers know what happened and what action they should take or what options they\nhave."),Object(a.b)(p.c,{__position:6,__code:'<FileInputField\n  id="my-file-input-field-success"\n  label="Attachment"\n  validationState="valid"\n  validationText="Looks good!"\n/>\n<FileInputField\n  id="my-file-input-field-error"\n  label="Attachment"\n  validationState="invalid"\n  validationText="Your file is too big. Please select something smaller."\n/>\n<FileInputField\n  id="my-file-input-field-filled-warning"\n  label="Attachment"\n  validationState="warning"\n  validationText={`\n    You selected more than 10 files.\n    It may take some time before we process them.\n  `}\n/>',__scope:{props:l,DefaultLayout:o.a,Playground:p.c,Props:p.d,FileInputField:d.a,DefaultLayout:o.a,_frontmatter:r},mdxType:"Playground"},Object(a.b)(d.a,{id:"my-file-input-field-success",label:"Attachment",validationState:"valid",validationText:"Looks good!",mdxType:"FileInputField"}),Object(a.b)(d.a,{id:"my-file-input-field-error",label:"Attachment",validationState:"invalid",validationText:"Your file is too big. Please select something smaller.",mdxType:"FileInputField"}),Object(a.b)(d.a,{id:"my-file-input-field-filled-warning",label:"Attachment",validationState:"warning",validationText:"\n      You selected more than 10 files.\n      It may take some time before we process them.\n    ",mdxType:"FileInputField"})),Object(a.b)("h3",{id:"disabled-state"},"Disabled State"),Object(a.b)("p",null,"It's possible to disable the whole input."),Object(a.b)(p.c,{__position:7,__code:'<FileInputField\n  disabled\n  id="my-file-input-field-disabled"\n  label="Attachment"\n/>',__scope:{props:l,DefaultLayout:o.a,Playground:p.c,Props:p.d,FileInputField:d.a,DefaultLayout:o.a,_frontmatter:r},mdxType:"Playground"},Object(a.b)(d.a,{disabled:!0,id:"my-file-input-field-disabled",label:"Attachment",mdxType:"FileInputField"})),Object(a.b)("h2",{id:"api"},"API"),Object(a.b)("p",null,"In addition to the options below, you can add any custom attributes that do not\ninterfere with the API, and they will be passed to the ",Object(a.b)("inlineCode",{parentName:"p"},"input")," HTML element.\nThis is useful mainly to improve component's\n",Object(a.b)("a",{parentName:"p",href:"#forwarding-html-attributes"},"accessibility"),"."),Object(a.b)(p.d,{table:!0,of:d.a,mdxType:"Props"}),Object(a.b)("h2",{id:"theming"},"Theming"),Object(a.b)("p",null,"Head to ",Object(a.b)("a",{parentName:"p",href:"/customize/theming/forms"},"Forms Theming")," to see shared form theming\noptions."))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/lib/components/ui/FileInputField/README.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-lib-components-ui-file-input-field-readme-mdx-f05df35a2d179281cf62.js.map