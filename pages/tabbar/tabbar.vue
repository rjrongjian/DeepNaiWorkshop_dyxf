<template>
    <view>
        <view class="header">
            <view class="input-view">
                <uni-icon type="search" size="22" color="#666666"></uni-icon>
                <input class="input" type="text" placeholder="输入搜索关键词" />
            </view>
            <!-- #ifdef MP-WEIXIN -->
            <view class="icon" @tap="showRightDrawer">
                <uni-icon type="bars" color="#666666" size="22"></uni-icon>
            </view>
            <!-- #endif -->
        </view>
        <view class="page-content">
            这是抽屉式导航组件使用示例，可以指定菜单左侧或者右侧弹出（仅初始化生效），组件内部可以放置任何内容。点击页面右上角的按钮即可显示导航菜单。
        </view>
        <uni-drawer :visible="rightDrawerVisible" mode="right" @close="closeRightDrawer">
            <view class="drawer-content">
                <view class="title">抽屉式导航</view>
                <view class="text">
                    这是抽屉式导航组件使用示例，你可以在这里放置任何内容。关闭抽屉式导航有多种方式：1.点击本抽屉式导航之外的任意位置；2.点击如下红色按钮；
                    <!-- #ifdef APP-PLUS -->
                    <text>3.点击页面右上角的按钮；</text>
                    <!-- #endif -->
                </view>
                <button class="button" type="warn" @tap="closeRightDrawer">关闭抽屉式导航</button>
                <view class="uni-list">
                    <view class="uni-list-cell" hover-class="uni-list-cell-hover">
                        <view class="uni-list-cell-navigate uni-navigate-right" @tap="item1">
                            Item1
                        </view>
                    </view>
                    <view class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover">
                        <view class="uni-list-cell-navigate uni-navigate-right" @tap="item1">
                            Item2
                        </view>
                    </view>
                </view>
            </view>
        </uni-drawer>
    </view>
</template>

<script>
    import uniDrawer from '../../components/uni-drawer.vue';
    import uniIcon from '../../components/uni-icon.vue';

    export default {
        components: {
            uniDrawer,
            uniIcon
        },
        data() {
            return {
                rightDrawerVisible: false
            }
        },
        methods: {
            closeRightDrawer() {
                this.rightDrawerVisible = false;
            },
            showRightDrawer() {
                this.rightDrawerVisible = true;
            },
            item1() {
                this.rightDrawerVisible = false;
                uni.showToast({
                    title: 'item1'
                });
            },
            item2() {
                this.rightDrawerVisible = false;
                uni.showToast({
                    title: 'item2'
                });
            }
        },
        onNavigationBarButtonTap(e) {
            this.rightDrawerVisible = !this.rightDrawerVisible
        }
    }
</script>

