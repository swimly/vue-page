<template>
  <div class="mid-layout">
    <h1>{{info.title}}</h1>
    <img class="w" :src="info.content" alt="">
    <div class="row w h center" v-if="loading">
      <div class="col v-m">
        <img style="width:200px;" src="../assets/img/loading.gif" alt="">
        <p class="fs-14 c-9 mt-10">正在努力查找中！</p>
      </div>
    </div>
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
        type: 'get_project',
        id: this.$route.params.title
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
