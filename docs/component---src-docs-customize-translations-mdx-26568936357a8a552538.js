(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{odRI:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return b}));var o=t("Fcif"),a=t("dV/x"),l=(t("mXGw"),t("/FXl")),r=t("TjRS");t("aD51");const i=["components"],s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!Object.prototype.hasOwnProperty.call(s,"__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/customize/translations.mdx"}});const c={_frontmatter:s},p=r.a;function b(e){let{components:n}=e,t=Object(a.a)(e,i);return Object(l.b)(p,Object(o.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"translations"},"Translations"),Object(l.b)("p",null,"Some components may contain texts which improve components' accessibility.\nAll texts are in English by default and can be translated to other languages."),Object(l.b)("h2",{id:"translation-approaches"},"Translation Approaches"),Object(l.b)("p",null,"Structure of translations can be found in file\n",Object(l.b)("inlineCode",{parentName:"p"},"src/lib/translations/en.json")," or in a documentation of props of components\nthat support translations."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"You can use ",Object(l.b)("inlineCode",{parentName:"li"},"RUIProvider")," component and pass translated structure\nfrom this file into ",Object(l.b)("inlineCode",{parentName:"li"},"RUIProvider")," as ",Object(l.b)("inlineCode",{parentName:"li"},"translations")," prop to\noverwrite default translations. You have to define all translations for all\ncomponents, otherwise it will not work."),Object(l.b)("li",{parentName:"ol"},"Other option is to overwrite translations locally using ",Object(l.b)("inlineCode",{parentName:"li"},"translations")," prop\nof specific component. You have to define all translations as well.")),Object(l.b)("h3",{id:"local-translations"},"Local Translations"),Object(l.b)("p",null,"If component supports translations, ",Object(l.b)("inlineCode",{parentName:"p"},"translations")," prop and its structure is\npresent in props documentation for a specific component."),Object(l.b)("p",null,"To define translations locally, you need to import component first (e.g. Modal):"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"import { Modal } from '@react-ui-org/react-ui';\n")),Object(l.b)("p",null,"Then pass ",Object(l.b)("inlineCode",{parentName:"p"},"translations")," prop object:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"<Modal translations={{ close: 'Close' }}>\n  // ...\n</Modal>\n")),Object(l.b)("h3",{id:"global-translations"},"Global Translations"),Object(l.b)("p",null,"To define translations globally, you need to import ",Object(l.b)("inlineCode",{parentName:"p"},"RUIProvider")," first:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"import { RUIProvider } from '@react-ui-org/react-ui';\n")),Object(l.b)("p",null,"Then wrap application (or its part) with ",Object(l.b)("inlineCode",{parentName:"p"},"RUIProvider")," with ",Object(l.b)("inlineCode",{parentName:"p"},"translations")," prop object."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"<RUIProvider translations={{\n    Alert: {\n      close: 'Close',\n    },\n    Modal: {\n      close: 'Close',\n    },\n    ScrollView: {\n      next: 'Next',\n      previous: 'Previous',\n    },\n  }}>\n  <Modal>\n    // ...\n  </Modal>\n</RUIProvider>\n")))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!Object.prototype.hasOwnProperty.call(b,"__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/customize/translations.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-customize-translations-mdx-26568936357a8a552538.js.map