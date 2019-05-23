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
  ]
})
