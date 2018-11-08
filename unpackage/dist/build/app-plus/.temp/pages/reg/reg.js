require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([7],{67:function(t,e,a){"use strict";var i=s(a(1)),o=s(a(68));function s(t){return t&&t.__esModule?t:{default:t}}new i.default(o.default).$mount()},68:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(70),o=a.n(i),s=a(71);var n=function(t){a(69)},r=a(0)(o.a,s.a,n,null,null);e.default=r.exports},69:function(t,e){},70:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{account:"",password:"",email:""}},methods:{register:function(){var e=this;if(this.account.length<5)t.showToast({icon:"none",title:"账号最短为 5 个字符"});else if(this.password.length<6)t.showToast({icon:"none",title:"密码最短为 6 个字符"});else if(this.email.length<3||!~this.email.indexOf("@"))t.showToast({icon:"none",title:"邮箱地址不合法"});else{t.showLoading();var a=this.$myYiYouApi.yiYouApiUrl.UserRegin[this.$myYiYouApi.yiYouApiSelected];console.log("获取的注册接口地址："+a),t.request({url:a,method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{UserName:this.account,UserPwd:this.password,Email:this.email,Mac:""},success:function(a){if(200!==a.statusCode)t.hideLoading(),t.showModal({title:"温馨提示",content:"注册失败["+a.statusCode+"]，请加QQ群联系群主",showCancel:!1,confirmText:"确定"});else if("1"==a.data)t.hideLoading(),t.showToast({title:"注册成功",duration:2e3}),setTimeout(function(){t.navigateBack({delta:1})},1200);else{var i="";a.data&&((i=e.$myYiYouApi.yiYouErrInfo[a.data])||(i="未知错误")),console.log("获取的错误信息["+a.data+"]:"+i),t.hideLoading(),t.showToast({title:i,duration:2e3,icon:"none"})}}})}}}}}).call(e,a(2).default)},71:function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("view",{staticClass:"input-group"},[a("view",{staticClass:"input-row border"},[a("text",{staticClass:"title"},[t._v("账号：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{type:"text",placeholder:"必须以字母开头6-16位字母或数字",eventid:"MZE-0"},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}})]),a("view",{staticClass:"input-row border"},[a("text",{staticClass:"title"},[t._v("密码：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"text",password:"true",placeholder:"密码最短为6个字符",eventid:"Vuv-1"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("view",{staticClass:"input-row"},[a("text",{staticClass:"title"},[t._v("邮箱：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"请输入邮箱",eventid:"AuE-2"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),a("view",{staticClass:"btn-row-1"},[a("button",{staticClass:"primary",attrs:{type:"primary",eventid:"Yn3-3"},on:{tap:t.register}},[t._v("注册")])],1)])},staticRenderFns:[]};e.a=i}},[67]);