<template>
  <div class="mid-layout">
    <h1>{{info.title}}</h1>
    {{info}}
  </div>
</template>

<script>
import config from '../config'
export default {
  name: 'article_info',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      info: []
    }
  },
  created: function () {
    this.$http.jsonp(config.url, {
      headers: {

      },
      params: {
        type: 'get_project',
        id: this.$route.params.title
      },
      emulateJSON: true,
      before: function (req) {
        console.log('开始获取')
      }
    }).then(
      function (res) {
        console.log(res)
        this.info = res.body
        console.log(this.info)
      },
      function (res) {
        console.log(res)
      }
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
