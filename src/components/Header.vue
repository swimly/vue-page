<template>
  <div class="header mid-layout t-l row h">
    <div class="col v-m">
      <ul class="nav">
        <li><router-link to="/home">首页</router-link></li>
        <li><router-link to="/projects">项目</router-link></li>
        <li><router-link to="/articles">文摘</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
  display:inline-block;
  font-size:0;
}
.nav li{
  display:inline-block;
  font-size:14px;
  padding:0 1em;
}
.nav li a{
  color:#acb8c3;
  text-decoration:none;
}
.nav li .router-link-active{color:#fff;}
</style>
