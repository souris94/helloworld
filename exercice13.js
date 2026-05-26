for (let i = 0; i < 5; i++) {
    console.log("bonjour")
}

for (let i = 1; i < 11; i++) {
    console.log(i)
}

function bonjour() {
    console.log("bienvenue")
}

bonjour()

const prompt = require("prompt-sync")()

let noma = prompt("quel est ton prenom ")

function prenom(nom) {
    console.log("salut " + nom)
}

prenom(nom)

