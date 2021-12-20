import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './plugins/element.js'
import 'lib-flexible'
import echarts from 'echarts'
import Element from 'element-ui'
import Router from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element)
Vue.use(Router) // 引入路由
//引入组件
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
