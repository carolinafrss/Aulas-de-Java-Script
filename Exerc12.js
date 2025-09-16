//Este programa contempla o funcionamento básico de uma calculadora simples com as 
//operações de soma, multiplicação, divisão e subtração
// Importa a biblioteca prompt-sync para ler dados do usuário no Node.js
const prompt = require('prompt-sync')({ sigint: true });

// Pede ao usuário para inserir o primeiro número
const numero1 = parseFloat(prompt('Digite o primeiro número:'));

// Pede ao usuário para escolher a operação
const operacao = prompt('Digite a operação desejada (+, -, * ou /):');

// Pede ao usuário para inserir o segundo número
const numero2 = parseFloat(prompt('Digite o segundo número:'));

let resultado;

// Usa uma estrutura 'if-else if' para verificar a operação e realizar o cálculo
if (operacao === '+') {
  resultado = numero1 + numero2;
} else if (operacao === '-') {
  resultado = numero1 - numero2;
} else if (operacao === '*') {
  resultado = numero1 * numero2;
} else if (operacao === '/') {
  // Trata o caso de divisão por zero
  if (numero2 !== 0) {
    resultado = numero1 / numero2;
  } else {
    resultado = 'Erro: Divisão por zero não é permitida.';
  }
} else {
  // Trata o caso de operação inválida
  resultado = 'Operação inválida. Por favor, use +, -, * ou /.';
}

// Mostra o resultado final no terminal do Node.js
console.log(`O resultado da operação é: ${resultado}`);