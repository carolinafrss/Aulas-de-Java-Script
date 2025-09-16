// Programa calcula o tamanho da base e da altura de um retângulo, calcula a sua área
//e o seu perímetro; é informado o tamanho do lado de um quadrado, calcula a area e o perímetro do mesmo
//e dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma; e dado
// os três lados de um triangulo determinar o perímetro do mesmo.
//Utilizando o menu de opções
// Importa a biblioteca para entrada de dados no Node.js
let prompt = require('prompt-sync')({ sigint: true });

// Função principal que exibe o menu e executa a opção escolhida
function menu() {
    console.log("===== MENU DE OPÇÕES =====");
    console.log("1 - Retângulo (área e perímetro)");
    console.log("2 - Quadrado (área e perímetro)");
    console.log("3 - Círculo (área e perímetro)");
    console.log("4 - Triângulo (perímetro)");
    console.log("0 - Sair");
    let opcao = prompt("Escolha uma opção: ");
    return opcao;
}

// Função para calcular área e perímetro do retângulo
function retangulo() {
    let base = parseFloat(prompt("Digite o tamanho da base do retângulo: "));
    let altura = parseFloat(prompt("Digite o tamanho da altura do retângulo: "));
    let area = base * altura;
    let perimetro = 2 * (base + altura);
    console.log(`Área do retângulo: ${area}`);
    console.log(`Perímetro do retângulo: ${perimetro}`);
}

// Função para calcular área e perímetro do quadrado
function quadrado() {
    let lado = parseFloat(prompt("Digite o tamanho do lado do quadrado: "));
    let area = lado * lado;
    let perimetro = 4 * lado;
    console.log(`Área do quadrado: ${area}`);
    console.log(`Perímetro do quadrado: ${perimetro}`);
}

// Função para calcular área e perímetro do círculo
function circulo() {
    let raio = parseFloat(prompt("Digite o tamanho do raio do círculo: "));
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    console.log(`Área do círculo: ${area.toFixed(2)}`);
    console.log(`Perímetro do círculo: ${perimetro.toFixed(2)}`);
}

// Função para calcular perímetro do triângulo
function triangulo() {
    let lado1 = parseFloat(prompt("Digite o tamanho do primeiro lado do triângulo: "));
    let lado2 = parseFloat(prompt("Digite o tamanho do segundo lado do triângulo: "));
    let lado3 = parseFloat(prompt("Digite o tamanho do terceiro lado do triângulo: "));
    let perimetro = lado1 + lado2 + lado3;
    console.log(`Perímetro do triângulo: ${perimetro}`);
}

// Loop principal do programa
let opcao;
do {
    opcao = menu();
    switch(opcao) {
        case "1":
            retangulo();
            break;
        case "2":
            quadrado();
            break;
        case "3":
            circulo();
            break;
        case "4":
            triangulo();
            break;
        case "0":
            console.log("Saindo do programa...");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
    console.log(""); 
  // linha em branco para organizar a saída
} while(opcao !== "0");
