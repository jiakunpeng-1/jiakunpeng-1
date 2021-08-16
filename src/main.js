import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
// import request from './utils/request';
// Vue.prototype.$request = request;
// axios.defaults.baseURL = 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu';
Vue.use(VueAxios, axios)
Vue.use(ElementUI);
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')