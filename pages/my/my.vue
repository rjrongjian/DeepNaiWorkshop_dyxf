<template>
	<!--
    <view class="content">
        <view class="btn-row">
            <button v-if="!hasLogin" type="primary" class="primary" @tap="bindLogin">登录</button>
            <button v-if="hasLogin" type="default" @tap="bindLogout">退出登录</button>
        </view>
    </view>
	-->
	<view class="content-1">
		<view class="header-1">
			<view class="header-1-login">
				<!--<navigator url="../reg/reg">登录</navigator>-->
				
				<view class="header-1-login-button" v-if="!hasLogin" @tap="goLoginPage">登录</view>
				<view class="header-1-login-button" v-if="hasLogin" @tap="bindLogout">登出</view>
			</view>
			<view class="header-1-image-card">
				<image class="header-1-image" :src="headStr" mode="widthFix" @error="loadImgErr"></image>
				
			</view>
			
			<!--登录成功显示的内容，这里不做逻辑判断 haslogin=true -->
			<view class="header-1-account">欢迎,{{username}}</view>
			<view class="header-1-expire-time" v-if="hasLogin">过期时间：{{expireTime}}</view>
			<!--未登录显示的内容，这里不做逻辑判断 haslogin=false-->
			<!--<view class="header-1-no-login"></view>-->
			
		</view>
		<view class="bottom-1 uni-card-1">
			
			
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" >
				<view class="uni-list-cell-navigate-1 uni-navigate-right uni-list-cell-font-color" @tap="goRechargePage"> 去充值 </view>
			</view>
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" >
				<view class="uni-list-cell-navigate-1 uni-navigate-right uni-list-cell-font-color"> 联系我?! </view>
			</view>
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" >
				<view class="uni-list-cell-navigate-1 uni-navigate-right uni-list-cell-font-color"> 免责声明</view>
			</view>
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" >
				<view class="uni-list-cell-navigate-1 uni-navigate-right uni-list-cell-font-color"> 成为代理</view>
			</view>
		</view>
		
	</view>
</template>

<script>
    import {
    	mapState,
    	mapMutations
    } from 'vuex'

    export default {
		
        data(){
			return {
				//如果不用vuex，只能把这个全局变量写在标签里使用，不能刷新状态
				/*
				username:this.$myLocalStore.loginData.username,
				statusCode:this.$myLocalStore.loginData.statusCode,
				expireTime:this.$myLocalStore.loginData.expireTime,
				hasLogin:this.$myLocalStore.loginData.hasLogin,
				*/
				headStr:"../../static/header.jpg"
				
			}
		},
		computed: mapState(['hasLogin', 'username', 'statusCode','expireTime']),
        methods: {
            loadImgErr:function(e){
				 console.error('image发生error事件，携带值为' + e.detail.errMsg)
			},
            bindLogin() {
                uni.navigateTo({
                    url: '../login/login',
                });
            },
            bindLogout() {
				
				uni.showModal({
					title: '温馨提示',
					content: '确定要登出当前账号吗？',
					success: function (res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
				/*
                this.logout();
                
                //如果需要强制登录跳转回登录页面
                
                if (this.forcedLogin) {
                    uni.reLaunch({
                        url: '../login/login',
                    });
					
                }
				*/
            },
			goRechargePage(){
				
				uni.navigateTo({
					url:"../recharge/recharge"
				});
				
			},
			goLoginPage(){
				uni.navigateTo({
					url:"../login/login"
				});
			}
        }
    }
</script>

<style>
	.header-1{
		background-color: #79E8D0;
		height:480px;
		display: flex;
		flex-direction:column;
		/*justify-content:center;*/

		padding-top: 35px;
		/*background-color: #4CD964;*/
	}
	.header-1-login{
		
		display: flex;
		justify-content:flex-end;
		
		width: 100%;
		/*background-color: #4CD964;*/
	}
	
	/*只有加上butotn这个才生效*/
	.header-1-login-button{

		width: 75px;
		/*border: #FFFFFF solid 1px;*/
		background-color: #79E8D0;
		margin-top: 5px;
		margin-right: 15px;
		line-height: 36px;
		color: #FFFFFF;
		border-bottom: 2px solid #FFFFFF;
		
		/*background-color: #4CD964;*/
		padding: 6px 6px 6px 6px;
	}
	.header-1-image{
		border-radius: 50% 50%;
		border:15px solid rgba(111,111,111,0.1);
		height: 180px;
		width: 180px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .3);
		
	}
	.header-1-image-card{
		
		/*background-color: #777777;*/
		display: flex;
		justify-content:center;
	}
	
	.header-1-account{
		margin:35px auto 0px auto;
		/*background-color: #888888;*/
		line-height: 36px;
		color: #FFFFFF;
	}
	
	.header-1-expire-time{
		margin:18px auto 0px auto;
		/*background-color: #007AFF;*/
		line-height: 32px;
		color: #FFFFFF;
	}
	
	
	.bottom-1{
		background-color: #FFFFFF;
		top: -40px;
		border-radius: 8px;
		margin: 0px 30px;
		position: relative;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .3);
		/*height: 410px;*/
		padding-bottom: 15px;
	}

	

	.content-1 {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #efeff4;
		/*padding: 20px;*/
	}
	.uni-list-cell-font-color{
		color: #444444;
	}
	/*重新调整了字的大小*/
	.uni-list-cell-navigate-1 {
		padding: 22px 30px;
		line-height: 40px;
		position: relative;
		display: flex;
		box-sizing: border-box;
		width: 100%;
		flex: 1;
		justify-content: space-between;
		align-items: center;
	}
	
	.uni-list-cell-navigate-1.uni-navigate-right:after {
		font-family: uniicons;
		content: '\e583';
		position: absolute;
		right: 24px;
		top: 50%;
		color: #bbb;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
	}
</style>
