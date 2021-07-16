<template>
  <post :post="getPost" />
  <comments :comments="getPostComments" />
  <commentsForm @addComment="addComment" />
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import Post from "@/components/post"
import Comments from "@/components/comments"
import commentsForm from "@/components/comment-form"
export default ({
  name: "Home",
  props: {
    id: { type: [Number, String] },
  },
  components: {
    Post,
    Comments,
    commentsForm,
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

  methods: {
    ...mapActions([ 'addPostComment' ]),

    addComment(comment) {
      this.addPostComment({ ...comment, postID: Number(this.id) })
    },
  },

})
</script>
