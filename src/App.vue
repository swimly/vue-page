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
