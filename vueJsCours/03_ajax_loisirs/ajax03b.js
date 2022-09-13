const app = Vue.createApp({
  data() {
    return {
      loisirs: [],
      age: null,
    };
  },
  methods: {},
  computed: {
    loisirsAccessibles() {
      return this.loisirs.filter((el) => Number(el.ageMin <= Number(this.age)));
    },
  },
  mounted() {
    fetch("csv_to_json.php?csv_file=loisirs.csv") // requête vers le serveur
      .then((rep) => rep.json()) // transformation de la réponse du serveur
      .then((liste) => (this.loisirs = liste));
  },
});

app.mount("#app");
