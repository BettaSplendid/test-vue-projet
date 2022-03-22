<template>
  <div class="articles">
    <h1>liste articles - Article view</h1>
    <div v-for="article in articles" :key="article.id">
      <ArticleItem :article="article" />
    </div>
  </div>
</template>

<script>
import ArticleItem from "./ArticleItem.vue";

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
      }
    },
  },
};
</script>

<style scoped></style>
