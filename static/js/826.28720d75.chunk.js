"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[826],{7826:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var i,r,a,o,l,s,d,c,p,x,u,m,f,b,h,Z,g,j,y,v=t(2791),k=t(168),P=t(7e3),w=P.ZP.section(i||(i=(0,k.Z)(["\npadding: 15px 30px;\n\n"]))),z=P.ZP.h2(r||(r=(0,k.Z)(["\nfont-size: ",";\nmargin: 20px;\n"])),(function(n){return n.theme.fontSizes.large})),C=P.ZP.form(a||(a=(0,k.Z)(["\ndisplay: flex;\nflex-direction: column;\nborder: 2px solid #33439dcf;\npadding: 25px 10px 15px 10px;\nborder-radius: 6px;\nbox-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\nwidth: 250px;\nmargin-left: 20px;\ngap: 20px;\n// padding: 15px;\n"]))),S=(P.ZP.label(o||(o=(0,k.Z)(["\ndisplay: block;\n"]))),P.ZP.input(l||(l=(0,k.Z)(["\nborder: 1px solid black;\ndisplay: block;\nmargin-top: 10px;"]))),P.ZP.button(s||(s=(0,k.Z)(["\nwidth: 100px;\ndisplay: block;\ncursor: pointer;\npadding: 5px 10px;"]))),t(9434)),L=function(n){return n.contacts},I=function(n){return n.filter},_=t(9647),F=t(2998),q=t(6854),N=t(184),T=function(){var n=(0,S.v9)(L).items,e=(0,S.I0)();return(0,N.jsxs)(w,{children:[(0,N.jsx)(z,{children:"Create new contact"}),(0,N.jsxs)(C,{autoComplete:"off",onSubmit:function(t){t.preventDefault();var i=t.target.elements.name.value,r=t.target.elements.number.value,a={name:i,number:r};return n.some((function(n){return n.name.toLowerCase()===i.toLowerCase()}))?alert("Contact with the nane ".concat(i," already exists in your contact-list.")):n.some((function(n){return n.number===r}))?alert("Contact with the number ".concat(r," already exists in your contact-list.")):(e((0,_.je)(a)),void t.target.reset())},children:[(0,N.jsx)(F.Z,{id:"outlined-basic",label:"Name",variant:"outlined",name:"name",type:"text",size:"small",required:!0}),(0,N.jsx)(F.Z,{id:"outlined-basic",label:"Number",variant:"outlined",name:"number",type:"tel",size:"small",required:!0}),(0,N.jsx)(q.zx,{type:"submit",children:"Add contact"})]})]})},A=P.ZP.section(d||(d=(0,k.Z)(["\npadding: 15px 30px;\n// margin-top: 40px;\n"]))),D=(P.ZP.h2(c||(c=(0,k.Z)(["\nfont-size: ",";\nmargin: 20px;\n"])),(function(n){return n.theme.fontSizes.large})),P.ZP.li(p||(p=(0,k.Z)(["\nfont-size: ",";\nmargin-bottom: 15px;\n"])),(function(n){return n.theme.fontSizes.medium})),P.ZP.p(x||(x=(0,k.Z)(["\nmargin: 0;\n  margin-right: 10px;\n  display: inline-block;\n"])))),E=P.ZP.li(u||(u=(0,k.Z)(["\n// display: flex;\nfont-size: ",";\n// margin-bottom: 15px;\n"])),(function(n){return n.theme.fontSizes.medium})),X=(P.ZP.button(m||(m=(0,k.Z)(["\ndisplay: inline-block;\n  background-color: #db0a0ab5 ;\n  padding: 5px 12px;\n  border: none;\n  border-radius: 4px;\n  margin-left: auto;\n  height: 24px;\n  "]))),t(7247)),Y=t(7107),$=t(4507),B=t(835),G=function(){var n=(0,S.v9)(L),e=n.items,t=n.isLoading,i=n.error,r=(0,S.I0)(),a=(0,S.v9)(I).filter;(0,v.useEffect)((function(){r((0,_.m$)())}),[r]);var o=e.filter((function(n){return n.name.toLowerCase().includes(a.toLowerCase())})),l=(0,Y.Z)({palette:{neutral:{main:"#33439dcf",contrastText:"#fff"}}});return(0,N.jsxs)(A,{children:[i&&(0,N.jsx)("h2",{children:i}),t&&(0,N.jsx)("p",{children:"Is loading..."}),0===e.length?(0,N.jsx)("p",{children:"You don't have contacts yet"}):(0,N.jsxs)("ul",{children:[" ",o.map((function(n){var e=n.id,t=n.name,i=n.number;return(0,N.jsxs)(E,{children:[(0,N.jsxs)(D,{children:[t,": ",i]}),(0,N.jsx)($.Z,{theme:l,children:(0,N.jsx)(B.Z,{"aria-label":"delete",onClick:function(){return function(n){r((0,_.xX)(n))}(e)},color:"neutral",size:"large",children:(0,N.jsx)(X.Z,{fontSize:"inherit"})})})]},e)}))]})]})},H=P.ZP.section(f||(f=(0,k.Z)(["\n  padding: 15px 30px;\n  \n"]))),J=P.ZP.form(b||(b=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 250px;\n  margin-left: 20px;\n  gap: 20px;\n  padding: 20px 15px;\n  border: 2px solid #33439dcf;\n// padding: 25px 10px 15px 10px;\nborder-radius: 6px;\nbox-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n"]))),K=(P.ZP.label(h||(h=(0,k.Z)(["\n  display: block;\n"]))),P.ZP.h3(Z||(Z=(0,k.Z)(["\nmargin: 0\n"])))),M=(P.ZP.input(g||(g=(0,k.Z)(["\n  border: 1px solid black;\n  display: block;\n  margin-top: 10px;\n  color: black;\n"]))),P.ZP.button(j||(j=(0,k.Z)(["\n  width: 100px;\n  display: block;\n  cursor: pointer;\n  padding: 5px 10px;\n"]))),P.ZP.h2(y||(y=(0,k.Z)(["\n  font-size: ",";\n  margin: 20px;\n"])),(function(n){return n.theme.fontSizes.large}))),O=t(6895),Q=function(n){n.label;var e=(0,S.I0)();return(0,N.jsxs)(H,{children:[(0,N.jsx)(M,{children:"Contacts"}),(0,N.jsxs)(J,{children:[(0,N.jsx)(K,{children:"Find contacts by name"}),(0,N.jsx)(F.Z,{id:"filter",label:"name",variant:"outlined",name:"filter",type:"text",size:"small",onChange:function(n){var t=n.target.value;e((0,O.T)(t))}})]})]})},R=function(){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(T,{}),(0,N.jsx)(Q,{label:"Find contacts by name"}),(0,N.jsx)(G,{})]})}}}]);
//# sourceMappingURL=826.28720d75.chunk.js.map