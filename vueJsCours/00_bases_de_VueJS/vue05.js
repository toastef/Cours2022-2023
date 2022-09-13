const app = Vue.createApp({
  data() {
    return {
      nom: "",
      age: null,
      participants: [], //{nom:"dubois", age:25}
      affUniquementParticipantsMajeurs: false,
    };
  },
  methods: {
    ajoutCandidat() {
      let nom = this.nom.trim();
      let age = Number(this.age); // pas nécessaire si v-model.number ou type="number" en HTML
      if (nom == "") return; //nom vide
      if (age < 0) return; //age incorrect
      if (this.participants.findIndex((p) => p.nom == nom) >= 0) return; //nom existe déjà

      this.participants.push({ nom: nom, age: age });
      this.nom = "";
      this.age = null;
    },
  },
  computed: {
    participantsMajeurs() {
      return this.participants.filter((p) => p.age >= 18);
    },
    moyenneAgeParticipants() {
      let taille = this.participants.length;
      if (taille == 0) return Number.NaN;

      let somme = this.participants.reduce((total, p) => total + p.age, 0);
      return somme / taille;
    },
  },
});

app.mount("#app");
