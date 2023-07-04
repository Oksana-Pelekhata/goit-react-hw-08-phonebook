"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[979],{1889:function(n,t,e){e.d(t,{ZP:function(){return G}});var r=e(3433),a=e(4942),i=e(3366),o=e(7462),c=e(2791),s=e(8182),u=e(1184),p=e(8519),d=e(4419),f=e(6934),m=e(1402),l=e(3967);var v=c.createContext(),g=e(5878),h=e(1217);function x(n){return(0,h.Z)("MuiGrid",n)}var b=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],w=(0,g.Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,r.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(n){return"spacing-xs-".concat(n)}))),(0,r.Z)(["column-reverse","column","row-reverse","row"].map((function(n){return"direction-xs-".concat(n)}))),(0,r.Z)(["nowrap","wrap-reverse","wrap"].map((function(n){return"wrap-xs-".concat(n)}))),(0,r.Z)(b.map((function(n){return"grid-xs-".concat(n)}))),(0,r.Z)(b.map((function(n){return"grid-sm-".concat(n)}))),(0,r.Z)(b.map((function(n){return"grid-md-".concat(n)}))),(0,r.Z)(b.map((function(n){return"grid-lg-".concat(n)}))),(0,r.Z)(b.map((function(n){return"grid-xl-".concat(n)}))))),k=e(184),Z=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function S(n){var t=parseFloat(n);return"".concat(t).concat(String(n).replace(String(t),"")||"px")}function W(n){var t=n.breakpoints,e=n.values,r="";Object.keys(e).forEach((function(n){""===r&&0!==e[n]&&(r=n)}));var a=Object.keys(t).sort((function(n,e){return t[n]-t[e]}));return a.slice(0,a.indexOf(r))}var M=(0,f.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState,a=e.container,i=e.direction,o=e.item,c=e.spacing,s=e.wrap,u=e.zeroMinWidth,p=e.breakpoints,d=[];a&&(d=function(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[e["spacing-xs-".concat(String(n))]];var r=[];return t.forEach((function(t){var a=n[t];Number(a)>0&&r.push(e["spacing-".concat(t,"-").concat(String(a))])})),r}(c,p,t));var f=[];return p.forEach((function(n){var r=e[n];r&&f.push(t["grid-".concat(n,"-").concat(String(r))])})),[t.root,a&&t.container,o&&t.item,u&&t.zeroMinWidth].concat((0,r.Z)(d),["row"!==i&&t["direction-xs-".concat(String(i))],"wrap"!==s&&t["wrap-xs-".concat(String(s))]],f)}})((function(n){var t=n.ownerState;return(0,o.Z)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"wrap"!==t.wrap&&{flexWrap:t.wrap})}),(function(n){var t=n.theme,e=n.ownerState,r=(0,u.P$)({values:e.direction,breakpoints:t.breakpoints.values});return(0,u.k9)({theme:t},r,(function(n){var t={flexDirection:n};return 0===n.indexOf("column")&&(t["& > .".concat(w.item)]={maxWidth:"none"}),t}))}),(function(n){var t=n.theme,e=n.ownerState,r=e.container,i=e.rowSpacing,o={};if(r&&0!==i){var c,s=(0,u.P$)({values:i,breakpoints:t.breakpoints.values});"object"===typeof s&&(c=W({breakpoints:t.breakpoints.values,values:s})),o=(0,u.k9)({theme:t},s,(function(n,e){var r,i=t.spacing(n);return"0px"!==i?(0,a.Z)({marginTop:"-".concat(S(i))},"& > .".concat(w.item),{paddingTop:S(i)}):null!=(r=c)&&r.includes(e)?{}:(0,a.Z)({marginTop:0},"& > .".concat(w.item),{paddingTop:0})}))}return o}),(function(n){var t=n.theme,e=n.ownerState,r=e.container,i=e.columnSpacing,o={};if(r&&0!==i){var c,s=(0,u.P$)({values:i,breakpoints:t.breakpoints.values});"object"===typeof s&&(c=W({breakpoints:t.breakpoints.values,values:s})),o=(0,u.k9)({theme:t},s,(function(n,e){var r,i=t.spacing(n);return"0px"!==i?(0,a.Z)({width:"calc(100% + ".concat(S(i),")"),marginLeft:"-".concat(S(i))},"& > .".concat(w.item),{paddingLeft:S(i)}):null!=(r=c)&&r.includes(e)?{}:(0,a.Z)({width:"100%",marginLeft:0},"& > .".concat(w.item),{paddingLeft:0})}))}return o}),(function(n){var t,e=n.theme,r=n.ownerState;return e.breakpoints.keys.reduce((function(n,a){var i={};if(r[a]&&(t=r[a]),!t)return n;if(!0===t)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var c=(0,u.P$)({values:r.columns,breakpoints:e.breakpoints.values}),s="object"===typeof c?c[a]:c;if(void 0===s||null===s)return n;var p="".concat(Math.round(t/s*1e8)/1e6,"%"),d={};if(r.container&&r.item&&0!==r.columnSpacing){var f=e.spacing(r.columnSpacing);if("0px"!==f){var m="calc(".concat(p," + ").concat(S(f),")");d={flexBasis:m,maxWidth:m}}}i=(0,o.Z)({flexBasis:p,flexGrow:0,maxWidth:p},d)}return 0===e.breakpoints.values[a]?Object.assign(n,i):n[e.breakpoints.up(a)]=i,n}),{})}));var N=function(n){var t=n.classes,e=n.container,a=n.direction,i=n.item,o=n.spacing,c=n.wrap,s=n.zeroMinWidth,u=n.breakpoints,p=[];e&&(p=function(n,t){if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return["spacing-xs-".concat(String(n))];var e=[];return t.forEach((function(t){var r=n[t];if(Number(r)>0){var a="spacing-".concat(t,"-").concat(String(r));e.push(a)}})),e}(o,u));var f=[];u.forEach((function(t){var e=n[t];e&&f.push("grid-".concat(t,"-").concat(String(e)))}));var m={root:["root",e&&"container",i&&"item",s&&"zeroMinWidth"].concat((0,r.Z)(p),["row"!==a&&"direction-xs-".concat(String(a)),"wrap"!==c&&"wrap-xs-".concat(String(c))],f)};return(0,d.Z)(m,x,t)},y=c.forwardRef((function(n,t){var e=(0,m.Z)({props:n,name:"MuiGrid"}),r=(0,l.Z)().breakpoints,a=(0,p.Z)(e),u=a.className,d=a.columns,f=a.columnSpacing,g=a.component,h=void 0===g?"div":g,x=a.container,b=void 0!==x&&x,w=a.direction,S=void 0===w?"row":w,W=a.item,y=void 0!==W&&W,G=a.rowSpacing,z=a.spacing,j=void 0===z?0:z,R=a.wrap,C=void 0===R?"wrap":R,P=a.zeroMinWidth,L=void 0!==P&&P,E=(0,i.Z)(a,Z),O=G||j,T=f||j,B=c.useContext(v),$=b?d||12:B,_={},D=(0,o.Z)({},E);r.keys.forEach((function(n){null!=E[n]&&(_[n]=E[n],delete D[n])}));var F=(0,o.Z)({},a,{columns:$,container:b,direction:S,item:y,rowSpacing:O,columnSpacing:T,wrap:C,zeroMinWidth:L,spacing:j},_,{breakpoints:r.keys}),q=N(F);return(0,k.jsx)(v.Provider,{value:$,children:(0,k.jsx)(M,(0,o.Z)({ownerState:F,className:(0,s.Z)(q.root,u),as:h,ref:t},D))})})),G=y},3631:function(n,t,e){e.d(t,{Z:function(){return k}});var r=e(4942),a=e(3366),i=e(7462),o=e(2791),c=e(8182),s=e(1122),u=e(1217),p=e(4419),d=e(8691),f=e(3457),m=e(5080),l=e(184),v=["className","component","disableGutters","fixed","maxWidth","classes"],g=(0,m.Z)(),h=(0,f.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState;return[t.root,t["maxWidth".concat((0,s.Z)(String(e.maxWidth)))],e.fixed&&t.fixed,e.disableGutters&&t.disableGutters]}}),x=function(n){return(0,d.Z)({props:n,name:"MuiContainer",defaultTheme:g})},b=function(n,t){var e=n.classes,r=n.fixed,a=n.disableGutters,i=n.maxWidth,o={root:["root",i&&"maxWidth".concat((0,s.Z)(String(i))),r&&"fixed",a&&"disableGutters"]};return(0,p.Z)(o,(function(n){return(0,u.Z)(t,n)}),e)};var w=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.createStyledComponent,e=void 0===t?h:t,s=n.useThemeProps,u=void 0===s?x:s,p=n.componentName,d=void 0===p?"MuiContainer":p,f=e((function(n){var t=n.theme,e=n.ownerState;return(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!e.disableGutters&&(0,r.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(n){var t=n.theme;return n.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(n,e){var r=e,a=t.breakpoints.values[r];return 0!==a&&(n[t.breakpoints.up(r)]={maxWidth:"".concat(a).concat(t.breakpoints.unit)}),n}),{})}),(function(n){var t=n.theme,e=n.ownerState;return(0,i.Z)({},"xs"===e.maxWidth&&(0,r.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),e.maxWidth&&"xs"!==e.maxWidth&&(0,r.Z)({},t.breakpoints.up(e.maxWidth),{maxWidth:"".concat(t.breakpoints.values[e.maxWidth]).concat(t.breakpoints.unit)}))})),m=o.forwardRef((function(n,t){var e=u(n),r=e.className,o=e.component,s=void 0===o?"div":o,p=e.disableGutters,m=void 0!==p&&p,g=e.fixed,h=void 0!==g&&g,x=e.maxWidth,w=void 0===x?"lg":x,k=(0,a.Z)(e,v),Z=(0,i.Z)({},e,{component:s,disableGutters:m,fixed:h,maxWidth:w}),S=b(Z,d);return(0,l.jsx)(f,(0,i.Z)({as:s,ownerState:Z,className:(0,c.Z)(S.root,r),ref:t},k))}));return m}(),k=w}}]);
//# sourceMappingURL=979.61a83726.chunk.js.map