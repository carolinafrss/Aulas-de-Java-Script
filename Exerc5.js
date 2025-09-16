// Este programa escreve na tela um numero digitado pelo usuario e mostra na tela 
//  se ele é primo ou não.
// Importa a biblioteca prompt-sync para leitura do teclado no Node.js
let prompt = require('prompt-sync')({ sigint: true });

// Pede para o usuário digitar um número
let numero = parseInt(prompt("Digite um número: "));

// Função que verifica se um número é primo
function ehPrimo(n) {
  if (n <= 1) return false; // Números menores ou iguais a 1 não são primos
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false; // Se achar divisor, não é primo
  }
  return true; // Se não achar divisor, é primo
}

// Mostra o número digitado
console.log("Você digitou:", numero);

// Mostra se é primo ou não
if (ehPrimo(numero)) {
  console.log("O número é primo!");
} else {
  console.log("O número NÃO é primo.");
}

