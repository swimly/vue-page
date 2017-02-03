<template>
  <div id="app">
    <div id="header">
      <HeaderBar></HeaderBar>
    </div>
    <div class="view" id="view">
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
}
#header{
  height:50px;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  background:#393D49;
}
.mid-layout{
  width:1200px;
  margin:0 auto;
}
#view{
  padding-top:50px;
}
.w{width:100%;}
.h{height:100%;}
.row{display:table;}
.col{display:table-cell;}
.t-l{text-align:left;}
.t-r{text-align:right;}
.t-c{text-align:center;}
.v-t{vertical-align: top;}
.v-b{vertical-align: bottom;}
.v-m{vertical-align: middle;}
</style>
