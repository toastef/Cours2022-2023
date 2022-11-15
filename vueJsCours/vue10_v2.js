const app = Vue.createApp({
    data() {
        return {
            regions: ["Namur","Liege",  "Mons","Bxl"],
            sports:[
                {nom:"tennis", prix: 12.5, choisi: false},
                {nom:"foot",prix: 15, choisi: false},
                {nom:"sieste",prix: 15.25, choisi: false},
                {nom:"course",prix: 17, choisi: false},
            ],
            nompers:null,
            prenompers:null,
            regionChoisie:null,
        };
    },
    methods: {

    },
    computed: {
        sportChoisis(){
            return this.sports.filter(s => s.choisi === true)
        },
        totalPrixSports(){
            let total = 0;
            for(s of this.sports){
                if(s.choisi) total = total + s.prix;
            }
            return total;
        },
        totalPrixSportsV2(){
            return this.sportChoisis.reduce((total,s) => total + s.prix , 0)
        }
    },
});
app.mount('#app');