<style>
	/* 这是页面的公用css */
		
		@import "../../common/uni.css";
			
		page {
			background-color: #F8F8F8;
			height: 100%;
			font-size: 32upx;
			line-height: 1.6;
		}
	
		checkbox,
		radio {
			margin-right: 10upx;
		}
	
		button {
			margin-top: 20upx;
			margin-bottom: 20upx;
		}
	
		form {
			width: 100%;
		}
		/* page */
	
		.container {
			display: flex;
			flex-direction: column;
			min-height: 100%;
			justify-content: space-between;
			font-size: 32upx;
			font-family: -apple-system-font, Helvetica Neue, Helvetica, sans-serif;
		}
		.page-head {
			padding: 60upx 50upx 80upx;
			text-align: center;
			line-height: initial;
			height: 60upx;
		}
	
		.page-head-title {
			display: inline-block;
			padding: 0 40upx;
			font-size: 30upx;
			height: 60upx;
			line-height: 60upx;
			color: #BEBEBE;
			box-sizing: border-box;
			border-bottom: 2upx solid #D8D8D8;
		}
	
		.page-head-desc {
			padding-top: 20upx;
			color: #9B9B9B;
			font-size: 32upx;
		}
	
		.page-body {
			width: 100%;
			flex-grow: 1;
			overflow-x: hidden;
		}
	
		.page-body-wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
		}
	
		.page-body-wording {
			text-align: center;
			padding: 200upx 100upx;
		}
	
		.page-body-info {
			display: flex;
			flex-direction: column;
			align-items: center;
			background-color: #fff;
			width: 100%;
			padding: 50upx 0 150upx 0;
		}
	
		.page-body-title {
			margin-bottom: 100upx;
			font-size: 32upx;
		}
	
		.page-body-text {
			font-size: 30upx;
			line-height: 52upx;
			color: #ccc;
		}
	
		.page-body-text-small {
			font-size: 24upx;
			color: #000;
			margin-bottom: 100upx;
		}
	
		.page-foot {
			margin: 100upx 0 30upx 0;
			text-align: center;
			color: #1aad19;
			font-size: 0;
		}
	
		.icon-foot {
			width: 152upx;
			height: 23upx;
		}
	
		.page-section {
			width: 100%;
			margin-bottom: 60upx;
		}
	
		.page-section_center {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	
		.page-section:last-child {
			margin-bottom: 0;
		}
	
		.page-section-gap {
			box-sizing: border-box;
			padding: 0 30upx;
		}
	
		.page-section-spacing {
			box-sizing: border-box;
			padding: 0 80upx;
		}
	
		.page-section-title {
			font-size: 28upx;
			color: #999999;
			margin-top: 10upx;
			margin-bottom: 10upx;
			padding-left: 30upx;
			padding-right: 30upx;
		}
	
		.page-section-gap .page-section-title {
			padding-left: 0;
			padding-right: 0;
		}
		/* example */
	
		.index-hd {
			padding: 90upx;
			text-align: center;
		}
	
		.index-logo {
			width: 140upx;
			height: 140upx;
		}
	
		.btn-area {
			margin-top: 60upx;
			box-sizing: border-box;
			width: 100%;
			padding: 0 30upx;
		}
	
		.image-plus {
			width: 150upx;
			height: 150upx;
			border: 2upx solid #D9D9D9;
			position: relative;
		}
	
		.image-plus-nb {
			border: 0;
		}
	
		.image-plus-text {
			color: #888888;
			font-size: 28upx;
		}
	
		.image-plus-horizontal {
			position: absolute;
			top: 50%;
			left: 50%;
			background-color: #d9d9d9;
			width: 4upx;
			height: 80upx;
			transform: translate(-50%, -50%);
			-webkit-transform: translate(-50%, -50%);
		}
	
		.image-plus-vertical {
			position: absolute;
			top: 50%;
			left: 50%;
			background-color: #d9d9d9;
			width: 80upx;
			height: 4upx;
			transform: translate(-50%, -50%);
			-webkit-transform: translate(-50%, -50%);
		}
	
		.color1 {
			background-color: #1AAD19;
			color: #FFFFFF;
		}
	
		.color2 {
			background-color: #2782D7;
			color: #FFFFFF;
		}
	
		.color3 {
			background-color: #F1F1F1;
			color: #353535;
		}
		
		
		.header {
		        display: flex;
		        flex-direction: row;
		        padding: 10px 15px;
		        align-items: center;
		    }
		
		    .input-view {
		        display: flex;
		        align-items: center;
		        flex-direction: row;
		        background-color: #e7e7e7;
		        height: 30px;
		        border-radius: 15px;
		        padding: 0 10px;
		        flex: 1;
		    }
		
		    .input {
		        flex: 1;
		        padding: 0 5px;
		        height: 24px;
		        line-height: 24px;
		        font-size: 16px;
		    }
		
		    .icon {
		        display: flex;
		        flex-direction: column;
		        justify-content: center;
		        margin-left: 10px;
		    }
		
		    .page-content {
		        padding: 15px;
		        font-size: 16px;
		        color: #6d6d6d;
		        text-indent: 2em;
		    }
		
		    .uni-list {
		        margin-top: 15px;
		    }
		
		    .drawer-content {
		        padding: 15px;
		    }
		
		    .drawer-content>.title {
		        font-size: 18px;
		    }
		
		    .drawer-content>.text {
		        font-size: 15px;
		    }
		
		    .drawer-content>.button {
		        font-size: 14px;
		    }
</style>
