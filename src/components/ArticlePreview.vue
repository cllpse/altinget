<script setup lang="ts">
import type { Article } from "@/api/api"

defineProps<{
  data: Article
}>()
</script>

<template>
  <a href="#">{{ data.headline }}</a>
</template>

<style scoped></style>
