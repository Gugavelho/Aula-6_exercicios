
# Instru��es

Antes de come�ar o exerc�cio, baixe o arquivo *zip* acima. Ele tem toda a configura��o que passamos em aula para relacionar os arquivos `index.html` e `index.js`. 

Para os exerc�cios de hoje, voc� precisa mexer **apenas no arquivo** `index.js`

Os exerc�cios de hoje s�o divididos em interpreta��o e escrita de c�digo. Para os de interpreta��o, coloque as respostas em coment�rios de c�digo. J�, nos de escrita, lembre-se de imprimir no console os resultados.

> **ATEN��O**
> 
> N�o � permitido utilizar estruturas e sintaxes de c�digo ainda n�o ensinadas no curso. Para um melhor aproveitamento para si mesmo, force-se a utilizar s� o que foi passado a voc�s.

---

### Exerc�cios de interpreta��o de c�digo

Tente responder os exerc�cios dessa se��o sem executar o c�digo. 
Se ficar muito dif�cil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
---

#### 1. Analise o programa abaixo e diga o que ser� impresso no console, SEM EXECUTAR o programa.

```
let a = 10
let b = 10

console.log(b)

b = 5

console.log(a, b)
```
-console vai imprimir 10.
-console vai imprimir 10, 5.
Atribuimos o valor de a = 10 e b =10 tambem, por ser colocado com a funçaõ let eles podem ser alterados, após isso rodamos no console pedindo para o console para ele nos mostrar b, que é 10, seguidamente re-atribuido o valor de b para 5, por fim pedimos que o console nos mostre a e b, ou seja, ele imprime 10, 5. 
---

#### 2. Analise o programa abaixo e diga o que ser� impresso no console, SEM EXECUTAR o programa.

```
let a = 10
let b = 20
let c = a

b = c
a = b

console.log(a, b, c)
```
-console vai imprimir 10,10,10.

a=10
b=10
c=10

---

#### 3. Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as vari�veis.

Lembre-se que devemos escolher nomes significativos e usar o padr�o *camelCase*. Alem disso, os nomes n�o podem come�ar com n�meros ou caracteres especiais.

```
let p = prompt("Quantas horas voc� trabalha por dia?")
let t = prompt("Quanto voc� recebe por dia?")

alert(`Voce recebe ${t/p} por hora`)
```
-o console vai imprimir t dividido por p dizendo o quanto você recebe por hora. 
---

### Documenta��o

[JavaScript - Vari�veis](https://www.w3schools.com/js/js_variables.asp)
