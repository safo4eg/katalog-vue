import { createRouter, createWebHistory } from 'vue-router';
import MaRegister from '@/views/Register';
import MaLogin from '@/views/Login';
import MaProducts from '@/views/Products';

const routes = [
  {
    path: '/register',
    name: 'register',
    component: MaRegister,
  },

  {
    path: '/login',
    name: 'login',
    component: MaLogin,
  },

  {
    path: '/products',
    name: 'products',
    component: MaProducts,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
