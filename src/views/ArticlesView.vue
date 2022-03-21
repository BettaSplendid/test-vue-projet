<template>
  <h2>A Child Component!</h2>
  <article-list />
</template>

<script>
import ArticleList from "../components/ArticleList.vue";
export default {
  components: {
    ArticleList,
  },
};
</script>

<style scoped></style>
