<template>
  <div id="app">
    <transition :name="tsclass">
     <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      showhead: false,
      tsclass: 'slide-left'
    }
  },
  // 监听路由
  watch: {
    '$route' (to, from) {
      let isBack = this.$router.isBack && this.$router.isBack  //  监听路由变化时的状态为前进还是后退
　　　 if(isBack) {
　　　　　this.tsclass = 'slide-right'
　　　 } else {
　　　　　this.tsclass = 'slide-left'
　　　　}
　　    this.$router.isBack = false
    }
  }
}
</script>

<style>
.child-view {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all .3s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
</style>
