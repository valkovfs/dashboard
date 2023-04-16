import { createRouter, createWebHistory } from 'vue-router'
import {guard} from "@/utils/guard";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/ProjectsView.vue'),
      props: true
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('@/views/ContactsView.vue'),
      props: true,
/*      beforeEnter: () => {
        const canAccess = guard()
        if (!canAccess) return '/login'
      }*/
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !guard()) next({ name: 'login'})
  else next()
})

export default router
