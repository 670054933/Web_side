import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login.vue'
import Home from '@/views/Home.vue'
import ScoreReport from '@/views/ScoreReport.vue'
import HomePage from '@/views/HomePage'
import SchoolAssignment from "@/views/SchoolAssignment";
import Communicate from '@/views/Communicate'
import Information from '@/views/Information'
import register from '@/views/register.vue'
import CommunicateDetail from "@/components/CommunicateDetail";



Vue.use(Router)

const router = new Router({
  // mode:'history',
  // scrollBehavior:() => ({
  //   y:0
  // }),
  routes:[
    {
      //登入
      path: '/',
      redirect:'/HomePage',
    },
    {
      path: '/Login',
      component: Login,
      name: 'login',
    },
    {
      //注册
      path: '/register',
      component: register,
      name: 'register'

    },
    {
      //主页
      path: '/Home',
      component:Home,
      name: 'Home',
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      //主页
      path:'/HomePage',
      component: HomePage,
      name:'HomePage',
    },
    {
      //成绩报告
      path:'/ScoreReport',
      component: ScoreReport,
      name:'ScoreReport',
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path:'/SchoolAssignment',
      component:SchoolAssignment,
      name:'SchoolAssignment',
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      //交流
      path:'/Communicate',
      component:Communicate,
      name:'Communicate',
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path:'/CommunicateDetail',
      component:CommunicateDetail,
      name:'CommunicateDetail',
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      //信息
      path:'/Information',
      component:Information,
      name:'Information',
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
  ],

})

// router.beforeEach((to, from, next) => {
//   const token = store.state.token
//   if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
//     if (token) { // 通过vuex state获取当前的token是否存在
//       next()
//     } else {
//       console.log('该页面需要登陆')
//       next({
//         path: '/Login'
//         // query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       })
//     }
//   } else {
//     next()
//   }
// })

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

export default router
