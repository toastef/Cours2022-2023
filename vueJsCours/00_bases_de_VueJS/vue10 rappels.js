const app = Vue.createApp({
  data() {
    return {
      nom: "",
      nom2: "",
      age: 0,
      texte: "",
    };
  },
  methods: {
    saluer() {
      console.log("Bonjour " + this.nom);
    },
    afficherDown() {
      console.log("down :>> ", this.texte);
    },
    afficherUp() {
      console.log("up :>> ", this.texte);
    },
  },
  computed: {},
});

app.mount("#app");
