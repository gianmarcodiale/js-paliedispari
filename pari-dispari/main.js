/* 
PARI E DISPARI
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

let userNumber = parseInt(prompt('Scegli un numero da 1 a 5.'));
let pcNumber = pcRandNumber(1, 5);
let numberSum = userNumber + pcNumber;
console.log("L'UTENTE HA IL DISPARI");
console.log("IL COMPUTER HA IL PARI");

function pcRandNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function evenOrOdd (number) {
    if (number % 2 != 0) {
        return true;
    } else {
        return false;
    };
};

if (evenOrOdd(numberSum)) {
    console.log(`L'utente ha vinto. Il computer ha scelto il numero ${pcNumber}. La somma è ${numberSum}`);
} else {
    console.log(`Il computer ha vinto. Il computer ha scelto il numero ${pcNumber}. La somma è ${numberSum}`);
};