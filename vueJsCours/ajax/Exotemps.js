const app = Vue.createApp({
        data() { // data est une fonction qui return des données
            return {
                calcul: [
                     [Math.floor(Math.random()*101),Math.floor(Math.random()*101), 0, this.result],
                ],
                result: null,
                operation: "",
                counter:0,
                bonneRep: null,
                timing : 0,
            };
        },
        methods: {
            addcalc(){
                this.calcul[this.counter][2] = 1;
                if((this.calcul[this.counter][0]) + (this.calcul[this.counter][1]) === this.calcul[this.counter][3]){
                     this.bonneRep++;
                }
                this.counter++;
                this.result = "";
                this.calcul[this.counter] = [];
                this.calcul[this.counter].push(Math.floor(Math.random()*100),Math.floor(Math.random()*100), 0, this.result)
                this.timing = 1
                this.timeinter()
            },
            timeinter(){
                if(this.timing === 1){
                    setTimeout(() => {
                        this.end();
                    }, 50000);
                }
            },
            end(){
                this.calcul[this.counter][2] = 1 ;
            }
        },
        computed: {

        },
        mounted() {}
        ,

    })
;

app.mount("#app");


function calculalea(){

}