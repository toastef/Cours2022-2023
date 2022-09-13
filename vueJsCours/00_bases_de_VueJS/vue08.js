const app = Vue.createApp({
  data() {
    return {
      hdep: null,
      timer: null,
      temps: "00:00:00.000",
      laps: [],
      etat: "Ready", // Ready, Running, Stopped
    };
  },
  methods: {
    startChrono() {
      if (this.etat != "Ready") return;

      this.hdep = new Date();
      this.timer = setInterval(this.majTemps, 1);

      this.etat = "Running";
      //console.log(this.etat);
    },
    stopChrono() {
      if (this.etat != "Running") return;

      clearInterval(this.timer);

      this.etat = "Stopped";
      //console.log(this.etat);
    },
    resetChrono() {
      if (this.etat != "Stopped") return;

      this.temps = "00:00:00.000";
      this.laps = [];

      this.etat = "Ready";
      //console.log(this.etat);
    },
    addLapTime() {
      if (this.etat != "Running") return;

      this.laps.push(this.temps);
    },
    majTemps() {
      let duree = new Date() - this.hdep; //en ms
      let temps = new Date(duree);

      let h = temps.getUTCHours();
      if (h < 10) h = "0" + h;
      let m = temps.getMinutes();
      if (m < 10) m = "0" + m;
      let s = temps.getSeconds();
      if (s < 10) s = "0" + s;
      let ms = temps.getMilliseconds();
      if (ms < 10) ms = "00" + ms;
      else if (ms < 100) ms = "0" + ms;
      this.temps = h + ":" + m + ":" + s + "." + ms;
    },
  },
  computed: {},
});

app.mount("#app");
