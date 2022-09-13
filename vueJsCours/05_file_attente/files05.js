const app = Vue.createApp({
  data() {
    return {
      listeClients: [], // {numCli, hArrivee}
      numClientSuivant: 0,
      nbreClients: 0,

      timer: null,
    };
  },
  methods: {
    prendreTicket() {
      this.nbreClients++;
      this.listeClients.push({ numCli: this.nbreClients, hArrivee: new Date() });
    },
    appelerSuivant() {
      if (this.nbreClientsEnAttente == 0) return;

      this.numClientSuivant++;
      let pos = this.listeClients.findIndex(cli => cli.numCli == this.numClientSuivant);
      if (pos < 0) return;

      this.listeClients.splice(pos, 1);
    },
    abandonClient(numCli) {
      let pos = this.listeClients.findIndex(cli => cli.numCli == numCli);
      this.listeClients.splice(pos, 1);
    },
    tpsAttente(cli) {
      return new Date(new Date() - cli.hArrivee - 3600000);
    },
  },
  computed: {
    nbreClientsEnAttente() {
      return this.listeClients.length;
    },
  },
  mounted() {
    this.timer = setInterval(() => {
      this.$forceUpdate();
    }, 1000);
  },
});

app.mount("#app");
