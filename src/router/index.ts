import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../user/home/Home.vue'
import Player from '../user/player/Player.vue'
import User from "../user/account/Account.vue"
import Search from "../user/search/Search.vue"
import Album from "@/user/album/Album.vue"

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
    path:'/album',
    name:'Album',
    component:Album
  },

  {
    path:'/account',
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
  //   component: () => import(/* webpackChunkName: "about" */ '../account/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
