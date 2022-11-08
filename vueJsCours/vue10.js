const app = Vue.createApp({
    data() {
        return {
            personnes: [
                {prenom: "Lucien", sexe: "M", age: 64},
                {prenom: "Louise", sexe: "F", age: 36},
                {prenom: "Antoine", sexe: "M", age: 25},
                {prenom: "Anthony", sexe: "M", age: 30},
                {prenom: "Eva", sexe: "F", age: 29},
                {prenom: "Evan", sexe: "M", age: 29},
            ],
            Filtre: "X", // M et F
            persChoisie:null,
        };
    },
    methods: {

    },
    computed: {
        personnesFiltrees (){
            switch (this.Filtre) {
                case  "X":
                    return  this.personnes ;
                    break;
                case "F":
                    return  this.personnes.filter(p => p.sexe === 'F');
                    break;
                case "H":
                    return  this.personnes.filter(p => p.sexe === 'M');
                    break;

            }
        }
    }
});
app.mount('#app');