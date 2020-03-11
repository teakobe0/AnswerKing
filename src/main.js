import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入Analytics
import VueAnalytics from 'vue-analytics'
Vue.use(VueAnalytics, {
  id: 'UA-158201932-1', // 从配置中读取
  disableScriptLoader: true, // 必须在html中完成初始化，这里显式禁止去下载ga脚本
  router, // 确保路由切换时可以自动统计
  autoTracking: {
    pageviewOnLoad: false // 当通过网址进来时已经GA在初始化时就发起一次pageview的统计，这里不要重复统计
  }
});


// 路由守卫，进入页面的时候默认显示最顶上
router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
})
// router.afterEach((to, from) => {
//   ga('set', 'page', to.path)
//   ga('send', 'pageview')
// })



//引入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)



import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
// 引入vue-easy-lightbox（图片放大工具）
// import Lightbox from 'vue-easy-lightbox'
// Vue.use(Lightbox)
// 引入icon第三方
import './icon/iconfont.css'


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


