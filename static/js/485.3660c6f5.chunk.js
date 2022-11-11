"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[485],{485:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,a,i,o,c,u,s,p,l,f=t(885),d=t(791),x=t(731),h=t(689),g=t(330),m=t(147),v=t(168),Z=t(934),b=Z.Z.form(r||(r=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  margin-top: 50px;\n"]))),w=Z.Z.input(a||(a=(0,v.Z)(["\n  width: 300px;\n  height: 30px;\n  border-radius: 6px;\n  outline: none;\n  border: none;\n  padding-left: 10px;\n  font-size: 18px;\n\n  &:focus {\n    outline: 2px solid blue;\n  }\n"]))),y=Z.Z.button(i||(i=(0,v.Z)(["\n  margin-left: 20px;\n  width: 100px;\n  height: 30px;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  background-color: black;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n  transition: 1000ms background-color;\n\n  &:hover {\n    background-color: white;\n    color: black;\n    animation: 3s infinite alternate slidein;\n  }\n"]))),j=Z.Z.div(o||(o=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 30px 0;\n"]))),k=Z.Z.ul(c||(c=(0,v.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  list-style: none;\n"]))),_=Z.Z.li(u||(u=(0,v.Z)(["\n  margin-right: auto;\n"]))),P=Z.Z.img(s||(s=(0,v.Z)(["\n  border-radius: 5px;\n  box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.75);\n  height: 450px;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),S=Z.Z.p(p||(p=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n  text-decoration: none;\n  padding: 20px;\n  max-width: 200px;\n"]))),q=(0,Z.Z)(x.OL)(l||(l=(0,v.Z)(["\n  text-decoration: none;\n  color: black;\n  font-size: 20px;\n  font-weight: bold;\n  &:hover {\n    color: orange;\n  }\n"]))),z=t(184);function C(){var n,e=(0,d.useState)([]),t=(0,f.Z)(e,2),r=t[0],a=t[1],i=(0,d.useState)(null),o=(0,f.Z)(i,2),c=o[0],u=o[1],s=(0,d.useState)(!0),p=(0,f.Z)(s,2),l=p[0],v=p[1],Z=(0,d.useState)(!1),C=(0,f.Z)(Z,2),E=C[0],K=C[1],L=(0,x.lr)(),B=(0,f.Z)(L,2),D=B[0],F=B[1],H=(0,h.TH)(),O=null!==(n=D.get("query"))&&void 0!==n?n:"";return(0,d.useEffect)((function(){O&&(console.log(O),K(!0),(0,m.tu)(O).then((function(n){var e=n.data;return a(e.results)})).catch((function(n){return console.log(n.message)})).finally((function(){K(!1)})))}),[O]),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)("section",{children:[(0,z.jsxs)(b,{onSubmit:function(n){n.preventDefault(),F(c),c||v(!0)},children:[(0,z.jsx)("label",{children:(0,z.jsx)(w,{placeholder:"Enter the title",onChange:function(n){v(!1);var e=n.target.value;u(""!==e?{query:e}:{})}})}),(0,z.jsx)(y,{disabled:l,type:"submit",children:"Search"})]}),(0,z.jsx)(j,{children:E&&(0,z.jsx)(g.Z,{color:"orange"})})]}),(0,z.jsx)("section",{children:(0,z.jsxs)(k,{children:[" ",r.map((function(n){var e=n.id,t=n.poster_path,r=n.title;return(0,z.jsx)(_,{children:(0,z.jsxs)(q,{to:"/movies/".concat(e),state:{from:H},children:[(0,z.jsx)(P,{width:"300px",src:"https://image.tmdb.org/t/p/w500/".concat(t),alt:r}),(0,z.jsx)(S,{children:r})]})},e)})),(0,z.jsx)(h.j3,{})]})})]})}},147:function(n,e,t){t.d(e,{Kb:function(){return f},Kr:function(){return p},_B:function(){return l},g6:function(){return u},tu:function(){return s}});var r=t(861),a=t(687),i=t.n(a),o=t(44);o.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var c="34ec28facaf098a1035125630014210f",u=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("trending/movie/day",{params:{api_key:c}});case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("search/movie",{params:{query:e,api_key:c}});case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("movie/".concat(e),{params:{api_key:c}});case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("movie/".concat(e,"/credits"),{params:{api_key:c}});case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("movie/".concat(e,"/reviews"),{params:{api_key:c}});case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=485.3660c6f5.chunk.js.map