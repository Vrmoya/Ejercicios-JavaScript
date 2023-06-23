// 15) Programa una función para convertir números de base binaria a decimal
// y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
function convertirBase(numero, base) {
    // Validar la base
    if (base !== 2 && base !== 10) {
      console.error('La base debe ser 2 o 10');
      return null;
    }
  
    // Validar el número binario
    if (base === 2) {
      if (!/^[01]+$/.test(numero)) {
        console.error('El número binario solo debe contener 0 y 1');
        return null;
      }
    }
  
    // Validar el número decimal
    if (base === 10) {
      if (isNaN(numero)) {
        console.error('El número decimal no es válido');
        return null;
      }
    }
  
    // Convertir de binario a decimal
    if (base === 2) {
      const decimal = parseInt(numero, 2);
      console.info(`El número binario ${numero} es igual a ${decimal} en base 10`);
      return decimal;
    }
  
    // Convertir de decimal a binario
    if (base === 10) {
      const binario = (numero >>> 0).toString(2);
      console.info(`El número decimal ${numero} es igual a ${binario} en base 2`);
      return binario;
    }
  }
  
  // Ejemplo de uso
  console.warn(convertirBase('100', 2)); // Output: El número binario 100 es igual a 4 en base 10
  console.warn(convertirBase('1010', 2)); // Output: El número binario 1010 es igual a 10 en base 10
  console.warn(convertirBase('A2', 2)); // Output: El número binario A2 es igual a null en base 10
  console.warn(convertirBase('10', 5)); // Output: La base debe ser 2 o 10
  convertirBase(1000,2);


// 16) Programa una función que devuelva el monto final después de aplicar
// un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

function montoFinal(precio, descuento){
    if (isNaN(precio) || isNaN(descuento)) {
        console.error("Error: Los valores deben ser numéricos.");
        return;
      }
    
      if (descuento < 0 || descuento > 100) {
        console.warn("Advertencia: El descuento debe estar entre 0 y 100.");
      }

    let valorDescuento = (precio * descuento)/100;
    let total = precio - valorDescuento;
    console.info(`El descuento aplicado es del ${descuento} porciento, por lo que el monto a abonar es de ${total} pesos`);
    return total;

}
console.log(montoFinal(1000,20));




// 17) Programa una función que dada una fecha válida
// determine cuantos años han pasado hasta el día de hoy, 
//pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

function calcularTiempo(aaaa, mm, dd) {
    // Validar si se proporcionaron todos los parámetros
    if (typeof aaaa === 'undefined' || typeof mm === 'undefined' || typeof dd === 'undefined') {
      console.error('Error: Debes proporcionar el año, mes y día.');
      return;
    }
  
    // Validar si los parámetros son números enteros
    if (!Number.isInteger(aaaa) || !Number.isInteger(mm) || !Number.isInteger(dd)) {
      console.error('Error: Los parámetros deben ser números enteros.');
      return;
    }
  
    // Validar si la fecha es válida
    var fechaProporcionada = new Date(aaaa, mm - 1, dd);
    var esFechaValida = fechaProporcionada.getFullYear() === aaaa &&
      fechaProporcionada.getMonth() === mm - 1 &&
      fechaProporcionada.getDate() === dd;
  
    if (!esFechaValida) {
      console.error('Error: Fecha inválida.');
      return;
    }
  
    // Obtener la fecha actual
    var fechaActual = new Date();
  
    // Calcular la diferencia en milisegundos entre las dos fechas
    var diferenciaMilisegundos = fechaActual - fechaProporcionada;
  
    // Convertir la diferencia en milisegundos a años, meses, días y horas
    var milisegundosEnUnAnio = 1000 * 60 * 60 * 24 * 365.25; // Consideramos el año bisiesto
    var aniosPasados = Math.floor(diferenciaMilisegundos / milisegundosEnUnAnio);
    var mesesPasados = Math.floor((diferenciaMilisegundos % milisegundosEnUnAnio) / (1000 * 60 * 60 * 24 * 30.44));
    var diasPasados = Math.floor((diferenciaMilisegundos % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    var horasPasadas = Math.floor((diferenciaMilisegundos % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
    // Devolver el resultado
    console.info('Han pasado:', aniosPasados, 'años,', mesesPasados, 'meses,', diasPasados, 'días y', horasPasadas, 'horas.');
  }
  
  // Ejemplo de uso:
  calcularTiempo(1979, 12, 20); // Salida: Han pasado: 39 años, 1 meses, 30 días y 14 horas. (considerando que la fecha actual es el 22 de junio de 2023)
  
  // Ejemplo de uso con errores:
  calcularTiempo(1984, 4); // Salida: Error: Debes proporcionar el año, mes y día.
  calcularTiempo(1984, 'abril', 23); // Salida: Error: Los parámetros deben ser números enteros.
  calcularTiempo(1984, 13, 45); // Salida: Error: Fecha inválida.
  