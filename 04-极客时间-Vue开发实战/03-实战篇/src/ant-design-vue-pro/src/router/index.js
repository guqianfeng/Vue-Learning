import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/user',
    component: { render: h => h('router-view') },
    children: [
      {
        path: '/user/login',
        name: 'login',
        component: () => 
          import(/* webpackChunkName: "user" */ "../views/User/Login.vue")
      },
      {
        path: '/user/register',
        name: 'register',
        component: () => 
          import(/* webpackChunkName: "user" */ "../views/User/Register.vue")
      }
    ]
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
