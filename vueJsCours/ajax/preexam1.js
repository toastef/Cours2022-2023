const app = Vue.createApp({
    data() {
        return {
            tirage: [1,7,9,17,26,43],
            grids:[[1,5,9,25,26,41]],

        };
    },
    methods: {
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

    computed: {},

});

app.mount("#app");