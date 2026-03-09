import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import Dashboard from '../views/DashboardView.vue'
import RoomsView from '@/views/RoomsView.vue'
import EsterilitzacioView from '@/views/EsterilitzacioView.vue'
import BoardstautsView from '@/views/BoardstautsView.vue'
import TasquesView from '@/views/TasquesView.vue'
import DirectoriView from '@/views/DirectoriView.vue'
import EquipsTreballView from '@/views/EquipsTreballView.vue'
import AboutView from '@/views/AboutView.vue'
import NotificacionsView from '@/views/NotificacionsView.vue'
import IncidenciesView from '@/views/IncidenciesView.vue'
import PruebasComponentes from '@/views/PruebasComponentes.vue'
const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
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
    path: '/TasquesView',
    name: 'TasquesView',
    component: TasquesView
  },
  {
    path: '/DirectoriView',
    name: 'DirectoriView',
    component: DirectoriView
  },
  {
    path: '/EquipsTreballView',
    name: 'EquipsTreballView',
    component: EquipsTreballView
  },
    {
    path: '/AboutView',
    name: 'AboutView',
    component: AboutView
  },
      {
    path: '/NotificacionsView',
    name: 'NotificacionsView',
    component: NotificacionsView
  },
  {
    path: '/IncidenciesView',
    name: 'IncidenciesView',
    component: IncidenciesView
  },
    {
    path: '/PruebasComponentes',
    name: 'PruebasComponentes',
    component: PruebasComponentes
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
