<template>
<div>
  <m-header v-if="showhead"></m-header>
  <div v-bind:class="{pt44: showhead}">
    <div class="grid-box ma-tb10">
        <div class="grid-box-row">
            <div class="col-both">手机号</div>
            <div class="col-both mid">
                <input type="text" class="inp" pattern="[0-9]*" placeholder="请输入手机号" id="mobile" maxlength="11">
            </div>
            <div class="col-both"></div>
        </div>
        <div class="grid-box-row">
            <div class="col-both">验证码</div>
            <div class="col-both mid">
                <input type="text" class="inp" placeholder="请输入验证码" id="imgcode" maxlength="5">
            </div>
            <div class="col-both">
                <span><img src="http://m.leadfund.com.cn/front-gateway-web//imgCodeAction.action?_sag_time=1498704673675"></span>
            </div>
        </div>
        <div class="grid-box-row">
            <div class="col-both">动态码</div>
            <div class="col-both mid">
                <input type="text" class="inp" placeholder="请输入动态码" id="smscode" maxlength="6">
            </div>
            <div class="col-both">
                <span class="smsbtn" id="smsbtn" @click="login">获取验证码</span>
            </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import MHeader from '../components/header.vue'
import * as api from '../api'

export default {
  name: 'app',
  components: {
      MHeader
  },
  data () {
    return {
        showhead: true, // 是否需要现实头部
        msg: 'Welcome to Login',
        
    }
  },
  methods: {
      login: function(prams) {
            console.log('login···')
            api.getProductDetail('10029121')
      }
  },
  beforeCreate:function(){},//组件实例化之前
    created:function(){},//组件实例化了
    beforeMount:function(){},//组件写入dom结构之前
    mounted:function(){//组件写入dom结构了
        console.log(this.$children);
        console.log(this.$refs);
    },
    beforeUpdate:function(){},//组件更新前
    updated:function(){},//组件更新比如修改了文案
    beforeDestroy:function(){},//组件销毁之前
    destroyed:function(){}//组件已经销毁
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .bookkilled {
        border:10px;
    }
</style>
