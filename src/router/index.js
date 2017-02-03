// 引入路由模块并使用它
import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../components/Hello'
Vue.use(VueRouter)
// path:'*',redirect:'/home'  重定向到path是/home的映射
const router = new VueRouter({
  routes: [{
    path: '/home',
    component: Hello
  }]
})
export default router
