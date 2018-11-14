<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		onLaunch: function () {
			//加载本地的登陆数据到内存
			let loginData = this.$myLocalStore.getLocalStoreData();
			this.syncLocalStoreToMemory(loginData);
			console.log("加载本地登陆数据完成");

			let updateAppConfigUrl = "http://www.52bang.site/dyxf/cf1.dyxf";
			//let updateAppConfigUrl = "http://192.168.0.15:9527/dyxf/cf1.dyxf";
			//加载一些配置
			uni.request({
				url: updateAppConfigUrl,
				success: (ret) => {
					if (ret.statusCode !== 200) {
						console.log("请求失败:", ret)
					} else {
						let result = ret.data;
						//
						console.debug("获取的数据："+result);
						console.debug("获取其中一个数据："+JSON.stringify(result.yiYouApiSelected));
						this.$myYiYouApi.yiYouApiSelected = result.yiYouApiSelected;
						this.$myMovieApi.shieldingCatIds = result.shieldingCatIds;
						this.$myMovieApi.shieldingCatIdsForToday = result.shieldingCatIdsForToday;
						this.$myMovieApi.shieldingMovieId = result.shieldingMovieId;
						this.$myMovieApi.qqQun = result.qqQun;
						this.$myMovieApi.qq = result.qq;
						this.$myMovieApi.wx = result.wx;
						this.$myMovieApi.rechargeUrl = result.rechargeUrl;
						this.$myMovieApi.banners = result.banners;
						this.$myMovieApi.lingquanUrl = result.lingquanUrl;
						this.$myMovieApi.appUpdate = result.appUpdate;
						//console.debug("赋值解析接口："+result.jxParserUrlForHttp);
						//console.debug("赋值解析接口："+result.jxParserUrlForHttps);
						this.$myMovieApi.jxParserUrlForHttp = result.jxParserUrlForHttp;
						this.$myMovieApi.jxParserUrlForHttps = result.jxParserUrlForHttps;
						this.$myMovieApi.isDisplayPoxy = result.isDisplayPoxy;
						this.$myMovieApi.detailAds = result.detailAds;
						this.$myMovieApi.hasInfo = result.hasInfo;
						
						let appUpdateTemp = this.$myMovieApi.appUpdate;
						if(appUpdateTemp.method==2){//强制更新
							uni.showModal({
								title: '更新提示',
								content: appUpdateTemp.note,
								confirmText:"去更新",
								cancelText:"退出",
								success: function (res) {
									if (res.confirm) {
										console.debug("要访问的地址:"+appUpdateTemp.url);
										plus.runtime.openURL(appUpdateTemp.url);
										plus.runtime.quit();
									} else if (res.cancel) {
										console.log('用户点击取消');
										plus.runtime.quit();
									}
								}
							});
						}else if(appUpdateTemp.method==3){//普通更新
							uni.showModal({
								title: '更新提示',
								content: appUpdateTemp.note,
								confirmText:"去更新",
								cancelText:"暂不更新",
								success: function (res) {
									if (res.confirm) {
										console.log('用户点击确定');
										plus.runtime.openURL(appUpdateTemp.url);
									} else if (res.cancel) {
										console.log('用户点击取消');
									}
								}
							});
						}else if(appUpdateTemp.method==4){//停止使用
							uni.showModal({
								title: '温馨提示',
								content: appUpdateTemp.note,
								confirmText:"退出",
								showCancel:false,
								success: function (res) {
									plus.runtime.quit();
								}
							});
						}else if(appUpdateTemp.method==5){//z直接死掉
							plus.runtime.quit();
						}
					}
				}
			});
			
			
			//加载当前登陆的用户状态，并且定时去更新
							//获取接口地址
			let updatePwdByEmailUrl = this.$myYiYouApi.yiYouApiUrl.UpdatePwdByEmail[this.$myYiYouApi.yiYouApiSelected];
			console.log("获取的找回密码的接口地址："+updatePwdByEmailUrl);
			/*console.log("注册信息,用户名："+this.account+",密码："+this.password+"，email:"+this.email);*/
			
			//调用易游注册接口
			console.debug("定时器准备执行！"+new Date());
			setInterval(this.updateUserStatus,600000);
			
		},
		onShow: function () {
			console.debug('App Show');
			//let str = "姗%B7%B7知足常乐";
			//console.log("测试urlDecode结果："+decodeURIComponent(str));
			//console.log("测试urlDecode结果："+decodeURI(str));
			
		},
		onHide: function () {
			console.log('App Hide')
		},
		methods:{
			...mapMutations(['syncLocalStoreToMemory','clearMemory']),
			updateUserStatus(){
				//console.debug("定时器执行..."+new Date());
				console.debug("定时器中获取的用户状态，用户名："+this.username+"，状态码："+this.statusCode+"，过期时间："+this.expireTime+"，是否登陆："+this.hasLogin);
				let usernameTemp = this.username;
				let statusCodeTemp = this.statusCode;
				if(this.hasLogin){//登陆状态下，才去验证状态
					let userStatusUrl = this.$myYiYouApi.yiYouApiUrl.CheckUserStatus[this.$myYiYouApi.yiYouApiSelected];
					console.debug("获取的找回密码的接口地址："+userStatusUrl);
					uni.request({
						url: userStatusUrl,
						method:'POST',
						header:{
							'content-type':'application/x-www-form-urlencoded'
						},
						data:{
							//return {
								'UserName': usernameTemp,
								'StatusCode':statusCodeTemp
							//}
						},
						success: (ret) => {
							
							if (ret.statusCode !== 200) {
								console.error("更新状态失败，原因:"+ret.data);
							} else {
								console.debug("获取的用户状态:"+ret.data);
								this.$myYiYouApi.userStatus = ret.data;
								console.debug("赋值后，用户状态："+this.$myYiYouApi.userStatus);
							}
						}
					});
				}
			}
		},
		computed: mapState(['hasLogin', 'username', 'statusCode','expireTime']),
	}
