const app = Vue.createApp({
    data(){
        return {
            compteur : 0,
            timer : null,
            etat :"ready", // "ready, running,stopped"
        }
    },

    methods: {

        startCpt(){
            switch (this.etat){
                case "ready" :
                    this.timer = setInterval(this.incCpt, 100)
                    this.etat = "running";
                    break;
                case "running":
                    break;
                case "stopped" :
                    this.timer = setInterval(this.incCpt, 100)
                    this.etat = "running";
                    break;

            }
    },
        stopCpt(){
            if(this.etat != "running") return;
           clearInterval(this.timer);
           this.etat = "stopped"
        },
        resetCpt(){
            if(this.etat != "stopped") return
            this.compteur = 0 ;
            this.etat = "ready"
        },

        incCpt(){
            this.compteur++
        }

    }
});
app.mount("#app");


// timer a assigner a une variable

// setTimout (travail, 1000ms) travail après 1 sec
// setInterval(travail , 1000ms) travail toutes les secondes
// clearTimout()
// clearInterval()