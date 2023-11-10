/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}
// non entra mai nel ciclo poiche' i non e' maggiore di 5
// SOLUZIONE
for (let i = 0; i < 5; i++) {
    console.log(i);
}



// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}
// l operatore = stabilisce il valore della variabile num a 0, riportera sempre 5.
// SOLUZIONE
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}



// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}
// Virgole al posto dei punti e virgola
// SOLUZIONE
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}

displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
// 1_Sul ciclo for non serve assegnare -1 al valore di length, sarebbe servito nel caso in cui la condizione espressa avesse avuto come operatore <=.
// 2_Punto e virgola alla fine del parametro per l' incrementale di i.
// 3_Mancanza di una variabile che ottenga come valore il numero corrispondente alla posizione dell' array.
// 4 e 5_ Nella condizione dobbiamo definire se il numero corrente ha come resto un valore === 0 e non assegnare al resto dell' array numbers(?) il valore di 0.
// 6_Non dobbiamo pushare index ma l' elemento corrente del ciclo.
// 7_Return deve essere esterno al ciclo.


function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const curNum = numbers[i];
        if (curNum % 2 === 0) {
            evenNumbers.push(curNum);
        }
    }
    return evenNumbers;
}
displayEvenNumbers();