(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[86],{98396:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var o=n(67294),r=n(34168),i=n(20539),a=n(58974);function c(e,t={}){const n=(0,r.Z)(),c="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,{defaultMatches:l=!1,matchMedia:s=(c?window.matchMedia:null),noSsr:u=!1,ssrMatchMedia:f=null}=(0,i.Z)({name:"MuiUseMediaQuery",props:t,theme:n});let d="function"===typeof e?e(n):e;d=d.replace(/^@media( ?)/m,"");const[p,m]=o.useState((()=>u&&c?s(d).matches:f?f(d).matches:l));return(0,a.Z)((()=>{let e=!0;if(!c)return;const t=s(d),n=()=>{e&&m(t.matches)};return n(),t.addListener(n),()=>{e=!1,t.removeListener(n)}}),[d,s,c]),p}},96542:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post",function(){return n(56524)}])},48418:function(e,t,n){"use strict";function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(l){r=!0,i=l}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var r,i=(r=n(67294))&&r.__esModule?r:{default:r},a=n(76273),c=n(90387),l=n(57190);var s={};function u(e,t,n,o){if(e&&a.isLocalURL(t)){e.prefetch(t,n,o).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;s[t+"%"+n+(r?"%"+r:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,r=c.useRouter(),f=i.default.useMemo((function(){var t=o(a.resolveHref(r,e.href,!0),2),n=t[0],i=t[1];return{href:n,as:e.as?a.resolveHref(r,e.as):i||n}}),[r,e.href,e.as]),d=f.href,p=f.as,m=e.children,h=e.replace,v=e.shallow,g=e.scroll,x=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var y=(t=i.default.Children.only(m))&&"object"===typeof t&&t.ref,b=o(l.useIntersection({rootMargin:"200px"}),2),w=b[0],j=b[1],M=i.default.useCallback((function(e){w(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,w]);i.default.useEffect((function(){var e=j&&n&&a.isLocalURL(d),t="undefined"!==typeof x?x:r&&r.locale,o=s[d+"%"+p+(t?"%"+t:"")];e&&!o&&u(r,d,p,{locale:t})}),[p,d,j,x,n,r]);var S={ref:M,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,i,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==c&&o.indexOf("#")>=0&&(c=!1),t[r?"replace":"push"](n,o,{shallow:i,locale:l,scroll:c}))}(e,r,d,p,h,v,g,x)},onMouseEnter:function(e){a.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(r,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof x?x:r&&r.locale,L=r&&r.isLocaleDomain&&a.getDomainLocale(p,k,r&&r.locales,r&&r.domainLocales);S.href=L||a.addBasePath(a.addLocale(p,k,r&&r.defaultLocale))}return i.default.cloneElement(t,S)};t.default=f},57190:function(e,t,n){"use strict";function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(l){r=!0,i=l}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,l=r.useRef(),s=o(r.useState(!1),2),u=s[0],f=s[1],d=r.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||u||e&&e.tagName&&(l.current=function(e,t,n){var o=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var o=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:r,elements:o}),n}(n),r=o.id,i=o.observer,a=o.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return r.useEffect((function(){if(!a&&!u){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),[d,u]};var r=n(67294),i=n(9311),a="undefined"!==typeof IntersectionObserver;var c=new Map},56524:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return l},default:function(){return s}});var o=n(85893),r=n(9008),i=n(41664),a=n(22294),c=n(91127),l=!0;function s(e){var t=e.posts;return(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(r.default,{children:(0,o.jsx)("title",{children:c.p})}),(0,o.jsx)("div",{className:"space-y-12",children:t.map((function(e){return(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{className:"text-2xl font-bold mb-4",children:(0,o.jsx)(i.default,{href:"/post/".concat(e.slug),children:(0,o.jsx)("a",{children:e.title})})}),(0,o.jsx)("p",{children:e.description})]},e.slug)}))})]})}},80938:function(e,t,n){"use strict";n.d(t,{S:function(){return i}});var o=n(67294),r=(0,o.createContext)(void 0);function i(){return(0,o.useContext)(r)}t.Z=r},22294:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var o=n(85893),r=n(2734),i=n(98396),a=n(99226),c=n(33047),l=n(9008),s=n(11163),u=n(86704),f=n(91127),d={description:"".concat(f.p," provides awesome food recipes."),ogImagePath:"/assets/card-image.webp"},p=function(e){var t=e.pageTitle,n=(0,s.useRouter)(),r=u.Z.siteURL+n.asPath,i="/"===n.pathname?"website":"article",a=t||"Awesome food recipes",c=u.Z.siteURL+d.ogImagePath;return(0,o.jsxs)(l.default,{children:[(0,o.jsx)("title",{children:"".concat(t," | ").concat(f.p)}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,o.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,o.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#5bbad5"}),(0,o.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,o.jsx)("meta",{name:"msapplication-TileColor",content:"#00a300"}),(0,o.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,o.jsx)("meta",{name:"theme-color",content:"#fff"}),(0,o.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,o.jsx)("meta",{name:"description",content:d.description},"description"),(0,o.jsx)("meta",{property:"og:url",content:r}),(0,o.jsx)("meta",{property:"og:type",content:i}),(0,o.jsx)("meta",{property:"og:site_name",content:f.p}),(0,o.jsx)("meta",{property:"og:title",content:a}),(0,o.jsx)("meta",{property:"og:description",content:d.description},"ogDescription"),(0,o.jsx)("meta",{property:"og:image",content:c},"ogImage"),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{name:"twitter:site",content:f.S})]})},m=n(80938);function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(l){r=!0,i=l}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v=function(e){var t,n=e.children,l=e.pageTitle,s=(0,r.Z)(),u=((0,i.Z)(s.breakpoints.down("sm")),h((0,c.Z)(),2)),f=u[0],d=u[1].width,v=(null!==(t=(0,m.S)())&&void 0!==t?t:{}).sidebarWidth,g=void 0===v?0:v,x=0;return!isNaN(d)&&d>0&&(x=Math.min(+d.toFixed(0),840)),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p,{pageTitle:l}),(0,o.jsx)(a.Z,{sx:{color:"#111827",overflow:"hidden",pb:10,"& article.mdx-article":{maxWidth:x<=0?0:"".concat(x-56,"px"),marginLeft:"auto",marginRight:"auto"},"& h1":{fontSize:"1.65rem",fontWeight:900,mb:4,pb:1,pl:0,textAlign:"center",borderBottom:"1px solid #ccc"},"& h2":{fontSize:"1.45rem",fontWeight:700,mt:4,mb:1},"& h3":{fontSize:"1.3rem",fontWeight:600,color:"#000",mt:4,mb:1},"& h4":{mt:3,mb:1,color:"#111",fontSize:"1.15rem",fontWeight:600},"& h5":{m:0,mt:1,color:"#333",fontSize:"1.0rem",fontWeight:600},"& h6":{m:0,mt:1,color:"#444",fontSize:"0.95rem",fontWeight:600,lineHeight:"1.9rem"},"& p":{m:0,color:"#444",mt:"0.5rem",mb:"0.5rem",fontSize:"0.95rem",fontWeight:400,lineHeight:"1.75rem"},"& > pre":{overflow:"auto",position:"relative",wordWrap:"break-word"},"& pre":{backgroundColor:"#1f2937",fontFamily:"'Noto Sans KR','Nanum Gothic Coding', ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",marginBottom:"16px"},"& :not(pre) > code":{backgroundColor:"transparent",position:"relative",color:"#000",fontWeight:600,paddingLeft:"0.4em",paddingRight:"0.4em",fontFamily:"'Noto Sans KR','Nanum Gothic Coding', ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",fontSize:"85%",lineHeight:1.5,wordBreak:"break-word",whiteSpace:"nowrap","&::before":{position:"absolute",content:'""',top:-2,right:0,left:0,bottom:-2,zIndex:0,borderRadius:"6px",background:"rgba(175,183,193,0.2)",padding:"0.2em 0.4em"}},"& pre > code":{padding:0,color:"inherit",background:"inherit",whiteSpace:"pre",fontFamily:"'Nanum Gothic Coding', ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace"},"& ul > li,& ol > li":{lineHeight:1.8},"& ul > li + li,& ol > li + li":{mt:.5}},children:(0,o.jsx)(a.Z,{ref:f,sx:{position:"relative",width:"calc(100vw - ".concat(g,"px)"),maxWidth:"calc(100vw - ".concat(g,"px)"),overflowX:"hidden"},children:(0,o.jsx)(a.Z,{sx:{display:x<=0?"none":"block",maxWidth:"".concat(840,"px"),marginLeft:"auto",marginRight:"auto"},children:n})})})]})}},91127:function(e,t,n){"use strict";n.d(t,{p:function(){return o},S:function(){return r}});var o="AI \ucf54\ub529\ube14\ub85d \uac1c\ubc1c\uc790 \uac00\uc774\ub4dc",r="@ktaicoder"},41664:function(e,t,n){e.exports=n(48418)}},function(e){e.O(0,[774,888,179],(function(){return t=96542,e(e.s=t);var t}));var t=e.O();_N_E=t}]);