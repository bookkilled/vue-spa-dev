import 'styles/index.less'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 2.2.0新增 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
