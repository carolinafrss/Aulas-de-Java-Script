/* Esta é uma atividade para apresentar a média de tres notas onde consiste se o aluno está Aprovado ou Reprovado*/
* Adiciona a biblioteca para utilizar o teclado no Node.js - prompt-sync */
/* Correção da Atividade 1*/

let prompt = require('prompt-sync')({ sigint: true });

/* Solicita que o usuário digite os três números */
let numero1 = 12;
let numero2 = 15;
let numero3 = 5;

/* Calcula a média */
let media = Number(numero1) + Number(numero2) + Number(numero3) / 3;

/* Exibe os valores digitados e o resultado da média */
console.log("A média dos três números é:", media.toFixed(4));








