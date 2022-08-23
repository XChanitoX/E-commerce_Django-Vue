import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import ProductView from '../views/ProductView.vue'
import CategoryView from '../views/CategoryView.vue'
import SearchView from '../views/SearchView.vue'
import CartView from '../views/CartView.vue'
import SignUp from '../views/SignUp.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartView
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchView
  },
  {
    path: '/:category_slug/:product_slug/',
    name: 'Product',
    component: ProductView
  },
  {
    path: '/:category_slug/',
    name: 'Category',
    component: CategoryView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
