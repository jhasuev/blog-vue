import { createRouter, createWebHashHistory } from "vue-router"

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
  {
    path: "/post/:id",
    name: "Post",
    props: true,
    component: () => import("@/views/Post")
  },
]

export default createRouter({
  routes,
  history: createWebHashHistory(),
})
