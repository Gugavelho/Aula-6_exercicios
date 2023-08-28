
/**
 * 
 * Crie uma fun��o para cada uma das opera��es b�sicas (soma, subtra��o, multiplica��o e divis�o).
 * 
 * Pe�a para o usu�rio inserir dois n�meros e chame essas 4 fun��es com esses valores inseridos pelo usu�rio sendo o argumento. Por fim, mostre no console o resultado das opera��es:
 * 
 * Exemplo:
 * 
 * N�meros inseridos: 30 e 3
 * Soma: 33
 * Diferen�a: 27
 * Multiplica��o: 90
 * Divis�o: 10
 * 
 * Dica: lembre-se de converter a entrada do usu�rio para n�mero antes de fazer os c�lculos.
 * 
**/

let numero1 = prompt ("Digite um número.")
let numero2 = prompt ("Digite outro número.")

numero1 = Number(numero1)
numero2 = Number(numero2)

function soma(numero1, numero2){
   let resultado = numero1 + numero2
    return resultado
}

console.log(soma(numero1,numero2))

function subtração(numero1, numero2){
    let resultado2 = numero1 - numero2
    return resultado2
}

console.log(subtração(numero1, numero2))

function multiplicacao(numero1,numero2){
    let resultado3 = numero1 * numero2
    return resultado3
}

console.log(multiplicacao(numero1, numero2))

function divisao(numero1,numero2){
    let resultado4 = numero1 / numero2
    return resultado4
}

console.log(divisao(numero1,numero2))