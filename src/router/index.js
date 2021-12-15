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

export default new Router({
  // mode:'history',
  // scrollBehavior:() => ({
  //   y:0
  // }),
  routes:[
    {
      //登入
      path: '/',
      redirect:'/Login',

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
    },
    // {
    //   //主页
    //   path:'/HomePage',
    //   component: HomePage,
    //   name:'HomePage',
    // },
    {
      //成绩报告
      path:'/ScoreReport',
      component: ScoreReport,
      name:'ScoreReport',
    },
    {
      path:'/SchoolAssignment',
      component:SchoolAssignment,
      name:'SchoolAssignment'
    },
    {
      //交流
      path:'/Communicate',
      component:Communicate,
      name:'Communicate'
    },
    {
      path:'/CommunicateDetail',
      component:CommunicateDetail,
      name:'CommunicateDetail'
    },
    {
      //信息
      path:'/Information',
      component:Information,
      name:'Information'
    },

  ]
})


// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router
