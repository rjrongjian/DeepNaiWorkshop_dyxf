require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([11],{51:function(t,e,i){"use strict";var s=a(i(1)),o=a(i(52));function a(t){return t&&t.__esModule?t:{default:t}}new s.default(o.default).$mount()},52:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(54),o=i.n(s),a=i(55);var r=function(t){i(53)},n=i(0)(o.a,a.a,r,null,null);e.default=n.exports},53:function(t,e){},54:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},o=i(3);e.default={onLoad:function(e){var i=this;if(this.ads=this.$myMovieApi.detailAds,1!=this.$myYiYouApi.userStatus){var s=this.$myYiYouApi.yiYouErrInfo[this.$myYiYouApi.userStatus];this.goLoginPage;t.showToast({title:s,icon:"none"}),this.$myLocalStore.clearLocalStore(),this.clearMemory()}if(this.hasLogin){var o=this.expireTime,a=this.$myDateUtils.dateUtils.parse(o).getTime();console.log("会员过期时间："+o+"，毫秒数："+a);var r=new Date;r=r.getTime();var n=0;t.request({url:"http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",success:function(e){if(200!==e.statusCode)console.log("请求失败:",e),n=r;else{var s=e.data;try{-1!=s.ret.indexOf("SUCCESS")?(console.log("接口返回的时间戳："+s.data.t),n=s.data.t):n=r}catch(t){console.log("获取当前时间失败："+t),n=r}}console.debug("会员到期时间："+a+",系统时间："+n),a<n?(i.isOutOfDate=!0,console.debug("会员到期"),t.showModal({title:"温馨提示",content:"您的会员已到期，请到个人中心进行充值",showCancel:!1,confirmText:"我知道了",fail:function(t){console.log("弹窗出错")}})):(i.isOutOfDate=!1,console.debug("会员未到期"))}}),this.currentSelectedHttpOrHttps=this.$myMovieApi.currentSelectedHttpOrHttps;var l=JSON.parse(e.data);this.movieId=l.id,this.updateTime=l.updateTime,this.name=l.name,this.type=l.type,this.pic=l.pic,this.language=l.language,this.area=l.area,this.year=l.year,this.note=l.note,this.actor=l.actor,this.director=l.director,this.des=l.des;var c=l.resUrl[this.$myMovieApi.m3u8OrOtherRes].split("#");if(c)for(var u=0;u<c.length;u++){var d=c[u].split("$");3==d.length?this.movieUrlArr.push({name:d[0],url:d[1],m3u8Or:d[2]}):this.movieUrlArr.push({name:d[0],url:d[1]})}this.movieUrlArr.length>0?(this.activeName=this.movieUrlArr[0].name,this.updateRes(this.movieUrlArr[0]),this.isLoadedMovieData=!0,this.movieUrlInfo=this.movieUrlArr[0]):t.showToast({title:"加载资源失败，请返回列表后重新进入",duration:2e3,icon:"none"})}else t.redirectTo({url:"../login/login?data="+e.data})},data:function(){return{isLoadedMovieData:!1,src:"",currentSelectedHttpOrHttps:null,httpOrHttps:{"http://":"https://","https://":"http://"},movieId:0,updateTime:"",name:"",type:"",pic:"",language:"",area:"",year:"",note:"",actor:"",director:"",des:"",movieUrlArr:[],activeName:"",movieUrlInfo:{},urlInWeb:"",isOutOfDate:!1,ads:[]}},computed:(0,o.mapState)(["hasLogin","username","statusCode","expireTime"]),methods:s({},(0,o.mapMutations)(["syncLocalStoreToMemory","clearMemory"]),{videoErrorCallback:function(e){console.log("视频播放错误，原因："+JSON.stringify(e)),t.showModal({title:"不能正常播放说明",content:"新更新的资源需要转码，大约1小时，请稍候观看，如有其他问题（"+e.target.errMsg+"），请加群,"+(this.$myMovieApi.qqQun?"群名："+this.$myMovieApi.qqQun.qunName+",群号："+this.$myMovieApi.qqQun.qunNum:""),showCancel:!1,confirmText:"确定",fail:function(t){console.log("播放视频出错，原因："+JSON.stringify(t))}})},updateRes:function(t){this.activeName=t.name;var e=t.url;if(this.currentSelectedHttpOrHttps){if(!t.url.startsWith(this.currentSelectedHttpOrHttps+"://")){var i=this.httpOrHttps[this.currentSelectedHttpOrHttps+"://"];e=this.currentSelectedHttpOrHttps+"://"+t.url.substring(i.length)}console.log("当前选中协议："+this.currentSelectedHttpOrHttps+"替换后的链接："+e)}else console.log("不更改资源本身的http或者https:"+e);return this.src=e,this.movieUrlInfo.url=e,e},confirmPlayInBroswer:function(){this.playInWebView;console.debug("准备使用的解析接口："+this.$myMovieApi.jxParserUrlForHttp),console.debug("准备使用的解析接口："+this.$myMovieApi.jxParserUrlForHttps);var e=this.$myMovieApi.jxM3U8(this.$myMovieApi.jxParserUrlForHttp,this.$myMovieApi.jxParserUrlForHttps,this.src);t.showModal({title:"说明",content:"通过解析接口对数据做了一次处理，“确定”将跳转到“浏览器”观看当前选中链接！！",success:function(t){t.confirm?plus.runtime.openURL(e):t.cancel&&console.log("用户点击取消")}})},clickScrollAd:function(e){console.log(e.openType+","+e.url+","+e.imgUrl),1==e.openType&&plus.runtime.openWeb(e.url),2==e.openType&&plus.runtime.openURL(e.url),3==e.openType&&"lingquansonghuiyuan"==e.url&&t.navigateTo({url:"../activity/lingquansonghuiyuan/lingquansonghuiyuan"})},playInWebView:function(){console.log("在网页中播放"),t.showLoading(),console.debug("准备使用的解析接口："+this.$myMovieApi.jxParserUrlForHttp),console.debug("准备使用的解析接口："+this.$myMovieApi.jxParserUrlForHttps);var e=this.$myMovieApi.jxM3U8(this.$myMovieApi.jxParserUrlForHttp,this.$myMovieApi.jxParserUrlForHttps,this.src),i=e;t.request({url:"http://suo.im/api.php?format=json&url="+e,success:function(e){if(200!==e.statusCode)console.log("短链接口返回的http code不为200"),t.setClipboardData({data:i,success:function(){t.hideLoading(),t.showToast({title:"复制链接成功",duration:2e3,icon:"none"})},fail:function(){t.hideLoading(),t.showToast({title:"复制链接失败",duration:2e3,icon:"none"})}});else{try{e.data.err?console.log("短链接转换失败，原因："+e.data.err):(console.log("返回的结果"+e.data.url),i=e.data.url,console.log("短链接转换成功"))}catch(t){console.log("短链接转换失败，原因："+t)}t.setClipboardData({data:i,success:function(){t.hideLoading(),t.showToast({title:"复制链接成功",duration:2e3,icon:"none"})},fail:function(){t.hideLoading(),t.showToast({title:"复制链接失败",duration:2e3,icon:"none"})}})}}})}})}}).call(e,i(2).default)},55:function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isLoadedMovieData?i("block",[i("view",{staticClass:"container"},[t.isOutOfDate?t._e():i("view",{staticClass:"video-style"},[i("video",{staticClass:"video-style-inner",attrs:{id:"myVideo",src:t.src,controls:"",eventid:"xON-0"},on:{error:t.videoErrorCallback}})]),i("view",{staticClass:"info"},[t._v("电影名称："+t._s(t.name))]),i("view",{staticClass:"info"},[t._v("电影简介："+t._s(t.des))]),i("view",{staticClass:"info"},[t._v("更新时间："+t._s(t.updateTime))]),i("view",{staticClass:"info"},[t._v("上映时间："+t._s(t.year))]),i("view",{staticClass:"info"},[t._v("类型："+t._s(t.type))]),i("view",{staticClass:"info"},[t._v("地区："+t._s(t.area))]),i("view",{staticClass:"info"},[t._v("语言："+t._s(t.language))]),t.ads.length>0?i("block",[i("view",{staticClass:"grace-padding"},[i("view",{staticClass:"grace-swiper-msg"},[i("view",{staticClass:"grace-swiper-msg-icon"},[i("image",{attrs:{src:"../../static/laba.png",mode:"widthFix"}})]),i("swiper",{attrs:{vertical:"true",autoplay:"true",circular:"true",interval:"3000"}},t._l(t.ads,function(e,s){return i("swiper-item",{key:e,attrs:{eventid:"T5c-1-"+s,mpcomid:"TYf-0-"+s},on:{tap:function(i){t.clickScrollAd(e)}}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.notify)+"\n\t\t\t\t\t\t\t")])}))],1)])]):t._e(),t.isOutOfDate?t._e():i("view",{staticClass:"info"},[i("button",{staticClass:"color11",attrs:{eventid:"S7y-2"},on:{tap:t.confirmPlayInBroswer}},[t._v("视频很卡？点我！")])],1),t.isOutOfDate?t._e():i("view",{staticClass:"uni-card uni-card-1"},[i("view",{staticClass:"uni-card-header-1"},[t._v("选集：")]),i("view",{staticClass:"uni-card-content uni-card-content-1"},[i("view",{staticClass:"label-list"},t._l(t.movieUrlArr,function(e,s){return i("block",{key:s},[i("view",{staticClass:"uni-label-1",class:{resSelected:t.activeName==e.name},attrs:{eventid:"ko0-3-"+s},on:{tap:function(i){t.updateRes(e)}}},[t._v(t._s(e.name))])])}))])])],1)]):i("block",[i("view",{staticClass:"container2"},[i("text",{staticClass:"loadMore loadMore-center"},[t._v("加载中...")])])])},staticRenderFns:[]};e.a=s}},[51]);