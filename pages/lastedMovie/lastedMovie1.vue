<template>
	<view class="index">
		<!--
		<scroll-view id="tab-bar" class="swiper-tab" scroll-x :scroll-left="scrollLeft">
			<block v-for="(tab,index) in tabs" :key="tab.id">
				<view :class="['swiper-tab-list',currentTab==index ? 'on' : '']" :id="tab.id" :data-current="index" @tap="swichNav">{{tab.name}}</view>
			</block>
		</scroll-view>
		-->
		
		<swiper :current="currentTab" class="swiper-box" duration="300" @change="bindChange">
			
					<view class="product-list">
						
							<!--<scroll-view class="index-bd">-->
							<view v-for="(movieInfo,index) in movieList" :key="index" class="product">
								<!--<view class="product">-->
									<image class="product-image" :src="movieInfo.image ? movieInfo.image : 'http://via.placeholder.com/150x200'"></image>
									<view class="product-title">{{movieInfo.title}}</view>
									
									<view class="product-price">
										<text class="product-price-favour">￥{{movieInfo.originalPrice}}</text>
										<text class="product-price-original">￥{{movieInfo.favourPrice}}</text>
										<text class="product-tip">{{movieInfo.tip}}</text>
									</view>
									
								<!--</view>-->
							</view>
						
					</view>
				
		</swiper>
		<!--
		<view class="product-list">
		
			<view v-for="(movieInfo,index) in movieList" :key="index">
				<view class="product">
					<image class="product-image" :src="movieInfo.image ? movieInfo.image : 'http://via.placeholder.com/150x200'"></image>
					<view class="product-title">{{movieInfo.title}}</view>
					<view class="product-price">
						<text class="product-price-favour">￥{{movieInfo.originalPrice}}</text>
						<text class="product-price-original">￥{{movieInfo.favourPrice}}</text>
						<text class="product-tip">{{movieInfo.tip}}</text>
					</view>
				</view>
			</view>
		</view>
		-->
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'tabbar',
				scrollLeft: 0,
				isClickChange: false,
				currentTab: 0,
				tabs: [],
				newsitems: [],
				movieList1:[{
								image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
								title: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',
								originalPrice: 9999,
								favourPrice: 8888,
								tip: '自营'
							}],
				movieList:[{
							  image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
							  title: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',
							  originalPrice: 9999,
							  favourPrice: 8888,
							  tip: '自营'
							}, {
							  image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
							  title: 'Apple iPad 平板电脑 2018年新款9.7英寸',
							  originalPrice: 3499,
							  favourPrice: 3399,
							  tip: '优惠'
							},{
							  image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
							  title: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',
							  originalPrice: 9999,
							  favourPrice: 8888,
							  tip: '自营'
							}, {
							  image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
							  title: 'Apple iPad 平板电脑 2018年新款9.7英寸',
							  originalPrice: 3499,
							  favourPrice: 3399,
							  tip: '优惠'
							},
							{
										image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
										title: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',
										originalPrice: 9999,
										favourPrice: 8888,
										tip: '自营'
										}, {
										image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
										title: 'Apple iPad 平板电脑 2018年新款9.7英寸',
										originalPrice: 3499,
										favourPrice: 3399,
										tip: '优惠'
										},{
							  image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
							  title: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',
							  originalPrice: 9999,
							  favourPrice: 8888,
							  tip: '自营'
							}, {
							  image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
							  title: 'Apple iPad 平板电脑 2018年新款9.7英寸',
							  originalPrice: 3499,
							  favourPrice: 3399,
							  tip: '优惠'
							},{
							  image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
							  title: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',
							  originalPrice: 9999,
							  favourPrice: 8888,
							  tip: '自营'
							}, {
							  image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
							  title: 'Apple iPad 平板电脑 2018年新款9.7英寸',
							  originalPrice: 3499,
							  favourPrice: 3399,
							  tip: '优惠'
							},{
							  image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
							  title: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',
							  originalPrice: 9999,
							  favourPrice: 8888,
							  tip: '自营'
							}, {
							  image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
							  title: 'Apple iPad 平板电脑 2018年新款9.7英寸',
							  originalPrice: 3499,
							  favourPrice: 3399,
							  tip: '优惠'
							},{
							  image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
							  title: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',
							  originalPrice: 9999,
							  favourPrice: 8888,
							  tip: '自营'
							}, {
							  image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
							  title: 'Apple iPad 平板电脑 2018年新款9.7英寸',
							  originalPrice: 3499,
							  favourPrice: 3399,
							  tip: '优惠'
							}]
			}
		},
		onLoad: function () {
			//加载电影分类
			this.getMovieCat();
			
			
			this.newsitems = this.randomfn()
		},
		onUnload:function(){
			this.scrollLeft = 0,
				this.isClickChange = false,
				this.currentTab = 0;
		},
		methods: {
			bindChange: async function (e) {
				let index = e.target.current;
				if (this.isClickChange) {
					this.currentTab = index;
					this.isClickChange = false;
					return;
				}
				let tabBar = await this.getWidth("tab-bar"),
					tabBarScrollLeft = tabBar.scrollLeft;

				let width = 0;

				for (let i = 0; i < index; i++) {
					let result = await this.getWidth(this.tabs[i].id);
					width += result.width;
				}

				let winWidth = uni.getSystemInfoSync().windowWidth,
					nowElement = await this.getWidth(this.tabs[index].id),
					nowWidth = nowElement.width;

				if (width + nowWidth - tabBarScrollLeft > winWidth) {
					this.scrollLeft = width + nowWidth - winWidth;
				}
				if (width < tabBarScrollLeft) {
					this.scrollLeft = width;
				}
				this.isClickChange = false;
				this.currentTab = index; //一旦访问data就会出问题
			},
			getWidth: function (id) { //得到元素的宽高
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						if (id === 'tab-bar') {
							console.log("id=", id, "数据:", data)
						}
						res(data);
					}).exec();
				})
			},
			swichNav: async function (e) { //点击tab-bar
				if (this.currentTab === e.target.dataset.current) {
					return false;
				} else {
					let tabBar = await this.getWidth("tab-bar"),
						tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
					this.scrollLeft = tabBarScrollLeft;
					this.isClickChange = true;
					this.currentTab = e.target.dataset.current
				}
			},
			loadMore: function (e) {
				let last = this.newsitems[e][this.newsitems[e].length - 1].label,
					name = this.newsitems[e][this.newsitems[e].length - 1].name;
				for (let i = 1; i <= 10; i++) {
					this.newsitems[e].push({
						name: name,
						label: i + last
					});
				}
			},
			randomfn() {
				let ary = [];
				for (let i = 0, length = this.tabs.length; i < length; i++) {
					let aryItem = [];
					for (let j = 1; j <= 20; j++) {
						aryItem.push({
							name: this.tabs[i].name,
							label: j
						});
					}
					ary.push(aryItem);
				}
				return ary;
			},
			getMovieCat:function(){//获取电影分类,
				try{
					var movieApiConfig = this.$myMovieApi.getMovieApi();
					if(movieApiConfig){
						var movieTypeApiUrl = movieApiConfig['movieTypeApi'];
						uni.request({
							url: movieTypeApiUrl,
							success: (ret) => {
								if (ret.statusCode !== 200) {
									console.log("获取电影分类失败", ret)
								} else {
									console.log("获取的电影分类数据："+ret.data);
									//解析xml数据
									var jsonObj = this.$myXml2Json.xml_str2json(ret.data);
									var allCatArr = this.$myXml2Json.asArray(jsonObj.rss.class.ty);
									console.log("解析出的class"+allCatArr[0]);
									let tabsTemp = [];
									for(var i = 0;i<allCatArr.length;i++){
										if(!this.$myMovieApi.isShieldingCatId(allCatArr[i]._id)){
											var movieJson = {name:allCatArr[i].__text,id:allCatArr[i]._id};
											tabsTemp.push(movieJson);
										}
										
									}
									this.tabs = tabsTemp;
								}
							}
						});
					}else{
						console.log("加载电影分类失败");
					}
				}catch(e){
					console.log("加载电影分类出现异常",e);
				}
				
			}
		}
	}
