<script setup lang="ts">
import type { Article } from "@/api/Articles"
import { useRouter } from "vue-router"

defineProps<{
  data: Article
}>()

const router = useRouter()

const onClick = (id: number | undefined) => {
  router.push({ name: "article", params: { id } })
}
</script>

<template>
  <article class="article" :title="data.headline || ''" @click="onClick(data.id)">
    <h2>
      <RouterLink :to="{ name: 'article', params: { id: data.id } }" :title="data.headline || ''">
        {{ data.headline }}
      </RouterLink>
    </h2>

    <img src="https://placehold.co/40" :alt="data.headline || ''" />
  </article>
</template>

<style scoped>
.article {
  display: flex;
  flex-direction: row-reverse;
  justify-content: start;
  gap: calc(var(--bu) * 2);
  cursor: pointer;
}

.article:hover a {
  text-decoration: none;
}

.article:not(:last-child) {
  margin-bottom: calc(var(--bu) * 4);
}

.article img {
  border-radius: var(--bu);
}
</style>
