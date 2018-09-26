import Vue from 'vue'
import App from './App'

//xml转json工具
import Xml2Json from './common/xml2json.js';
Vue.prototype.$myXml2Json = new Xml2Json();


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
