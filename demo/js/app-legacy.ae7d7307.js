(function(t){function e(e){for(var s,c,o=e[0],i=e[1],l=e[2],d=0,p=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(s=!1)}s&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var s={},r={app:0},a=[];function c(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=s,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(n,s,function(e){return t[e]}.bind(null,s));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"14cc":function(t,e,n){"use strict";var s=n("a034"),r=n.n(s);r.a},2624:function(t,e,n){},"2bbb":function(t,e,n){"use strict";var s=n("2624"),r=n.n(s);r.a},"2d03":function(t,e,n){"use strict";var s=n("aa8d"),r=n.n(s);r.a},"3d98":function(t,e,n){"use strict";var s=n("434a"),r=n.n(s);r.a},"434a":function(t,e,n){},"4e2b":function(t,e,n){"use strict";var s=n("50f6"),r=n.n(s);r.a},"50f6":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=n("5f5b"),a=(n("f9e3"),n("2dd8"),n("a4a1")),c=n.n(a),o=(n("f6b9"),n("a4d3"),n("4de4"),n("caad"),n("c975"),n("d81d"),n("a434"),n("e439"),n("dbb4"),n("b64b"),n("2532"),n("159b"),n("ade3")),i=(n("96cf"),n("1da1")),l=n("2f62");n("4e82");function u(t){for(var e in t)t[e]=t[e].sort()}n("99af"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d");function d(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1,s=t.getDate(),r=t.getHours(),a=t.getMinutes(),c=t.getSeconds();return"".concat(e,"-").concat(n,"-").concat(s,"_").concat(r,"_").concat(a,"_").concat(c,".zip")}function p(t){var e=window.URL.createObjectURL(new Blob([t])),n=document.createElement("a");n.href=e,n.setAttribute("download",d()),document.body.appendChild(n),n.click(),document.body.removeChild(n)}var f=n("bc3a"),m=n.n(f),b={host:"telemetria-exporter-demo.herokuapp.com",port:"",protocol:"https"};function h(){var t=new URL(window.location.href),e=t.searchParams.get("hostname"),n=t.searchParams.get("host")||b.host,s=t.searchParams.get("port")||b.port;return e||"".concat(n,":").concat(s)}var g=h(),v=b.protocol;function E(){return I.apply(this,arguments)}function I(){return I=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("".concat(v,"://").concat(g,"/api/database-schema"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)}))),I.apply(this,arguments)}function y(t){return O.apply(this,arguments)}function O(){return O=Object(i["a"])(regeneratorRuntime.mark((function t(e){var n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={collectionsToExport:e},t.next=3,m.a.post("".concat(v,"://").concat(g,"/api/export/json"),n,{responseType:"blob"});case 3:return s=t.sent,t.abrupt("return",s.data);case 5:case"end":return t.stop()}}),t)}))),O.apply(this,arguments)}function x(t){return R.apply(this,arguments)}function R(){return R=Object(i["a"])(regeneratorRuntime.mark((function t(e){var n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={collectionsToExport:e},t.next=3,m.a.post("".concat(v,"://").concat(g,"/api/export/csv"),n,{responseType:"blob"});case 3:return s=t.sent,t.abrupt("return",s.data);case 5:case"end":return t.stop()}}),t)}))),R.apply(this,arguments)}function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}s["default"].use(l["a"]);var S={NONE:-1,FETCHING:0,EDITING:1,EXPORTING:2,FETCHING_ERROR:3,EXPORTING_ERROR:4},N=new l["a"].Store({state:{databaseSchema:{},currentDatabase:-1,selectedItems:{},message:"",status:S.NONE},getters:{databases:function(t){return t.databaseSchema?Object.keys(t.databaseSchema):[]},currentDatabaseName:function(t,e){return-1===t.currentDatabase?null:e.databases[t.currentDatabase]},currentCollections:function(t,e){var n=function(e,n){return t.selectedItems[e]&&t.selectedItems[e].includes(n)},s=e.currentDatabaseName;return s?t.databaseSchema[s].map((function(t){return{label:t,selected:n(s,t)}})):[]}},mutations:{setDatabaseSchema:function(t,e){t.databaseSchema=e,t.currentDatabase=-1,t.selectedItems={}},setCurrentDatabase:function(t,e){t.currentDatabase=e},setSelectedItems:function(t,e){t.selectedItems=e},setLoading:function(t,e){t.loading=e},setMessage:function(t,e){t.message=e},setStatus:function(t,e){t.status=e}},actions:{setStatus:function(t,e){var n=t.commit;switch(e){case S.FETCHING:n("setMessage","Fetching database schema");break;case S.EXPORTING:n("setMessage","Exporting selected collections");break;case S.FETCHING_ERROR:n("setMessage","Error in fetching database");break;case S.EXPORTING_ERROR:n("setMessage","Error in exporting collections");break;default:n("setMessage","");break}n("setStatus",e)},fetchDatabaseSchema:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var n,s,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.commit,s=e.state,r=e.dispatch,s.status!==S.NONE&&s.status!==S.FETCHING_ERROR&&s.status!==S.EXPORTING){t.next=16;break}return r("setStatus",S.FETCHING),t.prev=3,t.next=6,E();case 6:a=t.sent,u(a),n("setDatabaseSchema",a),r("setStatus",S.EDITING),t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](3),console.error("Error in fetching database",t.t0),r("setStatus",S.FETCHING_ERROR);case 16:case"end":return t.stop()}}),t,null,[[3,12]])})));function e(e){return t.apply(this,arguments)}return e}(),selectDatabase:function(t,e){var n=t.commit,s=t.state;s.status===S.EDITING&&n("setCurrentDatabase",e)},addCollection:function(t,e){var n=t.commit,s=t.state,r=e.db,a=e.collection;if(s.status===S.EDITING){var c=_({},s.selectedItems);c[r]?c[r].push(a):c[r]=[a],n("setSelectedItems",c)}},removeCollection:function(t,e){var n=t.commit,s=t.state,r=e.db,a=e.collection;if(s.status===S.EDITING){var c=_({},s.selectedItems),o=c[r].indexOf(a);c[r].splice(o,1),c[r].length||delete c[r],n("setSelectedItems",c)}},exportJson:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var n,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.state,s=e.dispatch,n.status!==S.EDITING){t.next=15;break}return s("setStatus",S.EXPORTING),t.prev=3,t.next=6,y(n.selectedItems);case 6:r=t.sent,p(r),s("fetchDatabaseSchema"),t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](3),console.error("Error in exporting collections as json",t.t0),s("setStatus",S.EXPORTING_ERROR);case 15:case"end":return t.stop()}}),t,null,[[3,11]])})));function e(e){return t.apply(this,arguments)}return e}(),exportCsv:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var n,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.state,s=e.dispatch,n.status!==S.EDITING){t.next=15;break}return s("setStatus",S.EXPORTING),t.prev=3,t.next=6,x(n.selectedItems);case 6:r=t.sent,p(r),s("fetchDatabaseSchema"),t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](3),console.error("Error in exporting collections as csv",t.t0),s("setStatus",S.EXPORTING_ERROR);case 15:case"end":return t.stop()}}),t,null,[[3,11]])})));function e(e){return t.apply(this,arguments)}return e}(),backToEditing:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.state,s=e.dispatch,e.commit,n.status!==S.EXPORTING&&n.status!==S.EXPORTING_ERROR||s("setStatus",S.EDITING);case 2:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}}),j=N,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex align-items-center justify-content-center",attrs:{id:"app"}},[n("items-selector")],1)},T=[],D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("perfect-scrollbar",{staticClass:"items-selector container"},[n("items-selector-title"),t.loading?n("items-selector-loading",{attrs:{message:t.message}}):t._e(),t.error?n("items-selector-error",{attrs:{message:t.message}}):t._e(),t.editing?n("items-selector-content",{attrs:{databases:t.databases,currentDatabase:t.currentDatabase,collections:t.currentCollections,selectedItems:t.selectedItems}}):t._e(),n("items-selector-buttons",{attrs:{type:t.buttonType,disabled:!t.editing||t.noneSelected}})],1)},k=[],G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"items-selector-title row justify-content-center"},[n("div",{staticClass:"col"},[n("h1",{staticClass:"title"},[t._v(t._s(t.text))])])])},$=[],P={name:"ItemsSelectorTitle",props:{text:{type:String,default:"Telemetria"}}},B=P,L=(n("e3cf"),n("2877")),X=Object(L["a"])(B,G,$,!1,null,"06ef4204",null),F=X.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"items-selector-content row justify-content-center"},[n("div",{staticClass:"col"},[n("database-items",{attrs:{databases:t.databases,selected:t.currentDatabase}})],1),n("div",{staticClass:"col"},[n("collection-items",{attrs:{collections:t.collections}})],1),n("div",{staticClass:"col"},[n("selected-items",{attrs:{selectedItems:t.selectedItems}})],1)])},M=[],q=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"collectionItems"},t._l(t.collections,(function(e){var s=e.label,r=e.selected;return n("item",{key:s,attrs:{type:"COLLECTION",text:s,selected:r},on:{itemClicked:function(e){return t.toggleCollection(s,r)}}})})),1)}),A=[],J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.itemClass},[n("span",{on:{click:function(e){return t.itemClicked()}}},[t._v(t._s(t.text))])])},U=[],Y={name:"Item",props:{text:{type:String,required:!0},type:{validator:function(t){return["DB","COLLECTION"].includes(t)},required:!0},selected:{type:Boolean,default:!1},erased:{type:Boolean,default:!1}},computed:{itemClass:function(){return{item:!0,selected:this.selected,erased:this.erased,database:"DB"===this.type,collection:"COLLECTION"===this.type}}},methods:{itemClicked:function(){this.$emit("itemClicked")}}},z=Y,V=(n("c9b6"),Object(L["a"])(z,J,U,!1,null,"4257e83e",null)),K=V.exports,Q={name:"CollectionItems",components:{Item:K},props:{collections:{type:Array,default:function(){return[]}}},computed:{database:function(){return this.$store.getters.currentDatabaseName}},methods:{toggleCollection:function(t,e){var n={db:this.database,collection:t};e?this.$store.dispatch("removeCollection",n):this.$store.dispatch("addCollection",n)}}},W=Q,Z=Object(L["a"])(W,q,A,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"databaseItems"},t._l(t.databases,(function(e,s){return n("item",{key:e,attrs:{type:"DB",text:e,selected:s===t.selected},on:{itemClicked:function(e){return t.selectDatabase(s)}}})})),1)},nt=[],st={name:"DatabaseItems",components:{Item:K},props:{databases:{type:Array,default:function(){return[]}},selected:{type:Number,default:-1}},methods:{selectDatabase:function(t){this.$store.dispatch("selectDatabase",t)}}},rt=st,at=Object(L["a"])(rt,et,nt,!1,null,null,null),ct=at.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.selectedItems},t._l(t.databases,(function(e){return n("div",{key:e,staticClass:"db-container"},[n("item",{attrs:{type:"DB",text:e,selected:""}}),t._l(t.selectedItems[e],(function(s){return n("div",{key:s},[n("item",{attrs:{erased:"",type:"COLLECTION",text:s},on:{itemClicked:function(n){return t.removeCollection(e,s)}}})],1)}))],2)})),0)},it=[],lt={name:"SelectedItems",components:{Item:K},props:{selectedItems:{type:Object,default:function(){}}},computed:{databases:function(){return Object.keys(this.selectedItems||{})}},methods:{removeCollection:function(t,e){this.$store.dispatch("removeCollection",{db:t,collection:e})}}},ut=lt,dt=(n("601d"),Object(L["a"])(ut,ot,it,!1,null,"41695cf2",null)),pt=dt.exports,ft={name:"ItemsSelectorContent",components:{DatabaseItems:ct,CollectionItems:tt,SelectedItems:pt},props:{databases:{type:Array,default:function(){return[]}},currentDatabase:{type:Number,default:-1},collections:{type:Array,default:function(){return[]}},selectedItems:{type:Object,default:function(){}}}},mt=ft,bt=(n("4e2b"),Object(L["a"])(mt,H,M,!1,null,"d02cdbd4",null)),ht=bt.exports,gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"items-selector-loading row justify-content-center"},[n("div",{staticClass:"col text-center"},[n("eagle-spinner",{staticClass:"d-inline-block"}),n("loading-label",{staticClass:"d-inline-block",attrs:{text:t.message}})],1)])},vt=[],Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"eagle-spinner"},[n("picture",[n("source",{attrs:{srcset:"logo.webp",type:"image/webp"}}),n("source",{attrs:{srcset:"logo.png",type:"image/png"}}),n("img",{style:t.style,attrs:{src:"logo.png",alt:"eagle-logo"}})])])},It=[],yt={name:"EagleSpinner",props:{width:{type:Number,default:135},height:{type:Number,default:135}},computed:{style:function(){return{width:"".concat(this.width,"px"),height:"".concat(this.height,"px")}}}},Ot=yt,xt=(n("14cc"),Object(L["a"])(Ot,Et,It,!1,null,"c04a0e7a",null)),Rt=xt.exports,Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading-label"},[n("h1",[t._v(t._s(t.text)+t._s(t.dots)+t._s(t.spaces))])])},_t=[],St=(n("a15b"),n("2909")),Nt={name:"LoadingLabel",props:{text:{type:String,required:!0}},data:function(){return{dotsNumber:3,interval:1e3}},computed:{dots:function(){return Object(St["a"])(Array(this.dotsNumber).keys()).map((function(t){return"."})).join("")},spaces:function(){return Object(St["a"])(Array(3-this.dotsNumber).keys()).map((function(t){return" "})).join("")}},methods:{updateDots:function(){this.dotsNumber=(this.dotsNumber+1)%4}},mounted:function(){var t=this;setInterval((function(){return t.updateDots()}),this.interval)}},jt=Nt,wt=(n("fb61"),Object(L["a"])(jt,Ct,_t,!1,null,"0d300436",null)),Tt=wt.exports,Dt={name:"ItemsSelectorLoading",components:{EagleSpinner:Rt,LoadingLabel:Tt},props:{message:{type:String,required:!0}}},kt=Dt,Gt=(n("2bbb"),Object(L["a"])(kt,gt,vt,!1,null,"78757bd4",null)),$t=Gt.exports,Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"items-selector-error row justify-content-center"},[n("div",{staticClass:"col text-center"},[n("eagle-logo",{staticClass:"d-inline-block"}),n("error-label",{staticClass:"d-inline-block",attrs:{text:t.message}})],1)])},Bt=[],Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"eagle-logo"},[n("picture",{style:t.style},[n("source",{attrs:{srcset:"logo.webp",type:"image/webp"}}),n("source",{attrs:{srcset:"logo.png",type:"image/png"}}),n("img",{style:t.style,attrs:{src:"logo.png",alt:"eagle-logo"}})])])},Xt=[],Ft={name:"EagleLogo",props:{width:{type:Number,default:135},height:{type:Number,default:135}},computed:{style:function(){return{width:"".concat(this.width,"px"),height:"".concat(this.height,"px")}}}},Ht=Ft,Mt=(n("d9d8"),Object(L["a"])(Ht,Lt,Xt,!1,null,"6a079505",null)),qt=Mt.exports,At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"error-label"},[n("h1",[t._v(t._s(t.text))])])},Jt=[],Ut={name:"ErrorLabel",props:{text:{type:String,required:!0}}},Yt=Ut,zt=(n("b292"),Object(L["a"])(Yt,At,Jt,!1,null,"dce31922",null)),Vt=zt.exports,Kt={name:"ItemsSelectorError",components:{EagleLogo:qt,ErrorLabel:Vt},props:{message:{type:String,required:!0}}},Qt=Kt,Wt=(n("9652"),Object(L["a"])(Qt,Pt,Bt,!1,null,"62dd15dc",null)),Zt=Wt.exports,te=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"items-selector-buttons row justify-content-center no-gutters"},["EDITING"===t.type?n("items-selector-editing-buttons",{attrs:{disabled:t.disabled}}):t._e(),"REFRESH"===t.type?n("items-selector-refresh-buttons",{attrs:{disabled:t.disabled}}):t._e(),"EXPORTING_ERROR"===t.type?n("items-selector-exporting-error-buttons",{attrs:{disabled:t.disabled}}):t._e()],1)},ee=[],ne=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"items-selector-editing-buttons col text-center"},[n("eagle-button",{staticClass:"export-button",attrs:{text:"JSON",disabled:t.disabled},on:{eagleClick:function(e){return t.exportJson()}}}),n("eagle-button",{staticClass:"export-button",attrs:{text:"CSV",disabled:t.disabled},on:{eagleClick:function(e){return t.exportCsv()}}})],1)},se=[],re=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"eagle-spinner"},[n("b-button",{attrs:{variant:"outline-primary",disabled:t.disabled},on:{click:function(e){return t.eagleClick()}}},[t._v(t._s(t.text))])],1)},ae=[],ce={name:"EagleButton",props:{text:{type:String,required:!0},disabled:{type:Boolean,default:!1}},methods:{eagleClick:function(){this.disabled||this.$emit("eagleClick")}}},oe=ce,ie=(n("3d98"),Object(L["a"])(oe,re,ae,!1,null,"daea3298",null)),le=ie.exports,ue={name:"ItemsSelectorEditingButtons",components:{EagleButton:le},props:{disabled:{type:Boolean,default:!1}},methods:{exportJson:function(){this.$store.dispatch("exportJson")},exportCsv:function(){this.$store.dispatch("exportCsv")}}},de=ue,pe=(n("2d03"),Object(L["a"])(de,ne,se,!1,null,"23868d46",null)),fe=pe.exports,me=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"items-selector-refresh-buttons col text-center"},[n("eagle-button",{attrs:{text:"RETRY",disabled:t.disabled},on:{eagleClick:function(e){return t.refresh()}}})],1)},be=[],he={name:"ItemsSelectorRefreshButtons",components:{EagleButton:le},data:function(){return{disabled:!1}},methods:{refresh:function(){this.disabled=!0,this.$store.dispatch("fetchDatabaseSchema")}}},ge=he,ve=Object(L["a"])(ge,me,be,!1,null,"5154771c",null),Ee=ve.exports,Ie=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"items-selector-exporting-error-buttons col text-center"},[n("eagle-button",{attrs:{text:"UNDERSTOOD",disabled:t.disabled},on:{eagleClick:function(e){return t.understood()}}})],1)},ye=[],Oe={name:"ItemsSelectorExportingErrorButtons",components:{EagleButton:le},data:function(){return{disabled:!1}},methods:{understood:function(){this.disabled=!0,this.$store.dispatch("backToEditing")}}},xe=Oe,Re=Object(L["a"])(xe,Ie,ye,!1,null,"561f5389",null),Ce=Re.exports,_e={name:"ItemsSelectorButtons",components:{ItemsSelectorEditingButtons:fe,ItemsSelectorRefreshButtons:Ee,ItemsSelectorExportingErrorButtons:Ce},props:{type:{validator:function(t){return["EDITING","REFRESH","EXPORTING_ERROR"].includes(t)},required:!0},disabled:{type:Boolean,default:!1}}},Se=_e,Ne=Object(L["a"])(Se,te,ee,!1,null,"3bc5a0b6",null),je=Ne.exports,we={name:"ItemsSelector",components:{PerfectScrollbar:a["PerfectScrollbar"],ItemsSelectorButtons:je,ItemsSelectorContent:ht,ItemsSelectorLoading:$t,ItemsSelectorError:Zt,ItemsSelectorTitle:F},computed:{databaseSchema:function(){return this.$store.state.databaseSchema},currentDatabase:function(){return this.$store.state.currentDatabase},databases:function(){return this.$store.getters.databases},currentCollections:function(){return this.$store.getters.currentCollections},selectedItems:function(){return this.$store.state.selectedItems},noneSelected:function(){return 0===Object.keys(this.selectedItems).length},status:function(){return this.$store.state.status},loading:function(){var t=this.$store.state.status;return t===S.FETCHING||t===S.EXPORTING},editing:function(){var t=this.$store.state.status;return t===S.EDITING},error:function(){var t=this.$store.state.status;return t===S.FETCHING_ERROR||t===S.EXPORTING_ERROR},message:function(){return this.$store.state.message},buttonType:function(){switch(this.$store.state.status){case S.NONE:case S.FETCHING:case S.EXPORTING:case S.EDITING:return"EDITING";case S.FETCHING_ERROR:return"REFRESH";case S.EXPORTING_ERROR:return"EXPORTING_ERROR";default:return"EDITING"}}},created:function(){this.$store.dispatch("fetchDatabaseSchema")}},Te=we,De=(n("acff"),Object(L["a"])(Te,D,k,!1,null,"50b5bb68",null)),ke=De.exports,Ge={name:"app",components:{ItemsSelector:ke}},$e=Ge,Pe=(n("5c0b"),n("5c64"),Object(L["a"])($e,w,T,!1,null,null,null)),Be=Pe.exports;s["default"].config.productionTip=!0,s["default"].use(r["a"]),s["default"].use(c.a),new s["default"]({store:j,render:function(t){return t(Be)}}).$mount("#app")},"5b80":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var s=n("9c0c"),r=n.n(s);r.a},"5c64":function(t,e,n){"use strict";var s=n("d32a"),r=n.n(s);r.a},"601d":function(t,e,n){"use strict";var s=n("8cc6"),r=n.n(s);r.a},"8cc6":function(t,e,n){},"90cf":function(t,e,n){},9652:function(t,e,n){"use strict";var s=n("da9c"),r=n.n(s);r.a},"96a0":function(t,e,n){},"9c0c":function(t,e,n){},a034:function(t,e,n){},aa8d:function(t,e,n){},acff:function(t,e,n){"use strict";var s=n("b0ce"),r=n.n(s);r.a},b0ce:function(t,e,n){},b292:function(t,e,n){"use strict";var s=n("90cf"),r=n.n(s);r.a},c9b6:function(t,e,n){"use strict";var s=n("f462"),r=n.n(s);r.a},d32a:function(t,e,n){},d9d8:function(t,e,n){"use strict";var s=n("96a0"),r=n.n(s);r.a},da9c:function(t,e,n){},e3cf:function(t,e,n){"use strict";var s=n("e8fd"),r=n.n(s);r.a},e8fd:function(t,e,n){},f462:function(t,e,n){},fb61:function(t,e,n){"use strict";var s=n("5b80"),r=n.n(s);r.a}});
//# sourceMappingURL=app-legacy.ae7d7307.js.map