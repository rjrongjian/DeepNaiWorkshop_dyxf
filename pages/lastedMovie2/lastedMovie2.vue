<template>
	<view class="container">
		<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" class="swiper-box">
            <swiper-item v-for="item in itemList" :key="item" class="swiper-item">
                <text>{{item}}</text>
            </swiper-item>
        </swiper>
		<view class="index movie-list">
			
			<block v-for="(list, index) in lists" :key="index">
				<div class="row row-extra">
					<div class="card card-list2 card-extra" v-for="(item,key) in list" @click="goDetail(item)" :key="key">
						<image class="card-img card-list2-img" :src="item.img_src"></image>
						<div class="card-num-view card-list2-num-view">
							<text class="card-num card-list2-num-1">{{item.img_num}}P</text>
						</div>
						<div class="card-bottm row">
							<div class="car-title-view row">
								<text class="card-title card-list2-title">{{item.title}}</text>
							</div>
							<view @click.stop="share(item)" class="card-share-view"></view>
						</div>
					</div>
				</div>
			</block>
			<text class="loadMore">加载中...</text>
		</view>
		<uni-drawer :visible="rightDrawerVisible" mode="right" @close="closeRightDrawer" >
			<view class="drawer-content">
				<view class="title">电影分类</view>
				
				
				
				
				<view class="uni-list">
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right" @tap="item1">
							Item1哈哈
						</view>
					</view>
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right" @tap="item1">
							Item1哈哈
						</view>
					</view>
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right" @tap="item1">
							Item1哈哈
						</view>
					</view>
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right" @tap="item1">
							Item1哈哈
						</view>
					</view>
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right" @tap="item1">
							Item1哈哈
						</view>
					</view>
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right" @tap="item1">
							Item1哈哈
						</view>
					</view>
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right" @tap="item1">
							Item1哈哈
						</view>
					</view>
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right" @tap="item1">
							Item1哈哈
						</view>
					</view>
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right" @tap="item1">
							Item1哈哈
						</view>
					</view>
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right" @tap="item1">
							Item1哈哈
						</view>
					</view>
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right" @tap="item1">
							Item1哈哈
						</view>
					</view>
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right" @tap="item1">
							Item1哈哈
						</view>
					</view>
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right" @tap="item1">
							Item1哈哈
						</view>
					</view>
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right" @tap="item1">
							Item1哈哈
						</view>
					</view>
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right" @tap="item1">
							Item1哈哈
						</view>
					</view>
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right" @tap="item1">
							Item1哈哈
						</view>
					</view>
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right" @tap="item1">
							Item1哈哈
						</view>
					</view>
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right" @tap="item1">
							Item1哈哈
						</view>
					</view>
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right" @tap="item1">
							Item1哈哈
						</view>
					</view>
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right" @tap="item1">
							Item1哈哈
						</view>
					</view>
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right" @tap="item1">
							Item1哈哈
						</view>
					</view>
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right" @tap="item1">
							Item1哈哈
						</view>
					</view>
					
				</view>
			</view>
		</uni-drawer>
	</view>
	
</template>

