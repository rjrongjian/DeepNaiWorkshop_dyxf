//易游网络验证全在此
//启用的接口线路(在登录界面选择)
let apiSelect="1";

let apiUrl = {
	"UserLogin":{
		"1":"http://w.eydata.net/839c03e916a2a8e5",
		"2":"http://w1.eydata.net/839c03e916a2a8e5",
		"3":"http://w4.eydata.net/839c03e916a2a8e5",
		"4":"http://w2.eydata.net/839c03e916a2a8e5",
		"5":"http://w3.eydata.net/839c03e916a2a8e5",
		"6":"http://w5.eydata.net/839c03e916a2a8e5"
	},
	"UserRegin":{
		"1":"http://w.eydata.net/970b34c066389489",
		"2":"http://w1.eydata.net/970b34c066389489",
		"3":"http://w4.eydata.net/970b34c066389489",
		"4":"http://w2.eydata.net/970b34c066389489",
		"5":"http://w3.eydata.net/970b34c066389489",
		"6":"http://w5.eydata.net/970b34c066389489"
	},
	"UserRecharge":{
		"1":"http://w.eydata.net/b6af9bff0a8a373c",
		"2":"http://w1.eydata.net/b6af9bff0a8a373c",
		"3":"http://w4.eydata.net/b6af9bff0a8a373c",
		"4":"http://w2.eydata.net/b6af9bff0a8a373c",
		"5":"http://w3.eydata.net/b6af9bff0a8a373c",
		"6":"http://w5.eydata.net/b6af9bff0a8a373c"
	},
	"GetExpired":{
		"1":"http://w.eydata.net/1f6208e5b7cc9208",
		"2":"http://w1.eydata.net/1f6208e5b7cc9208",
		"3":"http://w4.eydata.net/1f6208e5b7cc9208",
		"4":"http://w2.eydata.net/1f6208e5b7cc9208",
		"5":"http://w3.eydata.net/1f6208e5b7cc9208",
		"6":"http://w5.eydata.net/1f6208e5b7cc9208"
	},
	"CheckUserStatus":{
		"1":"http://w.eydata.net/a246b5c4c26efc10",
		"2":"http://w1.eydata.net/a246b5c4c26efc10",
		"3":"http://w4.eydata.net/a246b5c4c26efc10",
		"4":"http://w2.eydata.net/a246b5c4c26efc10",
		"5":"http://w3.eydata.net/a246b5c4c26efc10",
		"6":"http://w5.eydata.net/a246b5c4c26efc10"
	},
	"LogOut":{
		"1":"http://w.eydata.net/61b3173a01089775",
		"2":"http://w1.eydata.net/61b3173a01089775",
		"3":"http://w4.eydata.net/61b3173a01089775",
		"4":"http://w2.eydata.net/61b3173a01089775",
		"5":"http://w3.eydata.net/61b3173a01089775",
		"6":"http://w5.eydata.net/61b3173a01089775"
	},
	"GetAppCode":{//获取程序数据
		"1":"http://w.eydata.net/4ec486e2143192d2",
		"2":"http://w1.eydata.net/4ec486e2143192d2",
		"3":"http://w4.eydata.net/4ec486e2143192d2",
		"4":"http://w2.eydata.net/4ec486e2143192d2",
		"5":"http://w3.eydata.net/4ec486e2143192d2",
		"6":"http://w5.eydata.net/4ec486e2143192d2"
	},
	"GetVariable":{//获取变量数据 
		"1":"http://w.eydata.net/be75fabedfc71a0c",
		"2":"http://w1.eydata.net/be75fabedfc71a0c",
		"3":"http://w4.eydata.net/be75fabedfc71a0c",
		"4":"http://w2.eydata.net/be75fabedfc71a0c",
		"5":"http://w3.eydata.net/be75fabedfc71a0c",
		"6":"http://w5.eydata.net/be75fabedfc71a0c"
	},
	"GetBulletin":{//获取程序公告
		"1":"http://w.eydata.net/a785c7d10885be26",
		"2":"http://w1.eydata.net/a785c7d10885be26",
		"3":"http://w4.eydata.net/a785c7d10885be26",
		"4":"http://w2.eydata.net/a785c7d10885be26",
		"5":"http://w3.eydata.net/a785c7d10885be26",
		"6":"http://w5.eydata.net/a785c7d10885be26"
	},
	"UpdatePwd":{//修改用户密码
		"1":"http://w.eydata.net/5ff969d2bef16403",
		"2":"http://w1.eydata.net/5ff969d2bef16403",
		"3":"http://w4.eydata.net/5ff969d2bef16403",
		"4":"http://w2.eydata.net/5ff969d2bef16403",
		"5":"http://w3.eydata.net/5ff969d2bef16403",
		"6":"http://w5.eydata.net/5ff969d2bef16403"
	},
	"UpdatePwdByEmail":{//用户密码找回
		"1":"http://w.eydata.net/e82b0f76670b450a",
		"2":"http://w1.eydata.net/e82b0f76670b450a",
		"3":"http://w4.eydata.net/e82b0f76670b450a",
		"4":"http://w2.eydata.net/e82b0f76670b450a",
		"5":"http://w3.eydata.net/e82b0f76670b450a",
		"6":"http://w5.eydata.net/e82b0f76670b450a"
	},
	"GetUserData":{//获取用户数据
		"1":"http://w.eydata.net/db32af340de43d3b",
		"2":"http://w1.eydata.net/db32af340de43d3b",
		"3":"http://w4.eydata.net/db32af340de43d3b",
		"4":"http://w2.eydata.net/db32af340de43d3b",
		"5":"http://w3.eydata.net/db32af340de43d3b",
		"6":"http://w5.eydata.net/db32af340de43d3b"
	},
	"SetUserData":{//设置用户数据
		"1":"http://w.eydata.net/7a9c35a8934869a7",
		"2":"http://w1.eydata.net/7a9c35a8934869a7",
		"3":"http://w4.eydata.net/7a9c35a8934869a7",
		"4":"http://w2.eydata.net/7a9c35a8934869a7",
		"5":"http://w3.eydata.net/7a9c35a8934869a7",
		"6":"http://w5.eydata.net/7a9c35a8934869a7"
	}
	
}

