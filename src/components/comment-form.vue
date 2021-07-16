<template>
  <div>
    <h3 class="mb-4 mt-5">Добавить комментарий</h3>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label class="form-label">Ваше имя</label>
        <input type="name" class="form-control" :class="{ 'is-invalid': errors.username }" placeholder="Иван" v-model="username">
        <div class="invalid-feedback">{{ errors.username }}</div>
      </div>
      <div class="mb-3">
        <label class="form-label">Комментарий</label>
        <textarea class="form-control" rows="3" v-model="text" :class="{ 'is-invalid': errors.text }" />
        <div class="invalid-feedback">{{ errors.text }}</div>
      </div>
      <button class="btn btn-success">Добавить комментарий</button>
    </form>
  </div>
</template>

<script>
export default ({
  name: "CommentsForm",
  data(){
    return {
      username: "",
      text: "",
      errors: {}
    }
  },

  methods: {
    onSubmit(){
      this.errors = {}
      
      const username = this.username.trim()
      const text = this.text.trim()
      
      if(!username) this.errors.username = "Имя должно быть заполнено"
      if(!text) this.errors.text = "Введите комментарий"

      if (!Object.keys(this.errors).length) {
        this.$emit("addComment", { username, text })
        this.username = ""
        this.text = ""
      }
    },
  },
})
</script>
