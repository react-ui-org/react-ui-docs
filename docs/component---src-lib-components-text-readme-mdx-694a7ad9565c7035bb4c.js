(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{ehlt:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return h}));var a=t("Fcif"),o=t("dV/x"),l=t("mXGw"),i=t("/FXl"),r=t("TjRS"),p=t("ZFoC"),s=t("s0IP"),b=t("nBnF");t("aD51");const u=["components"],c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!Object.prototype.hasOwnProperty.call(c,"__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/lib/components/Text/README.mdx"}});const m={_frontmatter:c},d=r.a;function h(e){let{components:n}=e,t=Object(o.a)(e,u);return Object(i.b)(d,Object(a.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"text"},"Text"),Object(i.b)("p",null,"Text is a tiny component to control wrapping of text content."),Object(i.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(i.b)("p",null,"To implement the Text component, you need to import it first:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import { Text } from '@react-ui-org/react-ui';\n")),Object(i.b)("p",null,"And use it:"),Object(i.b)(p.c,{__position:0,__code:"<Placeholder>\n  <Text lines={3}>\n    Hello! This text will be clamped to three lines. Lorem ipsum dolor sit\n    amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.\n    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient\n    montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,\n    pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec\n    pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim\n    justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n  </Text>\n</Placeholder>",__scope:{props:t,DefaultLayout:r.a,Playground:p.c,Props:p.d,Placeholder:s.a,Button:b.c,ButtonGroup:b.d,Text:b.D,TextField:b.F,Toolbar:b.I,ToolbarGroup:b.J,ToolbarItem:b.K,DefaultLayout:r.a,_frontmatter:c},mdxType:"Playground"},Object(i.b)(s.a,{mdxType:"Placeholder"},Object(i.b)(b.D,{lines:3,mdxType:"Text"},"Hello! This text will be clamped to three lines. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."))),Object(i.b)("p",null,"See ",Object(i.b)("a",{parentName:"p",href:"#api"},"API")," for all available options."),Object(i.b)("h2",{id:"general-guidelines"},"General Guidelines"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use Text anytime you need to ",Object(i.b)("strong",{parentName:"p"},"control potentially long strings")," and\nprevent them from overflowing or breaking their container.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"By default, Text doesn't alter rendering of its content.")," Use available\noptions to achieve the result you need.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Text renders as ",Object(i.b)("inlineCode",{parentName:"strong"},"<span>")," by default,")," so it can only contain\ninline-level HTML elements (like ",Object(i.b)("inlineCode",{parentName:"p"},"<strong>")," or ",Object(i.b)("inlineCode",{parentName:"p"},"<a>"),", but not ",Object(i.b)("inlineCode",{parentName:"p"},"<div>"),", ",Object(i.b)("inlineCode",{parentName:"p"},"<p>"),",\nor ",Object(i.b)("inlineCode",{parentName:"p"},"<h2>"),"). If necessary, use the ",Object(i.b)("inlineCode",{parentName:"p"},"blockLevel")," option to render as ",Object(i.b)("inlineCode",{parentName:"p"},"<div>")," to\nkeep your HTML valid.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Use Text for short pieces of text content.")," Including a couple of HTML tags\nshouldn't cause any harm, but keep in mind Text is not intended to wrap\ncomplex HTML structures or even React components."))),Object(i.b)("h2",{id:"number-of-lines"},"Number of Lines"),Object(i.b)("p",null,"Specify how many ",Object(i.b)("inlineCode",{parentName:"p"},"lines")," of text should be visible if content doesn't fit its\ncontainer. If the number of lines is exceeded, the content is truncated and\nappended by an ellipsis (",Object(i.b)("inlineCode",{parentName:"p"},"…"),")."),Object(i.b)(p.c,{__position:1,__code:'() => {\n  const [lines, setLines] = React.useState(1)\n  return (\n    <div>\n      <Toolbar align="baseline">\n        <ToolbarItem>\n          <TextField\n            label="Number of lines"\n            min={1}\n            max={100}\n            onChange={e => setLines(Number(e.target.value))}\n            type="number"\n            value={lines}\n          />\n        </ToolbarItem>\n      </Toolbar>\n      <Placeholder>\n        <Text lines={lines}>\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean\n          commodo ligula eget dolor. Aenean massa. Cum sociis natoque\n          penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.\n          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,\n          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,\n          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede\n          mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum\n          semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,\n          porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem\n          ante, dapibus in, viverra quis, feugiat a, tellus.\n        </Text>\n      </Placeholder>\n    </div>\n  )\n}',__scope:{props:t,DefaultLayout:r.a,Playground:p.c,Props:p.d,Placeholder:s.a,Button:b.c,ButtonGroup:b.d,Text:b.D,TextField:b.F,Toolbar:b.I,ToolbarGroup:b.J,ToolbarItem:b.K,DefaultLayout:r.a,_frontmatter:c},mdxType:"Playground"},()=>{const[e,n]=l.useState(1);return Object(i.b)("div",null,Object(i.b)(b.I,{align:"baseline",mdxType:"Toolbar"},Object(i.b)(b.K,{mdxType:"ToolbarItem"},Object(i.b)(b.F,{label:"Number of lines",min:1,max:100,onChange:e=>n(Number(e.target.value)),type:"number",value:e,mdxType:"TextField"}))),Object(i.b)(s.a,{mdxType:"Placeholder"},Object(i.b)(b.D,{lines:e,mdxType:"Text"},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.")))}),Object(i.b)("h2",{id:"word-wrapping"},"Word Wrapping"),Object(i.b)("p",null,"There are three possible ways of controlling wrapping of long words if they do\nnot fit on a line. Set ",Object(i.b)("inlineCode",{parentName:"p"},"wordWrapping")," to one of the following values:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"normal"),": Do not force any wrapping (default behavior).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"long-words"),": To prevent overflow, an otherwise unbreakable string of\ncharacters — like a long word or URL — may be broken at any point if there are\nno otherwise-acceptable break points in the line.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"anywhere"),": Create a break at the exact place where text would otherwise\noverflow its container (even if putting an entire word on its own line would\nnegate the need for a break)."))),Object(i.b)("p",null,"📖 ",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Text/Wrapping_Text"},"Read more about wrapping and breaking text at MDN.")),Object(i.b)("h3",{id:"hyphens"},"Hyphens"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"hyphens")," option specifies how words should be hyphenated when text wraps\nacross multiple lines. It can prevent hyphenation entirely, hyphenate at\nmanually-specified points within the text, or let the browser automatically\ninsert hyphens where appropriate."),Object(i.b)("p",null,"👉 The ",Object(i.b)("inlineCode",{parentName:"p"},"auto")," setting's behavior depends on the language being properly tagged\nto select the appropriate hyphenation rules. ",Object(i.b)("strong",{parentName:"p"},"You must specify a language"),"\nusing the ",Object(i.b)("inlineCode",{parentName:"p"},"lang")," HTML attribute (e.g.\n",Object(i.b)("a",{parentName:"p",href:"/getting-started/usage#full-example"},"on ",Object(i.b)("inlineCode",{parentName:"a"},"<html>")," tag"),") to guarantee that\nautomatic hyphenation is applied in that language."),Object(i.b)("p",null,"👉 ",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens#suggesting_line_break_opportunities"},"Manually suggested line break opportunities"),"\nwill override automatic break point selection in ",Object(i.b)("inlineCode",{parentName:"p"},"auto")," mode when present."),Object(i.b)("p",null,"📖 ",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens"},"Read more about ",Object(i.b)("inlineCode",{parentName:"a"},"hyphens")," CSS property at MDN.")),Object(i.b)(p.c,{__position:2,__code:"() => {\n  const [hyphens, setHyphens] = React.useState('none')\n  const [wordWrapping, setWordWrapping] = React.useState('normal')\n  return (\n    <div>\n      <Toolbar>\n        <ToolbarGroup align=\"baseline\">\n          <ToolbarItem>\n            <span id=\"word-wrapping-options-label\">Word wrapping:</span>\n          </ToolbarItem>\n          <ToolbarItem>\n            <ButtonGroup aria-labelledby=\"word-wrapping-options-label\">\n              <Button\n                color={wordWrapping === 'normal' ? 'dark' : 'primary'}\n                label=\"normal\"\n                onClick={() => setWordWrapping('normal')}\n              />\n              <Button\n                color={wordWrapping === 'long-words' ? 'dark' : 'primary'}\n                label=\"long-words\"\n                onClick={() => setWordWrapping('long-words')}\n              />\n              <Button\n                color={wordWrapping === 'anywhere' ? 'dark' : 'primary'}\n                label=\"anywhere\"\n                onClick={() => setWordWrapping('anywhere')}\n              />\n            </ButtonGroup>\n          </ToolbarItem>\n        </ToolbarGroup>\n        <ToolbarGroup align=\"baseline\">\n          <ToolbarItem>\n            <span id=\"hyphens-options-label\">Hyphens:</span>\n          </ToolbarItem>\n          <ToolbarItem>\n            <ButtonGroup aria-labelledby=\"hyphens-options-label\">\n              <Button\n                color={hyphens === 'none' ? 'dark' : 'primary'}\n                label=\"none\"\n                onClick={() => setHyphens('none')}\n              />\n              <Button\n                color={hyphens === 'auto' ? 'dark' : 'primary'}\n                label=\"auto\"\n                onClick={() => setHyphens('auto')}\n              />\n              <Button\n                color={hyphens === 'manual' ? 'dark' : 'primary'}\n                label=\"manual\"\n                onClick={() => setHyphens('manual')}\n              />\n            </ButtonGroup>\n          </ToolbarItem>\n        </ToolbarGroup>\n      </Toolbar>\n      <Placeholder width=\"11em\" bordered>\n        <Text hyphens={hyphens} wordWrapping={wordWrapping}>\n          {hyphens === 'manual' ? (\n            <>LongWord&shy;ThatHasManual&shy;Breaking&shy;Possibilities</>\n          ) : (\n            <>LongWordThatHasNoBreakingPossibilities</>\n          )}{' '}\n          and a couple of ordinary words that are nice and well behaved.\n        </Text>\n      </Placeholder>\n    </div>\n  )\n}",__scope:{props:t,DefaultLayout:r.a,Playground:p.c,Props:p.d,Placeholder:s.a,Button:b.c,ButtonGroup:b.d,Text:b.D,TextField:b.F,Toolbar:b.I,ToolbarGroup:b.J,ToolbarItem:b.K,DefaultLayout:r.a,_frontmatter:c},mdxType:"Playground"},()=>{const[e,n]=l.useState("none"),[t,a]=l.useState("normal");return Object(i.b)("div",null,Object(i.b)(b.I,{mdxType:"Toolbar"},Object(i.b)(b.J,{align:"baseline",mdxType:"ToolbarGroup"},Object(i.b)(b.K,{mdxType:"ToolbarItem"},Object(i.b)("span",{id:"word-wrapping-options-label"},"Word wrapping:")),Object(i.b)(b.K,{mdxType:"ToolbarItem"},Object(i.b)(b.d,{"aria-labelledby":"word-wrapping-options-label",mdxType:"ButtonGroup"},Object(i.b)(b.c,{color:"normal"===t?"dark":"primary",label:"normal",onClick:()=>a("normal"),mdxType:"Button"}),Object(i.b)(b.c,{color:"long-words"===t?"dark":"primary",label:"long-words",onClick:()=>a("long-words"),mdxType:"Button"}),Object(i.b)(b.c,{color:"anywhere"===t?"dark":"primary",label:"anywhere",onClick:()=>a("anywhere"),mdxType:"Button"})))),Object(i.b)(b.J,{align:"baseline",mdxType:"ToolbarGroup"},Object(i.b)(b.K,{mdxType:"ToolbarItem"},Object(i.b)("span",{id:"hyphens-options-label"},"Hyphens:")),Object(i.b)(b.K,{mdxType:"ToolbarItem"},Object(i.b)(b.d,{"aria-labelledby":"hyphens-options-label",mdxType:"ButtonGroup"},Object(i.b)(b.c,{color:"none"===e?"dark":"primary",label:"none",onClick:()=>n("none"),mdxType:"Button"}),Object(i.b)(b.c,{color:"auto"===e?"dark":"primary",label:"auto",onClick:()=>n("auto"),mdxType:"Button"}),Object(i.b)(b.c,{color:"manual"===e?"dark":"primary",label:"manual",onClick:()=>n("manual"),mdxType:"Button"}))))),Object(i.b)(s.a,{width:"11em",bordered:!0,mdxType:"Placeholder"},Object(i.b)(b.D,{hyphens:e,wordWrapping:t,mdxType:"Text"},"manual"===e?Object(i.b)(l.Fragment,null,"LongWord­ThatHasManual­Breaking­Possibilities"):Object(i.b)(l.Fragment,null,"LongWordThatHasNoBreakingPossibilities")," ","and a couple of ordinary words that are nice and well behaved.")))}),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)(p.d,{table:!0,of:b.D,mdxType:"Props"}))}void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!Object.prototype.hasOwnProperty.call(h,"__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/lib/components/Text/README.mdx"}}),h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-lib-components-text-readme-mdx-694a7ad9565c7035bb4c.js.map