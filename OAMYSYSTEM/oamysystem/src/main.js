import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'

import store from './store/index'
import http from './plugins/http'
import './assets/fontes/iconfont.css'
import moment from 'moment'
// import $ from 'jquery'
import { BootstrapVue,IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import './assets/rest.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import './assets/css/bootstrap.min.css'
// import './assets/js/bootstrap.min.js'


Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use($)
Vue.use(http)
// Vue.use(NProgress)
// 全局过滤器  处理日期
Vue.filter('fmtdate',(v)=>{
  // console.log(v);
  
  if(v=== null){
       return "0:0:0";
  }else{
    return moment(v).format('YYYY-MM-DD')
  }
  // return moment(v).format('YYYY-MM-DD')
 
})
/**
 * 引入axios网络请求
 */
// import axios from 'axios';
// import vueAxios from 'vue-axios';
// Vue.use(vueAxios, axios);
import 'element-ui/lib/theme-chalk/index.css'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')