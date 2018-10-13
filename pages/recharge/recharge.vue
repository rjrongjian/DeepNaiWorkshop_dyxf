<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row border">
				<text class="title2">用户名：</text>
				<input type="text" v-model="account" placeholder="请输入账号">
			</view>
			<view class="input-row">
				<text class="title2">充值码：</text>
				<input type="text" v-model="rechargeCode" placeholder="请输入充值码">
			</view>
		</view>
		<view class="btn-row-1">
			<button type="primary" class="primary" @tap="rechargeTime">充值</button>
		</view>
		
		<!--
		<view class="oauth-row" v-if="hasProvider" v-bind:style="{top: positionTop + 'px'}">
			<view class="oauth-image" v-for="provider in providerList" :key="provider.value">
				<image :src="provider.image" @tap="oauth(provider.value)"></image>
			</view>
		</view>
		-->
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data(){
			return{
				account:'',
				rechargeCode:''
			}
		},
		computed: mapState(['hasLogin']),
		methods:{
			...mapMutations(['resetExpireTime']),
			rechargeTime(){
				 //console.log("获取的账号名："+this.account.length);
				if (this.account.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '账号最短为 6 个字符'
					});
					return;
				}

				//显示加载提示框
				uni.showLoading();
				//获取登录接口url
				let userRechargeUrl = this.$myYiYouApi.yiYouApiUrl.UserRecharge[this.$myYiYouApi.yiYouApiSelected];
				console.log("获取的登录接口地址："+userRechargeUrl);
				//调用易游登录接口
				
				uni.request({
					url: userRechargeUrl,
					method:'POST',
					header:{
						'content-type':'application/x-www-form-urlencoded'
					},
					data:{
						//return {
						'UserName': this.account,
						'CardPwd':this.rechargeCode,
						'Referral':""
						//}
					},
					success: (ret) => {
						
						if (ret.statusCode !== 200) {
							//隐藏加载提示框
							uni.hideLoading();
							
							
							uni.showModal({
								title: "温馨提示",
								content: '充值失败['+ret.statusCode+']，请加QQ群联系群主',
								showCancel: false,
								confirmText: "确定"
							});

						} else {
							if(ret.data&&(ret.data==1||ret.data==101)){//说明充值成功
								if(this.hasLogin){//登录状态下，需要同步过期时间
									//充值成功，刷新过期时间
									this.bindExpireTime();
								}else{//未登陆状态下直接提示用户充值成功，并清空充值码
									this.rechargeCode = "";
									//隐藏加载提示框
									uni.hideLoading();
									
									
									uni.showToast({
										title: "充值成功",
										duration: 1200,
										icon:'none'
									});
									
								}
								
								
							}else{
								//加载错误码对应的错误描述
								let errInfo = "";
								if(ret.data){
									errInfo = this.$myYiYouApi.yiYouErrInfo[ret.data];
									if(!errInfo){
										errInfo = "未知错误";
									}
								}else{
									errInfo == "未知错误";
								}
								console.log("获取的错误信息["+ret.data+"]:"+errInfo);
								//隐藏加载提示框
								uni.hideLoading();
								
								
								uni.showToast({
									title: errInfo,
									duration: 2000,
									icon:'none'
								});
							}
							
						}
					}
				});
			},
			bindExpireTime(){
				//获取 超时时间url
				let GetExpiredUrl = this.$myYiYouApi.yiYouApiUrl.GetExpired[this.$myYiYouApi.yiYouApiSelected];
				console.log("获取的超时接口地址："+GetExpiredUrl);
				
				uni.request({
					url: GetExpiredUrl,
					method:'POST',
					header:{
						'content-type':'application/x-www-form-urlencoded'
					},
					data:{
						//return {
						'UserName': this.account
						//}
					},
					success: (ret) => {
						
						if (ret.statusCode !== 200) {
							//隐藏加载提示框
							uni.hideLoading();
							uni.showModal({
								title: "温馨提示",
								content: '充值成功，但刷新用户过期时间失败['+ret.statusCode+']，请加QQ群联系群主',
								showCancel: false,
								confirmText: "确定"
							});

						} else {
							//console.log("看看获取的结果："+ret.data);
							if(ret.data&&ret.data.length>8){//说明获取超时时间成功
								//更新内存和本地超时时间，如果是登录状态
								this.resetExpireTime(ret.data);
								this.$myLocalStore.resetExpireTime(ret.data);
								
								//隐藏加载提示框
								uni.hideLoading();
								
								
								uni.showToast({
									title: "充值成功!",
									duration: 1100,
									icon:'none'
								});
								
								setTimeout(() => { //防止app里由于渲染导致转场动画卡顿
									uni.reLaunch({
										url: '../my/my',
									});
								}, 1200)
								
								
							}else{
								//加载错误码对应的错误描述
								let errInfo = "";
								if(ret.data){
									errInfo = this.$myYiYouApi.yiYouErrInfo[ret.data];
									if(!errInfo){
										errInfo = "未知错误";
									}
								}else{
									errInfo == "未知错误";
								}
								console.log("获取的错误信息["+ret.data+"]:"+errInfo);
								//隐藏加载提示框
								uni.hideLoading();
								
								
								uni.showToast({
									title: "充值成功，但未能刷新过期时间",
									duration: 2000,
									icon:'none'
								});
							}
							
						}
					}
				});
				
				
			}
		}
	}
</script>

<style>
	.action-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .action-row navigator {
        color: #007aff;
        padding: 0 20px;
    }

    .oauth-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    .oauth-image {
        width: 100px;
        height: 100px;
        border: 1px solid #dddddd;
        border-radius: 100px;
        margin: 0 40px;
        background-color: #ffffff;
    }

    .oauth-image image {
        width: 60px;
        height: 60px;
        margin: 20px;
    }
	
	.btn-row-1 {
		margin-top: 50px;
		/*padding: 20px;*/
	}
</style>
