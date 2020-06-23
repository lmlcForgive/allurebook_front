import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
    // meta: {
    //   title: 'allurebook'
    // }
  }
]

const router = new VueRouter({
  routes
})

export default router
