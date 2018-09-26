/*和电影有关的内容在此定义
 *采用海洋cms的电影资源站都可以通过此方式使用接口
 */


//需通过接口动态配置的选项---------------------------------------------------------
/**
 * 当前选择的影视资源使用哪种cms解析
 */
var selectedCmsType = 'seaCms';
/**
 * 当前选择的影视资源适配的哪个资源网站
 */
var selectedApiType = 'kuYun';

/**
 * 当前cms和资源下，屏蔽的电影分类,对应分类的电影还是能搜的到
 */
var shieldingCatIds = {"catId_40":"伦理"};




//无需动态配置的选项-----------------------------------------------------------------

var CMS_TYPE_SEA = 'seaCms';
var API_TYPE_KUYUN = 'kuYun';

var apiConfig = {
	"seaCms":{
		"kuYun":{//酷云 海洋cms资源api
			"movieTypeApi":"http://www.kuyun9.com/inc/s_ldg_kkm3u8.asp?ac=list&url=&rid=sheser.com&t=1101&h=&pg=&wd=",//电影类别
			"searchApi":"www.kuyun9.com/inc/s_ldg_kkm3u8.asp?ac=videolist&rid=sheser.com&pg=1&ids="//搜片获取到id后，通过此接口获取详情 ids处填写电影id
		}
	}
	
}


/**
 * 获取当前选择的api接口
 */
var getMovieApi = function(){
	var apiJson = apiConfig[selectedCmsType][selectedApiType];
	if(!apiJson){
		return null;
	}else{
		return apiJson;
	}
}

var isShieldingCatId = function(catId){
	try{
		var temp = shieldingCatIds["catId_"+catId];
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

export default {
    selectedCmsType,
	selectedApiType,
	getMovieApi,
	shieldingCatIds,
	isShieldingCatId
}