// 5) Programa una función que invierta las palabras de una cadena de texto,
// pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const invertirPalabra = cadena => {
    if(typeof cadena !== "string") {
        return "Error: Se requiere una cadena de texto valida";
    }   
    else if (cadena.trim() === ""){
        return "Error: Es una cadena vacia";
    }
    const palabras = cadena.split(" ");
    const palabraInvertida = palabras.map(palabra => palabra.split("").reverse().join(""));
    
    return palabraInvertida.join(" ");

}
console.log(invertirPalabra("Hola Mundo")); 
console.log(invertirPalabra("OpenAI Chatbot")); 
console.log(invertirPalabra(123)); 
console.log(invertirPalabra("")); 






// 6) Programa una función para contar el número de veces que se repite una palabra
// en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

function palabrasRepetidas(texto, palabra) {
    // Dividir el texto en palabras individuales
    const palabras = texto.split(' ');
  
    // Contador para almacenar el número de repeticiones
    let contador = 0;
  
    // Recorrer todas las palabras y compararlas con la palabra proporcionada
    for (let i = 0; i < palabras.length; i++) {
      if (palabras[i] === palabra) {
        contador++;
      }
    }
  
    // Devolver el número de repeticiones encontradas
    return contador;
  }
console.log(palabrasRepetidas("hola mundo adios mundo", "mundo"))  







// 7) Programa una función que valide si una palabra o frase dada,
// es un palíndromo (que se lee igual en un sentido que en otro),
// pe. mifuncion("Salas") devolverá true.


function palindromo(string) {
    // Validar si el parámetro es una cadena válida
    if (typeof string !== 'string') {
      console.error('Error: El parámetro debe ser una cadena de texto');
      return false;
    }
  
    let palabraInvertida = string.split("").reverse().join("");
    
    // Validar si es un palíndromo
    if (string === palabraInvertida) {
      console.log(`"${string}" es un palíndromo.`);
      return true;
    } else {
      console.log(`"${string}" no es un palíndromo.`);
      return false;
    }
  }
  console.log(palindromo("salas"));




// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
// pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")
// devolverá  "1, 2, 3, 4 y 5.

//   function dejarNum(array) {
//     let numeros = [];
//     for(let i = 0; i < array.length; i++){
//         if(!isNaN(array[i])){
//             numeros.push(array[i]);
//         }
//         else {
//             console.warn(`El elemento en el índice ${i} no es un número válido: ${array[i]}`);
//           }
        
//     }
//     return numeros.join("");
//   }
  

//   console.log(dejarNum("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));

  function dejarNum(array) {
    
  
    const numeros = [];
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === "number" || (!isNaN(array[i]) && array[i] !== "")) {
        numeros.push(array[i]);
      } else {
        console.warn(`El elemento en el índice ${i} no es un número válido: ${array[i]}`);
      }
    }
  
    return numeros.join("");
  }
  console.log(dejarNum("xyz1, x2yz, x3yz, xy4z y xy5z", "xyz"));