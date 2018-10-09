<script>
	export default {
		onLaunch: function () {
			//var test = "<div>元朝忽必烈雄心勃勃，不仅平定蒙古周围各地，更想霸占中原，于是展开了一波腥风血雨的杀戮。库刹(白鹰饰)是忽必烈指名未来的驸马也是远近闻名的杀神，为了讨好忽必烈，库刹大肆杀害宋室主战派大臣。</div><div>库刹误扎兵于鬼蜮，此处乃古战场祭台，此间鬼怪冤魂不散，借妖惑人体诱人&quot;自杀&quot;。士兵全部死于非命，死状可怖。最后仅存库刹一人，他亲手杀死鬼化得一队鬼兵，自以为已逃脱天谴，结果天降厉雷，为天诛地灭。</div><div>库刹愤慨不过，化身厉鬼，盘踞鬼蜮四周残杀几代乡民，直到明朝，高僧(石隽饰)至此。高僧救民，与哑女(龙君儿饰)发生感情，最后以身祭天，与魔神库刹一战。</div>";
			//console.log('app launch'+test.replaceAdjacentText(test));
			console.log('app launch');
			console.log('App Launch')
			
		},
		onShow: function () {
			console.log('App Show')
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
