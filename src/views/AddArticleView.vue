<template>
  <div class="about">
    <h1>This is an about page</h1>
    <form @submit.prevent="handleSubmit">
      <p>Message is: {{ user.categorie }}</p>
      <input
        type="text"
        v-model="user.categorie"
        name="categorie"
        id="categorie"
        placeholder="categorie"
      />
      <input
        type="text"
        v-model="user.title"
        name="title"
        id="title"
        placeholder="title"
      />
      <input
        type="text"
        v-model="user.content"
        name="content"
        id="content"
        placeholder="content"
      />
      <input
        type="number"
        v-model="user.user_id"
        name="user_id"
        id="user_id"
        placeholder="user_id"
      />
      <input type="submit" value="submit" />
    </form>
  </div>
</template>

<script>

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
      ).then((res) => res.json()).catch((err) => err)

      if (response.message === "") {
        this.notification = "Article ajouter avec succès";
        this.new_article = response.article_id;
      }
    },
  },
};
</script>
