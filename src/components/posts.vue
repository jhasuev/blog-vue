<template>
  <div ref="posts">
    <div v-for="post in getPosts" :key="post.id" class="card  mb-3">
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">{{ post.excerpt }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <span> Комментариев: {{ post.commentsCount }} </span>
          <div>
            <button class="btn btn-primary" @click="read(post.id)">Читать</button>
            <a href="javascript:" class="text-danger  ms-3" @click="removePost(post.id)">Удалить</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!getPosts.length" class="card  mb-3">
      <div class="card-body">
        <p class="card-text  text-center">Нет еще постов</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
    this.loadPostsIfNeeded()
    this.timer = setInterval(() => this.loadPostsIfNeeded(), 300);
  },
  
  methods: {
    ...mapActions([ 'removePost' ]),

    loadPostsIfNeeded(){
      const lastElement = this.$refs.posts.lastElementChild
      if (this.canShowMore(lastElement)) {
        this.showMore()
      }
    },

    canShowMore(el){
      if(!el) return null

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight
      
      return rect.top + rect.height <= windowHeight
    },

    showMore(){
      this.showPosts = Math.min(this.showPosts + this.showPostsMax, this.posts.length)
    },

    read(id) {
      this.$router.push({name: "Post", params: { id }})
    }
  },

  beforeUnmount(){
    clearInterval(this.timer)
  },
})
</script>
