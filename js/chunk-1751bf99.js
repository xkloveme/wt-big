(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1751bf99"],{"1f0c":function(e,n,r){var t=r("24fb");n=t(!1),n.push([e.i,".editor-content[data-v-ffd85c5c]{top:0;left:0;height:100%;box-shadow:0 0 10px 0 rgba(0,0,0,.2);transform-origin:0 0 0}",""]),e.exports=n},"3d39":function(e,n,r){var t=r("1f0c");t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var c=r("499e").default;c("2f43e178",t,!0,{sourceMap:!1,shadowMode:!1})},4608:function(e,n,r){"use strict";r("3d39")},"50b2":function(e,n,r){"use strict";r.r(n);var t=r("7a23");function c(e,n,r,c,a,o){var i=Object(t["resolveComponent"])("prev");return Object(t["openBlock"])(),Object(t["createBlock"])(i)}var a=r("5530");function o(e,n,r,c,o,i){var s=Object(t["resolveComponent"])("dorring-widget");return Object(t["openBlock"])(),Object(t["createElementBlock"])("div",{class:"editor-content pos-a",id:"editor-content",style:Object(t["normalizeStyle"])(e.style)},[(Object(t["openBlock"])(!0),Object(t["createElementBlock"])(t["Fragment"],null,Object(t["renderList"])(e.manager.screen.sceneWidgetsBySortList,(function(n){return Object(t["openBlock"])(),Object(t["createElementBlock"])(t["Fragment"],null,[e.manager.screen.currentScreen.widgets[n.id].hide?Object(t["createCommentVNode"])("",!0):(Object(t["openBlock"])(),Object(t["createBlock"])(s,Object(t["normalizeProps"])(Object(t["mergeProps"])({key:0},Object(a["a"])(Object(a["a"])({},n),e.manager.screen.currentScreen.widgets[n.id]))),null,16))],64)})),256))],4)}var i=r("ade3"),s=(r("ac1f"),r("5319"),r("d3b7"),r("25f0"),r("99af"),r("a660")),d=r("bda9"),l=Object(t["defineComponent"])({name:"dorring-preview",components:{widgetEdit:d["default"]},setup:function(){var e=s["a"].Instance(),n=Object(t["reactive"])({manager:e});Object(t["onBeforeMount"])((function(){n.manager.screenCache.get("screen-preview").then((function(e){var r=Math.random().toString(16).replace(".","");n.manager.screen.createScreen(r,e),n.manager.screen.selectScreenByIndex(n.manager.screen.screenList.length-1)}))}));var r=Object(t["computed"])((function(){if(n.manager.screen.currentScreen){var e,r=n.manager.screen.currentScreen.backgroundColor,t="";return t=r.length>1?"linear-gradient(".concat(n.manager.screen.currentScreen.gradientDirection,"deg, ").concat(r.toString(),")"):n.manager.screen.currentScreen.backgroundColor[0],e={},Object(i["a"])(e,r.length>1?"background-image":"background-color",t),Object(i["a"])(e,"width",n.manager.screen.currentScreen.width+"px"),Object(i["a"])(e,"height",n.manager.screen.currentScreen.height+"px"),e}return{}}));return Object(a["a"])(Object(a["a"])({},Object(t["toRefs"])(n)),{},{style:r})}}),u=(r("4608"),r("6b0d")),b=r.n(u);const g=b()(l,[["render",o],["__scopeId","data-v-ffd85c5c"]]);var p=g,m=Object(t["defineComponent"])({name:"preview",components:{prev:p}});const f=b()(m,[["render",c]]);n["default"]=f}}]);