(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a9ab699"],{"0fd9":function(t,e,n){"use strict";n("4b85");var s=n("2b0e"),a=n("d9f7"),l=n("80d2");const r=["sm","md","lg","xl"],o=["start","end","center"];function i(t,e){return r.reduce((n,s)=>{return n[t+Object(l["u"])(s)]=e(),n},{})}const c=t=>[...o,"baseline","stretch"].includes(t),u=i("align",()=>({type:String,default:null,validator:c})),f=t=>[...o,"space-between","space-around"].includes(t),d=i("justify",()=>({type:String,default:null,validator:f})),y=t=>[...o,"space-between","space-around","stretch"].includes(t),g=i("alignContent",()=>({type:String,default:null,validator:y})),p={align:Object.keys(u),justify:Object.keys(d),alignContent:Object.keys(g)},b={align:"align",justify:"justify",alignContent:"align-content"};function v(t,e,n){let s=b[t];if(null!=n){if(e){const n=e.replace(t,"");s+=`-${n}`}return s+=`-${n}`,s.toLowerCase()}}const h=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:f},...d,alignContent:{type:String,default:null,validator:y},...g},render(t,{props:e,data:n,children:s}){let l="";for(const a in e)l+=String(e[a]);let r=h.get(l);if(!r){let t;for(t in r=[],p)p[t].forEach(n=>{const s=e[n],a=v(t,n,s);a&&r.push(a)});r.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),h.set(l,r)}return t(e.tag,Object(a["a"])(n,{staticClass:"row",class:r}),s)}})},"4b85":function(t,e,n){},"62ad":function(t,e,n){"use strict";n("4b85");var s=n("2b0e"),a=n("d9f7"),l=n("80d2");const r=["sm","md","lg","xl"],o=(()=>{return r.reduce((t,e)=>{return t[e]={type:[Boolean,String,Number],default:!1},t},{})})(),i=(()=>{return r.reduce((t,e)=>{return t["offset"+Object(l["u"])(e)]={type:[String,Number],default:null},t},{})})(),c=(()=>{return r.reduce((t,e)=>{return t["order"+Object(l["u"])(e)]={type:[String,Number],default:null},t},{})})(),u={col:Object.keys(o),offset:Object.keys(i),order:Object.keys(c)};function f(t,e,n){let s=t;if(null!=n&&!1!==n){if(e){const n=e.replace(t,"");s+=`-${n}`}return"col"!==t||""!==n&&!0!==n?(s+=`-${n}`,s.toLowerCase()):s.toLowerCase()}}const d=new Map;e["a"]=s["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...i,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},justifySelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:s,parent:l}){let r="";for(const a in e)r+=String(e[a]);let o=d.get(r);if(!o){let t;for(t in o=[],u)u[t].forEach(n=>{const s=e[n],a=f(t,n,s);a&&o.push(a)});const n=o.some(t=>t.startsWith("col-"));o.push({col:!n||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf,[`justify-self-${e.justifySelf}`]:e.justifySelf}),d.set(r,o)}return t(e.tag,Object(a["a"])(n,{class:o}),s)}})},6723:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",[n("v-col",[n("v-row",{staticClass:"align-start"},[n("v-col",[n("h1",{staticClass:"headline font-weight-bold"},[t._v("New releases for you")]),n("p",{staticClass:"body-2"},[t._v("Brand new music from artists you love.")])]),n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{attrs:{small:"",text:""}},[t._v("See all")])],1)],1),n("album-card-list")],1)],1),n("v-row",[n("v-col",[n("v-row",{staticClass:"align-start"},[n("v-col",[n("h1",{staticClass:"headline font-weight-bold"},[t._v(" Similar to Vancouver Sleep Clinic ")])]),n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{attrs:{small:"",text:""}},[t._v("See all")])],1)],1),n("album-card-list")],1)],1)],1)},a=[],l=(n("d3b7"),{name:"Discover",components:{AlbumCardList:function(){return Promise.all([n.e("chunk-2408ad9f"),n.e("chunk-2d0de1c0")]).then(n.bind(null,"83f5"))}}}),r=l,o=n("2877"),i=n("6544"),c=n.n(i),u=n("8336"),f=n("62ad"),d=n("0fd9"),y=Object(o["a"])(r,s,a,!1,null,null,null);e["default"]=y.exports;c()(y,{VBtn:u["a"],VCol:f["a"],VRow:d["a"]})},d9f7:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var s=n("80d2");const a={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function l(t){const e={};for(const n of t.split(a.styleList)){let[t,l]=n.split(a.styleProp);t=t.trim(),t&&("string"===typeof l&&(l=l.trim()),e[Object(s["c"])(t)]=l)}return e}function r(){const t={};let e,n,s=arguments.length;while(s--)for(e of Object.keys(arguments[s]))switch(e){case"class":case"style":case"directives":if(Array.isArray(t[e])||(t[e]=[]),"style"===e){let t;t=Array.isArray(arguments[s].style)?arguments[s].style:[arguments[s].style];for(let e=0;e<t.length;e++){const n=t[e];"string"===typeof n&&(t[e]=l(n))}arguments[s].style=t}t[e]=t[e].concat(arguments[s][e]);break;case"staticClass":if(!arguments[s][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[s][e].trim();break;case"on":case"nativeOn":t[e]||(t[e]={});const a=t[e];for(n of Object.keys(arguments[s][e]||{}))a[n]?a[n]=Array().concat(a[n],arguments[s][e][n]):a[n]=arguments[s][e][n];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":t[e]||(t[e]={}),t[e]={...arguments[s][e],...t[e]};break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:t[e]||(t[e]=arguments[s][e])}return t}}}]);
//# sourceMappingURL=chunk-5a9ab699.1eea0d77.js.map