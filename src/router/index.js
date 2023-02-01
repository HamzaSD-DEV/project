import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import AllproductsView from '../views/AllproductsView'
import LoginView from '../views/LoginView'
import LogoutView from '../views/LogoutView'
import MyproductsView from '../views/MyproductsView'
import SignupView from '../views/SignupView'
import ProfileView from '../views/ProfileView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/allproducts',
    name: 'allproducts',
    component: AllproductsView,
    meta: { requireAuth: true }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogoutView
  },
  {
    path: '/myproducts',
    name: 'myproducts',
    component: MyproductsView,
    meta: {requireAuth:true}
  },
  {
    path: '/user',
    name: 'user',
    component: ProfileView,
    meta: { requireAuth: true }
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
