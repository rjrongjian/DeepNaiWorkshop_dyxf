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
				
			};
		},
		onLoad(e){
			console.debug("传进来的数据："+e.data);
			let data = JSON.parse(e.data);
			this.loadLives(data);
		},
		methods:{
			loadLives(item){
				uni.request({
					url: item.address,
					success: (ret) => {
						if (ret.statusCode !== 200) {
							console.log("请求失败:", ret)
						} else {
							try{
								console.log("获取的所有主播："+JSON.stringify(ret.data));
								//this.itemList = ret.data.zhubo;
								for(let i = 0;i<ret.data.zhubo.length;i++){
									ret.data.zhubo[i].title = this.parseTitle(ret.data.zhubo[i].title);
									//console.log("转化前："+ret.data.zhubo[i].title+"标题转化后的结果："+uni.URLUnencoded(ret.data.zhubo[i].title));
									
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
				uni.navigateTo({
					url:"../playLive/playLive?data="+JSON.stringify(item.address)
				})
			},
			parseTitle(title){
				
				return title.replace(/%20/g, " ").replace(/%21/g, "!").replace(/%23/g, "#").replace(/%24/g, "$").replace(/%25/g, "%").replace(/%2B/g, "+").replace(/%40/g, "@").replace(/%3A/g, ":").replace(/%3D/g, "=").replace(/%3F/g, "?");
			}
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
		width:248upx;
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
