// ESERCIZIO PALINDOROMO

// let stringa = prompt("Inserisci una Parola")
const stringa = "anna"

let paolindromWorld = isPalindroma(stringa)

if (paolindromWorld === false) {
    console.log(`La parola ${stringa} NON è palindorma`)
} else if (paolindromWorld === true) {
    console.log(`La parola ${stringa} è palindorma`)
}

////// FUNZIONI ////////

function isPalindroma(parola) {

    /* let parolaAlContrario = ""

    for (let i = 0; i < parola.length; i++) {
        parolaAlContrario = parolaAlContrario + parola[parola.length - 1 - i]
    }

    // console.log(parola)
    // console.log(parolaAlContrario)

    for (let i = 0; i < parola.length; i++) {
        if (parola[i] !== parolaAlContrario[i]) {
            return false
        }
    }
    return true; */  // con parola al CONTRARIO
    for (let i = 0; i < Math.floor(parola.length / 2); i++) {

        if(parola[i] !== parola [parola.length - 1 - i]){
            return false;
        }
    }

    return true;

}