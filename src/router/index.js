import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Content'
import UserView from '@/components/UserView'

Vue.config.productionTip = false

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user/:id',
      name: 'user',
      component: UserView,
      props: {
        title: 'User Options Page'
      }
    }
  ]
})
