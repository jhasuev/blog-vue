import { createApp } from 'vue'
import App from './App.vue'
import store from "./store/"
import router from "./router/"
import mixins from "./mixins/mixins"
import heading from "@/mixins/heading.vue"
import "./scss/main.scss"

createApp(App)
  .use(store)
  .use(router)
  .mixin(mixins)
  .component("heading", heading)
  .mount('#app')
