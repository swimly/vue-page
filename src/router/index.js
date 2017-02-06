// 引入路由模块并使用它
import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../components/Hello'
import Articles from '../components/Articles'
import ArticleInfo from '../components/ArticleInfo'
import Projects from '../components/Projects'
import ProjectInfo from '../components/ProjectInfo'
import Login from '../components/Login'
import Page from '../components/Page_404'
import Personer from '../components/Personer'
import Info from '../components/Info'
Vue.use(VueRouter)
// path:'*',redirect:'/home'  重定向到path是/home的映射
const router = new VueRouter({
  routes: [{
    path: '/index',
    component: Hello
  }, {
    path: '/articles',
    name: 'articles',
    component: Articles
  }, {
    path: '/articles/:type',
    name: 'articleCatory',
    component: Articles
  }, {
    path: '/articles/:type/:title',
    name: 'article',
    component: ArticleInfo
  }, {
    path: '/projects',
    name: 'projects',
    component: Projects
  }, {
    path: '/projects/:type',
    name: 'projects',
    component: Projects
  }, {
    path: '/projects/:type/:title',
    name: 'project',
    component: ProjectInfo
  }, {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      pageTitle: '登录'
    }
  }, {
    path: '/center',
    name: 'center',
    component: Personer
  }, {
    path: '/center/info',
    name: 'info',
    components: {
      default: Personer,
      sub: Info
    }
  }, {
    path: '*',
    component: Page
  }]
})
export default router
