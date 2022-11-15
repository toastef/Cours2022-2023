const app = Vue.createApp({
  data() {
    return {
      listePays: [],
      codeChoisi: null,
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
          this.listePays.push(pays); // on ajoute a ce qui existe déja
        }
        //this.listePays = liste; // on écrase les éléments et on les remplace par une nouvelle liste
      });
  },
});

app.mount("#app");