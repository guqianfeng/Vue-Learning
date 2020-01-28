import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Gqf from '@/views/Gqf.vue'
import User from '@/views/User.vue'
import Detail from '@/views/Detail.vue'
import Login from '@/views/Login.vue'

import Aaa from '@/views/Gqf/Aaa'
import Bbb from '@/views/Gqf/Bbb'

import BookChoose from '@/views/BookChoose'
import BoyBook from '@/views/Book/BoyBook'
import GirlBook from '@/views/Book/GirlBook'

import NotFound from '@/views/NotFound'

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
    children: [
      {
        path: '', //这样默认就跳到这个路由
        name: 'aaa',
        component: Aaa,
      },
      {
        path: 'bbb',
        name: 'bbb',
        component: Bbb,
      },
    ]
  },
  {
    path: '/user',
    alias: "/member",
    name: 'user',
    component: User,
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/bookchoose',
    name: 'bookchoose',
    component: BookChoose,
  },
  {
    path: '/boybook',
    name: 'boybook',
    component: BoyBook,
  },
  {
    path: '/girlbook',
    name: 'girlbook',
    component: GirlBook,
  },
  {
    path: '/book',
    name: "book",
    redirect: () => {
      let type = localStorage.getItem("book-type");
      return {name: type || 'bookchoose'}
    }
  },
  {
    path: "*",
    component: NotFound
  } 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

let user = {
    id: 1, //id为0模拟用户未登录
}

router.beforeEach((to, from, next) => {
    if(user.id === 0 && to.name === 'gqf'){
        next({
          name: 'login'
        })
    }else{
        next();
    }

})

export default router
