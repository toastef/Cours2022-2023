const app = Vue.createApp({
  data() {
    return {
      cpt: 0,
      cpt2: 0,
    };
  },
  methods: {
    incCpt() {
      this.cpt++;
    },
    incCpt2() {
      this.cpt2++;
    },
    doubleCpt2Method() {
      console.log("Method doubleCpt2Method " + this.cpt2);
      return this.cpt2 * 2;
    },
  },
  computed: {
    doubleCpt2Computed() {
      console.log("Method doubleCpt2Computed " + this.cpt2);
      return this.cpt2 * 2;
    },
  },
  mounted() {
    console.log("Hello");
  },
});
app.mount("#app");
