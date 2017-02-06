<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <input type="text" name="username" v-model="username">
    <input type="text" name="password" v-model="password">
    <input type="checkbox" name="remember" value="" id="rem" v-model="remember">
    <label for="rem">记住密码</label>
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
      password: '',
      remember: false
    }
  },
  components: {
  },
  methods: {
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
          console.log(this.$parent.login)
        }
      }).then(
        function (res) {
          if (typeof res.body.id === 'number') {
            console.log('登录成功')
            if (this.remember) {
              this.$parent.setCookie('username', res.body.username, 720000)
            } else {
              this.$parent.setCookie('username', res.body.username, 36000)
            }
            this.$parent.login = this.$parent.getCookie('username')
            this.$router.push('/index')
          } else {
            console.log('用户名或者密码有误')
          }
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
