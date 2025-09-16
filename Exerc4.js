// Este Programa a formula para conversao de Fahrenheit para Celsius onde C=5/9(F-32)
// onde faz a leitura de um valor de temperatura em Fahrenheit e exibe em Celsius
// Importa a biblioteca prompt-sync para leitura do teclado no Node.js
let prompt = require('prompt-sync')({ sigint: true });

// Solicita que o usuário digite a temperatura em Fahrenheit
let fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit: "));

// Calcula a temperatura em Celsius usando a fórmula
let celsius = (5 / 9) * (fahrenheit - 32);
// Exibe o resultado
console.log(`${fahrenheit}°F correspondem a ${celsius.toFixed(2)}°C`);
