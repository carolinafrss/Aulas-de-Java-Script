// Escreva um programa em JavaScript que leia um número e imprima se este número é par ou ímpar.
// Usa a biblioteca prompt-sync para leitura do teclado no Node.js
const prompt = require('prompt-sync')({ sigint: true });

// Solicita que o usuário digite um número
let numero = parseFloat(prompt("Digite um número: "));

// Função que verifica se o número é par ou ímpar
function verificarParImpar(numero) {
    if (isNaN(numero)) {
        return "Valor inválido. Digite um número.";
    }
    if (numero % 2 === 0) {
        return "O número é par.";
    } else {
        return "O número é ímpar.";
    }
}

// Exibe o resultado usando o número digitado
console.log(verificarParImpar(numero));
