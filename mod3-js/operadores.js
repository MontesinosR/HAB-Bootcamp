"use strict";

// OPERADORES ARITMÉTICOS

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(3 % 2);
console.log(2 ** 3);

let clicks = 0;

console.log(clicks);

clicks++;
// clicks = clicks + 1

console.log(clicks);

clicks--;
// clicks = clicks - 1;

console.log(clicks);

// OPERADORES COMPARACIÓN

// === !== == != < <= > >=

const nombre = "samu";
const edad = 18;

console.log(nombre === "samu");

console.log(nombre !== "pepe");

console.log(edad === "18"); // false
console.log(edad == "18"); // true

console.log(edad !== "18"); // true
console.log(edad != "18"); // false

console.log(edad <= 18); // true

console.log(edad < 18); // false

console.log(edad > 18); // false

console.log(edad >= 18); // true

// OPERADORES LÓGICOS
// &&. Con que haya un solo false, ya da FALSE (tienen que ser todos TRUE)

console.log(nombre === "samu" && edad > 18); // false

// ||. Con que haya un solo true, ya da TRUE

console.log(nombre === "pepe" || edad >= 18); // true

console.log(true && true && "" && true && true && true);
console.log(false || "" || 0 || "samu" || false || true);

const colorFavoritoDelFormulario = "azul";

const colorFavorito = colorFavoritoDelFormulario || "rojo";

console.log(colorFavorito);

const horasJugadasFormulario = 0;

// ??. Si el valor de la izquierda es null o undefined, nos da el valor de la derecha. Si no, nos da el de la izquierda
const horasJugadas = horasJugadasFormulario ?? "no respondió";

console.log(horasJugadas);
