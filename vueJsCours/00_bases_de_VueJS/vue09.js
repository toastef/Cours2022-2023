const app = Vue.createApp({
  data() {
    return {
      article: "",
      pu: "",
      qte: "",

      lgCde: [
        { article: "Pomme", pu: 0.3, qte: 3 },
        { article: "Poire", pu: 0.4, qte: 2 },
      ],

      validee: false, // en mode saisie au départ
    };
  },
  methods: {
    addLgCde() {
      if (this.validee) return;

      this.lgCde.push({
        article: this.article,
        pu: this.pu,
        qte: this.qte,
      });
      this.resetLgCde();
    },
    resetLgCde() {
      if (this.validee) return;

      this.article = "";
      this.pu = "";
      this.qte = "";
      // this.prix calculé automatiquement
    },
    delLgCde(ev) {
      if (this.validee) return;

      let numLg = ev.target.attributes.numLg.value;
      //console.log("numLg :>> ", numLg);
      this.lgCde.splice(numLg, 1);
    },
    validateCde() {
      console.log("validate");
      this.validee = true;
    },
  },
  computed: {
    totalPrix() {
      /*
      let tot = 0;
      for (let i = 0; i <= this.lgCde.length; i++) {
        tot = tot + lgCde[i].prix;
      }
      return tot;
      */
      let tot = this.lgCde.reduce((tot, lg) => (tot = tot + lg.pu * lg.qte), 0);
      return tot.toFixed(2);
    },
  },
});

app.mount("#app");
