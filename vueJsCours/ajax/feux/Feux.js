const app = Vue.createApp({
    data() {
        return {
            rouge: "grey",
            orange: "grey",
            vert: "vert",
            prouge: "rouge",
            pvert: "grey",
            etatCliPiet: false,
            btnDisabled : false,
        }
    },
    methods: {
        changeLights() {
            this.vert = "grey"
            this.rouge = 'grey'
            this.orange = "orange"
            if(this.btnDisabled) return;
            // Désactiver le bouton
            this.btnDisabled = true;

            // Mettre le feu des voitures en rouge après 2 secondes (2000ms)
            setTimeout(() => {
                this.rouge = 'rouge'
                this.orange = "grey"
                this.pvert = "vert"
                this.prouge = "grey"
                this.etatCliPiet = true


                // Mettre le feu des piétons en vert et démarrer le clignotement après 5 secondes (5000ms)
                setTimeout(() => {

                    this.rouge = "grey"
                    this.vert = "vert"
                    this.pvert = "grey"
                    this.prouge = "rouge"

                }, 5000)
                this.startFlashing()
            }, 2000)

        },
        startFlashing() {
            let intervalId = null;
            setTimeout(() => {
                let count = 0;
                let intervalId = setInterval(() => {
                    if (count >= 10 || this.vert === 'vert') {
                        clearInterval(intervalId);
                        this.btnDisabled = false;
                        return;
                    }
                    this.pvert = this.pvert === 'vert' ? 'grey' : 'vert';
                    count++;
                }, 500);
            }, 1000);
        }
        /*  startFlashing() {
              // Si le feu des piétons est vert et clignote, le mettre en rouge toutes les 2 secondes (2000ms)
              if (this.pvert === 'vert' && this.etatCliPiet) {
                  setTimeout(() => {
                      this.pvert = 'grey'
                      this.startFlashing()
                  }, 1000)
              }
          }*/

    },

    computed: {},

});
app.mount("#app")