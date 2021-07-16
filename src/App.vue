<template>
  <navbar />

  <div class="container  py-3">
    <div class="row">
      <div class="col">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar"
export default {
  name: 'App',
  components: {
    Navbar
  },
}
</script>
