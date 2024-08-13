import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import EnteteView from '@/views/EnteteView.vue'
import HomePage from '@/views/HomePage.vue'
import LandingView from '@/views/LandingView.vue'
import { useAuthStore } from '@/stores/auth'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: '/todo',
      name: 'todo',
      component: HomePage,
      meta: { requiresAuth: true },
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
      path: '/login',
      name: 'login',
      component: LoginView,
      //meta: { requiresAuth: true },
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView,
      //meta: { requiresAuth: true },
    },
    {
      path: '/navbar',
      name: 'navbar',
      component: EnteteView,
    },
    {
      path: '/',
      name: 'landing',
      component: LandingView,
      meta: { requiresAuth: false },
    }
  ]
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.user) {
    next({ name: 'signup' });
  } 
  else if (to.meta.requiresGuest && authStore.user) {
    next({ name: 'home' });
  } 
  else if (!to.meta.requiresAuth && authStore.user && to.name !== 'landing') {
    next({ name: 'landing' });
  } 
  else {
    next();
  }
});



export default router
