/* 
PARI E DISPARI
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

let userEvenOrOdd = prompt("Scegli pari o dispari");
let userNumber = parseInt(prompt('Scegli un numero da 1 a 5.'));
let pcNumber = pcRandNumber(1, 5);
let numberSum = userNumber + pcNumber;

/* if (userEvenOrOdd == "pari") {
    console.log("L'utente ha scelto pari, il computer sarà dispari.");
} else {
    console.log("L'utente ha scelto dispari, il computer sarà pari");
}; */

function pcRandNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function evenOrOdd(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    };
};

if (evenOrOdd(numberSum) == true && userEvenOrOdd === "pari") {
    console.log(`L'utente ha vinto! La somma dei numeri è ${numberSum}. Il computer ha scelto il numero ${pcNumber}`);
} else if (evenOrOdd(numberSum) == false && userEvenOrOdd === "pari") {
    console.log(`Il computer ha vinto! La somma dei numeri è ${numberSum}. Il computer ha scelto il numero ${pcNumber}`);
} else if (evenOrOdd(numberSum) == false && userEvenOrOdd === "dispari") {
    console.log(`L'utente ha vinto! La somma dei numeri è ${numberSum}. Il computer ha scelto il numero ${pcNumber}`);
} else {
    console.log(`Il computer ha vinto! La somma dei numeri è ${numberSum}. Il computer ha scelto il numero ${pcNumber}`);
}



