<template>
  <div class="personer mid-layout row">
    <div class="col v-t w-20 aside">
      <div class="row w face">
        <div class="col v-m t-c">
          <span class="iconfont icon-nan"></span>
          <h1>{{user}}</h1>
        </div>
      </div>
      <ul class="aside-menu">
        <li v-for="item in menu">
          <h2>{{item.text}}</h2>
          <div class="sub" v-if="item.sub">
            <router-link v-for="item in item.sub" class="col v-m" :to="item.url">{{item.text}}</router-link>
          </div>
        </li>
      </ul>
    </div>
    <div class="col v-t w-80">
      <router-view name="sub"></router-view>
    </div>
  </div>
</template>

<script>
import config from '../config'
export default {
  name: 'personer',
  data () {
    return {
      msg: '个人中心',
      user: this.$parent.getCookie('username'),
      menu: config.personer
    }
  },
  components: {
    config
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.personer{padding:20px 0;}
.personer .aside{border:1px solid #f8f8f8;}
.content{background:#F8F8F8;width:75%;}
.face{padding:20px;border-bottom:5px solid #fff;background:#f8f8f8;}
.face .iconfont{font-size:6em;color:#ccc;}
.face h1{margin:0;font-size:18px;color:#999;}
.aside-menu h2{text-align:left;font-size:16px;color:#666;padding:10px;}
.aside-menu .sub{padding:0 10px;}
.aside-menu a{display:block;text-align:left;padding:10px;border-bottom:1px solid #f9f9f9;font-size:14px;color:#888;}
.aside-menu .router-link-active{color:#E64C65;}
</style>
