<template>
  <div class="articles">
    <h1>liste articles - Article view</h1>
    <div v-for="article in articles" :key="article.id">
      <ArticleItem :article="article" id=rand() />
    </div>
  </div>
</template>

<script setup>
import ArticleItem from "./ArticleItem.vue";
import { useArticleStore } from "../stores/articles_store.ts";
import { ref, onMounted } from "vue";
import { limport } from "./export_api.js";

const articles = ref(0);
const store = useArticleStore();
onMounted(() => {
  console.log("On mounted");
  fetchArticles();
});

async function fetchArticles() {
  console.log("fetchArticles!");
  console.log(articles);
  let collected_articles = await limport();
  collected_articles = store.articles;
  if (collected_articles instanceof Array) {
    console.log("Collected articles check");
    articles.value = collected_articles;
  }

  store.articles = collected_articles;
  console.log(store.articles);
  console.log(collected_articles[0]);
}

function create_template_ok() {
  var p = document.createElement("p");
  document.body.appendChild(p);
}
</script>

<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>