</script>

<style>
	page {
		display: flex;
	}

	.index {
		display: flex;
		flex: 1;
		flex-direction: column;
		/*overflow: hidden;*/
		height: 100%;
	}

	

	.swiper-tab {
		width: 100%;
		white-space: nowrap;
		line-height: 64px;
		height: 64px;
	}


	.swiper-tab-list {
		font-size: 30px;
		width: 150px;
		display: inline-block;
		text-align: center;
		color: #777777;
	}

	.on {
		color: #FF0000;
		border-bottom: 5px solid #FF0000;
	}

	.swiper-box {
		flex: 1;
		width: 100%;
		height: 100%;
	}

	.swiper-box view {
		text-align: center;
	}

	.tab-list {
		width: 100%;
		height: 90px;
		line-height: 90px;
		text-align: left;
		border-bottom: 2px solid #EFEFF4;
	}
	/*适配商品的样式*/
	.product-list {
		display: flex;
		width: 100%;
		height: 100%;
		flex-wrap: wrap;
		flex-direction: row;
		overflow: scroll;
	}
	.index-bd {
		width: 100%;
		height: 100%;
		/*
		display: flex;
		
		flex-wrap:wrap;
		flex-direction:row;*/
		
	}
	.product {
			padding: 10px 20px;
			display: flex;
			flex-direction: column;
			width: 330px;
		}
	
		.product-image {
			height: 330px;
			width: 330px;
		}
	
		.product-title {
			width: 300px;
			font-size: 28px;
			word-break: break-all;
			display: -webkit-box;
			overflow: hidden;
			text-overflow: ellipsis;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
		}
	
		.product-price {
			font-size: 28px;
			position: relative;
		}
	
		.product-price-original {
			color: #E80080;
		}
	
		.product-price-favour {
			color: #888888;
			text-decoration: line-through;
			margin-left: 10px;
		}
	
		.product-tip {
			position: absolute;
			right: 10px;
			background-color: #FF3333;
			color: #FFFFFF;
			padding: 0 10px;
			border-radius: 5px;
		}
</style>
