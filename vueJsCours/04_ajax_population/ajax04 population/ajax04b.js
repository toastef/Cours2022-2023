const app = Vue.createApp({
  data() {
    return {
      listePays: [], // obtenue au chargement de l'application
      paysChoisi: null, // select
      sexeChoisi: null, // boutons radio
      listePersPaysSexeChoisi: [],
      listePersSelectionnees: [],

      etat: "AvantInscription", // AvantInscription, Inscription, ApresInscription
    };
  },
  methods: {
    commencerInscription() {
      if (this.etat != "AvantInscription") return;
      if (this.paysChoisi === null) return;
      if (this.sexeChoisi === null) return;

      this.obtenirListePersPaysSexe();
      this.etat = "Inscription";
    },

    cloturerInscription() {
      if (this.etat != "Inscription") return;

      this.listePersSelectionnees.sort((x, y) => x.nomP.localeCompare(y.nomP));
      this.etat = "ApresInscription";
    },

    obtenirListePersPaysSexe() {
      fetch("listePersUnPays.php?pays=" + this.paysChoisi)
        .then(rep => rep.json())
        .then(liste => (this.listePersPaysSexeChoisi = liste.filter(p => p.sexeP == this.sexeChoisi)));
    },
    selectPers(idP) {
      if (this.etat != "Inscription") return;
      if (this.listePersSelectionnees.findIndex(p => p.idP == idP) >= 0) return; //déjà sélectionné

      let pers = this.listePersPaysSexeChoisi.find(p => p.idP == idP);
      this.listePersSelectionnees.push(pers); // ajout à la liste
    },
    deselectPers(idP) {
      if (this.etat != "Inscription") return;

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
