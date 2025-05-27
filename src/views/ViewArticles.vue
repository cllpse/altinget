<script lang="ts" setup>
import { getArticles, type Article } from "@/api/api"
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
        articles.value = await getArticles()
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
  <h1>Articles</h1>

  <template v-for="article in articles" :key="article.id">
    <ArticlePreview :data="article" />

    <br />
  </template>
</template>

<style scoped></style>
