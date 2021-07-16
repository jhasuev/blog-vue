<template>
  <div v-if="!added">
    <h3 class="mb-4 mt-5">Добавить пост</h3>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label class="form-label">Название поста</label>
        <input type="name" class="form-control" :class="{ 'is-invalid': errors.title }" v-model="title">
        <div class="invalid-feedback">{{ errors.title }}</div>
      </div>
      <div class="mb-3">
        <label class="form-label">Краткое описание</label>
        <textarea class="form-control" rows="2" v-model="excerpt" :class="{ 'is-invalid': errors.excerpt }" />
        <div class="invalid-feedback">{{ errors.excerpt }}</div>
      </div>
      <div class="mb-3">
        <label class="form-label">Полное описание</label>
        <textarea class="form-control" rows="5" v-model="text" :class="{ 'is-invalid': errors.text }" />
        <div class="invalid-feedback">{{ errors.text }}</div>
      </div>
      <button class="btn btn-success">Добавить комментарий</button>
    </form>
  </div>
  <div v-else>
    <div class="alert alert-primary  text-center">
      Пост успешно добавлен!
    </div>
    <div class="text-center">
      <button class="btn btn-primary" @click="addMore()">Добавить еще</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"
export default ({
  name: "Create",
  data(){
    return {
      title: "",
      excerpt: "",
      text: "",
      errors: {},

      added: false,
    }
  },

  methods: {
    ...mapActions([ 'addPost' ]),

    onSubmit(){
      this.errors = {}
      
      const title = this.title.trim()
      const excerpt = this.excerpt.trim()
      const text = this.text.trim()
      
      if(!title) this.errors.title = "Название поста должно быть заполнено"
      if(!excerpt) this.errors.excerpt = "Краткое описание должно быть заполнено"
      if(!text) this.errors.text = "Полное описание должно быть заполнено"

      if (!Object.keys(this.errors).length) {
        this.addPost({ title, excerpt, text })

        this.title = ""
        this.excerpt = ""
        this.text = ""

        this.added = true
      }
    },

    addMore(){
      this.added = false
    },

  },
})
</script>
