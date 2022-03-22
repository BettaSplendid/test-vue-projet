<template>
  <h2>A Child Component!</h2>

  <ArticleList />
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
