import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home")
  },
  {
    path: "/create",
    name: "Create",
    component: () => import("@/views/Create")
  },
]

export default createRouter({
  routes,
  history: createWebHistory(),
})
