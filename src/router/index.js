import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login.vue'
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
  routes:[
    {
      path: '/',
      name: 'login',
      component: require('@/views/login').default
    },
    {
      path: '/register',
      name: 'register',
      component: require('@/views/2').default
    },
    {
      path:'/ScoreStatistics',
      name:'/ScoreStatistics',
      component: require('@/views/ScoreStatistics').default
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
