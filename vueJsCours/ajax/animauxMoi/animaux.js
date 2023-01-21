const app = Vue.createApp({
    data() {
        return {
            Animaux: [],
            especeselec : [],
        }
    },
    methods: { // besoin d'une donnée
        animauxEspece(espece){
            return this.Animaux.filter((animal) => animal.espece === espece).sort((x,y) => x.nom.localeCompare(y.nom));
        },
        selectAllAnimals(espece, event) {
            this.Animaux.forEach(animal => {
                if (animal.espece === espece) {
                    animal.selectionne = event.target.checked; // va permettre de savoir si la case est cochée ou décochée
                }
            })
        },

        deselec(e){
            this.especeselec.splice(this.especeselec.findIndex(x => x=== e),1);
        }
    },

    computed: { // appelé uniquement si il y a une modification
        espece(){
            return [...new Set(this.Animaux.map(animal => animal.espece))].sort();
            // fonction qui permet de n'avoir que un element de chaque espece vu que le set supprime les doublons ensuite on fait un sort our trier le new tab d'espece
        },
        animauxChoisis() {
            return this.Animaux.filter(x => x.selectionne); // find renvoi un objet, element
        },

    },
    mounted() { // lecture de la db pour remplir le tab animaux
        fetch("csv_to_json.php?csv_file=animaux.csv")
            .then((rep) => rep.json())
            .then((liste) => {
                this.Animaux = liste;
                this.Animaux.forEach(x=> (x.selectionne = false)); // ajout de l"element selectionné dans notre tableau pour les checkboxes
            });
    }
});
app.mount("#app")