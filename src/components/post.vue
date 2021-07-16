<template>
  <div>
    <heading :text="post.title" />
    <p class="text">{{ post.text }}</p>
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

<style scoped lang=scss>
.text {
  white-space: pre-line;
}
</style>