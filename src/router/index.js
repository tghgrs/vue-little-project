import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import('@/views/Home')
  },
  {
    path: '/question/:index',
    name: 'Question',
    component: ()=>import('@/views/Question')
  },
  {
    path: '/score',
    name: 'Score',
    component: ()=>import('@/views/Score')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
