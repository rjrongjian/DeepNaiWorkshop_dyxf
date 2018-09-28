<template>
	<block v-if="isLoadedMovieData">
		<view class="container">
			
				<view class="video-style">
					<video id="myVideo" :src="src" @error="videoErrorCallback" controls class="video-style-inner"></video>
				</view>
				<view class="info">电影名称：</view>
				<view class="info">电影简介：</view>
				<view class="info">更新时间：</view>
				<view class="info">上映时间：</view>
				<view class="info">类型：</view>
				<view class="info">地区：</view>
				<view class="info">语言：</view>
				<view class="info">
					<view>资源线路：</view>
					<radio-group class="radio-group" @change="radioChange">
						<label class="radio" v-for="item in items" :key="item">
							<radio :value="item.value" :checked="item.checked" class="radio-color" color="#24D197"/>{{item.name}}
						</label>
					</radio-group>
					
				</view>
				<view class="uni-card uni-card-1">
					
					<view class="uni-card-header-1">选集：</view>
					<view class="uni-card-content uni-card-content-1">
						<view class="label-list">
							<view class="uni-label-1 res-selected">第一集</view>
							<view class="uni-label-1 ">第二集</view>
							<view class="uni-label-1">第三集</view>
							<view class="uni-label-1">第四集</view>
							<view class="uni-label-1">第五集</view>
							<view class="uni-label-1">第六集</view>
							<view class="uni-label-1">第七集</view>
							<view class="uni-label-1">第八集</view>
							<view class="uni-label-1">第九集</view>
							<view class="uni-label-1">第十集</view>
							<view class="uni-label-1">第十一集</view>
							<view class="uni-label-1">第十二集</view>
							<view class="uni-label-1">第十三集</view>
							<view class="uni-label-1">第十四集</view>
							<view class="uni-label-1">第十五集</view>
						</view>
					</view>
					
				</view>
				<!--
				<view class="info label-list">
					<view class="uni-label uni-active">第一集</view>
					<view class="uni-label">第二集</view>
					<view class="uni-label">第三集</view>
					<view class="uni-label">第四集</view>
					<view class="uni-label">第五集</view>
					<view class="uni-label">第六集</view>
					<view class="uni-label">第七集</view>
					<view class="uni-label">第八集</view>
					<view class="uni-label">第九集</view>
					<view class="uni-label">第十集</view>
					<view class="uni-label">第十一集</view>
					<view class="uni-label">第十二集</view>
					<view class="uni-label">第十三集</view>
					<view class="uni-label">第十四集</view>
					<view class="uni-label">第十五集</view>
				</view>
				-->
		</view>
	</block>
	<block v-else>
		<view class="container2">
			
			<text  class="loadMore loadMore-center">加载中...</text>
			
		</view>
			
	</block>
</template>

<script>
	export default {
		data() {
			
			return {
				isLoadedMovieData:true,
				src: '',
				items: [{
					name: '线路一',
					value: 'http',
					checked: 'true'
				},
				{
					name: '线路二',
					value: 'https'
				}]
			}
		},
		methods:{
			videoErrorCallback:function(){
				uni.showModal({
					title: "播放出错",
					content: "视频播放错误，如需帮助，请联系管理员",
					showCancel: false,
					confirmText: "确定"
				})
			},
			radioChange: function (e) {
				console.log('radio发生change事件，携带value值为：' + e.detail.value)
			}
		}
	}
</script>

<style>
	.container{
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		width: 100%;

	}
	.container2{
		display: flex;
		/*flex-direction: row;*/
		/*flex-wrap: wrap;*/
		justify-content: center;
		width: 100%;
		
	}
	.video-style{
		display: flex;
		width:100%;
		/*height: 450px;
		background-color: #007AFF;*/
	}
	
	.video-style-inner{
		flex: 1;
	}
	
	.loadMore-center{
		/*background-color: #4CD964;*/
		
	}
	
	.info{
		color: #555;
		padding: 10px 20px;
		font-size: 28px;
		/*background-color: #4CD964;*/
	}
	
	.label-list{
		display: flex;
		flex-direction: row;
		justify-content:center;
		flex-wrap: wrap;
		
	}
	.uni-card-1{
		display:flex;
		flex-direction: column;
		flex-wrap: wrap;
	}
	
	.uni-label-1 {
		/*width: 210px;*/
		word-wrap: break-word;
		word-break: break-all;
		border: 1px solid #555;
		color: #555;
		border-radius: 10px;
		padding: 10px 15px;
		margin: 10px;
		font-size: 28px;
		
	}
	.res-selected{
		color: #FFFFFF;
		background-color: #24D197;
		border: 1px solid #FFFFFF;
	}
	
	.uni-card-header-1 {
		position: relative;
		display: flex;
		min-height: 50px;
		padding: 10px 10px;
		justify-content: space-between;
		align-items: center;
		color: #555;
		border-bottom: 1px solid #555;
	}
	
	.uni-card-content-1{
		padding-top: 10px;
		padding-bottom: 10px;
	}
	.radio-color{
		color:#24D197;
	}
	
</style>
