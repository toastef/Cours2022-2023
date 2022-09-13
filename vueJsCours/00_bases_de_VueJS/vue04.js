const app = Vue.createApp({
  data() {
    return {
      nom: "",
      participants: [],
      affParticipants: false,
    };
  },
  methods: {
    ajoutCandidat() {
      if (this.nom.trim() == "") return;

      this.participants.push(this.nom.trim());
      this.nom = "";
    },
  },
});

app.mount("#app");
