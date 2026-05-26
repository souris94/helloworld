const prompt = require("prompt-sync")()

function addition(a,b) {
    console.log(a + b)
}

let num1 = Number(prompt("donne moi le premier chiffre "))
let num2 = Number(prompt("donne moi le deuxieme chiffre "))

addition(num1,num2)
