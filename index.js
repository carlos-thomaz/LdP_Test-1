//variaveis_______________________________________________
let niveis = ["muito abaixo do peso", "abaixo do peso", "peso normal", "acima do peso", "Obesidade Grau I", "Obesidade Grau II", "Obesidade Grau III"];

let pessoas = ["Jesus","Maria", "José"]
let massas = [100, 68, 79]
let alturas = [1.81, 1.5, 1.68]

//Funções_______________________________________________
function calcularIMC (massa, altura){

let imc = massa / (altura**2)
return imc
}

function verificarNivel (imc){

  let nivel=0

if (imc < 17){
nivel = 0
}
else if (imc < 18.5){
  nivel = 1
}
else if (imc < 25){
  nivel = 2
}
else if (imc < 30){
  nivel = 3
}
else if (imc < 35){
  nivel = 4
}
else if (imc < 40){
  nivel = 5
}
else {
  nivel = 6
}
return nivel
} 
//Execução______________________________

for (let indice=0; indice < pessoas.length; indice++){
let pessoa = pessoas[indice]
let massa = massas[indice]
let altura = alturas [indice]

let imc = calcularIMC(massa,altura)
let nivel = verificarNivel (imc)

console.log ("Nome:" + pessoa)
console.log ("Peso:" + massa)
console.log ("Altura:"+ altura)
console.log ("IMC:" + imc.toFixed(2))
console.log ("nivel:" + niveis[nivel])
console.log (" ")
}