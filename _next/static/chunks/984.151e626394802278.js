"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[984],{47034:function(n,e,o){var r=o(19756),t=o(22122),i=o(67294),a=o(86010),s=o(94780),u=o(54844),c=o(41796),l=o(98216),d=o(90948),p=o(71657),m=o(18791),f=o(51705),b=o(23972),y=o(23400),Z=o(85893);const v=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],h={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},k=(0,d.ZP)(b.Z,{name:"MuiLink",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:o}=n;return[e.root,e[`underline${(0,l.Z)(o.underline)}`],"button"===o.component&&e.button]}})((({theme:n,ownerState:e})=>{const o=(0,u.D)(n,`palette.${(n=>h[n]||n)(e.color)}`)||e.color;return(0,t.Z)({},"none"===e.underline&&{textDecoration:"none"},"hover"===e.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===e.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==o?(0,c.Fq)(o,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===e.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${y.Z.focusVisible}`]:{outline:"auto"}})})),x=i.forwardRef((function(n,e){const o=(0,p.Z)({props:n,name:"MuiLink"}),{className:u,color:c="primary",component:d="a",onBlur:b,onFocus:x,TypographyClasses:w,underline:C="always",variant:g="inherit",sx:D}=o,S=(0,r.Z)(o,v),{isFocusVisibleRef:A,onBlur:F,onFocus:N,ref:V}=(0,m.Z)(),[L,M]=i.useState(!1),R=(0,f.Z)(e,V),B=(0,t.Z)({},o,{color:c,component:d,focusVisible:L,underline:C,variant:g}),$=(n=>{const{classes:e,component:o,focusVisible:r,underline:t}=n,i={root:["root",`underline${(0,l.Z)(t)}`,"button"===o&&"button",r&&"focusVisible"]};return(0,s.Z)(i,y.w,e)})(B);return(0,Z.jsx)(k,(0,t.Z)({color:c,className:(0,a.Z)($.root,u),classes:w,component:d,onBlur:n=>{F(n),!1===A.current&&M(!1),b&&b(n)},onFocus:n=>{N(n),!0===A.current&&M(!0),x&&x(n)},ref:R,ownerState:B,variant:g,sx:[...Object.keys(h).includes(c)?[]:[{color:c}],...Array.isArray(D)?D:[D]]},S))}));e.Z=x},94984:function(n,e,o){o.r(e),o.d(e,{default:function(){return r.Z},getLinkUtilityClass:function(){return t.w},linkClasses:function(){return t.Z}});var r=o(47034),t=o(23400)},23400:function(n,e,o){o.d(e,{w:function(){return t}});var r=o(34867);function t(n){return(0,r.Z)("MuiLink",n)}const i=(0,o(1588).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);e.Z=i}}]);