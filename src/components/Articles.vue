<template>
  <div class="mid-layout">
    <ul class="list">
      <li v-for="article in list">
        <router-link :to="{name: 'article', params: {type: article.type, title: article.id}}">{{article.title}}</router-link>
        <span>{{article.createdAt}}</span>
        <p>{{article.content}}</p>
      </li>
    </ul>
    <div class="row w h center" v-if="!hasdata">
      <div class="col v-m t-c">
        <img style="width:150px;" src="../assets/img/nodata.png" alt="">
        <p class="fs-14 c-9 mt-10">没找到哦</p>
      </div>
    </div>
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
  name: 'articles',
  data () {
    return {
      loading: false,
      hasdata: true,
      msg: 'Welcome to Your Vue.js App',
      list: [],
      catory: this.$route.params.type
    }
  },
  methods: {
    getData: function () {
      this.$http.jsonp(config.url, {
        headers: {

        },
        params: {
          type: 'article_list',
          page: 1,
          pagesize: 10,
          catory: this.catory
        },
        emulateJSON: true,
        before: function (req) {
          this.list = []
          this.hasdata = true
          this.loading = true
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
  },
  created: function () {
    this.getData()
  },
  watch: {
    '$route': function (v, o) {
      console.log(v, o)
      this.catory = this.$route.params.type
      this.getData()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
