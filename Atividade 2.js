// Importa a biblioteca prompt-sync para entrada via teclado
const prompt = require('prompt-sync')({ sigint: true });

console.log("=== Calculadora Simples ===");

// Solicita os dois números
let numero1 = parseFloat(prompt("Digite o primeiro número: "));
let numero2 = parseFloat(prompt("Digite o segundo número: "));

// Solicita a operação
console.log("Escolha a operação:");
console.log(" +  Adição");
console.log(" -  Subtração");
console.log(" *  Multiplicação");
console.log(" /  Divisão");

let operacao = prompt("Digite a operação desejada (+, -, *, /): ");
let resultado;

switch (operacao) {
  case '+':
    resultado = numero1 + numero2;
    break;
  case '-':
    resultado = numero1 - numero2;
    break;
  case '*':
    resultado = numero1 * numero2;
    break;
  case '/':
    if (numero2 !== 0) {
      resultado = numero1 / numero2;
    } else {
      console.log("Erro: Divisão por zero não é permitida.");
      return;
    }
    break;
  default:
    console.log("Operação inválida.");
    return;
}

// Exibe o resultado
console.log(`Resultado: ${numero1} ${operacao} ${numero2} = ${resultado}`);


-----------------------------------------------------------------------


npm install prompt-sync

-------------------------------------------------------------------------


node calculadora-terminal.js

------------------------------------------------------------------------------

