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

<script setup>
import { ref, onMounted } from "vue";
import { useArticleStore } from "../stores/articles_store.ts";
import { useRoute } from "vue-router";
import { limport } from "./export_api.js";

const display_article = ref({});

const route = useRoute();

onMounted(() => {
  console.log("On mounted");
  display_da_article();
});

async function display_da_article() {
  const storeStore = useArticleStore();
  let ze_id = route.params.article_id;
  console.log({ storeStore });
  if (storeStore.articles == 0) {
    await pull_articles();
    console.log({ storeStore });
    update_articles(ze_id);
  }
  update_articles(ze_id);
}

function update_articles(ze_id) {
  const storeStore = useArticleStore();
  let nos_articles = storeStore.articles;
  let article_a_montrer = nos_articles.find((element) => element.id === ze_id);
  display_article.value = article_a_montrer;
  console.log(display_article);
}

async function pull_articles() {
  await limport();
}
</script>

<style scoped></style>
