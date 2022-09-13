const app = Vue.createApp({
  data() {
    return {
      math: 0,
      francais: 0,
      anglais: 0,
      chimie: 0,
    };
  },
  methods: {},
  computed: {
    moyenne() {
      let total = this.math + this.francais + this.anglais + this.chimie;
      return total / 4;
    },
  },
});

app.mount("#app");
