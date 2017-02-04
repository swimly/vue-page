<template>
  <div class="mid-layout col v-m" :class="loading?'loading':'v-t'">
    <ul class="list">
      <li v-for="article in list">
        <router-link :to="{name: 'article', params: {type: article.type, title: article.id}}">{{article.title}}</router-link>
        <span>{{article.createdAt}}</span>
        <p>{{article.content}}</p>
      </li>
    </ul>
    <div v-if="!hasdata">
      <img style="width:150px;" src="../assets/img/nodata.png" alt="">
      <p class="fs-14 c-9 mt-10">没找到哦</p>
    </div>
  </div>
</template>

<script>
import config from '../config'
export default {
  name: 'articles',
  data () {
    return {
      loading: false,
      hasdata: true,
      msg: 'Welcome to Your Vue.js App',
      list: []
    }
  },
  created: function () {
    this.$http.jsonp(config.url, {
      headers: {

      },
      params: {
        type: 'article_list',
        page: 1,
        pagesize: 10
      },
      emulateJSON: true,
      before: function (req) {
        this.loading = true
        console.log('开始获取')
      }
    }).then(
      function (res) {
        console.log(res)
        if (res.body.length === 0) {
          this.hasdata = false
          console.log('null')
        }
        this.loading = false
        this.list = res.body
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
