import { createRouter, createWebHistory } from 'vue-router';
import MaRegister from '@/views/Register';
import MaLogin from '@/views/Login';
import MaProducts from '@/views/Products';
import MaCart from '@/views/Cart';
import MaOrders from '@/views/Orders';

const routes = [
  {
    path: '/',
    name: 'home',
    component: MaProducts,
  },

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
  },

  {
    path: '/cart',
    name: 'cart',
    component: MaCart,
  },

  {
    path: '/orders',
    name: 'orders',
    component: MaOrders,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
