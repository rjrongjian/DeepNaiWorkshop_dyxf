<template>
	<view class="container">
		<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" class="swiper-box">
            <swiper-item v-for="item in itemList" :key="item" class="swiper-item">
                <text>{{item}}</text>
            </swiper-item>
        </swiper>
		
		<view class="index movie-list">
			
			<block v-for="(list, index) in currentMovieList" :key="index">
				<div class="row row-extra">
					<div class="card card-list2 card-extra" v-for="(item,key) in list" @click="goDetail(item)" :key="key">
						<image class="card-img card-list2-img-1" :src="item.pic"></image>
						<div class="card-num-view card-list2-num-view">
							<text class="card-num card-list2-num-1">{{item.type}}</text>
						</div>
						<div class="card-bottm-1 column">
							<div class="car-title-view-1 column">
								<text class="card-title-2 card-list2-title card-title-1">{{item.name}}[{{item.note}}]</span></text>
								<text class="card-title card-list2-title-1">更新时间:{{item.updateTime}}</text>
							</div>
							<!--
							<div class="car-title-view-1 row">
								<text class="card-title card-list2-title-1">更新时间:{{item.updateTime}}</text>
							</div>
							-->
							<!--<view @click.stop="share(item)" class="card-share-view"></view>-->
						</div>
					</div>
				</div>
			</block>
			<text class="loadMore">{{loadMoreText}}</text>
		</view>
		<uni-drawer :visible="rightDrawerVisible" mode="right" @close="closeRightDrawer" :movieCatsIntoSon="movieCats" :getMoviesByCatInSon="getMovies">
			
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
				itemList: [
					'item1',
					'item2',
					'item3'
				],
				indicatorDots: false,
				autoplay: false,
				interval: 5000,
				duration: 300,
				refreshing: false,
				isPullDownRefresh:false,
				//lists: [],
				rightDrawerVisible: false,
				movieCats:[],
				loadMoreText:"",
				currentMovieList:[],
				fetchPageNum: 1,
				totalPage:1,
				currentCat:-1, //-1 代表查询今日更新,
				currentCatName:null
			}
		},
		onLoad() {
			
			//加载电影分类
			setTimeout(() => { //防止app里由于渲染导致转场动画卡顿
				this.getMovieCat();
			}, 300)
			
			//加载电影，默认是今日电影
			this.getMovies();
		},
		onPullDownRefresh() {
			if(this.rightDrawerVisible){//下拉刷新时，如果分类列表展开，就关闭
				this.rightDrawerVisible = false;
			}
			
			if(this.isPullDownRefresh){//正在进行下拉刷新
				return;
			}
			this.isPullDownRefresh = true;
			uni.setNavigationBarTitle({
				title:"今日更新"
			})
			console.log("下拉刷新");
			this.refreshing = true;
			//下拉刷新，默认查得是最新电影,并且重新请求数据
			this.loadMoreText = "";
			this.currentMovieList = [];
			this.fetchPageNum = 1;
			this.totalPage = 1;
			this.currentCat = -1; //-1 代表查询今日更新
			this.currentCatName = null;
			
			//加载电影，默认是今日电影
			this.getMovies();
			console.log("下拉刷新结尾");
		},
		onReachBottom() {
			this.getMovies();
		},
		onNavigationBarButtonTap(e) {
			this.rightDrawerVisible = !this.rightDrawerVisible
		},
		methods: {
			getData() {
				uni.request({
					url: 'https://uniapp.dcloud.io/tuku/posts.php?page=' + (this.refreshing ? 1 : this.fetchPageNum) + '&per_page=10',
					success: (ret) => {
						if (ret.statusCode !== 200) {
							console.log("请求失败:", ret)
						} else {
							if (this.refreshing && ret.data[0].id === this.lists[0][0].id) {
								uni.showToast({
									title: "已经最新",
									icon: "none",
								})
								this.refreshing = false;
								uni.stopPullDownRefresh()
								return;
							}
							let list = [],
								lists = [],
								data = ret.data;
							for (let i = 0, length = data.length; i < length; i++) {
								let index = Math.floor(i / 2);
								list.push(data[i]);
								if (i % 2 == 1) {
									lists.push(list);
									list = [];
								}
							}
							console.log("得到lists", lists);
							if (this.refreshing) {
								this.refreshing = false;
								uni.stopPullDownRefresh()
								this.lists = lists;
								this.fetchPageNum = 2;
							} else {
								this.lists = this.lists.concat(lists);
								this.fetchPageNum += 1;
							}
						}
					}
				});
			},
			goDetail(e) {
				//console.log("看看传进来的值："+JSON.stringify(e));
				uni.navigateTo({
					url:"../movieDetail/movieDetail?data=" + JSON.stringify(e)
				})
			},
			
			share(e) {
				if (this.providerList.length === 0) {
					uni.showModal({
						title: "当前环境无分享渠道!",
						showCancel: false
					})
					return;
				}
				let itemList = this.providerList.map(function (value) {
					return value.name
				})
				uni.showActionSheet({
					itemList: itemList,
					success: (res) => {
						uni.share({
							provider: this.providerList[res.tapIndex].id,
							scene: this.providerList[res.tapIndex].type && this.providerList[res.tapIndex].type === 'WXSenceTimeline' ? 'WXSenceTimeline' : "WXSceneSession",
							type: 0,
							title:"uni-app模版",
							summary: e.title,
							imageUrl:e.img_src,
							href:"https://uniapp.dcloud.io",
							success: (res) => {
								console.log("success:" + JSON.stringify(res));
							},
							fail: (e) => {
								uni.showModal({
									content: e.errMsg,
									showCancel:false
								})
							}
						});
					}
				})
			},
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
			},
			getTodayMovies:function(){
				/*
				uni.setNavigationBarTitle({
					title: '今日更新',
					fail:function(){
						console.log("更新导航栏失败");
					}
				})*/
				var movieApiConfig = this.$myMovieApi.getMovieApi();
				if(movieApiConfig){
					var todayMovieApiUrl = movieApiConfig['todayMovieApi']+this.fetchPageNum;
					this.getMoviesBy(todayMovieApiUrl);
				}
				else{
					console.log("不能获取电影列表接口");
				}
			},
			getMoviesByCat:function(){
				var movieApiConfig = this.$myMovieApi.getMovieApi();
				if(movieApiConfig){
					var movieApiUrlByCat = movieApiConfig['getMovieByCat']+"&pg="+this.fetchPageNum+"&t="+this.currentCat;
					this.getMoviesBy(movieApiUrlByCat);
				}
				else{
					console.log("不能获取按分类获取电影列表的接口");
				}
				console.log("获取的catId："+this.currentCat+",获取的catName:"+this.currentCatName);
			},
			getMoviesBy:function(apiUrl){
				console.log("加载电影,抓取页码："+this.fetchPageNum+",总页数："+this.totalPage+",调用的api:"+apiUrl);
				if(this.fetchPageNum>this.totalPage){
					console.log("已经到最后一页,要抓取的页码："+this.fetchPageNum+",总页数:"+this.totalPage+"，抓取的分类id："+this.currentCat+",分类名称："+this.currentCatName);
					this.loadMoreText="已经到底了";
					return;
				}else{
					this.loadMoreText="加载中...";
					
				}
				uni.request({
					url: apiUrl,
					success: (ret) => {
						if (ret.statusCode !== 200) {
							console.log("获取今天更新的电影失败", ret)
						} else {
							
							try{
								//console.log("获取的电影分类数据："+ret.data);
								//解析xml数据
								var jsonObj = this.$myXml2Json.xml_str2json(ret.data);
								
								//解析所有电影信息
								var allMoviesArr = this.$myXml2Json.asArray(jsonObj.rss.list.video);
								
								let moviesTemp = [];
								let moviesIn = [];
								//TODO 待测，当返回的结果为空
								for(var i = 0;i<allMoviesArr.length;i++){
									//console.log("--------------------------------------------");
									var movieXml = allMoviesArr[i];
									
									if(this.currentCat==-1&&this.$myMovieApi.isShieldingCatIdForToday(movieXml.tid)){//如果是加载当天最新资源，需要检查是否此分类电影需要过滤
										continue;
									}
									
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
										if(moviesIn.length>=2){
											//this.currentMovieList.push(moviesIn);//不实时刷新已经加载的数据
											//moviesTemp.push(moviesIn);
											this.currentMovieList.push(moviesIn);
											moviesIn = [];
										}else{
											moviesIn.push(movieJson);
										}
										
										
									}
									
								}
								this.refreshing = false;
								//this.currentMovieList = moviesTemp;
								var pageTemp = jsonObj.rss.list;//分页信息
								this.fetchPageNum = this.fetchPageNum+1;
								this.totalPage = pageTemp._pagecount;
								
								this.loadMoreText = "";
								
								
							}catch(err){
								console.log("解析电影列表失败，原因："+err);
								this.loadMoreText = "获取电影失败，请下拉刷新";
								this.refreshing = false;
							}
							
							if(this.isPullDownRefresh){
								this.isPullDownRefresh = false;
								uni.stopPullDownRefresh();
							}
							
						}
					}
				});
				
			},
			getMovies:function(catId=null,catName=null){
				if(this.isPullDownRefresh){//在发送底部刷新时，允许进行下拉刷新，因为可能因为网络，导致过慢，可通过下拉加载，不过这样有个问题就是下拉刷新和底部加载的数据互相影响，非安全
					
				}else{
					if(this.refreshing){//当前页面正在刷新电影列表，不会再去请求
						return;
					}
				}
				
				this.refreshing = true;
				console.log("调用getMovies传进来的值，catId:"+catId+",catName:"+catName);
				if(catId){
					try{
						var gotCatId = parseInt(catId);
						if(this.currentCat!=gotCatId){//与当前加载的列表数据不同时，需要清空数据
							this.loadMoreText = "";
							this.currentMovieList = [];
							this.fetchPageNum = 1;
							this.totalPage = 1;
							this.currentCat = gotCatId; //-1 代表查询今日更新
							this.currentCatName = catName;
						}
						
					}catch(err){
						console.log("获取catId失败，获取的值"+catId);
					}
				}
				
				if(this.currentCat==-1){ //今日最新
					this.getTodayMovies();
				}else{//按分类查找
					if(catName&&""!=catName.trim()){
						this.currentCatName = catName;
						uni.setNavigationBarTitle({
							title: '专题：'+catName,
							fail:function(){
								console.log("更新导航栏失败");
							}
						})
					}
					this.getMoviesByCat();
				}
			},
			getMovieCat:function(){//获取电影分类,
				try{
					var movieApiConfig = this.$myMovieApi.getMovieApi();
					if(movieApiConfig){
						var movieTypeApiUrl = movieApiConfig['movieTypeApi'];
						uni.request({
							url: movieTypeApiUrl,
							success: (ret) => {
								if (ret.statusCode !== 200) {
									console.log("获取电影分类失败", ret)
								} else {
									//console.log("获取的电影分类数据："+ret.data);
									//解析xml数据
									var jsonObj = this.$myXml2Json.xml_str2json(ret.data);
									var allCatArr = this.$myXml2Json.asArray(jsonObj.rss.class.ty);
									
									let tabsTemp = [];
									for(var i = 0;i<allCatArr.length;i++){
										if(!this.$myMovieApi.isShieldingCatId(allCatArr[i]._id)){
											var movieJson = {name:allCatArr[i].__text,id:allCatArr[i]._id};
											//console.log("解析出的分类名："+allCatArr[i].__text+",catId:"+allCatArr[i]._id);
											tabsTemp.push(movieJson);
											
										}
										
									}
									this.movieCats = tabsTemp;
									
								}
							}
						});
					}else{
						console.log("加载电影分类失败");
					}
				}catch(e){
					console.log("加载电影分类出现异常",e);
				}
			}
		}
	}
