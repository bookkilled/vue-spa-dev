<template>
  <div>
    <m-header v-if="showhead"></m-header>
    <div v-bind:class="{pt44: showhead}">
      <h1>Hello App!</h1>
      <p>
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to="/login">Go to login</router-link>
        <router-link to="/">Go to home</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import MHeader from '../components/header.vue'
export default {
  name: 'app',
  components: {
      MHeader
  },
  data () {
    return {
      showhead: true, // 是否需要现实头部
      msg: 'Welcome to Hello'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
