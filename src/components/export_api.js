import { useArticleStore } from "../stores/articles_store.ts";

export async function limport() {
    const storeStore = useArticleStore();
    let collected_articles = await fetch(
            "https://api.blog.quidam.re/api/getArticles.php"
        )
        .then((response) => response.json())
        .catch((e) => e);
    if (collected_articles instanceof Array) {
        console.log("Collected articles check");
        let articles = {};
        articles.value = collected_articles;
    }

    storeStore.articles = collected_articles;
    console.log(storeStore.articles);
}