const app = Vue.createApp({
  data() {
    return {
      listeCP: [],
      comChoisie: null,
    };
  },
  methods: {},
  computed: {
    cpComChoisie() {
      return this.listeCP.filter((el) => el.Commune == this.comChoisie);
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
