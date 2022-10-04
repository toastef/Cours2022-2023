const app = Vue.createApp({
    data() {
        return {
            nom: "Leroy",
            prenom: "Lucien",
            age: 42,
            affichage: false,
        };
    },
    methods: {
        saluer(){
            console.log(`coucou ` + this.nom);
            this.age++; // a chaque fois que l'on va utiliser la methode saluer l'age va être incrementé de 1
        },
        affLoisirs(){
            for (const loisir of this.loisirs){
                console.log(loisir)
            }
        }
    }

});
app.mount('#app');