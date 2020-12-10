import axios from 'axios'


const MyHttpSERVER ={}
MyHttpSERVER.install =(Vue) =>{

   axios.defaults.baseURL ="http://39.98.74.46:8081"  


    // 添加请求拦截器
axios.interceptors.request.use(function (config) {
   if(config.url !== 'Login'){
      const AUTH_TOKEN = sessionStorage.getItem("access_token");
      config.headers["Authorization"] = AUTH_TOKEN;
   }
   return config;
 }, function (error) {
   // 对请求错误做些什么
   return Promise.reject(error);
 });
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
   // 对响应数据做点什么
   return response;
 }, function (error) {
   // 对响应错误做点什么
   return Promise.reject(error);
 });

 Vue.prototype.$http = axios
}

export default MyHttpSERVER
