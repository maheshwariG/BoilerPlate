"use strict";(self.webpackChunkwebpacktest=self.webpackChunkwebpacktest||[]).push([[179],{9829:(e,n,t)=>{var r=t(7294),a=t(3935),s=t(8216),c=t(4890),l=t(4942),o="INCREMENT",i="DECREMENT";function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d={count:0};const A=(0,c.UY)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case o:return u(u({},e),{},{count:e.count+1});case i:return u(u({},e),{},{count:e.count-1});default:return e}}}),p=(0,c.MT)(A);var E=t(7462),g=t(3727),b=t(5977),f=t(589),h=t(4478),C=t(3379),v=t.n(C),y=t(7795),P=t.n(y),x=t(569),Z=t.n(x),B=t(3565),S=t.n(B),k=t(9216),N=t.n(k),O=t(4589),w=t.n(O),j=t(6314),D={};D.styleTagTransform=w(),D.setAttributes=S(),D.insert=Z().bind(null,"head"),D.domAPI=P(),D.insertStyleElement=N(),v()(j.Z,D);const Y=j.Z&&j.Z.locals?j.Z.locals:void 0;var T="EquipmentStatus",I="AssetManagement";var R=t(5697),q=t.n(R),M=t(8152);function G(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}const H=function(e){var n=e.children,t=(0,r.useState)([]),a=(0,M.Z)(t,2),s=a[0],c=a[1],o=(0,r.useState)({}),i=(0,M.Z)(o,2),m=i[0],u=i[1],d=(0,r.useState)(""),A=(0,M.Z)(d,2),p=A[0],E=A[1];return(0,r.useEffect)((function(){var e=[],t={};r.Children.forEach(n,(function(n){if(r.isValidElement(n)){var a=n.props.name;e.push(a),t[a]=n.props.children}})),c(e),E(e[0]),u(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?G(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},t)),console.log(t)}),[e,n]),r.createElement("div",{className:"tabs"},r.createElement("ul",{className:"tab-header"},s.map((function(e){return r.createElement("li",{onClick:function(){E(e)},key:e,className:e===p?"active":""},e)}))),r.createElement("div",{className:"tab-content borderR"},Object.keys(m).map((function(e,n){return e===p?r.createElement("div",{key:n,className:"tab-child"},m[e]):null}))))};var _=t(9450),W={};W.styleTagTransform=w(),W.setAttributes=S(),W.insert=Z().bind(null,"head"),W.domAPI=P(),W.insertStyleElement=N(),v()(_.Z,W),_.Z&&_.Z.locals&&_.Z.locals;const L=function(e){var n=e.childern;return r.createElement("div",{className:"tab-pane"},n)};var U=t(7077),K={};K.styleTagTransform=w(),K.setAttributes=S(),K.insert=Z().bind(null,"head"),K.domAPI=P(),K.insertStyleElement=N(),v()(U.Z,K);const Q=U.Z&&U.Z.locals?U.Z.locals:void 0,z=function(){return console.log("child"),r.createElement("div",null,"Test")};var V=function(e){var n=e.props,t=n.count,a=n.decreaseCounter,s=n.increaseCounter;return r.createElement(H,null,r.createElement(L,{name:"Equipment List",key:"1"},r.createElement(f.ZP,{container:!0,className:Q.fullHeight},r.createElement(f.ZP,{item:!0,xs:12,md:9},r.createElement("div",{className:Q.summarySection},r.createElement(z,null)),r.createElement("div",null,"Count: ",t),r.createElement("button",{type:"button",onClick:function(){s()}},"Increase Count"),r.createElement("button",{type:"button",onClick:function(){return a()}},"Decrease Count")),r.createElement(f.ZP,{item:!0,xs:12,md:3,pl:{sm:0,md:2},pt:{sm:2,md:0}},r.createElement("div",{className:Q.summarySection},"Installed Base Summary")))),r.createElement(L,{name:"Customer Status",key:"2"},r.createElement(f.ZP,{container:!0,className:Q.fullHeight},r.createElement(f.ZP,{item:!0,xs:12,md:9},r.createElement("div",{className:Q.summarySection},"Customer Status Section")),r.createElement(f.ZP,{item:!0,xs:12,md:3,pl:{sm:0,md:2},pt:{sm:2,md:0}},r.createElement("div",{className:Q.summarySection},"Customer Status Summary")))),r.createElement(L,{name:"Equipment Placement Map",key:"3"},r.createElement(f.ZP,{container:!0,className:Q.fullHeight},r.createElement(f.ZP,{item:!0,xs:12,md:9},r.createElement("div",{className:Q.summarySection},"Equipment Placement Map Section")),r.createElement(f.ZP,{item:!0,xs:12,md:3,pl:{sm:0,md:2},pt:{sm:2,md:0}},r.createElement("div",{className:Q.summarySection},"Installed Base Summary")))))};V.propTypes={count:q().number,decreaseCounter:q().func,increaseCounter:q().func,props:q().object},V.defaultProps={count:0,decreaseCounter:function(){},increaseCounter:function(){},props:{}};const X=V,$=(0,s.$j)((function(e){return{count:e.counter.count}}),(function(e){return{increaseCounter:function(){console.log("clicked"),e({type:o})},decreaseCounter:function(){return e({type:i})}}}))((function(e){return r.createElement(X,{props:e,incr:function(){alert("hi")}})}));var F=t(620),J={};J.styleTagTransform=w(),J.setAttributes=S(),J.insert=Z().bind(null,"head"),J.domAPI=P(),J.insertStyleElement=N(),v()(F.Z,J);const ee=F.Z&&F.Z.locals?F.Z.locals:void 0,ne=function(){return r.createElement(H,null,r.createElement(L,{name:"Diagnostic",key:"1"},r.createElement(f.ZP,{container:!0,className:ee.fullHeight},r.createElement(f.ZP,{item:!0,xs:12,md:9},r.createElement("div",{className:ee.summarySection},"Diagnostic")),r.createElement(f.ZP,{item:!0,xs:12,md:3,pl:{sm:0,md:2},pt:{sm:2,md:0}},r.createElement("div",{className:ee.summarySection},"KPIs over time")))),r.createElement(L,{name:"Connectivity",key:"2"},r.createElement(f.ZP,{container:!0,className:ee.fullHeight},r.createElement(f.ZP,{item:!0,xs:12,md:9},r.createElement("div",{className:ee.summarySection},"Connectivity")),r.createElement(f.ZP,{item:!0,xs:12,md:3,pl:{sm:0,md:2},pt:{sm:2,md:0}},r.createElement("div",{className:ee.summarySection},"Summary")))),r.createElement(L,{name:"Payment System",key:"3"},r.createElement(f.ZP,{container:!0,className:ee.fullHeight},r.createElement(f.ZP,{item:!0,xs:12,md:9},r.createElement("div",{className:ee.summarySection},"Payment System")),r.createElement(f.ZP,{item:!0,xs:12,md:3,pl:{sm:0,md:2},pt:{sm:2,md:0}},r.createElement("div",{className:ee.summarySection},"Payment System Summary")))))},te=function(){return r.createElement(ne,null)};var re=t(3610),ae=t(1200),se=t(3128),ce=t(6741),le=t(9244),oe=function(e){var n=e.match.params.tab;return console.log(n),r.createElement(f.ZP,{container:!0,spacing:2,pt:7},r.createElement(f.ZP,{item:!0,xs:2},r.createElement(g.rU,{to:"/"},r.createElement("img",{src:re,alt:"PortalDashboard"}),r.createElement("div",null,"PortalDashboard")),r.createElement(g.rU,{to:"/Portal/".concat(T)},r.createElement("div",null,r.createElement("img",{src:ae,alt:"Equipment"}),r.createElement("div",null,"Equipment Status"))),r.createElement(g.rU,{to:"/Portal/".concat(I)},r.createElement("div",null,r.createElement("img",{src:se,alt:"AssetManagement"}),r.createElement("div",null,"AssetManagement"))),r.createElement("div",null,r.createElement("img",{src:ce,alt:"Inventory"}),r.createElement("div",null,"Inventory Management")),r.createElement("div",null,r.createElement("img",{src:le,alt:"Sales"}),r.createElement("div",null,"Sales"))),r.createElement(f.ZP,{item:!0,xs:10,pr:{sm:0,md:12}},n===T&&r.createElement($,null),n===I&&r.createElement(te,null)))};oe.propTypes={match:q().object},oe.defaultProps={match:{}};var ie=[{path:"/",component:function(){var e=(0,h.$)().t;return r.createElement(r.Fragment,null,r.createElement("h1",null,e("welcome text")),r.createElement(f.ZP,{container:!0,spacing:2,className:Y.center},r.createElement(f.ZP,{item:!0,xs:1}),r.createElement(f.ZP,{item:!0,xs:3},r.createElement("div",{className:Y.card},"Portal Dashboard")),r.createElement(f.ZP,{item:!0,xs:3},r.createElement(g.rU,{to:"/Portal/".concat(T)},r.createElement("div",{className:Y.card},"Equipment Status"))),r.createElement(f.ZP,{item:!0,xs:3},r.createElement(g.rU,{to:"/Portal/".concat(I)},r.createElement("div",{className:Y.card},"Asset Management"))),r.createElement(f.ZP,{item:!0,xs:1})),r.createElement(f.ZP,{container:!0,spacing:2,className:Y.center},r.createElement(f.ZP,{item:!0,xs:1}),r.createElement(f.ZP,{item:!0,xs:3},r.createElement("div",{className:Y.card},"Inventory Management")),r.createElement(f.ZP,{item:!0,xs:3},r.createElement("div",{className:Y.card},"Sales")),r.createElement(f.ZP,{item:!0,xs:3},r.createElement("div",{className:Y.card},"Consumer Engagement")),r.createElement(f.ZP,{item:!0,xs:1})))},exact:!0},{path:"/Portal/:tab",component:(0,b.EN)(oe),exact:!0}],me=t(5102),ue={};ue.styleTagTransform=w(),ue.setAttributes=S(),ue.insert=Z().bind(null,"head"),ue.domAPI=P(),ue.insertStyleElement=N(),v()(me.Z,ue);const de=me.Z&&me.Z.locals?me.Z.locals:void 0;var Ae=t(2761),pe=t(1861),Ee=t(35),ge=t(5304),be=t(7676),fe=t(8760),he=t(8182),Ce=t(3583),ve=t(5887),ye=(0,pe.ZP)("div")((function(){return{position:"relative",borderRadius:"10px",border:"1px solid grey",width:"100%"}})),Pe=(0,pe.ZP)("div")((function(e){return{padding:e.theme.spacing(0,1),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),xe=(0,pe.ZP)(Ee.ZP)((function(){return{color:"inherit",width:"100%","& .MuiInputBase-input":{paddingLeft:"40px"}}}));const Ze=function(){return r.createElement(f.ZP,{container:!0,spacing:2},r.createElement(f.ZP,{item:!0,xs:3},r.createElement("img",{src:ge,alt:"Logo"})),r.createElement(f.ZP,{item:!0,xs:6},r.createElement(ye,null,r.createElement(Pe,null,r.createElement(Ae.Z,null)),r.createElement(xe,{placeholder:"Search…",inputProps:{"aria-label":"search"}}))),r.createElement(f.ZP,{item:!0,xs:3,style:{textAlign:"center"}},r.createElement("img",{src:be,alt:"filter"}),r.createElement("img",{src:fe,alt:"settings"}),r.createElement("img",{src:he,alt:"alert"}),r.createElement("img",{src:Ce,alt:"signin"}),r.createElement("img",{src:ve,alt:"globe"})))};var Be=t(7767),Se={};Se.styleTagTransform=w(),Se.setAttributes=S(),Se.insert=Z().bind(null,"head"),Se.domAPI=P(),Se.insertStyleElement=N(),v()(Be.Z,Se),Be.Z&&Be.Z.locals&&Be.Z.locals;const ke=function(e){return console.log("hi",e),r.createElement("div",{className:de.padding},r.createElement(Ze,null),r.createElement(g.VK,null,ie.map((function(e){return r.createElement(b.AW,(0,E.Z)({key:e.path},e))}))))};var Ne=t(4566),Oe=t(8718),we=t(5538);Ne.Z.use(we.Z).use(Oe.Db).init({lng:"en",fallbackLng:"en"});var je=t(1852),De={};De.styleTagTransform=w(),De.setAttributes=S(),De.insert=Z().bind(null,"head"),De.domAPI=P(),De.insertStyleElement=N(),v()(je.Z,De),je.Z&&je.Z.locals&&je.Z.locals,a.render(r.createElement(s.zt,{store:p},r.createElement(r.Suspense,{fallback:r.createElement("div",null)},r.createElement(ke,null))),document.getElementById("app"))},5102:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(7537),a=t.n(r),s=t(3645),c=t.n(s)()(a());c.push([e.id,'.jZhgj64ILwgPX6BRNHhR {\r\n  font-family: "Effra", sans-serif;\r\n  color: green;\r\n}\r\n.aH5kqqxGU9hoKspLff52 {\r\n  padding-left: 50px;\r\n  padding-top: 25px;\r\n}\r\n',"",{version:3,sources:["webpack://./src/App.module.css"],names:[],mappings:"AAAA;EACE,gCAAgC;EAChC,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,iBAAiB;AACnB",sourcesContent:['.heading {\r\n  font-family: "Effra", sans-serif;\r\n  color: green;\r\n}\r\n.padding {\r\n  padding-left: 50px;\r\n  padding-top: 25px;\r\n}\r\n'],sourceRoot:""}]),c.locals={heading:"jZhgj64ILwgPX6BRNHhR",padding:"aH5kqqxGU9hoKspLff52"};const l=c},620:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(7537),a=t.n(r),s=t(3645),c=t.n(s)()(a());c.push([e.id,".OhohmQlP2RDrv18eDDnY {\r\n  height: 100%;\r\n  background: var(--main-bg-color);\r\n  width: 100%;\r\n  border-radius: 10px;\r\n}\r\n.TBeBYLW0aIwt4thWAcnW {\r\n  height: 100%;\r\n}\r\n","",{version:3,sources:["webpack://./src/components/AssetManagement/AssetManagement.module.css"],names:[],mappings:"AAAA;EACE,YAAY;EACZ,gCAAgC;EAChC,WAAW;EACX,mBAAmB;AACrB;AACA;EACE,YAAY;AACd",sourcesContent:[".summarySection {\r\n  height: 100%;\r\n  background: var(--main-bg-color);\r\n  width: 100%;\r\n  border-radius: 10px;\r\n}\r\n.fullHeight {\r\n  height: 100%;\r\n}\r\n"],sourceRoot:""}]),c.locals={summarySection:"OhohmQlP2RDrv18eDDnY",fullHeight:"TBeBYLW0aIwt4thWAcnW"};const l=c},7077:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(7537),a=t.n(r),s=t(3645),c=t.n(s)()(a());c.push([e.id,".GUf3O8_SsNels_q_9ZiC {\r\n  height: 100%;\r\n  background: var(--main-bg-color);\r\n  width: 100%;\r\n  border-radius: 10px;\r\n}\r\n.UQQSzjM6YLoPnOYj1hlC {\r\n  height: 100%;\r\n}\r\n","",{version:3,sources:["webpack://./src/components/EquipmentDetails/EquipmentDetails.module.css"],names:[],mappings:"AAAA;EACE,YAAY;EACZ,gCAAgC;EAChC,WAAW;EACX,mBAAmB;AACrB;AACA;EACE,YAAY;AACd",sourcesContent:[".summarySection {\r\n  height: 100%;\r\n  background: var(--main-bg-color);\r\n  width: 100%;\r\n  border-radius: 10px;\r\n}\r\n.fullHeight {\r\n  height: 100%;\r\n}\r\n"],sourceRoot:""}]),c.locals={summarySection:"GUf3O8_SsNels_q_9ZiC",fullHeight:"UQQSzjM6YLoPnOYj1hlC"};const l=c},9450:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(7537),a=t.n(r),s=t(3645),c=t.n(s)()(a());c.push([e.id,".tab-header {\r\n  margin: 0;\r\n  list-style: none;\r\n  line-height: 30px;\r\n}\r\n.tab-header li {\r\n  display: inline;\r\n  padding: 7px 12px;\r\n  border-radius: 10px 10px 0 0;\r\n  cursor: pointer;\r\n  color: var(--unnamed-color-8e8e8e);\r\n  border: 1px solid var(--unnamed-color-8e8e8e);\r\n  border-bottom: none;\r\n}\r\n.tab-header li.active {\r\n  background: var(--unnamed-color-f3f3f3);\r\n  border: none;\r\n}\r\n.tab-content {\r\n  position: relative;\r\n  height: 400px;\r\n  background: var(--unnamed-color-f3f3f3);\r\n  border-radius: 20px;\r\n  padding: 20px;\r\n}\r\n.tab-child {\r\n  height: 100%;\r\n}\r\n","",{version:3,sources:["webpack://./src/containers/Common/Tabs.css"],names:[],mappings:"AAAA;EACE,SAAS;EACT,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,4BAA4B;EAC5B,eAAe;EACf,kCAAkC;EAClC,6CAA6C;EAC7C,mBAAmB;AACrB;AACA;EACE,uCAAuC;EACvC,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,uCAAuC;EACvC,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,YAAY;AACd",sourcesContent:[".tab-header {\r\n  margin: 0;\r\n  list-style: none;\r\n  line-height: 30px;\r\n}\r\n.tab-header li {\r\n  display: inline;\r\n  padding: 7px 12px;\r\n  border-radius: 10px 10px 0 0;\r\n  cursor: pointer;\r\n  color: var(--unnamed-color-8e8e8e);\r\n  border: 1px solid var(--unnamed-color-8e8e8e);\r\n  border-bottom: none;\r\n}\r\n.tab-header li.active {\r\n  background: var(--unnamed-color-f3f3f3);\r\n  border: none;\r\n}\r\n.tab-content {\r\n  position: relative;\r\n  height: 400px;\r\n  background: var(--unnamed-color-f3f3f3);\r\n  border-radius: 20px;\r\n  padding: 20px;\r\n}\r\n.tab-child {\r\n  height: 100%;\r\n}\r\n"],sourceRoot:""}]);const l=c},6314:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(7537),a=t.n(r),s=t(3645),c=t.n(s)()(a());c.push([e.id,".TVYsseBrRWEKzvfQiz_g {\r\n  display: inline-block;\r\n  width: 216px;\r\n  height: 216px;\r\n  border: 1px solid gray;\r\n  border-radius: 10px;\r\n  padding: 10px;\r\n  text-align: center;\r\n}\r\n._n_KAmnScqy6_2Do3eyv {\r\n  text-align: center;\r\n  padding-top: 30px;\r\n}\r\n","",{version:3,sources:["webpack://./src/containers/Dashboard/Dashboard.module.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,iBAAiB;AACnB",sourcesContent:[".card {\r\n  display: inline-block;\r\n  width: 216px;\r\n  height: 216px;\r\n  border: 1px solid gray;\r\n  border-radius: 10px;\r\n  padding: 10px;\r\n  text-align: center;\r\n}\r\n.center {\r\n  text-align: center;\r\n  padding-top: 30px;\r\n}\r\n"],sourceRoot:""}]),c.locals={card:"TVYsseBrRWEKzvfQiz_g",center:"_n_KAmnScqy6_2Do3eyv"};const l=c},7767:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(7537),a=t.n(r),s=t(3645),c=t.n(s)()(a());c.push([e.id,".borderR {\r\n  border-radius: 10px;\r\n}\r\n","",{version:3,sources:["webpack://./src/global.css"],names:[],mappings:"AAAA;EACE,mBAAmB;AACrB",sourcesContent:[".borderR {\r\n  border-radius: 10px;\r\n}\r\n"],sourceRoot:""}]);const l=c},1852:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(7537),a=t.n(r),s=t(3645),c=t.n(s)()(a());c.push([e.id,":root {\r\n  --main-bg-color: white;\r\n  --tab-radius: 10px;\r\n  --unnamed-color-f3f3f3: #ebe9e9;\r\n  --unnamed-color-8e8e8e: #8e8e8e;\r\n}\r\n","",{version:3,sources:["webpack://./src/variables.css"],names:[],mappings:"AAAA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,+BAA+B;EAC/B,+BAA+B;AACjC",sourcesContent:[":root {\r\n  --main-bg-color: white;\r\n  --tab-radius: 10px;\r\n  --unnamed-color-f3f3f3: #ebe9e9;\r\n  --unnamed-color-8e8e8e: #8e8e8e;\r\n}\r\n"],sourceRoot:""}]);const l=c},3128:(e,n,t)=>{e.exports=t.p+"images/512874e0f04a8805e055.PNG"},1200:(e,n,t)=>{e.exports=t.p+"images/5eb84d7d563ac469768b.PNG"},6741:(e,n,t)=>{e.exports=t.p+"images/d30e5bd4e05b78cd9da9.PNG"},3610:(e,n,t)=>{e.exports=t.p+"images/87e56d2a0ca4fb806279.PNG"},9244:(e,n,t)=>{e.exports=t.p+"images/63c8540c0755512bd683.PNG"},8182:(e,n,t)=>{e.exports=t.p+"images/4ffa650f314c22f87f43.PNG"},7676:(e,n,t)=>{e.exports=t.p+"images/a00b9d673229e1cc5927.PNG"},5887:(e,n,t)=>{e.exports=t.p+"images/a4f89e49dd04e108488a.PNG"},5304:(e,n,t)=>{e.exports=t.p+"images/a2585eb2ec8afd28c295.PNG"},8760:(e,n,t)=>{e.exports=t.p+"images/732db16738352c267255.PNG"},3583:(e,n,t)=>{e.exports=t.p+"images/00911768229253d71ff2.PNG"}},e=>{e.O(0,[216],(()=>(9829,e(e.s=9829)))),e.O()}]);
//# sourceMappingURL=main.da315869adb169d5b8c8.js.map