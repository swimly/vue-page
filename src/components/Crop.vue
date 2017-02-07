<template>
  <div class="editmail w-75" id="app">
    <div class="face" @click="toggleShow">
      <span v-if="!imgDataUrl" class="iconfont icon-nan"></span>
      <img v-if="imgDataUrl" :src="imgDataUrl" alt="">
    </div>
    <my-upload field="img"
        @crop-success="cropSuccess"
        @crop-upload-success="cropUploadSuccess"
        @crop-upload-fail="cropUploadFail"
        :width="100"
        :height="100"
        :url="url"
        :params="params"
        :headers="headers"
        lang-type="zh"
        :value.sync="show"
        imgUpload="upload"
        img-format="png"></my-upload>
  </div>
</template>

<script>
import myUpload from 'vue-image-crop-upload/upload-2'
import config from '../config'
export default {
  name: 'editEmail',
  data () {
    return {
      show: false,
      url: config.url,
      params: {
        type: 'crop',
        token: '123456798',
        name: 'avatar'
      },
      headers: {
      },
      imgDataUrl: this.$parent.face
    }
  },
  components: {
    'my-upload': myUpload,
    config
  },
  methods: {
    toggleShow () {
      this.show = !this.show
    },
    cropSuccess (imgDataUrl, field) {
      this.imgDataUrl = imgDataUrl
      this.$emit('showface', this.imgDataUrl)
    },
    cropUploadSuccess (jsonData, field) {
      console.log(jsonData)
    },
    cropUploadFail (status, field) {
      console.log('-------- upload fail --------')
      console.log(status)
      console.log('field: ' + field)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.face img{border-radius:50%;width:100px;border:2px solid #fff;}
.face .iconfont{font-size:100px;display:inline-block;height:100px;line-height:100px;color:#ccc;}
</style>
