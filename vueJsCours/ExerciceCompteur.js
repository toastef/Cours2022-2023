const app = Vue.createApp({
    data() {
        return {
            num: 1,
            nom:"",
            etat: "Ready",
            heure : new Date().toLocaleDateString("fr-Be", { day :'numeric', month: 'numeric', year: "numeric", hour: 'numeric', minute:'numeric', second:'numeric'}),
            hdep: null,
            hfin: null,
            tps: null,
            duree:null,
           participants: [
               {
                   num: 1 ,nom:"David", hdep: null, tps: 'salut', duree: 'heoolo'
               },
           ]

        };
    },
    methods: {
       ajouter() {
            $i = 0 ;
            if(this.nom === "") return;

                this.participants.push(
                    {
                        num: ++this.num,
                        nom: this.nom,
                        hdep : new Date().toLocaleDateString( "fr-BE",{
                            hour: 'numeric',
                            minute: 'numeric',
                            second: 'numeric',
                        }),
                        tps: this.majDuree(),
                        duree : this.tps,
                    });

            this.nom = "";

        } ,
        startTimer() {
            if(this.etat !== 'Ready') return;
            tps = this.tps = setInterval(this.majDuree, 10); // va permetre l'affichage du chrono
            this.etat = "Running";
            console.log('hello' + this.nom)
        },



        stopTimer() {
            if(this.etat !== "Running") return;
            clearInterval(this.timer);
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
