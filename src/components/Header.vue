<template>
  <div class="header t-l h t-c">
    <div class="mid-layout row">
      <h1 class="col v-m logo">
        <img class="v-t" src="../assets/img/logo.png" alt="">
      </h1>
      <div class="col v-m t-l">
        <ul class="nav">
          <li v-for="menu in menus">
            <router-link :to="menu.url">
              {{menu.text}}
              <span class="iconfont icon-down v-m" v-if="menu.sub"></span>
            </router-link>
            <div class="sub-nav" v-if="menu.sub">
              <div class="mid-layout">
                <router-link v-for="sub in menu.sub" :to="sub.url">{{sub.text}}</router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="col v-m t-r">
        <ul class="v-m user" v-if="!login">
          <li class="row">
            <span class="col v-m iconfont icon-nan"></span>
            <router-link class="col v-m" to="/login">登录</router-link>
          </li>
          <li class="row">
            <span class="col v-m iconfont icon-nan"></span>
            <router-link class="col v-m" to="/register">注册</router-link>
          </li>
        </ul>
        <dl class="user v-m" v-if="login">
          <dt class="row">
            <span v-if="!userface" class="col v-m iconfont icon-nan"></span>
            <img v-if="userface" :src="userface" alt="">
            <router-link class="col v-m" to="/zone">{{login}}</router-link>
          </dt>
          <dd>
            <router-link class="col v-m" to="/center/info">个人中心</router-link>
            <a href="javascript:;" v-on:click="logout">退出登录</a>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import config from '../config'
export default {
  name: 'header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      menus: config.menu,
      login: this.$parent.getCookie('username'),
      userface: this.$parent.face
    }
  },
  created: function () {
    if (this.$parent.getCookie('face')) {
      this.userface = config.fileUrl + this.$parent.getCookie('face')
      this.$parent.face = config.fileUrl + this.$parent.getCookie('face')
    } else {
      this.getFace()
    }
  },
  methods: {
    logout: function () {
      this.$parent.delCookie('username')
      this.login = this.$parent.getCookie('username')
      this.$parent.login = this.login
      this.$router.push('/login')
    },
    getFace: function () {
      this.$http.jsonp(config.url, {
        headers: {

        },
        params: {
          type: 'get_user',
          name: this.login
        },
        emulateJSON: true,
        before: function (req) {
        }
      }).then(
        function (res) {
          this.userface = config.fileUrl + res.body.face
          this.$parent.face = config.fileUrl + res.body.face
        },
        function (res) {
          console.log(res)
        }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  height:50px;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  background:#393D49;
  z-index:100;
}
.logo{width:200px;}
.nav{
  display:inline-block;
  font-size:0;
}
.nav li{
  display:inline-block;
  font-size:14px;
  padding:0 1em;
  height:50px;
  line-height:50px;
}
.nav a{
  color:#acb8c3;
  text-decoration:none;
}
.nav li .router-link-active{color:#fff;}
.sub-nav{position:absolute;top:50px;background:#f9f9f9;left:0;width:100%;height:0;overflow:hidden;transition:0.3s;border-bottom:1px solid #F1F1F1;box-shadow:0 1px 1px #eee;}
.sub-nav a{display:inline-block;line-height:40px;color:#999;margin-right:2em;}
.sub-nav a:hover,.sub-nav a.router-link-active{color:#E64C65;}
.nav li:hover .sub-nav{height:50px;}
.user{color:#acb8c3;font-size:14px;display:inline-block;position:relative;line-height:50px;height:50px;}
.user .iconfont{font-size:18px;padding-right:0.5em;}
.user a{color:#acb8c3;}
.user img{width:28px;border-radius:50%;vertical-align: middle;margin-right:5px;}
.user .router-link-active{color:#fff;}
.user dd{position:absolute;background:#4B505A;top:50px;width:150%;left:0;padding-bottom:1em;display:none;border-radius:0 0 5px 5px;}
.user dd a{display:block;line-height:30px;height:30px;text-align:left;padding-left:3em;transition:0.3s;}
.user dd a:hover{color:#fff;}
.user .row{padding:0 1em;}
.user:hover dt.row{background:#4B505A;border-radius:0 0 -5px 0;}
.user:hover dd{display:inline-block;}
</style>
