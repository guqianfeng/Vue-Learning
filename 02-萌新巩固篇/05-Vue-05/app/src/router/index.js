import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Gqf from '@/views/Gqf.vue'
import User from '@/views/User.vue'
import Detail from '@/views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/gqf',
    name: 'gqf',
    component: Gqf,
  },
  {
    path: '/user',
    name: 'user',
    component: User,
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
