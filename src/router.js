import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/bookLists',
      name: 'bookLists',
      component: () => import('./views/BookLists.vue')
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('./views/Books.vue')
    },
    {
      path: '/rankLists',
      name: 'rankLists',
      component: () => import('./views/RankLists.vue')
    },
    {
      path: '/recommendations',
      name: 'recommendations',
      component: () => import('./views/Recommendations.vue')
    },
    {
      path: '/authors',
      name: 'authors',
      component: () => import('./views/Authors.vue')
    }
  ]
})
