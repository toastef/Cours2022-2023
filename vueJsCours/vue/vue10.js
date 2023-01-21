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
            ageMin: 0,
            ageMax: 200,
        };
    },
    methods: {

    },
    computed: {
        personnesFiltrees (){
            this.persChoisie = "";
            let tabFiltrAge = this.personnes.filter(p => p.age >= this.ageMin && p.age <= this.ageMax)
            switch (this.Filtre) {
                case  "X":
                    return  tabFiltrAge ;
                   // pas besoin de break ici car il y a un return
                case "F":
                    return  tabFiltrAge.filter(p => p.sexe === 'F');

                case "H":
                    return  tabFiltrAge.filter(p => p.sexe === 'M');

            }
        },
        getAge() {
            if (this.persChoisie == null){ return;
            }else{

                return this.personnes.find(p => p.prenom === this.persChoisie);

        }

        },

    }
});
app.mount('#app');