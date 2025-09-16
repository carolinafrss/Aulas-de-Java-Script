//Este programa faz inversão de uma dada string, por exemplo, 849 por 948.
//primeiro ele utiliza o método split (") para dividir a string em um array de caractere
//Em, seguida ele usara reverse() para inverter a ordem dos elementos no array, e 
//por fim, join (") para transformar o array de caracteres de volta em uma string 
//invertida e mostrará o resultado na tela.


// Importa a biblioteca prompt-sync para ler dados do usuário no Node.js
const prompt = require('prompt-sync')({ sigint: true });

/**
 * Função para inverter uma string
 * 
 * @param {string} str - A string a ser invertida
 * @returns {string} A string invertida
 */
function inverterString(str) {
  // 1. Dividir a string em um array de caracteres
  // O método split() divide a string em um array de substrings, separadas 
  // por um separador. No caso, estamos usando '' como separador, o que 
  // significa que cada caractere da string será um elemento do array.
  const arrayDeCaracteres = str.split('');

  // 2. Inverter a ordem dos elementos no array
  // O método reverse() inverte a ordem dos elementos do array
  const arrayInvertido = arrayDeCaracteres.reverse();

  // 3. Juntar o array de volta em uma string
  // O método join() junta todos os elementos do array em uma string, 
  // separados por um separador. No caso, estamos usando '' como separador, 
  // o que significa que não haverá separador entre os caracteres.
  const stringInvertida = arrayInvertido.join('');

  // 4. Retornar a string invertida
  return stringInvertida;
}

// Exemplo de uso
const minhaString = "849";
const resultado = inverterString(minhaString);

console.log(`A string original é: ${minhaString}`);
console.log(`A string invertida é: ${resultado}`); // Saída: A string invertida é: 948