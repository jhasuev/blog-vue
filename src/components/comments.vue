<template>
  <h3 class="mb-4 mt-5">Комментарии к посту</h3>
  <div v-for="comment in comments" :key="comment.id" class="card  mb-3">
    <div class="card-body">
      <h5 class="card-title">{{ comment.name }}</h5>
      <p class="card-text">{{ comment.text }}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div v-if="!comments.length" class="card">
    <div class="card-body">
      <p class="card-text  text-center">Нет комментариев...</p>
    </div>
  </div>
</template>

<script>
export default ({
  name: "Comments",
  props: {
    comments: { type: Array, default: () => [] },
  },
})
</script>
