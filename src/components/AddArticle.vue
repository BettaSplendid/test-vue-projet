<template>
  <h1>This is an about page</h1>
  Vous êtes dans radio : AddArticle.vue

  <form @submit.prevent="$emit('handleSubmit')">
    <p>categorie is: {{ user.categorie }}</p>
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
</template>

<script>
export default {
  props: {
    user: Object,
  },
};
</script>
