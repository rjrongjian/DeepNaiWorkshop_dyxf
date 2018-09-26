/*和电影有关的内容在此定义
 *采用海洋cms的电影资源站都可以通过此方式使用接口
 */
const SEA_CMS = 'seaCms';
const API_TYPE = 'kuYun';

var apiConfig = {
	"seaCms":{
		"kuYun":{//酷云 海洋cms资源api
			"movieTypeApi":"http://www.kuyun9.com/inc/s_ldg_kkm3u8.asp?ac=list&url=&rid=sheser.com&t=1101&h=&pg=&wd=",//电影类别
			"searchApi":"www.kuyun9.com/inc/s_ldg_kkm3u8.asp?ac=videolist&rid=sheser.com&pg=1&ids="//搜片获取到id后，通过此接口获取详情 ids处填写电影id
		}
	}
	
}

/**
 * 获取电影分类，同步方式
 */
var getMovieType = function(cmsType,apiType,userAgent){
	let result = "";
	if(SEA_CMS==cmsType){
		var apiUrl = apiConfig[cmsType][apiType];
		console.log("获取的api："+apiUrl['movieTypeApi']);
		if(apiUrl){
			uni.XMLHttpRequest()
			uni.request({
				url:apiUrl['movieTypeApi'], //
				//url:apiUrlTemp+'/inc/s_ldg_kkm3u8.asp',
				data() {//请求的参数
					return {
						/*
						ac: 'list',
						rid:'sheser.com',
						t:'1110'
						*/
					};
				},
				header: {
					'User-Agent': userAgent //自定义请求头信息
				},
				success: (res) => {
					console.log(res.data);
					this.text = 'request success';
				},
				fail:function(){
					
				}
			});
		}else{
			console.log("不能识别的api类型"+cmsType+","+apiType);
			return [];
		}
	}else{
		console.log("不能识别的cms类别"+cmsType);
		return [];
	}
	
	
	
}

export default {
    getMovieType
}