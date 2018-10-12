<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row border">
				<text class="title">账号：</text>
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
	export default {
		data(){
			return{
				account:'',
				rechargeCode:''
			}
		},
		methods:{
			rechargeTime(){
				console.log("充值充值码");
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
