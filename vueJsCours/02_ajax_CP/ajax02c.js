const app = Vue.createApp({
  data() {
    return {
      listeCP: [],
      cpChoisi: null,
      comChoisie: null,
    };
  },
  methods: {},
  computed: {
    comCpChoisi() {
      let liste = this.listeCP.filter((el) => el.CP == this.cpChoisi);
      //this.comChoisie = liste.length > 0 ? liste[0].Commune : null;
      return liste;
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
