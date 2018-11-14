<template>
	<view>
		<video v-if="sss" id="myVideo" :src="sss" @error="videoErrorCallback" controls class="video-style-inner" ></video>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				sss:"",
				ssss:""
			}
		},
		onLoad(e){
			console.log("获取的地址："+e.data);
			this.ssss=e.data;
		}
	}
</script>

<style>

</style>
