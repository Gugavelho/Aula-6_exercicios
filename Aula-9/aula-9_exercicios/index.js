/*
DESAFIO-1
*/

/*
let nome = prompt("qual seu nome?")
let cor = prompt("qual sua cor favorita?")

const fraseConcatenada = 'a cor favorita de ' + nome + ' é ' + cor
const fraseTemplate =  `a cor favorita de ${nome} é ${cor}`

console.log(fraseConcatenada)
console.log(fraseTemplate)
*/

/*
DESAFIO-2
*/

/*
let frase = prompt("Escreva uma frase")
const maiusculo = frase.toUpperCase()
const trocar = frase.replaceAll("o", "i")
const tamanho = frase.length

console.log(maiusculo)
console.log(trocar)
console.log(tamanho)
*/
/*
DESAFIO-3
*/
/*
const racasDeCachorro =  ["Husky siberiano", "golden retriever", "pitbull", "Dogue alemão", "akita"]
let numeroDigitado = prompt("Digite um número de 0 á 4.")

numeroDigitado = Number(numeroDigitado)

console.log(`Você escolheu a raça: ${racasDeCachorro[numeroDigitado]}`)
*/

/*
DESAFIO-4
*/

let lista =[1, 2, 3, 4, 5, 6]

lista.length
console.log(lista)
console.log(lista.length)

lista.push(7)

console.log(lista)
console.log(lista.length)

lista.splice(3, 2)

console.log(lista)
console.log(lista.length)