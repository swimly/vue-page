<template>
  <div class="footer">
    <div class="mid-layout t-c fs-14">
      <p class="c-9">2017 © swimly.cn MIT license</p>
      <p><a class="c-9" href="#">打赏</a><a class="c-9" href="#">合作联系</a><a class="c-9" href="#">git仓库</a><a class="c-9" href="#">微信公众号</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  background:#eee;
  padding:50px 0;
}
.footer p{margin:10px;}
.footer a{margin:0 10px;}
</style>
