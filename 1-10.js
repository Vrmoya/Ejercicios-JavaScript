// 1) Programa una función que cuente el número de caracteres de una cadena de texto,
// pe. miFuncion("Hola Mundo") devolverá 10.
function cadena(frase){
    
    return frase.length;  
    
}

console.log(cadena("Hola mundo"))

// 2) Programa una función que te devuelva el texto recortado según el número
//de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

function recortarTexto(cadena, numCaracteres) {
    return cadena.slice(0, numCaracteres);
  }
  
  console.log(recortarTexto("Hola mundo", 4))  

// 3) Programa una función que dada una String te devuelva un Array de textos
// separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
function palabraSeparada(string, separador){
    return string.split(separador);
}
console.log(palabraSeparada("hola que tal", " "))

// 4) Programa una función que repita un texto X veces,
// pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo
function stringRepetida(string,num){
    return string.repeat(num);
}

console.log(stringRepetida("Hola mundo", 3));