<template>
	
	<block v-if="isLoadedMovieData">
		<view class="container">
			
				<view v-if="!isOutOfDate" class="video-style">
					<video id="myVideo" :src="src" @error="videoErrorCallback" controls class="video-style-inner" ></video>
				</view>
				<view class="info">电影名称：{{name}}</view>
				<view class="info">电影简介：{{des}}</view>
				<view class="info">更新时间：{{updateTime}}</view>
				<view class="info">上映时间：{{year}}</view>
				
				<view class="info">类型：{{type}}</view>
				<view class="info">地区：{{area}}</view>
				<view class="info">语言：{{language}}</view>
				<block v-if="ads.length>0">
					<view class="grace-padding">
						<view class="grace-swiper-msg">
							<view class="grace-swiper-msg-icon">
								<image src="../../static/laba.png" mode="widthFix"></image>
							</view>
							
							<swiper vertical="true" autoplay="true" circular="true" interval="3000">
								<swiper-item v-for="item in ads" :key="item" @tap="clickScrollAd(item)">
									{{item.notify}}
								</swiper-item>
							</swiper>
							
						</view>
					</view>
				</block>
				<view v-if="!isOutOfDate" class="info">
					<button @tap="confirmPlayInBroswer" class="color11">视频很卡？点我！</button>
				</view>
				<!--//由于video组件同一个资源，用不同的协议http和https切换会报错，所以屏蔽此功能-->
				<!--
				<view class="info">
					<view>资源线路：</view>
					<radio-group class="radio-group" @change="radioChange">
						<label class="radio" v-for="item in items" :key="item">
							<radio :value="item.value" :checked="item.checked" class="radio-color" color="#24D197"/>{{item.name}}
						</label>
					</radio-group>
					
				</view>
				-->
				
				
				<view v-if="!isOutOfDate" class="uni-card uni-card-1">
					
					<view class="uni-card-header-1">选集：</view>
					<view class="uni-card-content uni-card-content-1">
						<view class="label-list">
							<block v-for="(movieUrl,index) in movieUrlArr" :key="index">
								<view class="uni-label-1" :class="{resSelected: activeName == movieUrl.name}" @tap="updateRes(movieUrl)">{{movieUrl.name}}</view>
								
							</block>
							
							
						</view>
					</view>
					
				</view>
				<!--
				<view class="info label-list">
					<view class="uni-label uni-active">第一集</view>
					<view class="uni-label">第二集</view>
					<view class="uni-label">第三集</view>
					<view class="uni-label">第四集</view>
					<view class="uni-label">第五集</view>
					<view class="uni-label">第六集</view>
					<view class="uni-label">第七集</view>
					<view class="uni-label">第八集</view>
					<view class="uni-label">第九集</view>
					<view class="uni-label">第十集</view>
					<view class="uni-label">第十一集</view>
					<view class="uni-label">第十二集</view>
					<view class="uni-label">第十三集</view>
					<view class="uni-label">第十四集</view>
					<view class="uni-label">第十五集</view>
				</view>
				-->
		</view>
	</block>
	<block v-else>
		<view class="container2">
			
			<text  class="loadMore loadMore-center">加载中...</text>
			
		</view>
			
	</block>
	
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		onLoad:function(e){
			this.ads = this.$myMovieApi.detailAds;
			
			if (this.$myYiYouApi.userStatus != 1) {
			
				let notify = this.$myYiYouApi.yiYouErrInfo[this.$myYiYouApi.userStatus];
				let goLoginPageTemp = this.goLoginPage;
				uni.showToast({
					title:notify,
					icon:"none"
				})
				//初始化本地存储
				this.$myLocalStore.clearLocalStore();
				//初始化内存存储
				this.clearMemory();
			}
			
			
			
			
			//在详情页面跳登录页面
			if(!this.hasLogin){
				uni.redirectTo({
					url: '../login/login?data='+e.data+"&type=2"
				})
			}else{
				//校验会员是否过期，目前不直接调用易游接口
				let expireTimeTemp = this.expireTime;
				
				let expireDate = this.$myDateUtils.dateUtils.parse(expireTimeTemp);
				let expireTimes = expireDate.getTime();//过期毫秒数
				console.log("会员过期时间："+expireTimeTemp+"，毫秒数："+expireTimes);
				let currentTime = new Date();
				currentTime = currentTime.getTime();
				let sysTime = 0;//当前系统时间
				
				uni.request({
					url: 'http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp',
					success: (ret) => {
						if (ret.statusCode !== 200) {//获取系统时间失败，用本地时间
							console.log("请求失败:", ret)
							sysTime = currentTime;
						} else {
							let result = ret.data;
							try{
								
								if(result.ret.indexOf("SUCCESS")!=-1){//获取时间成功
									console.log("接口返回的时间戳："+result.data.t);
									sysTime = result.data.t;
								}else{//获取系统时间失败，用本地时间
									sysTime = currentTime;
								}
							}catch(e){//获取系统时间失败，用本地时间
								console.log("获取当前时间失败："+e);
								sysTime = currentTime;
							}
						}
						console.debug("会员到期时间："+expireTimes+",系统时间："+sysTime);
						if(expireTimes<sysTime){//说明会员到期
						
							this.isOutOfDate = true;
							console.debug("会员到期");
							uni.showModal({
								title: "温馨提示",
								content: "您的会员已到期，请到个人中心进行充值",
								showCancel: false,
								confirmText: "我知道了",
								fail:function(res){
									console.log("弹窗出错");
								}
							});
						}else{
							this.isOutOfDate = false;
							console.debug("会员未到期");
						}
					}
				});
				
				this.currentSelectedHttpOrHttps = this.$myMovieApi.currentSelectedHttpOrHttps;
				//获取传进来的电影详情
				//this.des = e.data;
				//console.log("获取的电影详细信息："+e.data);
				
				let data = JSON.parse(e.data);
				this.movieId = data.id;
				this.updateTime = data.updateTime;
				this.name = data.name;
				this.type = data.type;
				this.pic = data.pic;
				this.language = data.language;
				this.area = data.area;
				this.year = data.year;
				this.note = data.note;
				this.actor = data.actor;
				this.director = data.director;
				this.des = data.des;
				var resUrls = data.resUrl[this.$myMovieApi.m3u8OrOtherRes];
				var resUrlArr = resUrls.split("#");
				if(resUrlArr){
					for(var i = 0;i<resUrlArr.length;i++){
						
						var resUrl = resUrlArr[i].split("$");
						if(resUrl.length==3){
							this.movieUrlArr.push({"name":resUrl[0],"url":resUrl[1],"m3u8Or":resUrl[2]});
						}else{
							this.movieUrlArr.push({"name":resUrl[0],"url":resUrl[1]});
						}
						
					}
				}
				//默认选中第一个
				if(this.movieUrlArr.length>0){
					this.activeName = this.movieUrlArr[0].name;
					this.updateRes(this.movieUrlArr[0]);
					this.isLoadedMovieData = true;
					this.movieUrlInfo = this.movieUrlArr[0];
					//this.urlInWeb = this.$myMovieApi.jxParserUrl+this.movieUrlInfo.url;
					//console.log("在网页中的播放地址："+this.urlInWeb);
				}else{
					uni.showToast({
						title: "加载资源失败，请返回列表后重新进入",
						duration: 2000,
						icon:'none'
					});
				}
				//console.log("获取的数据："+resUrls);
				//this.movieUrlArr:[]
			}
			
			
		},
		data() {
			
			return {
				isLoadedMovieData:false,
				src: '',
				//由于video组件同一个资源，用不同的协议http和https切换会报错，所以屏蔽此功能
				/*
				items: [{
					name: '线路一',
					value: 'http',
					checked: 'true'
				},
				{
					name: '线路二',
					value: 'https'
				}],
				*/
			   //由于video组件同一个资源，用不同的协议http和https切换会报错，所以屏蔽此功能
				//currentSelectedHttpOrHttps:"http", //使用哪种协议的资源 默认选中的那个协议
				currentSelectedHttpOrHttps:null,
				httpOrHttps:{//替换值
					"http://":"https://",
					"https://":"http://"
				},
				movieId:0,
				updateTime:"",
				name:"",
				type:"",
				pic:"",
				language:"",
				area:"",
				year:"",
				note:"",
				actor:"",
				director:"",
				des:"",
				movieUrlArr:[],
				activeName:"",
				movieUrlInfo:{},
				urlInWeb:"",//在网页中播放地址
				isOutOfDate:false ,//会员是否到期,
				ads:[]
			}
		},
		computed: mapState(['hasLogin', 'username', 'statusCode','expireTime']),
		methods:{
			...mapMutations(['syncLocalStoreToMemory','clearMemory']),
			videoErrorCallback:function(res1){
				
				console.log("视频播放错误，原因："+JSON.stringify(res1));
				uni.showModal({
					title: "不能正常播放说明",
					content: "新更新的资源需要转码，大约1小时，请稍候观看，如有其他问题（"+res1.target.errMsg+"），请加群,"+((this.$myMovieApi.qqQun)? ("群名："+this.$myMovieApi.qqQun.qunName+",群号："+this.$myMovieApi.qqQun.qunNum):""),
					showCancel: false,
					confirmText: "确定",
					fail:function(res){
						console.log("播放视频出错，原因："+JSON.stringify(res));
					}
				});
			},
			//由于video组件同一个资源，用不同的协议http和https切换会报错，所以屏蔽此功能
			/*
			radioChange: function (e) {
				//console.log('radio发生change事件，携带value值为：' + e.detail.value)
				this.currentSelectedHttpOrHttps = e.detail.value
				//this.updateRes(this.movieUrlInfo);
				
			},*/
			updateRes:function(movieUrl){
				this.activeName = movieUrl.name;
				var finalUrl = movieUrl.url;
				if(this.currentSelectedHttpOrHttps){
					if(!movieUrl.url.startsWith(this.currentSelectedHttpOrHttps+"://")){//不以指定的协议开头，更换
						var replaceBefore = this.httpOrHttps[this.currentSelectedHttpOrHttps+"://"];
						var replaceAfter = this.currentSelectedHttpOrHttps+"://";
						finalUrl = replaceAfter+movieUrl.url.substring(replaceBefore.length);
						
					}
					console.log("当前选中协议："+this.currentSelectedHttpOrHttps+"替换后的链接："+finalUrl);
				}else{
					console.log("不更改资源本身的http或者https:"+finalUrl);
				}
				
				this.src = finalUrl;
				this.movieUrlInfo.url = finalUrl;
				//this.urlInWeb = this.$myMovieApi.jxParserUrl+finalUrl;
				//console.log("在网页中的播放地址："+this.urlInWeb);
				return finalUrl;
			},
			confirmPlayInBroswer(){
				let playInWebViewTemp = this.playInWebView;
				console.debug("准备使用的解析接口："+this.$myMovieApi.jxParserUrlForHttp);
				console.debug("准备使用的解析接口："+this.$myMovieApi.jxParserUrlForHttps);
				let videoUrl = this.$myMovieApi.jxM3U8(this.$myMovieApi.jxParserUrlForHttp,this.$myMovieApi.jxParserUrlForHttps,this.src);
				uni.showModal({
						title: '说明',
						content: '通过解析接口对数据做了一次处理，“确定”将跳转到“浏览器”观看当前选中链接！！',
						success: function (res) {
								if (res.confirm) {
									//需要用户手动跳转浏览器复制
										/*playInWebViewTemp();*/
									//直接跳网页
										plus.runtime.openURL(videoUrl);
										
								} else if (res.cancel) {
										console.log('用户点击取消');
								}
						}
				});
			},
			clickScrollAd(item){
				console.log(item.openType+","+item.url+","+item.imgUrl);
				if(item.openType==1){//webview打开
					plus.runtime.openWeb(item.url);
				}
				
				if(item.openType==2){//自带浏览器打开
					plus.runtime.openURL(item.url);
				}
				
				if(item.openType==3){//native打开
					if("lingquansonghuiyuan"==item.url){
						//console.log("进来了准备跳转")
						//uni.reLaunch("../activity/lingquansonghuiyuan/lingquansonghuiyuan");
						uni.navigateTo({
							url:"../activity/lingquansonghuiyuan/lingquansonghuiyuan"
						})
					}
				}
			},
			playInWebView(){
				console.log("在网页中播放");
				/*
				uni.navigateTo({
					url:"../webView/webView"
				})
				*/
				//显示加载提示框
				uni.showLoading();
				//先利用suo.im生成短链接
				console.debug("准备使用的解析接口："+this.$myMovieApi.jxParserUrlForHttp);
				console.debug("准备使用的解析接口："+this.$myMovieApi.jxParserUrlForHttps);
				let playUrl = this.$myMovieApi.jxM3U8(this.$myMovieApi.jxParserUrlForHttp,this.$myMovieApi.jxParserUrlForHttps,this.src);
				let duanUrl = playUrl;
				uni.request({
									url: "http://suo.im/api.php?format=json&url="+playUrl,
									//method:'POST',
									//header:{
									//	'content-type':'application/json; charset=UTF-8'
									//},
									//data:{
										//return {
									//	'url': playUrl
										//}
									//},
									success: (ret) => {
										
										if (ret.statusCode !== 200) {
											console.log("短链接口返回的http code不为200");
											
											
											
											uni.setClipboardData({
													data: duanUrl,
													success: function () {
															//隐藏加载提示框
															uni.hideLoading();
															uni.showToast({
																title: "复制链接成功",
																duration: 2000,
																icon:'none'
															});
													},
													fail:function(){
														//隐藏加载提示框
														uni.hideLoading();
														uni.showToast({
															title: "复制链接失败",
															duration: 2000,
															icon:'none'
														});
													}
											});
				
										} else {
											try{
													//console.log("获取转链后的数据："+ret.data);
													//let jsonObj = JSON.parse(ret.data);
													//let jsonObj = ret.data;
													if(!ret.data.err){
														console.log("返回的结果"+ret.data.url);
														duanUrl = ret.data.url;
														console.log("短链接转换成功");
													}else{
														console.log("短链接转换失败，原因："+ret.data.err);
													}
													
											}catch(e){//转短链失败，直接返回长链
												console.log("短链接转换失败，原因："+e);
											}	
											
											
											
											uni.setClipboardData({
													data: duanUrl,
													success: function () {
														//隐藏加载提示框
														uni.hideLoading();
														uni.showToast({
															title: "复制链接成功",
															duration: 2000,
															icon:'none'
														});
													},
													fail:function(){
														//隐藏加载提示框
														uni.hideLoading();
														uni.showToast({
															title: "复制链接失败",
															duration: 2000,
															icon:'none'
														});
													}
											});	
										}
									}
								});
			}
		}
	}
