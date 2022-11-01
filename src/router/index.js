import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import axios from 'axios'

Vue.use(VueRouter)
Vue.use(axios)
const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
   
    component: () => import( '../views/admin.vue')
  },
  {
    path: '/account',
    name: 'account',
   
    component: () => import('../views/account.vue')
  },
  {
    path: '/login',
    name: 'login',
   
    component: () => import('../views/login.vue')
  },
  {
    path: '/sign_up',
    name: 'sign_up',
   
    component: () => import('../views/sign_up.vue')
  },
{
  path: '/check_out',
  name: 'check_out',
  component: () => import('../views/check_out.vue')
}
 
]

const router = new VueRouter({
  routes
})

export default router
