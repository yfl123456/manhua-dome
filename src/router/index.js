// 引入 vue 核心
import Vue from 'vue'

// 引入 vue-router 核心
import VueRouter from 'vue-router'

// 引入模块
import Home from '../views/Home'
import Classify from '../views/Classify'
import Comicend from '../views/Comicend'
import ComicList from '../views/ComicList'
import Daypub from '../views/Daypub'
import Login from '../views/Login'
import My from '../views/My'
import Ranking from '../views/Ranking'
import SarchResult from '../views/SarchResult'
import Search from '../views/Search'
import Register from '../views/Register'

// 调用
Vue.use(VueRouter)

// 实例化
const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/classify', component: Classify },
    { path: '/comicend', component: Comicend },
    { path: '/comicList', component: ComicList },
    { path: '/daypub', component: Daypub },
    { path: '/login', component: Login },
    { path: '/my', component: My },
    { path: '/sarchResult', component: SarchResult },
    { path: '/ranking', component: Ranking },
    { path: '/search', component: Search },
    { path: '/register', component: Register },
    { path: '/', redirect: '/home' }
  ]
})

// 暴露出去
export default router
