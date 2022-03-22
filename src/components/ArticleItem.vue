<template>
  <div>
    <h1>{{ article.title }}</h1>
    <p>{{ article.content }}</p>
    <p>
      <button>Lapin</button>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    article: Object,
  },
};
</script>

<style scoped></style>
