/**
 * Dado un array de booleanos, los true serán
 * pacientes infectados y los false serán pacientes sanos. Los pacientes
 * infectados, contagian a los que tengan a su izquierda y a su derecha
 *
 * EJEMPLO:
 * Si tenemos este array de pacientes:
 * [true, false, true, false, false, false, true, true]
 *
 * Deberá retornar este:
 * [true, true, true, true, false, true, true, true]
 *
 * EXTRA: Los pacientes infectados se curan
 *
 * EJEMPLO:
 * Si recibe este array de pacientes:
 * [true, false, true, false, false, false, true, true]
 *
 * Deberá retornar este:
 * [false, true, false, true, false, true, false, false]
 *
 */

"use strict";

const pacientes = [true, false, true, false, false, false, true, true];

for (const infectados in pacientes) {
  if (infectados === true) {
    infectados[+1] = true;
  } else {
    infectados[+1] = false;
  }
}
