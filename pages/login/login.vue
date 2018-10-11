<template>
    <view class="content">
        <view class="input-group">
            <view class="input-row border">
                <text class="title">账号：</text>
                <input type="text" v-model="account" placeholder="请输入账号">
            </view>
            <view class="input-row">
                <text class="title">密码：</text>
                <input type="text" password="true" v-model="password" placeholder="请输入密码">
            </view>
        </view>
        <view class="btn-row-1">
            <button type="primary" class="primary" @tap="bindLogin">登录</button>
        </view>
        <view class="action-row">
            <navigator url="../reg/reg">注册账号</navigator>
            <text>|</text>
            <navigator url="../pwd/pwd">忘记密码</navigator>
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
    } from 'vuex'

    export default {
        data() {
            return {
                providerList: [],
                hasProvider: false,
                account: '',
                password: '',
                positionTop: 0
            }
        },
        methods: {
			...mapMutations(['login']),
            initProvider() {
                const filters = ['weixin', 'qq', 'sinaweibo'];
                uni.getProvider({
                    service: 'oauth',
                    success: (res) => {
                        if (res.provider && res.provider.length) {
                            for (let i = 0; i < res.provider.length; i++) {
                                if (~filters.indexOf(res.provider[i])) {
                                    this.providerList.push({
                                        value: res.provider[i],
                                        image: '../../static/img/' + res.provider[i] + '.png'
                                    });
                                }
                            }
                            this.hasProvider = true;
                        }
                    },
                    fail: (err) => {
                        console.error('获取服务供应商失败：' + JSON.stringify(err));
                    }
                });
            },
            initPosition() {
                /**
                 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
                 * 反向使用 top 进行定位，可以避免此问题。
                 */
                this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
            },
            bindLogin() {
                console.log("获取的账号名："+this.account.length);
                if (this.account.length < 6) {
                    uni.showToast({
                        icon: 'none',
                        title: '账号最短为 6 个字符'
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
				
				//显示加载提示框
				uni.showLoading();
                //获取登录接口url
				let loginUrl = this.$myYiYouApi.yiYouApiUrl.UserLogin[this.$myYiYouApi.yiYouApiSelected];
				console.log("获取的登录接口地址："+loginUrl);
				//调用易游登录接口
				
				uni.request({
					url: loginUrl,
					method:'POST',
					header:{
						'content-type':'application/x-www-form-urlencoded'
					},
					data:{
						//return {
						'UserName': this.account,
						'UserPwd':this.password,
						'Version':this.$myYiYouApi.version
						//}
					},
					success: (ret) => {
						
						if (ret.statusCode !== 200) {
							//隐藏加载提示框
							uni.hideLoading();
							
							
							uni.showModal({
								title: "温馨提示",
								content: '登录失败['+ret.statusCode+']，请加QQ群联系群主',
								showCancel: false,
								confirmText: "确定"
							});

						} else {
							//TODO 测试屏蔽
							if(true){
							//if(ret.data&&ret.data.length==32){//说明登录成功
								//service.addUser(data);
								//获取过期时间，缓存登陆数据等，由于都放在这太乱，所以抽出去
								this.bindLogin2(ret.data);
								
								
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
			bindLogin2(statusCode){
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
								content: '获取超时时间失败['+ret.statusCode+']，请加QQ群联系群主',
								showCancel: false,
								confirmText: "确定"
							});

						} else {
							console.log("看看获取的结果："+ret.data);
							if(ret.data&&ret.data.length>8){//说明获取超时时间成功
								
								//登录成功做一些数据的存储
								//将用户名、返回的状态码、过期时间、是否登录的标记存到本地
								this.$myLocalStore.updateToMemoryDataAndLocalStore(this.UserName,statusCode,ret.data,true);
								//隐藏加载提示框
								uni.hideLoading();
								//给用户展示一段时间注册成功的提示后，在跳转页面
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
				
				
			},
            oauth(value) {
                uni.login({
                    provider: value,
                    success: (res) => {
                        uni.getUserInfo({
                            provider: value,
                            success: (infoRes) => {
                                /**
                                 * 实际开发中，获取用户信息后，需要将信息上报至服务端。
                                 * 服务端可以用 userInfo.openId 作为用户的唯一标识新增或绑定用户信息。
                                 */
                                this.toMain(infoRes.userInfo.nickName);
                            }
                        });
                    },
                    fail: (err) => {
                        console.error('授权登录失败：' + JSON.stringify(err));
                    }
                });
            },
            toMain(userName) {
                this.login(userName);
                /**
                 * 强制登录时使用reLaunch方式跳转过来
				 * 返回首页也使用reLaunch方式
                 */
                if (this.forcedLogin) {
                    uni.reLaunch({
                        url: '../main/main',
                    });
                } else {
                    uni.navigateBack();
                }

            }
        },
        onLoad() {
            this.initPosition();
            //this.initProvider(); //不使用第三方登录
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
