import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllList from '../views/myList/AllList.vue'
import SingleList from '../views/myList/SingleList.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/allList',
    name: 'allList',
    component: AllList
  },
  {
    path: '/singleList',
    name: 'singleList',
    component: SingleList
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
