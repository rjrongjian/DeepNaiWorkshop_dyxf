<template>
	<view class="main">
		<view class="header-1">
			<view class="input-view-1">
				<uni-icon type="search" size="22" color="#666666" ></uni-icon>
				<input confirm-type="search" @confirm="confirm" class="input-1" type="text" placeholder="输入搜索关键词" v-model="searchKey"/>
			</view>
			
		</view>
		
		<!--
		<view class="page-content">
			这是抽屉式导航组件使用示例，可以指定菜单左侧或者右侧弹出（仅初始化生效），组件内部可以放置任何内容。点击页面右上角的按钮即可显示导航菜单。
		</view>
		-->
		<view class="page-content-1">
			<view class="uni-card">
				<view class="uni-list">
					<block v-if="currentMovieList&&currentMovieList.length>0">
						<view class="uni-list-cell-divider">
							搜索结果：
						</view>
						<block v-for="(item, index) in currentMovieList" :key="index">
							<view class="uni-list-cell" hover-class="uni-list-cell-hover">
								<view class="uni-list-cell-navigate uni-navigate-right" @tap="goDetail(item)">
									{{item.name}}[{{item.note}}]
								</view>
							</view>
						</block>
						
					</block>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from '../../components/uni-icon.vue';

	export default {
		components: {
			uniIcon
		},
		data() {
			return {
				searchKey:"",
				isSearching:false,
				currentMovieList:[]
			}
		},
		methods:{
			item1() {
				
				uni.showToast({
					title: 'item1'
				});
			},
			item2() {
				
				uni.showToast({
					title: 'item2'
				});
			},
			confirm() {
				if(!this.searchKey){
					uni.showToast({
						icon:"none",
						title: '请指定关键字'
					})
					return;
				}
				this.searchMovie();
			},
			goDetail(e) {
				console.log("看看传进来的值："+JSON.stringify(e));
				uni.navigateTo({
					url:"../movieDetail/movieDetail?data=" + JSON.stringify(e)
				})
			},
			searchMovie(){
				
				var movieApiConfig = this.$myMovieApi.getMovieApi();
				if(movieApiConfig){
					var searchMovieIdsUrl = movieApiConfig['searchMovieIds']+this.searchKey;
					//显示加载提示框
					uni.showLoading();
					this.currentMovieList = [];
					console.log("获取的搜索url："+searchMovieIdsUrl);
					
					uni.request({
						url: searchMovieIdsUrl,
						success: (ret) => {
							
							if (ret.statusCode !== 200) {
								//隐藏加载提示框
								uni.hideLoading();
								
								
								uni.showModal({
									title: "温馨提示",
									content: '搜索失败['+ret.statusCode+']，请加QQ群联系群主',
									showCancel: false,
									confirmText: "确定"
								});
	
							} else {
								if(ret.data){//分析搜索结果
									try{
										//解析xml数据
										var jsonObj = this.$myXml2Json.xml_str2json(ret.data);
										let recordCount = jsonObj.rss.list._recordcount;
										console.log("通过关键词匹配的记录数"+recordCount);
										if(recordCount&&recordCount>0){
											//解析所有电影信息
											var allMoviesArr = this.$myXml2Json.asArray(jsonObj.rss.list.video);
											
											let moviesTemp = [];
											let moviesIn = [];
											//TODO 待测，当返回的结果为空
											for(var i = 0;i<allMoviesArr.length;i++){
												//console.log("--------------------------------------------");
												var movieXml = allMoviesArr[i];
												/*
												if(this.currentCat==-1&&this.$myMovieApi.isShieldingCatIdForToday(movieXml.tid)){//如果是加载当天最新资源，需要检查是否此分类电影需要过滤
													continue;
												}
												*/
												if(!this.$myMovieApi.isShieldingMovieId(movieXml.id)){//某个具体的电影过滤
													var updateTimeTemp = movieXml.last;
													var idTemp = movieXml.id;
													var nameTemp = movieXml.name;
													var typeTemp = movieXml.type;
													var picTemp = movieXml.pic;
													var languageTemp = movieXml.lang;
													var areaTemp = movieXml.area;
													var yearTemp = movieXml.year;
													var noteTemp = movieXml.note;
													var actorTemp = movieXml.actor;
													var directorTemp = movieXml.director;
													var desTemp = movieXml.des;
													var movieUrlArrTemp = this.$myXml2Json.asArray(movieXml.dl.dd);
													console.log("name:"+nameTemp);
													/*
													console.log("updateTime："+updateTimeTemp);
													console.log("id:"+idTemp);
													console.log("name:"+nameTemp);
													console.log("type:"+typeTemp);
													console.log("pic:"+picTemp);
													console.log("language:"+languageTemp);
													console.log("area:"+areaTemp);
													console.log("year:"+yearTemp);
													console.log("note:"+noteTemp);
													console.log("actor:"+actorTemp);
													console.log("director:"+directorTemp);
													console.log("des"+desTemp);
													*/
													
													//以免转json报错  &mdash; 等以及html元素，会出现转义失败
													if(desTemp){
														desTemp = desTemp.replace(new RegExp("<div>",'g'),"");
														desTemp = desTemp.replace(new RegExp("</div>",'g'),"");
														desTemp = desTemp.replace(new RegExp("&mdash;",'g'),"-");
														desTemp = desTemp.replace(new RegExp("&",'g'),"");
													}
													let resUrl = {};
													for(var j = 0;j<movieUrlArrTemp.length;j++){
														var isM3U8Temp = movieUrlArrTemp[j]._flag;
														var resTemp = movieUrlArrTemp[j];
														//console.log("isM3U8Temp:"+isM3U8Temp+",看dd:"+resTemp);
														//console.log("flag:"+isM3U8Temp);
														//console.log("res:"+resTemp);
														if(isM3U8Temp&&isM3U8Temp.indexOf("m3u8")!=-1){
															isM3U8Temp = "m3u8";
														}
														var resTemp1 = resTemp.toString();
														
														
														resUrl[isM3U8Temp] = resTemp1;
														
														
													}
													var movieJson = {id:idTemp,updateTime:updateTimeTemp,name:nameTemp,type:typeTemp,pic:picTemp,language:languageTemp,area:areaTemp,year:yearTemp,note:noteTemp,actor:actorTemp,director:directorTemp,des:desTemp,resUrl:resUrl};
													this.currentMovieList.push(movieJson);
													
													/*
													if(moviesIn.length>=2){
														//this.currentMovieList.push(moviesIn);//不实时刷新已经加载的数据
														//moviesTemp.push(moviesIn);
														this.currentMovieList.push(moviesIn);
														moviesIn = [];
													}else{
														moviesIn.push(movieJson);
													}
													*/
													
												}
												
											}
											uni.hideLoading();
										}else{
											//隐藏加载提示框
											uni.hideLoading();
											uni.showToast({
												title: "暂未搜到结果，请调整关键词",
												duration: 2000,
												icon:'none'
											});
										}
										
										
										
									}catch(e){
										//隐藏加载提示框
										uni.hideLoading();
										uni.showToast({
											title: "获取搜索结果失败",
											duration: 2000,
											icon:'none'
										});
									}
								}else{
									//隐藏加载提示框
									uni.hideLoading();
									uni.showToast({
										title: "获取搜索结果失败",
										duration: 2000,
										icon:'none'
									});
								}
								
							}
						}
					});
					
					
					
				}
				else{
					console.log("不能获取电影列表接口");
				}
				
				
			}
		},
		
		onPullDownRefresh() {
			//如果正在通过接口访问数据而进行了下拉刷新，还是会调用接口
			/*
			if(this.isSearching){
				uni.hideLoading();
			}
			this.searchKey="";
			uni.showToast({
				title: '初始化成功'
			});
			uni.stopPullDownRefresh();
			*/
		   uni.showToast({
		   	title: '初始化搜索框'
		   });
		   setTimeout(function(){
			   uni.reLaunch({
			   	url:"../searchMovie/searchMovie"
			   })
		   },1000);
		}
	}
</script>

<style>
	.header-1 {
		display: flex;
		flex-direction: row;
		padding: 10px 15px;
		align-items: center;
	}

	.input-view-1 {
		display: flex;
		align-items: center;
		flex-direction: row;
		background-color: #e7e7e7;
		height: 60px;
		border-radius: 15px;
		padding: 0 10px;
		flex: 1;
	}

	.input-1 {
	   	flex: 1;
	   	height: 60px;
	   	font-size: 38px;
	   	align-items: center;
		
	}
	
	

	.icon {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: 10px;
	}

	.page-content {
		padding: 15px;
		font-size: 26px;
		color: #6d6d6d;
		text-indent: 2em;
		/*background-color: #007AFF;*/
	}
	.page-content-1 {
		padding:15px 0px 0px 0px;
		font-size: 26px;
		color: #6d6d6d;
		text-indent: 2em;
		/*background-color: #007AFF;*/
		
	}
	.main{
		/*background-color: #777777;*/
		width:100%;
	}
	
</style>
