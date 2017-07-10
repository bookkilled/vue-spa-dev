<template>
  <div>
    <m-header v-if="showhead"></m-header>
    <div v-bind:class="{pt44: showhead}">
      <p class="nav">Page: home</p>
      <ul class="linklist">
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <li><router-link to="/login">Go to login</router-link></li>
        <li><router-link :to="{path:'/login',query: {name:'bookkilled'}}">Go to home</router-link></li>
        <li><span @click="tologin">去登录页</span></li>
        <li><span @click="toactive">列表接口</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
import router from '../routes'
import MHeader from '../components/header.vue'
import * as api from '../api'
// import { setTit } from '../assets/lib/base'

export default {
  name: 'app',
  components: {
      MHeader
  },
  data () {
    return {
      showhead: false, // 是否需要现实头部
      msg: 'Welcome to Hello'
    }
  },
  methods: {
    tologin: function () {
      router.push({ path: '/login', query: { name: 'svenzhou', age: 28 }})
    },
    toactive: function () {
      router.push({ path: '/active', query: { pageNo: 'A001' }})
    }
  },
  beforeCreate: function () {
      console.log('login 组件实例化之前')
      api.getJson().then(function (res) {
          
      },function (err) {
          
      }).always(function(){
         
      });
  },
  beforeRouteEnter (to, from, next) {
      console.log('APP载入页面：', to.path, from.path)
      localStorage.setItem('proLink', from.path)
      next()
  },
  beforeRouteLeave (to, from, next) {
      console.log('APP离开页面：',to.path, from.path)
      next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
