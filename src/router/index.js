import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './../views/HomeView.vue'
import AboutView from './../views/AboutView.vue'
import ContactView from './../views/ContactView.vue'
import ServiceView from './../views/ServiceView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/service',
    name: 'service',
    component: ServiceView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
