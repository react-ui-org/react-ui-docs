(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"3tlZ":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return b}));var o=n("Fcif"),a=n("dV/x"),i=(n("mXGw"),n("/FXl")),r=n("TjRS");n("aD51");const c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/foundation/accessibility.mdx"}});const s={_frontmatter:c},l=r.a;function b(e){let{components:t}=e,n=Object(a.a)(e,["components"]);return Object(i.b)(l,Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"accessibility"},"Accessibility"),Object(i.b)("p",null,"React UI bakes accessibility principles right into its core."),Object(i.b)("p",null,"👉 You can adjust all custom properties on this page (and more) in your theme by\noverriding values in the\n",Object(i.b)("a",{parentName:"p",href:"/customize/theming/overview#design-tokens"},"design tokens")," section."),Object(i.b)("h2",{id:"touch-friendliness"},"Touch Friendliness"),Object(i.b)("p",null,"The active area of interactive elements should be properly sized so that the\nelements can be easily targeted on touch screens. Recommended dimensions may\nvary from platform to platform, however a commonly used size is 7–10 mm."),Object(i.b)("p",null,"Default tap target size in React UI is set to ",Object(i.b)("strong",{parentName:"p"},"10 mm")," and is used by all\npotentially small interactive components like ",Object(i.b)("a",{parentName:"p",href:"/components/ui/alert"},"Alert"),"\nclose button, ",Object(i.b)("a",{parentName:"p",href:"/components/ui/checkbox-field"},"CheckboxField"),", or\n",Object(i.b)("a",{parentName:"p",href:"/components/ui/toggle"},"Toggle"),". Tap target size can be adjusted via the\n",Object(i.b)("inlineCode",{parentName:"p"},"--rui-tap-target-size")," custom property (see\n",Object(i.b)("a",{parentName:"p",href:"/customize/theming/overview"},"Theming")," to learn how)."),Object(i.b)("p",null,"📖 ",Object(i.b)("a",{parentName:"p",href:"https://www.nngroup.com/articles/touch-target-size/"},"Read more about touch targets at Norman Nielsen Group.")),Object(i.b)("h3",{id:"form-fields-and-reserved-space"},"Form Fields and Reserved Space"),Object(i.b)("p",null,"Note that form fields with potentially small inputs (like\n",Object(i.b)("a",{parentName:"p",href:"/components/ui/checkbox-field"},"CheckboxField")," or\n",Object(i.b)("a",{parentName:"p",href:"/components/ui/toggle"},"Toggle"),") reserve vertical space corresponding to the\nminimum tap target size. In other words, form fields ",Object(i.b)("strong",{parentName:"p"},"box model is taller."),"\nThe reason behind this behaviour is that in many cases the minimum tap target\nsize could overflow its component's box model and tap targets of neighboring\ncomponents could collide. The extra added space prevents this."),Object(i.b)("p",null,"However, if placed inside ",Object(i.b)("a",{parentName:"p",href:"/components/layout/form-layout"},"FormLayout"),", form\nfields do not add any extra vertical space because it is already provided by\n",Object(i.b)("inlineCode",{parentName:"p"},"FormLayout")," row gap. Remember to check that form fields in your ",Object(i.b)("inlineCode",{parentName:"p"},"FormLayout"),"\nare properly spaced and interactive elements do not collide should you decide to\nmake any changes to ",Object(i.b)("inlineCode",{parentName:"p"},"--rui-tap-target-size"),",\n",Object(i.b)("inlineCode",{parentName:"p"},"--rui-FormField--check__tap-target-size")," or ",Object(i.b)("inlineCode",{parentName:"p"},"--rui-FormLayout__row-gap")," options."),Object(i.b)("p",null,"Horizontal padding is never added to form fields box model so it does not make\ntheir horizontal alignment complicated."),Object(i.b)("h2",{id:"keyboard-friendliness"},"Keyboard Friendliness"),Object(i.b)("p",null,"Many people use keyboard to control their computer. Interactive elements in\nReact UI are ",Object(i.b)("strong",{parentName:"p"},"highlighted on focus")," so keyboard users can easily tab over\nthem and see what control currently has focus."),Object(i.b)("p",null,"Check form fields like ",Object(i.b)("a",{parentName:"p",href:"/components/ui/checkbox-field"},"CheckboxField")," or\n",Object(i.b)("a",{parentName:"p",href:"/components/ui/toggle"},"Toggle")," obtain a blue outline on focus (which is to be\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/react-ui-org/react-ui/issues/240"},"spread over all interactive elements"),"\neventually). Appearance of focus highlight can be adjusted via the\n",Object(i.b)("inlineCode",{parentName:"p"},"--rui-focus-box-shadow")," custom property (see ",Object(i.b)("a",{parentName:"p",href:"/customize/theming"},"Theming"),"\nto learn how)."),Object(i.b)("p",null,"📖 ",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Keyboard"},"Read more about keyboard accessibility at MDN.")))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/foundation/accessibility.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-foundation-accessibility-mdx-dcdea9f96cbcebf07ee2.js.map