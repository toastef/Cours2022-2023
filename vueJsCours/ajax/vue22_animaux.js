const app = Vue.createApp({
  data() {
    return {
      animaux: [],
      especesSelectionnees: [],
    };
  },
  methods: {
    animaux1espece(esp) {
      return this.animaux.filter(x => x.espece == esp).sort((x, y) => x.nom.localeCompare(y.nom));
    },

    clickCaseEspece(esp, event) {
      for (a of this.animaux1espece(esp)) a.selectionne = event.target.checked;
    },
    deselectionnerEspece(e) {
      this.especesSelectionnees.splice(
        this.especesSelectionnees.findIndex(x => x == e),
        1
      );
    },
  },
  computed: {
    especes() {
      return [...new Set(this.animaux.map(x => x.espece))].sort();
    },
    animauxSelectionnes() {
      return this.animaux.filter(x => x.selectionne);
    },
  },
  mounted() {
    fetch("animaux.json")
      .then(rep => rep.json())
      .then(lst => {
        this.animaux = lst;
        this.animaux.forEach(x => (x.selectionne = false));
      });
  },
});
app.mount("#app");
