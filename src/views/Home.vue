<template>
  <h1 class="text-center mb-4"> Посты </h1>

  <div
    v-for="post in getPosts"
    :key="post.id"
    class="card  mb-3"
  >
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">{{ post.excerpt }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <span> Комментариев: {{ post.commentsCount }} </span>
        <button class="btn btn-primary">Читать</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default ({
  name: "Home",
  computed: {
    ...mapGetters([
      'getPosts',
      'getComments',
    ]),
  },
})
</script>
