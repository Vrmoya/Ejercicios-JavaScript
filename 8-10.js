// 4) Programa una función que dado un arreglo de números devuelva
//  un objeto con dos arreglos, el primero tendrá los numeros ordenados
// en forma ascendente y el segundo de forma descendiente, pe.
// miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], 
//desc: [8,7,7,6,5] }.

function ascendenteDescendente(array){
    if (!Array.isArray(array) || array.length === 0) {
        console.error("Error: El parámetro 'array' debe ser un arreglo no vacío.");
        return;
      }
    
      if (array.some((elemento) => typeof elemento !== 'number')) {
        console.error("Error: El arreglo debe contener solo números.");
        return;
      }
    let newObject = {
        asc: array.slice().sort(function(a,b){
            return a - b;
        }),
      desc: array.slice().sort(function(a,b){
        return b - a;
      }),
    }
    return newObject;
}

console.log(ascendenteDescendente([7,5,7,8,6]));





// 25) Programa una función que dado un arreglo de elementos, 
// elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true])
// devolverá ["x", 10, 2, "10", true].
function eliminarDuplicado(array){
     // Validar si el parámetro array no es un arreglo
  if (!Array.isArray(array)) {
    console.log("El parámetro debe ser un arreglo.");
    return;
  }

  // Validar si el arreglo está vacío
  if (array.length === 0) {
    console.log("El arreglo está vacío.");
    return; 
  }

  let nuevoArreglo = array.filter((valor, indice) => {
    return array.indexOf(valor) === indice;
  });
  return nuevoArreglo;
    }
console.log(eliminarDuplicado(["x", 10, "x", 2, "10", 10, true, true]))







// 26) Programa una función que dado un arreglo de números obtenga el promedio,
// pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

function promedio(array) {
    // Verifica si el arreglo está vacío
    if (array.length === 0) {
      console.log('El arreglo está vacío');
      return;
    }
  
    // Verifica si todos los elementos del arreglo son números enteros
    if (!array.every((num) => typeof num === 'number' && Number.isInteger(num))) {
      console.log('El arreglo debe contener solo números enteros');
      return;
    }
  
    // Calcula el promedio
    const suma = array.reduce(function(acc, val) {
      return acc + val;
    }, 0);
    const promedio = suma / array.length;
  
    return promedio;
  }
  
  console.log(promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
  