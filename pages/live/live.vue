<template>
	<view class="container">
		<!--<scroll-view scroll-y style="height: 100%;" class="container">-->
		<block v-if="hasInfo==1">
			<block v-for="(item, index) in itemList" :key="index">
				<view class="cell" @tap="loadOneLive(item)">
					<image class="cell-img" mode="aspectFit" style="" :src="item.xinimg" lazy-load="true"></image>
					<view>{{item.title}}</view>
					<view class="cell-online">{{item.Number}}</view>
				</view>
				
			</block>	
		</block>
        <!--</scroll-view>-->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				itemList:[],
				liveApi:"http://api.hclyz.cn:81/mf/json.txt",
				liveApiPre:"http://api.hclyz.cn:81/mf/",
				isPullDownRefresh:false,
				isDisplay:0,
				hasInfo:0
			}
		},
		methods: {
			loadLives(){
				uni.showLoading({
					title:"正在加载"
				});
				this.itemList = [];
				uni.request({
					url: this.liveApi,
					success: (ret) => {
						if(this.isPullDownRefresh){
							uni.stopPullDownRefresh();
						}
						
						if (ret.statusCode !== 200) {
							console.log("请求失败:"+ ret)
							uni.hideLoading();
							uni.showToast({
								title:"请下拉刷新，以便解决问题",
								icon:"none"
							})
						} else {
							try{
								//console.log("进来没："+JSON.stringify(ret.data));
								this.itemList = ret.data.pingtai;
								uni.hideLoading();
							}catch(e){
								//加载失败
								uni.hideLoading();
								uni.showToast({
									title:"加载数据失败，请刷新重试",
									icon:"none"
								})
							}
							
						}
					}
				});
			},
			loadOneLive(item){
				item.address = this.liveApiPre+item.address;
				uni.navigateTo({
					url:"../liveDetails/liveDetails?data="+JSON.stringify(item)
				})
			}
		},
		onLoad: function () {
			console.debug("获取的福利标记："+this.$myMovieApi.hasInfo)
			this.hasInfo = this.$myMovieApi.hasInfo;
			this.isPullDownRefresh = false;
			//加载所有直播app
			this.loadLives();
			this.height = uni.getSystemInfoSync().windowHeight;
			
		},
		onPullDownRefresh() {
			this.isPullDownRefresh = true;
			this.loadLives();
		}
	}
</script>

<style>
	.container{
		 display: flex;
		 flex-wrap:wrap;
		 align-content:flex-start;
	}
	.cell{
		width:236upx;
		/*background-color: #4CD964;*/
		display: flex;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		font-size: 40upx;
		color: #6D6D72;
		height: 280upx;
		align-items:center;
		padding: 0upx;
		margin: 5upx;
		/*border: 1upx solid #FF80AB;*/
		border-radius: 20upx 20upx;
		background-color: #FFFFFF;
	}
	.cell-img{
		/*background-color: #007AFF;*/
		border-radius: 50% 50%;
		height:130upx;
		width:130upx;
		border: 10upx solid rgba(111, 111, 111, 0.1);
		box-shadow: 0 2upx 4upx rgba(0, 0, 0, .3);
		/*background-color: #007AFF*/;
		
	}
	
	.cell-online{
		font-size:30upx;
		border-radius: 30upx;
		color:#FFFFFF;
		background-color: #FF80AB;
		padding-left:25upx ;
		padding-right:25upx ;
	}
	
</style>
