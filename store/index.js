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
        login(state, userName,statusCode,expireTime) {
            state.userName = userName || '游客';
			state.statusCode = statusCode || "";
			state.expireTime = expireTime || "";
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
		}
    }
})

export default store
