import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import Roulette from '../views/Roulette.vue'
import Cocktails from '../views/Cocktails.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  /*{
    path: '/roulette',
    name: 'Russian Roulette',
    component: Roulette
  },*/
  {
    path: '/cocktails',
    name: 'Cocktails',
    component: Cocktails
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
]

const router = new VueRouter({
  routes
})

export default router
