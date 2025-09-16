// Este programa recebe um numero de um a vinte e mostra na tela o numero por extenso.
// Importa a biblioteca prompt-sync para ler dados do usuário no Node.js

const prompt = require('prompt-sync')({ sigint: true });
// Solicita que o usuário digite um número de 1 a 20
const numero = parseInt(prompt("Digite um número de 1 a 20: "));
// Cria uma variável para armazenar o número por extenso
let extenso;
// Usa switch para definir o texto correspondente
switch (numero) {
    case 1: extenso = "um"; break;
    case 2: extenso = "dois"; break;
    case 3: extenso = "três"; break;
    case 4: extenso = "quatro"; break;
    case 5: extenso = "cinco"; break;
    case 6: extenso = "seis"; break;
    case 7: extenso = "sete"; break;
    case 8: extenso = "oito"; break;
    case 9: extenso = "nove"; break;
    case 10: extenso = "dez"; break;
    case 11: extenso = "onze"; break;
    case 12: extenso = "doze"; break;
    case 13: extenso = "treze"; break;
    case 14: extenso = "quatorze"; break;
    case 15: extenso = "quinze"; break;
    case 16: extenso = "dezesseis"; break;
    case 17: extenso = "dezessete"; break;
    case 18: extenso = "dezoito"; break;
    case 19: extenso = "dezenove"; break;
    case 20: extenso = "vinte"; break;
    default: extenso = "Número fora do intervalo"; // Caso não seja de 1 a 20
}

// Exibe o número por extenso
console.log("Número por extenso: " + extenso);




