/* 
PALINDROMA
Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma.
*/

// chiedo all'utente di inserire una parola
let userWord = prompt('Inserisci una parola.');
let reverseWord = isPalindrome(userWord);

/**
 * ### Reverse a word inputed by the user
 * @param {string} str - user input word
 * @returns {string} reverse of the input word
 */

function isPalindrome(str) {
    let strReverse = str.split('').reverse().join('');
    return strReverse;
};

if (userWord === reverseWord) {
    console.log('La parola è palindroma.');
} else {
    console.log('La parola non è palindroma.');
};

