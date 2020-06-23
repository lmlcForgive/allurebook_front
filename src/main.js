import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

import axios from 'axios'

// axios.defaults.baseURL = 'https://49.232.202.80:8084/api'
axios.defaults.baseURL = 'https://localhost:8084/api'
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // console.log(config)
  return config
})
Vue.prototype.$http = axios

// Vue.use(require('vue-wechat-title'))

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
