(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{KEof:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n("k0FJ"),a=n("yHgN"),o=(n("mXGw"),n("/FXl")),s=n("TjRS");n("aD51");const i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/customize/theming.mdx"}});const c={_frontmatter:i},l=s.a;function b(e){let{components:t}=e,n=Object(a.a)(e,["components"]);return Object(o.b)(l,Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"theming"},"Theming"),Object(o.b)("p",null,"From the very beginning, React UI has been designed with a great emphasis on\ncustomizability. We decided to leverage CSS custom properties for this feature\nfor two main reasons:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"We believe in ",Object(o.b)("strong",{parentName:"p"},"power of native CSS"),". Preprocessors are still a thing, but\nit's not necessary to go as far as for CSS-in-JS to make a UI customizable.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Thanks to its JavaScript API, CSS custom properties are both ",Object(o.b)("strong",{parentName:"p"},"readable and\nwritable from JS code"),"."))),Object(o.b)("h2",{id:"theming-options"},"Theming Options"),Object(o.b)("p",null,"CSS custom properties are used to define common visual properties like colors,\nfonts, borders, shadows, or spacing. They come prefixed with ",Object(o.b)("inlineCode",{parentName:"p"},"rui-")," so they\ndon't get in way of other custom properties in your project."),Object(o.b)("p",null,"Example ",Object(o.b)("inlineCode",{parentName:"p"},"theme.scss"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scss"}),":root {\n  // Brand colors\n  --rui-color-primary: #00778b;\n  --rui-color-primary-light: #{lighten(#00778b, 70%)};\n  --rui-color-primary-dark: #{darken(#00778b, 4%)};\n  --rui-color-primary-darker: #{darken(#00778b, 8%)};\n  --rui-color-on-primary: #fff;\n  --rui-color-secondary: #fa4616;\n  --rui-color-secondary-light: #{lighten(#fa4616, 45%)};\n  --rui-color-secondary-dark: #{darken(#fa4616, 4%)};\n  --rui-color-secondary-darker: #{darken(#fa4616, 8%)};\n  --rui-color-on-secondary: #fff;\n}\n")),Object(o.b)("p",null,"It is also possible to adjust some properties on individual components level,\npreferably by reusing the global settings:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scss"}),":root {\n  // Alerts: common properties\n  --rui-alert-border-width: var(--rui-border-width);\n  --rui-alert-border-radius: var(--rui-border-radius);\n  --rui-alert-padding: var(--rui-spacing-2);\n}\n")),Object(o.b)("p",null,"You can adjust any of these options in your styles. See the\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/react-ui-org/react-ui/blob/master/src/lib/theme.scss"}),"default theme"),"\nfor the full list of available settings."),Object(o.b)("p",null,"️👉 Please note that ",Object(o.b)("strong",{parentName:"p"},"breakpoint values are exported as read-only")," since CSS\ncustom properties\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.w3.org/TR/css-variables-1/#using-variables"}),"cannot be used within media queries"),"\n(because media query is not a CSS property)."),Object(o.b)("h2",{id:"best-practices"},"Best Practices"),Object(o.b)("p",null,"It's a good idea to start with changing the ",Object(o.b)("strong",{parentName:"p"},"global settings first"),". Widely\nreused settings such as colors, typography, borders or spacing values should be\nadjusted first because they define the basic appearance of all components."),Object(o.b)("p",null,"Having finished the customization at the global level, you can ",Object(o.b)("strong",{parentName:"p"},"then proceed to\ncustomize the appearance of individual components")," — if necessary at all. Even\nthen you should also reuse existing global settings as much as possible to\nensure that your UI is consistent and works as a system."),Object(o.b)("p",null,"For the same reason, if you have any custom components in your UI, you should\n",Object(o.b)("strong",{parentName:"p"},"reuse the global theming options in your own CSS"),", too."),Object(o.b)("hr",null),Object(o.b)("p",null,"Next: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/customize/translations"}),"Translations →")))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/customize/theming.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-customize-theming-mdx-5016477a088a2b62e7bd.js.map