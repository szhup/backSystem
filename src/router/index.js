import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
// import Index from '@/components/index'
// import roleList from '@/components/admin/roleList'
// import adminList from '@/components/admin/adminList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    }
  ]
})
