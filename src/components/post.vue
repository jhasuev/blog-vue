<template>
  <div>
    <h1 class="mb-4  text-center">{{ post.title }}</h1>
    <p>{{ post.text }}</p>
  </div>
</template>

<script>
export default ({
  name: "Post",
  props: {
    post: { type: Object, default: () => ({}) },
  },
})
</script>
