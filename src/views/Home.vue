<template>
  <heading text="Посты" />
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
