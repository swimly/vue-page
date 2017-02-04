<template>
  <div class="mid-layout col v-t" :class="loading?'loading':''">
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
      loading: false,
      msg: 'Welcome to Your Vue.js App',
      info: []
    }
  },
  created: function () {
    this.$http.jsonp(config.url, {
      headers: {

      },
      params: {
        type: 'get_article',
        id: 1
      },
      emulateJSON: true,
      before: function (req) {
        this.loading = true
        console.log('开始获取')
      }
    }).then(
      function (res) {
        console.log(res)
        this.loading = false
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
