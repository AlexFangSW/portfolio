import { createRouter, createWebHistory } from 'vue-router'
import Blobs from '@/views/Blobs'

const routes = [
  {
    path: '/',
    name: 'Blobs',
    component: Blobs
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
