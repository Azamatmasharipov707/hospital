import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/department',
      name: 'department',
      component: () => import('@/views/Department.vue')
    },
    {
      path: '/spec',
      name: 'spec',
      component: () => import('@/views/Spec.vue')
    }
  ]
})

export default router
