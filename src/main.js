import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 引入vue-easy-lightbox（图片放大工具）
// import Lightbox from 'vue-easy-lightbox'
// Vue.use(Lightbox)
// 引入icon第三方
import './icon/iconfont.css'

// import pay from 'https://www.paypal.com/sdk/js?client-id=AVplzXK74mZi6ltEo8QhoMMUdjc-OxXpinwbbgEtgePr8kT9zBMur4DtdQOOyNV76xUBRlcGm_llrO9o&currency=USD'
// Vue.prototype.pay = pay;

//引入库
import store from './store'
//引入Axios
import axios from 'axios'
Vue.prototype.axios = axios;

// 统一后台接口地址
import URLport from './URLport'
Vue.prototype.URLport = URLport


Vue.config.productionTip = false

Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})

new Vue({
  router,
  store,
  render: h => h(App)

}).$mount('#app')


