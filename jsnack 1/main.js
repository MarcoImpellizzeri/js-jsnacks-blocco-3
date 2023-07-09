/*    
    Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
    Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando 
    la somma degli elementi è minore di 50.
*/

let numbers = [];
let sumOfElements = 0;

while (sumOfElements < 50) {
    let number = parseInt(prompt("Inserisci un numero:"));
    numbers.push(number);
    sumOfElements += number;
}

console.log("La somma degli elementi è maggiore o uguale a 50.");
console.log(numbers);