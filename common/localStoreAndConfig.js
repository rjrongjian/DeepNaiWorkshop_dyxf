const USERS_KEY = 'USER_NAME_KEY';
const STATUS_KEY = 'STATUS_KEY';
const EXPIRE_TIME_KEY = 'EXPIRE_TIME_KEY';
const HAS_LOGIN_KEY = 'HAS_LOGIN_KEY';


let loginData = {
	username:"游客",
	statusCode:"",
	expireTime:"",
	hasLogin:false
}

/**
 * 同步手机中存储的配置信息到内存中
 */
let syncLocalStoreDataToMemory = function(){
	let username = uni.getStorageSync(USERS_KEY);
	let statusCode = uni.getStorageSync(STATUS_KEY);
	let expireTime = uni.getStorageSync(EXPIRE_TIME_KEY);
	let hasLogin = uni.getStorageSync(HAS_LOGIN_KEY);
	if(username){
		loginData.username = username;
	}else{
		loginData.username = "游客";
	}
	
	if(statusCode){
		loginData.statusCode = statusCode;
	}else{
		loginData.statusCode = "";
	}
	
	if(expireTime){
		loginData.expireTime = expireTime;
	}else{
		loginData.expireTime = "";
	}
	
	
	if(hasLogin){
		loginData.hasLogin = hasLogin;
	}else{
		loginData.hasLogin = false;
	}
	
	
	return loginData;
}

/**
 * 获取内存中的登陆数据
 * @param isUpdateLocalStoreDataToMemory 是否先同步本地的数据在获取
 */
let getLoginData = function(isUpdateLocalStoreDataToMemory){
	if(isUpdateLocalStoreDataToMemory){
		return syncLocalStoreDataToMemory();
	}else{
		return loginData;
	}
}

/**
 * 更新登陆数据到内存和本地
 */
let updateToMemoryDataAndLocalStore = function(userName,statusCode,expireTime,hasLogin){
	if(jugeStrEmpty(userName)){
		userName = "游客";
	}
	if(jugeStrEmpty(statusCode)){
		statusCode = "";
	}
	if(jugeStrEmpty(statusCode)){
		statusCode = "";
	}
	if(jugeStrEmpty(hasLogin)){
		hasLogin = false;
	}
	
	//存储到内存
	loginData.username=userName;
	loginData.statusCode = statusCode;
	loginData.expireTime = expireTime;
	loginData.hasLogin = hasLogin;
	//存到本地
	uni.setStorageSync(USERS_KEY,userName);
	uni.setStorageSync(STATUS_KEY,statusCode);
	uni.setStorageSync(EXPIRE_TIME_KEY,expireTime);
	uni.setStorageSync(HAS_LOGIN_KEY,hasLogin);
	
}

let clearLocalStoreAndMemory = function(){
	//清理本地
	uni.setStorageSync(USERS_KEY,"游客");
	uni.setStorageSync(STATUS_KEY,"");
	uni.setStorageSync(EXPIRE_TIME_KEY,"");
	uni.setStorageSync(HAS_LOGIN_KEY,false);
	
	//清理内存
	loginData.username = "游客";
	loginData.statusCode = "";
	loginData.expireTime = "";
	loginData.hasLogin = false;
	
	return loginData;
	
}

//判断字符是否为空的方法
//貌似直接if(test) 这样判断就行了
let jugeStrEmpty = function(obj){
    if(typeof obj == "undefined" || obj == null || obj == ""){
        return true;
    }else{
        return false;
    }
}

export default {
	loginData,
    syncLocalStoreDataToMemory,
	getLoginData,
	updateToMemoryDataAndLocalStore,
	clearLocalStoreAndMemory
}