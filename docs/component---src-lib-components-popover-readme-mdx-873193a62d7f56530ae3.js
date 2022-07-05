(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{tiAa:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return f})),n.d(t,"default",(function(){return T}));var o=n("Fcif"),a=n("dV/x"),r=n("mXGw"),l=n("/FXl"),p=n("TjRS"),i=n("cHv/"),b=n("JzDW"),d=n("8nFo"),c=n("ZFoC"),s=n("s0IP"),m=n("QIWs"),u=n("bYQf"),v=n("j3Hi"),g=n("ltne"),O=n("isJs"),y=n("kakm"),j=n("nxHL");n("aD51");const P=["components"],f={};void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&!Object.prototype.hasOwnProperty.call(f,"__filemeta")&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/lib/components/Popover/README.mdx"}});const h={_frontmatter:f},N=p.a;function T(e){let{components:t}=e,n=Object(a.a)(e,P);return Object(l.b)(N,Object(o.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"popover"},"Popover"),Object(l.b)("p",null,"Popover displays additional information without interrupting user flow."),Object(l.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(l.b)("p",null,"To implement the Popover component, you need to import it first:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"import { Popover, PopoverWrapper } from '@react-ui-org/react-ui';\n")),Object(l.b)("p",null,"And use it:"),Object(l.b)(c.c,{__position:0,__code:"() => {\n  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false)\n  // All inline styles in this example are for demonstration purposes only.\n  return (\n    <div\n      style={{\n        display: 'grid',\n        placeContent: 'center',\n        minWidth: '20rem',\n        minHeight: '10rem',\n      }}\n    >\n      <PopoverWrapper>\n        <Button\n          aria-describedby={isPopoverOpen ? 'my-popover' : undefined}\n          label=\"Want to see a popover? Click me!\"\n          onClick={() => setIsPopoverOpen(!isPopoverOpen)}\n        />\n        {isPopoverOpen && <Popover id=\"my-popover\">Hello there!</Popover>}\n      </PopoverWrapper>\n    </div>\n  )\n}",__scope:{props:n,DefaultLayout:p.a,useFloating:i.a,autoUpdate:b.a,flip:d.c,Playground:c.c,Props:c.d,Placeholder:s.a,Button:m.a,ButtonGroup:u.a,SelectField:v.a,Toolbar:g.a,ToolbarItem:O.a,Popover:y.a,PopoverWrapper:j.a,DefaultLayout:p.a,_frontmatter:f},mdxType:"Playground"},()=>{const[e,t]=r.useState(!1);return Object(l.b)("div",{style:{display:"grid",placeContent:"center",minWidth:"20rem",minHeight:"10rem"}},Object(l.b)(j.a,{mdxType:"PopoverWrapper"},Object(l.b)(m.a,{"aria-describedby":e?"my-popover":void 0,label:"Want to see a popover? Click me!",onClick:()=>t(!e),mdxType:"Button"}),e&&Object(l.b)(y.a,{id:"my-popover",mdxType:"Popover"},"Hello there!")))}),Object(l.b)("p",null,"See ",Object(l.b)("a",{parentName:"p",href:"#api"},"API")," for all available options."),Object(l.b)("h2",{id:"placement"},"Placement"),Object(l.b)("p",null,"Available placements are: top, right, bottom, and left. Additionally, all basic\nplacements can be aligned to the center (default, no suffix), start (e.g.\n",Object(l.b)("inlineCode",{parentName:"p"},"top-start"),"), or end (e.g. ",Object(l.b)("inlineCode",{parentName:"p"},"bottom-end"),"). Check Popover ",Object(l.b)("a",{parentName:"p",href:"#api"},"API")," for the\ncomplete list of accepted values."),Object(l.b)(c.c,{__position:1,__code:"() => {\n  const [align, setAlign] = React.useState('')\n  // All inline styles in this example are for demonstration purposes only.\n  return (\n    <>\n      <Toolbar align=\"baseline\">\n        <ToolbarItem>\n          <span id=\"alignment-options-label\">Alignment:</span>\n        </ToolbarItem>\n        <ToolbarItem>\n          <ButtonGroup aria-labelledby=\"alignment-options-label\">\n            <Button\n              color={align === '-start' ? 'dark' : 'primary'}\n              label=\"start\"\n              onClick={() => setAlign('-start')}\n            />\n            <Button\n              color={align === '' ? 'dark' : 'primary'}\n              label=\"center\"\n              onClick={() => setAlign('')}\n            />\n            <Button\n              color={align === '-end' ? 'dark' : 'primary'}\n              label=\"end\"\n              onClick={() => setAlign('-end')}\n            />\n          </ButtonGroup>\n        </ToolbarItem>\n      </Toolbar>\n      <div\n        style={{\n          display: 'grid',\n          placeContent: 'center',\n          minWidth: '20rem',\n          minHeight: '15rem',\n        }}\n      >\n        <PopoverWrapper>\n          <Placeholder bordered aria-describedby=\"my-popover-top\">\n            Popovers\n            <br />\n            all day long…\n          </Placeholder>\n          <Popover id=\"my-popover-top\" placement={`top${align}`}>\n            Top side\n          </Popover>\n          <Popover id=\"my-popover-right\" placement={`right${align}`}>\n            Right side\n          </Popover>\n          <Popover id=\"my-popover-bottom\" placement={`bottom${align}`}>\n            Bottom side\n          </Popover>\n          <Popover id=\"my-popover-left\" placement={`left${align}`}>\n            Left side\n          </Popover>\n        </PopoverWrapper>\n      </div>\n    </>\n  )\n}",__scope:{props:n,DefaultLayout:p.a,useFloating:i.a,autoUpdate:b.a,flip:d.c,Playground:c.c,Props:c.d,Placeholder:s.a,Button:m.a,ButtonGroup:u.a,SelectField:v.a,Toolbar:g.a,ToolbarItem:O.a,Popover:y.a,PopoverWrapper:j.a,DefaultLayout:p.a,_frontmatter:f},mdxType:"Playground"},()=>{const[e,t]=r.useState("");return Object(l.b)(r.Fragment,null,Object(l.b)(g.a,{align:"baseline",mdxType:"Toolbar"},Object(l.b)(O.a,{mdxType:"ToolbarItem"},Object(l.b)("span",{id:"alignment-options-label"},"Alignment:")),Object(l.b)(O.a,{mdxType:"ToolbarItem"},Object(l.b)(u.a,{"aria-labelledby":"alignment-options-label",mdxType:"ButtonGroup"},Object(l.b)(m.a,{color:"-start"===e?"dark":"primary",label:"start",onClick:()=>t("-start"),mdxType:"Button"}),Object(l.b)(m.a,{color:""===e?"dark":"primary",label:"center",onClick:()=>t(""),mdxType:"Button"}),Object(l.b)(m.a,{color:"-end"===e?"dark":"primary",label:"end",onClick:()=>t("-end"),mdxType:"Button"})))),Object(l.b)("div",{style:{display:"grid",placeContent:"center",minWidth:"20rem",minHeight:"15rem"}},Object(l.b)(j.a,{mdxType:"PopoverWrapper"},Object(l.b)(s.a,{bordered:!0,"aria-describedby":"my-popover-top",mdxType:"Placeholder"},"Popovers",Object(l.b)("br",null),"all day long…"),Object(l.b)(y.a,{id:"my-popover-top",placement:"top"+e,mdxType:"Popover"},"Top side"),Object(l.b)(y.a,{id:"my-popover-right",placement:"right"+e,mdxType:"Popover"},"Right side"),Object(l.b)(y.a,{id:"my-popover-bottom",placement:"bottom"+e,mdxType:"Popover"},"Bottom side"),Object(l.b)(y.a,{id:"my-popover-left",placement:"left"+e,mdxType:"Popover"},"Left side"))))}),Object(l.b)("h2",{id:"popoverwrapper"},"PopoverWrapper"),Object(l.b)("p",null,"PopoverWrapper is an optional wrapper to make positioning of Popover even\neasier."),Object(l.b)("p",null,"By default, Popover is placed relative to the closest parent element with\n",Object(l.b)("inlineCode",{parentName:"p"},"position: relative")," or ",Object(l.b)("inlineCode",{parentName:"p"},"position: absolute"),". Maybe you already have one of\nthese in your CSS. PopoverWrapper is here for situations when you don't."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<PopoverWrapper>\n  <Button\n    aria-describedby={isPopoverOpen ? \'my-popover\' : undefined}\n    label="Want to see a popover? Click me!"\n    onClick={() => setIsPopoverOpen(!isPopoverOpen)}\n  />\n  {isPopoverOpen && <Popover id="my-popover">Hello there!</Popover>}\n</PopoverWrapper>\n')),Object(l.b)("p",null,"How do you know you may need PopoverWrapper?"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"You are ",Object(l.b)("strong",{parentName:"li"},"not")," rendering Popover in a React portal."),Object(l.b)("li",{parentName:"ul"},"You are using Popover in a complex layout and it does not pop up where you\nneed it."),Object(l.b)("li",{parentName:"ul"},"You are using Floating UI with ",Object(l.b)("inlineCode",{parentName:"li"},"absolute")," positioning strategy (see\n",Object(l.b)("a",{parentName:"li",href:"#advanced-positioning"},"Advanced Positioning")," below) and your Popover keeps to\nbe misplaced."),Object(l.b)("li",{parentName:"ul"},"You have no idea what CSS ",Object(l.b)("inlineCode",{parentName:"li"},"position")," is and just want to get it working.")),Object(l.b)("p",null,"To sum it up, usually you will need either PopoverWrapper around your content or\n",Object(l.b)("inlineCode",{parentName:"p"},"position: [ relative | absolute ]")," somewhere in your CSS (but you never need\nboth!). Nevertheless, in the simplest situations, like in a single-column page\nlayout, you may not need either of these at all."),Object(l.b)("p",null,"Head to PopoverWrapper ",Object(l.b)("a",{parentName:"p",href:"#popoverwrapper-api"},"API")," for all available options."),Object(l.b)("h2",{id:"advanced-positioning"},"Advanced Positioning"),Object(l.b)("p",null,"While the basic setup can be sufficient in some scenarios, dropping a Popover\nusually won't be so easy. To handle all tricky situations and edge cases\nautomatically, including smart position updates to ensure Popover visibility,\nwe recommend to involve an external library designed specifically for this\npurpose."),Object(l.b)("p",null,"ℹ️ The following example is using external library ",Object(l.b)("a",{parentName:"p",href:"https://floating-ui.com/docs/react-dom"},"Floating UI"),". To use\nFloating UI, install it first:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"npm install --save @floating-ui/react-dom\n")),Object(l.b)("p",null,"And import it along with Popover, e.g.:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"import {\n  useFloating,\n  autoUpdate,\n  flip,\n} from '@floating-ui/react-dom';\nimport { Popover } from '@react-ui-org/react-ui';\n")),Object(l.b)("p",null,"As opposed to the ",Object(l.b)("a",{parentName:"p",href:"#placement"},"basic setup"),", Popover will be placed according to\nits triggering component (",Object(l.b)("inlineCode",{parentName:"p"},"reference"),"), but still recognizing the closest parent\nelement with ",Object(l.b)("inlineCode",{parentName:"p"},"position: relative")," or ",Object(l.b)("inlineCode",{parentName:"p"},"position: absolute")," if there is any."),Object(l.b)("p",null,"Popover reacts on the ",Object(l.b)("inlineCode",{parentName:"p"},"forwardedRef")," option, necessary for advanced positioning:\nwhen ",Object(l.b)("inlineCode",{parentName:"p"},"forwardedRef")," is set, Popover resets its built-in positioning and relies\non provided ",Object(l.b)("inlineCode",{parentName:"p"},"style"),"."),Object(l.b)("p",null,"👉 Please consult ",Object(l.b)("a",{parentName:"p",href:"https://floating-ui.com/docs/react-dom"},"Floating UI")," documentation to understand how it works and to\nget an idea of all possible cases you may need to cover."),Object(l.b)("p",null,"🖱 Try scrolling the example to see how Popover placement is updated."),Object(l.b)(c.c,{__position:2,__code:"() => {\n  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false)\n  const [placement, setPlacement] = React.useState('top')\n  const {\n    x,\n    y,\n    reference,\n    floating,\n    placement: finalPlacement,\n    strategy,\n  } = useFloating({\n    placement,\n    middleware: [flip()],\n    whileElementsMounted: autoUpdate,\n  })\n  const placementOptions = [\n    'top',\n    'top-start',\n    'top-end',\n    'right',\n    'right-start',\n    'right-end',\n    'bottom',\n    'bottom-start',\n    'bottom-end',\n    'left',\n    'left-start',\n    'left-end',\n  ]\n  // All inline styles in this example EXCEPT Popover `style` are for\n  // demonstration purposes only.\n  return (\n    <>\n      <Toolbar>\n        <ToolbarItem>\n          <SelectField\n            label=\"Suggested placement:\"\n            onChange={e => setPlacement(e.target.value)}\n            options={placementOptions.map(el => ({\n              label: el,\n              value: el,\n            }))}\n            value={placement}\n          />\n        </ToolbarItem>\n        <ToolbarItem>\n          <div className=\"mb-2\">Final placement:</div>\n          <code>{finalPlacement}</code>\n        </ToolbarItem>\n      </Toolbar>\n      <div\n        style={{\n          width: '40rem',\n          maxWidth: '100%',\n          height: '10rem',\n          overflow: 'auto',\n        }}\n      >\n        <div\n          style={{\n            position: 'relative',\n            width: '60rem',\n            height: '20rem',\n            paddingBlock: '7rem',\n            textAlign: 'center',\n          }}\n        >\n          <Button\n            aria-describedby={\n              isPopoverOpen ? 'my-advanced-popover' : undefined\n            }\n            forwardedRef={reference}\n            label=\"Trigger Popover\"\n            onClick={() => setIsPopoverOpen(!isPopoverOpen)}\n          />\n          {isPopoverOpen && (\n            <Popover\n              forwardedRef={floating}\n              id=\"my-advanced-popover\"\n              placement={finalPlacement}\n              style={{\n                position: strategy,\n                top: y ? y : '',\n                left: x ? x : '',\n              }}\n            >\n              Auto-flipping Popover\n            </Popover>\n          )}\n        </div>\n      </div>\n    </>\n  )\n}",__scope:{props:n,DefaultLayout:p.a,useFloating:i.a,autoUpdate:b.a,flip:d.c,Playground:c.c,Props:c.d,Placeholder:s.a,Button:m.a,ButtonGroup:u.a,SelectField:v.a,Toolbar:g.a,ToolbarItem:O.a,Popover:y.a,PopoverWrapper:j.a,DefaultLayout:p.a,_frontmatter:f},mdxType:"Playground"},()=>{const[e,t]=r.useState(!1),[n,o]=r.useState("top"),{x:a,y:p,reference:c,floating:s,placement:u,strategy:j}=Object(i.a)({placement:n,middleware:[Object(d.c)()],whileElementsMounted:b.a});return Object(l.b)(r.Fragment,null,Object(l.b)(g.a,{mdxType:"Toolbar"},Object(l.b)(O.a,{mdxType:"ToolbarItem"},Object(l.b)(v.a,{label:"Suggested placement:",onChange:e=>o(e.target.value),options:["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"].map(e=>({label:e,value:e})),value:n,mdxType:"SelectField"})),Object(l.b)(O.a,{mdxType:"ToolbarItem"},Object(l.b)("div",{className:"mb-2"},"Final placement:"),Object(l.b)("code",null,u))),Object(l.b)("div",{style:{width:"40rem",maxWidth:"100%",height:"10rem",overflow:"auto"}},Object(l.b)("div",{style:{position:"relative",width:"60rem",height:"20rem",paddingBlock:"7rem",textAlign:"center"}},Object(l.b)(m.a,{"aria-describedby":e?"my-advanced-popover":void 0,forwardedRef:c,label:"Trigger Popover",onClick:()=>t(!e),mdxType:"Button"}),e&&Object(l.b)(y.a,{forwardedRef:s,id:"my-advanced-popover",placement:u,style:{position:j,top:p||"",left:a||""},mdxType:"Popover"},"Auto-flipping Popover"))))}),Object(l.b)("h2",{id:"api"},"API"),Object(l.b)(c.d,{table:!0,of:y.a,mdxType:"Props"}),Object(l.b)("h3",{id:"popoverwrapper-api"},"PopoverWrapper API"),Object(l.b)(c.d,{table:!0,of:j.a,mdxType:"Props"}),Object(l.b)("h2",{id:"theming"},"Theming"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Custom Property"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--rui-Popover__width")),Object(l.b)("td",{parentName:"tr",align:null},"Popover width")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--rui-Popover__padding")),Object(l.b)("td",{parentName:"tr",align:null},"Popover padding")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--rui-Popover__border-width")),Object(l.b)("td",{parentName:"tr",align:null},"Border width")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--rui-Popover__border-color")),Object(l.b)("td",{parentName:"tr",align:null},"Border color")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--rui-Popover__border-radius")),Object(l.b)("td",{parentName:"tr",align:null},"Corner radius")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--rui-Popover__color")),Object(l.b)("td",{parentName:"tr",align:null},"Text color")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--rui-Popover__background-color")),Object(l.b)("td",{parentName:"tr",align:null},"Background color")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--rui-Popover__box-shadow")),Object(l.b)("td",{parentName:"tr",align:null},"Popover box shadow")))))}void 0!==T&&T&&T===Object(T)&&Object.isExtensible(T)&&!Object.prototype.hasOwnProperty.call(T,"__filemeta")&&Object.defineProperty(T,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/lib/components/Popover/README.mdx"}}),T.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-lib-components-popover-readme-mdx-873193a62d7f56530ae3.js.map