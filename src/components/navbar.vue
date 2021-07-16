<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <div class="container-fluid">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li
          v-for="route in routes"
          :key="route.name"
          class="nav-item"
        >
          <a
            @click="onClick(route.name)"
            class="nav-link"
            :class="{ 'active': $route.name == route.name }"
          >{{ route.text }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data(){
    return {
      routes: [
        { name: "Home", text: "Главная" },
        { name: "Create", text: "Добавить пост" },
      ],
    }
  },

  methods: {
    onClick(name) {
      this.$router.push({ name })
    },
  },
}
</script>

<style scoped lang="scss">
  .nav-link {
    cursor: pointer;
    opacity: .5;
    &.active {
      cursor: default;
      opacity: 1;
    }
  }
</style>