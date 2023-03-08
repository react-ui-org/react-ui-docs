(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{AXr1:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n("Fcif"),i=n("dV/x"),o=(n("mXGw"),n("/FXl")),r=n("TjRS");n("aD51");const l=["components"],s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!Object.prototype.hasOwnProperty.call(s,"__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/customize/theming/overview.mdx"}});const b={_frontmatter:s},c=r.a;function p(e){let{components:t}=e,n=Object(i.a)(e,l);return Object(o.b)(c,Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"theming"},"Theming"),Object(o.b)("p",null,"From the very beginning, React UI has been designed with a great emphasis on\ncustomizability. We decided to leverage ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"},"CSS custom properties")," for this feature\nfor two main reasons:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"We take advantage of the possibilities of ",Object(o.b)("strong",{parentName:"p"},"native CSS"),". Preprocessors are\nstill a thing, but it's not necessary to go as far as for CSS-in-JS to make\na UI customizable, not even speaking of performance.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Thanks to JavaScript API, CSS custom properties are both ",Object(o.b)("strong",{parentName:"p"},"readable and\nwritable by JS"),"."))),Object(o.b)("h2",{id:"theming-options"},"Theming Options"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/foundation/design-tokens"},"Design tokens")," define common visual properties like\ncolors, fonts, borders, shadows, or spacing. ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"},"CSS custom properties")," are the\ntechnical representation of the design tokens in React UI."),Object(o.b)("p",null,"All CSS custom properties in React UI come prefixed with ",Object(o.b)("inlineCode",{parentName:"p"},"rui")," so they don't\nget in the way of other custom properties in your project."),Object(o.b)("p",null,"You can adjust any of the properties in your styles. See the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/react-ui-org/react-ui/blob/master/src/lib/theme.scss"},"default theme")," for\nthe full list of available design tokens."),Object(o.b)("h3",{id:"global-and-semantic-design-tokens"},"Global and Semantic Design Tokens"),Object(o.b)("p",null,"Global and semantic token names are not complex or long. That is why they are\nsimply lowercase and hyphenated."),Object(o.b)("p",null,"The names are written in the following format:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"--rui-<type>-[<group>]-<name>-[<state>]")),Object(o.b)("p",null,"Where:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<type>")," is one of: ",Object(o.b)("inlineCode",{parentName:"li"},"color"),", ",Object(o.b)("inlineCode",{parentName:"li"},"dimension"),", ",Object(o.b)("inlineCode",{parentName:"li"},"font-family"),", ",Object(o.b)("inlineCode",{parentName:"li"},"font-weight"),",\n",Object(o.b)("inlineCode",{parentName:"li"},"shadow"),", as suggested by the ",Object(o.b)("a",{parentName:"li",href:"https://design-tokens.github.io/community-group/format/"},"Design Tokens Format")," proposal. However,\nadditional custom types like ",Object(o.b)("inlineCode",{parentName:"li"},"font-size"),", ",Object(o.b)("inlineCode",{parentName:"li"},"line-height"),", or ",Object(o.b)("inlineCode",{parentName:"li"},"text-decoration"),"\nhave been added as they proved necessary."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<group>")," optionally groups multiple related values, e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"text"),",\n",Object(o.b)("inlineCode",{parentName:"li"},"background"),", ",Object(o.b)("inlineCode",{parentName:"li"},"action"),", etc."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<name>")," is the name of the token, e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"primary"),", ",Object(o.b)("inlineCode",{parentName:"li"},"base"),", or ",Object(o.b)("inlineCode",{parentName:"li"},"light"),". Scales\ncan be presented as numbered sequences, e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"space-[0-7]"),", ",Object(o.b)("inlineCode",{parentName:"li"},"size-[1-6]"),", etc."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<state>")," describes additional interaction variants of the token: ",Object(o.b)("inlineCode",{parentName:"li"},"hover"),",\n",Object(o.b)("inlineCode",{parentName:"li"},"focus"),", ",Object(o.b)("inlineCode",{parentName:"li"},"active"),", or ",Object(o.b)("inlineCode",{parentName:"li"},"disabled"),".")),Object(o.b)("p",null,"Example global and semantic design tokens represented by CSS custom properties:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-css"},':root {\n  --rui-color-text-primary: #000;\n  --rui-dimension-space-3: 0.75rem;\n  --rui-font-family-base: "Titillium Web", helvetica, roboto, arial, sans-serif;\n}\n')),Object(o.b)("p",null,"️👉 Please note that ",Object(o.b)("strong",{parentName:"p"},"breakpoint values are read-only")," (e.g. for JavaScript)\nsince CSS custom properties\n",Object(o.b)("a",{parentName:"p",href:"https://www.w3.org/TR/css-variables-1/#using-variables"},"cannot be used within media queries")," (because a media\nquery is not a CSS property)."),Object(o.b)("h3",{id:"component-tokens"},"Component Tokens"),Object(o.b)("p",null,"It is also possible to adjust some properties on individual components level,\npreferably by reusing (inheriting) the semantic design tokens."),Object(o.b)("p",null,"Due to higher complexity, component tokens use a naming convention that many web\ndevelopers will find familiar because it works like ",Object(o.b)("a",{parentName:"p",href:"https://getbem.com"},"BEM")," (with prefixes and\ncomponent name syntax taken from ",Object(o.b)("a",{parentName:"p",href:"https://suitcss.github.io"},"SUIT CSS"),", to be precise):"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"--rui-<ComponentName>--[<modification(s)>]__[<element>]--[<modification(s)>]__<property>--[<modification>]")),Object(o.b)("p",null,"Where:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<ComponentName>")," stands for the actual component name (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"Button"),",\n",Object(o.b)("inlineCode",{parentName:"li"},"FormField"),", etc.) with a reasonable exception to form fields whose settings\nare widely shared and therefore grouped as ",Object(o.b)("inlineCode",{parentName:"li"},"FormField")," options."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<modifications(s)>")," can be one or more modifiers, typically a variant (e.g.\n",Object(o.b)("inlineCode",{parentName:"li"},"primary"),", ",Object(o.b)("inlineCode",{parentName:"li"},"filled"),", ",Object(o.b)("inlineCode",{parentName:"li"},"box"),") or interaction state (",Object(o.b)("inlineCode",{parentName:"li"},"default"),", ",Object(o.b)("inlineCode",{parentName:"li"},"hover"),",\n",Object(o.b)("inlineCode",{parentName:"li"},"focus"),", ",Object(o.b)("inlineCode",{parentName:"li"},"active"),", ",Object(o.b)("inlineCode",{parentName:"li"},"disabled"),")."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<element>")," stands for a nested element of the component."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<property>")," is usually a CSS property (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"color"),", ",Object(o.b)("inlineCode",{parentName:"li"},"background"),",\n",Object(o.b)("inlineCode",{parentName:"li"},"background-color"),", ",Object(o.b)("inlineCode",{parentName:"li"},"width"),", ",Object(o.b)("inlineCode",{parentName:"li"},"box-shadow"),"), or a brief property description\nwhere a CSS property wouldn't tell enough (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"initial-offset"),",\n",Object(o.b)("inlineCode",{parentName:"li"},"check-background-color"),", ",Object(o.b)("inlineCode",{parentName:"li"},"tap-target-size"),").")),Object(o.b)("p",null,"Example component tokens:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-css"},":root {\n  --rui-Button--filled--primary--default__color: var(--rui-color-action-on-primary);\n  --rui-Button--filled--primary--default__border-color: var(--rui-color-action-primary);\n  --rui-Button--filled--primary--default__background: var(--rui-color-action-primary);\n  --rui-Button--filled--primary--default__box-shadow: none;\n  --rui-Button--filled--primary--hover__color: var(--rui-color-action-on-primary);\n  --rui-Button--filled--primary--hover__border-color: var(--rui-color-action-primary-hover);\n  --rui-Button--filled--primary--hover__background: var(--rui-color-action-primary-hover);\n  --rui-Button--filled--primary--hover__box-shadow: none;\n}\n")),Object(o.b)("h2",{id:"best-practices"},"Best Practices"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"It's a good idea to start with changing the ",Object(o.b)("strong",{parentName:"p"},"global tokens first"),". Adjust\nany context-agnostic values to see how the system reacts and scales.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Widely reused context-aware settings such as semantic colors, typography, or\nborders define the character of your design system which is stored in the\n",Object(o.b)("strong",{parentName:"p"},"semantic tokens")," layer.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Having finished the customization at the global and semantic level, you can\n",Object(o.b)("strong",{parentName:"p"},"then proceed to customize the appearance of individual components")," — if\nnecessary at all."),Object(o.b)("p",{parentName:"li"},"Even then you should also reuse existing semantic design tokens as much as\npossible to ensure that your UI is consistent and works as a system."),Object(o.b)("p",{parentName:"li"},"For the same reason, if you have any custom components in your UI, you should\n",Object(o.b)("strong",{parentName:"p"},"reuse the semantic design tokens in your own CSS")," too."))),Object(o.b)("h2",{id:"css-or-sass"},"CSS, or Sass?"),Object(o.b)("p",null,"Colors, breakpoints, and SVG definitions used in ",Object(o.b)("inlineCode",{parentName:"p"},"theme.scss")," are preprocessed\nwith Sass first. This enables us to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"generate our internal color palette programmatically,"),Object(o.b)("li",{parentName:"ul"},"keep actual breakpoint values in a single place in the code,"),Object(o.b)("li",{parentName:"ul"},"keep ",Object(o.b)("inlineCode",{parentName:"li"},"theme.scss")," uncluttered by inline SVG.")),Object(o.b)("p",null,"It's entirely up to you what format you decide to use for storing the theme.\nBoth ",Object(o.b)("inlineCode",{parentName:"p"},"theme.scss")," and ",Object(o.b)("inlineCode",{parentName:"p"},"theme.css")," will work equally well. It only matters if the\ncustom properties make it from the theme file to the browser."),Object(o.b)("p",null,"👉 Just remember everything in the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/react-ui-org/react-ui/blob/master/src/lib/styles/theme-constants"},"theme constants")," directory is intended only\nfor usage within ",Object(o.b)("inlineCode",{parentName:"p"},"theme.scss"),". Otherwise, the theming system may not work as\nexpected. We recommend calling custom properties from ",Object(o.b)("inlineCode",{parentName:"p"},"theme.scss")," either\ndirectly in your stylesheet, or through an intermediate, shareable layer like\n",Object(o.b)("inlineCode",{parentName:"p"},"MyComponent/_theme.scss")," or\n",Object(o.b)("inlineCode",{parentName:"p"},"styles/shared-by-components/_my-sass-variables-referring-to-theme.scss"),"\n(the latter of which is the approach we use)."))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!Object.prototype.hasOwnProperty.call(p,"__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/customize/theming/overview.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-customize-theming-overview-mdx-540bd69c82ee02c75dca.js.map