<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <input type="text" name="username" v-model="username">
    <input type="text" name="password" v-model="password">
    <button type="button" v-on:click="login">登录</button>
  </div>
</template>

<script>
import config from '../config'
export default {
  name: 'login',
  data () {
    return {
      msg: '登录',
      username: '',
      password: ''
    }
  },
  components: {
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
    login: function () {
      this.$http.jsonp(config.url, {
        headers: {

        },
        params: {
          type: 'login',
          username: this.username,
          password: this.password
        },
        emulateJSON: true,
        before: function (req) {
        }
      }).then(
        function (res) {
          console.log(res)
          if (typeof res.body.id === 'number') {
            console.log('登录成功')
            this.setCookie('username', res.body.username, 720000)
          } else {
            console.log('用户名或者密码有误')
          }
          console.log(this.getCookie('username'))
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
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
