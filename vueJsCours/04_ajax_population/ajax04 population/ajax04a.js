const app = Vue.createApp({
  data() {
    return {
      listePays: [], // obtenue au chargement de l'application
      paysChoisi: null, // select
      listePersPaysChoisi: [], //recréée à chaque changement de pays
      listePersSelectionnees: [],
    };
  },
  methods: {
    obtenirListePersPays() {
      fetch("listePersUnPays.php?pays=" + this.paysChoisi).then(rep =>
        rep.json().then(liste => (this.listePersPaysChoisi = liste))
      );
    },
    selectPers(idP) {
      if (this.listePersSelectionnees.findIndex(p => p.idP == idP) >= 0) return; //déjà sélectionné

      let pers = this.listePersPaysChoisi.find(p => p.idP == idP);
      this.listePersSelectionnees.push(pers); // ajout à la liste
    },
    deselectPers(idP) {
      let i = this.listePersSelectionnees.findIndex(p => p.idP == idP);
      this.listePersSelectionnees.splice(i, 1); // suppression de la liste
    },
  },
  computed: {
    nbrPersSelectionnees() {
      return this.listePersSelectionnees.length;
    },
  },
  mounted() {
    fetch("listePays.php")
      .then(rep => rep.json())
      .then(liste => (this.listePays = liste.map(p => p.paysP)));
  },
});

app.mount("#app");
