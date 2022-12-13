const app = Vue.createApp({
        data() { // data est une fonction qui return des données
            return {
                joueur: [],
                result: null,
                operation: "",
                counter: 0,
                nb1:Math.floor(Math.random() * 101),
                nb2:Math.floor(Math.random() * 101),
                bonneRep: null,
                timing: 0,
                reponse: null,
                nomNouveauPart: "",

            };
        },
        methods: {
            addcalc() {
                /* this.calcul[this.counter][2] = 1;*/
                switch (this.operation) {
                    case "+":
                        this.result = this.nb1 + this.nb2;
                        break;
                    case "-":
                        this.result = this.nb1 - this.nb2;
                        break;
                    case "*":
                        this.result = this.nb1 * this.nb2;
                        break;
                    case"/":
                        this.result = this.nb1 / this.nb2;
                        break;
                }

                if (this.result === this.joueur.reponse) {
                    this.joueur.bonneRep++;
                }
                this.valide = 1;
                this.nb1=Math.floor(Math.random() * 101);
                this.nb2=Math.floor(Math.random() * 101);
                this.joueur[0].calc.push( [this.nb1,this.nb2,this.reponse,this.valide] );
                this.result = "";
                this.timing = 1;
                this.timeinter()
            },
            timeinter() {
                if (this.timing === 1) {
                    setTimeout(() => {
                        this.end();
                    }, 50000);
                }
            },
            end() {
                this.joueur.valide = 1;
            },

            nouvelleInscription() {
                if (this.nomNouveauPart === "" || this.operation === "") return;

                let nouv = {
                    num: this.counter,
                    nom: this.nomNouveauPart,
                    calc: [[this.nb1, this.nb2,this.reponse,this.valide]],
                    bonneRep: null,
                };
                this.joueur.push(nouv);
                this.counter++;
                this.nomNouveauPart = "";
            },

        },
        computed: {},
        mounted() {
        }
        ,

    })
;

app.mount("#app");


function calculalea() {

}