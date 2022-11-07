const app = Vue.createApp({
    data(){
        return {
            personne: [
                {nom: 'Albert', age:21},
                {nom:'Jean', age:54 },
                {nom:'Francois', age:64},
            ],
            message:"",
            persChoisie:"",
        }
    },

    methods: {
        saluer(p){
            console.log("bonjour " + p.nom);
            this.message = "bonjour " + p.nom ;
            this.persChoisie = p.nom;
        }
    },
    computed: {
        salutation(){
            if(this.persChoisie == null) return"";
            return "Hello "+ this.persChoisie;
        }
    }
});
app.mount("#app");