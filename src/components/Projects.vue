<template>
  <div class="mid-layout">
    <ul class="list">
      <li v-for="article in list">
        <router-link :to="{name: 'project', params: {type: article.type, title: article.id}}">{{article.title}}</router-link>
        <span>{{article.createdAt}}</span>
        <p>{{article.content}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import config from '../config'
export default {
  name: 'projects',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
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
      }
    }).then(
      function (res) {
        console.log(res)
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

</style>
