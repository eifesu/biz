import CompanyViewVue from '@/views/CompanyView.vue'
import SearchViewVue from '@/views/SearchView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { Suspense } from 'vue'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search/',
      name: 'search',
      component: SearchViewVue,
    },
    {
      path: '/company/:id',
      name: 'company',
      component: CompanyViewVue,
    },
  ]
})

export default router
