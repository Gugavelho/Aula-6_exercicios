/*
console.log(3 + 4)
console.log(3 * 5 / 2)
console.log((5 - 4) * -1)
console.log()
*/

/*
let a = true
let b = false
let c = true

console.log("a e b", a && b)
console.log("b e c", b && c)
console.log("a e c", a && c)
console.log("a,b e c", a && b && c) 
*/

/*
let a = true
let b = false
let c = true

console.log("a e b", a || b)
console.log("b e c", b || c)
console.log("a e c", a || c)
console.log("a,b e c", a || b || c) 
*/

const nome = prompt("Qual seu nome?")
let anoN = prompt("Em que ano você nasceu?")
let anoA = prompt("Em que anos estamos?")


let anoAt = Number(anoA)
let anoN2 = Number(anoN)

let verificacao = (anoN2 >= 18)

console.log("Seu nome é", nome)
console.log("É maior de idade", verificacao)
console.log("Você tera", 2050 - anoN2, "anos em 2050")