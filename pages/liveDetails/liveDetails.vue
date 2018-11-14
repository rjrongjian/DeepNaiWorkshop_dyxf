<template>
	<view class="container">
		<!--<scroll-view scroll-y style="height: 100%;" class="container">-->
		<block v-for="(item, index) in itemList" :key="index">
			<view class="cell" @tap="playLive(item)">
				<image class="cell-img" mode="aspectFit" style="width: 200upx;height: 100upx;" :src="item.img" lazy-load="true"></image>
				<view>{{item.title}}</view>
				
			</view>
			
		</block>	
		<!--</scroll-view>-->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				itemList:[],
				isPullDownRefresh:false,
				param:""
			};
		},
		onLoad(e){
			//console.debug("传进来的数据："+e.data);
			this.isPullDownRefresh = false;
			let data = JSON.parse(e.data);
			this.param = data;
			this.loadLives(data);
		},
		methods:{
			loadLives(item){
				uni.showLoading({
					title:"正在加载"
				});
				this.itemList = [];
				//let ua = this.$myDateUtils.myUserAgent.getRandomUserAgent();
				//console.debug("获取的ua："+ua);
				uni.request({
					url: item.address,
					header: {
						//'User-Agent': ua //自定义请求头信息
					},
					success: (ret) => {
						if(this.isPullDownRefresh){
							uni.stopPullDownRefresh();
						}
						uni.hideLoading();
						if (ret.statusCode !== 200) {
							console.log("请求失败:"+ ret);
							uni.showToast({
								title:"限制抓取，请稍后重试",
								icon:"none"
							})
						} else {
							try{
								//console.log("获取的所有主播："+JSON.stringify(ret.data));
								//this.itemList = ret.data.zhubo;
								for(let i = 0;i<ret.data.zhubo.length;i++){
									//console.log("转化前："+ret.data.zhubo[i].title);
									ret.data.zhubo[i].title = this.parseTitle(ret.data.zhubo[i].title);
									//console.log("标题转化后的结果："+ret.data.zhubo[i].title);
									
								}
								this.itemList = ret.data.zhubo;
							}catch(e){
								//加载失败
							}
							
						}
					}
				});
			},
			playLive(item){
				console.debug("进来了"+item.address);
				/*
				uni.reLaunch({
					url:"../onlineTV/onlineTV?data="+JSON.stringify(item.address)
				})*/
				
				uni.navigateTo({
					url:"../playLive/playLive?data="+JSON.stringify(item.address)
				})
				/*
			   uni.reLaunch({
			   	url:"../playLive/playLive?data="+JSON.stringify(item.address)
			   })
			   
			  uni.redirectTo({
			  	url:"../playLive/playLive?data="+JSON.stringify(item.address)
			  })
			  */
			},
			parseTitle(title){
				
				//return title.replace(/%20/g, " ").replace(/%21/g, "!").replace(/%23/g, "#").replace(/%24/g, "$").replace(/%25/g, "%").replace(/%2B/g, "+").replace(/%40/g, "@").replace(/%3A/g, ":").replace(/%3D/g, "=").replace(/%3F/g, "?");
				try{
					return decodeURIComponent(title);
				}catch(e){
					console.debug("不能转化的标题："+title);
					return title;
				}
				
			}
		},
		onPullDownRefresh() {
			this.isPullDownRefresh = true;
			this.loadLives(this.param);
		}
	}
</script>

<style>
	.container{
		 display: flex;
		 flex-wrap:wrap;
		 align-content:
	}
	.cell{
		width:241upx;
		/*background-color: #4CD964;*/
		display: flex;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		font-size: 40upx;
		color: #6D6D72;
		height: 250upx;
		align-items:center;
		padding: 0upx;
		margin: 0upx;
		border: 1upx #D9D9D9 solid;
	}
	.cell-img{
		/*background-color: #007AFF;*/
	}
	
	.cell-online{
		font-size:30upx;
	}
</style>
