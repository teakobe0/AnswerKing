import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
//引入viewer.css (图片放大查看工具)
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
Vue.use(Viewer, {
  defaultOptions: {
    title: 0,
    tooltip:1,
    rotatable:1,
    scalable:1,
    keyboard:0
  }
})
// 引入icon第三方
import './icon/iconfont.css'

//引入库
import store from './store'
//引入Axios
import axios from 'axios'

Vue.prototype.axios=axios;

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
