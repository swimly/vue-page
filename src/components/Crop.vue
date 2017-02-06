<template>
  <div id="app">
    <a class="btn" @click="toggleShow">set avatar</a>
    <my-upload field="img"
      @crop-success="cropSuccess"
      @crop-upload-success="cropUploadSuccess"
      @crop-upload-fail="cropUploadFail"
      v-model="show"
      :width="300"
      :height="300"
      url="/upload"
      :params="params"
      :headers="headers"
      img-format="png"></my-upload>
    <img :src="imgDataUrl">
  </div>
</template>

<script>
import myUpload from 'vue-image-crop-upload'
export default {
  name: 'eidtFace',
  data () {
    return {
      show: true,
      params: {
        token: '123456798',
        name: 'avatar'
      },
      headers: {
        smail: '*_~'
      },
      imgDataUrl: ''
    }
  },
  components: {
    'my-upload': myUpload
  },
  methods: {
    toggleShow () {
      this.show = !this.show
    },
    cropSuccess (imgDataUrl, field) {
      console.log('-------- crop success --------')
      this.imgDataUrl = imgDataUrl
    },
    cropUploadSuccess (jsonData, field) {
      console.log('-------- upload success --------')
      console.log(jsonData)
      console.log('field: ' + field)
    },
    cropUploadFail (status, field) {
      console.log('-------- upload fail --------')
      console.log(status)
      console.log('field: ' + field)
    }
  }
}
</script>

<style scoped>
@import "../assets/css/crop.css"
</style>
