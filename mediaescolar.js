// Esta é uma atividade para apresentar a média de tres notas onde consiste se o aluno está Aprovado ou Reprovado
//Adiciona a biblioteca para utilizar o teclado no Node.js - prompt-sync 


let prompt = require('prompt-sync')({ sigint: true });

// Solicita que o usuário digite os três notas  

let nota1 = parseFloat(prompt("Digite o primeiro número: "));
let nota2 = parseFloat(prompt("Digite o segundo número: "));
let nota3 = parseFloat(prompt("Digite o terceiro número: "));

// Calcula a média 
let mediafinal = (nota1 + nota2 + nota3) / 3;

// Exibe os valores digitados e o resultado da média 
console.log("Notas digitadas:");
console.log("Nota 1:", nota1);
console.log("Nota 2:", nota2);
console.log("Nota 3:", nota3);

let nota 
// Exibe os valores digitados e o resultado
if (nota > 7) {
  console.log("Aprovado"); // Esta mensagem será exibida
}  else

if (nota < 7) {
  console.log("Reprovado"); // Esta mensagem também será exibida
}

console.log("O Aluno está", mediafinal.toFixed(2));


