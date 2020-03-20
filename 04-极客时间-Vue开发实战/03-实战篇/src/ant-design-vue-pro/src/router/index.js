import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'
import NotFound from "../views/404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/user',
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/UserLayout.vue"),
    children: [
      {
        path: '/user',
        redirect: '/user/login'
      },
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
    path: '/',
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/BasicLayout.vue"),
    children: [
      // dashboard
      {
        path: '/',
        redirect: '/dashboard/analysis'
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: { render: h => h('router-view') },
        children: [
          {
            path: '/dashboard/analysis',
            name: 'analysis',
            component: () =>
              import(/* webpackChunkName: "dashboard" */ "../views/Dashboard/Analysis.vue")
          }
        ]
      },
      // form
      {
        path: '/form',
        name: 'form',
        component: { render: h => h('router-view') },
        children: [
          {
            path: '/form/basic-form',
            name: 'basicForm',
            component: () =>
              import(/* webpackChunkName: "form" */ "../views/Forms/BasicForm.vue")
          },
          {
            path: '/form/step-form',
            name: 'stepForm',
            component: () =>
              import(/* webpackChunkName: "form" */ "../views/Forms/StepForm/index.vue"),
            children: [
              {
                path: '/form/step-form',
                redirect: '/form/step-form/info'
              },
              {
                path: '/form/step-form/info',
                name: 'info',
                component: () => 
                  import(/* webpackChunkName: "form" */ "../views/Forms/StepForm/Step1.vue"),
              },
              {
                path: '/form/step-form/confirm',
                name: 'confirm',
                component: () => 
                  import(/* webpackChunkName: "form" */ "../views/Forms/StepForm/Step2.vue"),
              },
              {
                path: '/form/step-form/result',
                name: 'result',
                component: () => 
                  import(/* webpackChunkName: "form" */ "../views/Forms/StepForm/Step3.vue"),
              },
            ]  
          }
        ]
      }
    ]  
  },
  {
    path: "*",
    name: "404",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if(to.path !== from.path){
    NProgress.start();
  }
  next();
})

router.afterEach(() => {
  NProgress.done();
})

export default router;
