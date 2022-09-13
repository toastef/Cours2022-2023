const app = Vue.createApp({
  data() {
    return {
      nomPart: "",
      prenomPart: "",
      agePart: null,
      participants: [
        //{ nom: "dubois", prenom: "luc", age: 25 },
        //{ nom: "dupont", prenom: "marc", age: 17 },
        //{ nom: "leroy", prenom: "luc", age: 39 },
      ],
    };
  },
  methods: {
    ajoutParticipant() {
      let nom = this.nomPart.trim();
      let prenom = this.prenomPart.trim();
      let age = Number(this.agePart);
      if (nom == "") return; //nom vide
      if (prenom == "") return; //prénom vide
      if (age < 0) return; //age incorrect

      this.participants.push({ nom: nom, prenom: prenom, age: age });
      this.nomPart = "";
      this.prenomPart = "";
      this.agePart = null;
    },
  },
  computed: {},
});

app.mount("#app");
