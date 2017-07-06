import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Active from '../views/Active.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home
    },
    {
      path: '/login',
      name: '用户登录',
      component: Login
    },
    {
      path: '/active',
      name: '列表页',
      component: Active
    }
  ]
})
