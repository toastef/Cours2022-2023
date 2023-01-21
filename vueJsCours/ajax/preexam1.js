const app = Vue.createApp({
    data() {
        return {
            tirage: [],
            grids:[[1,5,9,25,26,41]],
            showtirage: false,
            tirageaffi: false,


        };
    },
    methods: {
        tirageale(){
            while (this.tirage.length < 6) {
                let num = Math.floor(Math.random() * 50) + 1;
                if (!this.tirage.includes(num)) {
                    this.tirage.push(num);
                }
            }
            this.tirage.sort(function(a, b) { return a - b });
        },
        ajouterGrille(){
            this.grids.push([null,null,null,null,null,null]);
        },


        isNbInGrid(nb,grid){
            if (nb === null) return false;
            if (grid === null) return false;
            return grid.includes(nb)
            },

        nbMatch(grid1,grid2){
            let cpt = 0;
            for(let nb of grid1){
                if (this.isNbInGrid(nb,grid2)) cpt++;
            }
            return cpt;
        }
        },

    mounted(){
        this.tirageale();
    },

    computed: {},

});

app.mount("#app");