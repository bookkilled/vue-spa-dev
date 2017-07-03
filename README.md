## Vue-spa-dev

本版本不包含 状态一块管理store

vuex[文档](http://vuex.vuejs.org/zh-cn/state.html)

### 文件目录
`文件目录说明`
```bash
src                     // 源码 
    --api               // 接口请求
        --index.js
    --assets            // 静态资源
        --lib               // 三方插件
    --components        // 通用插件管理
    --routes            // 页面路由配置
    --styles            // 样式目录
        --components        // 组件样式
    --utils             // 自定义插件
    --views             // 项目页面定义
    --index.js          // 入口页面js
    --index.tpl.html    // 入口页面模板
.babelrc                // es6转换配置
.gitignore              // git上传忽略配置    package.json            // 安装依赖配置项
README.md               // 说明文档
server.js               // 开启本地服务依赖express
webpack.config.js       // 本地开发webpack配置
webpack.deploy.js       // 打包测试生产配置          
```

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

## 注意事项
1、目前防重点击处理方式添加 `tag` 标签判断  
2、接口请求使用 `reqwest.js`   
3、路由配置使用 `vue-router`  
4、样式文件使用 `less` 文件格式