</script>

<style>
	view{
		display: flex;
	}
	.swiper-box{
		background-color: #4CD964;
	}
	.container{
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		height: 100%;
		width: 100%;
	}
	.swiper-item {
		display: block;
		height: 300px;
		text-align: center;
		background-color: #007AFF;
	}
	.color1{
		background-color: #FF0000;/*红色*/
	}
	.color2{
		background-color: #8A6DE9;/*浅紫色*/
	}
	.movie-list{
		padding: 0px 0px;
		margin-top: 10px;
	}
	
	
	/*drawer单独样式*/
	.uni-list {
		margin-top: 15px;
	}

	.drawer-content {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		padding: 15px;
		flex: 1;
		/*background-color: #2782D7;*/
		overflow: scroll;
		
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
	/*drawer单独样式结束*/
	
	.row-extra{
		display: flex;
		justify-content:center;
		/*background-color: #007AFF;*/
		
	}
	.card-extra{
		/*background-color: #8A6DE9;*/
		padding-left: 0px;
		margin-left: 10px;
		margin-right: 10px;
		margin-top: 5px;
	}
	.card-list2-num-view {
		height: 27px;
		border-radius: 8px;
		padding-bottom: 5px;
		/*background-color: #86E65A;*/ /*右上角的颜色*/
	}
	.card-bottm-1 {
		justify-content:center;
		align-items: center;
	}
	
	.card-list2-title-1 {
		font-size: 20px;
		margin-top:5px;
		/*background-color: #8A6DE9;*/
		align-self:center;
	}
	
	.card-title-1{
		padding-bottom: 2px;
		/*
		padding-left: 20px;
		padding-right: 20px;
		background-color: #4CD964;*/
		padding-left: 2%;
		padding-right: 2%;
		width: 96%;
		/*text-align:left*/
	}
	
	.card-title-2 {
		
		flex: 1;
		font-size: 30px;
		text-align: center;
		color: #555555;
		text-overflow: ellipsis;
		lines: 2;
		display: -webkit-box;
		white-space: normal;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		
		 
	}
	
	.car-title-view-1 {
		
		padding: 14px 0px 14px 0px;
		/*background-color: #777777;*/
		width: 100%;
		
	}
	.card-list2-img-1 {
		width: 345px;
		height: 476px;
	}

</style>
