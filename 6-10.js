// 18) Programa una función que dada una cadena de texto cuente el número de vocales
//  y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

function contarVocalesConsonantes(cadena) {
      // Validar si se ha ingresado un parámetro
  if (typeof cadena === "undefined") {
    console.error("Error: No se ha ingresado un parámetro.");
    return;
  }

  // Validar si el parámetro es una cadena de texto
  if (typeof cadena !== "string") {
    console.error("Error: El parámetro debe ser una cadena de texto.");
    return;
  }
   
   
    cadena = cadena.toLowerCase();
  
    let vocales = 0;
    let consonantes = 0;
  
    for (let i = 0; i < cadena.length; i++) {
      let caracter = cadena[i];
  
      if (
        caracter === "a" ||
        caracter === "e" ||
        caracter === "i" ||
        caracter === "o" ||
        caracter === "u"
      ) {
        vocales++;
      } else if (caracter.match(/[a-z]/i)) {
        consonantes++;
      }
    }
  
        // Devolver el resultado en forma de cadena de texto
  return `Vocales: ${vocales}, Consonantes: ${consonantes}`;
  }

  
  // Ejemplo de uso:
  console.log(contarVocalesConsonantes("Hola Mundo"));
  







// 19) Programa una función que valide que un texto sea un nombre válido,
// pe. miFuncion("Jonathan MirCha") devolverá verdadero.
function nombreVerdadero(nombre) {
    if (typeof nombre === "undefined") {
      console.error("Error: No se ha ingresado un parámetro.");
      return false;
    }
  
    if (typeof nombre !== "string") {
      console.error("Error: El parámetro debe ser una cadena de texto.");
      return false;
    }
  
    // Validar si el texto es un nombre válido
    var patron = /^[A-Za-z\s]+$/;
    if (patron.test(nombre)) {
      console.info(`${nombre} es un nombre válido.`);
      return true; // Es un nombre válido
    } else {
      console.info(`${nombre} no es un nombre válido.`);
      return false; // No es un nombre válido
    }
  }
  
  // Ejemplo de uso
  nombreVerdadero("Jonathan MirCha"); // Output: Jonathan MirCha es un nombre válido.
  nombreVerdadero("123"); // Output: 123 no es un nombre válido.
  nombreVerdadero("María López 456"); // Output: María López 456 no es un nombre válido.
  


// 20) Programa una función que valide que un texto sea un email válido, 
//pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

function esCorreoElectronicoValido(texto) {
    if (typeof texto !== "string") {
      console.error("Error: El parámetro debe ser una cadena de texto.");
      return false;
    }
  
    var patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (patron.test(texto)) {
      console.info(`${texto} es un correo electrónico válido.`);
      return true;
    } else {
      console.info(`${texto} no es un correo electrónico válido.`);
      return false;
    }
  }
console.log(esCorreoElectronicoValido("jonmircha@gmail.com"));  
esCorreoElectronicoValido("jonmircha@gmail.com");