import Vue from 'vue'
import App from './App'
import store from './store'

//xml转json工具
//详细使用见https://github.com/abdmob/x2js
import Xml2Json from './common/xml2json';
Vue.prototype.$myXml2Json = new Xml2Json();

//movie config
import MovieApi from './common/movieApi';
Vue.prototype.$myMovieApi = MovieApi;

Vue.prototype.$store = store

//Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
