var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function i(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function p(){return d("")}function h(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function b(t,e){t.value=null==e?"":e}function v(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}t.selectedIndex=-1}let $;function y(t){$=t}function x(){if(!$)throw new Error("Function called outside component initialization");return $}function w(){const t=x();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}function _(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const k=[],S=[],E=[],F=[],q=Promise.resolve();let j=!1;function O(){j||(j=!0,q.then(P))}function M(t){E.push(t)}const L=new Set;let C=0;function P(){const t=$;do{for(;C<k.length;){const t=k[C];C++,y(t),T(t.$$)}for(y(null),k.length=0,C=0;S.length;)S.pop()();for(let t=0;t<E.length;t+=1){const e=E[t];L.has(e)||(L.add(e),e())}E.length=0}while(k.length);for(;F.length;)F.pop()();j=!1,L.clear(),y(t)}function T(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}const A=new Set;let I;function N(){I={r:0,c:[],p:I}}function R(){I.r||r(I.c),I=I.p}function D(t,e){t&&t.i&&(A.delete(t),t.i(e))}function H(t,e,n,o){if(t&&t.o){if(A.has(t))return;A.add(t),I.c.push((()=>{A.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function U(t,e){const n={},o={},r={$$scope:1};let i=t.length;for(;i--;){const s=t[i],c=e[i];if(c){for(const t in s)t in c||(o[t]=1);for(const t in c)r[t]||(n[t]=c[t],r[t]=1);t[i]=c}else for(const t in s)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function V(t){return"object"==typeof t&&null!==t?t:{}}function z(t){t&&t.c()}function B(t,e,o,s){const{fragment:c,on_mount:a,on_destroy:l,after_update:u}=t.$$;c&&c.m(e,o),s||M((()=>{const e=a.map(n).filter(i);l?l.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(M)}function G(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(e,n,i,s,c,a,u,d=[-1]){const f=$;y(e);const p=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:o(),dirty:d,skip_bound:!1,root:n.target||f.$$.root};u&&u(p.root);let h=!1;if(p.ctx=i?i(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),h&&function(t,e){-1===t.$$.dirty[0]&&(k.push(t),O(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],p.update(),h=!0,r(p.before_update),p.fragment=!!s&&s(p.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);p.fragment&&p.fragment.l(t),t.forEach(l)}else p.fragment&&p.fragment.c();n.intro&&D(e.$$.fragment),B(e,n.target,n.anchor,n.customElement),P()}y(f)}class W{$destroy(){G(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y=[];function K(t,e){return{subscribe:X(t,e).subscribe}}function X(e,n=t){let o;const r=new Set;function i(t){if(s(e,t)&&(e=t,o)){const t=!Y.length;for(const t of r)t[1](),Y.push(t,e);if(t){for(let t=0;t<Y.length;t+=2)Y[t][0](Y[t+1]);Y.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(s,c=t){const a=[s,c];return r.add(a),1===r.size&&(o=n(i)||t),s(e),()=>{r.delete(a),0===r.size&&(o(),o=null)}}}}function Z(e,n,o){const s=!Array.isArray(e),c=s?[e]:e,a=n.length<2;return K(o,(e=>{let o=!1;const l=[];let u=0,d=t;const f=()=>{if(u)return;d();const o=n(s?l[0]:l,e);a?e(o):d=i(o)?o:t},p=c.map(((e,n)=>function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(e,(t=>{l[n]=t,u&=~(1<<n),o&&f()}),(()=>{u|=1<<n}))));return o=!0,f(),function(){r(p),d()}}))}function J(t){let n,o,r;const i=[t[2]];var s=t[0];function c(t){let n={};for(let t=0;t<i.length;t+=1)n=e(n,i[t]);return{props:n}}return s&&(n=new s(c()),n.$on("routeEvent",t[7])),{c(){n&&z(n.$$.fragment),o=p()},m(t,e){n&&B(n,t,e),a(t,o,e),r=!0},p(t,e){const r=4&e?U(i,[V(t[2])]):{};if(s!==(s=t[0])){if(n){N();const t=n;H(t.$$.fragment,1,0,(()=>{G(t,1)})),R()}s?(n=new s(c()),n.$on("routeEvent",t[7]),z(n.$$.fragment),D(n.$$.fragment,1),B(n,o.parentNode,o)):n=null}else s&&n.$set(r)},i(t){r||(n&&D(n.$$.fragment,t),r=!0)},o(t){n&&H(n.$$.fragment,t),r=!1},d(t){t&&l(o),n&&G(n,t)}}}function tt(t){let n,o,r;const i=[{params:t[1]},t[2]];var s=t[0];function c(t){let n={};for(let t=0;t<i.length;t+=1)n=e(n,i[t]);return{props:n}}return s&&(n=new s(c()),n.$on("routeEvent",t[6])),{c(){n&&z(n.$$.fragment),o=p()},m(t,e){n&&B(n,t,e),a(t,o,e),r=!0},p(t,e){const r=6&e?U(i,[2&e&&{params:t[1]},4&e&&V(t[2])]):{};if(s!==(s=t[0])){if(n){N();const t=n;H(t.$$.fragment,1,0,(()=>{G(t,1)})),R()}s?(n=new s(c()),n.$on("routeEvent",t[6]),z(n.$$.fragment),D(n.$$.fragment,1),B(n,o.parentNode,o)):n=null}else s&&n.$set(r)},i(t){r||(n&&D(n.$$.fragment,t),r=!0)},o(t){n&&H(n.$$.fragment,t),r=!1},d(t){t&&l(o),n&&G(n,t)}}}function et(t){let e,n,o,r;const i=[tt,J],s=[];function c(t,e){return t[1]?0:1}return e=c(t),n=s[e]=i[e](t),{c(){n.c(),o=p()},m(t,n){s[e].m(t,n),a(t,o,n),r=!0},p(t,[r]){let a=e;e=c(t),e===a?s[e].p(t,r):(N(),H(s[a],1,1,(()=>{s[a]=null})),R(),n=s[e],n?n.p(t,r):(n=s[e]=i[e](t),n.c()),D(n,1),n.m(o.parentNode,o))},i(t){r||(D(n),r=!0)},o(t){H(n),r=!1},d(t){s[e].d(t),t&&l(o)}}}function nt(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let o="";return n>-1&&(o=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:o}}const ot=K(null,(function(t){t(nt());const e=()=>{t(nt())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}}));Z(ot,(t=>t.location)),Z(ot,(t=>t.querystring));const rt=X(void 0);function it(t,e,n){let{routes:o={}}=e,{prefix:r=""}=e,{restoreScrollState:i=!1}=e;class s{constructor(t,e){if(!e||"function"!=typeof e&&("object"!=typeof e||!0!==e._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:n,keys:o}=function(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,o,r,i,s=[],c="",a=t.split("/");for(a[0]||a.shift();r=a.shift();)"*"===(n=r[0])?(s.push("wild"),c+="/(.*)"):":"===n?(o=r.indexOf("?",1),i=r.indexOf(".",1),s.push(r.substring(1,~o?o:~i?i:r.length)),c+=~o&&!~i?"(?:/([^/]+?))?":"/([^/]+?)",~i&&(c+=(~o?"?":"")+"\\"+r.substring(i))):c+="/"+r;return{keys:s,pattern:new RegExp("^"+c+(e?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof e&&!0===e._sveltesparouter?(this.component=e.component,this.conditions=e.conditions||[],this.userData=e.userData,this.props=e.props||{}):(this.component=()=>Promise.resolve(e),this.conditions=[],this.props={}),this._pattern=n,this._keys=o}match(t){if(r)if("string"==typeof r){if(!t.startsWith(r))return null;t=t.substr(r.length)||"/"}else if(r instanceof RegExp){const e=t.match(r);if(!e||!e[0])return null;t=t.substr(e[0].length)||"/"}const e=this._pattern.exec(t);if(null===e)return null;if(!1===this._keys)return e;const n={};let o=0;for(;o<this._keys.length;){try{n[this._keys[o]]=decodeURIComponent(e[o+1]||"")||null}catch(t){n[this._keys[o]]=null}o++}return n}async checkConditions(t){for(let e=0;e<this.conditions.length;e++)if(!await this.conditions[e](t))return!1;return!0}}const c=[];o instanceof Map?o.forEach(((t,e)=>{c.push(new s(e,t))})):Object.keys(o).forEach((t=>{c.push(new s(t,o[t]))}));let a=null,l=null,u={};const d=w();async function f(t,e){await(O(),q),d(t,e)}let p=null,h=null;var g;i&&(h=t=>{p=t.state&&t.state.__svelte_spa_router_scrollY?t.state:null},window.addEventListener("popstate",h),g=()=>{p?window.scrollTo(p.__svelte_spa_router_scrollX,p.__svelte_spa_router_scrollY):window.scrollTo(0,0)},x().$$.after_update.push(g));let m=null,b=null;const v=ot.subscribe((async t=>{m=t;let e=0;for(;e<c.length;){const o=c[e].match(t.location);if(!o){e++;continue}const r={route:c[e].path,location:t.location,querystring:t.querystring,userData:c[e].userData,params:o&&"object"==typeof o&&Object.keys(o).length?o:null};if(!await c[e].checkConditions(r))return n(0,a=null),b=null,void f("conditionsFailed",r);f("routeLoading",Object.assign({},r));const i=c[e].component;if(b!=i){i.loading?(n(0,a=i.loading),b=i,n(1,l=i.loadingParams),n(2,u={}),f("routeLoaded",Object.assign({},r,{component:a,name:a.name,params:l}))):(n(0,a=null),b=null);const e=await i();if(t!=m)return;n(0,a=e&&e.default||e),b=i}return o&&"object"==typeof o&&Object.keys(o).length?n(1,l=o):n(1,l=null),n(2,u=c[e].props),void f("routeLoaded",Object.assign({},r,{component:a,name:a.name,params:l})).then((()=>{rt.set(l)}))}n(0,a=null),b=null,rt.set(void 0)}));return function(t){x().$$.on_destroy.push(t)}((()=>{v(),h&&window.removeEventListener("popstate",h)})),t.$$set=t=>{"routes"in t&&n(3,o=t.routes),"prefix"in t&&n(4,r=t.prefix),"restoreScrollState"in t&&n(5,i=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=i?"manual":"auto")},[a,l,u,o,r,i,function(e){_.call(this,t,e)},function(e){_.call(this,t,e)}]}class st extends W{constructor(t){super(),Q(this,t,it,et,s,{routes:3,prefix:4,restoreScrollState:5})}}class ct{static availableMethods(t){return Object.getOwnPropertyNames(t).filter((function(e){return"function"==typeof t[e]}))}static rectangle(t,e){return"Umfang: \t"+(2*t+2*e).toFixed(2).toString().replace(".",",")+"\t Fläsche:\t"+(t*e).toFixed(2).toString().replace(".",",")}static square(t){return"Umfang: \t"+(4*t).toFixed(2).toString().replace(".",",")+"\t Fläsche:\t"+Math.pow(t,2).toFixed(2).toString().replace(".",",")}static parallelogram(t,e,n){return"Umfang: \t"+(2*t+2*e).toFixed(2).toString().replace(".",",")+"\t Fläsche:\t"+(t*n).toFixed(2).toString().replace(".",",")}static cube(t){return"Fläsche: \t"+(6*Math.pow(t,2)).toFixed(2).toString().replace(".",",")+"\t Volumen: \t"+Math.pow(t,3).toFixed(2).toString().replace(".",",")}static cuboid(t,e,n){return"Fläsche: \t"+(2*(t*e+t*n+e*n)).toFixed(2).toString().replace(".",",")+"\t Volumen: \t"+(t*e*n).toFixed(2).toString().replace(".",",")}static cylinder(t,e){return"Fläsche: \t"+(2*Math.PI*t*(t+e)).toFixed(2).toString().replace(".",",")+"\t Volumen: \t"+(Math.PI*t**2*e).toFixed(2).toString().replace(".",",")}static sphere(t){return"Fläsche: \t"+(4*Math.PI*t**2).toFixed(2).toString().replace(".",",")+"\t Volumen: \t"+(4/3*Math.PI*t**3).toFixed(2).toString().replace(".",",")}}function at(t,e,n){const o=t.slice();return o[18]=e[n],o}function lt(e){let n,o,r,i,s=e[18].text+"";return{c(){n=u("option"),o=d(s),r=f(),n.__value=i=e[18],n.value=n.__value},m(t,e){a(t,n,e),c(n,o),c(n,r)},p:t,d(t){t&&l(n)}}}function ut(e){let n,o,i,s,p,$,y,x,w,_,k,S,E,F,q,j,O,L,C,P,T,A,I,N,R,D,H,U,V,z,B,G,Q,W,Y,K,X,Z,J,tt,et,nt=e[11],ot=[];for(let t=0;t<nt.length;t+=1)ot[t]=lt(at(e,nt,t));return{c(){n=u("div"),o=u("div"),i=u("div"),s=f(),p=u("div"),$=u("div"),y=u("form"),x=u("div"),w=u("label"),w.textContent="Form",_=f(),k=u("select");for(let t=0;t<ot.length;t+=1)ot[t].c();S=f(),E=u("div"),F=u("span"),q=d(e[3]),j=f(),O=u("input"),C=f(),P=u("div"),T=u("span"),A=d(e[4]),I=f(),N=u("input"),D=f(),H=u("div"),U=u("span"),V=d(e[5]),z=f(),B=u("input"),Q=f(),W=u("div"),Y=u("button"),K=d("Berechnen"),Z=f(),J=u("p"),g(i,"class","col-lg-6 col-md-6 d-none d-md-block image-container svelte-2vuar2"),g(w,"class","input-group-text"),g(w,"for","inputGroupSelect01"),g(k,"class","form-select"),void 0===e[9]&&M((()=>e[14].call(k))),g(x,"class","input-group mb-3"),g(F,"class","input-group-text"),g(F,"id","basic-addon1"),g(O,"type","text"),g(O,"class","form-control"),g(O,"aria-describedby","basic-addon1"),O.disabled=L=!e[6],g(E,"class","input-group mx-auto mb-3"),g(T,"class","input-group-text"),g(T,"id","basic-addon1"),g(N,"type","text"),g(N,"class","form-control"),g(N,"aria-describedby","basic-addon1"),N.disabled=R=!e[7],g(P,"class","input-group mx-auto mb-3"),g(U,"class","input-group-text"),g(U,"id","basic-addon1"),g(B,"type","text"),g(B,"class","form-control"),g(B,"aria-describedby","basic-addon1"),B.disabled=G=!e[8],g(H,"class","input-group mx-auto mb-3"),g(Y,"class","btn btn-danger mx-auto"),Y.disabled=X=!e[0],g(Y,"type","submit"),g(J,"class","mt-5"),g(W,"class","center-content svelte-2vuar2"),g($,"class","input-fields justify-content-center svelte-2vuar2"),g(p,"class","col-lg-6 col-md-6 form-container svelte-2vuar2"),g(o,"class","row row-edit svelte-2vuar2"),g(n,"class","container-fluid svelte-2vuar2")},m(t,r){a(t,n,r),c(n,o),c(o,i),c(o,s),c(o,p),c(p,$),c($,y),c(y,x),c(x,w),c(x,_),c(x,k);for(let t=0;t<ot.length;t+=1)ot[t].m(k,null);v(k,e[9]),c(y,S),c(y,E),c(E,F),c(F,q),c(E,j),c(E,O),b(O,e[0]),c(y,C),c(y,P),c(P,T),c(T,A),c(P,I),c(P,N),b(N,e[1]),c(y,D),c(y,H),c(H,U),c(U,V),c(H,z),c(H,B),b(B,e[2]),c($,Q),c($,W),c(W,Y),c(Y,K),c(W,Z),c(W,J),J.innerHTML=e[10],tt||(et=[h(k,"change",e[14]),h(k,"change",e[12]),h(O,"input",e[15]),h(N,"input",e[16]),h(B,"input",e[17]),h(Y,"click",e[13])],tt=!0)},p(t,[e]){if(2048&e){let n;for(nt=t[11],n=0;n<nt.length;n+=1){const o=at(t,nt,n);ot[n]?ot[n].p(o,e):(ot[n]=lt(o),ot[n].c(),ot[n].m(k,null))}for(;n<ot.length;n+=1)ot[n].d(1);ot.length=nt.length}2560&e&&v(k,t[9]),8&e&&m(q,t[3]),64&e&&L!==(L=!t[6])&&(O.disabled=L),1&e&&O.value!==t[0]&&b(O,t[0]),16&e&&m(A,t[4]),128&e&&R!==(R=!t[7])&&(N.disabled=R),2&e&&N.value!==t[1]&&b(N,t[1]),32&e&&m(V,t[5]),256&e&&G!==(G=!t[8])&&(B.disabled=G),4&e&&B.value!==t[2]&&b(B,t[2]),1&e&&X!==(X=!t[0])&&(Y.disabled=X),1024&e&&(J.innerHTML=t[10])},i:t,o:t,d(t){t&&l(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(ot,t),tt=!1,r(et)}}}function dt(t,e,n){let o,r,i,s,c="a",a="b",l="h",u=!0,d=!1,f=!1,p="",h=[{id:"square",text:"Quadrat"},{id:"rectangle",text:"Rechteck"},{id:"parallelogram",text:"Parallelogramm"},{id:"cube",text:"Würfel"},{id:"cuboid",text:"Quader"},{id:"cylinder",text:"Zylinder"},{id:"sphere",text:"Kugel"}];return[o,r,i,c,a,l,u,d,f,s,p,h,function(){n(10,p=""),"square"==s.id||"cube"==s.id||"sphere"==s.id?(n(6,u=!0),n(7,d=!1),n(8,f=!1),"sphere"==s.id?(n(3,c="r"),n(4,a="b"),n(5,l="h")):n(3,c="a")):"rectangle"==s.id||"cylinder"==s.id?(n(6,u=!0),n(7,d=!0),n(8,f=!1),"cylinder"==s.id?(n(3,c="r"),n(4,a="h"),n(5,l="-")):(n(3,c="a"),n(4,a="b"),n(5,l="h"))):"parallelogram"!=s.id&&"cuboid"!=s.id||(n(6,u=!0),n(7,d=!0),n(8,f=!0))},function(){"square"==s.id||"cube"==s.id||"sphere"==s.id?(n(6,u=!0),"square"==s.id?n(10,p=ct.square(o)):"cube"==s.id?n(10,p=ct.cube(o)):"sphere"==s.id&&n(10,p=ct.sphere(o))):"rectangle"==s.id||"cylinder"==s.id?"rectangle"==s.id?n(10,p=ct.rectangle(o,r)):"cylinder"==s.id&&n(10,p=ct.cylinder(o,r)):"parallelogram"!=s.id&&"cuboid"!=s.id||("parallelogram"==s.id?n(10,p=ct.parallelogram(o,r,i)):"cuboid"==s.id&&n(10,p=ct.cuboid(o,r,i)))},function(){s=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(9,s),n(11,h)},function(){o=this.value,n(0,o)},function(){r=this.value,n(1,r)},function(){i=this.value,n(2,i)}]}function ft(e){let n;return{c(){n=u("div"),n.innerHTML='<div class="row row-edit svelte-1fw18qi"><div class="col-lg-6 col-md-6 d-none d-md-block image-container svelte-1fw18qi"></div> \n        <div class="col-lg-6 col-md-6 form-container svelte-1fw18qi"><div class="input-fields justify-content-center svelte-1fw18qi"><h3>Cooming Soon...</h3></div></div></div>',g(n,"class","container-fluid svelte-1fw18qi")},m(t,e){a(t,n,e)},p:t,i:t,o:t,d(t){t&&l(n)}}}class pt extends W{constructor(t){super(),Q(this,t,null,ft,s,{})}}var ht={"/":class extends W{constructor(t){super(),Q(this,t,dt,ut,s,{})}},"/physik":pt,"/physik/*":pt};function gt(e){let n;return{c(){n=u("header"),n.innerHTML='<nav class="navbar navbar-expand-lg navbar-light bg-light"><div class="container-fluid"><a class="navbar-brand svelte-16mp9ql" href="#/"><i class="icon fa-solid fa-calculator svelte-16mp9ql"></i></a> \n\t\t<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button> \n\t\t<div class="collapse navbar-collapse text-center" id="navbarSupportedContent"><ul class="navbar-nav me-auto mb-2 mb-lg-0"><li class="nav-item"><a class="nav-link svelte-16mp9ql" aria-current="page" href="#/">Geometrie</a></li> \n\t\t\t<li class="nav-item"><a class="nav-link svelte-16mp9ql" href="#/physik">Physik</a></li></ul></div></div></nav>'},m(t,e){a(t,n,e)},p:t,i:t,o:t,d(t){t&&l(n)}}}class mt extends W{constructor(t){super(),Q(this,t,null,gt,s,{})}}function bt(e){let n,o,r,i,s;return n=new mt({}),i=new st({props:{routes:ht}}),{c(){z(n.$$.fragment),o=f(),r=u("main"),z(i.$$.fragment),g(r,"class","svelte-1074t2m")},m(t,e){B(n,t,e),a(t,o,e),a(t,r,e),B(i,r,null),s=!0},p:t,i(t){s||(D(n.$$.fragment,t),D(i.$$.fragment,t),s=!0)},o(t){H(n.$$.fragment,t),H(i.$$.fragment,t),s=!1},d(t){G(n,t),t&&l(o),t&&l(r),G(i)}}}return new class extends W{constructor(t){super(),Q(this,t,null,bt,s,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map