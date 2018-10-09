<template>
    <view class="content">
        <view class="input-group">
            <view class="input-row border">
                <text class="title">账号：</text>
                <input type="text" v-model="account" placeholder="请输入账号">
            </view>
            <view class="input-row border">
                <text class="title">密码：</text>
                <input type="text" password="true" v-model="password" placeholder="请输入密码">
            </view>
            <view class="input-row">
                <text class="title">邮箱：</text>
                <input type="text" v-model="email" placeholder="请输入邮箱">
            </view>
        </view>
        <view class="btn-row-1">
            <button type="primary" class="primary" @tap="register">注册</button>
        </view>
    </view>
</template>

<script>
    //import service from '../../service.js';

    export default {
        data() {
            return {
                account: '',
                password: '',
                email: ''
            }
        },
        methods: {
            register() {//注册
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
                if (this.password.length < 6) {
                    uni.showToast({
                        icon: 'none',
                        title: '密码最短为 6 个字符'
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
				let reginUrl = this.$myYiYouApi.yiYouApiUrl.UserRegin[this.$myYiYouApi.yiYouApiSelected];
				console.log("获取的注册接口地址："+reginUrl);
				console.log("注册信息,用户名："+this.account+",密码："+this.password+"，email:"+this.email);
				
				//调用易游注册接口
				
				uni.request({
					url: reginUrl,
					method:'POST',
					header:{
						'content-type':'application/x-www-form-urlencoded'
					},
					data(){
						return {
							'UserName': this.account,
							'UserPwd':this.password,
							'Email':this.email,
							'Mac':''
						}
					},
					success: (ret) => {
						
						if (ret.statusCode !== 200) {
							//隐藏加载提示框
							uni.hideLoading();
							
							
							uni.showModal({
								title: "温馨提示",
								content: '注册失败['+ret.statusCode+']，请加QQ群联系群主',
								showCancel: false,
								confirmText: "确定"
							});
							
						   
							
							
						} else {
							if("1"==ret.data){
								//service.addUser(data);
								//隐藏加载提示框
								uni.hideLoading();
								uni.showToast({
									title: '注册成功'
								});
								uni.navigateBack({
									delta: 1
								});
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
				
                
            }
        }
    }
</script>

<style>
	.btn-row-1 {
	        margin-top: 50px;
	        /*padding: 20px;*/
	}
	
</style>
