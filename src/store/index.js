import { createStore } from 'vuex'

const store = createStore({
  state: {
    posts: JSON.parse(localStorage.posts || '[]'),
    comments: JSON.parse(localStorage.comments || '[]'),
  },
  
  getters: {
    getPosts(state) {
      return state.posts.filter(post => {
        // количество комментов у поста
        post.commentsCount = state.comments.reduce((acc, comment) => {
          return post.id === comment.postID ? acc + 1 : acc
        }, 0)

        return post
      })
    },

    getComments(state) {
      return state.comments
    },
  },

  mutations: {
    ADD_POST_COMMENT(state, comment) {
      // последний id + 1 = след id
      const id = state.comments.reduce((acc, comment) => comment.id > acc ? comment.id : acc, 0) + 1
      state.comments.push({ id, ...comment })
    },
    
    ADD_POST(state, post) {
      // последний id + 1 = след id
      const id = state.posts.reduce((acc, post) => post.id > acc ? post.id : acc, 0) + 1
      state.posts.unshift({ id, ...post })
    },
    
    REMOVE_COMMENT(state, commentID) {
      const commentIndex = state.comments.findIndex(comment => commentID == comment.id)
      if (commentIndex >= 0) {
        state.comments.splice(commentIndex, 1)
      }
    },
    
    REMOVE_POST(state, postID) {
      const postIndex = state.posts.findIndex(post => postID == post.id)
      if (postIndex >= 0) {
        state.posts.splice(postIndex, 1)
      }
    },
    
    REMOVE_POST_COMMENTS(state, postID) {
      state.comments = state.comments.filter(comment => comment.postID != postID)
    },

    SAVE_POSTS({ posts }) {
      localStorage.posts = JSON.stringify(posts)
    },

    SAVE_COMMENTS({ comments }) {
      localStorage.comments = JSON.stringify(comments)
    },
  },

  actions: {
    addPostComment({ commit }, comment) {
      commit("ADD_POST_COMMENT", comment)
      commit("SAVE_COMMENTS")
    },

    addPost({ commit }, post) {
      commit("ADD_POST", post)
      commit("SAVE_POSTS")
    },

    removeComment({ commit }, commentID) {
      commit("REMOVE_COMMENT", commentID)
      commit("SAVE_COMMENTS")
    },

    removePost({ commit }, postID) {
      commit("REMOVE_POST", postID)
      commit("REMOVE_POST_COMMENTS", postID)
      
      commit("SAVE_POSTS")
      commit("SAVE_COMMENTS")
    },
  },
})

export default store
