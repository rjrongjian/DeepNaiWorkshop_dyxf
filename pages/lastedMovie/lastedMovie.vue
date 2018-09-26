<template>
	<view class="index">
		<scroll-view id="tab-bar" class="swiper-tab" scroll-x :scroll-left="scrollLeft">
			<block v-for="(tab,index) in tabs" :key="tab.id">
				<view :class="['swiper-tab-list',currentTab==index ? 'on' : '']" :id="tab.id" :data-current="index" @tap="swichNav">{{tab.name}}</view>
			</block>
		</scroll-view>
		
		
		<swiper class="swiper-box">
			<block>
				<swiper-item class="color1">
					A
					
				</swiper-item>
			</block>
			<block>
				<swiper-item class="color2">
					b
				</swiper-item>
			</block>
			<block>
				<swiper-item class="color3">
					c
				</swiper-item>
			</block>
		</swiper>
		
		<!--
		<swiper class="swiper-box" duration="300">
			<block>
				<swiper-item>
					<scroll-view class="product-list">
						<view class="product">
							<image class="product-image" src="http://via.placeholder.com/150x200"></image>
							<view class="product-title">我是标题</view>
							<view class="product-price">
								<text class="product-price-favour">￥55</text>
								<text class="product-price-original">￥66</text>
								<text class="product-tip">自营</text>
							</view>
						</view>
						<view class="product">
							<image class="product-image" src="http://via.placeholder.com/150x200"></image>
							<view class="product-title">我是标题</view>
							<view class="product-price">
								<text class="product-price-favour">￥55</text>
								<text class="product-price-original">￥66</text>
								<text class="product-tip">自营</text>
							</view>
						</view>
						<view class="product">
							<image class="product-image" src="http://via.placeholder.com/150x200"></image>
							<view class="product-title">我是标题</view>
							<view class="product-price">
								<text class="product-price-favour">￥55</text>
								<text class="product-price-original">￥66</text>
								<text class="product-tip">自营</text>
							</view>
						</view>
						
					</scroll-view>
				</swiper-item>
			</block>
			
		</swiper>
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
				tabs: [{
					name: '关注啊啊',
					id: 'guanzhu'
				}, {
					name: '推荐',
					id: 'tuijian'
				}, {
					name: '体育',
					id: 'tiyu'
				}, {
					name: '热点',
					id: 'redian'
				}, {
					name: '财经',
					id: 'caijing'
				}, {
					name: '娱乐',
					id: 'yule'
				}, {
					name: '军事',
					id: 'junshi'
				}, {
					name: '历史',
					id: 'lishi'
				}, {
					name: '本地',
					id: 'bendi'
				}],
				newsitems: [[{"name":"测试","label":1},{"name":"测试1","label":2}]]
			}
		},
		onLoad: function () {
			console.log("onload函数触发");
			//this.newsitems = this.randomfn()
		},
		onUnload:function(){
			this.scrollLeft = 0,
				this.isClickChange = false,
				this.currentTab = 0;
		},
		methods: {
			bindChange: async function (e) {
				console.log("开始切换样式...");
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
			randomfn:function() {
				let ary = [];
				for (let i = 0, length = this.tabs.length; i < length; i++) {
					let aryItem = [];
					for (let j = 1; j <= 20; j++) {
						aryItem.push({
							name: this.tabs[i].name,
							label: j
						});
					}
					console.log("获取的元素："+this.tabs[i].name);
					ary.push(aryItem);
				}
				return ary;
			}
		}
	}
</script>

<style>

	.index {
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		height: 100%;
	}

	.index-bd {
		width: 750px;
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
		/*
		width: 100%;
		height: 100%;
		*/
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
	/*自定义swiper实验*/
	.color1{
		background-color: #007AFF;
	}
	.color2{
		background-color:#4CD964;
	}
	.color3{
		background-color:#8A6DE9;
	}
	
</style>
