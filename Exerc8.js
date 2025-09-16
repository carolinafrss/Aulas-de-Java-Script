// Este programa faz a leitura de cinco numeros e mostra na tela a media deles.
// Importa a biblioteca prompt-sync para ler dados do usuário no Node.js
const prompt = require('prompt-sync')({ sigint: true });

// Solicita que o usuário digite um número de 1 a 20
const numero = parseInt(prompt("Digite um número de 1 a 20: "));
// Solicita cinco números ao usuário
var numero1 = parseFloat(prompt("Digite o primeiro número:"));
var numero2 = parseFloat(prompt("Digite o segundo número:"));
var numero3 = parseFloat(prompt("Digite o terceiro número:"));
var numero4 = parseFloat(prompt("Digite o quarto número:"));
var numero5 = parseFloat(prompt("Digite o quinto número:"));

// Calcula a soma dos números
var soma = numero1 + numero2 + numero3 + numero4 + numero5;

// Calcula a média dividindo a soma pelo número de elementos (5)
var media = soma / 5;

// Exibe o resultado na tela
console.log("A média dos cinco números é: " + media);
alert("A média dos cinco números é: " + media);



