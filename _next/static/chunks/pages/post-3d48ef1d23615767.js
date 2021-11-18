(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[86],{27948:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var i=n(63366),o=n(87462),r=n(67294),a=(n(45697),n(86010)),s=n(27192),c=n(33616),u=n(90948),d=n(28979);function f(e){return(0,d.Z)("MuiContainer",e)}(0,n(76087).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var m=n(98216),l=n(85893);const p=["className","component","disableGutters","fixed","maxWidth"],h=(0,u.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${(0,m.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}})((({theme:e,ownerState:t})=>(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,n)=>{const i=e.breakpoints.values[n];return 0!==i&&(t[e.breakpoints.up(n)]={maxWidth:`${i}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,o.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}})));var x=r.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiContainer"}),{className:r,component:u="div",disableGutters:d=!1,fixed:x=!1,maxWidth:g="lg"}=n,v=(0,i.Z)(n,p),b=(0,o.Z)({},n,{component:u,disableGutters:d,fixed:x,maxWidth:g}),w=(e=>{const{classes:t,fixed:n,disableGutters:i,maxWidth:o}=e,r={root:["root",o&&`maxWidth${(0,m.Z)(String(o))}`,n&&"fixed",i&&"disableGutters"]};return(0,s.Z)(r,f,t)})(b);return(0,l.jsx)(h,(0,o.Z)({as:u,ownerState:b,className:(0,a.Z)(w.root,r),ref:t},v))}))},96542:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post",function(){return n(56524)}])},56524:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c},default:function(){return u}});var i=n(85893),o=n(9008),r=n(41664),a=n(22294),s=n(91127),c=!0;function u(e){var t=e.posts;return(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(o.default,{children:(0,i.jsx)("title",{children:s.p})}),(0,i.jsx)("div",{className:"space-y-12",children:t.map((function(e){return(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{className:"text-2xl font-bold mb-4",children:(0,i.jsx)(r.default,{href:"/post/".concat(e.slug),children:(0,i.jsx)("a",{children:e.title})})}),(0,i.jsx)("p",{children:e.description})]},e.slug)}))})]})}},86704:function(e,t,n){"use strict";var i=(0,n(11752).default)().publicRuntimeConfig,o={routerBaseURL:i.ROUTER_BASE_URL,apiBaseURL:i.API_BASE_URL,siteURL:i.SITE_URL,debug:Boolean(i.DEBUG)};t.Z=o},22294:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var i=n(85893),o=n(2734),r=n(98396),a=n(99226),s=n(27948),c=n(67294),u=n(72977),d=n(9008),f=n(11163),m=n(86704),l=n(91127),p={description:"".concat(l.p," provides awesome food recipes."),ogImagePath:"/assets/card-image.webp"},h=function(e){var t=e.pageTitle,n=(0,f.useRouter)(),o=m.Z.siteURL+n.asPath,r="/"===n.pathname?"website":"article",a=t||"Awesome food recipes",s=m.Z.siteURL+p.ogImagePath;return(0,i.jsxs)(d.default,{children:[(0,i.jsx)("title",{children:"".concat(t," | ").concat(l.p)}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,i.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,i.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#5bbad5"}),(0,i.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,i.jsx)("meta",{name:"msapplication-TileColor",content:"#00a300"}),(0,i.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,i.jsx)("meta",{name:"theme-color",content:"#fff"}),(0,i.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,i.jsx)("meta",{name:"description",content:p.description},"description"),(0,i.jsx)("meta",{property:"og:url",content:o}),(0,i.jsx)("meta",{property:"og:type",content:r}),(0,i.jsx)("meta",{property:"og:site_name",content:l.p}),(0,i.jsx)("meta",{property:"og:title",content:a}),(0,i.jsx)("meta",{property:"og:description",content:p.description},"ogDescription"),(0,i.jsx)("meta",{property:"og:image",content:s},"ogImage"),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:site",content:l.S})]})};var x=function(e){var t=e.children,n=e.pageTitle,d=(0,o.Z)(),f=((0,r.Z)(d.breakpoints.down("sm")),(0,u.Z)().width),m=(0,c.useState)(0),l=m[0],p=m[1];return(0,c.useEffect)((function(){f&&!isNaN(f)&&f>0&&p(f)}),[f]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h,{pageTitle:n}),(0,i.jsx)(a.Z,{sx:{color:"#111827",overflow:"hidden","& article.mdx-article":{maxWidth:l<=0?"auto":"".concat(l-50,"px")},"& h1":{fontSize:"1.8rem",fontWeight:900,mb:2},"& h2":{fontSize:"1.6rem",fontWeight:800,mt:5,mb:1},"& h3":{fontSize:"1.3rem",fontWeight:600,mt:4,mb:1},"& h4":{mt:3,mb:1,fontSize:"1.2rem",fontWeight:600},"& h5":{mt:1,fontSize:"1.1rem",fontWeight:600},"& h6":{mt:1,fontSize:"1.05rem",fontWeight:600},"& p":{fontSize:"0.95rem",fontWeight:400,lineHeight:"1.8rem"},"& div.code-snippet-wrap":{overflow:"auto",position:"relative",wordWrap:"break-word"},"& pre":{backgroundColor:"#1f2937",fontFamily:"'Noto Sans KR','Nanum Gothic Coding', ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",marginBottom:"16px"},"& :not(pre) > code":{backgroundColor:"#1f2937",color:"#24292f",fontWeight:500,fontFamily:"'Noto Sans KR','Nanum Gothic Coding', ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",background:"rgba(175,183,193,0.2)",padding:"0.2em 0.4em",fontSize:"85%",lineHeight:1.5,wordBreak:"break-word",borderRadius:"6px"},"& pre > code":{padding:0,color:"inherit",background:"inherit",whiteSpace:"pre",fontFamily:"'Nanum Gothic Coding', ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace"},"& ul > li":{lineHeight:1.8},"& ul > li + li":{mt:1}},children:(0,i.jsx)(s.Z,{maxWidth:"md",children:(0,i.jsx)(a.Z,{component:"main",mt:6,mb:4,children:t})})})]})}},91127:function(e,t,n){"use strict";n.d(t,{p:function(){return i},S:function(){return o}});var i="AI \ucf54\ub529\ube14\ub85d \uac1c\ubc1c\uc790 \uac00\uc774\ub4dc",o="@ktaicoder"},76362:function(e,t,n){"use strict";n.d(t,{ZT:function(){return i},on:function(){return o},S1:function(){return r},jU:function(){return a}});var i=function(){};function o(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}function r(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}var a="undefined"!==typeof window},72977:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(67294),o=function(e){(0,i.useEffect)(e,[])},r=function(e){var t=(0,i.useRef)(e);t.current=e,o((function(){return function(){return t.current()}}))},a=function(e){var t=(0,i.useRef)(0),n=(0,i.useState)(e),o=n[0],a=n[1],s=(0,i.useCallback)((function(e){cancelAnimationFrame(t.current),t.current=requestAnimationFrame((function(){a(e)}))}),[]);return r((function(){cancelAnimationFrame(t.current)})),[o,s]},s=n(76362),c=function(e,t){void 0===e&&(e=1/0),void 0===t&&(t=1/0);var n=a({width:s.jU?window.innerWidth:e,height:s.jU?window.innerHeight:t}),o=n[0],r=n[1];return(0,i.useEffect)((function(){if(s.jU){var e=function(){r({width:window.innerWidth,height:window.innerHeight})};return(0,s.on)(window,"resize",e),function(){(0,s.S1)(window,"resize",e)}}}),[]),o}}},function(e){e.O(0,[59,774,888,179],(function(){return t=96542,e(e.s=t);var t}));var t=e.O();_N_E=t}]);