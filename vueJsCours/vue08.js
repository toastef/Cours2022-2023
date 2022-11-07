const app = Vue.createApp({
    data() {
        return {
            nbr1: 0,
            nbr2: 0,

        };
    },
    methods: {
        resultatFct(){  // fonction a appeler sur demande
            console.log('je passe dans fct');
            return Number(this.nbr1) +  Number(this.nbr2);

        }

    },

    computed: { // computed vont être des valeurs : calculer  généré directement
        resultatComp() {
            console.log('je passe dans comp');
            return Number(this.nbr1) +  Number(this.nbr2);


        },
    },

});
app.mount('#app');