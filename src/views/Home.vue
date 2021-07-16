<template>
  <h1 class="text-center mb-4"> Посты </h1>

  <posts :posts="getPosts" />

</template>

<script>
import { mapGetters } from "vuex"
import Posts from "@/components/posts"
export default ({
  name: "Home",
  components: {
    Posts,
  },
  computed: {
    ...mapGetters([ 'getPosts' ]),
  },
})
</script>
