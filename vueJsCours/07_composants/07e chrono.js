const app = Vue.createApp({
  methods: {
    startAll() {
      console.log("$emit");
      this.$emit("start");
    },
  },
});
app.component("chrono", {
  props: {
    nom: String,
    prenom: String,
  },
  data() {
    return {
      hDep: 0,
      tpsHMSms: "00:00:00.0",
      timer: null,
      etat: "ready", // ready, running, stopped
    };
  },
  template: `<span>
               <slot></slot>
               <button @click="start" :disabled="etat!='ready'">Start</button>
               <button @click="stop" :disabled="etat!='running'">Stop</button>
               {{tpsHMSms}}
             </span>`,

  methods: {
    majHMS() {
      let tps = new Date(new Date() - this.hdep);
      let hh = tps.getUTCHours().toString().padStart(2, "0");
      let mm = tps.getMinutes().toString().padStart(2, "0");
      let ss = tps.getSeconds().toString().padStart(2, "0");
      let ms = Math.round(tps.getMilliseconds() / 100).toString();

      this.tpsHMSms = `${hh}:${mm}:${ss}.${ms}`;
    },
    start() {
      if (this.etat != "ready") return;
      this.hdep = new Date();
      this.timer = setInterval(this.majHMS, 100);
      this.etat = "running";
    },
    stop() {
      if (this.etat != "running") return;
      clearInterval(this.timer);
      this.majHMS();
      this.etat = "stopped";
    },
  },
  computed: {},
  created() {
    this.$root.$on("start", this.start);
  },
  mounted() {},
});
app.mount("#app");
