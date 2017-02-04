<template>
  <div class="header mid-layout t-l row h">
    <h1 class="col v-m">
      <img class="v-m" src="../assets/img/logo.png" alt="">
    </h1>
    <div class="col v-m t-r">
      <ul class="nav">
        <li><router-link to="/index">首页</router-link></li>
        <li><router-link to="/projects">项目</router-link></li>
        <li><router-link to="/articles">文摘</router-link></li>
      </ul>
    </div>
    <div class="col v-m t-r">
      <dl class="user v-m">
        <dt class="row">
          <span class="col v-m iconfont icon-nan"></span>
          <router-link class="col v-m" to="/login">登录</router-link>
        </dt>
        <dd></dd>
      </dl>
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
.user{color:#acb8c3;font-size:14px;display:inline-block;}
.user .iconfont{font-size:18px;padding-right:0.5em;}
.user a{color:#acb8c3;}
</style>
