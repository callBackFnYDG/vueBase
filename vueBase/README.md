# houxu

> A learning platform

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# 前端搭建说明

``` bash
# 使用vue-cli手脚架搭建
vue： 主框架
iview： UI插件
axios: 请求插件
qs: 格式化json数据插件
vue-router： 框架路由

vuex： 状态管理
vuex-persistedstate： 状态管理持久化插件

babel： es JavaScript 版本编译器
eslint： 插件化的javascript代码检测工具 规范化前端代码

# 文件夹说明
assets : 静态文件资源
components ： 模板文件资源
config ：配置文件资源
pages : 路由文件资源

plugins : 插件导入配置资源
router ： 路由配置资源
store : 状态管理配置资源

# 请求接口示例
this.$axios.post('api/user/login', this.login).then(d => {
  this.$log(d)
})
this.$http('api/user/login', this.login, d => {
  this.$log(d)
})
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

