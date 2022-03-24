import { defineStore } from "pinia";

export const useArticleStore = defineStore({
  id: "article_store",
  state: () => ({
    article: {},
    articles: [],
  }),
  getters: {},
  actions: {},
});
