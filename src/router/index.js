import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home")
  },
  {
    path: "/posts",
    name: "Posts",
    component: () => import("@/views/Posts")
  },
]

export default createRouter({
  routes,
  history: createWebHistory(),
})
