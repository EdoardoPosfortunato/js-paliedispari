// ESERCIZIO PARI e DISPARI

// const parDispariStr = "pari";
// const numberUtente = 4;

const parDispariStr = prompt("Inserisci pari o dispari");
const numberUtente = prompt("Inserisci un numero da 1 a 5");


const numberPC = randomaNumber()

let sum = parseInt(numberUtente) + parseInt(numberPC)
console.log(typeof sum); 

console.log(`Il numero scelto dall'Utente è ${numberUtente} e quello del PC è ${numberPC}`)

let ParoODispariDispari = isParoODispari(sum)
console.log(`La loro somma è ${sum} ed è ${ParoODispariDispari}`)
console.log(`l'utente aveva inserito ${parDispariStr}`)

if(ParoODispariDispari === parDispariStr){
    console.log("Ha vinto l`utente")
} else {
    console.log("Ha vinto il PC")
}



///// FUNCTIONS /////

function randomaNumber() {
    return Math.floor((Math.random() * 5 + 1))
}

function isParoODispari(numero) {
    if(numero % 2 === 0){
        return "pari"
    } else {
        return "dispari"
    }
}

