import "@/assets/reset.css"
import "@/assets/variables.css"

import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"

import app from "./app.vue"

import ViewRoot from "./views/ViewRoot.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "root",
      component: ViewRoot,
    },
    {
      path: "/articles",
      name: "articles",
      component: () => import("@/views/ViewArticles.vue"),
    },
    {
      path: "/article/:id",
      name: "article",
      component: () => import("@/views/ViewArticle.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/ViewLogin.vue"),
    },
  ],
})



const a = createApp(app)

a.use(router)

a.mount("#app")
