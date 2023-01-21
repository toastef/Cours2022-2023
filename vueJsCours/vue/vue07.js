const app = Vue.createApp({
    data() {
        return {
            nbr1: 0,
            nbr2: 0,
            operation: "/"
        };
    },
    methods: {},

    computed: { // computed vont être des valeurs : calculer
        resultat() {
            let res ;
            switch (this.operation){
                case "+":
               res = this.nbr1 + this.nbr2;
               break;
               case "-":
               res = this.nbr1 - this.nbr2;
                   break;
               case "*":
               res = this.nbr1 * this.nbr2;
                   break;
               case"/":
               res = this.nbr1 / this.nbr2;
                   break;
            }
            return res;
        },
    },

});
app.mount('#app');