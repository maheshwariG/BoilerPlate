"use strict";(self.webpackChunkwebpacktest=self.webpackChunkwebpacktest||[]).push([[179],{9565:(e,n,t)=>{var r=t(7294),a=t(3935),c=t(8216),s=t(4890),o=t(4942),l="INCREMENT",i="DECREMENT";function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d={count:0};const p=(0,s.UY)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case l:return u(u({},e),{},{count:e.count+1});case i:return u(u({},e),{},{count:e.count-1});default:return e}}}),A=(0,s.MT)(p);var E=t(7462),g=t(3727),f=t(5977),b=t(589),h=t(4478),v=t(3379),C=t.n(v),y=t(7795),Z=t.n(y),x=t(569),P=t.n(x),B=t(3565),k=t.n(B),S=t(9216),N=t.n(S),w=t(4589),O=t.n(w),j=t(6314),T={};T.styleTagTransform=O(),T.setAttributes=k(),T.insert=P().bind(null,"head"),T.domAPI=Z(),T.insertStyleElement=N(),C()(j.Z,T);const D=j.Z&&j.Z.locals?j.Z.locals:void 0;var I="EquipmentStatus",Y="AssetManagement";var R=t(5697),q=t.n(R),M=t(885);function G(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}const H=function(e){var n=e.children,t=(0,r.useState)([]),a=(0,M.Z)(t,2),c=a[0],s=a[1],l=(0,r.useState)({}),i=(0,M.Z)(l,2),m=i[0],u=i[1],d=(0,r.useState)(""),p=(0,M.Z)(d,2),A=p[0],E=p[1];return(0,r.useEffect)((function(){var e=[],t={};r.Children.forEach(n,(function(n){if(r.isValidElement(n)){var a=n.props,c=a.name,s=a.defaultHeight;console.log(s),e.push(c),t[c]=n.props.children}})),s(e),E(e[0]),u(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?G(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},t)),console.log(t)}),[e,n]),r.createElement("div",{className:"tabs"},r.createElement("ul",{className:"tab-header"},c.map((function(e){return r.createElement("li",{onClick:function(){E(e)},key:e,className:e===A?"active":""},e)}))),r.createElement("div",{className:"tab-content borderR"},Object.keys(m).map((function(e,n){return e===A?r.createElement("div",{key:n,className:"tab-child"},m[e]):null}))))};var _=t(9450),L={};L.styleTagTransform=O(),L.setAttributes=k(),L.insert=P().bind(null,"head"),L.domAPI=Z(),L.insertStyleElement=N(),C()(_.Z,L),_.Z&&_.Z.locals&&_.Z.locals;const W=function(e){var n=e.childern;return alert("Hi==="),r.createElement("div",{className:"tab-pane test"},n)};var U=t(7077),z={};z.styleTagTransform=O(),z.setAttributes=k(),z.insert=P().bind(null,"head"),z.domAPI=Z(),z.insertStyleElement=N(),C()(U.Z,z);const K=U.Z&&U.Z.locals?U.Z.locals:void 0;var Q=t(2982),V=t(9669),X=t.n(V);function F(){var e=(0,r.useState)("test"),n=(0,M.Z)(e,2),t=n[0],a=n[1],c=(0,r.useState)(1),s=(0,M.Z)(c,2),o=s[0],l=s[1],i=function(e,n){var t=(0,r.useState)(!0),a=(0,M.Z)(t,2),c=a[0],s=a[1],o=(0,r.useState)(!1),l=(0,M.Z)(o,2),i=l[0],m=l[1],u=(0,r.useState)([]),d=(0,M.Z)(u,2),p=d[0],A=d[1],E=(0,r.useState)(!1),g=(0,M.Z)(E,2),f=g[0],b=g[1];return(0,r.useEffect)((function(){A([])}),[e]),(0,r.useEffect)((function(){var t;return s(!0),m(!1),X()({method:"GET",url:"http://openlibrary.org/search.json",params:{q:e,page:n},cancelToken:new(X().CancelToken)((function(e){return t=e}))}).then((function(e){A((function(n){return(0,Q.Z)(new Set([].concat((0,Q.Z)(n),(0,Q.Z)(e.data.docs.map((function(e){return e.title}))))))})),b(e.data.docs.length>0),s(!1)})).catch((function(e){console.log(e),X().isCancel(e)||m(!0)})),function(){return t()}}),[e,n]),{loading:c,error:i,books:p,hasMore:f}}(t,o),m=i.books,u=i.hasMore,d=i.loading,p=i.error,A=(0,r.useRef)(),E=(0,r.useCallback)((function(e){d||(A.current&&A.current.disconnect(),A.current=new IntersectionObserver((function(e){e[0].isIntersecting&&u&&l((function(e){return e+1}))})),e&&A.current.observe(e))}),[d,u]);return r.createElement(r.Fragment,null,r.createElement("input",{type:"text",value:t,onChange:function(e){a(e.target.value),l(1)}}),m.map((function(e,n){return m.length===n+1?r.createElement("div",{ref:E,key:e},e):r.createElement("div",{key:e},e)})),r.createElement("div",null,d&&"Loading..."),r.createElement("div",null,p&&"Error"))}var $=t(3371),J=t(6885);const ee=function(e){var n=e.onClick,t=e.icon;return r.createElement($.Z,{variant:"contained",size:"small",onClick:n,style:{textTransform:"none",borderRadius:"10px"},startIcon:t&&r.createElement(J.Z,null)},"ApplyFilter")};var ne=function(e){var n=e.props,t=n.count,a=n.decreaseCounter,c=n.increaseCounter;return r.createElement(H,null,r.createElement(W,{name:"Equipment List",key:"1",defaultHeight:"100px"},r.createElement(b.ZP,{container:!0},r.createElement(b.ZP,{item:!0,xs:12,md:9},r.createElement("div",{style:{height:"400px",background:"white",padding:"20px"}},r.createElement("div",{style:{padding:"20px"}},"Test"),r.createElement("div",{className:K.summarySection,style:{height:"320px",overflow:"auto"}},r.createElement(ee,{onClick:function(){alert("Click")},icon:!0}),r.createElement(F,null)))),r.createElement(b.ZP,{item:!0,xs:12,md:3,pl:{sm:0,md:2},pt:{sm:2,md:0}},r.createElement("div",{className:K.summarySection},"Installed Base Summary"),r.createElement("div",null,"Count: ",t),r.createElement("button",{type:"button",onClick:function(){c()}},"Increase Count"),r.createElement("button",{type:"button",onClick:function(){return a()}},"Decrease Count")))),r.createElement(W,{name:"Customer",key:"2"},r.createElement(b.ZP,{container:!0,className:K.fullHeight},r.createElement(b.ZP,{item:!0,xs:12,md:9},r.createElement("div",{className:K.summarySection},"Customer Status Section")),r.createElement(b.ZP,{item:!0,xs:12,md:3,pl:{sm:0,md:2},pt:{sm:2,md:0}},r.createElement("div",{className:K.summarySection},"Customer Status Summary")))),r.createElement(W,{name:"Equipment Placement Map",key:"3"},r.createElement(b.ZP,{container:!0,className:K.fullHeight},r.createElement(b.ZP,{item:!0,xs:12,md:9},r.createElement("div",{className:K.summarySection},"Equipment Placement Map Section")),r.createElement(b.ZP,{item:!0,xs:12,md:3,pl:{sm:0,md:2},pt:{sm:2,md:0}},r.createElement("div",{className:K.summarySection},"Installed Base Summary")))))};ne.propTypes={count:q().number,decreaseCounter:q().func,increaseCounter:q().func,props:q().object},ne.defaultProps={count:0,decreaseCounter:function(){},increaseCounter:function(){},props:{}};const te=ne,re=(0,c.$j)((function(e){return{count:e.counter.count}}),(function(e){return{increaseCounter:function(){console.log("clicked"),e({type:l})},decreaseCounter:function(){return e({type:i})}}}))((function(e){return r.createElement(te,{props:e,incr:function(){alert("hi")}})}));var ae=t(620),ce={};ce.styleTagTransform=O(),ce.setAttributes=k(),ce.insert=P().bind(null,"head"),ce.domAPI=Z(),ce.insertStyleElement=N(),C()(ae.Z,ce);const se=ae.Z&&ae.Z.locals?ae.Z.locals:void 0,oe=function(){return r.createElement(H,null,r.createElement(W,{name:"Diagnostic",key:"1"},r.createElement(b.ZP,{container:!0,className:se.fullHeight},r.createElement(b.ZP,{item:!0,xs:12,md:9},r.createElement("div",{className:se.summarySection},"Diagnostic")),r.createElement(b.ZP,{item:!0,xs:12,md:3,pl:{sm:0,md:2},pt:{sm:2,md:0}},r.createElement("div",{className:se.summarySection},"KPIs over time")))),r.createElement(W,{name:"Connectivity",key:"2"},r.createElement(b.ZP,{container:!0,className:se.fullHeight},r.createElement(b.ZP,{item:!0,xs:12,md:9},r.createElement("div",{className:se.summarySection},"Connectivity")),r.createElement(b.ZP,{item:!0,xs:12,md:3,pl:{sm:0,md:2},pt:{sm:2,md:0}},r.createElement("div",{className:se.summarySection},"Summary")))),r.createElement(W,{name:"Payment System",key:"3"},r.createElement(b.ZP,{container:!0,className:se.fullHeight},r.createElement(b.ZP,{item:!0,xs:12,md:9},r.createElement("div",{className:se.summarySection},"Payment System")),r.createElement(b.ZP,{item:!0,xs:12,md:3,pl:{sm:0,md:2},pt:{sm:2,md:0}},r.createElement("div",{className:se.summarySection},"Payment System Summary")))))},le=function(){return r.createElement(oe,null)};var ie=t(3610),me=t(1200),ue=t(3128),de=t(6741),pe=t(9244),Ae=function(e){var n=e.match.params.tab;return console.log(n),r.createElement(b.ZP,{container:!0,spacing:2,pt:7},r.createElement(b.ZP,{item:!0,xs:2},r.createElement(g.rU,{to:"/"},r.createElement("img",{src:ie,alt:"PortalDashboard"}),r.createElement("div",null,"PortalDashboard")),r.createElement(g.rU,{to:"/Portal/".concat(I)},r.createElement("div",null,r.createElement("img",{src:me,alt:"Equipment"}),r.createElement("div",null,"Equipment Status"))),r.createElement(g.rU,{to:"/Portal/".concat(Y)},r.createElement("div",null,r.createElement("img",{src:ue,alt:"AssetManagement"}),r.createElement("div",null,"AssetManagement"))),r.createElement("div",null,r.createElement("img",{src:de,alt:"Inventory"}),r.createElement("div",null,"Inventory Management")),r.createElement("div",null,r.createElement("img",{src:pe,alt:"Sales"}),r.createElement("div",null,"Sales"))),r.createElement(b.ZP,{item:!0,xs:10,pr:{sm:0,md:12}},n===I&&r.createElement(re,null),n===Y&&r.createElement(le,null)))};Ae.propTypes={match:q().object},Ae.defaultProps={match:{}};var Ee=[{path:"/",component:function(){var e=(0,h.$)().t;return r.createElement(r.Fragment,null,r.createElement("h1",null,e("welcome text")),r.createElement(b.ZP,{container:!0,spacing:2,className:D.center},r.createElement(b.ZP,{item:!0,xs:1}),r.createElement(b.ZP,{item:!0,xs:3},r.createElement("div",{className:D.card},"Portal Dashboard")),r.createElement(b.ZP,{item:!0,xs:3},r.createElement(g.rU,{to:"/Portal/".concat(I)},r.createElement("div",{className:D.card},"Equipment Status"))),r.createElement(b.ZP,{item:!0,xs:3},r.createElement(g.rU,{to:"/Portal/".concat(Y)},r.createElement("div",{className:D.card},"Asset Management"))),r.createElement(b.ZP,{item:!0,xs:1})),r.createElement(b.ZP,{container:!0,spacing:2,className:D.center},r.createElement(b.ZP,{item:!0,xs:1}),r.createElement(b.ZP,{item:!0,xs:3},r.createElement("div",{className:D.card},"Inventory Management")),r.createElement(b.ZP,{item:!0,xs:3},r.createElement("div",{className:D.card},"Sales")),r.createElement(b.ZP,{item:!0,xs:3},r.createElement("div",{className:D.card},"Consumer Engagement")),r.createElement(b.ZP,{item:!0,xs:1})))},exact:!0},{path:"/Portal/:tab",component:(0,f.EN)(Ae),exact:!0}],ge=t(5102),fe={};fe.styleTagTransform=O(),fe.setAttributes=k(),fe.insert=P().bind(null,"head"),fe.domAPI=Z(),fe.insertStyleElement=N(),C()(ge.Z,fe);const be=ge.Z&&ge.Z.locals?ge.Z.locals:void 0;var he=t(2761),ve=t(1861),Ce=t(7544),ye=t(5304),Ze=t(7676),xe=t(8760),Pe=t(8182),Be=t(3583),ke=t(5887),Se=(0,ve.ZP)("div")((function(){return{position:"relative",borderRadius:"10px",border:"1px solid grey",width:"100%"}})),Ne=(0,ve.ZP)("div")((function(e){return{padding:e.theme.spacing(0,1),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),we=(0,ve.ZP)(Ce.ZP)((function(){return{color:"inherit",width:"100%","& .MuiInputBase-input":{paddingLeft:"40px"}}}));const Oe=function(){return r.createElement(b.ZP,{container:!0,spacing:2},r.createElement(b.ZP,{item:!0,xs:3},r.createElement("img",{src:ye,alt:"Logo"})),r.createElement(b.ZP,{item:!0,xs:6},r.createElement(Se,null,r.createElement(Ne,null,r.createElement(he.Z,null)),r.createElement(we,{placeholder:"Search…",inputProps:{"aria-label":"search"}}))),r.createElement(b.ZP,{item:!0,xs:3,style:{textAlign:"center"}},r.createElement("img",{src:Ze,alt:"filter"}),r.createElement("img",{src:xe,alt:"settings"}),r.createElement("img",{src:Pe,alt:"alert"}),r.createElement("img",{src:Be,alt:"signin"}),r.createElement("img",{src:ke,alt:"globe"})))};var je=t(7767),Te={};Te.styleTagTransform=O(),Te.setAttributes=k(),Te.insert=P().bind(null,"head"),Te.domAPI=Z(),Te.insertStyleElement=N(),C()(je.Z,Te),je.Z&&je.Z.locals&&je.Z.locals;const De=function(e){return console.log("hi",e),r.createElement("div",{className:be.padding},r.createElement(Oe,null),r.createElement(g.VK,null,Ee.map((function(e){return r.createElement(f.AW,(0,E.Z)({key:e.path},e))}))))};var Ie=t(4982),Ye=t(8718),Re=t(5538);Ie.Z.use(Re.Z).use(Ye.Db).init({lng:"en",fallbackLng:"en"});var qe=t(1852),Me={};Me.styleTagTransform=O(),Me.setAttributes=k(),Me.insert=P().bind(null,"head"),Me.domAPI=Z(),Me.insertStyleElement=N(),C()(qe.Z,Me),qe.Z&&qe.Z.locals&&qe.Z.locals,a.render(r.createElement(c.zt,{store:A},r.createElement(r.Suspense,{fallback:r.createElement("div",null)},r.createElement(De,null))),document.getElementById("app"))},5102:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7537),a=t.n(r),c=t(3645),s=t.n(c)()(a());s.push([e.id,'.jZhgj64ILwgPX6BRNHhR {\r\n  font-family: "Effra", sans-serif;\r\n  color: green;\r\n}\r\n.aH5kqqxGU9hoKspLff52 {\r\n  padding-left: 50px;\r\n  padding-top: 25px;\r\n}\r\n',"",{version:3,sources:["webpack://./src/App.module.css"],names:[],mappings:"AAAA;EACE,gCAAgC;EAChC,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,iBAAiB;AACnB",sourcesContent:['.heading {\r\n  font-family: "Effra", sans-serif;\r\n  color: green;\r\n}\r\n.padding {\r\n  padding-left: 50px;\r\n  padding-top: 25px;\r\n}\r\n'],sourceRoot:""}]),s.locals={heading:"jZhgj64ILwgPX6BRNHhR",padding:"aH5kqqxGU9hoKspLff52"};const o=s},620:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7537),a=t.n(r),c=t(3645),s=t.n(c)()(a());s.push([e.id,".OhohmQlP2RDrv18eDDnY {\r\n  height: 100%;\r\n  background: var(--main-bg-color);\r\n  width: 100%;\r\n  border-radius: 10px;\r\n}\r\n.TBeBYLW0aIwt4thWAcnW {\r\n  height: 100%;\r\n}\r\n","",{version:3,sources:["webpack://./src/components/AssetManagement/AssetManagement.module.css"],names:[],mappings:"AAAA;EACE,YAAY;EACZ,gCAAgC;EAChC,WAAW;EACX,mBAAmB;AACrB;AACA;EACE,YAAY;AACd",sourcesContent:[".summarySection {\r\n  height: 100%;\r\n  background: var(--main-bg-color);\r\n  width: 100%;\r\n  border-radius: 10px;\r\n}\r\n.fullHeight {\r\n  height: 100%;\r\n}\r\n"],sourceRoot:""}]),s.locals={summarySection:"OhohmQlP2RDrv18eDDnY",fullHeight:"TBeBYLW0aIwt4thWAcnW"};const o=s},7077:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7537),a=t.n(r),c=t(3645),s=t.n(c)()(a());s.push([e.id,".GUf3O8_SsNels_q_9ZiC {\r\n  height: 100%;\r\n  background: var(--main-bg-color);\r\n  width: 100%;\r\n  border-radius: 10px;\r\n}\r\n.UQQSzjM6YLoPnOYj1hlC {\r\n  height: 100%;\r\n}\r\n","",{version:3,sources:["webpack://./src/components/EquipmentDetails/EquipmentDetails.module.css"],names:[],mappings:"AAAA;EACE,YAAY;EACZ,gCAAgC;EAChC,WAAW;EACX,mBAAmB;AACrB;AACA;EACE,YAAY;AACd",sourcesContent:[".summarySection {\r\n  height: 100%;\r\n  background: var(--main-bg-color);\r\n  width: 100%;\r\n  border-radius: 10px;\r\n}\r\n.fullHeight {\r\n  height: 100%;\r\n}\r\n"],sourceRoot:""}]),s.locals={summarySection:"GUf3O8_SsNels_q_9ZiC",fullHeight:"UQQSzjM6YLoPnOYj1hlC"};const o=s},9450:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7537),a=t.n(r),c=t(3645),s=t.n(c)()(a());s.push([e.id,".tab-header {\r\n  margin: 0;\r\n  list-style: none;\r\n  line-height: 30px;\r\n}\r\n.tab-header li {\r\n  display: inline;\r\n  padding: 7px 12px;\r\n  border-radius: 10px 10px 0 0;\r\n  cursor: pointer;\r\n  color: var(--unnamed-color-8e8e8e);\r\n  border: 1px solid var(--unnamed-color-8e8e8e);\r\n  border-bottom: none;\r\n}\r\n.tab-header li.active {\r\n  background: var(--unnamed-color-f3f3f3);\r\n  border: none;\r\n}\r\n.tab-content {\r\n  position: relative;\r\n  background: var(--unnamed-color-f3f3f3);\r\n  border-radius: 20px;\r\n  padding: 20px;\r\n}\r\n/*.tab-child {\r\n  height: 100%;\r\n}*/\r\n","",{version:3,sources:["webpack://./src/containers/Common/Tabs.css"],names:[],mappings:"AAAA;EACE,SAAS;EACT,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,4BAA4B;EAC5B,eAAe;EACf,kCAAkC;EAClC,6CAA6C;EAC7C,mBAAmB;AACrB;AACA;EACE,uCAAuC;EACvC,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,uCAAuC;EACvC,mBAAmB;EACnB,aAAa;AACf;AACA;;EAEE",sourcesContent:[".tab-header {\r\n  margin: 0;\r\n  list-style: none;\r\n  line-height: 30px;\r\n}\r\n.tab-header li {\r\n  display: inline;\r\n  padding: 7px 12px;\r\n  border-radius: 10px 10px 0 0;\r\n  cursor: pointer;\r\n  color: var(--unnamed-color-8e8e8e);\r\n  border: 1px solid var(--unnamed-color-8e8e8e);\r\n  border-bottom: none;\r\n}\r\n.tab-header li.active {\r\n  background: var(--unnamed-color-f3f3f3);\r\n  border: none;\r\n}\r\n.tab-content {\r\n  position: relative;\r\n  background: var(--unnamed-color-f3f3f3);\r\n  border-radius: 20px;\r\n  padding: 20px;\r\n}\r\n/*.tab-child {\r\n  height: 100%;\r\n}*/\r\n"],sourceRoot:""}]);const o=s},6314:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7537),a=t.n(r),c=t(3645),s=t.n(c)()(a());s.push([e.id,".TVYsseBrRWEKzvfQiz_g {\r\n  display: inline-block;\r\n  width: 216px;\r\n  height: 216px;\r\n  border: 1px solid gray;\r\n  border-radius: 10px;\r\n  padding: 10px;\r\n  text-align: center;\r\n}\r\n._n_KAmnScqy6_2Do3eyv {\r\n  text-align: center;\r\n  padding-top: 30px;\r\n}\r\n","",{version:3,sources:["webpack://./src/containers/Dashboard/Dashboard.module.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,iBAAiB;AACnB",sourcesContent:[".card {\r\n  display: inline-block;\r\n  width: 216px;\r\n  height: 216px;\r\n  border: 1px solid gray;\r\n  border-radius: 10px;\r\n  padding: 10px;\r\n  text-align: center;\r\n}\r\n.center {\r\n  text-align: center;\r\n  padding-top: 30px;\r\n}\r\n"],sourceRoot:""}]),s.locals={card:"TVYsseBrRWEKzvfQiz_g",center:"_n_KAmnScqy6_2Do3eyv"};const o=s},7767:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7537),a=t.n(r),c=t(3645),s=t.n(c)()(a());s.push([e.id,".borderR {\r\n  border-radius: 10px;\r\n}\r\n","",{version:3,sources:["webpack://./src/global.css"],names:[],mappings:"AAAA;EACE,mBAAmB;AACrB",sourcesContent:[".borderR {\r\n  border-radius: 10px;\r\n}\r\n"],sourceRoot:""}]);const o=s},1852:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7537),a=t.n(r),c=t(3645),s=t.n(c)()(a());s.push([e.id,":root {\r\n  --main-bg-color: white;\r\n  --tab-radius: 10px;\r\n  --unnamed-color-f3f3f3: #ebe9e9;\r\n  --unnamed-color-8e8e8e: #8e8e8e;\r\n}\r\n","",{version:3,sources:["webpack://./src/variables.css"],names:[],mappings:"AAAA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,+BAA+B;EAC/B,+BAA+B;AACjC",sourcesContent:[":root {\r\n  --main-bg-color: white;\r\n  --tab-radius: 10px;\r\n  --unnamed-color-f3f3f3: #ebe9e9;\r\n  --unnamed-color-8e8e8e: #8e8e8e;\r\n}\r\n"],sourceRoot:""}]);const o=s},3128:(e,n,t)=>{e.exports=t.p+"images/512874e0f04a8805e055.PNG"},1200:(e,n,t)=>{e.exports=t.p+"images/5eb84d7d563ac469768b.PNG"},6741:(e,n,t)=>{e.exports=t.p+"images/d30e5bd4e05b78cd9da9.PNG"},3610:(e,n,t)=>{e.exports=t.p+"images/87e56d2a0ca4fb806279.PNG"},9244:(e,n,t)=>{e.exports=t.p+"images/63c8540c0755512bd683.PNG"},8182:(e,n,t)=>{e.exports=t.p+"images/4ffa650f314c22f87f43.PNG"},7676:(e,n,t)=>{e.exports=t.p+"images/a00b9d673229e1cc5927.PNG"},5887:(e,n,t)=>{e.exports=t.p+"images/a4f89e49dd04e108488a.PNG"},5304:(e,n,t)=>{e.exports=t.p+"images/a2585eb2ec8afd28c295.PNG"},8760:(e,n,t)=>{e.exports=t.p+"images/732db16738352c267255.PNG"},3583:(e,n,t)=>{e.exports=t.p+"images/00911768229253d71ff2.PNG"}},e=>{e.O(0,[216],(()=>(9565,e(e.s=9565)))),e.O()}]);
//# sourceMappingURL=main.3960ae1f4b66006935b4.js.map