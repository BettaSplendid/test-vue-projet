import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "article_store",
  state: () => ({
    article: {},
    articles: [],
  }),
  getters: {},
  actions: {},
});
