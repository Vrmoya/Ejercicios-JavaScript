// 21) Programa una función que dado un array numérico devuelve otro array
// con los números elevados al cuadrado, 
//pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

function arregloCuadrado(array){
    if (!Array.isArray(array) || array.length === 0) {
        console.error("Error: El parámetro 'array' debe ser un arreglo no vacío.");
        return;
      }
    
      if (array.some((elemento) => typeof elemento !== 'number')) {
        console.error("Error: El arreglo debe contener solo números.");
        return;
      }


    let newArray = array.map((elemento) => Math.pow(elemento, 2));
    return newArray;
}
console.log(arregloCuadrado([1,4,5]));
console.log(arregloCuadrado([]));
console.log(arregloCuadrado("hjkdsa"));







// 22) Programa una función que dado un array devuelva el número mas alto
// y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) 
//devolverá [99, -60].
function mayorMenor(array){

    if (!Array.isArray(array) || array.length === 0) {
        console.error("Error: El parámetro 'array' debe ser un arreglo no vacío.");
        return;
      }
    
      if (array.some((elemento) => typeof elemento !== 'number')) {
        console.error("Error: El arreglo debe contener solo números.");
        return;
      }


let menor = Math.min(...array);
let mayor = Math.max(...array);
let resultado = [mayor, menor];
return resultado;
}

console.log(mayorMenor([1, 4, 5, 99, -60])); // Debería devolver [99, -60]
console.log(mayorMenor([10, 20, 30, 40, 50])); // Debería devolver [50, 10]
console.log(mayorMenor([-5, -10, -15, -20])); // Debería devolver [-5, -20]



// 23) Programa una función que dado un array de números devuelva
// un objeto con 2 arreglos en el primero almacena los números pares
// y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) 
// devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

function parImpar(array){
    if (!Array.isArray(array) || array.length === 0) {
        console.error("Error: El parámetro 'array' debe ser un arreglo no vacío.");
        return;
      }
    
      if (array.some((elemento) => typeof elemento !== 'number')) {
        console.error("Error: El arreglo debe contener solo números.");
        return;
      }
      
    let newObject = {
        pares: [],
        impares: [],
    }
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            newObject.pares.push(array[i])
        } else if(array[i] % 2 === 1){
            newObject.impares.push(array[i])

        }
        
    }
    return newObject;

}
console.log(parImpar([1,2,3,4,5,6,7,8,9,0]));
