/* Esta é uma atividade para apresentar a média de três números em JavaScript */
/* Adiciona a biblioteca para utilizar o teclado no Node.js - prompt-sync */
let prompt = require('prompt-sync')({ sigint: true });

/* Solicita que o usuário digite os três números */
let numero1 = parseFloat(prompt("Digite o primeiro número: "));
let numero2 = parseFloat(prompt("Digite o segundo número: "));
let numero3 = parseFloat(prompt("Digite o terceiro número: "));

/* Calcula a média */
let media = (numero1 + numero2 + numero3) / 3;

/* Exibe os valores digitados e o resultado da média */
console.log("Números digitados:");
console.log("Número 1:", numero1);
console.log("Número 2:", numero2);
console.log("Número 3:", numero3);

console.log("A média dos três números é:", media.toFixed(2));








