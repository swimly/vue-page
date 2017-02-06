<template>
  <div class="info w-75">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'info',
  data () {
    return {
      msg: '个人信息'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
