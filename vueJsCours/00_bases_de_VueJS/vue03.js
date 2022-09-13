const app = Vue.createApp({
  data() {
    return {};
  },
  methods: {
    saluer() {
      console.log("Bonjour");
    },
    quitter() {
      console.log("Au revoir");
    },
  },
});

app.mount("#app");
