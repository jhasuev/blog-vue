<template>
  <div class="posts" ref="posts">
    <div v-for="post in getPosts" :key="post.id" class="card  mb-3">
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">{{ post.excerpt }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <span> Комментариев: {{ post.commentsCount }} </span>
          <button class="btn btn-primary">Читать</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default ({
  name: "PostsList",
  props: {
    posts: { type: Array, default: () => [] },
  },
  data() {
    return {
      showPostsMax: 3,
      showPosts: 3,
    }
  },

  computed: {
    getPosts() {
      return this.posts.filter((post, i) => i < this.showPosts)
    }
  },

  mounted(){
    this.timer = setInterval(() => this.loadPostsIfNeeded(), 300);
  },
  
  methods: {
    loadPostsIfNeeded(){
      const lastElement = this.$refs.posts.lastElementChild
      if (this.canShowMore(lastElement)) {
        this.showMore()
      }
    },

    canShowMore(el){
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight
      
      return rect.top + rect.height <= windowHeight
    },

    showMore(){
      this.showPosts = Math.min(this.showPosts + this.showPostsMax, this.posts.length)
    },
  },

  beforeUnmount(){
    clearInterval(this.timer)
  },
})
</script>