let errInfo = {
	"-1":"网络链接失败",
	"-2":"请填写程序密钥",
	"-3":"数据异常",
	"-4":"数据异常",
	"-5":"错误的参数,请检查参数是否正确.",
	"-6":"还未登录",
	"-7":"私人服务器,没有权限进行登录.",
	"-8":"账户余额不足.",
	"-9":"注册用户达到上限",
	"-10":"VIP 插件,非 VIP 无法使用",
	"-11":"开启自动状态检测失败,还未登陆",
	"-12":"开启自动状态检测失败",
	"-13":"动态算法只支持独立服务器调用",
	"-14":"错误的调用.",
	"-15":"频繁调用,请等待10分钟后再做尝试",
	"-16":"接口未开启.",
	"-17":"错误的调用方式,请确认后台接口的调用方式",
	"-18":"服务器内部错误,请联系管理员解决",
	"-19":"接口调用失败,调用次数不足",
	"-20":"变量数据不存在",
	"-21":"机器码一样,无需转绑",
	"-23":"此接口开启了强制算法,但是没使用",
	"-101":"用户名填写错误,必须以字母开头6-16位字母或数字!",
	"-102":"用户不存在",
	"-103":"请先登陆再调用此方法",
	"-104":"密码填写错误,请输入6-16位密码！",
	"-105":"邮箱填写错误,请正确输入邮箱！",
	"-106":"用户名重复",
	"-107":"邮箱重复",
	"-108":"新密码输入错误",
	"-109":"用户名或密码错误",
	"-110":"用户使用时间已到期",
	"-111":"用户未在绑定的电脑上登陆",
	"-112":"用户在别的地方登陆",
	"-113":"过期时间有误",
	"-114":"登录数据不存在",
	"-115":"用户已被禁用",
	"-116":"密码修改申请过于频繁",
	"-117":"未输入机器码",
	"-118":"重绑次数超过限制",
	"-119":"使用天数不足,重绑失败",
	"-120":"注册失败,注册次数超过限制",
	"-121":"用户机器码不能超过32位",
	"-122":"用户已经被删除",
	"-123":"用户密码输入错误",
	"-124":"用户登录数达到最大",
	"-125":"错误的用户操作类别",
	"-126":"过期时间变更记录创建失败",
	"-127":"用户充值失败",
	"-128":"用户数据超过最大限制",
	"-129":"用户被开发者禁止使用,请咨询开发者是否被拉到黑名单",
	"-131":"用户使用次数不足",
	"-132":"用户使用点数不足",
	"-201":"程序不存在",
	"-202":"程序密钥输入错误",
	"-203":"程序版本号错误",
	"-204":"程序版本不存在",
	"-205":"用户未申请使用程序",
	"-206":"程序版本需要更新",
	"-207":"程序版本已停用",
	"-208":"程序未开启后台接口功能.(可在“程序”的“修改”界面开启后台接口功能)",
	"-209":"程序接口密码错误",
	"-210":"程序停止新用户注册",
	"-211":"程序不允许用户机器码转绑",
	"-301":"卡密输入错误",
	"-302":"卡密不存在",
	"-303":"卡密已经使用",
	"-304":"卡密已经过期",
	"-305":"卡密已经冻结",
	"-306":"卡密已经退换",
	"-308":"卡密已经换卡",
	"-401":"单码卡密错误",
	"-402":"单码卡密机器码错误",
	"-403":"单码卡密IP错误",
	"-404":"单码卡密类型错误",
	"-405":"单码卡密被禁用",
	"-406":"单码卡密不存在",
	"-407":"单码卡密未激活",
	"-408":"单码卡密已经使用",
	"-409":"单码充值卡密错误",
	"-410":"单码卡密过期",
	"-420":"单码卡密在别的电脑上登录",
	"-421":"单码卡密超过最大登录数,如果确定已经下线,请等60分钟后重试",
	"-422":"单码IP一样,无需转绑",
	"-501":"单码管理信息错误",
	"-502":"单码机器码转绑次数超过限制",
	"-503":"单码机器码转绑后将过期",
	"-504":"单码IP转绑次数超过限制",
	"-505":"单码IP转绑后将过期",
	"-506":"单码未开启机器码验证,无需转绑.",
	"-507":"单码未开启IP地址验证,无需转绑",
	"101":"充值成功!填写的推荐人不存在",
	"102":"充值成功!填写推荐人获赠时间失败",
	"103":"充值成功!添加推荐信息失败",
	"104":"充值成功!推荐人获赠时间失败",
	"105":"充值成功!充值的卡密类别不支持推荐人功能",
	"106":"充值成功!充值的卡密类别推荐功能已关闭",
	"107":"充值成功!成功使用推荐功能",
	"108":"充值成功!但是填写的推荐人无效"
}

export default {
    yiYouApiSelected:apiSelect,
	yiYouApiUrl:apiUrl,
	yiYouErrInfo:errInfo
}