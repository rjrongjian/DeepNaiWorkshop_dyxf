<template>
	<view class="container">
		<view class="head">步骤一：打开领券中心,挑选自己喜欢的商品</view>
		<view class="img">
			
			<image  mode="aspectFit" style="width: 100%;height: 100%; " class="" src="../../static/lingquanStep/step1.gif"></image>
		</view>
		<view class="head">步骤二：点击想要了解的商品，查看详情，点击购买</view>
		<view class="img">
			<image  mode="aspectFit" style="width: 100%;height: 100%; " class="" src="../../static/lingquanStep/step2.gif"></image>
		</view>
		<view class="head">步骤三：复制淘口令</view>
		<view class="img">
			<image  mode="aspectFit" style="width: 100%;height: 100%; " class="" src="../../static/lingquanStep/step3.gif"></image>
		</view>
		<view class="head">步骤四：复制成功（如果不成功，请手动复制框内文字）</view>
		<view class="img">
			<image  mode="aspectFit" style="width: 100%;height: 100%; " class="" src="../../static/lingquanStep/step4.gif"></image>
		</view>
		<view class="head">步骤五：打开淘宝app，跳出分享框，点击“打开”</view>
		<view class="img">
			<image  mode="aspectFit" style="width: 100%;height: 100%; " class="" src="../../static/lingquanStep/step5.gif"></image>
		</view>
		<view class="head">步骤六：进入领券页面，点击领券</view>
		<view class="img">
			<image  mode="aspectFit" style="width: 100%;height: 100%; " class="" src="../../static/lingquanStep/step6.gif"></image>
		</view>
		<view class="head">步骤七：跳到淘宝详情，点击立即购买</view>
		<view class="img">
			<image  mode="aspectFit" style="width: 100%;height: 100%; " class="" src="../../static/lingquanStep/step7.gif"></image>
		</view>
		<view class="head">步骤八：核实订单，并查看券是否使用</view>
		<view class="img">
			<image  mode="aspectFit" style="width: 100%;height: 100%; " class="" src="../../static/lingquanStep/step8.gif"></image>
		</view>
		<view class="head">步骤九：下单完成，展示订单号等信息</view>
		<view class="img">
			<image  mode="aspectFit" style="width: 100%;height: 100%; " class="" src="../../static/lingquanStep/step9.gif"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.container{
		background-color: #242449;
		
		display:flex;
		flex-direction:column;
		justify-content:center;
		width: 750upx;
		align-items:center;
	}
	.img{
		width:550upx;
		height:978upx;
		
		margin-top: 5upx;
		
	}
	.head{
		width: 100%;
		margin-left: 20px;
		margin-right: 20px;
		color: #FFFFFF;
		padding-top:20px ;
		padding-bottom: 20px;
		font-size: 26px;
	}
</style>
