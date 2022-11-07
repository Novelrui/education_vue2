import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import settings from './settings'
import store from './store'
Vue.config.productionTip = false
Vue.prototype.$settings = settings
axios.defaults.withCredentials = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
