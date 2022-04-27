"use strict";

// PROBLEMA

// const suma = (a, b) => {
//   let resultado;

//   setTimeout(() => {
//     resultado = a + b;
//   }, 2000);

//   return resultado;
// };

// console.log(suma(2, 2));

// SOLUCIÓN CON CALLBACKS

// Definimos la función suma
// const suma = (a, b, callback) => {
//   let resultado;

//   setTimeout(() => {
//     // Dos segundos después, obtenemos el resultado
//     resultado = a + b;

//     // Llamamos al callback pasándole el resultado obtenido
//     callback(resultado);
//   }, 2000);
// };

// // Se ejecuta la función suma y se inicia el timeout de 2 segundos
// suma(2, 2, (resultado) => {
//   console.log(resultado);
// });

// // Log de hola
// console.log("hola");

// // Log de pepe
// console.log("pepe");

// suma(3, 5, (resultado) => {
//   console.log("El resultado fue:" + resultado);

//   console.log("Lo multiplico x2:" + resultado * 2);
// });

// SOLUCIÓN CON PROMESAS

const suma = (a, b) => {
  const promesa = new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      const error = new TypeError("A y B deben de ser números");
      reject(error);
    } else {
      setTimeout(() => {
        resolve(a + b);
      }, 2000);
    }
  });

  return promesa;
};

const promesaSuma = suma(2, 2);

promesaSuma
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.error(error.message);
  });

console.log("maría");

console.log("pepe");
