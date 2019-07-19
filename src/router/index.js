import Vue from 'vue'
// 引入
import VueRouter from 'vue-router'

// 引入路由所对应的组件
// @:src  相当于Src目录
import Login from '@/views/login.vue'

Vue.use(VueRouter)

// 创建路由对象
var router = new VueRouter({
  routes: [
    {
      name: 'default',
      path: '/',
      redirect: { name: 'login' }
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    }
  ]
})
// 默认暴露
export default router
