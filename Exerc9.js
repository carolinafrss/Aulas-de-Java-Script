// Este programa faz a media aritmética de tre notas de um aluno, se a média for maior ou igual a 7 vai mostrar a nota e se o aluno está aprovado
// se a media for menor que 7 vai mostrar a nota e se o aluno esta reprovad

// Importa a biblioteca prompt-sync para ler dados do usuário no Node.js
const prompt = require('prompt-sync')({ sigint: true });

let nota1 = parseFloat(prompt("Informe a primeira nota:"));
let nota2 = parseFloat(prompt("Informe a segunda nota:"));
let nota3 = parseFloat(prompt("Informe a terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;

console.log("Sua média é: ", media.toFixed(2));

if (media >= 7) {
  console.log("Você foi aprovado!");
} else {
  
  (media < 7)
  console.log("Você foi reprovado.");
}
