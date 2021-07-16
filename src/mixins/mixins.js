export default {
  methods: {
    changeTitle(title) {
      const titles = ["Блог на Vue.js"]
      const routeTitles = {
        "Home": "Домашняя страница",
        "Create": "Создание поста",
      }
      const routeTitle = routeTitles[this.$route.name]

      if(title) {
        titles.unshift(title)
      } else if (routeTitle) {
        titles.unshift(routeTitle)
      }
      
      document.head.querySelector("title").innerText = titles.join(" | ")
    },
  },

  mounted() {
    this.changeTitle("")
  },
}