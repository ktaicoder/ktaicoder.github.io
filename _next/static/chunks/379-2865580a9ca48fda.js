"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[379],{65164:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(85893),o=n(16195),i=n(99226),a=n(26447),c=n(15861),l=n(40625),s=n(26215),u=n(47739);function p(e){var t=e.onClick,n=e.stepNumber,o=e.title,a=e.active;return(0,r.jsxs)(u.Z,{onClick:t,component:"div",sx:{width:"100%",minHeight:"48px",border:"0px solid red",borderRadius:"8px",px:1},children:[(0,r.jsx)(i.Z,{sx:{width:"20px"},children:a&&(0,r.jsx)(l.Z,{sx:{fontSize:"20px",color:"primary.main"}})}),(0,r.jsxs)(i.Z,{sx:{bgcolor:a?"primary.main":"#eee",borderRadius:"4px",fontSize:"0.85rem",ml:1,py:"2px",px:1,fontWeight:200,color:a?"#FFF":"rgba(0,0,0,0.7)","& > span":{marginLeft:"2px",fontSize:"0.87rem",marginRight:"2px",fontWeight:600}},children:[(0,r.jsx)("span",{children:n})," \ub2e8\uacc4"]}),(0,r.jsx)(i.Z,{sx:{fontSize:"0.9rem",fontWeight:a?600:400,flex:1,ml:2,color:a?"primary.main":"#333"},children:o}),(0,r.jsx)(s.Z,{sx:{fontSize:"0.9rem",color:"#888"}})]})}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}var m=[{stepNumber:1,title:"OS \uc774\ubbf8\uc9c0 \uad7d\uae30",href:"/codingpack/os-image-guide"},{stepNumber:2,title:"SD \uce74\ub4dc \ud655\uc7a5\ud558\uae30",href:"/post-frame/codingpack-how-to-expand-sdcard"},{stepNumber:3,title:"\ub124\ud2b8\uc6cc\ud06c \uc5f0\uacb0\ud558\uae30",href:"/post-frame/codingpack-how-to-config-network"},{stepNumber:4,title:"\ucf54\ub529\ud329 \uc5c5\ub370\uc774\ud2b8 \ud558\uae30",href:"/post-frame/codingpack-how-to-codingpack-update"},{stepNumber:5,title:"\uc2dc\uc2a4\ud15c \ucd08\uae30\ud654 \ud558\uae30",href:"/post-frame/codingpack-how-to-system-reset"}];function g(e){var t=e.currentStep,n=e.next,l=e.sx,s="";t>=1&&t<=m.length&&(s=n?t===m.length?"\ub9c8\uc9c0\ub9c9 \ub2e8\uacc4\uc785\ub2c8\ub2e4. \u263a":"\uc774\uc81c ".concat(t+1,"\ub2e8\uacc4\ub97c \uc9c4\ud589\ud574\uc8fc\uc138\uc694"):"\uc9c0\uae08 ".concat(t,"\ub2e8\uacc4 \uac00\uc774\ub4dc\ub97c \ubcf4\uace0 \uc788\uc2b5\ub2c8\ub2e4"));return(0,r.jsx)(i.Z,{mt:"2px",sx:d({display:"flex",justifyContent:"center"},l),children:(0,r.jsxs)(a.Z,{direction:"column",spacing:0,sx:{minWidth:"320px",border:"1px solid #ddd",borderRadius:"8px",px:1,py:1},children:[(0,r.jsxs)(i.Z,{mb:1,children:[(0,r.jsx)(c.Z,{sx:{fontSize:"0.85rem",color:"text.main",textAlign:"center",fontWeight:600},children:"\u2022 \ucf54\ub529\ud329 OS \uc774\ubbf8\uc9c0 \uc81c\uc791 \uc21c\uc11c \u2022"}),s&&(0,r.jsx)(c.Z,{variant:"body1",sx:{textAlign:"center",fontSize:"0.8rem",color:n?"secondary.main":"#3F617D",fontWeight:n?600:400},children:s})]}),m.map((function(e){return(0,r.jsx)(p,{onClick:function(){return t=e.href,void("new"===(window.self===window.top||window.parent===window.top?"page":"new")?(t.startsWith("http")||(t.startsWith("/post/")&&(t=t.replace("/post/","/post-frame/")),t=(0,o.EB)(t)),window.open(t,"_blank")):(0,o.J5)(t));var t},active:e.stepNumber===t,stepNumber:e.stepNumber,title:e.title},e.stepNumber)}))]})})}},71198:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(85893),o=n(67294),i=function(e,t){var n=(0,o.useRef)(null);(0,o.useEffect)((function(){n.current=t}),[t]),(0,o.useEffect)((function(){for(var t=e,r=[],o=0;o<t.length;o++){var i=t[o];r.push(i.src)}for(var a=function(e){var t,o=e.target;null===(t=n.current)||void 0===t||t.call(n,o.src,r)},c=0;c<t.length;c++)t[c].addEventListener("click",a);return function(){for(var t=e,n=0;n<t.length;n++)t[n].removeEventListener("click",a)}}),[e])},a=n(92879);n(4019);function c(e,t,n){return Math.min(Math.max(e,t),n)}function l(e){var t=e.open,n=e.onClose,i=e.disableEscKeydown,l=void 0!==i&&i,s=e.title,u=e.imageUrls,p=void 0===u?[]:u,f=e.startIndex,d=void 0===f?0:f,m=(0,o.useState)((function(){return d})),g=m[0],h=m[1],b=(0,o.useMemo)((function(){return function(e){for(var t=[],n=e.length,r=0;r<n;r++)t.push({url:e[r],prev:r-1>=0?e[r-1]:void 0,next:r+1<n?e[r+1]:void 0});return t}(p)}),[p]);(0,o.useEffect)((function(){t&&(p&&0!==p.length||n())}),[t,n,p]);if((0,o.useEffect)((function(){if(!l){var e=function(e){"Escape"===e.key&&(e.preventDefault(),n())};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}}),[l,n]),!t)return null;var x=b[g],y=b.length>1?"".concat(g+1," / ").concat(b.length):void 0;return(0,r.jsx)(r.Fragment,{children:x&&(0,r.jsx)(a.Z,{mainSrc:x.url,prevSrc:x.prev,nextSrc:x.next,onMoveNextRequest:function(){h(c(g+1,0,b.length-1))},onMovePrevRequest:function(){h(c(g-1,0,b.length-1))},imageTitle:s,imageCaption:y,onCloseRequest:function(){n()},reactModalStyle:{overlay:{zIndex:1500}}})})}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){var t=e.cssSelector,n=e.multiple,a=e.onOpen,c=e.revision,u=void 0===c?0:c,p=(0,o.useState)(),f=p[0],d=p[1],m=(0,o.useState)(),g=m[0],h=m[1],b=(0,o.useState)([]),x=b[0],y=b[1];(0,o.useEffect)((function(){var e=document.querySelectorAll(t),n=Array.prototype.slice.call(e);y(n)}),[t,u]);var v=function(){h(void 0),d(void 0)};i(x,(function(e,t){if(n){h("ImageViewLightbox");var r=t.indexOf(e);d({imageUrls:t,startIndex:(o=r,i=0,a=t.length-1,Math.min(Math.max(o,i),a)),onClose:v})}else h("ImageViewLightbox"),d({imageUrls:[e],startIndex:0,onClose:v});var o,i,a}));var w=x.length>0&&"ImageViewLightbox"===g;return(0,o.useEffect)((function(){null===a||void 0===a||a(w)}),[w,a]),x.length>0&&"ImageViewLightbox"===g&&f?(0,r.jsx)(l,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({open:!0},f)):null}},88946:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(83321),o=n(99226),i=n(15861),a=n(67564),c=n(5152),l=n(41245),s=n(65164),u=n(85893),p=n(67294),f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function d(e){var t=null!==e&&void 0!==e?e:function(e){for(var t="",n=f.length,r=0;r<e;r++)t+=f.charAt(Math.floor(Math.random()*n));return t}(5)+"-",n=Math.random().toString().substring(2,7),r=Math.random().toString().substring(2,7);return"".concat(t).concat(n).concat(r)}var m=n(16195),g=n(71198);function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}function x(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var y=n(90584);function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}function j(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){S(e,t,n[t])}))}return e}function Z(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var P=n(27948),M=n(18377),R=n(22004);function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){E(e,t,n[t])}))}return e}var I=n(49487);function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){W(e,t,n[t])}))}return e}function L(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var N={Tips:(0,c.default)((function(){return n.e(626).then(n.bind(n,45626))}),{loadableGenerated:{webpack:function(){return[45626]},modules:["../src/components/mdx/MdxComponents.ts -> src/components/mdx/Tips"]}}),SyntaxHighlighter:l.Z,Button:r.Z,Box:o.Z,MdxImageView:function(e){var t=e.src,n=e.caption,r=e.transparentBg,a=void 0!==r&&r,c=e.sx,l=x(e,["src","caption","transparentBg","sx"]),s=(0,p.useRef)(),f=(0,p.useState)(),h=f[0],y=f[1],v=(0,p.useState)(!1),w=v[0],j=v[1];return(0,p.useEffect)((function(){if(s.current){var e=s.current,t=d("imageBox");e.classList.add(t),y(t),j(window.self===window.top||window.parent===window.top)}}),[]),(0,u.jsxs)(o.Z,{ref:s,sx:{pt:a?0:2,pb:a?0:1,px:a?0:2,mt:2,mb:4,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[(0,u.jsx)(o.Z,{sx:{pt:2,pb:2,px:2,display:"flex",alignItems:"center",justifyContent:"center",width:"100%",background:a?"transparent":"#f0f0f0",borderRadius:2},children:(0,u.jsx)(o.Z,b({component:"img",className:"lightbox",src:(0,m.e_)(t),sx:b({maxWidth:"100%"},c,{objectFit:"contain"})},l,{alt:null!==n&&void 0!==n?n:""}))}),n&&(0,u.jsx)(i.Z,{variant:"caption",sx:{mt:a?0:1,color:"#666"},children:n}),w&&h&&(0,u.jsx)(g.Z,{revision:s.current,cssSelector:".".concat(h," .lightbox"),multiple:!1})]})},MdxTextBox:function(e){var t=e.sx,n=e.children,r=Z(e,["sx","children"]),i=(0,p.useRef)();return(0,u.jsx)(o.Z,k({ref:i,sx:k({display:"block",background:"#eee",px:3,py:2,my:2,borderRadius:2,"& > ul":{pl:2,pr:0},"& > em":{position:"relative",color:"secondary.main",fontStyle:"normal",fontWeight:"bold",display:"inline-block",pl:"2px",pr:"2px",mr:"2px",lineHeight:"1.05em","&::before":{content:'""',position:"absolute",zIndex:100,top:-2,left:-2,right:-2,bottom:-2,background:"rgba(0,0,0, 0.1)",borderRadius:"4px"}}},t)},r,{children:n}))},PostLink:function(e){var t=e.children,n=e.sx,r=e.type,i=void 0===r?"_dialog":r,a=e.postId,c=L(e,["children","sx","type","postId"]);return(0,u.jsxs)(o.Z,z({onClick:function(){"_dialog"===i?window.self===window.top||window.parent===window.top?I.Y.post.openDialog.send({postId:a}):(0,m.J5)("/post/".concat(a)):"_new"===i?null===window||void 0===window||window.open((0,m.e_)("/post-frame/".concat(a)),"_blank"):(0,m.J5)("/post-frame/".concat(a))},component:"span",sx:z({position:"relative",color:"#0054cb",cursor:"pointer",display:"inline-block"},"_dialog"!==i&&{textDecoration:"underline"},{px:.2,":hover":{color:"secondary.main",backgroundColor:"rgba(0,0,0,0.05)",borderRadius:"4px"}},n)},c,{children:[t,"_dialog"===i&&(0,u.jsx)(o.Z,{component:"span",sx:{position:"absolute",top:0,left:-2,width:"4px",height:"4px",bgcolor:"secondary.main",borderRadius:"50%",content:'""'}})]}))},Typography:i.Z,CodingpackSetupStepLinks:s.Z,MdxLink:function(e){var t=e.children,n=e.href,r=e.target,i=e.sx,a=j(e,["children","href","target","sx"]),c=O((0,y.Z)("_access",""),1)[0];return(0,u.jsx)(o.Z,w({component:"a",href:n,target:"pc"===c?"_self":r,sx:w({position:"relative",color:"#0054cb",cursor:"pointer",display:"inline-block",px:.2,":hover":{color:"secondary.main",backgroundColor:"rgba(0,0,0,0.05)",borderRadius:"4px"}},i)},a,{children:null!==t&&void 0!==t?t:n}))},MdxVideoPlayer:function(e){var t=e.sx,n=e.title,r=e.caption,o=e.videoUrl,i=(0,p.useRef)(null),a=(0,p.useState)(!1);return a[0],a[1],(0,u.jsx)(M.Z,{sx:C({py:3,px:2,background:"#f0f0f0",borderRadius:"8px",border:"1px solid #eee",my:1,width:"100%"},t),children:(0,u.jsxs)(P.Z,{maxWidth:"sm",sx:{width:"100%"},children:[n&&(0,u.jsx)(M.Z,{sx:{mb:1,fontSize:"1.2rem",textAlign:"center",color:"#191919",fontWeight:500,lineHeight:"1.4rem"},children:n}),(0,u.jsx)(R.Z,{ref:i,width:"100%",url:o,controls:!0,onReady:function(){}}),r&&(0,u.jsx)(M.Z,{sx:{mt:1,color:"#666",textAlign:"center",fontSize:"0.8rem",fontWeight:500,lineHeight:"1.2rem"},children:r})]})})},Icon:a.Z}},22294:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(85893),o=n(2734),i=n(98396),a=n(99226),c=n(33047),l=n(9008),s=n(11163),u=n(86704),p=n(91127),f={description:"".concat(p.p," provides awesome food recipes."),ogImagePath:"/assets/card-image.webp"},d=function(e){var t=e.pageTitle,n=(0,s.useRouter)(),o=u.Z.siteURL+n.asPath,i="/"===n.pathname?"website":"article",a=t||"Awesome food recipes",c=u.Z.siteURL+f.ogImagePath;return(0,r.jsxs)(l.default,{children:[(0,r.jsx)("title",{children:"".concat(t," | ").concat(p.p)}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,r.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#5bbad5"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#00a300"}),(0,r.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,r.jsx)("meta",{name:"theme-color",content:"#fff"}),(0,r.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,r.jsx)("meta",{name:"description",content:f.description},"description"),(0,r.jsx)("meta",{property:"og:url",content:o}),(0,r.jsx)("meta",{property:"og:type",content:i}),(0,r.jsx)("meta",{property:"og:site_name",content:p.p}),(0,r.jsx)("meta",{property:"og:title",content:a}),(0,r.jsx)("meta",{property:"og:description",content:f.description},"ogDescription"),(0,r.jsx)("meta",{property:"og:image",content:c},"ogImage"),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:site",content:p.S})]})},m=n(80938);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h=function(e){var t,n=e.children,l=e.pageTitle,s=(0,o.Z)(),u=((0,i.Z)(s.breakpoints.down("sm")),g((0,c.Z)(),2)),p=u[0],f=u[1].width,h=(null!==(t=(0,m.S)())&&void 0!==t?t:{}).sidebarWidth,b=void 0===h?0:h,x=0;return!isNaN(f)&&f>0&&(x=Math.min(+f.toFixed(0),840)),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{pageTitle:l}),(0,r.jsx)(a.Z,{sx:{color:"#111827",overflow:"hidden",pb:10,pt:3,fontSize:"1rem","& article.mdx-article":{maxWidth:x<=0?0:"".concat(x-56,"px"),marginLeft:"auto",marginRight:"auto"},"& h1:not(.MuiTypography-root)":{fontSize:"1.65rem",fontWeight:900,lineHeight:"2.8rem",mb:4,pb:1,pl:0,textAlign:"center",borderBottom:"1px solid #ccc"},"& h2:not(.MuiTypography-root)":{fontSize:"1.45rem",lineHeight:"2rem",fontWeight:700,mt:4,mb:1},"& h3:not(.MuiTypography-root)":{fontSize:"1.2rem",fontWeight:600,ml:"2px",color:"#000",mt:4,mb:1},"& h4:not(.MuiTypography-root)":{mt:3,mb:1,color:"#111",fontSize:"1.10rem",fontWeight:600},"& h5:not(.MuiTypography-root)":{m:0,mt:1,color:"#333",fontSize:"1.0rem",fontWeight:600},"& h6:not(.MuiTypography-root)":{m:0,mt:1,color:"#444",fontSize:"0.95rem",fontWeight:600,lineHeight:"1.9rem"},"& > article > p:not(.MuiTypography-root)":{m:0,color:"#444",mt:"0.5rem",mb:"0.5rem",fontSize:"0.95rem",fontWeight:400,lineHeight:"1.45rem"},"& > pre":{overflow:"auto",position:"relative",wordWrap:"break-word"},"& pre":{backgroundColor:"#1f2937",fontFamily:"'Noto Sans KR','Nanum Gothic Coding', ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",marginBottom:"16px"},"& :not(pre) > code":{backgroundColor:"transparent",position:"relative",color:"#000",fontWeight:600,paddingLeft:"0.4em",paddingRight:"0.4em",fontFamily:"'Noto Sans KR','Nanum Gothic Coding', ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",fontSize:"85%",lineHeight:1.5,wordBreak:"break-word",whiteSpace:"nowrap","&::before":{position:"absolute",content:'""',top:-2,right:0,left:0,bottom:-2,zIndex:0,borderRadius:"6px",background:"rgba(175,183,193,0.2)",padding:"0.2em 0.4em"}},"& pre > code":{padding:0,color:"inherit",background:"inherit",whiteSpace:"pre",fontFamily:"'Nanum Gothic Coding', ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace"},"& ul > li,& ol > li":{lineHeight:"1.7rem"},"& ul > li + li,& ol > li + li":{mt:.5}},children:(0,r.jsx)(a.Z,{ref:p,sx:{position:"relative",width:"calc(100vw - ".concat(b,"px)"),maxWidth:"calc(100vw - ".concat(b,"px)"),overflowX:"hidden"},children:(0,r.jsx)(a.Z,{sx:{display:x<=0?"none":"block",maxWidth:"".concat(840,"px"),marginLeft:"auto",marginRight:"auto"},children:n})})})]})}},91127:function(e,t,n){n.d(t,{p:function(){return r},S:function(){return o}});var r="AI \ucf54\ub529\ube14\ub85d \uc0ac\uc6a9\uc790 \uac00\uc774\ub4dc",o="@ktaicoder"}}]);