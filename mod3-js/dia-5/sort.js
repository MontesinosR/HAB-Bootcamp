// SORT

// const numeros = [2, 7, 1, 8, 9, 2];

// -1 (o menos) => a antes que b
// 0 => lo deja como está
// 1 (o más) => b antes que a

// const numerosOrdenados = numeros.sort((a, b) => {
//   if (a < b) {
//     return 1;
//   } else if (a > b) {
//     return -1;
//   } else {
//     return 0;
//   }
// });

const numerosOrdenados = numeros.sort((a, b) => {
  return a - b;
});

console.log(numerosOrdenados);

const nombres = [
  "pepe",
  "maría",
  "marcos",
  "lucas",
  "lucía",
  "jose",
  "carlos",
  "ximena",
  "laura",
];

const nombresOrdenados = nombres.sort((a, b) => {
  return a.localeCompare(b);
});

console.log(nombresOrdenados);

// const usuarios = [
//   { nombre: "Pepe", apellido: "González", edad: 38 },
//   { nombre: "Lucas", apellido: "Rodríguez", edad: 41 },
//   { nombre: "Marcos", apellido: "Fernández", edad: 26 },
// ];

usuarios.sort((a, b) => {
  return a.nombre.localeCompare(b.nombre);
});

console.log(usuarios);
