const app = Vue.createApp({
    data() {
        return {
            players: [],
            selectedPlayer1: null,
            selectedPlayer2: null,
            sexeChoisi: null,
        };
    },

    methods: {
        },
    computed: {

        liste1(){
            switch (this.sexeChoisi){
                case "Femme":
                    return this.players.filter(x => x.sexe === "F");
                    break;
                case "Homme":
                    return this.players.filter(x => x.sexe === "M");
                    break;
                case "X":
                    return this.players.filter(x => x.sexe === "F");
                    break;
            }
        },

        liste2(){
            switch (this.sexeChoisi){
                case "Femme":
                    return this.players.filter(x => x.sexe === "F");
                    break;
                case "Homme":
                    return this.players.filter(x => x.sexe === "M");
                    break;
                case "X":
                    return this.players.filter(x => x.sexe === "M");
                    break;
            }
        },

    },
    watch: {
        selectedPlayer1(newPlayer) {
            if(newPlayer) {
                newPlayer.selected = true;
            }
        },
        selectedPlayer2(newPlayer) {
            if(newPlayer) {
                newPlayer.selected = true;
            }
        },
    },

    mounted() {

        fetch('personnes.json')
            .then(response => response.json())
            .then(data => {
                this.players = data
            })
    },
});

app.mount("#app");