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
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)
// import {
//   Button,
//   Select, 
//   Input, 
//   Autocomplete, 
//   Menu, 
//   Option, 
//   MenuItem, 
//   Submenu, 
//   Steps, 
//   Step, 
//   Form, 
//   FormItem, 
//   Upload, 
//   Message, 
//   MessageBox, 
//   Loading, 
//   Notification, 
//   Breadcrumb, 
//   BreadcrumbItem,
//   Switch,
//   Dialog,
//   DatePicker,
//   Pagination,
//   Carousel,
//   CarouselItem,
//   Table,
//   TableColumn,
//   Tabs,
//   TabPane,
//   Col,
//   Radio,
//   RadioGroup,
//   RadioButton,
//   Alert,
//   Rate,
// } from 'element-ui';
// Vue.use(Button);
// Vue.use(Select);
// Vue.use(Input);
// Vue.use(Autocomplete);
// Vue.use(Menu);
// Vue.use(Option);
// Vue.use(MenuItem);
// Vue.use(Submenu);
// Vue.use(Steps);
// Vue.use(Step);
// Vue.use(Form);
// Vue.use(FormItem);
// Vue.use(Upload);
// Vue.use(Breadcrumb);
// Vue.use(BreadcrumbItem);
// Vue.use(Switch);
// Vue.use(Dialog);
// Vue.use(DatePicker);
// Vue.use(Pagination);
// Vue.use(Carousel);
// Vue.use(CarouselItem);
// Vue.use(Table);
// Vue.use(TableColumn);
// Vue.use(Tabs);
// Vue.use(TabPane);
// Vue.use(Col);
// Vue.use(Radio);
// Vue.use(RadioGroup);
// Vue.use(RadioButton);
// Vue.use(Alert);
// Vue.use(Rate);


// Vue.use(Loading.directive);
// Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$notify = Notification;
// Vue.prototype.$loading = Loading.service;
// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$message = Message;
// Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$confirm = MessageBox.confirm;

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
// 引入vue-easy-lightbox（图片放大工具）
// import Lightbox from 'vue-easy-lightbox'
// Vue.use(Lightbox)
// 引入icon第三方
import './icon/iconfont.css'

// 引入vue-i18n
// import VueI18n from 'vue-i18n'
// Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'en', // 将要切换的语言，可以通过url拼的参数获取，用户行为select选择获取，本地manifest配置获取等，根据场景动态获取
  messages: {
    'zh': require('./languages/zh.json'),  // 本地资源文件，我这里配2个语言，中文&英文，src下根据个人情况放置
    'en': require('./languages/en.json'),
    'ko': require('./languages/ko.json')
  }
});

//引入库
import store from './store'
//引入Axios
import axios from 'axios'
Vue.prototype.axios = axios;

// 统一后台接口地址
import URLport from './URLport'
Vue.prototype.URLport = URLport

// 引入vue-cookies
// import VueCookies from 'vue-cookies'
// Vue.use(VueCookies)

Vue.config.productionTip = false

Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)

}).$mount('#app')