</script>

<style>
	@import './common/common.css';
	@import './common/uni.css';
	
	page{
		display: flex;
		/* uni-app默认使用flex布局。因为flex布局有利于跨更多平台，尤其是采用原生渲染的平台。如不了解flex布局，请参考http://www.w3.org/TR/css3-flexbox/。若不需要flex布局可删除本行*/
	}

	page {
		min-height: 100%;
	}

	page {
		background-color: #EFEFEF;
	}
	
	/**
	 * 登录相关页面配置
	 */
	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #efeff4;
		padding: 20px;
	}
	.input-group {
	        background-color: #ffffff;
	        margin-top: 40px;
	        position: relative;
	    }
	
	    .input-group::before {
	        position: absolute;
	        right: 0;
	        top: 0;
	        left: 0;
	        height: 1px;
	        content: '';
	        -webkit-transform: scaleY(.5);
	        transform: scaleY(.5);
	        background-color: #c8c7cc;
	    }
	
	    .input-group::after {
	        position: absolute;
	        right: 0;
	        bottom: 0;
	        left: 0;
	        height: 1px;
	        content: '';
	        -webkit-transform: scaleY(.5);
	        transform: scaleY(.5);
	        background-color: #c8c7cc;
	    }
	
	    .input-row {
	        display: flex;
	        flex-direction: row;
	        position: relative;
	    }
	
	    .input-row .title {
	        width: 20%;
	        height: 50px;
	        min-height: 50px;
	        padding: 15px 0;
	        padding-left: 30px;
	        line-height: 50px;
	    }
			.input-row .title2 {
					width: 30%;
					height: 50px;
					min-height: 50px;
					padding: 15px 0;
					padding-left: 30px;
					line-height: 50px;
			}
	
	    .input-row input {
	        width: 80%;
	        height: 50px;
	        min-height: 50px;
	        padding: 15px 0;
	        padding-right: 30px;
	        line-height: 50px;
	    }
	
	    .input-row.border::after {
	        position: absolute;
	        right: 0;
	        bottom: 0;
	        left: 15px;
	        height: 1px;
	        content: '';
	        -webkit-transform: scaleY(.5);
	        transform: scaleY(.5);
	        background-color: #c8c7cc;
	    }
	
	    .btn-row {
	        margin-top: 50px;
	        padding: 20px;
	    }
	
	    button.primary {
	        background-color: #24D197;
	    }
</style>
