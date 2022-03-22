<template>
  <div class="articles">
    <h1>liste articles - Article view</h1>
    <!-- <div v-for="article in articles" :key="article.id">
      <ArticleItem :article="article" />
    </div> -->
    <div>
      <ArticleItem :article="store.article" />
    </div>
  </div>
</template>

<script>
import ArticleItem from "./ArticleItem.vue";
import { useCounterStore } from "../stores/articles_store.ts";

export default {
  data() {
    return {
      articles: [],
    };
  },
  components: {
    ArticleItem,
  },
  mounted() {
    console.log("lapin");
    this.fetchArticles();
  },
  methods: {
    async fetchArticles() {
      let articles = await fetch(
        "https://api.blog.quidam.re/api/getArticles.php"
      )
        .then((response) => response.json())
        .catch((e) => e);
      if (articles instanceof Array) {
        console.log("thing");
        this.articles = articles;

        const store = useCounterStore();
        store.article = this.articles[1];
        console.log(store.articles);
      }
    },
  },
};
</script>

<style scoped></style>
