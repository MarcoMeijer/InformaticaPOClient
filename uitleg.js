
// MET CONTROL + / KAN JE VAN EEN GESELECTEERD GEDEELTE DE COMMENTS WEG/TERUG HALEN
// ALS ERGENS EEN * BIJ STAAT BETEKENT HET DAT HET NIET PERSE NODIG IS OM TE SNAPPEN, MAAR WEL HANDIG KAN ZIJN

// =============================== //
// variabelen aanmaken
// =============================== //

// let x = 2; // "block scoped" is bijna altijd een betere keuze dan var
// var x = 2; // "globally scoped"
// const x = 3; // const is constant, je kan het nooit veranderen.

// verschil globally scoped en block scoped

// if(true) {
//   let x = 2; // x bestaat alleen in de context van deze if statement, daarna wordt het "verwijdert"
// }
// console.log(x); // "x is not defined"

// if(true) {
//   var x = 2; // x blijft voor altijd bestaan
// }
// console.log(x); // "2"

// =============================== //
// arrays en objecten
// =============================== //

// let a = [2,4,5,6];
// console.log(a) // "[2,4,5,6]"

// a.push('janneman');
// console.log(a) // "[2,4,5,6,'janneman']"

// let obj = { x: 4, y: -2};
// console.log(obj); // "{ x: 4, y: -2 }"
// console.log(obj.x); // "4"



// =============================== //
// for, while
// =============================== //

// for (let i=0; i<10; i++) { // print de getallen 0 tot 10 (dus exclusief 10). Dit print in totaal dus wel 10 getallen.
//   console.log(i);
// }

// let a = ['a', 4, 'janneman'];
// for(let x of a) { // loop door de waardes met of
//   console.log(x);
// }

// for(let x in a) { // loop door de indicies met in (posities)
//   console.log(x);
// }

// let obj = { x: 'a', y: 'b'};
// for(let x in obj) { // loop door de variable namen van object met in
//   console.log(x);
// }

// let x = 10;
// while(x >= 0) {
//   console.log(x);
//   x -= 1;
// }

// for(x; y; z) {
//   ...
// }
// is het precies als:
// {
//   x;
//   while(y) {
//     ...
//     z;
//   }
// }
// De "{}" haakjes zitten om de x, omdat x niet buiten deze "scope" gebruikt kan worden



// =============================== //
// functies en lambdas
// =============================== //

// function add(x, y) { // zo maak je functies aan
//   return x+y;
// }
// console.log(add(4, 7)); // "11"

// let add = (x,y) => {return x+y;} // op deze manier mag je ook functies aanmaken, dit heet een "lambda"
// console.log(add(4, 7)); // "11"

// console.log( // lambdas mag je ook aan maken zonder naam
//   ((x,y) => x+y) // dit is dan bijvoorbeeld de definitie (als het maar 1 regel is mag je de {} en de return weg laten bij een lambda)
//   (4, 7) // en dit zijn de argumenten waarmee het direct wordt aangeroepen
//   )

// function applyFunction(f, x, y) { // je mag ook functies doorgeven aan andere functies, lambdas zijn eigenlijk variablen
//   return f(x,y);
// }
// let result = applyFunction((x,y) => x+y, 4, 7); // hiervoor zijn lambda's het meest handig
// console.log(result); // "11"



// =============================== //
// * async functies zie https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
// =============================== //



// =============================== //
// Classes en Objects
// =============================== //

// Classes zijn interfaces om objecten mee aan te maken.
// Dit betekent dat als je een class aanmaakt, je verteld wat een bepaald groep objecten is en wat ze kunnen doen.

// class Rolex { // zo maak je een class aan (ik begin classes altijd met een hoofdletter, maar dat hoeft niet)
//   constructor(price) { // de constructor is een functie waarmee je een object kan aanmaken
//     this.price = price; // in de constructor kan je de variabelen van een object creëren
//     this.weight = 2;
//   }

//   printTime() { // classes kan je ook functies geven (ook wel "methods" genoemd)
//     if(this.price < 5.0) {
//       console.log("De batterij is leeg.");
//     } else {
//       console.log("BART NIET ZO FLEXEN!!");
//     }
//   }
// };

// let rolex = new Rolex(399); // zo maak je een object van een class aan
// rolex.printTime(); // en zo kan je een method aanroepen van een class
// let rolexReference = rolex; // LET OP: dit maakt geen kopie van het object
// console.log(rolex.weight); // dit print normaal 2
// rolexReference.weight = 10; // maar als je dit veranderd
// console.log(rolex.weight); // veranderd dit ook

// class PepsiCola extends Rolex { // je kan op deze manier een uitbreiding van een class maken
//   constructor() {
//     super(32); // zo noem je de constructor van de "base class" aan(in dit geval is base class Rolex). De prijs wordt nu dus 32.
//     this.battery = 43;
//   }

//   printTime() { // dit overschrijft de printTime functie van de base class. As je deze method niet had toegevoegd gebruikte het nog de oude method
//     super.printTime(); // zo kan je functies van de base class aanroepen.
//     console.log(`De batterij is ${this.battery}%.`); // op deze manier kan je makkelijk variabelen in een string doen (LET OP DE QUOTES`` niet '')
//   }
// };

// let pepcock = new PepsiCola();
// pepcock.printTime(); // gebruikt de nieuwe printTime functie
// console.log(pepcock.weight); // je kan nog steeds bij de variablen van de base class



// =============================== //
// Classes en Objects
// =============================== //
