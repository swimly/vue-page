<template>
  <div class="personer mid-layout row">
    <div class="col v-t w-20 aside">
      <div class="row w face">
        <div class="col v-m t-c">
          <my-crop @showface="showFace"></my-crop>
          <h1 class="mt-10">{{user}}</h1>
        </div>
      </div>
      <ul class="aside-menu">
        <li v-for="item in menu">
          <h2>{{item.text}}</h2>
          <div class="sub" v-if="item.sub">
            <router-link v-for="item in item.sub" class="row w" :to="item.url"><span class="col iconfont v-m fs-20" :class="item.icon"></span><span class="col v-m">{{item.text}}</span></router-link>
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
import Crop from './Crop'
export default {
  name: 'personer',
  data () {
    return {
      msg: '个人中心',
      user: this.$parent.getCookie('username'),
      menu: config.personer,
      face: this.$parent.face
    }
  },
  components: {
    config,
    'my-crop': Crop
  },
  methods: {
    showFace: function (face) {
      this.$parent.face = face
    }
  },
  watch: {
    'face': function (v, o) {
      this.$children[0].imgDataUrl = v
    }
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
.aside-menu h2{text-align:left;font-size:16px;color:#666;padding:10px 25px;border-bottom:1px solid #f5f5f5;position:relative;}
.aside-menu h2:before{content:"";display:inline-block;width:3px;height:16px;background:#e64c65;position:absolute;left:0;top:50%;margin-top:-8px;}
.aside-menu .sub{padding:0 10px;}
.aside-menu a{text-align:left;padding:10px;border-bottom:1px solid #f9f9f9;font-size:14px;color:#888;}
.aside-menu .router-link-active{color:#E64C65;}
.aside-menu .iconfont{width:20%;text-align:center;}
</style>
