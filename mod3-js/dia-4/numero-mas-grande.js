/**
 *
 * Crea una función a la que se le pase como argumento un array de números
 * y retorne el mayor.
 *
 * EJEMPLO: Si llamamos a getGreatestNum([4, 10, 6, 16, 1]), debe retornar 16
 */

"use strict";

const getGreatestNum = [4, 10, 6, 16, 1]

const mayorNumero = (array) => {

  let mayor = ""
  for (const n of array) {
    if (n > mayor) {
      mayor = n;
    }
  }
  return mayor;
}

console.log(mayorNumero(getGreatestNum))
