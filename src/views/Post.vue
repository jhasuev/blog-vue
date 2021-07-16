<template>
  <post :post="getPost" />
  <comments :comments="getPostComments" />
</template>

<script>
import { mapGetters } from "vuex"
import Post from "@/components/post"
import Comments from "@/components/comments"
export default ({
  name: "Home",
  props: {
    id: { type: [Number, String] },
  },
  components: {
    Post,
    Comments,
  },
  computed: {
    ...mapGetters([ 'getPosts', 'getComments' ]),

    getPost(){
      return this.getPosts.find(post => this.id == post.id)
    },

    getPostComments(){
      return this.getComments.filter(comment => this.id == comment.postID)
    },
  },
})
</script>
