<template>
	<view>
		<!--<web-view src="https://jx.618g.com/m3u8.php?url=https://hao.czybjz.com/20180502/ekoc1ilR/index.m3u8"></web-view>-->
		
	</view>
</template>

<script>
	export default {
		onLoad(){
			console.log("开始调用直播控件");
		},
		methods:{
			test(){
				var pages = getCurrentPages();
				var page = pages[pages.length - 1];
				// #ifdef APP-PLUS
				var currentWebview = page.$getAppWebview();
				// #endif
				var pusher = plus.video.createLivePusher("", {
					url:'rtmp://testlivesdk.v0.upaiyun.com/live/upyunb',
					top:'100px',
					left:'0px',
					width: '100%',
					height: '300px',
					position: 'static'
				});
				currentWebview.append(pusher);
			}
		}
	}
</script>

<style>

</style>
