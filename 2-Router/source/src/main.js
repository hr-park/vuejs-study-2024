import { createApp } from 'vue'
import App from './App.vue'

import {createRouter, createWebHistory} from 'vue-router'  

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')// 동적 import
  },
  {
    path: '/:catchAll(.*)',
    name: 'ErrorPage',
    component: () => import('@/views/ErrorPage')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
createApp(App).use(router).mount('#app')
