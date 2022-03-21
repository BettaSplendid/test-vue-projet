<template>
  <div class="articles">
    <h1>liste articles</h1>
  </div>
</template>

<script>
export default {
    data() {
        return {
            articles:[]
        }
    },
    mounted(){
      this.fetchArticles()
    },
    methods : {
      async fetchARticles(){
        let response = await fetch("https://api.blog.quidam.re/api/getArticles.php")
          .then(reponse => response.json())
          .catch(e => e)
        if (articles instanceof Array) {
          this.articles = articles;
        }
      },


      // fetchArticles(){
      //   fetch("https://api.blog.quidam.re/api/getArticles.php")
      //   .then( (response) => {
      //     console.log(response);
      //   }).catch( (error) => {
      //     console.warning(error);
      //   });
      // },
    },
};
</script>

<style scoped></style>
