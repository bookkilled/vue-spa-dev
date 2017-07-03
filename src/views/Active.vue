<template>
  <div>
    <m-header v-if="showhead"></m-header>
    <div v-bind:class="{pt44: showhead}">
      <loading v-if="loading"></loading>
      <div class="errmsg" v-else-if="errstate">{{ errmsg }}</div>
      <div class="grid-box ma-tb10" v-else>
          <div class="grid-box-row" v-for="(item, index) in lists" :key="index" v-if="item.buyStatus == '2'">
              <div class="col-both">券商资管：</div>
              <div class="col-both mid">
                  {{ item.fundName }}
              </div>
              <div class="col-both">
                {{ `${item.yearRose || item.rose}%` }} ({{ item.incomeType }})
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../routes'
import MHeader from '../components/header.vue'
import loading from '../components/loading.vue'
import * as api from '../api'
import { getUrlParam } from '../assets/lib/base'

export default {
  name: 'app',
  components: {
      MHeader,
      loading
  },
  data () {
    return {
      showhead: true, // 是否需要现实头部
      msg: 'Welcome to Hello',
      loading: true, // loading 插件
      errstate: false, // 接口状态
      errmsg: '', // 接口异常展示信息
      lists: {}
    }
  },
  methods: {
    tologin: function () {
      router.push({ name: 'Login', query: { name: 'svenzhou', age: 28 }})
    }
  },
  mounted:function(){//组件写入dom结构了:  在这发起后端请求，拿回数据，配合路由钩子做一些事情
      let vm = this
      api.getProducts({
          "terminal": "M",
          "reqTime": new Date().toUTCString(),
          "clientVersion": "3.6.0",
          "version": "1.0",
          "pageNo": this.$route.query.pageNo || ''
      }).then(function (res) {
          console.log(res)
          vm.lists = res.data && res.data.list
      },function (err) {
          vm.errstate = true
          vm.errmsg = '接口请求异常！'
      }).always(function(){
          vm.loading = false
      });
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
