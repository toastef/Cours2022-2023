const app = Vue.createApp({
    data() {
        return {
            num: 0,
            nom:"",
            etat: "Ready",
            heures : new Date().toLocaleDateString("fr-Be", { day :'numeric', month: 'numeric', year: "numeric", hour: 'numeric', minute:'numeric', second:'numeric'}),
           participants: [],

        };
    },
    methods: {
       ajouter() {
            if(this.nom === "") return;

                let nouv = {
                    num: ++this.num,
                    nom: this.nom,
                    hDep: new Date(0 - 3600000),
                    tps: new Date(0 - 3600000),
                    timer: null,
                }

           this.participants.push(nouv)
            this.nom = "";

        } ,
        startTimer(nom) {
            if(this.etat !== 'Ready') return;
            nom.hDep = new Date();
            nom.timer = setInterval(
                p => {
                    p.tps = new Date(new Date() - p.hDep - 3600000);
                },
                900,
                part
            );
        },

        stopTimer() {
            if(this.etat !== "Running") return;
            clearInterval(nom.timer);
            this.majDuree();
            this.etat = "stopped";
        },


        majDuree(){
            let now = new Date();
            this.tps = now - this.hdep;
        },

        msTohms(ms){ // conversion  ms en h minute sec milliseconde
            let tps = new Date(ms - 3600000) // correction de l'heure afficher par défault
            return  tps.toLocaleTimeString("fr-BE", {hour: '2-digit', minute: '2-digit', second: '2-digit'});

        }


    },
    computed:{},


});
app.mount('#app');
