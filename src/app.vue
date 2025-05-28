<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from "vue-router"
import { UserService } from "./services/UserService"

const router = useRouter()

const logOut = () => {
  UserService.deAuthorize()

  setTimeout(() => {
    router.push("/")
  }, 0)
}
</script>

<template>
  <header>
    <nav class="nav">
      <RouterLink to="/articles">Articles</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <a href="#" @click="logOut">Logout</a>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
.nav {
  display: flex;
  gap: calc(var(--bu) * 4);
  margin-bottom: calc(var(--bu) * 8);
}
</style>
