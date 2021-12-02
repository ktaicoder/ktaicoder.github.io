"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[791],{65164:function(e,t,n){n.d(t,{Z:function(){return g}});var o=n(85893),r=n(16195),i=n(99226),a=n(26447),c=n(15861),l=n(40625),s=n(26215),u=n(47739);function p(e){var t=e.onClick,n=e.stepNumber,r=e.title,a=e.active;return(0,o.jsxs)(u.Z,{onClick:t,component:"div",sx:{width:"100%",minHeight:"48px",border:"0px solid red",borderRadius:"8px",px:1},children:[(0,o.jsx)(i.Z,{sx:{width:"20px"},children:a&&(0,o.jsx)(l.Z,{sx:{fontSize:"20px",color:"primary.main"}})}),(0,o.jsxs)(i.Z,{sx:{bgcolor:a?"primary.main":"#eee",borderRadius:"4px",fontSize:"0.85rem",ml:1,py:"2px",px:1,fontWeight:200,color:a?"#FFF":"rgba(0,0,0,0.7)","& > span":{marginLeft:"2px",fontSize:"0.87rem",marginRight:"2px",fontWeight:600}},children:[(0,o.jsx)("span",{children:n})," \ub2e8\uacc4"]}),(0,o.jsx)(i.Z,{sx:{fontSize:"0.9rem",fontWeight:a?600:400,flex:1,ml:2,color:a?"primary.main":"#333"},children:r}),(0,o.jsx)(s.Z,{sx:{fontSize:"0.9rem",color:"#888"}})]})}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){f(e,t,n[t])}))}return e}var m=[{stepNumber:1,title:"OS \uc774\ubbf8\uc9c0 \uad7d\uae30",href:"/codingpack/os-image-guide"},{stepNumber:2,title:"SD \uce74\ub4dc \ud655\uc7a5\ud558\uae30",href:"/post-frame/codingpack-how-to-expand-sdcard"},{stepNumber:3,title:"\ub124\ud2b8\uc6cc\ud06c \uc5f0\uacb0\ud558\uae30",href:"/post-frame/codingpack-how-to-config-network"},{stepNumber:4,title:"\ucf54\ub529\ud329 \uc5c5\ub370\uc774\ud2b8 \ud558\uae30",href:"/post-frame/codingpack-how-to-codingpack-update"},{stepNumber:5,title:"\uc2dc\uc2a4\ud15c \ucd08\uae30\ud654 \ud558\uae30",href:"/post-frame/codingpack-how-to-system-reset"}];function g(e){var t=e.currentStep,n=e.next,l=e.sx,s="";t>=1&&t<=m.length&&(s=n?t===m.length?"\ub9c8\uc9c0\ub9c9 \ub2e8\uacc4\uc785\ub2c8\ub2e4. \u263a":"\uc774\uc81c ".concat(t+1,"\ub2e8\uacc4\ub97c \uc9c4\ud589\ud574\uc8fc\uc138\uc694"):"\uc9c0\uae08 ".concat(t,"\ub2e8\uacc4 \uac00\uc774\ub4dc\ub97c \ubcf4\uace0 \uc788\uc2b5\ub2c8\ub2e4"));return(0,o.jsx)(i.Z,{mt:"2px",sx:d({display:"flex",justifyContent:"center"},l),children:(0,o.jsxs)(a.Z,{direction:"column",spacing:0,sx:{minWidth:"320px",border:"1px solid #ddd",borderRadius:"8px",px:1,py:1},children:[(0,o.jsxs)(i.Z,{mb:1,children:[(0,o.jsx)(c.Z,{sx:{fontSize:"0.85rem",color:"text.main",textAlign:"center",fontWeight:600},children:"\u2022 \ucf54\ub529\ud329 OS \uc774\ubbf8\uc9c0 \uc81c\uc791 \uc21c\uc11c \u2022"}),s&&(0,o.jsx)(c.Z,{variant:"body1",sx:{textAlign:"center",fontSize:"0.8rem",color:n?"secondary.main":"#3F617D",fontWeight:n?600:400},children:s})]}),m.map((function(e){return(0,o.jsx)(p,{onClick:function(){return t=e.href,void("new"===(window.self===window.top||window.parent===window.top?"page":"new")?(t.startsWith("http")||(t.startsWith("/post/")&&(t=t.replace("/post/","/post-frame/")),t=(0,r.EB)(t)),window.open(t,"_blank")):(0,r.J5)(t));var t},active:e.stepNumber===t,stepNumber:e.stepNumber,title:e.title},e.stepNumber)}))]})})}},71198:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(85893),r=n(67294),i=function(e,t){var n=(0,r.useRef)(null);(0,r.useEffect)((function(){n.current=t}),[t]),(0,r.useEffect)((function(){for(var t=e,o=[],r=0;r<t.length;r++){var i=t[r];o.push(i.src)}for(var a=function(e){var t,r=e.target;null===(t=n.current)||void 0===t||t.call(n,r.src,o)},c=0;c<t.length;c++)t[c].addEventListener("click",a);return function(){for(var t=e,n=0;n<t.length;n++)t[n].removeEventListener("click",a)}}),[e])},a=n(92879);n(4019);function c(e,t,n){return Math.min(Math.max(e,t),n)}function l(e){var t=e.open,n=e.onClose,i=e.disableEscKeydown,l=void 0!==i&&i,s=e.title,u=e.imageUrls,p=void 0===u?[]:u,f=e.startIndex,d=void 0===f?0:f,m=(0,r.useState)((function(){return d})),g=m[0],h=m[1],x=(0,r.useMemo)((function(){return function(e){for(var t=[],n=e.length,o=0;o<n;o++)t.push({url:e[o],prev:o-1>=0?e[o-1]:void 0,next:o+1<n?e[o+1]:void 0});return t}(p)}),[p]);(0,r.useEffect)((function(){t&&(p&&0!==p.length||n())}),[t,n,p]);if((0,r.useEffect)((function(){if(!l){var e=function(e){"Escape"===e.key&&(e.preventDefault(),n())};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}}),[l,n]),!t)return null;var b=x[g],y=x.length>1?"".concat(g+1," / ").concat(x.length):void 0;return(0,o.jsx)(o.Fragment,{children:b&&(0,o.jsx)(a.Z,{mainSrc:b.url,prevSrc:b.prev,nextSrc:b.next,onMoveNextRequest:function(){h(c(g+1,0,x.length-1))},onMovePrevRequest:function(){h(c(g-1,0,x.length-1))},imageTitle:s,imageCaption:y,onCloseRequest:function(){n()},reactModalStyle:{overlay:{zIndex:1500}}})})}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){var t=e.cssSelector,n=e.multiple,a=e.onOpen,c=e.revision,u=void 0===c?0:c,p=(0,r.useState)(),f=p[0],d=p[1],m=(0,r.useState)(),g=m[0],h=m[1],x=(0,r.useState)([]),b=x[0],y=x[1];(0,r.useEffect)((function(){var e=document.querySelectorAll(t),n=Array.prototype.slice.call(e);y(n)}),[t,u]);var v=function(){h(void 0),d(void 0)};i(b,(function(e,t){if(n){h("ImageViewLightbox");var o=t.indexOf(e);d({imageUrls:t,startIndex:(r=o,i=0,a=t.length-1,Math.min(Math.max(r,i),a)),onClose:v})}else h("ImageViewLightbox"),d({imageUrls:[e],startIndex:0,onClose:v});var r,i,a}));var w=b.length>0&&"ImageViewLightbox"===g;return(0,r.useEffect)((function(){null===a||void 0===a||a(w)}),[w,a]),b.length>0&&"ImageViewLightbox"===g&&f?(0,o.jsx)(l,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){s(e,t,n[t])}))}return e}({open:!0},f)):null}},19833:function(e,t,n){n.d(t,{Z:function(){return Z}});var o=n(83321),r=n(99226),i=n(5152),a=n(41245),c=n(65164),l=n(85893),s=n(15861),u=n(67294),p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function f(e){var t=null!==e&&void 0!==e?e:function(e){for(var t="",n=p.length,o=0;o<e;o++)t+=p.charAt(Math.floor(Math.random()*n));return t}(5)+"-",n=Math.random().toString().substring(2,7),o=Math.random().toString().substring(2,7);return"".concat(t).concat(n).concat(o)}var d=n(16195),m=n(71198);function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){g(e,t,n[t])}))}return e}function x(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){b(e,t,n[t])}))}return e}function v(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var w=n(66267);function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){j(e,t,n[t])}))}return e}function O(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var k=n(67564),Z={Tips:(0,i.default)((function(){return n.e(626).then(n.bind(n,45626))}),{loadableGenerated:{webpack:function(){return[45626]},modules:["../src/components/mdx/MdxComponents.ts -> src/components/mdx/Tips"]}}),SyntaxHighlighter:a.Z,Button:o.Z,Box:r.Z,MdxImageView:function(e){var t=e.src,n=e.caption,o=e.sx,i=x(e,["src","caption","sx"]),a=(0,u.useRef)(),c=(0,u.useState)(),p=c[0],g=c[1],b=(0,u.useState)(!1),y=b[0],v=b[1];return(0,u.useEffect)((function(){if(a.current){var e=a.current,t=f("imageBox");e.classList.add(t),g(t),v(window.self===window.top||window.parent===window.top)}}),[]),(0,l.jsxs)(r.Z,{ref:a,sx:{background:"#f0f0f0",borderRadius:2,pt:2,pb:1,px:2,mt:2,mb:4,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[(0,l.jsx)(r.Z,h({component:"img",className:"lightbox",src:(0,d.e_)(t),sx:h({maxWidth:"100%"},o)},i,{alt:null!==n&&void 0!==n?n:""})),n&&(0,l.jsx)(s.Z,{variant:"caption",sx:{mt:1,color:"#666"},children:n}),y&&p&&(0,l.jsx)(m.Z,{revision:a.current,cssSelector:".".concat(p," > .lightbox"),multiple:!1})]})},MdxTextBox:function(e){var t=e.sx,n=e.children,o=v(e,["sx","children"]),i=(0,u.useRef)();return(0,l.jsx)(r.Z,y({ref:i,sx:y({display:"block",background:"#eee",px:3,py:2,my:2,borderRadius:2,"& > ul":{pl:2,pr:0},"& > em":{position:"relative",color:"secondary.main",fontStyle:"normal",fontWeight:"bold",display:"inline-block",pl:"2px",pr:"2px",mr:"2px",lineHeight:"1.05em","&::before":{content:'""',position:"absolute",zIndex:100,top:-2,left:-2,right:-2,bottom:-2,background:"rgba(0,0,0, 0.1)",borderRadius:"4px"}}},t)},o,{children:n}))},PostLink:function(e){var t=e.children,n=e.sx,o=e.type,i=void 0===o?"_dialog":o,a=e.postId,c=O(e,["children","sx","type","postId"]);return(0,l.jsxs)(r.Z,S({onClick:function(){"_dialog"===i?window.self===window.top||window.parent===window.top?w.Y.post.openDialog.send({postId:a}):(0,d.J5)("/post/".concat(a)):"_new"===i?null===window||void 0===window||window.open((0,d.e_)("/post-frame/".concat(a)),"_blank"):(0,d.J5)("/post-frame/".concat(a))},component:"span",sx:S({position:"relative",color:"#0054cb",cursor:"pointer",display:"inline-block"},"_dialog"!==i&&{textDecoration:"underline"},{px:.2,":hover":{color:"secondary.main",backgroundColor:"rgba(0,0,0,0.05)",borderRadius:"4px"}},n)},c,{children:[t,"_dialog"===i&&(0,l.jsx)(r.Z,{component:"span",sx:{position:"absolute",top:0,left:-2,width:"4px",height:"4px",bgcolor:"secondary.main",borderRadius:"50%",content:'""'}})]}))},Typography:s.Z,CodingpackSetupStepLinks:c.Z,Icon:k.Z}},22294:function(e,t,n){n.d(t,{Z:function(){return h}});var o=n(85893),r=n(2734),i=n(98396),a=n(99226),c=n(33047),l=n(9008),s=n(11163),u=n(86704),p=n(91127),f={description:"".concat(p.p," provides awesome food recipes."),ogImagePath:"/assets/card-image.webp"},d=function(e){var t=e.pageTitle,n=(0,s.useRouter)(),r=u.Z.siteURL+n.asPath,i="/"===n.pathname?"website":"article",a=t||"Awesome food recipes",c=u.Z.siteURL+f.ogImagePath;return(0,o.jsxs)(l.default,{children:[(0,o.jsx)("title",{children:"".concat(t," | ").concat(p.p)}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,o.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,o.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#5bbad5"}),(0,o.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,o.jsx)("meta",{name:"msapplication-TileColor",content:"#00a300"}),(0,o.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,o.jsx)("meta",{name:"theme-color",content:"#fff"}),(0,o.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,o.jsx)("meta",{name:"description",content:f.description},"description"),(0,o.jsx)("meta",{property:"og:url",content:r}),(0,o.jsx)("meta",{property:"og:type",content:i}),(0,o.jsx)("meta",{property:"og:site_name",content:p.p}),(0,o.jsx)("meta",{property:"og:title",content:a}),(0,o.jsx)("meta",{property:"og:description",content:f.description},"ogDescription"),(0,o.jsx)("meta",{property:"og:image",content:c},"ogImage"),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{name:"twitter:site",content:p.S})]})},m=n(80938);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(l){r=!0,i=l}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h=function(e){var t,n=e.children,l=e.pageTitle,s=(0,r.Z)(),u=((0,i.Z)(s.breakpoints.down("sm")),g((0,c.Z)(),2)),p=u[0],f=u[1].width,h=(null!==(t=(0,m.S)())&&void 0!==t?t:{}).sidebarWidth,x=void 0===h?0:h,b=0;return!isNaN(f)&&f>0&&(b=Math.min(+f.toFixed(0),840)),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d,{pageTitle:l}),(0,o.jsx)(a.Z,{sx:{color:"#111827",overflow:"hidden",pb:10,pt:3,fontSize:"1rem","& article.mdx-article":{maxWidth:b<=0?0:"".concat(b-56,"px"),marginLeft:"auto",marginRight:"auto"},"& h1:not(.MuiTypography-root)":{fontSize:"1.65rem",fontWeight:900,lineHeight:"2.8rem",mb:4,pb:1,pl:0,textAlign:"center",borderBottom:"1px solid #ccc"},"& h2:not(.MuiTypography-root)":{fontSize:"1.45rem",lineHeight:"2rem",fontWeight:700,mt:4,mb:1},"& h3:not(.MuiTypography-root)":{fontSize:"1.3rem",fontWeight:600,color:"#000",mt:4,mb:1},"& h4:not(.MuiTypography-root)":{mt:3,mb:1,color:"#111",fontSize:"1.15rem",fontWeight:600},"& h5:not(.MuiTypography-root)":{m:0,mt:1,color:"#333",fontSize:"1.0rem",fontWeight:600},"& h6:not(.MuiTypography-root)":{m:0,mt:1,color:"#444",fontSize:"0.95rem",fontWeight:600,lineHeight:"1.9rem"},"& > article > p:not(.MuiTypography-root)":{m:0,color:"#444",mt:"0.5rem",mb:"0.5rem",fontSize:"0.95rem",fontWeight:400,lineHeight:"1.45rem"},"& > pre":{overflow:"auto",position:"relative",wordWrap:"break-word"},"& pre":{backgroundColor:"#1f2937",fontFamily:"'Noto Sans KR','Nanum Gothic Coding', ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",marginBottom:"16px"},"& :not(pre) > code":{backgroundColor:"transparent",position:"relative",color:"#000",fontWeight:600,paddingLeft:"0.4em",paddingRight:"0.4em",fontFamily:"'Noto Sans KR','Nanum Gothic Coding', ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",fontSize:"85%",lineHeight:1.5,wordBreak:"break-word",whiteSpace:"nowrap","&::before":{position:"absolute",content:'""',top:-2,right:0,left:0,bottom:-2,zIndex:0,borderRadius:"6px",background:"rgba(175,183,193,0.2)",padding:"0.2em 0.4em"}},"& pre > code":{padding:0,color:"inherit",background:"inherit",whiteSpace:"pre",fontFamily:"'Nanum Gothic Coding', ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace"},"& ul > li,& ol > li":{lineHeight:"1.7rem"},"& ul > li + li,& ol > li + li":{mt:.5}},children:(0,o.jsx)(a.Z,{ref:p,sx:{position:"relative",width:"calc(100vw - ".concat(x,"px)"),maxWidth:"calc(100vw - ".concat(x,"px)"),overflowX:"hidden"},children:(0,o.jsx)(a.Z,{sx:{display:b<=0?"none":"block",maxWidth:"".concat(840,"px"),marginLeft:"auto",marginRight:"auto"},children:n})})})]})}},91127:function(e,t,n){n.d(t,{p:function(){return o},S:function(){return r}});var o="AI \ucf54\ub529\ube14\ub85d \uc0ac\uc6a9\uc790 \uac00\uc774\ub4dc",r="@ktaicoder"}}]);