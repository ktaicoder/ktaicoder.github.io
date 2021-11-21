"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[36],{71198:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(85893),o=t(67294),i=function(e,n){var t=(0,o.useRef)(null);(0,o.useEffect)((function(){t.current=n}),[n]),(0,o.useEffect)((function(){for(var n=e,r=[],o=0;o<n.length;o++){var i=n[o];r.push(i.src)}for(var c=function(e){var n,o=e.target;null===(n=t.current)||void 0===n||n.call(t,o.src,r)},a=0;a<n.length;a++)n[a].addEventListener("click",c);return function(){for(var n=e,t=0;t<n.length;t++)n[t].removeEventListener("click",c)}}),[e])},c=t(92879);t(4019);function a(e,n,t){return Math.min(Math.max(e,n),t)}function l(e){var n=e.open,t=e.onClose,i=e.disableEscKeydown,l=void 0!==i&&i,s=e.title,u=e.imageUrls,f=void 0===u?[]:u,p=e.startIndex,m=void 0===p?0:p,d=(0,o.useState)((function(){return m})),g=d[0],h=d[1],b=(0,o.useMemo)((function(){return function(e){for(var n=[],t=e.length,r=0;r<t;r++)n.push({url:e[r],prev:r-1>=0?e[r-1]:void 0,next:r+1<t?e[r+1]:void 0});return n}(f)}),[f]);(0,o.useEffect)((function(){n&&(f&&0!==f.length||t())}),[n,t,f]);if((0,o.useEffect)((function(){if(!l){var e=function(e){"Escape"===e.key&&(e.preventDefault(),t())};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}}),[l,t]),!n)return null;var x=b[g],v=b.length>1?"".concat(g+1," / ").concat(b.length):void 0;return(0,r.jsx)(r.Fragment,{children:x&&(0,r.jsx)(c.Z,{mainSrc:x.url,prevSrc:x.prev,nextSrc:x.next,onMoveNextRequest:function(){h(a(g+1,0,b.length-1))},onMovePrevRequest:function(){h(a(g-1,0,b.length-1))},imageTitle:s,imageCaption:v,onCloseRequest:function(){t()},reactModalStyle:{overlay:{zIndex:1500}}})})}function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e){var n=e.cssSelector,t=e.multiple,c=e.onOpen,a=e.revision,u=void 0===a?0:a,f=(0,o.useState)(),p=f[0],m=f[1],d=(0,o.useState)(),g=d[0],h=d[1],b=(0,o.useState)([]),x=b[0],v=b[1];(0,o.useEffect)((function(){var e=document.querySelectorAll(n),t=Array.prototype.slice.call(e);v(t)}),[n,u]);var y=function(){h(void 0),m(void 0)};i(x,(function(e,n){if(t){h("ImageViewLightbox");var r=n.indexOf(e);m({imageUrls:n,startIndex:(o=r,i=0,c=n.length-1,Math.min(Math.max(o,i),c)),onClose:y})}else h("ImageViewLightbox"),m({imageUrls:[e],startIndex:0,onClose:y});var o,i,c}));var j=x.length>0&&"ImageViewLightbox"===g;return(0,o.useEffect)((function(){null===c||void 0===c||c(j)}),[j,c]),x.length>0&&"ImageViewLightbox"===g&&p?(0,r.jsx)(l,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){s(e,n,t[n])}))}return e}({open:!0},p)):null}},55900:function(e,n,t){t.d(n,{Z:function(){return M}});var r=t(83321),o=t(99226),i=t(5152),c=t(41245),a=t(85893),l=function(e){var n=e.directions;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{children:"Directions"}),(0,a.jsx)("ol",{children:n.map((function(e,n){return(0,a.jsx)("li",{children:e},n)}))})]})},s=function(e){var n=e.ingredients;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{children:"Ingredients"}),(0,a.jsx)("ul",{children:n.map((function(e,n){return(0,a.jsx)("li",{children:e},n)}))})]})},u=t(15861),f=t(67294),p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function m(e){var n=null!==e&&void 0!==e?e:function(e){for(var n="",t=p.length,r=0;r<e;r++)n+=p.charAt(Math.floor(Math.random()*t));return n}(5)+"-",t=Math.random().toString().substring(2,7),r=Math.random().toString().substring(2,7);return"".concat(n).concat(t).concat(r)}var d=t(16195),g=t(71198);function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){h(e,n,t[n])}))}return e}function x(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){v(e,n,t[n])}))}return e}function j(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var w=t(66267);function O(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){O(e,n,t[n])}))}return e}function k(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var M={Ingredients:s,Directions:l,Tips:(0,i.default)((function(){return t.e(626).then(t.bind(t,45626))}),{loadableGenerated:{webpack:function(){return[45626]},modules:["../src/components/mdx/MdxComponents.ts -> src/components/mdx/Tips"]}}),SyntaxHighlighter:c.Z,Button:r.Z,Box:o.Z,MdxImageView:function(e){var n=e.src,t=e.caption,r=e.sx,i=x(e,["src","caption","sx"]),c=(0,f.useRef)(),l=(0,f.useState)(),s=l[0],p=l[1];return(0,f.useEffect)((function(){if(c.current){var e=c.current,n=m("imageBox");e.classList.add(n),p(n)}}),[]),(0,a.jsxs)(o.Z,{ref:c,sx:{background:"#f0f0f0",borderRadius:2,pt:2,pb:1,px:2,mt:2,mb:4,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center","& img":{maxWidth:"100%"}},children:[(0,a.jsx)(o.Z,b({component:"img",className:"lightbox",src:(0,d.e_)(n),sx:b({},r)},i,{alt:null!==t&&void 0!==t?t:""})),t&&(0,a.jsx)(u.Z,{variant:"caption",sx:{mt:1},children:t}),s&&(0,a.jsx)(g.Z,{revision:c.current,cssSelector:".".concat(s," > .lightbox"),multiple:!1})]})},MdxTextBox:function(e){var n=e.sx,t=e.children,r=j(e,["sx","children"]),i=(0,f.useRef)();return(0,a.jsx)(o.Z,y({ref:i,sx:y({background:"#eee",px:3,py:2,borderRadius:2},n)},r,{children:t}))},PostLink:function(e){var n=e.children,t=e.sx,r=e.type,i=void 0===r?"_dialog":r,c=e.postId,l=k(e,["children","sx","type","postId"]);return(0,a.jsxs)(o.Z,S({onClick:function(){"_dialog"===i?w.Y.post.openDialog.send({postId:c}):"_new"===i?null===window||void 0===window||window.open((0,d.e_)("/post-frame/".concat(c)),"_blank"):(0,d.J5)("/post-frame/".concat(c))},sx:S({position:"relative",color:"blue",cursor:"pointer",display:"inline-block",px:.2},t)},l,{children:[n,(0,a.jsx)(o.Z,{sx:{position:"absolute",top:0,left:-2,width:"4px",height:"4px",bgcolor:"secondary.main",borderRadius:"50%",content:'""'}})]}))},Typography:u.Z}},22294:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(85893),o=t(2734),i=t(98396),c=t(99226),a=t(27948),l=t(67294),s=t(72977),u=t(9008),f=t(11163),p=t(86704),m=t(91127),d={description:"".concat(m.p," provides awesome food recipes."),ogImagePath:"/assets/card-image.webp"},g=function(e){var n=e.pageTitle,t=(0,f.useRouter)(),o=p.Z.siteURL+t.asPath,i="/"===t.pathname?"website":"article",c=n||"Awesome food recipes",a=p.Z.siteURL+d.ogImagePath;return(0,r.jsxs)(u.default,{children:[(0,r.jsx)("title",{children:"".concat(n," | ").concat(m.p)}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,r.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#5bbad5"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#00a300"}),(0,r.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,r.jsx)("meta",{name:"theme-color",content:"#fff"}),(0,r.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,r.jsx)("meta",{name:"description",content:d.description},"description"),(0,r.jsx)("meta",{property:"og:url",content:o}),(0,r.jsx)("meta",{property:"og:type",content:i}),(0,r.jsx)("meta",{property:"og:site_name",content:m.p}),(0,r.jsx)("meta",{property:"og:title",content:c}),(0,r.jsx)("meta",{property:"og:description",content:d.description},"ogDescription"),(0,r.jsx)("meta",{property:"og:image",content:a},"ogImage"),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:site",content:m.S})]})};var h=function(e){var n=e.children,t=e.pageTitle,u=(0,o.Z)(),f=((0,i.Z)(u.breakpoints.down("sm")),(0,s.Z)().width),p=(0,l.useState)(0),m=p[0],d=p[1];return(0,l.useEffect)((function(){f&&!isNaN(f)&&f>0&&d(f)}),[f]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g,{pageTitle:t}),(0,r.jsx)(c.Z,{sx:{color:"#111827",overflow:"hidden",pb:10,"& article.mdx-article":{maxWidth:m<=0?"auto":"".concat(m-50,"px")},"& h1":{fontSize:"1.8rem",fontWeight:900,mb:4,pb:1,pl:0,borderBottom:"1px solid #ccc"},"& h2":{fontSize:"1.5rem",fontWeight:700,mt:4,mb:1},"& h3":{fontSize:"1.3rem",fontWeight:600,mt:4,mb:1},"& h4":{mt:3,mb:1,fontSize:"1.15rem",fontWeight:600},"& h5":{m:0,mt:1,fontSize:"1.05rem",fontWeight:600},"& h6":{m:0,mt:1,fontSize:"1rem",fontWeight:600},"& p":{m:0,mt:"0.5rem",mb:"0.5rem",fontSize:"0.95rem",fontWeight:400,lineHeight:"1.8rem"},"& > pre":{overflow:"auto",position:"relative",wordWrap:"break-word"},"& pre":{backgroundColor:"#1f2937",fontFamily:"'Noto Sans KR','Nanum Gothic Coding', ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",marginBottom:"16px"},"& :not(pre) > code":{backgroundColor:"transparent",position:"relative",color:"#000",fontWeight:600,paddingLeft:"0.4em",paddingRight:"0.4em",fontFamily:"'Noto Sans KR','Nanum Gothic Coding', ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",fontSize:"85%",lineHeight:1.5,wordBreak:"break-word","&::before":{position:"absolute",content:'""',top:-2,right:0,left:0,bottom:-2,zIndex:0,borderRadius:"6px",background:"rgba(175,183,193,0.2)",padding:"0.2em 0.4em"}},"& pre > code":{padding:0,color:"inherit",background:"inherit",whiteSpace:"pre",fontFamily:"'Nanum Gothic Coding', ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace"},"& ul > li,& ol > li":{lineHeight:1.8},"& ul > li + li,& ol > li + li":{mt:.5}},children:(0,r.jsx)(a.Z,{maxWidth:"md",children:n})})]})}},91127:function(e,n,t){t.d(n,{p:function(){return r},S:function(){return o}});var r="AI \ucf54\ub529\ube14\ub85d \uac1c\ubc1c\uc790 \uac00\uc774\ub4dc",o="@ktaicoder"}}]);