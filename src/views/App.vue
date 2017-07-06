<template>
  <div id="app">
    <transition name="fadeOutLeft">
     <router-view></router-view>
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
.outLeftInRight-transition,
.fadeOutLeft-transition, 
.fadeInLeft-transition {
  transition: transform .3s ease-in-out;
}
/* 进入时的状态，从右开始 */
.outLeftInRight-enter,
.fadeInLeft-enter,
.fadeInLeft-leave {
  transform: translateX(100%);
}
/* 离开时的状态，向左移动 */
.outLeftInRight-leave,
.fadeOutLeft-enter,
.fadeOutLeft-leave {
  transform: translateX(-100%);
}
</style>
