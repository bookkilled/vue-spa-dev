<template>
    <header id="m-header" class="brand-title">
        <span class="brand-title-back" @click="goback"></span>
        {{ title }}
    </header>
</template>

<script>
export default {
  name: 'm-header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: this.$route.meta.title
    }
  },
  methods: {
    goback: function () {
      // routes/index 定义同意返回方法
      this.$router.goBack();
    }
  }
}
</script>

<style lang="less" scoped>
// @import '../styles/components/header.less';
</style>

