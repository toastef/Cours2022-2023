const app = Vue.createApp({
        data() { // data est une fonction qui return des données
            return {
                listePays: [],
                filtre: "",
                codeChoisi: null,

            };
        },
        methods: {},
        computed: {
            paysChoisis() {
                return this.listePays.find((p) => p.alpha2P === this.codeChoisi); // find renvoi un objet, element
            },
            listePaysTries() {
                // création d'une copie de la liste pour l'affichage par ordre alpha car le sort modifie le tab d'origine
                if (this.filtre.trim().length > 0) {
                    return this.listePays.filter((pays) => pays.nomFrP.toLowerCase().includes(this.filtre.trim().toLowerCase()))
                } else {
                    return [...this.listePays].sort((a, b) => a.nomFrP.localeCompare(b.nomFrP));
                }

            },

        },
        mounted() { // fonction qui va s'executer apres le montage(l'affichage) de la page ,de l'app
            fetch("listeTousPays.php") // requête vers le serveur vers le fichier reprennant les élements récupéré dans le fichier php
                .then((rep) => rep.json()) // transformation de la réponse du serveur
                .then((liste) => {
                    // utilisation de la réponse transformée
                    for (const pays of liste) {
                        this.listePays.push(pays); // on ajoute a ce qui existe déja
                    }
                    //this.listePays = liste; // on écrase les éléments et on les remplaces par une nouvelle liste
                });
        }
        ,

    })
;

app.mount("#app");

