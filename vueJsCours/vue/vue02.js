
const app = Vue.createApp ({
    data() {
      return {
          nom : "Michel",
          loisirs: ["sieste" , "tv", "faire la fête"],
      };
    },
});
app.mount('#app');