## Vue-spa-dev


vuex[文档](http://vuex.vuejs.org/zh-cn/state.html)

```javascript
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
```

