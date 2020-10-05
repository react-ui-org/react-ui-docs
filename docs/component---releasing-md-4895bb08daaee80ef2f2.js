(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{ux0G:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return c}));var n=a("k0FJ"),r=a("yHgN"),i=(a("mXGw"),a("/FXl")),l=a("TjRS");a("aD51");const o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"RELEASING.md"}});const b={_frontmatter:o},s=l.a;function c(e){let{components:t}=e,a=Object(r.a)(e,["components"]);return Object(i.b)(s,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"releasing"},"Releasing"),Object(i.b)("p",null,"The release process is fully automated. The only condition is that contributors\nmust follow the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/contribute/guidelines"}),"contributing guidelines"),"."),Object(i.b)("p",null,"How it works:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Pull requests are automatically labelled based on branch name. The labels are\nused for:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"resolving next ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://semver.org"}),"semantic version number"),"\n(BREAKING.FEATURE.PATCH)"),Object(i.b)("li",{parentName:"ul"},"grouping changes in changelog"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Release changelog is generated as pull requests are merged into the ",Object(i.b)("inlineCode",{parentName:"p"},"master"),"\nbranch. Invididual PR names are listed and grouped by type based on the label\nadded to them previously."))),Object(i.b)("p",null,"See the source of ",Object(i.b)("inlineCode",{parentName:"p"},".github/workflows")," for details."),Object(i.b)("h2",{id:"release-process"},"Release Process"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"As you go:")," make sure all contributions follow the contributing\nguidelines, especially the\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/contribute/guidelines#git-workflow"}),"Git workflow")," (correct PR names and\nbranch names). Check out the release draft on\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-ui-org/react-ui/releases"}),"GitHub releases page")," to\nsee what the changelog looks like and what will be the next version number.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Manual:")," once you are ready to publish a release, bump the version number\nin ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," and ",Object(i.b)("inlineCode",{parentName:"p"},"package-lock.json"),". Make sure it matches the resolved\nversion number in the release draft. Commit as ",Object(i.b)("inlineCode",{parentName:"p"},"Bump version")," in\n",Object(i.b)("inlineCode",{parentName:"p"},"release/<VERSION_NUMBER>")," branch, create a pull request and merge it.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Automatic:")," once the release pull request from step 2 is merged, the\nfollowing actions are triggered automatically:"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"GitHub release draft with name corresponding to the version number from\nstep 2 is published."),Object(i.b)("li",{parentName:"ol"},"Git tag with the version number from step 2 is added to ",Object(i.b)("inlineCode",{parentName:"li"},"master")," branch."),Object(i.b)("li",{parentName:"ol"},"Package is built and published to npm package registry."),Object(i.b)("li",{parentName:"ol"},"Documentation is built and deployed to production.")))))}void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"RELEASING.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---releasing-md-4895bb08daaee80ef2f2.js.map