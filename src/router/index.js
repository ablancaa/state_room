import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import RoomsView from '@/views/RoomsView.vue'
import EsterilitzacioView from '@/views/EsterilitzacioView.vue'
import BoardstautsView from '@/views/BoardstautsView.vue'
const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/DashboardView',
    name: 'DashboardView',
    component: DashboardView
  },
  {
    path: '/RoomsView',
    name: 'RoomsView',
    component: RoomsView
  },
    {
    path: '/EsterilitzacioView',
    name: 'EsterilitzacioView',
    component: EsterilitzacioView
  },
  {
    path: '/BoardstautsView',
    name: 'BoardstautsView',
    component: BoardstautsView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DashboardView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
