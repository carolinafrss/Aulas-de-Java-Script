//Este programa contempla o funcionamento básico de uma calculadora simples com as 
//operações de soma, multiplicação, divisão e subtração
// Importa a biblioteca prompt-sync para ler dados do usuário no Node.js
const prompt = require('prompt-sync')({ sigint: true });

// Função para simular a rolagem de um dado
function rolarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

// Rola o dado e armazena o resultado
const resultadoDado = rolarDado();

// Pede ao usuário para digitar um número usando um prompt
const numeroUsuario = parseInt(prompt("O dado foi rolado. Digite seu palpite (um número de 1 a 6):"));

// Verifica se a entrada do usuário é válida
if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 6) {
  // Substitui alert() por console.log() para exibir a mensagem no terminal
  console.log("Entrada inválida! Por favor, digite um número entre 1 e 6.");
} else {
  // Exibe os resultados
  console.log(`O dado caiu no número: ${resultadoDado}`);

  // Determina o vencedor
  if (numeroUsuario > resultadoDado) {
    console.log("Você venceu! Seu número foi maior que o do dado.");
  } else if (numeroUsuario < resultadoDado) {
    console.log("Você perdeu. Seu número foi menor que o do dado.");
  } else {
    console.log("Empatou! Seu número foi o mesmo que o do dado.");
  }
}