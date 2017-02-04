<template>
  <div class="col v-t" :class="loading?'loading':''">
    <div class="mid-layout">
      <ul class="project-list">
        <li v-for="article in list">
          <div class="box">
            <span class="img">
              <img class="w" :src="fileUrl + article.img" alt="">
            </span>
            <router-link class="fs-14 c-pink" :to="{name: 'project', params: {type: article.type, title: article.id}}">{{article.title}}</router-link>
            <p class="row w fs-14 c-9">
              <span class="col v-m t-l">{{article.createdAt}}</span>
              <span class="col v-m t-r">{{article.author}}</span>
            </p>
          </div>
        </li>
      </ul>
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
      list: []
    }
  },
  created: function () {
    this.$http.jsonp(config.url, {
      headers: {

      },
      params: {
        type: 'project_list',
        page: 1,
        pagesize: 10
      },
      emulateJSON: true,
      before: function (req) {
        console.log('开始获取')
        this.loading = true
      }
    }).then(
      function (res) {
        console.log(res)
        this.loading = false
        this.list = res.body
        console.log(this.list)
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
.project-list{display:block;font-size:0;margin:0 -10px;text-align:left;}
.project-list li{display:inline-block;font-size:14px;padding:10px;box-sizing: border-box;width:25%;}
.img{overflow:hidden;display:inline-block;}
.img img{transition:0.3s;}
.img:hover img{transform: scale(1.1)}
.box{border:1px solid #f1f1f1;border-radius:5px;overflow:hidden;transition:0.3s;}
.project-list a,.project-list p{padding:0.5em;}
.project-list .img{height:160px;}
.project-list .box:hover{transform: translateY(-2px);box-shadow:0 2px 5px #eee;}
</style>
