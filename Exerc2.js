// Programa que lê três números e mostra o maior deles
// Importa a biblioteca para ler do teclado no Node.js
let prompt = require('prompt-sync')({ sigint: true });

// Solicita que o usuário digite três números
let numero1 = parseFloat(prompt("Digite o primeiro número: "));
let numero2 = parseFloat(prompt("Digite o segundo número: "));
let numero3 = parseFloat(prompt("Digite o terceiro número: "));

// Função para verificar o maior número
function verificar(numero1, numero2, numero3) {
    if (numero1 === numero2 && numero2 === numero3) {
        return "Os três números são iguais.";
    }

    let maior = numero1;

    if (numero2 > maior) {
        maior = numero2;
    }

    if (numero3 > maior) {
        maior = numero3;
    }

    return "O maior número é " + maior;
}

// Chama a função e exibe o resultado
console.log(verificar(numero1, numero2, numero3));
