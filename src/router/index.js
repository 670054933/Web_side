import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login.vue'
import HomePage from '@/views/HomePage'
import Communicate from '@/views/Communicate'
import Information from '@/views/Information'
import register from '@/views/2.vue'
import ScoreStatistics from '@/views/ScoreStatistics.vue'
import Home from '@/views/Home.vue'
Vue.use(Router)

// const routes = [
//   {
//     path: '/',
//     name: 'login',
//     component: login
//   }
// ]
export default new Router({
  // mode:'history',
  // scrollBehavior:() => ({
  //   y:0
  // }),
  routes:[
    {
      //登入
      path: '/',
      name: 'login',
      component: require('@/views/login').default
    },
    {
      //注册
      path: '/register',
      name: 'register',
      component: require('@/views/2').default
    },
    {
      //主页
      path:'/HomePage',
      component: HomePage,
      name:'HomePage',
    },
    {
      //成绩报告
      path:'/ScoreStatistics',
      component: ScoreStatistics,
      name:'ScoreStatistics',
    },
    {
      //交流
      path:'/Communicate',
      component:Communicate,
      name:'Communicate'
    },
    {
      //信息
      path:'/Information',
      component:Information,
      name:'Information'
    },
    {
      path: '/Home',
      name: 'Home',
      component: require('@/views/Home').default
    },
  ]
})


// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router
