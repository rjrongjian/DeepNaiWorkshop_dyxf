import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        username:"游客",
        statusCode:"",
        expireTime:"",
        hasLogin:false
    },
    mutations: {
        login(state, loginData) {//只能一个参数
			
			//console.log("要存入的数据："+loginData.username+","+loginData.statusCode+","+loginData.expireTime);
            state.username = loginData.username || '游客';
			state.statusCode = loginData.statusCode || "";
			state.expireTime = loginData.expireTime || "";
            state.hasLogin = true;
        },
        logout(state) {
            state.userName = '游客';
            state.statusCode = "";
            state.expireTime = "";
            state.hasLogin = false;
        },
		clearMemory(state){
			state.userName = '游客';
			state.statusCode = "";
			state.expireTime = "";
			state.hasLogin = false;
		},
		syncLocalStoreToMemory(state,loginData){
			
			state.username = loginData.username || '游客';
			state.statusCode = loginData.statusCode || "";
			state.expireTime = loginData.expireTime || "";
			state.hasLogin = loginData.hasLogin || false;
		}
    }
})

export default store
