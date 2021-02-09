(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{A2UN:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return d})),t.d(n,"default",(function(){return b}));var a=t("Fcif"),l=t("dV/x"),o=t("mXGw"),i=t("/FXl"),s=t("TjRS"),u=t("ZFoC"),c=t("IICW"),r=t("o9kk");t("aD51");const d={};void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/lib/components/ui/Modal/README.mdx"}});const p={_frontmatter:d},m=s.a;function b(e){let{components:n}=e,t=Object(l.a)(e,["components"]);return Object(i.b)(m,Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"modal"},"Modal"),Object(i.b)("p",null,"Modal allows to prompt users to take or complete an action."),Object(i.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(i.b)("p",null,"To implement the Modal component, you need to import it first:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import { Modal } from '@react-ui-org/react-ui';\n")),Object(i.b)("p",null,"And use it:"),Object(i.b)(u.c,{__position:0,__code:'() => {\n  const [modalOpen, setModalOpen] = React.useState(false)\n  return (\n    <>\n      <Button\n        clickHandler={() => setModalOpen(true)}\n        label="Launch modal"\n        priority="outline"\n      />\n      <div>\n        {modalOpen && (\n          <Modal\n            title="Warning"\n            actions={[\n              {\n                clickHandler: () => setModalOpen(false),\n                label: \'Delete\',\n                variant: \'danger\',\n              },\n            ]}\n            closeHandler={() => setModalOpen(false)}\n          >\n            <p>\n              Do you really want to delete the user <code>admin</code>? This\n              cannot be undone.\n            </p>\n          </Modal>\n        )}\n      </div>\n    </>\n  )\n}',__scope:{props:t,DefaultLayout:s.a,Playground:u.c,Props:u.d,Button:c.a,Modal:r.b,ParsableModal:r.a,DefaultLayout:s.a,_frontmatter:d},mdxType:"Playground"},()=>{const[e,n]=o.useState(!1);return Object(i.b)(o.Fragment,null,Object(i.b)(c.a,{clickHandler:()=>n(!0),label:"Launch modal",priority:"outline",mdxType:"Button"}),Object(i.b)("div",null,e&&Object(i.b)(r.b,{title:"Warning",actions:[{clickHandler:()=>n(!1),label:"Delete",variant:"danger"}],closeHandler:()=>n(!1),mdxType:"Modal"},Object(i.b)("p",null,"Do you really want to delete the user ",Object(i.b)("code",null,"admin"),"? This cannot be undone."))))}),Object(i.b)("p",null,"See ",Object(i.b)("a",{parentName:"p",href:"#api"},"API")," for all available options."),Object(i.b)("h2",{id:"general-guidelines"},"General Guidelines"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use modals to ",Object(i.b)("strong",{parentName:"p"},"confirm an action,")," display a ",Object(i.b)("strong",{parentName:"p"},"blocking alert"),", or to\nreveal ",Object(i.b)("strong",{parentName:"p"},"contextual options or settings")," that cannot be displayed inline\nwith the parent content.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"The title")," should communicate the ",Object(i.b)("strong",{parentName:"p"},"purpose of the modal")," rather than a\ngeneric text. Eg. “Delete the user?” tells more than “Are you sure?” or\n“Warning”.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Modal actions")," should correspond to the modal purpose, too. Eg. “Delete”\ntells better what happens rather than “OK”.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Modal ",Object(i.b)("strong",{parentName:"p"},"automatically focuses the first form field")," by default which allows\nusers to confirm the modal by hitting enter key (requires an action of type\n",Object(i.b)("inlineCode",{parentName:"p"},"submit"),"). When no field is found then the first button in footer is focused.\nTo turn this feature off, set the ",Object(i.b)("inlineCode",{parentName:"p"},"autofocus")," prop to ",Object(i.b)("inlineCode",{parentName:"p"},"false"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Avoid stacking")," of modals. While it may technically work, the modal is just\nnot designed for that."))),Object(i.b)("h2",{id:"sizes"},"Sizes"),Object(i.b)("p",null,"Modal is available in three fixed-width sizes: small, medium, large and fullscreen.\nModals of any size automatically shrink when they cannot fit the screen width."),Object(i.b)(u.c,{__position:1,__code:'() => {\n  const [modalOpen, setModalOpen] = React.useState(false)\n  const [modalSize, setModalSize] = React.useState(\'small\')\n  return (\n    <>\n      <Button\n        clickHandler={() => {\n          setModalSize(\'small\')\n          setModalOpen(true)\n        }}\n        label="Launch small modal"\n        priority="outline"\n      />\n      <Button\n        clickHandler={() => {\n          setModalSize(\'medium\')\n          setModalOpen(true)\n        }}\n        label="Launch medium modal"\n        priority="outline"\n      />\n      <Button\n        clickHandler={() => {\n          setModalSize(\'large\')\n          setModalOpen(true)\n        }}\n        label="Launch large modal"\n        priority="outline"\n      />\n      <Button\n        clickHandler={() => {\n          setModalSize(\'fullscreen\')\n          setModalOpen(true)\n        }}\n        label="Launch fullscreen modal"\n        priority="outline"\n      />\n      <div>\n        {modalOpen && (\n          <Modal\n            title="Delete the user?"\n            actions={[\n              {\n                clickHandler: () => setModalOpen(false),\n                label: \'Delete\',\n                variant: \'danger\',\n              },\n            ]}\n            closeHandler={() => setModalOpen(false)}\n            size={modalSize}\n          >\n            <p>\n              Do you really want to delete the user <code>admin</code>? This\n              cannot be undone.\n            </p>\n          </Modal>\n        )}\n      </div>\n    </>\n  )\n}',__scope:{props:t,DefaultLayout:s.a,Playground:u.c,Props:u.d,Button:c.a,Modal:r.b,ParsableModal:r.a,DefaultLayout:s.a,_frontmatter:d},mdxType:"Playground"},()=>{const[e,n]=o.useState(!1),[t,a]=o.useState("small");return Object(i.b)(o.Fragment,null,Object(i.b)(c.a,{clickHandler:()=>{a("small"),n(!0)},label:"Launch small modal",priority:"outline",mdxType:"Button"}),Object(i.b)(c.a,{clickHandler:()=>{a("medium"),n(!0)},label:"Launch medium modal",priority:"outline",mdxType:"Button"}),Object(i.b)(c.a,{clickHandler:()=>{a("large"),n(!0)},label:"Launch large modal",priority:"outline",mdxType:"Button"}),Object(i.b)(c.a,{clickHandler:()=>{a("fullscreen"),n(!0)},label:"Launch fullscreen modal",priority:"outline",mdxType:"Button"}),Object(i.b)("div",null,e&&Object(i.b)(r.b,{title:"Delete the user?",actions:[{clickHandler:()=>n(!1),label:"Delete",variant:"danger"}],closeHandler:()=>n(!1),size:t,mdxType:"Modal"},Object(i.b)("p",null,"Do you really want to delete the user ",Object(i.b)("code",null,"admin"),"? This cannot be undone."))))}),Object(i.b)("p",null,"On top of that, the modal is able to adjust to the width of its content."),Object(i.b)("p",null,"👉 Please note the auto width may not function correctly in combination with\nother auto layout mechanisms, eg. the auto-width\n",Object(i.b)("a",{parentName:"p",href:"/components/layout/form-layout#label-width"},"FormLayout"),". It's just too much\nmagic that doesn't work together yet 🎩."),Object(i.b)(u.c,{__position:2,__code:'() => {\n  const [modalOpen, setModalOpen] = React.useState(false)\n  return (\n    <>\n      <Button\n        clickHandler={() => setModalOpen(true)}\n        label="Launch auto-width modal"\n        priority="outline"\n      />\n      <div>\n        {modalOpen && (\n          <Modal\n            title="Delete the user?"\n            actions={[\n              {\n                clickHandler: () => setModalOpen(false),\n                label: \'Delete\',\n                variant: \'danger\',\n              },\n            ]}\n            closeHandler={() => setModalOpen(false)}\n            size="auto"\n          >\n            <p>\n              Do you really want to delete the user <code>admin</code>? This\n              cannot be undone.\n            </p>\n          </Modal>\n        )}\n      </div>\n    </>\n  )\n}',__scope:{props:t,DefaultLayout:s.a,Playground:u.c,Props:u.d,Button:c.a,Modal:r.b,ParsableModal:r.a,DefaultLayout:s.a,_frontmatter:d},mdxType:"Playground"},()=>{const[e,n]=o.useState(!1);return Object(i.b)(o.Fragment,null,Object(i.b)(c.a,{clickHandler:()=>n(!0),label:"Launch auto-width modal",priority:"outline",mdxType:"Button"}),Object(i.b)("div",null,e&&Object(i.b)(r.b,{title:"Delete the user?",actions:[{clickHandler:()=>n(!1),label:"Delete",variant:"danger"}],closeHandler:()=>n(!1),size:"auto",mdxType:"Modal"},Object(i.b)("p",null,"Do you really want to delete the user ",Object(i.b)("code",null,"admin"),"? This cannot be undone."))))}),Object(i.b)("h2",{id:"position"},"Position"),Object(i.b)("p",null,"Modal can be aligned either to top or center of the screen."),Object(i.b)(u.c,{__position:3,__code:"() => {\n  const [modalOpen, setModalOpen] = React.useState(false)\n  const [modalPosition, setModalPosition] = React.useState('center')\n  return (\n    <>\n      <Button\n        clickHandler={() => {\n          setModalPosition('center')\n          setModalOpen(true)\n        }}\n        label=\"Launch modal at center\"\n        priority=\"outline\"\n      />\n      <Button\n        clickHandler={() => {\n          setModalPosition('top')\n          setModalOpen(true)\n        }}\n        label=\"Launch modal at top\"\n        priority=\"outline\"\n      />\n      <div>\n        {modalOpen && (\n          <Modal\n            title=\"Delete the user?\"\n            actions={[\n              {\n                clickHandler: () => setModalOpen(false),\n                label: 'Delete',\n                variant: 'danger',\n              },\n            ]}\n            closeHandler={() => setModalOpen(false)}\n            position={modalPosition}\n          >\n            <p>\n              Do you really want to delete the user <code>admin</code>? This\n              cannot be undone.\n            </p>\n          </Modal>\n        )}\n      </div>\n    </>\n  )\n}",__scope:{props:t,DefaultLayout:s.a,Playground:u.c,Props:u.d,Button:c.a,Modal:r.b,ParsableModal:r.a,DefaultLayout:s.a,_frontmatter:d},mdxType:"Playground"},()=>{const[e,n]=o.useState(!1),[t,a]=o.useState("center");return Object(i.b)(o.Fragment,null,Object(i.b)(c.a,{clickHandler:()=>{a("center"),n(!0)},label:"Launch modal at center",priority:"outline",mdxType:"Button"}),Object(i.b)(c.a,{clickHandler:()=>{a("top"),n(!0)},label:"Launch modal at top",priority:"outline",mdxType:"Button"}),Object(i.b)("div",null,e&&Object(i.b)(r.b,{title:"Delete the user?",actions:[{clickHandler:()=>n(!1),label:"Delete",variant:"danger"}],closeHandler:()=>n(!1),position:t,mdxType:"Modal"},Object(i.b)("p",null,"Do you really want to delete the user ",Object(i.b)("code",null,"admin"),"? This cannot be undone."))))}),Object(i.b)("h2",{id:"scrolling-long-content"},"Scrolling Long Content"),Object(i.b)("p",null,"When modals become too long for the user's viewport or device, they scroll\nindependent of the page itself."),Object(i.b)("p",null,"The inner implementation of body scrolling uses a partially\n",Object(i.b)("a",{parentName:"p",href:"#api"},"customizable")," instance of the ",Object(i.b)("a",{parentName:"p",href:"/components/ui/scroll-view"},"ScrollView"),"\ncomponent."),Object(i.b)(u.c,{__position:4,__code:'() => {\n  const [modalOpen, setModalOpen] = React.useState(false)\n  const [modalScrollMode, setModalScrollMode] = React.useState(\'body\')\n  return (\n    <>\n      <Button\n        clickHandler={() => {\n          setModalScrollMode(\'body\')\n          setModalOpen(true)\n        }}\n        label="Launch modal with scrolling body"\n        priority="outline"\n      />\n      <Button\n        clickHandler={() => {\n          setModalScrollMode(\'modal\')\n          setModalOpen(true)\n        }}\n        label="Launch scrolling modal"\n        priority="outline"\n      />\n      <div>\n        {modalOpen && (\n          <Modal\n            title="Modal with long content"\n            actions={[\n              {\n                clickHandler: () => setModalOpen(false),\n                label: \'OK\',\n              },\n            ]}\n            autoFocus={false}\n            closeHandler={() => setModalOpen(false)}\n            scrollMode={modalScrollMode}\n            size="small"\n          >\n            <p>\n              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean\n              commodo ligula eget dolor. Aenean massa.\n            </p>\n            <p>\n              Cum sociis natoque penatibus et magnis dis parturient montes,\n              nascetur ridiculus mus. Donec quam felis, ultricies nec,\n              pellentesque eu, pretium quis, sem.\n            </p>\n            <p>\n              Nulla consequat massa quis enim. Donec pede justo, fringilla\n              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus\n              ut, imperdiet a, venenatis vitae, justo.\n            </p>\n            <p>\n              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean\n              commodo ligula eget dolor. Aenean massa.\n            </p>\n            <p>\n              Cum sociis natoque penatibus et magnis dis parturient montes,\n              nascetur ridiculus mus. Donec quam felis, ultricies nec,\n              pellentesque eu, pretium quis, sem.\n            </p>\n            <p>\n              Nulla consequat massa quis enim. Donec pede justo, fringilla\n              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus\n              ut, imperdiet a, venenatis vitae, justo.\n            </p>\n            <p>\n              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean\n              commodo ligula eget dolor. Aenean massa.\n            </p>\n            <p>\n              Cum sociis natoque penatibus et magnis dis parturient montes,\n              nascetur ridiculus mus. Donec quam felis, ultricies nec,\n              pellentesque eu, pretium quis, sem.\n            </p>\n            <p>\n              Nulla consequat massa quis enim. Donec pede justo, fringilla\n              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus\n              ut, imperdiet a, venenatis vitae, justo.\n            </p>\n            <p>\n              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean\n              commodo ligula eget dolor. Aenean massa.\n            </p>\n            <p>\n              Cum sociis natoque penatibus et magnis dis parturient montes,\n              nascetur ridiculus mus. Donec quam felis, ultricies nec,\n              pellentesque eu, pretium quis, sem.\n            </p>\n            <p>\n              Nulla consequat massa quis enim. Donec pede justo, fringilla\n              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus\n              ut, imperdiet a, venenatis vitae, justo.\n            </p>\n            <p>\n              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean\n              commodo ligula eget dolor. Aenean massa.\n            </p>\n            <p>\n              Cum sociis natoque penatibus et magnis dis parturient montes,\n              nascetur ridiculus mus. Donec quam felis, ultricies nec,\n              pellentesque eu, pretium quis, sem.\n            </p>\n            <p>\n              Nulla consequat massa quis enim. Donec pede justo, fringilla\n              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus\n              ut, imperdiet a, venenatis vitae, justo.\n            </p>\n          </Modal>\n        )}\n      </div>\n    </>\n  )\n}',__scope:{props:t,DefaultLayout:s.a,Playground:u.c,Props:u.d,Button:c.a,Modal:r.b,ParsableModal:r.a,DefaultLayout:s.a,_frontmatter:d},mdxType:"Playground"},()=>{const[e,n]=o.useState(!1),[t,a]=o.useState("body");return Object(i.b)(o.Fragment,null,Object(i.b)(c.a,{clickHandler:()=>{a("body"),n(!0)},label:"Launch modal with scrolling body",priority:"outline",mdxType:"Button"}),Object(i.b)(c.a,{clickHandler:()=>{a("modal"),n(!0)},label:"Launch scrolling modal",priority:"outline",mdxType:"Button"}),Object(i.b)("div",null,e&&Object(i.b)(r.b,{title:"Modal with long content",actions:[{clickHandler:()=>n(!1),label:"OK"}],autoFocus:!1,closeHandler:()=>n(!1),scrollMode:t,size:"small",mdxType:"Modal"},Object(i.b)("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."),Object(i.b)("p",null,"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."),Object(i.b)("p",null,"Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."),Object(i.b)("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."),Object(i.b)("p",null,"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."),Object(i.b)("p",null,"Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."),Object(i.b)("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."),Object(i.b)("p",null,"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."),Object(i.b)("p",null,"Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."),Object(i.b)("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."),Object(i.b)("p",null,"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."),Object(i.b)("p",null,"Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."),Object(i.b)("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."),Object(i.b)("p",null,"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."),Object(i.b)("p",null,"Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."))))}),Object(i.b)("h3",{id:"long-content-and-autofocus"},"Long Content and Autofocus"),Object(i.b)("p",null,"👉 If you set the ",Object(i.b)("inlineCode",{parentName:"p"},"scrollMode")," to ",Object(i.b)("inlineCode",{parentName:"p"},"modal"),", you may want to turn ",Object(i.b)("inlineCode",{parentName:"p"},"autoFocus")," off\nto prevent the modal from scrolling to the end immediately after being opened."),Object(i.b)("h2",{id:"blocking-modals"},"Blocking Modals"),Object(i.b)("p",null,"There are situations when you need to interrupt user's flow and lock entire UI\nto prevent interaction. That's where blocking modals may come handy."),Object(i.b)(u.c,{__position:5,__code:'() => {\n  const [modalOpen, setModalOpen] = React.useState(false)\n  return (\n    <>\n      <Button\n        clickHandler={() => setModalOpen(true)}\n        label="Launch blocking modal"\n        priority="outline"\n      />\n      <div>\n        {modalOpen && (\n          <Modal title="Update is in progress" size="auto">\n            <p>\n              <span role="img" aria-label="Warning">\n                ⚠️\n              </span>\n              Please wait a few seconds until the firmware update is finished.\n              Don&apos;t turn off the device!\n            </p>\n            <Button\n              clickHandler={() => setModalOpen(false)}\n              label="Close the demo"\n              priority="flat"\n            />\n          </Modal>\n        )}\n      </div>\n    </>\n  )\n}',__scope:{props:t,DefaultLayout:s.a,Playground:u.c,Props:u.d,Button:c.a,Modal:r.b,ParsableModal:r.a,DefaultLayout:s.a,_frontmatter:d},mdxType:"Playground"},()=>{const[e,n]=o.useState(!1);return Object(i.b)(o.Fragment,null,Object(i.b)(c.a,{clickHandler:()=>n(!0),label:"Launch blocking modal",priority:"outline",mdxType:"Button"}),Object(i.b)("div",null,e&&Object(i.b)(r.b,{title:"Update is in progress",size:"auto",mdxType:"Modal"},Object(i.b)("p",null,Object(i.b)("span",{role:"img","aria-label":"Warning"},"⚠️"),"Please wait a few seconds until the firmware update is finished. Don't turn off the device!"),Object(i.b)(c.a,{clickHandler:()=>n(!1),label:"Close the demo",priority:"flat",mdxType:"Button"}))))}),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)(u.d,{table:!0,of:r.a,mdxType:"Props"}))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/lib/components/ui/Modal/README.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-lib-components-ui-modal-readme-mdx-12d3d673459603cc2fae.js.map