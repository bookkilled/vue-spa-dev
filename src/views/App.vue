<template>
  <div id="app">
    <transition name="no-mode-translate-fade">
     <router-view class="childview"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      showhead: false
    }
  }
}
</script>

<style>
.childview { height: 100%; }
.no-mode-translate-fade-enter-active, .no-mode-translate-fade-leave-active {
  transition: all .5s;
}
.no-mode-translate-fade-enter, .no-mode-translate-fade-leave-active {
  opacity: 0;
}
.no-mode-translate-fade-enter {
  transform: translateX(100%);
}
.no-mode-translate-fade-leave-active {
  transform: translateX(-100%);
}

</style>
