<template>
	<view class="container">
		<view class="header">
			<image src="../../../static/banner/song.png" mode="aspectFit" style="width: 100% ; height: 100%;"></image>
		</view>
		<view class="content">
			<view class="uni-card backColor2">
				<view class="uni-card-content ">
					<view class="uni-card-content-inner color4 title1">
						活动说明
					</view>
					<view class="uni-card-content-inner color4">
						活动期间内，凡是在本app对应的领券下单页面购物的，都可以获取本app的会员充值卡，各种最新大片抢先看！
					</view>
					<view class="uni-card-content-inner color4">
						<view>
							具体规则如下：
						</view>
						<view>
							任意下单达到2单，并且“确认收货”后，将订单编号发给我们，即可获取一张充值“周卡”，达到5单即可获取一张“月卡”！
										注意，在“电影信封”官方提供的领券下单页面领优惠券下单才有效哦！
						</view>
						
						<view>
							联系方式：
								QQ:{{qq}}
								微信：{{wx}}
						</view>
							
					</view>
					
					<view class="uni-card-content-inner color4">
						<view>
							1.为什么要先领券在下单？
						</view>
						<view>
							我们提供的都是淘宝天猫内部的优惠券，你可以用更优惠的价格获取你想买的东西，是不是很好。
						</view>
						<view>
							2.我不知道该买什么东西，有没有买手群专门推荐一些便宜又好的商品给我呢？
						</view>
						<view>
							你可以加入我们的官方购物群哦，每天都会有各种“宝贝”推荐给你，帮你挑选！
						</view>
						<view>
							3.为什么有的写着有优惠券，优惠券却领完了？
						</view>
						<view>
							爆款宝贝有很多人在抢，手慢无！
						</view>
						<view>
							进群方式：通过上述联系方式，说明要淘宝贝，就会拉你进群。
						</view>
					</view>
					<view class="uni-card-content-inner color4">
						<button type="primary" class="btn-extra" @tap="lingquanTutorial">领券下单教程</button>
						<button type="default" class="btn-extra" @tap="goLingquanPage">去领券</button>
					</view>
					<view class="uni-card-content-inner color4">
						请注意：任何有作弊嫌疑或者明显是刷充值卡的行为，我们都将会严厉惩罚，请大家一起维护好我们共有的平台。
						活动结束时间会在官方群里第一时间通知！
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(){
			this.qq = this.$myMovieApi.qq;
			this.wx = this.$myMovieApi.wx;
		},
		data() {
			return {
				qq:"",
				wx:""
			};
		},
		methods:{
			lingquanTutorial(){
				uni.navigateTo({
					url:"../../lingquanTutorial/lingquanTutorial"
				})
			},
			goLingquanPage(){
				//webview打开
				plus.runtime.openWeb(this.$myMovieApi.lingquanUrl);
			}
		}
	}
</script>

<style>
	.container{
		background-color: #242449;
		display:flex;
		flex-direction:column;
		justify-content:center;
		
	}
	.header{
		height: 306upx;
		width: 750upx;
	}
	
	.content{
		background-color: #242449;
	}
	.backColor2{
		background-color: #EFEFF4;
	}
	.color4{
		color:#888888;
	}
	
	.title1{
		text-align: center;
	}
	button.btn-extra{
		margin-top: 10px;
		width: 100%;
		background-color: #242449;
		color:#FFFFFF;
	}
	
</style>
