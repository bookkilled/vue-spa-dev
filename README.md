## Vue-spa-dev

本版本不包含 状态一块管理store

vuex[文档](http://vuex.vuejs.org/zh-cn/state.html)

> 组件生命周期
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
### 文件目录
`文件目录说明`
```bash
src  
    --actions           // vuex状态命令管理
        --index.js
    --api               // 接口请求
        --index.js
    --assets            // 静态资源
        --lib               // 三方插件
```