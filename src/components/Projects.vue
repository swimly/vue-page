<template>
  <div class="mid-layout">
    <ul class="project-list">
      <li v-for="article in list">
        <div class="box">
          <span class="img">
            <img class="w" :src="fileUrl + article.img" alt="">
          </span>
          <div class="row w">
            <router-link class="fs-14 c-pink col v-m" :to="{name: 'project', params: {type: article.type, title: article.id}}">{{article.title}}</router-link>
            <span>{{article.type}}</span>
          </div>
          <p class="row w fs-14 c-9">
            <span class="col v-m t-l">{{article.createdAt}}</span>
            <span class="col v-m t-r">{{article.author}}</span>
          </p>
        </div>
      </li>
    </ul>
    <div class="row w h center" v-if="!hasdata">
      <div class="col v-m">
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
  name: 'projects',
  components: {},
  data () {
    return {
      loading: false,
      msg: 'Welcome to Your Vue.js App',
      fileUrl: config.fileUrl,
      list: [],
      hasdata: true,
      catory: this.$route.params.type
    }
  },
  methods: {
    getData: function () {
      this.$http.jsonp(config.url, {
        headers: {

        },
        params: {
          type: 'project_list',
          catory: this.catory,
          page: 1,
          pagesize: 10
        },
        emulateJSON: true,
        before: function (req) {
          this.list = []
          this.hasdata = true
          this.loading = true
        }
      }).then(
        function (res) {
          this.loading = false
          if (res.body.length === 0) {
            this.hasdata = false
            console.log('null')
          }
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
.project-list{display:block;font-size:0;margin:0 -10px;text-align:left;padding:10px 0;}
.project-list li{display:inline-block;font-size:14px;padding:10px;box-sizing: border-box;width:25%;}
.img{overflow:hidden;display:inline-block;}
.img img{transition:0.3s;}
.img:hover img{transform: scale(1.1)}
.box{border:1px solid #f1f1f1;border-radius:5px;overflow:hidden;transition:0.3s;}
.project-list a,.project-list p{padding:0.5em;}
.project-list .img{height:160px;}
.project-list .box:hover{transform: translateY(-2px);box-shadow:0 2px 5px #eee;}
</style>
