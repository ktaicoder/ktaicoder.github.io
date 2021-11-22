"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[36],{71198:function(e,n,t){t.d(n,{Z:function(){return u}});var o=t(85893),r=t(67294),i=function(e,n){var t=(0,r.useRef)(null);(0,r.useEffect)((function(){t.current=n}),[n]),(0,r.useEffect)((function(){for(var n=e,o=[],r=0;r<n.length;r++){var i=n[r];o.push(i.src)}for(var a=function(e){var n,r=e.target;null===(n=t.current)||void 0===n||n.call(t,r.src,o)},c=0;c<n.length;c++)n[c].addEventListener("click",a);return function(){for(var n=e,t=0;t<n.length;t++)n[t].removeEventListener("click",a)}}),[e])},a=t(92879);t(4019);function c(e,n,t){return Math.min(Math.max(e,n),t)}function l(e){var n=e.open,t=e.onClose,i=e.disableEscKeydown,l=void 0!==i&&i,s=e.title,u=e.imageUrls,f=void 0===u?[]:u,p=e.startIndex,d=void 0===p?0:p,m=(0,r.useState)((function(){return d})),g=m[0],h=m[1],b=(0,r.useMemo)((function(){return function(e){for(var n=[],t=e.length,o=0;o<t;o++)n.push({url:e[o],prev:o-1>=0?e[o-1]:void 0,next:o+1<t?e[o+1]:void 0});return n}(f)}),[f]);(0,r.useEffect)((function(){n&&(f&&0!==f.length||t())}),[n,t,f]);if((0,r.useEffect)((function(){if(!l){var e=function(e){"Escape"===e.key&&(e.preventDefault(),t())};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}}),[l,t]),!n)return null;var x=b[g],v=b.length>1?"".concat(g+1," / ").concat(b.length):void 0;return(0,o.jsx)(o.Fragment,{children:x&&(0,o.jsx)(a.Z,{mainSrc:x.url,prevSrc:x.prev,nextSrc:x.next,onMoveNextRequest:function(){h(c(g+1,0,b.length-1))},onMovePrevRequest:function(){h(c(g-1,0,b.length-1))},imageTitle:s,imageCaption:v,onCloseRequest:function(){t()},reactModalStyle:{overlay:{zIndex:1500}}})})}function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e){var n=e.cssSelector,t=e.multiple,a=e.onOpen,c=e.revision,u=void 0===c?0:c,f=(0,r.useState)(),p=f[0],d=f[1],m=(0,r.useState)(),g=m[0],h=m[1],b=(0,r.useState)([]),x=b[0],v=b[1];(0,r.useEffect)((function(){var e=document.querySelectorAll(n),t=Array.prototype.slice.call(e);v(t)}),[n,u]);var y=function(){h(void 0),d(void 0)};i(x,(function(e,n){if(t){h("ImageViewLightbox");var o=n.indexOf(e);d({imageUrls:n,startIndex:(r=o,i=0,a=n.length-1,Math.min(Math.max(r,i),a)),onClose:y})}else h("ImageViewLightbox"),d({imageUrls:[e],startIndex:0,onClose:y});var r,i,a}));var w=x.length>0&&"ImageViewLightbox"===g;return(0,r.useEffect)((function(){null===a||void 0===a||a(w)}),[w,a]),x.length>0&&"ImageViewLightbox"===g&&p?(0,o.jsx)(l,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){s(e,n,t[n])}))}return e}({open:!0},p)):null}},55900:function(e,n,t){t.d(n,{Z:function(){return M}});var o=t(83321),r=t(99226),i=t(5152),a=t(41245),c=t(85893),l=function(e){var n=e.directions;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h2",{children:"Directions"}),(0,c.jsx)("ol",{children:n.map((function(e,n){return(0,c.jsx)("li",{children:e},n)}))})]})},s=function(e){var n=e.ingredients;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h2",{children:"Ingredients"}),(0,c.jsx)("ul",{children:n.map((function(e,n){return(0,c.jsx)("li",{children:e},n)}))})]})},u=t(15861),f=t(67294),p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function d(e){var n=null!==e&&void 0!==e?e:function(e){for(var n="",t=p.length,o=0;o<e;o++)n+=p.charAt(Math.floor(Math.random()*t));return n}(5)+"-",t=Math.random().toString().substring(2,7),o=Math.random().toString().substring(2,7);return"".concat(n).concat(t).concat(o)}var m=t(16195),g=t(71198);function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){h(e,n,t[n])}))}return e}function x(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){v(e,n,t[n])}))}return e}function w(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var j=t(66267);function O(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){O(e,n,t[n])}))}return e}function k(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var M={Ingredients:s,Directions:l,Tips:(0,i.default)((function(){return t.e(626).then(t.bind(t,45626))}),{loadableGenerated:{webpack:function(){return[45626]},modules:["../src/components/mdx/MdxComponents.ts -> src/components/mdx/Tips"]}}),SyntaxHighlighter:a.Z,Button:o.Z,Box:r.Z,MdxImageView:function(e){var n=e.src,t=e.caption,o=e.sx,i=x(e,["src","caption","sx"]),a=(0,f.useRef)(),l=(0,f.useState)(),s=l[0],p=l[1],h=(0,f.useState)(!1),v=h[0],y=h[1];return(0,f.useEffect)((function(){if(a.current){var e=a.current,n=d("imageBox");e.classList.add(n),p(n),y(window.self===window.top||window.parent===window.top)}}),[]),(0,c.jsxs)(r.Z,{ref:a,sx:{background:"#f0f0f0",borderRadius:2,pt:2,pb:1,px:2,mt:2,mb:4,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[(0,c.jsx)(r.Z,b({component:"img",className:"lightbox",src:(0,m.e_)(n),sx:b({maxWidth:"100%"},o)},i,{alt:null!==t&&void 0!==t?t:""})),t&&(0,c.jsx)(u.Z,{variant:"caption",sx:{mt:1},children:t}),v&&s&&(0,c.jsx)(g.Z,{revision:a.current,cssSelector:".".concat(s," > .lightbox"),multiple:!1})]})},MdxTextBox:function(e){var n=e.sx,t=e.children,o=w(e,["sx","children"]),i=(0,f.useRef)();return(0,c.jsx)(r.Z,y({ref:i,sx:y({display:"block",background:"#eee",px:3,py:2,my:2,borderRadius:2,"& > ul":{pl:2,pr:0}},n)},o,{children:t}))},PostLink:function(e){var n=e.children,t=e.sx,o=e.type,i=void 0===o?"_dialog":o,a=e.postId,l=k(e,["children","sx","type","postId"]);return(0,c.jsxs)(r.Z,S({onClick:function(){"_dialog"===i?window.self===window.top||window.parent===window.top?j.Y.post.openDialog.send({postId:a}):(0,m.J5)("/post/".concat(a)):"_new"===i?null===window||void 0===window||window.open((0,m.e_)("/post-frame/".concat(a)),"_blank"):(0,m.J5)("/post-frame/".concat(a))},component:"span",sx:S({position:"relative",color:"blue",cursor:"pointer",display:"inline-block",px:.2,":hover":{color:"secondary.main",backgroundColor:"rgba(0,0,0,0.05)",borderRadius:"4px"}},t)},l,{children:[n,(0,c.jsx)(r.Z,{component:"span",sx:{position:"absolute",top:0,left:-2,width:"4px",height:"4px",bgcolor:"secondary.main",borderRadius:"50%",content:'""'}})]}))},Typography:u.Z}},22294:function(e,n,t){t.d(n,{Z:function(){return h}});var o=t(85893),r=t(2734),i=t(98396),a=t(99226),c=t(33047),l=t(9008),s=t(11163),u=t(86704),f=t(91127),p={description:"".concat(f.p," provides awesome food recipes."),ogImagePath:"/assets/card-image.webp"},d=function(e){var n=e.pageTitle,t=(0,s.useRouter)(),r=u.Z.siteURL+t.asPath,i="/"===t.pathname?"website":"article",a=n||"Awesome food recipes",c=u.Z.siteURL+p.ogImagePath;return(0,o.jsxs)(l.default,{children:[(0,o.jsx)("title",{children:"".concat(n," | ").concat(f.p)}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,o.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,o.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#5bbad5"}),(0,o.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,o.jsx)("meta",{name:"msapplication-TileColor",content:"#00a300"}),(0,o.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,o.jsx)("meta",{name:"theme-color",content:"#fff"}),(0,o.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,o.jsx)("meta",{name:"description",content:p.description},"description"),(0,o.jsx)("meta",{property:"og:url",content:r}),(0,o.jsx)("meta",{property:"og:type",content:i}),(0,o.jsx)("meta",{property:"og:site_name",content:f.p}),(0,o.jsx)("meta",{property:"og:title",content:a}),(0,o.jsx)("meta",{property:"og:description",content:p.description},"ogDescription"),(0,o.jsx)("meta",{property:"og:image",content:c},"ogImage"),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{name:"twitter:site",content:f.S})]})},m=t(80938);function g(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);o=!0);}catch(l){r=!0,i=l}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h=function(e){var n,t=e.children,l=e.pageTitle,s=(0,r.Z)(),u=((0,i.Z)(s.breakpoints.down("sm")),g((0,c.Z)(),2)),f=u[0],p=u[1].width,h=(null!==(n=(0,m.S)())&&void 0!==n?n:{}).sidebarWidth,b=void 0===h?0:h,x=0;return!isNaN(p)&&p>0&&(x=Math.min(+p.toFixed(0),840)),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d,{pageTitle:l}),(0,o.jsx)(a.Z,{sx:{color:"#111827",overflow:"hidden",pb:10,"& article.mdx-article":{maxWidth:x<=0?0:"".concat(x-56,"px"),marginLeft:"auto",marginRight:"auto"},"& h1":{fontSize:"1.65rem",fontWeight:900,mb:4,pb:1,pl:0,textAlign:"center",borderBottom:"1px solid #ccc"},"& h2":{fontSize:"1.45rem",fontWeight:700,mt:4,mb:1},"& h3":{fontSize:"1.3rem",fontWeight:600,color:"#000",mt:4,mb:1},"& h4":{mt:3,mb:1,color:"#111",fontSize:"1.15rem",fontWeight:600},"& h5":{m:0,mt:1,color:"#333",fontSize:"1.0rem",fontWeight:600},"& h6":{m:0,mt:1,color:"#444",fontSize:"0.95rem",fontWeight:600,lineHeight:"1.9rem"},"& p":{m:0,color:"#444",mt:"0.5rem",mb:"0.5rem",fontSize:"0.95rem",fontWeight:400,lineHeight:"1.75rem"},"& > pre":{overflow:"auto",position:"relative",wordWrap:"break-word"},"& pre":{backgroundColor:"#1f2937",fontFamily:"'Noto Sans KR','Nanum Gothic Coding', ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",marginBottom:"16px"},"& :not(pre) > code":{backgroundColor:"transparent",position:"relative",color:"#000",fontWeight:600,paddingLeft:"0.4em",paddingRight:"0.4em",fontFamily:"'Noto Sans KR','Nanum Gothic Coding', ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",fontSize:"85%",lineHeight:1.5,wordBreak:"break-word",whiteSpace:"nowrap","&::before":{position:"absolute",content:'""',top:-2,right:0,left:0,bottom:-2,zIndex:0,borderRadius:"6px",background:"rgba(175,183,193,0.2)",padding:"0.2em 0.4em"}},"& pre > code":{padding:0,color:"inherit",background:"inherit",whiteSpace:"pre",fontFamily:"'Nanum Gothic Coding', ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace"},"& ul > li,& ol > li":{lineHeight:1.8},"& ul > li + li,& ol > li + li":{mt:.5}},children:(0,o.jsx)(a.Z,{ref:f,sx:{position:"relative",width:"calc(100vw - ".concat(b,"px)"),maxWidth:"calc(100vw - ".concat(b,"px)"),overflowX:"hidden"},children:(0,o.jsx)(a.Z,{sx:{display:x<=0?"none":"block",maxWidth:"".concat(840,"px"),marginLeft:"auto",marginRight:"auto"},children:t})})})]})}},91127:function(e,n,t){t.d(n,{p:function(){return o},S:function(){return r}});var o="AI \ucf54\ub529\ube14\ub85d \uac1c\ubc1c\uc790 \uac00\uc774\ub4dc",r="@ktaicoder"}}]);