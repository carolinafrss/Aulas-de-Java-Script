// Este programa calcula a média aritmética de três notas de um aluno.
// Se a média for maior ou igual a 7, o aluno é aprovado. Caso contrário, ele poderá fazer a recuperação.

// Importa a biblioteca prompt-sync para ler dados do usuário no Node.js
const prompt = require('prompt-sync')({ sigint: true });

// Solicita as três notas ao usuário
const nota1 = parseFloat(prompt("Digite a primeira nota: "));
const nota2 = parseFloat(prompt("Digite a segunda nota: "));
const nota3 = parseFloat(prompt("Digite a terceira nota: "));

// Verifica se as entradas são números válidos
if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
  console.log("Por favor, digite notas válidas (números).");
} else {
  // Calcula a média das notas
  const media = (nota1 + nota2 + nota3) / 3;

  // Arredonda a média para duas casas decimais
  const mediaArredondada = media.toFixed(2);

  // Exibe a média
  console.log(`Sua média é: ${mediaArredondada}`);

  // Verifica a condição do aluno e exibe o resultado
  if (media >= 7) {
    console.log("Parabéns! Você está APROVADO.");
  } else {
    console.log("Você está REPROVADO.");
    console.log("Você poderá fazer a recuperação.");
  }
}