</script>

<style>
	view{
		display: flex;
	}
	.container{
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		width: 100%;

	}
	.container2{
		display: flex;
		/*flex-direction: row;*/
		/*flex-wrap: wrap;*/
		justify-content: center;
		width: 100%;
		
	}
	.video-style{
		display: flex;
		width:100%;
		/*height: 450px;
		background-color: #007AFF;*/
	}
	
	.video-style-inner{
		flex: 1;
	}
	
	.loadMore-center{
		/*background-color: #4CD964;*/
		
	}
	
	.info{
		color: #555;
		padding: 10upx 20upx 0upx 20upx;
		font-size: 28px;
		/*background-color: #4CD964;*/
	}
	
	.label-list{
		display: flex;
		flex-direction: row;
		justify-content:center;
		flex-wrap: wrap;
		
	}
	.uni-card-1{
		display:flex;
		flex-direction: column;
		flex-wrap: wrap;
	}
	
	.uni-label-1 {
		/*width: 210px;*/
		word-wrap: break-word;
		word-break: break-all;
		border: 1px solid #555;
		color: #555;
		border-radius: 10px;
		padding: 10px 15px;
		margin: 10px;
		font-size: 28px;
		
	}
	.resSelected{
		color: #FFFFFF;
		background-color: #24D197;
		border: 1px solid #FFFFFF;
	}
	
	.uni-card-header-1 {
		position: relative;
		display: flex;
		min-height: 50px;
		padding: 10px 10px;
		justify-content: space-between;
		align-items: center;
		color: #555;
		border-bottom: 1px solid #555;
	}
	
	.uni-card-content-1{
		padding-top: 10px;
		padding-bottom: 10px;
	}
	.radio-color{
		color:#24D197;
	}
	
	.color11{
		color:#007AFF;
	}
	
	
	.grace-padding{padding:2%; width:96%;color:#FFB8B8;}
	/*view{display:flex; flex-wrap:wrap; font-size:28upx; height:auto; width:100%;}*/
	.grace-swiper-msg{width:100%; padding:12rpx 0; flex-wrap:nowrap;}
	.grace-swiper-msg-icon{width:50upx; margin-right:20upx;}
	.grace-swiper-msg-icon image{width:100%; flex-shrink:0;}
	.grace-swiper-msg swiper{width:100%; height:50upx;}
	.grace-swiper-msg swiper-item{line-height:50upx;}
</style>
