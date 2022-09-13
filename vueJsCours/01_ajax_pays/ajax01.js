const app = Vue.createApp({
  data() {
    return {
      listePays: [],
      codeChoisi: null, //alpha2P
    };
  },
  methods: {},
  computed: {
    paysChoisi() {
      return this.listePays.find((p) => p.alpha2P == this.codeChoisi);
    },
    listePaysTries() {
      return [...this.listePays].sort((a, b) => a.nomFrP.localeCompare(b.nomFrP));
    },
  },
  mounted() {
    fetch("listeTousPays.php") // requête vers le serveur
      .then((rep) => rep.json()) // transformation de la réponse du serveur
      .then((liste) => {
        // utilisation de la réponse transformée
        for (const pays of liste) {
          this.listePays.push(pays);
        }
        //this.listePays = liste;
      });
  },
});

app.mount("#app");
