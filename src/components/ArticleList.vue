<template>
  <div class="articles">
    <h1>liste articles - Article view</h1>
    <div v-for="article in articles" :key="article.id">
      <ArticleItem :article="article" />
    </div>
  </div>
</template>

<script setup>
import ArticleItem from "./ArticleItem.vue";
import { useCounterStore } from "../stores/articles_store.ts";

import { ref, onMounted } from "vue";
import { defineAsyncComponent } from "vue";

const articles = ref(0);

const TestTest = defineAsyncComponent(() => {
  return new Promise((resolve, reject) => {
    // ...load component from server
    resolve(/* loaded component */);
  });
});

async function fetchArticles() {
  console.log("cool!");
  console.log(articles);
  let collected_articles = await fetch(
    "https://api.blog.quidam.re/api/getArticles.php"
  )
    .then((response) => response.json())
    .catch((e) => e);
  if (collected_articles instanceof Array) {
    console.log("Collected articles check");
    articles.value = collected_articles;
  }

  const store = useCounterStore();
  store.articles = collected_articles;
  console.log(store.articles);
}

onMounted(() => {
  console.log("lapin");
  fetchArticles();
});

// function

//   data() {
//     return {
//       articles: [],
//     };
//   },
//   components: {
//     ArticleItem,
//   },
//   mounted() {
//     console.log("lapin");
//     this.fetchArticles();
//   },
//   methods: {
//     async fetchArticles() {
//       let articles = await fetch(
//         "https://api.blog.quidam.re/api/getArticles.php"
//       )
//         .then((response) => response.json())
//         .catch((e) => e);
//       if (articles instanceof Array) {
//         console.log("thing");
//         this.articles = articles;

//         const store = useCounterStore();
//         store.articles = articles;
//         console.log(store.articles);
//       }
//     },
//   },
// };
</script>


