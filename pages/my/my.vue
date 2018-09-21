<template>
	<view>
		个人中心a a 
		<view>
			<button class="btn" type="default" @click="test" size="default">我是按钮</button>
		</view>
	</view>
</template>

<script>
	import myUtil from '../../common/util.js';
	import movieApi from '../../common/movieApi.js';
	export default {
		methods:{
			test:function(){
				//console.log("获取的随机值："+myUtil.myUserAgent.getRandomUserAgent());
				movieApi.getMovieType("seaCms","kuYun",myUtil.myUserAgent.getRandomUserAgent());
				console.log("执行完了");
			}
		}
	}
</script>

<style>
.btn{
	height: 30upx;
}
</style>
