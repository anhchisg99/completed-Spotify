(function(e){function n(n){for(var c,r,o=n[0],i=n[1],h=n[2],s=0,d=[];s<o.length;s++)r=o[s],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);f&&f(n);while(d.length)d.shift()();return u.push.apply(u,h||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],c=!0,r=1;r<t.length;r++){var o=t[r];0!==a[o]&&(c=!1)}c&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},r={app:0},a={app:0},u=[];function o(e){return i.p+"js/"+({"auth-layout":"auth-layout",login:"login","app-layout":"app-layout"}[e]||e)+"."+{"auth-layout":"8f073900","chunk-01177c1e":"aa9e2052","chunk-4c6c003a":"8eeb98f3","chunk-55b19382":"add92e71","chunk-09f07863":"81f870d7","chunk-3b752fe8":"7d72dbb6","chunk-4cc62cbe":"cda48c31","chunk-1aaba134":"e8d5be1a","chunk-96a29ef4":"c51f9f06","chunk-2628d919":"9db5cb65","chunk-4279e092":"1ceea8af","chunk-bb9c5860":"af784e76",login:"acffee51","chunk-62febb58":"deb50bdf","chunk-0629cfd1":"4b4d6241","app-layout":"88bffdea","chunk-e1cb17fe":"1c4265d1","chunk-fd1a435e":"f9dc8c88","chunk-b80842c6":"71882e95","chunk-56bf0517":"eb544a65","chunk-9358a294":"756207af","chunk-fdfaa00c":"63cc4416","chunk-2d0b383b":"6981c760","chunk-2d22c475":"f874aad8","chunk-650c27b6":"f70b0d40","chunk-360045d6":"ef256386","chunk-1f290a3a":"9ecd5cbf","chunk-3baa3fd9":"f19cbf7c","chunk-0c3636c2":"8f28e7bd"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"auth-layout":1,"chunk-01177c1e":1,"chunk-4c6c003a":1,"chunk-55b19382":1,"chunk-09f07863":1,"chunk-3b752fe8":1,"chunk-4cc62cbe":1,"chunk-1aaba134":1,"chunk-96a29ef4":1,"chunk-2628d919":1,"chunk-4279e092":1,login:1,"chunk-62febb58":1,"chunk-0629cfd1":1,"app-layout":1,"chunk-e1cb17fe":1,"chunk-fd1a435e":1,"chunk-9358a294":1,"chunk-fdfaa00c":1,"chunk-360045d6":1,"chunk-1f290a3a":1,"chunk-3baa3fd9":1,"chunk-0c3636c2":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({"auth-layout":"auth-layout",login:"login","app-layout":"app-layout"}[e]||e)+"."+{"auth-layout":"e7325c36","chunk-01177c1e":"59d88a6e","chunk-4c6c003a":"601749f1","chunk-55b19382":"11b49ed3","chunk-09f07863":"3dfe7b4d","chunk-3b752fe8":"b4f49531","chunk-4cc62cbe":"b4f49531","chunk-1aaba134":"0b1a2be3","chunk-96a29ef4":"d62fd2a3","chunk-2628d919":"9841e8af","chunk-4279e092":"f5cc3e55","chunk-bb9c5860":"31d6cfe0",login:"1aeb68ea","chunk-62febb58":"ed698c1b","chunk-0629cfd1":"45c995f6","app-layout":"0f7a874b","chunk-e1cb17fe":"0b1a2be3","chunk-fd1a435e":"0b1a2be3","chunk-b80842c6":"31d6cfe0","chunk-56bf0517":"31d6cfe0","chunk-9358a294":"cf5ae3d2","chunk-fdfaa00c":"1244cddd","chunk-2d0b383b":"31d6cfe0","chunk-2d22c475":"31d6cfe0","chunk-650c27b6":"31d6cfe0","chunk-360045d6":"a823b0b8","chunk-1f290a3a":"59a9c68f","chunk-3baa3fd9":"071a65eb","chunk-0c3636c2":"71f01b65"}[e]+".css",a=i.p+c,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var h=u[o],s=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(s===c||s===a))return n()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){h=d[o],s=h.getAttribute("data-href");if(s===c||s===a)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var c=n&&n.target&&n.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=c,delete r[e],f.parentNode.removeChild(f),t(u)},f.href=a;var l=document.getElementsByTagName("head")[0];l.appendChild(f)})).then((function(){r[e]=0})));var c=a[e];if(0!==c)if(c)n.push(c[2]);else{var u=new Promise((function(n,t){c=a[e]=[n,t]}));n.push(c[2]=u);var h,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=o(e);var d=new Error;h=function(n){s.onerror=s.onload=null,clearTimeout(f);var t=a[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",d.name="ChunkLoadError",d.type=c,d.request=r,t[1](d)}a[e]=void 0}};var f=setTimeout((function(){h({type:"timeout",target:s})}),12e4);s.onerror=s.onload=h,document.head.appendChild(s)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],s=h.push.bind(h);h.push=n,h=h.slice();for(var d=0;d<h.length;d++)n(h[d]);var f=s;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"26b6":function(e,n,t){e.exports=t.p+"media/music2.c9b77509.mp3"},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),r=function(){var e=this,n=e._self._c;return n("div",[n("router-view")],1)},a=[],u={name:"app",data:function(){return{current:{},index:0,isPlaying:!1,songs:[{title:"Grateful",artist:"Neffex",src:t("ae54")},{title:"Invincible",artist:"Deaf Kev",src:t("26b6")}],player:new Audio}},methods:{play:function(e){"undefined"!=typeof e.src&&(this.current=e,this.player.src=this.current.src),this.player.play(),this.player.addEventListener("ended",function(){this.index++,this.index>this.songs.length-1&&(this.index=0),this.current=this.songs[this.index],this.play(this.current)}.bind(this)),this.isPlaying=!0},pause:function(){this.player.pause(),this.isPlaying=!1},next:function(){this.index++,this.index>this.songs.length-1&&(this.index=0),this.current=this.songs[this.index],this.play(this.current)},prev:function(){this.index--,this.index<0&&(this.index=this.songs.length-1),this.current=this.songs[this.index],this.play(this.current)}},created:function(){this.current=this.songs[this.index],this.player.src=this.current.src}},o=u,i=(t("c22b"),t("2877")),h=Object(i["a"])(o,r,a,!1,null,null,null),s=h.exports,d=t("9483");Object(d["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("d3b7"),t("3ca3"),t("ddb0");var f=t("8c4f");c["a"].use(f["a"]);var l=[{path:"/",component:function(){return Promise.all([t.e("chunk-96a29ef4"),t.e("chunk-09f07863"),t.e("chunk-62febb58"),t.e("app-layout")]).then(t.bind(null,"dead"))},children:[{path:"browse",component:function(){return Promise.all([t.e("chunk-01177c1e"),t.e("chunk-4c6c003a")]).then(t.bind(null,"bb51"))},children:[{path:"featured",name:"featured",component:function(){return Promise.all([t.e("chunk-09f07863"),t.e("chunk-3b752fe8")]).then(t.bind(null,"6ccf"))}},{path:"genres",name:"genres",component:function(){return t.e("chunk-fd1a435e").then(t.bind(null,"2817"))}},{path:"discover",name:"discover",component:function(){return Promise.all([t.e("chunk-09f07863"),t.e("chunk-4cc62cbe")]).then(t.bind(null,"6723"))}},{path:"",redirect:"/browse/featured"}]},{path:"album/:id",name:"album",component:function(){return Promise.all([t.e("chunk-96a29ef4"),t.e("chunk-01177c1e"),t.e("chunk-62febb58"),t.e("chunk-0629cfd1")]).then(t.bind(null,"ee18"))}},{path:"artist/:id",component:function(){return Promise.all([t.e("chunk-96a29ef4"),t.e("chunk-01177c1e"),t.e("chunk-09f07863"),t.e("chunk-4279e092")]).then(t.bind(null,"6b01"))},children:[{path:"",name:"artist",component:function(){return t.e("chunk-e1cb17fe").then(t.bind(null,"0051"))}},{path:"about",name:"artist-about",component:function(){return t.e("chunk-1aaba134").then(t.bind(null,"5479"))}}]},{path:"search",name:"search",component:function(){return Promise.all([t.e("chunk-96a29ef4"),t.e("chunk-01177c1e"),t.e("chunk-09f07863"),t.e("chunk-2628d919")]).then(t.bind(null,"2d3b"))}},{path:"queue",name:"queue",component:function(){return Promise.all([t.e("chunk-01177c1e"),t.e("chunk-55b19382")]).then(t.bind(null,"9b31"))}},{path:"*",redirect:{name:"featured"}}],meta:{isAuthRequired:!0}},{path:"/auth",component:function(){return t.e("auth-layout").then(t.bind(null,"25b3"))},children:[{path:"login",name:"login",component:function(){return Promise.all([t.e("chunk-96a29ef4"),t.e("chunk-01177c1e"),t.e("chunk-09f07863"),t.e("chunk-bb9c5860"),t.e("login")]).then(t.bind(null,"a55b"))}}]}],p=new f["a"]({mode:"hash",base:"/",routes:l});p.beforeEach((function(e,n,t){e.matched.some((function(e){return e.meta.isAuthRequired})),t()}));var b=p,k=t("2f62");c["a"].use(k["a"]);var m=new k["a"].Store({state:{current:{},index:0,isPlaying:!1,songs:[{title:"Angle 2 me",artist:"Je",time:"3.17",img:"https://res.cloudinary.com/dzo1tqhjz/image/upload/v1678355252/Spotify%20Lavina/angle-2-me_hksr9e.jpg",src:t("ae54")},{title:"Baby I told you",time:"4.14",artist:"Monstart",img:"https://res.cloudinary.com/dzo1tqhjz/image/upload/v1678355252/Spotify%20Lavina/baby-i-told-you_ih0hzo.jpg",src:t("26b6")}],player:new Audio},mutations:{play:function(e,n){"undefined"!=typeof n.src&&(e.current=n,e.player.src=e.current.src),e.player.play(),e.player.addEventListener("ended",function(){e.index++,e.index>e.songs.length-1&&(e.index=0),e.current=e.songs[e.index],e.play(e.current)}.bind(e)),e.isPlaying=!0},pause:function(e){e.player.pause(),e.isPlaying=!1},next:function(e){e.index++,e.index>e.songs.length-1&&(e.index=0),e.current=e.songs[e.index],this.commit("play",e.current)},prev:function(e){e.index--,e.index<0&&(e.index=e.songs.length-1),e.current=e.songs[e.index],this.commit("play",e.current)}},actions:{},modules:{}}),g=t("f309");c["a"].use(g["a"]);var y=new g["a"]({theme:{dark:!0}});c["a"].config.productionTip=!1,new c["a"]({router:b,store:m,vuetify:y,render:function(e){return e(s)}}).$mount("#app")},"6fa3":function(e,n,t){},ae54:function(e,n,t){e.exports=t.p+"media/music1.9105e15d.mp3"},c22b:function(e,n,t){"use strict";t("6fa3")}});
//# sourceMappingURL=app.f627053f.js.map