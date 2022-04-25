"use strict";

// const numeros = [2, 7, 1, 8, 9, 2];

// const mapear = (callback) => {
//   const arrayResultados = [];

//   for (const numero of numeros) {
//     const resultado = callback(numero);

//     arrayResultados.push(resultado);
//   }

//   return arrayResultados;
// };

// const restar3 = (numero) => {
//   return numero - 3;
// };

// console.log(mapear(restar3));

// console.log(
//   mapear((numero) => {
//     return numero * 2;
//   })
// );

// console.log(
//   mapear((numero) => {
//     return numero * 3;
//   })
// );

// MAP

const numeros = [2, 7, 1, 8, 9, 2];

const numerosMasDos = numeros.map((numero) => {
  return numero + 2;
});

console.log(numerosMasDos);

const usuarios = [
  { nombre: "Pepe", apellido: "González", edad: 38 },
  { nombre: "Lucas", apellido: "Rodríguez", edad: 41 },
  { nombre: "Marcos", apellido: "Fernández", edad: 26 },
];

const usuariosConNombreCompleto = usuarios.map((usuario) => {
  const nombreCompleto = usuario.nombre + " " + usuario.apellido;

  return { nombreCompleto: nombreCompleto, edad: usuario.edad };
});

console.log(usuariosConNombreCompleto);

// [
//   { nombreCompleto: "Pepe González", edad: 38 },
//   { nombreCompleto: "Lucas Rodríguez", edad: 41 },
//   { nombreCompleto: "Marcos Fernández", edad: 26 },
// ];
