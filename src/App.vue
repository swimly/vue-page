<template>
  <div id="app">
    <div id="header">
      <HeaderBar></HeaderBar>
    </div>
    <div class="view" id="view">
      <router-view name="default"></router-view>
    </div>
    <div id="footer">
      <FooterBar></FooterBar>
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/Header'
import Hello from './components/Hello'
import FooterBar from './components/Footer'
import cookie from 'vue-cookie'

export default {
  name: 'app',
  data () {
    return {
      login: this.getCookie('username')
    }
  },
  methods: {
    setCookie: function (name, value, seconds) {
      seconds = seconds || 0
      var expires = ''
      if (seconds !== 0) {
        var date = new Date()
        date.setTime(date.getTime() + (seconds * 1000))
        expires = '; expires=' + date.toGMTString()
      }
      document.cookie = name + '=' + escape(value) + expires + '; path=/'
    },
    getCookie: function (name) {
      var nameEQ = name + '='
      var ca = document.cookie.split(';')
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0) === ' ') {
          c = c.substring(1, c.length)
        }
        if (c.indexOf(nameEQ) === 0) {
          return unescape(c.substring(nameEQ.length, c.length))
        }
      }
      return false
    },
    delCookie: function (name) {
      var exp = new Date()
      exp.setTime(exp.getTime() - 1)
      var cval = this.getCookie(name)
      if (cval != null) {
        document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
      }
    }
  },
  components: {
    Hello,
    HeaderBar,
    FooterBar,
    cookie
  },
  watch: {
    'login': function (v, o) {
      this.$children[0].login = this.getCookie('username')
    }
  }
}
</script>

<style>
body{
  font-family: "Microsoft YaHei", "Arial Narrow", sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
}
.mid-layout{
  width:1200px;
  margin:0 auto;
}
#view{
  padding-top:50px;
  height:100%;
  overflow:hidden;
  margin:0 auto;
}
#view .mid-layout{min-height:100%;position:relative;}
html,body{height:100%;}
h1,h2,h3,h4,h5,h6,p,dl,dt,dd,ul,li,body{margin:0;padding:0;font-weight:normal;list-style: none;}
a{text-decoration: none;}
*{box-sizing: border-box;}
.w{width:100%;}
.h{height:100%;}
.row{display:table;}
.col{display:table-cell;}
.t-l{text-align:left;}.t-r{text-align:right;}.t-c{text-align:center;}
.v-t{vertical-align: top;}.v-b{vertical-align: bottom;}.v-m{vertical-align: middle;}
.c-9{color:#999;}.c-pink{color:#E64C65}
.w-20{width:20%;}.w-80{width:80%;}
.fs-12{font-size:12px;}.fs-14{font-size:14px;}
.mt-10{margin-top:10px;}
.center{position:absolute;top:50%;left:50%;transform: translate(-50%,-50%)}
</style>
