<template>
  <div class="mid-layout">
    <div class="login">
      <h1>{{ msg }}</h1>
      <div class="form w"><input type="text" name="username" v-model="username"></div>
      <div class="form w mt-20"><input type="text" name="password" v-model="password"></div>
      <div class="form w mt-10">
        <input type="checkbox" name="remember" value="" id="rem" v-model="remember">
        <label for="rem">记住密码</label>
      </div>
      <div v-on:click="login" class="btn btn-pink w mt-20">登录</div>
    </div>
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
.login{width:50%;margin:50px auto;}
</style>
