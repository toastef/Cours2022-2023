let equipe = [{nom: "Dubois", age:25},{nom:"Dupont",age :25},{nom: "Leroy", age: 45},{nom: "Legrand", age :65},{nom:"Leblanc",age:53}];

equipe.push("lenoir") ;   // va ajouter l'element au tab et modifier celui-ci



equipe.pop();  // va retirer le dernier element du tab

//equipe.splice(1,0,"Tonton"); // va intercaler ou suprimer un element et le remplacer par l'element intégré en param du splice()  position 1 retire 0 elemeny et rajoute "tonton"

equipe.slice(); //va renvoyer un element du tableau


let array2 = [1,10000,25,37];

array2.shift()// va retirer le premier element du tab .
array2.sort((el1,el2) => el1 > el2); // va permettre de trier le tab par ordre alphabétique, si pas de param par défault ordre alpha. Si on veut trier des num il faut intégrer une fct flechée

equipe.sort((a,b) => a.age-b.age); // va trier modifier les elements du tab en fonction de l'age + jeune au plus viex
console.log(equipe);

let vieux = equipe.filter(a=> a.age > 60) // filter renvoi un NOUVEAU tab
console.log(vieux);

//let equipeDansUnAn = equipe ;
//equipeDansUnAn.map(a => a.age++);// va modifier l'age dans element du tab et renvoyer un new tab mais modifie aussi le tab d'origine donc faire attention
//console.log(equipeDansUnAn);

equipe.forEach(a=>a.age++)  // va modifier l'age et y ajoutant un an
console.log(equipe);


equipe.reduce()// permet de faire du calc par exemple la moyenne des ages ou le total des éléments

// let somme = equipe.reduce((accumulateur, element) => accu = accu + elem.age, valeur de départ )