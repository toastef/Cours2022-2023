const app = Vue.createApp({
  data() {
    return {
      //tirage: [1, 7, 9, 17, 26, 43],
      tirage: [null, null, null, null, null, null],
      grilles: [
        //[1, 9, 18, 41, 42, 44],
        //[7, 11, 19, 26, 43, 47],
      ],
    };
  },
  methods: {
    ajouterGrille() {
      this.grilles.push([null, null, null, null, null, null]);
    },
    isNbInGrille(nb, grille) {
      if (nb == null) return false;
      if (grille == null) return false;

      return grille.includes(nb);
    },
    nbCorrespondances(grille1, grille2) {
      let cpt = 0;
      for (let nb of grille1) {
        if (this.isNbInGrille(nb, grille2)) cpt++;
      }
      return cpt;
    },
  },
  computed: {},
  mounted() {},
});
app.mount("#app");
