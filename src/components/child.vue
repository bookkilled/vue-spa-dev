<template>
  <div class="child">
    <span class="btn" @click="showtoast('子调父')">显示Toast(子调父)</span>
  </div>
</template>

<script>
export default {
  name: 'mtoast',
  data: function () {
    return {
      // autoclosed: true
    }
  },
  methods: {
    showtoast: function (tips) {
      this.$emit('showtoast', tips)
    }
  },
  mounted: function () {
    
  }
}
</script>
<style lang="less" scoped>
// @import '../styles/components/child.less';
</style>