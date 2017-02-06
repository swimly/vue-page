<template>
  <div class="mid-layout">
    <div class="register">
      <h1>{{ msg }}</h1>
      <div class="form w"><input type="text" name="email" v-model="email" v-on:blur="checkEmail"></div>
      <div class="form w mt-20"><input type="text" name="username" v-model="username" v-on:blur="checkUserName"></div>
      <div class="form w mt-20"><input type="text" name="password" v-model="password"></div>
      <div v-on:click="register" class="btn btn-pink w mt-20">注册</div>
    </div>
  </div>
</template>

<script>
import config from '../config'
export default {
  name: 'register',
  data () {
    return {
      msg: '登录',
      email: '',
      username: '',
      password: '',
      isEmail: false,
      isUser: false,
      isPwd: true
    }
  },
  components: {
  },
  methods: {
    register: function () {
      if (this.isEmail && this.isUser && this.isPwd) {
        this.$http.jsonp(config.url, {
          headers: {

          },
          params: {
            type: 'register',
            email: this.email,
            username: this.username,
            password: this.password,
            random: this.$parent.getRandom(10000, 99999)
          },
          emulateJSON: true,
          before: function (req) {
          }
        }).then(
          function (res) {
            if (typeof res.body.id === 'number') {
              console.log('注册成功')
              this.$parent.setCookie('username', res.body.username, 36000)
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
      } else {
        console.log('请检查，输入有误！')
      }
    },
    checkEmail: function () {
      this.$http.jsonp(config.url, {
        headers: {

        },
        params: {
          type: 'checkEmail',
          email: this.email
        },
        emulateJSON: true,
        before: function (req) {
          console.log(this.$parent.login)
        }
      }).then(
        function (res) {
          if (typeof res.body.id === 'number') {
            console.log('该邮箱已被注册！')
            this.isEmail = false
          } else {
            console.log('可以注册！')
            this.isEmail = true
          }
        },
        function (res) {
          console.log(res)
        }
      )
    },
    checkUserName: function () {
      this.$http.jsonp(config.url, {
        headers: {

        },
        params: {
          type: 'checkUserName',
          username: this.username
        },
        emulateJSON: true,
        before: function (req) {
          console.log(this.$parent.login)
        }
      }).then(
        function (res) {
          console.log(res)
          if (typeof res.body.id === 'number') {
            console.log('用户名被注册！')
            this.isUser = false
          } else {
            console.log('可以注册！')
            this.isUser = true
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
.register{width:50%;margin:50px auto;}
</style>
