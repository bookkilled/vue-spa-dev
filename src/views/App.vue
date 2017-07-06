<template>
  <div id="app">
    <transition  name="slide-right" mode="out-in">
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

</style>
