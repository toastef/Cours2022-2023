const app = Vue.createApp({
  data() {
    return {
      loisirs: [],
      age: 12,
      loisirsChoisis: [],
    };
  },
  methods: {
    envoyer() {
      if (this.nbLoisirsOK) {
        console.log(this.loisirsChoisis);
      } else {
        console.log("Erreur !");
      }
    },
  },
  computed: {
    loisirsAccessibles() {
      this.loisirsChoisis = [];
      return this.loisirs.filter(el => Number(el.ageMin) <= Number(this.age));
    },
    nbLoisirsChoisis() {
      return this.loisirsChoisis.length;
    },
    nbLoisirsOK() {
      return this.nbLoisirsChoisis >= 1 && this.nbLoisirsChoisis <= 2;
    },
  },
  mounted() {
    fetch("csv_to_json.php?csv_file=loisirs.csv") // requête vers le serveur
      .then(rep => rep.json()) // transformation de la réponse du serveur
      .then(liste => (this.loisirs = liste));
  },
});

app.mount("#app");
