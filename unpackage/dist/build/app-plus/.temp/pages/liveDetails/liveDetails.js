require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([15],{104:function(t,e,i){"use strict";var a=n(i(1)),s=n(i(105));function n(t){return t&&t.__esModule?t:{default:t}}new a.default(s.default).$mount()},105:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(107),s=i.n(a),n=i(108);var o=function(t){i(106)},l=i(0)(s.a,n.a,o,null,null);e.default=l.exports},106:function(t,e){},107:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{itemList:[],isPullDownRefresh:!1,param:""}},onLoad:function(t){this.isPullDownRefresh=!1;var e=JSON.parse(t.data);this.param=e,this.loadLives(e)},methods:{loadLives:function(e){var i=this;t.showLoading({title:"正在加载"}),this.itemList=[],t.request({url:e.address,header:{},success:function(e){if(i.isPullDownRefresh&&t.stopPullDownRefresh(),t.hideLoading(),200!==e.statusCode)console.log("请求失败:"+e),t.showToast({title:"限制抓取，请稍后重试",icon:"none"});else try{for(var a=0;a<e.data.zhubo.length;a++)e.data.zhubo[a].title=i.parseTitle(e.data.zhubo[a].title);i.itemList=e.data.zhubo}catch(t){}}})},playLive:function(e){console.debug("进来了"+e.address),t.navigateTo({url:"../playLive/playLive?data="+JSON.stringify(e.address)})},parseTitle:function(t){try{return decodeURIComponent(t)}catch(e){return console.debug("不能转化的标题："+t),t}}},onPullDownRefresh:function(){this.isPullDownRefresh=!0,this.loadLives(this.param)}}}).call(e,i(2).default)},108:function(t,e,i){"use strict";var a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"container"},t._l(t.itemList,function(e,a){return i("block",{key:a},[i("view",{staticClass:"cell",attrs:{eventid:"4Nf-0-"+a},on:{tap:function(i){t.playLive(e)}}},[i("image",{staticClass:"cell-img",staticStyle:{width:"200upx",height:"100upx"},attrs:{mode:"aspectFit",src:e.img,"lazy-load":"true"}}),i("view",[t._v(t._s(e.title))])])])}))},staticRenderFns:[]};e.a=a}},[104]);