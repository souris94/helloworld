const prompt = require("prompt-sync")()

let nom = prompt("quel est ton prenom ")
let number = Number(prompt("combien de fois la phrases tu veux que la phrase s'affiche "))

function saluer(nom) {
    console.log("bonjour " + nom)
}

for(let i = 0; i < number; i++) {
    saluer(nom)
}
