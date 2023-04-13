import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from "@/views/ProjectsView.vue";
import ContactsView from "@/views/ContactsView.vue";
import LoginView from "@/views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
      component: ProjectsView,
      props: true
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView,
      props: true
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

export default router
