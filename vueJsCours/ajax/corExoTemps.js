const app = Vue.createApp({
    data() {
        return {
            nomJoueur: "",
            etat: 'I', // I = inscription , J = jeux, R = resultat
            calculs: [],
            operateurs: "+-*/",
            operateursChoisis:[],
            resultat: {
                nomj: this.nomJoueur,
                nbbrep: this.nbRepOk,
                nbcalc : this.nbCalcul,
            }
        };
    },
    methods: {
        start() {
            if (this.etat !== "I") return;
            if (this.nomJoueur.trim() === "") return;
            if(this.operateursChoisis.length < 1) return;
            setTimeout(this.affichageResult, 15000); // après 15 sec affichage des resultats
            this.nouveauCalcul();
            this.etat = 'J';
        },
        nouveauCalcul() {
            let nboperateur = this.operateursChoisis.length;
            let operateur = this.operateursChoisis[nbAlea(0,nboperateur -1)];
            this.calculs.push(calculAlea(operateur));
        },
        affichageResult() {
            this.etat = "R";
        },
        nouvellePart() {
            if (this.etat !== "R") return
            this.nomJoueur = "";
            this.calculs = [];
            this.etat = 'I';
        },


    },
    computed: { // methode qui va se mettre en marche que si il  y a une modif du tab
        nbCalcul(){
            return this.calculs.length;
        },
        nbRepOk(){
            return this.calculs.filter(c => c.rep === c.repJoueur).length;
        }
    },
    mounted() {
        fetch("corExoTemps.php", {
            method : "POST",
            body : JSON.stringify(this.resultat)
            }
        )
    },

});

app.mount("#app");

function calculAlea(operator) {
    switch (operator) {
        case '+' :
            op1 = nbAlea(0, 20);
            op2 = nbAlea(0, 20);
            rep = op1 + op2;
            break;
        case '-' :
            op1 = nbAlea(0, 20);
            op2 = nbAlea(0, 20);
            if (op1 < op2) [op1, op2] = [op2, op1];
            rep = op1 - op2;
            break;
        case '*' :
            op1 = nbAlea(0, 20);
            op2 = nbAlea(0, 20);
            rep = op1 * op2;
            break;
        case '/' :
            op1 = nbAlea(0, 10);
            op2 = nbAlea(0, 10);
            rep = op1 * op2;
            [op1, op2, rep] = [rep, op1, op2]; // inversion du calcul pour être sur d'avoir toujour un nb entier
            break;
        default: // si l'operateur n'est pas valid dans le calcul
            return null;

    }
    return {op1: op1,operator: operator,op2 :op2,rep: rep};
}

function nbAlea(min, max) {
    let taille = max - min + 1;
    if (isNaN(taille)) return NaN;
    if (taille <= 0) return NaN;
    return Math.floor((Math.random() * (taille)) + min);
}