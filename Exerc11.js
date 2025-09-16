//Este programa determina o índice de massa corporal do individuo, pedindo na tela para o usuário digitar o peso atual, altura e o resultado é mostrado na tela.
// Importa a biblioteca prompt-sync para ler dados do usuário no Node.js
// Este programa determina o índice de massa corporal do individuo, pedindo na tela para o usuário digitar o peso atual, altura e o resultado é mostrado na tela.
// Importa a biblioteca prompt-sync para ler dados do usuário no Node.js
const prompt = require('prompt-sync')({ sigint: true });

// Solicita o peso e a altura ao usuário
let peso = parseFloat(prompt("Digite seu peso em kg (ex: 70.5):"));
let altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.75):"));

// Verifica se os valores são números válidos
if (!isNaN(peso) && !isNaN(altura) && peso > 0 && altura > 0) {
    // Calcula o IMC
    let imc = peso / (altura * altura);

    // Arredonda o IMC para duas casas decimais
    imc = imc.toFixed(2);

    // Exibe o resultado na tela
    console.log("Seu IMC é: " + imc);

    // Classificação do IMC
    if (imc < 18.5) {
        console.log("Classificação: Abaixo do peso");
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Classificação: Peso normal");
    } else if (imc >= 25 && imc <= 29.9) {
        console.log("Classificação: Sobrepeso");
    } else if (imc >= 30 && imc <= 34.9) {
        console.log("Classificação: Obesidade grau 1");
    } else if (imc >= 35 && imc <= 39.9) {
        console.log("Classificação: Obesidade grau 2");
    } else {
        console.log("Classificação: Obesidade grau 3 (mórbida)");
    }
} else {
    // Mensagem de erro se a entrada for inválida
    console.log("Por favor, insira valores numéricos válidos e positivos para peso e altura.");
}