<template>
	<view class="swiper-box">
		<view class="item color1">元素一</view>
		<view class="item color2">元素二</view>
		<view class="item color1">元素一</view>
		<view class="item color2">元素二</view>
		<view class="item color1">元素一</view>
		<view class="item color2">元素二</view>
		<button @click="getData()">测试</button>
	</view>
	<!--
	<swiper>
		
		<swiper-item class="color1">
			a
		</swiper-item>
		<swiper-item class="color2">
			b
		</swiper-item>
		<swiper-item class="color3">
			v
		</swiper-item>
		
	</swiper>
	-->
</template>
<script>
	//方法1对应getData2
	//var Xml2Json2 = require('../../common/xml2json');
	//方法2对应getData1
	//import Xml2Json from '../../common/xml2json.js';
	
	export default {
		methods:{
			getData1:function(){
				/*
				var myXml2Json = new Xml2Json();
				var xmlText = "<MyRoot><test>Success</test><test2><item>val1</item><item>val2</item></test2></MyRoot>";
				
				console.log("结果："+myXml2Json.xml_str2json(xmlText));
				*/
			},
			getData2:function(){
				var myXml2Json = new Xml2Json2();
				var xmlText = "<MyRoot><test>Success</test><test2><item>val1</item><item>val2</item></test2></MyRoot>";
				var jsonObj = myXml2Json.xml_str2json(xmlText);
				console.log("结果："+jsonObj.MyRoot.test);
			},
			getData:function(){
				var xmlText = "<MyRoot><test>Success</test><test2><item>val1</item><item>val2</item></test2></MyRoot>";
				var jsonObj = this.$myXml2Json.xml_str2json(xmlText);
				console.log("共享结果："+jsonObj.MyRoot.test);
			},
			getXml:function(xmlStr){
				
				var parser = new DOMParser();
				var doc = parser.parseFromString( xmlStr, "application/xml");
				
				var params = doc.querySelectorAll('parameter');
				return doc;
			}
		}
		
	}
</script>

<style>
	.swiper-box{
		/*
		height: 100%;
		width: 100%;
		
		flex-wrap:wrap;*/
		width: 100%;
		background-color:#8A6DE9;/*紫色*/
		
	}
	.color1{
		background-color: #007AFF;
	}
	.color2{
		background-color: #4CD964;
	}
	.color3{
		background-color:#8A6DE9;
	}
	
	.item{
		/*flex:1;*/
		flex-grow: 1;
		width:100%;
		height: 100px;
	}
</style>
