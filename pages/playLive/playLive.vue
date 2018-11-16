<template>
	
	<block v-if="isLoadedMovieData">
		<view class="container">
			 
				<view v-if="!isOutOfDate" class="video-style">
					<video v-if="srcTemp" direction="-90" id="myVideo" :src="srcTemp" @error="videoErrorCallback" controls class="video-style-inner" ></video>
				</view>
				
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
					url: '../login/login?data='+e.data+"&type=1"
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
				console.debug("要播放的资源啊："+e.data)
				//let data = JSON.parse(e.data);
				this.srcTemp = e.data;
				console.log("替换前："+this.srcTemp);
				this.srcTemp = this.srcTemp.replace(/\"/g, "");
				console.log("替换后："+this.srcTemp);
				let titleTemp2 = e.title;
				titleTemp2 = titleTemp2.replace(/\"/g, "");
				uni.setNavigationBarTitle({
					title:titleTemp2
				})
				this.isLoadedMovieData = true;
			}
			
			
		},
		data() {
			
			return {
				isLoadedMovieData:false,
				srcTemp: '',
				
				isOutOfDate:false ,//会员是否到期,
				ads:[]
			}
		},
		computed: mapState(['hasLogin', 'username', 'statusCode','expireTime']),
		methods:{
			...mapMutations(['syncLocalStoreToMemory','clearMemory']),
			videoErrorCallback:function(res1){
				/*
				console.log("视频播放错误，原因："+JSON.stringify(res1));
				uni.showModal({
					title: "主播已下播",
					content: "主播已下播",
					showCancel: false,
					confirmText: "确定",
					fail:function(res){
						console.log("播放视频出错，原因："+JSON.stringify(res));
					}
				});
				*/
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
			}
			
		}
	}
</script>

<style>
	view{
		display: flex;
		background-color: #000000;
	}
	.container{
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		width: 100%;
		height:1210upx;
		background-color: #000000;
		
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
		
		height:1100upx;
		/*background-color: #007AFF;*/
	}
	
	.video-style-inner{
		/*flex: 1;*/
		height:1100upx;
		width:750upx;
		
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
	.notify-cell{
		font-size:38upx;
		color: #007AFF;
		text-align: center;
	}
	
	.grace-padding{padding:2%; width:96%;color:#FFB8B8;}
	/*view{display:flex; flex-wrap:wrap; font-size:28upx; height:auto; width:100%;}*/
	.grace-swiper-msg{width:100%; padding:12rpx 0; flex-wrap:nowrap;}
	.grace-swiper-msg-icon{width:50upx; margin-right:20upx;}
	.grace-swiper-msg-icon image{width:100%; flex-shrink:0;}
	.grace-swiper-msg swiper{width:100%; height:50upx;}
	.grace-swiper-msg swiper-item{line-height:50upx;}
</style>
