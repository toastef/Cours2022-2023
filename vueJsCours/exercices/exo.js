const app = Vue.createApp({
    data() {
        return {
            regions: ["Namur","Liege",  "Mons","Bxl"],
            sports:["tennis", "foot", "petanque","sieste"],
            nompers:null,
            prenompers:null,
            sportChoisis:[],
            regionChoisie:null,
        };
    },
    methods: {

    },
    computed: {
    },
});
app.mount('#app');