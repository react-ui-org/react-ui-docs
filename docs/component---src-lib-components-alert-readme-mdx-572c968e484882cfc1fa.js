(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{SeU4:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return d})),n.d(t,"default",(function(){return g}));var o=n("Fcif"),a=n("dV/x"),r=n("mXGw"),l=n("/FXl"),c=n("TjRS"),s=n("ZFoC"),i=n("R5VZ"),b=n("hK9s"),u=n("nBnF");n("aD51");const p=["components"],d={};void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!Object.prototype.hasOwnProperty.call(d,"__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/lib/components/Alert/README.mdx"}});const m={_frontmatter:d},O=c.a;function g(e){let{components:t}=e,n=Object(a.a)(e,p);return Object(l.b)(O,Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"alert"},"Alert"),Object(l.b)("p",null,"Alert presents feedback or important information to users."),Object(l.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(l.b)("p",null,"To implement the Alert component, you need to import it first:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"import { Alert } from '@react-ui-org/react-ui';\n")),Object(l.b)("p",null,"And use it:"),Object(l.b)(s.c,{__position:0,__code:"<Alert>\n  <strong>Hello!</strong> This is an alert.\n</Alert>",__scope:{props:n,DefaultLayout:c.a,Playground:s.c,Props:s.d,Icon:i.a,Placeholder:b.a,Button:u.c,Alert:u.a,DefaultLayout:c.a,_frontmatter:d},mdxType:"Playground"},Object(l.b)(u.a,{mdxType:"Alert"},Object(l.b)("strong",null,"Hello!")," This is an alert.")),Object(l.b)("p",null,"See ",Object(l.b)("a",{parentName:"p",href:"#api"},"API")," for all available options."),Object(l.b)("h2",{id:"general-guidelines"},"General Guidelines"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Be simple and short")," and explain to users why you are interrupting them\nwith an alert. Clearly say what happened or what is going to happen. Provide a\nbrief title when the message is too long.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Use icons")," to improve the accessibility of alerts because color may not be\nenough for everyone. ",Object(l.b)("a",{parentName:"p",href:"#alerts-with-icons"},"See how"),"."))),Object(l.b)("h2",{id:"color-variants"},"Color Variants"),Object(l.b)("p",null,"All ",Object(l.b)("a",{parentName:"p",href:"/foundation/colors#component-colors"},"component colors")," are supported by\nalert to cover all possible needs of your project."),Object(l.b)("h3",{id:"primary"},"Primary"),Object(l.b)("p",null,"Primary alert uses brand primary color."),Object(l.b)(s.c,{__position:1,__code:'<Alert color="primary">\n  <strong>Primary:</strong> This is a primary alert.\n</Alert>',__scope:{props:n,DefaultLayout:c.a,Playground:s.c,Props:s.d,Icon:i.a,Placeholder:b.a,Button:u.c,Alert:u.a,DefaultLayout:c.a,_frontmatter:d},mdxType:"Playground"},Object(l.b)(u.a,{color:"primary",mdxType:"Alert"},Object(l.b)("strong",null,"Primary:")," This is a primary alert.")),Object(l.b)("h3",{id:"secondary"},"Secondary"),Object(l.b)("p",null,"Secondary alert uses brand secondary color."),Object(l.b)(s.c,{__position:2,__code:'<Alert color="secondary">\n  <strong>Secondary:</strong> This is a secondary alert.\n</Alert>',__scope:{props:n,DefaultLayout:c.a,Playground:s.c,Props:s.d,Icon:i.a,Placeholder:b.a,Button:u.c,Alert:u.a,DefaultLayout:c.a,_frontmatter:d},mdxType:"Playground"},Object(l.b)(u.a,{color:"secondary",mdxType:"Alert"},Object(l.b)("strong",null,"Secondary:")," This is a secondary alert.")),Object(l.b)("h3",{id:"success"},"Success"),Object(l.b)("p",null,"Success alerts confirm that an operation has been processed successfully."),Object(l.b)(s.c,{__position:3,__code:'<Alert color="success">\n  <strong>Success:</strong> Settings have been successfully saved.\n</Alert>',__scope:{props:n,DefaultLayout:c.a,Playground:s.c,Props:s.d,Icon:i.a,Placeholder:b.a,Button:u.c,Alert:u.a,DefaultLayout:c.a,_frontmatter:d},mdxType:"Playground"},Object(l.b)(u.a,{color:"success",mdxType:"Alert"},Object(l.b)("strong",null,"Success:")," Settings have been successfully saved.")),Object(l.b)("h3",{id:"warning"},"Warning"),Object(l.b)("p",null,"Use warning alerts when a potentially unfavourable situation may occur. You may\nsuggest an action to resolve the problem."),Object(l.b)(s.c,{__position:4,__code:'<Alert color="warning">\n  <strong>Warning:</strong> Your credit card is going to expire soon.{\' \'}\n  <a href="/">Update my payment options</a>\n</Alert>',__scope:{props:n,DefaultLayout:c.a,Playground:s.c,Props:s.d,Icon:i.a,Placeholder:b.a,Button:u.c,Alert:u.a,DefaultLayout:c.a,_frontmatter:d},mdxType:"Playground"},Object(l.b)(u.a,{color:"warning",mdxType:"Alert"},Object(l.b)("strong",null,"Warning:")," Your credit card is going to expire soon."," ",Object(l.b)("a",{href:"/"},"Update my payment options"))),Object(l.b)("h3",{id:"danger"},"Danger"),Object(l.b)("p",null,"Danger alerts say there is something that block users from continuing that\nrequires their immediate attention. The alert should offer a solution to the\nproblem."),Object(l.b)(s.c,{__position:5,__code:'<Alert color="danger">\n  <strong>Error:</strong> Cannot connect to the server. Is your internet\n  connection working fine? <a href="/">Try again</a>\n</Alert>',__scope:{props:n,DefaultLayout:c.a,Playground:s.c,Props:s.d,Icon:i.a,Placeholder:b.a,Button:u.c,Alert:u.a,DefaultLayout:c.a,_frontmatter:d},mdxType:"Playground"},Object(l.b)(u.a,{color:"danger",mdxType:"Alert"},Object(l.b)("strong",null,"Error:")," Cannot connect to the server. Is your internet connection working fine?"," ",Object(l.b)("a",{href:"/"},"Try again"))),Object(l.b)("h3",{id:"help"},"Help"),Object(l.b)("p",null,"This kind of alert can be used to display helpful information."),Object(l.b)(s.c,{__position:6,__code:'<Alert color="help">\n  <strong>Help:</strong> You should choose a password you don&apos;t use\n  anywhere else.\n</Alert>',__scope:{props:n,DefaultLayout:c.a,Playground:s.c,Props:s.d,Icon:i.a,Placeholder:b.a,Button:u.c,Alert:u.a,DefaultLayout:c.a,_frontmatter:d},mdxType:"Playground"},Object(l.b)(u.a,{color:"help",mdxType:"Alert"},Object(l.b)("strong",null,"Help:")," You should choose a password you don't use anywhere else.")),Object(l.b)("h3",{id:"info"},"Info"),Object(l.b)("p",null,"Another common, informative alert."),Object(l.b)(s.c,{__position:7,__code:'<Alert color="info">\n  <strong>Info:</strong> This feature depends on user&apos;s OS preferences.\n</Alert>',__scope:{props:n,DefaultLayout:c.a,Playground:s.c,Props:s.d,Icon:i.a,Placeholder:b.a,Button:u.c,Alert:u.a,DefaultLayout:c.a,_frontmatter:d},mdxType:"Playground"},Object(l.b)(u.a,{color:"info",mdxType:"Alert"},Object(l.b)("strong",null,"Info:")," This feature depends on user's OS preferences.")),Object(l.b)("h3",{id:"note-default"},"Note (Default)"),Object(l.b)("p",null,"Neutral informative alert."),Object(l.b)(s.c,{__position:8,__code:"<Alert>\n  <strong>Note:</strong> This feature may not be available in all regions.\n</Alert>",__scope:{props:n,DefaultLayout:c.a,Playground:s.c,Props:s.d,Icon:i.a,Placeholder:b.a,Button:u.c,Alert:u.a,DefaultLayout:c.a,_frontmatter:d},mdxType:"Playground"},Object(l.b)(u.a,{mdxType:"Alert"},Object(l.b)("strong",null,"Note:")," This feature may not be available in all regions.")),Object(l.b)("h3",{id:"light"},"Light"),Object(l.b)("p",null,"Light alert variant."),Object(l.b)(s.c,{__position:9,__code:'<Placeholder dark>\n  <Alert color="light">\n    <strong>Light alert:</strong> Stands out on dark backgrounds.\n  </Alert>\n</Placeholder>',__scope:{props:n,DefaultLayout:c.a,Playground:s.c,Props:s.d,Icon:i.a,Placeholder:b.a,Button:u.c,Alert:u.a,DefaultLayout:c.a,_frontmatter:d},mdxType:"Playground"},Object(l.b)(b.a,{dark:!0,mdxType:"Placeholder"},Object(l.b)(u.a,{color:"light",mdxType:"Alert"},Object(l.b)("strong",null,"Light alert:")," Stands out on dark backgrounds."))),Object(l.b)("h3",{id:"dark"},"Dark"),Object(l.b)("p",null,"Dark alert variant."),Object(l.b)(s.c,{__position:10,__code:'<Alert color="dark">\n  <strong>Dark alert:</strong> Stands out on light backgrounds.\n</Alert>',__scope:{props:n,DefaultLayout:c.a,Playground:s.c,Props:s.d,Icon:i.a,Placeholder:b.a,Button:u.c,Alert:u.a,DefaultLayout:c.a,_frontmatter:d},mdxType:"Playground"},Object(l.b)(u.a,{color:"dark",mdxType:"Alert"},Object(l.b)("strong",null,"Dark alert:")," Stands out on light backgrounds.")),Object(l.b)("h2",{id:"alerts-with-icons"},"Alerts with Icons"),Object(l.b)("p",null,"An icon can (and should) accompany the message."),Object(l.b)("p",null,"👉 Please note there are no icons pre-packed in React UI. Visit\n",Object(l.b)("a",{parentName:"p",href:"/foundation/icons"},"Icons")," to see how it works."),Object(l.b)(s.c,{__position:11,__code:'<Alert color="success" icon={<Icon icon="success" />}>\n  <strong>Success:</strong> Settings have been successfully saved.\n</Alert>',__scope:{props:n,DefaultLayout:c.a,Playground:s.c,Props:s.d,Icon:i.a,Placeholder:b.a,Button:u.c,Alert:u.a,DefaultLayout:c.a,_frontmatter:d},mdxType:"Playground"},Object(l.b)(u.a,{color:"success",icon:Object(l.b)(i.a,{icon:"success",mdxType:"Icon"}),mdxType:"Alert"},Object(l.b)("strong",null,"Success:")," Settings have been successfully saved.")),Object(l.b)("h2",{id:"dismissible-alerts"},"Dismissible Alerts"),Object(l.b)("p",null,"You can make an alert dismissible by providing a function that closes it on\nclick on the close button:"),Object(l.b)(s.c,{__position:12,__code:'() => {\n  const [isAlertVisible, setIsAlertVisible] = React.useState(true)\n  return (\n    <>\n      {isAlertVisible ? (\n        <Alert\n          color="success"\n          icon={<Icon icon="success" />}\n          onClose={() => setIsAlertVisible(false)}\n        >\n          <strong>Success:</strong> Settings have been successfully saved.\n        </Alert>\n      ) : (\n        <Button\n          label="Bring the alert back!"\n          onClick={() => setIsAlertVisible(true)}\n        />\n      )}\n    </>\n  )\n}',__scope:{props:n,DefaultLayout:c.a,Playground:s.c,Props:s.d,Icon:i.a,Placeholder:b.a,Button:u.c,Alert:u.a,DefaultLayout:c.a,_frontmatter:d},mdxType:"Playground"},()=>{const[e,t]=r.useState(!0);return Object(l.b)(r.Fragment,null,e?Object(l.b)(u.a,{color:"success",icon:Object(l.b)(i.a,{icon:"success",mdxType:"Icon"}),onClose:()=>t(!1),mdxType:"Alert"},Object(l.b)("strong",null,"Success:")," Settings have been successfully saved."):Object(l.b)(u.c,{label:"Bring the alert back!",onClick:()=>t(!0),mdxType:"Button"}))}),Object(l.b)("h2",{id:"api"},"API"),Object(l.b)(s.d,{table:!0,of:u.a,mdxType:"Props"}),Object(l.b)("h2",{id:"theming"},"Theming"),Object(l.b)("h3",{id:"common-theming-options"},"Common Theming Options"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Custom Property"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--rui-Alert__padding")),Object(l.b)("td",{parentName:"tr",align:null},"Padding between border and message")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--rui-Alert__font-weight")),Object(l.b)("td",{parentName:"tr",align:null},"Message font weight")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--rui-Alert__border-width")),Object(l.b)("td",{parentName:"tr",align:null},"Border width")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--rui-Alert__border-radius")),Object(l.b)("td",{parentName:"tr",align:null},"Corner radius")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--rui-Alert__emphasis__font-weight")),Object(l.b)("td",{parentName:"tr",align:null},"Font weight of text emphasised with ",Object(l.b)("inlineCode",{parentName:"td"},"<strong>"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--rui-Alert__stripe__width")),Object(l.b)("td",{parentName:"tr",align:null},"Width of the border at the start of the Alert")))),Object(l.b)("h3",{id:"theming-variants"},"Theming Variants"),Object(l.b)("p",null,"It's possible to adjust the theme of specific alert color variant. Naming\nconvention looks as follows:"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"--rui-Alert--<COLOR>__<PROPERTY>")),Object(l.b)("p",null,"Where:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<COLOR>")," is one of supported\n",Object(l.b)("a",{parentName:"li",href:"/foundation/colors#component-colors"},"component colors"),"\n(see alert ",Object(l.b)("a",{parentName:"li",href:"#color-variants"},"color variants")," and ",Object(l.b)("a",{parentName:"li",href:"#api"},"API"),"),"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<PROPERTY>")," is one of ",Object(l.b)("inlineCode",{parentName:"li"},"color")," (color of text), ",Object(l.b)("inlineCode",{parentName:"li"},"foreground-color")," (color of\nborder, icon, links, and emphasis), or ",Object(l.b)("inlineCode",{parentName:"li"},"background-color"),".")))}void 0!==g&&g&&g===Object(g)&&Object.isExtensible(g)&&!Object.prototype.hasOwnProperty.call(g,"__filemeta")&&Object.defineProperty(g,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/lib/components/Alert/README.mdx"}}),g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-lib-components-alert-readme-mdx-572c968e484882cfc1fa.js.map