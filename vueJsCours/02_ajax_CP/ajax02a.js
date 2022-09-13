const app = Vue.createApp({
  data() {
    return {
      listeCP: [],
      cpChoisi: null,
    };
  },
  methods: {},
  computed: {
    cpChoisis() {
      return this.listeCP.filter((el) => el.CP == this.cpChoisi);
    },
  },
  mounted() {
    fetch("listeCP.php") // requête vers le serveur
      .then((rep) => rep.json()) // transformation de la réponse du serveur
      .then((liste) => {
        this.listeCP = liste;
      });
  },
});

app.mount("#app");
