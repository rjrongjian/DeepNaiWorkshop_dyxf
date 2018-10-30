<template>
	<view class="backColor">
		<view class="uni-card ">
			<view class="uni-card-content ">
				<view class="uni-card-content-inner color4 title1">
					关于电影信封(^v^)
				</view>
				<view class="uni-card-content-inner color4">
					你也许像我一样不想被电影院困几个小时或者等各大视频网站更新，而且又不是资深的电影迷，想先行体验；又或者想在网上找些电影资源却又被各种引流广告淹没，最后浪费了大量时间。为了解决这些问题，我尝试着去搜罗各种资源，最后呈现于此。
				</view>
				<view class="uni-card-content-inner color4">
					最开始的电影信封只是一个QQ机器人，当时也是希望将喜欢电影的小伙伴聚集起来。随着时间的推移，发现还是app的形式要更方便一点，所以就着手写了此app，当然，目前版本的功能还很简陋，不过我会对App不断的进行优化，感谢大家的支持！
				</view>
				<view class="uni-card-content-inner color4">
					QQ群：{{qqQunName}}，群号：{{qqQun}}
				</view>
				<view class="uni-card-content-inner color4">
					群管理QQ：{{qq}}
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
