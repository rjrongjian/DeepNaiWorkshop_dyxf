<template>
    <view class="content">
        <view class="input-group">
			<view class="input-row border">
					<text class="title">账号：</text>
					<input type="text" v-model="account" placeholder="请输入账号">
			</view>
            <view class="input-row">
                <text class="title">邮箱：</text>
                <input type="text" v-model="email" placeholder="请输入邮箱">
            </view>
        </view>

        <view class="btn-row">
            <button type="primary" class="primary" @tap="findPassword">找回密码</button>
        </view>
    </view>
</template>

<script>
    import service from '../../service.js';

    export default {
        data() {
            return {
                email: '',
				account:''
            }
        },
        methods: {
            findPassword() {
                /**
                * 基础数据校验
                */
                if (this.account.length < 5) {
                		uni.showToast({
                				icon: 'none',
                				title: '账号最短为 5 个字符'
                		});
                		return;
                }
                if (this.email.length < 3 || !~this.email.indexOf('@')) {
                		uni.showToast({
                				icon: 'none',
                				title: '邮箱地址不合法'
                		});
                		return;
                }
				//显示加载提示框
				uni.showLoading();
			
								//获取接口地址
				let updatePwdByEmailUrl = this.$myYiYouApi.yiYouApiUrl.UpdatePwdByEmail[this.$myYiYouApi.yiYouApiSelected];
				console.log("获取的找回密码的接口地址："+updatePwdByEmailUrl);
				/*console.log("注册信息,用户名："+this.account+",密码："+this.password+"，email:"+this.email);*/
				
				//调用易游注册接口
				
				uni.request({
					url: updatePwdByEmailUrl,
					method:'POST',
					header:{
						'content-type':'application/x-www-form-urlencoded'
					},
					data:{
						//return {
							'UserName': this.account,
							'Email':this.email
						//}
					},
					success: (ret) => {
						
						if (ret.statusCode !== 200) {
							//隐藏加载提示框
							uni.hideLoading();
							
							
							uni.showModal({
								title: "温馨提示",
								content: '找回密码失败['+ret.statusCode+']，请加QQ群联系群主',
								showCancel: false,
								confirmText: "确定"
							});
							
							
							
							
						} else {
							console.log("找回密码返回的结果："+ret.data);
							if("1"==ret.data){
								//service.addUser(data);
								//隐藏加载提示框
								uni.hideLoading();
								
								uni.showToast({
									title: '已发送到你的邮箱',
									duration: 2000
								});
								//给用户展示一段时间注册成功的提示后，在跳转页面
								/*
								setTimeout(function(){
									uni.navigateBack({
										delta: 1
									});
								},1200)
								*/
								
							}else{
								//隐藏加载提示框
								uni.hideLoading();
								
								
								uni.showToast({
									title: "不能找回密码，请检查用户名和邮箱",
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

</style>
