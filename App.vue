<script>
	export default {
		onLaunch: function () {
			//加载本地的登陆数据到内存
			this.$myLocalStore.syncLocalStoreDataToMemory();
			console.log("加载本地登陆数据完成");
			console.log('app launch');
			
			
		},
		onShow: function () {
			console.log('App Show');
			
		},
		onHide: function () {
			console.log('App Hide')
		}
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
