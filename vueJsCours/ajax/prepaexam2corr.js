const app = Vue.createApp({
    data() {
        return {
            mots: [],
            category: [],
            motAtrouver:null,
        };
    },
    methods: {
        choisirMot(){
            let n = Math.floor(Math.random() * this.motsSelected.length)// génération nb aléatoire dans tab
            this.motAtrouver = this.motsSelected[n]; // récupération du mots a la pl du nb
            setTimeout(this.choisirMot,3000); // timer qui select mot aleatoire toutes les 3 sec
        }
    },

    computed: {
        cateSelected(){
           return this.category.filter(x=>x.selected).map(x => x.categorie);
        },
        motsSelected(){
            return this.mots.filter(x=> this.cateSelected.includes(x.categorie)).map(x=>x.mot) // récupère la liste des mots pour chaque cate selectionnée
        }
    },
    mounted() {
        fetch('mots.json')
            .then(response => response.json())
            .then(data => {
                this.mots = data
                let cate = [...new Set(this.mots.map(item => item.categorie))].sort(); // pour chaque mots dans la liste on veut juste la categories
                for (cat of cate){
                    this.category.push({categorie: cat, selected:false})
                }
            })
    },
});

app.mount("#app");