// 12) Programa una función que determine si un número es primo
// (aquel que solo es divisible por sí mismo y 1) o no,
// pe. miFuncion(7) devolverá true.
function esPrimo(num){
    if (typeof num === 'undefined') {
    
   
        console.warn('Advertencia: No se ha ingresado ningún parámetro. Debe ingresar un número.');
            return false;
          }

    if (typeof num !== 'number' || isNaN(num)) {
    
   
        console.error('Error: Debe ingresar un número válido como parámetro.');
            return false;
          }
    if (num < 2){
        console.info("No es un numero primo")
        return false;
    }
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            console.info("No es un numero primo")
            return false;
        }
        else{
            console.info("Es un numero primo")
            return true;
        }
    }
}
console.log(esPrimo(17))
esPrimo(7);




// 13) Programa una función que determine si un número es par o impar,
// pe. miFuncion(29) devolverá Impar.
function parImpar(numero){
    if (typeof numero === 'undefined') {
    
   
        console.warn('Advertencia: No se ha ingresado ningún parámetro. Debe ingresar un número.');
            return false;
          }

    if (typeof numero !== 'number' || isNaN(numero)) {
    
   
        console.error('Error: Debe ingresar un número válido como parámetro.');
            return false;
          }

    if(numero % 2 === 0){
       return "Es un numero Par"
    } else if(numero % 2 === 1){
        return "Es un numero Impar"
    }

}
console.log(parImpar());
parImpar(7)


// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa,
// pe. miFuncion(0,"C") devolverá 32°F.

function convertirTemperatura(temperatura, unidad) {
    if (unidad === "C") {
      // Convertir de Celsius a Fahrenheit
      var resultado = (temperatura * 9/5) + 32;
      console.info(temperatura + "°C equivale a " + resultado + "°F");
      return resultado + "°F";
    } else if (unidad === "F") {
      // Convertir de Fahrenheit a Celsius
      var resultado = (temperatura - 32) * 5/9;
      console.info(temperatura + "°F equivale a " + resultado + "°C");
      return resultado + "°C";
    } else {
      console.error("Unidad de temperatura no válida. Por favor, utiliza 'C' para Celsius o 'F' para Fahrenheit.");
      return "Unidad de temperatura no válida. Por favor, utiliza 'C' para Celsius o 'F' para Fahrenheit.";
    }
  }
  
  // Ejemplo de uso
  console.warn(convertirTemperatura(0, "C")); // Output: 0°C equivale a 32°F, 32°F
  console.warn(convertirTemperatura(32, "F")); // Output: 32°F equivale a 0°C, 0°C
  console.warn(convertirTemperatura(25, "C")); // Output: 25°C equivale a 77°F, 77°F
  console.warn(convertirTemperatura(100, "F")); // Output: 100°F equivale a 37.77777777777778°C, 37.77777777777778°C
  console.error(convertirTemperatura(50, "K")); // Output: Unidad de temperatura no válida. Por favor, utiliza 'C' para Celsius o 'F' para Fahrenheit.
  