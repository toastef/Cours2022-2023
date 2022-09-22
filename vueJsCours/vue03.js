
const app = Vue.createApp ({
    data() {
      return {
          nom : "Michel",
          loisirs: ["sieste" , "tv", "faire la fête"],
          nouveauLoisir: "",
      };
    },
    methods: {
        ajouterLoisir: function (){
            if(this.nouveauLoisir == "") return; // si la case est vide on ne peut pas ajouter
            if(this.loisirs.findIndex(x => x === this.nouveauLoisir) >=0 ) return; // si il existe déja il ne l'ajoute pas
            this.loisirs.push(this.nouveauLoisir); // ajout du loisir au tableau
            this.nouveauLoisir =""; // remise a blanc de la case newloisir afin de pas faire d'ajout multiple
        }
    }
});
app.mount('#app'); // liaison entre le app du doc html et le app du vueJs


