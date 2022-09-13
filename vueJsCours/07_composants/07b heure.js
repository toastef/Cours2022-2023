const app = Vue.createApp({});
app.component("heure", {
  data() {
    return {
      heureHMS: "",
      timer: null,
    };
  },
  template: `<span>{{heureHMS}}</span>`,

  methods: {
    majHMS() {
      let tps = new Date();
      let hh = tps.getUTCHours().toString().padStart(2, "0");
      let mm = tps.getMinutes().toString().padStart(2, "0");
      let ss = tps.getSeconds().toString().padStart(2, "0");
      this.heureHMS = `${hh}:${mm}:${ss}`;
    },
  },
  computed: {},
  mounted() {
    timer = setInterval(this.majHMS, 900);
  },
});
app.mount("#app");
