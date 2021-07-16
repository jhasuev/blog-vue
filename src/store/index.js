import { createStore } from 'vuex'

const store = createStore({
  state: {
    posts: [
      {
        id: 1,
        title: "заголовок 1",
        excerpt: "краткое описание 1",
        text: "полное описание 1",
      },
      {
        id: 2,
        title: "заголовок 2",
        excerpt: "краткое описание 2",
        text: "полное описание 2",
      },
      {
        id: 3,
        title: "заголовок 3",
        excerpt: "краткое описание 3",
        text: "полное описание 3",
      },
      {
        id: 4,
        title: "заголовок 1",
        excerpt: "краткое описание 1",
        text: "полное описание 1",
      },
      {
        id: 5,
        title: "заголовок 2",
        excerpt: "краткое описание 2",
        text: "полное описание 2",
      },
      {
        id: 6,
        title: "заголовок 3",
        excerpt: "краткое описание 3",
        text: "полное описание 3",
      },
      {
        id: 7,
        title: "заголовок 1",
        excerpt: "краткое описание 1",
        text: "полное описание 1",
      },
      {
        id: 8,
        title: "заголовок 2",
        excerpt: "краткое описание 2",
        text: "полное описание 2",
      },
      {
        id: 9,
        title: "заголовок 3",
        excerpt: "краткое описание 3",
        text: "полное описание 3",
      },
    ],
    comments: [
      {
        id: 1,
        postID: 1,
        username: "Jamal",
        text: "This is a comment...",
      },
      {
        id: 2,
        postID: 2,
        username: "Jamal 2",
        text: "This is a comment... 2",
      },
      {
        id: 3,
        postID: 1,
        username: "Jamal 3",
        text: "This is a comment... 3",
      },
    ],
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
  },

  actions: {
    addPostComment({ commit }, comment) {
      commit("ADD_POST_COMMENT", comment)
    },

    addPost({ commit }, post) {
      commit("ADD_POST", post)
    },

    removeComment({ commit }, commentID) {
      commit("REMOVE_COMMENT", commentID)
    },
  },
})

export default store
