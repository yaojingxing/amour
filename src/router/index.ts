import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../user/home/Home.vue'
import Player from '../user/player/Player.vue'
import User from "../user/user/User.vue"
import Search from "../user/search/Search.vue"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/search',
    name:'Search',
    component:Search
  },

  {
    path:'/user',
    name:'User',
    component:User
  },


  {
    path:'/player',
    name:'Player',
    component:Player
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../user/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
