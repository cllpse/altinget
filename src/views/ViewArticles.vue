<script lang="ts" setup>
import { getAll, type Article } from "@/api/Articles"
import ArticlePreview from "@/components/ArticlePreview.vue"
import { ref, watch } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

const loading = ref(false)
const articles = ref<Article[] | undefined>()

watch(
  () => route,
  async () => {
    {
      loading.value = true

      try {
        articles.value = await getAll()
      } catch (e) {
        console.error(e)
      } finally {
        loading.value = false
      }
    }
  },
  { immediate: true },
)
</script>

<template>
  <section>
    <h1 class="h1">Articles</h1>

    <p v-if="loading">Loading...</p>

    <template v-else>
      <ArticlePreview v-for="article in articles" :key="article.id" :data="article" />
    </template>
  </section>
</template>

<style scoped>
.h1 {
  margin-bottom: calc(var(--bu) * 4);
}
</style>
