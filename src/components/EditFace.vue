<template>
  <div class="editface w-75">
    <h1>{{ msg }}</h1>
    <Crop></Crop>
  </div>
</template>

<script>
import Crop from './Crop'
export default {
  name: 'editFace',
  components: {
    Crop
  },
  data () {
    return {
      msg: '修改头像'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
