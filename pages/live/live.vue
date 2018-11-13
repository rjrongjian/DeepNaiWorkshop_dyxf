<template>
	<view class="container">
		<!--<scroll-view scroll-y style="height: 100%;" class="container">-->
		<block v-for="(item, index) in itemList" :key="index">
			<view class="cell" @tap="loadOneLive(item)">
				<image class="cell-img" mode="aspectFit" style="width: 230upx;height: 190upx;" :src="item.xinimg" lazy-load="true"></image>
				<view>{{item.title}}</view>
				<view class="cell-online">在线[{{item.Number}}]</view>
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
				liveApi:"http://api.hclyz.cn:81/mf/json.txt",
				liveApiPre:"http://api.hclyz.cn:81/mf/"
			}
		},
		methods: {
			loadLives(){
				uni.request({
					url: this.liveApi,
					success: (ret) => {
						if (ret.statusCode !== 200) {
							console.log("请求失败:", ret)
						} else {
							try{
								//console.log("进来没："+JSON.stringify(ret.data));
								this.itemList = ret.data.pingtai;
							}catch(e){
								//加载失败
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
			//加载所有直播app
			this.loadLives();
			this.height = uni.getSystemInfoSync().windowHeight;
			
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
		width:250upx;
		/*background-color: #4CD964;*/
		display: flex;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		font-size: 40upx;
		color: #6D6D72;
		height: 300upx;
		align-items:center;
		padding: 0upx;
		margin: 0upx;
	}
	.cell-img{
		/*background-color: #007AFF;*/
	}
	
	.cell-online{
		font-size:30upx;
	}
	
</style>
