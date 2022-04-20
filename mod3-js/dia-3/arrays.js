"use strict";

// const listaFrutas = "manzana, pera, naranja, sandía"

const fruta1 = "manzana";
const fruta2 = "pera";
const fruta3 = "naranja";
const fruta4 = "sandía";

// CREACIÓN ARRAYS

// new Array()

const listaFrutas = ["manzana", "pera", "naranja", "sandía"];

console.log(listaFrutas);

const resultados = [2 + 6, 8 - 5, true || false, true && true, 5 < 3];

// 8, 3, true, true, false

console.log(resultados);

// ACCEDER A DATOS DE ARRAYS

console.log(listaFrutas[2]);
console.log(listaFrutas[1 + 3 + 2 - 4]);

const posicionQueQuiereUsuario = 3;

console.log(listaFrutas[posicionQueQuiereUsuario]);

// CREAR Y MODIFICAR POSICIONES

listaFrutas[1] = "melocotón";

listaFrutas[4] = "albaricoque";

listaFrutas[10] = "mandarina";

console.log(listaFrutas);

console.log(listaFrutas[8]); // undefined

// PUSH, POP, SHIFT, UNSHIFT

// Introducimos un elemento al final del array

listaFrutas.push("plátano");

console.log(listaFrutas);

// Quitamos el último elemento del array

const ultimoElemento = listaFrutas.pop();

console.log(ultimoElemento);

console.log(listaFrutas);

// Introducimos un elemento al principio del array

listaFrutas.unshift("melón");

console.log(listaFrutas);

// Quitamos el primer elemento del array

const primerElemento = listaFrutas.shift();

console.log(primerElemento);

console.log(listaFrutas);

// SLICE, SPLICE

const coches = ["mazda", "renault", "peugeot", "citroen", "ford"];

const dosPrimerosCoches = coches.slice(0, 2);

console.log(dosPrimerosCoches);
console.log(coches);

const cochesRecortados = coches.splice(2, 2);

console.log(cochesRecortados);

console.log(coches);

// COMPARAR ARRAYS

const array1 = ["pepe", "manuel"];
const array2 = ["pepe", "manuel"];

console.log(array1 === array2); // false

const array3 = array1;

array1[0] = "marcos";

console.log(array1 === array3); // true

console.log(array1, array3); // iguales
