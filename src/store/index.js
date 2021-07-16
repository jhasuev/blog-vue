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
  },

  mutations: {
  },

  actions: {
  },
})

export default store
