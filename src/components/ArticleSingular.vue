<template>
  <div class="articles">
    <h1>Article view</h1>
    <div>
      <h2>
        <p>{{ display_article.title }}</p>
      </h2>
      <p>{{ display_article.content }}</p>
    </div>
  </div>
</template>

<script>
import { useCounterStore } from "../stores/articles_store.ts";

export default {
  data() {
    return {
      display_article: Object,
    };
  },
  mounted() {
    let ze_id = this.$route.params.article_id;

    const store = useCounterStore();
    let nos_articles = store.articles;
    let article_a_montrer = nos_articles.find(
      (element) => element.id === ze_id
    );

    this.display_article = article_a_montrer;
  },
};
</script>

<style scoped></style>
