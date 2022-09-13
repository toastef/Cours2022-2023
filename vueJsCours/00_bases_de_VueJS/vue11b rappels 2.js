const app = Vue.createApp({
  data() {
    return {
      cotes: { math: 0, francais: 0, anglais: 0, chimie: 0, informatique: 0 },
    };
  },
  methods: {},
  computed: {
    moyenne() {
      let total = 0;
      for (branche in this.cotes) {
        console.log("branche :>> ", this.cotes[branche]);
        total = total + this.cotes[branche];
      }
      return total / Object.keys(this.cotes).length;
    },
  },
});

app.mount("#app");
