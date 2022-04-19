"use strict";

// Recibiremos por prompt el nombre del usuario y un idioma ("ES", "EN", "GL")

let nombre = prompt("Introduce tu nombre")
let idioma = prompt("Introduce tu idioma => ES, EN o GL")

// Saldrá un console.log saludando al usuario en el idioma seleccionado. Si el idioma no coincide con los indicados, saldrá un mensaje "Idioma selccionado no disponible".

// USAR SWITCH

switch (nombre, idioma) {
  case nombre, "ES":
    console.log(`Hola ${nombre}`);
    break;

  case nombre, "EN":
    console.log(`Hello, ${nombre}`);
    break;

  case nombre, "GL":
    console.log(`Ola, ${nombre}`);
    break;

  default:
    console.log("Idioma selccionado no disponible");
}
