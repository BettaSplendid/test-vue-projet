<template>
  <div>
    <h1>{{ article.title }}</h1>
    <p>{{ article.content }}</p>
    <p>
      <button v-on:click="SendArticle">
        /article ok
        <!-- <router-link to="/article">/article ok</router-link> -->
      </button>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    article: Object,
  },
  methods: {
    SendArticle() {
      this.$router.push({
        name: "article",
        params: { article_id: this.$props.article.id },
      });
    },
  },
};
</script>

<style scoped></style>
