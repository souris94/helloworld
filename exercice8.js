const prompt = require ("prompt-sync")()

let nom = prompt("quel est ton prenom ")

console.log("bonjour " + nom)

let mdp = prompt("mot de passe ")

if (mdp == "Marcelo") {
    console.log ("mdp ok")   
} else {
    console.log ("mdp no ok")
}