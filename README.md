# lcdc

> A Vue.js project
## 创建项目
``` bash
# 全局安装 vue-cli
$ npm install --global vue-cli
# 创建一个基于 webpack 模板的新项目
$ vue init webpack my-project
# 安装依赖，走你
$ cd my-project
$ npm install
$ npm run dev
```
## 初始化项目

``` bash
# install dependencies
npm install
# serve with hot reload at localhost:8080
npm run dev
# build for production with minification
npm run build
# run unit tests
npm run unit
# run e2e tests
npm run e2e
# run all tests
npm test
```
## 添加路由和网络请求模块
``` bash
#安装并且保存到package.json中
npm install vue-router vue-resource --save
```
### 1、引入路由
在src目录下创建router文件夹，并且新建index.js文件，同时修改main.js如下所示：
``` javascript
import Vue from 'vue'
import App from './App'
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
```
### 2、引入路由模块,router/index.js代码如下：
``` javascript
// 引入路由模块并使用它
import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../components/Hello'
Vue.use(VueRouter)
// path:'*',redirect:'/home'  重定向到path是/home的映射
const router = new VueRouter({
  routes: [{
    path: '/home',
    component: Hello
  }]
})
export default router

```
### 3、添加页面导航
修改app.vue代码如下：
``` html
<template>
  <div id="app">
    <div class="header">
      <ul class="nav">
        <li><router-link to="/home">首页</router-link></li>
        <li><router-link to="/projects">项目</router-link></li>
        <li><router-link to="/articles">文摘</router-link></li>
      </ul>
    </div>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```
其中遇到的一些坑：
在写js的时候需要注意的一些问题：
1、json的写法
``` javascript
  {
    a: '000',
    b: 1
  }
```
冒号的后面一定要空一格
2、function应该注意的：
``` javascript
  {
    success: function () {

    }
  }
```
()两边都要加上空格。