const app = Vue.createApp({
        data() { // data est une fonction qui return des données
            return {
                listeCommune: [],
                filtre: "",
                codeChoisi: null,

            };
        },
        methods: {},
        computed: {
            paysChoisis() {
                return this.listeCommune.find((c) => c.Commune === this.codeChoisi); // find renvoi un objet, element
            },
            listeCommuneFind() {
                if (this.filtre.trim().length > 0) {
                    return this.listeCommune.filter((c) => c.Commune.toLowerCase().includes(this.filtre.trim().toLowerCase()))
                } else {
                    return [...this.listeCommune].sort((a, b) => a.Commune.localeCompare(b.Commune));
                }
            },
        },
        mounted() {
            fetch("codePostaux.php")
                .then((rep) => rep.json())
                .then((liste) => {
                    this.listeCommune = liste;
                });
        },
    })
;

app.mount("#app");

