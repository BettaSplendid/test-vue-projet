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

//         const store = useArticleStore();
//         store.articles = articles;
//         console.log(store.articles);
//       }
//     },
//   },
// };
</script>