<script>
	import uniDrawer from '../../components/uni-drawer.vue';
	import uniIcon from '../../components/uni-icon.vue';
	export default {
		components: {
			uniDrawer,
			uniIcon
		},
		data() {
			return {
				itemList: [
					'item1',
					'item2',
					'item3'
				],
				indicatorDots: false,
				autoplay: false,
				interval: 5000,
				duration: 300,
				refreshing: false,
				lists: [],
				fetchPageNum: 1,
				rightDrawerVisible: false
			}
		},
		onLoad() {
			this.getData();
			uni.getProvider({
				service: "share",
				success: (e) => {
					let data = [];
					for (let i = 0; i < e.provider.length; i++) {
						switch (e.provider[i]) {
							case 'weixin':
								data.push({
									name: '分享到微信好友',
									id: 'weixin'
								})
								data.push({
									name: '分享到微信朋友圈',
									id: 'weixin',
									type: 'WXSenceTimeline'
								})
								break;
							case 'qq':
								data.push({
									name: '分享到QQ',
									id: 'qq'
								})
								break;
							default:
								break;
						}
					}
					this.providerList = data;
				},
				fail: (e) => {
					console.log("获取登录通道失败", e);
				}
			});
		},
		onPullDownRefresh() {
			console.log("下拉刷新");
			this.refreshing = true;
			this.getData();
		},
		onReachBottom() {
			this.getData();
		},
		onNavigationBarButtonTap(e) {
			this.rightDrawerVisible = !this.rightDrawerVisible
		},
		methods: {
			getData() {
				uni.request({
					url: 'https://uniapp.dcloud.io/tuku/posts.php?page=' + (this.refreshing ? 1 : this.fetchPageNum) + '&per_page=10',
					success: (ret) => {
						if (ret.statusCode !== 200) {
							console.log("请求失败:", ret)
						} else {
							if (this.refreshing && ret.data[0].id === this.lists[0][0].id) {
								uni.showToast({
									title: "已经最新",
									icon: "none",
								})
								this.refreshing = false;
								uni.stopPullDownRefresh()
								return;
							}
							let list = [],
								lists = [],
								data = ret.data;
							for (let i = 0, length = data.length; i < length; i++) {
								let index = Math.floor(i / 2);
								list.push(data[i]);
								if (i % 2 == 1) {
									lists.push(list);
									list = [];
								}
							}
							console.log("得到lists", lists);
							if (this.refreshing) {
								this.refreshing = false;
								uni.stopPullDownRefresh()
								this.lists = lists;
								this.fetchPageNum = 2;
							} else {
								this.lists = this.lists.concat(lists);
								this.fetchPageNum += 1;
							}
						}
					}
				});
			},
			goDetail(e) {
				uni.navigateTo({
					url:"../detail/detail?data=" + JSON.stringify(e)
				})
			},
			
			share(e) {
				if (this.providerList.length === 0) {
					uni.showModal({
						title: "当前环境无分享渠道!",
						showCancel: false
					})
					return;
				}
				let itemList = this.providerList.map(function (value) {
					return value.name
				})
				uni.showActionSheet({
					itemList: itemList,
					success: (res) => {
						uni.share({
							provider: this.providerList[res.tapIndex].id,
							scene: this.providerList[res.tapIndex].type && this.providerList[res.tapIndex].type === 'WXSenceTimeline' ? 'WXSenceTimeline' : "WXSceneSession",
							type: 0,
							title:"uni-app模版",
							summary: e.title,
							imageUrl:e.img_src,
							href:"https://uniapp.dcloud.io",
							success: (res) => {
								console.log("success:" + JSON.stringify(res));
							},
							fail: (e) => {
								uni.showModal({
									content: e.errMsg,
									showCancel:false
								})
							}
						});
					}
				})
			},
			closeRightDrawer() {
				this.rightDrawerVisible = false;
			},
			showRightDrawer() {
				this.rightDrawerVisible = true;
			},
			item1() {
				this.rightDrawerVisible = false;
				uni.showToast({
					title: 'item1'
				});
			},
			item2() {
				this.rightDrawerVisible = false;
				uni.showToast({
					title: 'item2'
				});
			},
			getTodayMovies:function(){
				
			},
			getMoviesBy:function(apiUrl){
				
			}
		}
	}
</script>

<style>
	.swiper-box{
		background-color: #4CD964;
	}
	.container{
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		height: 100%;
		width: 100%;
	}
	.swiper-item {
		display: block;
		height: 300px;
		text-align: center;
		/*background-color: #007AFF;*/
	}
	.color1{
		background-color: #FF0000;/*红色*/
	}
	.color2{
		background-color: #8A6DE9;/*浅紫色*/
	}
	.movie-list{
		padding: 0px 0px;
		margin-top: 10px;
	}
	
	
	/*drawer单独样式*/
	.uni-list {
		margin-top: 15px;
	}

	.drawer-content {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		padding: 15px;
		flex: 1;
		background-color: #2782D7;
		overflow: scroll;
		
	}

	.drawer-content>.title {
		font-size: 18px;
	}

	.drawer-content>.text {
		font-size: 15px;
	}

	.drawer-content>.button {
		font-size: 14px;
	}
	/*drawer单独样式结束*/
	
	.row-extra{
		display: flex;
		justify-content:center;
		/*background-color: #007AFF;*/
		
	}
	.card-extra{
		/*background-color: #8A6DE9;*/
		padding-left: 0px;
		margin-left: 10px;
		margin-right: 10px;
		margin-top: 5px;
	}
	.card-list2-num-view {
		height: 27px;
		border-radius: 8px;
		padding-bottom: 5px;
		/*background-color: #86E65A;*/ /*右上角的颜色*/
	}

</style>
