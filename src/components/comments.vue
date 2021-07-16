<template>
  <h3 class="mb-4 mt-5">Комментарии к посту</h3>
  <div v-for="comment in comments" :key="comment.id" class="card  mb-3">
    <div class="card-body">
      <p class="card-text">{{ comment.text }}</p>
    </div>
    <div class="card-footer  d-flex align-items-center  justify-content-between">
      <small class="text-muted">Автор: <b>{{ comment.username }}</b></small>
      <a href="javascript:" class="text-danger" @click="removeComment(comment.id)">Удалить</a>
    </div>
  </div>
  <div v-if="!comments.length" class="card">
    <div class="card-body">
      <p class="card-text  text-center">Нет комментариев...</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default ({
  name: "Comments",
  props: {
    comments: { type: Array, default: () => [] },
  },

  methods: {
    ...mapActions([ 'removeComment' ]),
  },
})
</script>

<style scoped lang="scss">
.card-text {
  white-space: pre-line;
}
</style>