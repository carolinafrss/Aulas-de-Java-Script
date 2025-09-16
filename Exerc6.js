// Este programa gera na tela mil números inteiros aleatórios.
// Importa a biblioteca para leitura/entrada no Node.js (não obrigatória aqui, mas útil se quiser usar prompt)
const prompt = require('prompt-sync')({ sigint: true });

// Cria um array para armazenar os números aleatórios

let numerosAleatorios = [];

// Laço para gerar 1000 números aleatórios
for (let i = 0; i < 1000; i++) {
    // Math.random() gera um número decimal entre 0 e 1
    // Multiplicamos por 100 para criar um número até 99,999
    // Math.floor arredonda para baixo, transformando em número inteiro
    let numero = Math.floor(Math.random() * 1000); // números entre 0 e 999
    numerosAleatorios.push(numero); // adiciona o número ao array
}

// Exibe todos os números gerados na tela
console.log("Mil números aleatórios:");
console.log(numerosAleatorios);



