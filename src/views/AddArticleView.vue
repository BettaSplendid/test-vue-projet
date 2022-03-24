<template>
  <div>
    Vous êtes dans radio : AddArticleView.vue
    <AddArticle @handleSubmit="handleSubmit" :user="user" />
  </div>
</template>

<script>
import AddArticle from "../components/AddArticle.vue";
export default {
  data() {
    return {
      user: {
        categorie: "",
        title: "",
        content: "",
        user_id: "",
      },
    };
  },
  components: {
    AddArticle,
  },
  methods: {
    async handleSubmit() {
      console.log("handle");

      let laform = new FormData();
      laform.append("title", this.user.title);
      laform.append("content", this.user.content);
      laform.append("user_id", this.user.user_id);
      laform.append("categorie", this.user.categorie);
      console.log({ laform });

      let response = await fetch(
        "https://api.blog.quidam.re/api/postArticle.php",
        {
          method: "POST",
          body: laform,
        }
      )
        .then((res) => res.json())
        .catch((err) => err);

      if (response.message === "") {
        this.notification = "Article ajouter avec succès";
        this.new_article = response.article_id;
      }
    },
  },
};
</script>
