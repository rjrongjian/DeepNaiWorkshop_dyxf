<template>
	<view class="backColor">
		<view class="uni-card ">
			<view class="uni-card-content ">
				<!--
				<view class="uni-card-content-inner color4 title1">
					成为代理人
				</view>
				-->
				<view class="uni-card-content-inner color4">
					电影信封成立的初衷，只是为了方便像我一样的用户。即使功能不完整，我也不希望将它作成一个公益的app，我会像每个使用此App的用户收取不多的“赞助费(^v^)”，这也是支持我继续更新下去的动力。
				</view>
				<view class="uni-card-content-inner color4">
					如果你觉得此app能给你便利，你也愿意推广它给周围的小伙伴，可以联系我成为一个代理，你将会以一个更优惠的价格获取充值码。
				</view>
				<view class="uni-card-content-inner color4">
					注意：即使App功能不继续开发，每个用户也会给我带来一定的消耗。
				</view>
				
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				qq:"",
				qqQun:"",
				qqQunName:""
			}
		},
		onLoad:function(){
			this.qq=this.$myMovieApi.qq;
			this.qqQun = this.$myMovieApi.qqQun.qunNum;
			this.qqQunName = this.$myMovieApi.qqQun.qunName;
		}
	}
</script>

<style>
	.backColor{
		/*background-color: #79E8D0;*/
		
	}
	.color4{
		color:#888888;
		
	}
	.title1{
		text-align: center;
	}
</style>
