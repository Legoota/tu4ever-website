import{J as c,S as R,i as P,s as S,e as _,c as g,a as f,d as i,b as l,f as y,I as v,A as j,K as A,k as b,t as V,j as I,L as M,n as C,g as T,m as k,E as d,o as q,x as O,u as U,v as z}from"../chunks/vendor-0556c0d8.js";const H=r=>{const t=new c.exports.Engine(r,!0),e=new c.exports.Scene(t);e.clearColor=new c.exports.Color4(.18,.18,.18,1);const s=new c.exports.ArcRotateCamera("Camera",Math.PI/2,Math.PI/2,2,new c.exports.Vector3(0,0,-20),e);s.setTarget(c.exports.Vector3.Zero()),s.attachControl(r,!0),s.lowerRadiusLimit=10,s.upperRadiusLimit=50;const u=new c.exports.HemisphericLight("light",new c.exports.Vector3(0,1,-15),e);return u.intensity=.7,c.exports.SceneLoader.Append("/peugeot/","scene.glb",e,function(o){o.createDefaultCameraOrLight(!0,!0,!0),o.activeCamera.alpha+=Math.PI/1.2}),t.runRenderLoop(()=>{e.render()}),window.addEventListener("resize",()=>{t.resize()}),e};function J(r){let t;return{c(){t=_("canvas"),this.h()},l(e){t=g(e,"CANVAS",{class:!0}),f(t).forEach(i),this.h()},h(){l(t,"class","svelte-hiv3wt")},m(e,s){y(e,t,s),r[1](t)},p:v,i:v,o:v,d(e){e&&i(t),r[1](null)}}}function N(r,t,e){let s;j(()=>{H(s)});function u(o){A[o?"unshift":"push"](()=>{s=o,e(0,s)})}return[s,u]}class B extends R{constructor(t){super();P(this,t,N,J,S,{})}}function D(r){let t,e,s,u,o,a,x,E,h,m;return h=new B({}),{c(){t=b(),e=_("section"),s=_("h1"),u=V("Page en construction !"),o=b(),a=_("object"),x=V("Logo TU4EVER"),E=b(),I(h.$$.fragment),this.h()},l(n){M('[data-svelte="svelte-c5qo7r"]',document.head).forEach(i),t=C(n),e=g(n,"SECTION",{class:!0});var p=f(e);s=g(p,"H1",{});var L=f(s);u=T(L,"Page en construction !"),L.forEach(i),o=C(p),a=g(p,"OBJECT",{width:!0,height:!0,class:!0,data:!0,title:!0,type:!0});var $=f(a);x=T($,"Logo TU4EVER"),$.forEach(i),E=C(p),k(h.$$.fragment,p),p.forEach(i),this.h()},h(){document.title="TU4EVER",l(a,"width","700"),l(a,"height","700"),l(a,"class",""),l(a,"data","logo.svg"),l(a,"title","Logo"),l(a,"type","image/svg+xml"),l(e,"class","svelte-17dirb9")},m(n,w){y(n,t,w),y(n,e,w),d(e,s),d(s,u),d(e,o),d(e,a),d(a,x),d(e,E),q(h,e,null),m=!0},p:v,i(n){m||(O(h.$$.fragment,n),m=!0)},o(n){U(h.$$.fragment,n),m=!1},d(n){n&&i(t),n&&i(e),z(h)}}}const Z=!0;class F extends R{constructor(t){super();P(this,t,null,D,S,{})}}export{F as default,Z as prerender};
