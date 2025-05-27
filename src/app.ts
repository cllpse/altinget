import "@/assets/reset.css"

import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"

import Articles from "@/views/ViewArticles.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "articles",
      component: Articles,
    },
    {
      path: "/articles",
      name: "articles",
      component: Articles,
    },
    {
      path: "/article",
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

import app from "./app.vue"

const a = createApp(app)

a.use(router)

a.mount("#app")
