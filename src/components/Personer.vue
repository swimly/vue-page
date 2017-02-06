<template>
  <div class="personer w-25">
    <div class="menu">
      <router-link class="col v-m" to="/center/info">个人信息</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'personer',
  data () {
    return {
      msg: '个人中心'
    }
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.personer{padding:20px 0;}
.content{background:#F8F8F8;width:75%;}
</style>
