const app = Vue.createApp({
    data() {
        return {
            vitesse: 0,
            distance: null,
            previousSpeed:null,
            isRunning:false,
        };
    },

    methods: {
        accelerer() {
            this.previousSpeed = this.vitesse;
            this.vitesse += 1;
            this.isRunning = this.vitesse > 0
            this.majDuree()
        },
        reduire() {
            if(this.vitesse <= 0) return;
            this.previousSpeed = this.speed;
            this.vitesse -= 1;
            this.distance -= this.vitesse;
        },

        majDuree() {
            if(!this.intervalId) {
                this.intervalId = setInterval(() => {
                    if(this.isRunning) this.distance += this.vitesse;
                }, 1000)
            }
        },

        beforeDestroy() {
            clearInterval(this.intervalId);
        }
    },

    computed: {
        distance(){
            return this.distance + this.vitesse
        }
    },

    mounted() {
    },
});
app.mount("#app");