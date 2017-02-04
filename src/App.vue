<template>
  <div id="app">
    <div id="header">
      <HeaderBar></HeaderBar>
    </div>
    <div class="view row w" id="view">
      <router-view></router-view>
    </div>
    <div id="footer">
      <FooterBar></FooterBar>
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/Header'
import Hello from './components/Hello'
import FooterBar from './components/Footer'

export default {
  name: 'app',
  components: {
    Hello,
    HeaderBar,
    FooterBar
  }
}
</script>

<style>
body{
  font-family: "Microsoft YaHei", "Arial Narrow", sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
}
.mid-layout{
  width:1200px;
  margin:0 auto;
}
#view{
  padding-top:50px;
  min-height:100%;
}
html,body{height:100%;}
h1,h2,h3,h4,h5,h6,p,dl,dt,dd,ul,li,body{margin:0;padding:0;font-weight:normal;list-style: none;}
a{text-decoration: none;}
*{box-sizing: border-box;}
.w{width:100%;}
.h{height:100%;}
.row{display:table;}
.col{display:table-cell;}
.t-l{text-align:left;}.t-r{text-align:right;}.t-c{text-align:center;}
.v-t{vertical-align: top;}.v-b{vertical-align: bottom;}.v-m{vertical-align: middle;}
.c-9{color:#999;}.c-pink{color:#E64C65}
.fs-12{font-size:12px;}.fs-14{font-size:14px;}
.mt-10{margin-top:10px;}
.loading{background:url(./assets/img/loading.gif) no-repeat center center;vertical-align: middle;background-size:200px;}
.loading:before{content:"加载中，请耐心等待！";display:inline-block;margin-top:200px;font-size:14px;color:#7DB0E0;}
</style>
