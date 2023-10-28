import { createRouter, createWebHistory } from 'vue-router'
import CoursesView from '../views/CoursesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/courses',
      name: 'CoursesView',
      component: CoursesView
    }
  ]
})

export default router
