// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
function numeroAleatorio() {
  return Math.floor((Math.random() * 100) + 501);
}

console.info("Generando número aleatorio...");
console.log(numeroAleatorio());

console.warn("Llamando a la función sin imprimir el resultado...");
numeroAleatorio();

console.error("Llamada inválida a la función");
console.log(numeroAleatorio(10));




// 10) Programa una función que reciba un número y evalúe si es capicúa o no 
//(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
function esCapicua(num) {
    if (typeof num === 'undefined') {
    
   
        console.warn('Advertencia: No se ha ingresado ningún parámetro. Debe ingresar un número.');
            return false;
          }

    if (typeof num !== 'number' || isNaN(num)) {
    
   
        console.error('Error: Debe ingresar un número válido como parámetro.');
            return false;
          }
          
    
    const inverso = num.toString().split("").reverse().join("");
        if(num == inverso){
            console.log("Es Capicua")
            return true;
        }
        else{
            console.error("No es Capicua")
            return false;
        }

    }
    console.log(esCapicua("jjk"));
    esCapicua()
    

// 11) Programa una función que calcule el factorial de un número 
//(El factorial de un entero positivo n, se define como el producto
// de todos los números enteros positivos desde 1 hasta n), 
//pe. miFuncion(5) devolverá 120.
function factorial(num) {
    //Validacion si no se ingreso parametro
    if (typeof num === 'undefined') {
    
   
        console.warn('Advertencia: No se ha ingresado ningún parámetro. Debe ingresar un número.');
            return false;
          }
    
    
    // Validación para verificar si num es un número entero positivo
    if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
      console.error("Error: El número debe ser un entero positivo.");
      return;
    }
  
    // Cálculo del factorial
    if (num === 0 || num === 1) {
      console.info("El factorial de", num, "es 1");
      return 1;
    }
  
    var resultado = 1;
    for (var i = 2; i <= num; i++) {
      resultado *= i;
    }
  
    console.warn("Advertencia: El cálculo del factorial puede ser ineficiente para números grandes.");
    console.info("El factorial de", num, "es", resultado);
    return resultado;
  }
 console.log(factorial(5));
  