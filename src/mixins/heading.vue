<template>
  <h1 v-if="text" class="text-center mb-4">{{ text }}</h1>
</template>

<script>
  export default {
    props: {
      text: { type: String, default: "" }
    }
  }
</script>