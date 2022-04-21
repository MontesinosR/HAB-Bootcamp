"use strict";

/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Dado un array de frutas, genera un nuevo objeto en el que cada fruta pase a ser una
 * nueva propiedad del objeto. El valor asignado a esta propiedad debe ser el nº de veces
 * que la fruta se repite en el array.
 *
 *      const fruitBasket = ['naranja', 'naranja', 'limón', 'pera', 'limón', 'plátano', 'naranja'];
 *
 * Para el array anterior, el objeto resultante debería ser:
 *
 *      const fruits = {
 *          naranja: 3,
 *          limón: 2,
 *          pera: 1,
 *          plátano: 1
 *      };
 */

const fruits =  [
  "naranja",
  "pera",
  "manzana",
  "pera",
  "sandía",
  "naranja",+
  "manzana",
  "melocotón",
]

const fruitsCount = {};

for (const fruit of fruits) {
  // Si fruit no está en fuitsCount, añadirla como key con value +1.
  // Si fuit ya existe en fuitsCount, añadir +1 al key ya existente.
  if (fruit in fruitsCount) {
    fruitsCount[fruit] += 1; // Si fuera fruitsCount.fruit estaría buscando una key que literalmente se llame "fruit", para que corresponda con el key que hemos creado a partir del array es necesario usar corchetes.
  } else {
    fruitsCount[fruit] = 1 // Usando los corchetes se crea el key con el string de la iteración.
  }
}

console.log(fruitsCount);
