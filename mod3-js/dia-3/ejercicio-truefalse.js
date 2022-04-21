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
const pacientesInfectados = [];

for (let i = 0; i < pacientes.length; i++) {
  const paciente = pacientes[i];

  if (pacientesInfectados[i] === undefined) {
    pacientesInfectados[i] = paciente;
  }

  if (paciente) {
    if (i === 0) {
      pacientesInfectados[i + 1] = false;
    } else if (i === pacientes.length - 1) {
      pacientesInfectados[i - 1] = false;
    } else {
      pacientesInfectados[i - 1] = false;
      pacientesInfectados[i + 1] = false;
    }
  }
}

console.log(pacientesInfectados);
