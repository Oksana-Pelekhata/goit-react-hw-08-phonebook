(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[215],{7247:function(e,n,t){"use strict";var r=t(4836);n.Z=void 0;var o=r(t(5649)),i=t(184),u=(0,o.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=u},5649:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(4454)},835:function(e,n,t){"use strict";t.d(n,{Z:function(){return ae}});var r=t(4942),o=t(3366),i=t(7462),u=t(2791),a=t(8182),c=t(4419),l=t(2065),s=t(6934),d=t(1402),p=t(9439),f=t(2071),h=t(9683),v=t(3031),m=t(3433),b=t(168),Z=t(7326),g=t(4578),y=t(5545);function R(e,n){var t=Object.create(null);return e&&u.Children.map(e,(function(e){return e})).forEach((function(e){t[e.key]=function(e){return n&&(0,u.isValidElement)(e)?n(e):e}(e)})),t}function x(e,n,t){return null!=t[n]?t[n]:e.props[n]}function M(e,n,t){var r=R(e.children),o=function(e,n){function t(t){return t in n?n[t]:e[t]}e=e||{},n=n||{};var r,o=Object.create(null),i=[];for(var u in e)u in n?i.length&&(o[u]=i,i=[]):i.push(u);var a={};for(var c in n){if(o[c])for(r=0;r<o[c].length;r++){var l=o[c][r];a[o[c][r]]=t(l)}a[c]=t(c)}for(r=0;r<i.length;r++)a[i[r]]=t(i[r]);return a}(n,r);return Object.keys(o).forEach((function(i){var a=o[i];if((0,u.isValidElement)(a)){var c=i in n,l=i in r,s=n[i],d=(0,u.isValidElement)(s)&&!s.props.in;!l||c&&!d?l||!c||d?l&&c&&(0,u.isValidElement)(s)&&(o[i]=(0,u.cloneElement)(a,{onExited:t.bind(null,a),in:s.props.in,exit:x(a,"exit",e),enter:x(a,"enter",e)})):o[i]=(0,u.cloneElement)(a,{in:!1}):o[i]=(0,u.cloneElement)(a,{onExited:t.bind(null,a),in:!0,exit:x(a,"exit",e),enter:x(a,"enter",e)})}})),o}var E=Object.values||function(e){return Object.keys(e).map((function(n){return e[n]}))},w=function(e){function n(n,t){var r,o=(r=e.call(this,n,t)||this).handleExited.bind((0,Z.Z)(r));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}(0,g.Z)(n,e);var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(e,n){var t,r,o=n.children,i=n.handleExited;return{children:n.firstRender?(t=e,r=i,R(t.children,(function(e){return(0,u.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:x(e,"appear",t),enter:x(e,"enter",t),exit:x(e,"exit",t)})}))):M(e,o,i),firstRender:!1}},t.handleExited=function(e,n){var t=R(this.props.children);e.key in t||(e.props.onExited&&e.props.onExited(n),this.mounted&&this.setState((function(n){var t=(0,i.Z)({},n.children);return delete t[e.key],{children:t}})))},t.render=function(){var e=this.props,n=e.component,t=e.childFactory,r=(0,o.Z)(e,["component","childFactory"]),i=this.state.contextValue,a=E(this.state.children).map(t);return delete r.appear,delete r.enter,delete r.exit,null===n?u.createElement(y.Z.Provider,{value:i},a):u.createElement(y.Z.Provider,{value:i},u.createElement(n,r,a))},n}(u.Component);w.propTypes={},w.defaultProps={component:"div",childFactory:function(e){return e}};var k=w,T=t(2554),C=t(184);var S=function(e){var n=e.className,t=e.classes,r=e.pulsate,o=void 0!==r&&r,i=e.rippleX,c=e.rippleY,l=e.rippleSize,s=e.in,d=e.onExited,f=e.timeout,h=u.useState(!1),v=(0,p.Z)(h,2),m=v[0],b=v[1],Z=(0,a.Z)(n,t.ripple,t.rippleVisible,o&&t.ripplePulsate),g={width:l,height:l,top:-l/2+c,left:-l/2+i},y=(0,a.Z)(t.child,m&&t.childLeaving,o&&t.childPulsate);return s||m||b(!0),u.useEffect((function(){if(!s&&null!=d){var e=setTimeout(d,f);return function(){clearTimeout(e)}}}),[d,s,f]),(0,C.jsx)("span",{className:Z,style:g,children:(0,C.jsx)("span",{className:y})})},P=t(5878);var z,V,F,I,j,L,D,N,B=(0,P.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),_=["center","classes","className"],O=(0,T.F4)(j||(j=z||(z=(0,b.Z)(["\n  0% {\n    transform: scale(0);\n    opacity: 0.1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0.3;\n  }\n"])))),K=(0,T.F4)(L||(L=V||(V=(0,b.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"])))),X=(0,T.F4)(D||(D=F||(F=(0,b.Z)(["\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.92);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"])))),A=(0,s.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),U=(0,s.ZP)(S,{name:"MuiTouchRipple",slot:"Ripple"})(N||(N=I||(I=(0,b.Z)(["\n  opacity: 0;\n  position: absolute;\n\n  &."," {\n    opacity: 0.3;\n    transform: scale(1);\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  &."," {\n    animation-duration: ","ms;\n  }\n\n  & ."," {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: currentColor;\n  }\n\n  & ."," {\n    opacity: 0;\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  & ."," {\n    position: absolute;\n    /* @noflip */\n    left: 0px;\n    top: 0;\n    animation-name: ",";\n    animation-duration: 2500ms;\n    animation-timing-function: ",";\n    animation-iteration-count: infinite;\n    animation-delay: 200ms;\n  }\n"]))),B.rippleVisible,O,550,(function(e){return e.theme.transitions.easing.easeInOut}),B.ripplePulsate,(function(e){return e.theme.transitions.duration.shorter}),B.child,B.childLeaving,K,550,(function(e){return e.theme.transitions.easing.easeInOut}),B.childPulsate,X,(function(e){return e.theme.transitions.easing.easeInOut})),H=u.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiTouchRipple"}),r=t.center,c=void 0!==r&&r,l=t.classes,s=void 0===l?{}:l,f=t.className,h=(0,o.Z)(t,_),v=u.useState([]),b=(0,p.Z)(v,2),Z=b[0],g=b[1],y=u.useRef(0),R=u.useRef(null);u.useEffect((function(){R.current&&(R.current(),R.current=null)}),[Z]);var x=u.useRef(!1),M=u.useRef(0),E=u.useRef(null),w=u.useRef(null);u.useEffect((function(){return function(){M.current&&clearTimeout(M.current)}}),[]);var T=u.useCallback((function(e){var n=e.pulsate,t=e.rippleX,r=e.rippleY,o=e.rippleSize,i=e.cb;g((function(e){return[].concat((0,m.Z)(e),[(0,C.jsx)(U,{classes:{ripple:(0,a.Z)(s.ripple,B.ripple),rippleVisible:(0,a.Z)(s.rippleVisible,B.rippleVisible),ripplePulsate:(0,a.Z)(s.ripplePulsate,B.ripplePulsate),child:(0,a.Z)(s.child,B.child),childLeaving:(0,a.Z)(s.childLeaving,B.childLeaving),childPulsate:(0,a.Z)(s.childPulsate,B.childPulsate)},timeout:550,pulsate:n,rippleX:t,rippleY:r,rippleSize:o},y.current)])})),y.current+=1,R.current=i}),[s]),S=u.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=n.pulsate,o=void 0!==r&&r,i=n.center,u=void 0===i?c||n.pulsate:i,a=n.fakeElement,l=void 0!==a&&a;if("mousedown"===(null==e?void 0:e.type)&&x.current)x.current=!1;else{"touchstart"===(null==e?void 0:e.type)&&(x.current=!0);var s,d,p,f=l?null:w.current,h=f?f.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(u||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)s=Math.round(h.width/2),d=Math.round(h.height/2);else{var v=e.touches&&e.touches.length>0?e.touches[0]:e,m=v.clientX,b=v.clientY;s=Math.round(m-h.left),d=Math.round(b-h.top)}if(u)(p=Math.sqrt((2*Math.pow(h.width,2)+Math.pow(h.height,2))/3))%2===0&&(p+=1);else{var Z=2*Math.max(Math.abs((f?f.clientWidth:0)-s),s)+2,g=2*Math.max(Math.abs((f?f.clientHeight:0)-d),d)+2;p=Math.sqrt(Math.pow(Z,2)+Math.pow(g,2))}null!=e&&e.touches?null===E.current&&(E.current=function(){T({pulsate:o,rippleX:s,rippleY:d,rippleSize:p,cb:t})},M.current=setTimeout((function(){E.current&&(E.current(),E.current=null)}),80)):T({pulsate:o,rippleX:s,rippleY:d,rippleSize:p,cb:t})}}),[c,T]),P=u.useCallback((function(){S({},{pulsate:!0})}),[S]),z=u.useCallback((function(e,n){if(clearTimeout(M.current),"touchend"===(null==e?void 0:e.type)&&E.current)return E.current(),E.current=null,void(M.current=setTimeout((function(){z(e,n)})));E.current=null,g((function(e){return e.length>0?e.slice(1):e})),R.current=n}),[]);return u.useImperativeHandle(n,(function(){return{pulsate:P,start:S,stop:z}}),[P,S,z]),(0,C.jsx)(A,(0,i.Z)({className:(0,a.Z)(B.root,s.root,f),ref:w},h,{children:(0,C.jsx)(k,{component:null,exit:!0,children:Z})}))})),Y=H,W=t(1217);function q(e){return(0,W.Z)("MuiButtonBase",e)}var G,J=(0,P.Z)("MuiButtonBase",["root","disabled","focusVisible"]),Q=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],$=(0,s.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:function(e,n){return n.root}})((G={display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"}},(0,r.Z)(G,"&.".concat(J.disabled),{pointerEvents:"none",cursor:"default"}),(0,r.Z)(G,"@media print",{colorAdjust:"exact"}),G)),ee=u.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiButtonBase"}),r=t.action,l=t.centerRipple,s=void 0!==l&&l,m=t.children,b=t.className,Z=t.component,g=void 0===Z?"button":Z,y=t.disabled,R=void 0!==y&&y,x=t.disableRipple,M=void 0!==x&&x,E=t.disableTouchRipple,w=void 0!==E&&E,k=t.focusRipple,T=void 0!==k&&k,S=t.LinkComponent,P=void 0===S?"a":S,z=t.onBlur,V=t.onClick,F=t.onContextMenu,I=t.onDragLeave,j=t.onFocus,L=t.onFocusVisible,D=t.onKeyDown,N=t.onKeyUp,B=t.onMouseDown,_=t.onMouseLeave,O=t.onMouseUp,K=t.onTouchEnd,X=t.onTouchMove,A=t.onTouchStart,U=t.tabIndex,H=void 0===U?0:U,W=t.TouchRippleProps,G=t.touchRippleRef,J=t.type,ee=(0,o.Z)(t,Q),ne=u.useRef(null),te=u.useRef(null),re=(0,f.Z)(te,G),oe=(0,v.Z)(),ie=oe.isFocusVisibleRef,ue=oe.onFocus,ae=oe.onBlur,ce=oe.ref,le=u.useState(!1),se=(0,p.Z)(le,2),de=se[0],pe=se[1];R&&de&&pe(!1),u.useImperativeHandle(r,(function(){return{focusVisible:function(){pe(!0),ne.current.focus()}}}),[]);var fe=u.useState(!1),he=(0,p.Z)(fe,2),ve=he[0],me=he[1];u.useEffect((function(){me(!0)}),[]);var be=ve&&!M&&!R;function Ze(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:w;return(0,h.Z)((function(r){return n&&n(r),!t&&te.current&&te.current[e](r),!0}))}u.useEffect((function(){de&&T&&!M&&ve&&te.current.pulsate()}),[M,T,de,ve]);var ge=Ze("start",B),ye=Ze("stop",F),Re=Ze("stop",I),xe=Ze("stop",O),Me=Ze("stop",(function(e){de&&e.preventDefault(),_&&_(e)})),Ee=Ze("start",A),we=Ze("stop",K),ke=Ze("stop",X),Te=Ze("stop",(function(e){ae(e),!1===ie.current&&pe(!1),z&&z(e)}),!1),Ce=(0,h.Z)((function(e){ne.current||(ne.current=e.currentTarget),ue(e),!0===ie.current&&(pe(!0),L&&L(e)),j&&j(e)})),Se=function(){var e=ne.current;return g&&"button"!==g&&!("A"===e.tagName&&e.href)},Pe=u.useRef(!1),ze=(0,h.Z)((function(e){T&&!Pe.current&&de&&te.current&&" "===e.key&&(Pe.current=!0,te.current.stop(e,(function(){te.current.start(e)}))),e.target===e.currentTarget&&Se()&&" "===e.key&&e.preventDefault(),D&&D(e),e.target===e.currentTarget&&Se()&&"Enter"===e.key&&!R&&(e.preventDefault(),V&&V(e))})),Ve=(0,h.Z)((function(e){T&&" "===e.key&&te.current&&de&&!e.defaultPrevented&&(Pe.current=!1,te.current.stop(e,(function(){te.current.pulsate(e)}))),N&&N(e),V&&e.target===e.currentTarget&&Se()&&" "===e.key&&!e.defaultPrevented&&V(e)})),Fe=g;"button"===Fe&&(ee.href||ee.to)&&(Fe=P);var Ie={};"button"===Fe?(Ie.type=void 0===J?"button":J,Ie.disabled=R):(ee.href||ee.to||(Ie.role="button"),R&&(Ie["aria-disabled"]=R));var je=(0,f.Z)(n,ce,ne);var Le=(0,i.Z)({},t,{centerRipple:s,component:g,disabled:R,disableRipple:M,disableTouchRipple:w,focusRipple:T,tabIndex:H,focusVisible:de}),De=function(e){var n=e.disabled,t=e.focusVisible,r=e.focusVisibleClassName,o=e.classes,i={root:["root",n&&"disabled",t&&"focusVisible"]},u=(0,c.Z)(i,q,o);return t&&r&&(u.root+=" ".concat(r)),u}(Le);return(0,C.jsxs)($,(0,i.Z)({as:Fe,className:(0,a.Z)(De.root,b),ownerState:Le,onBlur:Te,onClick:V,onContextMenu:ye,onFocus:Ce,onKeyDown:ze,onKeyUp:Ve,onMouseDown:ge,onMouseLeave:Me,onMouseUp:xe,onDragLeave:Re,onTouchEnd:we,onTouchMove:ke,onTouchStart:Ee,ref:je,tabIndex:R?-1:H,type:J},Ie,ee,{children:[m,be?(0,C.jsx)(Y,(0,i.Z)({ref:re,center:s},W)):null]}))})),ne=ee,te=t(4036);function re(e){return(0,W.Z)("MuiIconButton",e)}var oe=(0,P.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),ie=["edge","children","className","color","disabled","disableFocusRipple","size"],ue=(0,s.ZP)(ne,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,"default"!==t.color&&n["color".concat((0,te.Z)(t.color))],t.edge&&n["edge".concat((0,te.Z)(t.edge))],n["size".concat((0,te.Z)(t.size))]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,i.Z)({textAlign:"center",flex:"0 0 auto",fontSize:n.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(n.vars||n).palette.action.active,transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.action.activeChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,l.Fq)(n.palette.action.active,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})}),(function(e){var n,t=e.theme,o=e.ownerState,u=null==(n=(t.vars||t).palette)?void 0:n[o.color];return(0,i.Z)({},"inherit"===o.color&&{color:"inherit"},"inherit"!==o.color&&"default"!==o.color&&(0,i.Z)({color:null==u?void 0:u.main},!o.disableRipple&&{"&:hover":(0,i.Z)({},u&&{backgroundColor:t.vars?"rgba(".concat(u.mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,l.Fq)(u.main,t.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===o.size&&{padding:5,fontSize:t.typography.pxToRem(18)},"large"===o.size&&{padding:12,fontSize:t.typography.pxToRem(28)},(0,r.Z)({},"&.".concat(oe.disabled),{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}))})),ae=u.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiIconButton"}),r=t.edge,u=void 0!==r&&r,l=t.children,s=t.className,p=t.color,f=void 0===p?"default":p,h=t.disabled,v=void 0!==h&&h,m=t.disableFocusRipple,b=void 0!==m&&m,Z=t.size,g=void 0===Z?"medium":Z,y=(0,o.Z)(t,ie),R=(0,i.Z)({},t,{edge:u,color:f,disabled:v,disableFocusRipple:b,size:g}),x=function(e){var n=e.classes,t=e.disabled,r=e.color,o=e.edge,i=e.size,u={root:["root",t&&"disabled","default"!==r&&"color".concat((0,te.Z)(r)),o&&"edge".concat((0,te.Z)(o)),"size".concat((0,te.Z)(i))]};return(0,c.Z)(u,re,n)}(R);return(0,C.jsx)(ue,(0,i.Z)({className:(0,a.Z)(x.root,s),centerRipple:!0,focusRipple:!b,disabled:v,ref:n,ownerState:R},y,{children:l}))}))},4507:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var r=t(7462),o=t(3366),i=t(2791),u=t(4942);var a=i.createContext(null);function c(){return i.useContext(a)}var l=t(1413),s="function"===typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",d=t(184);var p=function(e){var n=e.children,t=e.theme,r=c(),o=i.useMemo((function(){var e=null===r?t:function(e,n){return"function"===typeof n?n(e):(0,l.Z)((0,l.Z)({},e),n)}(r,t);return null!=e&&(e[s]=null!==r),e}),[t,r]);return(0,d.jsx)(a.Provider,{value:o,children:n})},f=t(2564),h=t(9120),v={};function m(e,n,t){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return i.useMemo((function(){var i=e&&n[e]||n;if("function"===typeof t){var a=t(i),c=e?(0,r.Z)({},n,(0,u.Z)({},e,a)):a;return o?function(){return c}:c}return e?(0,r.Z)({},n,(0,u.Z)({},e,t)):(0,r.Z)({},n,t)}),[e,n,t,o])}var b=function(e){var n=e.children,t=e.theme,r=e.themeId,o=(0,h.Z)(v),i=c()||v,u=m(r,o,t),a=m(r,i,t,!0);return(0,d.jsx)(p,{theme:a,children:(0,d.jsx)(f.T.Provider,{value:u,children:n})})},Z=t(988),g=["theme"];function y(e){var n=e.theme,t=(0,o.Z)(e,g),i=n[Z.Z];return(0,d.jsx)(b,(0,r.Z)({},t,{themeId:i?Z.Z:void 0,theme:i||n}))}},4454:function(e,n,t){"use strict";t.r(n),t.d(n,{capitalize:function(){return o.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return u.Z},debounce:function(){return a.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return l.Z},ownerDocument:function(){return s.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return p},setRef:function(){return f},unstable_ClassNameGenerator:function(){return R},unstable_useEnhancedEffect:function(){return h.Z},unstable_useId:function(){return v},unsupportedProp:function(){return m},useControlled:function(){return b.Z},useEventCallback:function(){return Z.Z},useForkRef:function(){return g.Z},useIsFocusVisible:function(){return y.Z}});var r=t(5902),o=t(4036),i=t(8949).Z,u=t(9201),a=t(3199);var c=function(e,n){return function(){return null}},l=t(9103),s=t(8301),d=t(7602);t(7462);var p=function(e,n){return function(){return null}},f=t(2971).Z,h=t(162),v=t(8252).Z;var m=function(e,n,t,r,o){return null},b=t(5158),Z=t(9683),g=t(2071),y=t(3031),R={configure:function(e){r.Z.configure(e)}}},9683:function(e,n,t){"use strict";var r=t(7054);n.Z=r.Z},3031:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var r,o=t(2791),i=!0,u=!1,a={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function c(e){e.metaKey||e.altKey||e.ctrlKey||(i=!0)}function l(){i=!1}function s(){"hidden"===this.visibilityState&&u&&(i=!0)}function d(e){var n=e.target;try{return n.matches(":focus-visible")}catch(t){}return i||function(e){var n=e.type,t=e.tagName;return!("INPUT"!==t||!a[n]||e.readOnly)||"TEXTAREA"===t&&!e.readOnly||!!e.isContentEditable}(n)}var p=function(){var e=o.useCallback((function(e){var n;null!=e&&((n=e.ownerDocument).addEventListener("keydown",c,!0),n.addEventListener("mousedown",l,!0),n.addEventListener("pointerdown",l,!0),n.addEventListener("touchstart",l,!0),n.addEventListener("visibilitychange",s,!0))}),[]),n=o.useRef(!1);return{isFocusVisibleRef:n,onFocus:function(e){return!!d(e)&&(n.current=!0,!0)},onBlur:function(){return!!n.current&&(u=!0,window.clearTimeout(r),r=window.setTimeout((function(){u=!1}),100),n.current=!1,!0)},ref:e}}},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=215.675e2a6d.chunk.js.map