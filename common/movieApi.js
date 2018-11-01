/*和电影有关的内容在此定义
 *采用海洋cms的电影资源站都可以通过此方式使用接口
 */


//需通过接口动态配置的选项---------------------------------------------------------
/**
 * 当前选择的影视资源使用哪种cms解析
 */
let selectedCmsType = 'seaCms';
/**
 * 当前选择的影视资源适配的哪个资源网站
 */
let selectedApiType = 'kuYun';

/**
 * 当前cms和资源下，屏蔽的电影分类,对应分类的电影还是能搜的到
 * 同时，由于分类导航页面最多只能有12个分类，这里也要屏蔽一些
 */
let shieldingCatIds = {"catId_40":"伦理","catId_41":"微电影","catId_42":"纪录片","catId_2":"香港剧","catdId_3":"台湾剧","catId_4":"日本剧","catId_30":"综艺节目","catId_37":"剧情片"};

/**
 * 首页，最新电影中，哪类资源不展示
 */
let shieldingCatIdsForToday = {"catIdForToday_40":"伦理"};

/**
 * 当前cms和资源下，屏蔽的电影编号
 */
//举例
//var shieldingMovieId = {"movieId_123","色戒"}
let shieldingMovieId = {}

let m3u8OrOtherRes = "m3u8";//使用哪种资源 目前酷云只有一种

//资源用哪种协议，http https null（代表资源本身是什么就是什么）
//注意：通过接口获取的最新的资源，也有可能播放不了，因为在转码
//注意：（1）video组件，切换同一个资源的不同协议（http和https）会报错
//     （2）不是每个资源都有http和https，所以最好选择资源返回的是什么协议就是什么
let currentSelectedHttpOrHttps = null;
//提示中使用的qq群
let qqQun = {"qunNum":"807164767","qunName":"最新电影分享"};

let qq = "1633545776";
//解析接口
let rechargeUrl = "https://k.1ka123.com/shop-38782.html";

//初始banner
//openType 1 webview打开 2 浏览器打开
let banners = [{url:"https://tbq283.zetianhui.net/wx/index.html",imgUrl:"../../static/banner/tbq.jpg",openType:1}]


//无需动态配置的选项-----------------------------------------------------------------

let CMS_TYPE_SEA = 'seaCms';
let API_TYPE_KUYUN = 'kuYun';

let apiConfig = {
	"seaCms":{
		"kuYun":{//酷云 海洋cms资源api
			"movieTypeApi":"http://www.kuyun9.com/inc/s_ldg_kkm3u8.asp?ac=list&url=&rid=sheser.com&t=1101&h=&pg=&wd=",//电影类别
			"getMovieById":"http://www.kuyun9.com/inc/s_ldg_kkm3u8.asp?ac=videolist&rid=sheser.com&pg=1&ids=",//搜片获取到id后，通过此接口获取详情 ids处填写电影id,
			"todayMovieApi":"http://www.kuyun9.com/inc/s_ldg_kkm3u8.asp?ac=videolist&rid=sheser.com&t=0&h=24&pg=",//今日最新电影,
			"getMovieByCat":"http://www.kuyun9.com/inc/s_ldg_kkm3u8.asp?ac=videolist&rid=sheser.com",//获取指定电影分类下的所有电影
			"searchMovieIds":"http://www.kuyun9.com/inc/s_ldg_kkm3u8.asp?ac=videolist&rid=sheser.com&pg=1&wd="//搜索电影资源
		}
	}
	
}


/**
 * 获取当前选择的api接口
 */
let getMovieApi = function(){
	let apiJson = apiConfig[selectedCmsType][selectedApiType];
	if(!apiJson){
		return null;
	}else{
		return apiJson;
	}
}

/**
 * 过滤某个指定的电影分类以便不在分类列表显示
 */
let isShieldingCatId = function(catId){
	try{
		let temp = shieldingCatIds["catId_"+catId];
		if(temp){
			return true;
		}else{
			return false;
		
		}
	}catch(err){
		console.log("解析catId失败，原因"+err);
		//console.log("无效的catId值："+catId);
		return false;
	}
}
/**
 * 加载今天更新的电影时，过滤指定的分类的电影
 */
let isShieldingCatIdForToday = function(catId){
	try{
		let temp = shieldingCatIdsForToday["catIdForToday_"+catId];
		if(temp){
			return true;
		}else{
			return false;
		
		}
	}catch(err){
		console.log("解析catId失败，原因"+err);
		//console.log("无效的catId值："+catId);
		return false;
	}
}
/**
 * 过滤掉指定电影，防止版权问题，搜索电影里也要加这个
 */
let isShieldingMovieId = function(movieId){
	try{
		let temp = shieldingMovieId["movieId_"+movieId];
		if(temp){
			return true;
		}else{
			return false;
		
		}
	}catch(err){
		console.log("解析movieId失败，原因"+err);
		//console.log("无效的catId值："+catId);
		return false;
	}
}

let jxParserUrl="https://jx.618g.com/?url=";


export default {
    selectedCmsType,
	selectedApiType,
	getMovieApi,
	shieldingCatIds,
	isShieldingCatId,
	isShieldingMovieId,
	isShieldingCatIdForToday,
	m3u8OrOtherRes,
	currentSelectedHttpOrHttps,
	qqQun,
	jxParserUrl,
	qq,
	rechargeUrl,
	banners
}