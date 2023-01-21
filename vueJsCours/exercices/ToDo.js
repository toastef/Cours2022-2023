const app = Vue.createApp({
    data() {
        return {
            listeDeTaches: [
                {nom: "faire du café", terminee: false},
                {nom: "écouter la radio", terminee: false}
            ],
            ToDo: "",
            filtrageDesTaches: false,
        };
    },
    methods: {
        ajouterToDo() {
            if (this.ToDo === "") return;
            if (this.listeDeTaches.findIndex(t => t.nom === this.ToDo) >= 0) return;
            this.listeDeTaches.push({nom: this.ToDo, terminee: false});
            this.ToDo = "";
        },
        list() { // Filtrage des elements du tableau en fonction de la case coché ou pas cette fonction doit renvoyer un tableau car utilisation du v-for dans le html
            if(this.filtrageDesTaches) return this.listeDeTaches.filter(t => !t.terminee );
            else return this.listeDeTaches;

            // return (this.filtrageDesTaches) ? this.listeDeTaches.filter(t => !t.terminee ) : this.listeDeTaches;
        },

    }

});
app.mount('#app');