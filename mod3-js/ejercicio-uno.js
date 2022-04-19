"use strict"

// Recibir por prompt estos datos: a, b y operador (+, -, *, /)

let a = +prompt("Escribe un número");
let b = +prompt("Escribe otro número")
let operador = prompt("Escribe un operador entre los siguientes (+, -, *, /)")

// Mostrar por consola el resultado de la operación

console.log(`${a} ${operador} ${b}`)

// Ejemplo: a => 2 ; b => 6 ; operador => "#" / resultado = 12

if (operador === "+") {
    console.log(`Resultado: ${a + b}`);
  } else if (operador === "-") {
    console.log(`Resultado: ${a - b}`);
  } else if (operador === "*") {
    console.log(`Resultado: ${a * b}`);
  } else if (operador === "/") {
    console.log(`Resultado: ${a / b}`);
  } else {
    console.log("Operador no válido");
}

// Extra: Si no se indica un operador válido (+, -, *, /), saltará un mensaje poºr consola diciendo "operador no válido"
