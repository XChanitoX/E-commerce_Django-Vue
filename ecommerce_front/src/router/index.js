import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

import ProductView from '../views/ProductView.vue'
import CategoryView from '../views/CategoryView.vue'
import SearchView from '../views/SearchView.vue'
import CartView from '../views/CartView.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import MyAccount from '../views/MyAccount.vue'
import CheckOut from '../views/CheckOut.vue'
import SuccessView from '../views/SuccessView.vue'

import store from '@/store'

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
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/my-account',
    name: 'MyAccount',
    component: MyAccount,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchView
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartView
  },
  {
    path: '/cart/success',
    name: 'SuccessView',
    component: SuccessView
  },
  {
    path: '/cart/checkout',
    name: 'CheckOut',
    component: CheckOut,
    meta: {
      requireLogin: true
    }
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated){
    next({ name: 'LogIn', query: { to: to.path } });
  } else {
    next()
  }
})

export default router
