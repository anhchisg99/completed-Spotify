(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0629cfd1"],{"24b2":function(t,e,s){"use strict";var a=s("80d2"),i=s("2b0e");e["a"]=i["a"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=Object(a["g"])(this.height),s=Object(a["g"])(this.minHeight),i=Object(a["g"])(this.minWidth),n=Object(a["g"])(this.maxHeight),r=Object(a["g"])(this.maxWidth),o=Object(a["g"])(this.width);return e&&(t.height=e),s&&(t.minHeight=s),i&&(t.minWidth=i),n&&(t.maxHeight=n),r&&(t.maxWidth=r),o&&(t.width=o),t}}})},"25a8":function(t,e,s){},"3ad0":function(t,e,s){},"3c93":function(t,e,s){},"58df":function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));var a=s("2b0e");function i(...t){return a["a"].extend({mixins:t})}},7560:function(t,e,s){"use strict";s.d(e,"b",(function(){return n}));var a=s("2b0e");const i=a["a"].extend().extend({name:"themeable",provide(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark(){return this.$vuetify.theme.dark||!1},isDark(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler(t,e){t!==e&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}});function n(t){const e={...t.props,...t.injections},s=i.options.computed.isDark.call(e);return i.options.computed.themeClasses.call({isDark:s})}e["a"]=i},"7e2b":function(t,e,s){"use strict";var a=s("2b0e");function i(t){return function(e,s){for(const a in s)Object.prototype.hasOwnProperty.call(e,a)||this.$delete(this.$data[t],a);for(const a in e)this.$set(this.$data[t],a,e[a])}}e["a"]=a["a"].extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",i("attrs$"),{immediate:!0}),this.$watch("$listeners",i("listeners$"),{immediate:!0})}})},8860:function(t,e,s){"use strict";s("3ad0");var a=s("8dd9");e["a"]=a["a"].extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...a["a"].options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(t){this.groups.push(t)},unregister(t){const e=this.groups.findIndex(e=>e._uid===t._uid);e>-1&&this.groups.splice(e,1)},listClick(t){if(!this.expand)for(const e of this.groups)e.toggle(t)}},render(t){const e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$}};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}})},"8dd9":function(t,e,s){"use strict";s("25a8");var a=s("7e2b"),i=s("a9ad"),n=s("c995"),r=s("24b2"),o=s("a236"),l=s("7560"),d=s("58df");e["a"]=Object(d["a"])(a["a"],i["a"],n["a"],r["a"],o["a"],l["a"]).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},a236:function(t,e,s){"use strict";var a=s("2b0e");e["a"]=a["a"].extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){const s=e.split(" ");for(const e of s)t.push("rounded-"+e)}else e&&t.push("rounded");return t.length>0?{[t.join(" ")]:!0}:{}}}})},a797:function(t,e,s){"use strict";s("3c93");var a=s("a9ad"),i=s("7560"),n=s("f2e7"),r=s("58df");e["a"]=Object(r["a"])(a["a"],i["a"],n["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}})},a9ad:function(t,e,s){"use strict";var a=s("2b0e"),i=s("d9bd"),n=s("7bc6");e["a"]=a["a"].extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?(Object(i["b"])("style must be an object",this),e):"string"===typeof e.class?(Object(i["b"])("class must be an object",this),e):(Object(n["d"])(t)?e.style={...e.style,"background-color":""+t,"border-color":""+t}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return Object(i["b"])("style must be an object",this),e;if("string"===typeof e.class)return Object(i["b"])("class must be an object",this),e;if(Object(n["d"])(t))e.style={...e.style,color:""+t,"caret-color":""+t};else if(t){const[s,a]=t.toString().trim().split(" ",2);e.class={...e.class,[s+"--text"]:!0},a&&(e.class["text--"+a]=!0)}return e}}})},c995:function(t,e,s){"use strict";var a=s("2b0e");e["a"]=a["a"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{["elevation-"+this.elevation]:!0}}}})},ce87:function(t,e,s){"use strict";var a=s("2b0e"),i=a["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:()=>({openTimeout:void 0,closeTimeout:void 0}),methods:{clearDelay(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay(t,e){this.clearDelay();const s=parseInt(this[t+"Delay"],10);this[t+"Timeout"]=setTimeout(e||(()=>{this.isActive={open:!0,close:!1}[t]}),s)}}}),n=s("f2e7"),r=s("58df"),o=s("d9bd");e["a"]=Object(r["a"])(i,n["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter(){this.runDelay("open")},onMouseLeave(){this.runDelay("close")}},render(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(o["c"])("v-hover is missing a default scopedSlot or bound value",this),null;let t;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(o["c"])("v-hover should only contain a single element",this),t)}})},ee18:function(t,e,s){"use strict";s.r(e);var a=s("62ad"),i=s("a523"),n=s("ce87"),r=s("132d"),o=s("adda"),l=s("da13"),d=s("5d23"),u=s("a797"),c=s("0fd9"),h=function(){var t=this,e=t._self._c;return e(i["a"],{attrs:{id:"album",fluid:""}},[e(c["a"],[e(a["a"],{staticClass:"pa-10 pa-sm-4 py-sm-0 pa-md-8 py-md-0 py-0",attrs:{cols:"12",sm:"5",md:"4"}},[e("div",[e(n["a"],{scopedSlots:t._u([{key:"default",fn:function(s){var a=s.hover;return[e(o["a"],{staticClass:"elevation-10",attrs:{src:"https://i.scdn.co/image/ab67616d0000b273452b8f1f15311cad1661d6f4"}},[e(u["a"],{attrs:{absolute:"",opacity:"0.5",value:a}},[e(r["a"],{attrs:{size:"90"}},[t._v("mdi-play-circle-outline")])],1)],1)]}}])}),e("div",{staticClass:"text-center mt-4 mb-0"},[e("p",{staticClass:"headline font-weight-bold ma-0 mb-1",staticStyle:{"line-height":"1.5rem"}},[t._v(" A little girl, a little boy, and all the snails they have drawn ")]),e("p",{staticClass:"subtitle-1 mb-4"},[e("router-link",{attrs:{to:{name:"artist",params:{id:1}}}},[t._v("The Delano Orchestra")])],1),e("p",{staticClass:"caption"},[t._v("2008 • 14 SONGS")])])],1)]),e(a["a"],{staticClass:"pt-0",attrs:{cols:"12",sm:"7",md:"8"}},t._l(t.songs,(function(s){return e(n["a"],{key:s,scopedSlots:t._u([{key:"default",fn:function(i){var n=i.hover;return[e(l["a"],{attrs:{link:"","two-line":""}},[e(d["a"],{staticClass:"py-0"},[e(c["a"],{staticClass:"align-center"},[e(a["a"],{staticClass:"py-0",attrs:{cols:"auto"}},[e(r["a"],[t._v(t._s(n?"mdi-play":"mdi-music-note-outline"))])],1),e(a["a"],[e(d["c"],[e(d["c"],[t._v(t._s(s))]),e(d["b"],[t._v("The Delano Orchestra")])],1)],1),e(a["a"],{attrs:{cols:"auto"}},[t._v(" 3:49 ")])],1)],1)],1)]}}],null,!0)})})),1)],1)],1)},m=[],p={name:"Album",data:function(){return{songs:["Intro","Frozn Lake","Kill Me Twice","Say We Are","Bubbles of Soap","Little Girl"]}}},v=p,b=s("2877"),f=Object(b["a"])(v,h,m,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-0629cfd1.4b4d6241.js.map