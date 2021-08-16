(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{A2UN:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return d})),n.d(t,"default",(function(){return m}));var a=n("Fcif"),l=n("dV/x"),o=n("mXGw"),i=n("/FXl"),r=n("TjRS"),u=n("ZFoC"),s=n("IICW"),c=n("o9kk");n("aD51");const d={};void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/lib/components/ui/Modal/README.mdx"}});const b={_frontmatter:d},p=r.a;function m(e){let{components:t}=e,n=Object(l.a)(e,["components"]);return Object(i.b)(p,Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"modal"},"Modal"),Object(i.b)("p",null,"Modal allows to prompt users to take or complete an action."),Object(i.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(i.b)("p",null,"To implement the Modal component, you need to import it first:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import { Modal } from '@react-ui-org/react-ui';\n")),Object(i.b)("p",null,"And use it:"),Object(i.b)(u.c,{__position:0,__code:'() => {\n  const [modalOpen, setModalOpen] = React.useState(false)\n  return (\n    <>\n      <Button\n        clickHandler={() => setModalOpen(true)}\n        label="Launch modal"\n        priority="outline"\n      />\n      <div>\n        {modalOpen && (\n          <Modal\n            title="Warning"\n            actions={[\n              {\n                clickHandler: () => setModalOpen(false),\n                label: \'Delete\',\n                color: \'danger\',\n              },\n            ]}\n            closeHandler={() => setModalOpen(false)}\n          >\n            <p>\n              Do you really want to delete the user <code>admin</code>? This\n              cannot be undone.\n            </p>\n          </Modal>\n        )}\n      </div>\n    </>\n  )\n}',__scope:{props:n,DefaultLayout:r.a,Playground:u.c,Props:u.d,Button:s.a,Modal:c.b,ParsableModal:c.a,DefaultLayout:r.a,_frontmatter:d},mdxType:"Playground"},()=>{const[e,t]=o.useState(!1);return Object(i.b)(o.Fragment,null,Object(i.b)(s.a,{clickHandler:()=>t(!0),label:"Launch modal",priority:"outline",mdxType:"Button"}),Object(i.b)("div",null,e&&Object(i.b)(c.b,{title:"Warning",actions:[{clickHandler:()=>t(!1),label:"Delete",color:"danger"}],closeHandler:()=>t(!1),mdxType:"Modal"},Object(i.b)("p",null,"Do you really want to delete the user ",Object(i.b)("code",null,"admin"),"? This cannot be undone."))))}),Object(i.b)("p",null,"See ",Object(i.b)("a",{parentName:"p",href:"#api"},"API")," for all available options."),Object(i.b)("h2",{id:"general-guidelines"},"General Guidelines"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use modals to ",Object(i.b)("strong",{parentName:"p"},"confirm an action,")," display a ",Object(i.b)("strong",{parentName:"p"},"blocking alert"),", or to\nreveal ",Object(i.b)("strong",{parentName:"p"},"contextual options or settings")," that cannot be displayed inline\nwith the parent content.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"The title")," should communicate the ",Object(i.b)("strong",{parentName:"p"},"purpose of the modal")," rather than a\ngeneric text. Eg. “Delete the user?” tells more than “Are you sure?” or\n“Warning”.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Modal actions")," should correspond to the modal purpose, too. Eg. “Delete”\ntells better what happens rather than “OK”.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Modal ",Object(i.b)("strong",{parentName:"p"},"automatically focuses the first form field")," by default which allows\nusers to confirm the modal by hitting enter key (requires an action of type\n",Object(i.b)("inlineCode",{parentName:"p"},"submit"),"). When no field is found then the first button in footer is focused.\nTo turn this feature off, set the ",Object(i.b)("inlineCode",{parentName:"p"},"autofocus")," prop to ",Object(i.b)("inlineCode",{parentName:"p"},"false"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Avoid stacking")," of modals. While it may technically work, the modal is just\nnot designed for that."))),Object(i.b)("h2",{id:"sizes"},"Sizes"),Object(i.b)("p",null,"Modal is available in three fixed-width sizes: small, medium, large and fullscreen.\nModals of any size automatically shrink when they cannot fit the screen width."),Object(i.b)(u.c,{__position:1,__code:'() => {\n  const [modalOpen, setModalOpen] = React.useState(false)\n  const [modalSize, setModalSize] = React.useState(\'small\')\n  return (\n    <>\n      <Button\n        clickHandler={() => {\n          setModalSize(\'small\')\n          setModalOpen(true)\n        }}\n        label="Launch small modal"\n        priority="outline"\n      />\n      <Button\n        clickHandler={() => {\n          setModalSize(\'medium\')\n          setModalOpen(true)\n        }}\n        label="Launch medium modal"\n        priority="outline"\n      />\n      <Button\n        clickHandler={() => {\n          setModalSize(\'large\')\n          setModalOpen(true)\n        }}\n        label="Launch large modal"\n        priority="outline"\n      />\n      <Button\n        clickHandler={() => {\n          setModalSize(\'fullscreen\')\n          setModalOpen(true)\n        }}\n        label="Launch fullscreen modal"\n        priority="outline"\n      />\n      <div>\n        {modalOpen && (\n          <Modal\n            title="Delete the user?"\n            actions={[\n              {\n                clickHandler: () => setModalOpen(false),\n                label: \'Delete\',\n                color: \'danger\',\n              },\n            ]}\n            closeHandler={() => setModalOpen(false)}\n            size={modalSize}\n          >\n            <p>\n              Do you really want to delete the user <code>admin</code>? This\n              cannot be undone.\n            </p>\n          </Modal>\n        )}\n      </div>\n    </>\n  )\n}',__scope:{props:n,DefaultLayout:r.a,Playground:u.c,Props:u.d,Button:s.a,Modal:c.b,ParsableModal:c.a,DefaultLayout:r.a,_frontmatter:d},mdxType:"Playground"},()=>{const[e,t]=o.useState(!1),[n,a]=o.useState("small");return Object(i.b)(o.Fragment,null,Object(i.b)(s.a,{clickHandler:()=>{a("small"),t(!0)},label:"Launch small modal",priority:"outline",mdxType:"Button"}),Object(i.b)(s.a,{clickHandler:()=>{a("medium"),t(!0)},label:"Launch medium modal",priority:"outline",mdxType:"Button"}),Object(i.b)(s.a,{clickHandler:()=>{a("large"),t(!0)},label:"Launch large modal",priority:"outline",mdxType:"Button"}),Object(i.b)(s.a,{clickHandler:()=>{a("fullscreen"),t(!0)},label:"Launch fullscreen modal",priority:"outline",mdxType:"Button"}),Object(i.b)("div",null,e&&Object(i.b)(c.b,{title:"Delete the user?",actions:[{clickHandler:()=>t(!1),label:"Delete",color:"danger"}],closeHandler:()=>t(!1),size:n,mdxType:"Modal"},Object(i.b)("p",null,"Do you really want to delete the user ",Object(i.b)("code",null,"admin"),"? This cannot be undone."))))}),Object(i.b)("p",null,"On top of that, the modal is able to adjust to the width of its content."),Object(i.b)("p",null,"👉 Please note the auto width may not function correctly in combination with\nother auto layout mechanisms, e.g. the auto-width\n",Object(i.b)("a",{parentName:"p",href:"/components/layout/form-layout#label-width"},"FormLayout"),". It's just too much\nmagic that doesn't work together yet 🎩."),Object(i.b)(u.c,{__position:2,__code:'() => {\n  const [modalOpen, setModalOpen] = React.useState(false)\n  return (\n    <>\n      <Button\n        clickHandler={() => setModalOpen(true)}\n        label="Launch auto-width modal"\n        priority="outline"\n      />\n      <div>\n        {modalOpen && (\n          <Modal\n            title="Delete the user?"\n            actions={[\n              {\n                clickHandler: () => setModalOpen(false),\n                label: \'Delete\',\n                color: \'danger\',\n              },\n            ]}\n            closeHandler={() => setModalOpen(false)}\n            size="auto"\n          >\n            <p>\n              Do you really want to delete the user <code>admin</code>? This\n              cannot be undone.\n            </p>\n          </Modal>\n        )}\n      </div>\n    </>\n  )\n}',__scope:{props:n,DefaultLayout:r.a,Playground:u.c,Props:u.d,Button:s.a,Modal:c.b,ParsableModal:c.a,DefaultLayout:r.a,_frontmatter:d},mdxType:"Playground"},()=>{const[e,t]=o.useState(!1);return Object(i.b)(o.Fragment,null,Object(i.b)(s.a,{clickHandler:()=>t(!0),label:"Launch auto-width modal",priority:"outline",mdxType:"Button"}),Object(i.b)("div",null,e&&Object(i.b)(c.b,{title:"Delete the user?",actions:[{clickHandler:()=>t(!1),label:"Delete",color:"danger"}],closeHandler:()=>t(!1),size:"auto",mdxType:"Modal"},Object(i.b)("p",null,"Do you really want to delete the user ",Object(i.b)("code",null,"admin"),"? This cannot be undone."))))}),Object(i.b)("h2",{id:"position"},"Position"),Object(i.b)("p",null,"Modal can be aligned either to top or center of the screen."),Object(i.b)(u.c,{__position:3,__code:"() => {\n  const [modalOpen, setModalOpen] = React.useState(false)\n  const [modalPosition, setModalPosition] = React.useState('center')\n  return (\n    <>\n      <Button\n        clickHandler={() => {\n          setModalPosition('center')\n          setModalOpen(true)\n        }}\n        label=\"Launch modal at center\"\n        priority=\"outline\"\n      />\n      <Button\n        clickHandler={() => {\n          setModalPosition('top')\n          setModalOpen(true)\n        }}\n        label=\"Launch modal at top\"\n        priority=\"outline\"\n      />\n      <div>\n        {modalOpen && (\n          <Modal\n            title=\"Delete the user?\"\n            actions={[\n              {\n                clickHandler: () => setModalOpen(false),\n                label: 'Delete',\n                color: 'danger',\n              },\n            ]}\n            closeHandler={() => setModalOpen(false)}\n            position={modalPosition}\n          >\n            <p>\n              Do you really want to delete the user <code>admin</code>? This\n              cannot be undone.\n            </p>\n          </Modal>\n        )}\n      </div>\n    </>\n  )\n}",__scope:{props:n,DefaultLayout:r.a,Playground:u.c,Props:u.d,Button:s.a,Modal:c.b,ParsableModal:c.a,DefaultLayout:r.a,_frontmatter:d},mdxType:"Playground"},()=>{const[e,t]=o.useState(!1),[n,a]=o.useState("center");return Object(i.b)(o.Fragment,null,Object(i.b)(s.a,{clickHandler:()=>{a("center"),t(!0)},label:"Launch modal at center",priority:"outline",mdxType:"Button"}),Object(i.b)(s.a,{clickHandler:()=>{a("top"),t(!0)},label:"Launch modal at top",priority:"outline",mdxType:"Button"}),Object(i.b)("div",null,e&&Object(i.b)(c.b,{title:"Delete the user?",actions:[{clickHandler:()=>t(!1),label:"Delete",color:"danger"}],closeHandler:()=>t(!1),position:n,mdxType:"Modal"},Object(i.b)("p",null,"Do you really want to delete the user ",Object(i.b)("code",null,"admin"),"? This cannot be undone."))))}),Object(i.b)("h2",{id:"scrolling-long-content"},"Scrolling Long Content"),Object(i.b)("p",null,"When modals become too long for the user's viewport or device, they scroll\nindependent of the page itself."),Object(i.b)("p",null,"The inner implementation of body scrolling uses a partially\n",Object(i.b)("a",{parentName:"p",href:"#api"},"customizable")," instance of the ",Object(i.b)("a",{parentName:"p",href:"/components/ui/scroll-view"},"ScrollView"),"\ncomponent."),Object(i.b)(u.c,{__position:4,__code:'() => {\n  const [modalOpen, setModalOpen] = React.useState(false)\n  const [modalScrollView, setModalScrollView] = React.useState(true)\n  return (\n    <>\n      <Button\n        clickHandler={() => {\n          setModalScrollView(true)\n          setModalOpen(true)\n        }}\n        label="Launch modal with scrolling body"\n        priority="outline"\n      />\n      <Button\n        clickHandler={() => {\n          setModalScrollView(false)\n          setModalOpen(true)\n        }}\n        label="Launch scrolling modal"\n        priority="outline"\n      />\n      <div>\n        {modalOpen && (\n          <Modal\n            title="Modal with long content"\n            actions={[\n              {\n                clickHandler: () => setModalOpen(false),\n                label: \'OK\',\n              },\n            ]}\n            autoFocus={false}\n            closeHandler={() => setModalOpen(false)}\n            scrollView={modalScrollView ? undefined : null}\n            size="small"\n          >\n            <p>\n              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean\n              commodo ligula eget dolor. Aenean massa.\n            </p>\n            <p>\n              Cum sociis natoque penatibus et magnis dis parturient montes,\n              nascetur ridiculus mus. Donec quam felis, ultricies nec,\n              pellentesque eu, pretium quis, sem.\n            </p>\n            <p>\n              Nulla consequat massa quis enim. Donec pede justo, fringilla\n              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus\n              ut, imperdiet a, venenatis vitae, justo.\n            </p>\n            <p>\n              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean\n              commodo ligula eget dolor. Aenean massa.\n            </p>\n            <p>\n              Cum sociis natoque penatibus et magnis dis parturient montes,\n              nascetur ridiculus mus. Donec quam felis, ultricies nec,\n              pellentesque eu, pretium quis, sem.\n            </p>\n            <p>\n              Nulla consequat massa quis enim. Donec pede justo, fringilla\n              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus\n              ut, imperdiet a, venenatis vitae, justo.\n            </p>\n            <p>\n              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean\n              commodo ligula eget dolor. Aenean massa.\n            </p>\n            <p>\n              Cum sociis natoque penatibus et magnis dis parturient montes,\n              nascetur ridiculus mus. Donec quam felis, ultricies nec,\n              pellentesque eu, pretium quis, sem.\n            </p>\n            <p>\n              Nulla consequat massa quis enim. Donec pede justo, fringilla\n              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus\n              ut, imperdiet a, venenatis vitae, justo.\n            </p>\n            <p>\n              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean\n              commodo ligula eget dolor. Aenean massa.\n            </p>\n            <p>\n              Cum sociis natoque penatibus et magnis dis parturient montes,\n              nascetur ridiculus mus. Donec quam felis, ultricies nec,\n              pellentesque eu, pretium quis, sem.\n            </p>\n            <p>\n              Nulla consequat massa quis enim. Donec pede justo, fringilla\n              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus\n              ut, imperdiet a, venenatis vitae, justo.\n            </p>\n            <p>\n              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean\n              commodo ligula eget dolor. Aenean massa.\n            </p>\n            <p>\n              Cum sociis natoque penatibus et magnis dis parturient montes,\n              nascetur ridiculus mus. Donec quam felis, ultricies nec,\n              pellentesque eu, pretium quis, sem.\n            </p>\n            <p>\n              Nulla consequat massa quis enim. Donec pede justo, fringilla\n              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus\n              ut, imperdiet a, venenatis vitae, justo.\n            </p>\n          </Modal>\n        )}\n      </div>\n    </>\n  )\n}',__scope:{props:n,DefaultLayout:r.a,Playground:u.c,Props:u.d,Button:s.a,Modal:c.b,ParsableModal:c.a,DefaultLayout:r.a,_frontmatter:d},mdxType:"Playground"},()=>{const[e,t]=o.useState(!1),[n,a]=o.useState(!0);return Object(i.b)(o.Fragment,null,Object(i.b)(s.a,{clickHandler:()=>{a(!0),t(!0)},label:"Launch modal with scrolling body",priority:"outline",mdxType:"Button"}),Object(i.b)(s.a,{clickHandler:()=>{a(!1),t(!0)},label:"Launch scrolling modal",priority:"outline",mdxType:"Button"}),Object(i.b)("div",null,e&&Object(i.b)(c.b,{title:"Modal with long content",actions:[{clickHandler:()=>t(!1),label:"OK"}],autoFocus:!1,closeHandler:()=>t(!1),scrollView:n?void 0:null,size:"small",mdxType:"Modal"},Object(i.b)("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."),Object(i.b)("p",null,"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."),Object(i.b)("p",null,"Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."),Object(i.b)("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."),Object(i.b)("p",null,"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."),Object(i.b)("p",null,"Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."),Object(i.b)("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."),Object(i.b)("p",null,"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."),Object(i.b)("p",null,"Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."),Object(i.b)("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."),Object(i.b)("p",null,"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."),Object(i.b)("p",null,"Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."),Object(i.b)("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."),Object(i.b)("p",null,"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."),Object(i.b)("p",null,"Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."))))}),Object(i.b)("h3",{id:"long-content-and-autofocus"},"Long Content and Autofocus"),Object(i.b)("p",null,"👉 If you set the ",Object(i.b)("inlineCode",{parentName:"p"},"scrollMode")," to ",Object(i.b)("inlineCode",{parentName:"p"},"modal"),", you may want to turn ",Object(i.b)("inlineCode",{parentName:"p"},"autoFocus")," off\nto prevent the modal from scrolling to the end immediately after being opened."),Object(i.b)("h2",{id:"blocking-modals"},"Blocking Modals"),Object(i.b)("p",null,"There are situations when you need to interrupt user's flow and lock entire UI\nto prevent interaction. That's where blocking modals may come handy."),Object(i.b)(u.c,{__position:5,__code:'() => {\n  const [modalOpen, setModalOpen] = React.useState(false)\n  return (\n    <>\n      <Button\n        clickHandler={() => setModalOpen(true)}\n        label="Launch blocking modal"\n        priority="outline"\n      />\n      <div>\n        {modalOpen && (\n          <Modal title="Update is in progress" size="auto">\n            <p>\n              <span role="img" aria-label="Warning">\n                ⚠️\n              </span>\n              Please wait a few seconds until the firmware update is finished.\n              Don&apos;t turn off the device!\n            </p>\n            <Button\n              clickHandler={() => setModalOpen(false)}\n              label="Close the demo"\n              priority="flat"\n            />\n          </Modal>\n        )}\n      </div>\n    </>\n  )\n}',__scope:{props:n,DefaultLayout:r.a,Playground:u.c,Props:u.d,Button:s.a,Modal:c.b,ParsableModal:c.a,DefaultLayout:r.a,_frontmatter:d},mdxType:"Playground"},()=>{const[e,t]=o.useState(!1);return Object(i.b)(o.Fragment,null,Object(i.b)(s.a,{clickHandler:()=>t(!0),label:"Launch blocking modal",priority:"outline",mdxType:"Button"}),Object(i.b)("div",null,e&&Object(i.b)(c.b,{title:"Update is in progress",size:"auto",mdxType:"Modal"},Object(i.b)("p",null,Object(i.b)("span",{role:"img","aria-label":"Warning"},"⚠️"),"Please wait a few seconds until the firmware update is finished. Don't turn off the device!"),Object(i.b)(s.a,{clickHandler:()=>t(!1),label:"Close the demo",priority:"flat",mdxType:"Button"}))))}),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)(u.d,{table:!0,of:c.a,mdxType:"Props"}),Object(i.b)("h2",{id:"theming"},"Theming"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Custom Property"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"--rui-Modal__background")),Object(i.b)("td",{parentName:"tr",align:null},"Modal background (including ",Object(i.b)("inlineCode",{parentName:"td"},"url()")," or gradient)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"--rui-Modal__box-shadow")),Object(i.b)("td",{parentName:"tr",align:null},"Modal box shadow")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"--rui-Modal__outer-spacing-xs")),Object(i.b)("td",{parentName:"tr",align:null},"Spacing around modal, ",Object(i.b)("inlineCode",{parentName:"td"},"xs")," screen size")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"--rui-Modal__outer-spacing-sm")),Object(i.b)("td",{parentName:"tr",align:null},"Spacing around modal, ",Object(i.b)("inlineCode",{parentName:"td"},"sm")," screen size and bigger")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"--rui-Modal__footer__background")),Object(i.b)("td",{parentName:"tr",align:null},"Modal footer background (including ",Object(i.b)("inlineCode",{parentName:"td"},"url()")," or gradient)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"--rui-Modal__backdrop__background")),Object(i.b)("td",{parentName:"tr",align:null},"Modal backdrop background (including ",Object(i.b)("inlineCode",{parentName:"td"},"url()")," or gradient)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"--rui-Modal--auto__min-width")),Object(i.b)("td",{parentName:"tr",align:null},"Minimum width of auto-sized modal")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"--rui-Modal--auto__max-width")),Object(i.b)("td",{parentName:"tr",align:null},"Maximum width of auto-sized modal")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"--rui-Modal--small__width")),Object(i.b)("td",{parentName:"tr",align:null},"Width of small modal")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"--rui-Modal--medium__width")),Object(i.b)("td",{parentName:"tr",align:null},"Width of medium modal")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"--rui-Modal--large__width")),Object(i.b)("td",{parentName:"tr",align:null},"Width of large modal")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"--rui-Modal--fullscreen__width")),Object(i.b)("td",{parentName:"tr",align:null},"Width of fullscreen modal")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"--rui-Modal--fullscreen__height")),Object(i.b)("td",{parentName:"tr",align:null},"Height of fullscreen modal")))))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/lib/components/ui/Modal/README.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-lib-components-ui-modal-readme-mdx-4beb8c3d37cce9792f65.js.map