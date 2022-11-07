const app = Vue.createApp({
    data() {
        return {
            etat: "Ready",
            hdep: null,
            hfin: null,
            duree: null, // en ms
            timer:null,
            lap: [], // en ms

        };
    },
    methods: {
        starttimer() {
            if(this.etat != 'Ready') return;
            this.hdep = new Date();
            this.timer = setInterval(this.majDuree, 10); // va permetre l'affichage du chrono
            this.etat = "Running";

        },

        lapShow(){
            if(this.etat != "Running") return;
            this.lap.push( this.duree);

            //this.etat = "Running";
        },


        stopTimer() {
            if(this.etat != "Running") return;
            clearInterval(this.timer);
            this.majDuree();
            this.lap.push( this.duree);
            this.etat = "stopped";
        },

        resetTimer(){
            if(this.etat != 'stopped') return;
            this.hdep = null;
            this.duree = null;
            this.lap = [];
            this.etat = "Ready";

        },

        majDuree(){
            let now = new Date();
            this.duree = now - this.hdep;
        },

        msTohms(ms){ // conversion  ms en h minute sec milliseconde
            let tps = new Date(ms - 3600000) // correction de l'heure afficher par défault
            return  tps.toLocaleTimeString("fr-BE", {hour: '2-digit', minute: '2-digit', fractionalSecondDigits: 1});

        }


    },
    computed:{},


});
app.mount('#app');
