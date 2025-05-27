<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <RouterLink to="/articles">Articles</RouterLink>
  <RouterLink to="/article">Article</RouterLink>
  <RouterLink to="/login">Login</RouterLink>

  <RouterView />
</template>
