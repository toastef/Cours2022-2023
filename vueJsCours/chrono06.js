const app = Vue.createApp({
  data() {
    return {
      dateCourse: new Date(),
      nomNouveauPart: "",
      listeParticipants: [], //{num, nom, hDep, tps, timer}
      nbPart: 0,
    };
  },
  methods: {
    nouvelleInscription() {
      if (this.nomNouveauPart == "") return;

      this.nbPart++;

      let nouv = {
        num: this.nbPart,
        nom: this.nomNouveauPart,
        hDep: new Date(0 - 3600000),
        tps: new Date(0 - 3600000),
        timer: null,
      };
      this.listeParticipants.push(nouv);

      this.nomNouveauPart = "";
      this.$refs.txtNouvPart.focus();
    },
    departPart(part) {
      //if (part.timer == "stop") return; // course déjà terminée
      if (part.timer != null) return; // part déjà en course

      part.hDep = new Date();
      part.timer = setInterval(
        p => {
          p.tps = new Date(new Date() - p.hDep - 3600000);
        },
        900,
        part
      );
    },
    arriveePart(part) {
      if (part.timer == "stop") return; // course déjà terminée
      if (part.timer == null) return; // part pas encore en course

      clearInterval(part.timer);
      part.timer = "stop";
      part.tps = new Date(new Date() - part.hDep - 3600000);

      let record = {
        dateCourse: this.dateCourse,
        numP: part.num,
        nomP: part.nom,
        hdepP: part.hDep,
        tpsP: part.tps,
      };

      fetch("nouveauResultat.php", {
        method: "POST",
        body: JSON.stringify(record),
        //header: { "content-type": "application/json" },
      });
    },
  },
  computed: {},
  mounted() {},
});

app.mount("#app");
